---
layout: page
title: "PC-SIG Diskette Library (Disk #2288)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2288/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2288"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TECHSTAFF TOOLS #1 (2289 ALSO)"

    This program is designed to be used in conjunction with the NORTON
    GUIDES, PC-BROWSE, and MicroSoft-compatible MAKE files that control the
    compilation of large projects. It reads the ASCII source code for any
    program and extract the comments which indicate the purpose, function,
    and expectations of the various building blocks of your program.
    
    NG_MAKER will combine and assemble these comments in a database file
    compatible with the NORTON GUIDES or PC-BROWSE. Once completed, you
    can call up either program and review the various building blocks of
    the program you are working on.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2288.TXT

{% raw %}
```
Disk No: 2288                                                           
Disk Title: TechStaff Tools #1 (2289 also)                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: TechStaff Tools                                          
Author Version: 1.01                                                    
Author Registration: $29.95                                             
Special Requirements: 640K RAM. Mouse and hard drive recommended for som
                                                                        
This is a disk of 12 utilities you can use with your hard drive, floppy 
drive, mouse or printer;                                                
                                                                        
~ TECHSTAFF DISK SIZE (TDS) - Displays the media size of a disk.        
                                                                        
~ TECHSTAFF FREE SPACE (TFS) - Displays the number of bytes remaining on
a disk.                                                                 
                                                                        
~ TECHSTAFF VOLUME LABEL (TVL) - Changes the volume label of a disk, and
verifies that change.                                                   
                                                                        
~ TECHSTAFF TEMP CONVERTER (TTC) - Converts and displays a number to    
fahrenheit and centigrade.                                              
                                                                        
~ TECHSTAFF STAMP MANAGER (TSM) - Changes the date and time attributes  
for a file.                                                             
                                                                        
~ TECHSTAFF MOUSE TESTER (TMT) - Tests all functions of a mouse,        
including sensitivity, buttons, range, cursor color, and cursor         
visibility. On-line help and mouse driver included.                     
                                                                        
~ TECHSTAFF SYSTEM INFORMATION (TSI) - Displays everything about a      
system.  A second page of info is displayed on 286/386 machines.        
                                                                        
~ TECHSTAFF FILE-FINDER (TFF) - A file finder program that will search  
any disk for a file.  Once a file is located the FILE-FINDER can        
optionally move to that directory.  File sizes and total bytes of all   
files in each path searched are displayed.                              
                                                                        
~ TECHSTAFF HUGE FILE VIEWER (HFV) - A text viewing utility mostly for  
286/386 and turbo system but will run on any system.  Displays ASCII and
WordStar files.  A file to be be viewed can be selected from a the      
program. The program can also change to different directories, search   
and find exact text and change text color.  An on-line help screen can  
be displayed, includes dual action home key and smart line editor       
features.                                                               
                                                                        
~ TECHSTAFF PAGE-PRINTER (TPP) - Can print ASCII and WordStar type      
files. Pick a file to print from a directory listing or enter a filename
manually and switch directories all from within the program. Prints up  
to 2600 copies. A pause function allows a time delay after each sheet is
printed for single sheet feeding. Draft or near letter quality can be   
double striked to improve the final copy. Fully menu-driven.            
                                                                        
~ TECHSTAFF FILE MANAGER (TFM) - A straightforward copy and delete      
utility. When a disk gets full simply insert another and continue       
copying. Displays how much space is left on the target disk and how much
is required to copy the tagged files. Works well even with a single     
drive system, and tells exactly what disk to place into the drive for   
read and write operations.                                              
                                                                        
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
║             <<<<  PC-SIG Disk #2288  TECHSTAFF TOOLS  >>>>              ║
║ 			(Disk 1 of 2, also #2289)	                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type:  COPY OPTION PRN  (press Enter)           ║
║ 				 COPY ORDER PRN   (press Enter)           ║
║                                COPY SITE PRN    (press Enter)           ║
║                                COPY HFV.DOC PRN (press Enter)           ║
║ 									  ║
║ To just view any of those documents, type:  TYPE <filename>             ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## HFV.DOC

{% raw %}
```
                       TechStaff Huge File Viewer 1.01

                        TechStaff Tools, Version 1.01

		     

	 A text viewing utility for 286/386 and fast Turbo systems.


         Requirements:
          
         Dos 2.1 or greater         1 Disk(ette) Drive

         256K - 640K ram memory     80 column monitor

         Monochrome, Hercules, Cga, Ega or Vga display adapters


         Make 1 backup copy of the HFV diskette.



         Getting Started 

         At the Dos prompt... A: enter   HFV
 
         optional...   HFV  [d:][path][filename][.ext]

         A filename can be entered when invoking HFV (no wildcards)

         A status line appears at the top. The default directory
         name is displayed.

         F1=Help - is for help and can only be viewed before a file
                   is displayed. The Esc key clears the help screen.
  
         F2=Color - is for the text display color and can only be
                    used when text is displayed. F2 is disabled for
                    monochrome systems.

           

         F3  - Change directory or default drive. Lists all directories
               under the current directory and optionally changes di-
               rectories and default drives. Space bar or Esc clears di-
               rectory listing. The ".." entry will move directory down
               one level. Highlight the desired choice and press Enter. 
               Press Enter for yes at the verify box or "N" or "n" 
               to cancel.


         F4  - Find Exact: Enter the search text string. The string
               must be exact (ie... capitalization) or it will not be
               found. The string can have up to 60 characters. F6 will
               clear the text string. Esc will clear the text box and
               abort the operation.


         F5  - Continue search. A text string must be entered first.
               See the F4 entry. The search displays each page as it
               is searched and will end where it started if F5 is con-
               tinually pressed.

               Example: entering  TechStaff will find TechStaff but 
               will not find techStaff.
         
               If a match is found, the text will be displayed with an 
               inverse background and will be capitalized. Clear the
               match by moving any Cursor pad key, (ie... arrows, pgup,
               pgdn) or press F5 to continue the search.


         F10 - Pressing F10 will strip the Hi-bit of WordStars files.
               Pressing F10 again will turn it off.  An Ascii On
               message is displayed in the lower right corner.

         Filename= Displays the filename of the currently loaded
                   document. File and directory totals are dis-
                   played here. Filename= also displays any of 
                   these error when they occur.


              INVALID DRIVE      FILE NOT FOUND      DRIVE NOT READY

         This error is displayed in the Filename box.

         File too Large! Press Enter to Load anyway, Esc to Cancel...

         As much as possible is loaded.

         Lines= - displays available memory and counts each line as
         it gets loaded.
    
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
         in the file name box.  HFV features Smart Line Editor(tm)

         However, the filespec is not cleared, and this is not a
         program bug, this is to simplify the editing to correct
         the filespec with out having to reenter it.

         To load a file from the file box, use the cursor arrow keys
         to highlight that filename and press return. The filename
         appears at the top and again in the File name box. Press Esc
         or the Spacebar key to return to the File name box.

         Once a file is displayed, press Esc to view another file or
         press Esc twice to exit to Dos. Esc can also be pressed to
         abort the loading operation. Use the cursor pad keys to
         scroll. Text is scrolled sideways six characters at a
         time.

         Dual Action Home Key (tm)-If the currently displayed page is
         at column 1 and the home key is pressed, the first page will
         be display but if the currently displayed page is a column 
         other than 1 then the display will move to column 1, pressing
         home again will display the first page.

         If a DRIVE NOT READY error occurs an "Insert Disk and press
         any key..." message is displayed.
    
        TechStaff Corporation is not liable for any damages re-
        sulting from using or the inability to use this program.
       

        Trademarks

        Huge File Viewer, Smart Line Editor, Dual Action Home Key and
        TechStaff Tools are trademarks of TechStaff Corporation. 

       (C) Copyright, 1989 TechStaff Corporation, All rights reserved.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2288

     Volume in drive A has no label
     Directory of A:\

    OPTION             899  11-19-89  12:20a
    ORDER             1920   9-20-89   4:18a
    SITE               988   9-20-89   3:51a
    HFV      DOC      5713   7-12-89  12:09a
    HFV      EXE     69741   7-20-89   1:50a
    TFF      EXE     71731   7-23-89   1:34a
    TFM      EXE    103943   7-20-89   1:41a
    TPP      EXE     84331  10-19-89   3:48a
    FILE2288 TXT      4811   7-17-90   4:55p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       769   1-01-80  12:21a
           11 file(s)     344886 bytes
                           12288 bytes free
