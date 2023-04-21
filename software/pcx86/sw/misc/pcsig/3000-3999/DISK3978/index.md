---
layout: page
title: "PC-SIG Diskette Library (Disk #3978)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3978/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3978"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
SMILERSHELL 1.3  QUICK START AND INSTALLATION
 

QUICK START / HINTS AND TRICKS

Windows makes many things easier, but it also makes some things harder.
Even in this era of the graphical interface, there are tasks that can
be done much more easily by typing in a command than by menus and
pointing and clicking and such.  That's what SmilerShell is for.
 
SmilerShell is a command line utility.  It's like shelling out to DOS.
You type a command and press Enter.  It supports pipes, redirection,
and internal DOS commands (and runs Windows programs too).  It works
just like the DOS command line.  But SmilerShell is the best command
line you've ever seen, as if the plain-vanilla DOS prompt was enhanced
by lots of handy utilities.  Here's how to get the most out of it.

INSTANT INSTALL:  You can install SmilerShell automatically, using the 
enclosed installer.  To do this, simply run install.exe.  You can run 
it using File Manager, or the Run item on Program Manager's File menu,
or in whatever other convenient way you choose.  Give it the directory
to put SmilerShell's files into, and the Program Manager group name
for the SmilerShell icons (appropriate defaults are suggested).  It'll
do the rest.  The installer will make no changes to your system setup.
It just copies files to the directory you specify, and adds icons to
the Program Manager group you specify.  If you decide to uninstall,
just delete the specified files and icons.

COMMAND HISTORY AND SEARCH: Every time you run a command, it is saved
on the command stack.  To find a previous command of interest, type the
first letter or two of that command, then press the up or down arrow key.
Up-arrow searches back, down-arrow searches forward.  It's a circular
buffer, the last command is connected to the first, so you can search
in either direction.  Arrows on a blank line show all commands in order.

ALIASES: When you press Enter, the first word of the command is compared
to the alias list.  If it matches, the alias is substituted for that
first word.  You can skip the alias testing by starting the command with
an equals sign.  You can also hang aliases off the function keys F2
through F12; hit the key and the command runs.  Both kinds of aliases
are set up in the ini file.

QUICK DIRECTORY CHANGE: Type DC and the first few letters of the directory
you want to be in.  If it's unambiguous, boom, you're there, otherwise a
list box pops up with the first possible match highlighted.  If you
haven't used DC yet, you'll be asked for permission to scan the drives
listed in DC's ini file parameter.  If you scan more than one drive,
DC can change drive as well as directory to get you where you want to go.

SMILERSHELL NEVER FORGETS:  In the ini file, set winwidth=PREV and
SmilerShell will start up next time in the same screen position, and
with the same settings, as when you shut it down this time.

CHANGE INI FILE SETTINGS ON THE FLY:  Hit the Edit Ini File item on 
SmilerShell's File menu.  It'll fire up Notepad with your ini file (and 
create one first if needed, filled with reasonable defaults).  When you're
done editing and you close Notepad, SmilerShell will know.  It'll read in
the new ini file and reset itself as indicated there.
 
INACTIVES STAY VISIBLE:  This Options menu item controls whether, after
you run a DOS command, the command's inactive window sticks around, or
immediately vanishes.

REMOVE INACTIVES: Too many inactive windows cluttering your screen?  Get
rid of 'em with this Edit menu item, or just type Alt-R from the keyboard.

CLOCK:  Toggle the titlebar clock from the Options menu, or just type Alt-C.
Prefer 12-hour or 24-hour time?  Use the timeformat ini file parameter.

CURRENT DRIVE/DIRECTORY IN THE TITLE BAR:  Toggle this from the Options
menu, or just type Alt-D.

SYSTEM RESOURCES:  Toggle the System Resources display onto the menu
bar from the Options menu, or just type Alt-S, to see a real-time
running report of your available Windows memory and resources.

TOPMOST WINDOW: Make SmilerShell a "topmost" window from the Options
menu, or just type Alt-T.  That way, it's always visible and ready for
use, even when you're working in another window. 

GET RID OF THE MENU:  Hit Alt-M to make SmilerShell even smaller.  Hit
Alt-M again to bring the menu back, or use the Show SmilerShell Menu
item on the System menu (the dash thing in the upper left corner).

SAVE YOUR STACK: You can save the current command stack to a file and
reload it automatically at startup, or at any other time.  This gives you
a preloaded batch of commands you can search on.  The startup loading is
set up in the ini file.

A HANDY CONFIGURATION: Make SmilerShell "topmost," turn on the clock,
turn off the menu, mouse it as small as it goes (about as big as two
icons) and stick it in the corner.  The clock shows, and it's always
ready for action.

ANOTHER HANDY CONFIGURATION:  Make SmilerShell "topmost" and maximize it.
When maximized, it only takes up the top line of your screen, not the
whole display.

 
 
SHAREWARE: TRY BEFORE YOU BUY
 
Thank you for trying SmilerShell.  You are welcome to test it
for a week or two.  I hope you like it.
 
SmilerShell is marketed as shareware.  As with all shareware,
you are encouraged to try  it for a short time on your own system,
to see if it meets your needs.  If you find it useful and you
keep it on your system for more than two weeks, you are obligated
to send in the registration fee.  If you don't find it useful,
simply delete it from your system.
 
To register, send $19.95 plus $3.50 for shipping to:
 
Barry Smiler
Bardon Data Systems
1023 Key Route Blvd.
Albany, CA 94706
 
Outside North America please add $6 for overseas shipping charges.
 
You can print and mail invoice.wri, the invoice that came with this
package.  It's in Windows Write format.  With a MasterCard or Visa
you can order by phone, at (510) 526-8470, or simply mail in your
card number and expiration date.

In France, you can register through WindowShare.  Print their file
winshare.wri (it's in Windows Write format) and mail it to WindowShare.
 
Registered users get a registration number that will turn off the
reminder screens.  Registration will also entitle you to a printed
manual, support, update notices, and a disk with the most recent
version.

Registered users also get these Extra Free Bonuses:  Two more great
Bardon utilities (WHATSNEW lists files not yet backed up, or directories
containing such files; PR/PRFILTER format output for printing, and add a
header with filename, size, create date, and print date), discount
certificate for JCSM shareware CD-ROMs at half price, discount on PsL
shareware-by-mail (up to 2/3 off!), discount on Shareware Magazine, free
Compuserve startup kit, other Windows shareware I think you'll like,
and whatever other goodies I can fit on the disk. 

SmilerShell is produced by a member of the Association of Shareware
Professionals (ASP). ASP wants to make sure that the shareware principle
works for you. If you are unable to resolve a shareware-related problem
with an ASP member by contacting the member directly, ASP may be able to
help. The ASP Ombudsman can help you resolve a dispute or problem with
an ASP member, but does not provide technical support for members'
products.  Please write to the ASP Ombudsman at 545 Grover Road, Muskegon,
MI 49442-9427 USA, FAX 616-788-2765 or send a Compuserve message via
Compuserve mail to ASP Ombudsman 70007,3536.
 
 
 
WHY IS THIS A SHELL?
 
The word "shell" is sometimes used for a wrapper that
surrounds another application and hides it.  SmilerShell is
the opposite of that.  It makes all the power of the command
line available from an environment in which that power is
not otherwise accessible.  But since it makes things more
visible, rather than less visible, why is it called a shell?
 
It's a shell in another sense.  Maybe you've seen programs
that let you "shell out" to DOS, for example WordPerfect's
Ctrl+F1 command, Shell.  When you "shell out" it's like
having a window into another environment, a pathway to a
different level of functionality.  That's what SmilerShell
is, and that's why it's a shell.
 
 
 
INSTALLING SMILERSHELL
 
SmilerShell includes the following files:
 
  smishell.exe      the program
  smishell.hlp      the documentation, in Windows help file format
 
  readme.txt        overview and installation instructions
  install.exe       automated SmilerShell installer
  sample.ini        sample initialization file
  sample.stk        sample command stack file
  file_id.diz       45 column x 10 line text description, for BBS uploads
  vendor.doc        gives distribution permission
  invoice.wri       registration invoice (direct to Bardon Data Systems)
  winshare.wri      registration invoice (through French distributor)
  whatsnew.txt      new features and revision history
 
You can install SmilerShell automatically, using the enclosed
auto-installer.  To do this, simply run install.exe.  You can
run it using File Manager, or the Run item on Program Manager's
File menu, or in whatever other convenient way you choose.  Give
it the directory to put SmilerShell's files into, and the Program
Manager group name for the SmilerShell icons (appropriate
defaults are suggested).  It'll do the rest.
 
If you prefer, you can install SmilerShell manually:
 
  1) Copy the files to a convenient directory on your hard
  disk.  (Actually, only smishell.exe and smishell.hlp need
  to be in this directory.  The others are not required to
  run SmilerShell.)
 
  2) Put the SmilerShell icon into a program group.  To do
  this, bring up File Manager and set it to the convenient
  directory you chose in the previous step.  Then drag-and-
  drop smishell.exe into your favorite Program Manager
  group.  The SmilerShell icon should appear there.
 
  (How to drag-and-drop: While the mouse is pointing at the
  word "smishell.exe" in File Manager, press and hold the
  left mouse button.  While continuing to hold the button
  down, move the mouse to point into your favorite Program
  Manager group.  Let go of the button.  The SmilerShell
  icon should appear in the group.)
 
Optionally, you can set up an initialization file.  But if you start
SmilerShell without an initialization file, you'll be asked if you'd
like SmilerShell to create one and fill it with reasonable values, then
let you edit it in Notepad before proceeding.  See the section The
Initialization File in the documentation.
 
Optionally, you can set up the command line.  See the section Command Line
Parameters in the documentation.
 
Optionally, you can create a command stack file, having a list of commands
that you want loaded into SmilerShell.  See the section Command Stack Files
in the documentation.
 
 
 
NOTE FOR THOSE UPGRADING FROM PREVIOUS VERSIONS
 
Version 1.0 stored the DC info file smishell.dir and the default
ini file smishell.ini in your Windows directory.  Starting with
version 1.1, to avoid cluttering the Windows directories of the world
more than they already are, by default these files are now stored in
the same directory as the SmilerShell program.  After you install the
new version, you can delete smishell.ini and smishell.dir from your
Windows directory.
 
As before, the ini file can be wherever you like.  Use the command
line switch /ini=<drive:\fullpath\filename> to put it where you want.

Starting with version 1.3, the DC info file can also be wherever you like.
Use the ini file parameter dirfile=<drive:\fullpath\filename> to do this. 
 
 
SYSTEM REQUIREMENTS
 
Complete functionality under Microsoft Windows 3.1 or better.
Partial functionality under earlier versions of Windows.
 
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
DISTRIBUTION:

You are hereby given the right to non-commercially distribute the full
SmilerShell shareware evaluation package, only in its entirety as
distributed with this file.  None of the files in this package may be
modified or deleted.  

Distribution is non-commercial if it is for free, or by a hobby
or computer interest group to its members, or by any BBS.  Commercial
distribution is when the distributor profits from the distribution.
Examples include, but are not limited to, shareware catalogs, sales at
trade shows, disk or CD-ROM compilations, or rack vending. 

For commercial distributors, unless you receive written permission in
advance from the author, Barry Smiler, you are specifically prohibited
from charging, or requesting donations, for any copies, however made,
of SmilerShell; and you are also prohibited from distributing the software
and/or documentation with other products (commercial or otherwise)
without prior written permission.

There is one exception.  Disk vendors approved by the Association of
Shareware Professionals are permitted to redistribute SmilerShell, subject
to the conditions in this license, without specific written permission, as
long as they abide by ASP standards for such distribution.



ONE LINE DESCRIPTION:

Windows command line <ASP> - editor, history, aliases, fast dir change, more


KEYWORDS:

SMILERSHELL BARDON WINDOWS COMMAND LINE EDITOR DOS SHELL UTILITY


FULL DESCRIPTION:

SmilerShell is the ultimate Windows command line.  Windows is wonderful, but
some things are still done more easily by just typing in a command.  That's
what SmilerShell is for.  Unlike Program Manager's RUN, it runs anything
(DOS programs, Windows programs, or DOS internal commands) and it supports
redirection.  There's a built-in command line editor with full history and 
search, aliases (type-in or on the Function keys), fast directory-change
(like Norton Change Directory) across MULTIPLE drives.  Toggle-able current
directory and/or clock in the title bar, Windows memory/resources in the
menu, and more.  ASP shareware.  Really nice!


OTHER INFORMATION

Requirements: Complete functionality under Microsoft Windows 3.1 or better.
              Partial functionality under earlier versions of Windows.

Registration: $19.95 for printed manual, support, upgrade notices, 
              current version disk, bonus utilities, more.

Author:       Barry Smiler, 1023 Key Route Blvd., Albany CA 94706
              Compuserve 72340,375
```
{% endraw %}

## WHATSNEW.TXT

{% raw %}
```
What's New

Version 1.3, released October 5, 1993:

   Added ini file parameter timeformat=, which tells the clock 
   to display the time in 12 hour (am/pm) or 24 hour format.

   Added ini file parameter dirfile=, so the DC info file can be
   any name in whatever directory you want.

   Added a Windows-hosted installer, INSTALL.EXE.

   Unregistered SmilerShell now shows a "Register" menu item.

   Added more drive verification testing when creating DC info file.

   SmilerShell now starts up commands somewhat faster than before.

   A lot of people didn't like that when you hit Return to run a
   command, SmilerShell beeped, so that feature has been removed.

   Fixed bug: on exit, unregistered SmilerShell puts up WinHelp.
   To do this, it has to wait a moment to ensure that WinHelp gets
   going OK.  If, in that moment, you tried to exit SmilerShell
   AGAIN, you got a GPF.

   Fixed bug: if unregistered SmilerShell couldn't find its help
   file at exit, it didn't let you quit.  It didn't even let you
   shut down Windows.  Ow!


Version 1.2, released September 15, 1993:

   Added contact and ombudsman information required to meet the
   standards set by the Association of Shareware Professionals,
   and WindowShare distributor contact information.

   Added Run dialog to select a program from a list.

   Added further support for winwidth=PREV so it saves showclock,
   showdir, showresources, and topmost in addition to showmenu
   and screen position.
   
   Speeded up reading at startup of smishell.dir (DC info file)
   considerably.

   Fixed Open and Save As bug that changed the current directory
   to the directory of the opened or saved file.

   Renamed the sample ini file from smishell.ini to sample.ini so
   as to avoid any confusion with a (default-named) smishell.ini
   file.  Similarly, renamed the sample command stack file from
   smishell.stk to sample.stk to avoid confusion.


Version 1.1a, released August 3, 1993:

   Re-scan button in directory change dialog was changing dir to
   currently-highlighted directory.  Fixed this to stay in same
   directory after the re-scan.


Version 1.1, released July 26, 1993:

   Added support for winwidth=PREV in ini file.  If set, saves
   screen position between uses in prevposition ini file param.

   Confirm exit when you shut down Windows as well as at normal
   program exit.

   Added the ini file parameter confirmexit so you can turn off
   the exit confirmation dialog and just get out when you want to.

   Added a Re-scan pushbutton to the directory change dialog, as a
   convenience feature.

   The smishell.dir (DC data) and default initialization files
   are now in the same directory as the program, instead of in the
   Windows directory as before.

   If it was opened, and if nobody else is using it, close SmilerShell
   Help when exiting.

   Replaced file descrip.bbs with file_id.diz in standard format.

   Made a number of documentation enhancements.


Version 1.0, released July 17, 1993:

   Initial release, limited distribution, for comment
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3978

     Volume in drive A has no label
     Directory of A:\

    GO       BAT        36  11-24-93   9:49a
    SMISHELL EXE     64320  10-05-93   1:30a
    SMISHELL HLP     69215  10-05-93   1:30a
    SAMPLE   INI      1159  10-05-93   1:30a
    SAMPLE   STK       104  10-05-93   1:30a
    README   TXT     11945  10-05-93   1:30a
    FILE_ID  DIZ       460  10-05-93   1:30a
    VENDOR   DOC      2551  10-05-93   1:30a
    WHATSNEW TXT      3164  10-05-93   1:30a
    INSTALL  EXE     19168  10-05-93   1:30a
    INVOICE  WRI      2944  10-05-93   1:30a
    WINSHARE WRI      1920  10-05-93   1:30a
    SHOW     EXE      2040   9-12-88  10:48a
           13 file(s)     179026 bytes
                          137216 bytes free
