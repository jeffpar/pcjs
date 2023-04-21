---
layout: page
title: "PC-SIG Diskette Library (Disk #2020)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2020/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2020"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLODRAW DISK 3 OF 3 (912 AND 913 ALSO)"

    FLODRAW is a graphics editor that produces black and white full-page
    diagrams.  It is designed to handle symbols quickly and easily and is
    ideal for documentation such as flowcharts, organization charts, system
    diagrams and other symbol-oriented materials.  It combines text and
    graphics and is equipped with a basic graphics editor for lines and
    circles, plus pixel editing.
    
    FLODRAW has symbol libraries for flowcharts, HIPO charts, and electric
    diagrams.  Design your own symbols, save them, and combine them into new
    libraries, or add them to an existing library.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2020.TXT

{% raw %}
```
Disk No: 2020                                                           
Disk Title: FloDraw disk 3 of 3 (912 and 913 also)                      
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: FloDraw                                                  
Author Version: 2.11A                                                   
Author Registration: $25.00                                             
Special Requirements: 320K RAM, CGA, and a printer.                     
                                                                        
FLODRAW is a graphics editor that produces black and white full-page    
diagrams.  It is designed to handle symbols quickly and easily and is   
ideal for documentation such as flowcharts, organization charts, system 
diagrams and other symbols-oriented materials.  It combines text and    
graphics and is equipped with a basic graphics editor for lines and     
circles, plus pixel editing.                                            
                                                                        
FLODRAW has symbol libraries for flowcharts, HIPO charts, and electric  
diagrams.  Design your own symbols, save them, and combine them into new
libraries, or add them to an existing library.                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLODRAW.DOC

{% raw %}
```










			       F L O D R A W   2

				   




				  User Manual
		     





























				  George Freund
				  P. O. Box 203
				Mentor, OH  44061

								     i



				Copyright Notice

	 Copyright (c) 1987-1988 by George Freund.  All rights reserved.   





				   Disclaimer
				    
	 The author is not responsible for damages resulting from the use
	 of this program.





				   Trademarks
				    
	 Hewlett Packard LaserJet Plus, Hewlett Packard LaserJet Series II
	 are trademarks of Hewlett Packard. 
    
	 IBM Personal Computer, IBM PC/XT, IBM PS/2, IBM PC-DOS, IBM
	 Proprinter are trademarks of the International Business Machines
	 Corporation.



				 ASP Membership

	 FLODRAW is produced by a member of the Association of Shareware
	 Professionals (ASP).  ASP wants to make sure that the shareware
	 principle works for you.  If you are unable to resolve a
	 shareware-related problem with an ASP member by contacting the
	 member directly, ASP may be able to help.  The ASP Ombudsman can
	 help you resolve a dispute or problem with an ASP member, but
	 does not provide technical support for member's products. Please
	 write to the ASP Ombudsman at P.O. Box 5786, Bellevue, WA 98006
	 or send a Compuserve message via easyplex to ASP Ombudsman
	 70007,3536

								     ii
	 
	 
	 
			       Table of Contents
			       
			       
 
	Chapter 1.  Introduction to FLODRAW                    1.1

	      Introducing FLODRAW                              1.1
	      System Requirements                              1.2
	      Files Included with FLODRAW                      1.3
	  
	 
	Chapter 2.  Getting Started                            2.1

	      Installation                                     2.1
	      DEMO - a FLODRAW Tutorial                        2.3
	      Drawing Your First Flowchart with DEMOFLOW       2.3
	      Examples of FLODRAW Diagrams                     2.4
	      Examples of FLODRAW Libraries                    2.4
	      Help Screens                                     2.5
	      Starting the Program                             2.5
	      Customizing FLODRAW.OPT                          2.6
	      FLODRAW File Naming Conventions		       2.6
	      Backup Your Disks                                2.7
	
 
	Chapter 3.  Entry Menu                                 3.1

	      Entry Screen                                     3.1
		 Load New File               [F1]              3.1
		 Preview Diagram             [F2]              3.1
		 Save File with Same Name    [F3]              3.2
		 Save File with New Name     [F4]              3.3
		 Print Current File          [F6]              3.3
		 Print Flagged Files         [F7]              3.3
		 Setup Options               [F8]              3.4
		 Load New Symbol Library     [F9]              3.6
		 Change Drive/Directory     [F10]              3.6
		 Switch Files            [Alt-F1]              3.6
		 Erase a Page File        [Alt-E]              3.7
		 Help Screen              [Alt-H]              3.7
		 Exit to DOS                [ESC]              3.7

								     iii
	 
	 
	
	Chapter 4.  TEXT Mode Editing                          4.1

	      The Edit Screen                                  4.1
		 Ruler Lines                                   4.1
		 Menu Lines                                    4.1
		 Error Line                                    4.1
		 ESC Key                                       4.1
	      Text Mode Editing                                4.1
		 Cursor                                        4.1
		 Cursor Movement                               4.1
		 Drawing with the Cursor                       4.2
		 Using the Tab Keys                            4.2
		 Moving Around the Diagram                     4.2
	      Functions Available in TEXT Mode                 4.2
		 Switching to DRAW Mode      [F1]              4.3
		 Preview Diagram             [F2]              4.3
		 Save Function               [F3]              4.3
		    Save Symbol                                4.3
		    Save File                                  4.3
		 Font Menu                   [F4]              4.4
		    Font Mode                                  4.4
		    Font TEXT Mode                             4.4
		    Font DRAW Mode                             4.4
		    Font CHAR Mode                             4.4
		 Auto Functions              [F5]              4.5
		 Line Functions              [F6]              4.5
		    Arrowheads                                 4.5
		    Line                                       4.5
		 Block Functions             [F7]              4.5
		    Mirror                                     4.5
		    Rotate                                     4.5
		    Move                                       4.6 
		    Copy                                       4.6
		    Delete                                     4.6
		 Merge File                  [F8]              4.6
		    Merge Upper Left Corner                    4.6
		    Merge Center                               4.6
		 UNDO                        [F9]              4.7
		 Symbol Library             [F10]              4.7
		    Symbols                                    4.7
		    Undo                                       4.7
		    More Symbols                               4.8
		 Switch Files            [Alt-F1]              4.8
		 Multiple Page Diagram Key Commands            4.8
		    Load Next Page                             4.8
		    Load Previous Page                         4.8
		    Insert Next Page                           4.9
		 HELP                     [Alt-H]              4.9

								     iv
	
	 
	 
	Chapter 5.  DRAW Mode Editing                          5.1
	
	      Cursor                                           5.1
	      Cursor Movement                                  5.1
	      Drawing with the Cursor                          5.1
	      Functions Available in DRAW Mode                 5.1
		 Switch to TEXT Mode         [F1]              5.1
		 Preview Diagram             [F2]              5.1
	 
		 Save Function               [F3]              5.1
		 Save File                                     5.1
		 Arrowhead Function          [F4]              5.2
		 Circle Function             [F5]              5.2
		 Line Function               [F6]              5.3
		 Block Functions             [F7]              5.4
		 Move                                          5.4
		 Copy                                          5.4
		 Delete                                        5.4
		 UNDO                        [F9]              5.4
		 HELP                     [Alt-H]              5.5
		 
		 
	Chapter 6.  Using FLODRAW                              6.1
	      
	      Using Tab Keys                                   6.1
	      Sketch Your Diagrams First                       6.2
	      Starting Your Diagram with a Template            6.2
	      Drawing Organization Charts                      6.3
	      Printing Diagrams                                6.4
	      Printer Support                                  6.4
	 
	 
	Chapter 7.  Symbol Libraries                           7.1
	      
	      What are Symbols and Symbol Libraries?           7.1
	      Creating Symbols                                 7.1
	      Editing Symbols                                  7.2
	      Creating Libraries                               7.3
	      Maintaining Libraries                            7.4

	 
	Appendix A.  Error Messages			       A.1

	Appendix B.  User Supported Software		       B.1

	Appendix C.  Registration Form			       C.1

	Chapter 1.  Introduction to FLODRAW                          1.1
	 
	 
				Introducing FLODRAW
    
    FLODRAW is a flowchart drawing program that prints full page black and
    white diagrams.  It will help you draw flowcharts, system diagrams,
    electrical diagrams, and any other type of diagram that has repeated
    symbols.  
	 
    FLODRAW is easy to learn.  A menu line prompts you at every screen. 
    And help screens are just a key press away.  
    
    FLODRAW has a TEXT mode that makes drawing lines and symbols as easy as
    entering text.  FLODRAW will generate lines or arrows between symbols
    to help you draw diagrams like flowcharts.  FLODRAW also has a DRAW
    mode for drawing circles and lines from point to point.  And in DRAW
    mode you can edit any dot on the diagram.
    
    FLODRAW comes with symbol libraries for flowcharts, HIPO charts, and
    electric diagrams.  You can design your own symbols, save them, and
    combine them into new libraries, or add them to existing libraries.  
	 
    FLODRAW documents can be saved, printed, and edited again.  All FLODRAW
    document files are compressed to take up a minimum amount of space on
    your disk.  FLODRAW supports the following three formats for printing
    documents.
	      
	 1. Portrait  8.5 x 11 inches
	 2. Landscape 11 x 8.5 inches (printed sideways on 8.5 x 11)
	 3. Large landscape 16 x 11 inches (printed on two 8.5 x 11)

    Portrait and landscape are terms that refer to how a rectangular page
    is  oriented.  Portraits are upright. Landscapes are sideways.

	 Introduction to FLODRAW                                     1.2

    
				 System Requirements
	 
    FLODRAW requires: 
	 
	 - An IBM Personal Computer, PC-XT, PC-AT, PS/2 or close 
	   compatible.  Some "compatible" PC's may not be compatible 
	   enough to run FLODRAW.

	 - 384k of memory.  

	 - A color graphics adapter with either a color or black and
	   white monitor.  FLODRAW does not support the EGA, although 
	   FLODRAW will run on an EGA in CGA mode.  FLODRAW may work 
	   with a Hercules board depending on the software you use to
	   emulate a CGA.

	 - Any version of IBM PC-DOS from 2.0 through 3.3 or a 
	   compatible DOS.

	 - FLODRAW has printer drivers to support the following
	   printers.

	       EPSON MX, FX, and LQ
	       IBM Proprinter 
	       HP LaserJet Plus, HP LaserJet II
	       Toshiba P321, P341, and P351
	       Gemini Star 10-X

	 Introduction to FLODRAW                                     1.3

    
		       Files Included in the FLODRAW System
	 
    FLODRAW 2 is distributed with one program disk that contains  all the
    files you need to work with FLODRAW.  These files are described below
    by category.
	 
		      Text Files (Read with DOS TYPE Command)
	 
		  READ_ME  is an introduction to FLODRAW and contains    
			   instructions for running the tutorials. 
	     REGISTER.FRM  is the registration form for FLODRAW.
    
				 Executable Files
	 
	      FLODRAW.EXE  is the FLODRAW program.
	      LIBRARY.BAT  is the batch file used to create and
			   maintain FLODRAW libraries.
	      REGISTER.BAT is the batch file used to print the
			   registration form.
    
		      System Files (Required by FLODRAW.EXE)
	 
	      FLODRAW.OPT  is the file of user selected options such as
			   printer type, tab locations, and default font.
	      FLODRAW.LIB  is the default FLODRAW symbol library.  It is
			   distributed as a flowchart library.
	      FLODRAW.PRT  is a file of diagram file names to be printed.  
			   This file is not included with the system, but 
			   is generated by FLODRAW and used by the "print 
			   flagged files" option on the Entry menu.
    
		    Diagram Files (Can Be Read by FLODRAW.EXE)
	 
	      DEMO         is the diagram file used as a FLODRAW tutorial.
	      DEMOFLOW &   are the diagram files used as a tutorial for
	      DEMOFLOW.01  drawing a flowchart.
		thru
	      DEMOFLOW.06
	      SAMPLE.ELC   is a sample electrical diagram.
	      SAMPLE.FLO   is a sample flowchart.
    
    
	   Symbol Libraries (Can Be Loaded as Libraries by FLODRAW.EXE)
	 
	      ELECTRIC.LIB is a library of electrical symbols.
	      FLOCHART.LIB is a library of flowchart symbols. This is the
			   same library as FLODRAW.LIB, except this library
			   does not contain the flowchart heading symbol.  
			   You may want to design your own heading symbol 
			   and add it to this library.
	      HIPO.LIB     is a library of HIPO symbols.
	      MISC.LIB     is a library of miscellaneous symbols.

	 Chapter 2.  Getting Started                                 2.1
	 
	 
				 Installation
	 
    FLODRAW is distributed with all files on one FLODRAW program disk. The
    following instructions will tell you how to install FLODRAW on your
    floppy disk or hard disk system.  Select the instructions that apply to
    your system.  
	 
	 
	      Installing FLODRAW on a 2 Drive Floppy Disk System
	      
    We'll copy the files we need onto two working disks.  We'll call one
    disk the program disk and the other disk the data disk.  The program
    disk will contain the FLODRAW program, system files, and libraries. 
    The data disk will contain your diagrams.  Use the following procedure
    to copy the files.
	 
	 1.  First format two disks.  If you have two formatted disks, or
	 you know how to format a disk, you can skip to part 2 of this
	 procedure.  Boot up your system, then make sure drive A is the
	 default drive.  The DOS prompt should be "A>". Put your DOS system
	 disk in drive A and a blank disk in drive B. Enter the following
	 command to format the blank disk in drive B.
		  
	      FORMAT B:
	 
	 Remove the formatted disk from drive B, and place a second blank
	 disk in drive B.  Format the second disk the same way.  After the
	 second disk has been formatted, remove the DOS system disk from
	 drive A.
	 
	 2. Copy the files from the FLODRAW program disk to the first
	 formatted disk.  To do this, put the FLODRAW program disk in Drive
	 A and your formatted disk in drive B.  Enter the following command
	 at the DOS prompt to make your copy of the program disk.
	 
	      COPY A:*.* B:
	 
	 Remove your copy of the program disk from drive B.  Label your
	 program disk for use as a working disk.  Remove the FLODRAW
	 program disk from drive A, and store it in a safe place as a
	 backup.
	 
	 3. The data disk will contain your diagrams.  Put your program
	 disk in drive A and put the second formatted disk in drive B.  Use
	 the following commands to copy the sample diagram files to your
	 data disk.
	 
	      COPY A:SAMPLE.* B:
	 
	 Remove your program disk from drive A and your data disk from
	 drive B.  Label your data disk for use as a working disk.  Since
	 you've copied the sample files from your program disk to the data
	 disk, you can delete the sample files on your program disk to free
	 up space for additional library files.

	 Getting Started                                             2.2
    
	 
    This completes the installation on a 2 drive floppy disk system.  
    
	 
		   Installing FLODRAW on a Hard Disk System
	 
    We'll copy the files we need from the program disk to a subdirectory on
    the hard disk.
				
	 1.  After booting up your system, make sure your default drive is
	 the hard disk.  If your hard disk is on drive C, your DOS prompt
	 will look like "C>".
	 
	 2.  Create a new directory for your FLODRAW files.  If you already
	 have a subdirectory for FLODRAW, you can skip to step 3.  You can
	 use the following procedure to create a subdirectory called FLO.
	 Enter these commands at the DOS prompt.
	 
	     CD\            to make sure you're at the root directory
	     MD\FLO         to make a subdirectory called FLO
	 
	 3.  Copy the files on the FLODRAW program disk into the
	 subdirectory FLO.  Use the following procedure.  Put the FLODRAW
	 program disk in drive A and enter these commands at the DOS
	 prompt.
	 
	     CD\FLO         to change current directory to FLO
	     COPY A:*.*     to copy the FLODRAW files on the program  
			    disk to the current directory
	 
	 Remove the FLODRAW program disk from drive A and store it as a
	 backup.
		  
	 4. Establish a default directory location for the FLODRAW option
	 file and the FLODRAW libraries.  This step is optional, but it
	 makes FLODRAW much easier to use on a hard disk.  It means that no
	 matter which directory you are in, FLODRAW will be able to find
	 the option file and libraries in the default directory.
	 
	 To establish a default directory location, add a SET command to
	 your AUTOEXEC.BAT file. The set command  must have the following
	 format.
	  
	     SET FLOPT=directory path
		
	 For example, say you want to keep the FLODRAW option file and
	 libraries in a directory called FLO on your hard disk C. Let's say
	 FLO is an entry in your root directory, so its path looks like
	 C:\FLO
	 
	 To establish the directory FLO as the default directory for
	 FLODRAW, you would add the following command to your AUTOEXEC.BAT
	 file.
	 
	     SET FLOPT=C:\FLO

	 Getting Started                                             2.3
    
	 
	 The next time you boot your computer, if FLODRAW can't find the
	 option file or library file in the current directory, it will look
	 for those files in the default directory.  
	 
    This completes the installation on a hard disk.  
	 
	      
			     DEMO - a FLODRAW tutorial
	 
    The FLODRAW tutorial is included on the program disk to help you become
    familiar with the FLODRAW program.  The tutorial is called DEMO and was
    designed to introduce you to the important features of FLODRAW in 15
    minutes.  Start the DEMO with the following files on the same disk. 
    These files should be on your program disk.
	 
	 FLODRAW.EXE
	 FLODRAW.LIB
	 FLODRAW.OPT
	 DEMO
	 
    Now follow these instructions to take the DEMO tutorial.
	 
	 On floppy disk systems - Let the default drive be A.  Put the 
	 program disk in drive A.  Then continue by typing the command
	 below.
	  
	 On hard disk systems - Change to the FLO subdirectory.
	 
	      Type FLODRAW DEMO
	  
	 Your computer will load FLODRAW into memory.  FLODRAW will read
	 the option and symbol files, and then read the DEMO file.  FLODRAW
	 will display the DEMO file on the edit screen. Now, just follow
	 the instructions that appear on the screen.
	  
	 
		  Drawing Your First Flowchart with DEMOFLOW
     
    After the DEMO tutorial, you're ready to start on your own. If you're
    going to use FLODRAW to draw flowcharts, use the tutorial DEMOFLOW to
    get started.  This 5 minute tutorial helps you draw a simple flowchart.
    
    The DEMOFLOW files should be on your program disk.  Follow these 
    instructions to take the DEMOFLOW tutorial.  
	 
	 On floppy disk systems - Let the default drive be A.  Put the 
	 program disk in drive A.  Then continue by typing the command
	 below.
	  
	 On hard disk systems - Change to the FLO subdirectory.
	 
	      Type FLODRAW DEMOFLOW
    
	 Your computer will load FLODRAW into memory.  FLODRAW will read

	 Getting Started                                             2.4
 
	      
	 the option and symbol files, and then read the DEMOFLOW file. 
	 FLODRAW will display the DEMOFLOW file on the edit screen. Now,
	 just follow the instructions that appear on the screen.
	 
			   Examples of FLODRAW Diagrams
	 
    The program disk contains a number of files you can read and edit with
    FLODRAW.  The files beginning with SAMPLE are examples of diagrams
    created with FLODRAW.  Use the following procedure to load a SAMPLE
    diagram file.
	      
	 1. Put the FLODRAW program disk in drive A.
	      
	 2. Type "FLODRAW filename" to load the file into FLODRAW.  For
	 example, to read the sample flowchart, type 
	 
	      FLODRAW SAMPLE.FLO
		 
	 On a 2 floppy system, if you installed the sample files on your
	 data disk, you would type
	 
	      FLODRAW B:SAMPLE.FLO
	 
	 Another way to load a file is to use the "Load new file" function
	 on the entry menu.  Put the program disk in drive A and at the DOS
	 prompt, enter 
	 
	      FLODRAW 
	      
	 When the entry menu appears, select F1, the "Load new file" 
	 function.  When prompted for a file name, move the directory
	 bounce bar to SAMPLE.FLO and press Enter.  FLODRAW will read your
	 file into memory and then display the file on the edit screen.
	 
		 
			   Examples of FLODRAW Libraries
	 
    All the files ending in .LIB are library files.  The library files
    contain the symbols you use while editing your diagrams.  The program
    disk contains the libraries.  Use the  following procedure to try a new
    library.
    
	 1. Put the FLODRAW program disk in drive A.
		 
	 2. Put your data disk in drive B.
	      
	 3. Type FLODRAW B:filename to load FLODRAW. You can use one of the
	 sample files or start a new diagram.
    
	 4. After your diagram has been loaded, press ESC to return to the
	 entry screen.
    
	 5. Press F9 on the entry screen to get the "Load New Library"
	 menu.

	 Getting Started                                             2.5
    
	      
	 6. FLODRAW will list the libraries in the current directory in the
	 directory display on the right side of your screen.  Move the
	 bounce bar to the library you want to load and press Enter.
	      
	 If you have a hard disk and have established a default directory
	 for FLODRAW, FLODRAW will look in the default directory if it
	 can't find any library files in the current directory.
	 
	 7. FLODRAW will load the new library and return you to the entry
	 screen. Now press F1 to edit your diagram.
	     
	 8. Press F10 to try out the new symbols.
		 
	      
				 HELP Screens
	 
    While you're still getting familiar with FLODRAW, you can call up a
    HELP screen for help with most functions in the program.  A help screen
    of program keys is available from the TEXT or DRAW mode edit screens. 
    Press Alt-H to call the HELP screen.
		 
    The help screens are context sensitive.  That is, you'll get a help
    screen designed to help you on the function you're using.  You can also
    transfer from the help screen to the help menu by pressing Alt-H from
    the help screen.  When you're finished with the help screen, press any
    key to return to the program.
	 
	 
			       Starting the Program
	 
    Let's assume that you have already booted your computer and that you
    have already installed FLODRAW on your system. 
	 
    If you have a floppy disk system, put the program disk in drive A.  
	 
    If you have a hard disk system, change the default directory to your
    FLODRAW directory.
	 
    At the DOS prompt, enter the command,
	 
	 FLODRAW 
	 
    When FLODRAW starts, it will look for FLODRAW.LIB and FLODRAW.OPT in
    the current directory.  After the program has been loaded into memory
    it will read the two files FLODRAW.LIB and FLODRAW.OPT.  After the
    files have been read into memory, FLODRAW.LIB and FLODRAW.OPT are no
    longer needed.
	 
    When the entry menu appears, you can use the "Load new file" function
    to load your diagram.  If you want to load an existing file, use the
    cursor keys to move the directory bounce bar to your file and press
    Enter.  If you want to load a new file, just enter the name of your
    file at the cursor location and press Enter.
	 
    You can bypass the entry menu if you enter the diagram name following

	 Getting Started                                             2.6
    
	      
    FLODRAW on the DOS command line.  Prefix the drive letter if your
    diagram is not in the default drive.  For example, let's say you want
    to create a diagram called MY_CHART.01.  And you want to keep the
    diagram on the data disk in drive B.  You would enter the following
    command.
	 
	 FLODRAW B:MY_CHART.01
	 
    Since this is a new diagram, FLODRAW will prompt you for the page
    format before taking you to the edit screen.  After you create the
    diagram, save it, and exit FLODRAW, you can use the same command when
    you want to edit it again.


			      Customizing FLODRAW.OPT
	 
    FLODRAW.OPT is a file that FLODRAW loads from the current directory
    when you start it.  FLODRAW uses this file to set the default options. 
    Before you begin using FLODRAW to create diagrams, use the setup option
    screen to customize the setup option file for your own use.   To do
    this start FLODRAW (just enter the command FLODRAW).  When the entry
    menu appears, press F8 to select the setup option screen.  
	 
    Right now, just set the printer model (F2), font (F6), and color (F8
    and F9) options.  When you're more familiar with the program, you may
    want to try changing some of the other options.  After you've selected
    your printer model, font, and color, press F10 to save the option file.
    FLODRAW will load your saved options every time you use the program.
	 
    FLODRAW is distributed with the following options set.  For more
    information about these options, see Setup Options in the Entry Menu
    chapter.
	 
	      Tabs       - Horizontal and vertical tabs are set for use with 
			   the symbols in FLOCHART.LIB.
	      Printer    - Printer driver is for Epson FX.
	      Lines      - Lines are continuous (rather than dashed).
	      Arrow      - When you use the line option in TEXT mode, you'll
			   get an arrowhead at one end of the line.
	      Font       - The default font is shown on FONT option line.
	      Arrowhead  - The default arrowhead is shown on the ARROWHEAD
			   option line.  This size arrowhead works nicely
			   with the symbols in FLOCHART.LIB.
	      Print flag - The print flag is manual rather than automatic.
			   Use manual until you've verified that FLODRAW
			   will print several diagrams in succession on
			   your printer without skipping or adding lines to
			   the page.
	      Text colors- set for black and white.
	      Edit colors- set for black and white.
	 
    
			FLODRAW File Naming Conventions
	 
    FLODRAW uses the following naming conventions for its files.

	 Getting Started                                             2.7
 
 
	 FLODRAW System Files.
	      All FLODRAW system files have the base name of
	      FLODRAW.  For example, FLODRAW.LIB is the default
	      library name.
    
	 Diagrams.
	      For single page diagrams, you can use any valid DOS 
	      extension.  Multiple page diagrams must have an 
	      extension of a two character page number 01, 02, ... 
	      up to 99.  This is necessary if you want to use the 
	      features available for processing multiple page 
	      diagrams. 
    
	 Library files.
	      FLODRAW requires library files to have a file extension
	      of LIB.  
    
	 Symbol files.
	      The batch file LIBRARY.BAT requires that symbol files 
	      have an extension of SYM. 
    
	 
				 Backup Your Disks
	 
    Set up a schedule to back up your data disks on a regular basis to
    protect yourself against a disk failure.  If you keep your data on
    floppy disks, your DOS reference manual will tell you how to use the
    DISKCOPY command.  If you keep your data on a hard disk, use the BACKUP
    command or any of the commercially available backup packages.

	Chapter 3.  Entry Menu                                       3.1

    
    
				  Entry Menu
	 
    The entry menu is the first screen you see after the title screen.  The
    entry menu provides additional functions that are not available during
    editing.  This screen is divided into four sections described below.
	 
	      The Menu   
	 
	 The menu is divided into file functions and system functions. 
	 File functions are performed on the file that you are currently
	 editing.  System functions pertain to other services not connected
	 with the file you are editing.
	 
	      The Current File.  
	 
	 This section tells the current drive, path, file loaded, and
	 alternate file loaded if there is one. If no file has been loaded,
	 the message "No file loaded" will appear.  When you are working
	 with a portrait format diagram, you can load a second or alternate
	 portrait diagram and switch back and forth between them on this
	 screen or the edit screen using Alt-F1.
	 
	      Error Line.  
	 
	 The error line is the line below the current file box.  The
	 program will report errors on this line.  For example, if you
	 press a key that is not available on the entry menu, you will get
	 the message, "Try another key" on the error line.
	 
	      Directory Display.  
	 
	 The right side of the entry menu displays the files in the current
	 directory in alphabetic sequence.  You can browse the list of
	 files using the PgUp and PgDn keys.  Subdirectories, executable
	 files, and FLODRAW system files are not displayed in this
	 directory.  If you are using the automatic print feature, the
	 directory display will show a 'P' after every file that will print
	 when you use F7 on the entry menu.
	      
    You can select he following functions from the entry menu.
	 
			      
				Load New File [F1]
	      
    Use this function to load a new diagram.  If you are already editing a
    diagram, you will overlay it when you load a new diagram.  If a diagram
    is already loaded and you haven't saved it,  you will get the "Are you
    sure?" message to give you a chance to use the "Save" function before
    you load a new file.
	 
    The "Load New File" function will prompt you for the file name to load.
    If the file is in the directory, you can select it by moving the
    highlighted bounce bar on the directory display to your file and then

	Entry Menu                                                   3.2

	 
    pressing Enter.  If the file is a new file, just key the name at the
    cursor location and press Enter.
    
    If you are creating a file that doesn't exist on the directory, or if
    you just prefer to key the name of the file, then enter the name of the
    file at the cursor location.  You may enter any valid DOS file name. 
    When you enter the file name, you can also enter the drive id (for
    example, B:) if the file is not on the default drive.  If the file does
    not exist, the program will prompt you for the page format before
    taking you to the edit screen.
	 
    Three page formats are available.  The portrait format is 8.5" X 11".  If
    you use this format, you can load a second portrait format diagram and
    switch back and forth between them on the edit screen.
	 
    The landscape format is also 8.5 X 11, but is printed sideways.  The
    landscape format does not print as nicely as the portrait format on dot
    matrix printers.  This is because the line spacing has been reduced in
    an attempt to retain the same aspect ratio for graphic symbols as in
    the portrait format.  Unfortunately, this also causes a problem in
    print clarity when graphics symbols or characters cross a character
    boundary. 
    
    You can avoid print clarity problems on dot matrix printers in
    landscape format, if you follow this rule:  Avoid using the font menu
    in FONT DRAW mode.
	 
    When you select the landscape format, FLODRAW will override your option
    font with a slightly narrower font that prints much nicer in landscape
    format.  If you override this font, some of your characters will
    overlap when printed.  Also, using the font menu in draw mode may place
    the characters off their normal line position, so that a character may
    need two lines to print. Because the line spacing has been reduced,
    this can cause some characters to print distorted.
		  
    The large landscape format is 16 X 11, but is printed on two 8.5 X 11
    pages that can be connected side by side after printing. The large
    landscape format does not have the problem with print clarity since it
    is printed as a double portrait.
	 
			      Preview Diagram [F2]
	      
    Use this function to see a bird's eye view of the entire diagram.  A
    window frame inside the preview screen shows you which part of the
    diagram appears on the edit screen.  You can use the cursor keys to
    move the window frame around the diagram.  Exit the preview screen by
    pressing ESC.  The edit screen will reflect the position of the window
    frame on the preview screen. If you have two portrait format diagrams
    loaded, you can switch the window frame to the other diagram by
    pressing Alt-F1.
	 
			 Save File with Same Name [F3]
	       
    Use this function to save the current diagram with it's original name. 
    This is the most common way to save your work before quitting FLODRAW.

	 Entry Menu                                                  3.3
	      
	      
			  Save File with New Name [F4]
	       
    Use this function when you want to create another version of the file
    you are editing.  The program will prompt you for the new file name. 
    You can use any valid DOS file name.  And you can prefix it with the
    drive-id. 
	 
		   
			    Print Current File [F6]
	       
    Use this function to print the current diagram.  This function will
    present a print menu with the following options.
		   

	      Change printer [F5]
	 
	 Change printer model by pressing F5. FLODRAW is set to default to
	 an EPSON model FX printer in a single strike mode.  You can use
	 the option menu to change the default.  Refer to the section on
	 Setup Options.     
		   
	      Start printing [F6]
	 
	 After you check that the printer is on, and the paper is lined up
	 correctly, press F6 to start printing.
		   
	      Pause printing [ESC]
	 
	 At anytime during printing, you can press ESC to have FLODRAW
	 pause the print function.  FLODRAW will stop sending print data to
	 the printer and ask you if you want to stop printing.  If you
	 answer "N", FLODRAW will continue printing where it left off.  If
	 you answer "Y", FLODRAW will send a form feed to the printer and
	 exit from the print function.
	 
		   
		     Print Flagged Files in Directory [F7]
	       
    Use this function to flag the diagrams in the directory for printing,
    or to print all files in the current directory that have been flagged. 
    This function is useful when you have several diagrams to edit and
    print.  When you save a diagram, the print flag is turned on (but only
    if the setup option for print flag is set to automatic - see the next
    function, Setup Options).  
	 
    When all diagrams have been edited, use this function to print them. 
    The program will search the current directory and print every diagram
    that has the print flag turned on.  After printing each diagram, the
    program turns the flag off. This function will present a print menu
    with the following options.
		   
	      Toggle print flag on directory [F1]
	 
	 Pressing F1 will set up a bounce bar on the directory display. 

	 Entry Menu						     3.4
	      
	      
	 Use the cursor keys to position the bounce bar on the file you
	 want to flag, and press enter.  If the flag is off, it will turn 
	 on.  If the flag is on, it will turn off.  When you have flagged
	 all the files you want to print, press ESC to return to the print
	 menu.	The flag is the letter 'P' following the filename.
		       
	      Change printer [F5]
	 
	 Change printer model by pressing F5.  FLODRAW is set to default to
	 an EPSON model FX printer in a single strike mode.  You can use
	 the option menu to change the default.  Refer to the section on
	 Setup Options.     
		   
	      Start printing [F6]
	 
	 Pressing F6 will start the  search for files to print.  If you
	 are editing a file, it  will be erased during the print process. 
	 FLODRAW will warn you before it erases your file.
		   
	 
	      Pause printing [ESC]
	 
	 At anytime during printing, you can press ESC to have FLODRAW
	 pause the print function.  FLODRAW will stop sending print data to
	 the printer and ask you if you want to stop printing.  If you
	 answer "N", FLODRAW will continue printing where it left off.   If
	 you answer "Y", FLODRAW will send a form feed to the  printer and
	 exit from the print function.
	 
		   
				Setup Options [F8]
	       
    Use this menu to change the following default options set for the
    program.  When you set the options in this menu, they are used by the
    program until you reset them or leave the program.  If you save the
    options with F10, the saved options will be loaded as the default
    options the next time you load the program.
	       
	      Set tabs on ruler lines [F1]
	 
	 This option allows you to change the position of the horizontal
	 and vertical tabs on the editing ruler lines.  Pressing F1 to
	 change the position of the horizontal tabs will present you with
	 an edit screen. You can use all the cursor commands to move the
	 cursor to a tab location.  Press F1 to put a tab at that
	 horizontal location.  Press F2 to clear the tab.  Vertical tabs
	 work the same way.  Press ESC to exit.
	 
	      Select lines with/without arrowheads [F2]
	 
	 This option determines whether arrowheads are placed at the end of
	 lines when using the F6 line menu in TEXT mode. Select arrowheads
	 with F1, no arrowheads with F2.  This option can be overridden
	 with the line menu in TEXT mode [F6].

	 Entry Menu                                                  3.5
	      
	      
	      Select arrowhead [F3]
	 
	 This option selects the size and shape of arrowheads drawn on your
	 diagrams. The current arrowhead selection is shown at the top of
	 the menu.  Press the function key by the arrowhead you want to use.
	 
	      Select default font [F4]
	 
	 This option selects which of the six standard size fonts you
	 normally want to use when entering text. The current font
	 selection is shown at the top of the menu. Press the function key
	 by the font you want to use to change the selection.  Although the
	 fonts F4 and F6 look the same, F6 is slightly narrower.  When
	 you're using the small landscape format diagram, FLODRAW will
	 override your default font and automatically select the F6 font.
	 Your default font will return when you load another diagram.
	      
	      Select printer [F5]
	 
	 This option selects the default printer model. The current printer
	 is shown at the top of the menu.  Press the letter key by the
	 printer you want to use to change the selection.
	      
	      Select auto or manual printing [F6]
	 
	 This option selects manual or automatic update of the print flag
	 on the directory display.  If you select automatic, the print flag
	 will be turned on whenever you save your diagram.  You can then
	 use the "Print Flagged Files" function on the Entry menu to print
	 all the files you edited and saved at one time.    
	 
	      Define paths for changing directory [F7]
	 
	 You can define paths of directories where you keep your FLODRAW
	 diagrams.  Then you can change directories easily using the Change
	 Directories function on the Entry menu.
		   
	      Select colors for Entry Menu Screen [F8]
	 
	 You can select the colors used in the Entry Menu screen.  Select
	 black and white by pressing "M", or the default color selection by
	 pressing "C".  To change colors on the screen, press the function
	 key next to the description of the area you want to change.  The
	 color bar at the bottom of the menu shows the colors you will
	 toggle through as you continue to press the function key.
	      
	      Select colors for Edit Screen [F9]
	 
	 You can select the colors used in the Edit screen.  Press the
	 function key corresponding to the part of the screen you want to
	 change.  For example, if you want to change the color of the
	 cursor, press F3 to cycle through the colors for the cursor. 
	 There are only 4 colors available on the edit screen.

	 Entry Menu                                                  3.6
	      
	 
	      Save setup options on FLODRAW.OPT [F10]
	 
	 Press F10 to save your option selections on the file FLODRAW.OPT. 
	 FLODRAW will look for this file in the current directory when you
	 start FLODRAW and use your saved options to set the defaults.  If
	 it can't find the option file in the current directory, it will
	 check if you set up a default directory.
	      
		   
			  Load New Symbol Library [F9]
	       
    Use this function to load another library of symbols.  The program will
    prompt you for the name of the symbol library.  Enter the name without
    the .LIB extension.  The symbol library must be on the default drive.
	 
	 
			Change Drive/Directory [F10]
	      
    This function has the following options.
		   
	      Change drive [F1]
    
	 The program will prompt you for the drive-id letter.  The
	 directory display will show the files in the current directory.
		   
	      Change directory [F2]
	 
	 This option lets you change the current directory.  Enter the
	 directory path  at the cursor.  The current directory path will
	 display at the bottom of the screen and the directory display will
	 show the files in the directory.

	      Define a new path [F3]
	 
	 You can save paths of often used directories.  First select the
	 function key you want to assign to the path.  You can select any
	 key from F5 to F9 as long as it hasn't already been assigned. 
	 Then enter the directory path.  FLODRAW will display the directory
	 files in the directory display until you exit this function. 
	 Press F10 to save this path definition.

	      Delete a defined path [F4]
	 
	 You can free up a function key for a defined path so you can
	 assign it to another path.  Just select the function key with the
	 path definition you no longer need.


			     Switch Files [Alt-F1]
	    
    Use this function to switch to an alternate buffer when you have a
    portrait format diagram loaded.  You must have at least one portrait
    format diagram loaded to use this function.  If you load a portrait
    format file, and then press Alt-F1, you will switch to the alternate

	 Entry Menu                                                  3.7
	      
	 
    buffer.  You can then load another portrait format diagram using the
    load new file option.
    
    You can also transfer to the edit screen and use the alternate buffer
    as  a scratch pad.
		   
	 
			 Erase a Page File [Alt-E]
	    
    This function is available to allow you to erase a page file from a
    multiple page diagram.  This function physically erases the page that
    you select, and renumbers the extensions of any other files with the
    same filename so that the page numbers are sequential.
	 
    After you select this function, you select the file you want to erase. 
    You can only erase files that have an extension of "01" to "99". 
    FLODRAW will then prompt you with a schematic of the file to be erased
    and any files to be renumbered.  You can proceed with erasing the file
    by answering "Y" to the prompt.
		   
	 
			     Help Screen [Alt-H]
	    
    HELP screens are available with most functions.  Just press Alt-H.
	 
	 
			      Exit to DOS [X]
	    
    This function will return the message "Are you sure?", if you haven't
    saved your work.  If you reply "Y" to the "Are you sure?" message, the
    program  will exit to DOS, and you will lose any changes you made since
    the last save.  If you reply "N", the program will return you to the
    entry menu, and you can use the "Save" function to save your work.
	 
    If your work has been saved, the program will exit to DOS immediately.
	 

			      Return to Edit [ESC]
	      
    Use this function to return to the edit screen.  You can only use this
    function if a file has been loaded.  This is the same key that takes
    you from the edit screen to the entry menu, so you can switch between
    them easily.

	 Chapter 4.  Text Mode Editing Screen                        4.1
								       
	 
				The Edit Screen
	 
    The editing screen provides a window to an area in your diagram.  While
    you are in the window, you can draw dots, lines and circles, symbols,
    and write text.  There are two modes of editing available, TEXT mode,
    and DRAW mode, and each mode has unique capabilities.  
	 
    The TEXT mode edit screen lets you work with character areas. The
    character area is the area defined by the TEXT mode cursor. In addition
    to writing text, you can draw symbols from the symbol library.  And you
    can draw lines with the cursor keys.  But all TEXT mode functions work
    with nothing smaller than the size of the TEXT mode cursor.
	 
    The DRAW mode edit screen lets you work with pixels.  Each pixel is one
    dot on the edit screen.  There is a DRAW function for drawing lines and
    a DRAW function for drawing circles.  Or you can use the Shift and
    cursor keys to draw free-hand.
	 
    The layout of the editing screen is the same for both TEXT and DRAW
    modes.  Here is a description of the editing screen.
	 
	      Ruler Lines  
    
	 These are the measuring lines at the bottom and right hand side of
	 the screen.  They measure the text character rows and columns that
	 are available on the diagram.  Tabs are marked on these lines as
	 the letter "t".
	 
	      Menu Lines  
	 
	 Two menu lines are at the bottom of the screen.  The menu lines
	 define what functions are available at any time.  The menu lines
	 will change depending on the functions you select.
	 
	      Error line  
	 
	 When FLODRAW needs to tell you about a problem, it writes a
	 message on the error line.  The error line will overlay the
	 horizontal ruler line.  The next time you press a key, the ruler
	 line will return.
	 
	      ESC key  
	 
	 The ESC key always takes you back to the previous menu.  By
	 pressing the ESC key several times, you will work your way back to
	 either the edit screen or the entry menu depending on where you
	 started.  At this point, pressing the ESC key again will flip you
	 back and forth between the edit screen and the entry menu.

	 TEXT Mode Editing                                           4.2


				TEXT Mode Editing 
	 
    Now, let's look at the features of the TEXT mode edit screen.
	 
	      Cursor  
	 
	 The TEXT mode cursor is a little box about the size of a
	 character.  The gaps in the little box show where lines are drawn
	 when you use the cursor to draw lines in text mode.
	 
	      Cursor Movement  
	 
	 You can move the TEXT mode cursor all around the window using the
	 horizontal and vertical cursor keys.  You can also move the window
	 by moving the cursor against the side of the window, or by
	 pressing one of the cursor movement keys, like PgUp or PgDn.
	 
	      Drawing with the Cursor   
	 
	 You can draw lines in TEXT mode by holding down the shift key and
	 pressing one of the cursor keys.  Lines generated this way run
	 through the gaps in the center of the TEXT mode cursor.  Note that
	 the automatic line drawing function F6 generates lines that also
	 run through the gaps in the cursor.  To erase in TEXT mode, use
	 the space bar.
	 
	      Using the Tab Keys   
	 
	 The Tab key is located above the Ctrl key on the left side of the
	 keyboard.  Pressing the Tab key moves the cursor to the next
	 horizontal tab position on the right.  Holding down the shift key
	 and pressing the Tab key moves the cursor to the next horizontal
	 tab position on the left.  Pressing Alt-U moves the cursor to the
	 next tab up and pressing Alt-D moves the cursor to the next tab
	 down.
	      
	 If you tab to a location, FLODRAW remembers that tab location. 
	 You can move the cursor to draw lines or enter text, but when you
	 tab again, FLODRAW starts your tab from the last tab location. See
	 the section in Chapter 6 on Using Tab Keys for more information.
	 
	 
	      Moving the Window around the Diagram   
	 
	 You can move the window around the diagram in two ways.  First,
	 you can move the window one row or column at a time by pushing the
	 cursor against the edge of the window.  Second, you can move the
	 window by using the PgUp or PgDn keys to move the window up or
	 down the diagram.  Or you can use the grey "+" or grey "-" keys on
	 the right side of the keyboard to move the window right ("+") or
	 left ("-"). If your keyboard does not have the grey keys, you can
	 also use Alt-R to move right and Alt-L to move left.

	 TEXT Mode Editing                                           4.3


		       Functions Available in TEXT Mode
	 
    The TEXT mode menu displays most of the functions available in TEXT
    mode.  The functions that are not listed on the menu lines can be found
    on the help screen (Alt-H).  All the functions are described here.
	 
			  Switching to DRAW Mode [F1]
	     
	 The F1 key will toggle you back and forth between TEXT mode and
	 DRAW mode.  You can tell which mode you are in by the shape of the
	 cursor or by the capitalized description of the mode on the menu
	 next to F1.
	 
			     Preview Diagram [F2]
	     
	 The F2 key will show a view of the entire diagram.  This feature
	 is the same as discussed with the entry menu.
		   
		   
			      Save Function [F3]
	     
	 In TEXT mode this function has two options:  one option saves a
	 symbol and one option saves a file.
		   
	      Save Symbol [F1]   
	 
	 Use this option to create your own  symbols.  This option will
	 prompt you to follow 5 steps to save a symbol.
		   
	 1.  Move the cursor to the upper left corner of the symbol, then
	 press F1.
		       
	 2.  Move the cursor to the first cursor position in the symbol,
	 then press F1.  This location determines where the cursor will be
	 set after the symbol has been inserted in your diagram. If you
	 will always enter text in your symbol at the same location, you
	 might want to make that location the first cursor position.  If it
	 doesn't matter, you can leave the cursor in the upper left corner,
	 and press F1.
		       
	 3.  Move the cursor to the center of the symbol, then press F1. 
	 This location determines how the symbol will be located on your
	 diagram when you call it up from the symbol library. The program
	 will align the center of the symbol with the cursor on the screen.
	 The location of the center is entirely up to you.  The only 
	 restriction is that it must be inside the symbol block.
			   
	 4.  Move the cursor to the lower right corner of the symbol, then
	 press F1.  
		      
	 5.  The program will prompt you for a symbol name.  The extension
	 must be SYM in order for the file to be used by the library batch
	 file that maintains the symbol libraries.  The file name can be
	 anything, but I suggest that you try to use descriptive names.  As
	 an example, a symbol of a telephone might be called PHONE.SYM.

	 TEXT Mode Editing                                           4.4
		   
		   
	 This will help you keep track of what is in the symbol files. The
	 program will return you to the edit screen after it writes the
	 symbol file to the disk.
	 
	 Refer to the section in Chapter 6 on Creating Symbols for more
	 information on symbols.
	 
	      Save File [F3]  
	 
	 Use this option to save the current diagram.  This option was
	 provided here to make it easy for you to save your diagram while
	 you are working.   Just press F3 twice from the edit screen menu.
		   

				Font Menu [F4]
				  
    The Font Menu first displays a menu of font sizes.  You can select from
    small, normal, and large size fonts by pressing the function key shown
    on the menu.  After you select a font size, the program will show you
    the font menu for that size.  The font menu displays the active font
    and, for the normal and small fonts, lists the fonts that are
    available.  If you have selected the normal font size, FLODRAW will
    continue to use your selected font as the active font when you leave
    the font menu and return to the TEXT edit screen.
	 
    When you select either the small or large font, the mode changes to
    DRAW so you can adjust the cursor position for the change in font
    size.  After you have adjusted the cursor position, press F1 to change
    the mode to CHAR mode before typing text.  The small and large fonts
    can only be used while you are in the font menu.  
	 
    The smallest font has capital letters only, but includes all special
    characters.  The large fonts have capital letters only and include the
    special characters for comma, period, slash, and dash.
		   
	      Font Mode [F1]  
    
	 There are three modes available on the font menu.  Pressing F1
	 changes the mode.  When you are in DRAW or CHAR mode, you must
	 keep the cursor more than one character from the edge of the page.
	 When you approach the edge of the screen, FLODRAW tries to adjust
	 the diagram so that the cursor is in the middle of the screen.
			       
	      Font TEXT Mode   
	 
	 This is the standard mode for entering text and is the same as
	 TEXT mode on the edit screen.  The program determines how the
	 characters are aligned on the screen.
		       
	      Font DRAW Mode  
	 
	 This mode allows you to move the cursor one pixel at a time. You
	 can determine where the characters will be aligned.  You can enter
	 text in DRAW mode, but if you have to move the cursor, you should
	 change to CHAR mode, since it's faster.

	 TEXT Mode Editing                                           4.5
		       
		       
	      Font CHAR Mode  
	 
	 This mode leaves the cursor aligned the way you set it in DRAW mode, 
	 but now the cursor keys move the cursor one character at a time.
			       
			     Auto Function [F5]   
	     
    Each of the auto functions inserts specific data into your diagram. 
    FLODRAW knows that this data requires special maintenance, and so it
    maintains it for you.  For example, if you select the date function,
    FLODRAW puts the current date on your diagram prefixed by an
    identifying flag. Whenever you save your diagram, FLODRAW will read the
    flag and overlay the date with the new current date.  The time function
    works the same way.
	 
    The page function is useful when you have multiple page diagrams.  When
    you insert the page number function in your diagram, FLODRAW will take
    the page number in the extension and load it as the page number of your
    diagram.  For example, if you have a diagram file called 'MY_CHART.01',
    FLODRAW will load the number '01' as the page number in your diagram.
	 
    The pages-of function works in a similar way and lets you specify how
    many pages are in your diagram, like 'page 01 of 02.'  If in our
    example, we had a second file called 'MY_CHART.02', FLODRAW would know
    from reading all the files in the directory that the highest page for
    'MY_CHART' was '02', and it would load that number as the pages-of
    number.  If you change the file extension, or add or remove pages from
    a multiple page diagram, the page numbers will change automatically. 
    All you have to do is reprint the pages.
	 
    We'll summarize the auto functions here.  FLODRAW prefixes all auto
    functions on your diagram with a 1 character identifying flag.  This
    flag will appear on the edit screen, but it will not print on your
    diagram.
	 
	 Date     [F1]   Use these functions on your diagram and
	 Time     [F2]   FLODRAW will update them when you save your 
			 diagram.      
    
	 Page no. [F3]   Use these functions on your diagram and
	 Pages of [F4]   FLODRAW will update them when you load your
			 diagram.
	 
	 
			      Line Function [F6]
	     
    This function draws an arrow between two symbols. This function works
    by looking for starting and ending points along the direction of the
    line.  This means you must have lines or other objects drawn to
    determine the starting and ending points of the line.  The lines can be
    drawn in eight directions as shown by the arrows on the "Line" function
    menu.  If the "Arrowhead" option is on, the arrowheads will be drawn in
    the direction shown on the menu.  This function has additional options
    and the status of these options is capitalized on the menu line.

	 TEXT Mode Editing                                           4.6


	      Arrowheads [F9]   
    
	 This option determines whether you get arrowheads or no arrowheads
	 at the end of a line.  Press F9 to toggle between them.  
	 
	      Line [F10]   
	 
	 This option determines whether you draw a straight line or a dashed
	 line.  Press F10 to toggle between them.
		   
	 
			     Block Functions [F7]
	     
    Block functions operate on a block of the diagram which you define by
    marking the upper left corner and the lower right corner.  The function
    will prompt you to move the cursor key and press the function key in
    order to outline the block you want to operate on. The following
    options are available. 
		   
	      Mirror [F1]   
	 
	 This option reverses the image of the block.
		   
	      Rotate [F2]   
	 
	 This option rotates the image 90 degrees.  Due to the aspect
	 ratio of the screen, the shape of the image is distorted when you
	 use this feature.
	     
	      Move [F3]  
	 
	 This option moves a block from one location in the diagram to
	 another.  This function can also move a block between two portrait
	 format diagrams. Use Alt-F1 to switch to the other diagram when
	 prompted for the target location.
		   
	      Copy [F4]  
	 
	 This option copies a block from one location in the diagram to
	 another.  This function can also copy a block between two portrait
	 format diagrams.  Use Alt-F1 to switch to the other diagram when
	 prompted for the target location.
	 
	      Delete [F5]   
	 
	 This option deletes a block in the diagram. 
    
    
			   Merge File Function [F8]
	     
    This function merges a symbol or other file into your diagram.  You may
    have stand-alone symbols that are too big to use in a symbol library. 
    Or you might want to use another diagram as a template to start your
    next diagram.  The "Merge" function will read a file from the disk and
    merge it into your diagram. There are 2 options to determine how the

	 TEXT Mode Editing                                           4.7


    merged file will be positioned on your diagram.
		   
	      Upper Left Corner [F3]   
	 
	 Use this option to position the upper left corner of the merged
	 file at the cursor location.
		   
	      Center [F7]   
	 
	 Use this option to position the center of merged file at the
	 cursor location.  Remember that the center of the symbol is
	 defined when you create the symbol using the "Save symbol" option.
	  
    If you are merging a portrait diagram into a portrait diagram, it
    doesn't matter how you try to position the merged file.  FLODRAW will
    load it as a portrait diagram.
		      

				   UNDO [F9]   
	      
    When you see the F9UNDO function on the menu line, it means you can
    undo the last function you performed.  The UNDO function is removed
    from the menu line if you write text or draw lines on the diagram.
		   
		   
			     Symbol Library [F10]
	      
    This function displays up to eight symbols from the symbol library that
    is currently loaded. You can select one of the eight symbols to draw on
    the diagram, or you can request more symbols from the library.  The
    options for this function are as follows.
		   
	      Symbols [F1 thru F8]   
    
	 Each function key represents the symbol shown beneath it on the
	 menu line.  If you press one of the function keys, the symbol will
	 be centered at the location of the cursor on the screen.  
	 After centering the symbol on the screen, the program will locate
	 the cursor according to the first cursor location defined for that
	 symbol.  This is usually to make it easy to enter text.  But it
	 can also be used for drawing lines.  For example, the HIPO library
	 contains symbols for drawing wide lines.  When you select one of
	 the line symbols, the beginning of the line symbol is centered at
	 the cursor, and then the cursor is moved over one character to the
	 first cursor location.  By repeatedly pressing the same key, you
	 can generate a line of any length.
		   
	      UNDO [F9]   
	 
	 After you draw the symbol, you can "undraw"  it if you change your
	 mind.  You might want to use a different symbol or change the
	 location.

	 TEXT Mode Editing                                           4.8


	      More symbols [F10]  
	 
	 Pressing F10 displays the next eight symbols in the symbol
	 library.  After you get to the end of the library, you will start
	 again with the first eight symbols in the library.
		   
	      Exit the symbol library [ESC]   
	 
	 Pressing ESC takes you back to the TEXT mode edit screen. 
		   
    While you're in the symbol library, you can use any of the tab keys and
    diagram location keys to move the cursor around the diagram. You can
    also enter text.
		   
    If you need to generate lines between symbols, you can call up the line
    menu from within the symbol menu by pressing Alt-F6.  You'll return to
    the symbol menu after you've drawn your line.  You can also generate
    lines without using the line menu. The keys Ctrl-F1 through Ctrl-F8
    represent the keys F1 through F8 on the line menu.  You can use these 
    keys from the symbol menu.  These keys are also available from the
    TEXT edit screen.
	 

			     Switch Files [Alt-F1]
	      
    This key is available only when you have a portrait format diagram
    loaded.  With portrait format diagrams you can load a primary diagram
    and an alternate diagram.  You can switch to the alternate diagram even
    if you don't have one loaded.  This allows you to use the alternate
    diagram area as a scratch pad.  You can design symbols on the scratch
    pad, and then copy them onto your primary diagram.  You can also exit
    to the entry menu of the alternate diagram and save your scratch pad
    using the "Save with new name" function.
		   
    
		      Multiple Page Diagram Key Commands
	      
    FLODRAW has special keys to support multiple page diagrams.  These keys
    are available on the TEXT edit screen.  They will only work with files
    that have sequentially numbered file extensions, like '01', '02', etc. 
    If you make changes to your current diagram without saving it and try to
    load a new diagram, FLODRAW will warn you before loading a new diagram.
	 
	      Load Next Page [Alt-N]   
    
	 This key will load the file with the next sequential page number
	 in a multiple page diagram.  If there is no file with the next
	 sequential number, FLODRAW will tell you "There are no more
	 files".
	 
	      Load Previous Page [Alt-P]   
	 
	 This key will load the file with the next lower page number in a
	 multiple page diagram.  If there is no file with the next lower
	 number, FLODRAW will tell you "There are no more files".

	 TEXT Mode Editing                                           4.9

	 
	      Insert Next Page [Alt-I]   
	 
	 This key will insert a new page with the same file name and give
	 it a file extension that is 1 higher than the current extension. 
	 If there are already higher file extensions for this file name,
	 FLODRAW will bump them up by one.  Before doing the insert,
	 FLODRAW will show you a diagram explaining which file will be
	 inserted, and which files will be renamed, if any.  FLODRAW will
	 use the current page as a template for the inserted page. 
	 Inserted pages will always be in portrait format.
	 
    
		  HELP Screen of Cursor and Tab Keys [Alt-H]
	      
    The HELP screen for the TEXT edit screen shows the special keys you can
    use for editing in TEXT mode.  You may want to refer to this screen
    occasionally, until you become more familiar with FLODRAW.

	 Chapter 5.  DRAW Mode Editing				     5.1

		   
    The DRAW mode editing screen has the same layout as the TEXT mode
    editing screen, but there are some differences in the cursor and how it
    is used.  These differences are described below.
		   
	      Cursor   
	 
	 The DRAW mode cursor is a small arrow that points to the upper
	 left.  The tip of the cursor is a blinking dot.  The blinking dot
	 is the current cursor location.
		   
	      Cursor Movement   
	 
	 You can move the cursor with the horizontal, vertical, and
	 diagonal cursor keys.  The diagonal cursor keys are the Home,
	 PgUp, End, and PgDn keys.  The cursor must stay within the current
	 window.  If you need to move the window to another location in
	 your diagram, you must toggle to TEXT mode, move the window, then
	 toggle back to DRAW mode.
		   
	      Drawing with the Cursor   
	 
	 Drawing free-hand with the cursor is the same as for TEXT mode. 
	 While holding down the shift key, press one of the cursor keys. 
	 To erase, toggle the F8 key from WRITE to ERASE.  The cursor will
	 change to an arrow with an "E" on its tail.  The cursor will now 
	 work as an eraser.
		   
	 
		       Functions Available in DRAW Mode
	 
    The following functions are available in DRAW mode.  Several are
    similar or the same as functions that are available in TEXT mode. 
	 
    
			  Switching to TEXT Mode [F1]
	     
    The F1 key will toggle you back and forth between TEXT mode and DRAW
    mode.  You can tell which mode you are in by the shape of the cursor or
    by the capitalized description of the mode on the menu next to F1.
	 
	     
			    Preview Diagram [F2]   
	     
    The F2 key will show a view of the entire diagram.  This feature is
    discussed with the entry menu.
		   
		   
			     Save Function [F3]   
	     
    Unlike TEXT mode, this function has only one option in DRAW mode.
		   
	      Save file [F3]   
	 
	 Use this option to save the current diagram.  This option was
	 provided here to make it easy for you to save your diagram while

	 Chapter 5.  DRAW Mode Editing				     5.2

	 
	 you are working.  Just press F3 twice from the edit screen menu.
		   
		   
			  Arrowhead Function [F4]   
	     
    This function will draw an arrowhead in any one of eight directions. 
    Press F4 to get the arrowhead menu.  The arrowhead menu shows a
    function key for each of the eight arrowhead directions.  Move the
    cursor to the location in the window where you want the point of the
    arrowhead to appear, and then press the function key for the arrowhead.
		   
		   
				  Circle [F5]   
	     
    This function draws a circle or ellipse using points you mark inside
    the window.  The actual circle or ellipse can extend outside the
    window.  The function works like this.
		   
	 1.  The function will prompt you to move the cursor to the center
	 of the circle and press F5, or select the "Ellipse" option with
	 F6.  Let's consider the circle first.
		   
	 2.  After you've selected the center of the circle, the program 
	 will mark that location with a flashing dot.  The program will
	 then prompt you to move the cursor to the edge of the  circle and
	 press F5.  The edge can be in any direction.  It doesn't have to
	 be along the horizontal, although that's usually the most
	 convenient.
		       
	 3.  The program will draw the circle.  You now have four options.
			   
	     a.  You can draw another circle using the same center, just 
	     by moving the cursor to the edge of a new  circle and 
	     pressing F5.
			       
	     b.  You can UNDO your circle by pressing F9, and then redraw 
	     the circle by moving the cursor to the edge of the circle 
	     and pressing F5.
			       
	     c.  You can press ESC once to start another circle somewhere 
	     else in the window.
		       
	     d.  You can press ESC twice to return to the edit 
	     screen.
	 
    If you select the "Ellipse" option, you will need to define the height
    and width of the ellipse in addition to the center.
		   
	 1.  The function will prompt you to move the cursor to the  center
	 of the ellipse and press F6.
		   
	 2.  After you've marked the center of the ellipse, the  program
	 will prompt you to move the cursor to the top of  the ellipse and
	 press F6.  You are actually marking the  height, so you don't have
	 to worry about centering the  cursor on the vertical axis.  The

	 Chapter 5.  DRAW Mode Editing				     5.3

		   
	 program will remember the spot even though it doesn't mark it
	 with a flashing  dot.
		       
	 3.  The program will prompt you to move the cursor to the side of
	 the ellipse and press F6.  Again, you are actually marking the
	 width, so you don't have to stay on the horizontal, and you can
	 use the left or right side.  After you press F6, the program will
	 draw the ellipse.  Now you can do one of the following.
			   
	      a.  You can draw another ellipse using the same center, 
	      just by repeating steps 2 and 3.
			       
	      b.  You can UNDO your ellipse by pressing F9, and then 
	      redraw the ellipse by repeating steps 2 and 3.
			       
	      c.  You can press ESC once to start another ellipse or 
	      circle somewhere else in the window.
			       
	      d.  You can press ESC twice to return to the edit screen.
	 
	     
			     Line Function [F6]   
	     
    This function draws a line between two points in the window.  The
    function will draw a straight line or dashes depending on how the F10
    LINE/DASH option is set.  The LINE/DASH option will appear when you
    select this function.  The Line function works like this.
		   
	 1.  The function will prompt you to move the cursor to the start 
	 of the line, and then press F6.  The starting point will flash on
	 the screen until the line is completed.
		   
	 2.  The function will prompt you to move the cursor to the end of
	 the line and press F6.  The program will then draw a line between
	 the two points.  Now, you have several options.
		   
	      a.  You can continue drawing a line using the last point as
	      the first point of the next line.  Just move the cursor to
	      the end of the new line and press F6.  The program will draw
	      a line between the end of your last line and your new point.
	      You can repeat this as often as needed.
				     
	      b.  You can UNDO the line you just drew by pressing the F9
	      key.  Your first point will still flash, so just move the
	      cursor to a new end point and press F6. 
				     
	      c.  Press ESC once if you want to start a new line somewhere
	      else in the window.
				     
	      d.  Press ESC twice to return to the edit screen menu.

	 DRAW Mode Editing                                           5.4
	 
	 
			     Block Functions [F7]
	     
    Block functions in DRAW mode operate on an area in the window.  You
    define the area by drawing around it with the cursor.  The function is
    used like this. 
	 
	 1.  First this function will prompt you to select an option of
	 move, copy, or delete, by pressing the F3, F4, or F5 key. 
	 
	 2.  The function will prompt you to draw around the area using 
	 the shift key and the cursor keys.  You can draw around the area
	 in any shape you like, but the line you draw must completely
	 enclose the area.  The enclosed area does not include the line you
	 draw.  After drawing the line, press the function key for the 
	 option you have selected.
	 
	 3.  The function will prompt you to move the cursor to a point
	 inside the area you enclosed.  This reference point will
	 determine how to locate the area.  Press the function key after
	 you have moved the cursor.  If you are using the "Delete" option,
	 this completes the deletion.
	 
	 4.  Move the cursor to the target area and press the function 
	 key.  The enclosed area will be moved or copied to the target
	 area.  The program will align the reference point in the enclosed
	 area with the location of the cursor. 
		 
	 5.  Press ESC once to return to the block edit menu, twice to 
	 return to the DRAW mode menu line.
			   
	 The following block functions are available. 
		   
	      Move [F3]  
	 
	 This option moves an area from one location in the window to
	 another.
		   
	      Copy [F4]  
	 
	 This function copies an area from one location in the window to
	 another.  
			 
	      Delete [F5]   
	 
	 This function deletes an area in the window.
	 
	 
				   UNDO [F9]
	      
    When you see the F9UNDO function on the menu line, it means you can
    undo the last function you performed just like in TEXT mode.  The UNDO
    function is removed if you draw a line with the shift and cursor keys.

	 Chapter 5.  DRAW Mode Editing				     5.5

		   
		      HELP Screen of Cursor Keys [Alt-H]
	      
    The HELP screen for DRAW edit mode screen describes the keys you can
    use for editing in DRAW mode.  You may want to refer to this screen
    until you become more familiar with FLODRAW.

	 Chapter 6.  Using FLODRAW                                   6.1

				Using Tab Keys
	      
    Using the tab keys is the easiest way to ensure that your symbols will
    be aligned correctly.  The tab locations form an invisible grid on your
    diagram, and as long as symbols are entered on the tab locations, they
    will appear aligned and evenly separated.
	 
    Here are some general rules about how FLODRAW uses the tabs.
    
	 1.  When FLODRAW inserts a symbol, it remembers where the cursor
	 was when the symbol was inserted.  We'll call the location that
	 FLODRAW remembers "the original cursor location".
	 
	 Simple editing commands like entering text and drawing lines do
	 not reset the original cursor location.  Even though you use the
	 cursor keys to move the cursor around the screen, when you press
	 the tab key, FLODRAW remembers the original cursor position, and
	 starts the tab from that position.
	 
	 This allows you to insert a symbol in your diagram, enter text in
	 the symbol, or draw lines between symbols.  Then when you use a
	 tab key, the next tab location will line up with the last symbol
	 that you inserted. 
    
	 Editing commands that move the window, like PgUp, Home, Alt-S,
	 etc., do reset the original cursor position.  And, of course, the
	 tab keys also reset the original cursor position.
    
	 2.  You can change the original cursor position by moving the
	 cursor with the cursor keys to a new position and pressing Alt-W
	 (neW position).  This position does not have to be on a tab mark.
	 The next time you press a tab key, FLODRAW will tab starting from
	 this new position.
	 
	 3.  When you press a tab key, FLODRAW moves the cursor to the
	 original cursor position and then looks for the next available tab
	 in the direction indicated by the key press.  FLODRAW ignores the
	 tabs on the vertical ruler line when you tab left and right.  And
	 likewise, it ignores tabs on the horizontal ruler line when you
	 tab up and down.  Sometimes, it may appear that FLODRAW is seeking
	 both the vertical and horizontal tabs when you press a tab key. 
	 But this is because you moved the cursor from its original cursor
	 position before pressing the tab key.
	 
    When FLODRAW loads your program, it will position the cursor at the
    first tab location in your diagram.  If you want to start from the 
    center of the line, use Alt-C (Center tab) to move the cursor to the
    tab location in the center of the line.
	 
    If you need to align the cursor with a tab location, you don't have to
    use the tab keys.  Just move the cursor near the tab area and press
    Alt-G (Get nearest tab).  FLODRAW will position the cursor at the
    nearest intersection of the horizontal and vertical tabs and reset the
    original cursor location.

	 Chapter 6.  Using FLODRAW				     6.2

		   
    You may want to change the tab marks if your symbols are consistently
    smaller or larger than the size of the flowchart symbols.  You can
    change the location of the tab marks using the "Setup Options" function
    on the entry menu.  And you can save the tab locations so they will
    be reloaded the next time you use FLODRAW.
	 
	 
			   Sketch Your Diagram First
    
    Nothing beats pencil and paper to plan a diagram (if it's a group
    effort, a blackboard works well, too).  Some diagrams are simple enough
    that you won't need to plan ahead.  But most require some kind of plan
    so that the final diagram is easy to read and contains all necessary
    information.  Sketch your diagram on paper first.  Try rearranging your
    symbols for the best design.  Remember that your first design is
    probably not the best.  Like anything else, it takes several tries to
    find the right approach.  
    
    Your sketch doesn't have to be as complete or detailed as your final
    diagram will be.  You just need to plan the major components of your
    diagram.  And don't try to make your sketch look neat.  That's
    FLODRAW'S job.  A neat sketch gives the appearance of a finished
    design.  And if it looks finished, you'll tend to resist making changes
    to it.  That's not what you want when you're still in the planning
    stage.  You want a sketch that invites changes and new ideas.  Work
    with your sketch until you feel comfortable with the design.  Now
    you're ready for FLODRAW.
    
	 
		       Starting Your Diagram with a Template
		    
    You can use FLODRAW to create diagrams with a template diagram.  Just
    save the template as a separate diagram.  Each time you create a new
    diagram, merge the template diagram into the new diagram before you
    start to edit it.  You could also include the template on your symbol
    file.  Here is the procedure for merging a template diagram into your
    empty diagram.  We'll assume you've created a template diagram called
    'TEMPLATE' and that you keep this file on your program disk.
	 
	 1. Put the program disk in drive A.
		  
	 2. Put your data disk in drive B.
		  
	 3. Enter "FLODRAW B:MYCHART.01" where MYCHART.01 will be the name
	 of your new diagram.
		  
	 4. FLODRAW will prompt you for a page format. Reply with F1 for a
	 portrait format diagram.
		  
	 5. When FLODRAW shows a blank edit screen, press F8 for the
	 "Merge" function.  Press F8 again to merge center. When you're
	 merging a file into a diagram and they are both the same size, it
	 doesn't matter which "Merge" option you use, or where the cursor
	 is.   FLODRAW will align the merge file correctly.

	 Chapter 6.  Using FLODRAW				     6.3

		   
	 6. FLODRAW will prompt you for the merge file name.  Type the
	 filename TEMPLATE or select it from the directory listing using
	 the bounce bar.  FLODRAW will merge the file into your diagram.
		  
	 7. Press ESC to return to the edit menu.
		  
    You can easily create templates in TEXT mode using the cursor to draw
    lines (holding down the shift key and pressing the cursor key).  You
    can draw long lines quicker by drawing the start and end of the line
    using the cursor keys, then using the "Line" function to fill in the
    middle.  Press F6 for the "Line" function, then press F9 to toggle the
    ARROW option to NO ARROWS, before selecting your line option.
			
			
			  Drawing Organization Charts
			    
    You can draw organization charts using one of the flowchart box
    symbols.  To illustrate how to draw organization charts quickly, here
    is the procedure to draw a simple two level chart.  Our example has a
    president at the top level and two vice-presidents at the second level.
    First we'll draw the boxes.  Then we'll draw the connecting lines, and
    finally, we'll fill in the text.  In this example, we'll use the box
    symbol from the flowchart library in FLODRAW.LIB.
	 
    We'll draw the chart using the TEXT mode edit screen.  The symbols have
    been designed so that the lines drawn with the TEXT mode cursor will
    connect with the lines of the symbol.
	 
	 1. Draw the box for the president.
    
	      a. Press F10 to bring up the symbol menu. 
    
	      b. Position the cursor at the location for the first 
	      chart entry by pressing Alt-C for center, then Alt-G 
	      to get the nearest tab.  Press F1 to select the box 
	      from the symbol menu and insert it in your diagram at 
	      the cursor location.

	 2. Draw the box for the first vice-president.
    
	      a. Press Alt-D to tab down to the second level.  
    
	      b. Tab left to position the cursor for the first box 
		 on the second level, and press F1 to draw the box. 
	   
	 3. Draw the box for the second vice-president.  Tab right twice 
	 and press F1 to draw the second box.  
	   
	 4. Draw the lines connecting the boxes using the shift key and 
	 the TEXT mode cursor.  
	     
	 5. Now finish by adding text to the boxes.

	 Chapter 6.  Using FLODRAW				     6.4

		   
			       Printing Diagrams
	      
    FLODRAW uses the entire area of a diagram as the drawing area.  This
    means you must allow for your own margin space at the top, bottom, and
    sides, if you expect to see margins on your printed diagram.  For
    example, if you want a 1 inch margin on the left side of the diagram
    for a 3 hole punch, you would leave the first 10 columns of the diagram
    blank.
	 
    Since row 1 is at the top of the page, you will normally start your
    drawing several rows below 1 to give your diagram a margin at the top
    of the page.  Make sure the print head is aligned with top of the paper
    before printing, so that the first several blank rows will provide the
    margin you expect. 
		  
    The one exception to this is if you are using the HP LaserJet printer
    with the reduced format option.  This print option is only available on
    the LaserJet, and it provides a wide margin around the page.  If you
    select this option, you can use the entire print area for your diagram.
	 
	 
				Printer Support
				  
    FLODRAW supports the printers listed below. If your printer is not
    mentioned here, check your printer manual to see if your printer
    emulates one of the printers that FLODRAW can use.  Many printers
    provide emulation modes for the EPSON MX, FX, or IBM Proprinter.  
	 
    Print time depends on how much is on your diagram.  Diagrams that are
    very "busy" will take longer to print than diagrams that have a lot of
    blank space.
	 
	      EPSON FX  
    
	 FLODRAW was originally designed to work with the FX printer's CRT
	 graphics mode (640 dots per 80 character line).  It's the fastest
	 print mode for a dot matrix printer and the print quality is very
	 good. It's called single strike on the print menu.
			 
	 The bold strike uses quad density (1920 dots per 80 character
	 line), but takes 3 times as long. However, the print quality is
	 very good. 
			 
	      EPSON LQ   
	 
	 FLODRAW uses triple density bit mode on the LQ printer (1440 dots
	 per 80 character line).  Very good print quality.
	 
	      EPSON MX   
	 
	 FLODRAW uses the double density bit mode on the MX printer (960
	 dots per 80 character line).  This produces a "rough" print which
	 is not as even as printers with higher density.  But it's
	 acceptable for draft quality.  

	 Chapter 6.  Using FLODRAW				     6.5

		   
	      IBM Proprinter   
	 
	 FLODRAW uses quad density (1920 dots per 80 character line) for
	 both single strike and bold strike on this printer.  So the print
	 time will be the same.  If you have a Proprinter, try both modes
	 and select the one you like best. Print quality is very good.
			 
	      Toshiba P321/341/351   
	 
	 FLODRAW uses triple density (1440 dots per 80 character line). 
	 Print quality is very good.
						  
	      Star Gemini 10x   
	 
	 Similar to the Epson MX, it produces draft quality output.
	 
	      HP LaserJet plus/II   
	 
	 There are two print options available with the LaserJet, reduced
	 and full/reduced.  Both produce excellent print quality.  
	 
	 The reduced print option prints a diagram reduced in size about
	 20% compared to the full option.
	 
	 When you select the full/reduced option, the edit screen will show
	 dotted margin lines on the bottom and right side of your diagram.
	 To use the full option, your diagram must not cross the dotted
	 margin lines on the left and bottom of your diagram page.  If you
	 do cross the margin lines, the printer will use the reduced
	 option.  If you do not cross the margin lines, the printer will
	 use the full option (hence the "full/reduced"; it could be either
	 depending on whether or not you cross the margin lines).  The
	 margin lines are only visible when you select the full/reduced
	 option.
	 
	 Try both print options to decide which you prefer.  Create a small
	 sample diagram and print it using the reduced option, and then
	 print it using the full/reduced option.  When printing with the
	 full/reduced option, make sure your diagram does not cross the
	 dotted margin lines.  After comparing the output from the two
	 options, save your preferred print option on the option file.
	 
	 Most laser printers are compatible with the HP LaserJet Plus or
	 II.  Some laser printers also emulate dot matrix printers.  If
	 your laser printer emulates the FX-80 printer, try printing a
	 diagram with the FX-80 emulation.  Then use the print mode which
	 gives you the best combination of print quality and speed.

	 Chapter 7.  Symbol Libraries                                7.1

	 
		    What are Symbols and Symbol Libraries?
    
    Symbols are pictures that may be used repeatedly when drawing a
    diagram.  Usually, they're small, since the program was designed to
    display small symbols.  However, symbols could be the size of the
    diagram itself.  
	 
    This program makes it easy to draw diagrams that require the use of
    standard symbols.  For example, drawing an electrical diagram may
    require the same drawing of a resistor several times.  By having the
    resistor symbol already stored in the computer's memory, you can call
    it up whenever you need it.  This saves the time of drawing it or
    copying it each time you need a diagram of a resistor.
	      
    A symbol library is a collection of symbol files in one file. A symbol
    library usually contains symbols that are related or used in the same
    application.  For example, the symbol library called FLOCHART.LIB
    contains symbols that are used to draw computer system flowcharts.  A
    DOS batch file called LIBRARY.BAT is used to collect the symbol files
    into a single file.  We'll discuss how you can create your own symbols
    and then add them to a library.

				 
			       Creating Symbols
	      
    You create symbols while you're editing a diagram.  It doesn't matter
    whether you're working on a diagram and suddenly realize you need a
    symbol.  Or you have an idea for a library of symbols, and just want to
    bring up the edit screen to create symbols.  The procedure is the same.
	 
    If you are already in the edit screen of a diagram, you're ready to
    start.  If you aren't working on a diagram, and just want to create
    symbols for later use, start FLODRAW and use the name of any file, say
    TEMP (for temporary).  We won't save the temporary file.  It will just
    provide us with an area to work in.
	 
    If you are working with a portrait format diagram, you might want to
    toggle to TEXT mode, and then press Alt-F1 to switch to the alternate
    buffer. This will provide you with a large scratch pad to design your
    symbol, so you don't overwrite your diagram by mistake.  After you've
    created the symbol and saved it from the alternate buffer, you can move
    it back to your diagram using the "Move" function or merge the saved
    symbol into your diagram using the "Merge" function.
	 
    Now, let's take a closer look at how we create a symbol.  You can
    design your symbol using the drawing tools in FLODRAW.  Let's say you
    want to create a library of symbols for diagrams describing how
    furniture should be arranged in a room.  One of the symbols you will
    need will be a chair.  So, in our example, you will draw a symbol of a
    chair and call it CHAIR.SYM.  Symbols must have an extension of SYM in
    order to be recognized by the batch file, LIBRARY.BAT.

    After you have drawn the symbol for the chair, toggle to TEXT mode if
    you're not already in TEXT mode.  Press F3 for the "Save" function.
    Then press F1 for the"Save symbol" option.  The "Save symbol" option

	 Symbol Libraries                                            7.2
	 
	 
    will prompt you for the following cursor locations.
	 
	 1. The upper left corner of the symbol.  Symbols are always stored
	 as rectangular blocks.  Move the cursor to the upper left corner
	 of the symbol.  The cursor row and column define  the top row and
	 left column of the symbol. Then press F1.
	      
	 2. The first cursor location in the symbol.  When the program
	 draws the symbol on a diagram, it will locate the cursor inside
	 the symbol at the location you specify here.  This is handy if you
	 expect to write text inside the symbol.  You can have the cursor
	 appear at the first character location for text.  If you don't
	 care where the cursor appears, you can leave it at the upper left
	 corner.  Press F1 to continue.
	      
	 3. The middle of the symbol.  This is a reference point for
	 locating the symbol.  When the program draws the symbol, it will
	 align the middle of the symbol with the location of the cursor. 
	 This is usually in the middle of the symbol, but it doesn't have
	 to be.  Press F1 to continue.
	      
	 If you're creating a symbol that's designed to be repetitive, as
	 in a border or a line, you can put the first cursor location on
	 the extreme right side of the symbol.  Put the middle of the
	 symbol at the extreme left side of the symbol.  When you're ready
	 to use the symbol from a library, you can "walk" the symbol from
	 left to right just by repeating the symbol.  The horizontal line
	 symbols in the HIPO library are designed this way.
    
	 4. The lower right corner of the symbol.  The cursor row and
	 column will define the bottom row and right column of the symbol. 
	 Press F1.
	      
	 5. The name of the symbol. In our example, we would enter
	 CHAIR.SYM.  And our symbol for the chair is saved as CHAIR.SYM on
	 the default drive.
	      
	 6. To verify that you have successfully saved the symbol the way
	 you wanted to, use the "Merge" function.  Select the "Merge"
	 option to center the symbol, and move the cursor  to an empty area
	 of the diagram or scratch pad.  When  prompted for the name, enter
	 CHAIR.SYM.  You should now  see your symbol displayed on the
	 diagram.
	      
				     
				Editing Symbols
	      
    You can edit a symbol by merging it into a diagram, or by editing the
    symbol file itself.  In either case, when you save the symbol, you have
    to use the "Save symbol" option of the "Save" function in TEXT mode,
    and you will have to enter all the locations required by the "Save
    symbol" option.  If you try to use the "Save file" option, you will
    save the whole diagram, rather than just the symbol.
	      
    Where possible, use the TEXT mode line drawing option.  You'll find

	 Symbol Libraries                                            7.3
	 
	 
    it's faster and easier to correct symbols drawn in TEXT mode.   


			      Creating Libraries
	      
    You use the batch file LIBRARY.BAT to add symbols to a new or existing
    library.  LIBRARY.BAT will work with 8 symbols at a time, but your
    symbol library can be much larger than that.  The symbol library can be
    as large as 16k which is large enough for thirty-two 500-byte symbols,
    although most symbols are only several hundred bytes.  FLODRAW will
    allow up to 64 symbols in a library.
	      
    Let's call your library ROOM.LIB.  Let's say you've created three
    symbols for your library.  And those symbols are called CHAIR.SYM,
    TABLE.SYM, SOFA.SYM.  You'll use LIBRARY.BAT to create your library
    like this.
	 
	 1.  Put your three symbol files and the LIBRARY.BAT file on a new
	 disk that we'll call a library disk.  If you're going to create
	 your own symbol libraries, you'll find it more convenient to have
	 all your library files, your  symbol files, and LIBRARY.BAT on one
	 disk. 
    
	 Hard disk users may find it more convenient to keep the symbol
	 files on a separate directory with LIBRARY.BAT.  And then after
	 creating the libraries copy them to the FLODRAW default directory.
		  
	 2.  Run the batch file with the following command.  We'll  assume
	 you will run the batch file from the default drive or directory.
	      
	 LIBRARY ROOM CHAIR TABLE SOFA
		  
	 This command executes the batch file LIBRARY.BAT to add to or
	 create a library called ROOM.LIB using the symbol files CHAIR.SYM,
	 TABLE.SYM, and SOFA.SYM.  
		  
	 3.  The batch file will look for the library ROOM.LIB, and when
	 it can't find it, it will create a new library using your three
	 symbol files.  Before it creates the library, it will tell you
	 what it's going to do.  You can abort the batch command at this
	 point and start over.
		  
	 After you have created the library ROOM.LIB, you are ready to use
	 it.  When you want to use these library symbols in a diagram,
	 select the "Load new symbol library" function from the entry menu.
	 This function will prompt you for the library name.  Put your
	 library disk in drive A and answer the program prompt with  "ROOM"
	 or select the library from the directory listing using the bounce
	 bar.  The program will load the library, and you can return to
	 the edit screen to use the symbols in library ROOM.
		  
	 You can also make any library the default library that the program
	 loads at start-up.  The default library is called FLODRAW.LIB. 

	 Symbol Libraries                                            7.4
	 
	 
	 FLODRAW.LIB is distributed as a copy of FLOCHART.LIB.  You can
	 change FLODRAW.LIB to another library simply by copying your
	 library to FLODRAW.LIB.  Since FLODRAW.LIB must be on your program
	 disk, let's say you're going to copy ROOM.LIB from your library
	 disk in drive B to your program disk in drive A.  Type in the
	 following DOS command.
		  
	 COPY B:ROOM.LIB A:FLODRAW.LIB
		  
	 This command copies the library file ROOM.LIB to the default
	 library file FLODRAW.LIB.  The next time you use FLODRAW, the
	 library ROOM.LIB will be loaded as the  default library.  
	      
	      
			       Maintaining Libraries
			       
	 After you have created a library, you can still add symbols to it.
	 Use the batch file LIBRARY.BAT the same way as you used to create
	 a new library.  As an example, suppose you created two new symbols
	 for your library, ROOM.LIB.  These symbols are LIGHT.SYM and
	 DESK.SYM.  To add these symbols to your library, copy the symbols
	 to the library disk.  Then type the following DOS command.
	 
	 LIBRARY ROOM LIGHT DESK
	 
	 This command will execute the batch file LIBRARY.BAT.  LIBRARY.BAT
	 will look for the library file ROOM.LIB, and finding it, will
	 prepare to add your symbol files to it.  LIBRARY.BAT will prompt
	 you to continue before it actually adds the symbols to the
	 library.
	 
	 If you want to replace a symbol in the library, you must delete
	 the old library and recreate it from the beginning using the
	 replacement symbol.  If you want to change the sequence that the
	 symbols appear on the symbol menu, you must also delete the old
	 library.  You can then recreate it by entering the symbols in the
	 sequence you want them to display on the symbol menu.
	 
	 You can create the original symbol files by loading the library,
	 inserting the symbols into a diagram, and then saving them using
	 the save symbol option of the TEXT mode "Save" function.

	 Appendix A.  Error Messages				     A.1

    When FLODRAW detects an error, it beeps to get your attention, then
    displays a message on the error line.  The error line is at the bottom
    of the entry menu or on the ruler line if you're in the edit screen. 
    The format of the error message is:
	      
	 (error number)   (error description)
	 
	 For example:  003  Try another key.
	      
    The errors are listed below in error number sequence.  An explanation
    follows each error message.
	      
	      001  A graphics monitor is required 
		   FLODRAW will only work with a monitor driven by a color 
		   graphics adapter.
		  
	      003  Try another key
		   Not all key presses are valid with each menu.  Look at
		   the menu line for a list of valid function keys.  ESC
		   will work at any time to take you back to the previous
		   screen.
		   
	      006  File name invalid
		   The name you entered as a file name is not a valid DOS
		   file name.  Follow the rules for naming DOS files.
		   
	      008  Write unsuccessful - disk full
		   There is not enough space on the disk to save your
		   diagram file.  Use a disk with sufficient free space.
		   
	      009  Temporary file not deleted
		   FLODRAW tried to delete a temporary file that you did not 
		   want to save, but could not.  You can delete the file 
		   yourself with the DOS ERASE command.
		   
	      010  File cannot be found
		   Your file name cannot be found in the current directory.
		   Check that you spelled the name correctly.
		   
	      011  Cannot find end of line
		   FLODRAW is trying to generate a line but cannot find a
		   starting or ending point for the line.

	      013  Second cursor entry is invalid
		   The function you are using requires that the cursor
		   location be within certain bounds.
    
	      015  Cursor too close to edge of screen
		   FLODRAW won't draw a character of arrowhead if it is 
		   too close to the edge of the screen.  Move the window
		   on the diagram so the cursor is not as close to the
		   edge of the screen.
	 
	      016  Cursor too close to edge of page
		   FLODRAW won't draw arrowheads, small font characters, 
		   and large font characters if they are too close to the

	 Error Messages 					     A.2
	 
	 
		   edge of the page.  Draw them in the middle of the page,
		   then move them to the edge of the page.
    
	      021  Symbol library is too large to load
		   You are trying to load a symbol library that is larger
		   than FLODRAW can hold.   
		   
	      022  This is not a FLODRAW file
		   You have tried to load a diagram that did not come from
		   FLODRAW.
	      
	      023  Too many symbols in library
		   You are trying to load a library that has more symbols 
		   than FLODRAW can handle.
		   
	      024  Symbol too large to load
		   You are trying to load a library that has a symbol too
		   large for FLODRAW to handle.
		   
	      026  File is too large to load
		   You are trying to load a file that is larger than the
		   current diagram.  This would occur if you tried to
		   merge a landscape diagram into a portrait diagram.
		   
	      027  Error saving block, please retry
		   FLODRAW was not successful with the last "Save" function.
		   
	      028  Current file has not been saved
		   You have requested printing all flagged files, but you
		   have not saved the current diagram.  If you don't save
		   it, you'll lose it when you print other files.
	 
	      031  No files found in directory
		   The current directory has no files to display.
		   
	      032  Invalid drive letter
		   You have specified a drive letter that is not on your
		   system.
	 
	      033  Scratch file-save with entry menu
		   You are trying to use the "Save" function on the edit
		   screen with a file that has not been named.  Return to
		   the entry menu and use the "Save with new name"
		   function.
		   
	      034  Path not found
		   You have tried to change the path with the directory
		   option, but the program could not find the path you
		   requested.
	 
	      035  Error opening FLODRAW.OPT
		   The program could not find FLODRAW.OPT. Check that the
		   file is in the current directory.

	 Error Messages 					     A.3
	 
	 
	      036  Error reading FLODRAW.OPT
		   The program could not recognize FLODRAW.OPT. Use the 
		   FLODRAW setup option function to create a new
		   FLODRAW.OPT.
		   
	      037  LIB file must have LIB extension
		   All library files must have an extension of LIB.
		   
	      041  No LIBs in FLOPT directory
		   FLODRAW could not find any library files in either the
		   current directory or the FLODRAW default directory.
		   
	      046  Error changing to FLOPT directory
		   Check the path name on the SET FLOPT= command on
		   your CONFIG.SYS file.
		   
	      047  No LIBs in dir and no FLOPT dir
		   FLODRAW could not find any library files in the current
		   directory and no FLOPT directory was setup in
		   CONFIG.SYS.
		   
	      049  Too many files in directory!!!
		   You have more filenames in your directory than FLODRAW 
		   can handle.  FLODRAW can handle 834 filenames.
		   
	      052  Top of directory
		   You are at the top of the directory display.
		   
	      053  Bottom of directory
		   You are at the bottom of the directory display.
		   
	      061  No errors            
		   This error message is used to show the location of
		   the error line.
		   
	      071  Open error on print flag file
		   FLODRAW was not able to open FLODRAW.PRT in the current
		   directory.  FLODRAW.PRT contains the names of the files
		   to be printed.  Erase FLODRAW.PRT and flag all the files
		   you want to print to create a new FLODRAW.PRT.
		   
	      072  Read error on print flag file
		   FLODRAW was not able to read FLODRAW.PRT.  Erase 
		   FLODRAW.PRT and flag all the files you want to print to 
		   create a new FLODRAW.PRT.
	 
	      073  Print flag file is too large     
		   FLODRAW was unable to read all the records in 
		   FLODRAW.PRT.  Erase FLODRAW.PRT and flag all the files
		   you want to print to create a new FLODRAW.PRT.
		   
	      074  No more room in print flag file 
		   FLODRAW was unable to add another filename to
		   FLODRAW.PRT.  Print the flagged files you have before
		   continuing.

	 Error Messages 					     A.4
	 
	 
	      075  Name not found in print file
		   FLODRAW tried to find a filename in FLODRAW.PRT to
		   delete but could not.  No action required.
		   
	      076  Print file name not in directory
		   FLODRAW.PRT has a filename that is not in the current
		   directory, so FLODRAW is unable to print the file.  The 
		   file may have been deleted, so no action is required.
	 
	      077  Using page = 01, press any key...
		   You tried to use the "Autopage" function, but the filename
		   extension is not a page number between 01 and 99.  
		   FLODRAW will use 00 when you press a key. This error
		   also occurs when you load a diagram that has the
		   autopage prefix but the filename is not a page number.
		   Change the name of the file so that it has a page number
		   as a file extension.
	 
	      079  Using total = 01, press any key...
		   You tried to use the "autopage total" function, but
		   FLODRAW could not find any files with the same name that
		   had page number file extensions.  This error also occurs
		   when you load a diagram that has the autopage total
		   prefix and there are no files with the same name with
		   page number file extensions.  Change the name of the
		   file so that it has a page number as a file extension.
		   
	      081  No help available for this screen 
		   This screen does not have its own help screen.
		   
	      082  No HELP-press any key to continue...
		   This message only appears in test versions of FLODRAW.
		   
	      084  Save current file before inserting 
		   The file you are editing is a new file and has not been
		   saved.  Before you can insert a multiple page file, you 
		   have to save the file you are editing.
		   
	      085  File extension is not a page number 
		   Change the file name so that the file extension is a 
		   page number between 01 and 99.
		   
	      087  Highest page nbr is already at 99 
		   You already have a file with an extension of 99.  
		   FLODRAW can only handle page numbers up to 99.
		   
	      108  Bottom of page
		   You have reached the bottom of the diagram.
		   
	      109  Top of page
		   You have reached the top to the diagram.
		   
	      110  Right side of page
		   You have reached the right side of the diagram.

	 Error Messages 					     A.5
	 
	 
	      111  Left side of page
		   You have reached the left side of the diagram.
    
	      121  2nd buffer is not active
		   You are trying to switch to the 2nd buffer, but you 
		   can only do it if you have loaded a portrait format
		   diagram in the 1st buffer.
	 
	      131  There are no more files
		   You requested the next or previous file in a multiple
		   page diagram.  But you are already at the last file.
		   
	      133  Not available during DEMO
		   Some key presses, notably Alt-F1, are not available
		   during a DEMO.  This is only to keep you from 
		   accidentally creating a DEMO file.
		   
	      134  DEMO cannot be saved
		   This keeps the DEMO files intact so they can be used
		   again.
		   
	      201  Subject too large to copy or move
		   You are trying to use the TEXT mode "Copy" or "Move"
		   block function, but your block is too big for FLODRAW 
		   to handle.
		   
	      205  Subject too large to save for undo
		   You are trying to use a function that would allow you to
		   use the UNDO function, but there is not enough room.
		   Retry with a smaller block.
		   
	      211  Check line boundary or reference point 
		   You are trying to do a DRAW mode block function, but you
		   did not completely enclose your subject, or you did not
		   set the reference point inside the enclosure.
		   
	      213  Ref pt too close to edge of screen     
		   When you do a DRAW mode block function, you must keep
		   the reference point more than 1 character from the edge
		   of the screen.
		   
	      901-999 are reserved for system error messages.  System error
		   messages should not occur during normal use of FLODRAW.

	 Appendix B.  User Supported Software			     B.1


    FLODRAW is marketed as "User Supported Software". User Supported Software
    is also know as "Shareware". This method of software marketing has become
    increasingly popular in the last few years.  It has helped provide the
    personal computer community with many quality software programs at very
    reasonable prices.


		       What is User Supported Software?

    User Supported Software is software you try before you buy.  Unlike
    commercial software, the author encourages you to copy the program freely
    and share it with others.  Because sharing software is encouraged, you can
    get copies of programs from friends or business associates, computer club
    and user group libraries, bulletin board systems, and shareware vendors.

    This unique distribution network benifits the author by providing a low
    cost method of marketing the software, a benefit that is passed on to you
    in lower prices.  But it also benefits you by giving you easy access to a
    wide variety of programs that you can try out on your own.  It's
    successful because this is the full featured working version of the
    program, not a demonstration or crippled copy.  

    You can try the program out in your home or where you work, at your
    convenience, at your own pace, and on your own computer system.  You
    decide whether the program suits your needs or not.  If you decide to keep
    the program, you are trusted to purchase the program from the author.

		 What do you get if you pay for the program?

    If you pay for the program you'll receive
    
	 1.  The latest version of the program.
	 2.  A printed manual.
	 3.  Notification of program updates.
	 4.  Offers to upgrade at low cost.
	 5.  Technical support by mail.
	 6.  Satisfaction in participating honestly in this unique method
	     of software marketing.
    
    Your payment also shows that you support the concept of User Supported
    Software.  Your support will insure that this concept will continue to
    grow as a low cost alternative to expensive commercial software.

	 
	     Licensing for Commercial and Government Organizations
	 
    Each registered copy of FLODRAW is licensed for use on one computer.  If
    you will use FLODRAW on more than one computer, you must purchase one copy
    for each computer.  Please see the multiple copy discounts on the
    registration form.

	 User Supported Software				     B.2


				Restrictions

    Please copy and share this program freely with friends and associates. 
    The following restrictions protect you and the author from persons who
    would misuse the right to copy and share this program.

	 1. You cannot charge a price for this program.  However, you may
	 charge a distribution cost to cover the cost of the diskettes, 
	 postage, and handling, as long as it is not more than $10.

	 2. You cannot sell this program as part of another package.

	 3. You cannot modify, delete, or add to any of the files that are
	 included with this program.

	 4. You may upload this program to a bulletin board system only if
	 you combine all the files on each diskette into a single library
	 or archive format file.
	 
	 5. Schools and educational institutions may distribute copies of
	 FLODRAW to students under the following conditions.
    
	     a. The school or instructor must register 1 copy 
		of FLODRAW in order that you have the latest 
		update.
	
	     b. You do not charge the student more than the 
		cost of the disk.
     
	     c. you provide each student with the following 
		notice.

	  +--------------------------------------------------------+
	  |                                                        |
	  |   This copy of FLODRAW is provided to you as a         |
	  |   courtesy of (school or instructor name) and the      |
	  |   author of FLODRAW.  The school has not paid a        |
	  |   registration fee for this copy, but the author       |
	  |   allows you to use this copy without registering      |
	  |   as long as you use it as a student.                  |
	  |                                                        |
	  |   If you would like to receive a printed manual and    |
	  |   the latest copy of the program, you may purchase     |
	  |   a registered copy.  Please refer to the              |
	  |   registration instructions in the documentation       |
	  |   or the program.					   |
	  |                                                        |
	  |                      George Freund                     |
	  |                      P. O. Box 203                     |
	  |                    Mentor, OH  44061                   |
	  |                                                        |
	  +--------------------------------------------------------+

            F L O D R A W   2    R E G I S T R A T I O N   F O R M
         
       Send this form                         Date: ______________
       with payment to:
        
       George Freund                          Federal Employer ID No.
       P.O. Box 203                           Use SSN 160-36-5172           
       Mentor, Ohio 44061
         
       Please register my copy(s) of FLODRAW to:
      
       Name    _____________________________________________________
      
       Company _____________________________________________________
      
       Address _____________________________________________________
      
       City    ___________________________ State _____   Zip _______  
         
   +------------------------------------------------------------------------+
   |                                                       Unit    Extended |
   |    Qty   Description                                  Price     Price  |
   +------------------------------------------------------------------------+
   |                                                                        |
   |    ____  FLODRAW 2 Registration package              $35.00   ________ |
   |          Includes program disk and printed manual                      |
   |          Disk size?   5 1/4___   3 1/2___                              |
   |                                                                        |
   |	      Discount for 5 or more registrations		 - ________ |
   |	      (total of registration pkgs & registrations below)	    |
   |		  For 5 to 9 registrations ..... deduct 20%		    |
   |		  For 10 to 24 registrations ... deduct 25%		    |
   |		  For 25 to 49 registrations ... deduct 30%		    |
   |		  For 50 registrations or more . deduct 35%		    |
   |                                                                        |
   |          Ohio residents, please add 5.75% sales tax         + ________ |
   |                                                                        |
   |	      Shipping & handling for registration pkg order	 +     2.50 |
   |                                                                        |
   |          Orders outside U.S. and Canada, please include     + ________ |
   |          additional $2.50 shipping & handling                          |
   +------------------------------------------------------------------------+
   |                                                                        |
   |    ____  FLODRAW 2 Registration only                 $25.00   ________ |
   |          Does not include disk or printed manual                       |
   |                                                                        |
   |          Discount (See discount schedule above)             - ________ |
   +------------------------------------------------------------------------+
   |                                                                        |
   |          Total amount enclosed                                ________ |
   |                                                                        |
   |    Payment: MasterCard__  VISA__  Check__ (US funds on US bank, please)|
   |                                                                        |
   |    Card number_________________________________  Exp. Date____________ |
   |                                                                        |
   |                                                                        |
   |    Signature__________________________________________________________ |
   |                                                                        |
   +------------------------------------------------------------------------+


		   

```
{% endraw %}

## UPDATE.DOC

{% raw %}
```








                                   FLODRAW 2.1



                               User Manual Update


    
    
    
    
    







    

                                                               
                                                               
           This update contains information about features that   
           were added to FLODRAW 2 to make FLODRAW 2.1.           
                                                               
           To use this update:                                    
                                                               
              1. Browse section 1 to see what's new.             
                                                               
              2. Refer to section 2 to install or upgrade.       
                                                               
                                                               
                                                                


         
         









    
    

    
    
                                Table of Contents
         

          Section 1 - Introduction ..............  1
          
                    What's New in Version 2.1
                    New Files Included with Version 2.1
                    Updated Files Included with Version 2.1
          
          
          Section 2 - Installation ..............  4
          
                    Distribution Disks
                    Using INSTALL.EXE
              
          
          Section 3 - Template Files ............  8
          
                    What Are Template Files?
                    Using Template Files
                    Creating Template Files
              
           
          Section 4 - Special Characters ........ 10
          
                    Using Special Characters
                    Defining Your Own Special Characters
              
           
          Section 5 - Libraries & Symbols ....... 12
          
                    Symbol Libraries            
                    Symbol Menu
              
           
          Section 6 - Other Edit Enhancements ... 14
          
                    Copy/Move Option to Save Keypress
                    Small/Big Block Function
                    Special Text Key Functions
                    
           
          Section 7 - Printing .................. 15
          
                    Printing with Wide Carriage Printers
                    Option for 12 Inch Form Length
                    Printing Draft Copies with Epson LQ Printers
                    Printing Draft Copies with Toshiba 24 Pin Printers
              

        Section 1 - Introduction                                1
            
        
                    What's New in Version 2.1
        
            
        FLODRAW 2.1 contains a number of new features that make 
        it more flexible as a diagramming tool.  The major features
        are described briefly below.
            
        
           1.  Template files (page 11).
        
               Initialize new documents with a template file
               that contains a skeleton diagram.  The template
               file is merged into your diagram when you
               select the page format.  The template file is
               optional. You can set the option file to use the
               template files or not. And you can override
               the option on the page format screen.
            
        
           2.  Special characters (page 13).
        
               Use 26 special characters on the Text Edit
               screen with keys Ctrl A through Ctrl Z.  You can
               customize these characters to suit your own
               needs.  Use them for foreign alphabet characters
               or small shapes.
            
        
           3.  Enhanced symbol menu (page 16).
        
               The symbol menu has been improved to show small
               symbols at 1/4 size or full size.  The number of
               symbols allowed in a library has been increased
               to 144.  To support the larger libraries, the symbol
               menu now has keypresses to display forward,
               backward, menu beginning, and menu end.
            
        
           4.  Wide carriage printer support (page 18). 
        
               Users with wide carriage printers can use the
               first 132 columns in the large landscape page
               format to print diagrams on 14.5 inch paper. The
               option file contains a carriage width that you
               can override at print time.
            

        Introduction                                            2           
        
        
           5.  A draft mode for Epson LQ printers (page 19).
        
               A fast draft mode is now available for Epson LQ
               printers. This mode compresses your diagram
               slightly. If your diagram is not full length,
               you can select a stretch option in this fast
               mode to make the diagram more readable.
            
        
           6.  A 12 inch form option for European users (page 18).
        
               This option was provided for European users who
               use 12 inch forms instead of 11 inch forms. 
               You can set this option on the option file.
               Note that this option does not change the size
               of the diagram, just the form length that the
               printer uses.
            
        
                New Files Included with Version 2.1
        
        
           COPYLIB.BAT is similar to LIBRARY.BAT except
                       that it works with libraries instead of symbols.
                       It provides an easy way to combine small 
                       libraries into a large library.
            
           FLODRAW.CHR is the FLODRAW system file that 
                       contains the descriptions of 26 special 
                       characters for the six normal size fonts and 
                       3 small fonts.
            
           FLODRAW.T#1   These files are the template files that can 
           FLODRAW.T#2   be used to initialize a new diagram. You 
           FLODRAW.T#3   can edit these files to suit your needs.
            
            
           SPECIAL.CHR contains the pattern for FLODRAW.CHR 
                       and instructions for customizing your own 
                       version of FLODRAW.CHR.
        
           DATAFLOW.LIB is a library of symbols used to draw 
                        dataflow diagrams.
        

        Introduction                                            3
        
        
           The following library documentation files are new files
           included on the library disk.  These files are FLODRAW 
           diagrams that show the symbols in the libraries.  The 
           files are named after the libraries they document.
        
           DATAFLOW.01
           ELECTRON.01 and ELECTRON.02
           FLOCHART.01
           HIPO.01
           MISC.01
           ORG.01
           SMALLFLO.01
        
        
            
        
               Updated Files Included with Version 2.1
        
            
           FLODRAW.EXE is the FLODRAW 2.1 program.  It requires
                       a minimum of 384k to run.
            
           LIBRARY.BAT was modified with improved error checking.
            
           DEMO was modified with minor corrections.
            
           ELECTRON.LIB (a library of electrical symbols) replaces 
                        ELECTRIC.LIB in previous versions. This
                        library has been revised and expanded. 
        
           ORG.LIB      (a library of organization chart symbols) 
                        was dropped with version 2.0 and has been 
                        included with version 2.1.
        
           SMALLFLO.LIB (a library of small flowchart symbols) was
                        dropped with version 2.0 and has been
                        included with version 2.1. 

        Section 2 - Installation                                4


        
        
        Use the following instructions instead of the installation 
        instructions in chapter 2 of the FLODRAW User Manual.      




                           FLODRAW Distribution Disks
        

        
        FLODRAW 2.1 is distributed on two 360k disks or one 720k 
        disk.  The two 360k disks have the following names.
        
             (1) The Program disk. This disk has all the files you  
                 need to run the tutorials and create your own
                 flowchart diagrams.
        
             (2) The Library disk.  This disk has additional 
                 libraries, library documentation files, library 
                 utilities, and sample diagrams.

        
        The single 720k disk has all the files contained on the
        two 360k disks.
        
        

        Installation                                            5
        
        
        
        
                               Using INSTALL.EXE
        
        
        The program INSTALL.EXE is on the FLODRAW Library Disk. If 
        you have a 3.5" distribution disk, INSTALL.EXE is in the root 
        directory.

        INSTALL guides the installation or upgrading of FLODRAW 2.1.
        It is a series of menus and prompts that will copy the 
        FLODRAW 2.1 files from the distribution disks to your system.
        INSTALL will first ask for information about your system. 
        Then it will guide you through the installation process.
        INSTALL will show you which files it will copy, and it will
        prompt you before copying the files. 

        The following procedure outlines the INSTALL process.
                  
            1. If you are installing or upgrading FLODRAW on a floppy
               disk system, you will need several blank formated disks. 
               If you are installing, you will need three blank disks.
               If you are upgrading, you will need your working program
               disk, your working library disk, and a blank data disk.
                          
            2. After booting up your system, put the FLODRAW library
               disk in drive A.  This will be the source drive.  You can 
               use any drive for the source drive, but for these 
               instructions, we'll assume that the source drive is 
               drive A.
               
            3. Enter this command at the DOS prompt.
             
                      A:INSTALL 
               
            4. INSTALL will ask you if you are installing FLODRAW for
               the first time or if you upgrading to FLODRAW 2.1.
               Reply 1 if you are installing. Reply 2 if you are
               upgrading.
         
               The difference between install and upgrade is that INSTALL
               will only copy required upgrade files when copying from
               the FLODRAW Program Disk.
        
            5. Install will ask for the source drive. Reply A.


        Installation                                            6

                      
            6. Install will ask for the target drive. This is drive
               that you will copy files to.  Reply B if you have a
               floppy system.  Reply C if you have a hard disk. Again,
               you can use any drive, but for these instructions we'll
               assume the target drive is B.
             
            7. INSTALL will ask if the target drive is a floppy disk
               or a hard disk. Reply 1 if it is a hard disk. Reply 2
               if it is a floppy disk.
              
               If you reply 1, INSTALL will ask you for the directory 
               path. INSTALL assumes a directory path of \FLO. If you
               are installing or upgrading to a different path than \FLO,       
               backspace the cursor and enter your path.
            
            8. INSTALL will display a disk selection menu. Reply '1'
               to copy files from the FLODRAW Program Disk.

               INSTALL will prompt you for the FLODRAW Program Disk.
               Put the FLODRAW Program Disk in drive A.  

               If you are upgrading to a floppy system, INSTALL will 
               also prompt you to put your working program disk in 
               drive B.  If you are installing on floppy system, put 
               a blank disk in drive B. If you are upgrading on a 
               floppy system, put your working program disk in drive B.

               If you are upgrading from a version prior to version 2.0,
               INSTALL will rename OPTION.FIL to FLODRAW.OPT and
               SYMBOL.LIB to FLODRAW.LIB.

            9. INSTALL will copy the FLODRAW files in groups.  
               INSTALL will display all the files in the group
               and ask you if you want to procede with the copy.  You 
               can bypass any group by replying 'N' to the copy prompt.

               The groups on the Program Disk are:
 
                   - the FLODRAW program and system files
        
                   - the FLODRAW tutorial files
              

        Installation                                            7


               The groups on the Library Disk are:
             
                   - the library utilities
        
                   - the libraries
        
                   - the library documentation files    
        
                   - the sample diagram files
        
                   - the SPECIAL.CHR file

               After copying all the groups on the FLODRAW Program Disk,
               INSTALL will return you to the disk selection menu. Reply
               '2' to copy the files on the FLODRAW Library Disk.
        
               If you have a floppy disk system, INSTALL will prompt you
               to put your working library disk in drive B at the same 
               time it prompts you to put the FLODRAW Library Disk in
               drive A. 

           11. After INSTALL has copied the libraries, all the remaining
               files are diagram files.  If you have a floppy disk system,
               INSTALL will prompt you to put a data disk in drive B. If
               you have a hard disk, INSTALL will let you change the
               directory path if you want to put your diagram files on
               a separate directory.
               
           12. After copying all the files on the library disk, INSTALL
               will return you to the disk selection menu. Press ESC to
               return to DOS.
               
               This completes the installation or upgrade.  Save the
               FLODRAW distribution disks as backups.
        

        Section 3 - Template Files                              8
            
        
                     What Are Template Files?
        
        A FLODRAW template file is a file that contains a skeleton
        diagram that you want to use to initialize a new diagram. 
        When you select the page format for a new diagram, 
        FLODRAW will merge the template file into your empty 
        diagram.
            
        For example, you may want all your diagrams to have a
        description box in the upper left corner of the diagram. 
        The description box may contain a brief description, name of
        the author, date, and page number. You can create a template
        file that contains this skeleton description box. Each time
        you create a new diagram, FLODRAW will merge the template
        file into your diagram.  This will help insure that all your
        diagrams use the same skeleton description box.
            
        FLODRAW recognizes one template file name for each of the
        three page formats:
            
                  FLODRAW.T#1 for portrait diagrams
                  FLODRAW.T#2 for landscape diagrams
                  FLODRAW.T#3 for large landscape diagrams
            
        If you are using template files, FLODRAW will look for the
        template file in the current directory. If it can't find
        the template file in the current directory, it will look in
        the default directory if you have one.  See page 5 in this
        Update Manual for instructions on setting up a default 
        directory on your hard disk.
            
        
                        Using Template Files
        
        You can set the option file to use template files as your
        default procedure for new diagrams.  Select J on the Setup
        Option menu and follow the instructions on the template
        option screen.  You can select the Setup Option menu with F8
        from the Entry menu.  You can always override your default
        procedure on the page format selection screen when you're
        loading a new diagram.
        
        

        Template Files                                          9
        
            
        When you load a new diagram, FLODRAW will prompt you 
        for a page format. If your default procedure is to use template
        files, the template file names will show on the right side
        of the menu next to the corresponding page format.  When you
        select a page format, FLODRAW will load the template file. 
        If you want to override the default procedure for template
        files, you can press F10 to toggle the template files on or
        off. When you toggle the template files off, the template
        file names are removed from the menu.
            
        
                      Creating Template Files
        
        Three sample template files are included with FLODRAW 2.1 
        to show you how the template files work. You can edit these
        files to create your own template designs.  You can create
        your own template files as long as you give them the
        correct template file name. 
            
            

        Section 4 - Special Characters                         10
        
        
                    Using Special Characters
        
        The keys Ctrl A through Ctrl Z are used to put special
        characters on your diagram in Text mode. The special
        characters are defined in a file called FLODRAW.CHR 
        that FLODRAW loads at startup.  A default set of 
        special characters is used if FLODRAW.CHR cannot 
        be found.
            
        FLODRAW will look for FLODRAW.CHR in the current 
        directory. If FLODRAW can't find it in the current directory, 
        it will look in the default directory if you have one.
        Note: FLODRAW will warn you if it can't find the special
        character file. Just press any key to bypass the warning.
            
        The special characters are available with the six normal
        size fonts and the three small fonts.  Special characters
        included with FLODRAW are foreign alphabet characters 
        and small shapes like boxes and circles.  You can see them 
        by pressing Ctrl A through Ctrl Z or by editing the file
        SPECIAL.CHR.
            
        
              Defining Your Own Special Characters
        
        You can change the design of some or all the special
        characters if you like. Use FLODRAW to edit the file
        SPECIAL.CHR. This file contains a pattern that has all the
        special characters and instructions for creating a new  
        FLODRAW.CHR file. You can edit each of the 
        characters in the pattern.  When you have finished editing 
        the characters, save the contents of the pattern as a symbol
        file called FLODRAW.CHR.  Move FLODRAW.CHR to your 
        program disk or FLODRAW directory.
            
        The pattern in SPECIAL.CHR is outlined by a box. When 
        you save the contents of the pattern as a symbol, you will 
        use the cursor to tell FLODRAW where the boundaries of the
        symbol are. Don't include the box around the pattern as
        part of the symbol. 
            

        Special Characters                                     11
        
            
        The pattern has marking arrows to show you where to place
        the cursor to show the boundaries of the symbol.  You can
        use the upper left corner as the first cursor location and 
        also as the midpoint of the symbol. After you save the 
        symbol FLODRAW.CHR, save the file SPECIAL.CHR since 
        it now has your updated pattern for special characters.
            
        Now, exit FLODRAW, then run FLODRAW again to load the
        special character file FLODRAW.CHR that you saved.  Edit a
        diagram and try your own special characters using Ctrl A
        through Ctrl Z. 
            

        Section 5 - Libraries & Symbols                        12
        
            
        FLODRAW 2.1 has space for larger libraries with more
        symbols, and symbol menu commands to make it easy to 
        handle larger symbol libraries. The symbol menu now supports 
        small symbols by displaying them full size or one fourth 
        size on the menu.
            
            
        
                           Symbol Libraries            
        
        FLODRAW will now accept libraries that are as large as
        24,000 bytes. You can check the size of your library on your
        DOS directory listing.  If your library is larger than
        24,000 bytes, FLODRAW will tell you it's too large to load.
            
        You can have up to 144 symbols in each library. Although
        it's more likely that you'll exceed the 24,000 byte limit
        before you reach 144 symbols.
            
        Since these enhancements encourage you to combine some of
        your libraries, I've included a batch file called
        COPYLIB.BAT that is similar to LIBRARY.BAT.  
        COPYLIB.BAT will combine up to 8 libraries into 1 library.  
        Use the following format for COPYLIB:
            
           COPYLIB  combined-library  library-1 ... library-8
            
        For example, suppose you want to combine your 
        ELECTRIC.LIB with your APPLIANC.LIB and 
        call the combined library ELECAPPL.LIB.  You would enter 
        the following command:
            
           COPYLIB ELECAPPL APPLIANC ELECTRIC
            
        This command would give you a library called ELECAPPL 
        that had the symbols of both APPLIANC and ELECTRIC.
            
        Of course, you could still use the batch file LIBRARY.BAT to
        create the ELECAPPL library. But you would have to enter
        every symbol that was in both the APPLIANC and ELECTRIC
        libraries. So it would take you much longer.
            

        Libraries & Symbols                                    13
        
        
                            Symbol Menu
        
        In order to support the larger libraries, the symbol menu
        now has keypresses to move you forward and backward on the
        menu.  When you have selected the symbol menu, the
        following keypresses are available, but are not shown on the
        menu. You can press Alt H to see the help screen if you forget
        the keypresses.
            
                  Ctrl F10  - Backward menu browse
                  Ctrl Home - Go to beginning of symbol menu
                  Ctrl End  - Go to end of symbol menu
            
        The symbols in the symbol menu are normally shown reduced 
        to 1/16 their original size. Now, FLODRAW checks the size 
        of the symbol. If the symbol is small, up to 3 characters wide 
        and 2 characters high, FLODRAW will display the symbol full 
        size. If the symbol is up to 6 characters wide and 4 
        characters high, FLODRAW will display the symbol reduced 
        only to 1/4 size. 
            
        FLODRAW displays a size factor to the right of the symbol
        function key so you can tell what the size of the actual
        symbol will be.  The size factors have the following
        meaning. 
            
                       1X   - Full size
                       2X   - 1/4 size
                       4X   - 1/16 size (normal reduction)       
            

        Section 6 - Other Edit Enhancements                    14
            
        
               COPY/MOVE Option to Save Keypress
        
        This option will save you a keypress when you do a block
        copy or move on the Text edit screen.  The block 
        COPY/MOVE function prompts you to move the 
        cursor to the upper left corner of the block before pressing 
        the function key. With this option set on, FLODRAW 
        assumes you have already moved the cursor to the upper left 
        corner before you started the block COPY/MOVE 
        function.  And so the first prompt you get will be for the 
        lower right corner of your block.  See option K on the 
        setup menu.
            
        
                     SMALL/BIG Block Function
        
        These functions expand or reduce the contents of a block
        that you define with the cursor.  The BIG function
        expands the size of the block 4 times. The SMALL function
        reduces the size of the block to 1/4 its size. Note that
        when you expand several times, you can reduce the same
        number of times to get you back to where you started. But if
        you reduce, you usually cannot expand back to the symbol 
        you started with. 
        
        
                     Special Text Key Functions
        
        Alt E erases the entire diagram.  FLODRAW will prompt   
        you before erasing to make sure that you really want
        to erase your diagram.
        
        Alt J (try remembering J for join) tells FLODRAW 
        to superimpose the next symbol, merge, or copy function 
        instead of covering.  Alt J does nothing itself, but 
        will provide a warning message that the next symbol 
        will superimpose (If you're in the symbol menu, this
        warning message will be covered up by the menu line). 
        This function is useful when you don't want the 
        empty area of a symbol to blank information on your 
        diagram. 

        Section 7 - Printing                                   15
            
        
               Printing with Wide Carriage Printers
        
        FLODRAW supports two sizes of dot matrix printer carriages. 
        The standard carriage size is for 80 columns and prints on
        8.5 inch paper. The wide carriage size is for 132 columns
        and prints on 14.5 inch paper.
            
        You can select the carriage size on the printer selection
        screen by pressing the F2 key. The F2 key toggles the
        carriage size between standard and wide carriage.  Save your
        selection on the option file by pressing F10.
            
        You can override the carriage size at print time by pressing
        F2 on the print screen.  The F2 key on the print screen will
        also toggle the carriage size between standard and wide
        carriage.
            
        If you select the wide carriage, use the large landscape
        page format, and keep your diagram within the first 132
        columns. If you exceed 132 columns, FLODRAW assumes you 
        want to print a 160 column wide document. And it will print 
        it on two 8.5"X11" inch portrait format pages. FLODRAW will 
        show you the 132 column boundary on the text edit screen to 
        help you keep your diagram within 132 columns.
            
            
        
                  Option for 12 Inch Form Length
        
        The standard form length for European users is 12 inches
        instead of 11 inches.  Option F on the Setup Option menu
        provides a menu of miscellaneous printer options.  Selecting
        the F3 option provides a menu to select form length of
        either 11 inches (F1) or 12 inches (F2) when using a dot
        matrix printer. Select F2 to force the printer to handle 12
        inch long forms.
            

        Printing                                               16 
            
        
           Printing Draft Copies with Epson LQ Printers
        
        If you have an Epson LQ printer, you can select either a
        fast or slow print speed.  
            
        The slow speed is a FLODRAW emulation of an Epson FX 80
        and provides a good quality print, but at a very slow print
        speed.
            
        The fast speed is the Epson LQ printer emulation of a 9 pin
        printer. Since the character size on the LQ printer is taller
        than the character size on the 9 pin printer, FLODRAW
        compresses the print lines to fit them on one page.  When
        compressed, the text on your diagram may be hard to read. 
        FLODRAW will not compress the print lines on 12 inch forms.
            
        If your diagram does not take up the full page length, you
        may select a stretch option that does not compress the
        print lines.  FLODRAW will show you a boundary line on the
        Text Edit screen near the bottom of the page.  If your
        diagram does not exceed the boundary and you have selected
        the stretch option, FLODRAW will print your diagram without
        compressing the lines.  If you exceed the boundary, 
        FLODRAW must compress the lines to fit the diagram on 
        one page.
            
        To use the stretch option with the fast print speed, select
        F on the Setup Options menu for the miscellaneous printer
        options.  Then select F2 to toggle the LQ fast print stretch
        option on or off.  If you want to make this a permanent
        option, when you return to the Setup Option screen press F10
        to save your selection on the option file.
        
        
        Printing Draft Copies with Toshiba 24 Pin Printers
        
        If you have a Toshiba 24 pin printer with IBM ProPrinter
        emulation, you can use the IBM ProPrinter emulation to
        print your diagrams at a faster print speed.
            
        Change the FLODRAW printer option to "IBM ProPrinter -
        bold strike". Then change your printer to the IBM ProPrinter
        emulation mode.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2020

     Volume in drive A has no label
     Directory of A:\

    FILE2020 TXT      1851   1-24-90  12:28p
    FLODRAW  DOC    117537  11-11-89   2:11p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   1-05-90   4:00p
    MANUAL   BAT       319  11-11-89   2:11p
    READ_ME           1094  11-11-89   2:11p
    UPDATE   DOC     31458  11-11-89   2:11p
            7 file(s)     152837 bytes
                            5120 bytes free
