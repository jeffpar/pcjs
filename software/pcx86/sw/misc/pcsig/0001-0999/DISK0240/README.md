---
layout: page
title: "PC-SIG Diskette Library (Disk #240)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0240/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0240"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FAMILY TREE GENEALOGY"

    FAMILY TREE is a general purpose genealogy system designed for charting
    and maintaining family tree information and relationships between
    individuals.  The system is menu-driven with single-keystroke commands,
    scrolling, mini-windows, and output to screen, printer, or disk file.
    You can change default options to select disk drive, screen colors, and
    printer control codes.
    
    The maintenance function allows the entry of names, sex, dates/places
    of birth/death/marriage, and free-form text remarks.  Spouse and
    parent/child relationships are established after data is entered.
    
    The chart function uses the database to make reports by pedigree,
    ancestors, family groups, decendants, and relationships.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES240.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No. 240  FT-Etc ('Family-Tree, Etc') Genealogy  Version 3.02    v2.1
---------------------------------------------------------------------------
 
'Family-Tree, Etc' (Version 3.01) is a general purpose genealogy system
designed or charting and maintaining information pertaining to family trees
and relationships between persons. The system is menu driven with single
keystroke commands, scrolling, mini-windows and screen printer disk file
report output capability. Default options may be changed by the user to
change Disk Drive IDs, Screen Colors and Printer Control Codes.
 
The MAINTENANCE function allows the entry of Names, Sex, Dates/Places of
Birth/Death/Marriage and free form textual remarks. Spouse and Parent/Child
relationships are established after entering the information. Data
gathering utilized a mini-window concept with formatted fields for the
required data entry.
 
The REORG function is an unique feature that automatically ensures that
data is correctly sequenced, using its internally maintained record
numbering scheme.
 
The CHARTS portion of the system uses the data bases created by MAINTENANCE
to generate the typical genealogy reports for pedigree, ancestors, family
groups, descendants and relationships. The output may be viewed on the
screen, directed to a (optional) printer, or routed to a diskette file for
later printing.
 
Documentation includes a User Manual (FT-ETC.TXT) and a Demonstration
program (FT-DEMO.EXE) that provides an overview of the system.
 
FT-ETC   EXE  Main Menu Program and Default Setup
FT-ETC-C EXE  Chart Program
FT-ETC-M EXE  Maintenance Program
FT-ETC-R EXE  Reorganization Program
FT-ETC   OPT  Default Options file
FT-ETC   TXT  User Manual
FT-DEMO  EXE  Demonstration Program
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FT-ETC.TXT

{% raw %}
```





		+-------------------------------------------------------+
		|  #########  ########    #########                     |
		|  #########  ########    #########    ##               |
		|   ##    ##  #  ##  #     ##    ##  ######             |
		|   ####         ##        ####        ##       #####   |
		|   ####         ##   ###  ####        ##      ##   ##  |
		|   ##           ##        ##    ##    ##      ##       |
		|  ####         ####      #########    ##  ##  ##   ##  |
		|  ####         ####      #########     ####    #####   |
		+-------------------------------------------------------+


				    Family-Tree, Etc.

		       Copyright 1984 1985 1986 Pine Cone Software
				   All rights reserved


			 Genealogy programs for the IBM-PC, PCjr
				and compatible computers

				  User Reference Manual


		+--------------------+
		| Pine Cone Software |
		|--------------------|
		|      CCCCC         |
		|     CCCCCCCC       |
		|    CCCCCCCCCCC     |         Pine Cone Software
		|     CCCCCCCCCC     |         P.O. Box 1163
		|       CCCCCCC      |         Columbus, Indiana  47202-1163
		|         CCC        |
		+--------------------+





				 O R D E R   F O R M



	   TO:  Pine Cone Software                        Date____/____/____
		P.O. Box 1163
		Columbus, Indiana  47202-1163




	 From:  Name _______________________________________________________

		Address ____________________________________________________

		City __________________________ State ________ Zip _________

		Area Code (______)  Phone __________________________________



		     PRODUCT-------------------------------   PRICE----

		     "Family-Tree, Etc"  (Current Version)    $   35.00

			       5.0% sales tax
			       (Indiana state residents)       ________

							       --------

						Total          $_______




		--------------------- F E E D B A C K ----------------------

		I learned about FT-ETC from:
		   [ ] - Friend                    [ ] - Genealogy Club
		   [ ] - Computer Club             [ ] - Magazine
		   [ ] - Data Base Service         [ ] - Other

		Comments: __________________________________________________
		____________________________________________________________
		____________________________________________________________
		____________________________________________________________

		I have a problem to report: Version:______  ________________
		____________________________________________________________
		____________________________________________________________
		____________________________________________________________





				 Disclaimer of Warranty

	     These programs are provided on an "AS IS" basis without warranty
	     of any kind, expressed or implied, including but not limited to
	     the implied warranties of merchantability and fitness for a
	     particular purpose.  The entire risk as to performance and/or
	     quality of these programs is with you.  Should the program prove
	     defective, you (not Pine Cone Software) assume the entire cost
	     of all necessary repairs, servicing, or correction.  In no event
	     will Pine Cone Software be liable to you for any damages, in-
	     cluding any lost profits, lost savings, or other incidental or
	     consequential damages arising out of the use or inability to use
	     these programs.

	     If you are a registered user of 'Family-Tree, Etc' feel free to
	     write us if you have questions.  You, as a customer, are
	     considered a valuable resource ... if you have suggestions as to
	     how this product may be improved, or if you have ideas for
	     possible enhancements, please contact us.

					       Pine Cone Software
					       P.O. Box 1163
					       Columbus, Indiana  47202-1163
     Family-Tree, Etc -------------------------------------------------- Page 1
     ------------------------------------------------------- Pine Cone Software

				Table of Contents

	      Introduction ........................................ 2
	      Installation ........................................ 3
	      FT-ETC ....... Starting Family-Tree, Etc ............ 4
	      FT-ETC ....... How to Use Hi-Lite Menus ............. 4
	      FT-ETC ....... Main Menu ............................ 5
	      DEFAULTS ............................................ 5
		DISK ..........Assign Default Disk IDs ............ 5
		PRINTER .......Assign Default Printer Codes ....... 6
		COLORS ........Assign Default Screen Colors ....... 6
	      CHARTS .............................................. 7
		PEDIGREE ..... Standard Pedigree .................. 8
		DESCENDANTS .. Indented Free-Form Descendants ..... 9
		ANCESTORS .... Indented Free-Form Ancestors ...... 10
		FAMILY ....... Family Groups ..................... 11
		RELATIONS .... Family Relationships .............. 12
		SCAN ......... Partial Name Scan/Search .......... 13
		OPTIONS ...... Specify Global Output Options ..... 14
		QUIT ......... Exit Charts program ............... 15
	      MAINTENANCE ........................................ 16
		ADD NAME...... Add New Names & Relationships ..... 17
		ADD PARENTS... Add Parents to Individual ......... 18
		ADD SPOUSE.... Add Spouse to Individual .......... 18
		CHANGE ....... Change Existing Names/Relationships 19
		DELETE ....... Delete Existing Names/Relationships 20
		QUIT ......... Exit Maintenance program .......... 21
	      REORG .............................................. 22
     Family-Tree, Etc -------------------------------------------------- Page 2
     ------------------------------------------------------- Pine Cone Software

       INTRODUCTION

	    Welcome to 'Family-Tree,Etc', a genealogy system for the IBM
	    personal computer user (and also many others, such as the
	    COMPAQ, AT&T 6300, IBM-PCjr, etc.)

	    Collecting data and information about ones family origin is an
	    interesting and rewarding pastime and hobby ... but may, if
	    not properly approached, become a jungle of paperwork, losing
	    much of the meaning and enjoyment that could have been derived
	    from your efforts.  The personal computer is an ideal tool to
	    assist you in your search of your family tree ... providing the
	    capability to quickly add new information, retrieve and update
	    existing records, and the generation of meaningful charts to
	    document your research.

	    Family-Tree, Etc ... known to your computer as FT-ETC ... is a
	    'menu' driven system with single keystroke commands, scrolling,
	    mini-windows and screen/printer/disk report capability.

	    The system is currently designed to support a family tree with a
	    maximum of 999 persons, consisting of the following data:

		Name of Individual                         26 Characters
		Sex of Individual                          (Male/Female)
		Dates of Birth/Death/Marriage(s)            9 Characters
		Place of Birth/Death/Marriage(s)           20 Characters ea
		Mother/Father/Spouse(s) Names              26 Characters ea
		Note Pad, Free form text           10 lines @ 72 Characters
     Family-Tree, Etc -------------------------------------------------- Page 3
     ------------------------------------------------------- Pine Cone Software

       INSTALLATION

	    Your FT-ETC distribution diskette contains the following files:

	       FT-ETC.EXE     Menu program
	       FT-ETC-C.EXE   Charts program
	       FT-ETC-M.EXE   Maintenance program
	       FT-ETC-R.EXE   Family-Tree Reorganization program
	       FT-ETC.OPT     Options file
	       FT-ETC.TXT     Documentation
	       FT-DEMO.EXE    Demonstration Program (Black & White)

	    The following files will be created after the creation of the
	    Family Tree data base:

	       FT-ETC.DB1     Family-Tree 'Person' Data Base
	       FT-ETC.DB2     Family-Tree 'Location' Data Base
	       FT-ETC.DB3     Family-Tree 'Work' Data Base
	       FT-ETC.DB4     Family-Tree 'Note Pad' Data Base
	       FT-ETC.RPT     DISKETTE option report file

	    The distribution diskette is your 'master' copy and and should
	    be duplicated ... with the duplicate becoming your everyday
	    working copy of the system.  The following directions explain
	    how to make your duplicate copy:

	    1. Start your DOS system [Ctrl/Alt/Del]

	    2. Following your DOS system commands as when to swap/change
	       diskettes, FORMAT a new diskette with the following command:

			       A>format b:/s

	    3. Place a write-protect tab on the distribution diskette, and
	       then COPY the FT-ETC programs/files to the newly formatted
	       diskette:

			       A>copy FT-ETC*.* b:

	    4. Optional - To provide more work space on your new diskette,
	       you may want to delete [ERASE] the documentation and
	       demonstration files from the newly created diskette:

			       A>erase FT-ETC.TXT
			       A>erase FT-DEMO.EXE

	    5. Optional - You may at some point in time wish to remove the
	       Family-Tree Data Bases from the diskette (drastic!) and re-
	       start from ground zero by creating a new data base using the
	       MAINTENANCE Option.  The following command will ERASE the
	       data bases from the diskette:

			       A>erase FT-ETC.DB*
     Family-Tree, Etc -------------------------------------------------- Page 4
     ------------------------------------------------------- Pine Cone Software

       FT-ETC, Starting Family-Tree, Etc

	    To start the 'Family-Tree, Etc' system, you should be in DOS
	    mode (not BASIC or BASICA) and have the DOS prompt character '>'
	    on the screen ... key FT-ETC ... which is the name of the 'main'
	    program on your diskette.

		       A>ft-etc       or        A>FT-ETC

	    After keying the above command, press 'Enter'.  DOS will load
	    the FT-ETC program, and shortly the Pine Cone Software logo will
	    appear.  Press 'Enter' to begin ...


       FT-ETC, How to Use Hi-Lite Menus

	    Family-Tree, Etc ------------ Copyright 1984 Pine Cone Software
	    DEFAULTS  CHARTS  MAINTENANCE  REORG  INFO  PC-DOS
	    Assign Default Disk Drive IDs, Printer Codes, Screen Colors
	    ===============================================================


	    The highlighted menu convention/technique is used throughout the
	    entire system and operates in the following manner:

	      . The items within the menu are shown in UPPER-CASE letters,
		with the current item being shown highlighted (bright)

	      . The line below the item is a brief description of the high-
		lighted item

	      . Any item may be highlighted by use of the 'cursor movement'
		keys (up/down/left/right arrow keys) to the right of the
		keyboard ... right/left arrows move the highlight ... and
		the corresponding item description is displayed

	      . To select a item from the menu, either
		  .. Highlight the desired item and press [Enter]
		  .. Key the 1st character of the item name (Single key-
		     stroke, [Enter] not required)

	    EXERCISE:  With CHART being the current highlighted item, select
	    INFO by either pressing the right/left arrows or keying the
	    letter [i].  You have how highlighted INFO with a description of
	    'General Information'.  (Press [Enter] if you used arrow keys.)

	    The 'General Information' explains the overall system module
	    relationships and summarizes the capabilities of 'Family-Tree
	    Etc'.  At the bottom of the screen, notice the message

			      Press [Esc] to Continue ...

	    Pressing the [Esc] key, located on the top row of keys, will
	    return you to the menu for another selection.
     Family-Tree, Etc -------------------------------------------------- Page 5
     ------------------------------------------------------- Pine Cone Software

       FT-ETC, Main Menu

	    The MAIN menu functions available are summarized as follows:

	    DEFAULTS ..... Assign Disk Drive IDs, Printer Codes, Screen Colors
	      DISK ......... Assign Default Disk Drive IDs
	      PRINTER ...... Assign Default Printer Codes
	      COLORS ....... Assign Default Screen Colors
		1-TEXT-A ......... Change (a) Main Text Color
		2-TEXT-B ......... Change (b) Header Text Color
		3-BACKGROUND ..... Change Background Color
		4-BOX-TEXT ....... Change Window/Hi-lite Text Color
		5-BOX-BACKGROUND . Change Window/Hi-Lite Background Color
	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	    REORG ........ Family-Tree Data Base Reorganization
	    INFO ......... General Information
	    PC-DOS ....... Return to PC-DOS System

	    The DEFAULTs option permits the assignment of your unique values
	    to be used for the Disk Drive ID assignments, Printer Control
	    Codes and the use of Colors on the screen displays.


       DEFAULTS, DISK IDs

	    Family-Tree, Etc ------------ Copyright 1984 Pine Cone Software
	    DISK  PRINTER  COLORS
	    Assign Default Disk Drive IDs
	    ===============================================================

			 FT.ETC.DB1 --- Data Base, Person ----> A
			 FT.ETC.DB2 --- Data Base, Location --> A
			 FT.ETC.DB3 --- Data Base, Work ------> A
			 FT.ETC.DB4 --- Data Base, Note Pad---> A
			 FT.ETC.RPT --- Reports on Diskette --> A
			 FT.ETC-*.EXE - Programs --------> Default Drive
			 FT.ETC.OPT --- Options ---------> Default Drive

	    Selecting DISK results in the above screen, permitting the
	    assignment of alternate disk drives to the main Family-Tree data
	    bases and files.  The default of 'A' is for a single drive system.
	    The Disk Drive Identifier may be from A-F or 'blank' for the
	    Default DOS drive. The assignable drives may be diskettes, hard
	    disks, or RAM disks.

	    After keying the drive identifiers, press [Enter] to continue.
     Family-Tree, Etc -------------------------------------------------- Page 6
     ------------------------------------------------------- Pine Cone Software

       DEFAULTS, PRINTER CODES

	    The PRINTER options allows the assignment of printer control codes
	    for non-EPSON/IBM printers.  (The default Printer Control Codes
	    are designed for the EPSON and IBM dot matrix printers.) To modify
	    the codes, refer to your printer manual for the specific ASCII
	    code values.

	    Family-Tree, Etc ------------ Copyright 1984 Pine Cone Software
	    DISK  PRINTER  COLORS
	    Assign Default Printer Codes
	    ===============================================================
	    Attribute                          ASCII Printer Control Codes

	    Normal:     10 Characters/Inch --> 18
			6 Lines/Inch --------> 27,50
	    Compressed: 15+ Characters/Inch -> 15
			8 Lines/Inch --------> 27,48
	    Forms:      Form Feed (eject) ---> 12

	    +----------------------------------/ /-------------------------+
	    | For Non-Epson compatible printer/ /our printer manual for    |
	    | the proper codes for the specif/ /ions.  Key the ASCII codes |
	    | using decimal notation and sep/ /tiple codes with the comma. |
	    |---------------------------EPS/ /ts---------------------------|
	    | 10 Characters/Inch --> 18   / /orm Feed -----------> 12      |
	    | 6 Lines/Inch --------> 27,5/ /                               |
	    |                           / /                                |
	    | 15+ Characters/Inch -> 15/ /                                 |
	    | 8 Lines/Inch --------> 2/ /                                  |
	    +------------------------/ /-----------------------------------+

	    After keying the printer codes, press [Enter] to continue.


       DEFAULTS, SCREEN COLORS

	    Family-Tree, Etc ------------ Copyright 1984 Pine Cone Software
	    1-TEXT-A  2-TEXT-2  3-BACKGROUND  4-BOX-TEXT  5-BOX-BACKGROUND
	    Change (a) Main Text Color
	    ===============================================================
			      Screen Color Test Pattern

	      Pine Cone Software * FT-ETC * Family-Tree, Etc * Pine Con
	      ine Cone Software * FT-ETC * Family-Tree, Etc * Pine Cone
	      ne Cone Software * FT-ETC * Family-Tree, Etc * Pine Cone
	      e Cone Software * FT-ETC * +--------------------------------+
	       Cone Software * FT-ETC * F| Pine Cone Software * FT-ETC *  |
	      Sone Software * FT-ETC * Fa| ine Cone Software * FT-ETC * F |
					 | ne Cone Software * FT-ETC * Fa |
					 +--------------------------------+

	    The COLORS Option permits the specification of colors for the 5
	    main areas of the screen, selecting the same option in succession
	    (eg 3-BACKGROUND) will change the selected area to the next color.
     Family-Tree, Etc -------------------------------------------------- Page 7
     ------------------------------------------------------- Pine Cone Software

       CHARTS

	    Selecting CHARTS from the menu loads the chart program from
	    diskette and displays the chart options in menu format.  Using
	    the left/right arrow keys shows the following capabilities of
	    the Chart sub-system:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      PEDIGREE ..... Standard Pedigree Chart
	      DESCENDANTS .. Indented Free-Form Descendants Chart
	      ANCESTORS .... Indented Free-Form Ancestors Chart
	      FAMILY ....... Family Group Charts
	      RELATIONS .... Family Relationships
	      SCAN ......... Partial Name Scan/Search
	      OPTIONS ...... Specify Global Output Options
	      QUIT ......... Exit CHARTS program

	    The last two items on the menu (OPTIONS, QUIT) are not true
	    charts, put provide the capability to route reports to your
	    printer and/or diskette (OPTIONS) and a means of exiting the
	    CHARTS sub-system and transferring to other Family-Tree functions.

	    Based upon the type of Chart that you selected, a menu will
	    appear to prompt you for parameters required and options
	    available in chart generation.

	    If you have not created your data base using MAINTENANCE, you
	    will not be able to display CHARTS (no information to chart).
     Family-Tree, Etc -------------------------------------------------- Page 8
     ------------------------------------------------------- Pine Cone Software

       CHARTS, PEDIGREE

	    Selecting PEDIGREE from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      PEDIGREE ..... Standard Pedigree Chart
		SELECT ....... Select Individual to Chart
		RUN .......... Run Pedigree Chart Program
		GENERATIONS .. Set Number of Generations
		DATES ........ Set Print Birth/Death Dates
		  NO ........... Do Not Print Birth/Death Dates
		  YES .......... Print Birth/Death Dates
		  [Esc] ........ Return to Previous Screen
		IDs .......... Set Print Individual Identification Numbers
		  NO ........... Do Not Print IDs
		  YES .......... Print IDs
		  [Esc] ........ Return to Previous Screen
		NOTES ........ Set Print Note Pad Data
		  NO ........... Do Not Print Note Pad
		  YES .......... Print Note Pad
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the name of
	    the person that the chart is to be based upon.  After high-
	    lighting SELECT, a prompt message will replace the menu and you
	    would key the name of the desired individual ... probably only as
	    a partial character string ... and Charts will create a 'window'
	    with basic information about the persons found with the specified
	    character string within their name.  To scroll to the next name,
	    use the up/down arrow keys.  After the desired individual is
	    found, press the [Space Bar] to select, and the menu will
	    reappear.  Notice the Instructions on the lower line of the screen
	    for the special key uses.

	  . RUN - Instructs the system to generate the requested chart.

	  . GENERATIONS - Used optionally to control how many generations will
	    be used in the chart.  The default value is 4.

	  . DATES - Used to control printing of birth/death dates on the
	    chart.  After selecting YES/NO (or [Esc]) the menu returns.

	  . IDs - Used to control printing of the Internal System Identifiers
	    on the chart.  After selecting YES/NO (or [Esc]) the previous menu
	    returns.

	  . NOTES - Used to control printing of the Note Pad for the selected
	    individual.  If 'YES' is selected, the notes for the individual
	    will be printed at the bottom of the chart.  After selecting
	    YES/NO (or [Esc]) the previous menu returns.
     Family-Tree, Etc -------------------------------------------------- Page 9
     ------------------------------------------------------- Pine Cone Software

       CHARTS, DESCENDANTS

	    Selecting DESCENDANTS from the Charts menu results in the
	    following options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      DESCENDANTS .. Indented Free-Form Descendants Chart
		SELECT ....... Select Individual to Chart
		RUN .......... Run Descendants Chart Program
		DATES ........ Set Print Birth/Death Dates
		  NO ........... Do Not Print Birth/Death Dates
		  YES .......... Print Birth/Death Dates
		  [Esc] ........ Return to Previous Screen
		IDs .......... Set Print Individual Identification Numbers
		  NO ........... Do Not Print IDs
		  YES .......... Print IDs
		  [Esc] ........ Return to Previous Screen
		NOTES ........ Set Print Note Pad Data
		  NO ........... Do Not Print Note Pad
		  YES .......... Print Note Pad
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the name
	    of the person that the chart is to be based upon.

	  . RUN - Instructs the system to generate the requested chart.

	  . DATES - Used to control printing of birth/death dates on the
	    chart.  After selecting YES/NO (or [Esc]) the menu returns.

	  . IDs - Used to control printing of the Internal System Identifiers
	    on the chart.  After selecting YES/NO (or [Esc]) the previous menu
	    returns.

	  . NOTES - Used to control printing of the Note Pad for the selected
	    individual.  If 'YES' is selected, the notes for the individual
	    will be printed at the bottom of the chart.  After selecting
	    YES/NO (or [Esc]) the previous menu returns.
     Family-Tree, Etc ------------------------------------------------- Page 10
     ------------------------------------------------------- Pine Cone Software

       CHARTS, ANCESTORS

	    Selecting ANCESTORS from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      ANCESTORS .... Indented Free-Form Ancestors Chart
		SELECT ....... Select Individual to Chart
		RUN .......... Run Ancestors Chart Program
		GENERATIONS .. Set Number of Generations
		DATES ........ Set Print Birth/Death Dates
		  NO ........... Do Not Print Birth/Death Dates
		  YES .......... Print Birth/Death Dates
		  [Esc] ........ Return to Previous Screen
		IDs .......... Set Print Individual Identification Numbers
		  NO ........... Do Not Print IDs
		  YES .......... Print IDs
		  [Esc] ........ Return to Previous Screen
		NOTES ........ Set Print Note Pad Data
		  NO ........... Do Not Print Note Pad
		  YES .......... Print Note Pad
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the name
	    of the person that the chart is to be based upon.

	  . RUN - Instructs the system to generate the requested chart.

	  . GENERATIONS - Used optionally to control how many generations
	    will be used in the chart.  The default value is 4.

	  . DATES - Used to control printing of birth/death dates on the
	    chart.  After selecting YES/NO (or [Esc]) the menu returns.

	  . IDs - Used to control printing of the Internal System Identifiers
	    on the chart.  After selecting YES/NO (or [Esc]) the previous menu
	    returns.

	  . NOTES - Used to control printing of the Note Pad for the selected
	    individual.  If 'YES' is selected, the notes for the individual
	    will be printed at the bottom of the chart.  After selecting
	    YES/NO (or [Esc]) the previous menu returns.
     Family-Tree, Etc ------------------------------------------------- Page 11
     ------------------------------------------------------- Pine Cone Software

       CHARTS, FAMILY

	    Selecting FAMILY from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      FAMILY ....... Family Group Charts
		SELECT ....... Select Individual to Chart
		RUN .......... Run Family Group Chart Program
		NOTES ........ Set Print Note Pad Data
		  NO ........... Do Not Print Note Pad
		  YES .......... Print Note Pad
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the name
	    of the person that the chart is to be based upon.

	  . RUN - Instructs the system to generate the requested chart.

	  . NOTES - Used to control printing of the Note Pad for the selected
	    individual.  If 'YES' is selected, the notes for the individual
	    will be printed at the bottom of the chart.  After selecting
	    YES/NO (or [Esc]) the previous menu returns.
     Family-Tree, Etc ------------------------------------------------- Page 12
     ------------------------------------------------------- Pine Cone Software

       CHARTS, RELATIONS

	    Selecting RELATIONS from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      RELATIONS .... Family Relationships
		SELECT ....... Select Individuals for Relationship
		  1st .......... Select 1st Individual Name
		  2nd .......... Select 2nd Individual Name
		  [Esc] ........ Return to Previous Screen
		RUN .......... Run Relationship Program
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the names
	    of the persons for the relationship problem.  After highlighting
	    SELECT, a 1st/2nd Select menu will prompt for the names of the
	    desired individuals.

	  . RUN - Instructs the system to generate the requested chart.
     Family-Tree, Etc ------------------------------------------------- Page 13
     ------------------------------------------------------- Pine Cone Software

       CHARTS, SCAN

	    Selecting SCAN from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      SCAN ......... Partial Name Scan/Search
		SELECT ....... Partial Name for Scan
		RUN .......... Run Search/Scan Program
		[Esc] ........ Return to Previous Screen

	  . SELECT - Provides the capability of telling the system the name of
	    the person (or character string) that the listing is to be based
	    upon.

	  . RUN - Instructs the system to generate the requested listing.
     Family-Tree, Etc ------------------------------------------------- Page 14
     ------------------------------------------------------- Pine Cone Software

       CHARTS, OPTIONS

	    Selecting OPTIONS from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants, ...
	      OPTIONS ...... Specify Global Output Options
		DISKETTE ..... Diskette-File Options
		  OPEN ......... Start Writing to Diskette-File
		  CLOSE ........ Stop Writing to Diskette-File
		  PRINT ........ Print the Diskette-File
		  ERASE ........ Reset/Empty the Diskette-File
		  [Esc] ........ Return to Previous Screen
		PRINTER ...... Turn Printer Mode On or Off
		  NO ........... Do not create Printer Reports
		  YES .......... Create Printer Reports
		  [Esc] ........ Return to Previous Screen
		WAITING ...... Turn [WAITING] Message On or Off
		  YES .......... Pause at Bottom-of-Screen
		  NO ........... Do not pause at Bottom-of-Screen
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen

	  . DISKETTE - The sub-menu provides the capability of capturing
	    output charts and/or reports in a diskette file (FT-ETC.RPT).
	    Using this facility permits the maximum data to be captured.

	    .. OPEN - Begin writing reports to diskette
	    .. CLOSE - Stop writing reports to diskette
	    .. PRINT - Print the report diskette file.  The output will
	       be printed in a 'cut-&-paste' format ... with the system
	       prompting for a print width.  If a width greater than 80
	       is specified, the strips will be printed in condensed
	       mode.  Using a default of 80, columns 1-80 will be printed
	       on the 1st page, 79-158 on the 2nd, and 157-236 on the
	       3rd.  The column overlap between pages allow for
	       alignment when pasting the pages together.
	    .. ERASE - Will 'reset' the diskette file to the beginning.
	       Be sure that you have issued a 'PRINT' prior to the eras-
	       ing the current reports.

	  . PRINTER - The sub-menu with a YES/NO option permits the charts/
	    reports to be routed to the (optional) printer in addition to be
	    displayed on the screen.  Based upon the chart type selected the
	    printer line width will be set at either 10cpi or 15cpi,
	    resulting in possibly more information being printed then
	    displayed.

	  . WAITING - The sub-menu with a YES/NO option provides the cap-
	    ability of eliminating the prompt message to press [Esc] that is
	    normally displayed when a the screen becomes full.  This option
	    is useful when creating printer and/diskette charts.
     Family-Tree, Etc ------------------------------------------------- Page 15
     ------------------------------------------------------- Pine Cone Software

       CHARTS, QUIT

	    Selecting QUIT from the Charts menu results in the following
	    options:

	    CHARTS ....... Genealogy - Pedigree, Ancestors, Descendants  ...
	      QUIT ......... Exit CHARTS program
		CHARTS ....... Cancel Quit - Stay in CHARTS
		MAINTENANCE .. Exit Charts - Go to Maintenance Menu
		REORG ........ Exit Charts - Go to Data Base Reorganization
		PC-DOS ....... Exit Charts - Return to Disk Operating System
		[Esc] ........ Return to Previous Screen

	  . The keywords within the QUIT option permit the termination of the
	    Charts sub-system and transfer to the specified system.
     Family-Tree, Etc ------------------------------------------------- Page 16
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE

	    Selecting MAINTENANCE from the menu loads the maintenance program
	    from diskette and displays the maintenance options in menu
	    format.  Using the left/right arrow keys shows the following
	    capabilities of the Maintenance sub-system:

	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	      ADD .......... Add New Names/Relationships to Data Base
	      CHANGE ....... Change Existing Names/Relationships in Data Base
	      DELETE ....... Delete Existing Names/Relationships in Data Base
	      QUIT ......... Exit MAINTENANCE program

	    The last item on the menu (QUIT) provides the capability to exit
	    the Maintenance sub-system and transferring to other Family-Tree
	    functions.

	    Based upon the type of Maintenance that you selected, a menu will
	    appear to prompt you for the required information.

	    The following guidelines should be considered when entering data
	    into the data base:

	    . Names - The maximum length of a name is 26 characters.  It is
	      suggested that a consistent format be used throughout your
	      data base.  The following are typical formats:

			 Frederick J Lastname
			 Frederick J LASTNAME   <--- Preferred format
			 LASTNAME Frederick John
			 LASTNAME, Frederick John

	    . Places - The maximum length of a place name is 20 characters.
	      It is suggested that a consistent format be used throughout
	      your data base.

	      The Birth/Death/Marriage Place fields are optional.

	    . Dates - The maximum length of a date is 9 characters and
	      should be coded in a ddmthyyyy format, with the year (yyyy)
	      in positions in 6-9.  The following are acceptable dates:

			 04JUL1776           1776    ?????177?
			 04jul1776      c.   1776    04jul177?
			   jul1776      circa1776    1776

	      The Birth/Death/Marriage Date fields are optional.

	      The system does limited editing of dates to ensure the correct
	      date format, and will automatically right justify (positions
	      6-9) if only a year is entered in positions 1-4).  In addition,
	      if positions 3-5 contain numeric characters, a request will be
	      made to re-enter the value.
     Family-Tree, Etc ------------------------------------------------- Page 17
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE, ADD

	    Selecting ADD from the Maintenance menu results in the following
	    options:

	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	      ADD .......... Add New Names/Relationships to Data Base
		NAME ......... Add Individual Name/Sex/Birth/Death/Notes
		PARENTS ...... Add Parent Relationship to Individual
		  CHILD-ID ..... Identify Child for Child/Parent Relationship
		  PARENT-ID .... Identify Parents for Child/Parent Relationship
		  JOIN ......... Establish Child/Parent Relationship
		  [Esc] ........ Return to Previous Screen
		SPOUSE ....... Add Spouse Relationship to Individual
		  INDIVIDUAL-ID  Identify Individual for Marriage Relationship
		  SPOUSE-ID .... Identify Spouse for Marriage Relationship
		  JOIN ......... Establish Marriage Relationship
		  [Esc] ........ Return to Previous Screen
		[Esc] ........ Return to Previous Screen


       MAINTENANCE, ADD NAME

	    NAME - Provides the capability of adding new persons to the data
	    base.  After selecting NAME, a 'window' will appear for keying
	    basic information (Name, Sex, Dates/Places of Birth/Death and a
	    Note Pad area).  The 'tab-to-next-field' and 'tab-to-previous-
	    field' keys, located to the left of the keyboard, may be used to
	    'skip' to the desired fields.  After the information has been
	    keyed, press [Enter] ... ([Enter] is only pressed once per
	    'window' ... key all of the information and then press [Enter].)
	    The 'Name' and 'Sex' fields are required for all individuals ...
	    dates/places and Note Pad usage are optional.

	    Family-Tree, Etc ------------ Copyright 1984 Pine Cone Software
	    NAME  PARENTS  SPOUSE
	    Add Individual Name/Sex/Birth/Death/Notes Information
	    ===============================================================

	      +----------------------------------------------------------+
	      | Name: __________________________                  Sex: _ |
	      | Birth Date: _________        Place: ____________________ |
	      | Death Date: _________        Place: ____________________ |
	      +----------------------------------------------------------+

	    +-Note Pad Area (10 lines of 72 characters)--------------------+
	    | ____________________________________________________________ |
	    | ____________________________________________________________ |
	    . ____________________________________________________________ .
	    . ____________________________________________________________ .
	    . ____________________________________________________________ .
	    . ____________________________________________________________ .
	    | ____________________________________________________________ |
	    | ____________________________________________________________ |
	    +--------------------------------------------------------------+
     Family-Tree, Etc ------------------------------------------------- Page 18
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE, ADD PARENTS

	  . PARENTS - This option provides the capability of establishing a
	    child/parent relationship.  The CHILD-ID and PARENT-ID items
	    within the sub-menu will be used to identify the desired in-
	    dividuals by specifying a name (or partial name).  Names within
	    the data base that contain the specified character string will be
	    displayed in a window with related information.  When the desired
	    name is displayed within the window, the name is selected by
	    pressing the [Space Bar].  The PARENTS menu will reappear.  The
	    JOIN option updates the data base to reflect the parent/child
	    relation for the selected persons.  Press [Esc] to return to the
	    ADD menu.

	 ** Before a Parent Relationship can be established, a SPOUSE relat-
	    ionship must have been previously accomplished for the 'parents'.
	    The PARENT-ID may consist of the name (or character string within
	    a name) of either parent.


       MAINTENANCE, ADD SPOUSE

	  . SPOUSE - This option provides the capability of establishing a
	    marriage relationship.  The INDIVIDUAL-ID and SPOUSE-ID items
	    within the sub-menu will be used to identify the desired indiv-
	    iduals by specifying a name (or partial name).  When the desired
	    name is displayed within the window, the name is selected by
	    pressing the [Space Bar].  The SPOUSE menu will reappear.  The
	    JOIN option will display a mini-window to record the date/place of
	    the relationship (optional information), and updates the data base
	    to reflect the marriage relationship for the selected persons.  If
	    the selected individual has a marriage relationship prior to the
	    JOIN, the JOIN will establish additional (2nd, etc) relationships.
     Family-Tree, Etc ------------------------------------------------- Page 19
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE, CHANGE

	    Selecting CHANGE from the Maintenance menu results in the
	    following options:

	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	      CHANGE ....... Change Existing Names/Relationships in Data Base
		INDIVIDUAL-ID  Identify Individual for CHANGE
		NAME ......... Change Name/Birth/Death/Note Information
		PARENTS ...... Change Parent Relationship of Individual
		MARRIAGE-INFO  Change Marriage Date/Place of Individual
		[Esc] ........ Return to Previous Screen

	  . INDIVIDUAL-ID - Identifies the Individual that is to be changed by
	    specifying the name or portion of the name.  A 'window' is created
	    with persons that have the character string as a portion of their
	    name.  Using the Up/Down cursor movement arrow keys, all persons
	    may be viewed.  When the correct person is located, press the
	    [Space Bar] to select.

	  . NAME - Permits corrections to be made to the name and other
	    fields of the selected person.

	  . PARENTS - Permits corrections to the child/parent relationship of
	    the selected person.

	  . MARRIAGE-INFO - Permits additions/corrections to be made to the
	    marriage date and location information.

     Family-Tree, Etc ------------------------------------------------- Page 20
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE, DELETE

	    Selecting DELETE from the Maintenance menu results in the
	    following options:

	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	      DELETE ....... Delete Existing Names/Relationships in Data Base
		INDIVIDUAL-ID  Identify Individual for DELETE
		NAME ......... Delete Individual from Data Base
		PARENTS ...... Delete Parent Relationship of Individual
		SPOUSE ....... Delete Spouse Relationship of Individual
		[Esc] ........ Return to Previous Screen

	  . INDIVIDUAL-ID - Identifies the Individual that is to be to be the
	    target of the delete.  A name or portion of the name is entered
	    and a 'window' is created with persons that have the specified
	    character string as a portion of their name.  Using the Up/Down
	    cursor movement arrow keys, all persons may be viewed.  When the
	    correct person is located, press the [Space Bar] to select.

	  . NAME - The selected individual will be deleted if ...

		     .. does not have spouse *
		     .. does not have children *

	  . PARENTS - The parent relationship will be deleted from the
	    selected person.

	  . SPOUSE - The marriage relationship will be deleted from the
	    selected person if ...

		     .. does not have children *

	     * If a child or marriage relationship exists, the children
	       and/or spouse must be first deleted.  Use the DELETE
	       PARENTs to erase child/parent relationships.  The
	       INDIVIDUAL-ID specified would be that of the child.  Use
	       the DELETE SPOUSE to erase marriage relationship.  After
	       removing the relationship(s) the name(s) may be erased
	       using the DELETE NAME.
     Family-Tree, Etc ------------------------------------------------- Page 21
     ------------------------------------------------------- Pine Cone Software

       MAINTENANCE, QUIT

	    Selecting QUIT from the Maintenance menu results in the following
	    options:

	    MAINTENANCE .. Maintenance/Creation of Family-Tree Data Base
	      QUIT ......... Exit MAINTENANCE program
		MAINTENANCE .. Cancel Quit - Stay in MAINTENANCE
		CHARTS ....... Exit Maintenance - Go to Charts Menu
		REORG ........ Exit Maintenance - Go to Data Base Reorganizatio
		PC-DOS ....... Exit Maintenance - Return to Disk Operating Syst
		[Esc] ........ Return to Previous Screen

	  . The keywords within the QUIT option permit the termination of the
	    Maintenance sub-system and transfer to the specified system.
     Family-Tree, Etc ------------------------------------------------- Page 22
     ------------------------------------------------------- Pine Cone Software

       REORG

	    Selecting REORG from the menu loads and runs the data base re-
	    organization program from diskette.  After selecting REORG, there
	    are no user parameters or information required ... just press
	    [Enter].  REORG should be run after MAINTENANCE that has resulted
	    in the ADD, CHANGE, or DELETE of Individuals or relationships, and
	    prior to the use of CHARTS.  (Multiple MAINTENANCE sessions may be
	    run without a REORG, however after the last Maintenance session,
	    REORG should be run to assure properly structured Charts.)

	    Data Bases records created from prior releases of 'Family-Tree,
	    Etc' have a layout/length that differs from the Version 3 system.
	    REORG will automatically adjust, if necessary, data base records
	    to be compatible with Version 3.  After running REORG, do not use
	    your data bases with a pre-Version 3 system.

	    REORG ........ Begin Reorganization of Data Bases
	      QUIT ......... Exit REORG program
		CHARTS ....... Exit Reorg - Go to Charts Menu
		MAINTENANCE .. Exit Reorg - Go to Maintenance
		PC-DOS ....... Exit Reorg - Return to Disk Operating System
		[Esc] ........ Return to Previous Screen

	  . The keywords within the QUIT option permit the termination of the
	    Reorg sub-system and transfer to the specified system.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0240

     Volume in drive A has no label
     Directory of A:\

    FT-DEMO  EXE     44848   3-02-86   3:02a
    FT-ETC   EXE     34890   3-02-86   3:02a
    FT-ETC-C EXE     47308   3-02-86   3:02a
    FT-ETC-M EXE     47018   3-02-86   3:02a
    FT-ETC-R EXE     30228   3-02-86   3:02a
    FT-ETC   OPT       256   3-02-86   3:02a
    FT-ETC   TXT     44412   3-02-86   3:02a
    FILES240 TXT      1960   4-06-87   4:28p
    GO       BAT       378   4-06-87   4:28p
            9 file(s)     251298 bytes
                           66560 bytes free
