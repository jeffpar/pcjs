---
layout: page
title: "PC-SIG Diskette Library (Disk #702)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0702/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0702"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DANCAD 3D 2 OF 4 (ALSO 701,703,704)"

    DANCAD3D is an excellent and versatile drawing program that lets you do
    very complex things like stereoscopic 3D wire-frame drawing, or very
    simple things like designing letterheads. Draw in two and three
    dimensions. Separate groups of lines into "elements" that can be
    saved, loaded, magnified, rotated, flipped, offset (moved), and used
    over and over again. Keep them as a file on a disk (give them names
    like cube, sphere, and cylinder).
    
    DANCAD3D prints surprisingly sharp, crisp lines on Epson/IBM-compatible
    dot-matrix printers. Use it for many different
    applications, including the following:
    
    ~ Mechanical drawings and technical illustrations
    
    ~ Business forms of many kinds
    
    ~ Page layouts which combine text and drawings
    
    ~ Automatic computer slide shows
    
    ~ Engineering simulation to verify the fit of three-dimensional shapes
    
    DANCAD3D also supports many plotters, PostScript laser printers, and
    image setters such as the Linotronic 300. It works with a mouse, 3-D
    track ball, or cursor keys.
    
    DANCAD3D includes the DANMOVIE program, a full demonstration, and its
    documentation. DANMOVIE is a very useful engineering tool. With it,
    you can program DANCAD3D to make an animated close-up of parts in a
    layout drawing. Use this close-up to confirm the fit of moving parts.
    Produce an animated perspective view of the entire assembly with all of
    the parts in motion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DANCAD3D.DOC

{% raw %}
```

[              D A N C A D  3 D   V E R S I O N   2 . 0              ]   

















                          DANCAD3D.COM  v2.0

                3D CAD CAE Program Brief Documentation


          DANCAD3D, 466 Diamond St., San Francisco, CA  94114

          Copyright (c) 1986, 1987, 1988 by Daniel H. Hudgins
                         All Rights Reserved.


   Read the disclaimer in this *.DOC file before using the program.

    This version of DANCAD3D is dedicated to the thousands of DANCAD3D
users around the world and especially  to  those  that  supported  its
development  with  financial  and  spiritual  support and constructive
criticism and view  points.  And  additionally  to  the  dealers  that
agreed to sell v1.x and gave me the opportunity to build DANCAD3D into
a useful program.




















                                [DOC-1]      

[                         D I S C L A I M E R                        ]   



                              DISCLAIMER

    DANCAD3D,   including  programs,   disks,   and  documentation  is
distributed  as  is,  with no guarantee that it will work correctly in
any or all situations.  This manual may contain errors and  omissions.
In  no  event  will  Daniel  H.  Hudgins  be  liable  for any damages,
including  lost  profits,   lost  savings  or  other   incidental   or
consequential damages arising out of the use or inability to use these
programs  and  or  files,  even  if the Author has been advised of the
possibility of such damages, or for any claim by any other party.  The
program can and will crash resulting in loss of  data  when  operated,
Daniel  H.  Hudgins  shall  not  be held liable or responsible for any
such loss.  Should the program prove defective,  you (the user) assume
the  entire  cost of all necessary repair,  servicing,  or correction.
All offers are subject to  change  or  withdrawal  without  notice  or
notification  of  any  kind.  The use of the program constitutes total
agreement and acceptance of this disclaimer.  If you reside in a local
that has laws that require Daniel H.  Hudgins to bear liability of any
kind you are disallowed use of this or any other  program  written  by
Daniel  H.  Hudgins.  If  you  cannot  accept  the program "as is" and
"where is" and you bought it from Daniel H.  Hudgins  then  return  it
within  30  days in unaltered,  undamaged,  and unused condition for a
refund (less shipping and handling).

    If you find a bug in the program let me know about it so  that  it
can  be  fixed.  I  cannot  read minds through time and space and your
getting mad and not writing does no one any good.  When I release  the
program  it  is  working on my equipment,  if there is a major problem
with it working on yours you will need to tell me about it for  me  to
be able to fix it.























                                [DOC-2]      

[                         D I S C L A I M E R                        ]   



                           TRADE MARK NOTICE

    A number of Trade Marks are mentioned in this manual  and  in  the
programs  and  files  on the accompanying disks.  They belong to there
respective companies and have no  connection  to  DANCAD3D.  They  are
only  mentioned to help you identify the differences between equipment
supplied for use with personal computers and how that affects your use
of DANCAD3D.  Among the Trade Marks mentioned are:

    IBM, CGA, EGA, MDA, 5152, ProPrinter, PC, PC-XT, PC-AT, PC-DOS are
trademarks and or  registered  trademarks  of  International  Business
Machines Corporation.

    MX-80,  LX-80,  HI-80,  Epson  are  trademarks  and  or registered
trademarks of EPSON Corporation.

    Hercules are trademarks and or registered trademarks  of  Hercules
Computer Technology, Inc.

    MicroSoft,  MS-DOS  are trademarks and or registered trademarks of
Microsoft Corporation.

    FastTRAP,  KeyMAP are trademarks and or registered  trademarks  of
MicroSpeed Incorporated.

    Turbo  Pascal  are  trademarks  and  or  registered  trademarks of
Borland International.

    PostScript are trademarks and or registered  trademarks  of  Adobe
Systems Incorporated.

    Linotronic 300 are trademarks  and  or  registered  trademarks  of
Linotype Incorporated.

    LaserWriter Plus are trademarks and or  registered  trademarks  of
Apple Computer Incorporated.

    HP-GL,  HP7470A are trademarks and  or  registered  trademarks  of
Hewiett-Packard Company.

    DANCAD3D,  DANCAD87,  DANMOVIE,  DANGRAPH  are  trademarks  and or
registered trademarks of Daniel H. Hudgins.











                                [DOC-3]      

[              H A R D W A R E    R E Q U I R E M E N T S            ]   



                         MINIMUM REQUIREMENTS

* 100% IBM compatible XT, AT, or PS/2 computer.
* 512K to 640K DOS system memory.
* CGA, EGA, HGC, or Hercules video board.  VGA also works in EGA mode.
* A HardDisk or other drive of 720KB or more.

                         RECOMMENDED EQUIPMENT

* 80286 or 80386 cpu running at 10MHz or faster.
* A voice coil harddisk with an access or 28 ms. or faster.
* A three button mouse or 3D track ball.
* A PostScript compatible laser printer or photo typesetter.

                          PROGRAM DESCRIPTION

    Version 2.x of DANCAD3D is compiled from  nearly  thirty  thousand
lines of Turbo Pascal (tm) Borland, and assembly code.  Because of the
need to use as much of your computers memory for data storage DANCAD3D
makes  great  use  of  overlays.   Overlays  allow  DANCAD3D  to  work
automatically from macro command files.  But since overlays are  on  a
disk  they  take  time to load.  Putting DANCAD3D in a expanded memory
RAM disk makes it work faster.  A harddisk is needed for efficient use
of some commands such as dot page files.  As a minimum  you  need  all
the  files  named DANCAD??.???  on one disk.  It can be run on a 720K,
1.2M, or 1.44M floppy.

Example: C>REM To use INSTALL.BAT put the letter of your harddisk
         C>REM after the command file INSTALL at the prompt with
         C>REM with the "first" disk from the pair of disks in the
         C>REM A: drive of your computer, and follow the prompts.
         C>A:
         A>INSTALL C

         C>REM To install on your harddisk manually.
         C>MD C:\DC20
         C>COPY A:\DANCAD??.???  C:\DC20
         C>COPY A:\*.PRN C:\DC20
         C>COPY A:\*.PLT C:\DC20
         C>COPY A:\*.LZR C:\DC20
         C>COPY A:\*.FON C:\DC20
         C>MD C:\DC20\ALIAS    (the alias files come with the manual)
         C>COPY A:\ALIAS\*.* C:\DC20\ALIAS

         C>REM To install on a high capacity floppy or RAM disk.
         C>COPY B:\DANCAD??.??? A:\
         C>COPY B:\MYPRINTR.PRN A:\    (use the file for your printer)

    There may be some other files you will need to copy from  the  set
of  disks  supplied  with  the  manual  depending  on what you want to
accomplish try  using  the  supplied  INSTALL.BAT  on  the  disks  for
DANCAD3D disks A, B and for DANCAD87 disks C, D.

                                [DOC-4]      

[              H A R D W A R E    R E Q U I R E M E N T S            ]   



    DANCAD3D works with the CGA (Color Graphics Adapter) (tm) IBM Co.,
the  EGA  (Enhanced  Graphics Adapter) (tm) IBM Co.,  and the Hercules
(tm) Hercules Inc.  video board.  You can install DANCAD3D to  run  as
follows  by  renaming the configuration file (when you run the program
for the first time it makes the file up for the type  of  video  board
you  pick,  do  not  erase  your configuration file since it holds the
names of your alias files and the boot  up  default  drawing  settings
along with your printer and plotter type,  pick [C]hange from the main
menu to change or set these).

FILENAME          TEXT       DRAWING SCREEN    PERSPECTIVE SCREEN

DANCAD3D.B&W      MONO       640x200x2         640x200x2 or 320x200x4
DANCAD3D.COL      COLOR      640x200x2         640x200x2 or 320x200x4
DANCAD3D.EGA      COLOR      640x350x2         640x350x2 or 640x350x16
DANCAD3D.HGA      MONO       720x348x2         720x348x2

    If you have an multimode video board you should set the video mode
you wish to use before you run DANCAD3D.  You should also  rename  the
configuration file to the selected mode.

Example:  C>SETMODE C80 (use whatever program name came with your board)
          C>RENAME DANCAD3D.EGA DANCAD3D.COL
          C>DANCAD3D

    You  might want to do the above in order to make color pixel files
for DANCAD3D since DANMOVIE can only run color with the 320x200x4 mode
since the EGA color pixel files would  be  to  large  (112000  bytes).
SETMODE would be the name of the program that came with your board and
C80 the instruction to set the mode to CGA color 80 column mode.

    You  should  have more than 384K of system memory free in order to
run DANCAD3D.  For more complex drawings you will need as much or your
640K system memory free as possible.  Use the DOS  utility  CHKDSK  to
check the amount of free memory available on your system.

Example: C>C:\DOS\CHKDSK

    If  you  have  a  1MB 80286 computer and it reads less then 655360
bytes total you should check the  manual  about  how  to  install  the
computer  for  640K  of system memory.  You will probably have to take
the cover off and set the memory jumper to the 640K position, then run
setup and tell it you have 640K of system memory and  0K  of  expanded
memory  (or  the  amount  of  expanded  memory less that on the mother
board).

    DANCAD3D will print at high quality on most currently manufactured
printers.  It will work with 8 pin and some 24 pin printers that  have
a  240  dot  per  inch mode.  It will work with line feeds of 1/216 or
1/180 inch and also with 1/144 or 1/72.  Provision has  been  made  to
print  on  120  dot  per inch printers as well.  A maximum of 1920 dot
columns is supported.  The codes for the major brands of printers  are

                                [DOC-5]      

[              H A R D W A R E    R E Q U I R E M E N T S            ]   


supplied  with  the  set  of  disks.  You  can  also install some non-
standard types of printers with a built in utility ([H] [D]  [I]  from
the  main  menu).  Some  printers  are very slow when printing at this
high resolution.  Also the speed of your computer can affect the speed
of print out.  A page that takes 2 hours to print on a 4.77  MHz  8088
computer  and  slow  printer can print in about 15 minutes on a 25 MHz
80386 80387 computer and fast printer with a large buffer.

    DANCAD3D v2.x supports most plotters.  It  can  drive  up  to  127
plotter  pens.  You  can  drive any port or send the plotter data to a
disk file for spooling later while you draw some more  drawings.  Most
plotters use a ASCII text type of data format so the DOS spooler PRINT
should work if your plotter will accept a form feed, ASCII 12.

    If you have a laser printer that supports Adobe's PostScript  (tm)
Adobe Systems Inc.  you can plot out on it with good quality.  If your
laser printer does not support PostScript (tm) but can emulate one  of
the  quality  240 dot per inch dot matrix printers you can use it with
DANCAD3D's DOT_PRINTER command.  Your local desk top publishing center
may have a Linotronic 300 typesetter  by  Linotype.  You  can  install
DANCAD3D's laser printer PostScript plotter driver to output to a file
rather  than a port and take that file on disk down to your local desk
top publishing center to print it out.  If their Linotronic  300  (tm)
or  LaserWriter  Plus  (tm) are on the COM1 port of their PC,  all you
have to do is put the disk with your PostScript  plotted  file  on  it
into  their  A:  drive  and enter COPY A:*.OUT COM1 (where you entered
PAGE1.OUT, or PAGE2.OUT, ... when you changed the plotter port) at the
DOS prompt and presto fabulous quality for $0.38  a  page!  Press  [H]
[P]  [I]  from  DANCAD3D's main menu and change the port to a filename
like A:PS.OUT of the PostScript laser printer driver  ADOBE-PS.LZR  so
that  all  you  have to do is put a blank formatted disk into drive A:
and hit the spacebar to make  your  PostScript  files  when  you  have
pressed [H] [L] from the main menu.

    DANCAD3D  v2.x  supports  the  MicroSoft  (tm)   MicroSoft   Corp.
compatible  mice  and the FastTRAP (tm) MicroSpeed Inc.  3D trackball.
Be sure to run the driver that came with your  device  before  running
DANCAD3D.  You  may also need to run the DOS MODE command to setup the
serial port for the mouse driver.  Read the book that  came  with  the
mouse.  You can move the drawing cursor,  mark, draw lines, and redraw
the screen by moving the device and pressing its  buttons.  Note  that
some  older  versions of the mouse drivers supplied with the mice have
bugs that will crash your programs,  therefore you should contact  the
company  you  bought  the  device  from  to obtain their latest driver
software.  If the program crashes when you  enter  the  drawing  part,
then try editing your AUTOEXEC.BAT and CONFIG.SYS files to not install
the  mouse  driver and see if you can draw that way.  Let me know what
type of mouse you are using and when you bought it if you are having a
problem.

    Some of the commands in version 2.x require a fast  computer.  The
PC's  meter  at  the  bottom  of the main menu tells you how fast your
computer is compared to a 4.77 MHz 8088 type computer.  This number is

                                [DOC-6]      

[              H A R D W A R E    R E Q U I R E M E N T S            ]   


very approximate since the speed of your disk  has  a  big  impact  on
DANCAD3D  performance.  To  use the drawing drag command your computer
should read at least 7 PC's for instance.  The 80x87 will  affect  the
PC  reading  since it affects the speed of DANCAD3D's through put.  If
you have an 8088 type computer you should consider buying a  80286  or
80386 accelerator card, some 80286 boards sell for less than $250.

    The  speed  gain  from  using the 80x87 version of DANCAD3D varies
greatly.  On computers with zero wait  memory  the  speed  improvement
will be less.  Also the improvement seems less on 80286 computers than
8088  computers.  You should try both versions if you have the chip in
your computer and see which one works faster for the kind of work  you
do.  If  you are making a decision as to buy the 8087 or an 80286 card
I would buy the 80286 card since it will speed up all the software and
not just the floating point math.  If the money  is  there  buy  both.
With  a  good 10MHz 80286 card and 80287 installed the PC meter should
read higher than 8.

    If you use complex macro programs with many variables, sub-macros,
and temporary files you will need something faster  than  a  harddisk.
Also  that  type  of  programming will cause the harddisk to "thrash",
that is constantly move the head  between  the  FAT  (file  allocation
table)  and  where the data is filed on the disk.  While this may work
it certainly tests your harddisk's reliability.  If you have  room  in
your 640K for a small RAM disk (e.g.,  64K) you can keep the variables
in it.  If you cannot spare the memory you will need a expanded memory
RAM disk above your 640K.  2M to 3M  should  be  enough  to  hold  the
DANCAD3D  program,  the  macros  and  variables.  Be  sure to read the
manual for your expanded memory board and set it  up  for  a  big  RAM
disk.  If  you are going to buy one be sure it has a 16 bit bus if you
have an 80286 and comes with the proper software to make a  2  or  3MB
RAM  disk.  Use  a  DOS  batch  file to copy all the files you will be
using from your harddisk to your RAM disk.

Example: REM DOS BATCHFILE TO LOAD RAM DISK
         COPY C:\DC2\DANCAD3D.??? D:
         COPY C:\DC2\*.MAC D:
         D:
         D:DANCAD3D

    Because DANCAD3D makes very heavy use of the harddisk I  recommend
that you use a HARDDISK OPTIMIZING PROGRAM to reshuffle the fragmented
files  so  they are accessed faster.  DANCAD3D runs faster in the root
directory of your harddisk.  Some harddisk optimizing programs let you
locate a  particular  program  close  to  the  FAT.  Doing  this  with
DANCAD3D  will  also  help  speed  it up.  I optimize my harddisk four
times a week.  You should also use the DOS  BACKUP  command  at  least
once  a  day  to keep your data safe (use the add only files that have
changed option).  You can also backup all the files from your harddisk
and then reformat it and restore the files,  this will  speed  up  the
file access until the files become fragmented again.

    In your DOS CONFIG.SYS file you should have two commands that tell

                                [DOC-7]      

[              H A R D W A R E    R E Q U I R E M E N T S            ]   


DOS  how  much  memory  it  can  take  for  its own use.  When running
DANCAD3D these should be set to:  FILES=20 (for  nested  macros),  and
BUFFERS=20  (to  reduce drive head movement).  If you need more memory
you can set fewer buffers,  BUFFERS=2.  Using fewer  buffers  and  not
using any memory resident programs will increase the maximum number of
frames DANMOVIE 2.x can load.

    The  maximum  speed  of DANMOVIE v2.x can be affected by the video
board you buy.  Many of the multimode EGA (tm) IBM Co. type boards are
slower than the plain Hercules (tm) Hercules Inc.  type  boards.  This
also  shows up in the text display in DANCAD3D's graphics modes making
the drawing menus come up slower with some EGA boards.










































                                [DOC-8]      

[                D I S T R I B U T I O N   S C H E M E               ]   



    DANCAD3D  is  distributed as a user supported program.  That means
that people can write to me an ask permission to sell  the  two  disks
with  DANCAD3D.COM  and  it's overlays on them.  These people normally
sell disks at swap meets and shows for $0.99 to $6.00.  They also sell
through the mail by  running  adds  in  magazines.  I  get  absolutely
nothing  from  them  and  they make what they can.  Since DANCAD3D was
released the dealers have sold world wide about 40000 to 80000  copies
of DANCAD3D and have made about $125000 to $375000 for themselves.

    Originally I asked for $10.00 donation from each user.  I only got
a  few letters from v1.1 users.  I worked day and night to improve the
program and released v1.3.  The response  improved  but  most  letters
were from people that could not use the program or needed support.

    To avoid going out of business I have decided to  not  ask  people
for  donations.  Since I can only expect to make sales I am offering a
through bound manual with tutorial and a useful  set  of  disks  along
with  the  80x87 version of DANCAD3D and DANMOVIE v2.x as incentive to
place orders.  All of the materials are  copyrighted  and  the  disks,
DANMOVIE  2.x  and  80x87 version of DANCAD3D (DANCAD87) are available
from myself at the address in the program's order form.

    Version  2.x  of  DANCAD3D  is an incredibly powerful program.  To
help more people learn about DANCAD3D's existence I ask  you  to  give
copies  of  only  the  two DANCAD3D.COM share-able disks to your local
users group, upload it to your local bulletin board, and pass it on to
your friends.

    Please respect the thousands of hours of my time  that  have  gone
into  writing the programs,  examples and documentation by not coping,
renting or selling the disks and manual I ask  payment  for.  Quantity
discounts are available from me for companies with multiple users.





















                                [DOC-9]      

[       H O W   T O   G E T   S U P P O R T   A N D   H E L P        ]   



    If after reading the manual you are unable  to  make  DANCAD3D  do
something  I  say  that  it should do and you ordered the set of disks
from me you may write for help.  If you wish to speak on the telephone
and want me to call you collect then send me your phone number and the
time I should call.  It is ok to  have  me  call  you  on  nights  and
weekends.  Say  that you want to be called collect in your letter.  If
you have ordered the disks and are  having  trouble  getting  DANCAD3D
v2.x to work with your printer or plotter then send me its codes and I
will try to install it for you.

    If you did not order the disks from me yet, then you should send a
few  dollars  to  get an answer letter about how to get DANCAD3D to do
something you want it to.  This covers my time to  answer  the  letter
and covers the cost of anything I may need to send.

    If  your  are  reporting a bug or sending printer or plotter codes
for equipment drivers not supplied on the current set of disks I  will
reply  to  your  letter.  Send  a $1.00 or some self addressed stamped
envelopes to receive mailings of information on major up-dates.

    If you live outside of the USA and want to send me postage so that
I can send you a reply or return something you have sent to me then go
to your post office and ask for an international postal voucher that I
can redeem for the required postage at my post office and send  it  in
your letter or package to me.

    I  always enjoy seeing what users are doing with DANCAD3D.  Please
send examples of your drawings,  files,  or macros.  If you would like
to share you work with other users say so in your letter.  Seeing what
you  are  doing  helps me to know what new commands are needed and how
improve the explanations in this manual.  Use the submission  form  in
the latter portion of the manual.

    I need your comments on DANCAD3D, DANMOVIE, the example macros and
other  files  on  the  set of disks.  If I am going to make DANCAD3D a
successful user supported program it will have to be genuinely  useful
in  your  work.  As  a professional only you can tell me what features
that DANCAD3D has help you,  and what about it causes you  to  use  it
less than you could.  Sometimes the program can do what you want but I
had  not  thought  of describing how to get it to do it in the manual.
Please write and tell me what you need from my programs.

    I would like to here from every person that  has  bought  or  been
given  a copy of DANCAD3D.  If you are using it tell me how many hours
a week you use it.  If you are not using it tell me why,  and if there
is something that I can do to make the program useful to you.

    If  you  have vector line data files in some other format and want
me to add a program that can convert them to a DANCAD3D file type to a
DANCAD3D up-date disk then send  me  the  name  of  the  program  that
produced  the file,  a sample file on disk,  a description of the data
format (if you can get it),  and a print out of what the drawing looks

                               [DOC-10]      

[       H O W   T O   G E T   S U P P O R T   A N D   H E L P        ]   


like  from the source program.  I can probably convert ASCII form data
most easily so send that if you can (redirect plotter output from  the
port  to  a disk file if that is all you have).  I will see what I can
do (no promises).  Be sure to let me know exactly what  equipment  you
have  and  what version of what program(s) you are using so I can pass
it on to others.
















































                               [DOC-11]      

[                 Q U I C K   I N T R O D U C T I O N                ]   



    Since  the  disk  space  available on this 2-360k disk set is very
Restrictive I will give  you  the  briefest  description  of  some  of
DANCAD3D's features.  The 300+ page printed manual and 14 disk set are
available  from  the  author  at a fair price and should help you make
DANCAD3D one of your valued tools.

    DANCAD3D draws lines.  The lines can go in any direction in  a  3D
space.  If you want to do 2D drawing just ignore the 3rd dimension and
pick the [F]ront view when you draw.

    The  Help screens should be able to get you started drawing.  From
the main menu press [T] (tutor) to read 10 general  help  screens.  To
draw  select [D] from the main menu.  Select [T] (tutor) from the draw
sub-menu to see 10 help screens about the drawing commands.  The built
in ASCII text editor that is used to  edit  DANCAD3D's  macro  command
files  (actually  powerful  CAD  programs)  has  10 help screens also.
Press [W] (write) from the main menu to enter the  text  editor.  Then
press  the  [Control]  and  [^]  keys at the same time to see the help
screens.  To get out of the editor press ^[K]^[X].

    All the drawing commands are in the menu that is at the right side
of the drawing screen.  Those commands change depending on  what  menu
you are in and what you are doing.  You can select any command you see
in  the  menu  as  long  as the pop-up text window in not covering the
center of the screen.  Look at the menus and read  them.  The  printed
manual describes all the commands in detail.

Q: How do I install my printer?
A:  Look at the files with the *.PRN extension that should be  on  the
second  disk  you  got.  Try  to  pick  the  one  that looks like your
printer's model name.  Then run DANCAD3D and press [C]  (change)  from
the main menu and enter that file name of your printer driver.  If the
there  is no driver that will work on your printer you can install the
printer manually with  [H]  [D]  [I]  from  the  main  menu.  If  that
confuses  you  I  try will do it for you if you send all the necessary
codes when you order the manual and disks.

Q: How do I install my plotter?
A:  Look  at  the files with the *.PLT extension that should be on the
second disk you got.  Try  to  pick  the  one  that  looks  like  your
plotter's  model  name.  Then run DANCAD3D and press [C] (change) from
the main menu and enter that file name ad your plotter driver.  If the
there is no driver that will work on your plotter you can install  the
printer  manually  with  [H]  [P]  [I]  from  the  main menu.  If that
confuses you I will do it for you if you send all the necessary  codes
when  you  order  the  manual and disks.  Be sure that you use the DOS
MODE command to set up your serial port,  if  you  are  using  it,  to
correspond  to  the baud rate that the DIP switches are set to in your
plotter.

Q: How do I spool a PostScript (tm) file to disk so I can take it down
to my local desk top publishing center to print it out?

                               [DOC-12]      

[                 Q U I C K   I N T R O D U C T I O N                ]   


A:  Press  [H]  [P]  [I] and enter ADOBE-PS.LZR as the plotter file to
work on.  Press [Return] until you come to the question about the port
to use.  Enter the name of the file you want the PostScript ASCII data
file to be put in,  e.g.  PS.OUT.  Then press [Return] then [Esc] then
[Y]  to  overwrite the old file.  When you are ready you can press [H]
[L] from the main menu to spool to the designated file.  If  you  want
to  make  several  files remember to change the designated file or use
[F] [R] to rename the last output to a new file  so  it  will  not  be
over-written,  e.g.  [F]iles  [R]ename  PS.OUT  PAGE1.OUT.  If you are
going to put your PostScript files on a floppy disk it is  simpler  to
designate  the laser printers port path as something like A:PS.OUT and
put a blank formatted disk into the A:  drive each time  you  want  to
save a PostScript file.  The drivers LASERPS1.PLT to LASERPS5.PLT give
progressively  heavier  lines.  On  super  resolution devices like the
Linotronic 300 you may want to have heavier lines since the lines will
look thinner than the LaserWriter Plus.

Q: How do I connect a LaserWriter to my PC's serial port?
A: Use a cable that connects the pins as:

PC or XT port 25 pin female  <- to ->  LaserWriter 25 pin male

pin 2 ------------------------------------- pin 3
pin 3 ------------------------------------- pin 2
pin 7 ------------------------------------- pin 7
pin 5 ------------------------------------- pin 20

AT 9 pin serial port female  <- to ->  LaserWriter 25 pin male

pin 2 ------------------------------------- pin 2
pin 3 ------------------------------------- pin 3
pin 5 ------------------------------------- pin 7
pin 6 ------------------------------------- pin 20
pin 8 ------------------------------------- pin 20

Set  the switch on the LaserWriter to 9600 baud and then issue the DOS
command: MODE COM1:9600,n,8,1,p .  Run DANCAD3D, load your drawing and
then select  Hardcopy  Laser  from  the  main  menu  to  plot  on  the
LaserWriter.  This  may also work on other PostScript compatible laser
printers.

Q:  How do I avoid time out problems printing large  drawings  on  the
LaserWriter?
A:  If  your  LaserWriter  is  version 23 or higher and has a ROM made
after April 1986,  switch it to 9600 baud and this in from DOS with it
connected and turned on:

C>COPY CON COM1
serverdict begin 0
  exitserver
25 9600 4 setsccbatch
^Z
1 file(s) copied

                               [DOC-13]      

[                 Q U I C K   I N T R O D U C T I O N                ]   


C>

Press the [Return] key at the end of each line.  The ^Z means hold the
[Control]  key  and  press  [Z].   Wait  one  minute  then  turn   the
LaserWriter  off  and  then  back on.  It will now be set to DTR (Data
Terminal Ready) protocol, to return it to the XON\XOFF protocol do the
same thing but change the 4 to a 0.

Q: How do I run the demo?
A:  Enter RUN_DEMO from DOS.  The file RUN_DEMO.BAT will work  if  you
have copied all the files onto your harddisk.

Q: How do I draw something?
A:  Press  [D]  (draw)  from  the main menu.  After selecting the view
point press [D] again.  With the scale set to 240 the reading  of  the
cursor x y and z will read in inches.  To draw a line press [M]ove and
pick the amount you want the cursor to move each time you press one of
the cursor arrow keys or move the mouse.  Then move the cursor the the
starting  point  for  a line and press the [./Del] key or right mouse-
trackball button.  Then move the cursor to the end point for the  line
segment  and  press the [0/Ins] Key or the left mouse trackball button
to draw and record the line.  You can group  lines  into  elements  by
pressing [B] (begin new element) from the [E]lements drawing sub menu.
Grouping lines makes editing drawings much easier, and is the basis of
DANCAD3D's power and flexibility.

Q: How  do  I control  the amount the drawing cursor moves when I move
the mouse or press the cursor keys?
A: While in the [D]rawing submenu from [D]raw from the main menu press
[M]ove to set the amount of movement.  For instance  if  you  want  to
draw  to  even eights of an inch enter 0.125,  if you want thousandths
enter 0.001.  If you move the  mouse  rapidly  the  cursor  will  move
faster and farther than if you move it slowly.

Q: How can I zoom in for fine drawing?
A: Press the [+] key until the doted border is around what you want to
see then press the [*/PrtSc] button to redraw the screen.

Q: How can I zoom out to see the whole drawing?
A:  Press  [S]cale  and  enter  the  value of the world scale (240) or
somewhat less, then press [*/PrtSc] to redraw the screen.

Q: How can I view my 3D drawing in perspective?
A:  Press [P]review from the main menu and select the perspective  you
want.  You  can  press  the  [+]  and [-] keys to rotate the object by
redrawing the screen with more or less perspective.

Q: How can I print out the drawing I have made?
A:  Press [H] [D] [W] to print out a drawing that is in the workspace.
Add 90 degrees of rotation in the z axis if you want to print  it  out
long-ways  on  the  paper.  Be  sure  that  you  have  installed  your
printer's *.PRN file with [C]hange from the main menu.  Press [H]  [D]
[I]  to  select the port your printer is attached to.  Try the printer

                               [DOC-14]      

[                 Q U I C K   I N T R O D U C T I O N                ]   


driver IBM5152.PRN first if your printer  has  1/126"  line  feed.  If
your printer has 1/180" line feed try LQ-1500.PRN.

Q: How can I plot a drawing of what is in the workspace?
A:  Press  [H]  [P]  [P]  to  plot  a  drawing.  Be sure that you have
installed your plotter's  *.PLT  file  before  you  try  to  plot  the
drawing.  Also  remember that you must set up your COM?  port with the
DOS MODE command before it can be used.  Press [H] [P] [I]  to  select
the port your plotter is attached to.

Q:  How  can  I  PostScript  laser  plot  a  drawing of what is in the
workspace?
A:  Press [H] [L] to laser plot a  drawing.  Be  sure  that  you  have
installed  your  PostScript laser printer's *.LZR or *.PLT file before
you try to laser plot the drawing.  Also remember that you must set up
your COM? port with the DOS MODE command before it can be used.  Press
[H] [P] [I] to select the port your laser printer is attached to.

Q:  How can I save everything so that I can continue  working  on  the
drawing later?
A: Press [F] [S] [E] from the main menu.

Q: How can I load a drawing I saved as a set of elements or one of the
automatic backup on exit files?
A: Press [F] [L] [E] from the main menu.

Q:  How come I have trouble loading a 3D file from a  drawing  I  made
with  v1.xx  into v2.x?
A:  The old 3D-real file is now referred to as  Real-3D,  and  the  3D
refers to the new 3D-Quick file type.  Press [F] [L] [R] from the main
menu  to  load  a  3D  file  that  was drawn with the older version of
DANCAD3D.

Q: What does v2.0 do that v1.xx did not?
A:  v2.0 supports high resolution video modes, mice-trackballs, and is
much easier to draw with.  The macros have many powerful new commands,
conditional  branching  through  the  IF THEN GOTO construct,  and the
automatic evaluation of  expressions  and  equations.  A  new  drawing
feature  called  ALIAS  files lets you build symbol libraries and load
them very rapidly with simple keystroke commands.  An drag feature has
been added to let you visually position elements where you  want  them
if  you are using a fast computer.  The lettering commands now support
a library of font files and a built in font editor lets you make  your
own.  The  instruction manual is illustrated and expanded to over 300+
pages.  The program comes on 14 disks with an example symbol  library,
set of fonts, utility disk, and a math-co-processor version.

Q) I get "snow" in the text editor and some or the other text screens,
is that normal?
A) Some old CGA boards and the cheep CGA clones can have this problem.
I recommend that you buy a Hercules monochrome clone board and a amber
monitor since the text and graphics are much sharper and they  do  not
normally  have  snow  problems.  You should be able to get a board and

                               [DOC-15]      

[                 Q U I C K   I N T R O D U C T I O N                ]   


monitor for less than $120.

Q: If I bought the program from a dealer why do I have to by something
form the author also?
A:  Because the dealer gives the author no part of his profit and  you
can get the rest of the program from the author cheaper than you could
from  the dealer anyway.  If you feel I am being unfair by asking that
I get 1 percent of the money generated by my labor tell me so.

Q: Why does the program crash when I select Draw from the main menu?
A: Three reasons for this have come to my attention:
   1) You have a version of mouse driver software that has  a  bug  in
   it.  Try not loading the mouse driver with your CONFIG.SYS file and
   see  if that helps,  if so then write to your mouse company and ask
   them for an update.
   2) You have a bad spot on your harddisk.  You should  run  the  DOS
   command  CHKDSK  to check out your harddisk.  I have been told that
   reformatting your harddisk with DOS 3.3 can fix this  problem.  You
   should  take your computer back to the shop and have them enter the
   manufactures disk error table and low level  format  your  harddisk
   again  for  you  (many of the clone dealers do not low level format
   the harddisks properly!).
   3)  You  have  a  bug  in  your  BIOS chip,  DMA chip,  or harddisk
   controller.  I recommend updating your  BIOS  chip  to  the  latest
   AWARD  BIOS  when you have your harddisk low level formatted.  Some
   of the cheaper clone BIOS do not work properly with the harddisk.

Q: Why does the program crash before I get to the main menu?
A: Four reasons for this have been reported: 1) You have some resident
   program that displays  something  on  the  screen,  e.g.,  a  clock
   program.  Do not run that program.
   2)  You  picked the wrong video mode for your video board,  or your
   video board is not IBM compatible.  Try reinstalling everything.
   3) You ran a CGA emulation  program.  NEVER  run  a  CGA  emulation
   before running DANCAD3D version 2, it supports Hercules video mode,
   install  it  properly  by selecting H when you run it for the first
   time.
   4) You did not install both  disks  A  and  B  onto  one  drive  or
   Harddisk.  All  the  files  named DANCAD3D.???  must be on the same
   drive.  Run-time error F0 means that one of the Overlay  files  was
   not found!  The overlays are DANCAD3D.001 and so on.













                               [DOC-16]      

[       U P D A T E   F R O M   A N   O L D E R   V E R S I O N      ]   



    Since  so  many copies of the older versions of DANCAD3D have been
sold I am including  this  section.  The  registered  users  got  free
updates  to  v1.x.

    The file formats have been changed to allow line  widths,  colors,
pen  shapes,  and styles.  DANCAD3D v2.0 can read v1.3 3D-real and 2D-
real file types used with v1.30.  DANCAD87 v2.x uses a different  file
type and can only read files the ASCII type of the types DANCAD3D v2.0
can  save.  So  if  you have any old drawings and want to use DANCAD87
you need to make and run some macros (you can  use  the  [F]iles  menu
also).

Run on DANCAD3D v1.3x

    ; v1.30 ASCII to v1.30 REAL
    INIT
    LOAD ASCII V13XFILE.ASC
    # 1 SAVE 3D V13XREAL.3D

Run on DANCAD3D v2.0

    ; v1.30 REAL to v2.0 ASCII
    INIT
    LOAD REAL V13XFILE.3D        ; Note old 3D is now REAL type file
    # 1 SAVE ASCII V20FILE.ASC

Run on DANCAD87 v2.0       (DANCAD87 is available from the author only)

    ; v2.0 ASCII to DANCAD87's 3D 8 byte format
    INIT
    LOAD ASCII V20FILE.ASC
    # 1 SAVE 3D-Quick V2087FIL.3DQ

    If  you  need to swap data between DANCAD3D v2.0 and DANCAD87 v2.0
use the ASCII file type.  If you need to swap  data  between  DANCAD3D
v1.3x and DANCAD3D v2.0 use the 3D-real file type.

    Changes  have  been  made to many of the macro commands.  DANCAD3D
now  supports  variables  and  expressions  as  well  as   conditional
branching by the IF THEN GOTO.

     v1.x command                      v2.x command

     GOTO :LABEL 15                    LOOP :LABEL 15
     GRAPH_MODE                        GRAPH B&W  or  GRAPH COLOR

    The other changes are explained in the new manual.

[                            New Features                            ]

* Runs on Hercules (tm) Hercules Inc. at 720 by 348 resolution.
* Runs on EGA (tm) IBM Inc. at 640 by 350 with 16 colors in the

                               [DOC-17]      

[       U P D A T E   F R O M   A N   O L D E R   V E R S I O N      ]   


  perspective screen.
* Automatically adjusts to the amount of free memory, can run on as
  little as 384K free (590K+ free recommended).
* Supports a mouse or FastTRAP (tm) 3D trackball.
* Supports full programming capability in macro code including standard
  trigonometrical functions.
* Installable printers (files with *.PRN extension) and plotters (files
  with the (*.PLT extension).  Press [C]hange from main menu to install
  one of the files.
* Symbol libraries and ALIAS index files.
* DRAG command to visually position elements.
* Installable fonts and advanced text formatting.
* Page files for drawings of unlimited complexity.
* Improved menus listing all the commands available on screen.
* Supports Adobe's PostScript (tm) for fantastic print quality!

[                        Changing Video Modes                        ]

    When you run DANCAD3D the first time you will be asked to pick the
video  mode.  A  file  will  be  created  with  one  of  the following
extensions.

     *.COL   for color text on CGA.
     *.B&W   for monochrome text on CGA.
     *.EGA   for 640 by 350 EGA resolution.
     *.HGA   for Hercules (tm) type video boards 720 by 348.

    To change modes with an auto-switch video board first set the mode
with the program that came with the board and then  rename  DANCAD3D's
configuration file that correspond to that mode.

e.g.,  C>EGA\SETMODE C80               (whatever you have to set mode)
       C>RENAME DANCAD3D.EGA DANCAD3D.CGA             (match DANCAD3D)
       C>DANCAD3D                                       (run DANCAD3D)

    DANMOVIE  v2.0  that  comes  on  the set of disks supports the new
video modes ad well as up to 34 frames in CGA 4 color mode.

    As  a closing note I would like to thank all the people around the
world that have written to me with suggestions and bug reports.  Their
help and support are the only reason that I have developed DANCAD3D to
its present level.  I hope v2.0 will be useful to you and find a place
among the programs they value and use.











                               [DOC-18]      

```
{% endraw %}

## FILES.DOC

{% raw %}
```
       DANCAD3D, Wire frame, CAD, animation, and drawing program.
  Copyright (c) 1986, 1987, 1988 by Daniel H. Hudgins, All Rights Reserved
File Directory of DANCAD3D v2.0 disk set, two 360KB disks or one 720KB disk.

DANCAD3D COM Main program & code editor with help screens.
DANCAD3D 0?? Overlay files.
DANCAD3D 914 Data file.
DANCAD3D MSG Message file.
DANCAD3D FON Supplied calligraphy font file.
???????? PRN Printer driver files for many types of printers.
???????? PLT Plotter driver files for many types of plotters.
ADOBE-PS LZR Adobe PostScript (tm) laser printer driver.

DEMO-SUB MAC DANCAD3D Macro file. 
DEMOMAIN MAC Demo program written with DANCAD3D's commands.
RUN_DEMO BAT Runs demo after everything is installed
README   BAT Help for first time user.
INSTALL  BAT Installs DANCAD3D on users harddisk.
DANCAD3D DOC Brief documentation file and setup information for DANCAD3D.
FILES    DOC One line file description.
```
{% endraw %}

## FILES702.TXT

{% raw %}
```
Disk No   702
Program Title: DANCAD3D version 2.0E (Disk 2 of 4)
PC-SIG version 2.3
 
DANCAD3D lets you do complex tasks like stereoscopic 3D wire-frame
animation or simple things like a letterhead.  It lets you draw with
lines that can be in a plane, like drawing on a piece of paper (2D
drawing), and can go any direction in space (3D drawing).
Three-dimensional drawings made of lines are called wire-frame drawings.
You can separate groups of lines into "elements" that can be saved,
loaded, magnified, rotated, flipped, offset (moved), and used over and
over again, by keeping them as a file on a disk (give them names like
cube, sphere, and cylinder).
 
DANCAD3D prints out very sharp lines and is useful for line drawings,
mechanical drawings, technical illustrations, wire-frame animation,
engineering simulation to verify the fit of three-dimensional shapes,
business forms, page-layouts combining text and drawings, and automatic
computer slide-shows.
 
Usage:  Graphics
 
Special Requirements:  512K memory and a hard drive.
 
How to Start:  Type INSTALL (press enter).
 
Suggested Registration:  $35.00
 
File Descriptions:
 
DANCAD3D COM Main program & code editor with help screens.
DANCAD3D 0?? Overlay files (23 files).
DANCAD3D 914 Data file.
DANCAD3D MSG Message file.
DANCAD3D FON Supplied calligraphy font file.
???????? PRN Printer driver files for many types of printers (13 files).
???????? PLT Plotter driver files for many types of plotters (20 files).
ADOBE-PS LZR Adobe PostScript (tm) laser printer driver.
DEMO-SUB MAC DANCAD3D Macro file.
DEMOMAIN MAC Demo program written with DANCAD3D's commands.
RUN_DEMO BAT Runs demo after everything is installed
README   BAT Help for first time user.
INSTALL  BAT Installs DANCAD3D on users harddisk.
DANCAD3D DOC Brief documentation file and setup information for DANCAD3D.
FILES    DOC One line file description.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## PCSIG.TXT

{% raw %}
```
                           PC-SIG DISK # 701 & # 702

       DANCAD3D, Wire frame, CAD, animation, and drawing program.
  Copyright (c) 1986, 1987, 1988 by Daniel H. Hudgins, All Rights Reserved
File Directory of DANCAD3D v2.0 disk set, two 360KB disks or one 720KB disk.

NEEDS: * 100% IBM XT, AT, PS/2 like computer.
       * 512K or more DOS memory.
       * A HardDisk or 2MB RAM disk.
       * CGA, EGA, HGC, or Hercules (tm) video board.

DANCAD3D COM Main program & code editor with help screens.
DANCAD3D 0?? Overlay files.
DANCAD3D 914 Data file.
DANCAD3D MSG Message file.
DANCAD3D FON Supplied calligraphy font file, others come with the manual.

???????? PRN Printer driver files for many types of printers.
             Try IBM5152.PRN if your printer has 1/216" linefeed.
             Try LQ-1500.PRN if your printer has 1/180" linefeed.
             Try STARG15X.PRN if your star printer has 1/144" linefeed.
             Try MX-80.PRN if your printer has only 120 dpi mode.
???????? PLT Plotter driver files for many types of plotters.
             Try HPGL.PLT if your ploter is HP code type.
ADOBE-PS LZR Adobe PostScript (tm) laser printer driver.
             You need a PostScript (tm) adaptor if you have a LaserJet (tm).
             Works on LinoTronic 300 (tm) great!

DEMO-SUB MAC DANCAD3D Macro file. 
DEMOMAIN MAC Demo program written with DANCAD3D's commands.
RUN_DEMO BAT Runs demo after everything is installed
README   BAT Help for first time user.
INSTALL  BAT Installs DANCAD3D on users harddisk.
DANCAD3D DOC Brief documentation file and setup information for DANCAD3D.
FILES    DOC One line file description.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0702

     Volume in drive A has no label
     Directory of A:\

    ADOBE-PS LZR       829  12-18-87   5:09p
    AMPLOTII PLT       604   9-16-87   9:23p
    BASIC    PLT       742   9-16-87   9:25p
    COMREX   PLT       349   4-26-88   1:27p
    CPA-80   PRN       240   9-18-87   8:48p
    DANCAD3D 027      4096   8-27-88  11:23a
    DANCAD3D 028      5120   8-27-88  11:23a
    DANCAD3D 029      1280   8-27-88  11:23a
    DANCAD3D 030     38912   8-27-88  11:25a
    DANCAD3D 031      4608   8-27-88  11:24a
    DANCAD3D 032      5120   8-27-88  11:23a
    DANCAD3D 033      4352   8-27-88  11:24a
    DANCAD3D 034     13312   8-27-88  11:24a
    DANCAD3D 035      5632   8-27-88  11:24a
    DANCAD3D 036      5120   8-27-88  11:24a
    DANCAD3D 037      3072   8-27-88  11:24a
    DANCAD3D 038       512   8-27-88  11:24a
    DANCAD3D 039      5120   8-27-88  11:24a
    DANCAD3D 040      1536   8-27-88  11:24a
    DANCAD3D 041     55552   8-27-88  11:24a
    DANCAD3D 042      2048   8-27-88  11:24a
    DANCAD3D 043      4864   8-27-88  11:24a
    DANCAD3D 044      5376   8-27-88  11:24a
    DANCAD3D 045     15616   8-27-88  11:25a
    DANCAD3D 046      3840   8-27-88  11:25a
    DANCAD3D 047      2560   8-27-88  11:25a
    DANCAD3D 048      3584   8-27-88  11:25a
    DANCAD3D 049     18688   8-27-88  11:25a
    DANCAD3D 914      3584  11-21-84   3:49a
    DANCAD3D DOC     42513   8-27-88   4:33p
    DANCAD3D FON     22277   8-11-87  12:51p
    DANCAD3D MSG      1589   4-17-86   8:41p
    DEMO-SUB MAC      1053  12-01-87   1:34p
    DEMOMAIN MAC     12409  12-02-87  10:55p
    DXF      PLT      1156  10-02-87  12:33a
    DXY-101  PLT       594   9-16-87   9:22p
    DXY-800  PLT       584   9-16-87   9:22p
    FILES    DOC       955   1-01-88   8:44p
    FIRST    LZR      1029  12-18-87   3:33p
    FP-215   PLT       329   3-07-88   5:52p
    FX286E13 PRN       230  12-12-87   3:33p
    FX286E8  PRN       491  10-19-87  10:50p
    HI-80    PLT       609   9-16-87   9:23p
    HP7470A  PLT       449   2-29-88   9:12p
    HP7470AF PLT       685   9-16-87   9:24p
    HPGL     PLT       773   9-16-87   9:23p
    IBM5152  PRN       255  12-16-87   1:03a
    INSTALL  BAT      2405  12-31-87   9:35p
    IP-500   PLT       424   8-20-88   9:28p
    KXP1091I PRN       496   9-16-87   9:28p
    LASERPS1 PLT       829  12-10-87   3:24p
    LASERPS2 PLT       829  12-10-87   3:30p
    LASERPS3 PLT       829  12-10-87   3:31p
    LASERPS4 PLT       834  12-10-87   3:32p
    LASERPS5 PLT       834  12-10-87   3:34p
    LAST     LZR       714  12-18-87   3:37p
    LINOTYPE PLT       829  12-10-87   3:22p
    LQ-1500  PRN       496   9-16-87   9:30p
    LQ-1500W PRN       220  12-12-87   3:21p
    MIDDLE   LZR       694  12-18-87   3:35p
    MX-80    PRN       501   9-16-87   9:28p
    NEC-P6   PRN       496   9-16-87   9:30p
    PASCAL   PLT       752   9-16-87   9:25p
    PCSIG    TXT      1682   9-02-88   2:44p
    PROPRINT PRN       491   9-16-87   9:27p
    README   BAT      2825   1-01-88   8:46p
    RUN_DEMO BAT       190  11-26-87   4:50p
    SCM-D200 PRN       461  11-06-87   2:52p
    SP1200AI PRN       258   2-21-88  11:56a
    STARG15X PRN       461   9-16-87   9:27p
    SWEET-P  PLT       349   4-26-88   1:27p
    FILES702 TXT      2040  10-06-88   1:46p
    GO       BAT        38   2-10-88   8:53a
    GO       TXT       617   2-10-88   9:23a
           74 file(s)     325842 bytes
                            3072 bytes free
