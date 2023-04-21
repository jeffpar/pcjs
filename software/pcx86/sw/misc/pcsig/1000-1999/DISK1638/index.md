---
layout: page
title: "PC-SIG Diskette Library (Disk #1638)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1638/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1638"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "YOURMENU"

    YOURMENU is a menu-driven menu maker -- a quick and easy way to use your
    computer.  Once the menuing system is set up, you no longer need to
    hassle with typing out lengthy subdirectories or worrying about finding
    the correct command to start a program.
    
    With some menuing systems you almost need to learn a programming
    language before you can set up the menu.  Not here.  When you want to
    add a selection to the menu, you are asked for the program title, the
    path to your program, and a one line description of the program
    selection.  That's it. YOURMENU will hold up to ten pages of menu
    selections with twenty selections available on each page -- a total of
    200 selections allowed. This is certainly an easy menuing system to set
    up and use.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1638.TXT

{% raw %}
```
Disk No: 1638                                                           
Disk Title: YourMenu                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: YourMenu                                                 
Author Version: 1.00                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
YOURMENU is a menu-driven menu maker - a quick and easy way to use your 
computer.  Once the menuing system is set up, you no longer need to     
hassle with typing out lengthy subdirectories or worrying about finding 
the correct command to start a program.                                 
                                                                        
With some menuing systems you almost need to learn a programming        
language before you can set up the menu.  Not here.  When you want to   
add a selection to the menu, you are asked for the program title, the   
path to your program, and a one line description of the program         
selection.  That's it. YOURMENU will hold up to ten pages of menu       
selections with twenty selections available on each page - a total of   
200 selections allowed. This is certainly an easy menuing system to set 
up and use.                                                             
                                                                        
Synopsis: A PC menu system that eases organizing and locating your      
software, no matter where it is on disk.  A simple no-nonsense system   
for everyone.                                                           
                                                                        
File Descriptions:                                                      
                                                                        
INSTALL  BAT  Batch file for hard drive installation.                   
INTRO    DOC  Description of main program.                              
IZZY     BAT  File created by main program.                             
MENU     BAT  Batch file to start main program.                         
MENU     HLD  File used by main program.                                
MENU     OVL  File used by main program.                                
MENU*    DSF  Data files (10 files).                                    
OTHER    DOC  Listing of other programs available form author.          
PRINT    BAT  Batch file to print documentation.                        
READ     ME   Information on installation and documentation.            
START    EXE  Installation program.                                     
YOURFLPY EXE  Main program for floppy drive.                            
YOURMENU DOC  Documentation for main program.                           
YOURMENU EXE  Main program for hard drive.                              
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## INTRO.DOC

{% raw %}
```





 ,			      Y O U R	M E N U
			 Hard Disk Menu and Dos Shell
				VERSION  1.xx

			   HomeCraft Computer Products
				 P.O. Box 974
			      Tualatin,  OR  97062
				(503) 692-3732









	       This disk contains version 1 of Your Menu dated
	 12-02-88.  This disk contains the following files:


	     YOURMENU.EXE - Main Program File
		 MENU.BAT - Batch File Used To Start Your Menu
	      INSTALL.BAT - Batch File Used To Start Installation
		START.EXE - Installation Software
		    *.EXE - Introduction and documentation
		    *.DSF - Data files
		 IZZY.BAT - File Created by YOUR MENU


	 ****************************************************************
	 ****************************************************************
	 ****************************************************************




     YOUR MENU is a hard disk menu system (it can also be used on a
     floppy disk system) and DOS Utilities Shell.  As with all HomeCraft
     software it is designed to be _very_ simple to use and set up.

     YOUR MENU provides direct access to 200 progrgams on a hard disk.
     It provides 10 screens, with 20 selections on each screen.  You 
     define the selections for each of these menu items.

     YOUR MENU also allows you to use ten common DOS functions without
     your having to learn about DOS.  You'll be able to copy disks,
     check disks for defects, put a volume label on a disk, format
     disks, plus use six other DOS functions.


     SYSTEM REQUIREMENTS:  _Your Menu_ will run on an IBM PC, XT,
     AT, PS/2 or compatible with a minimum of 196K of memory.



	 ****************************************************************
	 ****************************************************************
	 ****************************************************************




  USER-SUPPORTED SOFTWARE

	    This software has been placed in circulation under the 
	 user supported concept.  Non-profit groups and individuals 
	 are encouraged to make copies of this disk and distribute it 
	 to their members and friends as long as the software is 
	 provided at no cost.  A distibution charge of up to $10 may
	 be charged to cover the cost of diskettes, handling and duplicating,
	 if prior written permission is obtained from the author.

	    Under the user-supported concept, you are given a 
	 complete, working software free. If you find you are using 
	 this software, a contribution of $25.00 is suggested. The money 
	 will cover the cost of printing a manual, providing you with
	 further improvements, postage, telephone bills, etc.

	     The contribution will make you a registered user.	As a 
	 registered user you are entitled to free updates, support, and a 
	 current copy of the user's manual and software.
	 A registration form can be displayed and printed from a
	 prompt on the Main Home Loan Menu.  Or send $25.00 with your
	 name, address, computer type and the name of this software
	 to the address given below.


	 ***********************************************************
	 ***********************************************************


  DISCLAIMER


	 THIS SOFTWARE IS PROVIDED "AS IS,"  THERE ARE NO WARRANTIES, 
	 EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
	 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
	 PARTICULAR PURPOSE, AND ALL SUCH WARRANTIES ARE EXPRESSLY AND 
	 SPECIFICALLY DISCLAIMED.  NEITHER HOMECRAFT COMPUTER PRODUCTS 
	 NOR ANYONE ELSE WHO HAS BEEN INVOLVED IN THE CREATION, 
	 PRODUCTION, OR DELIVERY OF THIS SOFTWARE SHALL BE LIABLE FOR 
	 ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR INCIDENTAL DAMAGES 
	 ARISING OUT OF THE USE OR INABILITY TO USE SUCH SOFTWARE EVEN 
	 IF HOMECRAFT COMPUTER PRODUCTS HAS BEEN ADVISED OF THE 
	 POSSIBILITY OF SUCH DAMAGES OR CLAIMS.

	 This disclaimer shall be governed by the laws of 
	 the State of Oregon and shall inure to the benefit of Steven 
	 C. Hudgik, his successors, administrators, heirs and assigns.



  MORE INFORMATION

	      For more information on Your Menu or other
	 HomeCraft software products contact:

	       Steve Hudgik
	       HomeCraft Computer Products
	       P.O. Box 974
	       Tualatin,  OR  97062 


	      You can register as a Your Menu user by phone using your
	  VISA or MASTER CARD by calling 503-692-3732.

	      HomeCraft is the leader in software for collectors.  If
	  you have a collection that you'd like to catalog on a computer,
	  write to us and tell us about it.  If we don't have software
	  available we may be able to develop it for your collection.

rite to us and tell us about it.  If we don't have soft
```
{% endraw %}

## OTHER.DOC

{% raw %}
```






OTHER SOFTWARE PUBLISHED BY HOMECRAFT:




***************************************************************************
***************************************************************************
***************************************************************************

THE COLLECTORS SERIES


All of the software in the collector's series has been specifically
designed for a certain type of collection.  Each allows you to catalog
your collection using 21 different characteristics and you can perform
searches based on any combination of the information you've entered.

This series is unique in that each of the programs provides three levels
of operation providing screens for beginning collectors through professionals.
You can change from one level two another via a selection on the main menu.

All of the software in the collectors series has been designed so your
computer does all the work - and it's easy for you to learn and use.  Over
half of our users purchased their first computer so they could use one of
the programs listed below.

The following programs are a part of the collectors series:


	FOR RECORD COLLECTORS (LPs, 45s, CDs, cassettes, etc.)
	FOR RECORD COLLECTORS - CLASSICAL MUSIC VERSION
	BOOK MINDER (Books and magazine articles)
	FOR COMIC BOOK COLLECTORS (comic books)
	FOR PHOTOGRAPHERS (Slides, negatives and prints)
	THE VIDEO VEWER (Video tapes & laser disks)
	FOR BASE BALL CARDS
	THE INFORMATION INDEX (Misc. information such as
	  recipes, dieting instructions, jokes, trivia,
	  exercise instructions, etc.).


Plus there's more collector's software on the way!



















***************************************************************************
***************************************************************************
***************************************************************************

HOME FINANCIAL SOFTWARE


Home Money Manager II - Checkbook and budgeting software designed specifically
			for the home user.  In addition to being able to
			provide the normal features that most home accounting
			has, HMM-II has several unique features.  For example,
			in addition to split entries, you can also split
			your checking accounts; each portion of a split entry
			can have its own memo; there are four editors that
			allow you to make changes at any time; and HMM-II
			automatically adjusts itself for use with any micro-
			computer printer (including laser printers set for
			66 lines per page).

			HMM-II prints checks, tracks up to 12 checking accounts
			on a floppy disk (plus 12 credit accounts), can handle
			ATM and telephone transactions, provides over 950
			expense catagories, and allows tracking of tax
			deductible expenses.


Home Loan (The Financial Calculator) - Home Loan not only calculates the
			monthly payment for nearly any type loan, it
			provides tables showing the effects of various loan
			options at a glance.  Calculation of amortization
			tables, the value of an annuity, present value, and
			future value are also provided.  In addition, Home
			Loan has special sections to help plan for your
			retirement, calculate the value of your IRA, plan
			for your children's college expenses and to do
			equity calculations for your home.


Home Insurance (Home Inventory and Insurance Planning) - provides a way for
			you to keep track of what you own, where it is
			located, what it cost, and any identifying marks.
			Home Insurance uses the same user interface as the
			collectors series and thus each item in your
			inventory can be cataloged using any of 22 
			characteristics (serial #, model #, color, etc.)

			Home Insurance also provides several other features
			to help with your insurance planning.  A life
			insurance estimator will take your current financial
			status and your future plans, and calculate the
			amount of life insurance you need.  An insurance
			records file provides a convient place to store
			vital information about your insurance policies.


Personal Asset Manager (tm) - Combines all three of the above into a single
			integrated system.








***************************************************************************
***************************************************************************
***************************************************************************


EDUCATIONAL


Play 'n' Learn - combines 6 education games (plus an additional 12 variations)
		 for very young children - ages 18 months to 4 years.  These
		 games include:

		 Amanda's Letter Lotto > learn the alphabet
		 Zach-A-Doodle > Etch-A-Sketch type game
		 Color Screen > a very simple game that changes screen colors
		 Color Match > learn colors and the alphabet
		 Word Whirl > learn about words and names
		 Next Number > learn numbers 1-9
		 Black Board Shapes > learn to match shapes


		 The Play 'n' Learn games are also designed to help your
		 learn about using computers.  They teach skills ranging
		 from just getting a response from pushing any key, to
		 multiple key combinations and making menu selections.



COMING SOON - Play 'n Learn II, educational games for children
	      3 to 5 years old.  Your support of Play 'n' Learn, shown
	      by becoming a registered user, will help speed the
	      development of Play 'n' Learn II.

































***************************************************************************
***************************************************************************
***************************************************************************


HOME PRODUCTIVITY


Software in this catagory will be released in 1989 and will include
HOLIDAY MANAGER to help with sending cards for the holidays and
special occassions.



***************************************************************************
***************************************************************************
***************************************************************************


For more information on any of the above write to:


		HomeCraft
		P.O. Box 974
		Tualatin,  OR  97062























If you missed any of the information, push CTRL NUM LOCK to pause the
screen and any other key to restart it.










u missed any of the information, push CTRL NUM LO
```
{% endraw %}

## YOURMENU.DOC

{% raw %}
```




       This manual and software is copyright 1988 by Steven C. Hudgik







       SHAREWARE


       This software is provided as shareware.	This means that you 
       have the opportunity to try Your Menu before you 
       buy it.	If you find this software useful, you are requested to 
       become a registered user.  Registered users receive the most 
       recent version of the software, free updates for one year, 
       printed manual, and free support.

       This software is copyrighted and all rights remain with the 
       author.	However, you are granted permission to make as many 
       copies as you wish, provided that no fee is charged if you 
       provide a copy to someone else.	You may freely distribute For 
       Record Collectors, if you wish, on this basis.  If you need to 
       charge a fee to cover distribution costs, please contact 
       HomeCraft to receive written permission.

       To register as a user send $25 to the address below (VISA and 
       MASTER CARD are accepted).

       HomeCraft
       P.O. Box 974
       Tualatin,  OR  97062


       You may also register using your VISA or MASTER CARD by calling
       503-692-3732 from 8AM to 8PM eastern time.


       Please add $5 for air mail shipment outside North America.



































	 Y O U R    M E N U
	 Hard disk menu and DOS shell
	 Version 1.00

	 This manual and the YOUR MENU software are
	 copyrighted by Steven C. Hudgik.
	 All Rights Reserved.

	 Copyright 1988 - Steven C. Hudgik




	 INTRODUCTION

	 I've tried many hard disk menu systems and have generally 
	 found them to	simplify using a hard disk, but they've also 
	 been difficult to set up.  In some cases you are required to 
	 learn a "programming language" prior to setting up a menu.  
	 YOUR MENU has been designed to avoid that - it is easy to 
	 learn and very simple to use.


	 YOUR MENU is divided into two areas - the menu, which 
	 provides up to 200 selections you can define; and the DOS 
	 shell, which provides access to ten commonly used DOS 
	 functions and utilities.  We'll discuss both of these 
	 areas in detail.


	 INSTALLATION

	 To automatically install YOUR MENU first put the YOUR MENU 
	 disk in the "A" floppy disk drive.  With the DOS A> prompt on 
	 the screen type INSTALL and push ENTER.  As the install 
	 process proceedes you will need to answer several questions 
	 concerning how you wish your system to be set up.

	 The installation will create a new directory called YOURMENU 
	 and copy all of the YOUR MENU files to that directory.  If 
	 you wish, it will modify your AUTOEXEC.BAT file (or create a 
	 new one) to boot YOUR MENU when your computer is turned on.

















	 You will also have the option of creating a new directory, 
	 called DOS, for the DOS utilities YOUR MENU accesses or you 
	 may specify the directory in which these utilities are 
	 located. YOUR MENU needs to use the following files 
	 that are supplied with DOS.

	    DISKCOPY		 SORT
	    FORMAT		 MORE
	    CHKDSK		 FIND

	 YOUR MENU may also be used with a floppy disk system.	For 
	 example, on the computer my kids use (they're 3 and 4 years 
	 old) when they turn on the computer YOUR MENU appears.  They 
	 can select the educational game they want from the menu.  A 
	 total of 12 games are available on two floppy disks (one in 
	 "A" the other in "B").  Thus they can use _their_ computer 
	 without disturbing daddy.  (Yes, the 3 year old can do this 
	 by himself.  He learned by using another program we publish 
	 called Play 'n' Learn).

	 Installing YOUR MENU on a floppy disk is done in the same
	 way as for a hard disk.  Put the floppy you want to have
	 YOUR MENU on in the "A" drive and the original YOUR MENU
	 disk in the "B" drive.  At the B prompt type INSTALL
	 and push ENTER.

	 When asked which disk you want YOUR MENU istalled on push
	 the letter A.







	 USING THE MENU

	 If YOUR MENU is not automatically booted by your AUTOEXEC.BAT 
	 file, go to the directory YOUR MENU is in and type MENU (and 
	 push ENTER) to get started.

	 When YOUR MENU boots up you will see the first screen of menu 
	 selections.  I have entered some examples so you can see how 
	 YOUR MENU works.

	 YOUR MENU can run either in monochrome or color.  To switch 
	 between the two settings push the F1 key.  If you have a 
	 monochrome monitor and it appears there is nothing on your 
	 screen, try pushing F1.  With some monitors when the software 
	 is running in the color mode you may get dark blocks or 
	 nothing on the screen.  Pushing F1 solves this problem.

	 If you wish to get to the DOS prompt, push the ESC key.












	 There are ten pages, each with 20 menu selections.  You can 
	 move from one page to the next using the PgUp and PgDn keys.  
	 To select an option from the menu either push its associated 
	 letter or use the cursor keys to position the scroll bar on 
	 the desired selection and push ENTER.

	 Since I have no way of knowing what software you have you 
	 must enter the information that identifies your software and 
	 tells YOUR MENU which directory it is in.  Push F8 to see the 
	 set up screen where this is done.


	 MENU SELECTION SETUP

	 There are seven lines of information that can be filled in on 
	 the set up screen.  The cursor may be moved up and down, from 
	 one line to the next, using the cursor keys.  Any time the 
	 cursor reaches the end of a line you will hear a beep.  You 
	 can return to the menu at any time by pushing the ESC key.

	 The top line is the menu selection letter.  Push any letter 
	 between A and T.  If a selection has already been entered for 
	 that letter, it will appear on the screen.  If no selection 
	 has been entered, the screen will remain unchanged.  To see 
	 an example push the letter A.

	 The next line is called LINE NAME.  Use this line to enter 
	 the information you want to appear next to the selected 
	 letter on the menu. In the example "WORD PROCESSING" has 
	 been entered.

	 The third line designates the disk drive the selected program 
	 is on.  Usually drives "A" and "B" are for floppy disks and 
	 "C" is a hard disk.  The letter C has been entered in the 
	 example.  You may also have a RAM disk that is designated as 
	 drive "D."  If the program you want to run is on the RAM disk 
	 you can enter D on this line.

	 The next line down is used for the path.  The path tells your 
	 computer which directory it should look in to find the 
	 software you want to run. YOUR MENU will always look in 
	 the root directory first.  If the program you want to run is 
	 not in the root, you need to identify the directory it is in.	
	 If you do not have any directories on your disk (maybe you're 
	 using YOUR MENU on floppies), this line may be left blank.

	 In the example I've provided the word processing program is 
	 in a subdirectory called OFFICE which is located in a 
	 directory called HOUSE.  This is represented as HOUSE/OFFICE.	
	 Notice that a slash is used to separate the subdirectory and 
	 directory.  This could be extended out to three levels as 
	 HOUSE/OFFICE/DESK, which means the DESK subdirectory of the 
	 OFFICE subdirectory in the HOUSE directory.














	 Paths can be thought of in the same way as your house. To 
	 find your computer you may need to go into your house, then 
	 into your home office, and then to your desk.	That's the 
	 path to your computer.  Using those same names it is also a 
	 description of the path your computer follows to get to your 
	 word processing program.

	 The fifth line from the top is where you enter the word that 
	 starts the selected program.  In the example the word 
	 processing program is Word Star.  You normally type WS at the 
	 DOS prompt to start Word Star.  Thus you enter WS on this 
	 line.

	 The Argument line is used for information that is passed to 
	 the program as it is started (not all software has this 
	 capability).  A good example is running a program written in 
	 BASIC.  There are two steps to run a BASIC program - first 
	 you need to load BASIC; then you need to load and run the 
	 program.  These two steps can be accomplished as one, if 
	 both program names are typed at the DOS prompt.  Move 
	 the cursor up to the top and change the letter to "B" to see 
	 an example.

	 In this example we have an invoicing program written in 
	 BASIC. Typing BASICA INVOICE at the DOS prompt would load 
	 BASIC and run the invoicing program.  Notice that BASICA has 
	 been entered as the program name, and INVOICE is entered as 
	 the argument.	This will result in the invoicing program 
	 being run without any intermediate steps.

	 The last line is the Help Line.  Use this line to enter any 
	 additional information about this specific menu selection.

	 Once you have entered everything, push F5 to save it.	The 
	 screen will then return to its original empty condition and 
	 the cursor will on the LETTER line.  You can push ESC to 
	 return to the menu, or push another letter to set up another 
	 menu selection (or edit anyone entered previously).


	 NOTE: If you want to go to the DOS prompt instead of running
	       a program, type the word EXIT on the Program Name
	       line.  Your Menu will bring you to the designated
	       directory and then exit to the DOS prompt.






















	 DOS FUNCTIONS

	 With the menu back on the screen push F3 to use any of ten 
	 DOS functions.  These functions, with their associated F keys 
	 are:

	   F1 - Set Time	     F6 - Check A Disk
	   F2 - Set Date	     F7 - Format A Floppy
	   F3 - List Directories     F8 - Format & Copy System Files
	   F4 - Label Disk	     F9 - Find A File
	   F5 - Copy A Disk	    F10 - List Files In A Directory


	 F1 - SET TIME - Enter the time using the 24 hour clock.

	 F2 - SET DATE - Enter the date as dd/mm/yy.

	 F3 - LIST OF DIRECTORIES - This option will look at the root 
	 on your hard disk and provide an alphabetical list of all the 
	 directories that originate in the root (main) directory.

	 F4 - LABEL DISK - this selection allows you to put a volume 
	 label on any disk. The volume label may be up to 11 
	 characters long.  The volume label is always displayed when 
	 you get a listing of the files on a disk.  Thus the 
	 volume label is a good way to put an identifying label (or 
	 title) on all of your disks.

	 F5 - COPY A DISK - Used to make an exact copy of a floppy 
	 disk.	You will be prompted to put the "source" disk (the 
	 disk to be copied) in the "A" drive and the "target" disk 
	 (the disk to be copied to) in the "B" drive.  If you only 
	 have one floppy disk drive, put the source disk in that drive 
	 to get started and you'll be prompted to change disks when 
	 necessary.

	 F6 - CHECK A DISK - This function will analyze the 
	 directories, files, and the File Allocation Table on the 
	 designated disk and report any problems.  It will also give 
	 you a status report on the RAM memory of your computer.  If 
	 you think you have a problem with a floppy, or your hard 
	 disk, use this function as a first step to check it.

	 F7 - FORMAT - Formats a disk in the "A" floppy disk drive.  
	 The result will be a completely blank, but formatted disk.	
	 (Disks must be formatted before they can be used).  This 
	 function prevents you from accidently reformatting your hard 
	 disk, which would result in your losing everything on your 
	 hard disk.

	 F8 - FORMAT & COPY SYSTEM - Formats a floppy disk in the "A" 
	 drive and puts the DOS operating system on the disk.  This 
	 disk can then be used to boot your computer.  Combined with 
	 an AUTOEXEC.BAT file this disk will boot the computer and run 
	 a program such as YOUR MENU, as described earlier for Play 
	 'n' Learn.











	 F9 - FIND A FILE - Searches your hard disk for any directory 
	 name or filename, or partial filename, you enter.  It 
	 will list the path for all matches that are located.

	 F10 - LIST FILES IN A DIRECTORY - Provides a file listing, in 
	 alphabetical order, of all the files in any directory.  You 
	 will be prompted for the PATH to the directory or 
	 subdirectory you want listed.	You can also use this function 
	 to list the files on a floppy disk by entering the letter 
	 that designates the floppy drive, followed by a colon.  For 
	 example, if you enter A: the files on the floppy disk in the 
	 "A" drive will be listed.


	 To return to the menu push the ESC key.


	 This completes our review of the YOUR MENU functions.	I've 
	 done my best to keep YOUR MENU simple and easy to use, while 
	 providing all of the important functions.  If you are using 
	 YOUR MENU, please become a registered user.  I will be making 
	 improvements and changes based on suggestions from users, and 
	 your registration will insure that you are kept up to date.

	 If you plan on using YOUR MENU on several computers, a site 
	 license is required.  Please contact us for additional 
	 information.


	 Steve Hudgik
	 HomeCraft Computer Products
	 P.O. Box 974
	 Tualatin,  OR	97062



































omputer Products
	 P.O. Box 974
	 Tualatin,  OR	97062







```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1638

     Volume in drive A has no label
     Directory of A:\

    FILE1638 TXT      3701  11-29-89   2:03p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       617  11-30-89  10:40a
    INSTALL  BAT       128  12-26-88   4:18p
    INTRO    DOC      4736  12-02-88   3:25a
    IZZY     BAT         6  11-30-89  10:37a
    MENU     BAT       128  12-30-88   2:36p
    MENU     HLD        32   1-14-88  11:43a
    MENU     OVL       150   1-28-89   4:29p
    MENU1    DSF      3360  12-06-88   9:17a
    MENU10   DSF      3360  12-02-88   3:10a
    MENU2    DSF      3360  12-02-88   3:10a
    MENU3    DSF      3360  12-02-88   3:10a
    MENU4    DSF      3360  12-02-88   3:10a
    MENU5    DSF      3360  12-02-88   3:10a
    MENU6    DSF      3360  12-02-88   3:10a
    MENU7    DSF      3360  12-02-88   3:10a
    MENU8    DSF      3360  12-02-88   3:10a
    MENU9    DSF      3360  12-02-88   3:10a
    OTHER    DOC      6528  10-28-88  11:01p
    PRINT    BAT       384  12-02-88   3:16a
    READ     ME        512  12-02-88   3:15a
    START    EXE     45376  11-19-88   8:18a
    TSUEP    BAT         1  11-30-89  10:37a
    YOURMENU DOC     13696  12-26-88   5:29p
    YOURMENU EXE     68078  12-31-88   8:27a
           26 file(s)     177711 bytes
                          125952 bytes free
