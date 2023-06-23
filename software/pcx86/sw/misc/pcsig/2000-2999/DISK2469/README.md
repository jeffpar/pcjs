---
layout: page
title: "PC-SIG Diskette Library (Disk #2469)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2469/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2469"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AWESOME MENUS (EGA)"

    AWESOME MENUS lets to start 20 of your favorite programs from a set of
    "Windows-like" set of pull-down menus.  To add your favorite program
    to the menus, simply enter the title of the program, the exact name of
    the program file, and the path to the file.  It's just that easy.
    
    Another unique feature of this program is that it was made specifically
    for computer with EGA displays.  This allows AWESOME MENUS to display a
    high quality digitized picture in the background of the pull-down
    menus. Choose your programs as you look at an astronaut on the moon, an
    elephant, a warrior, or a number of other pictures.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AWESM.DOC

{% raw %}
```
Awesome  Menus is a desk top menu program that allows you to
access  programs,  applications,  and  DOS  commands through
pull-down  menus.  The  program,  designed  for  hard  drive
users,  is extremely  easy to use,  making it  an ideal menu
program for personal, corporate, or scholastic use.

The  most unique feature about Awesome Menus is the programs
use  of  digitized  images.   The  user  can  choose  from 7
digitized  images  to  be  used as  the  back  drop  for the
program.

I.  Program Description

Awesome  Menus  utilizes a  pull-down  menu system  which is
composed  of three parts:   the command  bar, the menus, and
the back drop.  The command bar shows the names of the menus
that make up the Awesome Menus system.  To select one of the
menus  shown on the  command bar, enter  the first letter of
the  menu name.  (Notice that  the first letter of each name
is  shown in red.)  Once a  menu is open, the arrow keys are
used to move through the menu.  Notice that as you move, the
various  menu items are highlighted in red.  A menu item can
be  selected by  highlighting the  desired name  and hitting
return.

A description of each of the menus is presented below.

EDIT -
This  menu contains functions that allow you to make changes
to  the titles and commands listed under the File Menu.  The
menu  contains  three functions  and  a help  screen.   Each
function is described below.

  Edit  Menu - This function  allows you  to  edit  existing
names  and  commands listed  under  the File  Menu.   Names,
extension,  and paths  for applications already  in the File
Menu  can  all  be  changed.   See  Section  III,  Edit Menu
Example, for more details.

  Add  Title   -  This  function  allows   you  to  add   an
application  or DOS command to the  File Menu.  A maximum of
20  applications and/or commands  can be stored  in the File
Menu.  See Section III, Add Title Example, for more details.

  Delete  Title   -  This  function  allows  you  to  remove
applications  and  commands from  the File  Menu.   When you
select  this  function,  the  File  Menu  will automatically
appear.  Use the arrow keys to move to the title you want to
delete  and hit return.   The application, command, and path
are all removed from the menu system.

 VIEW -
This  menu allows you to select  the back drop  for the menu
program.   When you select this menu, 7 names of various EGA
images will  be shown in  the menu.   Use  the arrow keys to
select the desired image and hit return.

 FILE -
This  menu  displays  all  of  the  applications and/or  DOS
commands  you have entered  into your menu  system.  Use the
arrow  keys to select the application or command you want to
invoke  and hit  return.   The application  selected will be
executed  and  when you  quit the  application, you  will be
returned to Awesome Menus.

 QUIT -
This option allows you to exit directly to DOS.

 INFO -
This  menu contains registration  information and an amazing
offer from Io Research.

II. Installation

To  install  Awesome  Menus,  simply  run  the  installation
program   by  typing  AMINST  at  A:>.   The  Awesome  Menus
installation program will automatically  create  a directory
titled   AWESOME  on  your  hard  drive  and  will  add  the
appropriate  names and paths  to your AUTOEXEC.BAT file.  To
avoid confusing your computer,you should remove any existing
menu program commands from your AUTOEXEC.BAT file.

If  you would like to install Awesome Menus yourself, follow
the steps shown below:

1.  Create a directory titled AWESOME on your hard disk.

2.  Copy all of the files supplied to this directory.

3. Insert  the  command  C:\AWESOME\AWESM.EXE  as  the  last
command  in your AUTOEXEC.BAT file.  This will cause Awesome
Menus  to be started every time you start your computer.  If
your  hard drive is  not C:, insert  the  appropriate  drive
letter in the above command.

With  certain  hardware  and  software  configurations,  the
Awesome  Menu installation program may not execute as it was
designed  to.  If this occurs,  you will receive one or more
error   messages   from  the  program.   To  insure   proper
installation, complete the three installation steps outlined
above.

NOTE:   The delivered copy of Awesome Menus contains several
examples  of applications and DOS commands in the File Menu.
These  are only examples  and will probably  not run on your
system.  Use the functions under the Edit menu to enter your
own applications and commands into the system.

III. Examples

This  section contains  examples of  how to  use the Awesome
Menu  system.   These examples  assume a  basic knowledge of
paths and directories.

Add Title Example -
To add an application to your menu system,  you will need to
remember  two  things  about  the  application:  the  actual
program name,  and the  complete  path  to the application.
For example:

   Actual Program Name : PBRUSH.EXE
   Complete Path : C:\ART\PAINT

The  above info  might be for  a paint program.   The actual
program name is "PBRUSH.EXE".  The program is located in the
subdirectory  "PAINT"  in the  directory  "ART" on  the "C:"
disk.

To  add this application, select EDIT by pressing the letter
"E".   Move to  "Add Title" and  hit return.   The file menu
will  automatically   appear  and   the  title   "NEW  NAME"
will  be shown  as the  last  entry.   Move   to  "NEW NAME"
and hit return.  The title  will  be  cleared  automatically
and  you can now enter the title  of the program you want to
add.  This entry is not the actual program name, just a user
selected  title.   After you  have typed  in the  title, hit
return.   Another menu  will appear asking  you to enter the
actual name of the program.  In this example, you would type
the  name PBRUSH.EXE and hit return.  The menu will then ask
for  the complete path to the application.  In this example,
you  would then enter C:\ART\PAINT and hit return.  The menu
addition  will then  be stored by  the program.   Thats' all
there is to it.

Edit Menu Example -
Lets' say you want to change the title, program name, or path
of  an application that is displayed  in the File Menu.  You
can  do this by  selecting Edit (Press  "E"), moving down to
Edit   Menu,  and  hitting  return.   The  file   menu  will
automatically  appear.   Use the arrow  keys to  move to the
title you wish to change and hit return.  At this point, the
procedure  for entering the title,  program name and path is
the  same as that described in  the previous example.  Refer
to the previous example for details of each step.

Entering a DOS Command Example -
A  DOS command could  have just as easily  been added to the
menu  system as the application was in Example I.  Lets' say
you wanted to add the "Format A:" command to your File Menu.
You would use the same procedure as in Example I, except you
would  enter  the  DOS  command "Format  A:"  as  the actual
program  name.   The complete  path to  the "Format  A:" DOS
command would then be entered at the next prompt.

Tips on Awesome Menu Use -

*   Make a backup copy of  Awesome Menus and read all of the
documentation provided.

*   Never delete all of your applications.  You will have to
re-install the program from the original disk if you do.

* Up to  20  commands and  applications  can be stored in
Awesome Menus.

*   All  of the original  files supplied on  the floppy disk
must reside in the AWESOME directory.
  
*   To avoid  confusing your computer, remove other desk top
menu programs from your system.
  
*   This   program  is  not  copy  protected.   Io  Research
encourages you to give copies to your friends.  (However, no
fee  of any kind may be charged for this program without the
written consent of Io Research.)
  
* If  you  find  Awesome   Menus  useful,  don't  forget  to
register.   (Even  if your copy  of Awesome Menus  is a 17th
generation bootleg copy, YOUR REGISTRATION WILL BE HONORED.)
The  Io Research registration offer is truly incredible (see
Info Menu).
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2469

     Volume in drive A has no label
     Directory of A:\

    AWESM    DAT       122   6-04-90   3:53p
    AWESM    PAR        28   6-11-90   2:40p
    AWESM    TIL        78   6-04-90   3:53p
    AWESM1   BAT        28   6-04-90   4:20p
    BEAGLE   IMG     32775   5-30-90   5:00p
    ELEPHANT IMG     32775   5-28-90  10:14a
    MACHV    IMG     32775   5-28-90  10:15a
    MANKIND  IMG     32775   5-24-90   4:06p
    STRIP    IMG     32775   5-23-90   3:19p
    VIXEN    IMG     32775   5-30-90   4:59p
    WARRIOR  IMG     32775   5-23-90   4:09p
    AMINST   EXE     43150   5-31-90   4:21p
    AWESM    EXE     66374   6-02-90   2:12p
    AWESM    DOC      8195   6-04-90   3:49p
    READ     ME       1809   6-03-90   7:26a
           15 file(s)     349209 bytes
                               0 bytes free
