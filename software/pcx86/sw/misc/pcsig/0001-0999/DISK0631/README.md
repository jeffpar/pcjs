---
layout: page
title: "PC-SIG Diskette Library (Disk #631)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0631/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0631"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HDM IV: HARD DISK MENU SYSTEM"

    HARD DISK MENU IV or HDM is a hard disk menuing utility of the finest
    commercial quality in a shareware package.  Access and execute up to
    100,000 different programs with this utility.  HDM IV offers a
    multitude
    of features including multiple and independent menu modules with each
    having its own color and other set up characteristics, multiple levels
    of security, color and border control, mouse sensitivity, macros,
    command line arguments and the most striking ability to accomplish
    timed execution of programs; this latter feature being enough of a
    reason
    to purchase this utility!  HDM IV can be operated within about 90% of
    it's abilities without ever consulting the documentation and the only
    confusion the user may encounter is centered around the use of macros
    and switching from one menu module to another.  You will especially like
    the ability of HDM IV to execute programs at any time of day or week
    with it's "timed" program execution option.  This feature alone is
    reason enough to purchase this splendid shareware utility.  Jim Hass,
    the program author, offers various levels of licensing for HDM IV,
    beginning with a single user package rate of thirty-five dollars; the
    printed manual is an additional fifteen dollars.  HDM IV offers all of
    the features of DIRECT ACCESS, a commercial hard disk menuing program,
    and a good deal more; a substantial value for your dollar!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DIAL.DOC

{% raw %}
```

   DIAL T# [Modem-Commands~][Phone-Number]

   T = Dial type (Tone or Pulse): must be T or P.
   # = Serial port number (1 - 4).
   Modem-Commands = Optional intialization strings.
                    (no embedded or ending spaces, end with ~)
   Phone-Number = Maximum of 36 characters, no embedded spaces.

   EXAMPLE:           dial T1 1(216)931-1212
                      dial P2 9,654-7171
                      dial T3 18003334444

   This program dials the phone for you through a Hayes compatible modem.
   It will tell you to pick up the phone when dialing is completed.  It
   can optionally pass an initialization string to the modem before the
   dialing.  Each initializing modem command must end with a tilde (~),
   you can have up to 15 of these commands.  You can send modem commands
   without dialing a number.

   EXAMPLE:           dial T1 S11=30~1(216)931-1212
                      dial P2 M0~S0=0~9,654-7171
                      dial T3 M0~S0=0~              

   ----------------------------------------------------------------------

   Copyright (c) 1986-1990 by Jim Hass
   Member of the Association of Shareware Professionals

   MicroFox Company
   P.O. Box 447
   Richfield, OH
   44286-0447  USA

   CompuServe Mail:  73057,3113

```
{% endraw %}

## EZT.DOC

{% raw %}
```
                               EZ-TREE

EZ-Tree is a genealogy program to track and report on family trees.  
The program records information in variable length records and fields 
with the following maximum field sizes:

              First Name . . . . . . . . . . .  16 characters
              Middle Name  . . . . . . . . . .  16 characters
              Last Name  . . . . . . . . . . .  16 characters
              Maiden Name  . . . . . . . . . .  16 characters

              Sex (M or F) . . . . . . . . . .   1 character
              Birth Date & Information . . . .  32 characters
              Death Date & Information . . . .  32 characters
              Personal Comments  . . . . . . . 144 characters

              Marriage Date & Information  . .  32 characters
              Divorce Date & Information . . .  32 characters
              Marriage & Divorce Notes . . . . 144 characters

You can keep track of up to 16 marriages per person and up to 32 
children per marriage.  There is no logical limit to the number of
generations you can have for each family tree.  There are provisions
currently in the program to handle 90 different family trees with 200
people and marriages per family tree.  Both of these last two numbers
will be increased in the future.


                        INSTALLATION AND SETUP

There is only one file (EZT.COM) you need to run EZ-Tree.  To start 
the program simply key in EZT and press the ENTER key.  The program 
will create other files that it uses to store information in.  They 
are:
              CONFIG.EZT  used to store program configuration info.
              FAMILY.EZT  used to store an index to the family trees.
              TREE1.EZT - TREE90.EZT stores all the family tree data.


                              MAIN MENU

To choose an entry from the main menu use the up and down arrow keys 
to highlight the one you want to use, then press the ENTER key; or
just press the first letter of the entry.  The first entry you may
want to choose is the Modify configuration entry.  This lets you
choose a different disk drive and directory to store the Family and
Tree files if you need to do that.  This would actually allow you to
use more than 90 family trees by putting 90 families in each
directory you create for that purpose.  Also with this entry you can
change your screen colors and the screen save time out feature that
will blank out the screen after a certain amount of time.

The next entry you will choose is either Create a new family tree or
Retrieve an existing one.  To create a new one, choose the Create
option, then key in a description of the family tree your creating.

You can use up to 60 characters.  Next you would choose Work on the
current family tree to start entering the detailed information.  If 
you already had some family trees created and chose the Retrieve a 
family tree entry, you would be presented with a list of available 
family trees.  To choose one use the up or down arrow keys to 
highlight the one you want and press the ENTER key.  Then you would 
choose Work on current family tree.

The remaining main menu entries allow you to save the family tree on
disk any time while your working on it or to delete the current 
family tree from the index and from your disk.


                       WORKING ON A FAMILY TREE

You start by keying in information about the first person you want to 
add to the family tree.  Pressing ENTER takes you to the next field 
until all fields are used.  Then the person's name is displayed in a 
box in the upper left hand corner of the screen and a function key 
menu is displayed below it.  Press the F1 (help) key to see the 
details of what each key on the keyboard will do.  Press any key to 
return.  You can now add parents to the person you keyed in or add a
spouse.  The top two boxes are always used to display a husband and 
wife if there is a marriage.  Children are added and displayed below 
the couple.  The ESCAPE key can be used at any time to cancel or back 
out of any procedure.


                               REPORTS

Presently there are three reports that can be produced by using the 
F9 (list) key.  More will be added later.  You can get detailed 
information about the person currently highlighted by the cursor, a 
report on all people in the current family tree, and a list of all 
descendents of the person currently highlighted by the cursor.  The
detailed report and the report on all people have reference numbers
listed in front of each person.  This lets you locate information on
a person by that reference number because the report is produced in
reference number sequence.  The descendents report puts an asterisk
in front of people who are related by marriage, but are not actually
in the blood line.  A listing can be directed to your printer or to
the screen and it can be cancelled any time by pressing the ESCAPE
key.


              MORE INFORMATION, SUGGESTIONS, & PROBLEMS

    Write to:
                               Jim Hass
                             P.O. Box 447
                             Richfield, OH
                              44286-0447


```
{% endraw %}

## FILE0631.TXT

{% raw %}
```
Disk No:  631                                                           
Disk Title: HDM IV: Hard Disk Menu System                               
PC-SIG Version: S3.2                                                    
                                                                        
Program Title: HDM IV: Hard Disk Menu System                            
Author Version: 2.50                                                    
Author Registration: $35.00 to $50.00                                   
Special Requirements: None.                                             
                                                                        
HARD DISK MENU IV or HDM is a hard disk menuing utility of the finest   
commercial quality in a shareware package.  Access and execute up to    
10,000 different programs with this utility.  HDM IV offers a multitude 
of features including multiple and independent menu modules with each   
having its own color and other set up characteristics, multiple levels  
of security, color and border control, mouse sensitivity, macros,       
command line arguements and the most striking ability to accomplish     
timed excution of programs; this latter feature being enough of a reason
to purchase this utility!  HDM IV can be operated within about 90% of   
it's abilities without ever consulting the documentation and the only   
confusion the user may encounter is centered around the use of macros   
and switching from one menu module to another.  You will especially like
the ability of HDM IV to execute programs at any time of day or week    
with it's 'timed' program execution option.  This feature alone is      
reason enough to purchase this splendid shareware utility.  Jim Hass,   
the program author, offers various levels of licensing for HDM IV,      
beginning with a single user package rate of twenty-five dollars; the   
printed manual is an additional fifteen dollars.  HDM IV offers all of  
the features of DIRECT ACCESS, a commercial hard disk menuing program,  
and a good deal more; a substantial value for your dollar!              
                                                                        
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
║                     <<<<  Disk #631 HDM IV >>>>                         ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using this program, type:  COPY README.DOC PRN (press enter)   ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
HDM IV - Version 2  (HDM420)

The following features and functions have been added to the Hard
Disk Menu IV version 2:

HDM IV now works with DR-DOS, EZ-DOS, and 4DOS.  The CALL
command is no longer automatically added to the beginning of
each command in X.BAT for users of DOS 3.3 and above.  Instead
you can use the CALL command to run batch files by putting the
CALL right in the menu action like this:
                                         C:~CD\DSPLYWRT~CALL DW5~
or you can use the @@ in front of batch file names:
                                            C:~CD\DSPLYWRT~@@DW5~
The @@ has the advantage
of working with all versions of DOS, @@ is replaced by COMMAND
/C if your running DOS 3.2 or under, else it will be replaced by
CALL.  This was done because of compatibility problems with DOS
clones.  CALL did not work with 4DOS aliases, nor did it work
with EZ-DOS/DR-DOS internal commands.

New alternate user interfaces using the Local Switch <F8> menu
entry.  The new screen is more consistent with the opening logo
screen.  You can switch back to the HDM IV version 1 screen any
time.  <F8> also switches the Page Index and the Main Menu
windows.

The customized logo screen available using the -H startup switch
and the HDM.HDR file now affect both boxes on the screen.  A
sample HDM.HDR file is included on the HDM disk.

1000 menu files now available, named HDM.000 through HDM.999.
Use the UPDATE.BAT file to retain your current menu entries.
New startup switches, -0 through -9 tell HDM where to find each
set of 100 menu files.  If you use the -T startup switch it will
still tell where the rest of the HDM.000 - HDM.999 and the
HDM.CFG (formally HDMENU.TGL) files reside.  The default path
for the files is the HDM startup directory.

       EXAMPLE:  HDM -0C:\MYMENUS -1H:\NETMENUS -9D:\UTILMENU
       HDM.000 - HDM.099 files are located on C:\MYMENUS directory.
       HDM.100 - HDM.199 files are located on H:\NETMENUS directory.
       HDM.900 - HDM.999 files are located on D:\UTILMENU directory.

The macro parameters %1 through %9 can now be put in braces so
they are executed immediately instead of waiting until all other
functions in braces are evaluated.

       EXAMPLE:  {&0 {?Dir Name}}{run! dir {%1}}type {?File Name}~

The help text has been separated from the HDMENU.EXE file so it
won't be loaded if you don't press F1.  The help text is in the
file HDM.HLP and the executable program is HDM4.EXE.  The
program must still be started with HDM.BAT.

New date and time formats have been added to the Global pull
down menu for European date and Military (24 hour) clock.

A log file is written to the HDM directory if a user is logged
on (using an entry from the User ID table in the Security pull
down window) and HDM is started with the -L switch like this:
     HDM -L    or it can be written to a different directory if
you add that path to the -L switch:     HDM -LC:\LOGDIR

The log file has the following format:
           YYYYMMDDHR:MNX[???]=description
YYYYMMDD is the year, month, and day (19890728).
HR:MN is the hour and minute of the 24 hour clock (14:25).
X is the day of the week (1=Sunday,7=Saturday).
[???]=description is:
      [LOG]=Name of person who logged on.
      [OFF]=Name of person who logged off.
      [RUN]=Description of what is being run.
      [END]=End of run.

The three digit menu file number has been added to the User ID
table so that each user can start at a different menu file when
they log on.

You can create your own individual help screen for each menu
entry.  A file that is named P#.###, where P# is the page letter
and menu entry number and ### is the menu file number, is
display if the cursor is on that entry and the F1 key is
pressed.  The help screen is 21 lines by 76 characters for each
line.  A sample file, A1.000, is included as an example.

You can now password protect one page.  The security levels for
the main menu entries are now:  Individual password overrides a
page password which overrides the password for all entries.

Free disk space can now be displayed at the bottom of the
screen.  If you want to see available space for a disk drive use
the -D startup switch.  Example: -DD will display available disk
space on the D: drive.  If -D is used without a drive letter,
then the drive that HDM was started on will be used.

New menu action function: {COLOR Fg Bg}  sets DOS color.  Fg is
a foreground color numbered from 0 to 15, Bg is a background
color numbered from 0 to 7.  This will set the DOS screen color
for the current menu entry only.  It will not work if ANSI.SYS
is loaded in the CONFIG.SYS file.  0=Black, 1=Blue, 2=Green,
3=Cyan, 4=Red, 5=Magenta, 6=Yellow, 7=White, 8-15 are the bright
versions of these colors.  Example: {Color 15 1} is bright white
on blue.

New menu action function: {REBOOT}  Used to re-boot your
computer.  This can be used to change the setup of your
CONFIG.SYS and AUTOEXEC.BAT and then restart your system for
another application like Windows, Desqview, etc. with HDM
automatically starting it with the -A switch.    Example:
COPY C:\CONFIG.NEW C:\CONFIG.SYS~COPY C:\AUTOEXEC.NEW
C:\AUTOEXEC.BAT~{REBOOT}

New menu action function: {SELECT prompt~choice1~choice2~...choice9}
              This will display a menu of
choices in a window with the "prompt" used as a title.  The
users choice from the list will replace everything in the braces
in the menu action.  Use the tilde (~) to separate the prompt
and the choices.  A choice can be selected with the mouse or
keyboard arrow keys and the <Enter> key.  You can also select a
choice by pressing the first letter, if two or more choices have
the same first letter, the last one with that letter will be
selected.           Example:
DIR {SELECT Pick a directory~C:\DIR1~C:\DIR2~C:\DIR3~C:\DIR4~C:\DIR5}

HDM no longer automatically adds the directory that contains
X.BAT to the path if it isn't already there.  This has caused
problems for some network users.  You must insure that the DOS
path includes the directory that X.BAT will be written to.  It
will be either the HDM default directory or the one pointed to
by -W if that startup switch is used.
        Example: PATH C:\;C:\HDM;C:\DOS
If you don't include this directory in the
path, you will probably get a "Bad command or file name"
message from DOS when you key in X to return to HDM.

(HDM421)

-P is a new HDM startup switch that can be used in the command
line or the DOS environment to stop the cursor from wrapping to
the previous page or to the next page when you try to go past
the top or bottom of a page.  This also causes the cursor to
stop at all menu entries, even the empty ones.  This is probably
most useful for people who use a mouse, moving up and down will
go to menu entries in the same page while moving side to side
will move through the pages.       Command line:   HDM -P
            DOS environment:       SET HDM=-P

Alt-1 through Alt-0 are new alternate keys for A - J to go
directly to a page.

You can now protect a menu file from being changed while still
allowing the entries to be run without a password.  Use the
"File change password" in the Security menu to protect Menu,
Page, Security, and Local menus for the current menu file only.

(HDM422)

The number of users available in the USER ID TABLE has been
increased to 99.

A new entry has been added to the MENU pull-down menu, SAVE MENU
(Alt-F5).  This entry will save all changes to disk.  You will
normally not need to use this because HDM IV automatically saves
changes to disk when you run a menu entry, when you display the
logo screen, when you exit to DOS, use the DOS window, or after
one minute of keyboard/mouse inactivity.  The reason for this
new command is if you make a change and want to turn your system
off or reboot immediately, you should save the changes you made
first by pressing Alt-F5 or choose "Save menu".

A new starup switch, -K, causes the Key lock status to not be
displayed, and does not update the on-screen date & time.  This
is needed if you run another program with HDM in the background
and the Key status, date, and time bleed through to that screen.
Put HDM -K  or  Set HDM=-K in your AUTOEXEC.BAT.

When you create a new menu file with the {menu ###} action function
the new menu file will take on the attributes of the menu file it
was created from.  That is the colors, borders, user interface,
titles, and macros will be the same.

The number of entries in the Timed Execution Facility has been
increased to 99.

(HDM423)

You can now pass an initialization string to your modem using the
{DIAL} function.  This can be done with or without dialing a number.

You can now use the curly braces {} and the tilde ~ characters in a
menu action by using substitute characters for them.  The braces are
used to identify a menu function and the tilde is used as the command
separator so they cannot be entered directly to be used in a command
or program.  Use <Ctrl-Q> for {, <Ctrl-P> for }, and <Ctrl-Z> for ~.

A new parameter has been added to the menu action.  %0 will always
contain the complete reply to a {?} prompt function so it can be used
later in the same menu action.  %1 through %9 will still contain the
first nine parameters of a macro.

You can now log all usage through the menu without having to log on
as a user in the ID table.  The -L switch by itself controls whether
logging is done to the HDM.LOG file.

(HDM424)

A screen border is displayed on color monitors.  It will be the same
color as the status line.  You can use the -I startup switch to
Inactivate the border if you don't want one.  There is also one more
set of screen interfaces available by pressing the F6 key.  Each set
of interfaces include the Page Index and Main Menu on opposite sides
of the screen.  The original HDM IV version 1 interface does not show
screen borders at any time.

A bug was fixed that showed up if you had a Hidden Top Menu.  The F4
key didn't work when adding or changing a menu entry.  F4 is used to
display the menu action Build screen.  It always worked if the Top
Menu was not hidden, now it also works if it is hidden.

New user defined help screens can now be displayed for an entire menu
file.  These work just like the individual help screens for each menu
entry, but are only displayed if there is no individual help file for
the current menu entry.  These new generic help files must be named
HELP.000 through HELP.999, while the individual help files are named
for the menu entry and the menu file number: A1.000 through J0.999.
The priority for help screens displayed when F1 is pressed is now:
1. The individual help screen if a matching file exists; H4.500 if
   you are in menu file 500 (HDM.500) and the cursor is on entry H4.
2. The generic menu file help screen if a matching file exist;
   HELP.500 if you are in menu file 500 and the cursor is on a menu
   entry that does not have a matching individual help file.
3. The default HDM help screen, if neither of the above files exist.
Pressing F1 a second time still gives you the HDM help menu & screens.
The layout is the same for all help files; an ASCII text file with
21 lines and 76 characters per line.

(HDM425)

A new function, {BEEP!}, was added to sound the speaker to alert
a user to an HDM event, like a prompt needs to be answered or a
{SELECT} menu entry needs to be chosen.  The difference between
the current {BEEP} function and new the {BEEP!} is that {BEEP}
gets replaced by a Ctrl-G so that DOS will sound the speaker when
it gets to it in the temporary work file, X.BAT.  {BEEP!} will
sound immediately at the time that HDM is evaluating funtions.
EXAMPLE:  C:~CD\EDIT~{BEEP}~EDIT {?ENTER FILE NAME}~
In this example, {BEEP} is replaced by Ctrl-G before the prompt
shows, but you won't hear it until DOS reads the X.BAT file,
which is after all functions are resolved and the batch file is
turned over to DOS for execution.  Use {BEEP!} in this case to
sound the speaker before the prompt is displayed.  Use {BEEP} to
signal the end of a long running program.

An * now displays in the lower right hand corner of the screen
when the menu file has been changed, but the changes have not
been recorded to disk yet.  The changes are automatically written
to disk when your run a menu entry, when you go to the logo
screen or another menu file, or after one minute of keyboard and
mouse inactivity.

A new menu action function, {VSELECT}, has been added to HDM.  It
works exactly like the current {SELECT} function, but displays
the menu entries vertically.  Also, the menu entry picked from
{SELECT} or {VSELECT} is kept in the %0 parameter, just like the
answer to a {?prompt} function is.  If you need the menu pick in
additional locations in the menu action, just put %0 in all those
places.
```
{% endraw %}

## INTRO.DOC

{% raw %}
```
                              Hard Disk Menu (HDM) IV

         This program is  a DOS shell that hides  the underlying operating
         system from the uninitiated user, yet  does not get in the way of
         the expert user.  The basic system consist of  up to one thousand
         menu  files with  ten menu  pages  each,  and each  page has  ten
         entries for  a total of 100,000  entries to choose from.  You can
         start an  entry by pointing to  it with the cursor  or the mouse,
         then press the  <Enter> key or the left mouse  button, or you can
         simply  press the  number key  associated with  that entry.  Each
         entry can start  a program, run a batch file,  or execute any DOS
         command. An entry can also  have multiple steps which can include
         any or all of the  possibilities above plus special HDM functions
         and macros. You can change menu pages by pressing the <A> through
         <J> keys  or the <Alt-1> through  <Alt-0> keys to go  directly to
         page "A" through "J" or use the <PgUp> and <PgDn> keys. Each page
         and each entry on each page has a user definable description. You
         can go  to another Menu File  by using the action  function {MENU
         ###}. The Menu Files are numbered from zero to 999.

         The  <F10> key  displays a  horizontal  menu  at the  top of  the
         screen. The choices from the  menu include: Menu, Page, Security,
         Local,  Global,  or  Exit.  Help  can  be  selected  any time and
         presents you  with another menu  and screens that  explain how to
         use the  Hard Disk Menu System.  MENU allows you to  add, change,
         delete,  move,  or  copy  the  menu  entry descriptions and their
         associated menu action. PAGE lets you change the description of a
         Page Index  entry, import pages,  switch pages, or  delete pages.
         SECURITY allows  you to set  up user logons  and password protect
         menu entries. LOCAL lets you set up variables in the current menu
         file and  GLOBAL lets you set  up variables that affect  all menu
         files. EXIT leaves HDM and returns you to the DOS prompt or opens
         a DOS window where you can run any DOS command, program, or batch
         file. Other commands in the Top  Menu allow you to set up macros,
         menu  titles,  change  colors   and  window  borders,  set  mouse
         sensitivity,   set  communications   parameters,  set   time  for
         automatic blanking of the menu screen, and set up hands off timed
         execution of any menu entry any time of the day, week, or month.

         The user defined menu entries consist of two parts. The first one
         is a 48 character description that is displayed on the screen and
         can be anything you want. This is what you choose to start a menu
         entry from the  main menu. The second part of  this menu entry is
         the menu action.  This tells HDM what to do  when this menu entry
         is started. The  menu action can contain anything  that you would
         normally put in a DOS batch  file, plus functions and macros that
         give you  additional flexibility, ease  of use, and  capabilities
         beyond DOS and other menu systems.

         Help is  always available. Press  <F1> from anywhere  in the Hard
         Disk Menu to get the help  menu and help screens. Help topics are
         displayed at  the left side  of the screen  and a description  of
         each topic is displayed on the  right side of the screen. You can
         move  up and  down through  the help  topics or  press the letter
         associated  with  it  and  the  information  on  that  topic will
         immediately be  displayed in the  help text window  at the right.
         You can also  get help on the keys available  when you are in the
         main menu.  Just press <?> from  the main menu and  a help window
         will  open with  information specific  to that  menu. It  is also
         possible  to set  up custom  help for  any menu  entries that you
         want. See the sample file A1.000 on your distribution disk.

         The  Hard  Disk  Menu  is  not  memory  resident.  When you run a
         program, HDM gets out of memory completely so that all system ram
         is available for your use.  HDM is then automatically called back
         into memory when your program is finished.

         HDM  also  has  the  ability  to  log  user  activity  by writing
         information to a file every time a user logs on or off, and every
         time a menu entry is run. To use  the log file you must set up at
         least one  user logon ID in  the Security pull down  menu and you
         must start  HDM with the  -L startup switch.  The log file  is an
         ASCII text file with the following format:

                              YYYYMMDDHR:MND[xxx]=Msg

         YYYY = Year; MM = Month; DD = Day; HR = Hour (0-23); MN = Minute;
         D = Day of week; [xxx] = LOG, OFF,  RUN, or END; Msg = User ID or
         Menu description of what was run.

         HDM allows you  to put passwords on any entries  in the main menu
         and on  the commands in the  pull down windows. This  can be done
         either at the group level via the Security pull down window or by
         putting  the cursor  on any  main menu  entry or  pull down  menu
         command and pressing the Alt-F1 key.

         You can customize the opening logo screen by using the -H startup
         switch and putting your own company logo in the file HDM.HDR. You
         can also create  custom help screens for each  main menu entry by
         creating a text  file with a name that uses  a combination of the
         menu entry page  letter and number and the  menu file number. For
         example custom help for menu entry  B5 in menu file HDM.333 would
         be named B5.333.  When F1 is pressed while the  cursor is on that
         entry, your custom  help is displayed before the  normal HDM help
         screens.

         There are many features built into  the Hard Disk Menu for use on
         local  area networks.  One that  must be  used is  the -W startup
         switch. This tells  HDM where to keep the work  file that it uses
         to keep track of information for each user. The -T and -0 through
         -9 startup  switches also can  help with network  environments as
         can some of the security features.

```
{% endraw %}

## INVOICE.DOC

{% raw %}
```
   INVOICE #  072848-425

   Remit to:       Jim Hass                      P.O. # _________________
                   MicroFox Co.
                   P.O. Box 447
                   Richfield, OH                   DATE _________________
                   44286-0447  U.S.A.
   ______________________________________________________________________


     Registered HDM disk and printed manual sent .... $50 U.S.

          Number of disks & manuals  __________      SUBTOTAL  __________ 

     HDM Network License (price per network) .... $200.00 U.S.

                Number of networks   __________      SUBTOTAL  __________ 

     HDM Site License (unlimited per site) ...... $600.00 U.S.

                   Number of sites   __________      SUBTOTAL  __________ 


     Corporate License (unlimited) .. $1200.00 U.S.  SUBTOTAL  __________ 

     Each License includes a master disk and printed manual,
     additional disks ($5 each) and manuals ($10 each) are available.
   ______________________________________________________________________


     Ohio residents add 5.5% sales tax             SALES TAX   __________


     Shipping charges:  U.S.A. ...... $3 each        SHIPPING  __________
                        Canada ...... $4 each
                        All others .. $7 each
                                                        TOTAL  __________

   ______________________________________________________________________


                 Name ___________________________________________________

              Company ___________________________________________________

              Address ___________________________________________________

                      ___________________________________________________

                      ___________________________________________________

                Phone ___________________________________________________


           Disk media:     _____ 5.25" acceptable     _____ 3.5" required

FOREIGN ORDERS: Please make checks payable in U.S. funds from a U.S. bank.

```
{% endraw %}

## KEY.DOC

{% raw %}
```
     KEY k1 k2 k3 k4 k5 k6 k7 k8 k9 k10 k11 k12 k13 k14 k15

     This  DOS utility  allows you  to pass  up to  fifteen keys  to a
     program  that uses  the standard  DOS keyboard  buffer. This will
     allow you  to automate some  procedures in the  programs that you
     start  from batch  files. This  will not  work with  all programs
     because some of them will clear  the buffer as soon as they start
     and  some others  will ignore  the DOS  buffer and  use their own
     keyboard buffer.  Another reason this  might not work  is if your
     are  using a  memory resident  keyboard enhancement  program that
     expands the  size of the  buffer. You will  have to test  it with
     your programs  to see if  it works for  you. Fortunately it  will
     work with most programs.

     NOTE:     Each key and key mnemonic must be separated by a space.

     Sample batch file:  C:
                         CD\LOTUS
                         KEY / F R B U D G E T ENTR
                         123

     This will start  Lotus 123 and put the above  ten keys in the DOS
     keyboard buffer which would automatically retrieve the file named
     "BUDGET".

     You can pass any key on  the IBM keyboard plus the following list
     of key mnemonics.

     KEY  REAL KEY            KEY  REAL KEY            KEY  REAL KEY
     ---  --------            ---  --------            ---  --------
     CA   Ctrl-A              CB   Ctrl-B              CC   Ctrl-C
     CD   Ctrl-D              CE   Ctrl-E              CF   Ctrl-F
     CG   Ctrl-G              CH   Ctrl-H              CI   Ctrl-I
     CJ   Ctrl-J              CK   Ctrl-K              CL   Ctrl-L
     CM   Ctrl-M              CN   Ctrl-N              CO   Ctrl-O
     CP   Ctrl-P              CQ   Ctrl-Q              CR   Ctrl-R
     CS   Ctrl-S              CT   Ctrl-T              CU   Ctrl-U
     CV   Ctrl-V              CW   Ctrl-W              CX   Ctrl-X
     CY   Ctrl-Y              CZ   Ctrl-Z              SP   Space
     C[   Ctrl-[              C]   Ctrl-]              C\   Ctrl-\
     C2   Ctrl-2              C6   Ctrl-6              C-   Ctrl- -
     ENTR Enter               ESC  Escape              CBRK Ctrl-Break
     BSP  Back Space          CBSP Ctrl-Back Space     TAB  Tab
     STAB Shift-Tab           AA   Alt-A               AB   Alt-B
     AC   Alt-C               AD   Alt-D               AE   Alt-E
     AF   Alt-F               AG   Alt-G               AH   Alt-H
     AI   Alt-I               AJ   Alt-J               AK   Alt-K
     AL   Alt-L               AM   Alt-M               AN   Alt-N
     AO   Alt-O               AP   Alt-P               AQ   Alt-Q
     AR   Alt-R               AS   Alt-S               AT   Alt-T
     AU   Alt-U               AV   Alt-V               AW   Alt-W
     AX   Alt-X               AY   Alt-Y               AZ   Alt-Z
     F1   F1                  F2   F2                  F3   F3
     F4   F4                  F5   F5                  F6   F6
     F7   F7                  F8   F8                  F9   F9
     F10  F10                 F11  F11                 F12  F12
     AF1  Alt-F1              AF2  Alt-F2              AF3  Alt-F3
     AF4  Alt-F4              AF5  Alt-F5              AF6  Alt-F6
     AF7  Alt-F7              AF8  Alt-F8              AF9  Alt-F9
     AF10 Alt-F10             AF11 Alt-F11             AF12 Alt-F12
     CF1  Ctrl-F1             CF2  Ctrl-F2             CF3  Ctrl-F3
     CF4  Ctrl-F4             CF5  Ctrl-F5             CF6  Ctrl-F6
     CF7  Ctrl-F7             CF8  Ctrl-F8             CF9  Ctrl-F9
     CF10 Ctrl-F10            CF11 Ctrl-F11            CF12 Ctrl-F12
     SF1  Shift-F1            SF2  Shift-F2            SF3  Shift-F3
     SF4  Shift-F4            SF5  Shift-F5            SF6  Shift-F6
     SF7  Shift-F7            SF8  Shift-F8            SF9  Shift-F9
     SF10 Shift-F10           SF11 Shift-F11           SF12 Shift-F12
     LAR  Left Arrow          RAR  Right Arrow         UAR  Up Arrow
     CLAR Ctrl-Left Arrow     CRAR Ctrl-Right Arrow    DAR  Down Arrow
     HOM  Home                END  End                 INS  Insert
     CHOM Ctrl-Home           CEND Ctrl-End            DEL  Delete
     PGU  PgUp                PGD  PgDn                CPRT Ctrl-PrtSc
     CPGU Ctrl-PgUp           CPGD Ctrl-PgDn
     A1   Alt-1               A2   Alt-2               A3   Alt-3
     A4   Alt-4               A5   Alt-5               A6   Alt-6
     A7   Alt-7               A8   Alt-8               A9   Alt-9
     A0   Alt-0               A-   Alt- -              A=   Alt-=

     -----------------------------------------------------------------

     Copyright (c) 1986-1990 by Jim Hass
     Member of the Association of Shareware Professionals

     MicroFox Company
     P.O. Box 447
     Richfield, OH
     44286-0447 USA

     CompuServe Mail:  73057,3113

```
{% endraw %}

## LIST.DOC

{% raw %}
```
LIST    for ASCII text files only!

Usage:  LIST [DRIVE:\PATH\FILENAME] [-P] [-M##] [-N] [-L###] [-C###]

If the file name is not entered on the command line, the program will ask for it

-P will print the file  (the default is to display it on the screen)

-M and a number from 0 to 99 will print a left margin of that many spaces.

-N will not print headers on each page  (the default is to print headers)

-L and a number (1 to 250) tells how many lines to print before a form feed

-L0 will not issue any form feeds  (continuous print with no headers)
     (the default is 60)

-C and a number from 1 to 250 tells how many copies to print
     (the default is 1)

-------------------------------------------------------------------------------

Copyright (c) 1986-1990 by Jim Hass
Member of the Association of Shareware Professionals

MicroFox Company
P.O. Box 447
Richfield, OH
44286-0447  USA

CompuServe Mail:  73057,3113

```
{% endraw %}

## ORDER.DOC

{% raw %}
```

     HDM 4.25        REGISTRATION AND ORDER FORM

           Send to:  Jim Hass                    P.O. # _________________
                     MicroFox Co.
                     P.O. Box 447
                     Richfield, OH                 DATE _________________
                     44286-0447 USA

     Registration of currently used HDM ............. $35 U.S.

              Number currently used  __________      SUBTOTAL  __________

     Fully Registered HDM Disk & Printed Manual ..... $50 U.S.

          Number of disks & manuals  __________      SUBTOTAL  __________

     HDM Network License (price per network) .... $200.00 U.S.

                 Number of networks  __________      SUBTOTAL  __________

     HDM Site License (unlimited per site) ...... $600.00 U.S.

                    Number of sites  __________      SUBTOTAL  __________


     Corporate License (unlimited) .. $1200.00 U.S.  SUBTOTAL  __________

     Each License includes a master disk and printed manual,
     additional disks ($5 each) and manuals ($10 each) are available.
   ______________________________________________________________________


     Ohio residents only,  add 5.5% sales tax       SALES TAX  __________


     All orders must   >   U.S.A. ...... $3 each     SHIPPING  __________
     add Shipping and  >   Canada ...... $4 each
     Handling charges  >   All others .. $7 each
                                                        TOTAL  __________

   ______________________________________________________________________


            User Name ___________________________________________________

              Company ___________________________________________________

              Address ___________________________________________________

                      ___________________________________________________

                      ___________________________________________________

                Phone ___________________________________________________


           Disk media:     _____ 5.25" acceptable     _____ 3.5" required

   ______________________________________________________________________

            SPECIAL OFFER FOR PC USER GROUP MEMBERS AND BBS USERS
   ______________________________________________________________________

   You can receive the full $50 registered version of the  Hard Disk Menu
   for $39 by helping to distribute  HDM IV  to others.  Just give a copy
   of the  HDM  disk to your PC user group's IBM disk librarian or upload
   it to a bulletin board,  then fill out the form below.   Cross out the
   $50 charge on the order form, write in $39.  Return it with this page.

   IBM PC User Group Name _______________________________________________

   Address ______________________________________________________________

           ______________________________________________________________

           ______________________________________________________________


   Bulletin Board Name __________________________________________________

   BBS Phone Number _____________________________________________________



   ______________________________________________________________________

              LIMITED LICENSES AVAILABLE FOR SMALL BUSINESSES
   ______________________________________________________________________

   Businesses with  a small number of PC's  that can not justify the cost
   of unlimited Network, Site, or Corporate Licenses can replace those on
   the first page of this order form with the following Licenses:

   Limited Network License (less than 10 PC's on one network).. $120 U.S.
   Limited Site License ... (less than 30 PC's at one site).... $360 U.S.
   Limited Corporate License (less than 60 PC's at all sites).. $720 U.S.

   Just sign the following statement  and make the appropriate changes to
   the first page of this order form.

   I CERTIFY  THAT I WILL NOT USE  THE HARD DISK MENU SYSTEM ON MORE THAN
   THE ABOVE DESIGNATED NUMBER OF PERSONAL COMPUTERS.


                                Signed __________________________________

                                Title ___________________________________


   NOTE:  Any HDM License can be upgraded to any other HDM License at any
   time for the difference in price between the two Licenses.


   FOREIGN ORDERS PLEASE NOTE:

      U.S. banks won't accept checks drawn on foreign banks.  Please make
      checks payable in  U.S. dollars drawn  on a U.S. bank.  As a second
      choice you can send cash (U.S. or your own).  Thank you.

  _______________________________________________________________________

   <ASP>   Member of the Association of Shareware Professionals.  You can
   contact MicroFox Company via  CompuServe Mail:  73057,3113  (Jim Hass)
   ______________________________________________________________________


```
{% endraw %}

## README.DOC

{% raw %}
```


     HDM IV (tm)                                                     (ASP)
     Hard Disk Menu (tm)                                    April 20, 1990
     Copyright (c) 1986-90 by Jim Hass      All rights reserved world wide


     To install HDM IV for the first time:
     1. Put the HDM IV diskette in drive A:
     2. Key in   A:   to switch to drive A:
     3. Key in   INSTALL C:\HDM   where C:\HDM is the dir to install to.

     NOTE:  DO NOT INSTALL HDM IN THE ROOT DIRECTORY!

     To update an existing Hard Disk Menu system:
     1. Put the HDM IV diskette in drive A:
     2. Key in   A:   to switch to drive A:
     3. Key in   UPDATE C:\HDM   where C:\HDM is the dir that contains HDM


     To start the Hard Disk Menu IV:   change to the directory that it was
     installed in and key in HDM, then press ENTER.


     After starting HDM IV, press <F1> and read the Help Screens.

     ---------------------------------------------------------------------

     These are the files you need to run the Hard Disk Menu:

     HDM.BAT      The batch file that must start the Hard Disk Menu System.
     HDM4.EXE     The main program used by the Hard Disk Menu system.
     HDM.000-999  Files used by HDM IV to hold configuration and menu info.
     HELP.EXE     Hard Disk Menu help. (only needed if your press F1)
     DIAL.EXE     HDM phone dialer. (only needed if using {DIAL} function)

     ----------------------------------------------------------------------

     There are also many utilities on the disk that are not required to run
     HDM. You may find some of them useful. HDMDOC.EXE is a Self-Extracting
     file that contains HDM's manual and documentation on the utilities.

     NOTE:  To extract the HDM documentation, just run HDMDOC on your hard
            disk.  It needs 400K of disk space.

     ---------------------------------------------------------------------

     Jim Hass                                              Electronic Mail
     MicroFox Co.                                               CompuServe
     P.O. Box 447                                               73057,3113
     Richfield, OH  44286-0447  U.S.A.
     (ASP)   Member of the Association of Shareware Professionals

     POSSIBLE PROBLEMS WHEN RUNNING HDM IV:

     If you have snow on your screen, start HDM with the -S switch.
     If your screen is unreadable because of current color selections,
        start with the -V switch.
     If HDM doesn't seem to run correctly, check the following:
        Make sure you have only one COMMAND.COM on your hard disk in the
        root directory, and you have a path to it.  Make sure you also
        have a path to the HDM directory and that you start HDM while 
        in its own directory.

     Example of starting HDM from your AUTOEXEC.BAT:   PATH C:\;C:\HDM
                                                       CD\HDM
                                                       HDM -S -V

     ---------------------------------------------------------------------
     HDM IV (tm)  Hard Disk Menu (tm)    Copyright (C) 1986-90 by Jim Hass
     --------------------------------(ASP)--------------------------------

     This is a shareware product.   Though HDM IV is copyrighted,  you are
     encouraged to copy and distribute this program to others. If you like
     this product and find it useful, then please register it.

     REGISTRATION FEES:
     Register a currently used HDM (no disk or manual sent) ......... $ 35
     Get registered copy of HDM IV with printed & bound manual ...... $ 50
     HDM IV Network License (price per network) .................... $ 200
     HDM IV Site License (unlimited copies for one site) ........... $ 600
     HDM IV Corporate License (unlimited copies for one company) .. $ 1200
     extra HDM IV printed and bound user manual (price per manual) .. $ 15
     extra HDM IV diskettes (registered users only) ................. $ 10

     Educational discounts are available for schools, universities, etc.
     Special terms are available for consultants, distributors, & stores.
     ---------------------------------------------------------------------

     With your support, the Hard Disk Menu can continue to be improved and
     expanded.  The product is distributed by satisfied users. Please help
     by giving copies to friends, customers, user groups, your company, or
     by uploading to local bulletin boards.  Thank you for your support.

     Send your comments, suggestions, questions, and registration to:

                                   JIM HASS
                               MICROFOX COMPANY
                                 P.O. BOX 447
                              RICHFIELD, OH, USA
                                  44286-0447

                                ELECTRONIC MAIL
                            COMPUSERVE: 73057,3113 

     ---------------------------------------------------------------------
     |    Member of the Association of Shareware Professionals (ASP)     |
     ---------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0631

     Volume in drive A has no label
     Directory of A:\

    A1       000      1457   4-03-90   3:38p
    CLIPHELP COM     14305   3-28-90  10:51p
    DIAL     DOC      1299   4-19-90   9:01p
    DIAL     EXE     16162   5-17-90   9:19a
    EPSON    EXE     10609   4-24-90   5:58p
    EZT      DOC      5263   3-02-88   4:06p
    EZT      EXE     24534   4-24-90   5:59p
    HDM      000      1389   4-26-90   1:08p
    HDM      999      6318   4-26-90   1:11p
    HDM      BAT        70   2-24-90  11:36a
    HDM      HDR      1094  12-02-89  12:50p
    HDM4     EXE     44653   5-14-90   7:24p
    HDMDOC   EXE     90287   5-15-90   8:23p
    HELP     000      1673   5-05-90   9:14p
    HELP     EXE     28846   5-10-90   9:55p
    HISTORY  DOC     13050   5-15-90   6:04p
    IBMPRO   EXE      8632   4-24-90   5:59p
    INSTALL  BAT       735   3-22-90   4:45p
    INTRO    DOC      6650   4-11-90   2:39p
    INVOICE  DOC      2109   5-15-90   8:04p
    KEY      DOC      4979   4-05-90   2:55p
    KEY      EXE      4696   4-24-90   6:00p
    LIST     DOC       961   4-05-90   3:00p
    LIST     EXE     10845   4-24-90   6:00p
    NECPIN   EXE     12337   4-24-90   6:00p
    NLOCKOFF COM         8   1-02-86
    ORDER    DOC      4962   5-15-90   7:58p
    README   DOC      5220   4-19-90   8:24p
    UPDATE   BAT       784   4-19-90   7:34p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT       575   7-06-90   1:18a
    FILE0631 TXT      2591   7-09-90   6:23p
           32 file(s)     327131 bytes
                           17408 bytes free
