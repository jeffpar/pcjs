---
layout: page
title: "PC-SIG Diskette Library (Disk #837)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0837/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0837"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME MONEY MANAGER"

    Enter transactions in up to 12 check registers, keep track of your
    balance and reconcile your bank statements. You can void, search, edit,
    reconcile, mark as cleared, and consolidate your recorded transactions.
    HMM will support split transactions and keep running totals for each
    account.
    
    You'll know the amount of money you are spending in any of 84
    categories. This program also provides a variety of reports that can
    help you organize your records at tax time or just report on where and
    how much money was spent and on what. On-line help screens are provided
    to guide you as you use the program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0837.TXT

{% raw %}
```
Disk No:  837                                                           
Disk Title: Home Money Manager                                          
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: Home Money Manager IIa                                   
Author Version: 3.00                                                    
Author Registration: $59.00                                             
Special Requirements: Two floppy drives, printer recommended.           
                                                                        
Enter transactions in up to 12 check registers, keep track of your      
balance and reconcile your bank statements.  You can void, search, edit,
reconcile, mark as cleared, and consolidate your recorded transactions. 
HMM will support split transactions and keep running totals for each    
account.                                                                
                                                                        
You'll know the amount of money you are spending in any of 84           
categories.  This program also provides a variety of reports that can   
help you organize your records at tax time or just report on where and  
how much money was spent and on what.  On-line help screens are provided
to guide you as you use the program.                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HMMII.DOC

{% raw %}
```


		 H O M E   M O N E Y   M A N A G E R   I I

	       Copyright 1987, 1988, 1989 - Steven C. Hudgik





    HHH   HHH	MMM	    MMM   MMM	      MMM   IIIIIIIII	IIIIIIIII
    HHH   HHH	MMMM	   MMMM   MMMM	     MMMM   IIIIIIIII	IIIIIIIII
    HHH   HHH	MMMMM	  MMMMM   MMMMM     MMMMM      III	   III
    HHHHHHHHH	MMMMMM	 MMMMMM   MMMMMM   MMMMMM      III	   III
    HHHHHHHHH	MMM  MMMMM  MMM   MMM  MMMMM  MMM      III	   III		    HHH   HHH	MMM   MMM   MMM   MMM	MMM   MMM      III	   III
    HHH   HHH	MMM    M    MMM   MMM	 M    MMM   IIIIIIIII	IIIIIIIII
    HHH   HHH	MMM	    MMM   MMM	      MMM   IIIIIIIII	IIIIIIIII



	   THE HOME BUDGET, CHECKBOOK, AND CREDIT CARD MANAGER





			    HOME MONEY MANAGER II
				VERSION  2.10

			   HomeCraft Computer Products
				 P.O. Box 974
			      Tualatin,  OR  97062
				(503) 692-3732






































	 The two HMMII disks contain version 2.10 of Home Money Manager II
	 dated 06-25-87.  This software has the following files:


	  DISK ONE ******************
		  HMM.EXE - Introduction and copyright notice
		 MENU.PGM - Main Menu and checkbook program
	     HMM-HELP.HLP - Help screen data
	       SET-UP.PGM - Set up account names and formats
		INTRO.DOC - Introductory information
		 MENU.OVL - File required for program to run

	  DISK TWO ******************
		PRINT.PGM - Printed reports and searches
	       CREDIT.PGM - Credit accounts
	       REVIEW.PGM - Reviews month by month budget status
	      SUMMARY.PGM - YTD Summary of budget status
		HMMII.DOC - This documentation for HMM-II
		INTRO.DOC - More detailed introduction
		PRINT.BAT - Batch file to print documentation

	  HMM-II Will Create The Following Files ***********
	       CHECKS.DAT - Check register data files
		 MEMO.DAT - Memos associated with check entries
	       CREDIT.DAT - Credit register data files
	       BUDGET.DAT - Current budget data (actual & targets)
	     REGISTER.DAT - Stores account names and settings



	 ****************************************************************
	 ****************************************************************
	 ****************************************************************
































	 HOME MONEY MANAGER II (HMM-II) IS PROVIDED AS SHAREWARE.  
	 SHAREWARE IS A METHOD OF SOFTWARE DISTRIBUTION THAT ALLOWS 
	 YOU TO TRY THE SOFTWARE BEFORE YOU BUY IT.  SHAREWARE IS 
	 *NOT* PUBLIC DOMAIN OR FREE SOFTWARE. IF YOU LIKE HOME HOMEY 
	 MANAGER II, AND ARE USING IT, YOU ARE REQUESTED TO REGISTER 
	 IT.  THE COST OF REGISTRATION IS $49.

	 SHAREWARE WORKS BASED ON YOUR HONESTY. IF YOU ARE USING HMM-
	 II, PLEASE REGISTER.  YOUR REGISTRATION WILL GET YOU THE 
	 LATEST VERSION OF THE SOFTWARE, THE COMPLETE 100+ PAGE 
	 MANUAL, A FREE COPY OF THE NEXT UPDATE, AND ONE YEAR OF FREE 
	 SUPPORT.  YOUR REGISTRATION FEE WILL ENABLE ME TO CONTINUE 
	 DEVELOPING AND IMPROVING HMM-II.  WITHOUT YOUR SUPPORT WE CAN 
	 NOT AFFORD TO SUPPORT AND IMPROVE HMM-II.


	 PLEASE NOTE THAT THIS MANUAL AND SOFTWARE IS COPYRIGHTED - 
	 1987 BY STEVEN C. HUDGIK.  THIS SOFTWARE AND MANUAL MAY BE 
	 GIVEN AWAY TO OTHERS FREE, BUT MAY NOT BE SOLD OR COMBINED 
	 WITH ANY OTHER SOFTWARE.  NEITHER THIS MANUAL NOR THE HMM-II 
	 SOFTWARE MAY BE DISTRIBUTED AS OTHER THAN SHAREWARE.  NEITHER 
	 THE MANUAL NOR HMM-II SOFTWARE MAY BE INCLUDED AS A PART OF 
	 OR COMBINED WITH ANY OTHER SOFTWARE WHETHER COMMERCIAL, 
	 SHAREWARE, OR PUBLIC DOMAIN.






	 HARDWARE REQUIREMENTS


	 HMM-II requires an IBM PC, XT, AT or PS/2 computer or 
	 compatible with 256K of memory.  A printer with a minimum of 
	 80 columns is needed for printed reports.




























	 USING HOME MONEY MANAGER II


	     Hard disk users should copy all of the files, from both 
	 HMM-II disks, into the same directory on their hard disk.

	     Floppy disk users should make backup copies of the two 
	 HMM-II disks.	Then place the #1 disk (the disk with HMM.EXE 
	 on it) into the "A" drive.  When you want to use the CREDIT 
	 registers, REVIEW function, SUMMARY function or the PRINTED 
	 reports you will need to put the #2 disk in the "A" drive 
	 before selecting any of these from the Main Menu.  Put the #1 
	 disk back in the "A" drive before pushing F10 to return to 
	 the Main Menu.

	     HMM-II is started by typing HMM at the DOS prompt. When 
	 HMM-II boots up it checks for valid HMM-II data files.  If 
	 you are using HMM-II for the first time, an error message 
	 will appear.	Follow the directions on the screen to create 
	 new data files.  If you are using floppy disks, put a blank 
	 formatted disk in the "B" disk drive.	This disk will be used 
	 by HMM-II for data storage.  (Read the SET-UP section for 
	 more detailed information).


	 The Function Keys

	     The function keys provide a way for you to increase the 
	 speed of responding to HMM-II prompts.  There are three in 
	 particular that I'd like to highlight.

	 F8 - Pushing the F8 key will bring up the HELP screen for the 
	 prompt you are at.  Anytime you need additional information about
	 HMM-II push F8 (or you can also enter a question mark) to see 
	 a help screen.

	 This manual only breifly describes HMM-II.  If you need 
	 additional information, push F8 to see the help screen that 
	 discusses the area you are in. (Note: the HMM-HELP.HLP file 
	 must be on the same disk as the module you are using.	
	 Because of limited space the help files are on disk one only.	
	 If you are using disk #2, put disk #1 in the "A" drive before 
	 pushing F8.  After reading the help screen put the #2 disk 
	 back in the "A" drive).*
	  
	 F9 - This key provides a quick way to move backwards through 
	 the menus.  When you push F9 you will be moved back to the 
	 previous menu.
	  
	 F10 - Here is your shortcut to the Main Menu.	At almost any 
	 point, in any part of HMM-II, you can push F10 to go directly 
	 back to the Main Menu.
	  
	     The other function keys, F1 through F7, have functions 
	 related to specific parts of HMM-II.  Prompts at the bottom 
	 of the screen will tell you what function keys can be used 
	 and what each key will do.











	 Getting Started


	     The first menu you'll normally see is the HMM-II Main Menu. 
	 when you boot HMM for the first time an error screen will appear
	 that says the HMM-II data can not be found.  Push F1 to change
	 the disk drive for data storage to the appropriate letter for
	 your computer.  This is usually C for hard drives and B for
	 floppy systems.

	     You can also change the drive used for data storage by 
	 pushing #7 when the Main Menu is on the screen.


	 <7> Change Data Disk Drive

	     HMM-II allows you to store data on disk drives "A" 
	 through "P."  When you first boot HMM-II it will have a 
	 default setting of "B."  The current setting will be 
	 displayed in brackets on the #7 line of the Main Menu.  To 
	 change this push #7 and then select a letter from A to P. 

	     If you should ever get a "Path Not Found" error message, 
	 then go to the Main Menu and be sure that the drive set for
	 data storage is a drive that really exists.


	 <6> Set-Up

	     Push #6 on the Main Menu to create new data files 
	 so they'll be ready for HMM-II to put data in them.  This 
	 process reserves space on your disk so you won't get a disk 
	 full error message part way through the year.

	     Before using HMM-II for the first time go to the Set Up
	 menu and Create New Data files.

	     Creating New Data files (or a new data disk) makes blank
	 files and erases any data entered previously.	If you are using
	 a floppy disk system, place a formatted disk in the "B" drive.
	 This is the drive normally used for data disks.

	     Push #8 to Create A New Data Disk. You'll then be asked 
	 to enter a code to proceed.  This is a safety feature because 
	 this function will erase any existing data.  The code is 203 
	 - the area code for Connecticut.

	     I'd suggest that you make a trial run the first time you 
	 use HMM-II.  This will allow you to learn how the software 
	 works before you actually use it.  For this trial run use the 
	 default settings for making a new data disk.**















	     NOTE: At the prompt that allows you to select between 
	 making a completely new data disk, or new check and credit 
	 registers only, select a complete new data disk.  You would 
	 make new check and credit registers only when starting a new 
	 year or clearing data files.  Making a complete new data disk 
	 erases and makes all new blank data files, including a new
	 REGISTER.DAT file.  This file is used to store the names of
	 your accounts, payees, etc.  If you make new check and
	 credit registers only, you'll save the names you've entered
	 for your accounts, expenses, etc.

	     The next step is to enter the names you want to use for 
	 your check registers, sources of income, expense catagories, 
	 etc.  The choices on the left side of the Set Up Menu allow 
	 you to enter and change these names.  The names you enter 
	 here will be displayed on the screen when needed in the 
	 future.

	     One set of names are called Standard Payee Names.	These 
	 are the names of people of businesses to whom you write 
	 checks.  Once entered here in set-up, these names can be 
	 quickly entered in a check register (as the payee).  You can 
	 also enter an address for each name.  This address can then 
	 automatically be printed on checks.***

	     Names of registers, budget catagories & payees can be changed 
	 at any time using these same screens.	Just type the new 
	 names over the old entry.


	     HMM-II also provides a budgeting feature that allows you 
	 to set up a budget and then monitor how well you stay within 
	 that budget.  You will first need to date your budget periods by
	 pushing #7 on the Set Up Menu.  You can set up budget periods on a 
	 monthly, bi-weekly, or twice a month basis.

	     Once your budget periods are set up, use the Create A 
	 Budget feature to enter your budget goals for each income and 
	 expense catagory.  HMM will automatically put the correct amount
	 in each budget period.

	     Before using HMM-II to print checks you will need to set 
	 up your check format.	You can select the check size being 
	 used, position each item on the check, and select how the 
	 printed check will look.  Once you've set up your check 
	 format use the test print feature to confirm that it's 
	 correct.  Use plain paper for the test print and then hold 
	 it, and a check, up to a light in order to see how well they 
	 match.

















	 <1> The Checking, Savings and Cash Registers

	     This section of HMM-II describes how to enter 
	 transactions in a check register, keep track of your balance 
	 and reconcile your bank statements (i.e. make sure that 
	 neither you or the bank made a mistake).  There are 12 check 
	 registers available, allowing you to keep 12 separate 
	 checkbooks.  The capacity of each register can be set using 
	 the SET UP module (#6 on the Main Menu).

	     This does not mean that you need to have twelve 
	 physically separate checking (or they could be savings or 
	 cash) accounts.  You may wish to allocate the money that is 
	 physically only in one account for several purposes.	To do 
	 this, name one checkbook for each purpose.  HMM-II can then 
	 add the appropriate registers together to give you a combined 
	 total to match against your bank statement.

	     For example, my wife and I like to save a little money 
	 throughout the year for our vacation.	So, whenever we can, 
	 we put a few dollars into our savings account.  We're also 
	 saving for my daughter's education in the same account.  Thus 
	 we have three account names in HMM-II for this one savings 
	 account; SAVINGS, VACATION and EDUCATION.  If our HMM-II 
	 register for vacation shows a zero balance, even though there 
	 is still money in the checking account, we know that the 
	 money we have is set aside for other things and can not be 
	 spent.  This is a very powerful feature of HMM-II as it 
	 allows you to set a financial goal (i.e. to go to Hawaii) and 
	 save for it by defining a separate checkbook/savings register 
	 to keep track of the money being saved for that goal.

	     Once a checkbook is established, you may never need to 
	 set it up again.  You can keep entering checks, as you write 
	 them, and HMM-II will enter them in your budget on the 
	 correct dates.  You do not need to start a new check 
	 register, even when the new year starts.

	     There are times when you may write a check to pay for 
	 several different items.  You'll then need to divide that 
	 check among several account numbers.  HMM-II allows you to do 
	 this and it keeps track of your entries so you can see when 
	 the total of the individual entries matches the amount of the 
	 check.  This is called a split transaction.

	     The check entry screen is designed to look like a single 
	 line in a check register.	Enter the appropriate 
	 information at each location on the line.  Pushing ENTER 
	 advances the cursor to the next location.  Pushing F3 moves 
	 the cursor back to the previous location.

	     You can enter a standard payee name by entering the 
	 number that appears next to that name or by typing the first 
	 three letters of the payee name you want to enter.













	     You can also decide whether or not to use the budget and 
	 automatic credit payment features.  A toggle is provided that 
	 allows you to turn the budget and credit registers on and 
	 off.  With the budget off, no values will be entered in the 
	 budget records when a check is entered.  If the budget is on, 
	 then each check or deposit will also be recorded in the 
	 budget.

	     With the credit registers on, when you write a check to 
	 make a payment on a credit account, that payment will also 
	 automatically reduce the amount due in the credit register.  
	 If the credit register is off, this interaction will not take 
	 place.

	     Using HMM-II with the budget or credit registers off will 
	 increase speed at which HMM-II operates.  If you are not 
	 using the budget, you should turn it off.  If you are not 
	 using the credit registers, you should turn them off.



	 Direct Transfers From One Register To Another

	     Go back to the screen that lists the names of the 12 
	 check registers.  There is one other function we need to 
	 discuss.

	     In addition to the 12 registers, at this prompt you can 
	 also select to transfer funds directly from one register to 
	 another.  Enter the letter "T" and a series of questions will 
	 appear asking for the register the funds are being 
	 transferred from, the register they are going to, the amount, 
	 a check number (if you've written a check to make the 
	 transfer), and the date.  A final prompt will give you a 
	 chance to check the information before it is entered in the 
	 register.  If everything is correct, push the letter "Y" and 
	 the transfer will be recorded in the two registers involved.  
	 It will not be recorded in the budget.

	     There are several circumstances in which you'd want to 
	 use this direct transfer function.

	     An example would be if you have split the balance in your 
	 checking account among several HMM-II registers, you may wish 
	 to transfer money from one register to another.  For example, 
	 you might want to transfer funds from the register that keeps 
	 track of the money you're saving for an emergency to the 
	 register used for paying your daughter's college expenses.  
	 You have not written a check or actually moved any funds.	
	 All that has been done is that you've changed the allocation 
	 for some of your money.













	     If you are using a check register to keep track of your 
	 cash expenses, when you write a check for cash you would not 
	 want that check entered in the budget.  This is because the 
	 money the check was written for will be entered in the budget 
	 when you spend the cash.




	 REGISTERS - MISCELLANEOUS FUNCTIONS


	     The Miscellaneous Functions allow you to review your 
	 entries, void or edit any entry, reconcile your accounts and 
	 perform other functions.

	     Go back to the Check Register Menu and look at choice 
	 "<2> - Miscellaneous".

	     Next you'll be asked to pick the specific Check Register 
	 you want to use.

	     You should then see a list of the first ten checks in the 
	 register and a window at the bottom of the screen containing 
	 a menu with 9 choices.  Before we look at the items on the 
	 menu let's see how to look through the entries in the 
	 register.


	     The up and down cursor keys are used to move the cursor 
	 from one entry on the list to another.  Push the down cursor 
	 key and the cursor will move down by one entry.  When the 
	 cursor reaches the end of the list the next nine entries in 
	 the register will be displayed  The last, 10th entry on the 
	 previous page, becomes the first entry on the new page.

	     You can also use the PgUp and PgDn keys to move through 
	 the register by pages.  The HOME key will return you to the 
	 beginning of the register.  The END key moves you to the last 
	 entries in the register.


	     As you select each item in the menu at the bottom of the 
	 screen, prompts will appear on the screen that tell you what 
	 to do next.

	     When you get your monthly bank statement showing which 
	 checks have cleared the bank, you can then mark off those 
	 checks.  (With the cursor on the entry that has cleared push 
	 #6).  You can then reconcile and HMM-II will tell you what 
	 your actual balance is and give you the balance you should 
	 see on the bank statement.













	     In Miscellaneous HMM-II can search for check numbers in 
	 the register,	list all of the checks starting from the 
	 beginning of the register, find the 10 oldest checks that 
	 have not cleared the bank, or find checks based on their 
	 date.	Once you find the check you are looking for, you can 
	 print out the information associated with that check.	You 
	 can even have HMM-II print a copy of that check.



	 <2> Credit Registers


	     The Credit Registers work the same way as the Check 
	 Registers.  If you want to follow your credit purchases and 
	 keep track of how much you owe to whom, use a Credit Register 
	 to do it for you.  Like a Check Register, each Credit 
	 Register allows split transactions and keeps a running 
	 balance for your credit accounts.

	     Credit purchases are entered on a screen similar to the 
	 Check Register screen.  However, you don't need to enter 
	 payments in the Credit Register.  When a check, written to 
	 make a payment on a credit account, is entered in the Check 
	 Register, it will also automatically decrease the balanced 
	 owed in the appropriate Credit Register.  Thus payments on a 
	 credit account only need to be entered once.

	     You can name up to twelve credit registers and set the 
	 capacity for each register.	The features available for the 
	 Credit Registers are slightly different, but like the Check 
	 Registers you can search for a date, list the entire 
	 register, and void or edit any transaction.

	     Now let's move on to the third item on the Main Menu.



	 <3> Review Budget

	     This module allows you to look up and review the totals 
	 for any budget period.  The budget period can include an 
	 entire month, half of a month or two weeks depending on how 
	 you have defined your budget periods.	For example, you could 
	 look at what you have budgeted and spent for the month of 
	 March.  The REVIEW function will also list your total 
	 budgeted income and expenses, as well as your actual total 
	 income and expenses for a budget period.  In addition, if 
	 you've made any errors or you need to update it, you can make 
	 changes in your budget from the review screen.















	 <4> Summarize Current Budget Status

	     This function is very similar to REVIEW except that 
	 instead of looking at a single budget period, you get a 
	 summary of your budget up to any point in the year.  This can 
	 be a year-to-date (YTD) summary or a summary that includes 
	 the entire year.  Reports can be printed based on a calendar
	 or fiscal year.  Fiscal years require that you set up monthly
	 budget periods.


	 <5> Search / Printed Reports

	     HMM-II provides a large number of printed reports. You 
	 can sort your data files by budget catagory, by payee name, 
	 or get a year to date summary. BE SURE YOUR PRINTER IS TURNED 
	 ON BEFORE GETTING A PRINTED REPORT!




	 Home Money Manager II is published by:

	     HomeCraft
	     P.O. Box 974
	     Tualatin,	OR   97062


	 Because of the available disk space this manual is an 
	 abbreviated version of the full HMM-II manual.  We have tried 
	 to cover all of the important aspects of HMM-II.  Combined 
	 with the extensive help screens you should have enough 
	 information to use HMM-II.  However, HMM-II is a very large 
	 and detailed program and not all of the features are 
	 documented here or in the help screens.	A 100+ page 
	 manual is required to provide that full documentation.  A 
	 copy of this manual is provided to all users who register 
	 with us.

	 We are continuing to improve and update both the 
	 documentation and software.  For example, we hope to reduce 
	 the program code size in the future to provide more room for 
	 documentation on disk.  If you have any comments or 
	 suggestions, please send them to us at the above address. (We 
	 will respond to letters from registered users, and as time 
	 permits to suggestions from non-registered people).




















	  * To save disk swapping you can delete some files from
	  the #2 disk and then copy the HMM-HELP.HLP file to the
	  #2 disk.  For example, if you are not using the Credit
	  Registers you could delete the CREDIT.PGM file.  Or you
	  could also move some of the files to a third disk and
	  have HMM-HELP.HLP on all three disks.



	  ** HMMII can record a total of 3200 transactions per set
	  of data files.  Normally 2100 are set aside for the Check
	  registers.  If you need more you can select the expanded
	  check registers.  This will reduce the number of
	  transactions possible in the Credit Registers to provide
	  more room in the Check Registers.



	  *** You can also preset an account number that will be
	  associated with each payee name.  Any time you select
	  that payee name the account number will automatically
	  be entered and the cursor will skip directly to the
	  amount line.

	  Each budget catagory can have an amount associated with
	  it.  Each time that budget catagory is entered the
	  amount will automatically be entered and the cursor will
	  skip to the memo line.  Thus it is possible to select
	  your morgage company as the payee and have the payee name,
	  account number, and amount all automatically entered.



























e payee name,
	  account number, and amount all automatically entered.











```
{% endraw %}

## INTRO.DOC

{% raw %}
```


  
			     HOME MONEY MANAGER II
				 VERSION  2.1x

			   HomeCraft Computer Products
				 P.O. Box 974
			      Tualatin,  OR  97062
				(503) 692-3732



		    This software has the following files:


		  HMM.EXE - Introduction and copyright notice
		 MENU.EXE - Main Menu and checkbook program
	       SET-UP.EXE - Set up account names and formats
		INTRO.DOC - This introduction
		PRINT.EXE - Printed reports and searches
	       CREDIT.EXE - Credit accounts
	       REVIEW.EXE - Reviews month by month budget status
	      SUMMARY.EXE - YTD Summary of budget status
		HMMII.DOC - Documentation for HMM-II
		INTRO.DOC - This introduction
		 MENU.OVL - File required to run HMM-II
	       BRUN10.EXE - File required to run HMM-II
		ARC-E.COM - File to extract archived files
	     HMM-HELP.HLP - Help files

	  HMM-II Will Create The Following Files ***********

	       CHECKS.DAT - Check register data files
		 MEMO.DAT - Memos associated with check entries
	       CREDIT.DAT - Credit register data files
	       BUDGET.DAT - Current budget data (actual & targets)
	     REGISTER.DAT - Stores account names and settings

	 ****************************************************************
	 ****************************************************************


	     Home Money Manager II is an advanced home checkbook and
	 budget software package.  It allows you to track check, credit,
	 and cash account activities and get reports that summarize your
	 financial activities.

	     HMM-II can print checks (nearly any size and format - just
	 order them from your bank as you do now).  HMM-II can track
	 tax deductible purchases/donations.  You can edit an entry at
	 any time, either when you're first making that entry, or any
	 time after that - HMM-II will update all related records.

	     HMM-II can track 12 checking accounts, 12 credit accounts,
	 and over 3000 transactions per year (on a single floppy disk!).
	 84 budget catagories are available, plus there are an additional
	 800 expense catagories.  I think you'll find HMM-II to be complete
	 and flexible.


	 SYSTEM REQUIREMENTS: IBM PC, XT, AT or compatible with 256K,			 two disk drives, and DOS 2.0 or later.

	 ****************************************************************
	 ****************************************************************


  USER-SUPPORTED SOFTWARE

	    This software has been placed in circulation under the 
	 user supported concept.  Non-profit groups and individuals 
	 are encouraged to make copies of this disk and distribute it 
	 to their members and friends as long as the software is 
	 provided at no cost.  No distribution fees may be charged 
	 without express written permission from the author and 
	 publisher.

	    Under the user-supported concept, you are given a 
	 complete, working software free. If you find you are using 
	 this software, a contribution of $29.00 is suggested. This will
	 help cover the cost of bug fixes, improvements, postage, 
	 telephone bills, etc.

	     The contribution will make you a registered user.	As a 
	 registered user you are entitled to updates, support, and a 
	 current copy of the user's manual and software.
	 A registration form can be displayed and printed from a
	 prompt on the second HMM-II screen.  Or send $29.00 with your
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

	      For more information on HMM-II or other HomeCraft 
	 software products contact:

	       Steve Hudgik
	       HomeCraft Computer Products
	       P.O. Box 974
	       Tualatin,  OR  97062 

	     We specialize in data base software for collectors.  If
	 you collect records, books/magazines, photographs, comic
	 books, films/videos, or baseball cards.  We have software for
	 you.  Plus we're developing more weekly, so write for
	 information.
lms/videos
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

This series is unique in that each of the programs has three levels
of operation providing screens for beginning collectors through professionals.
Thus you only need to catalog the information that is important to you.

The following software is a part of the collectors series:


	FOR RECORD COLLECTORS (LPs, 45s, CDs, cassettes, etc.)
	FOR RECORD COLLECTORS - CLASSICAL MUSIC VERSION
	FOR RECORD COLLECTORS - Jazz Version
	BOOK MINDER (Books and magazine articles)
	FOR COMIC BOOK COLLECTORS (comic books)
	FOR PHOTOGRAPHERS (Slides, negatives and prints)
	THE FILM & VIDEO TAPES (movies, TV shows & home videos)
	FOR SPORTS CARDS (baseball cards, football, etc.)
	THE INFORMATION INDEX (Misc. information such as
	  recipes, dieting instructions, jokes, trivia,
	  exercise instructions, etc.).
	FOR COIN COLLECTORS
	FOR ANTIQUE DOCUMENTS
	FOR STAR PERFORMERS (memorabilia - Elvis, sports, etc.)
	FOR SPACESHIPS
	FOR STAMP COLLECTORS
	FOR SHIP MODEL COLLECTORS
	FOR GUN COLLECTORS (available 1/30/90)


Plus there's more collector's software on the way!



THE SUPER UTILITIES FOR COLLECTORS


To add more flexibility to the software in our collector's series we have
developed the Super Utilities for collectors.  These add-on utilities
provide the following functions:

   <> User defined report formats.  You can set up your reports to
      look like you want them.	Supports wide carriage printers.

   <> Any/all lines can be indexed and alphabetized.

   <> Multiple level sorts can be done.  Thus, for example, in Book
      Minder you can get a listing of books in alphabetical order by
      author with each author's books listed in alphabetical order by
      title.

   <> The ability to create "child" databases using the results of a search/
      sort to create the new database.


***************************************************************************
***************************************************************************
***************************************************************************

HOME FINANCIAL SOFTWARE


Home Loan (The Financial Calculator) - Home Loan not only calculates the
$35.00			monthly payment for nearly any type loan, it
			provides tables showing the effects of various loan
			options at a glance.  Calculation of amortization
			tables, the value of an annuity, present value, and
			future value are also provided.  In addition, Home
			Loan has special sections to help plan for your
			retirement, calculate the value of your IRA, plan
			for your children's college expenses and to do
			equity calculations for your home.


Home Insurance (Home Inventory and Insurance Planning) - provides a way for
$59.95			you to keep track of what you own, where it is
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


Home Money Manager IIa - home budgeting and checkbook software.  Includes
$29.00			 check printing, tracking of tax deductible
			 transactions, unlimited split transactions, over
			 800 expense catagories, credit card tracking, and
			 many more advanced features.

***************************************************************************
***************************************************************************
***************************************************************************


EDUCATIONAL


Play 'n' Learn - combines 6 education games (plus an additional 12 variations)
$10.00		 for very young children - ages 18 months to 4 years.  These
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



***************************************************************************
***************************************************************************
***************************************************************************


For more information on any of the above write to:


		HomeCraft
		P.O. Box 974
		Tualatin,  OR  97062























If you missed any of the information, push CTRL NUM LOCK to pause the
screen and any other key to restart it.










u missed any of the information, push CTRL NUM LOCK to pause 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0837

     Volume in drive A has no label
     Directory of A:\

    ARCE     COM      7168   9-28-87   9:20p
    FILE0837 TXT      1925   3-22-90   4:24p
    FLOPPY   BAT      1664   1-28-89  10:26a
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       694   3-24-89  11:17a
    HARDDISK BAT       768  12-06-88   9:37a
    HMM      ARC     28628   8-21-89   8:03p
    HMMPGM   ARC    287330  12-15-89  10:12a
    MENU     OVL       150   1-01-86  11:59p
    OTHER    DOC      5888  12-07-89   9:51p
    READ     ME       1920   2-18-89   5:21p
           11 file(s)     336173 bytes
                           22528 bytes free
