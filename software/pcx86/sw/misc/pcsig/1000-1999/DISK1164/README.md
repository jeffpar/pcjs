---
layout: page
title: "PC-SIG Diskette Library (Disk #1164)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1164/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1164"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FOR PHOTOGRAPHERS"

    FOR PHOTOGRAPHERS is a three-level menu-driven program for the amateur
    or professional photographer to aid in cataloging photographs.  Since
    the entire program is menu-driven, little experience or training is
    required to be proficient in its use.  Consequently the manual is rather
    brief.
    
    The first level, Basic, is recommended for minimal record-keeping.  You
    can store the most basic information about a photo, slide, or negative.
    But record-keeping is not restricted to these data.  For instance, you
    could (if you painted) store valuable data about your paintings or
    drawings.  The second level, Photographer, extends the information
    storage capability to include data such as processing and printing and
    any other data you might want to save.  The third level, Professional,
    adds on client information in addition to the above information.
    
    FOR PHOTOGRAPHERS allows you to create, edit, save, search, delete, and
    update any data files in the system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APPNDX.DOC

{% raw %}
```
	 A P P E N D I X   A

	 FOR PHOTOGRAPHERS
	 Version 2.00


	 INTRODUCTION

	 FOR PHOTOGRAPHERS is three level software designed for use by 
	 both people who have a few family photographs in their home 
	 and by the professional as a cataloging tool.	For 
	 Photographers allows you to create a catalog and then locate 
	 a photograph or negative by any one of up to 21 
	 characteristics.  For example, you'll be able to get a list 
	 of all of the sunset pictures	taken at the beach; or all of 
	 the photographs of New York city.

	 Another nice feature of For Photographers is that it can be 
	 used with photographs, negatives, slides or almost any other 
	 photographic material.  Entries can be made for individual 
	 pictures allowing you to list the individually unique 
	 information about each picture.


	 THE THREE LEVELS OF FOR PHOTOGRAPHERS

	 The three levels of For Photographers are: Amateur, 
	 Photographer, and Professional.  Each level provides 
	 progressively a greater detail of information that can be 
	 stored for each entry.
+
	 The following is a list of the information that can be 
	 entered at each level.  As the higher levels are used, the 
	 data files use more disk space.

	       Amateur		  Photographer		 Professional

	       Title		  Title 		 Title
	       Subject		  Subject		 Subject
	       Description	  Description		 Description
	       Cat/Negative #	  Cat/Negative #	 Cat/Neg #

	       Note		  Note			 Note
	       Value		  Value 		 Value

				  Subtopic-1		 Subtopic-1
				  Subtopic-2		 Subtopic-2
				  Other 		 Other
				  Type			 Type
				  Date			 Date
				  Grouping		 Grouping
				  Equipment		 Equipment
				  Film/Processing	 Film/Proc.
				  Printing		 Printing

							 Client   
							 Address
							 City/State
							 Zip Code
							 Phone
							 Fee


	 The spaces for Note, Other and Grouping provide spaces for 
	 you to enter miscellaneous information that is important to 
	 you.
+
	 The following defines what I intended each line to be used 
	 for.  If a line title means something different to you, or 
	 you'd like to put other types of information on a line, do 
	 it.  There is nothing in For Photographers that restricts 
	 what can be entered on any line.


	 (Amateur Level)

	 Title - The title of this photograph.

	 Subject - Who or what is shown in the photograph.

	 Description - A description of the photograph.

	 Cat/Neg Number - The identifing number used to find the print 
	 or negative in your files.

	 Note - This line is provided for miscellaneous information.  
	 You can enter an abbreviation for the type of entry; or 
	 describe the condition of the print; or any other information 
	 you feel is valuable.
	  
	 Value - Enter the current value of the print.	This 
	 information is useful for insurance purposes.


	 (The Photographer page)

	 Subtopic-1 - Addition information about content of the 
	 photograph.

	 Subtopic-2 - Additional information about the content of the 
	 photograph.

	 Other - Like the NOTE line you can enter whatever information 
	 you feel is useful.

	 Type - Use this line to classify entrys by type.  The 
	 classifications you use will depend on your requirements.

	 Date - You can use this line for the copyright date or the 
	 date you took this picture.
+
	 Grouping - Several individual pictures can belong to a group 
	 or set of photographs.  For example, a set of wedding 
	 photographs.  This line is used to identify the group (or 
	 set) the individual picture belongs with.

	 Equipment, Film/Processing & Printing - Use these three lines 
	 to describe the equipment used to take the picture, the type 
	 of film and film processing, and the printing equipment and 
	 procedure.


	 (The Professional page)

	 Client - The name of the person who paid for this photograph.

	 Address - The above person's street address.

	 City/State - The city and state the address is in.

	 Zip - The zip code.

	 Phone - Telephone number where this personal can be reached.

	 Fee - The fee charged (enter only once for a group of 
	 pictures).  This line title can be changed using the 
	 customize feature.
+
	 INFORMATION ABOUT FILES

	 For Photographers creates a separate file for each level.  A 
	 number is added to the end of the filename to indicate the 
	 level it is associated with.  If you are using PHOTO as your 
	 filename, then the software will create PHOTO.DA2 for the 
	 Research level and PHOTO.DA3 for the Librarian level.

	 The more levels used, the fewer entries can be stored in a 
	 given space.  The following chart provides a _rough_ estimate 
	 of the number of entries that can be put within a certain 
	 space (360K is the space on a double sided, double density 
	 floppy disk):

						 Indexed     Indexed 
			  360K	   1 Megabyte	  360K	   1 Megabyte

	       Amateur	  1700	     4900	   700	     2000

	       Photographer 750      1800	   500	     1200

	       Professional 500      1400	   350	     1000


	 For Photographers also needs to use a data file called 
	 PHOTO.BMS.  This file should always remain on the same 
	 floppy, or in the same directory as the PHOTO.EXE program.  
	 This file is used to store the settings used by PHOTO.EXE.

	 In creating data files For Photographers uses the following 
	 method:

	   The Basic level data file has an extension of .DAT

	   The Photographer level data file has an extension of .DA2

	   The Professional level data file has an extension of .DA3

	   The file holding the setting used for each filename has an 
	 extension of .PTO.

	   If you are using the default filename of PHOTO, then at the 
	 Professional level the following files would be created.

	   PHOTO.DAT - Basic level data
	   PHOTO.DA2 - Photographer level data
	   PHOTO.DA3 - Professional level data
	   PHOTO.PTO - Set up information for the PHOTO files


 Photographer level data
	   PHOTO.DA3 - Professional level data
	   PHOTO.PTO - Set up info
```
{% endraw %}

## FILE1164.TXT

{% raw %}
```
Disk No: 1164                                                           
Disk Title: For Photographers                                           
PC-SIG Version: S1.4                                                    
                                                                        
Program Title: For Photographers                                        
Author Version: 2.00                                                    
Author Registration: $59.95                                             
Special Requirements: Two floppy drives.                                
                                                                        
FOR PHOTOGRAPHERS is a three-level menu-driven program for the amateur  
or professional photographer to aid in cataloging photographs.  Since   
the entire program is menu-driven, little experience or training is     
required to be proficient in its use.  Consequently the manual is rather
brief.                                                                  
                                                                        
The first level, Basic, is recommended for minimal record-keeping.  You 
can store the most basic information about a photo, slide, or negative. 
But record-keeping is not restricted to these data.  For instance, you  
could (if you painted) store valuable data about your paintings or      
drawings.  The second level, Photographer, extends the information      
storage capability to include data such as processing and printing and  
any other data you might want to save.  The third level, Professional,  
adds on client information in addition to the above information.        
                                                                        
FOR PHOTOGRAPHERS allows you to create, edit, save, search, delete, and 
update any data files in the system.                                    
                                                                        
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
║               <<<<  Disk No 1164 FOR PHOTOGRAPHERS  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type PHOTO (press enter)                          ║
║                                                                         ║
║ To copy the documentation to your printer, type PRINT (press enter)     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.DOC

{% raw %}
```





			       FOR PHOTOGRAPHERS
		    NEGATIVE, SLIDE & PRINT CATALOGING SYSTEM
				VERSION  1.4x

			   HomeCraft Computer Products
				 P.O. Box 974
			      Tualatin,  OR  97062









	       This disk contains version 2.00 of For Photographers
	 dated 02-16-90.  This disk contains the following files:


		PHOTO.EXE - Introduction and copyright notice
	     PHOTOPGM.EXE - Main Menu and program
	      UTILITY.EXE - Catalog maintenance functions
		    *.DOC - Introduction and documentation
		PHOTO.DA* - Data files
		 MENU.OVL - File required for program to run
	       BRUN30.EXE - File required for program to run
		OTHER.DOC - Information about other HomeCraft software
		PRINT.EXE - File to print documentation


	 ****************************************************************
	 ****************************************************************
	 ****************************************************************




     FOR PHOTOGRAPHERS is a computer data base system specifically
     designed for professional and amateur photographers or anyone else
     with a collection photographs.  It makes cataloging a photograph
     library easy and allows you to find photos that may have been
     virtually unidentifiable previously.  For Photographers also provides
     a permanent, easy to update catalog of your collection.

     _For Photographers_ is unique in that it actually provides three
     software versions in one package.	Each version builds on the previous
     one, allowing you to catalog your library in a step by step manner. 
     The three versions are called: Family, Photographer and Professional
     Photographer.

     _For Photographers_ has a capacity of 10,000,000 entries per
     data file.  An unlimited number of data files may be used.


     SYSTEM REQUIREMENTS:  _For Photographers_ will run on an IBM PC, XT,
     AT, PS/2 or compatible with a minimum of 256K of memory.  A hard disk is
     highly recommended, but floppy disks may be used (up to 2800 entries can
     be stored on a floppy).  An 80 column printer is required for printed
     reports.



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
	 this software, a contribution of $59.95 is suggested.	Your
	 registration will help keep us in business so we can make
	 improvements and continue to support this software.

	     The contribution will make you a registered user.	As a 
	 registered user you are entitled to free updates, support, and a 
	 current copy of the user's manual and software.
	 A registration form can be displayed and printed from a
	 prompt when the software is run.  Or send $59.95 with your
	 name, address, computer type and the name of this software
	 to the address given below.  (Please include $3.00 for shipping /
	 $5.00 for P.O. Boxes and Canada / $8 outside North America).


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

	      For more information on For Photographers or other HomeCraft 
	 software products contact:

	       Steve Hudgik
	       HomeCraft Computer Products
	       P.O. Box 974
	       Tualatin,  OR  97062 
			 U.S.A.



	      HomeCraft is the leader in software for collectors.  If
	  you have a collection that you'd like to catalog on a computer,
	  write to us and tell us about it.  If we don't have software
	  available we may be able to develop it for your collection.

rite to us and tell us about it.  If we don't have
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
       This manual is copyrighted in 1990 by
       Steven C. Hudgik - All Rights Are Reserved






       SHAREWARE


       This software is provided as shareware.	This means you 
       have the opportunity to try it before you buy it.
       If you find this software useful, you are requested to 
       become a registered user.  Registered users receive the most 
       recent version of the software, free updates for one year, 
       a printed manual, and free support.

       This software is copyrighted and all rights remain with the 
       author.	However, you are granted permission to make as many 
       copies as you wish, provided no fee is charged if you 
       provide a copy to someone else.	You may freely distribute this
       software, if you wish, on this basis.  If you need to 
       charge a fee to cover distribution costs, please contact 
       HomeCraft to receive written permission.

       To register as a user send $59.95 to the address below (VISA and 
       MASTER CARD are accepted), plus $3.00 for shipping and handling.
       ($5 for Canada and $8 for airmail outside North America).

       HomeCraft
       P.O. Box 974
       Tualatin,  OR  97062



+
       HOMECRAFT'S COLLECTORS SOFTWARE

       USER'S MANUAL


       TABLE OF CONTENTS


       INTRODUCTION ...........................   page 2

       LEVELS OF OPERATION ....................   page 3

       THE MAIN MENU ..........................   page 4
	 File Names				       4
	 Level					       5
	 
       MAKING ENTRIES .........................   page 6

       SAVING THE ENTRY .......................   page 7

       EDITING EXISTING ENTRIES ...............   page 8
	 Moving Through The Catalog		       9

       SEARCHES AND PRINTED REPORTS ...........   page 10
	 List All				       11
	 Searches				       12
	 Editing After A Search 		       13

       UTILITIES ..............................   page 14
	 Copy Files				       15
	 Rebuilding Indexes			       16

       APPENDIX (Specific Information About
	 The Software You Have) ..............	  page 19

+
      USER'S MANUAL



      INTRODUCTION







      Thank you for trying one of HomeCraft's specialty databases.
      This software has been designed for storing; then organizing,
      searching, sorting and retrieving the specific information
      you need.

      Since all of our specialty databses work in the same manner
      this manual applies to them all.	Specific information about
      each program is provided at the end of this manual.

      To run this software you will need an IBM PC, XT, AT, PS/2 
      or compatible with a minimum of 256K of memory and two floppy
      disks.  We recommend that a hard disk be used if you have more
      than 1000 items in your collection.  This software can handle
      10,000,000 entries per file - and you can have multiple files.
      The result is that you can build some very large date files
      using several megabytes.	A minimum of a 20 megabyte hard
      disk is recommended.

      No other software is required (except the DOS operating system).
      However, we do recommend you purchase a back up utility for your
      hard disk.  Your data files SHOULD BE BACKED UP any time you've
      made significant changes.  A good rule of thumb is to back up
      you data any time you've made more entries/changes than you'd
      want to type over again.


      This software is completely menu driven and easy to operate.  
      Since the computer does all the hard work for you, this manual 
      is short. We'll describe how to enter information; what to do to 
      edit existing entries; and how to find the entry(s) you need.

+
      THE THREE LEVELS OF OPERATION



      This software has three levels.  The three level feature allows
      you to determine the amount of information you want to save for
      each entry.  If you have valuable information, or need complete
      descriptions for professional use, you can catalog your collection
      at a level of very fine detail.  On the other hand, if you just
      need a quick way to find specific entries (or types of entries),
      you can use the first, less detailed level.  Since you can set up
      as many separate data files as you wish, you can divide your
      collection and categorize each part in as much or little detail
      as you want.

      Information about the specific fields and levels in the
      version of the software you have is provided at the end of
      this manual.

+
      THE MAIN MENU



      The Main Menu will always be the first thing you see when you 
      boot up the software.  If you have a monochrome monitor, and 
      just see dark blocks on your screen, then push F1.  F1 toggles 
      the setting for color on and off.  Dark blocks on a monochrome 
      monitor indicate the software is set for color and your computer 
      does not have color emulation.

      You can make a selection from the Main Menu in one of two ways; 
      you can push the number associated with the function you want to 
      use, or you can use the up/down cursor keys to move the scroll 
      bar to the selection you want and then push ENTER.

      The first three items on the Main Menu are used to manipulate 
      the information in your catalog.	You can enter new entries,
      edit information already in the catalog, or search the catalog.  
      Items 4 through 6 are features that determine how the software 
      will run.  We will take a quick look at these set-up functions 
      first.


      File Name

      The filename is the name used for storing your catalog on the 
      disk.  You can have as many separate catalogs as you wish, using 
      a different filename for each.  Up to 10,000,000 entries can be 
      made in each catalog.

      When you push #4 the current filename will be listed and you'll 
      be prompted to enter a new filename.  You may use up to eight 
      letters for a filename.

      If you push ENTER without entering a filename, the software will 
      use a preset filename.

+
      You may also designate the disk drive you want the catalog 
      stored on.  To designate a drive other than the drive you are 
      currently using, type the letter for that drive and then a colon 
      before typing the filename.  For example, to use the filename 
      TEST on the "B" disk drive you would enter:

	   B:TEST

      The software will automatically add .DAT to the end of all 
      filenames.  If you should put a period in the filename or add a 
      filename extension such as .DAT the filename will not be 
      accepted.


      Utilities

      This leads you to another menu that provides several utility 
      functions.  Using these utilities you can copy entrys from one 
      file to another, rebuild a damaged index, erase deleted entries, 
      reserve space on your disk for future entries and set the access 
      code.  All of these utilities are described in detail in the 
      Utilities section of this manual.


      Level

      As we've already described you may use any of three levels of 
      data storage.  Push #6 to select the level you want to use.  A 
      menu will appear and you can then push the function key (F key) 
      associated with the level you want to use.  

      You can change levels at any time and make entries with a 
      variety of level settings.  However, the software will set the 
      file sizes for the highest level used in that file.  Thus, you 
      do not save disk space by making entries at the the lowest 
      level, if there is even one entry at any higher level for the 
      same file.

+
      MAKING ENTRIES	




      Entering information into the catalog is very simple.  Select #1 
      on the Main Menu and an information entry screen will appear.

      The length of the bar next to each item shows the amount of 
      space available for each item.  The cursor will not go past the 
      ends of the bar.

      The cursor can be moved around on the screen by using the 
      up/down and right/left arrow keys.

      If you are using a higher level, then the PgDn and PgUp keys are 
      used to move from one page to another.  There are three possible 
      pages, as each level has its own page.  When you move to the 
      second page the first two lines from the first page will remain 
      on the screen.  On the third page the top three lines from the 
      first page will be at the top of the screen.  This information 
      is provided to allow you to see  which entry you are working on.	
      It can only be entered and edited, however, from the first 
      screen.

+
      SAVING THE ENTRY

      Once you've entered all the necessary information push the F5 
      key to save this entry.  F5 can be pushed while any of the three 
      screens are displayed.


      There is also a feature that will save you some time if you are 
      entering entrys that have basically the same information.  For 
      example, if you have a series of entries that are very similar, 
      all you need to do is enter the information for the first entry.	
      Once that entry is saved, push F3.  This will copy the 
      information from the previous entry.

      Please note, however, that this copy feature only copies the two 
      screens.


      When you are finished making entries, push F10 to return to the 
      Main Menu (after pushing F5 to save the last entry you made).

+
      EDITING EXISTING ENTRIES



      Selection two on the Main Menu allows you to change any part of 
      any existing entry.

      You will first be asked for the number of the entry you want to 
      edit.

      As you make entries the software automatically numbers them 
      sequentially.  The first entry you make is number 1; the 100th 
      is number 100.  This number is displayed in the upper right of 
      the screen when you are making entries.  It is also printed on 
      all reports.

      If you don't know the number for the entry you need to change, 
      use the search function to find the entry.  When the entry is 
      found you will automatically be in the edit mode (more on that 
      shortly).

      Once you have entered the number for the entry you want to 
      change it will be displayed on the screen.  You can then make 
      changes in the same way you originally entered information.  So 
      that you can see what you've changed the original entry is 
      highlighted.  The highlighting will not be shown at any spot 
      where a change has been made.

      When you have made all the needed changes, push F5 to save the 
      edited entry.

      Pushing F10, before you push F5, will return you to the Main 
      Menu without saving any of the changes.


      Deleting An Entry

      The editor is also used to delete an entry from the catalog.  
      With the entry you wish to delete on the screen, push the F4 
      key.  This will not erase the entry - all the information will 
      still be there.  The entry will be marked as deleted, however, 
      and will be skipped in any search of the catalog.  You can 
      "undelete" an entry by pushing F5 to re-save the entry.
+
      If you wish to completely eliminate an entry from the catalog, 
      you can use the editor to type in a new entry in the same spot 
      as the deleted entry.  There is also a library utility that will 
      erase all deleted entries from the catalog (more on that 
      shortly).



      Moving Through The Catalog

      There is one other convenient feature in the editor.  You can 
      browse through the entries in your catalog, moving either 
      forward or backward, by pushing the F1 and F2 keys.  F1 will 
      move the display back by one entry.  F2 will show the next 
      entry.

+
      SEARCHES AND PRINTED REPORTS





      The most useful function is the Search / Printed Report 
      function.  This is the function you use to sort and find 
      specific entrys or types of entrys.

      Select #3 on the Main Menu and you'll see a screen that looks 
      like the information entry screen.  The information you want to 
      search for is entered on this screen (or the series of three 
      screens at the third level).

      First, however, lets look at the functions listed at the bottom 
      of the screen.	A menu with abbreviated prompts appears there.	
      To get a more detailed explanation of each prompt push the F1 
      key for HELP.


      F2 - TOGGLE OUTPUT   - Pushing F2 will change how the report 
      is printed.  The default setting is the monitor.	At this 
      setting each entry will be listed on the monitor, one at a time.

      Push F2 to change the setting to CONTINUOUS.  Now the report 
      will be printed on continuous paper on your printer (BE SURE 
      YOUR PRINTER IS ON!).  The perforations will be skipped based on 
      66 lines per page.

      Push F2 again to change the setting to SINGLE.	This setting 
      also sends the report to your printer, however, the search will 
      pause once every 66 lines to allow you to put another sheet of 
      paper in the printer.  This setting is generally used for daisy 
      wheel printers.

      One nice feature is that no other printer set up is required.  
      The software will automatically work with almost any type of 
      printer.	(Laser printers may require special settings of their 
      dip switches as they may not use 66 lines per page).
+
      When you're using either the CONTINUOUS or SINGLE setting each 
      entry that matches the search criteria will be displayed on the 
      screen.  If there are a lot of entries that come close together 
      in your catalog, these may only be on the screen for a short 
      time.

      Push F2 one more time to change the setting to DISK.  The report 
      will now be stored as an ASCII file on your disk.  Before the 
      search starts you will be given the chance to enter the drive 
      and filename you want to use for the report.  If no name is 
      entered, then a preset filename will be used.	Do not enter a 
      filename extension - the extension ".DOC" will be added to all 
      filenames.



      List All - If you want to get a complete listing of the 
      contents of your catalog, or list a block of entries (for 
      example the entries you made today so you can check them for 
      correctness), then press either F3 or F4.

      Pressing F3 will result in the entries being listed in the order 
      they were entered.  After pressing F3 you will be asked for the 
      entry number to start the listing at and the entry number to end 
      it with.	If you chose an ending entry number that is higher 
      than the total entries in the catalog, or is lower than the 
      starting number, it will not be accepted.

      The F3 function is most useful in checking entrys you've just 
      entered.	Select a range of entry numbers that includes your 
      most recent entries.  The resulting printed report is an easy 
      way to check for typos in these new entries.


      F4 is used to get a listing of all of the entries in your 
      catalog in alphabetical order.  You must be using the indexing 
      feature (Index On) for this function to work.  When F4 is 
      pressed a small menu will appear in the lower right corner of 
      the screen.  The indexing is based on the top three items on the 
      first screen.  Select the index you wish to use by pushing 
      the appropriate F key.
+
      Searches 

      To perform a search first set the F2 toggle for the type of 
      report you want to get.  Then enter the information you want to 
      search for.  You can use the cursor and PgUp/PgDn keys to move 
      through the screens just as you did when making entries.	You 
      can enter information on any one line or all of the lines.

      There are three different ways you can search your catalog.

      F6 - Normal Search:  When you push F6 an index search will be 
      conducted, if you've entered something to search for on the top 
      three lines of the first screen.	The top three lines contain
      the information most frequently searched for.  Since the indexes
      can use a significant amount of space only these three are
      indexed.	The Super Utilities (an add-on utility available
      to registered users) provides indexing and sorting for all fields.

      Indexing provides a way to locate specific information very 
      fast.  Even with tens of thousands of entries the index will be 
      able to locate any entry within a second or two.	In addition, 
      with indexing you can get an alphabetical listing of your
      inventory.

      The other type of search is a sequential search.	This means 
      that every entry in the catalog is looked at to see if it is a 
      match.  A sequential search starts with the first entry you made 
      and step through all subsequent entries until a match is found.

      Sequential searches are started by pushing F7 or F8.
       
      In a sequential search any entry that contains the information 
      you entered will be identified as a match.  For example, in this 
      case if you enter "Roses," Red Roses will be identified as a 
      match.  Entering just "os" will result in a match with Red 
      R"os"es.

      This leads us to another important point.  The both index and 
      sequential searches will only find exact matches in one 
      respect.	If you search for "Rose", the word "ROSE" will not be 
      found as a match.  The capitalization must match the way the 
+
      word was originally typed into the catalog.  For that reason I 
      always capitalize the first letter of every word.  Another 
      option would be to always capitalize the entire word.

      Getting back to function keys F6, F7 and F8.  As we've 
      discussed, pushing F6 will result in a search that uses the
      indexes.	F7 and F8 provide two different ways to start a 
      sequential search.

      Push F8 to start a normal sequential search.  Your catalog will 
      be searched starting with the first entry and
      continuing through the most recent entry you made.

      F7 provides a special way to search your catalog.  If, for 
      example, you are looking for entries that have the word 
      "Christmas" in them, both the indexed and sequential searches 
      will find entries in the same order every time a search is done.	
      Pushing F7 starts the search at a random location in the 
      catalog, resulting in different entries being found first.



      If you are conducting a sequential search, it may take some time 
      to complete if you have a large catalog.	To pause the search 
      you can push F9.	To stop the search and return to the menu push 
      F10.


      Editing After A Search

      When a search finds a matching entry in your catalog, that entry 
      will displayed on the screen.  You can then edit that entry 
      just as you would using the "Edit An Entry" function.  Type the 
      changes you need to make, then push F5 to save those changes.


      NOTE: The indexes are the most fragile parts of the data files.  
      If at any time you feel the indexes are not working properly, go 
      to the Utilities menu and build new indexes.	The problems 
      should then clear up.
+
      UTILITIES



      There are eight functions available on the Catalog Utilities 
      screen.  Some of these are also available as a part of the Main 
      Menu and are provided as a convenience here.  These functions 
      are:


      Copy Files - Used to copy all of the entries from one file to 
      another file.  This utility is intended for users upgrading from 
      floppy disks to a hard disk.  It will transfer entries from 
      floppy disks to a hard disk, combining the files from several 
      floppies into a single file on the hard disk.

      Rebuild The Indexes - The indexes are the most fragile part of a
      data base.  This function allows you to replace your indexes should
      the index files be damaged.

      Condense Data - When a entry is deleted from the catalog all 
      of the information remains in the file and it can be recovered.	
      If, however, you would like to completely erase all of your 
      deleted entries (i.e. to reduce clutter), this function will 
      permanently remove them from the file.

      File Name - Used to change the current filename being used for 
      cataloging.  (This function is also provided on the Main Menu).

      Reserve Space - This function will set aside space on your 
      disk for future entries in the catalog.

      Level - Allows you to change the level in use.  (This function 
      is also provided on the Main Menu).

      Security Code - Allows you to limit access to your catalog.
      (Not available in the shareware version).

      Customize - Allows you to change the titles on three of the 
      lines, one on each level.
+
      Now let's look at each of these in more detail.



      COPY FILES

      This function will take all of the entries in any data file and 
      add them to the end of any other data file.

      Select #1 on the Utilities Menu and we'll see how this works.

      A series of prompts will lead you through the copy process.

      First you will be asked for the letter of the disk drive from 
      which you'll be copying entries.  Push the letter that corresponds 
      to the drive you want to select.	When you push a letter (only 
      A-F may be selected) the selected drive designation will appear 
      at the bottom of the screen.

      Next push the letter for the drive that contains the file you 
      want to copy to.	This can be the same drive as you will be 
      copying from.

      The file you are copying to does not need to exist yet.  A new 
      file will be created, if required.

      The names of the data files on the disk you are copying from 
      will now be displayed.  You must enter the name of one of these 
      files.  If you enter the name of a file that does not exist, or 
      is not a existing data file, the copy process will be stopped.  
      When you enter the filename, DO NOT enter the .DAT filename 
      extension.

      When you push ENTER the filename will be displayed at the bottom 
      of the screen and the list of data files on the disk you are 
      copying to will be displayed.  Enter up to eight letters as the 
      filename to copy to.  This filename does not need to be in the 
      list of data files.  If you select a file used by another 
      program, that file will be erased and replaced by your catalog 
      data.  That's why the filenames are displayed, so can see what 
      is already on the disk.
+
      The next screen shows the names of the files you are copying to 
      and from.  In addition, the number of entries already in each 
      file will be shown.  All of the entries in the top file will be 
      copied to the second file listed.  They will be added to the end 
      of the second file.

      The level setting for each file will be shown.  You may 
      continue the copy process when the levels do not match, but only 
      data for matching levels will be copied.	For example, if one 
      file is set at the second level and the other is set for the 
      third level, only the data for the first two levels will be 
      copied.  You can exit at this point and reset the level for 
      either file, if you want them to match.

      The indexes are not updated in the copy process.	If you are 
      using the indexes, you will be given the opportunity re-index. 



      REBUILD THE INDEXES

      The function will erase the existing index files and rebuild them
      from scratch.  Everything is automatic once you start the process.
      Since each file must looked at individually rebuilding the indexes
      for a large catalog could take some time.



      CONDENSE DATA

      What do you do if you're running out of space on a floppy disk?  
      One option, if you've deleted quite a few entries, is to remove 
      those deleted entries from your catalog file.	Option 3 on 
      the Library Utilities menu will do that for you.

      When you select #3 you'll be asked to confirm that the correct 
      data file is being used.	Push the letter "Y" if it is the 
      correct file.  All of the entries in that file will be checked 
      and if an entry is marked as deleted, it will be removed from 
      the catalog.  The catalog will be reduced in size by the number 
      of entries that were deleted.  (Note: The file size reported by 
      DOS will not change).
+
      FILE NAME  Option 4 on the Library Utilities menu works in the 
      same way as the change filename function on the Main Menu.



      RESERVE SPACE  This function is used to save space on your 
      disk for future entries in your catalog.	You will be asked for 
      the number of additional entries you plan on making.  Disk space 
      will be reserved for these additional entries.   (See appendix A 
      for the maximum number entries on a floppy disk).

      Reserving space does two important things for you:  It sets 
      aside space on your disk so that if your disk should become full 
      due to other activities, you will still have "reserved" space in 
      which to make entries in your catalog.  This is particularly 
      important when using floppy disks.  Reserving space also helps 
      to keep your data files in adjacent sectors on the disk  (more 
      important for hard disk users).  As files become fragmented, and 
      spread among more widely separated sectors, the access time for 
      getting data from those files becomes greater.  In addition, 
      highly fragmented files are more likely to be damaged over time 
      than files composed of adjacent sectors.

      This software can not put fragmented files back together.  To do 
      that you will need software such as the Mace Utilities, PC-
      Tools, or the Norton Utilities.  If you have any of these, and 
      plan on creating large files (1000 or more entries), I'd suggest 
      unfragment your hard disk first, then reserve the space for your 
      catalog files.



      LEVEL  You can change the level you are using in the same way 
      as at the Main Menu.



      SET SECURITY CODE  This function is not available in the
      shareware version in order to protect the security of
      registered users.
+
      INDEX ON/OFF

      This function turns the indexes on or off.  I recommend that
      if you are using floppy disks, that you turn the indexes off
      to save disk space.  Hard disk users should have the indexing
      on to increase the speed of some searches.
+
off
      to save disk space.  Hard d
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
	FOR RECORD COLLECTORS - Classical Music Version
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
	FOR MEMORABILIA COLLECTORS
	FOR SPACESHIPS
	FOR STAMP COLLECTORS
	FOR SHIP MODEL COLLECTORS
	FOR GUN COLLECTORS (available 4/30/90)


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


Play 'n' Learn - combines 7 education games (plus an additional 12 variations)
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










u missed any of the information, push CTRL NUM LOCK to pause the
screen and any other key
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1164

     Volume in drive A has no label
     Directory of A:\

    APPNDX   DOC      6144   2-15-90   9:32p
    BRUN30   EXE     70680   4-07-87  10:48a
    CONFIG   SYS       128   3-26-88   2:00p
    FILE1164 TXT      2369   3-22-90   3:49p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540   2-14-89   9:06a
    INTRO    DOC      5248   2-16-90  10:16a
    MANUAL   DOC     27776   2-15-90   6:35p
    MENU     OVL       150   1-01-86  11:59p
    OTHER    DOC      5888   2-03-90  11:26a
    PHOTO    BMS        44   2-15-90   9:41p
    PHOTO    EXE     10801   2-15-90   9:43p
    PHOTO    PTO        14   2-15-90   9:41p
    PHOTOPGM EXE    100564   2-15-90   9:39p
    PRINT    EXE      4385   2-03-90   1:24p
    READ     ME       2816   2-15-90   7:06p
    UTILITY  EXE     53812   2-15-90   9:37p
           17 file(s)     291397 bytes
                           19456 bytes free
