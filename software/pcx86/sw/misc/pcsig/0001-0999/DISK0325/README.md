---
layout: page
title: "PC-SIG Diskette Library (Disk #325)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0325/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0325"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOGON AND LOGOFF"

    This disk is dedicated to a special category of utilities: programs
    for PC user logging, timekeeping and documenting job starting/ending.
    For example, PC-Logger gives you a computer use log that creates a PC
    FILE III database for later sort/print.  These types of utilities are
    a must for anyone who needs to document machine-time, for taxes or
    other reasons.
    
    How to Start:  To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE or COM program, just type its name and press
    <ENTER>. For instructions on running BASIC programs, please refer to the
    GETTING STARTED section in this catalog.
    
    Suggested Registration:  SYSLOG has a suggested donation of $25.00
    
    File Descriptions:
    
    -------- ---  Time Keeper
    -------- ---  PC-Logger
    TIMSTALL COM  Install program for TIMEKEEP
    -------- ---  PC-Logger
    TIMEKEEP EXE  TIMEKEEPER (Ver 3.0): produces job log report
    TIMEKEEP DOC  Documentation for TIMEKEEP
    STARTLOG COM  Writes date & time to log
    DEFAULTS COM  Defaults.com creates log file
    PCUSELOG DOC  Documentation
    USELOG   RPT  PC-FILE III report file listing database
    USELOG   HDR  PC-FILE III header file defining log database
    STOPLOG  COM  Reads log, calculates time
    -------- ---  SYSLOG
    SYSLOG   EXE  SYSLOG (Ver 2.0): system use log (128K;DOS 2.0)
    SYSLOG   DOC  Documentation
    START    EXE  compiled version of start log program
    START    BAS  START/END: Logs start & end of jobs with comments
    END      EXE  compiled version of end log program
    END      BAS  BASICA version of end log program
    ONTIME   EXE  Part of TIMEKEEP utility
    OFFTIME  EXE  Part of TIMEKEEP utility
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## END.BAS

{% raw %}
```bas
20 OPEN "A:TIMES" FOR APPEND AS #1
30 PRINT #1, "End:   ";DATE$;"   ";TIME$;
32 INPUT "Comment about session: ",X$
34 PRINT #1, "   ";X$:PRINT #1,
40 CLOSE #1: SYSTEM
```
{% endraw %}

## PCUSELOG.DOC

{% raw %}
```


        PC User Log       Copyright 1984 John MacEntyre Allen      Page 1  



                             PC USER LOG:
                    USER SUPPORTED TAX LOG PROGRAM

                 COPYRIGHT 1984 by John MacEntyre Allen
                        ALL RIGHTS RESERVED

     We recommend that you read this document in order to gain some
     insight into the organization of the database, as well as obtaining
     tips on operation. YOU SHOULD ALSO MAKE BACKUP COPIES OF ALL FILES ON
     THE PC User Log DISKETTE AND YOU SHOULD PLACE A "WRITE-PROTECT" TAB
     ON IT.
     
     PC User Log is a utility for maintaining a log of the use of your IBM 
     Personal Computer.  It creates a data base using the file format of 
     PC-File III, a general purpose "Data Base Manager" program written and 
     distributed by Jim Button under the "user-supported software" concept.  
     Together with PC-File III (or earlier versions), the PC User Log provides 
     the IBM PC user with a versatile tool for complying with the 1985 tax
     rules requiring a contemporaneous record of computer use.

     To use PC User Log with floppy drives, it is best to keep a separate disk
     with all of the PC User Log files on it.  The files used by PC User Log
     are:

         USELOG.HDR      PC-File header file defining the database
         USELOG.RPT      PC-File report file for listing database
         USELOG.DTA      will be created by PC Use Log to hold data
         USELOG.INX      will be created by PC-File when you SORT the data
         DEFAULTS.COM    Creates the file DEFAULTS.LOG
         DEFAULTS.LOG    Holds default User Name & Description,
                         and the starting date & time of use
         STARTLOG.COM    Writes date & time to DEFAULTS.LOG
         STOPLOG.COM     Reads DEFAULTS.LOG, calculates duration
                         & writes new record to PC-File database
         PCUSELOG.DOC    This file, with instructions and invoice
                                                                 
     For those intuitive individuals who already know enough to put PC User 
     Log to work, here are the quickest instructions:
     
     1) Run DEFAULTS.COM to enter your most likely user name and description.
     2) Before using an application run STARTLOG.COM, then
     3) after using the application run STOPLOG.COM.                      
     4) Always SORT the data first when you use PC-File, to make the index.
     
     That's all there is to it!











        PC User Log       Copyright 1984 John MacEntyre Allen      Page 2  


     

     The .HDR, .DTA and .INX files are the PC-File data base files.  The .DTA 
     file will be created by STOPLOG.COM the first time it is run, but  
     it must be present each subsequent time that STOPLOG.COM is run, or it 
     will be created again.  If that happens, just rename one and 
     MERGE them using the directions in the PC-File utilities documentation.  
     The HDR file is used only by PC-File when reading the data.

     Always remember to SORT the database every time you use PC-File so that 
     the index file will be created.
                                                         
     The file DEFAULTS.LOG will be created by the program the first time that 
     DEFAULTS.COM is run.  It contains the default user name, machine, use 
     code and description, as well as the starting time and date (if 
     STARTLOG.COM has been executed). STOPLOG.COM reads DEFAULTS.LOG before 
     calculating the duration and writing the new record to USELOG.DTA.  
     DEFAULTS.LOG must be present in order to use PC User Log.  Execute 
     DEFAULTS.COM when you first use PC User Log, or any time you wish to 
     change the default User Name or Description. 

     STARTLOG.COM and STOPLOG.COM are the programs that you will use to record 
     your computer usage.  STARTLOG.COM gets the system date and time, then 
     writes them to DEFAULTS.LOG, which already contains the default user name 
     and description.  STOPLOG.COM reads DEFAULTS.LOG, calculates the time 
     elapsed since you executed STARTLOG.COM and allows you to edit the new 
     record before it updates USELOG.DTA and USELOG.INX.  STOPLOG.COM will 
     also allow you to abort without updating the data files.  
     
     STOPLOG.COM and DEFAULTS.COM use a full screen form to display the data 
     record for you to edit.  They both use two lines of the screen to show 
     you a menu: "Save Edit Abort" on the top line and a description of the 
     highlighted choice on the second line, as in Lotus 123 and Microsoft Word. 
     This menu is easy to use; the arrow keys control the cursor to mark the 
     highlighted choice and display a new descriptor.  Press the first letter 
     of a choice to activate it, or move the cursor to it and press "Return". 
     When editing the record, use the arrow keys to move from one entry to the
     next.  When you press a key to begin changing an entry, the entire entry 
     will be erased before your new keystrokes will appear.  If you press 
     "ESC" while you are editing a field, the previous value will be entered 
     again. Pressing "Return" enters the new data and takes you to the next 
     field.  If you press "ESC" while moving the cursor from field to field, 
     the menu will appear again. 
             
     To use PC User Log with a hard disk, just remember that it expects to 
     find the necessary files in the logged directory.











        PC User Log       Copyright 1984 John MacEntyre Allen      Page 3  


     
     
     COPYRIGHT AND COPY PERMISSION
          
     PC User Log is NOT a public domain program.  It is Copyright 1984 by 
     John MacEntyre Allen.  Your permission to copy this program is similar
     to the arrangement with PC-File.  
     
     Users of this program are encouraged to send $10 to the author if they 
     find the program suitable to their needs.  Customizing is possible; mail
     your requests to the author.

     Individuals are granted permission to copy this program for their own use
     and for others to evaluate, so long as no price or other consideration is 
     charged and no changes are made in the documentatin or program.  
     
     Computer clubs are granted permission to copy this program and share it 
     with their members as long as the no price is charged beyond a $6 
     distribution cost and no changes are made in the documentatin or program.
     


     PC-FILE: GENERAL INFORMATION.

     In order to use the PC User Log database most effectively, we recommend 
     using PC-File III, although earlier versions will work almost as well.  
     One can obtain a copy of PC-File III directly from Jim Button by sending 
     a $45 check to: 

                      Jim Button
                      P.O. Box 5786
                      Bellevue, WA 98006

     [MasterCharge and Visa are accepted (telephone: (206) 746-4296)].
     The remainder of this documentation assumes that you are reasonably
     familiar with one of the versions of PC-File.  [If not, then at
     least study "LISTING THE RECORDS" from the PC-FILE USERS GUIDE before
     proceeding any further].  The data base has already been DEFINED for you.


     ---------------------------------------------------------------------
     For those of you who want to initiate payment through your company
     accounting system, or wish to have an invoice for tax purposes, the
     following invoice is provided.
     ---------------------------------------------------------------------












        PC User Log       Copyright 1984 John MacEntyre Allen      Page 4  

     






                            -------------------
                                 INVOICE
                            -------------------







     Purchased from:    John MacEntyre Allen
                        The PC User Log
                        6201 N. 10th St. #218
                        Philadel[hia, PA 19141




      DATE:        /    /                   Invoice No. 8412-001
     -----------------------------------------------------------------
      PRODUCT                             QTY     EACH       TOTAL
     -----------------------------------------------------------------

      The PC User Log database             1      $10        $10 *



                        ----------------------------------
                         PLEASE PAY THIS AMOUNT =>  $10 *
     -----------------------------------------------------------------
                         * $15 if we provided diskettes,
                           mailer, and postage.


            +-----------------------------------------------------+
            | Please make check payable to:  John MacEntyre Allen |
            +-----------------------------------------------------+



     Note:  You may retain this Invoice for your tax records.









```
{% endraw %}

## START.BAS

{% raw %}
```bas
10 '================START================
20 OPEN "A:TIMES" FOR APPEND AS #1 ' ACCUMULATE ALL TIMES
30 PRINT #1, "Start: ";DATE$;"   ";TIME$  'THIS DOES THE RECORDING
40 CLOSE #1: SYSTEM  'WRAP-UP;RETURN TO DOS
```
{% endraw %}

## SYSLOG.DOC

{% raw %}
```























				   S Y S L O G

			System Log Utility User's Manual

				by Richard W Cobb


				  Version 2.0c

			    PC/MS-DOS 2.0 or Greater


























	    (C) Copyright 1984,1985,1986,1987 by Apex Resource, Inc.
			       All Rights Reserved























	    This software product is protected by U.S.	Copyright Law
	    (Title 17 United States Code).  Unauthorized reproduction
	    and/or sales may result in imprisonment of up to one year
	    and fines up to $10,000. Copyright infringers may also be
	    subject to civil penalties.

	    This product is licensed for use only under the terms and
	    conditions set forth in the Software License Agreement in
	    the User's  Manual.    Copying,  selling,  or  using  the
	    product contrary  to the  terms of	the Software  License
	    Agreement may be in violation of the law.

	    IBM is  a registered  trademark of International Business
	    Machines, Inc.,  1-2-3 and	Symphony  are  trademarks  of
	    Lotus Developement	Corp., MS  and the Microsoft logo are
	    trademarks of Microsoft Corp.

	    SYSLOG is a trademark of Apex Resource, Inc.

	    Source Document Revision ARS00284K-F, January 1987

	    (C) Copyright  1984, 1985,	1986, 1987  by Apex Resource,
	    Inc., All Rights Reserved.





























	    CONTENTS

		 License Agreement ........................   1

		 What is Syslog ...........................   2
		      Differences from Earlier Versions       3

		 Getting Started ..........................   4
		      System Requirements		      4
		      Installing Syslog 		      4

		 Using Syslog .............................   5
		      Entering Parameters		      5
		      Parameter Options 		      6
		      Learning Syslog			      7
		      Setting Up A New Log - /N 	      7
		      Making Log Entries - /I, /O	      7
		      Finish and Continue Options	      9
		      Repeat Option			     10
		      Nobreak and Quiet Options 	     10
		      Suspending Time - /S, /R		     11
		      Hold and Lock Options		     11
		      Edit Open Entry - /E		     12
		      Display Last Entry - /L		     12
		      Printing the Log - /P		     12
		      Shorthand Date Qualifiers 	     13
		      Operator and Type Options 	     14
		      Printing Old Logs 		     14
		      The Noparameter Parameter 	     14
		      Practice File			     15
		      Program Limitations		     15

		 EDLOG Logfile Editor .....................  16
		      Using EDLOG			     16
		      Display an Entry - [L]		     16
		      Delete, Undelete Entry - [D], [U]      17
		      Add Replacement Entry - [A]	     17
		      Check Log for Errors - [C]	     18
		      Upper & Lower Case Conversion	     19
		      Make a DIF File - [M]		     19
		      Make a PRN File - [P]		     21
		      dBase II/III Files		     21
		      Lotus Spreadsheets		     21
		      Quit EDLOG - [Q]			     21

		 Advanced Features ........................  22
		      Logging to Another Drive		     22
		      Syslog Exit Status Available	     22
		      Converting Old Log Files		     23

















		 Suggestions ..............................  24
		      Floppy Disk Logging		     24
		      Fixed Disk Logging		     24
		      Automatic Logging 		     25
		      Tax Logging			     25
		      Project Names and Type Codes	     26
		      Working Late			     26

		 HELP! ....................................  27

		 Syslog Error Messages.............  Appendix A

		 Quick Reference Card .............  Appendix B

		 Registration Form ................  Appendix C



















































       LICENSE AGREEMENT _________________________________________________


       A limited  license is  granted to all users of this program to make
       copies of the Syslog program and the accompanying documentation and
       to distribute them to other users only on the following conditions:

       1.  No fee  or other  consideration is to be charged for copying or
       distributing the  program without the express written permission of
       Apex Resource.

       2.  The program	and its documentation are not to be distributed in
       modified form.

       3.  Commercial users are required to register their copies.

       4.  If you do like the program and find it useful, please register.
       Although the  fee is  small, it	does help  provide support for the
       product. Everyone thinks 'let someone else do it', so nobody does.

		      Your registration makes a difference!

       If you  have any  question about  this policy, please contact me at
       Apex Resource, Inc. and I will happily explain the rules!

       Registration of your program entitles you to the following:

       1.  Production copy  of the  program, including	a program  binder,
	   serialized diskette	containing all	of  the  utility  programs
	   described in the documentation, and a printed user's manual.
       2.  Notification of any updates to the program.
       3.  Upgrades if you return your original program diskette.
       4.  My sincere thanks for your support.

       A registration  fee of  $30.00 (a legitimate tax deductible expense
       for business  users) is all that is required. For your convenience,
       a registration form is included (Appendix C).

       An Important  Note:   The utilities  available for  Syslog are only
       provided to registered users, so if you find that you would like to
       have the 'extras', you will need to register your copy.

       Comments and  suggestions  will	be  gratefully	received  and  ac-
       knowledged.   Please tell  us what you think about the software and
       documentation.  If it doesn't meet your needs, tell us why. We want
       to make Syslog more useful.

				 Richard W. Cobb
			       Apex Resource, Inc
			       23 Christine Court
			      Stormville, NY  12582
				  914-221-2611

       ___________________________________________________________________


					 -1-









       WHAT IS SYSLOG ____________________________________________________

       Syslog is  a utility  program which automatically logs the usage of
       computer time.	Information logged includes login date/time, oper-
       ator, project  name, project  type, logout  date/time, and  elapsed
       time.   Active percent  for each  session is calculated to help you
       determine utilization.

       As a  computer  time  logging  utility,	Syslog	offers	some  very
       advanced features including:

	   Command Driven Operation
	   Elapsed Time for Entries
	   Cumulative Time Tracking by Percent
	   Extensive Reporting Options
	   Log Data Exporting to Other Software

       Depending on  your particular  information needs,  and the  type of
       computer system	you use,  Syslog can be installed to provide fully
       automatic logging,  or manual  logging of  session data.  Syslog is
       being used  by both  fortune 500 corporations and individuals alike
       to solve a wide range of time logging problems.

       Some users  employ the  power of  Syslog to  monitor the  usage	of
       company computers.   The information they collect is used to deter-
       mine when  equipment is	being effectively  utilized or effectively
       overworked.

       There are  also installations  where the  time logged  is used  for
       billing purposes.   The	time records  are printed  by job  code or
       department and  the accumulated	time is  used to  allocate  costs.
       Other Syslog  users are maintaining logs of their computer time for
       tax purposes.   Tax  experts agree  that the  most effective way to
       substantiate a  tax deduction  for computer  use is  a log.  Syslog
       includes a business and non-business breakdown of usage for exactly
       this purpose.

       WARNING:   If you  are planning	to claim  a tax deduction for your
       computer, Syslog  does provide some of the records you will need to
       help support  your claim,  however, some  individuals or businesses
       may be  required to  keep additional  records.	You should discuss
       your individual	tax situation  with your CPA or tax advisor before
       relying on Syslog as the sole means of record-keeping.

       Whatever your needs are, you will probably find that Syslog has the
       power to  meet them. With Syslog's extensive reporting options, you
       will quickly  determine who  uses the  computer, what they do, when
       they do it, and how long it takes!

       Apex Resource  also offers  commercial  versions  of  Syslog  which
       include features  suitable for  productivity oriented logging.  For
       instance, you  can monitor idle time in the background to determine
       if a computer is being left on without actually being used.



					 -2-









       DIFFERENCES FROM EARLIER VERSIONS

       If you  are currently using an earlier version of Syslog, you might
       like to know what is new and what has been changed.

       If you  are currently  using any  of  the  version  1.xx  shareware
       releases, you  are in  for some real treats!  There are a whole new
       range of  features available.   While  we have retained the command
       structure that  Syslog user's  have always  liked,  we've  enhanced
       every feature.

       Most significantly,  the structure of the log file has been changed
       and is  no longer compatible with the 1.xx versions.  This was done
       to improve  disk space utilization (by 38%!).  If you are using any
       version 1 release of Syslog, you will have to start a new log file,
       or use  the SYSLCONV  program to  convert your  old log	to the new
       format.

       Since there  are so many improvements, changes and new features, we
       suggest that  you treat	this release  as if  it were a program you
       were totally  unfamiliar with  (believe us,  you are!).	You should
       begin with the GETTING STARTED section, and keep reading.

       Users of  earlier version  2.xx releases will find that most of the
       differences are in the form of additional features. The only change
       which requires  a special mention is the  implementation of command
       options. In particular, this has changed the way you select records
       for printing.   In order to select the operator field for printing,
       you now	use the 'O' as a parameter option rather than a qualifier.
       This change  was made to be consistent with the other new features.
       You should read the section on the /P parameter in the USING SYSLOG
       section for further details.

       ___________________________________________________________________






















					 -3-









       GETTING STARTED ___________________________________________________

       This section explains how to install Syslog on your computer.

       SYSTEM REQUIREMENTS

       The following  configuration is	the minimum  which is  required to
       access all of the features of Syslog:

	   IBM PC/jr/XT/AT or Compatible w/128K
	   Disk Drive, Double Sided Preferred
	   Monochrome or Color Display
	   Printer
	   PC/MS-DOS 2.0 or greater
	   One Blank Diskette

       It  is	recommended  that  the	following  optional  equipment	be
       available to improve program performance:

	   Clock/Calendar Card w/software to set date/time (included with
	     many multi-function boards)

       Syslog uses  the system	date and time to stamp the entries in real
       time as they are created.  Therefore, it is important that the date
       and time  are correctly	set when  the computer is first turned on.
       For this  reason it  is recommended  that a  clock/calendar card be
       used to automatically set the date and time at startup.

       Although we  have not tried to run Syslog on any non-IBM equipment,
       you should  be able  to do  so with no trouble. Syslog is dependent
       only upon  the DOS  interface to  the  computer	for  all  hardware
       access. This makes the program somewhat hardware independent.

       INSTALLING SYSLOG

       Syslog is  very flexible,  it can  be used  in a  variety of  ways.
       Logging	solutions  can	range  from  fully  automatic  to  manual.
       Familiarity with  the program  will help  you determine	the 'best'
       installation for your situation.

       Perhaps the  most convenient  way to begin is to simply work from a
       backup copy of the program disk.  The next section of the manual is
       written in  a hands-on  tutorial style  that explores  the  various
       features so that you will become familiar with how things work.

       In the  SUGGESTIONS section  of the manual are some recommendations
       you can	follow to  install Syslog  in a  manner  which	will  more
       closely suit  your needs.  There are  suggestions for  fixed disks,
       automatic  logging,  tax  logging,  session  logging,  and  how	to
       minimize the 'floppy shuffle' on floppy disk based computers.

       Before making  any decisions, it is suggested that you complete the
       next section, USING SYSLOG, to learn how the program works.

       ___________________________________________________________________

					 -4-









       USING SYSLOG ______________________________________________________

       This section  of the  user's manual  explains  how  to  access  the
       features of  Syslog. In	this section you will learn how to command
       Syslog to  start a  new log,  make and edit entries in the log, and
       examine the contents of the log.

       At this	point, it  is assumed  that you  have  properly  installed
       Syslog on  your computer.  If you  have not,  you should follow the
       installation instructions  in the  GETTING STARTED  section  before
       proceeding.

       NOTE:   If you  do not have a clock/calendar card installed in your
       computer to  automatically set  the date  and time, you should make
       sure that  the date and time are correctly set when the computer is
       started.

       ENTERING PARAMETERS

       Syslog  commands   are  entered	as  parameters.    Parameters  are
       specified at  the DOS  prompt when  the program	is executed.  This
       method should  be familiar since many DOS commands work in the same
       way.  The general format for parameters is:

	    SYSLOG/po qualifier1 qualifier2

       In the  above example,  '/p' is  the parameter where 'p' is a valid
       parameter letter,  and 'o' is one or more parameter options (option
       codes are  discussed separately,  below). The  two qualifiers  that
       follow the parameter are optional on most commands.

       Upper or  lower case letters may be used to enter parameters.  Only
       one parameter  may be  used per invocation of the program; multiple
       parameters are  not supported  (although options  are available, as
       you will see).

       Many parameters	also accept  time, date,  entry  number,  or  text
       qualifiers to  further limit their response.  Either '-' or '/' may
       be used	to separate  numbers when  entering dates  (ex.  1-1-84 or
       7/4/84).

       When entering  time data you must use military time and ':' must be
       used to	separate the  numbers.	Only hours and minutes are entered
       (ex.   7:45 or  17:00);	seconds  are  not  used  in  any  entries.
       Military time  is very  easy to	use with  just	a  little  bit	of
       practice. For any time after noon, simply add 12 to the hour.

       To include an entry number in your command, precede the number with
       '#' (ex.  #1 or #327).  The number is checked for validity.

       A text qualifier may be entered by typing the desired text enclosed
       in single  quotes (ex. 'Computer').  You can include a single quote
       in the  text itself by using it twice (ex.  'Jim''s Computer').  In
       this example,  'Jim''s Computer' would appear in the log as:  Jim's
       Computer.

					 -5-









       Parameter checking  is minimal,	invalid command, option, and qual-
       ifier combinations  are ignored	and the  command is executed as if
       there were no qualifier or option. If conflicting options are used,
       the option specified first will be given priority.

       Checking is  done to  make sure	that time/date	entries are  legal
       values and  '#' entries  are checked  to make  sure they  are valid
       numbers. An  entry number  which is  less than one is assumed to be
       one. An	entry number which greater than the number of the last log
       entry is assumed to be the last entry in the log.

       If at  any time while you're working with Syslog you make an error,
       you can	terminate the  program by  pressing the [Ctrl]-[Break] key
       combination. This  has the  effect of  canceling the  operation	in
       progress.

       NOTE:   Appendix B contains a complete list of available parameter,
       option and qualifier combinations.

       SYSLOG PARAMETER OPTIONS

       As mentioned  above, there  are also  options available for some of
       the Syslog  commands. These  options provide  variations and exten-
       sions to  the various  Syslog parameters.  As noted below, some op-
       tions work with more than one parameter, others are restricted to a
       single parameter.

       In this version of Syslog, the following options are available:

       R - Repeat: On login, repeat the previous entry.

       C - Continue: On login, if last entry is open, continue session.

       F - Finish: On login, close last entry if open.

       H - Hold: After suspend, wait for the [Esc] key to Resume.

       L - Lock: After suspend, get a password and wait to Resume.

       O - Operator: On printing, use Operator field for entry selection.

       T - Type: On printing, use the Type field for entry selection.

       N - Nobreak: Disable [Ctrl]-[Break] key and blank entries.

       Q - Quiet: Suppress screen messages.

       To use  a parameter  option, you  place the  letter of  the  option
       (upper or lower case) immediately after the parameter letter on the
       command line. Options may be combined, and can appear in any order,
       but they  must NOT  be separated by spaces or any other characters.
       Actual usage  of these  options will  be discussed in detail in the
       following sections.



					 -6-









       LEARNING SYSLOG

       For the	remainder of  this section,  we suggest  that you  try	to
       experiment with	Syslog. Don't  worry about making any errors, when
       you are finished practicing you can erase the practice log file.

       SETTING UP A NEW LOG - /N

       Before you  can begin  logging entries with Syslog you will need to
       set up a new log file.  At the DOS prompt type:

	    SYSLOG/N [Enter]

       You will  then be  prompted for	the serial number of the computer.
       The serial number can be found on the back panel of the system unit
       or on the shipping container for the system unit.  Type this number
       and press [Enter].

       A new  log file	will now  be created  in the root directory of the
       default disk  drive.  The file will appear in the disk directory as
       'SYS2yy.LOG' (yy  is the current year). For example, if the current
       year is 1986 then the log file name will be 'SYS286.LOG'.

       Syslog determines  the correct  log file  name each time it is run.
       Therefore, at  the start  of each year you will need to start a new
       log.  If you do not create a new log at the start of the next year,
       you will get the error message 'Log File Not Found'.

       WARNING:   If the  /N option is selected and a log file is found to
       exist already,  you will be warned that continuing will permanently
       erase the existing log.	Use caution!

       MAKING LOG ENTRIES - /I, /O

       There are  two ways  to make  log entries, the first of which is to
       login.	Login (/I)  is used to create a new entry in the log.  The
       second way  to make  a log entry is to logout.  Logout (/O) is used
       to close an existing entry.  In order to visualize what happens, it
       is useful to understand what the log contains.

       The log	is maintained  with eight  pieces of information in a com-
       pleted entry:   Date-In,  Time-In, Operator, Project, Project Type,
       Date-Out, Time-Out and Elapsed Time.

       Whenever a  login is performed, the first five items are filled in.
       The computer  will supply  the date-in  and time-in,  while you are
       required to  provide the  operator, project, and project type.  The
       date-out and time-out are left blank.  Log entries which do not yet
       have the  date-out and  time-out completed are called OPEN entries.
       An open entry is always the result of a successful login.

       Whenever a  logout is  performed, the  date-out and time-out infor-
       mation is  completed.   Once the date-out and time-out are entered,
       the elapsed  time is  calculated and  is added  to the  appropriate


					 -7-









       business or  non-business cumulative  total, then the entry is then
       SHUT. A closed entry is always the result of a successful logout.

       You are now ready to login; at the DOS prompt type:

	    SYSLOG/I [Enter]

       At the  'Operator [3]  :' prompt, enter the operator's initials and
       press [Enter]. A maximum of three characters may be entered for the
       operator; longer entries are truncated.	The number three in brack-
       ets is  included in the prompt as a reminder of this limit. You can
       type in	either upper  or lower	case, but  Syslog will convert the
       entry to  upper case  for storage  in the log. This is done to make
       retrieval of entries easier.

       Next you  will be  prompted to  enter a description of the project.
       At the  'Project [16]  :' prompt  you may enter up to 16 characters
       and then press [Enter].	Again, longer entries will be truncated.

       Finally, at the 'Type [B] :' prompt you may enter any letter of the
       alphabet, however  the default entry is 'B'.  It is assumed that if
       you simply press [Enter] without typing anything, you meant to type
       'B'.

       The type  code provides	an extended  means of grouping entries for
       later retrieval	with the report printing commands. You can use the
       type code  to allocate  the time  collected  to	departments,  cost
       centers,  or   some  other   scheme  relevant  to  your	particular
       situation. In this version the codes can range from A - Z.

       All codes  are also  allocated to either a business or non-business
       category which appears on all reports. This is done by dividing the
       alphabet equally in two. All codes A through M are allocated to the
       business category,  while codes	N through  Z are allocated to non-
       business. If  you are  monitoring computer  usage for tax purposes,
       this will be of interest, otherwise it is of little importance.

       If you  make an error at any time during the login process, you can
       cancel the  command by  pressing  [Ctrl]-[Break].  If  you  realize
       you've made  a login error after the command has been executed, you
       can correct  it with  the Edit  Entry command which we will discuss
       shortly.

       Having now  completed a login, you now have three ways available to
       close the open entry just created.

       1.   Logout the	entry using  the current  date and  time.    Type:
       SYSLOG/O [Enter] at the DOS prompt.

       2.   Logout the	entry using  a specified  date and  time.    Type:
       SYSLOG/O hh:mm  mm-dd-yy [Enter], substituting the closing time and
       date that  you need.  The time may be specified alone; in that case
       the current date will be used.



					 -8-









       NOTE:   If the  time and  date supplied	precede the login date and
       time or are future times, an error results.

       3.   Logout the entry and then login a new entry.  To do this type:
       SYSLOG/I [Enter]  at the  DOS prompt.  You will be prompted for the
       closing date  and time  of the  open entry  before the new entry is
       created.

       We are going to use the first method now. At the DOS prompt type:

	    SYSLOG/O [Enter]

       This will close the entry you just made.

       You may	also complete  the login process from the DOS command line
       by typing  the operator,  project, and type in the format: SYSLOG/I
       'operator\project\type', where  'operator' is  the initials  to  be
       used for  the operator,	'project' is  the text  to be used for the
       project, and 'type' is the project type code.

       You may	include all or some of the information fields. Information
       not supplied  will be  prompted for  by Syslog.	 For  example, try
       typing:

	    SYSLOG/I '\training\b' [Enter]

       This will  cause Syslog	to prompt for the operator, use 'training'
       as the  project entry, and 'B' for project type. To figure out what
       goes where,  Syslog uses  the '\' character to determine which item
       goes in	which field.   You must include this character to identify
       the entry field positions.

       This feature is especially useful for cases where you would like to
       completely automate the logging process from a batch program. Later
       on, we will show you how you can do this.

       One last  item about  logging from  the command	line.  Information
       entered at  the DOS  prompt is  treated as  if it were typed at the
       program prompts in terms of errors:  Long entries are automatically
       truncated, and  the default  type is  'B' for  business.  If Syslog
       encounters an  open entry  when the login request is made, the user
       will be prompted for a closing time and date.

       Finish and Continue Options

       If you  attempt to  login and the previous entry is not yet closed,
       Syslog will  prompt you for the proper closing date and time. While
       this is	a perfectly logical choice to offer, there are cases where
       you might  not want  to offer any choice at all. The Finish (F) and
       Continue (C)  parameter options	give you  a predetermined  way	to
       handle these open entries.

       The 'C'  option instructs  Syslog to continue the login. Instead of
       prompting for  a logout	date and  time if  an open entry is found,
       Syslog will  simply  ignore  the  login	request  allowing  you	to

					 -9-









       continue the  current project. If the last entry is suspended, then
       Syslog resumes  counting elapsed  time (we'll  get to that topic in
       more detail, so be patient!).

       The 'F'  option instructs  Syslog to  finish the  last entry before
       starting a  new entry.  Instead of prompting you for a closing date
       and time  if an	open entry  is found,  Syslog will close the entry
       using the current date and time.

       With either  of these  two options,  if the  last entry	is already
       closed then  the login proceeds as if the option were not selected.
       These codes  only have  an effect  on open  entries. The F (finish)
       option is  mutually exclusive  with the	C (continue) option.  They
       may not be used together.

       Repeat Option

       While the  finish and  continue options give you a choice of how to
       handle previously  opened entries,  the repeat  option gives  you a
       choice of how to create the new entry.

       The  'R'   option  instructs   Syslog  to  repeat  the  last  entry
       information in  the new	entry. With  this option, Syslog will copy
       the operator,  project, and  type codes	from the last entry to the
       new entry  rather than  prompt for  the information. This is a real
       time saver  if you  find yourself  working on  the same project for
       multiple sessions.  To use this option, simply include the 'R' next
       to the '/I' parameter. For example: SYSLOG/IR [Enter].

       Nobreak and Quiet Options

       There are  two other  options which we should probably bring up now
       also, they  are the  'N' and  'Q' options.   These  two options are
       usable with  all Syslog	parameters although  they are particularly
       useful here.

       The 'N'  (Nobreak) option  has two  effects  on  the  operation  of
       Syslog. When the Nobreak option is selected, Syslog will ignore the
       [Ctrl]-[Break]  key  combination  and  will  check  for	empty  log
       entries. If  you attempt to bypass an entry or enter blanks, Syslog
       will not proceed. This is useful for environments where you wish to
       enforce logging.

       The 'Q' option puts Syslog into the Quiet mode. This suppresses all
       screen messages	from appearing, except for error messages, and in-
       put prompts.  This is  great if you are operating Syslog in a fully
       automatic mode, and don't want to see unnecessary screen output.

       All of  these options  can be  used singly, or together in any com-
       bination. For example, the following command line:

	    SYSLOG/IFRN [Enter]




					-10-









       tells Syslog  to login  closing the last entry if open, then repeat
       the last  entry information.   Nobreak  is also selected to prevent
       the entry from being bypassed.

       As the  example shows,  there are numerous possibilities. You might
       want to experiment with a few of them just to see what you get, but
       try to  leave yourself  with an open entry when you're done. You'll
       need one to try some of the following parameters.

       SUSPENDING TIME - /S, /R

       Except for  a very  few dedicated,  hard working  people most of us
       find it nice to occasionally take a break from our computing tasks.
       When   you are ready to leave the computer, you can always just log
       out and	then log  in again  when you return.  But if you intend to
       return shortly and continue the same project, there's a better way!

       At the DOS prompt type:

	    SYSLOG/S [Enter]

       The /S parameter invokes the Suspend timer command.  This stops the
       elapsed time from continuing to accumulate.

       To continue the job again type:

	    SYSLOG/R [Enter]

       The /R parameter Resumes counting again.

       It is  worth noting here that the /S and /R options do not actually
       affect the  computer system clock.  If you should happen to be run-
       ning any  software that	depends upon  the clock,  Syslog will  not
       interfere in any way.

       Hold and Lock Options

       There are  two options available to use with the Suspend parameter,
       'H' and 'L'.

       The 'H'  option instructs  Syslog  to  Hold  after  completing  the
       Suspend.  Syslog will wait for you to press the [Esc] key, and then
       will issue  a Resume command. This has the effect of connecting the
       two commands  together. This option is convenient if your memory is
       short (like  ours!). If	you just  issue a  simple suspend, you may
       return to the computer and forget to Resume.

       The 'L'  option instructs Syslog to Lock the keyboard after doing a
       suspend.  This is very similar to the Hold, accept you are prompted
       to enter  a three character password for the lock.  This is only to
       prevent casual  passers-by from	putting you  back to  work  prema-
       turely.	 The password  is not stored anywhere, and the Lock can be
       defeated by  simply turning  off the  computer.	This is really in-
       tended for  use in  an office  environment where  you don't want to
       have to place signs on the computer to explain what's going on.

					-11-









       EDIT OPEN ENTRY - /E

       This option  is provided  to permit  fixing a  simple typing  error
       without	starting   a  new  entry.  The	use  of  this  feature	is
       restricted.The edit  option will only work on the last entry in the
       log, and then only if the entry is still open.	 This option  will
       not work  on an	entry which  is suspended  or has been closed.	To
       edit an open entry, at the DOS prompt type:

	    SYSLOG/E [Enter]

       At this point you will be prompted to enter new information for the
       operator, project,  and	type.  You  may  also  enter  the  editing
       information from  the command  line in  the same manner as with the
       login (/I)  command. You  cannot change the login date or time with
       this feature (see EDLOG).

       DISPLAY LAST ENTRY - /L

       Sometimes you  will want to look at the last entry in the log.  The
       /L parameter  displays the  last log  entry on  your display screen
       along with  other information  about the  log such as date started,
       number of  entries, status  of last  entry, cumulative log time and
       computer serial number.	At the DOS prompt type:

	    SYSLOG/L [Enter]

       You may	also choose  an entry number for display by using the '#n'
       qualifier to  specify the  desired entry  number ('n'  is the entry
       number).  At the DOS prompt type:

	    SYSLOG/L #1 [Enter]

       This will list log entry number one. You may also list multiple en-
       tries on  the screen.  To exercise  this feature, you should type a
       '+' sign  after the  entry number  you wish displayed. This has the
       effect of  filling the screen with up to 14 entries.   You can page
       through the  log in this manner until the last entry is reached, or
       you can	stop the  listing when	the screen is full by pressing the
       [Esc] key. For example, typing: SYSLOG/L #1+ [Enter] will cause en-
       tries to  be displayed  beginning with entry number one.  Note that
       the '+'  must be  last character  typed, and  the number  must be a
       valid entry number.

       PRINTING THE LOG - /P

       Printing the  log is  an essential feature.  If you can't show your
       log to  anyone, it  won't be  of much  use to  you and accordingly,
       Syslog has  numerous printing options.  The /P parameter allows you
       to print the current log or a log from any other year. You may also
       specify a  date range,  entry number  range, operator,  project, or
       type to print selected entries from the log.

       To print  the entire  contents of this year's log, the /P parameter
       is used alone.  At the DOS prompt type:

					-12-









	    SYSLOG/P [Enter]

       NOTE:   You can	terminate a  long printout at any time by pressing
       [Ctrl]-[Break].

       To select specific entries for printing, there are three methods:

       1.   Entry number  qualifiers can  be used  to select  a particular
       entry or range of entries for printing. To  do  this,  at  the  DOS
       prompt you  would type:	 SYSLOG/P  #f #l  [Enter] where 'f' is the
       first and 'l' is the last entry number to print.  If only the first
       number is  supplied, then only that entry is printed.  You may also
       use a  '+' sign in conjunction with the first entry number to print
       to the  end of the file (see the discussion of the technique in the
       section on /L, above).

       2.   A text  qualifier can  be used to select or target entries for
       printing.  The entire log is searched for entries which contain the
       target text and only those that do will be printed.  To do this, at
       the DOS	prompt you would type:	SYSLOG/P target [Enter] (target is
       a line of text enclosed in single quotes).

       If, for	example, you  wanted to  print the  log entries  which had
       'train' in the project field type:

	    SYSLOG/P 'train' [Enter]

       Matching entries  might include 'training' or 'train schedule'.  An
       exact match  is required for the entry to be printed.  In the above
       example, 'Training' would not be printed since we specified a lower
       case letter  't' in the target text (if case conversion is desired,
       EDLOG can handle that task, as you shall see).

       3.   Date qualifiers  can be  used to  select a	particular date or
       range of dates for printing.  At the DOS prompt type:  SYSLOG/P m1-
       d1-y1 m2-d2-y2  [Enter] (m1-d1-y1  is the first and m2-d2-y2 is the
       last date to print).  If only the first date is supplied, then only
       entries made on that date will be printed.

       The same technique of specifying a date is used to print a log from
       another year.	If  you  wanted  to  print  the  entire  1983  log
       (assuming, of course, that the 1983 log file is located in the root
       directory) you would type:  SYSLOG/P 1-1-83 12-31-83 [Enter].

       Shorthand Date Qualifiers

       There are two special qualifiers available that provide a quick and
       simple way to specify the current date or a date range. You can use
       @D or  @d for  the current  date on  the command line. For example,
       SYSLOG/P 5-1-85 @D [Enter] will print a report of all entries which
       occurred between May 1, 1985 and today (whatever today is).

       The shorthand  notation @Mn  or @mn, where 'n' is number of a month
       from 1  - 12,  can be  used to  specify a  month  date  range.  For
       example, SYSLOG/P  @M1 [Enter]  will print  a report of all entries

					-13-









       for the	month of  January. This has the same effect as typing both
       the starting  and ending  dates, the  difference being  that Syslog
       supplies the correct dates.

       Operator and Type Options

       By default,  Syslog searches the project field for selected entries
       when a  text qualifier  is used. A variation of this format is used
       to select  entries which  contain the 'target' text in the operator
       part of	the entry.   At  the DOS  prompt type:	 SYSLOG/PO  target
       [Enter]. The  'O' option tells Syslog to check the operator for the
       occurrence of  target instead  of the project. If, for example, you
       wanted to  print the  log entries  which had  'JCW' in the operator
       field type:  SYSLOG/PO 'JCW' [Enter].

       You can	also use  the 'T'  option to  select the type field.  This
       would be  used to  print, for  example,	all  deleted  entries,	or
       entries that  contained a particular type code. Again, since Syslog
       expects to  get upper  case operator and type codes, the conversion
       is made	automatically (we  don't like  to type  any more  than you
       do!).

       The O  (Operator) and  T (Type) options are mutually exclusive, and
       therefore can not be combined.

       If you make a large number of different reports on a regular basis,
       you should  consider creating  a batch  file of	Syslog commands to
       print the reports.  The batch file is a particularly elegant way to
       simplify the report generation process.	Given the power and flexi-
       bility of  the reporting  features (and	the typing  that goes with
       it!) you will probably also find that this approach will save quite
       a bit of time.

       Printing Old Logs

       If you  wish to	print a  report from another year, you can use the
       print options  to get  details.	 Do this  by using the date as the
       second qualifier.  For example,

	    SYSLOG/PO 'CBS' 1-1-84 [Enter]

       will cause the entries in the SYS284.LOG file to be searched.

       THE NOPARAMETER PARAMETER

       Finally, before	we  conclude  our  discussion  of  parameters  and
       options, we should point out that if you type:

	    SYSLOG [Enter]

       With no	parameters at  all, Syslog  will display  a  list  of  all
       currently defined  parameters and  options.  This is intended as an
       easy means of jogging your memory should you forget which  commands
       are available.  If you  need additional help, there is an extensive
       Quick Reference Card at the back of the manual.

					-14-









       PRACTICE FILE

       If you  are using  a practice log file, now is a good time to erase
       the log	file and start a new log using the '/N' parameter. You can
       do this by typing:

	    SYSLOG/N [Enter]

       When you  see the  message 'WARNING  - Log Will Be Erased, Continue
       [Y/N]?' respond with a 'Y' and you will be able to begin a new log.

       PROGRAM LIMITATIONS

       There are  several limitations  to the  program of  which the  user
       should be aware.

       There can  be a	maximum of  9999 entries  in the  log.	While this
       number is  somewhat arbitrary,  it should  pose no problem for most
       applications.   In practice,  a log  file this  size would  require
       nearly 300K  bytes of  disk storage  space.  If for some reason you
       should reach this limit you can always copy the log file to another
       diskette and start a new log.

       Calendar dates  are limited  to the  range of  January 1,  1980	to
       December 31,  2069.  We think only the most tenacious PC users will
       find this limitation to be a problem.

       The maximum  elapsed time  that Syslog can calculate is 21 days, 23
       hours, and  59 minutes.	If you	find that this limit is a problem,
       you will  have to  logout and  then login  again  to  continue  the
       project (however,  we think  that  you  are  probably  working  too
       hard!).

       The maximum  elapsed time  that Syslog  can display is 99 hours, 59
       minutes. Elapsed  times greater than this will appear in the log as
       '--:--' to  indicate display  overflow. This  limitation is  on the
       display format only and does not affect the cumulative totals.

       ___________________________________________________________________

















					-15-









       EDLOG LOGFILE EDITOR ______________________________________________

       EDLOG is  a separate,  menu driven program that provides a means to
       remove the  effect of  an entry that has incorrect time or date in-
       formation.   The features included in EDLOG to allow you to display
       an entry, mark an entry as deleted or un-deleted, add a replacement
       entry, check  the log  for errors,  create DIF and PRN format files
       for export  to other  programs, and  perform upper  and lower  case
       conversions on log data.

       USING EDLOG

       EDLOG is an easy to use menu driven program.  The only prerequisite
       to using  it is	that there  can be no open entries in the logfile.
       You should  be able  find your  way through the program with little
       difficulty.   There are,  however,  two	suggestions  before  using
       EDLOG.	First, make  a backup  copy of	the logfile  and  do  your
       editing on the backup, then if you should make any mistakes you can
       go back to the original.  Secondly, you will find it useful to have
       a printed  copy of  your log  for reference while using EDLOG.  You
       should  do  this  with  Syslog  using  the  '/P'  parameter  before
       beginning.

       To start EDLOG, at the DOS prompt type:

	    EDLOG [Enter]

       You will  see a	menu appear  on your  screen.  Pressing the key in
       brackets selects  the adjacent  menu option.  The following discus-
       sions explain  the details of what effect the menu options actually
       have on the log.

       By default,  EDLOG will	use the  logfile in the current directory.
       For example,  if the  DOS prompt  is 'B>',  then EDLOG will look on
       drive B	for the  logfile.   Since you  should do  the editing on a
       backup copy  of the  log anyway,  you may  want to copy the logfile
       onto your Syslog diskette for editing.

       EDLOG can  be forced  to use  another  logfile  by  specifying  the
       logfile name on the command line when you start EDLOG. For example:

	    EDLOG B:MY.LOG

       would tell  EDLOG to use the logfile MY.LOG on drive B:.  This will
       be useful  if you  are working with an old log.	DOS path names are
       supported.

       DISPLAY AN ENTRY - [L]

       This option works exactly like the Syslog '/L' parameter.  The dis-
       play format  is the  same.   After you  select  'L',  you  will  be
       prompted for the entry number to display.

       This feature  is convenient  for confirming the correct deletion of
       an entry, or just reviewing the current status of the log.  The '+'

					-16-









       operator may be added to the starting entry number to list multiple
       entries (see the discussion of this feature in the section above on
       the SYSLOG/L command).

       DELETE, UNDELETE ENTRY - [D], [U]

       There may  come a  time when an entry is sufficiently inaccurate to
       warrant deleting  it from the log.  Unfortunately, we won't let you
       go quite that far.  Deleting an entry would compromise the accuracy
       of the  log, and we don't want that to happen, so we've developed a
       simulated removal.

       The deleting  that EDLOG  does simply  changes the entry type to an
       asterisk ('*')  which symbolizes  a deleted  entry.   The  asterisk
       tells Syslog  to ignore the elapsed time for that entry when making
       reports.   The entry  will still  be printed, and it can be readily
       identified by the asterisk.  If you delete the wrong entry, you can
       undelete it and it will again be recognized by Syslog.

       To delete  or undelete an entry, simply press 'D' or 'U'.  You will
       then be asked which entry number to delete.

       In order  to permit  you to  undelete an entry, EDLOG saves the old
       type ('B'  or 'N')  as the end character of the project name.  This
       means that  if your  project description  fills the  entire project
       field, then  the last character will be replaced with a 'B' or 'N'.
       During an  undelete, if	EDLOG cannot  determine the old entry type
       (i.e.,'B' or 'N'), it defaults to 'N'.

       After a delete or undelete you may want to display the entry to see
       the  results   of  your	handiwork.    You  will  notice  that  the
       accumulated totals now reflect the adjustment.

       During a  delete, each  entry is  tested for  the occurrence of any
       control characters  (ASCII value  less than 32 or greater then 126)
       embedded in  the operator, project, or type fields. Such characters
       are replaced  with a  period (.)  during deletion.  This is done so
       that damaged  entries can be successfully displayed and printed (we
       will cover this topic in more detail below).

       Note that  the test  for control characters is made irrespective of
       the current  deletion status.  Even if an entry is already deleted,
       it is  still checked  and corrected if necessary.  The advantage to
       this is	that you can still correct an entry which has been damaged
       even if it has already been deleted.

       Since deleted  entries are  not actually removed from the log, this
       feature is  essential to  avoid sending	most printers  to 'control
       code heaven'.

       ADD REPLACEMENT ENTRY - [A]

       Any entry  which has been deleted may be given a replacement entry.
       This allows  you to  add a corrected entry to the log.  Replacement


					-17-









       entries are  added to  the end  of the  log, and  the old  entry is
       marked with a reference to the new entry.

       Several restrictions  apply to  this option.    An  entry  must	be
       deleted before  it can be replaced.  Once an entry is deleted, only
       one replacement entry is permitted.  Also, once a replacement entry
       is created,  the old  entry is  permanently marked for deletion; it
       can no longer be undeleted.

       After selecting	this option  you will  be prompted  for the  entry
       number you  want to replace.  The information from the old entry is
       used to create the new entry, this is done to minimize typing.

       Next you  will be  prompted to  type in	the new entry information.
       The old	entry item  is displayed  in brackets  next to the prompt.
       Simply press  [Enter] if  you want  to copy the old item to the new
       entry.

       Once all  of the  entry items  are typed,  the completed  entry	is
       displayed for  final acceptance.   You  will be	prompted 'Is  This
       Correct [Y/N] ?'.  If the entry is correct, type 'Y [Enter]'.  Type
       'N [Enter]' to re-enter the information.

       Once the information is accepted, EDLOG saves the entry in the log,
       and then  marks the  project field of the old entry with the number
       of the  new entry.   The  number appears  at the end of the project
       field in the format:  '^nnnn'.  The caret, '^', is used to indicate
       that the number points to a new entry.

       CHECK LOG FOR ERRORS - [C]

       This menu  option checks  the log  for consistency. This feature is
       included to  aid in  the recovery  of a	log file  which  has  been
       partially damaged  in  some  way  so  as  to  render  some  entries
       unreadable.  This can be caused by a bad disk sector, or some other
       disaster (natural or otherwise). You may want to run the check from
       time to time just to reassure yourself that the log is safe.

       When the  check is  started, each  log entry is checked for correct
       elapsed time,  and the  entire log  is checked  to insure  that the
       accumulated totals  are correct.   Bad  entries will be flagged for
       correction.   Errors in	the accumulated  totals  are  flagged  and
       corrected.

       The test  begins by  reading each  log entry  beginning with  entry
       number one.   A	negative elapsed  time, or an elapsed time greater
       than that indicated by the login/logout times causes an error flag.

       Log entries  are also  checked for  the occurrence  of any  control
       characters (ASCII  value less than 32 or greater than 126) embedded
       in the  operator, project,  or type  fields.   Such characters will
       cause the entry to be flagged as bad.




					-18-









       Once all  the log  entries are examined, the test terminates if any
       bad entries  were flagged.    These  entries  must  be  deleted	or
       replaced before the test will continue.

       If no  bad entries  are found,  the test  continues and	checks the
       accumulated totals  for accuracy.   Any	errors at  this point  are
       flagged and are then automatically corrected.

       A log  that has	no numerical  defects will  get the  message 'File
       Checks OK'.  This doesn't, however, preclude the possibility of in-
       accurate entries,  it simply implies that all of the information is
       consistent.

       Upper and Lower Case Conversions

       When the  check is successfully completed, you will be asked if you
       want to	convert the  operator or  project fields  to/from upper or
       lower case.

       This feature is nice if you need to standardize the data format for
       printing purposes.  Note that  this can	only be done to a log file
       which checks OK.

       MAKE A DIF FILE - [M]

       Another feature	we think  can be  quite useful	is the	ability to
       create a  DIF (Data  Interchange Format)  file from  the Syslog log
       file.   Using this  option, you	can create  a DIF file that can be
       read by any program that supports the DIF file standard.

       Some programs that support DIF files are Lotus 1-2-3, Symphony, and
       Visicalc.   There are  others, no  doubt, but  our testing has been
       limited to  these three products.  The beauty of this standard lies
       in the  fact that it IS a standard.  By following the DIF rules, we
       can virtually  guarantee data  compatibility with all software that
       supports this standard.

       For example,  using Lotus  1-2-3 we  were able to make graphs, sort
       entries, and combine logs from different computers.  There are many
       possibilities for  reworking  the  data	collected  by  Syslog  for
       presentation in different ways.

       After selecting this menu option, you will be prompted to enter the
       letter of  the destination  drive where	the newly  created DIF log
       file will  be saved.   Type the letter of the drive you want to use
       and then  press the  [Enter] key.   If  you press  [Enter]  without
       typing a drive letter, Edlog assumes you meant the currently logged
       (default) disk drive.

       Next you  have the  option to select the range you want to convert,
       up to  the entire  file.  The range of possible entries is included
       in the  prompts, so  you don't have to remember this bit of trivia.
       You will  first be  prompted for the starting entry number.  If you
       press [Enter] without typing a number, EDLOG assumes that you meant
       to start  with the  first entry.   Now you will be prompted for the

					-19-









       ending entry number.  If you press [Enter] without typing a number,
       EDLOG assumes that you meant the last entry.

       With all that done, EDLOG reads the log file, converts the selected
       range of  log entries  into the	DIF format, and then creates a DIF
       log file  on the destination disk drive.  Be patient, the DIF files
       can be  quite large  since they	are  stored  on  the  diskette	as
       standard text files, so this may take some time.

       EDLOG will  automatically provide  a name  for the DIF file that it
       creates.   The file  name will be in the format 'Lnnnnnn.DIF' where
       'nnnnnnn' is  the first  seven digits  of the  serial number of the
       computer.   This technique  is used  so that you may save log files
       from different computers on a single diskette.

       Lastly, we  will explain how the log information is formatted to go
       into the DIF file.  This is important since you will not understand
       what you  see when  the information is loaded into your application
       program.

       Below is  a sample  of the what the DIF information might look like
       after  it  was  converted  to  '.WKS'  format  and  loaded  into  a
       spreadsheet like  1-2-3.  The column headings are not included when
       the DIF	file is  created, they are added here to help explain what
       is included  in the  file.   The spacing of the data will depend on
       the column width settings of the spreadsheet.

       MI DI YI  IH IM	OPR  PROJECT	    T  MO DO YO  OH OM	 EM
       12 21 84  06 12	CBS  tax planning   T  12 21 84  09 40	208
       12 26 84  09 21	JCW  tax planning   T  12 26 84  11 53	152
       12 29 84  11 35	SDB  prep tax form  T  12 29 84  16 12	277
       12 31 84  08 16	JCW  income tax     T  12 31 84  12 12	236

       The first  three columns  are the  login month  (MI), day (DI), and
       year (YI).   Following  that comes  the login hour (IH), and minute
       (IM).   Next come the operator, project, and type.  The logout date
       and time  are in  the same format as the login data items, followed
       by the  elapsed time in minutes.  Remember that the data under each
       column heading is saved as a separate item.

       This format is especially convenient when used with Lotus 1-2-3, or
       Symphony.  The date and time functions provided by Lotus will allow
       you to  manipulate this	information if	you are  so inclined.  You
       could also  select entries  by a particular month by just using the
       numbers under  the 'MI'  heading.   The elapsed  time was left as a
       single  number	to  permit  doing  elapsed  time  sums	and  other
       calculations without having to rework the numbers.

       That's about  all there  is to it!  If you are going to use the DIF
       file with  Lotus 1-2-3,	you will  need to  use the Lotus Translate
       utility to  convert the	DIF file to the Lotus '.WKS' format.  This
       is a  menu option  selected from the first menu after you start the
       Lotus access  system.   Other applications  will  probably  have  a
       similar utility included with them.


					-20-









       MAKE A PRN FILE - [P]

       This menu  option creates  a text  file that is directly compatible
       with dBase  II/III, and	Lotus spreadsheets.  This option was added
       to permit  loading log  data into either dBase II or III.  However,
       you may prefer to use this option instead of the DIF file to create
       a file  for reading  by a Lotus spreadsheet since you can then skip
       the Translate step required for DIF files.

       DBASE II/III FILES

       Included on  the Syslog Program diskette are sample data base files
       which can  be used  'as is'  to read the PRN file created by EDLOG.
       To  do  this,  USE  the	appropriate  .DBF  file  and  APPEND  FROM
       logfile.PRN SDF	DELIMITED.   This will append the records from the
       print file to the dBase data file.

       LOTUS SPREADSHEETS

       A PRN  file can	be directly read into 1-2-3 and Symphony using the
       Lotus  File/Import/Numbers   options.	In  fact  this	method	is
       preferable to  using a  DIF file  since you  can skip the Translate
       step required to convert a DIF file to Lotus worksheet format.

       Included on  the Syslog Program diskette is a sample worksheet that
       can be  used to	create graphs  of logfile  data.  It contains some
       sample data  to demonstrate  how it  works.   You can use this with
       your own data by erasing the Data Input Range, and loading your own
       log data (try using the PRN file for this).

       NOTE:   This spreadsheet makes use of some of the database features
       of 1-2-3.   These  features seem  to cause the most trouble for the
       'uninitiated', so be patient and carefully read the 1-2-3 manual to
       help you understand how this works.

       Although this  spreadsheet was  not tested with Symphony, it should
       work if you rename it with a .WRK extension.

       QUIT EDLOG - [Q]

       This menu  option returns  you  to  DOS.    One	final  note!	We
       deliberately kept  these features  separate from  Syslog  to  avoid
       increasing the  size of	Syslog unnecessarily.  You should not need
       this capability	very often  and therefore  should not have pay the
       disk space  penalty.  We suggest that you use EDLOG to remove a bad
       entry immediately after you realize the error.

       You should  also keep  in mind  that you  can correct errors in the
       operator, project,  or project  type from  within Syslog  using the
       '/E' parameter.

       ___________________________________________________________________




					-21-









       ADVANCED FEATURES _________________________________________________

       The following  features are  available to  meet the  needs of those
       users who require especially elaborate logging schemes.

       LOGGING TO ANOTHER DRIVE

       You may not want to keep your log file in the root directory of the
       default disk  drive.   Here's how  to tell Syslog that the log file
       can be  found on  another disk  drive and/or directory.	At the DOS
       prompt type the following:

	    SET LOGFILE=D:\DIRECTORY [Enter]

       You may substitute any valid drive letter for 'D', but you must in-
       clude the colon if you specify a disk drive. You may also specify a
       directory path.	Syslog will  look for the logfile in the specified
       drive/directory	without   regard  to  the  default  setting.  This
       information is  stored in  the  DOS  environment  and  normally	is
       included it in your AUTOEXEC.BAT file.

       NOTE: Make  sure that  there are  NO spaces in the line! Spaces are
       illegal in  file names.	Any occurrence	of a  space will cause the
       specification to  be ignored.   Be  especially careful of spaces on
       either side of the equals sign.

       You can	also use the SET LOGFILE= command to force Syslog to use a
       logfile name  other than  SYS2xx.LOG.  Precede the pathname with an
       asterisk and include the filename in the path.  Consider:

	    SET LOGFILE=*c:\dos\my.log

       This tells Syslog to use MY.LOG on drive C: in the DOS directory.

       SYSLOG EXIT STATUS AVAILABLE

       Syslog returns  an exit	status code  to DOS  that can  be used	to
       detect various error conditions which occur during execution of the
       program. The following values are returned by Syslog:

	    N	 Exit Status
	    0	 Normal Termination, No Errors
	    1	 Logfile Not Found
	    2	 Command Line Error (Bad Date, Time, etc.)
	    4	 Unknown Command
	    6	 Command Conflict (i.e., Attempt to Resume an
		 entry not Suspended, etc.)
	    8	 Disk is Full
	    9	 Terminated By User (Ctrl-Break)

       These codes can be checked via the 'IF ERRORLEVEL n' batch command.

       There are  several uses	for these  codes.  For installations which
       use forced  logging you could, for example, test to see if the user
       attempted to avoid logging their use of a program.

					-22-









       The following program demonstrates how this could be done:

	    ECHO OFF
	    IF %1x==x GOTO NOPARM
	    :START
	    GOTO LOGIN
	    :ERROR9
	    ECHO **********  ERROR  **********
	    ECHO You MUST Enter Your Initials!
	    ECHO *****************************
	    :LOGIN
	    SYSLOG/I '\%1\b'
	    IF ERRORLEVEL 9 GOTO ERROR9
	    %1
	    SYSLOG/O
	    GOTO END
	    :NOPARM
	    ECHO ERROR - Program Name Not Entered
	    ECHO Usage: LOG [program]
	    :END

       This file  is included  on your	diskette as  LOG.BAT.  To use this
       batch program as it stands, you would type:

	    LOG program [Enter]

       substituting the  name of  the program  you want  to run. There are
       many other  logging solutions that can be implemented through batch
       programs.   You are  invited to	experiment with the exit codes and
       see for yourself just how flexible this approach can be.

       Note:  Remember that the 'IF ERRORLEVEL' batch command evaluates to
       TRUE if the exit code is equal to or greater than the tested value.
       For example, the test IF ERRORLEVEL 1 will evaluate to true for ALL
       errors since  every possible error code is equal to or greater than
       1.  If you want to test for each possible error code the statements
       must be listed in descending order by value.

       CONVERTING OLD LOGFILES

       The SYSLCONV  utility can be used to convert the logfile created by
       any of  the version  1.x versions of Syslog into a file that can be
       read by any of the version 2.x releases.

       To run  the program, type SYSLCONV at the DOS prompt and follow the
       prompts. You  supply the  name of the old log (e.g., SYS85.LOG) and
       the name of the file you wish to create. DOS paths are supported so
       you don't have to have all files in the same directory.

       WARNING:   Be sure you don't overwrite an existing logfile when you
       do the  conversion!  It is recommended that you use the 'OLDyy.LOG'
       name convention	for converted  logfiles so  that you don't confuse
       them with original logs.

       ___________________________________________________________________

					-23-









       SUGGESTIONS _______________________________________________________

       The following  suggestions are offered to help you get the most out
       of Syslog.

       FLOPPY DISK LOGGING

       Users of  computers that  rely  upon  floppy  disks  for  permanent
       storage are  faced with	a slight  problem when it comes to logging
       computer usage.	Since there  isn't any  permanently available disk
       storage for  the  computer  to  access,	most  software,  including
       Syslog, must  depend  upon  the	user  to  insert  the  appropriate
       diskette when needed.

       Controlled, periodic  access to the logfile is needed. One solution
       involves creating  a master  diskette which you will use to startup
       your computer  and applications. This disk would contain only those
       files needed at boot time such as software to set the system clock,
       electronic disk, print spooler, super saver, etc., and DOS.

       We have included a sample batch program called RUN.BAT that you can
       use to  create semiautomatic  log entries  if you use this 'Session
       Logging' technique.  RUN.BAT uses the program name for the project,
       the entry  type defaults  to 'B'.  Syslog prompts for the operators
       initials. You can use this batch program by simply typing:

	    RUN program [Enter]

       Substitute the  name of	the program you want to run for 'program'.
       The batch program prompts you to insert disks as needed to complete
       the logging.  If you  want your	log entries  to reflect the actual
       work being  done, we  suggest you  read the  section below  on  Tax
       Logging. The methods used in that setup are 'Task Based'.

       One other  note regarding  floppy disk based computers. Log entries
       use 30  bytes each in disk storage space.  At 500 entries per year,
       this amounts  to a log file which will reach about 15K bytes. While
       this is not a very large file, it may exceed the available space on
       your boot disk if you are using a single sided disk drive.

       One way around this problem is to start a new log each month.  This
       is very	easy to  do if	use the  following method.  Using the  DOS
       RENAME command  change the  logfile name to 'SYS2mm.LOG' where 'mm'
       is the  month. Use  '01' for  January, '02' for February, etc. That
       way you can still retrieve the log for printing with Syslog.

       FIXED DISK LOGGING

       Fixed disk  users may want to keep Syslog and the logfile in a sub-
       directory. This	is somewhat  neater since  you won't be filling up
       the root directory of your disk drive unnecessarily.

       If you  want to	take this  approach, you should include the appro-
       priate PATH  command in	your AUTOEXEC.BAT file to tell DOS to look
       in that directory for Syslog. If you are not familiar with the PATH

					-24-









       command, see  your DOS  manual. You  will also  need to use the SET
       LOGFILE= feature mentioned in the ADVANCED FEATURES section.

       On our  systems, we  keep Syslog  in a DOS directory which includes
       (in addition  to the  contents of  the DOS disk) our other software
       utilities.   Using PATH	\DOS allows  us to execute Syslog from any
       other directory.   By  using SET  LOGFILE=\DOS  we  also  keep  the
       logfile in this directory.

       The LOG.BAT  file mentioned  earlier is	also an excellent general-
       purpose addition  to the hard disk.  You can use this batch program
       to execute  any application  you have  installed on  the fixed disk
       which can be found by the currently set PATH.

       AUTOMATIC LOGGING

       For installations  that are  looking for fully automatic logging to
       determine what  the actual usage rate is for a computer, we suggest
       an approach which does not require any input from the user. In this
       case, you are only interested in determining how much computer time
       is really active time.

       For example,  on a  fixed disk  based system, you would probably be
       much better  off using  a modified  version of  the LOG.BAT program
       mentioned in  the ADVANCED  FEATURES section. This allows one batch
       program to  be used  with any application. You could even provide a
       small measure  of security by including the PATH statement directly
       into the batch program.

       We've included  a batch  program on  the Syslog  diskette under the
       name AUTO.BAT  which fits these specifications. This program allows
       the user to execute any program in the Wordstar, Lotus, or DOS sub-
       directories, and  instructs the user to call the Information Center
       in the  event that  the login  is not completed for some reason. By
       enabling and  disabling the  PATH from  the batch program, the user
       cannot execute the application without knowing how to either change
       the directory or set the PATH.

       TAX LOGGING

       To facilitate  logging for  tax purposes, you will want to set up a
       system that  you can  use for  logging which  will be  as simple to
       remember as  possible. The  following approach  fills the bill very
       nicely, and lends itself quite well to what we call task logging.

       In general, the approach to use in protecting your tax deduction is
       to establish  a solid  pattern of regular record keeping. You don't
       want any questions of how diligent you were in keeping up your log.
       To facilitate this process, we recommend using a batch file on each
       application diskette  that will	store the  log	information  on  a
       single common diskette or logfile.

       We do  not  recommend  that  you  put  Syslog  directly	onto  your
       application diskette.   The  reasoning is  that you  will  only	be
       creating a  log of  the use  of that  application. You would not be

					-25-









       accurately recording  all of the use of your computer since the log
       would be  'application' based.  The method we have suggested allows
       the log to be 'task' based.

       You will  find a  sample batch  program called  RUNAPP.BAT  on  the
       Syslog diskette	which has been set up to work with Lotus 1-2-3 and
       is suitable  for task  logging. To use this batch program you would
       COPY  it   onto	the   1-2-3  System   Disk,  RENAME  the  existing
       AUTOEXEC.BAT  file  to  OLD.BAT,  and  then  RENAME  RUNAPP.BAT	to
       AUTOEXEC.BAT.

       This batch  program can	be adapted  to any  other  application	by
       simply changing	the line  that contains  'LOTUS' to  the  name  of
       program you  want run. (If your software is loaded on a fixed disk,
       you can	accomplish the	same thing  by	using  the  LOG.BAT  batch
       program mentioned earlier.)

       One other  suggestion on  tax logging: Always retain copies of your
       logs. A	separate disk  for the log files, as well as extra printed
       copies would  be a good idea. In short, treat your log as you would
       any other  important document.  When you  need a  copy for that IRS
       audit three years from now, you won't regret your prudence.

       PROJECT NAMES AND TYPE CODES

       In a busy office where project times are used for billing purposes,
       you  should   try  using   a  project  number  instead  of  a  task
       description. Perhaps  you could	use the sales order number or some
       other number  that relates  the entry  to a  customer  or  job.	By
       combining the project description and the type code, you can devise
       some very elaborate means of grouping projects for printing.

       Businesses which  allocate computer  expenses to departments should
       use the	type code  for this purpose. The match list option is very
       well suited  to this  task since  individual users  can be assigned
       project/type code  combinations. Remember  that you can convert the
       log entries  to upper  or lower case using the Check Log feature in
       EDLOG. This will make retrieval of grouped entries much easier.

       WORKING LATE?

       There is  a bug	in DOS which sometimes causes the date to stay the
       same instead  of changing at midnight. If this happens, Syslog will
       give the  error message 'Logout Precedes Login' when you attempt to
       logout. As  far as  we know,  this problem  is  restricted  to  DOS
       versions 2.0 and 2.1, but make sure the date and time are correctly
       set if Syslog starts to complain.

       You can simulate this situation yourself by setting the time at the
       DOS prompt.  Type TIME  23:59:55 [Enter] and wait a few seconds for
       the clock to tic into tomorrow, type 'DIR [Enter]' to generate some
       disk activity,  then check  the date.  You'll see that it failed to
       change.

       ___________________________________________________________________

					-26-









       GETTING HELP  _____________________________________________________

       In spite  of our  best efforts to give you every bit of information
       you need  to use  our software  quickly and  easily, you  may  find
       yourself in  a position where you are completely stumped.  Here are
       some suggestions on how to resolve those unresolvable problems.

       The first  step to  take when  trouble strikes is to carefully read
       the sections of the documentation relating to the problem. Have you
       misread something?   This is a common mistake which happens when we
       are in a hurry and make assumptions without reading the fine print.

       Sometimes instructions  which are  explained  in  terms	which  the
       writer  believes   to  be   clear  and	concise  are   subject	to
       interpretation in  unimagined ways. If you find that you are unsure
       of what	something means  - try	it. Many  of the  questions we get
       could probably  be answered  by some simple trial an error testing.
       Remember, you cannot hurt the computer and a few simple experiments
       can shed light on the most difficult of problems.

       For registered  user's, if all else fails, you should call the Apex
       Resource Technical  Support Hot Line at 914-221-4858. Before you do
       so, you	should be  prepared with the following information to help
       our technicians:

		      Program Name
		      Software Version #
		      Program Serial Number
		      Problem Description
		      Remedies You've Tried

       If you  can do so, it is a good idea to be at or near your computer
       when you  call.	 Often it is possible to 'talk-through' a problem,
       and this arrangement can facilitate the process.

       One final  word--there is  no such  thing is  a dumb question, just
       questions that don't get asked.

       ___________________________________________________________________

















					-27-









       Appendix A

       SYSLOG ERROR MESSAGES _____________________________________________

       Syslog returns  a variety of error messages if it finds a situation
       it cannot resolve. Below is a list of these messages along with the
       probable cause and possible solutions.

       Current Time Precedes Suspend - When logging out, Syslog found that
       the current  time is  prior to  the time  the entry  was suspended.
       Check to make sure that the date and time are correctly set.

       Disk is	Full -	When creating  a new  entry, Syslog  did not  have
       enough room  on the  disk to add. Remove unneeded files, or start a
       new log to reduce the space needed.

       Future Time Not Allowed - An attempt was made to use a time or date
       which is  later than  the current date and time. Check to make sure
       that the date and time are correctly set.

       Invalid Date  - The  date qualifier  was not  a legal  date  (i.e.,
       February 31), or contains invalid characters.

       Invalid Entry  - The  operator initials	used were not found on the
       match list. In order to complete a login when the M option is used,
       the operator must appear on the list.

       Invalid Number  - The number qualifier was not a legal number. Make
       sure that  the number  contain  only  numeric  characters,  and	is
       preceded by a '#' sign.

       Invalid Qualifier - Syslog did not recognize the qualifier given on
       the command  line as  either a  date, time, number, or quoted text.
       Make sure that qualifiers are properly formatted.

       Invalid Time  - The  time qualifier  was not a legal military time.
       Military time runs from 00:00 (midnight) to 23:59 (11:59 PM).

       Last Entry  Not Closed  - You attempted to open a new entry without
       first closing the last entry.

       Last Entry Not Suspended - A resume command was given, but the last
       entry was not suspended.

       Last Entry  Not Open - A suspend command was given on an entry that
       is either closed or already suspended. You can only suspend elapsed
       time counting on an open entry.

       Log is  Full -  You have  reached the  maximum number (9999) of log
       entries. You  will have	to start  a  new  log  file  with  the	/N
       parameter in order to continue adding log entries.

       Logout Precedes Login - An attempt was made to close an entry using
       a time  prior to  when the  session was started. Make sure the date
       and time are correctly set.

					-28-









       Password Didn't Match, Re-Enter - After a suspend and lock command,
       an incorrect  password was  entered. If	you  don't  remember  your
       password, you  will have  to restart  the computer  to  bypass  the
       check.

       System Log  File Not  Found -  Syslog could not find the logfile in
       the expected  directory or  subdirectory. Make  sure  the  date	is
       correctly set. Syslog expects the file name to include the last two
       digits of  the current year, i.e., if the current year is 1986 then
       the logfile name should be SYS286.LOG. If the SET LOGFILE=directory
       command is  used, make  sure that  no spaces  occur in the command,
       especially on  either side  of the '=' sign. Syslog will ignore the
       specification if it contains spaces.

       Time Must  be Entered  - An attempt was made to logout using a date
       qualifier without  specifying a	time. You  must use  a time if you
       want to give a date.

       ___________________________________________________________________





































					-29-









       Appendix B

       SYSLOG PARAMETERS _________________________________________________

       /P [date]  [date] -  Print Log. If given, select entries from first
		 [date] through second [date] using the year to select the
		 log file. If only first date given, then select date.
       /P #n[+] [#n] - Print from first number #n to second number #n.	If
		 only the  first number  is specified,	only that entry is
		 printed. If a '+' is specified, print to end of log.
       /P [O/T/G S] 'target' - Print all entries that contain the 'target'
		 string.   Use Operator  field with  'O', Type  field with
		 'T', or Group fields with 'G'. If 'S', print Summary.
       /I [F/C][R/M]  - Make  New Log  Entry. If 'C' option, then continue
		 last entry  if open.  If 'F',  then close  last entry  if
		 open. If  'R' option,  then repeat last entry info in new
		 entry. If 'M', get entry info from match list.
       /S [H/L]  - Suspend  elapsed time  counting.  If 'H' option is used
		 then wait  to resume.	 If  'L' is used then get password
		 and lock keyboard.
       /R - Resume elapsed time counting.
       /E - Edit operator, project, type on an open entry.
       /O [time [date]] - Close Log Entry. Use [time] and [date] if given.
       /L [#n[+]]  - List  Entry number  [n] to  screen. If  no number	is
		 given, then  list last entry.	If '+' is given, then page
		 through log beginning at [n].
       /N - Start New Log.


       PARAMETER OPTIONS _______________________________________________

       C - Continue last entry on login  F - Finish last entry on login
       R - Repeat last entry on login
       L - Get password to resume	 H - Hold for resume on suspend
       O - Select operator field	 T - Select type field to print
       N - Disable the break key	 Q - Suppress screen messages


       EDLOG MENU OPTIONS ______________________________________________

       [D] - Mark an Entry as Deleted.	  [U] - Mark Entry as Undeleted.
       [A] - Add Replacement for Entry.   [L] - Display an Entry.
       [C] - Check Log for Errors.	  [M] - Make a DIF format file.
       [Q] - Quit EDLOG.		  [P] - Make a PRN format file.


       _________________________________________________________________









					-30-









       Appendix C

       PRODUCT REGISTRATION FORM _________________________________________


		  SYSLOG, the System Log Utility, Version 2.0c

			       APEX RESOURCE, INC
			       23 Christine Court
			      Stormville, NY  12582
				 (914) 221-2611

       My registration	fee is	enclosed ($30 + $3 Shipping, NYS Residents
       add tax),  please add me to the list of registered SYSLOG users and
       send me a production copy of the program including: program binder,
       diskette, and manual.

       I understand  that registration also entitles me to notification of
       future updates  to the program as well as upgrades if I send in the
       original serialized program diskette.

       Oh!...  I almost forgot...  Please Hurry!!



       Shipping Information (Most orders shipped in 48 hrs)

	    Name ___________________________________________________

	    Company ________________________________________________

	    Address ________________________________________________

	    City ___________________________________________________

	    State ______ Zip _________ Phone _______________________



       Payment Information

	    Check/Money Order# __________ Master Card ____ VISA ____

	    Credit Card Number _____________________________________

	    Credit Card Expiration Date  ___________________________

	    Signature (if charging) ________________________________



       ___________________________________________________________________




					-31-





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0325

     Volume in drive A has no label
     Directory of A:\

    TIMEKEEP DOC     16128   6-28-85   1:24a
    TIMEKEEP EXE     53246   7-08-85   8:24p
    ONTIME   EXE     21120   6-27-85   6:20p
    OFFTIME  EXE     20444   6-27-85   6:21p
    TIMSTALL COM     14621   6-27-85  11:39p
    --------             4   8-20-85   8:01a
    DEFAULTS COM     18877   1-08-85   8:48p
    STARTLOG COM     11003   1-08-85   8:52p
    STOPLOG  COM     21645   1-08-85   9:12p
    USELOG   HDR        85   1-08-85   9:14p
    USELOG   RPT       154   1-08-85   9:48p
    PCUSELOG DOC      9232   1-08-85   9:42p
    -------              4   8-20-85   8:04a
    SYSLOG   EXE     34373   1-15-87   2:02a
    SYSLOG   DOC     84733   1-15-87   2:02a
    START    BAS       216   6-19-84   9:04p
    START    EXE     18176   6-19-84   9:09p
    END      BAS       256   8-06-84  12:33a
    END      EXE     18304   6-19-84   9:14p
    GO       BAT       792   1-28-87   9:01p
           20 file(s)     343413 bytes
                            8192 bytes free
