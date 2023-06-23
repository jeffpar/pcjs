---
layout: page
title: "PC-SIG Diskette Library (Disk #2462)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2462/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2462"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "APORIA"

    APORIA brings even more of a Macintosh operating system to Windows,
    complete with trash can.  At its most powerful, APORIA replaces Windows'
    Program Manager with a tool-laden shell.  APORIA places file drawers
    onscreen; click on a drawer, and it shows you the contents (as icons).
    Click again, and the drawer closes, taking the icons with it.  You can
    set up your own drawers and files.  You can even get help by dragging an
    application over to the question mark icon.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.TXT

{% raw %}
```

                         Aporia - What's New

                             NewTools
                      POB 3269 Church St. Sta.
                     New York City. 10008-3269
                          (800) 924-0018


    This file is intended for those who have earlier versions 
    of Aporia and wish to see what we've added.


List Of Changes in Version 1.4b
    * Problem fixed where clicking below the last directory in
        the Tree tool window could cause Aporia to crash.

List Of Changes in Version 1.4a
    * Problem fixed with setup program (SETUP_AP.EXE) hanging when
        run on some networks. Setup program now requires
        that you specify the directory where you have Windows
        installed and the version of Windows you are using.
    * Problem fixed where creating tools from Program Manager 
        setup on some networks could cause Aporia to crash.  
    * Problem fixed where an "I" drive (that does not exist) could 
        appear on some systems having only one floppy drive.


List Of Changes in Version 1.4

 -New Features:
    * Aporia now lets you create many more tools. You can create
        up to 250, more than twice as many as previous versions.
    * The Tree Tool can now handle HUGE disk drives containing 
        up to 2,700 directories.
    * Creating tools from Program Manager setup has been 
        completely redone. Aporia now lets you choose which 
        groups you want to convert and warns you if you try 
        to create too many tools.
    * Aporia now comes with two image file libraries. One for 
        EGA, VGA and SuperVGA in 16 color modes and another 
        for SuperVGA in 256 color modes. If you have an 
        unsupported type of display, tools automatically display 
        the built-in monochrome images.
    * Directory Tool window now uses standard Windows selection
        methods. Use Control key to select multiple file, 
        use Shift key to extend a selection.
    * New BLANK NOW command on Aporia menu lets you turn on the
        screen blanker on demand.
    * Registered users can now specify the text that will appear
        on the screen when the screen blanker is on by adding
        the line "BlankName=text" to the Aporia section of the 
        WIN.INI file.
    * Screen blanker now works when a DOS windows has the input
        focus. When a DOS window has the focus the blanker delay
        time is increased by a factor of 4.
    * Blanker re-activiates the last active window.

  -Fixes:
    * Problems with Aporia running out of local memory have 
        been fixed.
    * Problems with floppy drives have been fixed. The Tree Tool 
        will not close when you try to change to a floppy drive 
        that is not ready.
    * Problems when creating new directories under certain 
        conditions have been fixed.
    * Problems with setup program on certain networks have been
        fixed.
    * Problems with renaming directories when running DOS 4.x 
        have been fixed.
    * A number of subtle memory bugs which could cause crashes
        under certain conditions have been fixed.
    * Properly saves Help and Notes information on a per tool basis.
    * Gracefully handles those cases where users installed
		the 16 color images on 256 color windows installations. 
    * Aporia runs programs immediately even when there are hundreds of tools.
		(Exception: A tool that sizes a window will have a delay.)
    * Opening/Closing of desks is speedier.
    * Options Tool shows bitmaps correct size (was 30 now 32pixels).


List Of Changes in Version 1.3d
	* Better error reporting when a program fails to run.
	* Screen library has more images. Thanks to contributing users.

List Of Changes in Version 1.3c
	* Fix to Tree Tool to see all drives.
	* Fix to setup program to print better error messages.

List Of Changes in Version 1.3b
	* Fix for real mode users running Aporia as shell.

List Of Changes in Version 1.3a

	* Changes to help tool alignment... Moving a desk will move the
		tools inside the desk. It will not move a desk it contains.
		Holding down the ctrl-key while moving will move the desk only.
	* Old Alignment removed. (While 'correct' it was too strange for most).
		Will provide a straightening function on a later release.
	* Problem with autocreate of tools from group files fixed:
		- only searches path for group files now, 
		- no duplicate groups should be made now,
		- should handle low tool memory situation more gracefully.
		  (you are limited to about 150 tools or so. this limit 
          will go away.)
	* Setup program asks users if they are using a color system
		and will not install the images library, which is in color, onto
		systems that are monochrome.

List Of Changes in Version 1.3

	In General:
	* Windows 3.0 compatibility
	* Users can make their own bitmaps. ImageMaker tool supplied.
	* Enhancement to tools (main features listed below).
	* Very low memory use (45K of memory in real mode). Very good.
	* Replaces Progman.exe (Win 3.0) or Msdos.exe (Win 2.xx or 3.xx)
	* Lots of bug fixes and user requests done.
	* Can load Program.exe group files and make them into desks.
	* Setup program now supplied for both first time and registered users.


	Tree Tool
	* Unlimited number of trees up at once. View many disks at once.
		Trees have none of the old limits: unlimited number of
		directories and directory depth for big disks and networks.
	* Tree thumbtracks
	* Tree caching is faster and more robust.

	Directory Tools
	* Unlimited number of directory windows
	* Directory windows now tile instead of overlap each other

	Misc:
	* Creates tools automatically for first time users.
	* Can Load Group files and convert them into Aporia Tools.
	* Can change where the Aporia tools, notes, help, images and trash
		are kept. This is so that users can take advantage or ramdisks
		and networks:
		- Set the default Aporia directory where you store everything.
			Set AporiaDir via the options tool. Note to previous
			Aporia users: This directory used to be "HelpDir" in the
			win.ini file. You should change this value.
		- Set the trash to a ramdisk for fastest results.
			(Add "TrashDir=<path>" to Aporia section of win.ini)
		- Share a library of images.
			(Add "ImageDir=<path>" to Aporia section win.ini)
		- Share tools notes between users.
			(Add "NotesDir=<path>" to Aporia section win.ini)
		- Share help files between users.
			(Add "HelpDir=<path>" to Aporia section win.ini)
		- Share your tools. Put the toolfile on a write protected disk.
			(Change Aporia Directory with the options tool)
	* Alignment is improved and will force all your tools onto the
		screen. Useful if you are switching screens or are sharing
		tools with users with different screens. ie ega, vga, super vga.
	* Can run a program at a certain spot even if iconic.
	* New tools are always created at an aligned spot...
	* Selected files disk usage now also shows total size of files as well
		well as how many bytes of disk they occupy.
	* Takes up less memory than before
	* Trash management works better.

Fixes:

	Desks
	* Under certain low memory conditions, desks could have become corrupted.
	* Should not lose tools if exit windows first.

	Misc
	* Changing the default paths that Aporia uses always works now.
	* Help and notes for individual tools works properly.
	* Always returns you to C:\ after running.
	* Rename dialog grays the from text when renaming a tree directory.
	* Font/font color dialogs are now properly app modal.
	* Works well under low memory conditions.
	* No longer accesses Drive A on Exit.
	* Better detects when programs fail to run.
	* Some problems running tools with extensions.
	* <more>



List Of Changes in Version 1.2
    - Fixed bug caused problems when making tool on systems with EGA
        displays.

List Of Changes in Version  1.1
    - The manual is complete and extensive. Registered users can receive
        a fully illustrated version.
    - All file functions operate as they do with MSDOS-Exec plus they can
        all be done by simply dragging files around.
    - Copying can be done by simply dragging files from directory window to
        directory window.
    - Files can be run by dragging them from a directory window onto a
        tool.
    - Files can be removed by dragging them from the directory window to the
        trash.
    - The built in introduction to Aporia has been replaced with an
        illustrated tutorial text.
    - Each Desk can be set to either run, or to hide and display its contents.
    - The tool information display has been enhanced.
    - Display of memory usage shows conventional and expanded memory.
    - Aporia tool files can be interchanged and loaded simply so that
        sets of tools used by different users can be managed.
    - Users can choose to be prompted about removing tools.
    - Enhancements provide for more powerful tools that users can make:
        like a Print tool.
    - User can save Aporia's state at will rather than loosing all that
        setup work when windows 386 crashes.
    - The whole thing is more reliable... Bug Fixes:
        - Fixes to memory errors.
        - Uses less memory more efficiently.
        - Tool size properly saved between sessions.
        - Trash management flag properly saved between sessions.
        - No longer crashes when trying to trash a desk.
        - No more disappearance of tools.
        - Better handles cases where user removes aporia help files.
        - Programs keep focus when run.
        - Error messages are clearer.
        - Tree & Directory tools handle huge directories like on networks now.
        - Directory Windows are never created off the screen now.
        - Tools are resized properly when their text is changed.
        - Tree problems with A & B drive have been fixed.
        - The Tree tool is far faster and reliable.
        - Problems running with Excel tutorial fixed.
        - Other small fixes and cleanups.



List Of Changes in Version 1.0
    - Added new images for tools for popular programs.
    - Tool images are clearer and work on all displays.
    - Desks can be put into desks.
    - Desks of tools can be run.
    - Much better help for the built-in tools.
    - New improved documentation.
    - Trash Management.
    - Compatible with previous releases.
    - Added a beautiful Tree Tool to view the directory tree.  With it
          you can:
        - Create, rename and remove directories.
        - Create directory windows to view directories.
        - Create Directory Tools.
    - New powerful Directory Tools:
        - Open many directory windows at once.
                  The files in each can be:
            - Viewed in a variety of DOS 'dir' like formats,
              and select files based on multiple wild-cards: i.e.
              *.c *.h, rather than just one wild-card pattern.
              No other product offers this multiple view feature.
            - The view can be sorted in a variety of ways.
            - All viewing and sorting parameter are saved between
              uses.
            - Selected, either singly or in groups.
            - Copied or moved by simply selecting them and
              dragging them over to another directory window.
            - Made into tools by double-clicking right on them, or
              by selecting them and using the "Make User Tool"
              menu option under the "Special" Menu heading.
            - Run or Loaded by selecting them and double clicking
              left, or by using the "Run" or "Load" option under
              the "Files" menu heading.
        - Each directory window can become a Directory Tool, always
          pointing to a given directory.
    - Will run a data file based on the [extensions] list in win.ini, so
      that, for example, if you try to run a write file, the write
      program will run instead editing that file.
    - Holding down the control key when dragging a tool will prevent it
      running a tool underneath it.  So you can stack tools and clean
      up messes of tools without running things.
    - Tools now have a mild 3-d look.
    - Improved size tool.
    - Generally much faster.
    - Screen blanking added.
    - Tools display can be customized: change font type and color,
      tool size.  Show Directory Tools in different color with their
      directory name displayed.
    - The default Help and Notes directories and programs can be changed.
    - Tools can be dragged much quicker and more visably.
    - Bug Fixes for: memory loss, running pif files, display on vga's,
        notes not working for tools, copy & move crashing, and others.

```
{% endraw %}

## NOTES.TXT

{% raw %}
```
Aporia Notes

These are general notes
which you should change to suit you.
You got these notes by double clicking
on the notes icon.

You can erase this text and put whatever
you want here, like a "to do" list:

	- Do monthy bills
	- Finish entering checks into Excel
		starting with check #1157.
	- Buy gift for Tom's b-day.
```
{% endraw %}

## ORDER.TXT

{% raw %}
```

                       APORIA V1.4 ORDER and REGISTRATION FORM

     _______ PRICING _______________________________________________________
                                                 Cost x  Quantity  = Total

     Registration w\ Disk and Printed Manual     $50  x    ______  = _______
          Disk format  5.25 ___  3.5 ___

     Sub-Total                                             ______    _______

     New York Residents add 8 1/4% sales tax                         _______

     Shipping & Handling: US & CANADA add         $4                       
             Outside of North America add         $8                 _______

     Total Enclosed                                                  _______

     No COD orders excepted.  Orders shipped via US Postal Service.

     
     For Visa and Mastercard orders call NewTools at 1-800-395-1532.
     For technical support, call 1-718-789-5980.

     Terms:  Check or Money Order drawn on a U.S. bank in U.S. funds.
     Purchase orders (net 30) accepted for software from major US 
     corporations. All licenses are prepaid only.

     _______ REGISTRATION INFORMATION ______________________________________

          Name:     __________________________________      Date: __________

          Title:    ________________________________________________________

          Company:  ________________________________________________________

          Address:  ________________________________________________________

          City:     __________________________    STATE: ____  ZIP: ________

          Phone Number:  __________________________________

     Registration name:

     _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
     (Limited to 29 characters.  If registering multiple users at a site,
     each name must be different.)
     ___________________________________________________________________
     Comments or suggestions:



     ___________________________________________________________________
     Mail To: NewTools
              POB 3269 Church Street Station
              New York, NY. 10008-3269
              (800) 395-1532

```
{% endraw %}

## FILE2462.TXT

{% raw %}
```
Disk No: 2462                                                           
Disk Title: Aporia                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Aporia                                                   
Author Version: 1.3                                                     
Author Registration: $50.00                                             
Special Requirements: Windows 3.0                                       
                                                                        
APORIA brings even more of a Macintosh operating system to Windows,     
complete with trash can.  At its most powerful, APORIA replaces Windows'
Program Manager with a tool-laden shell.  APORIA places file drawers    
onscreen; click on a drawer, and it shows you the contents (as icons).  
Click again, and the drawer closes, taking the icons with it.  You can  
set up your own drawers and files.  You can even get help by dragging an
application over to the question mark icon.                             
                                                                        
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
║                <<<<  PC-SIG Disk #2463  APORIA  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║  Copy APORIA to a subdirectory on your hard drive:                      ║
║                       C:                                                ║
║                       MD [subdirectory name]                            ║
║                       CD [subdirectory name]                            ║
║                       COPY A:APORIA.ZIP                                 ║
║                                                                         ║
║  Unzip APORIA.ZIP using PC-SIG #1364:  PKUNZIP APORIA                   ║
║                                                                         ║
║  To print the introductory instructions, type:                          ║   
║                       COPY AP_READ.ME PRN  (press Enter)                ║
║                                                                         ║
║  To print the manual, type:  COPY APORIA.MAN PRN  (press Enter)         ║
║                                                                         ║
║  To print the order form, type:  COPY ORDER.TXT PRN  (press Enter)      ║
║                                                                         ║
║  To read the changes in APORIA, type:  TYPE CHANGES.TXT  (press Enter)  ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2462

     Volume in drive A has no label
     Directory of A:\

    APORIA   ZIP    215117  10-29-90   4:50p
    GO       BAT        40   1-01-80   6:00a
    FILE2462 TXT      1629  12-07-90   1:05p
    GO       TXT      1775  12-07-90   4:38a
            4 file(s)     218561 bytes
                          101376 bytes free
