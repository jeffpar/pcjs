---
layout: page
title: "PC-SIG Diskette Library (Disk #1589)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1589/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1589"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-PUNCH"

    Don't spend another dime on the most hated business machine in the
    office -- the time clock.  PC-PUNCH does a better job of keeping track
    of your employees, yet it doesn't break down, run out of ink, or offend
    those employees who don't like the idea of punching a clock.
    
    Your employees will spend no time learning the new system because it
    uses the same punch-in and punch-out concepts.  They may even find it
    easier since they won't have to locate their card on the crowded wall;
    PC-PUNCH keeps all information internally.  Imagine, there will be room
    for a nice picture where the time cards used to hang.
    
    Best of all, payroll becomes easier.  PC-PUNCH eliminates errors caused
    punching the wrong card or the wrong space.  It also calculates the time
    an employee works between the time they punch in and the time they punch
    out.  All that's left for you to do is add.  You set up the employees'
    records and, with password protection, only you have access to the
    records.  Never again will a time card turn up missing or mysteriously
    altered.
    
    If your employees work on computers, install PC-PUNCH at their desks and
    let them "punch in" when they sit down.  PC-PUNCH and your computer
    will do a better job than your time clock ever did.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1589.TXT

{% raw %}
```
Disk No: 1589
Disk Title: PC-PUNCH
PC-SIG Version: S1.1

Program Title: PC-PUNCH
Author Version: 1.1
Author Registration: $15.00

Don't spend another dime on the most hated business machine in the
office--the time clock.  PC-PUNCH does a better job of keeping track of
your employees, yet it doesn't break down, run out of ink, or offend
those employees who don't like the idea of punching a clock.

Your employees will spend no time learning the new system because it
uses the same punch-in and punch-out concepts.  They may even find it
easier since they won't have to locate their card on the crowded wall;
PC-PUNCH keeps all information internally.  Imagine, there will be room
for a nice picture where the time cards used to hang.

Best of all, payroll becomes easier.  PC-PUNCH eliminates errors caused
punching the wrong card or the wrong space.  It also calculates the time
an employee works between the time they punch in and the time they punch
out.  All that's left for you to do is add.  You set up the employees'
records and, with password protection, only you have access to the
records.  Never again will a time card turn up missing or mysteriously
altered.

If your employees work on computers, install PC-PUNCH at their desks and
let them ``punch in'' when they sit down.  PC-PUNCH and your computer
will do a better job than your time clock ever did.

File Descriptions:

GENESOFT DAT  An encrypted password file for PC-PUNCH.
PCPC     EXE  Main program of PC-PUNCH.
PCPUNCH  DOC  PC-PUNCH Instruction Manual.
PCPUNCH  HLP  An on-line PC-PUNCH help file.
README   1ST  Short text file to obtain your "password."

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #1589  PC-PUNCH  >>>>                      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  PCPUNCH (press enter)                          ║
║                                                                         ║
║ To print documentation, type:  COPY README.1ST PRN   (press enter)      ║
║                                COPY PCPUNCH.DOC PRN  (press enter)      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCPUNCH.DOC

{% raw %}
```
                 ----------------------------------------

                         SHAREWARE PC-PUNCH MANUAL

			  Copyright 1989 Genesoft
		            All Rights Reserved                               

			        Version 1.1
                  
                 ----------------------------------------



				
	PREFACE
        -------

	Congratulations on your decision to get TIME on your side.
	By turning your computer into a time clock, PC-PUNCH turns
	your  TIME  into  MONEY.  This manual will familiarize you
	with the clock's many sensible  and powerful features.  It
	also  provides  specific information  about using PC-PUNCH
        with your computer, and the  Shareware Concept under which
	PC-PUNCH is being distributed.  This software package also
	contains another text file called README.1ST.  Please read
	it to obtain your "password."  You'll need to utilize this
	password to perform PC-PUNCH's managerial functions.

	With the exception of the section entitled  "PC-PUNCH PLUS
	(Registered Version),"  all program features  described in
	this manual apply to both PC-PUNCH - the shareware version
	and PC-PUNCH PLUS - the registered version.

	You may produce a hard copy of this manual on your printer
	by typing  COPY PCPUNCH.DOC PRN at DOS prompt, followed by
	the Enter-key.  All our programs are  NOT  copy protected.
	You can easily make back-up copies to protect your invest-
	ments.  For your convenience, we have included a registra-
	tion form in Appendix D of this manual.




	DISCLAIMER
	----------

	The  software and its documentation are  provided  "as is"
	and without warranties  as to performance  or merchantabi-
	lity,  either expressed  or implied.  In  no  event  shall
	Genesoft  or  its  owners be liable for any loss of profit
	or  any other commercial damage, including but not limited
	to special, direct, indirect, incidental, consequential or
	other  damages  arising out of the use or inability to use
	the program or documentation.

	Genesoft reserves the right to revise this manual and make
	changes from time to time  in the contents hereof  without
	obligation of Genesoft to notify any person  of such revi-
	sion or changes.  The information furnished herein  is be-
	lieved to be accurate and reliable.  However, no responsi-
	bility is assumed  by Genesoft or its owners  for its use,
	nor for any infringements of patents, copyrights  or other
	proprietary rights of others resulting from its use.




	COPYRIGHT
	---------

	The software and its documentation are copyrighted materi-
	als  owned by Genesoft and are protected by U.S. COPYRIGHT
	LAW (TITLE 17 UNITED STATES CODE).  Genesoft grants you  a
	non-transferable limited  personal license to use PC-PUNCH
	on  a  trial  basis  (Up to a month).  You do not have the
        right to  alter the software or  documentation.  Under the
	U.S. copyright law, neither the software  nor the documen-
	tation  may be reproduced in any form or by any means, me-
	chanical or electronic, including photocopying, recording,
	translating, or by  any information storage and  retrieval
	system, in  whole or in part, without  the  prior  written
	consent of Genesoft, except in the manner described in the
	documentation.


	Copyright 1989 Genesoft
	P.O. Box 47611
	San Antonio, Texas 78265

	All Rights Reserved.




	TRADEMARK ACKNOWLEDGEMENTS
	--------------------------

	Genesoft, PC-PUNCH, PC-PUNCH PLUS are trademarks of Genesoft.

	MS-DOS is a registered trademark of Microsoft Corp.

	PC-DOS, IBM, AT are registered trademarks and PC, XT, PS/2
	are trademarks of International Business Machines Corp.




	TABLE OF CONTENTS
        -----------------

	o  Shareware Concept

	o  Registration Bonuses

	o  PC-PUNCH PLUS (Registered Version)
	
	o  File Description

	o  System Requirements

	o  Program Overview

	o  Getting Started

	o  Time Clock Operations

	o  Product Support

	o  Appendix A - Genesoft Trivia Game Specials

	o  Appendix B - Genesoft Profit Sharing Plan

	o  Appendix C - Error Messages

	o  Appendix D - Registration Form




	SHAREWARE CONCEPT
	-----------------

	Since its inception in the early 1980s,  "shareware way of
	marketing software" owes its success to the beliefs that:

	  1. A  program's usability and price is more important to
             the users than fancy packaging and slick advertising.	

	  2. An  honest person will pay a fair price for a program
             that he/she is going to use.

	  3. Advertising  by  word of mouth, on a quality product, 
             is more effective than hard-sell campaigns.

	Today, many commercial-quality programs are distributed as
	shareware. With this marketing concept, you are encouraged
	to  give  copies  (unaltered)  of the program to others to
	"try before buying."  After a trial period (Up to a month,
	in the case of PC-PUNCH), if one decides to continue using
	the program, the author (Genesoft, in this case) only asks
	that you send in a small registration fee.

	Simply put - with shareware,  the bottom line is  you have
	the advantage of getting  quality software  without having
	to  pay extra  for fancy packaging and  costly advertising
	associated with conventional way of software marketing.




	REGISTRATION BONUSES
	--------------------

	At Genesoft, we believe shareware is the ultimate in fair-
	ness to  our  users.  You can first give PC-PUNCH, a fully
	functional program,  a "test drive"  (Not  just around the
	block, but  for up to one full month) in your own business
	environment with your own computer system (Computer, Moni-
	tor, and Printer).  Then, after PC-PUNCH has convinced you
	that  it can actually save you time and money, you'll only
	have to send us a modest  $15  registration fee to receive
	the  "value-added" registered version - PC-PUNCH PLUS, and
	our FREE GIFT - a computer trivia game (See Appendix A).

	As  an  added bonus, we will also enroll our generous sup-
	porters (Registered with $25 or $35) in our Profit Sharing
	Plan (See Appendix B).

	Best of all, Genesoft will donate 10% of your registration
	fee in support of Christian Ministry!

	For your convenience, we have also included a registration
	form in Appendix D.  Please be sure to specify disk size.


                                      

	PC-PUNCH PLUS (Registered Version)
	----------------------------------

	All screens that are related to "shareware marketing" will
	be removed from the registered version.  New documentation
	files will be provided on your PC-PUNCH PLUS product disk.

	PC-PUNCH PLUS will come with these "value-added" features:


	1. Handle Any Shift - This is NOT a requirement for most
	businesses.  But it is nice to have if you ever need it.

	2. Change Password - This feature is "invaluable" if you
	ever need to assign another employee to be the "new time
	clock monitor."

	3. For Your Convenience - PC-PUNCH PLUS is equipped with
	a  built-in  function  (password protected) for updating
	your  computer's "System Date and Time."  This is a REAL
	TIME SAVER, especially when an employee has forgotten to
	punch out.  Please see "Item 4 of TIME CLOCK OPERATIONS"
	(below) for detailed explanations on this.

	4. Peace Of Mind - It  requires a password to get out of
	PC-PUNCH PLUS. This prevents an unauthorized person from
	exiting the time clock to change the "System Time." This
	works extremely well, if you set up your AUTOEXEC.BAT to
	automatically  call up the time clock every time someone
	switches on your computer.
	
	5. More Flexible - For  example, if your printer is off-
	line  when you initiate the print-time-card command, PC-
	PUNCH PLUS gives you the options to either return to the
	on-screen  time  card  without  printing,  or ready your
	printer and finish printing the time card.

	6. Added Security - PC-PUNCH PLUS  has  a  much enhanced
	password entry window.  There will be ABSOLUTELY NO "on-
	screen echoes" as you enter your password.

	7. Hide SSAN - As soon as an employee finishes typing in
	his/her  Social Security Account Number (SSAN), PC-PUNCH
	PLUS will cover it up with #-signs.




	FILE DESCRIPTION
	----------------

	1. Text (ASCII) files in the PC-PUNCH package:

	   a. README.1ST  - A quick introduction.

           b. PCPUNCH.DOC - The file you are reading.

	2. Program files in the PC-PUNCH package:

	   a. GENESOFT.DAT - An encrypted password file.
		
	   b. PCPC.EXE     - Main program of PC-PUNCH.

	   c. PCPUNCH.HLP  - An on-line help file.




	SYSTEM REQUIREMENTS
	-------------------

	Same for PC-PUNCH and PC-PUNCH PLUS.


	Computer: IBM PC, XT, AT, PS/2, and true-compatibles.

	Operating System: MS-DOS or PC-DOS (Version 2.11 or later).

	System Memory: At least 512K RAM.

	Floppy Drive: One required.

	Video Monitor: One required (Works with any monitor).

	Printer: One required (Works with any printer).

	Hard Drive: Optional, but is strongly recommended.

	Clock Card: Optional, but is recommended.




	PROGRAM OVERVIEW
	----------------

	1. Design Approach - In order that the time clock will work
	with any printer/ monitor, it only produces a generic-style
	time  card  printout  as well as displays "black-and-white"
	screens with the exceptions of a few  monochrome-compatible
	color  error  messages.  Time records are kept in  "24-hour
	clock format" for ABSOLUTE clarity. For example: 12:00 a.m.
	(midnight) is 24:00.

	2. For the Workers - The time clock is very user-friendly.
	Right from the first menu, your employees can punch in and
	out by using the "point-and-shoot" technique.  They simply
	point  to  either the "Punch-in Box" or "Punch-out Box" on
	the main menu, with either the Up Arrow or Down Arrow key,
	and press the Enter-key to execute the desired function.

	3. For the Boss - Armed with the password, you will be the
	only one  who can gain access to the Employee Database and
	the time clock's many managerial functions.

	   a. Employee Database - An employee can, at any time, be 
	   added to or be deleted from this database.  You will be
	   asked to enter mandatory data such as  First Name, Last
	   Name, SSAN, Employee Number, and  Date Hired.  The time
	   clock will automatically check for Duplicated SSANs and
	   Employee Numbers, as well as Invalid Dates.  Employees'
	   information, once entered, can be viewed and updated.

	   b. Number of Employees - There  isn't a "real limit" as 
	   to how many  employees you can put on  the  time clock.
	   However, the  "practical limit"  is about  fifteen (15) 
	   workers, depending on your computer's speed and  length
	   of pay period.  This is because, like all database type
	   programs, as the amount of data increases, so  does the
	   amount  of  time  it takes for the time clock to access
	   and process the information.
	 
	   c. Record Search - Employees  are sorted alphabetically
	   by  last name in the Employee Database.  To further fa-
	   cilitate  the  process of finding an employee's record,
	   the time clock is equipped with  a "LAST NAME LOCATOR."
	   As  you type in your employee's last name, it will "in-
	   crementally" search for a match.  A similar "SSAN LOCA-
	   TOR" is  also  available for you to locate time records
	   that are sorted by SSAN.

           d. Uncovers Deception - The  time clock lets you inspect
	   time records for "possible deception on the part of your
	   employees" by displaying them in punch-in order. If, for
	   example, a  worker is late for work  and has rolled back
	   the "System Time" of your computer  before  punching in,
	   you will be able to detect such an occurrence since his/
	   her "punch-in time" will be  out of sequence - no longer
	   in ascending time order. 

	4. Data Files - When  you  run  the  program for the first
	time,  it will create three (3) new data files.  They will 
	be named EMPLOYEE.DAT, HISTORY.DAT, and TIMECARD.DAT.

	   a. EMPLOYEE.DAT - This data file will be updated auto-
	   matically as you ADD, DELETE, or CHANGE employment in-
	   formation in the Employee Database.

	   b. HISTORY.DAT - This  data file keeps your employees'
	   time records sequentially  as they punched in.  Unlike
	   information in EMPLOYEE.DAT, time records kept in this
	   data file CANNOT be altered.
	   
	   c. TIMECARD.DAT - This  data  file stores time records
	   that you've added to each of the on-screen time cards.
	   The time clock updates this data file automatically as
	   you add or delete an on-screen time card entry.

	5. Error Handling - The time clock is not only easy to use
	but is also very "forgiving."  Touching the wrong key will
	never cause a problem.  Instead, it will provide you feed-
	back as to what was done wrong. Please refer to Appendix C
	for a list  of  Error Messages and  respective Recommended
	Corrective Actions.

           Note: It is IMPORTANT that you go over them thoroughly
                 prior to  operating the time clock;  paying par-
	         ticular attention to Error No. 4.
 



	GETTING STARTED
	---------------

	1. The  installation  of PC-PUNCH or PC-PUNCH PLUS on your
	system is a simple and uncomplicated process.  Simply fol-
	lowing either step 2 or step 3 below and  you'll be up and
	running in no time.  Please refer to your computer and DOS
	manual, if  you  need further assistance in performing the
	following procedures.

	2. If you are using a HARD DRIVE, proceed as follows:

	   a. Boot  your  PC  with  DOS's CONFIG.SYS file having
	   FILES and BUFFERS = 20 or greater.

	   b. CREATE,  and  CHANGE to a directory where you want
	   to store the PC-PUNCH package's contents.

	   c. MAKE SURE  your hard drive has at least 720 kbytes
	   free.

	   d. COPY the PC-PUNCH package's contents to your newly
	   created PC-PUNCH directory.

	   e. Now LOG ON to your PC-PUNCH directory and  type at
	   DOS prompt, PCPC  then  press  the Enter-key to start
	   the time clock.

	3. If you are using a FLOPPY DRIVE, proceed as follows:

	   a. Boot  your  PC  with  DOS's CONFIG.SYS file having
	   FILES and BUFFERS = 20 or greater.

	   b. MAKE  SURE  your  PC-PUNCH diskette  is NOT write-
	   protected.

	   c. Insert  the PC-PUNCH diskette in your floppy drive
	   and LOG ON to that drive.

	   d. Now type at DOS prompt, PCPC  and  then  press the
	   Enter-key to start the time clock.




	TIME CLOCK OPERATIONS
	---------------------

	1. Before You Begin - It is important for you to make sure
	that the date and time shown on the main menu are correct.
	These are your computer's "System Date and Time." The time
	clock  utilizes them to keep time records on your workers.
	If changes are needed, please consult your computer manual
	for "Set Date and Time Procedures."

	2. On-Screen Help - Finding  your way around is easy.  In-
	structional messages (mostly on the bottom of each screen)
	are  always  there to guide you every step of the way.  As
	much  as possible,  "action keys"  are called out the same
	way they are labeled on your keyboard.  As an example, the
	"Esc" key, when pressed, allows you to cancel a request or
	re-entering data.  With the exception of exiting the  time
	clock (Needs a "Ctrl-Q"), all "action keys" require you to
	press only a single key.  A "Ctrl-Q" requires you to press
	the  letter "Q"  while holding down the key labeled "Ctrl"
	on  your keyboard.  This  keystroke  combination  prevents
	someone from exiting the time clock accidentally.

	3. Screen Saver - The  time clock will automatically blank
	out your monitor if there are no keyboard activities for a
	period of  ten (10) minutes.  The display can then be  re-
	activated by pressing the Enter-key once.

	4. Punch In - Before accepting a SSAN, the time clock will
	check to see if it has been entered correctly by searching
	the Employee Database for a match. Once it finds the SSAN,
	it will then confirm that the employee in fact has punched
	out previously.  Once satisfied with its findings, it will
	check in the employee.  If, however, he  has forgotten  to
	punch out, the  time clock  will display two (2) messages:
	"ACCESS DENIED", and "Call Your Supervisor!."  You'll then
	have  to  change the "System Date and/or Time" to  let him
	punch out first.  And then you'll have to  change the date
	and/or time back for him to punch in.  This may sound like
	a lot of work at first glance, but it is intended to main-
	tain time records' integrity - remember, as mentioned ear-
	lier in PROGRAM OVERVIEW, Item 4.b., time records once en-
	tered cannot be altered.

	5. Punch Out - The punch-out process is very straight for-
	ward.  The time clock will start looking for the  punch-in
	record as soon as  a SSAN has been entered.  It  will then
	display	 the  record, if it exists.  The employee can then
	punch out by pressing the Enter-key.

	6. On-screen Time Card - This is where you'll prepare your
	employees' time cards for printing.  Time records are add-
	ed to the on-screen time card from a pop-up window, one at
	a time, by pressing the "Ins" key.  You can delete an  un-
	wanted time record  from the on-screen time card  by first
	selecting the record (highlighted),  then  press the "Del"
	key to delete the selected record.  Depending on the speed
	of your computer,  number of employees,  and the length of
	your pay period, it might be necessary for you to add time
	records to the on-screen time cards daily  to speed up the
	process.  The totaling of work hours for a pay period will
	be done as you print each employee's on-screen time card.

	7. Printing Time Cards - The  following  is a step-by-step
	approach to print your time cards.

	   a. MAKE SURE your printer is ON-LINE & HAS PAPER.  Each
	   time card will be printed on a single sheet of paper.

	   b. CALL UP the desired on-screen time card.

	   c. PRESS the "F5" key to initiate the printing process.

	Please repeat the above steps to print each time card.  If
	the printer is OFF-LINE or OUT OF PAPER, you will be given
	a chance to READY THE PRINTER and RETRY, or abort printing
	and EXIT the time clock.




	PRODUCT SUPPORT
	---------------

	Since  the  operations of the time clock are  both logical
	and intuitive in nature, we anticipate  that there will be
	little problem in learning how to use it.

	However, in the unlikely event  that you need  further as-
	sistance,  we'll be glad to provide free technical support
	by phone to our registered users, as well as anyone who is
	in  the process of trying out PC-PUNCH.  We have set aside
	two (2) hours each Saturday, from 10 a.m. to 12 noon  (San
	Antonio time), for  this  purpose.  We  can  be reached at
	(512) 657-1243. You can	also find this telephone number on
	PC-PUNCH's main menu.  (Sorry, no collect calls please).

	Finally, if  you  have  a suggestion for an improvement to
	any of our existing programs or for a  completely new pro-
	gram, please feel free to write or call us anytime.





	APPENDIX A - GENESOFT TRIVIA GAME SPECIALS
	------------------------------------------
	
	In  early 1987, we introduced our first program - a trivia
	game on  the Old Testament based on the King James Version
	of the Holy Bible.  Our objective, then and now, is to mo-
	tivate  the  players to  learn about the  Holy Bible.  The
	April 15, 1989 issue of CHURCH BYTES said, "... a good va-
	riety  of sounds and music, happy and sad faces, blinking,
	use  of  your  name, Bible  references  coming  on screen,
	scores  being increased  after  each play, congratulations
	and  positive reinforcement messages - all give (Genesoft)
	Bible  Trivia  a  happy, busy setting as well as encourage
	good learning." Today, we have a total of six (6) separate
	games:  Old Testament, New Testament, U.S. History,  World
	Geography, Science, and Sports.

	Each  game has 600 multiple-choice questions.  For IBM PC,
	XT, AT, PS/2, and true-compatibles.  1-2 players. 3 levels
	of difficulty.  Timed scoring - with bonus/penalty points.
	Color/Mono modes. ON/OFF sounds. Saves high scores and un-
	finished games. (Memory required: ONLY 128K RAM).

	With  your  registration  on  PC-PUNCH, you will receive a
	FREE game (above) of your choice.  Or if you  just want  a
	game, you can get one for ONLY $9.95.  EITHER WAY, any ad-
	ditional game is ONLY $3.50 each. (3.5" or 5.25" disk).

	For  further information on Church Bytes - a Computer Pub-
	lication for Ministry, please write to Church Bytes, Inc.,
	562 Brightleaf Square #9, 905 West Main Street, Durham, NC
	27701.  Rev. Neil B. Houk, Editor, can also be reached  at
	(919) 479-5242.




	APPENDIX B - GENESOFT PROFIT SHARING PLAN
	-----------------------------------------

	1. Introduction - At  Genesoft,  we strive to develop  af-
	fordable  quality  software.  We keep "prices" low  by NOT
	using fancy packaging and costly advertising.  Instead, we
	rely on  satisfied users  to "spread the word."  Under the
	Shareware Concept, you  can  give  copies  (unaltered)  of
	PC-PUNCH  to anybody  to "try before buying."  This Profit
	Sharing Plan  (PSP), available ONLY to individual users in
	the U.S.A., is intended  to compensate our  generous  sup-
	porters for their efforts.

	2. The PSP - With  a $25 or  $35 registration fee, we will
	send you a FREE trivia game, PC-PUNCH PLUS, as well as its
	shareware version with your own Serial Number (S/N).  Then
	for every person who registers with your S/N, you will re-
	ceive  10% of the registration fee, if yours was $25 - 20%
	if yours was $35.  We will go ONE STEP FURTHER. Each indi-
	vidual enrolled in this PSP with your S/N in turn will get
	a new S/N.  Then  for every person who registers with this
	S/N, you will receive 5% of the registration fee, if yours
	was $25 - 10% if yours was $35. For example, if you regis-
	tered with $35 and we received a $25 registration fee with
	your S/N, your share will be $5 (1st level). In turn, this
	new participant will be assigned another S/N.  You'll then
	receive a minimum of $1.50  with each new registration  on
	this S/N (10% of $15).  No compensation will go beyond the
	2nd level  since it is NOT our intent to have this PSP as-
	sociated with  or be interpreted as a pyramid scheme.  All
	compensation checks will be mailed  monthly  to last known
	addresses on file.  Thank you for your support!




	APPENDIX C - ERROR MESSAGES
        ---------------------------

	The following is a list of "errors" that are  system hard-
	ware/software related.  These "errors" will trigger a pro-
	gram halt allowing you to take corrective actions. The er-
	ror messages will be displayed on pop-up windows. However,
	the recommended corrective actions (provided here) are NOT
	part of the pop-up windows.   A "Halt Log" will be kept on
	available disk space in a text file  called "CLARION.DMP".
	With the exception of  Error No. 1,  all "program halt er-
	rors" will be saved in this file. If you encounter a "pro-
	gram halt" that is not listed here, please bring it to our
	attention so we can update this manual ASAP.  Thank you!

	
	Error No. 1
        -----------

	This  error condition indicates that your computer was not
	booted up with proper settings of "FILES" and "BUFFERS" in
	DOS's CONFIG.SYS file. Error messages on the pop-up window
	will be as follows:

	ERROR CODE: 4   TOO MANY OPEN FILES
	DOS ERROR : 0

	Recommended Corrective Actions: 
	
	1. Make sure your DOS's CONFIG.SYS file  has the following
	two (2) line items.  Please refer to DOS manual for help.

	   FILES = 20
	   BUFFERS = 20

	2. Having done step 1, you'll need to reboot your computer
	first before starting PC-PUNCH.


	Error No. 2
	-----------

	This  error condition occurs when your disk is full.  This
	can happen while adding time records to the on-screen time
	card, adding an employee to the Employee Database,  punch-
	ing in or punching out.  Error messages on the pop-up win-
	dow will be as follows:

	ERROR CODE: 0   ACCESS DENIED
	DOS ERROR : 5   ACCESS DENIED

	Recommended Corrective Actions:

	1. You'll have to make room in your diskette or hard drive
	by deleting  some unwanted files.  If you are using a 360K
	diskette, your only option will be to save PCPUNCH.DOC and
	README.1ST on another diskette first then delete them from
	your PC-PUNCH diskette. The remaining files are sufficient
	for the time clock to function properly.

	2. After you have created more disk space on your diskette
	or hard drive, you can then start up PC-PUNCH again.


	Error No. 3
	-----------

	This  error  condition  occurs when PC-PUNCH cannot find a
	file that it was looking for. Error messages on the pop-up
	window will be as follows:

	ERROR CODE: 2   FILE NOT FOUND
	DOS ERROR : 0
	
	Recommended Corrective Actions:

	1. The  missing  file will be displayed just on top of the
	ERROR CODE line.  You can look it up in the "Halt Log"	by
	doing a  "TYPE CLARION.DMP" at DOS prompt right after get-
	ting out of the pop-up window (Assuming that you are still
	in your PC-PUNCH directory).

	2. After adding the missing file to your PC-PUNCH diskette
	or PC-PUNCH directory (hard drive), you can then  start up
	PC-PUNCH again.


	Error No. 4
	-----------

	This error condition occurs when a  "Key File"  is missing
	or is  not compatible with its associated data file.  This
	can happen if one of the files with extension "K01 to K04"
	is missing or it is not a "current" Key File that has been
	generated or updated with its associated data file.  Error
	messages on the pop-up window will be as follows:

	ERROR CODE: 46   KEY FILE MUST BE REBUILT
	DOS ERROR : 2    FILE NOT FOUND

	Recommended Corrective Actions:

	1. The Key File in question  will be displayed just on top
	of the  ERROR CODE  line.  You can look it up in the "Halt
	Log"  by  doing  a "TYPE CLARION.DMP" at DOS prompt  right
	after getting out of the pop-up window. (Assuming that you
	are still in your PC-PUNCH directory).

	2. To  correct this error condition, you must add to  your
	PC-PUNCH diskette or  PC-PUNCH directory (hard drive)  the
	Key Files that are of the "latest edition."  The ones that
	existed  when their respective data files were last gener-
	ated or updated.

	3. If  you  DO NOT  have the "latest" Key Files, permanent
	loss of data will result. Your only option is to start all
	over again by deleting the respective data files.

	4. After accomplishing  either step 2 or step 3 above, you
	can then start up PC-PUNCH again.





	APPENDIX D - REGISTRATION FORM
	------------------------------

	REGISTERED USER INFORMATION          METHOD OF PAYMENT
	                                     [] Check          
	Please Print Clearly!                [] Money Order   
                                             payable to Genesoft
	                                                             
        PC-PUNCH's Serial Number found       Mail to:               
        on Main Menu:                        Genesoft
                      ----------------       P.O. Box 47611                 
                                             San Antonio, TX 78265    
	Name                                                     
	     --------------------------      Please check appropri-
                                             ate boxes:
	Company                                [] Register - WITH
	        -----------------------           (20% and 10%)
                                                  Profit Sharing
	Address                                   U.S. $35.00
	        -----------------------        
	                                       [] Register - WITH   
        City                                      (10% and 5%) 
	     --------------------------           Profit Sharing
	                                          U.S. $25.00
	State                                  
	      ----------------- Zip ---        [] Register WITHOUT
                                                  Profit Sharing
	Phone (    )                              U.S. $15.00
	       ------------------------        
					                          
	                                       [] A Game - WITHOUT
        Please send me these programs:            PC-PUNCH PLUS
	                                          U.S. $9.95
	  Disk Size (Check one):                
                                               [] Additional Games
          [] 5.25" (360K)                         $3.50 x ( ) Qty
                                                  U.S. $
          [] 3.5"  (720K)                               ---------
                                                 
                                                 Total Enclosed:
          >>>>>>>>  TIME CLOCK  <<<<<<<<         U.S. $
	                                               =========     
          [] PC-PUNCH PLUS                           
                                                                 
          [] PC-PUNCH (PSP - your own S/N)       
	                                           YOUR INPUTS:
						   How did you hear
	  >>>>>>>  TRIVIA GAMES  <<<<<<<           about PC-PUNCH?
					           [] PC-SIG
	  [] Old Testament - on KJV Bible          [] Friend      
                                                   [] User Group
	  [] New Testament - on KJV Bible          [] From BBS
                                                   [] Other
	  [] U.S. History - jog your memory           
                                                      -------------
	  [] World Geography - the Earth                          
                                                    Please include 
	  [] Science - all about nature             suggestions on
                                                    separate sheet 
	  [] Sports - Olympics included             of paper!


End of PCPUNCH.DOC file.  Thank you for your interest in PC-PUNCH!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1589

     Volume in drive A has no label
     Directory of A:\

    FILE1589 TXT      1778  11-14-89   2:58p
    GENESOFT DAT       595   8-28-89   8:28a
    GO       BAT        38  10-18-89  11:10a
    GO       TXT       617  10-18-89  11:13a
    PCPC     EXE    298096   8-28-89   8:28a
    PCPUNCH  DOC     30592   8-28-89   8:28a
    PCPUNCH  HLP      8768   8-28-89   8:28a
    README   1ST      1536   8-28-89   8:28a
            8 file(s)     342020 bytes
                           16384 bytes free
