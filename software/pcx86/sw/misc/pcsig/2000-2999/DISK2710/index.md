---
layout: page
title: "PC-SIG Diskette Library (Disk #2710)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2710/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2710"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2710.TXT

{% raw %}
```
Disk No: 2710
Disk Title: Techstaff Games Volume I
PC-SIG Version: S1

Program Title: TechStaff Games Volume I
Author Version: 3/91
Author Registration: $5.00
Special Requirements: Some games require graphics.

TECHSTAFF GAMES VOLUME I is a collection of four games plus a small file
viewer program.

Included are:

~ SFV -- A small file viewer program to display text files from any
directory.  SFV also allows the user to change the screen color.

~ KENO -- A game where the computer chooses twenty random numbers from a
possible eighty.  A player may choose from one to eleven numbers, and
after each turn, the number of successful guesses is displayed.

~ WILDCATTER -- An oil drilling game.  Guess where and how deep to
drill, based on available geology reports.  Site location is random, but
the depth you drill to is determined by the reports.  After each well is
set up, you get an income statement.  The game ends when you have no
cash left OR you have a total of ten operating wells.

~ SEA BATTLE -- A battleship game where you must seek and destroy a
submarine located in the depths below.  Fire three depth charges for
each torpedo fired on your ship.  Specify the depth level and the
location of the detonation for each depth charge.  The game ends when
the submarine is completely destroyed or your ship is hit by a torpedo.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## SFV.DOC

{% raw %}
```

                            SMALL FILE VIEWER             version: 2.0

               (C) Copyright, 1988-91 TechStaff Corporation

  
         This version of SFV is being released as Public Domain. It can
         be distributed freely as long as it is not sold, modified or
         separated from this documentation.

	 Shareware vendors do not need to obtain permission to dis-
	 tribute it, however we would appreciate a call or letter. It
	 can be added to disks containing other Shareware/Public Domain
         programs.
								   
         TechStaff Corporation is not liable for any damages resulting
         from using or the inability to use this program and assumes no
	 responsibility as such.


         Overview:

         SFV allocates 50000 bytes of system memory. Text files up to
         5000 lines, 160 characters can be viewed. Files greater than
         50000 bytes cannot be viewed. Wordstar files cannot be viewed.
         Spaces cannot be shrunk to tabstops nor tabstops be expanded
         to spaces. Control characters cannot be blanked. There is no
         search and find feature. A filename cannot be entered from
         the command line. There is no dual action home key or smart
         line editor.
   
         Huge File Viewer must be used to access these features.
         (To get a copy of Huge File Viewer see registration below)

         Upon exiting to Dos system memory is deallocated.
  

         At the Dos prompt   A: enter SFV

         A status line appears at the top. The default directory
         is displayed.

         F1=Help - is for help and can only be entered from the
         File name box. The Esc key clears the help screen.
         The version number appears on the bar menu when ever
         F1 is pressed.

         F2=Color - is for the text display color and can only be
         used when text is displayed. F2 is disabled for monochrome
         systems.

         F5 - displays and changes directory

         Filename= - Displays the filename of the currently loaded
         document. Filename= also displays any of these error when
         they occur.



         INVALID DRIVE      FILE NOT FOUND      DRIVE NOT READY

         This error is displayed in the Filename box.

         FILE TOO LARGE! - Huge File Viewer can bypass this error.

         Small File Viewer clears all filenames and returns to
         Filename box.

         Lines= - displays available memory and counts each line as
         it gets loaded. Limited to 50000 bytes, 5000 lines on Small
         File Viewer. All available bytes, 13000 lines on Huge File
         Viewer.

         File Name: - *.*, this is the default filespec. Use the
         Cursor pad keys to edit the filespec. A block cursor will
         overtype, a 2 line cursor will insert text. Filespecs can
         not be greater than 63 characters. When a filespec is
         entered manually, it appears at the top and again in the
         Filename Box with a different color.(black for color sys)

         Entering any wildcards will list those files in the file
         box. A listing of files can only be obtained if the file
         spec contains wildcards. After entering a desired file-
         spec press the return key.

         If an error occurs, it is displayed and the cursor reappears
         in the file name box. However, the filespec is not cleared,
         and this is not a program bug, this is to simplify the edit-
         ing to correct the filespec with out having to reenter it.

         To load a file from the file box, use the cursor arrow keys
         to highlight that filename and press return. That file name
         appears at the top and again in the File name box. Press Esc
         or the Spacebar key to return to the File name box.

         Once a file is displayed, press Esc to view another file or
         press Esc twice to exit to Dos.

         SFV is machine dependant, the faster the machine the faster
         the loading and scrolling.

         If a DRIVE NOT READY error occurs an "Insert Disk and press
         any key..." message is diplayed.
   
         Both SFV and HFV will detect a single drive system and have
         a special feature to accommodate it.


         Bugs!

	 Bugs are listed only to inform you that older versions may
         have problems and should be deleted and the latest installed.

               The crash that ocurred in Version 1.2 when entering
               certain wildcard combinations has been corrected.

               The Window clearing bug for single drive systems in
               Version 1.5 has been corrected.




         New Features:

              Version 1.5

              The number of files is now listed on the menu bar.

              Version 1.6

              A change directory and disk drive routine has been added.
              Press F5 to activate it. The Spacebar or Esc will clear
              the directory listing. The ".." entry will move the cur-
              rent directory down one level. The [-A-] and [-B-] en-
              tries will change the default drive.

              The number of directories found is now listed on the menu
              bar.

              Version 1.7

              Improvements to the Help Screen.

              Version 2.00 

	      Invoking SFV with a /B will force monochrome.

              Added registration info and Amazing Preview Disk screen.



     SFV REGISTRATION:	 (specify disk size)
	 
	 Although this has been released as Public Domain you can still
	 register it. Here's How!

	 To register SFV and receive Huge File Viewer (HFV) send a Check/
         Visa or MasterCard for $5.00 (Includes S&H!) to the address
         below.	(add $2.00 for the Amazing Preview Disk)
        
     THE TECHSTAFF TOOLS COLLECTION REGISTRATION:

         To register SFV and receive the complete registered set of Tech-
         Staff Tools send a Check/Visa/MasterCard for $19.95 + $3 S&H to:

     ADDRESS:

              TechStaff Corporation Post Office Box 823, Dept: HFV
                       Watertown, MA 02272 (617)924-0306

     The registered set of TechStaff Tools comes with a Printed Users'
     Manual, 2 years technical support, free version upgrade, Amazing
     Preview Disk and the following 14 programs.
         


      TechStaff Huge File Viewer ... File Browser
      TechStaff File Finder ........ Fast! File Finder
      TechStaff File Manager ....... Beginners Copy & Delete Utility 
      TechStaff Disk Tally ......... Totals file sizes in Dir/Disk
      TechStaff Stamp Manager ...... Changes Date/Time attributes
      TechStaff Page Printer ....... Prints up 2600 copies unattended
      TechStaff Volume Label ....... Adds a Volume Label and Verfies
      TechStaff System Information . Displays all about a system
      TechStaff File Exist ......... Quickly determines if a file exists
      TechStaff Skip Perforation ... Skip perf on continous feed paper
      TechStaff Temp. Converter .... Converts numbers to F or C
      TechStaff Free Space ......... How much disk space remains?
      TechStaff Disk Size .......... Are you using a 20/30/40 meg hard disk?
      TechStaff Mouse Tester ....... Tests all parts of a mouse, Buttons too!
 
      Any of the Registered TechStaff Tools can be purchased separately
      for only $5.00 each. Includes S&H!

      (add $2.00 for Amazing Preview Disk)

      Manuals are Only $5.50

      For a review of TechStaff Tools, see Computer Shopper Magazine, Feb.
      1991, p441, Shareware Magazine Sept/Oct 1990, p22
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2710

     Volume in drive A has no label
     Directory of A:\

    SCREEN             576   3-15-91  12:53a
    SFVHELP            590   3-15-91   1:11a
    0        BAT        57   3-16-91  12:09a
    1        BAT        40   3-16-91  12:11a
    2        BAT        40   3-16-91  12:06a
    3        BAT        39   3-16-91  12:07a
    4        BAT        38   3-16-91  12:08a
    GO       BAT        28   3-16-91  12:08a
    SFV      DOC      7823   3-11-91   1:37a
    BOWL     EXE     39292   3-13-91  12:06a
    DRILL    EXE     59286   3-15-91  12:46a
    KENO2    EXE     37500   3-13-91  12:14a
    SFV      EXE     63524   3-13-91   2:10a
    SUB      EXE     61052   3-15-91  12:49a
    FILE2710 TXT      1479   7-25-91   2:17a
           15 file(s)     271364 bytes
                           40960 bytes free
