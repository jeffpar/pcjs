---
layout: page
title: "PC-SIG Diskette Library (Disk #2579)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2579/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2579"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2579.TXT

{% raw %}
```
Disk No: 2579                                                           
Disk Title: MaxCat                                                      
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: MaxCat                                                   
Author Version: 1.1                                                     
Author Registration: $20.00                                             
Special Requirements: Two floppy drives. Hard drive recommended.        
                                                                        
MAXCAT is a menu-driven diskette cataloging program which creates a     
cataloged index of floppy disks.  This catalog can reside on your hard  
disk, or even on another floppy disk.  With just one keystroke diskettes
are read and each file and subdirectory is indexed automatically.  File 
names are also extracted from both ARC and ZIP files and added to the   
MAXCAT database.  This index can be browsed on-screen by diskette or by 
individual subdirectory.  Searches by file name or extension are a snap 
to perform.  Comments can be attached to both diskettes and             
subdirectories.  Printed reports include a listing of all diskettes, all
subdirectories, all files, all files on a selected diskette, or all     
files in a selected subdirectory.  Complete, helpful database statistics
are always available, as well as context-sensitive help.                
                                                                        
MAXCAT indexes diskettes by volume label.  Volume label is a logical    
label which is recognized by DOS (and MAXCAT) as the "name" of the      
diskette.  MAXCAT (and DOS) provides the ability to add, change, or     
delete volume labels.                                                   
                                                                        
MAXCAT will provide you with an easy-to-use, highly effective means to  
catalog and track all of your floppy disks.  The more floppy disks you  
have, the more valuable MAXCAT will be.                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #2579  MAXCAT  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print the program's documentation, type:  PRINTDOC  (press Enter)   ║
║                                                                         ║
║  To start MAXCAT, type:  MAXCAT  (press Enter)                          ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1991, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MAXCAT.DOC

{% raw %}
```














                                 M a x C a t

                         Diskette Management System

                                 Version 1.1



                   Copyright (c)  1990 by Max Burgstahler



                                User's Manual






								Page 2



                              TABLE OF CONTENTS

              MaxCat is Shareware..............................3

              MaxCat Registration Form ........................4

              Introduction.....................................5

              Installation.....................................6

              Running MaxCat...................................6

              Using MaxCat.....................................7

              MaxCat Keys......................................8

              Process Diskettes................................9

              Process Subdirectories..........................10

              Database Search.................................11

              Database Reports................................11

              Index A Diskette................................12

              Delete A Diskette...............................13

              Label A Diskette................................13

              Database Utilities..............................14

              Database Statistics.............................15




								Page 3

	MaxCat is Shareware

	     MaxCat is the copyrighted property of Max Burgstahler. You are 
	granted a limited license to use, copy, and distribute MaxCat 
	provided the following conditions are met: 

	  A. Copying and distribution fee may not exceed $10.00. 
	  B. MaxCat may only be distributed in its original unmodified 
	     state. 

	     This software is distributed under the user supported software
	concept.  Though MaxCat is copyrighted, you are encouraged to copy 
	and distribute this program to others.  If you like this product and
	find it useful, a registration fee of $20.00 is required for 
	continued use. Site licenses and commercial distribution licenses 
	are available.  A program disk and printed documentation are 
	available for $30.00.  See the registration and order form elsewhere 
	in this manual.  All registered users receive technical support and 
	upgrade notices. 

	     The author makes no representations or warranties with respect 
	to the contents hereof and specifically disclaims any implied 
	warranties of merchantability or fitness for any particular purpose.
	Further, the author reserves the right to revise this publication 
	and to make changes from time to time in the content hereof without 
	obligation of the author to notify any person or organization of 
	such revision or changes. 

	     MaxCat is user supported.  This means that you may copy it 
	freely and give the copies away to anyone you wish.  They are in 
	turn requested to send in a contribution if they decide to use it. 

	     The user supported software concept (also known as "shareware") 
	is an attempt to provide quality software at low cost.  Both the 
	user and author benefit from this plan.  The user will benefit by 
	being able to "test drive" software thoroughly before purchasing it.  
	The author benefits by being able to enter the commercial software 
	market while avoiding the high cost of commercial distribution. 

	     This concept helps many independent authors and small companies 
	that otherwise would be discouraged from developing and promoting 
	their ideas.  It can only work with your support.  If you obtain a 
	user supported program from a friend and are still using it after a 
	few weeks, then it is obviously worth something to you, and a 
	contribution should be sent. 

	     For further information and registration, please send all 
	correspondence to: 
	
				Max Burgstahler 
				831 Jefferson Dr. 
				Decatur, IL  62521   U.S.A. 
				(217) 429-5146

             Registered users of MaxCat receive telephone support. You pay
        for the call. 


								Page 4

        05       **** MaxCat Registration Form ****


	Send to:        Max Burgstahler                                         
        	        831 Jefferson Dr. 
                	Decatur, IL         Current version number ________ 
	                62521   U.S.A. 
        	                                      QUANTITY  SUBTOTAL 

	Register currently used MaxCat (no disk) $20  ________  ________ 

	Latest release of MaxCat and
	   printed manual (indicate disk size).. $30  ________  ________ 

	MaxCat Network License (per server) ... $100  ________  ________ 

        MaxCat Site License (per site)..........$250  ________  ________

        MaxCat Corporate License (unlimited) .. $500  ________  ________

	Outside U.S. add $5 for shipping...... TOTAL  ________  ________ 


	Name________________________________________________________________

	Company_____________________________________________________________

	Address_____________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	Phone_______________________________________________________________


	Where did you hear about MaxCat_____________________________________ 

	Comments____________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________


	Make checks in U.S. currency from a U.S. bank or in your own 
	currency from a non-U.S. bank.





								Page 5

	Introduction

	     MaxCat is a menu-driven diskette cataloging utility which 
	creates a searchable index of floppy disks. This catalog can reside 
	on your hard disk, or even on another floppy disk. With just one 
	keystroke diskettes are read and each file and subdirectory is 
        indexed automatically. Filenames are also extracted from both ARC
        and ZIP files and added to the MaxCat database. This index can be
        browsed on-screen by diskette or by individual subdirectory.
        Searches by file name or extension are a snap to perform. Comments
        can be attached to both diskettes AND subdirectories. Printed reports
        include a listing of all diskettes, all subdirectories, all files,
        all files on a selected diskette, or all files on a selected
        subdirectory. Complete, helpful database statistics are always
        available. The interface is window/menu oriented, and
        context-sensitive help is never more than a keystroke away.

	     MaxCat indexes diskettes by volume label. Volume label is a 
	logical label which is recognized by DOS (and MaxCat) as the "name" 
	of the diskette. DOS provides the ability to add, change, or delete 
	volume labels on diskettes with the DOS LABEL command. MaxCat also 
	provides the ability to add or change volume labels with the LABEL A 
	DISKETTE option. Please refer to your DOS manual for more 
	information on volume labels and the LABEL command. A good
	understanding of how volume labels work is helpful in understanding 
	the MaxCat system. It is important to keep in mind that volume 
	labels are the "key" by which diskettes are stored in the MaxCat 
        database and that each diskette MUST HAVE A UNIQUE VOLUME LABEL in
	order to work with MaxCat.
	
	     The intent of the MaxCat system is simply this: once a unique 
	volume label has been added to a diskette, the user then writes the 
	volume label on the outside of the diskette and indexes the diskette 
	with MaxCat. Then, as files are added, changed, or deleted on the 
	diskette, one only needs to re-index that diskette with MaxCat and 
	the index on the hard drive is automatically updated. It is no 
	longer necessary to write, erase, and re-write file names or 
	comments on the outside of the diskette. Nor is it necessary to 
	print a directory listing and store it with the diskette. When you 
	need to locate a file on one of your diskettes, it is a snap to find 
	it with MaxCat; it is never more than a few keystrokes away.
	
	     MaxCat requires an IBM compatible computer running DOS 3.0 or 
	above, with at least 256K of available memory. Although MaxCat can 
	be ran on dual floppy disks, a hard disk is highly recommended. All
	types of video modes are supported; color EGA or better is 
	recommended.
	
	



								Page 6

	Installation

	     HARD DISK USERS - Create a subdirectory called MAXCAT under the 
	root directory (MD MAXCAT from the C> prompt). Copy all of the files 
	on the distribution disk to that subdirectory. A batch file called 
	PRINTDOC.BAT is provided to print the documentation. 
	
	     DUAL FLOPPY USERS - Format a diskette (even a 360K diskette 
	will do), and copy the files on the distribution disk to it. You may 
	wish to format it with the /S option to make the disk bootable. 
	refer to your DOS manual for more information on the DOS FORMAT 
	command and the /S option. After you start the program you will need 
	to set the default drive to the drive which does not have the MaxCat 
	program and data files (i.e. start MaxCat from the A: drive and set
	the default drive to B:). The default drive is set using the 
	DATABASE UTILITIES: Change Drive option described later in this 
	manual. MaxCat remembers this setting between sessions so set it and 
	forget it. A batch file call PRINTDOC.BAT is provided to print the 
	documentation
	
	Running MaxCat
	
	     To execute MaxCat, make sure you are in the MAXCAT directory, 
	type MAXCAT and press enter. The first screen to be displayed is the 
	copyright screen. When you register your copy of MaxCat you will 
	receive instructions on how to skip this screen; until then, simply 
	press any key to continue (and enjoy!).
	
             To exit MaxCat, press <Esc> from the main menu and answer
        the dialog box prompt appropriately.
	



								Page 7

	Using MaxCat

	     The MaxCat Diskette Management System Distribution Disk 
	includes 4 files:

        	            MAXCAT.EXE   - The main program
                	    MAXCAT.DOC   - This file
	                    PRINTDOC.BAT - Prints this file
	                    REGISTER.DOC - MaxCat Registration Form
	
             The first time MaxCat is ran it will create 4 more files in the
	current directory:
	
	                    MAXCAT.INI   - Data file #1
	                    DFILE.DAT    - Data file #2
        	            FFILE.DAT    - Data file #3
                            PFILE.DAT    - Data File #4

	     To maintain only one diskette database simply have all of these 
	files in one subdirectory. 
	
	     To maintain multiple databases, you may wish to create 
        different subdirectories, each having it's own copy of the four
	data files. Then (using batch files to make it easier if you wish), 
	you may change to one of the directories containing the database you 
	wish to access and then execute the program by specifying the fully 
	qualified pathname (or making sure it's directory is in the path). 
	For example:
	
	                    CD\MAXCAT\HOMECAT
        	            C:\MAXCAT\MAXCAT   

	assumes that a database (consisting of the three data files) exists 
	in the HOMECAT subdirectory (disks you use at home instead of work, 
	let's say) and that the program resides in its parent directory 
	MAXCAT. Using this scheme you may wish to have several directories 
	under the MAXCAT program directory, each containing its own set of 
        four data files.
	
	     Although the limit is 9,999 diskettes or 9,999 subdirectories 
	or 99,999 files, the MaxCat system's real limit is that which is 
	imposed by available memory. Keeping your database in manageable 
	chunks will keep MaxCat from getting bogged down and will avoid the 
	dreaded "Out of Memory" message from rearing its ugly head.
	
	



								Page 8

	MaxCat Keys

	     MAIN MENU KEYS - The main menu (displayed on program startup) 
	is designed so that any of the nine major functions can be accessed 
	by using only the four arrow keys and the <Enter> key. Upon startup 
	the up and down arrows will highlight each of the three main 
	categories: Query, Index, and Utilities. Pressing either <Enter> or 
	<right arrow> will select the highlighted main category option and 
	present a menu of each option available within that main category. 
	Highlighting an option and pressing enter will perform the 
	highlighted task. After you complete that task, pressing <Esc> or 
	<left arrow> will then return to the Main Menu. In summary, all 
	options can be selected with the four arrow keys and <Enter>. 
	Repeatedly pressing <Esc> will return to the Main Menu from ANYWHERE 
	in MaxCat.

	     F1 (HELP) - Any time you are faced with a menu of different 
	option from which to choose, simply highlight an option and press F1 
	(Help) for a full explanation of what the highlighted option does. 
	F1 will also provide an explanation of the type of input being 
	requested at any input prompt. Whenever a scrollable list of 
	diskettes, subdirectories, or files is presented, F1 will pop up a 
	window to show scroll key operation.
	
	     <Esc> - Repeatedly pressing <Esc> from ANYWHERE in MaxCat will 
	eventually return you to the Main Menu. <Esc> will also exit any 
	menu, help screen, or input prompt.
	
	     SCROLLING KEYS - Anytime a scrollable list of diskettes, 
	subdirectories, or files is presented the following keys can be 
	used:

        	       <HOME>    - Scrolls to the top of the list
	               <END>     - Scrolls to the bottom of the list
	               <PgUp>    - Scrolls up one page
	               <PgDn>    - Scrolls down one page
	               <UpArrow> - Scrolls up one line
	               <DnArrow> - Scrolls down one line
	               <Esc>     - Exits the scrolling display
	               <F1>      - Displays help on scrolling

	     HOT KEYS - All MaxCat menus (except the main menu) are equipped
	with hot keys. These are keys which are displayed in a contrasting
	color and, when pressed during menu selection, produce the same
	results as if that option were highlighted and <Enter> was pressed.






								Page 9

        Process Diskettes

             The Process Diskettes option brings up a scrollable list of all
        diskettes in the MaxCat database. <UpArrow> and <DnArrow> will move
        the reverse video "bounce bar" up or down one line at a time. <PgUp>
        and <PgDn> will scroll an entire page in the desired direction. The
        <Home> key will display the first page of the list; the <End> key
        will display the last page. <Esc> will return to the MaxCat main
        menu.

             By highlighting a diskette with the "bounce bar" and pressing
        <Enter>, a Process Diskette menu is popped up. With this pop-up menu
        you can:

                  1. List the files on the selected diskette
                  2. Print the files on the selected diskette
                  3. Delete the diskette from the database
                  4. Add or change the comment for the diskette
                  5. Show the date that the diskette was last indexed

             LIST THE FILES will bring up a list of all the files on the
        selected diskette. This list can be scrolled in the same manner as
        the diskette list. While viewing a list of files, you can pop up a
        window showing the original path for that file by highlighting it
        and pressing <Enter>. Files which have been extracted from ARC or
        ZIP files will display a double-sided arrow between the filename
        and the extension. <Esc> will return to the diskette list.

             PRINT THE FILES will print a report of all the files on the
        selected diskette. The report will be printed on the default
        printer. See DATABASE UTILITIES: Change Printer on how to designate
        the default printer. The generated report has page breaks, page
        numbers, and includes the date the report was printed.

             DELETE THIS ENTRY will delete all entries in the MaxCat
        database pertaining to the selected diskette. After a diskette is
        deleted the letters "DEL" appear on the diskette list display to
        indicate that it has been deleted. The next time a diskette list is
        brought up the deleted diskette will not appear.

             ADD A COMMENT will add or change the comment attached to the
        highlighted diskette. A comment can be up to 30 characters long.
        When a comment is added to a diskette which previously had no
        comment, a window is popped up with a blank input field; you simply
        type the desired comment and press <Enter>. When changing an
        existing comment, <Insert> toggles between INSERT and OVERWRITE mode.
        Other keys available for editing a comment are <Home>, <End>,
        <Left Arrow>, <Right Arrow>, <Delete>, and <Backspace>.

             SHOW DATE INDEXED will display the date and time that the
        diskette was last indexed.





								Page 10

        Process Subdirectories

             The Process Subdirectories option brings up a scrollable list
        of all subdirectories in the MaxCat database. <UpArrow> and
        <DnArrow> will move the reverse video "bounce bar" up or down one
        line at a time. <PgUp> and <PgDn> will scroll an entire page in the
        desired direction. The <Home> key will display the first page of the
        list; the <End> key will display the last page. <Esc> will return to
        the MaxCat main menu.

             By highlighting a subdirectory with the "bounce bar" and
        pressing <Enter>, a Process Subdirectory menu is popped up. With
        this pop-up menu you can:

                  1. List the files on the selected subdirectory
                  2. Print the files on the selected subdirectory
                  3. Add or change the comment for the subdirectory
                  4. Show the date that the subdirectory was last indexed

             LIST THE FILES will bring up a list of all the files on the
        selected subdirectory. This list can be scrolled in the same manner
        as the subdirectory list. While viewing a list of files, you can
        pop up a window showing the original path for that file by
        highlighting it and pressing <Enter>. Files which have been 
        extracted from ARC or ZIP files will display a double-sided arrow 
        between the filename and the extension. <Esc> will return to the
        subdirectory list.

             PRINT THE FILES will print a report of all the files on the
        selected subdirectory. The report will be printed on the default
        printer. See DATABASE UTILITIES:Change Printer on how to designate
        the default printer. The generated report has page breaks, page
        numbers, and includes the date the report was printed.


             ADD A COMMENT will add or change the comment attached to the
        highlighted subdirectory. A comment can be up to 30 characters long.
        When a comment is added to a subdirectory which previously had no
        comment, a window is popped up with a blank input field; you simply
        type the desired comment and press <Enter>. When changing an
        existing comment, <Insert> toggles between INSERT and OVERWRITE mode.
        Other keys available for editing a comment are <Home>, <End>,
        <Left Arrow>, <Right Arrow>, <Delete>, and <Backspace>.

             SHOW DATE INDEXED will display the date and time that the
        subdirectory was last indexed.






								Page 11

        Database Search

             The Database Search option allows the MaxCat database to be
        searched by file name or extension. After selecting the type of
        search desired, a window will pop up to input the search criteria.
        The file name search will accept up to 8 characters; the extension
        search will accept up to 3 characters.

             Partial file names are accepted (no wildcards *.* necessary)
        and will search for any file name which contains the input
        characters (i.e. "read" will find "README.NOW" and "READ.ME").
        Similarly, partial extensions are accepted and work the same way.

             The search is NOT case sensitive (i.e. entering "doc" for an
        extension search will find all of the "*.DOC" files in the
        database).

             The list of matching file names can be scrolled with the
        standard scroll keys described under "MaxCat Keys." While viewing
        a list of files, you can pop up a window showing the original path
        for that file by highlighting it and pressing <Enter>. Files which
        have been extracted from ARC or ZIP files will display a 
        double-sided arrow between the filename and the extension. <Esc> 
        will exit this option at any time.



        Database Reports

             The Database Reports option will generate various reports on
        the data stored in the database. The following reports can be
        generated:

                  1. All diskettes in the database
                  2. All subdirectories in the database
                  3. All files in the database

             All reports have page breaks, page numbers, and include the
        date the report was printed.






								Page 12

        Index a Diskette

             Indexing is the process by which diskettes are added to the
        MaxCat database. Also, once the diskette is in the database, it
        should be re-indexed with this option every time files are added to,
        changed, or deleted from the diskette.

             The key by which diskettes are indexed is the volume label
        (a.k.a Volume ID or simply "label"). Volume label is the "name" of
        the diskette as recognized by DOS (and MaxCat). For more information
        on volume label, refer to your DOS manual. Adding or changing a
        label before indexing is simple. You can use the DOS LABEL command
        from the DOS prompt, or better yet, use the LABEL A DISKETTE option
        within MaxCat (explained later).

             Once the diskette is labeled it is ready to be indexed with
        this option. Simply insert the diskette into the default drive (as
        designated with the DATABASE UTILITIES:Change Drive option) and
        press <Enter>. During the indexing process files in every
        subdirectory on the diskette are read into the MaxCat database.
        Filenames are also extracted from ARC and ZIP files and added to
        the MaxCat database. When indexing is complete, you are prompted
        for a comment for the diskette (up to 30 characters).

             If this is a previously unindexed diskette AND there were
        subdirectories, the comments for those subdirectories are blank
        after the initial indexing process. In order to attach comments to
        them you must use the PROCESS SUBDIRECTORIES:Add a Comment option
        described earlier. The comment you attach during the indexing
        process is attached to the root directory of the diskette; it is also
        the comment for the entire diskette and can be subsequently changed
        with the PROCESS DISKETTES:Add a Comment option or the PROCESS
        SUBDIRECTORIES:Add a Comment option.

             When re-indexing a diskette already present in the database,
        all existing subdirectory comments remain intact. In addition, you
        are given the option of changing the existing comment for the entire
        diskette. Any new subdirectories added since the last indexing will
        have blank comments. These comments can be updated with the PROCESS
        SUBDIRECTORIES:Add a Comment option.

             If the diskette is empty when it is indexed, it is designated
        by MaxCat as a "SCRATCH" diskette and the comment "SCRATCH" is
        automatically attached to the root directory of the diskette. DO NOT
        change this comment until you actually add files to the diskette;
        MaxCat uses the comment to identify empty diskettes when producing
        the database statistics report.

             MaxCat will also store the date which a diskette is indexed in
        the database. Before indexing a diskette, MaxCat will examine the
        current system date on your computer. If the year is prior to 1990,
        an error message is popped up and you are given the option to cancel
        the operation, ignore the warning, or exit to DOS to fix the system
        date.






								Page 13

        Delete a Diskette

             This option provides the ability to delete an entire diskette
        from the MaxCat database. This option works exactly like the PROCESS
        DISKETTES:Delete This Entry option described earlier.



        Label a Diskette

             This option allows you to add or change the volume label of a
        diskette. Volume label is the "name" of the diskette as recognized
        by DOS (and MaxCat). For more information on volume label, refer to
        your DOS manual. Volume label is also the key by which diskettes are
        stored in the MaxCat database. All diskettes MUST have a unique
        volume label to work with MaxCat.

             Insert the diskette in the default drive (as designated with
        the DATABASE UTILITIES:Change Drive option) and press <Enter>. If
        the diskette is currently labeled, its label will be displayed. If
        it is not labeled, that is indicated also. You are then prompted to
        enter a label (up to 11 characters). Type in the desired label and
        press <Enter>. If you wish to retain the current label (or lack
        thereof) simply press <Esc> at the label prompt.






								Page 14

        Database Utilities

             Database Utilities include the ability to change the default
        disk drive (from which diskettes are indexed), the default printer
        (used to print reports), set the frequency of optimization, and
        export the MaxCat database to ASCII comma delimited format for
        inclusion in your favorite spreadsheet or database. All Database
        Utility options are saved between program executions.

             CHANGE DRIVE changes the default disk drive which is read
        during the indexing process. For hard disk users this will usually
        be set to A:. Dual floppy users may wish to run MaxCat from the A:
        drive and designate B: as the default drive. By setting the default
        drive to C: you can index your hard drive.

             CHANGE PRINTER allows you to change the printer to which MaxCat
        reports are directed. Your choices are LPT1: and LPT2:.

             SET OPTIMIZATION allows you to set the frequency at which the
        MaxCat database is optimized. Whenever database records are deleted
        from the database they are not physically removed until the database
        is optimized. Therefore after much database activity, MaxCat will
        begin to slow down until the database is optimized. Optimization
        physically removes these deleted records from the MaxCat database.
        AUTOMATIC OPTIMIZATION will optimize the database after every
        session which involves a database update. Note that automatic
        optimization will not occur after a session in which diskettes were
        only browsed or reported on. MANUAL OPTIMIZATION will cause MaxCat
        to give you the option to optimize the database only as part of the
        exit panel.

             VIEW SETTINGS provides a display of all current DATABASE
        UTILITY settings.

             EXPORT TO ASCII exports the MaxCat database to ASCII comma
        delimited format. Many popular spreadsheets and databases can import
        data in this format. This option creates 3 files: FILES.ASC,
        SUBDIRS.ASC, and DISKS.ASC. The format of these files is as follows:

             FILES.ASC : VOLUME ID, PATH, FILENAME, EXTENSION, SIZE, YEAR,
                         MONTH, DAY, HOUR, MINUTE, SECOND, ARCHIVED

           SUBDIRS.ASC : VOLUME ID, PATH, (INDEXED) YEAR, MONTH, DAY, HOUR,
                         MINUTE, SECOND, COMMENT

             DISKS.ASC : VOLUME ID, FREE KILOBYTES, (INDEXED) YEAR, MONTH,
                         DAY, HOUR, MINUTE, SECOND, COMMENT


								Page 15

        Database Statistics

             This option provides the following information about the MaxCat
        database:

                  1. Total number of diskettes, subdirectories, and files
                  2. Last diskette indexed and when it was indexed
                  3. Active disk with the most space and how much
                  4. A report of SCRATCH disks broken down by disk capacity
                  5. A report of active disks broken down by available space

             Whenever this report is requested, the database is also
        searched for deleted records that could be removed through
        optimization. If the ratio of active to deleted records is less than
        5:1, a message is displayed "DATABASE FRAGMENTATION ENCOUNTERED -
        OPTIMIZATION RECOMMENDED." For more information on optimization,
        refer to the DATABASE UTILITIES:Set Optimization section.



```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

	05               **** MaxCat Registration Form ****


	Send to:        Max Burgstahler                                         
	                831 Jefferson Dr. 
	                Decatur, IL         Current version number ________ 
	                62521   U.S.A. 
	                                              QUANTITY  SUBTOTAL 

	Register currently used MaxCat (no disk) $20  ________  ________ 

	Latest release of MaxCat and
	   printed manual (indicate disk size).. $30  ________  ________ 

	MaxCat Network License (per server) ... $100  ________  ________ 

	MaxCat Site License (per site)..........$250  ________  ________ 

	MaxCat Corporate License (unlimited) .. $500  ________  ________ 

	Outside U.S. add $5 for shipping...... TOTAL  ________  ________ 


	Name________________________________________________________________

	Company_____________________________________________________________

	Address_____________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	Phone_______________________________________________________________


	Where did you hear about MaxCat_____________________________________ 

	Comments____________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________

	____________________________________________________________________


	Make checks in U.S. currency from a U.S. bank or in your own 
	currency from a non-U.S. bank. 


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2579

     Volume in drive A has no label
     Directory of A:\

    MAXCAT   DOC     30442   7-21-90   9:22a
    MAXCAT   EXE    122050   7-08-90   8:29p
    PRINTDOC BAT        47   2-07-90   3:16p
    REGISTER DOC      1856   7-17-90   7:35p
    FILE2579 TXT      2665   3-18-91  11:38a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT       848   2-26-91   8:26a
            7 file(s)     157946 bytes
                               0 bytes free
