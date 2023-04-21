---
layout: page
title: "PC-SIG Diskette Library (Disk #1331)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1331/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1331"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CIRCLE SOFTWARE"

    CIRCLE SOFTWARE is a DOS-level command shell with loads of utilities to
    help you get more from your PC.
    
    Menus include:
    
    ~ PMENU a comprehensive DOS level menu system
    
    ~ ADVANCED BATCH MENU SYSTEM a point and shoot menu with help areas for
    each menu item
    
    ~ ADVANCED MENU SYSTEM runs in BATCH or memory resident mode, help
    windows and multiple help pages
    
    Utilities include:
    
    ~ ATS change or read file attributes
    
    ~ CDD change drive and directory with one command
    
    ~ CHKFILE runs DOS CHKDSK to fix unlinked clusters, views and deletes
    or saves found files
    
    ~ CLRCRT clears the crt, prevents burn in
    
    ~ CLRPRT clears printer, advances paper
    
    ~ COUNT counts words in ASCII files
    
    ~ DELE deletes all files except the ones specified to be retained by
    date, filename, or file extension
    
    ~ DSD delete subdirectory
    
    ~ DSPTXT displays text in a file, can also show parts of a file
    
    ~ DT set, reset a file's date and time
    
    ~ EOF places DOS EOF character at the end of a file
    
    ~ FE adds Circle Software searches to any other program
    
    ~ FIND_ finds lines that have the searched for string and prints them
    
    ~ FINDA (a combination of FINDF and PFIND) locates files by string
    within the name and then checks for string within the file
    
    ~ FINDF finds character strings located anywhere in the file name
    
    ~ FK changes keyboard delay and repetition rates
    
    ~ LOG logs date and time, password protected
    
    ~ MODE80 switches screen to 80-column color mode
    
    ~ PCOMP compares files using partial file names, and/or dates
    
    ~ PCOPY copies files using partial file names, and/or dates
    
    ~ PFIND finds information between special markers
    
    ~ PPRINT prints ASCII files with a header, addresses envelopes
    
    ~ PRTCODE sends special user specified print codes to the printer
    
    ~ PRTLBL prints address labels found using PFIND
    
    ~ PSND sounds a speaker tone
    
    ~ PSORT sorts blocks of data
    
    ~ RUN_IT finds a program in any directory and runs it (path not needed).
    
    Help files for each menu and command are presented on the screen in a
    window next to the command menu. The user can also create his/her own
    help files that show in the same way.
    
    PURSUIT, a survey maker, is also included. The program allows the user
    to construct a set of questions and store the answers in a database for
    later analysis.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRCLSOFT.DOC

{% raw %}
```
	To un-archive these programs use PKUNZIP from PKWARE.
	

	There is one file "PMENU.EXE" that is the same as in the PF-UTILS.ARC
	file. You may answer Y or N to overwriting it, they are the same.



  ----------------------  PURSUIT  Information ---------------------------

                    P U R S U I T    DOCUMENTATION

                    Copyright Circle Software 1988


           PURSUIT is a MULTIPLE CHOICE QUESTION program.

	It can be used for many types of applications.  In one case it has
been used by the National Association of Corrosion Engineers (NACE) to
poll members on their knowledge of NACE.

	Statistics on the answers given is kept in a DAT file.

	The form to run the program is:	

	  pursuit filename [switches with a space between each]

	One needs to make a QUESTION file, an OPTIONS file (a list of 
multiple choice answers), an EXPLANATION file (explains the correct 
answer - optional), and a TITLE file (which gives a title or NAME to 
the question set, also optional.)

	PURSUIT documentation can be listed by running the program with NO 
file name given, Type: pursuit (RETURN)

	Registration + shipping + Md Tax (5% - if needed) covers the next 
update.  Next update version will be 1.3.0 (Shareware Version is 1.2.0).

	Version 1.3.0 is planned to have:

		Adding a Title to the Pursuit question set, 
		Keeping a list of the user responses, with name
		Keeping a list of user names and addresses

	Version 1.3.0 is planned to be out by 6/30/88.

  ----------------------  Pmenu  Information ---------------------------

      Pmenu was designed to be a comprehensive DOS level menu system.  It
    requires only one other file to operate, a BATCH file.
          
      In its default mode both the number keys & the Function-keys 
    (F-keys), when pressed, will pass codes to the batch function
    ERRORLEVEL (EL), from 0 to 9 for the number keys & from 1 to 10 for
    the F-keys.  All other keys generate EL's equal to their ASCII code
    - 48.

      Special key assignments may be entered to send the EL's from 1 to 
    10 (or up to 72) if desired.  These settings will supersede the
    numeric & F-keys.  However, both the numeric & F-keys are still
    functional.

      Additional settings can be made for screen colors, screen mode
    (40 or 80 character wide), line spacing, cursor position & a beep
    after display of the menu.

      There is even a screen that displays: "Working,  Please wait..." 
    upon exit, for use when the batch process to follow is long.

      There are two more options. One turns off the copyright notice 
    delay, normally 2 seconds, & the last prints out the ERRORLEVEL
    that will be passed to DOS upon exit.  This last helps in the
    debugging of the batch file being written to use these ERRORLEVELS.

    Switches:

      /4s   - Screen set to 40 character mode, s = save this mode, option.

      /b    - Beep switch to turn beep on. Beep after menu printed.

      /c#,# - Print with colors: #-foreground, #-background

      /e    - Errorlevel display. Shows EL of key pressed.

      /fAB  - Find Char 'A' then start printing text, end at 'B'

      /klLaA- Keys, in pairs, for EL's. EL 0 = l or L, EL 1 = a or A.

      /n    - Never mind, Do Not wait for key input.

      /o    - Turn off the Copyright notice 2 second delay.

      /p#,# - Position cursor at: #-line, #-column. Turns cursor ON,
              it is normally OFF.

      /s    - Print an extra line feed between each line printed.

      /w    - Working, Please wait... displayed.


                      Advanced  BATCH System  Documentation

                 Copyright Circle Software/Philip Karras 1989

	This menu program is a BATCH file menu program.  It has a point and
	shoot menu menu system like the Advanced Menu System, along with the 
	small help area for each menu item.



                      Advanced  Menu  System  Documentation

               Copyright Circle Software/Philip Karras 1987,88,89


	   The Advanced Menu System uses less than 36K of disk space and
   less than 100K of RAM when in memory resident mode or only 80 BYTES
   of RAM in DOS BATCH mode.  (See: Ram Requirements.)

	   This Advanced Menu System can run programs that end in the
   following extensions: COM, EXE, and BAT.  It can also run DOS
   COMMAND.COM programs such as COPY, ERASE, CHDIR, and TYPE.  It can
   even return to DOS on a temporary basis so that DOS commands can be
   run and then return to the menu by typing: exit (RETURN).  (See:
   Getting Programs to Run and Entering Commands.)

	   The amount of RAM needed is decided by the amount of RAM the
   Advanced Menu System requires, the amount of RAM the program to be
   run needs, and the amount of RAM the COMMAND.COM requires.  (See:
   Ram Information.)

	   It is now possible to place all programs in a menu-driven
   format, that are not used often enough to make their use "second
   nature" for example, utilities that are accumulated but are not used
   often enough to make their commands well known.  The Advanced Menu
   System has three levels of user made help: help lines (one line of
   78 characters), help screens (24 lines by 80 characters), and
   small-help screens (11 lines by 48 characters.) (See: Creating a
   HELP file)

	   With the ability to pass commands to a program (called a command
   line input) the Advanced Menu System can help take the place of the
   DOS prompt while giving context-sensitive help information that YOU
   create! The command line input section has a line editor and a
   20-line command buffer.  (See: AMS General Use Information
   (Editor).)

	   Command Line Inputs can be passed between programs and default
   file extensions can be built in.  Also, at initialization time of
   the Advanced Menu System, a default /path and an initializing
   command line input can be set.  (See: AMS command codes, and AMS
   General Use Information - switches.)

	   The Advanced Menu System also has color or monochrome settings. 
   Monochrome is the starting default, but once color is set, the
   Advanced Menu System will start in color.


    ----------------------  PFIND Utilities  -------------------------

       Copyright (c)  Philip Karras/Circle Software  1986-1988

      The Pfind utilities were written to help in finding & printing
    information in computer ASCII data files. The data files can be
    made using most any word processor or text editor.


      ATS:      Change or read the file attributes of files.

      COUNT:    Counts "words" in a text file.

      CHKFILE:  Runs the DOS CHKDSK program & can review the created
                files and delete or save them.

      CDD:      Changes to a drive and a directory.

      CLRCRT:   Clears the CRT to protect it from burn in.

      CLRPRT:   Advances the printer either by line(s) or by page.

      CURSOR:   Sets cursor on or off and its size (DOS 3.2 or lower.)

      DELE:     Deletes all file(s) except file(s) named.

      DSPTXT:   Display a text file, can find text in the file.

      DSD:      Deletes a sub-directory all files & all sub-directories.

      DT:       Changes the Date and Time stamp on any file.

      EOF:      Places DOS EOF char (dec 26) at the end of a file.

      FE:       Front end, finds files like findf & passes these to any 
                other program.

      FIND_:    Will find lines that have the searched-for string & print
      FINDL:    them as they are in the file. The case ignore mode is the
                default mode. (FINDL is the interactive version of FIND_.)

      FINDA:    This is a combination of FINDF & PFIND. It will first
                locate all the files it can & then check each of them for
                the string of interest.

      FINDF:    This program finds files on a disk. It finds all files
                whose names contain the string of interest, irrespective 
                of their location in the file name. It has a BATCH
                switch to help in backing up sub-dirs.

      FK:       Allows changing repeat rate and delay for pressed keys.

      LOG:      Will keep a log of the times you log onto your system, 
                has password protection.

      MODE80:   Switches the screen back to 80(characters) x 25 lines.

      PCOMP:   Compairs files using partial file names, and/or dates.

      PCOPY:    Copies files using partial file names, and/or dates.

      PFIND:    Will find all the information placed on file between 
                the '*' markers.

      PMENU:    This program prints a file to the screen. It is designed 
                to help in printing DOS level menus to the screen. 

      PPRINT:   This program is an ASCII line printer It prints ASCII
                files with all TABs replaced with 3 spaces each & with a
                header consisting of: file name, date, time (of printing),
                & "Page" #. These are switchable off. PPRINT can also 
                address envelopes.

      PRTCODE:  Will send codes to a printer; it can be used to change 
                printer fonts.

      PRTLBL:   Will print address lines on labels. It uses the same data
                file as Pfind. 

      PSND:     Sounds a tone.

      PSORT:    Sorts blocks of data, like the Pfind data block files.

      RUN_IT:   Finds a program in any DIR & runs it. (Path not needed)



          ORDER/REGISTRATION   FORM   CIRCLE SOFTWARE   PRODUCTS


 |         Item              | Quantity |  Reg fee per copy  |    Total   |
 +---------------------------+----------+--------------------+------------+
 | PURSUIT program           |          |      $20.00        |            |
 +---------------------------+----------+--------------------+------------+ 
 | Pmenu program             |          |      $10.00        |            |
 +---------------------------+----------+--------------------+------------+
 | Advanced Batch Menu  (ABM)|          |      $20.00        |            |
 +---------------------------+----------+--------------------+------------+
 | Advanced Menu System (AMS)|          |      $30.00        |            |
 +---------------------------+----------+--------------------+------------+
 | ALL Menu Programs         |          |      $45.00        |            |
 +---------------------------+----------+--------------------+------------+
 | Pfind Utilities           |          |      $30.00        |            |
 |  *** Includes  Pmenu ***  |==========|====================|============|
 +---------------------------+----------+--------------------+------------+
 | SEE  text editor          |          |      $30.00        |            |
 +---------------------------+----------+--------------------+------------+ 
 | Discount for Pfind + AMS  |          |      -$5.00        |            |
 | Must buy BOTH for discount|----------|--------------------|------------|
 |===========================|==========|====================|============|
 |      SUB  Total           |          |      -------       |            |
 |===========================|==========|====================|============|
 |Md. State sales tax  5%    |          |         5%         |            |
 +---------------------------+----------+--------------------+------------+
 | Shipping per disk:        |          |       $2.00        |            |
 +---------------------------+----------+--------------------+------------+
 |===========================|==========|====================|============|
 |          Total            |          |      -------       |            |
 |===========================|==========|====================|============|

	The SEE text editor is the one we use to make menus for the
Advanced Menu System and Pmenu.

	REGISTRATION:  If you register you will receive the following:

	               a) A letter & your address on our mailing list.  We
	                  will be trying to publish a regular newsletter of
	                  helpfull hints on how to use our software (as 
	                  funds allow).  Your letters of comments &
	                  suggestions are welcome!

	               b) The full program disk which may have a newer 
	                  version of the program and/or more documentation.

	               c) Extra files, if available.  (AMS comes with a
	                  menu files disk which has menus for a number of
	                  applications.)

	UPDATES: The programs have in the past been updated twice a year as 
	         significant changes, additions, and or corrections have
	         been warrented.  Your registration places you on our update 
	         mailing list for automatic future update notices.


	The ALL Menu Programs disk contains the Advanced Menu System, the
Advanced Batch Menu, and Pmenu.  It also has a set of menus for the 
Pfind Utilities.




   ******************* Quantity discounts are avalible. *******************



	There is a $5.00 discount for combination purchases of the Pfind
	Utilities and the Advanced Menu System.  (A $5 discount for each pair
	purchased.)


    Make check out to:      Circle Software


	Send this form and check to:	                                          
                                   Circle Software
                                   3305 Hampton Court
                                   Mt. Airy, Md.   21771

```
{% endraw %}

## FILE1331.TXT

{% raw %}
```
Disk No: 1331                                                           
Disk Title: Circle Software                                             
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: Circle Software Utilities                                
Author Version: 3.60                                                    
Author Registration: $15.00 to $30.00.                                  
Special Requirements: Hard drive and a printer.                         
                                                                        
CIRCLE SOFTWARE is a menu-driven, DOS-level command shell with loads of 
utilities to help you get more from your PC.                            
                                                                        
Utilities include:                                                      
                                                                        
~ COUNT   counts words in ASCII files                                   
                                                                        
~ DELE    deletes all files except the ones specified to be retained    
by date, filename, or file extension                                    
                                                                        
~ DSPTXT  displays text in a file, can also show parts of a file        
                                                                        
~ FIND    finds lines in a file and prints them                         
                                                                        
~ FINDF   finds character strings located anywhere in the file name     
extension                                                               
                                                                        
~ MODE80  switches screen to 80-column color mode                       
                                                                        
~ PCOMP   compares files using partial file names                       
                                                                        
~ PCOPY   copies files using partial file names                         
                                                                        
~ PFIND   finds information between special markers                     
                                                                        
~ PMENU   is a screen printing interface                                
                                                                        
~ PPRINT  prints ASCII files in a formatted layout, allows suppression  
                                                                        
~ PRTCODE sends special user specified print codes to the printer       
                                                                        
~ PRTLBL  prints address labels found using PFIND                       
                                                                        
~ PSND    sounds the speaker                                            
                                                                        
~ PSORT   sorts blocks of data                                          
                                                                        
~ RUN_IT  allows user to run an executable file from anywhere in the    
directory structure                                                     
                                                                        
Help files for each menu and command are presented on the screen in a   
window next to the command menu.  The user can also create his/her own  
help files that show in the same way.                                   
                                                                        
Includes also, PURSUIT, a survey maker.  The program allows the user to 
construct a set of questions and store the answers in a database for    
later analysis.                                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## BEGINNER.DOC

{% raw %}
```
-------------------------- BEGINNERS'  CORNER --------------------------

	Welcome, and thanks for buying the Pfind Utilities. In this file I 
will try to explain the how and why of using a few of the more
powerful programs on the Pfind Utilities disk.

	First, let me say that I tried to follow a form for all of the 
programs. The general form is:

    PRGM_NAME (Drive:\Path\FILE_NAME) (string) (switches or codes)

PRGM_NAME is the name of the program you want to run (execute).
          Always needed.

(Drive:\Path\ is the drive and path where the file can be found, if 
              needed.

FILE_NAME) is the name of the file to search, if needed.

(string) is the part of a word, a word or several words to search
         for, if needed.

(switches or codes) are the switches to control options in the
                    program, if needed or the codes to send to a
                    printer, if needed.

	Let's go over the example(s) given on the printed sheet that 
came with the Pfind Utilities. If you remember, Joe needed to send a 
letter about "wedgable widgets" to all of his New York clients.
Here is what he typed to find the "lost" file:

	finda ww*.* wedgable widgets /o >ww.lst

	The program FINDA is "run - executed" by first typing "FINDA" on 
the DOS command line.  (This is the line on the screen that starts
with a disk drive letter, like A> or C>, etc.)

	Joe did NOT type a disk drive name or a path because he didn't know
where he should start the search. He assumed that he should start on
the current drive and at the root directory.  (The current drive is the
one the DOS command line displays,"A>".  The root directory is the MAIN
or lowest directory on a disk. All other directories are called "sub
directories".)

	Joe did enter a name for the file.  It was "ww*.*" which tells
DOS to locate all of the files on the disk that start with the
letters "ww".

	Next comes a space and then the string Joe wanted to search for.
In this case, it was "wedgable widgets".  This means that each file
found by FINDA whose name starts with "ww" will be opened and every
line of that file will be looked at to see if it contains "wedgable
widgets".  For a large file, the search can take quite some time to
complete.  When a match is found, the file name, path, file creation
data, and five lines of text will be printed on the screen and a beep
will sound.

	Since Joe did not know how long this might take, he left a space
and he used the "/o" switch.  This switch tells FINDA to NOT beep
when it finds the string.

	The last entry typed by Joe was a space and the DOS command
">ww.lst" which tells DOS to make a file called "ww.lst" that will
contain all of the outputs of the FINDA program.  So, what would
normally go to the screen, instead went into the file "ww.lst".  In
this way Joe could do other things and come back later to check the
ww.lst file using his word processor.  He could then locate the file
he needed with the information saved in the ww.lst file.

	Before I go on, let me say a few things. First, the amount of time 
that FINDA (and FINDF) takes to find files is inversely proportional
to the amount of information known about the file.  This means that
the more that is known about a file, the shorter the search time to
find that file will be.  An Example of this is: Joe used "ww*.*" to
find the "lost" file .  This was because his boss had said that the
file name "started with WW".  This told Joe that he did NOT have to
search for "ww" through out a file name, but only at the beginning. 
If Joe had simply used "finda ww wedg..." the search would have taken
longer because FINDA would have had to search the entire file name for
a letter combination of "ww".  Then, if found, the entire file would
have to be searched to find a match with "wedgable widgets".  The
worst possible thing (for short search time) would have been if Joe's
boss had said that he didn't know the name of the file or any part
there of.  In this case Joe would have had to use just "*.*" for the
file name and then EVERY file on the disk would have been searched
for a match with "wedgable widgets".  Second Example: Joe wanted to
search the file(s) for the terms "wedgable widgets".  If Joe had only
known that the word "widgets" was in the file the search would have
taken longer.  This is because each word would have to be checked to
see if it matched the one word given, with two words given only word
pairs need to be searched.  So again, the more that is known (the
more words in a distinguishing sentence) about a file, the shorter
the search time will be to find the file(s).

	As a last added piece of information let me say that using FINDF
is exactly like used FINDA except that FINDF does not need a string
to search for.  It only searches for file name matches, so if you now
understand how to use FINDA you also understand most of how to use
FINDF.


	Joe's next job was to find the N.Y. clients and to make a NY.LST 
file that would contain the list of these clients. He did this by 
typing:

	pfind mailall.lst N.Y. /o /d >NY.LST

	
	Here Joe started with the name of the program to use, which was 
"PFIND".

	Then he typed a space and the name of the file to use.  This means
that the program "PFIND" will open the file "MAILALL.LST" and search it.

	A space and the string to search for were entered next, in this case
"N.Y.".   The program PFIND now searches "MAILALL.LST" for the string
"N.Y.".   It then prints all of the found information on the screen.

	Joe left another space and used the beep off switch, another space,
and then the "/d" (delimiter switch.) This means that all of the
information groups printed out will have a "*" between them.  So each
address, as it is printed out, has a "*" above it and a "*" below it. 
These are start and end indicators needed by the PRTLBL program.

	The last entry was a space, the DOS pipe command and a file name, 
">NY.LST". This tells DOS to make a file called "NY.LST" and to
put all of the information that comes from PFIND into it.  What this
means is that a new mailing list called "NY.LST" will have all of the
New York addresses in it when PFIND is done.

	The last program that Joe ran was the PRTLBL program. He typed:

	prtlbl ny.lst 29

	This tells DOS to run the PRTLBL program, read the NY.LST file, and
print out all of its information.  The 29 at the end tells the printer
to switch to its small print mode.  (Joe was using an Okidata 82a
printer).  Other printer codes can be sent or the printer can be set up
by hand before running PRTLBL.

	The Following are explanations for some of the problems that the
PFIND UTILITIES were designed to overcome.

PFIND: I found that DOS had a find filter, but that it would only find 
       one line of information at a time and it would print it out in
       capital letters.  I created PFIND to find many lines of
       information that are related, a group of information,
       addresses, client information, etc.  It will find up to 9
       lines above the matched line and as many lines below as there
       are before a "*" is found at the start of a line.  I chose the
       "*" character to tell PFIND to start and stop.  Thus, the use
       of the "*" is a delimiter, a group separator.

FIND_: This program is very similar to the DOS FIND filter, except
       that it is in the Case Ignore Mode to start.  This means that
       as the search is done on the string, it doesn't matter whether
       the letters are upper case or lower case, unless the case
       dependent switch is turned on - "/i".  The information found
       is not changed to all capital letters when printed.

PRTCODE: Was written to send printer codes to printers. There is also 
       a demonstration batch file called "SETP.BAT" which shows how to
       write a batch file to set up a printer.  It calls up PRTCODE and
       is set up to change the fonts on a NEC pinwriter P3-3 printer.

PRTLBL: This program will use the same type of data files as PFIND. 
       The addresses need to be separated by "*".  It prints the
       addresses onto address labels.  Printer codes can be sent using
       this program so that one need not use PRTCODE first.  Addresses
       must have 3 or 4 lines.  These can be blank lines.

PPRINT: I found that the two dot matrix printers that I use print DOS 
       TEXT files differently.  One of them ignores TABs and the other
       sends four TABs for ever two TABs.  This program replaces all
       TABs with 3 spaces unless the Send TABs Switch "/t" is used. This 
       program can also be used to address envelopes.

FINDF: I wrote this program to solve the problem of not knowing the 
       exact spelling of a file name.  With this program, one only
       needs to know a few letters of the file name.  The program
       will then find all file names that have these letters in them,
       irrespective of the position of these letters in the file
       name.  The only condition is that the letters must be
       contiguous.

FINDA: This program was written to find a file whose name is not known 
       but the file contains some information (a string) which IS
       known.  The program opens files which meet the criteria given
       (as in our example above "ww*.*"), and searches through them
       for the string.  If a match is found, the program beeps and
       prints the file name, directory information, and five lines of
       the text, the middle line of which contains the string wanted.

PSND:  This program was written to help notify a person that a batch 
       file is done. It can make any sound from 50 to 13000 cycles per 
       second. (/l - about 2 seconds).

PMENU: Helps to set up DOS level menus in 80 or 40 character mode.

MODE80: Rsets the screen mode to 80 if Pmenu set it to 40.

PSORT: Was written to sort blocks of data. Like the Pfind data blocks.

	Now that you have a basic understanding of these programs you should 
print out the other documentation manuals, manual.doc & manualnb.doc. 
These manuals will tell about the kinds of switches that can be used
with each program.



	If you have questions, comments, or suggestions please send me a 
letter at this address:
	                          Philip Karras
	                          Circle Software
	                          3305 Hampton Court
	                          Mt. Airy, MD   21771


	NOTE: Pfind can be used to find my address in the LST file on the 
	      Pfind Utilities disk:

	           pfind LST phil (RETURN)

	Good luck.  I sincerely hope that these Utilities help you as
much as they help me in my day-to-day information-finding operations.
```
{% endraw %}

## LICENSE2.DOC

{% raw %}
```

                                LICENSE AGREEMENT


        (C) Copyright 1986, 1987, 1988, 1989, 1990 Circle Software for 
        this software, documentation, and user interface.  Mt. Airy, 
        Maryland, United States of America.  All rights reserved.

        Circle Software grants you without charge, the right to reproduce,
        distribute and use copies of this "shareware" version of our Pfind
        Utilities software product (including the on-disk documentation),
        on the express condition that you do not receive any payment,
        commercial benefit, other consideration for such reproduction or
        distribution, or change this license agreement or copyright
        notice.

        The rights to receive any such financial or other benefit and to
        modify the product or its components, are reserved exclusively by
        Circle Software.

        Support from users enables us to develop additional features and
        future versions of the Pfind Utilities product.  Your payment
        of $30.00 should be sent to:

                                Circle Software
                                3305 Hampton Ct.
                              Mt. Airy, MD  21771

                                (301) 942-0596


        Also, by sending in your payment (with your name, company name (if
        any), mailing address, telephone number, version number, and where
        you heard about the Pfind Utilities product and received your
        copy), your copy of Pfind Utilities will be registered with us,
        thereby enabling you to receive (i) technical support and (ii)
        announcements of possible later releases, and the latest version.
        Please feel free to contribute your ideas for additional
        product features and functionality.

        THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF MERCHANTABILITY,
        FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR OTHERWISE; ALL
        WARRANTIES ARE DISCLAIMED.  BY USING THE Pfind Utilities PRODUCT,
        YOU AGREE THAT NEITHER Circle Software NOR ANY OF OUR EMPLOYEES,
        AFFILIATES, OWNERS, OR OTHER RELATED PARTIES WILL BE LIABLE TO YOU
        OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO USE) THIS
        SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER, EVEN IF WE ARE APPRISED
        OF THE POSSIBLITY OF SUCH DAMAGES OCCURRING.

        This software may not be reverse-engineered or disassembled,
        and includes certain trade secrets and confidential information
        of Circle Software.

        PMENU, PFIND, ABM, and AMS are trademarks of Circle Software.

     NOTE:  There is one difference between SHAREWARE and software you 
            pay for first, it is that with SHAREWARE you may test the 
            software out BEFORE you pay for it.  You are however 
            expected to pay for it if you use it.

                   -------------------------------------------
                    Pfind Utilities Registration Payment Form
                   -------------------------------------------

        To order Pfind Utilities, please fill out the form below. 

                                                      Date: _____________

        Name: _____________________________  Title:   ___________________

        Company: ________________________________________________________

        Address: ________________________________________________________

        _________________________________________________________________

        City: ___________________________________________________________

        State/Country: ________________________ Zip: ____________________

        Phone  Work: (_____) _____ - ______  Home: (_____) _____ - ______


        Method of payment: Please complete the worksheet below. 
        Maryland State residents must add 5% sales tax.  ALL CHECKS AND
        MONEY ORDERS MUST BE DRAWN ON U.S.  ACCOUNTS ONLY.


        +----------+------------------------------+----------+----------+
        |          |                              |   Cost   |   Total  |
        | Quantity |          Description         | per unit |   Cost   |
        |          |                              |          |          |
        +----------+------------------------------+----------+----------+
        |          |  Pfind Utilities Package     |  $30.00  |          |
        +----------+------------------------------+----------+----------+
        |          |  U.S. shipping               |    2.00  |          |
        +----------+------------------------------+----------+----------+
        |  Maryland residents add sales tax              5%  |          |
        |  Do NOT compute tax on shipping charges            |          |
        +----------------------------------------------------+----------+
        |   Additional shipping Cost if Overseas: add  $5.00 |          |
        |----------------------------------------------------+==========+
                                                       TOTAL |          |
                                                             +==========+
        Please indicate diskette format:  [ ] 5.25                       
                                          [ ] 3.5

        *****************************************************************
        Send all items to:     Circle Software
                               3305 Hampton Ct.
                               Mt. Airy, MD  21771
        *****************************************************************


                                 --------------
                                  COMMENT FORM
                                 --------------

        Your comments about this software and documentation are welcome.
        Please take the time to fill out this form or write or call us
        with your comments.

        Name: _____________________________  Title:   __________________

        Company: _______________________________________________________

        Address: _______________________________________________________

        ________________________________________________________________

        City: __________________________________________________________

        State/Country: ________________________ Zip: ___________________

        Phone Work: (_____) _____ - ______  Home: (_____) _____ - ______

        Pfind Utilities Version Number: _____________  Date: ___________


        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        *****************************************************************
        Send this form to:     Circle Software
                               3305 Hampton Ct.
                               Mt. Airy, MD  21771
        *****************************************************************
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

            -----  PFIND Utilities  -----


   Copyright Philip Karras/Circle Software 1986-90

    ATS:     Change read file atributes.

    CDD:     Change drive & path with one command.

    CHKFILE: Runs DOS CHKDSK, views found files &
             deletes or renames them.

    CLRCRT:  Clears the CRT, prevents burn in.

    CLRPRT:  Clears printer, advances paper.

    COUNT:   Counts "words" in a text file.

    CURSOR:  Turns cursor on or off, change size.

    DELE:    Delete files EXCEPT those named.

    DSD:     Delete files and remove sub-dir
             named. (delete sub-directory)

    DSPTXT:  Display a text file, find text.

    DT:      Set, re-set a files Date & Time.

    EOF:     places DOS EOF char (dec 26) at the
             end of a file.

    FE:      Front End Circle Software searches can 
             now be added to any other program.

    FIND_:   Will find lines that have the searched
    FINDL:   for string & print them as they are in
             the file. 

    FINDA:   This is a combination of FINDF & PFIND.
             It will first locate all the files it
             can & then check each of them for the
             string.

    FK:      Fast key changes repatition and delay.

                       - i -

            -----  PFIND Utilities  -----

   Copyright Philip Karras/Circle Software 1986-90

    FINDF:   This program finds files on a disk. It
             finds all files whose names contain
             the string of interest, irrespective of
             their location. It has a BATCH switch
             to help in backing up sub-dirs.

    LOG:     Needs password to continue, keeps a log.

    MODE80:  Changes Screen back to 80x24 mode.

    PCOMP:   Compairs files using partial file 
             names, and/or dates.

    PCOPY:   Copies files using partial file 
             names, and/or dates.

    PFIND:   Will find all the information placed
             on file between the '*' markers.

    PPRINT:  This program is an ASCII line printer
             It prints ASCII files with all TABs
             replaced with 3 spaces each & with a
             header consisting of: file name, date,
             time (of printing), & "Page" #. These
             are switchable off.

    PRTCODE: Sends codes to a printer; it can be
             used to change printer fonts.

    PRTLBL:  Will print address lines on labels. It
             uses the same data file as Pfind. (The
             address lines must be the first three
             or four lines between the * markers.)

    PSND:    Sounds a tone. Can change tone and
             duration.

    PSORT:   Sorts blocks of data.

    RUN_IT: Runs EXE or COM files, Path NOT 
            needed.
                       - ii -

    ------------- ATS - Documentation -----------


   File Attributes program.  This program allows
   one to view the set file attributes and to
   change them.  The four file attributes are:
   Archive, System, Hidden, and Read Only.


   FORM:  ats drive:\path\file-name [switch(es)]


   SWITCHES: 

    /a  - Search ALL paths.
    /all- Set ALL the attributes.
    /a? - Archive attribute is set or cleared when
          ? ==  +  =  Set Archive attribute
                -  =  Clear Archive attribute
    /c  - Clear ALL the attributes.
    /d  - Allow changing attributes of directories.

    /d?YYMMDD - date switch ? = a/b after/before.

    /h? - Hidden attribute is set or cleared on ?.
    /r? - Read Only attribute set or cleared on ?.
    /s? - System attribute is set or cleared on ?.
    /w  - Wait for key-press if 20 lines on screen.



   If none of the attribute switches are set,
   then a listing will be made of the files and
   an indication of which attributes are set will
   be displayed beside each file name.










                       - 1 -

    ------------- CDD - Documentation -----------


   Change Drive and Directory.  This program will
   change both in one operation.

   Also, it will do its best to find the path
   given, even if only a partial path was given.

   It first searches the present path, and moves
   down one path at a time attempting to change
   to the desired path until the ROOT directory
   is reached.  Then it initiates a complete
   search for the unfound path.

   EXAMPLE:   to switch to \WP\MY\DOC  

              from:  \WP\MY\LETTERS\WORK


              type:  CDD doc (RETURN)


   This assumes that a path \WP\MY\LETTERS\DOC
   does not exist.  If it did then the above 
   command would switch to it.


   SWITCH:

   /a - search and make a list of all matching
        paths found.  Allow movement to path
        selected.












                       - 1 -

    ----------- CHKFILE - Documentation ---------


    CHKFILE uses the DOS CHKDSK program and 
    DSPTXT.  Make sure that these programs can be 
    run from where CHKFILE is being run - have a 
    path to them or have them in the CHKFILE path.


    FORM: chkfile [drive] [switches]

    SWITCHES: 
    
    /c##.# - colors for CHKFILE (and DSPTXT if
             used) ##.#: fore.back-ground color
             numbers (0-15.0-7).

    /e[ed] - ed: name of display/editor to be
             used in place of DSPTXT.

    /p[sw] - sw: passed commands to ed if used.

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


                       - 1 -

    ----------- CLRCRT - Documentation ----------
    ----------- CLRPRT - Documentation ----------
    ------------ COUNT - Documentation ----------

    ----------- CLRCRT - Documentation ----------

    This program will clear the CRT (computer dis-
    play screen) so than no burn in will occur.


    ----------- CLRPRT - Documentation ----------

    This program will clear the printer by
    advancing the paper the number of lines
    entered or by one form feed.

SWITCHES:

    /ncr  - no copyright notice printed

    /cls# - Clear the screen, # = background
            color.

    /c# - NO Clear screen, # = background color.

    /yn   - Yes/No question switch "Advance paper
            (Y/N)?"

    /nsnd - No Sound (BEEP) switch.


    ------------ COUNT - Documentation ----------

    This program will count the number of words
    in a text file.


    FORM:  count drive:\path\file-name


    NOTE: this program really counts the number of 
          CR-LF's (carriage return-line feeds),
          and spaces.


                       - 1 -

       ------ DELE  Documentation  -----

    The program function is to DELete all files
    Except the file(s) named.

    Form: dele drive:path\filename(or part) switches

    Example:  dele c:\temp\*.txt   /q /db870717

       In the above example files that do NOT
    have the extension "txt" and have dates AFTER
    July 17, 1987 will be deleted.

    Switches: /a  - Search ALL paths for files.

              /d? - date switch, form: /d?YYMMDD 
                    ? = a or b (DELETE EXCEPT)
                    a = (this date & above)
                    b = (this date & below)

           IF /d & /n - then: DELETE
                    a = (this date & above)
                    b = (this date & below)

              /n  - delete in the NORMAL fashion. 
                    Delete those files that DO
                    have the filename given & or
                    the date given as indicated.

              /q  - ask question for each delete.

              /s  - SKIP the "ARE YOU SURE" 
                    question.











                       - 1 -

    -------------  DSD   Documentation  ----------

    Delete Sub-Directory.  This program NEEDS 
    access to DELE (Delete Except) above.  It uses
    DELE to delete the named (or all) files in the
    sub-directory named.

    FORM: dsd [drive:\]path[\file] [switches]

    [] = optional

    EXAMPLES:  1. dsd \tmp
               2. dsd d:\tmp\*.mss /q
               3. dsd d:\tmp\*.mss /q /db890525

    1.  Will delete all files in all
        sub-directories below \tmp and \tmp
        itself.  It will then remove add
        sub-directoies starting with \tmp.  (This
        will remove \tmp from the disk.)

    2.  Will delete all files on the D-drive
        ending with the extension .mss in all
        sub-dirs below \tmp and in \tmp.  It will
        question each file to be deleted.

    3.  Will delete all files on the D-drive
        ending with the extension .mss and were
        created BEFORE 5/25/89 in all sub-dirs
        below \tmp and in \tmp.  It will question
        each file to be deleted.

    SWITCHES:

      /q - ask "are you sure" before deleting any
           and all files to be deleted.

      /d?YYMMDD - date switch ? = a/b above/below
                  the date specified.






                       - 1 -

    ------------ DSPTXT - Documentation ----------


    DSPTXT  will display a text file on the screen 
            and allow movement within that file by 
            using the Home/End, PgUp/PgDn, and 
            up/down arrow keys.

            Home: moves to the beginning of the 
                  text file.

            End:  Moves to the end of the text 
                  file.

            PgUp: Moves up one screen of text.

            PgDn: Moves down one screen of text.

            up-arrow: moves up one line.

            down-arrow: moves down one line.

            F-key: Starts the "Find" search mode.
                   Enter the text to search for 
                   and press: RETURN.


    SWITCHES: 

      /a#     - # above lines protected.
      /b      - First protected line banner.
                (hi-light it)
      /c##.## - ##.## = fore.background colors.
      /l###   - Left columns protected.
      /nlr    - No left/right movement allowed.

      /r## - First column after /l### to start
             viewing, (does NOT need to be /###+1).







                       - 1 -

       ------------- DT - Documentation ----------


   Date Time Stamp Changing program.  This
   program allows one to correct an incorrect
   data and time stamp on any file.

   SWITCHES: 
       /a  - Search ALL paths.

       /w - Wait for key-press after 20 lines on
            screen.


   FORM:  

 dt drv:\pth\fl-name [MM/DD/YY] [HH:MM:SS] [switch]

   [switch] == any switches are place here, no 
               "[]" around them.

   NOTE: File-name: the file-name follows the
         same form as with all the other Pfind
         Utilities.  That is, all files will be
         found that have the contiguous letters
         specified as "file-name".  For example,
         specifying ADE as the file-name will
         cause files such as: ADEme.exe,
         coolADE.doc, and help.ADE to all be
         found.  One can use the characters * and
         ? as with normal DOS type commands.

   HH: The hours must be given in 24-hour clock
       mode.  Thus, 6 PM would need to be entered
       as: 18.










                       - 1 -

       ------------ EOF - Documentation ----------


       This program places the DOS EOF character
     (dec.  26) at the end of a file.  The
     complete drive, path & file name MUST be
     given!

     Example:
                 eof \utils\bak\filename.bas

     This will place the EOF character at the end
     of the file: "FILENAME.BAS" located in the
     sub-sub-dir "\UTILS\BAK" located off of the
     ROOT-dir.

                 eof bak\filename.bas

     This will place the EOF character at the end
     of the file: "FILENAME.BAS" located in the
     sub-dir "BAK" located off of the present
     sub-dir.  (which in this case could be
     "\utils".)






















                       - 1 -

       ------------ FE  - Documentation ----------


   FE - Front End.  Use this to add Circle
        Software file finding methods to any
        other program.

   Switches: 

    /a - ALL PATHS SEARCHED!

    /d - Date switch, form: /d?YYMMDD for 
         July 14, 1987 and above it would 
         be: /da870714
         ? == a (above) - b (below) indicator. 
         If two dates are given (above = & below
         =) then only files with dates between &
         = to these dates will be found.

    /e - Extension name search/match only.

    /p - Program to pass this stuff to switch.

    /q - Question each operation to be performed.

    /s - Switch to path if match found there.

         FORM: /p prgm-name [[any switches]]

               EVERYTHING after /p is passed to
               the program to be run by FE.

     Example:

        fe txt /a /da890901 /db890930 /p[dsptxt


   The above example would search prom the present 
   path to all sub-paths for any file with "TXT" 
   in the file name that also has a date between 
   and equal to 9/1/89 to 9/30/89 and pass the 
   found file name to the "DSPTXT" program to be 
   displayed.


                       - 1 -

        -----  FIND_ & FINDL Documentation  -----
     
     
      FIND_: This program is functionally like the 
             DOS FIND program, it finds a line that 
             has the searched for string in it. It 
             then prints this line to the CRT. 
             
      The differences are:
     
      1. This find doesn't change the case of the
         found line when it prints it to the screen.
     
      2. The case independent mode is the default.
     
      3. There is a beep to indicate a find.
     
      4. The order of DOS line inputs is switched
     
      5. No quote marks are needed around the search
         string.
     
      The first input is the file name & the second
      is the string to match up. The third + 
      positions are for the optional switches:
     
      /c - Count lines that have a match - NO print.

      /i - Case  NOT Ignored  switch.

      /k - Sequential KEYWORD search.

      /n - Number of line precedes printed line.

      /o - Beep Off.

      /r - Send RETURN after line printed.

      /v - Prints lines that do NOT match string.

      /w - Wait after every 20 lines printed to CRT.

      /z - Send DOS EoF to screen.


                       - 1 -

        -----  FIND_ & FINDL Documentation  -----

     

            Some examples of use are:

          1.    find_  file.ext  string  /i  /n  /v
          2.    find_  file.ext  string  /c
          3.    find_  file.ext  string

       The first example uses the case NOT ignore
     switch (/i), the line number switch (/n), & the
     non-match switch (/v). Thus only lines that
     have no match with the string are printed &
     they are printed with the line number.

       The second example has the count switch (/c)
     on. Thus it will only count the number of lines
     that have a match with the given string & only
     print "Number of lines matched: ##".

       The last example will match the given string
     in case ignore (default) mode & print the lines
     that match to the screen.

     /k - Keyword search allows more than one
          space between or even other words 
          between the words of interest. These 
          words MUST be in the correct sequence.

     /r - This switch is needed if the word 
          processor file has lines greater than 80 
          characters long.

     /z - This switch will send the DOS End of 
          File marker (character 26) at the end of 
          the program. Some word processors need 
          this marker to know when the end of the 
          file has been reached.



  


                       - 2 -

        -----  FIND_ & FINDL Documentation  -----





     Find_ also sets the BATCH file ERRORLEVEL as
     follows:

         0-250 = The number of files found that
                 match the given criteria.

           251 = 251 or more items found.
           254 = No text given to search for.
           255 = No file name given to search for.




   FINDL:  The only difference is that findL is 
           also able to run interactively by 
           starting the program from the DOS
           command line with no inputs or just a 
           file name.

   EXAMPLE:   findl  (no file name or text given)

              findl thisfile.txt (no text given)

















                       - 3 -

            -----  FINDA  Documentation  -----

     FINDA is a combination of FINDF & PFIND. It 
     first locates a file whose name matches the
     given search name & then searches the files
     for the sting of interest. If a match is found
     five (5) lines are printed.

     There are a number of switches, they are:

       /a - search for ALL matches in a file
            (not just one)
       /b - Beep off, a beep normally sounds when
            a match is found.
       /d - Date search (/dYYMMDD), 6 digit date.
       /e - Extensions (on the file name) checked
            ONLY.
       /f - List out files\paths searched.
       /h - hi-light line with match.
       /i - case NOT Ignore - string search is
            case dependent.
       /k - Sequential KEYWORD search.
       /l - Relative Line number of matched line
            printed (###).
       /m - Print more lines - 17 lines.
       /n - No string compare, print first lines.
       /o - Bytes, date time information Off - not
            printed.
       /s - Print delimeter Spacer "*" between blocks.
       /t - List ALL files & their set ATTRIBUTES.
       /w - Wait for key-press if 20 lines on screen.
       /z - Send DOS EoF to screen.
       /1 - Search only ONE path.

     Example: 
        finda d:MSS The Congress Passed /e /a /b /l

     In the above example, all files on drive D:
     of the form *.MSS (extensions only /e) will be
     searched for All (/a) occurrences of "The
     Congress Passed" & when found the Beep will
     NOT sound (/b). Also, the relative line number
     of the matched line will be printed above the
     5 printed lines (/l).

                       - 1 -

            -----  FINDA  Documentation  -----



     A path can also be used with the file name.

     Finda also sets the BATCH file ERRORLEVEL as
     follows:

         0-250 = The number of files found that
                 match the given criteria.

           251 = 251 or more items found.
           254 = No text given to search for.
           255 = No file name given to search for.






























                       - 2 -

            -----  FINDF  Documentation  -----

      This Find Files program will find files on a
    disk which match the string given. 

      The difference between this program and many
    others is that one need not enter any globals
    or wild cards to find EVERYTHING that matches!

    Example: findf d:\path\FI

       The above example will find all files on
       drive D:\path\ that have FI in the name:

       from:   FI??????.???
          
       to:     ????????.?FI          

       There are also a number of switches:

       /a - puts paths in front of ALL found files
       /b - copy BATCH file creation switch.
       /d? - Check DATE >= in form: /d870714  == 
             July 14, 1987.
             ? = a (date >= ), or b (date <= ).
       /e - check EXTENSIONS only
       /f - List FREE bytes only.
       /k - KILL/erase batch file creation switch.
       /m - More lines on screen switch EGA 43
            /mv  VGA 50   and  /m## any number. 
       /o - turns bytes/date/time stamp OFF,
            they are not printed.
       /p - PATHs only listed
       /s - Show sub-directories too.
       /t - List ALL files & attribute settings.
       /w - WAIT! after 20 lines printed to screen 
            for key-press.
       /y - YES auto KILL/erase files. (KILL-batch)
       /z - Send DOS EoF to screen.
       /1 - Search ONLY sub-dir named!
       /5 - add space after every FIVE files found.

       To use the /b switch type:         
                      findf d:fat /b >tmp.bat

                       - 1 -

            -----  FINDF  Documentation  -----

     The batch file will have the following in it:

     md %3\SUB1
     %1 %2\SUB1\FATSO.FLE%4 %3\SUB1 %5
     md %3\SUB1\SUB2
     %1 %2\SUB1\SUB2\XYZFATGH.EXT%4 %3\SUB1\SUB2 %5

    Then by typing:  tmp copy a: b: ? /v

    you can copy the file from the A: drive to the
    B: drive in the correct sub-directory with the
    verify switch on (/v).

       If the sub-directory can not be created the
    file will not be copied. (Unless the sub-dir
    already exists on the target drive.)

    NOTE: It should be noted that, if one uses the
          /p & /b switches together, one can use
          the created BATCH file to copy EVERY-
          THING from all directories from one disk 
          to another.

    Example: findf *.* /p /b >Dupdisk.bat

    /k - this switch will help create a BATCH file
         to help ERASE files & REMOVE sub-dirs.

    /y - YES auto erase of files with file: "Y".

       This program was written with the help of
    the following files distributed with the DeSmet
    C compiler, by C Ware Corp:

                    FFIND.C
                    SYSTINT.O

     The DeSmet C compiler is distributed by:

     C Ware Corp            Phone: 408-720-9696
     P.O. Box C
     Sunnyvale, CA. 94087

                       - 2 -

            -----  FINDF  Documentation  -----




     Findf also sets the BATCH file ERRORLEVEL as
     follows:

         0-250 = The number of files found that
                 match the given criteria.

           251 = 251 or more items found.

           255 = No file name given to search for.































                       - 3 -

       -------  FK - Documentation  -------


    FK - Fast Key allows the changing of the delay
         and the repatition rate when a key is held
         down.

         The repatition rates are: 5/10/15/20/25/
         and 30 per second.

         The delays are: 1, 2, 3, and 4 quarters of
         a second. (from 1 quarter to 1 second.)

    EXAMPLE:   FK 25 2

               This will set the repatition rate to 
               25 per second, and the delay to one 
               half of a second. (Same delay as 
               DOS.)


























                       - 1 -

       -------  LOG  Documentation  -------

    LOG requests a password (the first time 
    throught it saves the new password, then it 
    compares all entered password to this one.)


    FORM: log [drive:\path] [switches]
  

    SWITCHES:

    /c#.# - color switch fore.back-ground colors
            (will use AMSCRT.DAT if it is found. 
            This is the Advanced Menu System
            screen file)
    
    /npw - No PassWord required, just keeps a log
    
    /fwr - Fail with return (used in BATCH files,
           will fail on the first false password
           entry & return an ERRORLEVEL of 254 to
           the BATCH file to act on.)






















                       - 1 -

       -----  MODE80  Documentation  -----



     Mode80: will simply change a 40x24 screen
             display back to the normal color mode
             of 80 characters x 25 lines.

     This program was written because Pmenu has a 
     "/4s" switch that switches to the 40 character 
     wide screen mode & saves it.

    If you use the /4s switch of Pmenu then one of 
    the options in your mainmenu should be 
    something like: X - Exit

     Where X.BAT would simply be: mode80

     In this way when you are done using the 40x25
     mode the X option will use Mode80 to switch 
     the screen back to color 80x25 mode.

     To switch back to monochrome 80x25 mode use:
     mode80 /m.





















                       - 1 -

       ----------- PCOMP - Documentation ---------


       This program will comp files.  The
     disk-drive, path, & file name must be given. 
     The "file name" can be a part of a file
     name, and like FINDF any file found with these
     letters will be compaired.

   Switches:
      /a - Search ALL paths for files to comp.
      /b - beep when done.
      /d?- Date switch (/dYYMMDD), 6 digit date.
      /e - Check file name EXTENSION only.
      /f - Force a file search, ignor if path.
      /h - here: Comp from source to here (target) 
           do NOT use paths if /a-all switch used.
      /l - Make a LIST of non-matched files.
      /n - No pause when errors found.

  Examples:   pcomp abs a:\subdir1  /d870714

     This will comp all files (from present path)
     that have "ABS" in the file name and have
     dates of July 14, 1987 or greater with those
     on drive A: sub-directory "SUBDIR1"

              pcomp \utils\pf \help

     Compare all files that have "PF" in the file
     name found in sub-dir "\UTILS" to the sub-dir
     "\HELP", both of these sub-dirs are located
     off of the ROOT-directory!

              pcomp sub1\ttk  sub2

     Compare all files that have "TTK" in the file
     name, found in the sub-dir "SUB1" located off
     of the PRESENT sub-dir, to the sub-dir "SUB2"
     also located off of the present sub-dir.

     PCOMP - uses the DOS function "COMP", any
             problems with comp will also show
             up in PCOMP.
                       - 1 -

       ----------- PCOPY - Documentation ---------

     Copy files with disk-drive, path, & file name
     as givens.  The "file name" can be a part of a
     file name.  Like FINDF any file found with
     these letters will be copied.

  Switches:
      /a - Search ALL paths for files to copy.
      /b - beep when done.
      /d?- Date switch (/dYYMMDD), 6 digit date.
      /e - Check file name EXTENSION only.
      /f - Force a file search, ignor if path.
      /h - here: Copy from source to here (target) 
           do NOT make paths if /a-all switch used.
      /q - pause & Question each copy to be.
      /v - Verify the copy made.
      /z - add DOS EOF (Ctlr-Z) to end of file.

  Example:   pcopy abs a:\subdir1  /da870714 /v

     Copy all files (from the present directory)
     that have "ABS" in the file name and dates of
     July 14, 1987 or AFTER to drive A: sub-dir
     "SUBDIR1".  The file names will be the same,
     and the copies will be verified.

              pcopy \utils\pf \help

     This will copy all files that have "PF" in
     the file name found in sub-dir "\UTILS" to
     the sub-dir "\HELP", both of these sub-dirs
     are located off of the ROOT-directory!

              pcopy sub1\ttk  sub2

     This will copy all files that have "TTK" in
     the file name, found in the sub-dir "SUB1"
     located off of the PRESENT sub-dir, to the
     sub-dir "SUB2" also located off of the
     present sub-dir.

     PCOPY - uses the DOS function "COPY", any
             problems with copy will also show
             up in PCOPY.
                       - 1 -

       ----- PFIND  Documentation  -----


     PFIND.EXE - Finds "blocks" of data which
                 are located between "*" markers.
     
     TO USE:     Type: pfind file.ext string 
     
     Example:    pfind lst phil (RETURN) 

         This example will find all entries with 
     phil in them, in the address/phone ASCII file
     LST.  The information will be printed to the
     screen. No switches in this example.
     
     
SWITCHES:  
     /a - Print Address lines ONLY
     /b - Each line MUST Begin with the 1st keyword
     /d - Delimiter
     /e - (End) display found section but do NOT
          list entire block
     /h - hi-light line with match.
     /i - case NOT Ignore
     /k - Sequential Keyword search.
     /n - Print the line number of the line wanted
          before data.
     /o - beep off
     /w - Wait after every 20 lines
     /z - Send DOS EoF to screen.
     /1 - Print only ONE block of data.

     Some Examples:    pfind file.ext string /i   
                       pfind file.ext string /d 
                       pfind file.ext string /d /i
                       pfind file.ext string /d >n  

      The last example will put the data found into
      the file "n" so that it could be used with the 
      prtlbl program.
     
     NOTE: Case is NOT matched unless the case
           switch is turned on (/i)! The items will
           print out as they are in the file.

                       - 1 -
     
       -----  PFIND  Documentation  -----


      A Delimiter will be placed between sections
      if the delimiter switch is turned on (/d).
      Delimiter = '*'
     
     DATA FILE:  The data file form should be:
     
                 *
                 first line (Address line)
                 next line  (Address line)
                 next line  (Address line)
                 next line  (Address line max=4)
                 H:  home phone (don't need)
                 W:  work phone (don't need) 
                 C: comments, as many as needed
                 * 
                 first line
                 next line 
                 next line 
                 next line 
                 H:  home phone (don't need)
                 W:  work phone (don't need) 
                 C: comments, as many as needed
                 * 
                 first line
                 next line 
                 next line 
                 next line 
                 H:  home phone (don't need)
                 W:  work phone (don't need) 
                 C: comments, as many as needed
                 * 
     
                 Up to 9 lines above the found line
                 are allowed.
      
        
      NOTE: A ":" as the second character in a line
            indicates a non-address line.




                       - 2 -

       -----  PFIND  Documentation  -----



      For as many entries as needed - no special
      order is needed. If you wish to find only
      those addresses from a given state then try
      to always enter the state with a "." at the
      end.
     
      example: MD. or md. or Md. all will match up.
     
     NOTE: A '*' should be the last character & line 
           of the file to avoid hang-ups on a match
           on the last line/section.
     
           A '*' should also be the very first 
           character & line for the same reason.
     
     BATCH FILE: The batch file "FND.BAT" has been
                 given as a help example. To use it
     
                 type: FND phil & it will use 
     
                 the correct form in finding "phil"
                 in the LST data file.
     
      Another batch file is FNDS.BAT. This batch 
      file will show the correct form for piping 
      data to another file with the "*" between each 
      find. This will allow the new file to be used
      with the prtlbl, Print address Labels program.

      /w - the "wait" switch will cause the program
         to print 20 lines & then print "to continue
         press any key".  The program then waits for
         a key to be pressed to continue its search.

      Esc - /w: When the /w switch is used & the 
        "To continue, press a key" statement is on 
        the screen then the Esc key can be pressed 
        to stop the program. In this case the rest 
        of the present data-block will be printed to 
        the screen.

                       - 3 -

       -----  PFIND  Documentation  -----




     Pfind also sets the BATCH file ERRORLEVEL as
     follows:

         0-250 = The number of files found that
                 match the given criteria.

           251 = 251 or more items found.
           254 = No text given to search for.
           255 = No file name given to search for.































                       - 4 -

       -----  PMENU  Documentation  -----


     Pmenu was designed to be a comprehensive DOS
     level menu system.  It requires only one
     other file to operate, a BATCH file.


     There are a number of switches, they are:

     /4s - Screen set to 40 character mode, s =
           save this mode, option.

     /b - Beep switch to turn beep on.  Beep
          after menu printed.

     /c#,# - Print with colors: #-forgeround,
             #-background

     /e - Errorlevel display.  Shows EL of key
          pressed.

     /fAB - Find Char 'A' then start printing
            text, end at 'B'

     /klLaA- Keys, in pairs, for EL's.  EL 0 = l
             or L, EL 1 = a or A.

     /n - Never mind, Do Not wait for key input.

     /o - Turn off the Copyright notice 2 second
          delay.

     /p#,# - Position cursor at: #-line,
             #-column. Turns cursor ON.

     /s - Print an extra line feed between each
          line printed.

     /w    - Working, Please wait... displayed.


     For examples & more information see the Note 
     Book manual documentation, "MANUALNB.DOC".

                       - 1 -

       -----  PMENU  Documentation  -----




     NOTE: the /f - find switch does not need to
           be used.  However, if it is not used,
           the pmenu does NOT clear the screen
           (it leaves what was placed on the 
           screen there) and simply awaits a key
           press and passes the errorlevel to the
           controlling BATCH file.

































                       - 2 -

            -----  PPRINT Documentation  -----

     This program prints ASCII text files. It will
     print a header that contains the following:

     file_name      date     time           page #

     The program switches are:

          /af- Print a regular address, F-FormFeed
               option.
          /b - Begin printing other than page 1.
          /c#- # of lines to print per page.
        /chp - Chop long lines to /m# length.
        /cnt - COUNT the pages and #lines on last 
               page, NO printing!
      /cpy## - Print ## copies of this file.
          /h - High order ASCII bit turned off.
          /l - Replace all Low codes with SPACE.
     /lr,#,# - print to #, skip to # - 20 pairs.
         /m# - More chars per line - 128. # - 
               option, designate number of chars.
          /n - Numbering of each Line on.
         /nss- No Starting Spaces
         /nff- No Last Form-Feed sent to printer.
          /o - Turns the header printing Off. No
               header will be printed.
          /p - Bottom Page numbering on.
     /prt#.# - Text print code, Header print code.
          /r - Print a return address.
        /scn - Title lines to screen, positioning.
          /t - Prints tabs as is, no space replace.
      /tls## - ## lines = titls print on each page.
          /w - Wait after each page printed.

     To use the program type:

                pprint file_name.ext
                pprint file_name.ext /o /p

     The switches can be in any order.  In the
     above examples the first call will print the
     file "file_name.ext" with a header.


                       - 1 -

            -----  PPRINT Documentation  -----

     The second call will print the file with NO
     header & with page numbering at the bottom.

                pprint file_name.ext /t

     The above call will print the file with a
     header but with all TAB's sent to the
     printer as TAB's.

       To print the return address & then the 
     regular address on an envelope do the 
     following:

              pprint file.name1 /r
              pprint file.name2 /a

       Where file.name1 is the name of the file 
     that is composed of ONLY the RETURN address 
     to be printed on an envelope. 
     
       File.name2 is then the file containing
     ONLY the address to send the letter to.

       A batch file could be created to print
     both address. One way to do it would be to 
     but the following into a batch file called 
     "envelope.bat":
                        pprint my.id /r
                        pprint %1 /a

       This would always use the "my.id" file for 
     the return address & would allow an input for 
     the regular address. 

     By typing:   envelope your.add 

     The batch file would print the address
     contained in the "your.add" file as the
     regular address.




                       - 2 -

         -----  PRTCODE  Documentation  -----

     
     
     PRTCODE:    This program simply sends printer
                 control codes to a printer.To use
                 it simply type:
     
                            prtcode c1 c2 c3 ... c9
     
      As many codes can be sent as needed - up to 
      the DOS command line limit.
     
                 Example: prtcode 27 63 55
     
      This example sends the condensed code to an 
      NEC Pinwriter P3-3 printer.

     SETP.BAT:   A batch file called: SETP.bat is
                 also included to show how one could
              set up a very easy system for changing
              printer codes. To use it on a NEC 
              Pinwriter P3-3 type:
                                   setp #
     
          where # is a number from 0 to 7 which 
          corresponds to the Pinwriters font
          numbers.

















                       - 1 -
     
          -----  PRTLBL  Documentation  -----

     

     PRTLBL:    To use the print label program type:
     
            prtlbl filename.ext [codes] [switches]

      In place of "filename.ext" use the file name
      that you want to print. In place of the 
      "codes" you can put printer codes. These 
      might be used to change the printer fonts.

      In place of "switches" you can set the
      following:
                                           Default
      /b## - Beginning Label number.           1
      /c## - # of Characters per line.        30
      /e## - Ending Label number.            Last
      /l#  - # of lines between labels.        6
      /r## - renewal date switch, ##=months.   2
 
      Codes & switch settings are optional & need
      NOT be used.
     
           Example: prtlbl lst 29
     
      This example will print out the entire "lst"
      file on labels on an OKIDATA 82a printer in
      its small print mode.
     
      Example: prtlbl lst 29 /b25 /e35 /l7 /c25
     
      This example does the same thing, except it 

      Begins printing with label  25 .

      It ends printing after label 35.

      There are 7 lines between the top of one 
      label to the top of the next.
      
      And last, it only prints 25 characters per 
      line.

                       - 1 -

          -----  PRTLBL  Documentation  -----

     

     There are two things that will stop the
     printing, they are:


        1. the end of the file, the last character
           should be a '*' as in:
                        *
                        line
                        line
                        line
                        *


        2. the word "end" as the next word after
           an '*', as in:
                        *
                        end
                        *


         If you put this end at the end of your 
         label list, then the program will print:



         end

         ## labels printed



         on the last label printed & space it up 
         for the next label.








                       - 2 -

            -----  PSND   Documentation  -----



       Psnd will sound a tone.  This could be
     helpful when writing BATCH files.  By
     putting psnd at the end of a batch file it
     will sound a tone to indicate that it is
     done.


     Switches:  /l# - will sound the tone longer.
                      for #-seconds, if no #
                      given then 2 seconds will
                      be used.  
                      
                /o - turns off the printing to
                     the screen of the psnd
                     information.

               
               
               
               
               

     Use:  psnd 500 /l


       In the above example a tone of 500 Hz will 
     sound for about 2 seconds.


       Tones may be from 50 to 13000 Hz.


    NOTE: Max time allowed is 32676.9 seconds.



    Tone 600 is a good input question type tone and 
    tone 60 is a good ERROR tone on all computers.



                       - 1 -

       ----------- PSORT - Documentation ---------


       Psort was written in order to sort blocks
       of data.  A "block" of data is a set of
       ASCII lines located between two "*"
       markers.  One above the block & one below
       it.  For an example see the Pfind
       documentation page #2.

    NOTE: Pfind, Finda & Psort can create the
          above type of "block" oriented data
          files.  Pfind & Psort will only operate
          on this type of a file.  Finda will
          work on any Mostly ASCII file from most
          any word processor.

    To Use: psort filename (switches) ( >newfile )

    Switches:
              /c## - ## is the character to start
                     sorting at (1-80).  

              /d - Delimiter "*" sent between blocks of data. 

              /l# - # of line to sort against (1-9). 

              /o - Beep On.  Beeps sound when
              file opened, lines sorted &
              last when blocks are sorted. 
              (default is OFF).  

              /r - Reverse Sort.  (z --> A).  

              /s## - Sort the
              Selected Section of 600 data
              blocks.  

              /z - Send DOS End Of File
              marker at end of data blocks. 


              


                       - 1 -

       ----------- PSORT - Documentation ---------


     Limits: 

     1.  Only 600 blocks of data can be sorted at
         a time.

     2.  Only one of the first nine (9) lines in
         a data block can be used to for the
         sorting.

     3.  If a data block has fewer lines than
         called to sort on then the last line of
         the block is used.

     4.  If two lines to sort are identical, only
         the first block containing that line
         will ever be found.  Add a space to one
         of the lines.

























                       - 2 -

       ---------- RUN_IT - Documentation ---------

    This program tries to run the given program. 
    It searches ALL directories of the present
    disk drive.  If the program is found, run_it
    will switch directories & run the program. 
    When the running program terminates, run_it
    will switch back to the indicated, or
    present, sub-dir and exit.  If NO program is
    found, run_it exits with ERRORLEVEL = 1,
    otherwise it exits with ERRORLEVEL = 0.

    Form: run_it filename.ext [path] [p/switch]
                                     [/switch]

    Filename: MUST have an extension! Extension
              MUST be either EXE or COM.

    path: MUST start with "\".  This is the path
           to RETURN to.

    p/switch - are switches that are to be passed
               to the program to run.
 
    /switch are run_it switches.

    SWITCHES:  
    
           /c##,## - color, foreground,
                     background.  Decimal #'s.

           /p - Print, to printer, the path where
                the program was found.












                       - 1 -
```
{% endraw %}

## UPDATE2.DOC

{% raw %}
```
    PFIND  UTILITIES  copyright Circle Software 1986, 1987, 1988, 1989

AS  OF  RELEASE 3.40

     -------------------  Changes / Additions  -------------------

New programs:

	DSD - This program uses DELE and deletes all files and removes all
	      empty sub-directories from the named sub-directory down. 
	      (File name or part, date and question switches can be used.)

	LOG:  This program keeps a log file (called: "LOG") of every time it 
	      is run.  It will normally request a password from the user and 
	      if it is not correct it will lock up the computer so that it 
	      must be re-booted.  It can also be used in BATCH files (like 
	      AUTOEXEC.BAT) and along with the Advanced Menu System (also by 
	      Circle Software) to allow only qualified persons access to 
	      various sections of the hard disk.

	CHKFILE:  This program (in conjunction with DSPTXT also on your 
	          Pfind Utilities disk) and the DOS program: CHKDSK will
	          allow you to check your disk for unlinked files/clusters
	          view the files found & created by CHKDSK (these files are
	          named: FILE0000.CHK - FILE9999.CHK), delete them and/or
	          rename them for later use.

additions:

	FINDA/PFIND - both of these program now have a /h - hi-light 
	              switch.  When used, the line that has a match with
	              the given word(s) is hi-lighted in inverse video
	              (blabk letters on white.)

	PSND: /l#.# - The long switch can now time a tone (or sequecne 
	              of tones) to a 10TH of a second.  More than one tone
	              may be listed on the psnd command line.  Tones are 
	              no longer set by a tone number but are the actual
	              frequency in Hz. Tones may be from 50 to 13000 Hz.

          EXAMPLE: psnd 700 /l1.5 would play a tone of 700 Hz for about
                   1.5 seconds.  Fractions of seconds are approximately
                   1/10 second.  (max time allowed: 32767.9 sec or
                   about 9 hrs.)  (NOTE: the computer is locked-up while
                   a tone is playing!)


	FINDF: /1 - new switch to force a search of only the driv and 
	            sub-directory named.

	       /t - new switch to find ALL files even SYSTEM or HIDDEN
	            files and list out their set ATTRIBUTES.

	       /f - Find the FREE bytes on a disk only.


	PCOMP: /l - List to disk all non-matches found. (This list can then 
	            be viewed later from file: "NOMATCH")

	       /n - No pause when non-match found. (Good to use in 
	            conjunction with /l above.)


Changes: 

	FINDF - no longer searches from the ROOT directory down unless told
	        to do so.  Now it searches from the present directory down
	        if no directory was given. (This is now true of all the
	        seaching programs: FINDF, FINDA...)


AS  OF  RELEASE 3.50

     ----------------------  NEW  Additions  ---------------------

*** NEW PROGRAM(S) ***

FE - Front End.  Use this to add Circle Software file finding methods 
     to any other program.

   Switches:  /q  - Question each operation to be performed. 
              /a  - ALL PATHS SEARCHED!
              /d  - Date switch, form: /d?YYMMDD  for July 14, 1987 and
                    above it would be: /da870714
                    ? == a (above) - b (below) indicator. 
                    If two dates are given (above = & below =) then only files
                    with dates between & = to these dates will be found.
              /e  - Extension name search/match only.
              /p  - Program to pass this stuff to switch.
                    FORM: /p prgm-name [[any switches]]  EVERYTHING after /p
                    is passed to the program to be run be FE.

   FORM:  fe name [fe-switches] /p[prgm] [prgm switches or commands]
     or
          fe name [fe-switches] /p prgm  [prgm switches or commands]

   EXAMPLE: print all the DOC files with one command:

            fe doc /p[pprint]

     -------------------  Changes / Additions  -------------------



CHANGE: All date matching routines in all the finding programs now match
        between dates, dates are inclusive.

                           ATS      
                           DELE     
                           DT       
                           FE       
                           FINDA    
                           FINDF    
                           PCOMP    
                           PCOPY    

CHANGE: All programs that use to sound a tone to get your attention have
        been changed to use the same tone independent of the computer they
        are run on.  Tones have been standardized as well for "finding" or
        errors.  A find generates Tone(500,1). An error beep is Tone(150,5)
        and closing a file is a "click".   These programs are:

                             file     date   version
                            COUNT.C   9/15    1.02
                           DSPTXT.C   9/15    2.33
                            FIND_.C   9/15    5.01
                            FINDA.C   9/12    5.20
                            FINDL.C   9/15    1.11
                              LOG.C   9/16    1.11
                            PFIND.C   9/15    9.02
                            PMENU.C   9/18    
                           PRTLBL.C   9/15    4.12
                            PSORT.C   9/15    1.41
                           RUN_IT.C   9/15    1.21



   Also added /a (search ALL paths) or /1 (search only this path) switches
   to the following:

                           ATS      C * /a ALL paths (or /p)
                           DELE     C * /a ALL paths
                           DT       C * /a ALL paths
                           FE       C * /a ALL paths
                           FINDA    C * /1 this path only switch
                           FINDF    C * /1 this path only switch
                           PCOMP    C * /a ALL paths
                           PCOPY    C * /a ALL paths

   /a - The ALL paths switch will continue searching from the present
        path (if no path was specified) or from the specified path to
        all sub- directories of this path.

   /1 - The ONE path switch will cause the present search to end after
        the present path has been searched (if no path was specified)
        or after the specified path was searched.

New Switch:

   PCOPY & PCOMP: /f - Force file switch.  This switch forces the search
                       to look for files and ignor the possibility that the
                  drive:\path\name entered was in fact a valid sub-directory
                  path.  (This was needed because PCOPY and PCOMP now look 
                  first for the source being a valid path.)


*** BUGS FIXED ***

   FINDF:   Fixed bug in version 6.50.  Every now and then findf 6.50
            would NOT find correctly something like:

     findf c:\code\abc     (this would only find abc*.* files!)


   Added  /m (more lines on screen)
          /mv   and
          /m##  switches 
   where: /m = 43 line EGA mode, /mv = 50 line VGA mode and
          /m## is for any future ##-number of lines.

   Added the /5 switch to print a blank line between every 5 files found.

   Added the BETWEEN dates searching ability.  To find all files in 
   September of 1989 use:  

                     findf *.* /da890901 /db890930  

   Dates are inclusive.



   PCOPY:   Fixed bug in version 3.70.  Pcopy no longer would allow
            formatting a disk.  Corrected in version 3.71.



AS  OF  RELEASE 3.60

     ----------------------  NEW  Additions  ---------------------

*** NEW PROGRAM(S) ***

CDD - Change Drive and directory in one operation.

      Also, it will do its best to find the path given, even if only a
      partial path was given.

      It first attempts to change to the desired directory from where 
      you presently are.  If it can not do this, it moves down one path 
      at a time and tries at each path to switch to the desired path.
      If the desired path id NOT found, CDD will reaches the ROOT 
      directory.  Now, CDD will initiate a complete search for the 
      unfound path.

      EXAMPLE:   to switch to \WP\MY\DOC  from \WP\MY\LETTERS\WORK

                 type:  CDD doc (RETURN)

      (This assumes that a sub-directory : \WP\MY\LETTERS\DOC does NOT
       exist.)

      SWITCH: /a - search and make a list of all matching paths found.


FK -  Fast Key. Allows one to change the delay and repatition rate when
      a key is help down. 
                           FORM: fk rep-rate delay

      The rep-rate is one of: 5/10/15/20/25/30  repatations per second.

      The delay is one of: 1/2/3/4  which are quarter second intervals.



*** BUGS FIXED ***

PFIND - the /a - display only the address lines switch was disfunctional.

DELE -  would ignor the last character of a contiguous character set sent 
        to search for.

*** ADDITIONS *** 

ats: Version 1.40

    Will now display any sub-directory that has special attributes set
    and will allow changing these attributes if the /d - directory
    switch is used.


dsptxt: Version 2.40

    New switch /b - banner.  This hi-lights the first line of the displayed
    text file IF the /a# above protect switch is also in use.


fe:  Version 1.10

    New switch: /s - switch to each sub-directory where a match was found.

 
findf: Version 6.60

	Fixed bug in version 5.60.  Every now and then findf 5.60 would
	NOT find correctly something like: 

	  findf c:\code\abc     (this would only find abc*.* files!)

	Added  /m (more lines on screen)
	       /mv   and
	       /m##  switches 
	where: /m = 43 line EGA mode, /mv = 50 line VGA mode and
	       /m## is for any future ##-number of lines.

	Added the /5 switch to print a blank line between every 5 files found.

	Added the BETWEEN dates searching ability.  To find all files in 
	September of 1989 use:  

	                  findf *.* /da890901 /db890930  

	Dates are inclusive.


pcopy: Version 2.80
pcomp: Version 1.80

           /b - beep: Pcopy and pcomp now have a beep switch which will
                      sound when they are done with their jobs, /b.

           /h - here: Copy (compare) from source to here (target) do NOT
                      make paths if /a-all switch used, do not compare to
                      all paths, only to the target given.




	                                          Philip Karras   
	                                          Circle Software
	                                          3305 Hampton Court
	                                          Mt. Airy, MD   21771

	                                          
                                      
	                                               3/31/90 

	                                          Version 900331

	                                           Release 3.60

```
{% endraw %}

## WARRNTY2.DOC

{% raw %}
```
    Pfind Utilities Copyright (c) 1986-1990 Philip Karras/Circle Software

Disclaimer: The seller, distributor & the author of the software on this 
            disk disclaim any & all guaranties & warranties on the 
            software & its documentation, either express or implied. No 
            liability of any kind shall be assumed by the seller,
            distributor, or author. The seller, distributor, & author do 
            not & will not assume liability for direct, consequential, 
            or other damages. Users of this software do so at their own 
            risk.

	This software is sold on an "as is" basis with no fitness for any 
purpose whatsoever nor warranty of merchantability implied or claimed.

	We reserve the right to make changes & or additions to this software 
at any time without notice. No warranty is made that future versions 
will be compatible with past versions.


    Registration:  You will receive the latest version of the software
                   along with more extensive documentation.

                   You will also be kept informed of all updates.

                   Use the License.DOC file to register your copy.



                                           Philip Karras
                                          Circle Software
                                              3/13/90
```
{% endraw %}

## LICENS4.DOC

{% raw %}
```

                                LICENSE AGREEMENT


        (C) Copyright 1986, 1987, 1988 Circle Software for this software,
        documentation, and user interface.  Kensington Maryland United
        States of America.  All rights reserved.

        Circle Software grants you without charge the right to reproduce,
        distribute and use copies of this "shareware" version of our PURSUIT
        software product (including the on disk documentation), on the
        express condition that you do not receive any payment, commercial
        benefit, other consideration for such reproduction or
        distribution, or change this license agreement or copyright
        notice.

        The rights to receive any such financial or other benefit, and to
        modify the product or its components, are reserved exclusively by
        Circle Software.

        Support from users enables us to develop additional features and
        future versions of the PURSUIT product. Your payment of $15.00
        would be greatly appreciated; your payment should be sent to:

                                Circle Software
                                3305 Hampton Court
                                Mt. Airy, Md.   21771



        Also, by sending in your payment, together with your name,
        company name (if any), mailing address, telephone number, version
        number, and where you heard about the PURSUIT product and got
        your copy, your copy of PURSUIT will be registered with us,
        thereby enabling you to receive (i) technical support and (ii)
        announcements of possible later releases, the latest version and
        a printed manual. Also, please feel free to contribute your ideas
        regarding desired additional product features and functionality.

        THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF MERCHANTABILITY,
        FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR OTHERWISE; ALL
        WARRANTIES ARE DISCLAIMED. BY USING THE PURSUIT PRODUCT, YOU
        AGREE THAT NEITHER Circle Software NOR ANY OF OUR EMPLOYEES,
        AFFILIATES, OWNERS, OR OTHER RELATED PARTIES WILL BE LIABLE TO
        YOU OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO USE) THIS
        SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER. EVEN IF WE ARE APPRISED
        OF POSSIBLITY OF SUCH DAMAGES OCCURING.

        This software may not be reversed-engineered or disassembled,
        and includes certain trade secrets and confidential information
        of Circle Software.

        PMENU, PFIND and AMS are trademarks of Circle Software.

                       ------------------------------------
                        PURSUIT Registration Payment Form
                       ------------------------------------

        To order PURSUIT, please fill out the form below. 

                                                      Date: _____________

        Name: _____________________________  Title:   ___________________

        Company: ________________________________________________________

        Address: ________________________________________________________

        _________________________________________________________________

        City: ___________________________________________________________

        State/Country: ________________________ Zip: ____________________

        Phone  Work: (_____) _____ - ______  Home: (_____) _____ - ______


        Method of payment: Please complete the worksheet below and choose
        one of the payment options indicated. Maryland State residents
        must add 5% sales tax.  ALL CHECKS AND MONEY ORDERS MUST BE DRAWN
        ON U.S.  ACCOUNTS ONLY.


        +----------+------------------------------+----------+----------+
        |          |                              |   Cost   |   Total  |
        | Quantity |          Description         | per unit |   Cost   |
        |          |                              |          |          |
        +----------+------------------------------+----------+----------+
        |          |  PURSUIT Software Package    |  $20.00  |          |
        +----------+------------------------------+----------+----------+
        |          |  U.S. shipping               |    2.00  |          |
        +----------+------------------------------+----------+----------+
        |                   Maryland residents add sales tax |          |
        |  Do NOT compute tax on shipping charges            |          |
        +----------------------------------------------------+----------+
        |   Additional shipping Cost if Overseas, add  $5.00 |          |
        |----------------------------------------------------+==========+
                                                       TOTAL |          |
                                                             +==========+
        Please indicate diskette format:  [ ] 5.25                       
                                          [ ] 3.5


                   ---------------------------------------------
                    PURSUIT Registration Payment Form continued
                   ---------------------------------------------

 

         [ ] Check with order  [ ] Money Order  [ ] MasterCard  [ ] VISA

        Credit card #:______________________________ Exp. Date: ____/____

        Signature: ______________________________________________________

        Cardholder's name: ______________________________________________

        Cardholder's address: ___________________________________________
        (If different from above)


        *****************************************************************
        Send all items to:     Circle Software
                               3305 Hampton Court
                               Mt. Airy, Md.   21771
        *****************************************************************


        If you have any questions, please call 301-942-0596. Volume users
        of PURSUIT please inquire about quantity discounts or read the
        "README.DOC" file.


                                 --------------
                                  COMMENT FORM
                                 --------------

        Your comments about this software and documentation are welcome.
        Please take the time to fill out this form or write or call us
        with your comments.

        Name: _____________________________  Title:   __________________

        Company: _______________________________________________________

        Address: _______________________________________________________

        ________________________________________________________________

        City: __________________________________________________________

        State/Country: ________________________ Zip: ___________________

        Phone Work: (_____) _____ - ______  Home: (_____) _____ - ______

        PURSUIT Version Number: _____________  Date: __________________


        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        ________________________________________________________________

        *****************************************************************
        Send this form to:     Circle Software
                               3305 Hampton Court
                               Mt. Airy, Md.   21771
        *****************************************************************



O                      CIRCLE   SOFTWARE   PRODUCTS   ORDER   FORM&



     |         Item              | Quantity |  Reg fee per copy  |   Total   |
     +---------------------------+----------+--------------------+-----------+
     | PURSUIT program           |          |      $20.00        |           |
     +---------------------------+----------+--------------------+-----------+
     | PMENU   program           |          |      $15.00        |           |
     +---------------------------+----------+--------------------+-----------+
     | Advanced Menu System (AMS)|          |      $30.00        |           |
     +---------------------------+----------+--------------------+-----------+
     | Pfind Utilities           |          |      $30.00        |           |
     |  *** Includes  Pmenu ***  |==========|====================|===========|
     +---------------------------+----------+--------------------+-----------+
     | Discount for Pfind + AMS  |          |      -$5.00        |           |
     | Must buy BOTH for discount|==========|====================|===========|
     +---------------------------+----------+--------------------+-----------+
     | SEE  text editor          |          |      $30.00        |           |
     +---------------------------+----------+--------------------+-----------+
     |Md. State sales tax  5%    |          |                    |           |
     +---------------------------+----------+--------------------+-----------+
     | Shipping per disk:        |          |       $2.00        |           |
     +---------------------------+----------+--------------------+-----------+


       ******************* Quantity discounts are avalible. *******************

                     Quantity   Discount    Price-each    Price-each
                        1         none        $30.00        $15.00
                      2 - 9     -16.67%       $25.00        $12.50
                     10 - 49    -33.33%       $20.00        $10.00
                     50 - 99    -50.00%       $15.00        $ 7.50
                    100 - 999   -66.67%       $10.00        $ 5.00

          1000 and more = one time fee of 166.6667 X single price.
                                            $5000.00      $2500.00


    	If you buy the Pfind Utilities you do NOT need to buy Pmenu. Pmenu is 
    	part of the Pfind Utilities.


    	There is a $5.00 discount for combination purchases of the Pfind
    	Utilities and the Advanced Menu System.  (A $5 discount for each pair
    	purchased.)


        Make check out to:      OCircle Software&


    	Send this form and check to: O
                                       Circle Software
                                       3305 Hampton Court
                                       Mt. Airy, Md.   21771 &

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1331

     Volume in drive A has no label
     Directory of A:\

    CRCLSOFT DOC     13735   3-13-90   6:44p
    PF_UTILS ZIP    220349   3-13-90   6:21p
    PURSU    ZIP     21724   3-13-90   6:32p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    LIST              4564   3-13-90   6:46p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   4-12-90   7:11a
    MANUAL   BAT       147   1-19-89   9:21a
    INSTALL  BAT      1304   3-15-90   1:17p
    FILE1331 TXT      4589   4-12-90   8:22p
           10 file(s)     288738 bytes
                           27648 bytes free
