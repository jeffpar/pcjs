---
layout: page
title: "PC-SIG Diskette Library (Disk #1359)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1359/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1359"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ARGAFIND, ARGAMENU, AND ARGACOPY"

    Three related programs to simplify life on the hard drive!
    
    ARGA-FIND is welcome relief for hard disk owners who forget in which
    directory, or sub-sub-subdirectory they left a needed file! A misplaced
    file lost somewhere on a 20 MB hard disk is the modern day "needle in a
    haystack"! Fortunately, this program does the searching for you and
    displays the located filename, length, date, time, and path to get to
    it. Since "wild-cards" are permitted, the full filename need not be
    known. This version can search a maximum of 512 directories, with 512
    files per directory.
    
    ARGA-MENU makes it easy for you to bring order to your countless files
    and programs on your hard disk by creating point-and-shoot menus. This
    means you can automatically call up a program on any drive or directory,
    without needing to know where it's located or defining its DOS path --
    all with one key-stroke. When you exit one of these files or programs,
    you are automatically returned to the menu. Menus are a great way of
    limiting other users to specific programs or files in your system where
    they can do no harm!
    
    ARGA-MENU can hold up to 90 menu selections, organized as nine pages
    with 10 entries on each page. Menus in different directories can be
    "chained" to each other for greater flexibility. The program guides
    you through installation and updating, with all menu entries made from
    the menu, without using a text editor or wordprocessor.
    
    ARGA-COPY is a DOS shell that lets you do the most common DOS operations
    (copy, delete, etc.) with the direction cursor keys or a mouse. When
    performing housekeeping chores on a hard disk, or even floppies -- such
    as erasing no longer needed files, moving files from one directory to
    another, etc. -- you will quickly appreciate not having to continuously
    type in DOS commands and path names! A click or keystroke selects any
    of eight of the most useful DOS commands, and three file sort functions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARGACOPY.DOC

{% raw %}
```















                                 ARGA-COPY

                                Version 1.0

           DOS Utility for the IBM PC, XT, AT and Compatibles



                  Program and Manual Copyright (C) 1989.
                           All rights reserved.




                                 RGA Inc.
                           9237 Coxboro Court,
                           Brentwood  TN 37027.





































                      STATEMENT OF LICENSE

This program is protected by United States Copyright Law.  
Distribution of this software is expressedly prohibited, except as 
authorised herein.  Without written consent from the author, you are 
granted a limited licence to make a single copy of this program for 
trial use on a non-commercial basis, and, as a registered user, 
licence to make archival copies for the sole purpose of protecting 
yourself from loss. You may, in addition, share this program as 
received with other users as long as no fees are charged.  Arga-Copy 
version 1.0 is distributed as User Supported Software, which requires 
registration and payment if you decide to use the program on a regular 
basis. The current registration fee is $15. 


                  STATEMENT OF LIMITED WARRANTY

RGA Inc. reserves the right to make improvements in this program at 
any time, without prior notice, and without obligation to provide the 
improved product to users or to notify users of the change. 

Arga-Copy, version 1.0, is distributed "as-is", without warranty of 
any kind, either expressed or implied, including, but not limited to, 
the stated purpose of the program.  The user assumes the entire risk 
as to the quality and performance of the program. 


                      PROGRAM DESCRIPTION

Arga-Copy is a DOS "shell" which is designed to allow a user to 
perform the most common DOS operations with the minimum number of 
keystrokes.  DOS functions and paths are selected using the direction
keys and a menu, or by use of a mouse.  The menu contains eight of the 
most useful DOS commands, and three file sort functions, as follows -

                        Sort by File Name
                        Sort by File Extension
                        Sort by File Date
                        Copy File(s)
                        Move File(s)
                        Erase File(s)
                        Rename a File
                        Display a File
                        Print a File
                        Make a Directory
                        Remove a Directory

The program also displays the directory "tree" of a selected drive, 
the number of bytes available, and the number of files in a selected 
directory.

This version can be used with a MAXIMUM of 23 drives, 256 directories,
and 384 files per directory.







                                Page 1.




                      INSTALLATION AND USE

Arga-Copy requires no installation.  It is run by typing "argacopy" at 
the DOS prompt, followed by "ENTER". 

Once installed, operation of the program is straightforward -

     The program automatically determines the number of drives 
     installed, and displays these on the right of the screen.
     
     The "UP", "DOWN" , "HOME", and "END" direction keys are used to 
     select the drive or the menu selection.

     The "TAB" key switches the action of the direction keys between 
     the menu and the drives.

     The selected menu action is initiated by the "ENTER" key. 
      
     If the selected drive contains directories, the first level of 
     these will be listed as a "tree" on the right of the screen.  The
     direction keys are again used to select the required directory.
     Sub-directories are selected in the same manner, until the files 
     contained in the last selected directory level are displayed.

     The "PAGE UP" and "PAGE DOWN" keys can be used to scroll the 
     screen if there are more than 23 directories or files.

     A mouse may be used as an alternative input device, if installed.
     Pressing the left mouse button selects the entry at the location 
     of the mouse cursor, either from the menu, or the 
     drive/directory/file listing.  Releasing the mouse button with 
     the mouse cursor located on a file initiates the function
     currently selected in the menu.

     The mouse may also be used to "tab" between the menu or the 
     drive/directory/file list by locating the mouse cursor on the 
     "Change" command at the lower left of the screen, and pressing 
     the left mouse button.

     The "ESC" key backs up through selected directories/files and 
     causes the program to terminate if pressed while the drives are 
     displayed.  Alternatively, the mouse may be used to back up by 
     locating the mouse cursor on the "Exit" command and pressing the 
     left mouse button.  The right mouse button functions in the same
     way as the "ESC" key.



The following functions are provided -  

     Sort by Filename - If this menu entry is selected together with a 
     drive/directory containing files, the files are displayed sorted 
     by the filename.

     Sort by File Extension - Sorts the files in the selected
     drive/directory by the filename extensions.

     Sort by Date - Sorts the files in the selected drive/directory by 
     the date at which the file was created or changed.


                                Page 2.




     Copy - Pressing return, or pressing and releasing the mouse 
     button with the mouse cursor on a file, initiates the copying of 
     the selected file.  The program re-displays the drives and the 
     directory tree to allow selection of the destination 
     drive/directory.   The copying of multiple files is also 
     possible.  The files to be copied are selected in this case by 
     pressing the "+" key(s).  This action "marks" the file to be 
     copied.  Once all of the files to be copied have been selected, 
     pressing return initiates the selection of the destination 
     drive/directory.  A file selected in error can be "unmarked" by 
     again pressing the "+" key(s) while the file is highlighted.

     Move - Works the same as copy, but removes the file from the 
     source drive/directory.  Files may be moved between drives as 
     well as directories.  Again, multiple files may be moved at the 
     same time by using the "+" key(s) to "mark" the file.

     Erase - Deletes the highlighted file, or the "marked" files, or 
     the file on which the mouse cursor is located when the left mouse 
     button is released.  NOTE - THERE IS NO WARNING BEFORE THE 
     FILE IS ERASED.

     Rename - Displays the name of the selected file in an editing 
     window under the menu.  The filename may be changed using the 
     "LEFT", "RIGHT", "HOME", "END", "INS", and "DEL" keys.  Only 
     valid DOS filename characters are allowed.  Pressing "ENTER" 
     terminates the edit and changes the filename.  "ESC" terminates 
     the action without changing the filename.

     Display - Clears the screen, and displays the contents of the
     file.  The "UP", "DOWN", "PGUP", and "PGDN" keys can be used to 
     move forwards and backwards through the file.  The "ESC" key 
     terminates the file display, and returns to the program. 

     Print - Outputs the selected file to a printer connected to the 
     parallel port.

     Make Directory - Creates a new directory or subdirectory on the 
     selected drive/directory.  The new directory name is entered in 
     the editing window which appears under the menu.  Pressing 
     "ENTER" terminates the edit and creates the new directory.  The 
     "ESC" key terminates the actionwithout creating the directory.

     Remove Directory - Removes the highlighted directory, or the 
     directory on which the mouse cursor is located when the left 
     mouse button is pressed and release.  The directory must be empty 
     before it can be removed.














                                Page 3.









                    REGISTRATION AND COMMENTS.

Arga-Copy is distributed as user supported software.  If you
intend to use the program on a regular basis you are requested to 
register as a regular user at a cost of $15.00.  Registration will 
provide you with telephone support, notification of updates, and the 
option of purchasing other programs released by RGA Inc. at a 
discount.  Customized versions of the program are also available. 

Registration, payment, and user comments should be made to -




                            RGA INC.,
                       9237 COXBORO COURT,
                      BRENTWOOD, TN. 37027.


















                             




















                                Page 4.





```
{% endraw %}

## ARGAFIND.DOC

{% raw %}
```
















                                 ARGA-FIND

                                Version 1.0

           Search Utility for the IBM PC, XT, AT and Compatibles



                  Program and Manual Copyright (C) 1989.
                           All rights reserved.




                                 RGA Inc.
                           9237 Coxboro Court,
                           Brentwood  TN 37027.



































                      STATEMENT OF LICENSE

This program is protected by United States Copyright Law.  
Distribution of this software is expressedly prohibited, except as 
authorised herein.  Without written consent from the author, you are 
granted a limited licence to make a single copy of this program for 
trial use on a non-commercial basis, and, as a registered user, 
licence to make archival copies for the sole purpose of protecting 
yourself from loss. You may, in addition, share this program as 
received with other users as long as no fees are charged. Arga-Find 
version 1.0 is distributed as User Supported Software, which requires 
registration and payment if you decide to use the program on a regular 
basis. The current registration fee is $15. 


                  STATEMENT OF LIMITED WARRANTY

RGA Inc. reserves the right to make improvements in this program at 
any time, without prior notice, and without obligation to provide the 
improved product to users or to notify users of the change. 

Arga-Find, version 1.0, is distributed "as-is", without warranty of 
any kind, either expressed or implied, including, but not limited to, 
the stated purpose of the program.  The user assumes the entire risk 
as to the quality and performance of the program. 


                      PROGRAM DESCRIPTION

Arga-Find is a search utlity which is designed to allow a user to 
locate any file on a selected disk.  Since the use of "wild-cards" is 
permitted the full file name does not need to be known.  The program 
displays the located filename, length, date, time, and the path name. 

This version can be used to search a MAXIMUM of 512 directories, 
containing 512 files per directory.
  
The program is designed for extreme simplicity of operation. 


                      INSTALLATION AND USE

Arga-Find requires no installation.  It is run by typing "argafind" at 
the DOS prompt, followed by "ENTER". 

Once installed, operation of the program is straightforward -

     The program automatically determines the number of drives 
     installed. 
     
     The "UP" and "DOWN" direction keys are used to select the drive 
     to be searched.  In the unlikely event that more than ten drives 
     are installed, the list of drives will scroll in the drive window. 
      
     The name of the file to be searched for is entered at the command 
     line. 

     The "END", "HOME", "INS", "DEL", and the "LEFT" and "RIGHT" keys 
     can be used to edit the entry.


                             Page 1.




     The DOS "wild cards" can be used in the search file spcification. 
     ("?" replaces any single unknown letter.  "*" replaces any 
     string). 
                                                                       
     The search is started by pressing the "ENTER" key. 

     Once a file matching the search specification is located, the 
     program pauses and waits for any key to be pressed.  Pressing any 
     key causes the program to search for the next matching file 
     specification.
           
     The "ESC" key terminates the search, and is also used to exit the 
     program.









                    REGISTRATION AND COMMENTS.

Arga-Find is distributed as user supported software.  If you
intend to use the program on a regular basis you are requested to 
register as a regular user at a cost of $15.00.  Registration will 
provide you with telephone support, notification of updates, and the 
option of purchasing other programs released by RGA Inc. at a 
discount.  Customized versions of the program are also available.

Registration, payment, and user comments should be made to -




                            RGA INC.,
                       9237 COXBORO COURT,
                      BRENTWOOD, TN. 37027.






















                             Page 2.





```
{% endraw %}

## ARGAMENU.DOC

{% raw %}
```















                                 ARGA-MENU

                                Version 2.0

           Menu Utility for the IBM PC, XT, AT and Compatibles



               Program and Manual Copyright (C) 1987 - 1989.
                           All rights reserved.




                                 RGA Inc.
                           9237 Coxboro Court,
                           Brentwood  TN 37027.





































                      STATEMENT OF LICENSE

This program is protected by United States Copyright Law.  Distribution 
of this software is expressedly prohibited, except as authorised 
herein.  Without written consent from the author, you are granted a 
limited licence to make a single copy of this program for trial use on 
a non-commercial basis, and, as a registered user, licence to make 
archival copies for the sole purpose of protecting yourself from loss. 
You may, in addition, share this program as received with other users 
as long as no fees are charged. Arga-Menu version 2.0 is distributed as 
User Supported Software, which requires registration and payment if you 
decide to use the program on a regular basis. The current registration 
fee is $15. 


                  STATEMENT OF LIMITED WARRANTY

RGA Inc. reserves the right to make improvements in this program at 
any time, without prior notice, and without obligation to provide the 
improved product to users or to notify users of the change.

Arga-Menu, version 2.0, is distributed "as-is", without warranty of any 
kind, either expressed or implied, including, but not limited to, the 
stated purpose of the program.  The user assumes the entire risk as to 
the quality and performance of the program. 



                      PROGRAM DESCRIPTION

Arga-Menu is a menu utility which is designed to simplify user access to 
application programs and DOS commands, particularly on systems which 
use a hard disk.  It may also be used on floppy disks subject to memory 
capacity limitations.

Arga-Menu has the following advantages over similar programs -

        o Capacity for up to 100 menu selections, organized as 10 pages 
          with 10 entries on each page.  Version 2.0 allows selection
          using the first character of the directory entry, the 
          direction keys and the "ENTER" key, or by using a mouse.

        o Capability to access COM, EXE, BAT files and DOS commands.

        o Simple installation and update, with all menu entries made 
          from the menu, without use of a text editor or word processor. 

        o Access to programs on any drive or directory. 

        o Simple selection of the number of menu pages in use, of
          display colors, and the menu title.

        o The ability to "chain" menus in different directories, for
          even greater capacity, if required.             

        o The ability to enter a DOS command line without exiting the 
          menu.
 


                             Page 1.




                           INSTALLATION

Arga-Menu is installed by -

        a) Copying the file ARGAMENU.EXE from the source disk to the 
           required directory on the hard disk (or to another floppy 
           disk).

        b) Running the file ARGAMENU.EXE. (This will set-up two
           additional files in the same directory, called, 
           respectively, MENU.LST and PICK.BAT. After setting-up the 
           files, the program will exit to DOS).

        c) Running PICK.BAT.

Once the program has been installed in this manner, all future 
accesses to Arga-Menu should be made through PICK.BAT.

Example -

a) To install ARGAMENU.EXE in the root directory of the hard disk,
   (drive c:), from a floppy in drive a:, type -
        
                   copy a:argamenu.exe c:\

b) Change to the drive and directory containing ARGAMENU.EXE (if not 
   already there) by typing -
        
                   c:

c) Run ARGAMENU.EXE by typing - 

                   argamenu

d) Type -

                   pick


Additionally, to run Arga-Menu automatically when the system is turned 
on, add the word "PICK" to the end of the AUTOEXEC.BAT file.


                     MENU SET-UP AND USE.

Once installed, operation of the program is straightforward -

     The "ESC" key causes the program to exit back to DOS.

     The "PGUP/PGDN" keys cause the program to step forward/backward 
     through the pages in the menu.  Alternatively, the program will
     "page up" if the left mouse button is pressed and released while
     the mouse cursor is positioned on the "Set" command in the 
     command line at the bottom of the menu.

     A menu selection is made using the direction keys and the "ENTER"
     key, or by selecting the first letter of the menu entry, or by 
     using a mouse to select the entry and pushing and releasing the
     left mouse button. 


                             Page 2.




To set-up new menu selections -

     Select the required page using "PGUP" or "PGDN", or the mouse.

     Pushing the "F3" key produces a command line at the bottom of the 
     menu.  (Again, the mouse may be used to select the "Add" command
     in the command line).

     Type in the menu selection description and conclude with "ENTER".
     (The "HOME", "END", "INS", and "DEL" keys can be used to edit 
     the entry).

     Type in the drive, directory, and program name for the program to 
     be accessed (or the DOS command) and conclude with ENTER. (Any 
     legal DOS path can be specified. Specification of the drive and 
     directory is, of course, only required if different from the 
     drive and/or directory which contains the menu files). 

     NOTE: There are two "special" requirements for path entry -

                a) If the program to be accessed is a batch file, the 
                   FULL program name, including the BAT extension, 
                   must be entered, and COMMAND.COM must be available 
                   to the program. 

                b) If a pause is required prior to returning to the 
                   menu after accessing, for example, a DOS command 
                   such as DIR, the entry should be terminated with 
                   a "/".


To erase an existing menu entry -

     Select the entry with the direction keys, or by pressing the left 
     mouse button while the mouse cursor is on the entry, but releasing 
     it with the mouse cursor OFF the entry.

     Press "ALT" and "F2" together, or position the mouse cursor on the 
     "Del" command in the command line and press and release the left 
     mouse button. 


To change an existing menu entry -

     Select the entry to change using the direction keys and then push
     push the "F1" key, or push and release the left mouse button with
     the mouse cursor on the "Mod" command.

     Change the menu selection description as required and conclude 
     with "ENTER".  ("END", "HOME", "INS", "DEL" and the cursor keys  
     can be used to edit the entry).

     Change the drive, directory, and program name as required and 
     conclude with "ENTER".


To enter a DOS command - 

     Press the "F4" key, or select the "DOS" command on the command line.


                                Page 3.




     Enter the DOS command and terminate with "ENTER".  The command can
     be edited in the same way as the menu entry.

     "ESC" terminates the action without performing the DOS command.


To change the number of accessible pages, or the colors of the text, 
background, or highlights -

     Press the "F5" key, or position the mouse cursor on the "Set" 
     command and press and release the left mouse button.

     Use the cursor keys or the mouse to select the color, page,
     or menu title selection to change.

     Use the "F1" key to step through the available options for number 
     of pages, or colors.  (Pushing the "F1" key while the "Menu Title" 
     entry is selected allows the title to be edited).

     Press "ESC" to return to the menu pages.
     



                    REGISTRATION AND COMMENTS.

Arga-Menu is distributed as user supported software.  If you intend to 
use the program on a regular basis you are requested to register as a 
regular user at a cost of $15.00.  Registration will provide you with 
telephone support, notification of updates, and the option of 
purchasing other programs released by RGA Inc. at a discount. 
Customized versions of this program are also available.

Registration, payment, and user comments should be made to -




                            RGA INC.,
                       9237 COXBORO COURT,
                      BRENTWOOD, TN. 37027.




















                                Page 4.


```
{% endraw %}

## FILE1359.TXT

{% raw %}
```
Disk No: 1359
Program Title:  ARGAFIND, ARGAMENU & ARGACOPY
PC-SIG version: 1

Three related programs to simplify life on the hard drive!

ARGA-FIND is welcomed relief for hard disk owners who forget in which
directory, or sub-sub-subdirectory they left a needed file!  A misplaced
file lost somewhere on a 20 meg hard disk is the modern day "needle in a
haystack!"  Fortunately, this program does the searching for you and
displays the located filename, length, date, time, and the path to get
to it.  Since the use of "wild-cards" is permitted, the full file name
does not need to be known.  This version can be used to search a maximum
of 512 directories, containing 512 files per directory.

ARGA-MENU makes it easy for you to bring order to your countless files
and programs on your hard disk by creating point-and-shoot menus.  This
means you, or others you allow to use the computer, will be able to
automatically call up a program on any drive or directory, without
needing to know where its located or defining its DOS path---all with
one key stroke.  When you exit from one of these files or programs, you
are then automatically returned back to the menu.  Menus are a great way
of limiting other users to specific programs or files in your system
where they can do no harm!

ARGA-MENU has a capacity for up to 90 menu selections, organized as 9
pages with 10 entries on each page.  Menus in different directories can
be "chained" to each other for great flexibility.  The program is guides
you in how to install and update, with all menu entries made from the
menu, without use of a text editor or word processor.

ARGA-COPY is a DOS "shell" which lets you perform the most common DOS
operations (copy, delete, etc.) using the direction curser keys or a
mouse.  When performing housekeeping chores on a hard disk or even
floppies--such as erasing a number of no longer needed files, moving
files from one directory to another, etc.--you will quickly appreciate
not having to continuously type in DOS commands and path names!  A click
or key stroke selects any of eight of the most useful DOS commands, and
three file sort functions.

Synopsis:  Simplify life on the hard drive.  Find lost files hidden in
subdirectories, menu about with a touch of a key and do housekeeping
chores, such as deleting numerous files, by mouse or curser.

Usage:  DOS Utilities/File Finder/Menu/File Manager

Special Requirements:  Mouse optional.

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for each program.

File Descriptions:

ARGACOPY DOC  Documentation.
ARGACOPY EXE  Main program.
ARGAFIND DOC  Documentation.
ARGAFIND EXE  Main program.
ARGAMENU DOC  Documentation.
ARGAMENU EXE  Main program.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║       <<<<  Disk No: 1359  AgraMenu, ArgaCopy & AgraFind  >>>>          ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start ARGA-MENU, type ARGAMENU (press enter)                         ║
║                                                                         ║
║ To copy the documentation for ARGA-MENU to your printer, type           ║
║                           MENUDOC (press enter)                         ║
║                                                                         ║
║ To start ARGA-FIND, type ARGAFIND (press enter)                         ║
║                                                                         ║
║ To copy the documentation for ARGA-FIND to your printer, type           ║
║                           FINDDOC (press enter)                         ║
║                                                                         ║
║ To start ARGA-COPY, type ARGACOPY (press enter)                         ║
║                                                                         ║
║ To copy the documentation for ARGA-COPY to your printer, type           ║
║                           COPYDOC (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1359

     Volume in drive A has no label
     Directory of A:\

    ARGACOPY DOC      9156   2-18-89   8:23a
    ARGACOPY EXE     63996   3-05-89   4:02p
    ARGAFIND DOC      4503   2-18-89  10:44a
    ARGAFIND EXE     38662   3-05-89  10:14a
    ARGAMENU DOC      9106   2-18-89  12:53p
    ARGAMENU EXE     55686   3-05-89   6:46p
    COPYDOC  BAT       148   4-27-89  10:18a
    FILE1359 TXT      2886   4-28-89   8:33a
    FINDDOC  BAT       148   4-27-89  10:18a
    GO       BAT        38   8-18-87   3:44p
    GO       TXT      1387   4-27-89  10:16a
    MANUAL   BAT       169   4-27-89  10:19a
           12 file(s)     185885 bytes
                          130048 bytes free
