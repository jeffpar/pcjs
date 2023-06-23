---
layout: page
title: "PC-SIG Diskette Library (Disk #3103)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3103/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3103"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```


			      CHECKBOOK ASSISTANT


			    READ.ME  ... PLEASE !!!



	 It is an acknowledged fact that many users of software don't
	 read "user manuals," but rather rely on their own intuition.
	 This is especially true of those who are computer literate
	 and DOS experts.  If this describes you, then this READ.ME
	 file may be all that you need.  Otherwise, it is recommended
	 that you take the time to print the "user manual" that is
	 contained in the file MANUAL.DOC.

	 The "user manual" can be printed by putting the disk labeled
	 DISK #1 into disk drive A, make sure your printer has an ample
	 supply of paper (the manual contains 134 printed pages) and
	 enter the following commands at the DOS prompt:

	       A:                   (ensures drive A is the default)
	       COPY MANUAL.DOC PRN  (copies the manual documentation
				     file in drive A to the printer)








	 COMPUTER LITERATES & EXPERTS:

	 Although we believe CHECKBOOK ASSISTANT is very easy to use,
	 there are a few items we feel deserve mention to ensure your
	 first session with CHECKBOOK ASSISTANT is a success.



	 DISK DRIVE/DIRECTORY:

	 This shareware version of CHECKBOOK ASSISTANT operates only
	 from the default drive and directory.



	 DISK SETUP:

	      HARD DISK USERS:

	      Make a subdirectory on your disk (suggested name is CA)
	      and copy the CHECKBOOK ASSISTANT files into the created
	      subdirectory.  The minimum required files are:

			    CA.EXE
			    CA.OVL
			    CA.HLP
			    LICENSE.DOC

	      Ensure this subdirectory is the current directory and
	      enter CA at the DOS prompt.





	      FLOPPY DISK USERS:

	      You require two (2) blank formatted disks.  ONLY one (1)
	      of these disks should be formatted with the SYSTEM - the
	      /S option.   Label these disks as follows:

		    PROGRAM - Working Copy (formatted WITHOUT the
					    SYSTEM)
		    PRIMARY Data Disk      (formatted WITH the SYSTEM)

	      Copy the following files from the CHECKBOOK ASSISTANT -
	      "DISK #1" distribution disk to your new and formatted:

			PROGRAM - Working Copy disk:
				CA.EXE
				CA.OVL

	      Put your PROGRAM - Working Copy disk aside. COPY THE
	      SAME "CA.OVL" FILE TO YOUR:

			  PRIMARY Data Disk
				CA.OVL

	      Finally, copy the following files from the CHECKBOOK
	      ASSISTANT - "DISK #2" distribution disk to the your:

			  PRIMARY Data Disk
				CA.HLP
				LICENSE.DOC

	      Put your PROGRAM - Working Copy disk in drive A.  Enter
	      A: at the DOS prompt (to ensure that disk drive A is the
	      default) then enter CA to start CHECKBOOK ASSISTANT.





	 CONFIGURATION OPTIONS:

	      COLOR:

	      CHECKBOOK ASSISTANT automatically determines the type
	      of display in your system and starts in either color or
	      monochrome, as appropriate.  If you are using a CGA
	      (Color Graphic Adaptor) card with a composite monitor
	      capable of displaying only in monochrome, or if you are
	      using a laptop with a LCD display, it is necessary that
	      you force CHECKBOOK ASSISTANT into the monochrome mode.
	      To start CHECKBOOK ASSISTANT in the monochrome mode,
	      enter CA M at the DOS prompt.



	      PRINTER:

	      CHECKBOOK ASSISTANT assumes your printer is capable of
	      printing the IBM Graphics Set.  If your printer does not
	      support IBM Graphics, then you must overide this default
	      and start CHECKBOOK ASSISTANT with the P option.  Enter
	      CA P at the DOS prompt.






	 COMMAND LINE ARGUMENTS:

	 CHECKBOOK ASSISTANT accepts either or both of the following
	 command line arguments:

	      M  - starts CHECKBOOK ASSISTANT in the monochrome mode.

	      P  - overrides the default printer support for the IBM
		   Graphic mode and forces printer output to only non-
		   graphic characters.

	 The above options MUST be capitalized, and a space MUST exist
	 between the CA command and each option as shown in the
	 following examples:

	      CA M    (starts CHECKBOOK ASSISTANT in the monochrome
		       mode)
	      CA P    (starts CHECKBOOK ASSISTANT in the non-graphic
		       printer mode)
	      CA M P  (starts CHECKBOOK ASSISTANT in BOTH the mono-
		       chrome mode and non-graphic printer mode)





	 DATA FILES:

	 The first time CHECKBOOK ASSISTANT is run, no data files
	 exist and the program will prompt whether the data files
	 should be made.  To make and initialize the data files, press
	 either the 'Y' or 'y' key.  The following database files will
	 be written and initialized on the default drive:

		   CAPFLyy.DB     PORTFOLIO DATA FILES
		   CAPFLyy.IDX        "     INDEX FILES
		   CAPLIFyy.DB    LIABILITY DATA FILES
		   CAPLIFyy.IDX       "     INDEX FILES
		   CAPREGyy.DB    ACCOUNT REGISTER DATA FILES
		   CAPREGyy.IDX       "            INDEX FILES
		   CAPCCDyy.DB    CREDIT CARD DATA FILES
		   CAPCCDyy.IDX       "       INDEX FILES
	   (where yy in the above files represent the current year)




	 FINANCIAL PORTFOLIO:

	 It is extremely important the first time you use CHECKBOOK
	 ASSISTANT, that you spend a little time in the PORTFOLIO
	 category entering information pertaining to the BANKING
	 accounts, INCOME, and LIABILITIES that CHECKBOOK ASSISTANT
	 is going to handle.

       ***************************************************************
       * The FINANCIAL PORTFOLIO section is the heart of the program.*
       * Without any information in this section, you can expect     *
       * CHECKBOOK ASSISTANT to do absolutely NOTHING.               *
       ***************************************************************





	 MONTHLY TRANSACTION FILES:

	 In addition to the database files mentioned above, a MONTHLY
	 TRANSACTION file is generated the first time that CHECKBOOK
	 ASSISTANT is run during a month for which a current MONTHLY
	 TRANSACTION file does not exist.  The MONTHLY TRANSACTION
	 file takes the following format:

		MMMYY.DB     (monthly database file, where MMM are
			      the first three letters of the current
			      month and YY is the last two digits of
			      the current year).
		MMMYY.IDX    (associated index file).

	 CHECKBOOK ASSISTANT uses information within the FINANCIAL
	 PORTFOLIO section when it "makes" a MONTHLY TRANSACTION
	 file.  The MONTHLY TRANSACTION file contains information
	 concerning your bank account(s), income and liabilities.
	 Whenever CHECKBOOK ASSISTANT is run for the first time
	 during a month, the MONTHLY TRANSACTION file for that month
	 is not present.  The program then prompts whether it should
	 make one.  IF YOU HAVE NOT ADDED YOUR INFORMATION TO THE
	 "FINANCIAL PORTFOLIO" SECTION  (account, income and
	 liabilities) THEN ANSWER THIS PROMPT "NO."   Any information
	 added to the FINANCIAL PORTFOLIO section during the month
	 will NOT appear in the present MONTHLY TRANSACTION file.
	 Only after the next MONTHLY TRANSACTION file is made will
	 all the information currently available (in the FINANCIAL
	 PORTFOLIO) be carried over.





	 ON LINE HELP:

	 On-line help is always available by pressing function key
	 F10.  The help information is context sensitive and provides
	 brief descriptions about the current screen and area of the
	 program where help is requested.  The HELP files also serve
	 as a mini tutorial.





	 CONFIG.SYS FILE:

	 CHECKBOOK ASSISTANT requires a "FILES = 14" (or greater)
	 statement in the CONFIG.SYS file.  Information about
	 CONFIG.SYS files is available in the "USER MANUAL."



	 THANK YOU for your interest in this product.
	 Enjoy using the CHECKBOOK ASSISTANT.

			  ALLIZ Software
			  12818 Wrexham Rd.
			  Herndon, VA 22071
			  (703) 476-5014
```
{% endraw %}

## CA.DOC

{% raw %}
```


			      CHECKBOOK ASSISTANT


			    READ.ME  ... PLEASE !!!



	 It is an acknowledged fact that many users of software don't
	 read "user manuals," but rather rely on their own intuition.
	 This is especially true of those who are computer literate
	 and DOS experts.  If this describes you, then this READ.ME
	 file may be all that you need.  Otherwise, it is recommended
	 that you take the time to print the "user manual" that is
	 contained in the file MANUAL.DOC.

	 The "user manual" can be printed by putting the disk labeled
	 DISK #1 into disk drive A, make sure your printer has an ample
	 supply of paper (the manual contains 134 printed pages) and
	 enter the following commands at the DOS prompt:

	       A:                   (ensures drive A is the default)
	       COPY MANUAL.DOC PRN  (copies the manual documentation
				     file in drive A to the printer)








	 COMPUTER LITERATES & EXPERTS:

	 Although we believe CHECKBOOK ASSISTANT is very easy to use,
	 there are a few items we feel deserve mention to ensure your
	 first session with CHECKBOOK ASSISTANT is a success.



	 DISK DRIVE/DIRECTORY:

	 This shareware version of CHECKBOOK ASSISTANT operates only
	 from the default drive and directory.



	 DISK SETUP:

	      HARD DISK USERS:

	      Make a subdirectory on your disk (suggested name is CA)
	      and copy the CHECKBOOK ASSISTANT files into the created
	      subdirectory.  The minimum required files are:

			    CA.EXE
			    CA.OVL
			    CA.HLP
			    LICENSE.DOC

	      Ensure this subdirectory is the current directory and
	      enter CA at the DOS prompt.





	      FLOPPY DISK USERS:

	      You require two (2) blank formatted disks.  ONLY one (1)
	      of these disks should be formatted with the SYSTEM - the
	      /S option.   Label these disks as follows:

		    PROGRAM - Working Copy (formatted WITHOUT the
					    SYSTEM)
		    PRIMARY Data Disk      (formatted WITH the SYSTEM)

	      Copy the following files from the CHECKBOOK ASSISTANT -
	      "DISK #1" distribution disk to your new and formatted:

			PROGRAM - Working Copy disk:
				CA.EXE
				CA.OVL

	      Put your PROGRAM - Working Copy disk aside. COPY THE
	      SAME "CA.OVL" FILE TO YOUR:

			  PRIMARY Data Disk
				CA.OVL

	      Finally, copy the following files from the CHECKBOOK
	      ASSISTANT - "DISK #2" distribution disk to the your:

			  PRIMARY Data Disk
				CA.HLP
				LICENSE.DOC

	      Put your PROGRAM - Working Copy disk in drive A.  Enter
	      A: at the DOS prompt (to ensure that disk drive A is the
	      default) then enter CA to start CHECKBOOK ASSISTANT.





	 CONFIGURATION OPTIONS:

	      COLOR:

	      CHECKBOOK ASSISTANT automatically determines the type
	      of display in your system and starts in either color or
	      monochrome, as appropriate.  If you are using a CGA
	      (Color Graphic Adaptor) card with a composite monitor
	      capable of displaying only in monochrome, or if you are
	      using a laptop with a LCD display, it is necessary that
	      you force CHECKBOOK ASSISTANT into the monochrome mode.
	      To start CHECKBOOK ASSISTANT in the monochrome mode,
	      enter CA M at the DOS prompt.



	      PRINTER:

	      CHECKBOOK ASSISTANT assumes your printer is capable of
	      printing the IBM Graphics Set.  If your printer does not
	      support IBM Graphics, then you must overide this default
	      and start CHECKBOOK ASSISTANT with the P option.  Enter
	      CA P at the DOS prompt.






	 COMMAND LINE ARGUMENTS:

	 CHECKBOOK ASSISTANT accepts either or both of the following
	 command line arguments:

	      M  - starts CHECKBOOK ASSISTANT in the monochrome mode.

	      P  - overrides the default printer support for the IBM
		   Graphic mode and forces printer output to only non-
		   graphic characters.

	 The above options MUST be capitalized, and a space MUST exist
	 between the CA command and each option as shown in the
	 following examples:

	      CA M    (starts CHECKBOOK ASSISTANT in the monochrome
		       mode)
	      CA P    (starts CHECKBOOK ASSISTANT in the non-graphic
		       printer mode)
	      CA M P  (starts CHECKBOOK ASSISTANT in BOTH the mono-
		       chrome mode and non-graphic printer mode)





	 DATA FILES:

	 The first time CHECKBOOK ASSISTANT is run, no data files
	 exist and the program will prompt whether the data files
	 should be made.  To make and initialize the data files, press
	 either the 'Y' or 'y' key.  The following database files will
	 be written and initialized on the default drive:

		   CAPFLyy.DB     PORTFOLIO DATA FILES
		   CAPFLyy.IDX        "     INDEX FILES
		   CAPLIFyy.DB    LIABILITY DATA FILES
		   CAPLIFyy.IDX       "     INDEX FILES
		   CAPREGyy.DB    ACCOUNT REGISTER DATA FILES
		   CAPREGyy.IDX       "            INDEX FILES
		   CAPCCDyy.DB    CREDIT CARD DATA FILES
		   CAPCCDyy.IDX       "       INDEX FILES
	   (where yy in the above files represent the current year)




	 FINANCIAL PORTFOLIO:

	 It is extremely important the first time you use CHECKBOOK
	 ASSISTANT, that you spend a little time in the PORTFOLIO
	 category entering information pertaining to the BANKING
	 accounts, INCOME, and LIABILITIES that CHECKBOOK ASSISTANT
	 is going to handle.

       ***************************************************************
       * The FINANCIAL PORTFOLIO section is the heart of the program.*
       * Without any information in this section, you can expect     *
       * CHECKBOOK ASSISTANT to do absolutely NOTHING.               *
       ***************************************************************





	 MONTHLY TRANSACTION FILES:

	 In addition to the database files mentioned above, a MONTHLY
	 TRANSACTION file is generated the first time that CHECKBOOK
	 ASSISTANT is run during a month for which a current MONTHLY
	 TRANSACTION file does not exist.  The MONTHLY TRANSACTION
	 file takes the following format:

		MMMYY.DB     (monthly database file, where MMM are
			      the first three letters of the current
			      month and YY is the last two digits of
			      the current year).
		MMMYY.IDX    (associated index file).

	 CHECKBOOK ASSISTANT uses information within the FINANCIAL
	 PORTFOLIO section when it "makes" a MONTHLY TRANSACTION
	 file.  The MONTHLY TRANSACTION file contains information
	 concerning your bank account(s), income and liabilities.
	 Whenever CHECKBOOK ASSISTANT is run for the first time
	 during a month, the MONTHLY TRANSACTION file for that month
	 is not present.  The program then prompts whether it should
	 make one.  IF YOU HAVE NOT ADDED YOUR INFORMATION TO THE
	 "FINANCIAL PORTFOLIO" SECTION  (account, income and
	 liabilities) THEN ANSWER THIS PROMPT "NO."   Any information
	 added to the FINANCIAL PORTFOLIO section during the month
	 will NOT appear in the present MONTHLY TRANSACTION file.
	 Only after the next MONTHLY TRANSACTION file is made will
	 all the information currently available (in the FINANCIAL
	 PORTFOLIO) be carried over.





	 ON LINE HELP:

	 On-line help is always available by pressing function key
	 F10.  The help information is context sensitive and provides
	 brief descriptions about the current screen and area of the
	 program where help is requested.  The HELP files also serve
	 as a mini tutorial.





	 CONFIG.SYS FILE:

	 CHECKBOOK ASSISTANT requires a "FILES = 14" (or greater)
	 statement in the CONFIG.SYS file.  Information about
	 CONFIG.SYS files is available in the "USER MANUAL."



	 THANK YOU for your interest in this product.
	 Enjoy using the CHECKBOOK ASSISTANT.

			  ALLIZ Software
			  12818 Wrexham Rd.
			  Herndon, VA 22071
			  (703) 476-5014
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

			    CHECKBOOK ASSISTANT

	 LICENSE:

	 ALLIZ  Software distributes  CHECKBOOK ASSISTANT  under the
	 marketing approach known as shareware.  Shareware programs
	 are sometimes confused with those called public domain, but
	 there is a difference.   Simply put, shareware software carry
	 a registration fee and public domain programs do not.

	 The shareware concept is based on the principle that people
	 should be allowed to evaluate a program over an acceptable
	 period of time (typically 90 days) to determine its' useful-
	 ness, without having to pay for it.  If the product is found
	 to be of use, then the person should recognize the author by
	 registering as a user.

	 Users of this version are granted a limited license to use
	 CHECKBOOK ASSISTANT on a trial basis for the purpose of
	 determining whether it meets their needs.   Use of this
	 version, except for this limited purpose, by any person,
	 business, institution or agency is strictly prohibited.  The
	 continued use of CHECKBOOK ASSISTANT requires registration.

	 Registration brings the following benefits:
		o Latest serialized version of "CHECKBOOK ASSISTANT
		  Plus" with manual on disk
		o Program Support
		o Notification of all updates and changes
                o Printer Driver Support (allows continued use of your
					 present computer check forms)
		o (optional) Printed Manual with figures and
		  illustrations

	 If you find this product worthwhile,  you are encouraged to
	 register as a user for a minimum of $25.00.  You will find a
	 registration form at the end of this file.  The registration
	 form can also be found in the file called REGISTER.DOC, and
	 can be printed by entering the following:

			 COPY REGISTER.DOC PRN




	 COPYING and DISTRIBUTION:

	 Shareware programs can be freely copied and shared.  ALLIZ
	 Software encourages the copying and sharing of CHECKBOOK
	 ASSISTANT, but the distributed copies MUST include, as a
	 minimum, the following UNMODIFIED files:

	       CA.EXE       - the CHECKBOOK ASSISTANT program file
	       CA.OVL       - the CHECKBOOK ASSISTANT overlay file
	       CA.HLP       - the CHECKBOOK ASSISTANT help file
	       MANUAL.DOC   - the CHECKBOOK ASSISTANT "user manual"
	       READ.ME      - important tips for those users NOT
			      inclined to read "user manuals"
	       LICENSE.DOC  - this file
	       REGISTER.DOC - the REGISTRATION form







	 This shareware copy of the CHECKBOOK ASSISTANT, release
	 1.2.4S, is a complete and fully functional version that
	 keeps home and small business financial accounts in order
	 through automated control of printing checks,
	 reconciliation of bank records and other book keeping
	 functions.  Additionally, it provides credit card
	 tracking and various reports.  After you register as a
	 user of CHECKBOOK ASSISTANT, you will receive the latest
	 version of CHECKBOOK ASSISTANT Plus,  which offers the
	 following additional features:

		    o - Password protection

		    o - Automatic backup of data files

		    o - Networth (Cash-on-Hand)

		    o - Support for separate CHECKS and REPORTS printer

		    o - Support for five (5) different popular check
		       "types"

		    o - Control over whether checks are printed or not

		    o - Complete disk drive and path support

		    o - LOAN PAYMENT and AMORTIZATION computation



	 WARRANTY:

	 ALLIZ  Software  makes  no  warranty of any kind,  express or
	 implied,  including  without  limitation,  any  warranties of
	 merchantability  and/or  fitness  for  a  particular purpose.
	 ALLIZ  Software shall not be liable for any damages,  whether
	 direct,  indirect,  special  or  consequential  arising  from
	 failure  of  this  program in the manner desired by the user.
	 ALLIZ  Software shall not be liable for any damage to data or
	 property which may be caused directly or indirectly by use of
	 the program.

	 IN NO EVENT WILL   ALLIZ  Software   BE LIABLE TO YOU FOR ANY
	 DAMAGES,  INCLUDING  ANY LOST PROFITS,  LOST SAVINGS OR OTHER
	 INCIDENTAL  OR  CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE
	 OR  INABILITY  TO  USE  THE PROGRAM,  OR FOR ANY CLAIM BY ANY
	 OTHER PARTY.



	 Thank you for your interest in this product.  Enjoy using the
	 CHECKBOOK ASSISTANT.

			       ALLIZ Software
			       12818 Wrexham Road
			       Herndon, VA 22071
			       (703) 476-5014









		  CHECKBOOK ASSISTANT   -   REGISTRATION FORM


	 Please check the appropriate box, enclose a check for the
	 total amount and mail to:

			       ALLIZ Software
			       12818 Wrexham Road
			       Herndon, VA 22071


		Item                                  Price     Total
	  __
	 :__:  Registration and latest "CHECKBOOK
			 ASSISTANT Plus" software
			 with MANUAL ON DISK         $25.00   _________

				(or)
	  __
	 :__:  Registration and latest "CHECKBOOK
			 ASSISTANT Plus" software
			 with PRINTED MANUAL         $35.00   _________

		Virginia state residents add 4.5% sales tax   _________

						     Total    _________

	       (foreign addresses, please remit in US funds)


	 NAME:__________________________________________________

	 COMPANY:_______________________________________________

	 ADDRESS:_______________________________________________

	 CITY, STATE, ZIP:______________________________________

	 DAYTIME TELEPHONE:  (_____)____________________________
		       __                     __
	 DISK TYPE:   :__: 5.25" Disk        :__: 3.5" Disk

	 RECEIVED SHAREWARE COPY FROM: _________________________


	 COMMENTS: (likes, dislikes, additional features, problems?)
	 ____________________________________________________________
	 ____________________________________________________________
	 ____________________________________________________________
	 ____________________________________________________________

       __
      :__: PRINTER DRIVER SUPPORT:  CHECKBOOK ASSISTANT Plus directly
	   supports five different styles of computer form checks.
	   If you already possess computer form checks that are not
	   currently supported, we will provide a custom printer
	   driver to support those checks.  Please send a blank,
	   voided check (both parts) for this purpose.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```



		  CHECKBOOK ASSISTANT   -   REGISTRATION FORM


	 Please check the appropriate box, enclose a check for the
	 total amount and mail to:

			       ALLIZ Software
			       12818 Wrexham Road
			       Herndon, VA 22071


		Item                                  Price     Total
	  __
	 :__:  Registration and latest "CHECKBOOK
			 ASSISTANT Plus" software
			 with MANUAL ON DISK         $25.00   _________

				(or)
	  __
	 :__:  Registration and latest "CHECKBOOK
			 ASSISTANT Plus" software
			 with PRINTED MANUAL         $35.00   _________

		Virginia state residents add 4.5% sales tax   _________

						     Total    _________

	       (foreign addresses, please remit in US funds)


	 NAME:__________________________________________________

	 COMPANY:_______________________________________________

	 ADDRESS:_______________________________________________

	 CITY, STATE, ZIP:______________________________________

	 DAYTIME TELEPHONE:  (_____)____________________________
		       __                     __
	 DISK TYPE:   :__: 5.25" Disk        :__: 3.5" Disk

	 RECEIVED SHAREWARE COPY FROM: _________________________


	 COMMENTS: (likes, dislikes, additional features, problems?)
	 ____________________________________________________________
	 ____________________________________________________________
	 ____________________________________________________________
	 ____________________________________________________________

       __
      :__: PRINTER DRIVER SUPPORT:  CHECKBOOK ASSISTANT Plus directly
	   supports five different styles of computer form checks.
	   If you already possess computer form checks that are not
	   currently supported, we will provide a custom printer
	   driver to support those checks.  Please send a blank,
	   voided check (both parts) for this purpose.

```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 2500 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes of software you can have immediate access to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

The WordCruncher text retrieval software allows you to quickly access
the description for any program you want.  All the programs are indexed
by title, filename, PC-SIG disk number, and every word within the
program description.  There couldn't be an easier way to find just the
right program.

The Narc utility, newly instituted with the tenth edition, allows you to
look directly at all the compressed program files on the CD without
having to download the program to your hard disk.  So if you want to
look at the programmer's notes or on-line documentation before using
valuable hard disk space, you can.

The PC-SIG Encyclopedia of Shareware is included on the disk, and a
printed copy of the book is included so you can peruse the available
programs from the comfort of your favorite chair.  All the programs are
logically divided into one-hundred twenty categories making it easier to
find just the right software.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.





T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed

by title, filename, PC-SIG disk number, and every word in the program
description.  A new utility, Narc, is implemented so you can look at the
program files and the author's on-line documentation without having to
first copy the program to your hard disk.  By using WordCruncher and
Narc, you can quickly find the program you want and review it to be
sure, without ever having to run it from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

```
{% endraw %}

## FILE3103.TXT

{% raw %}
```
Disk No: 3103                                                           
Disk Title: *Checkbook Assistant                                        
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Checkbook Assistant                                      
Author Version: 1.2.4                                                   
Author Registration: $25.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
What the CHECKBOOK ASSISTANT is not is an overpowering accounting system
that needs a college diploma to run.  This fully menu driven accounting 
system is the non-accounts dream with features like maintaining as many 
as 99 home or office bank accounts, covering balances and reconciling.  
The online help and the windowed menus make CHECKBOOK ASSISTANT very    
easy to operate, and complete documentation is provided with a manual on
disk.                                                                   
                                                                        
The CHECKBOOK ASSISTANT always has your account register up to date and 
checks and year to date reports are easily printed.  You can even displa
your accounts with bar graphs.                                          
                                                                        
ATM transactions are no problem for this system, just fill in the spaces
and you'll have no more surprises.  Also provided with the CHECKBOOK    
ASSISTANT is a credit card management and financial budgeting function  
to guide you along in keeping close tabs on that plastic money.  This is
an easy to use no-nonsense accounting system.                           
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a registration fee to the author. However, if the program does
not fit your needs, there is no obligation to send the registration fee.
It's that simple

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
ensure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and checked every program
submitted to ensure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware affects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3103

     Volume in drive A has no label
     Directory of A:\

    CA_DISK1 ZIP    152849   8-25-92  10:29a
    CA_DISK2 ZIP     99247   8-25-92  10:30a
    GO       EXE     26022   1-10-92  12:14p
    PCSIG    TXT      2451   1-22-92   9:19a
    CDROM    TXT      3769   1-22-92   9:21a
    SHAREMAG TXT      1837   1-22-92   9:15a
    GO-FORM  DAT      2401   1-20-92  10:24a
    GO-STRT  DAT       538   8-25-92  10:00a
    PKUNZIP  EXE     23536   1-16-91  12:38p
    FILE3103 TXT      2443   6-02-92   5:34p
           10 file(s)     315093 bytes
                            3072 bytes free
