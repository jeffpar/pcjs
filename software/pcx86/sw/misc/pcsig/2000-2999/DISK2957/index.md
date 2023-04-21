---
layout: page
title: "PC-SIG Diskette Library (Disk #2957)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2957/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2957"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
		WELCOME TO ADDRESS MANAGER!

 This disk contains Address Manager 1.1B


 This file contains the following information:

	1) Late-Breaking News
	2) The pesky registration reminder screens
	3) A few legal matters
	4) Packing List
	5) Installation Instructions
	6) Converting Address Data from other formats
	7) Online Support Information
	8) Association of Shareware Professionals Ombudsman Statement
	9) The complete licensing agreement
	10) Order Form



	    *** LATE-BREAKING NEWS ***

 Here's what's new for Address Manager 1.1B

 Features
 --------
 1. You thought the listbox update was fast before...check it out now!
 2. Now prints to Rolodex cards.  Option to include any or none of
    the following:   (See Help File for details.)
        Home Phone
        Work Phone
        Fax  Phone
        His  Birthday
        Her  Birthday
        Anniversary
        Comments
 3. Exports data to TAB or comma delimited file.

 Fixes
 ---------------
 1.  Handles files with 0 names much better now.
 2.  Space between addresses in full book mode is back in.
 3.  Keyboard now works for button bar even when listbox is empty;
     * key on keyboard will switch between page and filter mode.
 4.  Search criteria for date fields now fixed--completely broken before.
 5.  Correctly loads a file from a different directory now.
 6.  When adding names and using the Another... button, if you added
     several names and then hit Cancel or <ESCAPE>, the main window listbox
     was not updated properly--it now is.
 7.  When loading a different file, the Save Heading Columns menu option
     was not properly grayed out according to the Best Fit Columns option.
 8.  New files and Save As... files MUST have the .ADD extension.  This
     prevents some *potential* bugs.  Also fixed a bug where problems
     occurred saving to the same file you had open.

 * * * * *
 Here's what's new for Address Manager 1.1A

 Features
 --------

   1.  Now prints directly to envelopes.
   2.  F6 selects all names in the list.
   3.  No more GDI objects left around after exiting Address Manager
   4.  Dates now support all international formats and are listed
       according to the setting in Control Panel.
   5.  Phone number fields, names and state field allow more 
       characters.
   6.  Large files are now loaded *much* faster than before.
   7.  New view mode--All Important Dates which shows the birthday
       and anniversary fields in the listbox.
   8.  Sort selection has been moved from settings dlg box to menu.
   9.  Smart dialer supports up to 5 wild strings.  These are set 
       in Smart Dialer Settings...
   10. Dialer is *much* smarter.  Detects no modem, busy signal 
       (with option to redial) and phone connection problems.
   11. Listbox drawing has been optimized and is faster.
   12. Several Search bugs have been fixed.
   13. Status bar showing you important information.  This has been
       moved from the caption (where it was hard to see)
   14. Lot's of other stuff fixed/added but this list is gettin'
       too long!


		 REGISTRATION REMINDERS

 Unlicensed copies of Address Manager are 100% fully functional.

 Unlicensed copies of Address Manager have a pesky registration 
 reminder screen that pops up whenever you start the program.

 We're sure that once you see the incredible quality of our 
 software, you will dig out your credit card, pick up the phone, 
 call the nice people at our 800 number and register Address 
 Manager. 

 When you pay for the shareware you like, you are voting with your
 pocketbook, and will encourage us to bring you more of the same kinds
 of products.  Pay for what you like, and voila, more of what you like
 will almost magically be developed.


			LEGAL MATTERS

 Of course the usual disclaimers still apply.  We are not 
 responsible for anything at all.  Nothing.  Even if we are held 
 responsible, the limit of our liability is the licensing fees 
 you paid.  The full text of our license agreement is found near 
 the bottom of this file. 



		       PACKING LIST:

 With this version you have the following files.  On disk or in the ZIP file,
 these files all end with a $.  They are all compressed and must be installed
 using our WSETUP.EXE program.

  ADDRESS  EXE  The main Address program
  ADDRESS  HLP  The Address Help file - press F1 to display it.
  ADDRESS  INI  Initialization information for Address Manager
  README   TXT  This File
  WWWDBMS  DLL  The data base engine.
  MACRO    DOC  Word for Windows doc describing W4W address insert macro
  MACRO2   DOC  Word for Windows 2.0 doc describing various macros
  WPMACRO  DOC  WordPerfect doc describing WP address insert macro
  ADDINS   WCM  WordPerfect macro as described in WPMACRO.DOC 
  MYNAMES  ADD  The data for a sample address book
  MYNAMES  INI  Initialization information about the data file
  MYNAMES  CMT  Data for the comments about people in the address book
  ADIMPORT EXE  The Import/Conversion Utility
  SAMPLE   IN   A Sample address import file for ADIMPORT
  WSETUP   EXE  The Setup program
  WSETUP   INF  The information file for the setup program
  WBINXZ   EXE  More of the setup program
  ENVELOPE TPL  The template file for envelope printing.
  INTLSTR  DLL  Supports all date formats
  WWWDEALR DLL  Yet another DLL
  AD__VER  ???  Version number file.  Extension shows version number.

  WBHK-C   DLL  A file created whenever you run ADIMPORT.EXE
                It may safely be deleted.
  



	       HOW TO INSTALL ADDRESS MANAGER 

  Use our snazzy setup program...

	1) Close down all extraneous Windows applications.  
	   (You do have to be in Windows to run WSETUP.EXE)

	2) Double-Click on the WSETUP.EXE program.

	3) When the setup program asks for a directory, specify initial 
	   directory, or accept the given default (C:\ADDRESS).


  NOTE: ONCE YOU HAVE ADDRESS MANAGER UP AND RUNNING, SELECT THE 
	FILE/SETTINGS... MENU AND PUT YOUR CORRECT AREA CODE INSIDE.



      CONVERTING DATA FROM OTHER FORMATS

 A handy conversion utility, written in our *just wonnerful* Windows batch
 language, WinBatch, has been provided for your convenience.  You will find
 a compiled version of the batch file on the diskette (ADIMPORT.EXE).  

 To convert your pre-existing data files, follow the steps below.

 1) Make an input file in our standard format.  The input file for ADIMPORT
 may be either comma or tab delimited.  Items may be enclosed within double
 quotes.  Most any product can export these types of files.  dBase, 123,
 Excel, and most any reasonable program can export these files.

 2) If the fields your program manages to export are not in our 
 "standard format", use a product like Excel, 123, AsEasyAs, dBase,
 PC-File, or many others to move the columns around.  
 (Consult the product documentation or their tech support people to
 do this.  Don't call us, we don't have a clue.)

 3) You MUST use the IN extension.  A valid file name would be ADIMPORT.IN

 4) Oh.  Our standard format is defined below.  All the following lines 
 will work.  (Oh and where you see a %, we really mean TAB)


   The input file for ADIMPORT may be either comma or tab delimited.  
   Individual items may be optionally enclosed within double quotes.   

   1,2,3,4,5,6,7,8,9,10,11,12,13

   1%2%3%4%5%6%7%8%9%10%11%12%13

   "1","2","3","4","5","6","7","8","9","10","11","12","13"

   1,"2",3,"4",5,6,7,8,9,"10",11,12,"13"

   "1"%2%3%"4"%5%6%7%"8"%9%10%"11"%12%13

 Input file specifications:

   #  Description      Length
  --  -----------      ------
   1. First name         12
   2. Middle name        12
   3. Last name          20
   4. Address line 1     40
   5. Address line 2     40
   6. Address line 3     40
   7. City               20
   8. State               2
   9. Zip code           10
  10. Home phone         14
  11. FAX number         14
  12. Work phone         14
  13. Work extension      4

 A sample data file is included as SAMPLE.IN, containing eight records.
 It is Comma delimited (Also know as Comma Separated)


 5) Run Address Manager, and make sure it comes up and runs with the correct
 data file.  Now you are ready.  Run the ADIMPORT.EXE or the ADIMPORT.WBT
 file, Select the desired file to import, specify type of file (Tab or
 Comma delimited) and watch.  (About 8 seconds an address on my machine)



		    ON-LINE SUPPORT

 Address Manager has on-line support on a number of computer systems.


 First of all, the home of Address Manager is on Compuserve, in the
 WINAPA forum, in the Wilson WindowWare section (#15 currently).  Also
 the latest and greatest downloads are available from DL15 of the
 WINAPA forum.  The Wilson WindowWare section of the WINAPA forum
 is checked on a daily basis, and all questions will be responded to.

 The FidoNet Windows echomail conference is also monitored for Windows
 questions in general.  Questions about Windows and Address Manager will
 be answered in the echo.

 If your budget is not able to afford Compuserve, we strongly suggest
 that you contact your local BBS sysops and encourage them to carry
 the Windows echomail conferences.

 Registered users may also call our BBS for the latest versions of
 our products. (206) 935-5198   USR HST D/S V.42bis 9600+ 8N1


     Association of Shareware Professionals Ombudsman Statement


       Wilson WindowWare, the producer of Address Manager, is a
       member of the Association of Shareware Professionals
       (ASP).  ASP wants to make sure that the shareware
       principle works for you. If you are unable to resolve a
       shareware-related problem with an ASP member by contacting
       the member directly, ASP may be able to help. The ASP
       Ombudsman can help you resolve a dispute or problem with
       an ASP member, but does not provide technical support for
       members' products. Please write to the ASP Ombudsman at
       545 Grover Road, Muskegon MI 49442 or send a Compuserve
       message via easyplex to ASP Ombudsman 70007,3536


 The legalese section...

 ADDRESS MANAGER
 Copyright ⌐ 1991-92 by Wilson WindowWare
 All rights reserved.


 SOFTWARE LICENSE

 Address Manager is not and has never been public domain 
 software, nor is it free software. 

 Non-licensed users are granted a limited license to use Address
 Manager on a 21-day trial basis for the purpose of determining 
 whether Address Manager is suitable for their needs.  The use 
 of Address Manager, except for the initial 21-day trial, 
 requires registration.  The use of unlicensed copies of Address 
 Manager, outside of the initial 21-day trial, by any person, 
 business, corporation, government agency or any other entity is 
 strictly prohibited. 

 A single user license permits a user to use Address Manager
 only on a single computer.  Licensed users may use the
 program on different computers, but may not use the program
 on more than one computer at the same time.

 No one may modify or patch the Address Manager executable files 
 in any way,  including but not limited to decompiling, 
 disassembling, or otherwise reverse engineering the program. 

 A limited license is granted to copy and distribute Address 
 Manager only for the trial use of others, subject to the above 
 limitations, and also the following: 

  1)    Address Manager must be copied in unmodified form, complete
	with the file containing this license information.

  2)    The full machine-readable Address Manager documentation must
	be included with each copy.

  3)    Address Manager may not be distributed in conjunction with
	any other  product with out a specific license to do so
	from Wilson WindowWare.

  4)    No fee, charge, or other compensation may be requested or
	accepted, except as authorized below:

	A) Operators of electronic bulletin board systems (sysops)
	   may make Address Manager available for downloading only as
	   long as the above conditions are met.  An overall or
	   time-dependent charge for the use of the bulletin board
	   system is permitted as long as there is not a specific
	   charge for the download of Address Manager.

	B) Vendors of user-supported or shareware software approved by
	   the ASP may distribute Address Manager, subject to the
	   above conditions, without specific permission.  Non-
	   approved vendors may distribute Windows Reminder only after
	   obtaining written permission from Wilson WindowWare.
	   Such permission is usually granted.  Please write for
	   details (enclose your catalog).  Vendors may charge a
	   disk duplication and handling fee, which, when pro-rated
	   to the Address Manager product, may not exceed eight dollars.

	C) Non-profit user groups may distribute copies of the 
	   Address Manager diskette to their members, subject to 
	   the above conditions, without specific permission.  
	   Non-profit groups may collect a disk duplication fee 
	   not to exceed five dollars. 

  LIMITED WARRANTY

  Wilson WindowWare guarantees your satisfaction with this
  product for a period of 90 days from the date of original
  purchase.  If you are unsatisfied with Address Manager
  within that time period, return the package in saleable
  condition to the place of purchase for a full refund.

  Wilson WindowWare warrants that all disks provided are
  free from defects in material and workmanship, assuming
  normal use, for a period of 90 days from the date of
  purchase.

  Wilson WindowWare warrants that the program will perform
  in substantial compliance with the documentation supplied
  with the software product.  If a significant defect in
  the product is found, the Purchaser may return the
  product for a refund.  In no event will such a refund
  exceed the purchase price of the product.

  EXCEPT AS PROVIDED ABOVE, WILSON WINDOWWARE DISCLAIMS ALL
  WARRANTIES, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
  LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND
  FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE
  PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE
  PURCHASER ASSUMES THE RISK OF PAYING THE ENTIRE COST OF
  ALL NECESSARY SERVICING, REPAIR, OR CORRECTION AND ANY
  INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT WILL
  WILSON WINDOWWARE BE LIABLE FOR ANY DAMAGES WHATSOEVER
  (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF
  BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS
  INFORMATION AND THE LIKE) ARISING OUT OF THE USE OR THE
  INABILITY TO USE THIS PRODUCT EVEN IF WILSON WINDOWWARE
  HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

  Use of this product for any period of time constitutes
  your acceptance of this agreement and subjects you to its
  contents.

  U.S. GOVERNMENT RESTRICTED RIGHTS

  Use, duplication, or disclosure by the Government is subject
  to restrictions as set forth in subdivision (b)(3)(ii) of
  the Rights in Technical Data and Computer Software clause at
  252.227-7013.  Contractor/manufacturer is Wilson WindowWare
  2701 California Ave SW /suite 212/ Seattle, WA 98116

  TRADEMARKS

  Microsoft and MS-DOS are registered trademarks of Microsoft Corporation.
  Windows is a trademark of Microsoft Corporation.

  Address Manager is a trademark of Wilson WindowWare, Inc.

  WordPerfect is a registered trademark of WordPerfect Corporation


	   *** WILSON WINDOWWARE PRODUCTS ***

 Our great line of Windows products includes:

	Address Manager - Tracks addresses, phone numbers, comments, 
			  important dates.  Includes dialer and label
			  printer.  Supports DDE.        $39.95
	Command Post    - A powerful text-based shell for Windows.
			  Programmable menus, built-in batch language,
			  file viewer and more.          $49.95
	Reminder        - Personal Schedule Manager.  Keeps track of
			  to-do lists, set alarms (which can launch apps), 
			  prints reports. Supports DDE.  $59.95
	WinCheck        - Your personal finance manager for Windows.
			  Manages checking, savings, cash, and credit
			  card accounts. Features galore! Supports DDE.
			  Custom Reports.                $69.99
	WinEdit         - Power Programming for the Windows Environment.
			  Full featured editor, or simple file browser.
			  Super high speed, super powerful.  Batch
			  language supported.            $59.95
	WinBatch        - Write your own Windows Batch Files!  Dialogs,
			  automatic program control, and powerful data
			  manipulation lets you control your Windows.
			  A must for the power user.     $69.95




			  ORDERING INFORMATION

 Licensing Address Manager brings you wonderful benefits.  Some of these are:
    - Gets rid of that pesky reminder window that comes up when you start
      Address Manager.
    - Entitles you to one hour free phone support for 90 days (Your dime).
    - Insures that you have the latest version of Address Manager.
    - Encourages the authors of this program to continue bringing you
      updated/better versions and new products.
   -  Gets you on our mailing list so you are occassionally notified of
      spectacular updates and our other Windows products.
   -  And, of course, our 90-day money back gaurantee.



	      ADDRESS MANAGER ORDER FORM 1.1B

 Name:   ____________________________________________________

 Company:____________________________________________________

 Address:____________________________________________________

	 ____________________________________________________

 City:   ________________________  St:______  Zip:___________

 Phone: (______)_________________    Country:________________


	    ____ Address Manager(s)  @ $39.95 : _______.____

 Foreign air shipping (except Canada) @  $9.50 : _______.____

					  Total: _______.____


 Disk Size(circle one)    5.25" acceptable     3.5" required

 Please enclose a check payable to Wilson WindowWare; or you may
 use Amex, Visa, MasterCharge, or EuroCard.  For credit cards,
 please enter the information below:

 Card #:__ __ __ __ - __ __ __ __ - __ __ __ __ - __ __ __ __

 Expiration date: ____/____

 Signature:  _________________________________________

 
 Where did you hear or get your copy of Address Manager?


 ____________________________________________________________


	  Send to:  Wilson WindowWare
		    2701 California Ave SW #212 
		    Seattle, WA 98116 
		    USA 

	  or call:  (800) 762-8383  (orders only)
		    (206) 937-9335
		    (206) 935-7129  (fax) 

	  (Please allow 2 to 3 weeks for delivery)
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library.  Every shareware program we have is on one disc; over
700 megabytes of software you can have immediate access to.

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

## FILE2957.TXT

{% raw %}
```
Disk No: 2957                                                           
Disk Title: *Address Manager by Wilson Ware                             
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: Address Manager by Wilson WindoWare                      
Author Version: 1.1B                                                    
Author Registration: $39.95(US,CAN)/$49.45(Int'l)                       
Special Requirements: Windows 3.0.                                      
                                                                        
Wilson WindoWare, author of Commander Post, WinCheck, and other popular 
Windows programs now presents ADDRESS MANAGER. This simple yet effective
program is a true Windows application with a simple interface. 3D       
alphabet buttons are displayed across the screen and stay depressed when
you click on them. Your address list is then displayed in alphabetical  
order.                                                                  
                                                                        
Once you have a database of names and telephone numbers, you can dial   
any of the numbers by clicking on the name. ADDRESS MANAGER will even   
accommodate for you the dial "9" for an outside number, automatically   
add prefix characters, or strip out 1-plus-area codes for local numbers.
                                                                        
Other features include an array of colors, fonts, and type sizes for    
both the presentation screen and printed output, and the ability to add 
names easily to the database, to print envelopes on an HP Laserjet      
Printer, and to import existing data from other applications.           
                                                                        
                                                                        
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
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
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
how shareware effects what we do.

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

### Directory of PC-SIG Library Disk #2957

     Volume in drive A has no label
     Directory of A:\

    ADR11B   ZIP    236868   1-25-92   5:47a
    CDROM    TXT      3693   1-21-92   6:10a
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     57040   2-06-92   2:16a
    GO-FORM  DAT      2987   3-13-92  11:17a
    GO-STRT  DAT       544   3-17-92   5:12p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    FILE2957 TXT      2369   3-17-92   5:16p
            9 file(s)     331201 bytes
                           27648 bytes free
