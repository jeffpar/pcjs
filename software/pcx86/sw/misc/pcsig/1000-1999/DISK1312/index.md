---
layout: page
title: "PC-SIG Diskette Library (Disk #1312)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1312/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1312"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CATALOG, SHUFLES, AND SETPRINT"

    Want to print on both sides of the paper?  You could figure out how your
    file will be printed, break it up and feed the parts to your printer one
    at a time (and hope that you didn't make an error) -- or -- you can use
    SHUFFLES, a computerized collator.
    
    SHUFFLES breaks your text file into chunks and rearranges them so your
    dot matrix, daisy wheel or laser printer can print on both sides of the
    paper without getting the page order messed up.
    File Descriptions:
    
    SHUF     DOC  User guide.
    SHUF     CTL  Tracks number of times the program runs.
    SHUFR    EXE  Main program.
    
    SETPRINT is a menu-driven printer-setting utility.  Used before printing
    a file, you can set pitch and weight, set a special printer mode such as
    underlining, or just reset the printer.  Commands can be embedded within
    the file to be printed to further change modes.  In addition, you may
    pause the printing for manual feeding.
    
    Build your disk library catalog simply and easily.
    
    CATALOG is a simple program that reads a disk volume label and
    directory and then formats the directory information into an ASCII
    file. This file can then be imported into your favorite database
    manager. It comes with sample file headers for use with PC-FILE+ to
    help you in designing your database.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CATALOG.DOC

{% raw %}
```




                                 CATALOG.EXE
                                Version  2.00

                       DISKETTE LIBRARY CATALOG CREATOR
                       --------------------------------

          Overview:

              This is a simple utility designed to read a series of
          disk volume label's and directories.  The directory information
          is converted into one of several popular data formats for use
          with the database you are most comfortable with.

          Supported are ASCII files, both fixed length (SDF) and comma
          delimited, Data Interchange Format (DIF) and LOTUS 1-2-3 (WKS)
          spreadsheet files.

          System requirements:

              128k of memory is required. A hard disk drive and 1 floppy
          disk drive is recommended.  The program will also run on a dual
          floppy disk drive system.  A color monitor is not required.

          Starting the Program:

              From the DOS drive prompt, enter CATALOG;

                                  A>CATALOG

               A word of CAUTION; any information read from a new
               diskette will be appended to the current CATALOG
               file.  Be sure the CATALOG file is erased after you
               have imported it into your data base program.  The
               program will attempt to append new information to
               the old file. There is the danger of importing
               duplicate data, or damaging a previously created
               data file.

          Initial Session Setup Information:

              The program needs to know where to WRITE the
          CATALOG data file.  Drives A thru J are supported.
          Entering the colon (:), is not required, but is allowed.
          Attempting to enter any other values into the write drive
          prompt will cause an error tone to sound.

                Only those characters and symbols allowed by MS-DOS
          are permitted in this input line.

          These characters are:
                 A-Z, a-z, 0-9, $ ( ) & ' - @ # { } % ~ ! _

          Only 40 characters are displayed at one time, but up to 63
          characters can be placed on this input line.  When you
          press Enter the program will change directories, making
          your choice to write to, the current directory.  A message
          will be displayed as a reminder.






          CATALOG.EXE   (c) Copyright 1988, GREENLINE Computing Co.
          -----------   -------------------------------------------

              The default drive is C:, and the default directory is the
          root directory.

              Which drive you will be feeding diskettes to be READ
          by the program is entered next.  Only Drive A: or Drive B:
          may be chosen.  Drive A: is the default drive. Again,
          entering the colon (:) is not required, but is allowed.
          Any other entry will cause an error tone to sound.

              Many diskettes do not have an identifying Volume Label
          name. Older versions of DOS do not have a means of adding
          a label name to a diskette without formatting it.  There
          are innumerable public domain, shareware and commercial
          programs that will do the job.  Enter the utility program
          name you would like to use to change or add a disk Volume
          Label name should it become necessary.  The default name
          is CV2, a public domain utility.  Any utility you use must
          meet a specific syntax requirement to work within this
          program environment.  The catalog program will present the
          utility name, the READ file drive letter with path, and
          your new Volume Label name.  i.e.,

                            CV2 C:\DATA NEW_LABEL

              DOS Version 3.xx and above has the ability to change
          the label name with the LABEL commmand,

                            LABEL C:\DATA NEW_LABEL

              There is an opportunity to change any or all of the
          information entered.  If you choose N, not correct, the
          information will be asked over again.  Note that the
          original default settings are again present.  Answer Y,
          and the main program operating screen will be presented.


























                                Page 2


          CATALOG.EXE   (c) Copyright 1988, GREENLINE Computing Co.
          -----------   -------------------------------------------

          Operating the program:

          A comment or title can be given to a disk or set of disks.
          For example, LOTUS 1-2-3 Version 2.01 system contains 5 disks.
          Each disk may have a separate volume label, yet the separate
          disks can now be cataloged together.

          There are five options to select to process a disk;

                A.  ADD to, or CREATE a catalog data file.
                V.  VIEW a directory prior to adding it.
                C.  CHANGE or ADD a Volume Label name to a diskette
                P.  New PATH information.
                Q.  QUIT processing.


          A.    To Add to or create a new CATALOG file, place
             the diskette you wish to read into the drive you have
             designated as the READ drive, then press Enter.  The
             diskette directory will be read, the information
             formatted and added to the CATALOG file if it exists,
             or creates the file if it does not.  Within seconds
             the next diskette to be read may be placed in the READ
             drive, and so on.


          V.    When you need to see a directory prior to adding it
             to the file, choose the VIEW option.  Place the disk
             you wish to view in the designated READ drive.  Press
             V, then Enter.  The diskette directory will then be
             displayed exactly as it normally would be in DOS.
             When the directory is done being displayed, press any
             key to return to the program.  The viewed directory can
             now be added to the file, or a new diskette can be readied
             for processing.


          C.    If you wish to change or add a Volume Label name
             prior to adding a diskette to the data file, Press C.
             You will be prompted for an 11 character Volume Label
             name.  Only valid filename characters will be allowed.
             Attempting to enter invalid characters will cause and
             error tone to sound. Press Esc to abort this operation.


          P.    If the diskette you wish to read into the CATALOG.???
             file contains a sub-directory this option will allow the
             path parameters to be changed without quitting the program,
             then running the program over again.  It simply presents
             the set-up menu over again.


          Q.    When your diskette directory reading session is over
             entering Q will end the program and return you to DOS.






                                Page 3


          CATALOG.EXE   (c) Copyright 1988, GREENLINE Computing Co.
          -----------   -------------------------------------------

              Many database programs can utilize the data files directly,
          others require passing through an import utility.

              Check your database documentation for instructions on
          how to import this information.

                Some care should be taken in designing your data
          base.  The sample file headers included with this program
          reflect the need for file descriptions and comments.  You
          may wish to include provision for keywords or other
          specific needs.

              If the file name XXTEMPXX.XXX appears in the
          directory, it should be erased.  This is a temporary file
          used to store the currently read directory for processing.
          It would normally have been erased by the utility.


          Registration information:

              If you find this utility useful, a $20.00 donation
          would be appreciated.  Be sure to include your Version
          number, to receive the most current update.


                           Gilbert J. Thompson
                           GREENLINE Computing Co.
                           31 South Buckboard Lane
                           Marlborough, CT.  06447
























                 MS-DOS is a trademark of MICROSOFT, INC.
           DIF is a registered trademark of LOTUS DEVELOPMENT CORP.
       Lotus 1-2-3 is a registered trademarks of LOTUS DEVELOPMENT CORP.
            PC-FILE+ is a registered trademark of BUTTONWARE, INC.
               Q&A is a registered trademark of SYMANTEC, INC.
                CV2 was found in the PUBLIC DOMAIN, May 1986.

                                Page 4

```
{% endraw %}

## CATALOG.TXT

{% raw %}
```
-----------------------------------------------------------------------------
CATALOG.EXE           DISKETTE LIBRARY CATALOG CREATOR          Version  2.00
-----------------------------------------------------------------------------

CATALOG .EXE   Diskette library catalog creator program
CATALOG .DOC   Documentation for CATALOG.EXE
SETUP   .DAT   Sample set-up file
CATALOG .TXT   This file

CATALOG .SDF   Sample ASCII fixed length data file
CATALOG .CDA   Sample ASCII comman delimited data file
CATALOG .DIF   Sample Data Interchange Format data file
CATALOF .WKS   Sample Lotus 1-2-3 Worksheet data file

CATALOG .HDR    PC-FILE+ sample database header files

CATALOG .DTF   \ Q&A sample database header files
CATALOG .IDX   \

CV2     .COM   Change volume label name utility for DOS prior to 3.0

CATUNARC.EXE   Archive backup of CATALOG files

```
{% endraw %}

## FILE1312.TXT

{% raw %}
```
Disk No: 1312                                                           
Disk Title: Catalog, Shufles, and SetPrint                              
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Shuffles                                                 
Author Registration: $30.00                                             
Special Requirements: Two floppy drives.                                
                                                                        
Want to print on both sides of the paper?  You could figure out how your
file will be printed, break it up and feed the parts to your printer one
at a time (and hope that you didn't make an error) -- or -- you can use 
SHUFFLES, a computerized collator.                                      
                                                                        
SHUFFLES breaks your text file into chunks and rearranges them so your  
dot matrix, daisy wheel or laser printer can print on both sides of the 
paper without getting the page order messed up.                         
Program Title: SetPrint                                                 
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: Two floppy drives and Epson-FX compatible printer.
                                                                        
SETPRINT is a menu-driven printer-setting utility.  Used before printing
a file, you can set pitch and weight, set a special printer mode such as
underlining, or just reset the printer.  Commands can be imbedded within
the file to be printed to further change modes.  In addition, you may   
pause the printing for manual feeding.                                  
Program Title: Catalog                                                  
Author Version: 2.0                                                     
Author Registration: $20.00                                             
Special Requirements: Two floppy drives.                                
                                                                        
Build your disk library catalog simply and easily.                      
                                                                        
CATALOG is a simple program that reads a disk volume label and          
directory and then formats the directory information into an ASCII file.
This file can then be imported into your favorite database manager.  It 
comes with sample file headers for use with PC-FILE+ to help you in     
designing your database.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README_R.TXT

{% raw %}
```
   ____
  |_   \
   | |\  \
   | |  \  \   Newline Products
   | |    \  \___________________
   |_|      \ ___________________|


   copyrighted 6/88



	INSTALLATION OF THE SOFTWARE (EVALUATION VERSION)
	----------------------------


	     The SHUFFLES program was designed to run under PC-DOS or
	MS - DOS operating systems used on IBM PC, XT, AT, Model 30 and 
	associated  compatible  microcomputers.   Versions 2.1 and above
	of  the  PC - DOS  and  MS - DOS operating systems are supported.
	Memory requirements  are  128k bytes minimum.   While hard disks
	are not absolutely necessary, they are recommended for increased 
	performance.

	     To run evaluation copy of SHUFFLES on your computer, complete
    the following steps:

	   1. Insert  purchased copy  of  SHUFFLES  disk into disk 
	      drive A and the user's working disk into drive B or C
	      depending on whether you have a dual or single floppy
	      or hard disk based unit, respectively.  Copy "*.*" 
	      from drive  A  to drive C (if hard disk drive). 
          It  is  to your advantage to copy  SHUFFLES  to  a
          sub-directory  that is listed in your "PATH" DOS 
	      command on your computer.

	      example: COPY A:*.* C:*.* (hard disk)


	   2. In order to execute Shuffles enter A:SHUFR and hit return. If
	      copy of Shuffles is on hard disk drive, then enter your hard disk
	      drive designator (ex. C: ) and SHUFR followed by a return.
	      Shuffles will display a help menu.  Refer to SHUF.DOC for
	      further details on Shuffles operations.  The evaluation copy
	      will allow 50 executions of Shuffles before the program expires.
		  After program expiration, Shuffles will print out a registration
		  message per every run of the program thereafter.  Full functionality
		  of the program remains after program expiration,however. The expir-
		  ation message is only displayed to encourage user registration.

	    3.  The files that are distributed on the master disk are
	        summarized below:


	         FILE:  README_R.TXT - This is this text file for
	                               installation instructions
	                               and copyright notice.

	         FILE:  SHUFR.EXE  - This is the SHUFFLES program.
	                             It uses about 40k of RAM.

		     FILE:  SHUF.DOC  -  This file is the user's manual
		 				         for SHUFFLES. Feel free to print
		 		                 it.

		     FILE:  SHUF.CTL  -  This file is a Shuffles control
		     				     file that tracks how many times
		     				     the program has been run by user.
		     				     After 50th run, registration message
		     				     will be printed on every run thereafter.

	      @ IBM PC,XT,AT,MODEL 30 & PC-DOS  are trademarks of the 
	        International Business Machines Corporation.  MS-DOS
	        is a trademark of the Microsoft Corporation









	Terms of Agreement
	------------------

	Newline Products offers the Shuffles program on a shareware
	type basis.  This means that you, the user are at liberty to
	use the Shuffles program for evaluation as well as provide
	copies of the program to other users.  You are not, however,
	at liberty to sell this program or a copy of this program to
	other users.  If you, the user, find this program of usage to
	to you, then you are obliged to pay a $30 users fee.  This will
	entitle you to a binded copy of the reference manual as well as any
	updated	copies of the Shuffles program if enhancements or revisions
	have occured.

	Please take the time out now to fill out the following form now
	for proper registration.  Thank you!




				
------------------------------------------------------------------------------
order #001-SHU

			- ORDER FORM - 


	Please print out the following:



Name of Purchaser __________________________________________________

Address           __________________________________________________

City,State,Zip    __________________________________________________

                            -        -
Phone Number	  ----------------------------------


Current Version of Shuffles you have (if known) __________

Comments or recommendations for future programs or enhancements__________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________





Number of copies ______  x  $30 per copy  = $_______  Total enclosed 


Please make check or money order payable to Newline Products and mail this
form to address below (Sorry, no COD or charge cards at this time):




Newline Products 
25931 Euclid Ave 
Suite #294
Cleveland, Ohio  44132



			Thank you.
```
{% endraw %}

## SHUF.DOC

{% raw %}
```



   ____
  |_   \
   | |\ \
   | | \ \   Newline Products
   | |  \ \____________________
   |_|   \_____________________|


	






	               S  H  U  F  F  L  E  S

                  "The computerized paper collator"

                         REFERENCE MANUAL













               Copyrighted 1988 Newline Products (R1.0)
                        PRINTED IN U.S.A. 






		    TABLE OF CONTENTS







	Section 1.0   Introduction.................................. 1-1
		1.1   Installation of Software...................... 1-1

	Section 2.0   Paper Collation Commands...................... 2-1
		2.1   Command Line Mode............................. 2-1
		2.2   Interactive Mode.............................. 2-5

	Section 3.0   Backsided (Duplex) Printing................... 3-1
		3.1   Backsided Printing For Collating Printers..... 3-2
		3.2   Backsided Printing For Non-Collating Printers. 3-3
		3.3   Backsided Printing For Collating Printers......3-4

	Section 4.0   Appendix
		4.1   Helpful Hints and Examples.................... 4-1
		4.2   Error Messages................................ 4-5
		4.3   Warning Messages.............................. 4-7

	Section 5.0   Terms of Agreement............................ 5-1












                             i




		                                                    1-1
	SECTION 1.0: INTRODUCTION



	    SHUFFLES is a utility program designed to address various paper 
	collation  features on  dot matrix, daisy  wheel, and  laser printers.
	Section 2.0  of  this  document  concentrates  on the  commands used
	for paper collation features. Section 3.0 describes backsided printing
	Section 4.0 is the book appendix.  It provides usefull hints and tips
	on how to harness the full power and ease of the SHUFFLES program.
        One final note, Newline  Products wishes to thank you for the purchase
	of this program.  May we continue to meet your growing needs in the
	near future.



	SECTION 1.1: INSTALLATION OF THE SOFTWARE



	     The SHUFFLES program was designed to run under PC-DOS or
	MS - DOS operating systems used on IBM PC, XT, AT, Model 30 and 
	associated  compatible  microcomputers.   Versions 2.1 and above
	of  the  PC - DOS  and  MS - DOS operating systems are supported.
	Memory requirements  are  128k bytes minimum.   While hard disks
	are not absolutely necessary, they are recommended for increased 
	performance.

	     To install SHUFFLES on your computer, complete the following
	steps:

	   1. Insert  purchased copy  of  SHUFFLES  disk into disk 
	      drive A  and the user's working disk into drive B or C
	      depending on whether you have a dual or single floppy
	      or hard disk based unit, respectively.  Copy "*.*" 
	      from drive  A  to drive C.  It  is  to your advantage to
	      copy  SHUFFLES  to  a  sub-directory  that is listed in
	      your "PATH" DOS command on your computer.

	      example: COPY A:*.* B:*.* (single or dual floppy)
	      example: COPY A:*.* C:*.* (hard disk)




	      @ IBM PC,XT,AT,MODEL 30 & PC-DOS  are trademarks of the 
	        International Business Machines Corporation.  MS-DOS
	        is a trademark of the Microsoft Corporation




	   
								1-2
	SECTION 1.1: INSTALLATION OF THE SOFTWARE (cont.)




	     2. Return purchased (master) copy of SHUFFLES disk to
	        paper jacket and store in a safe place. Use the copy
	        of SHUFFLES on your working disk to generate other
	        copies elsewhere if you wish.  Use the master copy
	        only  when generating new copies of the program on
	        other disks.

	    3.  The files that are distributed on the master disk are
	        summarized below:


	         FILE:  README.TXT - This is a text file for
	                             installation instructions
	                             and copyright notice.

	         FILE:  SHUF.EXE  -  This is the SHUFFLES program.
	                             It uses about 40k of RAM.




							2-1

	SECTION 2.0: PAPER COLLATION COMMANDS


	     The basic format for using the paper collation commands is des-
	scribed below.  The paper collation commands can be executed in one
	of two ways different ways, Command Line Mode  and  Interactive
	Mode.




	SECTION 2.1 COMMAND LINE MODE


	SHUF {input filespec} {output filespec} {/B} {/L=nn} {/N} {/C}
	     {/D} {/F}

	  where,

	"SHUF"   is the name of the  SHUFFLES  program to be executed.

	"{input filespec}"   is the name of the user input text file to be col-
	         lated or translated.

	"{output filespec}" is the name of the output file to which SHUFFLES 
	     is to dump the collated or translated output.  If the user does
	     not supply a  file name for this parameter, then  SHUFFLES  will
	     supply one for the user. The supplied name of the output file will
 	     be  called  "TEMP0.FIL".  The user must  caution  against  using
	     this filename for their personal filenames because  SHUFFLES  will
	     overwrite "TEMP0.FIL" with the latest output whenever output file-
	     specs are not supplied. (This parameter is optional).






								2-2
	SECTION 2.1 COMMAND LINE MODE (cont.)



	"{/B}"  is an option which specifies whether  double-sided or back-
	     sided printing is desired. If this parameter is not used,then the
	     default is no double-sided printing selected.  If the parameter is
	     specified, then double sided printing is selected. See Section 3.0
	     of appendix for more information on double-sided printing.

	"{/L=nn}"  is an option which specifies the  standard length of a page
	     in the user's  text file.  If  this  parameter  is not specified,
	     the user's file is assumed to be already paginated.  If this pa-
	     rameter is specified,then the "nn" part of the parameter is a user 
	     defined number from 01 - 99 which  represents a new page length.
             This  parameter is  used on user input files that are without
	     format (no form feeds).  An  example of such  files are ASCII
	     spreadsheets, ASCII numerical data files, or user text files which
	     don't  contain form feeds. SHUFFLES uses this parameter to break
	     the user text file up at the appropriate points when generating
	     collated output. In general, this parameter can be ignored if your
	     text already contains form feeds.

	"{/N}" is an option which says user has a non-collating printer.
	     This option is used on printers that do NOT support collation.
	     The  SHUFFLES program will output a file  with collation output.
	     This mode is default for the program if not used or ignored.

	"{/C}" is an option which says user has a collating type printer.
	     This option is used on printers that DO support collation.
	     The  SHUFFLES program will output a file  with  no  collation.
	     If this option is ignored, then SHUFFLES will generate an output
	     file for a non-collating type printer.

	"{/D}"  is an option  which specifies that SHUFFLES generate a double
	     spaced output. Best results can be obtained by using no collation
	     option above.  However, collation is still allowed when using this
	     option.

	"{/F}"   is  an option which specifies that a sheet feeder is in use 
             on the printer.  Default is no sheet feeder is in use.


	note:   /C and /N should not be used at the same time.
		If attempted, then last option entered is the
		option used.




								2-3
	SECTION 2.1 COMMAND LINE MODE (cont.)




	Examples:
	     SHUF TEXT.FIL TEXT.COLL /B /D /L=80 

	     SHUF TEXT.FIL /N

	     SHUF TEXT.FIL /F

	     shuf text.fil

    note: The format for Command Line Mode is not particular about upper or
	  lower case,however,mixed case is not allowed. Also,a space character
	  is required in between each parameter.  Path names are allowed for
	  all filespecs, however, wildcards "*" are not allowed.






								2-4
	2.2  INTERACTIVE MODE:




	    In interactive mode, the user simply types "SHUF" and depress the
	return key. SHUFFLES will print the following help window of features
	available:

	   >  Input filespecs - user input file to be shuffed
	   >  Output filespecs - name of file to save shuffled output
	   >  Options:
	      /B - two sided printing, default single sided printing
	      /L=nn  -  page length ( 01 - 99 ),  default = 0 lines
	      /N - output text for a non-collating type printer
	      /C - output text for a collating type printer
	      /D - double space output, default = single space output
	      /F - sheet feeder in use, default = not in use

	   -  Depress <return> to exit -

	   >  Input filespecs ?:


	     The user should supply  the same responses  to the menu prompts
	as were used in the Command Line Mode. The format for the two modes
	are the same.

                    Examples:

                    >  Input filespecs     ?: TEXT.FIL
                    >  Output filespecs    ?: TEXT
                    >  Enter an option <ret>  ?: /B
                    >  Enter an option <ret>  ?: /L=60
                    >  Enter an option <ret>  ?: /N
                    >  Enter an option <ret>  ?: /D
                    >  Enter an option <ret>  ?: /F
                    >  Enter an option <ret>  ?: <ret>








								3-1
	SECTION 3.0: BACKSIDED (Duplex)  PRINTING


	     Backsided printing is a feature which allows the user to print
	consecutive pages of a  text file onto the front and back side of the
	paper.  The net result of this feature is  to  reduce the amount of
	paper by one half the amount of paper needed if the file were sin-
	gle side printed.

	    Backsided printing is  activated by  entering the  "/b"  option.
	When using this option,the user is required to enter an output file-
	spec that does NOT have a file extention on it.The reason for this
	is that Shuffles  will automatically  provide  extentions on the file
	name for you in this mode only.  The way that backsided printing
	mode works is that Shuffles will take the user's input text file and
	split  it  into  two separate output files.  Each output file contains
	every other page  of  the user input file.  Shuffles attaches a  ".a"
	and a  ".b" extention to each of the output files.   The user prints
	each output file out according to the file extention. Output "file.a"
	is sent to the printer first, then output "file.b"  is printed next
	after rotating the "file.a" printed output.

	   Rotation  of  the  "file.a"  printed output is  printer dependent.
	Since  the  backsided  printing  mode is primarily for printers
	capable  of  handling  single cut sheets of paper, the order in which
	a  printer outputs its  printed  text is important.  Printers
	will usually  fall into one  of  two  catagories,  those that print out
	text in a  collated face  down  fashion and those that print out text
	in a  face up  (text visible  as  sheet is resting in output bin)  non-
	collating kind of output.  It  is  very easy for the user to determine
	which kind  of printer he  or she  has by simply printing out a text
	file of two  or more pages.    If the  printed output is such that the 
	user has  to  manually  re-shuffle  the  printed text to get it  in the 
	right order,  then chances  are  that  the user has  a  non-collating 
	face up kind of printer.   This  kind  of output is common amongst 
	laser printers  and printers with sheet  feeders on them.  If the user
	gets an output that  is  already collated  and  the output rest in the
	output  bin face  down  (no  printed text visible),  then  it is likely
	that the  user  has  a collating printer.  This kind  of output is also
	common amongst  laser printers and printers  with sheet feeders on
	them.


								  3-2
	  SECTION 3.0: BACKSIDED (Duplex) PRINTING (cont.)




	     There are some printers that support both modes. The advantage
	of face up (text visible) printed  output is that it allows the user to
	tell immediately if the printer is out of ink or if the text format is
	all correct etc.  The advantage  of face down output is the automatic
	collation of the output. Shuffles  provides  the user with the best of
	both  when using  non-collating  printers.   It makes collated face up
	output possible.

	SECTION 3.1: BACKSIDED PRINTING FOR COLLATING PRINTERS

	     If the user has a collating printer then the "/c" option should
	always be  used in  the backsided printing mode or  any of the other
	modes available under Shuffles. After printing "file.a", the user must
	rotate the printed output accordingly:

		Rotation for collating laser printers
		-------------------------------------

	  If your printer is a COLLATING laser printer, then do the following:

	      1.  remove  printed  output  of  "file.a"  from  output  bin.
	      2.  remove  or  add  blank  sheet  of  paper  to  the top of
	          printed output stack as directed by Shuffles in this mode.
	      3.  while holding printed output face  down  just as it came
	          out of the printer bin,  rotate  the  stack around  so that
	          the bottom  half  exchanges positions  with  the top half
	          (text on the paper  is  now pointing away from you).
	      4.  Eject any remaining sheets  of  paper left in the printer.
	          Neatly  even  the  stack  and re-insert  it into the top of
	          the INPUT paper tray of the laser printer.  Now,  print
	          out "file.b".  The resultant output should be  a  collated
	          front and backsided print of the user input file.


	"file.a" paper stack			top view of printer
	(text side is face down		      ___________________
	and is NOT visible)		      |			|
	___________ 			  ____|			|
	|         |			  |   |		   ||	|  
	|  ____|  |		input ->  |   |		   ||	| <-- collated
	|      |  | 		paper bin |   |		   ||	|   face down 
	|_________|			  |___|		   ||	|   output bin
					      |			|
	(the big sideways "T"		      |_________________|
	shows direction of text)


              Figure 3-1: Rotation of "file.a" in backsided printing mode
                             (collating laser printer)


								3-3

	  SECTION 3.2: BACKSIDED PRINTING FOR NON-COLLATING PRINTERS 


		 Rotation for non-collating laser printers
		 -----------------------------------------


	     For NON-COLLATING type printers use the /N option.
	     If your printer is a NON-COLLATING laser printer, then do
	     the following:

	      1.  remove  printed  output   of   "file.a"  from output bin.
	      2.  remove  or  add  blank sheet  of  paper  to  the  top of
	          printed output stack as directed by Shuffles in this mode.
	      3.  while  holding  printed  output face  up  just as it came
	          out  of  the printer bin,  rotate  the stack around so that
	          the text on the paper appears upright and normal to you.
	      4.  Eject any remaining sheets  of  paper left in the printer.
	          Neatly  even the stack  and  re - insert  it  back into the 
	          top of the INPUT  paper tray  of the laser printer. Now,
	          print  out  "file.b".   The  resultant  output should  be a
	          collated  front  and  backsided  print  of  the  user input 
	          file.





 	 "file.a" paper stack			top view of printer
	 (text side is face down	      ___________________
	 and IS visible)		      |			|
	 ___________ 			|--===|			|
	 |         |			|  |  |		   	|  
	 |  ____|  |	  output     -> |  |  | <- input    	| 
	 |      |  | 	  non-collating |  |  |	  paper bin	|   
	 |_________|	  face up paper |--===|		   	|   
			  bin 	  	      |			|
					      |_________________|

	 (the big sideways "T"		     
	shows direction of text)



	      Figure 3-2: Rotation of "file.a" in backsided printing mode
                               (non-collating laser printer)




								3-4

	SECTION 3.3: BACKSIDED PRINTING FOR SHEET FEEDER PRINTERS


	 Rotation for dot matrix and daisy wheel printers
	 -------------------------------------------------


	     If your printer is a dot matrix or daisy wheel printer with
	     a (COLLATING or NON-COLLATING) sheet feeder on it, use the /F 
	     option, then do the following:

	      1. remove  printed  output  of  "file.a"  from  output bin.
	      2. remove  or  add  blank  sheet  of  paper  to  the top of
	         printed output stack as directed by Shuffles in this mode.
	      3. Eject any remaining  sheets  of paper left in the printer.
	         Neatly  even  the  stack  and re-insert it into the top of
	         the INPUT paper tray  of  the sheet feeder with the text
	         side of the stack now facing you but with the characters
	         upside down.  Now, print  out  "file.b".   The resultant 
	         output should  be  collated front and backsided print of
	         the user input file.


				     "file.a" paper stack
				    (text side IS visible)
					_________       
					|       |
					|   |   |    <---- 
				    ____|   |   |____     (the big upside
		    sheet feeder->  |   |   |   |   |	  down "T" shows   
		  (input paper bin) |	| --|-- |   |     the direction 
				    |	|       |   |     of text)
			  ----------|---|-------|---|----------
			  |				      |
			  |				  *   | <- printer
			  |___________________________________|  front view



                  Figure 3-3: Rotation of "file.a" in backsided printing mode
                            (dot matrix,daisy wheel)


	SECTION 4.0 APPENDIX
								4-1
	SECTION 4.1 HELPFUL HINTS AND EXAMPLES


	     This section describes some useful tips and examples
	of using SHUFFLES.  Limitations are also described here.


	TOPIC #1: Building a batch file for executing several
		  shuffle operations at once.


	     1.0  Edit a file and include the SHUFFLES command 
	          strings in Command Line Mode.  Each of the 
	          commands will be executed as specified. Notice
	          the "print" command.  It will automatically
	          print each file for you after it is shuffled.
	          Each SHUFFLES command string has the same 
	          output file name.  This normally does not
 	          have to be the case.  The same output file-
	          name was used over and over again in order
	          to reserve some of your disk space.  The
	          file is deleted after this batch file
	          executed.  IT IS RECOMMENDED THAT 
 	          THE USER ALWAYS RETAIN HIS OR HER 
	          ORIGINAL FILE. DO NOT ERASE IT. This way, 
	          SHUFFLES can always re-shuffle the file and 
	          generate the desired output.  If the output 
	          file is for frequent printing, then it can
	          be saved and used over and over again. 
	          Notice the use of directory path names on
	          "infile2.doc".  Path names are also allowed
	          the output file specification.  On 
	          "infile5.doc" a backsided printing session
	          is being done.  The DOS "pause" command is
	          used to stop the execution of the batch file
	          allow the user enough time to go and rotate
	          the "file.a" stack in the printer.  Execution
	          is resumed by depressing any key.

	     2.0  Execute the batch file by typing the filename 
	          at the DOS prompt.






							4-2
	SECTION 4.1 HELPFUL HINTS AND EXAMPLES (cont.)



		> batch.fil

		shuf infile1.doc outfile.doc /n /d
		print outfile.doc
		shuf /dir1/dir2/infile2.doc outfile.doc /n 
		print outfile.doc
		shuf infile3.doc outfile.doc /c /d
		print outfile.doc
		shuf infile4.doc outfile.doc /n 
		print outfile.doc

		rem - Notice a backsided print is being done here
		shuf infile5.doc outfile.doc /n /b
		print outfile.a
		pause ...waiting for user to rotate "file.a" in printer
		print outfile.b
		shuf infile6.doc outfile.doc /n /d
		print outfile.doc

		rem - Clean up output files here - 
		erase outfile.doc
		erase outfile.a
		erase outfile.b




	     Limitations:

		wildcard options cannot be a part of any
		input or output file specification. Options
	        /C and /N should not be used at the same time.
		If attempted, then last option entered is the
		option used.






							4-3
	SECTION 4.1 HELPFUL HINTS AND EXAMPLES (cont.)



	Topic #2: Embedded printer control codes in text


	     The usage of the "/N" option of SHUFFLES allows
	the user to specify that the output file should be shuffled
	for printers that do not collate their output.  The /N
	output option is unique in that it actually reverses the
	page order of the user's input file such that the 1st page
	is now the last page in the output file and the last page
	is now the first page in the output file. All other pages
	in between are also "shuffled" in reverse order. A major
	limitation with this feature has to do with embedded printer
	control codes.  Printer control codes that pertain to features
	that transcend page boundaries can present problems.  Such
	printer features that can transcend page boundaries are things
	like left and right margin settings, horizontal or vertical
	landscape mode, font size and type selections, ect.  These
	are things that are typically embedded in the 1st page of a
	document and will define the overall settings for the remainder
	of the document.  However, since SHUFFLES will reverse the 
	page order of the document, these settings are no longer in the
	beginning of the document like they should be, they are
	at the end of the document.  The printer will not execute
	these settings until the last page of the document is 
	received.  The result is that the user's document will not
	be correctly formatted.  There are two ways to by-pass this
	problem. Do either of the following:

	     1.0  Move such settings in your document to the
	          top of the last page of your document.

	     2.0  Include such settings on each and every page
	          of the document if possible.


	Limitations:

	     In general, most printer embedded control codes will not
	affect the operation of the SHUFFLES program.  However, 
	SHUFFLES was designed to work with purely ASCII non binary type
	text files.  Therefore, graghics files of a binary format or text
	files with graphics based binary files in them should be avoided
	when using SHUFFLES.  To use SHUFFLES on such files can produce 
	unpredictable and erroneous text output files.






								4-4
	SECTION 3.2 HELPFUL HINTS AND EXAMPLES (cont.)




	Topic #3: Double Spacing Option 


	     The usage of the "/d" option of SHUFFLES allows
	the user to  specify  double spacing of the user text.
	The user should be aware, however, that this option
	will  increase  the page length of the text.   Page 
	breaks will no longer  occur in the same place as
	with single spacing.  Documents with page numbers
	inserted under single  spacing  may have to be re-
	inserted by editing the double  spaced output file
	or by editing the original file  with compensation
	for the new page breaks.



	Topic #4: Encoded ASCII Text Files


	     Some word processor and text editor programs
	do not output pure ASCII text files at the end of
	the editing session.  These kinds of files usually
	cannot be sent directly to the printer for printing
	because of the special codes (pagination, soft hypen,
	binary numbers,etc.) embedded in them. These control
	codes are not to be confused with the  embedded 
	printer control codes discussed in Topic #2.  These
	codes are usually specific to the word processing or
	editing program and are not known to the printer.
	Fortunately, most word processing and editing programs 
	that use the special codes allow you output a purely 
	ASCII text file.  This purely ASCII text file may also 
	bw refered to as a "printable output or disk output file"
	in the word processor documentation.   Use the purely
	ASCII printable text output file with SHUFFLES.
	






							4-5
	SECTION 4.2 ERROR MESSAGES



	     This section defines all of the error and warning messages
	produced by the Shuffles program, as well as some suggestions 
	for eliminating the problem.


	- No input filespecs entered -

	Issued when user does not specify an input file to shuffle. Enter
	in a valid filename for shuffling.


	- Wildcards are not allowed in input filename -

	Do not include wildcard symbols in input (or output) filenames.
	Shuffles was not designed to handle them.


	- Page length is invalid value -

	When setting the page length parameter "/L=nn", legal values are
	in the range of 1 thru 99 decimal. No usage of the /L=nn option
	will cause the SHUFFLES program to expect text with form feeds.

	- User input file not found -

	Shuffles could not locate the input filespecs entered by the user.
	Check input filespecs for spelling errors or erroneous path specs.


	- User input file cannot be read -

	User input file is marked hidden or locked (by DOS) from reading.
	Unlock or change attributes on file.


	- File exceeds capacity of this program -

	Shuffles can only handle up to 1000 pages of user input text.
	Break file into smaller files or reduce number of pages.





								4-6
	SECTION 4.2 ERROR MESSAGES (cont.)




	- TEMP0.FIL file not opened - 

	  Shuffles could not write to self-created output file.
	  Check to see if disk is full, write protected or not available.

	- User output file not created -

	  Shuffles could not write to user output file.
	  Check to see if disk is full, write protected or not available.
	

	- User output file.a not created -

	  Shuffles could not write to user output file.a.
	  Check to see if disk is full, write protected or not available.
	  This error occurs when using backsided printing mode.


	- User output file.b not created -

	  Shuffles could not write to user output file.b.
	  Check to see if disk is full, write protected or not available.
	  This error occurs when using backsided printing mode.


	- Error seeking through user file -

	  There is a bad block on the disk or the user input file is of
	  zero bytes in size (empty).


	- Error reading user input file (pass 2) -

	  Faulty disk, hidden file, or user removed diskette from drive
	  before Shuffles completed operation. Start over again and don't
	  remove diskette until DOS prompt re-appears.


	- Error writing to user output file -

	  User diskette is full or write protected. 





								4-7
	SECTION 4.3 WARNING AND OPERATIONS MESSAGES




	     This section describes warning messages and messages
	generated by Shuffles to aid the user in doing a particular
	feature.

	... number of pages to process = nn

	  This message is a status message displayed by Shuffles to
	  indicate how many pages of text  it  has to process.  This 
	  number is very close to the page numbers typed in the user's
	  document.   They may differ in  that Shuffles counts all form
	  feeds as being a page, whether there is  text  on the page or
	  not. So do not be concerned if the numbers do not match up
	  exactly.


	- warning ... cannot backside print a single page - 

	  Shuffles cannot split a single page for backsided printing.
	  Two or more pages are recommended.


	... do NOT remove blank sheet at end of [user file.a],
	    add blank sheet if none present
	    also remove any header sheets at front of [user file.a], if any

	  This is an operations message that is used during backsided
	  printing mode.  If a  print out of the  "file.a"  file is un-
	  balanced  (odd number of pages),  Shuffles will instruct the
	  user to not remove or add a  blank  sheet of paper to the
	  printed output  of  "file.a".  This  will balance the paper 
	  stack.  This should only be done whenn instructed by Shuffles.


	... remove blank sheet at end of [user file.a], if any
	    also remove any header sheets at front of [user file.a], if any
	    
	  This is an operations message that is used during backsided
	  printing  mode.    If  a  print out of the  "file.a"  file is 
	  balanced (even number of pages), Shuffles will instruct the
	  user to  remove last blank sheet  of paper printed  during
	  "file.a" ,  if  there  is any.   This will balance the paper 
	  stack.  This should only be done when instructed by Shuffles.
	



	5.0 TERMS OF AGREEMENTS

	Newline Products offers the Shuffles program on a shareware
	type basis.  This means that you, the user are at liberty to
	use the Shuffles program for evaluation as well as provide
	copies of the program to other users.  You are not, however,
	at liberty to sell this program or a copy of this program to
	other users.  If you, the user, find this program of usage to
	to you, then you are obliged to pay a $30 users fee.  This will
	entitle you to a binded copy of the reference manual as well as any
	updated	copies of the Shuffles program if enhancements or revisions
	have occured.

	Please take the time out now to fill out the following form now
	for proper registration.  Thank you!




				
------------------------------------------------------------------------------
order #001-SHU

			- ORDER FORM - 


	Please print out the following:


Name of Purchaser __________________________________________________

Address           __________________________________________________

City,State,Zip    __________________________________________________

                            -        -
Phone Number	  ----------------------------------


Current Version of Shuffles you have (if known) __________

Comments or recommendations for future programs or enhancements__________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________



Number of copies ______  x  $30 per copy  = $_______  Total enclosed 
						      (Ohio residents add
						       6.5% sales tax)


Please make check or money order payable to Newline Products and mail this
form to address below (Sorry, no COD or charge cards at this time):



Newline Products 
25931 Euclid Ave 
Suite #294
Cleveland, Ohio  44132



			Thank you.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1312

     Volume in drive A has no label
     Directory of A:\

    CATALOG  CDA      1078   3-06-90   2:00p
    CATALOG  DIF      2157   3-06-90   2:00p
    CATALOG  DOC      9198   3-06-90   2:00p
    CATALOG  DTF     44032   3-06-90   2:00p
    CATALOG  EXE     61299   3-06-90   2:00p
    CATALOG  HDR      1810   3-06-90   2:00p
    CATALOG  IDX      9728   3-06-90   2:00p
    CATALOG  SDF       858   3-06-90   2:00p
    CATALOG  TXT       878   3-06-90   2:00p
    CATALOG  WKS      1823   3-06-90   2:00p
    CV2      COM       512   5-20-86   1:54p
    FILE1312 TXT      3257   3-23-90  10:12a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1618   2-23-89   1:44p
    MANUAL   BAT       443   1-18-89  10:19a
    READ     ME      11697   8-28-88   8:45p
    README_R TXT      5084  11-10-88  11:09a
    RUNCOB   EXE     62318   6-15-87   7:08p
    SAMPLE1  DAT       304   8-25-88   1:28p
    SAMPLE2  DAT       498   8-25-88   1:30p
    SAMPLE3  DAT       232   8-25-88   1:31p
    SETPRINT BAT        38   8-28-88   7:07p
    SETPRINT INT     15754   8-28-88   7:19p
    SETUP    DAT        75   3-06-90   2:00p
    SHUF     CTL      5100  11-10-88  11:28a
    SHUF     DOC     31123  11-10-88  12:15p
    SHUFR    EXE     40864  11-10-88  11:14a
           27 file(s)     311816 bytes
                           37888 bytes free
