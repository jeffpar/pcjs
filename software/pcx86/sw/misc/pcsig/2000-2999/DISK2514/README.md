---
layout: page
title: "PC-SIG Diskette Library (Disk #2514)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2514/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2514"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2514.TXT

{% raw %}
```
Disk No: 2514                                                           
Disk Title: PHONEMAN                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: PHONEMAN Personal Phone Book Manager                     
Author Version: 1.2B                                                    
Author Registration: $22.00                                             
Special Requirements: None.                                             
                                                                        
Throw away those note pads and paper scraps with scrawled addresses.    
PHONEMAN gives you a good reason to computerize your phone number list. 
                                                                        
You type in names, addresses, and phone numbers -- PHONEMAN does the    
rest.  Each phone book can hold up to 1,000 entries, and you can have   
multiple phone books.  Once the names and number are in PHONEMAN, it's  
easy to make changes with this completely menu-driven system. Create    
mail lists or phone lists with any printer, including HP laser printers.
If you have a modem, PHONEMAN will dial numbers for you.  Includes a    
screen saver and mouse support.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## INFO.TXT

{% raw %}
```
                  PHONEMAN Personal Address Book Manager
                              Version 1.2

                           by TASCS Company
                            P. O. Box 2326
                  Redondo Beach, California 90278-7826

                  Copyright 1990 - All Rights Reserved

  After installation is complete, you can start PHONEMAN by typing

     C:> PHONEMAN

at the DOS prompt (the "C:>") and then pressing Enter.  To run PSETUP, you
must change the DOS default directory to that containing the program and data
files, then type PSETUP and press Enter, OR use the TASCS Application Manager.

  The WHOIS capability is an important and integral part of using PHONEMAN.
This capability is provided by a pair of files - WHOIS.BAT and FINDNAME.EXE.
The WHOIS.BAT file is created in the first directory listed in your PATH
statement or C:\ if no PATH statement could be found.  To use WHOIS, type:

     C:> WHOIS searchname

to find all occurrences of 'searchname' in your default address book.  The
text to search for does not have to be identical in case (upper or lower, OK)
and need not be complete.  The searchname can be as short as one character but
this is probably too general a search.  When WHOIS.BAT runs, it actually runs
FINDNAME.EXE installed in your installation directory.  To search files other
then the default, copy WHOIS.BAT to another file, then edit the new file and
change the name of the file searched (the default version of WHOIS.BAT uses
ADDRESS.PBK) to the required file.


                               NEW FEATURES

   Version 1.2 provides several improvements over version 1.1, notably
in printer support.  Access to printing is easier (fewer key strokes),
there are more options, several printer types are directly supported, and
serial printers may now be used without using "MODE LPT1: = COM1:".

  Most importatnt is the addition of a second printer setup.  Now records
and labels may use independent setups and even different printers, if
desired.  This allows for a second printer dedicated to the task of
printing labels.  We also plan to support the Seiko Smart Label Printer
in our next release.  IMPORTANT NOTE: When printing only ONE entry from
the address book, the printer is NOT reset.  That is, any special features
such as LQ/15cpi will NOT be sent to the printer.  This allows you to use
those printers that form feed on reset (such as LaserJets) to create a
selected list by printing only one record at a time.  To activate your
special printer mode, be sure the mode is selected in the Printer Utility
screen, then select Printer Control (F5).  From here, select "Reset Printer"
to activate and reset to your mode.  Then press F10 to return to the Print
menu and start printing.

  Labels can now be printed up to three across a sheet.  To access a new
width, select "Change Parameters" and change to the new width (number of
labels across).  Pressing Enter, PHONEMAN changes the settings to those
for the new format and returns.  To modify these parameters, re-enter
"Change Parameters" but simply press Enter when the width is requested
(accept the current value) leaving you in parameter change mode.

  In addition, the width of the name fields has been modified slightly to
be more flexible.  The surname field, the logical place for entering a
company name instead of a personal name, may now expand to 37 characters.
Space remaining for the first names is reduced from 22 only to the extent
the surname exceeds 18 characters.


APPLICATION NOTE:

If PHONEMAN cannot recognize your modem and you are sure PSETUP has set the
correct parameters, try using the DOS 'MODE' command.  Specify the port, baud
rate, parity, data bits, and stop bits as appropriate.  For COM1, 1200 baud,
8 bits, 1 stop bit:

   C:>  MODE COM1:1200,N,8,1,

This assumes the MODE command can be found in your path.


  For more information, see the READ.ME file for last-minute comments and
additions.

```
{% endraw %}

## MANUAL.TXT

{% raw %}
```













                      PHONEMAN (tm) Personal
                      Phone Book Manager (c)
                      Version 1.2/Revision B

                     A phone and address book
                      manager for IBM(R) PC-
                         compatible and
                    PS/2(R) personal computers.




                        SHAREWARE EDITION












                          TASCS Company
                          P.O. Box 2326
                Redondo Beach, California  90278

               Copyright 1990 all rights reserved




PHONEMAN FEATURES

  *  Easy to use

  *  Maintain  phone  and  address  books  with  up  to 1000
     records per book, depending on available memory

  *  Accept  input  using  a  template  for  uniformity  and
     simplicity

  *  Create  mailing lists or phone lists using any standard
     text  printer;  special  support  for   Hewlett-Packard
     PCL printers  (Laser  Jet family, Desk Jet,  Paint Jet)
     and Epson dot matrix printers

  *  Print  one address label or a label for each address in
     the computerized phone book, any number of copies.
     NEW!!! - NOW SUPPORTS 1-, 2-, AND 3-WIDE SHEETS!

  *  Automatic alphabetical sorting by last name

  *  Locate  names simply by  pressing the key corresponding
     the first letter of the desired surname

  *  Automatically  dial numbers using a Hayes(R)-compatible
     autodial modem

  *  Supports  Microsoft(R) Mouse and  Logitech(R) Mouse for
     facile access to features

  *  Screen-saving feature blanks screen and displays moving
     clock  after a period of inactivity - restore screen by
     pressing any key

  *  Find  names, addresses, and phone  numbers from the DOS
     command prompt with the supplied WHOIS program

  *  With  the appropriate license  from TASCS, PHONEMAN can
     be  used on a local area network - maintain one copy of
     each data file that every user can search




          System Requirements and Supported Peripherals

     -  IBM  PC-compatible  or PS/2  personal  computer with
        256K  memory, DOS ver.  2.1 or later.   A hard disk,
        larger memory are recommended.

     -  Any   text  printer  for   address  and  phone  book
        printing.  Special support for  HP Laser Jet family,
        Desk  Jet,  Paint  Jet,  and  Epson  LQ  dot  matrix
        printers. (optional)

     -  Microsoft,  Logitech, or compatible mouse (optional)
        using the Microsoft-compatible mouse driver.

     -  Hayes-compatible   autodial  modem   (optional)  for
        automatically dialing phone numbers.


                 PHONEMAN (tm) License Agreement

       PHONEMAN  (tm), PSETUP, and WHOIS programs are the exclusive
  property of Thomas A. Spiglanin and TASCS Company  (TASCS).   You
  may  use  this program for a period of  25 days  to determine its
  suitability to  meet your needs.   If you elect to continue using
  these programs  you must purchase a registration  from TASCS.  If
  you do not  agree to  the terms specified,  you  must destroy all
  copies of the software in your possession.

       PHONEMAN (tm) may be distributed as SHAREWARE  provided that
  the entire package as received remains intact.   The file READ.ME
  lists the  files  that was included  in  this distribution.   All
  included  software  is  Copyrighted  and  may  be  used  only  as
  specified in this agreement.   You  may not modify these programs
  in any way.  The software may not be used on any computer network
  without the written consent of TASCS and not without registration.

       TASCS  hereby  disclaims  all  warranties  relating  to this
  software,   whether   express  or   implied,   including  without
  limitation  any implied warranties  of merchantability or fitness
  for  a  particular purpose.   TASCS  will not  be liable  for any
  special,  consequential, indirect, or similar damages due to loss
  of  data or any other  reason, even if TASCS  has been advised of
  the  possibility  of such  damages.   In  no event  shall TASCS's
  liability  for any  damages ever  exceed the  price paid  for the
  license to use the software, regardless of the form of the claim.
  The  person using the  software bears all risk  as to the quality
  and performance of the software.

                             * * * * *

                        Thomas A. Spiglanin
                           TASCS Company
                           P.O. Box 2326
                  Redondo Beach, California 90278

                             * * * * *

     Please note Shareware is NOT FREEware!   While we authors of
  Shareware  programs  cannot  control your  actions or account for
  travels of  our software,  we rely on your support for the system
  to work.  This PHONEMAN program is no exception.  If you like and
  use PHONEMAN, PLEASE license the software.   This low-cost action
  provides  you  with lifetime  registration  and guarantees you of
  notification  when upgrades  become available.   Understand  that
  Shareware authors  have no incentive to continue to enhance or to
  create new programs without the support of you and your friends.


PHONEMAN INDEX


  1. INTRODUCTION                                    1
     A.  Overview of PHONEMAN                        1
     B.  Using a mouse with PHONEMAN                 5
     C.  WHOIS (DOS command line search utility)     5
     D.  Program limits and memory use               6

  2. INSTALLATION                                    6
     A.  Hard disk installation                      6
     B.  DOS Path considerations                     7
     C.  Floppy diskette installation                7
     D.  Mouse driver                                8
     E.  Running PSETUP to specify environment       8
         (colors, clock, screen saver, printer
         and modem ports)

  3. USING PHONEMAN                                 11
     A.  Starting PHONEMAN                          11
     B.  On-line help                               11
     C.  Using DISPLAY mode                         12
     D.  DISPLAY mode options (View, Add,           13
         Delete, Print, Edit, Dial, Done)
     E.  Using Add to Add a New Record              14
     F.  Using Menus                                15
     G.  Main Menu Options  (DISPLAY, CREATE,       15
         FILE Utilities, Print, Quit)
     H.  File Utility Menu Options  (SAVE,          16
         LOAD, RELOAD, COMBINE, DELETE,
         RENAME, COPY)
     I.  The Print Utility                          17
     J.  The Dialer Utility                         18
     K.  The File selector                          19

  4. WHOIS SEARCH PROGRAM                           20

  5. Appendices                                     21
     A.  Print format options                       21
     B.  Suggested Print Parameters                 22
     C.  Format of PHONEMAN records                 23
     D.  Files used by PHONEMAN                     23
     E.  Results of INSTALL                         24
     F.  Trademark Acknowledgments                  24


1. INTRODUCTION.

     PHONEMAN  is a phone and address book manager that helps you
maintain  address and  phone number information  on your personal
computer.   To facilitate access  to these records, PHONEMAN uses
menus  to guide you to its  many features to add new information,
delete  records  no longer  needed,  modify existing  data, print
phone  lists and address labels, and dial the phone.  When adding
or  modifying data,  PHONEMAN uses  templates that  make entering
information  consistent  and  easy.   This  consistency  makes it
possible  to create phone lists and  address labels from the same
data using any of several predefined formats.

     You  can maintain more than one  phone book on your computer
system  using PHONEMAN.  A default phone book, named ADDRESS.PBK,
is  loaded automatically every time  PHONEMAN is initiated.  This
default  book is intended to contain the information you use most
often.   File utilities  then allow you  to load a  new book from
disk  or to create,  then save a  new book.   Other books you may
want  to maintain separate from  the default book include special
lists such as a holiday mailing list or a club membership roster.
PHONEMAN  can assemble collections of several other books through
the COMBINE and COPY features of file utilities.


A. OVERVIEW

     PHONEMAN  consists of a series of menus that lead the way to
various  features.  The parent of  all activity is the Main Menu.
This  menu provides direct access to  the phone book currently in
the  computer's memory, as well as to the File Utilities Menu and
print  functions.  It is also the  point from which you must exit
PHONEMAN.


                   Structure of the Main Menu

   Main Menu____
                |__ HELP
                |
                |__ DISPLAY Current Book _______ DISPLAY Mode
                |
                |__ CREATE New Book ____________ DISPLAY Mode
                |
                |__ FILE Utilities _____________ File Utilities
                |
                |__ PRINT Current Book _________ Print Options
                |
                |__ QUIT PHONEMAN




                             - 1 -


 DISPLAY MODE OVERVIEW

     The  DISPLAY mode of  PHONEMAN provides the  first look into
the  current phone book.  This mode displays names of the current
book and lists the features that can be reached from DISPLAY.  Up
to  twenty names  will fit  on a single  screen at  any one time.
Remaining  names can be  located by using PgUp  and PgDn keys, by
using the arrow keys, or by pressing the key corresponding to the
first  letter of the desired surname.  If using a mouse, move the
mouse  cursor to the PgUp, PgDn, or arrow "buttons" on the screen
and  press  the  left mouse  button.    See 'Using  a  Mouse with
PHONEMAN' for more details.

     DISPLAY  mode uses a "highlight bar" to identify an entry in
the current book (its background color is distinct from the other
entries).     The  features  available   from  DISPLAY  mode  act
exclusively on the currently highlighted entry with the exception
of  Add.   The Add feature  queries for  required information and
inserts the newly created record into the appropriate location in
alphabetical order.

     View  is  a display  mode that  shows the  complete PHONEMAN
record  for  the  entry that  was  highlighted in  DISPLAY.   All
features  available from DISPLAY remain  available to View except
for Add and View itself.

     Other  features  available  from  DISPLAY  and  View include
Delete,  Print,  and  Edit  the selected  entry,  and  Dial phone
numbers within the selected entry.


                  Structure of DISPLAY and View


  Main Menu____
               |__ HELP
               |
               |_____________ View _____ HELP
               |               |
               |__ Delete      |__ Delete
               |               |
               |__ Print (ALL) |__ Print (ONE)
               |               |
               |__ Edit        |__ Edit
               |               |
               |__ Dial        |__ Dial
               |               |
               |__ Done/Return |__ Done/Return
                   to Main Menu    to DISPLAY




                             - 2 -


OVERVIEW OF FILE UTILITIES MENU

     The file utilities allow PHONEMAN to interact with your disk
system  to read (load),  delete, save, rename,  and copy PHONEMAN
files.    Using  the  utility you  can  also  combine  any stored
PHONEMAN  file  with the  one currently  in  memory to  produce a
single, larger file.


                Elements of the File Utility Menu


     Main Menu ____ File Utilities
                           |
                           |__ Save Current File
                           |
                           |__ LOAD a new book
                           |
                           |__ RELOAD the default book
                           |
                           |__ COMBINE Existing book
                           |           with another
                           |
                           |__ DELETE
                           |
                           |__ Done/Return to Main Menu



OVERVIEW OF THE PRINT UTILITY

     The  Print utility can be activated  from both the Main Menu
and  from  DISPLAY.   It  can  print  using one  of  two formats,
"Record"  or "Label".  Record format  prints using one of several
pre-defined  styles (12 at  this date) that  list the contents of
the  current address/phone book.   This format  is used to create
membership  rosters,  mailing  lists, or  similar  lists.   Label
format   prints  only   the  address   portion  of   the  current
address/phone  book  using one  of  three styles,  formatting the
output for your particular label printer.

     The  Print Utility can be used either to print only a single
record or label or to print the entire current book.

 _______________________________________________________________
|                                                               |
|  TO PRINT A SINGLE ENTRY, select the entry in DISPLAY mode and|
|             press the key corresponding to Print              |
|   TO PRINT A COMPLETE SET of labels or records, move to the   |
|                 Main Menu, then select Print                  |
|_______________________________________________________________|


                             - 3 -


     When  activated, the  print utility shows  the current print
options,  including  the format  (Record  or Label),  the printer
type,  the port where  the printer is  connected, and the current
output  parameters (indents and spacings).  Each of these options
can  be  changed  from  this utility  and  saved  as  desired (by
pressing  F7) with record parameters  saved separately from label
parameters to allow for two printers if desired.

     The current print style can be viewed and changed as desired
by  pressing  F8.   The  choices  for style  are  essentially the
options:

     First Name Last Name
     Last Name, First Name
     LAST NAME, First Name

     The  styles selected  for labels  and for  records are saved
along  with the  print parameters by  pressing F7  from the Print
Utility.   This makes  these preferences available  the next time
you run PHONEMAN.

     After   verifying  the  parameters,  printing  commences  by
pressing  Enter.  Appendix A lists  the available styles for both
Label  and Record formats.   Appendix B  lists suggested settings
for several printing situations.

     The  print utility  also contains a  Printer Control feature
(F5)  that can be invoked to reset  the printer or to advance the
printer one line or one page.

* Note:   The setup utility included with PHONEMAN specifies most
          of  the  important options  for  each of  the printers.
          This  utility  should be  used  to specify  the correct
          setup  for the print utility.   Refer to "Installation,
          Running PSETUP".


















                             - 4 -



B. USING THE MOUSE

     PHONEMAN  can  automatically  detect  the  presence  of  the
Microsoft-compatible  mouse driver.   If found,  the mouse cursor
position defaults to the upper left corner of the screen.

     To select a PHONEMAN feature using the mouse, roll the mouse
until  the mouse cursor on the screen overlaps the description of
the  action you want to take,  then press and release (click) the
left  mouse button.   When selecting menu  items, the first click
will move the highlight bar from its initial position to the item
you   want  to  select.    Repeating  the  action  on  the  newly
highlighted item will then execute it.

     The  Esc  (escape)  key often  aborts  PHONEMAN  actions and
frequently  mimics the F10 key.  You can use the mouse to emulate
pressing  the Esc key by pressing  both mouse buttons at the same
time.




C. WHOIS, THE DOS COMMAND LINE SEARCH UTILITY

     WHOIS  is a small program that  you can execute from the DOS
prompt.   Because  many programs  can execute  DOS commands  in a
shell,  the information stored in phone books managed by PHONEMAN
is  readily accessible.   WHOIS is primarily  a hard disk utility
but  can  also be  used on  floppy-only  systems.   When properly
installed,  WHOIS  is  simple to  execute.   At  the  DOS command
prompt,  simply type  ' WHOIS '   followed by a piece of the name
you want to search for.  For example,

          C:> whois smit
               /       \
          (Prompt) (Your input, followed by Enter)

will  find  all names  in your  default  phone book  that contain
"smit".

     Information   on  installing  WHOIS  can  be  found  in  the
Installation section of this manual.

     More  detailed information on using  WHOIS, how to correctly
configure  the WHOIS  batch file, and  how to  search phone books
other  than the default can be found in the WHOIS section of this
manual.





                             - 5 -


D. PROGRAM LIMITS AND MEMORY USE

PHONEMAN  requires a minimum of 256 kBytes of total system memory
and  approximately 200  kBytes of memory  available after loading
DOS.   With the minimum  configuration, the on-line help facility
is  disabled  to  maximize  the  memory  available  for  PHONEMAN
records.    The  number  of  records  available  to  PHONEMAN  is
determined  by PHONEMAN during start-up  and reported on its Main
Menu screen.

         Estimated Maximum Number of Records by total
            memory size (assumes 80K DOS overhead)
      ___________________________________________________
     |                                                   |
     |  System Memory          256    385    512    640  |
     |  Available Memory       176    304    432    580  |
     |  PHONEMAN Records        90    447    918   1000  |
     |  On-line Help?           no    yes    yes    yes  |
     |___________________________________________________|

      TASCS recommends more than the 256K memory minimum.



2.  INSTALLATION

     To  install PHONEMAN, follow the  instructions in sections A
and  B if you  have a hard disk  and C if  you have a floppy-only
system.   Then follow the advice in  sections D and E to complete
your installation.


A. HARD DISK INSTALLATION

     To  install PHONEMAN on  your hard disk,  place the phoneman
diskette  in a floppy diskette drive, make that drive the default
for DOS, and type INSTALL drive followed by Enter.  Replace drive
with the letter designation of your hard disk.

     Example:  To  install from drive A:  to hard disk drive
               C:,  place  the PHONEMAN  diskette in  A: and
               type:

                    C:> A:

               followed  by  Enter  to make  A:  the default
               drive.  Then type:

                    A:> INSTALL C:

               Note the A:> and C:> are the DOS prompts.


                             - 6 -


     INSTALL will ask you to verify the destination path.  TASCS
recommends you install PHONEMAN in a subdirectory.  INSTALL uses
\tascs as its default and will create it if it does not exist.
You may change this when prompted by using the Backspace key to
delete the subdirectory, then type your own, if you wish.  To
accept the default or after making changes, press Enter to
continue installation.

     After selecting the destination path, the PHONEMAN files are
copied  to  the  destination  directory.    When  this  phase  is
complete,  you will be asked to verify the subdirectory where you
want   the   startup  files   located.     These   "batch"  files
(PHONEMAN.BAT and WHOIS.BAT) automatically define the directories
and  disk  for PHONEMAN  and  WHOIS, then  start  the appropriate
application.  INSTALL will ask you to verify the destination.  To
accept,  press the Enter  key.  To override  the default, use the
Backspace  key  to  delete  the  characters,  then  type  the new
directory name.

     When  INSTALL completes this step,  the setup program PSETUP
will start.  This program modifies a file maintained on your hard
disk  that tells TASCS  programs about your  environment (type of
monitor,  modem, printer).  Refer to  section E below for details
on how to use PSETUP.  When finished with PSETUP, installation is
complete and you are ready to begin using PHONEMAN.


B. DOS PATH CONSIDERATIONS

     To  start PHONEMAN from any directory or disk you must first
define  a PATH  that includes  the phoneman.bat  file.   For most
installations,  the INSTALL program  should do this automatically
for  you.   If your  computer boots  from drive  C:, you  have an
autoexec.bat file, and you accept INSTALL's initial selection for
destination,  the  startup  files are  installed  in  a directory
accessible  to DOS via your PATH.  If an autoexec.bat file is not
located  on drive  C: or if  you changed the  destination for the
startup  files to a directory that is not in your PATH statement,
you  will want  to add the  installation directory  to your PATH.
Use  an ASCII editor to modify  your autoexec.bat file to include
the disk and directory that the batch file was installed in.



C. INSTALLATION ON FLOPPY DISKETTES

     If  your system has  two floppy drives,  insert the PHONEMAN
diskette into drive a: and a blank, formatted diskette into drive
b:.  Copy the program files onto drive b: using the command:

               copy a:*.* b:


                             - 7 -


     If  your system has  only one floppy  diskette drive, insert
your DOS diskette into the drive and enter the command:

               diskcopy a: a:

     Follow   the  instructions  for  inserting  the  source  and
destination  diskettes as required to  complete the diskette copy
using  the PHONEMAN original as the SOURCE and the blank diskette
as  the  TARGET.    When asked  "Copy  another  diskette (Y/N)?",
respond by pressing the N key.


D.  MOUSE DRIVER

     PHONEMAN  supports Microsoft and Logitech  mice that use the
Microsoft-compatible  driver.   To use your  mouse with PHONEMAN,
simply be sure this driver is active before starting the program.

     There   are  typically  two  drivers  to  choose  between  -
MOUSE.SYS  and MOUSE.COM.   To use the  MOUSE.SYS driver, load it
when  you  start  your  computer as  instructed  in  your mouse's
manual.  The MOUSE.COM driver can be loaded and unloaded from the
DOS  command  line or  loaded automatically  when you  start your
computer.   While it is most convenient to install MOUSE.COM when
you  start your computer, you can  add commands to load MOUSE.COM
immediately before running PHONEMAN in PHONEMAN.BAT and unload it
after.    Refer  to your  mouse  manual for  more  information on
installing mouse drivers.


E.  RUNNING PSETUP

     PHONEMAN  uses a setup file located in the default directory
to  specify parameters it needs to  operate.  This file specifies
screen  colors,  whether a  clock will  be displayed,  should the
screen  blank after remaining idle for more than 5 minutes, where
is the printer (or is there one), and modem setup parameters.  If
you  use a mouse  and the driver was  correctly loaded, the mouse
cursor can be set from PSETUP as well.  The mouse also works with
PSETUP and helps modify the setup file.

     To  run PSETUP, change the DOS default disk and/or directory
to where PHONEMAN files were installed:

          cd \tascs           for hard disks

          a:                  for floppy in a:






                             - 8 -

     Type psetup and press Enter to start the setup utility.  The
initial screen menu looks like:

                 Color:  disabled    F2 toggles

                 Clock:   enabled    F3 toggles

                 Screen Saver:  ON   F4 toggles

             Record Printer: NONE - F5 changes setup

             Label Printer: NONE - F6 changes setup

              Phone Dialer: NONE -F7 changes setup

                       Press F10 when done




     Color     Pressing   F2  (or   point-and-shoot  with  mouse)
               toggles   between   the   choices   available  for
               PHONEMAN.

     Clock     Pressing  F3 toggles between enabled and disabled.
               When  enabled, the date appears  in the upper left
               corner  of the  screen and  the time  in the upper
               right corner of the screen.

     Screen    Pressing F4 toggles between ON and
     Saver     OFF.   ON  activates a  screen-saving feature that
               blanks  the screen after  5 minutes of inactivity,
               displaying  a digital clock  that moves every five
               seconds to avoid damaging the screen.

     Record/   F5 and F6 activate second menus.  These
     Label     select between printer types for Record
     Printer   and  Label print  formats, their  ports, and their
               settings  for indents and  spacings.  When indents
               and  spacings is  selected, a list  of the current
               values  appears.  Edit  these one-by-one, pressing
               Enter  after  each  one  until  all  settings  are
               correct.

     Phone     F7 activates a second menu.  This menu
     Dialer    specifies ON/OFF for an autodial modem and selects
               its   port.    Also   included  are  communication
               parameters  (baud  rate,  parity,  etc.)  or Auto.
               Auto  requests automatic  detection of  the Hayes-
               type  modem.  Many Hayes- compatible modems aren't
               100%  compatible.    If  you  have  one  of these,
               specifying  each of  the communications parameters
               may help to avoid problems.

                             - 9 -



     If  you are using a mouse, a small box appears at the bottom
of  the screen that  reads "Set MOUSE! Cursor".   Point and click
the  mouse on this box to activate a cursor selector panel.  From
this  panel almost  any character  can be  mapped into  the mouse
cursor.   Several cursor options appear on the screen.  To select
one  of  these,  position  the mouse  cursor  over  the character
desired  and press  the left  mouse button.   In  addition to the
choices  shown, any key  sequence that can  be represented on the
screen as a character can be the cursor.

     Press the F10 key to exit PSETUP.







































                            - 10 -


3.  USING PHONEMAN

A.  STARTING

     To  start PHONEMAN,  set the  default disk  and directory to
that containing the setup and phone book files and type:

          PHONEMAN

at  the DOS prompt  and press Enter.   On hard  disk systems, the
batch  file  created  during  INSTALL  can  be  started  from any
directory  and should  automatically change the  default disk and
directories and start PHONEMAN for you.

     As  PHONEMAN starts,  it reads  the setup  file to correctly
configure the operating environment.  This file is modified using
the  PSETUP  program  to  specify  screen  colors,  configure the
printer,  set the  modem type  and communication  parameters, and
specify  other  PHONEMAN features.   PSETUP  is described  in the
installation  chapter  of  this manual.    After  configuring the
operating  environment, PHONEMAN next  displays a welcome message
and   attempts   to   locate  the   default   phone/address  book
(ADDRESS.PBK).  If this book cannot be found, PHONEMAN reports an
error  message.  This  message may be cleared  from the screen by
pressing  any key and  PHONEMAN drops to  its main menu.   If the
default  book is found, PHONEMAN begins reading its contents into
memory  and  presents  the  contents of  the  default  book using
DISPLAY mode.

     This  section of  the manual describes  PHONEMAN's menus and
DISPLAY  mode  as  well  as how  to  navigate  through PHONEMAN's
features.   Overviews of each of  these sections were provided in
Chapter 1.

Special Note for mouse users
     PHONEMAN identifies the presence of a mouse driver installed
     in your computer system and automatically enables it for use
     with  PHONEMAN.  The  initial cursor position  is set to the
     extreme  top left of the PC screen.  If you elect to not use
     the mouse if installed, it is conveniently out of the way.



B.  ON-LINE HELP

     Help  is available from each  of PHONEMAN's menus.  Pressing
F1  to activate the  HELP, the appropriate  page of the condensed
manual  appears.   From here, you  can move  forward or backwards
through  the manual  using PgUp or  PgDn.  Pressing  the Home key
selects the index that prompts you for a page number, and the Esc
key  returns you to the PHONEMAN where  you left off.  As always,
you can point-and-click with the mouse in lieu of keystrokes.

                            - 11 -


C.  USING DISPLAY MODE

     DISPLAY  mode is  the basic entry  point into  the phone and
address book that currently resides in memory (the current book).
The  basic display shows a  list of the names  in the phone book,
sorted alphabetically by last name with one name highlighted.  If
the  current  book contains  more than  twenty entries,  only the
first  twenty appear on the screen.   The twenty-entry window can
be  positioned at any point within  the book to view all entries.
The highlight bar can likewise be positioned over any name within
the  window.  If PHONEMAN found  a mouse driver installed in your
computer, an additional feature appears on the DISPLAY screen - a
"mouse  panel"  that contains  all letters  of the  alphabet plus
PgUp,  PgDn,  and arrow  buttons  exclusively for  use  with your
mouse.

             Positioning the window in DISPLAY Mode
  Key          Action
  Any letter   Highlight   the  next  entry   with  a  last  name
               beginning  with  the letter  pressed.   The window
               will reposition if required.
  arrow keys   Move  highlight bar one entry.  Left and up arrows
               move  highlight bar up; Right and down arrows move
               bar down.
  PgUp         Move window up one page (20 entries).
  PgDn         Move window down one page.
  Home         Move window to display the first twenty entries.
  End          Move window to display the last twenty entries.


     The  mouse can replicate these  keystrokes using the special
mouse  panel.  Point  the mouse cursor  at any of  the letters in
this  panel or at any button (UP,  DN, arrows) and press the left
mouse button.

     At  the right side of the screen  is a list of features that
can  be accessed  from DISPLAY.   To  use any  of these features,
press  the function key that corresponds to the desired action or
point  and click  with the  mouse.   The features  of DISPLAY are
described later in this chapter.  Add, used to add data for a new
record, is described in a following section.












                            - 12 -


D.  DISPLAY MODE OPTIONS

     DISPLAY mode is your interface to some of the most important
functions  of PHONEMAN.  With the exception of Add (and Done) the
options  available from DISPLAY act on the entry in the name list
that is highlighted.  These options are described here.

  Help    Start  the  help  function,  displaying  a  summary  of
          DISPLAY options.

  View    Show  the complete contents  of the highlighted record.
          The   other  options   available  for   DISPLAY  remain
          available with the exception of Add.  Return to DISPLAY
          from View by pressing F10 (done) or Esc.

  Add     Add  a new name to your phone book.  This option brings
          up  a template that you fill out to add a record.  Type
          the  information asked  for, pressing  Enter each time.
          Continue  entering information (or  leave fields blank)
          until  the record is  complete.  Note  that the surname
          entry may not be blank.  More information on Add may be
          found in the next section of this chapter.

  Delete  Use  Delete to  erase the  highlighted record  from the
          current  book.  Before deleting, PHONEMAN will ask that
          you  verify the  delete operation.   PHONEMAN  will not
          actually delete the information from memory but instead
          marks  it "deleted". These entries  can be recovered by
          editing  the "deleted"  records.   Unless edited, these
          entries  will not be saved  with the other entries when
          you finish using the phone book.

  Print   Select  Print from DISPLAY mode to output ONE record or
          address label on the printer.  This activates the Print
          Utility discussed in a later section of this chapter.

  Edit    Change  the information stored  in the complete record.
          This  edit  proceeds  through  a  template  showing the
          existing  data  with one  item  highlighted.   Move the
          highlight  bar to the item you want to change using the
          arrow  keys, then press Enter to  edit this data.  When
          finished with Edit, press F10.

  Dial    Dial the phone using an autodial modem.  Selecting this
          option  starts the Dialer  Utility, described in detail
          later in this chapter.

  Done    Select this option to terminate DISPLAY mode and return
          to the Main Menu.




                            - 13 -

E.  USING ADD TO ADD A NEW ENTRY

     To  add a record to the  phone/address book, select Add from
DISPLAY.   Two boxes  will appear on the  screen, one showing the
current  contents of  the new record,  the other  prompting for a
last  name.  Type the  last name and press  Enter.  The last name
you typed into the prompt box now appears in the displayed record
and  a new  box appears  prompting for a  first name.   Enter the
first  name and  press Enter.   Again, this entry  appears in the
displayed  record and another box prompts  you to enter the first
line  of the address.  Repeat the  data entry as requested by the
prompts until all information is entered.  When complete, the Add
function will report having completed successfully and prompt you
to  press any key to  return to DISPLAY where  you will find this
new entry in correct alphabetical order.

                     Tips for Adding Entries

  1.   Note  the length limits for the various entries, listed in
       Appendix C.

  2.   Capitalize  all  proper names  as you  would in  a written
       document.   The Print  Utility will print  these names and
       addresses as you type them by default.

  3.   Enter  first name(s) with title, if desired, or simply use
       title.   For example,  if you address  someone as Ms. Jane
       Doe,  enter Doe  when prompted for  the last  name and Ms.
       Jane  for the first name.   For Dr. Simmons, enter Simmons
       as the last name and Dr. when prompted for the first name.

  4.   Enter  only street address information  in the two address
       lines,  leaving the second blank if necessary.  The second
       line  will  not print  unless  data exist  in  that field.
       PHONEMAN  uses separate  entries for city,  state, and zip
       code.  This feature will be important for the planned zip-
       sort   utility   (not  yet   implemented).     Information
       appropriate  for  the  address  lines  include  street and
       number, PO boxes, mail stops, company names, c/o, etc.

  5.   Enter city, state, and zip code in their separate entries.
       These  may be abbreviated to  fit the available space, but
       be consistent.

  6.   Phone  number  entries  may contain  area  codes  and long
       distance  access codes as required.   Parentheses [()] and
       hyphens  [-] are ignored  by the modem and  may be used as
       desired for clarity in printed lists.

  7.   Use  a comma  [,] in the  phone number  record to separate
       Dialer  action.  For  example, 9,555-1212 will  dial the 9
       first, pause for a moment, then dial the remaining digits.


                            - 14 -


F.  USING MENUS

     PHONEMAN  uses menus to  access its features.   We will look
quickly at using the menus here.  Details on the individual menus
and their options will then follow.  As an example, the main menu
may display the following options:



               Personal Phone Book Manager Options
     HELP   .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  F1
     CREATE a new book  .  .  .  .  .  .  .  .  .  .  .  F4
     FILE Utilities  .  .  .  .  .  .  .  .  .  .  .  .  F5
     QUIT   .  .  .  .  .  .  .  .  .  .  .  .  .  .  . F10
            There are  60 records in the current book
                      940 records available


and the option "CREATE ..." may be highlighted (the background is
a  different color from the other entries).  There are three ways
of selecting an action from this menu:

  1.   Using  the arrow keys on your keyboard, move the highlight
       bar to the desired action, then press Enter.

  2.   Press the function key corresponding to the action desired
       to move the highlight bar.  Once highlighted, either press
       Enter  or press  the same  function key  a second  time to
       execute the action.

  3.   Using  the  mouse,  move  the  mouse  cursor  to  the line
       containing  the desired  action and  press the  left mouse
       button.  This moves the highlight bar to this entry.  Once
       highlighted,  keep the  cursor on  the desired  action and
       press the left mouse button a second time to execute.


G.  MAIN MENU OPTIONS

     PHONEMAN's main menu has several options that provide access
to most of the features you need to use.

  HELP    Start On-Line Help.

  DISPLAY Enter DISPLAY mode to see contents of the current book.
          DISPLAY  mode was described in  detail in the preceding
          chapter.

  CREATE  Clear  memory of the current  book and enter DISPLAY to
          start a new book.



                            - 15 -

  FILE    Gateway  to File Utility  menu.  Select  this for file-
          related activities: Save current book, Load a new book,
          Reload  the default  book, Combine the  contents of two
          books, Rename a book, and Delete a book from disk.  The
          File  Utilities are  described in  the next  section of
          this manual.

  PRINT   Selects the PRINT utility.  This option provides output
          of  labels or phone/address lists  from the entire book
          currently in memory to your printer.

  QUIT    Terminates  PHONEMAN.  You will be reminded to save any
          changes (if any) in the current book before you exit.


H.  THE FILE UTILITIES MENU

The  File  Utilities  menu  is  your  interface  to  disk-related
activities  such  as  loading,  saving,  deleting,  renaming,  or
combining files.

  HELP    Start On-Line Help.

  SAVE    Save the current book to disk.  This option will not be
          available  unless a change in the current book has been
          noted.

  LOAD    Load  a  new book  from disk  using the  file selector.
          This selector is described later in this chapter.

  RELOAD  Load the default phone/address book automatically.  The
          original  disk  and  directory  were  determined during
          PHONEMAN initialization.

  COMBINE Available  only when there is  a book loaded in memory,
          COMBINE uses the file selector to identify another file
          to  append  to the  current  book.   PHONEMAN  does not
          delete  duplicate entries  following COMBINE.   It does
          not  alphabetize the  resulting list until  the book is
          saved.

  DELETE  Identify a file to be deleted using the file selector.

  RENAME  Give   an  existing  phone/address  book  a  new  name.
          Identify  the file  to rename using  the file selector,
          then enter a new name when prompted, followed by Enter.

  COPY    Copy  a file on disk.   Use the file selector to select
          the   book,  then  enter   the  duplicate's  name  when
          prompted, followed by Enter.

  Return  Finish file utilities and return to the Main Menu.


                            - 16 -

I.  PRINTING: THE PRINT UTILITY

     You  may select the print utility  from either the Main Menu
or  from  DISPLAY,  depending on  the  type of  printed  list you
require.   PHONEMAN  offers two  basic print  formats: labels and
records.   Label format refers to  narrow text output of only the
address  portion of  a record  and can  print up  to three labels
across  a page.  Record  format prints on a  wider page, up to 80
characters with output of names with phone numbers, addresses, or
both.    The  comment line  provided  for each  record  entry can
optionally  be printed  with the  other information  in a record.
Record  format is suited for phone  or address lists for clubs or
other organizations as well as for your own information.

     To  print one or a few selected records to construct a phone
list,  identify the  individual entries  from DISPLAY  and select
Print.

     To  print  all  entries in  the  current  phone/address book
select Print from the Main Menu.

     Options available from the Print Utility include:

  F2   Select between Label and Record print formats

  F3   Select between available printer types

  F4   Select  the printer port and communications parameters (if
       COM1-COM4)

  F5   Activate the printer control panel (reset, form feed, line
       feed)

  F6   Change the parameters (indents and spacing) for printing

  F7   Save the current settings in the setup file

  F8   Preview the print style and select between those available

  F9   Add  a title for address lists (available only when RECORD
       printing is selected)

  Esc  Cancel print


Note:     When  printing  single  entries  from  an address/phone
          book,   PHONEMAN   does  not   reset  the   printer  or
          automatically issue a form feed at the end of printing.
          This  allows  you to  select  individual entries  of an
          address  book from DISPLAY mode  and print them one-by-
          one  to  create a  customized  list.   Use  the Printer
          Control  function to reset  the printer or  to feed the
          paper from the printer when finished.

                            - 17 -

J.  THE DIALER UTILITY

     If  your computer is fitted with an auto-dial modem, you can
use  PHONEMAN to  automatically dial the  phone for you.   To use
this  feature,  you must  first  configure the  setup  file using
PSETUP  as described  in the  Installation instructions.   Select
Dialer  from the PSETUP menu  and specify the communications port
that  your modem uses, COM1 or COM2.     You may also specify the 
baud  rate and  the number of  data bits,  stop bits,  and parity
during  the  PSETUP session.   As  a  convenience you  may select
"Auto" in lieu of a baud rate.  PHONEMAN will attempt to identify
your  modem  and issue  the appropriate  commands.   Because many
modems  claimed  to  be  100% compatible  with  the  Hayes modems
aren't,  you should specify  communication parameters if possible
to avoid difficulties.

     Dialer is accessed from DISPLAY mode.  Highlight the name of
the  person you'd  like to  call and  select Dial.   Alternately,
press Enter to View the contents of the record, then select Dial.
If  the modem  had not  been used  previously during  the current
PHONEMAN  session, Dialer  will attempt to  communicate with your
modem  and initialize  it.   If this  operation fails,  check the
dialer settings using PSETUP and verify the modem power is ON.

     After  the modem is initialized, the Dialer Utility displays
the primary phone number and shows a list of options at the right
side  of the screen.  To dial  this number, simply press Enter or
select Enter with the mouse.  You can edit the phone number using
one  of the Dialer options, but changes in the number will not be
saved  to  the current  phone book.   If  Dialer reports  that an
alternate  number is available in  the record, pressing the arrow
keys will toggle between the primary and alternate numbers.

     To accommodate sites with internal telephone systems, Dialer
allows  you to enter  a prefix and/or  a suffix.   When you press
Enter,  Dialer first dials the prefix if there is one, pauses for
a  moment, then  dials the number.   The suffix  is primarily for
special  access codes as may be required for long distance calls.
If  you specify  a suffix, Dialer  will dial it  after the number
following  a brief pause.  You can monitor the progress of a call
using  your modem's speaker.  For  many modems the volume must be
set  manually using the  volume control knob.   Once the call has
been  placed, pick up the handset  of the telephone and press any
key  or mouse  button to cause  the modem to  disconnect from the
line.   If  your phone connects  to the phone  system through the
modem's phone jack, this phone may be inactive while the modem is
using  the line to  dial.  Pressing any  key after dialing causes
the  modem to disconnect from the  phone line and reestablish the
link between the telephone and the phone system.

     The  Reset  option  will  attempt  to  reset  the  modem and
initialize  it with PHONEMAN's  defaults.  You  will not normally
need this feature.

                            - 18 -


K.  THE FILE SELECTOR

     The  file selector  is used to  locate files on  disk and to
identify  them  for various  PHONEMAN  features.   It  is invoked
automatically  whenever  a  file  name is  required  such  as for
RENAME,  LOAD,  or  COMBINE.   Here  is a  typical  File Selector
Screen:


   _ Directory: C:\TASCS\*.PBK ____________________________
   |                                                       |
   | > UP DIR <  \     SUBDIR1\    SUBDIR2\    ADDRESS.PBK |
   |     OTHER.PBK   SECOND.PBK                            |
   |                                                       |
   |                                                       |
   |                                                       |
   |_______________________________________________________|


     Note  the current DOS  directory, disk, and  the file search
specification  appear at  the top  left of  this screen  (in this
example  C:\TASCS\*.PBK).  The  entry "> UP DIR  <  \" represents
the  next  higher  level  of  the  subdirectory  map.    For this
directory, C:\TASCS, the next higher level is the root directory,
C:\.   The entry  "SUBDIR1\" represents a  subdirectory below the
current directory.  All subdirectories appear with the "\" at the
end  to distinguish them from files and they always appear in the
file selector before the file names.

     To  identify a file using  this selector, move the highlight
bar  (using the arrow keys) to  the name desired and press Enter.
Alternately,  point and click on the  desired name twice with the
mouse.   To maneuver  through the disk,  select the >  UP DIR < \
entry  to move up one subdirectory  level.  Select a subdirectory
ending with the "\" to move down into that subdirectory.

     If  the  file  you  need  to select  is  located  on  a disk
different from the default drive, press F9.  When prompted, press
the letter on the keyboard corresponding to the drive you want to
access.   It is most convenient  to keep PHONEMAN's .PBK files in
the PHONEMAN directory.

     Press  Esc  to exit  the File  selector without  selecting a
file.

     Press  Enter with an appropriate  file highlighted to select
that file.






                            - 19 -



4. THE WHOIS SEARCH PROGRAM

     The  WHOIS  program  is  designed  to  easily  locate names,
addresses,  and phone  numbers from  phone books  you create with
PHONEMAN.  Because you execute WHOIS from the DOS command prompt,
the information stored in your PHONEMAN files is only one command
away.

     The  WHOIS program consists of two  parts:  a DOS batch file
WHOIS.BAT  and the program file FINDNAME.EXE.   The batch file is
installed   in  a  directory  searched  by  your  PATH  (see  the
Installation  chapter for  information).   When started,  it runs
WHOIS.EXE  and passes it the parameters  required to execute.  To
search  the PHONEMAN default  book for a name,  at the DOS prompt
enter:

          WHOIS name

     WHOIS  will search  the default  address/phone book  for all
names  that contain  "name".  The  batch file can  be modified to
search  any  book that  you maintain.    By default,  it searches
ADDRESS.PBK located in directory \tascs on drive c:.

     You  can also specify  the address book  you want to search.
To search the book OTHER.PBK in the \tascs directory, enter

          WHOIS name c:\tascs\other.pbk

     Note:  You  may create  several batch  files that  each call
WHOIS.EXE to search different address books by default.

     When  WHOIS finishes  searching the records,  it will report
any matches with the search name on the computer screen.  If more
matches  are found than  fit on a singe  screen, WHOIS will allow
you to page through the entries found by pressing PgUp or PgDn.

     Limits  - WHOIS  can search  phone/address books  with up to
1000 entries and can report on up to 96 entries.  If more than 96
entries  are found that contain the search name, WHOIS will abort
and ask for a more restrictive search specification.












                            - 20 -

5.  APPENDICES

A.  PRINT FORMAT OPTIONS

                    Options for LABEL Format

               1.   First name Last name
                    Address Line 1
                    Address Line 2
                    City, State  Zip

               2.   LAST NAME, first name
                    Address Line 1
                    Address Line 2
                    City, State  Zip

               3.   Last name, first name
                    Address Line 1
                    Address Line 2
                    City, State  Zip


                    Options for REPORT Format

1.   First name Last name          Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip
     >> comments <<

2.   Last name, First name         Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip
     >> comments <<

3.   LAST NAME, First name         Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip
     >> comments <<

4.   First name Last name          Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip

5.   Last name, First name         Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip



                            - 21 -


6.   LAST NAME, First name         Primary Phone #
     Address Line 1                Alternate #
     Address Line 2
     City, State   Zip

7.   First name Last name          Primary Phone #

8.   Last name, First name         Primary Phone #

9.   LAST NAME, First name         Primary Phone #

10.  First name Last name          Alt #    Primary #

11.  Last name, First name         Alt #    Primary #

12.  LAST NAME, First name         Alt #    Primary #




B. SUGGESTED PRINT PARAMETERS

Label Printing

     For printing on continuous labels, always set the number of
labels per page to 0.  This suppresses form-feeds when the
logical end of the page is reached and avoids wasting labels.
Align the first row of label(s) in your printer as required and
set the top margin parameter to 0 lines.  The left margin setting
must be adjusted based on the configuration of your printer.
     Label heights are specified to PHONEMAN as a number of
lines.  Most address labels are nominally 1" apart on the page
and PHONEMAN normally prints at 6 lines per inch.  The height of
these labels is therefore 6 lines.  Width is specified in
characters across.  3-1/2" wide labels correspond to 42
characters wide at 12-pitch and 35 characters wide at 10-pitch.
2-5/8" wide labels are 32 characters wide at 12-pitch, 40
characters wide at 15-pitch, and 44 characters wide at 16.7-pitch
(HP Jet Printers).

Record Printing

     For record printing, set the left margin as needed based on
your choice for print pitch.  In all cases, set the appropriate
number of lines to print on each page based on 6 lines per inch.
57 lines per page is a reasonable starting point for 11" long
paper leaving a small margin at the bottom.  The PHONEMAN
defaults are a good set to begin with for most text printers.





                            - 22 -

C. FORMAT OF PHONEMAN RECORDS

   1.  Last name                (37 characters)

   2.  First name(s)            (22 characters)

   3.  Address Line 1           (37 characters)

   4.  Address Line 2           (37 characters)

   5.  City                     (18 characters)

   6.  State                    (14 characters)

   7.  Zip                      (10 characters)

   8.  Primary phone number     (20 characters)

   9.  Alternate phone number   (20 characters)

  10.  Comments                 (38 characters)

     The  total length of the last  and first name fields must be
less than 40 characters and is dynamically determined by PHONEMAN
during  Add or Edit.  Therefore, if the last name field is filled
to  its  limit of  37  characters, only  three  characters remain
available for the first name field.

     PHONEMAN  maintains first  and last  names separately rather
than  as a single entry.  This allows you to use the same book to
produce  phone or address  lists with one  format (eg. LAST NAME,
First  name) and labels with  different formats (eg. First Last).
The  maximum length for each entry in a PHONEMAN record is driven
by  the width of a typical address label (3-1/2").  Zip codes may
be up to 10 characters to accommodate ZIP+4 codes.  Phone numbers
can  be as long as 20 characters to allow business extensions and
the like with commas (that cause a 1-sec delay during dial).

D.  FILES USED BY PHONEMAN

     PHONEMAN.EXE   The PHONEMAN program
     PSETUP.EXE     The setup utility program
     PINFOSET.DAT   Data    file    containing    the   operating
                    environment specifications
     PHONEMAN.HLP   On-line Help file
     ADDRESS.PBK    Default address/phone book file
     PHONEMAN.BAT   PHONEMAN  batch file  to start  PHONEMAN from
                    any directory on hard disk
     READ.ME        Last-minute updates information file
     FINDNAME.EXE   DOS command line search utility
     WHOIS.BAT      Batch file to help start WHOIS
     RECORDS.DEF    Files that hold default information for the
     LABELS.DEF     available printer types

                            - 23 -

E.  RESULTS OF INSTALL

This  information is provided  in the event  something goes wrong
with the INSTALL utility.

1.   Creates  a subdirectory on  your hard disk  if that selected
     does  not exist, then  copies all program  files and initial
     data  files there.  It  will not copy a  new data file if an
     old  one exists.   If  updating from  a previous  version of
     PHONEMAN,  play it  safe and  back up  your old  files first
     (ADDRESS.PBK and PINFOSET.DAT are the two data files INSTALL
     wants to copy).

2.   Creates  two batch files, PHONEMAN.BAT and WHOIS.BAT, in the
     subdirectory  of your choosing.  This subdirectory should be
     included  in the  PATH statement in  your autoexec.bat file.
     If INSTALL

                Default Contents of PHONEMAN.BAT
     DOS command
     in phoneman.bat     Comments
     c:                  make this drive the default
     cd \tascs           change default directory to tascs
     phoneman.exe        run the phoneman program


F. TRADEMARK ACKNOWLEDGEMENTS

         IBM(R) ans PS/2(R) are registered trademarks of
           International Business Machines Corporation.

       Microsoft(R) is a registered trademark of Microsoft
                          Corporation.

        Logitech(R) is a registered trademark of Logitech
                          Incorporated.

           Hayes(R) is a registered trademark of Hayes
                   Microcomputer Products, Inc.















                            - 24 -

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2514

     Volume in drive A has no label
     Directory of A:\

    PHONEMAN EXE    140282   7-05-90  10:49p
    PSETUP   EXE     42764   7-05-90  10:15p
    FINDNAME EXE     14744   7-05-90   9:49p
    MANUAL   TXT     57939   7-05-90   9:49p
    PHONEMAN BAT        31   7-05-90   9:49p
    WHOIS    BAT       136   7-05-90   9:49p
    PHONEMAN HLP     14862   7-05-90   9:49p
    PINFOSET DAT       109   7-07-90   8:30a
    READ     ME      21961   9-24-90  11:54p
    ADDRESS  PBK       101   7-05-90   9:49p
    RECORDS  DEF       353   7-07-90   8:30a
    LABELS   DEF       785   7-07-90   8:30a
    INSTALL  BAT       326   7-05-90   9:49p
    INSTPBK  EXE     20270   7-07-90  11:57p
    INFO     TXT      4042   9-22-90   2:04p
    GO       BAT        36   1-04-91  12:19p
    FILE2514 TXT      1856  10-04-90   1:36p
           17 file(s)     320597 bytes
                           32768 bytes free
