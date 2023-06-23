---
layout: page
title: "PC-SIG Diskette Library (Disk #2896)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2896/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2896"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2896.TXT

{% raw %}
```
Disk No: 2896
Disk Title: Statline
PC-SIG Version: S2.5

Program Title: Statline
Author Version: 2.5
Author Registration: $10.00
Special Requirements: Windows 3.0.

STATLINE is a small utility for the Windows 3.0 environment that, though
similar to other such programs, adds a little uniqueness all its own.
The program provides the bottom of the Windows desktop with a nice
status bar that tells you the Windows' operating mode, day, date, time,
and amount of free RAM and virtual RAM. The extra touch is five icons
to the right side of the status bar from where you can launch other
Windows applications, keep a small notepad with cut, copy, and paste
capabilities, exit Windows quickly, and delete files. You can even keep
a menu of your five favorite programs at your fingertips. Added to this,
STATLINE uses just over 20K when it's loaded and is updated about
every 12 seconds.

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
║                 <<<<  PC-SIG DISK #2896  STATLINE  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print out the program documentation, type:                           ║
║                                       COPY STAT.DOC PRN  (press Enter)  ║
║                                                                         ║
║ There are a couple ways provided to install STATLINE. Refer to "Install-║
║ ing Statline" in the documentation (STAT.DOC file) for instructions.    ║
║                                                                         ║
║ To print the order form, type:  COPY ORDER.FRM PRN  (press Enter)       ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1992, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝


```
{% endraw %}

## STAT.DOC

{% raw %}
```

 ************************************************************************
 Statline                     Version 2.5                    January 1992
 ========================================================================
  James Bell  4511 Sherwood Trace  Gainesville, FL 32605  (904) 372-3695
 ************************************************************************

    - See the WHATS.NEW file for a short list of the newer features -

    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ~                        HOW TO REGISTER                        ~
    ~                                                               ~
    ~ Just send me a check for $10 or $15, then I'll send you a     ~
    ~ License number and/or the latest version.                     ~
    ~                                                               ~
    ~ Print out the ORDER.FRM file for all the details.             ~
    ~                                                               ~
    ~ Unregistered versions will display a short reminder every     ~
    ~ eighth time Statline is started.                              ~
    ~                                                               ~
    ~ Thanks for trying Statline!                                   ~
    ~                                                               ~
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 Introduction
 ------------

  Statline is a small utility for the Windows 3.0 environment.  Statline
  gives you the mode, day, date, time and amount of memory free all
  at once.

  With Statline you can also launch other Windows applications, keep
  a small notepad, exit Windows quickly and delete files.  You can even
  keep a menu of your five favorite programs at your fingertips.

  Statline is also light on your resources, when loaded it uses just
  over 20k and is updated about every 12 seconds.

  Experienced Windows users can probably just skim this manual and
  figure out most of Statline in a few moments using the help display.


 -------------------
 Installing Statline
 -------------------

  Statline was written to be included on the "load=" line of your WIN.INI
  file, but you can just as easily add it to a group in Program Manager
  and click on it whenever you like.

  If you'd like Statline to be loaded whenever you start Windows:
  ---------------------------------------------------------------
  1. Copy the STAT.EXE file to your Windows directory.
  2. Start STAT.EXE using File Manager or Program Manager's
     "File, Run" menu choice.
  3. Click the leftmost button on the Statline display and choose
     "Configure".
  4. Click on the "Install" button in the configure dialog box.


  If you'd prefer to have Statline in one of Program Manager's groups:
  --------------------------------------------------------------------
  1. Copy the STAT.EXE file to your Windows directory.
  2. Click on the Program Manager group you'd like Statline to be in.
  3. Select "File" then "New..." from the menu, click OK for a new
     program item.
  4. Give the Command Line as "STAT.EXE", click OK, and you're done.


  You can even use Statline as your Windows shell (instead of Program
  Manager), and save quite a bit of your system resources.  Simply
  change the line in your SYSTEM.INI file from, "SHELL=PROGMAN.EXE"
  to "SHELL=STAT.EXE".


 --------------
 Using Statline
 --------------

  The Statline display looks something like this:

  --------------------------------------------------------------
  | '386  Fri Mar 5  12:34 am   7.08 megs     [] [] [] [] []   |
  --------------------------------------------------------------

   |-------------------------------------|  |----------------|
               Display Area                  Function Buttons

 The Display Area
 ****************

 As you can see, the Windows mode in this example is '386 Enhanced.
 You may also see "Stnd" or "Real" depending on the mode you use.

 You can also configure Statline to display the percent of "System
 resources" free, instead of the current Windows mode.

 The day of the week, date and time are also displayed.

 Statline has an hourly chime you can turn off and on from the
 "Configure" button of the System Box.

 The amount of free memory is last.  Note that this amount may
 seem to differ from the one reported by Program Manager, but they
 are the same when you consider that Statline's display is in "megs"
 (1 meg = 1048576 bytes) while Program Manager shows kilobytes (1024
 bytes).  EMS (expanded) memory isn't included.

 If you like, you can have Statline display the amount of memory
 used in a bar graph.  Just choose the "Configure" button and check
 the button that says "Graphic Memory Display".  This shows the
 memory used since Statline was started.

 The entire Statline display is updated every 12 seconds, or when
 you click the left mouse button on the display area.



 Configuring Statline
 --------------------

 Choose the System Box (the button on the far left) and click on
 "Configure".  You'll see a series of check boxes you can use to
 setup Statline to your liking.  This is also where you would enter
 your License Information after registering.



 Function Boxes
 **************
 The buttons on Statline's display work differently when clicked
 with either the left or right mouse button.
 The following dialog boxes are brought up using the left mouse
 button.

 (The "Help" display in Statline gives a brief description of what
 the left AND right mouse buttons do.)


 The System Box
 ==============
 At the far right of the Statline display are five buttons, the
 first (leftmost) is the System Box, click here to do one of the
 following:

 1. CONFIGURE     - Configure Statline.
 2. ARRANGE ICONS - Arrange your desktop's icons.
 3. EXIT STATLINE - Close the Statline window.
 4. MOVE WINDOW   - Move Statline's default position
 5. CANCEL        - Cancel the System Box.
 6. HELP          - Display a help screen.



 The Minipad Box
 ===============
 The box just left of center gives you a small (about 700 characters)
 notepad for notes or whatever.  You can cut and copy to the
 Windows clipboard, as well as paste from it.
 The contents of the Minipad are NOT saved when you exit Windows,
 though this is a possibility for future versions of Statline.



 The Quick Run Box
 =================
 The middle box is the Quick Run box, from here you can quickly
 run any Windows application simply by double-clicking on its EXE
 file.  You can also launch DOS by clicking on the DOS Window button.
 If you single-click on a file, you can delete that file by choosing
 the "delete file" button.  Finally, you can edit a text file by
 clicking once on the file then clicking the "Edit File" button.

 The Quick Run feature comes in handy for trying out new programs
 (e.g. new downloads) without having to install them, or run File
 Manager.  I recommend you set the Quick Run initial directory
 (in the "Configure" box) to your download directory.



 The Quick Menu Box
 ==================
 When you click here (right of center) you get a menu of five
 command lines.  Simply click on the "RUN" button next to the
 program you wan to run and Statline will start that application.
 You can also select the "RUN ALL" button to launch all five
 programs at once.

 To edit the command lines, simply click on the box and type a valid
 path (e.g. "C:\WINDOWS\WINWORD\WINWORD.EXE").  If the program is in
 your Windows directory or DOS path, you only need to give the
 program name (e.g. "CARDFILE").  You can also give command line
 parameters such as:

  "WINHELP SDKWIN.HLP" (to launch Windows Help and load the Windows SDK
  help file)

  "NOTEPAD WIN.INI" (to launch Notepad and load WIN.INI for editing)

 When you select "CLOSE" or run a program, all of the current command
 lines are saved.


 The Exit Windows Box
 ====================
 Click here to quit Windows fast, by default you will be prompted
 before exiting, but this can be turned off with the "Configure" option
 inside the System Box.



 A Few Tips and Notes
 ********************

 1. You can immediately update Statline's display by clicking on
 the window with the left button.

 2. You can terminate Statline quickly by double clicking the right
 mouse button on the Statline window.

 3. When you move Statline, you have to use the cursor arrow keys.
 Statline remembers where it was moved to and will load itself
 there from then on.

 4. Windows won't let you end the session with a DOS window open.

 5. If you get down to less than about 150k free, Statline's help
 bitmap won't load.

 6. If you write in the MiniPad, you can use Ctrl-Enter to drop down
 a line.

 7. The "Edit File" choice of Quick Run could be used for any program
 that you'd like to pass a filename to.  By setting the "Text Editor"
 program name to "pkunzip.exe" for example, you could use it to unzip
 ZIP files you click on.


 About Statline

 Statline was created the old fashioned (read: "hard") way with
 "C" and the SDK.  The original release took about 2 weeks and
 was a few hundred lines long.  Now (January) Statline is about 800
 lines long.  This release (2.5) was done in QuickC for Windows.

 Statline is the best type of program to write, because I wrote
 it partially for myself, I use it all the time.



 How and Why Should I Register?

 (Other than to relieve your conscience...)

 1. It's cheap!  For $10, you can remove the occasional registration
    reminder with a License number.  For $15 I'll send you the latest
    version of Statline.

 2. Updates, Statline is constantly being improved, this version
    is probably already replaced!  You'll be notified when major
    revisions are made and I'll send you an update for only $5.
    The license number you receive for registering will work for
    all minor upgrades to that version.

 3. You can get a great mind like mine through college!

 4. You'll sleep MUCH better once that check's in the mail.


 So just print out the ORDER.FRM file, fill out a check with lots of
 zeros on it, and mail it to me.  If the ORDER.FRM file is missing,
 or if you have questions/comments/suggestions, you can reach me at:

  James Bell                           |  (After June 1992:)
  4511 Sherwood Trace                  |  James Bell
  Gainesville, FL  32605               |  1602 Tayo Lane
  (904) 372-3695                       |  Jacksonville, FL 32223
  Internet: jb1@cis.ufl.edu            |

 I also read the Fido-net Windows and Windows-Programming
 conferences.



 BBS Support

 Statline enjoys having a couple of BBS "homes" for questions and new
 versions.  Check the following:

 The Looking Glass BBS                      9600-1200 baud, 8N1, 24 Hours
 ------------------------------------------------------------------------
 Phone: (904) 332-2954
 Join the Statline conference ("J Statline" or "J 50").  From here you
 can read messages ("R S"), or check the file sections ("F 1" or "F 2")
 for new versions and other things I've written.
 Many Thanks to Sysop Greg Wrey.


 The 0ubliette BBS                          9600-1200 baud, 8N1, 24 Hours
 ------------------------------------------------------------------------
 Phone: (904) 377-1996
 Check the Windows Utilities and New Uploads file areas for the latest
 Statline versions and other Win*Net files.
 Many Thanks to Sysop Kurt Teare.


 =========================================================================
 Please be sure to include an extra $2 for postage if you live outside
 the US.  And be sure your check or money order is in US dollars.


 About Me

 I'm a CIS major at the University of Florida (I graduate in Spring
 of '92, Hire me!).  I also wrote the "I" series of icon tools (IEdit,
 IInject, IFix, etc.) for creating, and working with Windows icons.
 I've also written a stand-alone version of the Quick Run feature, and
 a program called Work Groups, to let you start several programs at
 once with a single mouse click.

 Thanks for trying Statline!

 James Bell                                                January 1992




 P.S. Statline is Copyright (C) 1991,1992 James Bell,  All Rights Reserved
      & "Windows" and "QuickC" are TM Microsoft Corp.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2896

     Volume in drive A has no label
     Directory of A:\

    STAT     EXE     80336   1-12-92   4:57p
    STAT     DOC     12609   4-08-92   8:01a
    ORDER    FRM      2390   1-12-92   9:14a
    WHATS    NEW      5978   1-12-92   9:21a
    FILE2896 TXT      1009   4-08-92   8:03a
    GO       BAT        38   1-31-91  12:58a
    GO       TXT      1082   4-08-92   8:00a
            7 file(s)     103442 bytes
                           55296 bytes free
