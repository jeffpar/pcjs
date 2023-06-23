---
layout: page
title: "PC-SIG Diskette Library (Disk #1151)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1151/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1151"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROAM A DOS SHELL"

    ROAM is a DOS shell, an easy-to-use interface that insulates you
    from the complexities of DOS.  It makes it easier to enter commands and
    manage files.  ROAM helps organize and control a hard disk and makes it
    possible for you customize its organization to fit individual user
    needs.
    
    Instead of displaying confusing information, (e.g., cluster size and
    other technobabble), ROAM breaks down the process into two distinct
    modes, depending on what you are doing.  The first is an enhanced
    command line, similar to, but easier to use than the DOS command line
    and the second is a directory/file screen where you can easily
    navigate through disk directories, files, and drives.
    
    ROAM grows with you as you develop your computer skills.  While an
    experienced programmer can make use of its more advanced capabilities,
    a newcomer immediately gains a beneficial, easy-to-use tool.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1151.TXT

{% raw %}
```
Disk No  1151
Program Title:  ROAM
PC-SIG version 1

ROAM is a DOS shell, an easy-to-use interface that insulates the user 
from the complexities of DOS.  It makes it easier to enter commands and 
manage files.  ROAM helps organize and control a hard disk and makes it 
possible for the user to customize its organization to fit individual 
user needs. 

Instead of displaying confusing information (e.g. cluster size and other
technogabble), ROAM breaks down the process into two distinct modes,
depending on what the user is doing.  The first is an enhanced command
line, similar to, but easier to use than, the DOS command line, and the
second is a directory/file screen where one can easily navigate through
disk directories, files and drives.

ROAM grows with the user as he develops his computer skills.  While an
experienced programmer can make use of its more advanced capabilities, a
newcomer immediately gains a beneficial, easy-to-use tool.

Usage:  DOS Shell Interface.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $44.95

File Descriptions:

#FILES        Description of files included on disk from author.
#READ    ME   Last minute changes, instructions, info on shareware.
INSTALL  EXE  Installs ROAM on the hard disk.
LOOK     EXE  File browser used by ROAM.
REBOOT   COM  Reboots a PC compatible (including some difficult ones).
ROAM     DOC  ROAM manual on disk.
ROAM     EXE  Main program used to start ROAM.
ROAMINIT EXE  Used by ROAM for initialization.
VIEW     EXE  Peephole into a DOS redirection pipe.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 1151 ROAM  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install ROAM to your hard disk, type INSTALL (press enter)           ║
║                                                                         ║
║ To view the documentation for ROAM, type LOOK ROAM.DOC (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ROAM.DOC

{% raw %}
```
                                April 1, 1988

                                 FINAL DRAFT

                       Intermedia Design Systems, Inc.
                            15 Century Hill Drive
                              Latham, New York

                               (518) 783-1661



FRONTISPIECE

Design by Intermedia Design Systems, Inc.

Copyright (c)  1988 by  Intermedia Design Systems, Inc.  All rights reserved.
Published in the United States of America.  Reproduction or translation of any
part of  this work  beyond that  permitted in  Section 117  of the 1976 United
States Copyright Act without the express  written permission  of the copyright
owner is  unlawful.   Requests for permission or further information should be
addressed to the Permission Department of Intermedia Design Systems, Inc.

IBM, IBM PC and PC DOS are registered  trademarks of  International Businesses
Machines  Corporation.    MS  DOS  is  a  registered  trademark  of  Microsoft
Corporation,  Compaq  is  registered   trademark   of   the   Compaq  Computer
Corporation.

THE  PURCHASER  MAY  MAKE  A  BACK-UP  COPY  FOR  HIS/HER USE ONLY AND NOT FOR
DISTRIBUTION OR RESALE.

THE PUBLISHER AND AUTHORS ASSUME NO RESPONSIBILITIES FOR ERRORS, OMISSIONS, OR
DAMAGES,  INCLUDING  WITHOUT  LIMITATION  DAMAGES  CAUSED  BY THE USE OF THESE
PROGRAMS OR FROM THE USE OF THE INFORMATION CONTAINED THEREIN.  BY USING THESE
PROGRAMS, THE  USER ACCEPTS  ALL RESPONSIBILITY  FOR THE USE OF THE RESULTS OF
THE OUTPUT.  IF ANY ERRORS ARE DISCOVERED IN THE PROGRAMS, CORRECTIONS WILL BE
SUPPLIED BY IDS TO THE ORIGINAL PURCHASER.  THIS IS THE EXTENT OF ANY WARRANTY
WHICH IS GIVEN OR IMPLIED.

Printed in the United States of America



USER ASSISTANCE

Intermedia Design Systems, Inc. is pleased to provide  assistance to  users of
our software.   We provide technical assistance to all users who register with
Intermedia Design Systems, Inc. by filling out and returning the  postage paid
USER'S  REGISTRATION  AGREEMENT  in  this  package.  Users who have registered
should direct any  questions  about  running  this  program  to  our technical
service  number  (518)  783-1661.    Please have your registered serial number
(which you can find either on the screen  when you  start up  ROAM, or  on the
distribution  disk  which  you  received from Intermedia Design Systems) handy
when you call the above number.

This software documentation is designed to provide accurate  and authoritative
information in regard to the subject matter covered.

The computer  program for  ROAM is  delivered to you on a diskette that is not
electronically copy-protected.  As  a licensed  user of  this program  you are
entitled to  make a  backup copy of these programs, to protect your investment
should the originals become damaged.



WHAT CAN ROAM DO FOR YOU?

ROAM is a DOS shell, an interface to the computer that insulates  you from the
complexities of DOS.  The program makes it easier to enter commands and manage
files.  All commands generated by ROAM are passed through  to DOS  without you
having to  type them  yourself.  ROAM helps you organize and control your hard
disk by letting you choose the  means to  quickly access  often used programs,
DOS commands and batch files.

ROAM is  also a disk management program which handles large capacity hard disk
systems, simplifying maintenance tasks such as file deletion,  copying, moving
files, and creating and renaming subdirectories.

Instead  of  displaying  superfluous  information (e.g. cluster size and other
technogabble), ROAM's  philosophy  is  to  break  down  the  process  into two
principal modes.   Depending on what you are doing, it might be easier for you
to work in one or the other.   Most operations  can be  carried out  in either
mode, but  you will most likely find one better suited for what you are trying
to accomplish.  The first mode is an  enhanced command  line, similar  to, but
easier to  use than  the DOS  command line, and the second is a directory/file
screen where you can  easily navigate  through all  your disk  directories and
files, effortlessly switching from drive to drive.

ROAM grows with you as you develop your computer skills.  While an experienced
programer  can  make  use  of  its  more  advanced  capabilities,  a  newcomer
immediately gets a beneficial tool.

ROAM is  not a  "memory resident"  program which gobbles up your valuable RAM.
ROAM uses only the memory it needs and then returns the memory to DOS  when it
is not needed.



GETTING STARTED

Although ROAM can be used if you only have a floppy drive system, its features
do not warrant it.   Therefore  this documentation  and installation procedure
are aimed at a HARD DISK SYSTEM.  In the instructions that follow, the various
"special" keys and key  combinations,  are  enclosed  in  angle  brackets, for
example <ENTER>, <F2>, <Alt-U>, <Alt-F2>, etc.  Do not type < E N T E R >.

To Install Roam

     After DOS  has been  installed on your system, take the distribution disk
     and insert it in the A: drive of your computer.  Switch to the  C: drive,
     if you are not there already.  Type:

          C: <ENTER>

     to do this.  At the C> prompt type the following line:

          A:INSTALL <ENTER>

     If you have an AUTOEXEC.BAT file with a path already defined, you will be
     prompted by ROAM INSTALL for the directory in which you wish to have ROAM
     install  itself.    Move  the  cursor  to the directory where you wish to
     install ROAM and press  the <ENTER>  Key.   ROAM will  then automatically
     install itself and its adjunct programs in that directory.  You will also
     have the option to  install ROAM  in its  own subdirectory.   Once ROAM's
     installation   procedure   is   complete,   reboot   your   computer  (by
     simultaneously pressing <Ctrl-Alt-Del>).

     You may want to add ROAM as the  last item  executed in  the AUTOEXEC.BAT
     file,  so  that  it  will  automatically  load  itself when you boot your
     machine.  If you would like ROAM to  "lock" itself  into memory,  so that
     you or  a user can not inadvertently EXIT to DOS, include the phrase ROAM
     SHELL  rather  than  ROAM.    If  you  do   not  want   ROAM  to  execute
     automatically, do  not include  it in  your AUTOEXEC.BAT file, but simply
     type ROAM at the C> prompt and ROAM will load itself.   Press any  key to
     move  into  ROAM's  DIRECTORY/FILE  mode  after the title page is on your
     screen.   NOTE:  If you need assistance and have registered  your copy of
     ROAM, you  may use  the Technical Assistance telephone number which is on
     this title screen.

Getting out of ROAM

     If you wish to get out of ROAM for any reason (if you have not started it
     with the  ROAM SHELL  option in AUTOEXEC.BAT), simply type EXIT in ROAM's
     COMMAND LINE mode and you be at the DOS command line.



ROAM HAS THREE SCREEN MODES - DIRECTORY/FILE, AUTOMENU and COMMAND LINE

ROAM has three modes of which  two, DIRECTORY/FILE  and COMMAND  LINE, are the
most important.   Depending  on what you are doing, it might be easier to work
in one or the  other of  these two.   Most  operations can  be carried  out in
either mode,  but you will most likely find one better suited for what you are
trying to accomplish.

Screen Mode Toggle

     The <TAB> key  will  allow  you  to  move  between  ROAM's  screen modes.
     Normally  it  will  toggle  you  between  the COMMAND LINE screen and the
     DIRECTORY/FILE screen unless you  have created  an AUTOMENU.BAT  in which
     case, the <TAB> key will toggle you through three modes (DIRECTORY/FILE -
     COMMAND LINE  - AUTOMENU).   To  facilitate setting  up such  a menu, see
     CHOOSE in the ADJUNCT PROGRAMS listing.

When in ROAM, you always know where you are!

     Whether you  are in the COMMAND LINE mode or the DIRECTORY/FILE mode, the
     current path is always  present,  so  you  know  what  directory  you are
     currently in.

     An example of ROAM's Current Path prompt might look like this:

          C:\BUSINESS\LETTERS\1987\



COMMAND LINE MODE

The screen  has a  bar of  light in  which you  enter commands, similar to the
command line in DOS with some very big differences:

Command Line Editor

     You can edit the line without erasing everything you have typed, by using
     ROAM's Command Line Editor:

     All of  ROAM's editing  functions operated in an "Insert Mode", i.e. each
     character typed is inserted into the line at the cursor position, and any
     characters to the right of that position are moved to the right.

     The following  special keys  are available in ROAM's Command Line Editor,
     as well as in any other line where ROAM request you to  edit a  line (the
     Pattern, customizing items, etc.).

          <DEL>               Deletes the character at the cursor.

          <BACKSPACE>         Moves  the  cursor  one  space  to  the left and
                              deletes the character that was there.

          <Ctrl-X>            Erases the entire line.

          <LEFT ARROW>        Moves the cursor one  position to  the left non-
                              destructively (unlike <BACKSPACE>.

          <RIGHT ARROW>       Moves the cursor one position to the right.

          <Ctrl-LEFT ARROW>   Moves the cursor one word to the left.

          <Ctrl-RIGHT ARROW>  Moves the cursor one word to the right.

          <HOME>              Moves the  cursor to  the first  position in the
                              line.

          <END>               Moves the  cursor to  the last  character in the
                              line.

          <TAB>               Changes  to   AUTOMENU  mode,  if  \AUTOMENU.BAT
                              exists, otherwise to the COMMAND LINE mode.

Recalling Previous Commands

     You may instantly recall  previous  commands  by  pressing  <DOWN ARROW>,
     bringing to  the screen up to 20 of the last commands.  These can then be
     reexecuted by moving  the  bar  of  light  to  the  appropriate  item and
     pressing <ENTER>.

Function Key Assignment

     You may  temporarily assign the function keys <F1> through <F10> to carry
     out specific commands, either by typing the command  at the  command line
     or by  moving the  bar of  light to the command (in the PREVIOUS COMMANDS
     window) and pressing <Alt> and the  selected  function  key  at  the same
     time, e.g.  <Alt-F1>.   A note  will appear  in the  lower portion of the
     screen stating that the command has been stored to whichever function key
     you have  designated.   Unlike the Alphabetic Key assignments, these keys
     lose their memory when you EXIT ROAM or turn off the computer.

Adjunct Programs

     You can make use of ROAM's special functions by incorporating the Adjunct
     Programs in  your command.   For  example, you can use MOVE to move files
     from one directory to another.   You  can  also  use  the  "marked items"
     shortcut (^M) the "bar-of-light" shortcut (^B), etc. with these programs,
     other utilities or DOS commands such as COPY.  (SEE ADJUNCT PROGRAMS)

Marking and Unmarking Files

     ROAM gives you the ability to identify individual  files so  that you may
     take  action  on  them  as  a  group.    You  can  only mark files in one
     subdirectory at a time.  Marking files in  the COMMAND  LINE Mode  can be
     accomplished in several ways.

     For example, typing the following command:

          MARK *.BAT     <ENTER>

     will mark all files with the extension .BAT in the current directory.

     You may  consecutively add  files to  the MARKED  group, by repeating the
     above command for file name pattern you wish to add.

          MARK *.BAT     <ENTER>
          MARK *.TXT     <ENTER>
          MARK BUSLTR.*  <ENTER>
          MARK RO*.*     <ENTER>

     Unmarking files can also be achieved in the  COMMAND LINE  mode.   If you
     wish to  selectively remove certain files from the marked group, type the
     following command:

          UNMARK *.BAT   <ENTER>

     to unmark all those files with the extension .BAT.

     After you have carried out the  activity  that  involved  all  the marked
     files,  you  can  remove  all  the  marking  from the files by typing the
     following:

          UNMARK *.*     <ENTER>

Multiple Commands on a Single Command Line

     You can specify a series of actions to  be carried  out by  dividing them
     with the  "grave" accent  mark `  (not the apostrophe ').  Let us suppose
     you have been editing several .DAT files, littering  your hard  disk with
     .BAK backup files in the process.

          DEL *.BAK`COPY *.DAT`A:`A:`DIR

     This command  deletes all the backup files, copies your data files to the
     A: drive, changes to that drive, and displays its directory.

<Ctrl> Key Shortcuts

     A series of key combinations have been set aside to  make life  in ROAM a
     little more  pleasant.   When you  type one of these keys the character ^
     appears along with the  corresponding letter.   You  may also  enter them
     that way, e.g. <Ctrl-B> is the same as <^> <B>.  These short cuts can not
     be included in batch files, as batch files are interpreted by COMMAND.COM
     rather than by ROAM.

     <Ctrl-B>:  the Bar of Light

          Using the ^B shortcut tells ROAM that you want to do something using
          the  file  or  subdirectory  marked  by  the  bar  of  light  on the
          DIRECTORY/FILE screen.   For  example, if  you wish to have standard
          DOS directory information for  an item,  you would  move the  bar of
          light to  that item (a file or subdirectory), toggle (with <TAB>) to
          the COMMAND LINE mode and type:

               DIR <Ctrl-B>        <ENTER>

          For another example, let's copy the file in the bar of light  to the
          A: drive:

               COPY <Ctrl-B> A:    <ENTER>

     <Ctrl-M>:  the Marked Items

          The ^M  shortcut lets  you specify an arbitrary group of files to be
          processed together, referencing all  items  which  you  have marked.
          Using  this  shortcut,  in  conjunction  with  a specific program or
          command, will allow you to have the specific action taken on all the
          items you have marked.  For example, you can MOVE all the files that
          you  have  marked  in  the  current  directory  into  the  directory
          C:\BUSINESS by typing:

               MOVE <Ctrl-M> C:\BUSINESS  <ENTER>

          On the  other hand,  you can  MOVE all  the files you marked in some
          other directory into the current one by typing:

               MOVE <Ctrl-M>  <ENTER>

     <Ctrl-I>:  User Input

          The ^I shortcut will open a small one-line  window at  the bottom of
          the screen,  to request input of a parameter which might be required
          by the program you  are  executing.    An  example  of  this  is the
          preconfigured <N>  key in the DIRECTORY/FILE mode where ROAM makes a
          new subdirectory and takes you there.  ROAM  requests USER  INPUT in
          naming the  new subdirectory.   You could have accomplished the same
          thing in the COMMAND LINE mode by typing:

               MD <Ctrl-I>`CD <Ctrl-J> <ENTER>

          The first command, MD <Ctrl-I>, pauses for you to supply the name of
          the new subdirectory, and then creates it once you type the name and
          press <ENTER>.  The second command, CD <Ctrl-J>, takes the input you
          just typed for ^I and repeats it as the parameter for CD, taking you
          there (See below).

     <Ctrl-J>:  What You JUST Input in the ^I Window

          The ^J shortcut is especially useful if you wish to carry out two or
          more actions on the same user input.  See the example above for ^I.

     <Ctrl-P>: The PATH in Which ROAM is Installed

          The shortcut  ^P is  replaced by the  name of the directory in which
          ROAM has been installed.  For example, the alphabetic key <H> is set
          up as a  Help key  to LOOK  at the  #READ.ME and ROAM.DOC files.  It
          is defined as:

               LOOK ^P\#READ.ME ` LOOK ^P\ROAM.DOC

          assuming that your distribution  diskette included a #READ.ME  file,
          otherwise:

               LOOK ^P\ROAM.DOC

DIRECTORY/FILE MODE

The second mode is the DIRECTORY/FILE mode.  Unlike other  DOS shell programs,
ROAM's DIRECTORY/FILE  mode fills  the screen  with directories and files, not
superfluous information that is not required on the screen all the time.   You
can scroll through all the subdirectories and files.

ROAMing in the DIRECTORY/FILE mode, you may

     Using a  "point and shoot" methodology, move from file to file, directory
     to directory, drive to drive,

     Easily execute programs by moving a  bar  of  light  to  the  program and
     striking the <ENTER> key,

     Selectively mark  a file or group of files to be moved, copied, looked at
     or anything else you wish to do,

     Permanently assign a single alphabetic key to carry out commands  such as
     moving  to  another  drive  or  executing  a certain program.  Unlike the
     function keys <F1> to <F10>, these  assignments are  not erased  when you
     turn off the computer.

Layout of the DIRECTORY/FILE Window

     This screen is made up of the following components:

          A status line comprised of the current path, Pattern (if active) and
          Del Safety indicator,

          The Directories  window  displaying  the  subdirectories  within the
          current directory,

          The Files window, displaying the files within the current directory,

          And the user-definable Key to available commands.

     The first  part of  the status line is the current path, which shows your
     location in the branches of the DOS directory "tree".   Below it,  is the
     Pattern used  for determining  which files  will be  visible in the Files
     window.  In the  top  right  corner  of  the  screen  is  the  Del Safety
     indicator which  tells you whether "the safety" is ON or OFF for deleting
     files or empty  subdirectories.    If  it  is  ON,  ROAM  always requests
     verification before deleting.

     The Directories  and Files  windows are of the "point and shoot" type, in
     which a bar highlights an  item,  and  the  user  chooses  it  by hitting
     <ENTER> or  a user-definable  alphabetic key.   The numbers at the bottom
     right corner of  both  the  Directories  and  Files  windows respectively
     represent the number of directories and files in the current directory.

     The Key  is located  at the  bottom of  the screen.  It consists of three
     lines of user-editable text, usually a  key of  available commands.   The
     Key comes  preconfigured, just  like certain  of the  alphabetic keys, in
     order to give you a head start in setting up your own Personal Guide.

Navigation in the DIRECTORY/FILE Mode

     <ENTER>        If the bar of light is in the Directories window,  you are
                    taken to  the directory  that was in the bar of light when
                    you pressed <ENTER>.

                    If the extension of the file in the bar of  light has been
                    defined (by  us, or  by you), the corresponding command or
                    program is executed.  For example, the extension  .EXE (as
                    well as  .COM and  .BAT) is associated with the command ^B
                    (the item in the bar of  light itself),  therefore feeding
                    that item  to DOS as a command.  If the bar of light is on
                    CHKDSK.COM, then DOS executes  CHKDSK.COM.   The extension
                    .BAS  is  associated  with  BASICA  ^B.   If the bar is on
                    SAMPLES.BAS,  then  DOS   executes   the   command  BASICA
                    SAMPLES.BAT,  just  as  if  that  had been typed in at the
                    command line.

                    If an extension has  not  been  defined,  then  some other
                    user-definable  action  takes  place.    The preconfigured
                    command is LOOK ^B, so that pressing <ENTER>  when the bar
                    is  on  CONFIG.SYS  will  show you the current contents of
                    CONFIG.SYS.  (SEE YOUR PERSONAL GUIDE)

     \              When you press this key it will bring you back to the root
                    directory  no   matter  how   deeply  nested  you  are  in
                    subdirectories.

     .              Drops "down" one subdirectory toward the root directory.

     *              Opens the  Edit  Pattern  window.    (See:    You  Set The
                    Pattern)

     <LEFT ARROW>   Moves one  column to  the left.   If  the bar of light had
                    been in  the first  column of  the Files  window, it moves
                    into the  Directories window.   If the bar had been on the
                    rightmost visible  column of  the Files  window, and there
                    were one  or more  columns not  visible at the left of the
                    window, the window scrolls one column to the right, hiding
                    the  rightmost  column  and  making the next column to the
                    left visible.

     <RIGHT ARROW>  Moves one column to the right.   If  the bar  of light had
                    been in  the Directories  window, it moves to the leftmost
                    column of the Files window.   If the  bar had  been on the
                    rightmost visible  column of  the Files  window, and there
                    were one or more columns not visible, the  windows scrolls
                    one  column  to  the  left, hiding the leftmost column and
                    making the next column to the right visible.

     <UP ARROW>     Moves one row upward.  If the bar of light is in the Files
                    window, it can not move past the first row.  If the bar is
                    in the Directories window, and there were rows  above that
                    were   not   visible,   the  window  scrolls  downward  16
                    directories, hiding the current  group of  directories and
                    making the previous group visible.

     <DOWN ARROW>   Moves one  row downward.   If  the bar  of light is in the
                    Files window, it can not move past the  last row.   If the
                    bar  is  in  the  Directories  window, and there were rows
                    below that were not visible, the window scrolls  upward 16
                    directories, hiding  the current  group of directories and
                    making the next group visible.

     <Home>         Moves the bar of  light to  the leftmost  column, i.e. the
                    Directories window in the same row.  If the current row is
                    below the  last directory  in the  Directories window, the
                    bar moves to the last directory in the window.

     <End>          Moves  the  bar  of  light  to the rightmost column in the
                    Files window in the same row.  If the current row is below
                    the last  directory in  the Files window, the bar moves to
                    the bottom row of that window.

     <PgUp>         Moves the bar of light to the top row in  the window.   If
                    the  bar  is  already  in  the  top  visible  row  of  the
                    Directories  window,   the  window   scrolls  downward  16
                    directories, hiding  the current  group of directories and
                    making the previous group visible.

     <PgDn>         Moves the bar of light to  the bottom  row in  the window.
                    If the  bar is  already in  the bottom  visible row of the
                    Directories  window,   the   window   scrolls   upward  16
                    directories, hiding  the current  group of directories and
                    making the next group visible.

     <Ctrl-PgUp>    Moves the bar of light to the first  (visible or  not) row
                    of the  Directories window.   An alternative key that does
                    the same thing is <Ctrl-Home>.

     <Ctrl-PgDn>    Moves the bar of light to the last (visible or not) row of
                    the Directories  window.  An alternative key that does the
                    same thing is <Ctrl-End>.

     <TAB>          Changes to the COMMAND LINE mode.

     <Shft-TAB>     Customizes the DIRECTORY/FILE mode.

You Set the Pattern

     ROAM gives you the ability to see only the files you want,  by using Edit
     Pattern.   For example,  if you  wish only  to see  the files that end in
     (.COM), you can.  To choose Edit Pattern, press the  <*> key  (either the
     <Shft-8> from  the row  of numbers,  or the separate <*> near the numeric
     keypad will work.  A box with flashing  borders will  replace the  KEY at
     the bottom  of the  screen and you will be able to input whatever pattern
     you  would  like.    You  may  use  DOS  wildcards  such  as  *   and  ?.
     Additionally, you may use ! (e.g. *.!) to indicate that you want to match
     all executable file extensions (.COM), (.EXE) and (.BAT).

     Whenever  you  have  created  a  special  matching  pattern,  it  will be
     displayed right below the Current Path at the top of your screen, so that
     when you say to yourself, "I thought I had more files in this directory",
     look  to  the  display  to  make  sure  that  you have not set a limiting
     pattern.  To reset the pattern, so that all files are present, simply get
     to the  Edit Pattern  box again,  and this time clear the box by pressing
     <Ctrl-X><ENTER>.  This sets the pattern to the default *.*.

Deleting Files and Subdirectories

     One of the biggest problems  when  using  DOS  is  trying  to SELECTIVELY
     delete more  than one  file at a time.  We have made it easy when you are
     in ROAM.

     To delete a file, move the bar of light to  it and  press the  <Del> key.
     The file is erased and vanishes from the screen.  If the file is "locked"
     (i.e. is read-only) an error is reported instead.

     To remove a subdirectory, move the  bar  to  it  and  press  <Del>.   The
     subdirectory is  removed and  vanishes.  If the subdirectory is "locked",
     or has files  and/or  subdirectories  within  it,  an  error  is reported
     instead.

     The DEL SAFETY Toggle

          We know  that there  are times when you don't want it easy to delete
          files, so we have provided a safety toggle switch.  If the switch is
          ON, you  are prompted  to verify  that you  wish to delete a file or
          remove a subdirectory.   When it  is OFF,  you can  take the express
          route and  rapidly delete  those files  you wish to remove from your
          disk.

          To  change  this  toggle,  simply  press  the  <Ins>  key,  which is
          (usually) next  to the  <Del> key.  Each time you press this key you
          will toggle the Del Safety ON  or OFF.   ROAM   will  always let you
          know the status of this toggle in the upper right hand corner of the
          screen.  But remember,  when  you  do  delete  a  file,  it  is gone
          forever, unless you have a special program to retrieve it.

          If the  Del Safety  is OFF,  and you are deleting files, you will be
          dropped one subdirectory toward  the  root  when  the  last  file is
          deleted.    Additionally,  the  bar  of  light is on the name of the
          subdirectory in which you had  been  deleting,  and  the  Del Safety
          toggle  is  returned  to  ON.    This  is  to  protect trigger-happy
          Deleters!

Marking Files

     ROAM  gives  you  the   ability   to   identify   individual   files  and
     subdirectories so  that you  may take specific action on them as a group,
     even though they may not have  similar names.   Files  and subdirectories
     may be  marked in  one directory  at a  time.  If you mark an item in the
     current  directory,  having  already  marked  something  in  another, the
     marking will vanish in the original directory.

     To mark files and subdirectories, you simply move the bar of light to the
     item you wish to mark and press the <+> key (either the <Shft-=> from the
     top row  of keys,  or the  separate <+>  key near  the numeric keypad and
     cursor control keys may be used - using that <+> as well as <-> is easier
     on the  fingers).  Depending on your computer screen, marking will either
     underline the item or turn it a different color.

     If you move to another directory  and wish  to take  a look  at the files
     that you  have marked  in the other directory, you can toggle between the
     two directories by pressing <Alt-M>.  This works across drives.

Unmarking Files

     To unmark an item, move the bar of light cursor to it  and press  the <->
     key.  You can unmark all files at once by typing <Alt-U>.

The Easy Route:  User-Definable Keys - the Alphabetic Keys A to Z

     These keys,  which are  ONLY used in the DIRECTORY/FILE mode, can be used
     to permanently save instructions.  ROAM comes with several of  these keys
     predefined.  However, you can change any of these predefined keys, if you
     wish them to do other things.  SEE YOUR PERSONAL GUIDE.

     For example, your preconfigured Key shows <K>opy [sic] and <T>ransfer:

          You have several files, with nothing particular in common - at least
          in their names, to copy from the C: drive to A:.  Move to each file,
          pressing <+> to mark each one.  Unmark  any (with  <->) if  you were
          "trigger-happy" or  change your mind.  When you are satisfied, press
          the <A> key, which changes you to the A: drive, and then  press <K>.
          Each of the files you marked are copied and that fact is reported on
          the screen.  The original files are unmarked.   Press  <C> to return
          to the  C: drive.   This was equivalent to the following commands in
          the COMMAND LINE mode (after the files were marked):

               A:         <ENTER>
               COPY ^M    <ENTER>
               UNMARK *.* <ENTER>
               C:         <ENTER>

          As a matter of fact, those  exact  instructions  were  fed  into the
          COMMAND LINE!

          Lets try  another.   You have  the same problem with file names, but
          this time  you want  to MOVE  them to  another directory.   Mark the
          files you  want, the same way as last time.  Go to the directory you
          want (let's say \BUSINESS).   Do  this  by  pressing  <\>  (have you
          noticed that  </> works  also?), move to BUSINESS in the Directories
          window, and  press <ENTER>.   Next  hit the  <T> key  and watch your
          files move!   This  was equivalent  to the following commands in the
          COMMAND LINE mode (after the files where marked)

               CD \BUSINESS  <ENTER>
               MOVE ^M       <ENTER>

          or, as COMMAND LINE actually got it:

               CD \          <ENTER>
               CD BUSINESS   <ENTER>
               MOVE ^M       <ENTER>



ACTIVITIES USING BOTH MODES

Copying and Moving Files from One Directory to Another

     ROAM allows you to  move and  copy files  from one  directory to another.
     When you  MOVE a file or files, you can only move them within directories
     on the same drive, i.e. you can move a group of files  from one directory
     to another  on your hard disk, but you can not use ROAM's MOVE command to
     move them from your hard disk  to your  A: Drive.   When  you wish  to do
     this,  you  must  use  the  COPY  command and then return to the original
     directory and delete them (see example below).

     If you move a file to  another subdirectory  and there  is a  file by the
     same name  in that  subdirectory as  the file  you are  moving, ROAM will
     alert you and request directions on what to do.

Moving and Copying, when You Know Where You Are Going

     When you wish to move or copy files  from one  directory to  another, the
     following commands can be used in the COMMAND LINE mode.  The Control Key
     combinations can be used to make your work easier as shown below.

          COPY <Ctrl-B> A:    This would copy the file currently in the bar of
                              light to the A: drive

          COPY <Ctrl-M> \FUN  This would  copy the  files which  are marked to
                              the \FUN subdirectory.

Packing Your Bags and Taking the Files with You

     ROAM's other way of moving and copying  files  -  by  moving  to  the new
     directory and  calling for the program to deliver the files to you.  This
     method is similar to checking into a hotel, going to your room and having
     the porter  bring your  bags to  your room.  You would take the following
     steps.

          1.   In the DIRECTORY/FILE mode, mark the  files you  wished to move
               or copy.

          2.   Remaining  in  the  DIRECTORY/FILE  mode, move to the directory
               where you wish to copy or move the files.

          3.   When you are in the new  directory, <TAB>  to the  COMMAND LINE
               mode and  type either  of the  following, depending on what you
               wish to do:

               COPY ^M   <ENTER>

               MOVE ^M   <ENTER>

          ROAM will then take  over  and  carry  out  your  wishes,  moving or
          copying all the marked files to the new directory.



YOUR PERSONAL GUIDE TO ROAM - CONFIGURATION OF THE DIRECTORY/FILE MODE

ROAM allows you to customize several facets of the DIRECTORY/FILE mode to make
ROAM adapt to your needs.   To  set  up  your  personal  guide,  <TAB>  to the
DIRECTORY/FILE mode and then press <Shft-Tab>.  You will be presented with the
following menu:

      Customizations Available
      Alphabetic keys
      Default command for undefined extensions
      File extensions associated with commands
      Key at bottom of screen

      Quit


Move the bar of light to one your choices and press <ENTER>.


Alphabetic Keys

     ROAM is  distributed with  several keys  predefined to  carry out certain
     commands.    You  may  keep  these  as they are, or change them using the
     personalization process shown in this chapter.  Some of ROAM's predefined
     keys are:

          <A>  Switches you to drive A:

          <B>  Switches you to drive B:

          <C>  Switches you to drive C:

          <D>  Lets you  view the  familiar DOS-type listing for the directory
               that you are currently in, including expanded information, e.g.
               File  Name  and  Extension,  File  Size,  Date,  Time.   If the
               directory is longer than can be fit on the screen  at one time,
               you can  scroll through  it using  the <UP>, <DOWN>, <PgUp> and
               <PgDn> keys.  When  you are  finished, use  <Esc> to  return to
               ROAM (See VIEW under ADJUNCT PROGRAMS).

          <E>  Activates the  DOS line  editor Edlin.  If the bar of light was
               on AUTOEXEC.BAT, then DOS is told  EDLIN AUTOEXEC.BAT,  to edit
               that file.

          <F>  Uses WHEREIS  to Find  files for  you, no matter where they are
               and then counts and lists them.   As  with <D>,  you can scroll
               through the resulting listing.

          <G>  Go  back  to  the  previous  subdirectory  (if  you used <R> to
               remember your place.

          <H>  Uses LOOK to browse through the #READ.ME file ROAM manual.

          <K>  Kopy [sic] marked files.  This  will copy  any files  which are
               marked into the current directory.

          <L>  Executes the  LOOK program  which allows  you to  view, but not
               edit any ASCII file and some word processing files.

          <N>  Prompts you for a subdirectory name,  creates it  and moves you
               there.

          <R>  Tells ROAM  that you wish to remember where you were before you
               move out of a directory.

          <T>  Transfer (i.e. MOVE) files  which are  marked into  the current
               subdirectory.

     You can  assign specific commands to an individual key.  After you are in
     the Alphabetic Keys menu, select the letter key you wish to configure.  A
     listing  of  the  alphabetic  keys  which  have already been selected are
     displayed at the top of the menu.  If the key you  wish to  configure has
     already been  chosen, you  will see  its assignment  on the editing line.
     You can either reassign it or exit without editing the line.

Default Command for Undefined Extensions

     You can specify a command to execute when you press <ENTER> with  the bar
     of  light   on  a  file  whose  extension  (the  extension  of  the  file
     AUTOEXEC.BAT is BAT) is not  otherwise  defined  in  ROAM  (See  the next
     section).   ROAM comes  preconfigured to execute LOOK ^B.  If you want to
     see the contents of CONFIG.SYS, move  the  bar  to  that  file  and press
     <ENTER>.

File Extensions Associated with Commands

     In this  screen you  are presented  with two columns.  The left column is
     for file extensions and  the right  is for  the commands  associated with
     those extensions, for example:

          BAS:basica ^B
          BAT:^B
          COM:^B
          EXE:^B
          DFX:DFX ^B
          PAS:TURBO ^B
          WP:WP ^B

     When the  bar of light is on a file with one of the above extensions, the
     command associated with that extension is executed.

KEY at screen bottom

     Using the ROAM's editing instructions  printed  on  the  screen,  you may
     design your  own Personal  Guide screen to reflect the decisions that you
     made in the first three menu selections.



AUTOMENU

If you have a set of operations which you would  like to  choose from  a batch
file (See CHOOSE below) create the batch file and name it AUTOMENU.BAT, making
sure that it is in the root directory.   It  would usually  be a  menu of some
sort, but  it could be any batch file.  The next time ROAM is started, it will
find \AUTOMENU.BAT and incorporate it as the third "mode".



ROAM ADJUNCT PROGRAMS

ROAM has several unique programs which can be run from ROAM, when you are at a
command  line   or  incorporated  into  your  personal  configuration  of  the
DIRECTORY/FILE mode.  These programs have  been selected  to make  life easier
for  you  when  you  are  using  ROAM  to  travel about your directories.  The
DIRECTORY/FILE mode comes preconfigured to automatically carry out  several of
these programs.

     CHOOSE    This program  can be used to create a menu, which can be either
               toggled  on  when  using  the  <TAB>   key  (if   it  is  named
               \AUTOMENU.BAT,  or  can  be  called  by  defining  one  of  the
               alphabetic keys with the name of the batch file.

               CHOOSE waits for keyboard  input  and,  provided  that  the key
               struck is in that set of letters in CHOOSE's parameter, the DOS
               ERRORLEVEL is set according to the order of that letter  in the
               parameter.

               EXAMPLE OF MENU.BAT FILE that you can create using CHOOSE:

                    echo off
                    :START
                    cls
                    echo E)dit
                    echo P)rint
                    echo Q)uit                    [SEE NOTE BELOW]
                    choose EPQ
                    if ERRORLEVEL 3 goto Q
                    if ERRORLEVEL 2 goto P
                    EditIt
                    goto START
                    :P
                    PrintIt
                    goto START
                    :Q
                    echo Goodbye!

          NOTE:  If you wish to use a similar AUTOMENU.BAT as one of the three
          modes in ROAM, you should use the ASCII  <TAB> character  instead of
          the <Q>  for Quit.   The  ASCII <TAB>  can be  created in most ASCII
          editors, e.g. EDLIN.   For the above  example you  would replace the
          line

               Echo Q)uit

          above with

               Echo [TAB] from this menu

          This  will  enable  you  to  rapidly  switch between the three modes
          without taking your finger off the <TAB> key.  Note that we  did not
          enclose the  name TAB  between angle  brackets.  This is because the
          angle brackets < > have a special meaning to DOS.

          DAY       If a batch file needs to know what day of the month it is,
                    the ERRORLEVEL returned by DAY can be used:

                         echo OFF
                         cls
                         DAY
                         if ERRORLEVEL 15 goto SECOND_HALF
                         echo This is the first half of the month.
                         goto THE_END
                         :SECOND_HALF
                         echo This is the second half of the month.
                         :THE_END

                    If the date if more than or equal to 15 the second message
                    is displayed, otherwise the  first is  shown.   Any set of
                    commands could be substituted for the messages.

          EACHDIR   This program  will carry  out a command on every directory
                    on the current drive.  If you wanted  to remove  or delete
                    every  backup   file  called  .BAK,  you  would  type  the
                    following:

                         EACHDIR DEL *.BAK

                    Similarly, if you wished  to look  at each  .BAT file, you
                    would type:

                         EACHDIR LOOK *.BAT

                    Never type something like:

                         EACHDIR DEL *.*

                    Unless, of course, that is what you meant!

          HOUR      This  program  tells  a  batch  file  the  hour of the day
                    through ERRORLEVEL:

                         echo OFF
                         cls
                         HOUR
                         if ERRORLEVEL 12 goto PM
                         echo It's early!
                         goto THE_END
                         :PM
                         echo It's late!
                         :THE_END

                    If the hour is more than or equal  to 12  than the message
                    at :PM  is displayed,  otherwise control  falls through to
                    the A.M.  Any set of commands could be substituted for the
                    messages.

          LOOK      This program,  allows you  to look  at files, if the files
                    are ASCII.  You can not make any  changes in  these files,
                    only look  at them.  The cursor control keys listed at the
                    top of LOOK's screen will move you about the file  and the
                    <Esc> key will drop you back into ROAM.  For example:

                         LOOK THISFILE.TXT

                    The Key  at the  bottom of  the DIRECTORY/FILE mode screen
                    comes  preconfigured  to  automatically  carry  out  LOOK.
                    Striking the <L> Key when in DIRECTORY/FILE mode, will let
                    you look at the file which  is currently  highlighted with
                    the bar of light.

                    As LOOK reads in a file,  you will see the number of lines
                    read appear at the bottom right corner of the screen.  You
                    can start moving about within the already read  portion of
                    the file  before the  rest of  the file  is finished being
                    read.   The bottom left corner of the screen tells you the
                    line number of the text at the top of the screen.

          MARK &    These commands will mark and unmark specified files (See
          UNMARK    COMMAND LINE - Marking Files.  The following sequence

                         MARK *.BAT
                         UNMARK R*.*

                    marks  all  the  batch  files in the current directory and
                    then unmarks any of  those marked  files which  begin with
                    the letter  "R".   Like MEM,  PUSHD and POPD, the commands
                    MARK and UNMARK are commands internal to ROAM  and can not
                    be included in batch files.

          MEM       This program  will give  you the  available memory of your
                    computer's current RAM memory.  The  Key at  the bottom of
                    the  DIRECTORY/FILE   mode  screen   comes  configured  to
                    automatically carry out MEM, when you  press the  <M> key.
                    This  is  actually  an  "internal"  command, rather than a
                    separate MEM.EXE.  This means that you can  not include it
                    in a batch (.BAT) file.

          MONTH     This  program  tells  a  batch  file the month of the year
                    through ERRORLEVEL numbering January as 1:

                         echo OFF
                         cls
                         MONTH
                         if ERRORLEVEL 4 goto APRIL_OR_LATER
                         if ERRORLEVEL 3 goto MARCH
                         if ERRORLEVEL 2 goto FEBRUARY
                         echo January!
                         goto THE_END
                         :FEBRUARY
                         echo February!
                         goto THE_END
                         :MARCH
                         echo March!
                         goto THE_END
                         :APRIL_OR_LATER
                         echo April or later!
                         goto THE_END
                         :THE_END

                    If the day of the week is more than or equal to 6 than the
                    message  at  :WEEKEND  is  displayed, if it's more than or
                    equal to 5,  we  talk  about  Friday,  etc.    Any  set of
                    commands could be substituted for the messages.

          MOVE      The MOVE  program is  used by ROAM to relocate a file from
                    one directory to another on the same drive.

                         MOVE THISFILE.TXT \ROAM

                    would  move  the  file   THISFILE.TXT  into   the  C:\ROAM
                    directory from the current directory.

                    Or you can type this command:

                         MOVE \ROAM\THISFILE.TXT

                    which   would   move   the   file  THISFILE.TXT  from  the
                    subdirectory \ROAM  into the  current directory.   You may
                    also use  the ^M  and ^B  functions of ROAM in conjunction
                    with MOVE to transfer a file or group of files.

          PUSHD &   These, like MEM, are internal commands and may not be
          POPD      included in batch files.   They  do not  exist as separate
                    .EXE  files.    In  the  COMMAND LINE mode, if you wish to
                    travel to another directory to  see  or  do  something and
                    want to return quickly to the drive and directory that you
                    were in before leaving the first directory, type:

                         PUSHD

                    Move to where you wish to  go.   When you  want to return,
                    simply type:

                         POPD

                    The Key  at the  bottom of  the DIRECTORY/FILE mode screen
                    comes preconfigured configured to  automatically carry out
                    PUSHD and POPD.  Type <R> for Remember, before you leave a
                    directory and when you wish  to  return  type  <G>  for Go
                    back.

          RENDIR    This program is used to rename a subdirectory:

                         RENDIR THISDIR THATDIR

                    will rename the subdirectory called THISDIR, to THATDIR.

          VIEW      This is  a filter  program, similar to LOOK except that it
                    gets its input from  the standard  output of  the previous
                    program in a pipe, and passes that input unchanged through
                    its standard output.  For example:

                         DIR | VIEW >NUL

                    which is the default definition of the alphabetic key <D>.
                    The DOS  command DIR is executed.  Rather than sending its
                    output to the screen it is redirected (see your DOS manual
                    for  more  information)  it  is  "piped" into the standard
                    input of VIEW.  When you are done  looking about  in VIEW,
                    it copies  its total input to standard output, which again
                    would normally be the screen.  Instead we  are redirecting
                    it  into  the  DOS  device  NUL,  which  is where you send
                    anything you don't want!  This program is of more interest
                    to advanced users of DOS.

          WEEK      This  program  tells  a  batch  file  the  day of the week
                    through ERRORLEVEL, numbering Monday as 1:

                         echo OFF
                         cls
                         WEEK
                         if ERRORLEVEL 6 goto WEEK_END
                         if ERRORLEVEL 5 goto FRIDAY
                         if ERRORLEVEL 2 goto REST_OF_WEEK
                         echo I hate Mondays!
                         goto THE_END
                         :WEEK_END
                         echo What are you doing here on a weekend?
                         goto THE_END
                         :FRIDAY
                         echo Thank God it's Friday!
                         goto THE_END
                         :REST_OF_WEEK
                         echo Get to work!
                         :THE_END

                    If the day of the week is more than or equal to 6 than the
                    message  at  :WEEKEND  is  displayed, if it's more than or
                    equal to 5,  we  talk  about  Friday,  etc.    Any  set of
                    commands could be substituted for the messages.

          WHEREIS   At the  COMMAND LINE,  you can  use this program to find a
                    file which might be  in another  directory of  the current
                    drive.  You can use DOS wildcards.  For example,

                         WHEREIS ROA*.*

                    The answer that WHEREIS might return is

                         C:\ROAM\ROAMINT.EXE
                         C:\ROAM\ROAMCUST.EXE
                         C:\ROAM\ROAM.EXE

                         3 Files Found

                    The <F>  key comes  configured to  automatically carry out
                    WHEREIS.  Pressing the  <F> Key  will prompt  you for user
                    input, which  is the file name you wish to search for.  It
                    then searches the whole disk, redirecting  its output into
                    VIEW, in case the report is a long one.

          YEAR      This program tells a batch file the last two digits of the
                    year through ERRORLEVEL:

                         echo OFF
                         cls
                         YEAR
                         if ERRORLEVEL 89 goto FUTURE
                         if ERRORLEVEL 88 goto PRESENT
                         echo The Past
                         goto THE_END
                         :FUTURE
                         echo The Future
                         goto THE_END
                         :PRESENT
                         echo The Present
                         :THE_END

                    If the year is more than or equal  to 89  than the message
                    at :FUTURE is displayed, if it's more than or equal to 88,
                    the message at :PRESENT, etc.   Any set  of commands could
                    be substituted for the messages.


******************************************************************************

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1151

     Volume in drive A has no label
     Directory of A:\

    #FILES            1442   4-18-88   3:36p
    #READ    ME       4054   4-01-88  11:36a
    INSTALL  EXE     23568   4-01-88   2:39p
    LOOK     EXE     15472   2-23-88  11:57p
    REBOOT   COM        26  11-29-87   9:00p
    ROAM     DOC     53888   4-01-88   2:37p
    ROAM     EXE     43472   4-05-88   3:54p
    ROAMINIT EXE     51968   4-01-88   2:41p
    VIEW     EXE     15536   2-18-88   5:23a
    FILE1151 TXT      1725  10-20-88  12:23p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       540  10-05-88   2:23p
           12 file(s)     211729 bytes
                          103424 bytes free
