---
layout: page
title: "PC-SIG Diskette Library (Disk #2866)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2866/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2866"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## APPENDIX.DOC

{% raw %}
```
Appendix for Explosiv 2.10
                              

Explanation of Command Line Switches 
and Display Parameters for DOS version
   
     This is the entire list of options supported by version
     2.0 of the Explosiv screen saver.  The interface was
     designed so that you will never have to know or use the
     majority of these options.  However, they are all
     listed here for reference.  The options that are useful
     to know are:
   
   
     Explosiv                 ; run the interface
     Explosiv -               ; read the configuration file
     Explosiv on              ; activate (normal, herc=text)
     Explosiv +on             ; activate (animate,
                                           herc=graphics 0)
     Explosiv -on             ; activate (blank,
                                           herc=graphics 1)
     Explosiv remove          ; remove the tsr
   
     all the other options can be and should be controlled
     by the interface.  A complete list of options is listed
     below:
   
   aranea - Show the named display.  Use the delay factor to
     slow the drawing and object level to increase the number
     of points drawn.
   
   blank - This is the only display that does not halt the
     underlying program when it is resident.  The delay factor
     and object variable have no meaning.  No mouse support
     is given to this display if it is resident.
   
   chaos - Show the named display.  Use the delay factor to
     slow the drawing and object level to increase the number
     of lines drawn.
   
   clock - This display is the only non-graphical display in
     Explosiv. For this reason it will be used whenever the
     video card is an mda.  In fact, if an mda card is used
     then blank and clock are the only valid displays.  All
     other displays except blank revert to the clock.  Although
     a delay factor is not used an object level of 1 does
     signify that you wish the clock to be drawn with the
     standard rather than extended ascii character set.

   discus - Show the named display.  Use the delay factor to
     slow the movement of the image.
   
   fireworks - Show the named display.  Use the delay factor
     to slow the drawing and the object level to increase
     the number of fireworks drawn at one time.
   
   flow - Show the named display.  Use the delay factor to
     slow the drawing.
   
   gyro - Show the named display.  Use the delay factor to
     slow the image and the object level to specify whether
     you want one specific object or a random selection.
   
   ifs - Show the named display.  Use the delay factor to
     slow the drawing and the object level to increase the
     number of points drawn.
   
   linus - Show the named display.  Use the delay factor to
     slow the drawing.  This display has the normal delay
     level.  If an object level of one is given then two
     moires are drawn each in its own corner.  If an object
     level of 2 is given then four moires are drawn in its
     own corner.  If an object level of 3 is given then four
     moires are drawn, two will be in corners and two will
     be shifted closer to the center.  If an object level of
     4 is given then 8 moires are drawn.  If an object level
     of 5 is given then 12 moires are drawn.  If an object
     level of 6 or more is given then 16 moires are drawn.
   
   maze - This display uses the normal method of using the
     delay factor. The object variable has no effect.
   
   orchid - This display uses the normal method of using the
     delay factor. The object level relates to how many
     points will be drawn.
   
   random - This display has two different types of randomizing
     the displays. If the all parameter is not given then
     this display will randomly load a display when Explosiv
     is initially run.  You will not be able to change this
     display until you remove and reinstall Explosiv.  The
     second type of random is used when the all parameter
     is given.  Then all displays ( except blank, clock and
     stars ) are loaded.  Each time the screen saver becomes
     active a different display will be used.
   
   ricochet - This display uses the delay factor normally.
     The object level has no effect.
   
   serinde - This display uses the delay factor normally.
     The object level specifies how many points should be
     drawn.

   stars - This display does not use the delay factor.  The
     object level controls how many stars are drawn.
   
   trees - This display uses the delay factor normally.  The
     object level specifies how many secondary branches
     should be drawn.  That is, how many branches should
     connect to the trunk of the tree.
   
   on - This option will turn the screen saver on.  If the
     monitor is hercules then this also tells the screen
     saver to restore the screen to text mode.  If the monitor
     is not hercules then this tells the screen saver to
     use the animation when possible and to blank the screen
     when it feels that the screen cannot be saved properly
     ( for example, in graphics modes ).
   
   +on - This option will turn the screen saver on.  If the
     monitor is hercules then this also tells the screen
     saver to restore the screen to graphics mode ( page 0 ).
     If the monitor is not hercules then this tells the
     screen saver to use the animation when possible and not
     to screen save then it feels that the screen cannot be
     saved properly ( for example, in graphics modes ).
   
   -on - This option will turn the screen saver on.  If the
     monitor is hercules then this also tells the screen
     saver to restore the screen to graphics mode ( page 1 ).
     If the monitor is not hercules then this tells the
     screen saver to blank the screen under all possible
     circumstances.
   
   off - This option will turn the screen saver off.
   
   +video - This option tells the screen saver that it
     should check for screen writes through bios.  Any 
     character that is written to the screen will reset the
     screen saver's timer.
   
   -video - This option tells the screen saver that it
     should not check for screen writes through the bios.
     Any character that is written to the screen will not
     reset the screen saver's timer. This option should be
     used if you are using some sort of RAM resident clock.
   
   all - This option is used to load all the displays, except
     blank, clock and stars into memory.  You may then change
     the display at any time without reinstalling the screen
     saver. See the section on random for more details.
     Using this option adds about 12K to the resident screen
     saver size.
   
   mono - This option specifies that the display should be
     in monochrome.
   
   color - This option specifies that the display should be
     in color.
   
   d<n> - This option specifies the delay factor that should
     be used if required.  Here <n> is a number from 1 to
     255.  By default, Explosiv will check your CPU and 
     generally deduce the proper delay factor.  This option
     should only be used if you find the default unreasonable.
     Run the command
       Explosiv ?
     to find the default delay for your CPU.
   
   m<n> - This option must be used if Explosiv is to become
     a screen saver.  Here <n> ranges from 1 to 30 and
     refers to how many minutes of inactivity Explosiv
     should wait before activating.
   
   e<n> - This option specifies the object level.  This
     value ranges from 1 to 9 where the default is 4.  Not
     all displays use this option and those that do not 
     always use it in the same way.  See above for details.
   
   ? - This option will display the help screen.  This will
     give you information such as hot keys, Explosiv direc-
     tory, monitor type, delay factor, multiplex number and
     some simple options to use.
   
   -  - This option specifies to read the configuration
     file.  Actually any argument not listed here will have
     the same effect.  The screen saver will parse the 
     command line.  If an argument exists and no argument given
     is one of the ones listed here then Explosiv will read
     the configuration file.
   
   remove - This option tells Explosiv to remove the resident
     copy of the screen saver from memory.  If this is not
     possible because other TSRs are loaded above Explosiv
     then a message will be printed and the screen saver
     will remain active and resident.
   
   vga - This option specifies that you wish to override the
     Explosiv auto-detection and assume you are using a vga
     monitor.
   
   ega - This option specifies that you wish to override
     the Explosiv auto-detection and assume you are using an
     ega monitor.
   
   mcga - This option specifies that you wish to override
     the Explosiv auto-detection and assume you are using a
     mcga monitor.  This option is functionally equivalent
     to cga.
   
   cga - This option specifies that you wish to override the
     Explosiv auto-detection and assume you are using a cga
     monitor.  This option is functionally equivalent to
     mcga.
   
   herc - This option specifies that you wish to override
     the Explosiv auto-detection and assume that you are 
     using a hercules monitor.
   
   mda - This option specifies that you wish to override the
     Explosiv auto-detection and assume that you are using
     an mda monitor. If you are using mda then the only 
     displays that will be valid are blank and clock.  See 
     the section on clock above.
   
   default - This option sets the screen saver to the default
     delay factor.  Use this to reset a resident copy of the
     screen saver to the default setting.

   mem1 - This option tells explosiv to allocate 4K of memory
     to save the text buffer.  This is the only valid option
     unless you have an EGA or VGA monitor.  Explosiv will
     not be able to restore 43 or 50 line mode if you use 
     this option.

   mem2 - This option is valid for a EGA or VGA monitor only.
     Explosiv will allocate 8K of memory to save the text
     buffer.  This will save 43 or 50 line mode but will not
     restore user defined fonts.  This is the default for
     EGA.

   mem3 - This option is valid for a VGA monitor only.
     Explosiv will allocate 8K of memory to save the text
     buffer or font table.  If you are using 43 or 50 line
     mode then the full text buffer will be restored but
     user defined fonts will not.  If you are running a 25
     line mode then user defined fonts will be restored.
     This is the default for VGA.

   mem4 - This option is valid for a VGA monitor only.
     Explosiv will allocate 8K of memory to save the text
     buffer or font table.  User defined fonts will be
     restored but 43 or 50 line mode will not.

   mem5 - This option is valid for a VGA monitor only.
     Explosiv will allocate 12K of memory to save the text
     buffer and font table.  User defined fonts will be
     restore as well as 43 or 50 line mode.
```
{% endraw %}

## CHANGES.DOC

{% raw %}
```

This shareware version of explosiv is identical to the registered
program.  We have distributed the program as what-you-see-is-what-
you-get.  So that when you register for explosiv 2.10 you can start
( or continue ) using the software immediately without waiting 
several few weeks for the disk to come in the mail.

If you have registered for explosiv 2.0 then you can freely upgrade
to version 2.10.  Simply download the program from your favourite
bulleting board, or if you prefer send us $5.00 for shipping and
will we send you a copy of the program on either 3 1/2 or 5 1/4
inch disk.  

We have not sent notification to previous users of explosiv 2.0
of the release of explosiv 2.10 simply because the changes have
not been very substantial.  The registered version of explosiv 2.0
is almost identical to explosiv 2.10.  The following are the
changes that have been made :

- A different look has been given to the DOS interface.  Output
  should be faster and help should be more informative.

- Memory allocation has been redesigned via "medium" and "large"
  options replacing the defunct "fonts".

- Slightly smarter install program and the addition of qinstall.bat 
  to quickly configure explosiv in the current directory.

- Some displays are shown at a slightly higher resolution on VGA
  monitors.

- Swapfire has been provided to allow the user to have the fireworks
  pattern from explosiv 1.x.  Previously this was available upon
  request.

WARNING : Remember that if you have explosiv.com from earlier 
          versions of the screen saver in your path it should be
          removed before accessing the new *.rc files.
```
{% endraw %}

## EXPLOSIV.DOC

{% raw %}
```
			  Explosiv 2.10TM
                              
			The DOS and Windows
			Graphic Screen Saver
                              

Explosiv copyright (c) Reidar Gresseth & Chris Hook 1989, 1990,
1991, 1992. This product may not be distributed freely to users.
It may not be or packaged, either individually, or as part of any
other product without the express written consent of the authors.
All financial remunerations must be paid to the authors. This
product may not be changed or altered and then distributed
without the express written consent of the authors. 

DISCLAIMER: Explosiv is offered on an as-is-basis without any
guarantee as to the correct functioning or fitness for specific
purpose. The authors believe this program to work as described
but the program is used at your own risk. The authors
will not be responsible for any hardware or software damage, loss
of data, or incidental or consequential damage that may result
from its use, whether or not such use is in accordance with
the instructions.

All enquiries or registrations should be sent to ( see order.frm ):

        Hook & Gresseth Software
        P.O. Box #3013
        Vancouver, B.C. Canada
        V6B 3X5


INTRODUCING EXPLOSIV 2.10

Explosiv 2.10 is the one screen saver that addresses all your
DOS(R) and Microsoft(R) Windows(TM) computing needs. You will find
Explosiv 2.10 both entertaining and practical as beautiful displays
save your computer screen from harmful burn-in. Compatible on
machines running DOS 3.x and up, Windows 3.x and up, and PC
networks, Explosiv 2.10 is designed to take care of your monitor
without getting in the way of the work you need to do.

The DOS version of Explosiv 2.10 is a Terminate and Stay Resident
(TSR) program that loads into memory when you like (for example,
automatically at boot up time) and stays out of your way until you
want it to become active. Occupying from 1 to 28 KB of memory
(which can be loaded above the 640KB limit), the DOS version of
Explosiv 2.10 renders 16 beautifully animated displays. In fact, if
you like, you can invoke the full screen user interface and just
point and click on the displays you want to see. Just sit back and
watch the show!

The Windows version is a full-fledged Windows 3.x application that
perform the same functionality as its DOS counter part; that is, to
give the user 16 beautiful and animated displays while adding an
important level of protection to your computer equipment. In
addition to a highly intuitive MS Windows 3.x standard user
interface - complete with operation and demonstration modes -
Explosiv 2.10 for Windows also includes the additional feature of
password protection - an important security feature for users on
stand-alone and networked PCs who need a level of confidentiality
when not attending their machine.

INSTALLATION

If you wish to install explosiv quickly in the current directory
run the batch file "qinstall".  This will configure explosiv.com
to run from this directory but will not modify your autoexec.bat
or win.ini file.  For full installation you must run "install"
which is discussed below.

The installation options are:

       1. To install Explosiv for DOS and Windows
       
       2. Install Explosiv for DOS only
     
       3. Install Explosiv for Windows only
       
       4. Re configure the DOS version of Explosiv.  This is
	  especially useful if you find Explosiv 2.10 for DOS
          conflicting with another TSR. In that case, try
          changing either/or the Multiplex value or the Hot
          Key assignments).
     
       5. Exit to DOS (chose this option to NOT install Explosiv
	  2.10)
       

Assuming that you selected one of the install choices 1 - 3,
install then asks a second level of questions:
             
       1. Which directory on your disk would you like to install
	  Explosiv into (if no directory of the given name exists, 
	  the install program will create it).
       
       2. The directory that is on your named path (as defined in
	  your AUTOEXEC.BAT file) that the executable DOS file 
	  EXPLOSIV.COM will be installed into.
       
       3. The directory where Windows 3.x resides.
       
NOTE: At all times help is available in the box displayed at the
bottom of the screen. Also, the ESC key may be pressed at any time
to terminate the install process.
     
Install will now create a custom version of Explosiv 2.10 for DOS
and place it in the directory you have named. If you selected the
Windows version of Explosiv 2.10 to be installed, Windows will be
invoked, a new Windows Group will be created and Explosiv 2.10 for
Windows will be placed in it. When this is done, windows will exit
and you will be returned to the DOS command line prompt.
Installation of Explosiv 2.10 will now be complete.

If any part of the installation fails, a notice will be displayed
as to what went wrong. You must then remedy the problem and
reinstall (from the distribution diskette) the sections of
Explosiv 2.10 you wish.

Manual Installation

The steps needed to manually install Explosiv 2.10 are:

       a) Create a directory on your hard drive where you wish to
	  install the program files.  Assume that this directory 
	  is C:\EXPLOSIV.
       
       b) Copy all the files from the Explosiv disk(s) into that
	  directory.
       
       c) Configure Explosiv for DOS so that it knows where to find
	  the screen saver modules. This is done with the INSTALL 
	  command followed by the  directory where the screen saver
          modules have been placed. In our example the command is :
       
          C:\EXPLOSIV> INSTALL C:\EXPLOSIV
       
       d) Copy EXPLOSIV.COM to a directory in your path.
       
       e) If you want Explosiv to run automatically when you boot
	  your machine insert the line "EXPLOSIV -" in your AUTOEXEC.BAT
          file.
       
       f) If you want Explosiv to run automatically when you run
	  windows then append "C:\EXPLOSIV\WX.EXE" to your load line 
	  in WIN.INI.
       
       g) Start Windows and create the Explosiv Program Group using
	  the Windows Program Manager.
       

USING EXPLOSIV 2.10

The DOS Version

Explosiv 2.10 consists of two different products. First there is
Explosiv 2.10 for DOS, a modular TSR screen saver with a full
screen interface. To invoke the DOS version of Explosiv simply go
to the DOS command line prompt and type:

C:\> EXPLOSIV

and the full screen interface will be invoked. Or alternatively, to
invoke Explosiv 2.10 for DOS WITHOUT invoking the menu system,
simply enter:

C:\> EXPLOSIV -

If the full screen method of starting Explosiv 2.10 for DOS is
used, then a combination of mouse and/or keyboard strokes will
allow you to move about the menu and make the desired choices. The
choices to be made are:

       1. Which display you want to select as the active screen
	  saver.
       
       2. How many things you want Explosiv 2.10 for DOS to save
	  for you once it becomes active as a screen saver. 
	  NOTE: Most of the selections in this box will be set for you 
	  automatically. If, for example, you find that you are 
          experiencing certain restoration problems, such as a loss
	  of special fonts or mouse pointers after returning from 
	  Explosiv, then set the memory field. As a side effect,
          Explosiv will become larger in memory.
       
       3. Determine what display parameters you want to set.
	  Explosiv sets reasonable parameters by default, but you 
	  can make some of the displays faster, slower,
          denser, or more sparse by modifying these controls.
       
       4. Determine at what time you wish Explosiv to be invoked
	  (i.e., after what period of inactivity).
       
       5. Save the new settings, or Cancel and leave the settings
	  unchanged.
       

For example, when you install the program you may want to customize
the screen saver to do something other than the default settings
that are given.  Run the interface, you will see the several boxes
with one being highlighted, the bottom of the screen will describe
how to move around in this window and how to move to other windows. 
To invoke context sensitive help press F1 at any time.

If the Displays window is highlighted simply move the cursor to the
display you wish to use.  You can demo any display simply by
pressing enter or clicking on the cursor with the mouse button.
Initially the cursor will highlight the display that is given in
the configuration file.

If you press tab the memory settings window will be highlighted.
The default parameter for video check is autodectect.  As setting
this is very hardware independent, change this option only if you
are positive that explosiv does not detect which monitor you have.
You can see this information if you type explosiv ? on the command
line.

Below this is the video check field, if this is on explosiv will
check the screen and will reset its counter if any screen output
occurs.  If you are running a memory resident clock or similar then
you will need to turn this option off to get explosiv to work.

Finally the memory option allows you to control how much memory
explosiv will allocate when it becomes resident.  Allocating
additional memory via small, medium or large will allow explosiv to
restore the screen better.  These parameters have no effect if you
do not have a VGA or EGA monitor.  The all parameter lets you load
every display in memory at once so that you may change the display
without reloading the screen saver.

The next window, which controls the timer settings, can be moved to
by pressing tab.  The delay factor indicates how fast the animation
should occur.  Explosiv will select a reasonable delay factor based
upon your CPU speed, if you change this you can select from a delay
factor of between 1 and 255.  You can see what the default delay
factor is by running explosiv ? from the command line. 

Below this is the minutes field which controls the number of minutes
of inactivity that explosiv should wait before starting the screen
saver display.  The minimum is 1 minute and the maximum is half an
hour.  Finally the objects field will control a certain quality of
the animated display, in most cases, this will be the number of
points that are drawn ( the detail of image ).  The function of this
field for each display can be determined by experimentation or by
reading appendix.doc.

The last two fields control how you will exit the explosiv interface.
By selecting save you will save the current screen saver 
configuration. Explosiv will attempt to load these new parameters
in memory, or load the screen saver if it is not installed yet
( whichever is  appropriate ).  The cancel button will exit explosiv
without making any changes to the configuration or any attempt to
install the screen saver in memory.

If you want to temporarily turn the screen saver off you can press
Ctrl-E ( and then Ctrl-B to turn the screen saver on again ).  You
can run "explosiv off" to turn the screen saver off and "explosiv on"
to turn the screen saver on.  You can set this up in a batch file if
you want to automatically disable explosiv while you are running a
particular program.  The hot keys listed above can be changed by
re-configuring the screen saver using the install.exe program.

If you want to remove explosiv from memory you can type "explosiv
remove".  This will remove explosiv from memory if there are no
other programs loaded above it in memory.  If it is not possible to
remove explosiv from memory a error message will be printed.

Changing between Old and New Fireworks

You may be familiar with older versions of explosiv that used the
single color per explosion fireworks display.  If you prefer this
display then change to the explosiv directory, which you can
determine by running "explosiv ?" on the command line, and run
swapfire.com.  This will make the necessary changes to the fire.rc
and random.rc modules so that the old fireworks display will
result. The original modules will be stored in fire_old.rc and
rand_old.rc.  You can run swapfire again to revert to the default
display.

The Windows Version

To start the Windows version of Explosiv 2.10, do one of the
following:

       1. Choose Explosiv 2.10 For Windows to be activated during
	  the install procedure.
       
       2. Modify you WIN.INI file (usually found in your WINDOWS
	  directory) with an ASCII editor (such as EDIT.COM as provided 
	  with MS-DOS 5.0) and append the name WX.EXE at the end of the 
	  load = line. For example, if you installed Explosiv
          2.10 into the Hard Disk directory C:\EXPLOSIV, you would
	  then append C:\EXPLOSIV\WX.EXE at the end of the WIN.INI
          file line that starts with the keyword load = .
       
       3. Invoke Explosiv 2.10 for Windows by double clicking on
	  the icon within the Explosiv group in the Windows Program
          Manager.  This will run Explosiv 2.10 for the current
          Windows session ONLY.
       

Once started, you can set, modify, and view all parameters through
the Explosiv Icon menu-driven Dialog Boxes. There are two important
menu choices to be made after clicking on the Explosiv Icon:


       1. The Explosiv Setup Icon Menu Choice:
          This leads to a group of three Dialog Boxes; the Main Box
	  (displayed after clicking on the Icon Menu choice), the
          Display Options Box (displayed after clicking on the
          Options... button in the Main Dialog Box), and the Password
          Box (displayed after clicking on the Password... button).
       
       2. The About Explosiv Icon Menu Choice:
          This displays a simple box that gives reference to Date
	  and Authors of Explosiv 2.10.

The Setup Dialog Box controls are similar in functionality to those
from the DOS version of Explosiv 2.10. To begin with, the Select
Display: Box contains a scrollable list of display choices.
Clicking the mouse on a choice makes that choice the active
display. The Select Time: Box contains a scrollable list of times,
ranging from 1 to 30 minutes.

Clicking on a value causes that time to be the time to activation
for Explosiv. The Screen Saver On: Box indicates whether or not
Explosiv will come on as a Screen Saver at the Activation Time.
Clicking on this Box toggles the Screen Saver On and Off. The Demo
Button lets you get a preview of any of the selected displays. This
button should be clicked On SLOWLY.

The Options... Button opens up a new Dialog Box, which contains
more customized controls, if the user so wishes.

The Display Options Dialog Box contains two Mouse Corner groups.
Clicking on any one corner will make the corresponding corner on
the screen either :

       1. The corner in which the screen saver is INSTANTLY
	  activated from (the group to the left indicates this action).
       
       2. The corner in which, if the mouse is so placed, the
	  screen saver will NEVER come on, even at the activation time.
       

Next are two scrollable boxes that allow:

       1. The rate of Delay to be set. If you find a particular
	  display too fast to your liking, increase the Delay Rate 
	  from between 0 to 3.
       
       2. The Number of Objects. This is not active in all
	  displays, but the displays that do use this control 
	  will increase the number of displayed objects as the
          number value selected increases (ranging from 1 to 9).
          NOTE: For many of the displays, selecting a value GREATER
	  THAN 6 will give you a randomly varying display. This 
	  is especially effective in the GYRO display.
       
Finally, there is the Detect Mouse Movement Box. Toggling this On
or Off (by clicking on it with the Mouse) either Enables or
Disables the screen saver to turn off via a movement of the mouse.
This is especially useful for unstable situations, such as laptop
computing. Also, some Graphics Co-Processor boards work better when 
the Mouse Movement Detection is turned off.


The Password Dialog Box, the last of the Dialog Boxes, is opened up
by clicking on the Password... Button. To enter a BRAND NEW
password, type in your new password in the Enter Password: Box,
then repeat it in the Confirm Password: Box. Finally, Click on the
Accept button to permanently set your new password. If you made a
mistake in either your original or confirmation entries, a failure
sign will show up on the Accept button. Just start all over again.
If your password was successfully entered, the Accept button will
display a Success message.

NOTE: Passwords can be up to 8 characters in length, and can be any
combination of ASCII characters, including numbers and symbols.
Also, upper and lower case of the same letter are seen as two
different values to the password program.

To change a password, first enter your old password in the Old
Password: Box, and then proceed as outlined above for entering a
FIRST TIME new password. If any error is made (i.e., the Accept
button indicates a Failure), just start the entire process over
again.

After you have successfully entered (or changed) a password, the
Password On: Button is enabled. If this button is selected, then a
Password Box will pop up and ask you for your password every time
an activated screen saver display is halted (e.g., by a mouse
movement, button click, or keyboard key press). At that time, you
enter your password and then click on the Accept button, or click
on the Cancel button to immediately start the screen saver display
again. If nothing happen, the Password Prompting box disappears
after 8 seconds, and the screen saver display resumes activity.


SPECIAL THINGS TO WATCH FOR

Some special things to be aware of include:

       
       a. When a DOS program is running in graphics mode, Explosiv
	  2.10 for DOS WILL NOT display the currently selected module, 
	  but rather will simply blank the screen.  This insures
          the best possible restoration of any given graphics state
          (this may occur even in text mode if Explosiv cannot
          reliably determine the systems' graphics state).

       b. Explosiv 2.10 for Windows DOES NOT WORK in Real Mode
	  (with or without expanded memory) in Windows 3.0. It is 
	  to be used in Standard or Enhanced Modes only. If
          you try to start Explosiv 2.10 for Windows in Real Mode,
	  Explosiv will simply terminate itself with a explanatory
          message.
       
       c. Explosiv 2.10 for Windows may cause a problem when
	  returning from a DOS Prompt session on some machines running 
	  Windows 3.x in STANDARD MODE (this restriction does NOT
          apply to 386 or Enhanced mode Windows). To avoid this
	  situation, close Explosiv 2.10 before you click on the 
	  DOS Prompt icon. After returning from the DOS Prompt session
          under Windows Standard mode, simply click on the Program
	  Manager's Icon of Explosiv 2.10 and Explosiv will pick up 
	  immediately where you last left off.
       
       d. Explosiv 2.10 for DOS will NOT ACTIVATE when Windows 3.0
	  is running unless Windows is running in Real Mode. To 
	  disable this (as it could produce undesirable side
          effects), enter the line: EXPLOSIV OFF before you start
          up windows in Real Mode (i.e., win /r), and then 
          enter: EXPLOSIV ON after exiting the Windows Real Mode 
          session. This could easily be made into a batch file if
	  need be.
       
       e. If you are doing large file transfers over a serial
	  communication line in  Windows, it is advised that you use 
	  one of the following displays in Explosiv 2.10 for Windows:
       
          CLOCK, STARS, BLANK
       
          These displays will not impede your file transfers to any
	  noticeable degree. The other displays will slow the transfers 
	  down to varying degrees.
       
       f. If you are using a Hercules monochrome display and are
	  unsure as to whether or not your program is in graphics mode, 
	  set Explosiv off before starting the program to give maximum 
	  compatibility with the underlying program (alternatively, you 
	  can try the +on and -on option as well).

       g. Explosiv 2.10 for DOS has certain Hot Key assignments
	  that are very important. They are:
       
          1. Ctrl-Alt-Shift.  This key combination starts Explosiv
	  2.10 immediately.
       
          2. Ctrl-Alt-E. This key combination temporarily disables
	  Explosiv 2.10 for  DOS.
       
          3. Ctrl-Alt_B. This key combination Enables Explosiv 2.10
	  for DOS after it had been previously disabled.
            
MAILING ADDRESS AND ADDITIONAL PRODUCTS     
     
NOTE: If necessary, Explosiv 2.10 is also available either one
3 1/2" or two 5 1/4" floppy diskettes.  There will, however, be an
additional $5.00 charge for shipping and handling per diskette set
ordered.

For all inquiries, including registration (which is done via the
accompanying ORDER.FRM file), please contact us at:

		Hook and Gresseth Software
		P.O. Box 3013
		Vancouver, B.C.
		V6B 3X5  Canada
                   
NOTE: Please write to us for information on other software products
offered - including customizable (via scanned or imported images)
screen savers.                              
```
{% endraw %}

## QUESTION.DOC

{% raw %}
```
Appendix for Explosiv 2.10 (cont)



Commonly Asked Questions About
Explosiv 2.10 for DOS



The following is a list of commonly asked questions about the
explosiv screen saver :
 
Q. How much memory does explosiv use as a screen saver?
 
A. Both versions of explosiv make every effort to use as little
memory and as few resources as possible.  In the case of explosiv
for DOS the memory usage depends a great deal on how many features
you wish to have.  As a simple screen blanker explosiv uses about
1K while if you load every possible display, etc., this uses about 
28K.  Explosiv can be configured such that only the display you've
requested is loaded for the monitor you have ( thus minimizing its
usage of memory ).
 
 
 Q. When explosiv for DOS starts the program underneath is 
completely stopped.  Can this be fixed?
 
 A. No. DOS is a single tasking operating system.  This means that
only one program can be run at a time.  So explosiv can run the
animation routines only if it stops the currently executing
program.  The "blank"  display works differently since all it does
is turn the  screen off.  It can then let the underlying program 
continue while it is waiting for a key press.
 
 
 Q  Explosiv occasionally blanks the screen even if I'm in text
mode. Why doesn't it run the animated display instead?
 
 A. When explosiv has been inactive the specified time interval it
runs a series of tests to determine whether or not it will be able
to correctly save and restore the state.  It will blank the screen
if it decides that it won't be able to restore the state
perfectly.  This ensures that the screen saver will, hopefully, 
never disturb any aspect of the original display.  Of course,
explosiv cannot restore every state.  There are certain hardware
limitations that just cannot be overcome.  For instance, you will
find that on your EGA the border color may not be restored
correctly.  There is no way for explosiv to read the border color
and it must assume that it is black.
 
  If you wish to disable blanking, turn the animated display off
or simply disable the screen saver you may use the "+on", "-on"
and "off" switches, respectively.  These switches are provided so
that in rare case that explosiv does not select the proper screen
saving mode you may manually override it.  Hopefully, you will 
never find a program in which this is necessary.
 
 
 Q. How do I get explosiv to work properly with my  Hercules
graphics card?
 
 A. The hercules graphics card has some very different 
characteristics from other cards.  In particular, there is no
reliable way to detect whether you are in text mode or graphics
mode.  So explosiv, once active, does not know whether it should
restore the screen to text mode or to graphics mode.  To further
complicate things there are two possible graphics modes ( more 
specifically, graphics pages ) that the card can be in.  However,
explosiv provides switches that allow you to manually tell
explosiv into which mode it should restore the screen. To restore
the screen to text mode ( which is the default ) use the "on"
switch.  To restore the screen to graphics mode use either "+on"
or "-on".  To disable the screen saver use the "off" switch.
 
  For example, if you have a program that runs in graphics mode
you need to write a small batch file with the lines:
 
 @echo off
 explosiv +on
 graphics program
 explosiv on
 

  Run the batch file and see if explosiv properly restores the
screen.  If it does not work replace the "+on" with "-on" and try
again.  If this does not work then explosiv must be disabled while
you are running this program.  You may do this by replacing "-on"
with "off".
```
{% endraw %}

## QUIXX.TXT

{% raw %}
```
PROGRAM:  Quixx
AUTHOR:   Jonathan Kraidin on 2/90
VERSION:  3.x0 on 02/16/92
LAST VER: 2.43 on 11/17/91
USE:      TSR Screen Animator
REQUIRES: DOS 3.0 or above (might work with 2.1 and below, but not tested)
	  CGA, EGA, VGA
          Extended or Expanded memory strongly recommended
          CGA = 32K, EGA = 64K, VGA = 160K
SOURCE:   ASSEMBLY

AUTHOR'S NOTE:  Literally hundreds of people have been sending mail asking
for user support when necessary.  I am asking that those of you who find Quixx
useful and pleasing to look at rather than a blank, lifeless screen to please
contribute $15 to register yourselves.  The source code is also available, but
only to those who are already registered users for an additional $15.  I think
you will find this an excellent screen animator.  At the end of this listing
is included a terse summary of updates to previous versions.


1. USE:

  This is a TSR program that generates a selected animation routine after a
  given idle period.  The user has a choice of a vapor plasma or warp space
  travel.  With these two animations there are 23 selections.  A simple help
  file can be called by typing QUIXX ? at the DOS prompt.  The program is
  loaded into memory with:

  QUIXX TimeOut Mode

  OR

  QUIXX Special (after the Quixx is already loaded)

  where TimeOut is the idle time in minutes (1 to 99) and Mode is from
  0 to 19.

2. ANIMATION MODES:

  Modes 1 through 15 select a constant color display for the QUIXX
  using a color palatte corresponding to the Mode.  That is Mode 2 = color 2.

  Mode 0 selects an alternating color display.  Every time the Quixx pattern
  bounces off of a wall the color increments.  Mode 16 selects a pattern where
  the colors vary within each line of the Quixx pattern.  This yields a
  constantly changing image as the vapor trail moves.  Mode 17 selects the
  same pattern-type, but in VGA mode19, allowing 256 colors.  The resolution is
  320x200.  Mode 18 is also in VGA mode19, but here the lines of the vapor
  trail are solid.  As a new lines are drawn they go go through all 256 colors.

  Mode 19 is the Glide mode.  Here the Quixx pattern is one color,
  but as the image moves its color goes through a continuous spectrum of 384
  shades.  THIS IS A GREAT MODE.

  SUMMARY OF COLOR MODES:

   Plasmas
   0       Alternating Colors
   1 - 15  Default Colors in Palette
   16      High Resolution Pattern1
   17      Vga Mode19 Pattern1 (320x200)
   18      Vga Mode19 Pattern2
   19      Glide Mode (Recommended Mode)

   Warp Space Travel
   20      Warp Travel  Mode (640x480x16)
   21      Warp Travel1 Mode (640x480x256)    [Super Vga required]
   22      Warp Travel2 Mode (640x480x256)    [Super Vga required]
   (NOTE:  21 and 22 may not be compatible with all Super Vgas)

3. EXAMPLES OF OPTIONS

  The options can be changed at any time by retyping the command.  So if you had
  typed:

  QUIXX 2 15

  selecting a 2 minute time-out using mode 15, and you then type

  QUIXX 5

  you change the timeout to 5 minutes and leave the mode unchanged.
  If you typed

  QUIXX 5 19

  you will have also changed the mode to mode 19.

4. UNLOADING THE TSR

  If you wish to unload the TSR type

  QUIXX r

  This will Remove the TSR from the TSR memory chain, regardless of the number
  of TSRs loaded before or after the QUIXX program.

5. OTHER FEATURES

  A. ENABLE/DISABLE ACTIVITY

  This allows Quixx to remain in memory as a TSR but remain dormant. By typing

  Quixx -

  the user disables the sleep count-down.  The Quixx will never become active.
  By typing

  Quixx +

  the Quixx's sleep count-down is re-enabled.  One can use this feature in a
  BATCH file if you want to selectively enable/disable the Quixx without
  changing the programs in active memory.  REMEMBER, Quixx's interrupts are
  still hooked into the BIOS.

  B. HOT-KEY enable/disable feature.

  One might be within an application and then realize he does not want Quixx
  to be active; yet, it is inconvenient to go back to the command line. By
  hitting the LEFT ALT key twice (ALT ALT) the user can toggle between enabling/
  disabling Quixx from within an application.  For example, if Quixx is active,
  hitting ALT ALT will disable Quixx and the user will hear a quick high
  tone/low tone combination.  By hitting ALT ALT again the user will hear a
  single high-pitch tone reminding him that Quixx is now active.  This is a
  very user friendly option. This option, however, will not work with Windows
  if it uses the mouse and has disabled the keyboard.  In this case, the only
  means of disabling Quixx is from the command line.

  C. SPEED CONTROL OF PATTERN

  The program automatically adjusts its pattern speed to your processor.  The
  user can now over-ride this with the speed control in Version 1.71. By typing

  Quixx f    OR    Quixx s

  the user can speed up or slow down the vapor image. This can be repeated
  multiple times to go really FAST or SLOW.  The user will be informed
  when the limit is reached.  The default speed will be used each time the user
  changes the sleep-period or the image color mode.

  D. EXTENDED/EXPANDED MEMORY SWITCH

  You can switch the memory utilization with the 'x' and 'e' parameter.  By
  typing 'Quixx x' or 'Quixx e' you force Quixx to use extended or expanded
  memory respectively.  This feature can only be used from the command line.

  E. BOSS KEY

  One may not wish others to view information that is on your screen.  By
  hitting the Left CTR key twice (CTR CTR) the screen instantely blanks;
  however, the application is still active.  Hitting any key restores the
  screen.
 
6. POPUP MENU

   Now that you have familiarized yourself with the options you can change
   these features from within any application by activating the PopUp menu.
   This is done my hitting the key F1 twice (F1 F1).  The space bar controls
   the MODE selection; the left and right arrows control animation speed; the
   up and down arrows control idle-time; and the Left ALT control the enable/
   disable switch.  ENTER restores the computer to its previous application.
   The PopUp menu will not work with WINDOWS.

******************************************************************************
COMPATIBLITY NOTES:

IT IS STRONLY RECOMMENDED THAT YOU HAVE EXPANDED OR EXTENDED MEMORY to prevent
memory conflicts when the TSR saves your video screen.  While the program will
use higher memory without EXPANDED memory, the program may crash your system
depending on what applications are running.  This program has worked well using
Expanded Memory with programs like WordPerfect and Harvard Graphics.

  EXTENDED MEMORY ADDITION

  Quixx will first check for the expanded memory driver; if not found,
  quixx will check for the extended memory driver, HIMEM.SYS.  If none of these
  are found then High Memory is used.  Again, if you see the warning message
  Quixx can cause machine crashes.

  If you wish to run with WINDOWS you need to force Quixx to use extended
  memory.  If Quixx defaults to expanded memory use the 'x' parameter to
  try and force it to use extended memory.

  IF USING EXTENDED MEMORY YOU NEED **** HIMEM.SYS *****
  IF USING EXPANDED YOU NEED AN EXPANDED MEMORY DRIVER MEETING THE LIM SPECS.
  IF YOU DO NOT SEE QUIXX DISPLAY THAT IT RESERVED MEMORY FOR ITSELF THERE
    CAN BE CRASHES!

  If only a CGA is present only the color white is used.  No other modes work.
  Modes 17, 18, and 19 are meant for the VGA and will not work properly on an
  EGA monitor.  Modes 21 and 22 are for the Super Vga and also need a
  multisync monitor.

6. MOUSE SENSING

   Mouse is sensed at COM1, COM2 and PS/2 port. The port is only checked for
   activity if it is present.  If you are using a Bus Mouse there is a chance
   that your mouse will not be sensed if it is NOT an MS Bus Mouse (InPort
   Mouse) or a Mouse Systems Bus Card.  This is because the mouse protocols
   can be different for each manufacturer.

   Because Quixx modifies the execution of its code if a mouse is present
   I suggest that if you are using a mouse to always have the MOUSE.SYS or
   MOUSE.COM file already loaded from your config.sys or autoexec.bat file.
   Otherwise, Quixx may not properly detect your hardware.

7. WINDOWS COMPATABLITY

   The program as of the above date has been tested briefly with Windows 3.0.
   If you are using a mouse on COM 1 or 2 (COM or Bus Mouse) or a PS/2 mouse
   it will be 'sensed' when you move it and Quixx will restore your screen.
   The keyboard will not work if you are using a mouse.

   Quixx only works with WINDOWS if you have EXTENDED MEMORY.  In addition,
   Quixx must be loaded before WINDOWS in order to reserve the necessary
   memory for its screen saves.

   If you are having problems with Windows I suggest you make a BATCH file to
   remove/load Quixx when entering/exiting Windows.  If you are
   EXITING Windows (whether you have a mouse or not) you should use a
   BATCH file that will REMOVE Quixx from memory (Quixx r) and then
   RE-INSTALL it after you are done with Windows. 

8. SOURCE CODE AVAILABILITY

   The assembly source is available on request.  It is several pages long and
   includes four modules:

   1. TSR and DOS interface routines
   2. QUIXX animation routines
   3. Graphics routines/Expaned memory routines
   4. Command line routines

   The code is well commented in most parts and can teach the reader about:

   .non-reentrant TSRs
   .unloading TSRs
   .accessing Video Memory/saving/restoring
   .reading COM ports
   .using Expanded and Extended Memory
   .writing graphics algorithms
   .reading/writing directly to the CGA/EGA/VGA graphics registers

   The program after version 2.40 is shareware. Copying is prohibited without
   permission of the author or registration.  Shareware companies are entitled
   to distribute the program if they make note that this program is not free and
   a $15 registration fee is required.  The source is $15 to registered users
   and well worth it.  If interested write to:

Jonathan Kraidin
6100 City Line Avenue
Apartment 1504
Philadelphia, PA  19131
(215) 878-6666

CIS 72571, 2122

Disclaimer:  The author of this program makes no guarentees to its function,
compatibility with other software or lack of risk in its use.  While Quixx
should not cause any problems, this program is executed at the users own risk
and the author is not responsible for any damages, data loss or problems
resulting directly or indirectly from its use.

In no event shall the author or distributers be liable for any damages
whatsoever (including, without limitation, damages for loss of business
profits, business interruption, loss of business information, or other
pecuniary loss) arising out of the use of or inability to use this product,
even if the author has been advised of the possibility of such damages.

Windows is a product of MicroSoft Corporation.

; Revisions:
; Version 1.0 : Completed in 2/?/90
;          .tsr module
;          .quixx routine
;          .keyboard reentry bug fix (on most computers?)
;          .vga capability added          
;          .expanded memory usage included
;          .tsr unloader included
;          .256 color vga capability added
; Version 1.4 : Completed 4/?/90
;          .initial EGA/VGA registers restored properly    
; Version 1.5 : Completed 11/10/90
;          .glide mode (DAC register manipulation)
; Version 1.6 : Completed 01/15/91
;          .COM1 port monitoring bug for mouse fixed
; Version 1.7 : Completed 03/26/91
;          .Enable/Disable flag entered (Special feature)
; Version 1.71: Completed 04/02/91
;          .User speed control added    (Special feature)
; Version 1.72: Completed 04/29/91
;          .Adjusted mouse movement detection
; Version 2.00: Completed 05/05/91
;          .Extended Memory usage added
;          .graphic screen saving algorithm changed from saving all four planes
;           at each pixel TO saving all data from each plane THEN switching
;           planes.  This speeds up the SAVE and RESTORE screen time by 30%
;          .Extended/Expanded memory allocation for screen saves reduced
;          .VGA19 screen read/restore algorithm tested; bugs fixed
;          .specially hook our INT 8, 9, B and C handlers ahead of all
;           applications when Quixx activated to guarantee we can properly
;           sense keyboard and mouse usage and not worry about other
;           applications interfering with the process
; Version 2.01: Completed 05/14/91
;          .WINDOWS compatable
;          .MS Bus Mouse properly handled
;          .mouse rewrites to screen fixed!
; Version 2.02 and 2.03: Completed 05/16/91
;          .considered case where Extended and Expanded exist
;          .corrected bug if EMS/XMS exist, but insufficient memory
;          .EGA video/expanded memory bug fixed
;          BUGS! BUGS! BUGS!
; Version 2.10: Completed 06/08/91
;          .Compatible with Windows in Enhanced mode (?)
;          .PS/2 mouse now sensed (?)
; Version 2.11: Completed 06/09/91
;          .COM mouse bugs using hardware interrupts fixed
;          .TSR unload feature used to remove mouse handlers and then
;           reload them so that they are at top of chain and continuity is
;           maintained even if several applications are loaded/unloaded
; Version 2.20: Completed 07/22/91
;          .added ability to handle 43/50 line conditions for EGA/VGA monitors
; Version 2.21: Completed 08/17/91
;          .COM1 bug with Windows addressed: response time too slow (CLI/STI)
; Version 2.30: Completed 08/19/91
;          .extended/expanded memory override option added
; Version 2.40: Completed 10/16/91
;          .hot-key enable/disable option added
; Version 2.41: Completed 11/06/91
;          .printer activity bug fixed (Thanx Marvin)
; Version 2.42: Completed 11/17/91
;          .numeric keypad makecodes (double scan codes) accounted for so they
;           are not processed when restoring screen.
; Version 2.43: Completed 11/28/91
;          .BIOS clock bug fixed: CLI instruction removed from video routines
;           and screen 'fix_up' done after QUIXX call instead of within end
;           of INT 9 routine.
;          .Random number Generator revised.
;          .save/restore pagemap register only used with expanded memory.
```
{% endraw %}

## SCRUTIL.DOC

{% raw %}
```
SCRUTIL 9.1 - (c) Kai Uwe Rommel - Aug 21 1991

This is the first public release of SCRUTIL & SCRBLANK, the successor
of the EGAUTIL screen saver (from which it inherited the version
number). Beginning with this release, it now supports also 8514/A
graphics cards. Because of this I have renamed it from EGAUTIL to
SCRUTIL.

This is a screen saver on which I am working already for a long time.
It runs on EGA or VGA under DOS and has some special features. It
monitors not only the keyboard but also a Microsoft-compatible mouse,
if installed (compatible on driver level, Logimouse was tested with an
earlier version). With the /8 option, it blanks also 8514/A graphics
cards. This was tested with a WD (Paradise) 8514/A+ but should work
with IBM and ATI 8514/A cards as well. It does not require any kind
of resident adapter interface software to be loaded (such as IBM's
HDI or WD's WDAI, they are not required). Also, it can blank a
secondary monochrome Hercules display, if installed. See the help page
for details.

I added a DLL, SCRBLANK.EXE, for use under Windows. This DLL establishes a
system hook and notifies the screen saver of Keyboard and Mouse events.
They communicate via the multiplex interrrupt (INT 2F). This DLL works
under Windows 3.0 or newer only (in all three modes, real, standard and
386 enhanced). The INT 2F seems to be clean to be called in protected
mode, even in 286 standard mode (the INT 2F is the preferred method for
communication with TSR's under DOS anyway). Without this DLL loaded, the
screen will never be blanked in standard or enhanced mode.

I have tested it under Windows 3.0 with heavy load and it always worked
well. But if you have problems with it, please reportthem to me.

The screen is blanked by completely switching off the display(s). That means
if you would like some pictur/graphics/animation, then this one is not
for you ..., but this has the advantage, that all the Windows do not have
to be repainted, when the screen is switched back on.

I wanted the screen (and the monochrome debugging display) to be
*completely* blanked. I find these animated screen savers boring after a
while - so I wrote one that is boring from the beginning :-)

When running Windows with SCRBLANK.EXE, if the mouse is moved into the upper
right corner of the display, the screen is blanked instantly. If it is
moved into the lower right corner, the screen will never be blanked.

When running plain DOS without Windows, the screen can be blanked manually
by pressing Sys-Request (Alt-PrintScreen) and then the key S (short clicks 
are heard when pressing these two keys).

Install the screen saver main program SCRUTIL.COM in AUTOEXEC.BAT with

	SCRUTIL /I /D:delay [/M] [/8] [/2]

The delay is in minutes, /M means a mouse is installed (probably you all have
one), /8 means a 8514/A is installed, /2 means a secondary monochrome display
is installed.

Put the SCRBLANK.EXE into WIN.INI into the "Load=" line

        Load=SCRBLANK ...

(You perhaps have more programs listed in this line).

Kai Uwe Rommel
Munich
rommel@informatik.tu-muenchen.de
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

### Directory of PC-SIG Library Disk #2866

     Volume in drive A has no label
     Directory of A:\

    EXPLOSIV ZIP    271678   9-24-92   3:11p
    QUIXX    ZIP     29782   7-20-92   5:54a
    SCUTIL   ZIP      6100  10-18-91  12:16p
    SHAREMAG TXT      1837   1-21-92   6:11a
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-STRT  DAT       539   8-11-92   4:10a
            7 file(s)     359486 bytes
                               0 bytes free
