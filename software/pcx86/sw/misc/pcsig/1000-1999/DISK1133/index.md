---
layout: page
title: "PC-SIG Diskette Library (Disk #1133)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1133/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1133"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORLD GENERATOR"

    WORLD GENERATOR is a utility for referees of science fiction role-
    playing games such as Traveller(TM) and Space Opera(TM).  It is not a
    game in itself.
    
    It produces detailed descriptions and maps of solar systems and planets
    in three-dimensional space sectors, with data on lifeforms, atmosphere,
    geology, etc.  You can quickly generate, store, and edit designs for
    individual planets and entire solar systems.  Each sector of the
    universe can have up to 100 solar systems and each solar system is
    allocated a star and up to 17 planets, asteroid belts, dust clouds, or
    secondary stars.
    
    WORLD GENERATOR is menu-driven and provides on-line help displays as
    well as a tutorial and a rolling demonstration to help you get started.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1133.TXT

{% raw %}
```
Disk No: 1133                                                           
Disk Title: World Generator                                             
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: World Generator                                          
Author Version: 1.3                                                     
Author Registration: $10.00                                             
Special Requirements: CGA.                                              
                                                                        
WORLD GENERATOR is a solar system making utility for science            
fiction and role-playing games.                                         
                                                                        
It produces solar systems in which each player takes on the persona of a
human or alien of the far future, in a universe controlled by a referee.
WORLD GENERATOR is similar to Dungeons and Dragons with spaceships.  You
can quickly generate, store, and edit designs for individual planets and
entire solar systems.  WORLD GENERATOR also produces maps of planets.   
                                                                        
WORLD GENERATOR is menu-driven and provides on-line help displays as    
well as a tutorial and a rolling demonstration to help you get started. 
Each sector of the universe can have up to 100 solar systems and each   
solar system is allocated a star and up to 17 planets, asteroid belts,  
dust clouds, or secondary stars.                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WGINS1.TXT

{% raw %}
```
This program produces solar systems for science fiction role playing games. It
is not based on the rules of any one game.  Options allow generation, storage,
and retrieval of stellar sectors, solar systems,  and worlds.  Sector maps are
three-dimensional. The program disk should contain the following files;
              WORLDGEN.EXE #    The main program
            [WORLDGEN.PAS] *    Turbo Pascal source code
     [WG1.PAS and WG1.TPU] *    Turbo Pascal Unit for program
      [WG2.INC to WG6.INC] *    Include files for program
              WORLDGEN.DOC      Documentation
                TITLES.TXT #    The opening screen
          SAMPLE.SEC & DOC $    A sample space sector and description file
         UNNAMED.SEC & DOC      Another sector
  WGINS1.TXT to WGINS6.TXT #$   Used by this tutorial
                     *.HLP #    On-line help text files - 75 of them!
      WG_CONV.COM [& .PAS] *    File conversion program
  * Source code is supplied to registered users ONLY
  # Files needed on a working disk;  the WGINSn.TXT files can be omitted if
    you don't want to run the tutorial or rolling demonstration again.
  $ Used by rolling demonstration.
```
{% endraw %}

## WGINS2.TXT

{% raw %}
```
Show Sun and planets.
From left to right -
    0 is the sun (a single star)
    1 is an asteroid belt
    2 has a toxic atmosphere
    3 is Earth-like
4 & 5  are airless
6 & 7  are gas giants
8 & 9 are ringed gas giants
   10 is a dust cloud
Note: This program allows a
maximum of eighteen stars &
planets per system.
```
{% endraw %}

## WGINS3.TXT

{% raw %}
```

This  system  is  unusual,  a  close
binary pair.
  The  symbols on the right are also
rare,  indicating (top) a black hole
and (below) a protostar.  All are of
great scientific interest, and their
systems    may    contain   valuable
minerals. Locations are noted in the
statistical  routine.  (Menu  option
"D").  NB: Black holes, Proto-stars,
and Ring Worlds can only be added in
the  editing  phase.   Binaries  can
occur naturally.
```
{% endraw %}

## WGINS4.TXT

{% raw %}
```
Distant binary stars may also form;  in these systems one of  the  planets  is
replaced  by a star.  Their orbits are shown as red arcs,  to distinguish them
from the world types.

The  generation  procedure  (option "G" from  the  main menu)  produces  these
results;  the sort  of data that  could be obtained by long-range observation.
It's  fairly  fast.  If  the  solar  systems  that  are  produced look boring,
run this procedure again until you are satisfied.

Once you have  a sector you like,  choose the "save" option (menu choice "S").
You'll be asked for a file name;  type in a maximum of eight letters, preceded
by the drive letter if you're not using the default drive.  If you don't enter
a name, the program will use the file name "UNNAMED".  Menu option "L" reloads
saved  sectors.  It  also uses the default "UNNAMED" if you don't enter a file
name,  and looks for a documentation  file  with  the  same  first  name  (for
example, SAMPLE.DOC for SAMPLE.SEC). Text files must be no more than 23 lines,
78 columns, eg Sidekick files.

Menu option "V" lets you take a look at your sector, using cursor keys to move
between systems and ENTER to exit. This option still only produces the sort of
data that might be obtained by long-range observation.
```
{% endraw %}

## WGINS5.TXT

{% raw %}
```
Use option "Z" to generate details of a solar system.  The procedure is fairly
slow.  First  select  the sytem,  by cursor keys or entering coordinates.  The
screen has several areas;
           ╔════════════════════════════════════════════════╗
           ║ Symbol map of solar system (as first maps)     ║
           ╠═══════════════╦╦═══════════════════════════════╣
           ║ belt thickness║║ Map of planetary surface or   ║
           ║ or axial tilt ║║ diagram of star / star pair / ║
           ║ (& moons)     ║║ asteroid belt / giant & moons ║
           ╠═══════════════╬╬═══════════════════════════════╣
           ║ Plan of orbit ║║ Data (format varies with      ║
           ║ eccentricity  ║║ details of star or planet)    ║
           ╚═══════════════╝╚═══════════════════════════════╝
   If life is present, cities or colonies are shown as square markers;
Green = Human colony    Red = Alien colony  Yellow = native colony or city.
  Next we'll demonstrate detailed solar system generation, after
  a quick look at a map of the entire system (not to scale).
* To skip this section, press "S". To continue, press another key.
* To stop the demonstration, press "X" at any beep.
* To print data press "P" at any beep, for printed maps press "M" at any beep°.
  Extra details are available via the map option with some worlds.
[°Warning: Your printer should use Epson-compatible graphics or control codes!]
```
{% endraw %}

## WGINS6.TXT

{% raw %}
```
The  editing procedure varies the planets in a system,  and can add systems or
remove them completely.  Please note that changing part of a system  can alter
other  parts  considerably.  You can look at system details  before confirming
your edit, or lose all changes and start again.
   Most details of this program are best explored by trying it:
   *  GENERATE a sector of your own.
   *  LOAD a sector and look at it.
   *  ZOOM in for detailed world maps etc., zoom in again to look at details.
   *  Try the ORRORY and PLANETARIUM options on the ZOOM menu.
   *  Get full statistics from the DATA options.
   *  Try MODIFYING a solar system (You can always call for Vogon
      help or just re-load if you don't like what you get!).
   *  Run the ROLLING demonstration
   *  Use the OPTIONS menu to tailor screen colour etc.
   *  Use the SECURITY system (on OPTIONS menu) to control information.

For more details see the instructions that should be on this disk, or register
your copy and look at the source code.
                Registration costs only £5 or $10, from
   Marcus L. Rowland, C/o 22 Westbourne Park Villas, London W2 5EA, ENGLAND
        Registered users get the source code AND version 2 (late 1988)
```
{% endraw %}

## WORLDGEN.DOC

{% raw %}
```


                      WORLD GENERATOR 1.3


       By Marcus L. Rowland         C/O 22, Westbourne Park Villas,
                                        London W2 5EA,
                                        ENGLAND

                     Copyright <C> 1987,88,89

       
Contents                     page
---------------------------------
USER SUPPORTED SOFTWARE         2
CONDITIONS OF DISTRIBUTION      2
INTRODUCTION                    3
OPERATION                       3
   MAIN MENU                    5
      HELP                      5
      GENERATE NEW SECTOR       5
      SAVE SECTOR               6
      LOAD OLD SECTOR           7
      VIEW A SECTOR             7
      ZOOM SYSTEM DETAILS       7
         Planetarium           10
      EDIT SOLAR SYSTEM        10
      SECTOR DATA              13
      TUTORIAL                 14
      ROLLING DEMONSTRATION    14
      SPECIAL OPTIONS          14
      QUIT                     15


ASTRONOMICAL NOTES             16
      STAR TYPES               16
      GLOSSARY                 17
      SOURCES                  17

PROGRAMMING NOTES              18
      8087 VERSION             18
FUTURE PLANS                   19
REGISTRATION FORM              20


















                 Copyright <C> Marcus L. Rowland 1987,88,89 - 1  

                          USER SUPPORTED SOFTWARE
                          -----------------------
If you like this program,  and would like to see improved versions, please  
register your copy with me at the address above. The registration fee is 

         Five Pounds (Britain and EEC)
         Ten Dollars (USA)

Please make cheques payable to M. L. Rowland.   Please specify disk format.
  
If  you register,  using the form provided in this file,  I'll send you the 
source code of this program.  I'll also send you version 2 without  charge, 
and  will try to incorporate any suggestions you make for improvements.  At 
the time of writing I can't promise any definite date  for  version  2;  my 
best guess is that it won't appear until mid-1989.

                         CONDITIONS OF DISTRIBUTION:
                         ---------------------------
This program is copyright.  However,  I do not object to  copying  of  the 
program on the following conditions;

1:  No  charge  is  to  be  made,  over  and  above  reasonable  media and 
    duplication charges.

2:  The program and related files must be distributed TOGETHER.

3:  I  reserve  the  right  to  remove this program from any user group or 
    commercial library which  I  feel  is  making  excessive  charges,  or 
    imposing  unacceptable  conditions.  For  this  reason,  libraries are 
    requested to ask permission before adding it to their stock.

4:  It isn't customary to include source code with user supported software; 
    I did so with earlier versions, because I believed that the program was 
    most useful if modified for your preferred game system. I estimate that 
    several  hundred  copies  have  now  been distributed;  so far the only 
    registered users are a few people who ordered the program directly from 
    me.  For this reason,  I will only supply the source code to registered 
    users;  registered users are requested NOT  to  distribute  the  source 
    code.  They  are  also  asked  not to copy parts of the code into other 
    programs without my written permission.
       
5:  Registered users may modify this program for their  own  purposes,  and 
    they  are  encouraged  to customise it for their preferred game system. 
    However,  modified forms of the program should not be distributed.  You 
    are invited to send me suggestions for improvements and modifications.

6:  No  guarantee is made that this program is suitable for any application 
    whatsoever,  and no responsibility is accepted for any damage that  may 
    arise as a result of using this program.











                 Copyright <C> Marcus L. Rowland 1987,88,89 - 2  

                                INTRODUCTION
                                ------------
This program produces solar systems for science fiction role playing games, 
in which each player takes on the persona of a human or alien  of  the  far 
future, in a universe controlled by a referee.  If you're not familiar with 
the field,  think of it as Dungeons and Dragons with spaceships.  It IS NOT 
an  accurate astronomical simulation;  current theory seems to suggest that 
the universe is MUCH more hostile than the version this program  generates.
    The most popular SF games are probably  Traveller  and  Traveller  2300 
(now retitled 2300 AD;  Game Designers Workshop),  Star Trek (FASA),  Space 
Opera (FGU),  and Star Frontiers (TSR),  with another dozen or so available 
if  you  shop around.  Most of these games use fairly complicated rules for 
planet design;  typically,  they take several minutes of  dice  rolling  or 
calculation per world.  Some extreme cases can take several hours per solar 
system.  Usually they don't produce maps, unless the referee sits down with 
a pencil and paper and draws them from his or her imagination. This program 
is designed to do this job fairly quickly, and allows generation,  storage, 
and editing of solar systems.  It'll draw maps of planets,  and is designed 
with  a  fairly  open  (eg  simplistic)    program    structure    to  make 
modification as easy as possible.
    My  main  reasons  for  writing  this  program are to learn some simple 
Pascal,  and to produce something better than the flat star  maps  used  in 
most SF role playing games.  I also wanted to try a few program ideas, like 
the simulated optical characters.  If you like this program, please send me 
your ideas for improvements; for example, I may add EGA support if there is 
sufficient demand; so far no registered user has an EGA.
    If  you  want  to  use  this  program  you  are  probably interested in 
role-playing  games;   I'm  interested  in   seeing   programs   for  other 
role-playing applications, and hope to put together a disk of really useful 
public domain and user-supported RPG programs for British and American user 
group libraries.
    Several  astronomers,  role-players,  and  interested onlookers gave me 
help and advice while writing this program; they bear no responsibility for 
its errors. In particular, I would like to thank:
          John  Dallman  Discovered many bugs, suggested cursor movement in 
                         solar system selection,  gave invaluable help with 
                         the physics of ring worlds.
Richard Pittfield-Perry  Pointed  out  incompatibilities  between  IBM  and 
                         Amstrad PC's,  various suggestions on  format  and 
                         presentation of data.
        Richard  Taylor  Gave great  help with astrophysics and planetology 
                         and suggested the disclaimer that appears  at  the 
                         start of the program. 
         Jonathan Cowie  Lots of astronomical suggestions.
        Terry Pratchett  Suggested changes, gave advice and encouragement
  Also thanks to Dave Langford, Martin Hoare, and all registered users.

                                 OPERATION
                                 ---------
If you intend to dump the graphics from this program to a printer,  it's a 
good idea to begin by running the PC-DOS program GRAPHICS.COM, or whatever 
equivalent is provided for your system.

The planetarium option of  this  program  produces  results  which  vary 
according  to the date. For this reason it is essential to have the date 
set correctly before you start.

To run this program,  insert the disk into a drive,  move onto the  drive, 


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 3  
and type WORLDGEN <ENTER>. For example, with the disk in drive B;
     A>B:
     B>WORLDGEN

DON'T RUN THIS PROGRAM WHILE LOGGED ONTO ANOTHER DRIVE,  SINCE IT  USES  A 
LOT  OF FILES;  IT'LL RUN,  BUT YOU WON'T GET INSTRUCTIONS ETC.,  AND SOME 
GRAPHICS WILL BE CORRUPTED.

     A>B:WORLDGEN is WRONG!!!!!!!!!!!!!

Several options can be selected as command line parameters;
  "S" or "s" makes the program run silently.
  "P" or "p" makes the program bypass a printer setup option.
  "C" tells the program that a colour monitor is in use, and selects the 
      red/green/yellow palette.
 "M1" and "M2"  select  palettes  that  should  be  clearer  on  monochrome 
      displays; 
 "M1" is the Cyan/Magenta/White palette found on all CGA/EGA cards.
 "M2" selects an especially clear Red/White/Blue display. Unfortunately few 
      cards (other than original IBM CGA cards) support it,  and  it  isn't 
      found on any EGA.
If you select more than one colour option as a command parameter,  only the 
last one selected will be used.
 
Example: A>WORLDGEN S P C     selects silent operation, printer setup 
                              bypassed, colour display.
Example: A>WORLDGEN M1 M2 C   ultimately selects colour.

If you don't use these parameters, the first part of the program asks a few 
simple questions about your system.
   Do you have a CGA Card?  If you have a text card,  or other incompatible 
card, this program is no use to you. Warning: This program apparently locks 
up if run on a Hercules-type card with some  CGA  emulation  programs,  but 
runs  fine  with  others;  I  have  no  idea  why.  If your graphics aren't 
compatible,  press "X" to exit.  You shouldn't damage your computer if  you 
try  to  run  the program,  but you won't get any results,  and may need to 
reboot! Press any other key to continue. 
   The next question concerns colour monitors;  if you select a  monochrome 
display, this option uses the Cyan-Magenta-White palette, which should give 
slightly clearer graphics. Press any other key to continue.
   Finally,  you'll be asked if you want  to  set  up  your  printer.  This 
question  leads  you to a simple set-up procedure for Epson printers if you 
press "Y". It may also work on other printers, but I can't guarantee this.
   Move the paper to the top of form and  switch  on  before  entering  the 
paper length;  any length from 0 to 99 lines is acceptable.  Below 10 lines 
(why are you using such an odd size anyway?) enter 0 for the first  figure. 
The  computer  sends  a  string  initialising the page size and setting the 
printer to skip perforations.  If you have an Epson printer but don't  want 
to change any settings, press the space bar to bypass this procedure. 

Once  you've  dealt  with  these questions,  you'll see a graphics display, 
showing two planets colliding.  This can be interrupted if you press a  key 
before the planets meet.  After the graphic, the computer will beep and ask 
you to press a key. Whenever this happens, you can break out of the program 
by  pressing  CONTROL-BREAK.  This  isn't a good idea if you're in graphics 
mode,  because it'll mess up your display,  but the option is there if  you 
want it.
   Next,  you'll  see  a  screen  showing system requirements and copyright 
messages (omitted if you interrupt the titles).  It's followed by the  main 


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 4  
menu for the program, which should look something like this; 
------------------------------------------------------------------- 
World Generator 1.3 - Copyright (c) 1988,89 - By Marcus L. Rowland
Time is 23.40 hours on Thursday, 30th of June 1988
No systems in memory : Beep is on : Display Colour : Security level 0

Press keys for program options

[G] GENERATE new sector
[S] SAVE sector         [edited or generated sector]
[L] LOAD old sector

[V] VIEW a sector       [loaded or generated sector]
[Z] ZOOM system details [loaded or generated system]
[E] EDIT solar system   [loaded or generated system]
[D] Sector DATA         [loaded or generated sector]

[T] TUTORIAL
[R] ROLLING demonstration

[O] Special OPTIONS
[Q] QUIT

[I] INFORMATION        [H] HELP
-------------------------------------------------------------------

Let's look at those options in more detail:

HELP
----
I've taken the last item first because it's an important new  part  of  the 
program.  You'll  find  this  option  on  most menus.  It loads a help file 
(WG.HLP),  and shows a list of topics,  which varies according to the menu. 
Press  another  key (as indicated on the screen) for more information.   
   Because on-line help is now available, this documentation describes some 
options of this program in a little less detail than in earlier versions.
       


GENERATE NEW SECTOR
-------------------
Option "G" is the key function  of  the  program.  It  randomly  designs  a 
maximum of 100 solar systems (more usually 20-30),  and distributes them in 
a space sector ten light years on a side.  This part of the program  cheats 
in  one  respect;  to  simplify programming,  there can be no more than one 
solar system for each set of XY coordinates.  For example,  if  you  have a 
system  at  coordinates  X3 Y7 Z2,  you can't have another one at X3 Y7 Z8. 
Coordinates are shown in the following order;
   X - Coordinate; lateral displacement eg Column 
   Y - Coordinate; forward displacement eg row
   Z - Coordinate; height above an imaginary plane.
This  is  a  fairly  normal  convention  for  war  gaming  and  other  game 
applications.
   Each  location  with a solar system is indicated by a shaded area of the 
mapping grid,  with a red line leading up to a disk indicating the location 
of the solar system.
   Once the grid stars are generated, the computer will beep for attention. 
Press any key to see the systems generated.
   Each system is allocated a star and up to  seventeen  planets,  asteroid 


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 5  
belts, dust clouds, or secondary stars.  All are assumed to be orbiting the 
main star, shown at the left of the screen. Coordinates are shown below the 
star. The following symbols are used to show the star and its satellites;

Star:  Yellow circle with red core, size variable, or two stars overlapping 
if the primary star is a close binary pair.  Distant binary stars  use  the 
same symbol superimposed on a red arc.

Asteroid belt: Green arc interrupted by red dots.

Dust cloud: Random dot pattern.

Airless world: Green arc with yellow diamond.  The program includes several 
terrain types, but they aren't shown on-screen at this stage.  Some planets 
shown with this symbol have traces of atmosphere. On mono displays there is 
a dark line across the lower half of the diamond. 

Poison World: Green arc with red diamond.  Planet with a toxic or corrosive 
atmosphere,  usually  Venus-like  or  with  a  halogen atmosphere.  On mono 
displays the diamond is  divided  horizontally  into  two  equal  sections.
     
Oxygen  World;  Green  arc with green diamond.  On mono displays there is a 
dark line across the upper half of the diamond.
 
Gas Giant:  Green arc interrupted by red circle with yellow  core  and  red 
horizontal  stripe.  If  the  world  is  ringed  a green diagonal stripe is 
superimposed. 

In addition to these "everyday" astronomical objects,  the editing  process 
(described below) allows you to add a few more;

Black  Hole:  Red circle with horizontal bars leading to the upper left and 
lower right.  This program only allows black holes as the main  star  of  a 
system.

Proto-Star:  As black hole symbol,  but with a yellow filling.  Proto-stars 
are also only available as the main star of a system.
       
Oxygen Ringworld:  Shown as a yellow and green band, with a dotted red band 
(orbital  sun  shades)  nearer  the  star.  See  the  novels  Ringworld and 
Ring-World Engineers by Larry Niven for more details.
       
Toxic Ringworld: Shown as a yellow and red band.  This is a ringworld built 
by aliens who breathe a toxic atmosphere.
 
SAVE SECTOR
-----------
Option "S" allows saving of generated (or edited) sectors.  You'll be asked 
to enter a file name, in the format [d:]filename. The program automatically 
adds the extension .SEC,  so that (for example) B:BRIAN becomes B:BRIAN.SEC 
etc.  An error-checking procedure should stop you using illegal file names, 
but this isn't guaranteed.  If you don't enter a file name,  but just press 
return, the sector is saved as UNNAMED.SEC without any drive specified. See 
the technical section below for details of file structure etc. If you want 
other people to read notes about the sector, you should prepare a .DOC file 
describing it; the format is described below under "LOAD OLD SECTOR".





                 Copyright <C> Marcus L. Rowland 1987,88,89 - 6  
LOAD OLD SECTOR
---------------
Option "L" reloads sectors, and behaves in the same way as the save option. 
As well as loading a sector,  it looks  for  a  text  file  describing  the 
sector, and shows it if it is present. This file should have the same drive 
specifier (if any) and name, but the extension .DOC; for example SAMPLE.DOC 
for SAMPLE.SEC.  Files must be no more than 23 lines, 78 column text; files 
can be created with Sidekick or  any  other  ASCII  text  editor.  You  can 
include IBM graphics characters if you like.

VIEW A SECTOR
-------------
Option "V" lets you look around the sector, using the cursor keys to select 
a location.  If you press ENTER you'll return to the main menu.  On Amstrad 
PC 1512,  and any other computer with a mouse that imitates the cursor pad, 
you can use the mouse to move around the systems.

ZOOM SYSTEM DETAILS
-------------------
Option "Z" draws detailed maps of a  solar  system  and  its'  worlds.  The 
procedure  takes  approximately  thirty seconds per screen,  the exact time 
depending on the speed of your computer.  It  begins  with  a  menu  giving 
several options:

[Z] ZOOM into one solar system
[P] PLANETARIUM view of one solar system
[G] GRAND tour of sector

"Z" selects a detailed examination of each body in a solar system.
"P" shows all the bodies in a system, and their current orbital position.
"G" carries out these two procedures for every system in the sector.

If  you choose "Z" or "P" you'll be asked to select a system by coordinates 
or by cursor movements (as the main menu option "V",  above);  move  around 
the sector using the cursor keys; when you reach the system you want, press 
the ENTER to go straight to the detailed display.  If you press ENTER  when 
you're in an area that doesn't contain a solar system, you'll return to the 
mapping menu.
   
ZOOM into one solar system
--------------------------
Once you've selected a system, the display generates details of each of the 
astronomical objects it contains, with the following layout:

             +------------------------------------------------+
             | Symbol map of solar system (as first maps)     |
             |------------------------------------------------|
             | chart (format |                                |
             | varies with   |  Map or diagram of body        |
             | type of body) |                                |
             |------------------------------------------------|
             | orbit map     |  Data (format varies with      |
             |               |  details of star or planet)    |
             |               |  [if room, menu of options]    |
             +------------------------------------------------+

The  exact  format  varies  with  the  type of body.  Each body takes a few 
seconds, depending on its type and the speed of the computer. The orbit map 
is NOT to scale, just a rough indication of eccentricity.


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 7  
       
Common features of all maps: 
Human and alien colonies are indicated as square blocks; human colonies are 
green,  alien colonies are red.  Native cities are shown as yellow  blocks. 
Colonised  moons  are  indicated  by  these  symbols  below the moon.  On a 
monochrome display there is a dark dot to the left of the green markers, in 
the middle of the red marker, to the right of the yellow mark

IMPORTANT NOTE 
The computer beeps and pauses after each star or planet.  If you press  any 
key  (except  P,  M,  or  X) it will carry on to the next body,  or exit if 
you've reached the outermost body of the solar system.  

  If  you  press  "P"  the  program  prints  a  detailed description.  This 
description isn't a screen dump,  but statistics of  orbit,  mass,  mineral 
composition, etc.

  If  you  press  "M"  the  program  will  either dump the main map to your 
printer (if the map shows a gas giant, asteroid belt, star,  ringworld,  or 
dust cloud), or (for "solid" planets) go to a menu with more options;
  "Z" Zoom in:  Use the cursor keys to move a shaded rectangle onto part of 
      the map, then "Enter" to zoom in. The window will fill with a pattern 
      of  coloured  squares which is enhanced as another map.  Press "P" to 
      print the new map or any other key to zoom out again.
  "G" Grid:  Superimposes  a  rectangular grid (corresponding to  the areas 
      used by the "Zoom" option).  Press "P" to print this map,  any  other 
      key to remove the grid.
  "X" Exit from the map option, show the next planet (or whatever).
The program supports four types of map  dump,  selected  from  the  OPTIONS 
menu.  The default is a map showing each coloured area by its outlines, for 
Epson-compatible printers.  See notes on the options menu, below,  for more 
information.
   
   If you press "X" the program returns to the main menu.
   
Stars:
 Main Map: Side view of the star superimposed on a square grid.  The grid 
           scale is one square = 50000 km.  The core of the star is shown 
           in red,  the outer atmosphere in yellow.  For small stars  the 
           grid may be magnified; lines are still 50000 Km apart.
    Chart: Circle representing axial tilt from a mean orbital plane;  for 
           primary stars this is  usually negligible,  for other stars it 
           may be considerable. This is not a scale chart.
Orbit Map: Shows a red circle if the star is the  primary,  or a ring  if 
           it's  orbiting  the  primary.
     Data: Shows  the  type  of star,  its composition as  proportions of 
           Hydrogen and Helium,  its temperature,  and its  gravitational 
           pull. Temperature is in degrees Kelvin (0 K = -273 C), gravity 
           is on a scale where Earth gravity = 1g.  No degree  symbol  is 
           shown for temperature, since Kelvin temperatures don't use it.

Close binaries: 
 Main Map: The two stars superimposed,  indicating  relative  sizes  and  
           separation.
    Chart: shows the separation more clearly, and indicates the extent of 
           their common atmosphere. NOT TO SCALE.
Orbit Map: Shows a double circle for the pair.  
     Data: Shows type, Hydrogen and Helium content of the two stars,  and 
           their temperatures and gravitational pull.


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 8  

World with exotic atmosphere:  
 Main Map: A terrain chart, showing mountains and hills in red, low lands 
           in black, against a yellow background. 
    Chart: Shows axial tilt,  with an extra box to show  any  moons  that 
           might  exist. 
     Data: Shows   atmosphere  contents:   the  following  gases  may  be 
           indicated;
                H = Hydrogen
               He = Helium
                O = Oxygen
                N = Nitrogen
              Hal = Halogens
               Ar = Argon
               CO = Carbon Dioxide
                 2
              H O = Water vapour
               2
              CH  = Methane
                4

           All these gases should be considered as representing  a  broad 
           class of chemicals; for example, Carbon Dioxide includes other 
           carbon compounds,  and Halogens includes  Chlorine,  Flourine, 
           Bromine,  etc.  Temperature,  gravity and atmospheric pressure 
           are also  shown;  pressure  is  related  to  Earth  sea  level 
           pressure.

Small Airless Worlds: 
These worlds are shown as simple terrain maps, black on a yellow surface.  
Three main types of world are shown;  
     worlds with fairly smooth surfaces [eg Mercury];
     worlds with mountains [eg Mars]; mountains are shown in red;
     worlds with mountains and ice [eg Pluto]; ice is shown in green;
Usually  there  is no atmosphere,  or a tiny unusable residue.  All other 
details of the charts are as the maps for toxic worlds.

Oxygen Worlds:
The surface is shown as yellow and green (green is low ground,  yellow is 
high ground) with red mountains. Water is shown as the background colour, 
which switches to blue. All other details are as above.

Gas Giants:
The main diagram shows a side view of the planet,  with any  rings,  plus 
any moons. The chart shows axial tilt. Colonies on the moons are shown as 
symbols below them. All other chart details are as above.

Asteroid Belts:
The main diagram shows the largest asteroids and their relative positions 
in the belt,  plus the primary and any other suns inside the orbit of the 
belt.  The chart shows belt thickness and density.  All other details are 
as above.

Dust  Clouds:
The  main  diagram  shows  the rough distribution of the cloud around its 
primary. All other details are as asteroid belts.

Proto-stars:
The main diagram is a picture of the star and associated dust clouds from 


                 Copyright <C> Marcus L. Rowland 1987,88,89 - 9  
the  side.  The  chart  is a view from above.  All other details are as a 
normal star.

Black Holes: 
The  main  diagram  is  a  side  view  of  the  star.   The  chart  shows 
gravitational distortion caused by the star  (not  entirely  seriously!). 
Other  details  are as a normal star,  but it is assumed that there is no 
evidence  of  composition,   and   that   the   entire   system  will  be 
uninhabitable. This is a BIG black hole!

Ring Worlds:
The  main  diagram is an oblique view of the ring from a position outside 
and `below' it.  It shows  the  primary  star,  the  orbital  sun  shades 
surrounding  it,  and  some  of the terrain of the ring world.  The chart 
shows the ring, sun shades, and star in plan view.  All other details are 
as an oxygen world or toxic world.
   
PLANETARIUM view of one solar system
------------------------------------
This  option  shows  a view of the entire solar system from a point above 
and to one side of the plane of the ecliptic. The current positions of 
planets and stars etc. are shown, varying according to the date. Objects 
above the plane of the ecliptic are shown with a tail below them, objects 
below the ecliptic are shown with a tail above them.
   Please note that distances used by this display are NOT to scale; 
distances in the inner system are greatly exaggerated, in the outer 
system they are greatly reduced.
       
EDIT SOLAR SYSTEM
-----------------
Option "E" lets you play God in a big way.  You can alter the primary  star 
and other astronomical bodies,  and move or delete the entire solar system. 
You should know about a few problems.

1:  This program won't change all details to correspond to the option you 
    choose; for example, if you change a dwarf star into a giant, you are 
    strongly advised to change two or three of the inner planets.  A  few 
    possible  combinations  are  astronomically  impossible or just plain 
    silly;  for example, a solar system orbiting a black hole should only 
    consist  of  asteroid  belts  and  dust  clouds,  if anything,  since 
    larger would be torn apart by tidal stress.
       
2:  Changing a detail alters the fine detail  of  everything  that  comes 
    after it.  For example,  if you change the Z-coordinate, you'll still 
    have the  same  types  of  planets,  but  the  maps  and  details  of 
    atmosphere, gravity, etc. will change. If you change a sun or planet, 
    all the planets to the right will also change.
   
3:  Editing commands have been changed from earlier versions of the 
    program; if you aren't familiar with the earlier versions, don't worry 
    about it. If you do know the program, please note that the commands are 
    now by mnemonic letters, not numbers.

See further details under each editing option, below.
You'll  first be asked to select a solar system,  using a menu like the one 
for solar system mapping.  There is one important  exception;  if  you  use 
option  3  and  enter  coordinates for a location that hasn't already got a 
star,  a random solar system will be generated.  To  avoid  accidents  this 
isn't implemented on menu option 2.


                Copyright <C> Marcus L. Rowland 1987,88,89 - 10 
   Once  a  system is selected or generated,  the screen shows the standard 
small solar system map,  with  the  numbers  0  to  17  added  to  indicate 
locations  of  stars and planets. The main editing commands are as follows:
  [P] Edit Primary star     
  [O] Change Orbiting planet / star
  [Z] Change Z-Coordinate   
  [D] Delete System
  [G] Generate a new system 
  [M] Look at detailed maps
  [S] Security toggle       
  [C] Cancel all edits
  [X] Exit with changes

If you press "P", you'll see the following menu;
    --------------------------------------------------------------------
       Press keys to select star type
       as follows [most stars are in
       the astronomical main sequence;
       see documentation for details.]
       Star type B0 B5 A0 A5 F0 F5 G0
       Key        A  B  C  D  E  F  G

       Star type G5 K0 K5 M0 M5 M9 DG
       Key        H  I  J  K  L  M  N
       Or "O" for a binary pair
          "P" for a black hole
          "Q" for a proto-star

       Editing primary does not change
       other planets and stars; they
       should be edited to suit the
       new sun!
    --------------------------------------------------------------------
The  stars available in options A to M are typical main sequence stars (see 
the astronomical section,  below).  DG is a typical white  dwarf.  Remember 
that  you  need  to  edit  all  the  system if you change the primary;  for 
example,  if you change a dwarf star into  a  supergiant,  you'll  need  to 
adjust the positions of many of the planets.  If you have time,  and want a 
main sequence star,  you may be better off generating random solar  systems 
until you get one that looks right. For options N through Q there should be 
few or no planets,  and certainly no habitable planets.  For added  realism 
you may wish to edit out oxygen worlds orbiting B, A, F,  and M-type stars; 
they aren't very  likely,  but  are  useful  for  role-playing  adventures.

If you press "O" you'll see:
    --------------------------------------------------------------------
       Press planet number, 1 to 9
       or A to H for planets 10 to 17
    --------------------------------------------------------------------
eg;
   Key  1  2  3  4  5  6  7  8  9  A   B   C   D   E   F   G   H
 Orbit  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15  16  17









                Copyright <C> Marcus L. Rowland 1987,88,89 - 11 
    Once you choose a key, another menu appears:
    --------------------------------------------------------------------
       Planet / star n selected
       Press for replacement:
       <Space bar> = nothing
          0 = Asteroids
          1 = Earth-like
          2 = Poison atmosphere
          3 = Airless, cratered
          4 = Airless, mountainous
          5 = Airless, icy
        6-7 = Gas giant (no rings)
        8-9 = Gas giant (with rings)
        [7 & 9 are bigger than 6 & 8]
          A = Companion star
          Q = Ringworld (poison)
          R = Ringworld (oxygen)
          S = Dust cloud
    --------------------------------------------------------------------
As already said,  the best way to position planets is to generate  a  solar 
system.  For  ringworlds  it's essential to put the ring at a distance that 
will support the type of atmosphere you want. The easiest way to do this is 
to  replace an oxygen world (or toxic world) with the ring.  There are good 
reasons to assume that there won't be any other astronomical objects  in  a 
ringworld system, apart from a single well-behaved star,  so edit them out.
     If  you  choose option A (companion star) you'll see a similar menu to 
the one above for primary stars.  However, choices O-Q aren't available for 
a companion star.
       
If you press "Z" you'll see:
    --------------------------------------------------------------------
       Enter new Z-Coordinate, 0 to 9
    --------------------------------------------------------------------
This simply changes the system Z-coordinate to the value entered.  Remember 
that changing the Z-coordinate changes every subsequent planet or  star  in 
the system!

If you press "D" you'll see:
    --------------------------------------------------------------------
       Delete system? Are you sure??
       If you do this only options
       4 [generate a new system],
       8 [lose all changes], or
       9 [accept changes] will work!!
    --------------------------------------------------------------------
Press "Y" if you want to go ahead.
       
Choice "G" gives you another warning:
    --------------------------------------------------------------------
       Generate a random system?
       Are you sure??
       You will lose all edits!!
    --------------------------------------------------------------------
Press "Y" if you want to go ahead.

Choice "M" shows you world details (as in option "Z" of the main  menu). All 
choices (eg pressing "X" to exit, "P" to print data) are available.
   
Option "S" locks or unlocks the system,  for use with the security  options 


                Copyright <C> Marcus L. Rowland 1987,88,89 - 12 
this program now offers.  Since you must have a security level of 1 or less 
to use the editing menu, you won't actually see any change at this stage of 
the program.
       
Choice  "C"  restores  your  original system,  or removes the system if you 
began with an empty location.

Choice "X" adds your new or modified system to the sector file and  returns 
you to the main menu.
       
WARNING: REMEMBER THAT YOU HAVEN'T MADE ANY PERMANENT CHANGE UNTIL YOU SAVE 
THE SECTOR FILE TO DISK!!!


SECTOR DATA
-----------
Option  "D"  allows  you  to  generate statistics for the sector in several 
forms;

[B] BRIEF analysis of sector data
[P] PRINT details of one system
[A] Print details of ALL systems
[V] VIEW sector record (ASCII)
[D] DISTANCES between stars

Option "B" does a brief analysis of all  systems,  counting  the  worlds  and 
drawing  a  map  showing the location of oxygen worlds and other objects of 
astronomical interest. You'll see something like this:
    --------------------------------------------------------------------
                                                      sector  systems
                                                  0 1 2 3 4 5 6 7 8 9
                                                0 * #             # #
                                                1       *   *       #
     Oxygen Ring world at 007                   2             * *
     Close binary pair at 155                   3
     Black hole at 496                          4 *         * *<#
     Close binary pair at 642                   5   *<*           * *[
     Proto-Star at 958                          6 *       #
  This sector contains 29 systems,              7   * # *       #
  11 planets have oxygen atmospheres.           8     #   #
  51 planets have no atmosphere.                9 * #     *{  *
  23 planets have toxic atmospheres.           # = Oxygen World
  26 planets are gas giants.                   < = close binary system
  There are 81 asteroid belts                  { = black hole
  and 31 dust clouds.                          [ = Protostar
    --------------------------------------------------------------------
Press any key to return to the DATA menu.
     
Option "P" uses the selection menu  to  find  a  solar  system,  then  runs 
through  each  of  the suns and worlds in turn,  printing out the data that 
would normally be produced by pressing "P" after generating a  planet  map. 
It runs fairly quickly because it doesn't display any graphics,  apart from 
the simple solar system map.  The main limitation  is  the  speed  of  your 
printer;  if  you  have  a  buffer  card  in the printer,  or run a spooler 
program,  it only takes a few seconds per system.

Option "A" gives you a full rundown of a sector;  it takes some time,  even 
if you have plenty of buffer or spooler memory.  You can stop  the  run  by 
pressing any key; it will stop at the end of the next system. 


                Copyright <C> Marcus L. Rowland 1987,88,89 - 13 
   If you proceed,  the program displays the brief analysis described above 
(as in statistics option 1), copies the screen to the printer,  then starts 
to  generate  data  for  each system of the sector.  Progress is shown by a 
sector map and system map on the screen.  If you want to interrupt the run, 
press  any  key;  it will stop when it reaches the end of the current solar 
system.  This procedure does use a LOT of paper; a typical system needs two 
to  four  A4  pages,  and  the program sends a page feed at the end of each 
system.  To save paper, you may want to modify the program to use a smaller 
type  style (eg superscript) and smaller line spacing,  and set the printer 
for an appropriate page size.  I haven't done this because the codes needed 
tend to vary considerably between different printers.
       
Option "D" calculates the distance from a  selected  system  to  all  other 
systems in the sector. Distances are shown in light years.

TUTORIAL
--------
Option  "T"  gives  an  on-screen  explanation  of  the  main points of the 
program,  with graphics;  it uses six files  from  the  disk,  so  speed is 
limited to the speed of your disk drive. After most screens you're asked to 
press a key to continue. There's no point in giving details here.

ROLLING DEMONSTRATION
---------------------
This option shows the titles,  the TUTORIAL (without pausing for the user), 
and some aspects of the SECTOR DATA procedure.  It then loads the data file 
SAMPLE.SEC and shows details of all the systems.  This demonstration  takes 
nearly half an hour to repeat on a fast machine,  much longer on a standard 
PC.  You can interrupt it at any time by pressing a key briefly;  since the 
program will always continue to the end of the current screen,  it may take 
a few seconds to return to the main menu.

SPECIAL OPTIONS
---------------
This is a menu of a few additional routines that  probably  won't  be  used 
more than once or twice per session;
[B] BEEP on or off
[T] Change beep TONE
[C] Change COLOUR palette
[M] Choose printer type for MAPS
[P] Set PRINTER page size
[D] DIRECTORY of all files
[U] Directory of USER files
[S] set SECURITY level
[X] Return to main menu
   "B": If  you  don't like the way this program  beeps whenever it pauses, 
        press "B" to switch the sound off.  Press "B" again to restore  the 
        beep.
   "T": Cycles through the following frequencies; 
        50, 100, 200, 400, 800, 1600, 3200
        The default is 400 cycles
   "C": This  option  toggles  between  the  normal display  (Red / Green / 
        Yellow), and the two alternate displays (Cyan/Magenta/White and 
        Red/White/Blue) recommended for monochrome screens.
        A test pattern is shown to demonstrate the new palette.
   "M":  Selects one of four map dump procedures;  Small  Epson  map,  Large 
        Epson  map,  generic map,  Tandy CGP-115 plotter map.  The Epson map 
        dumps work with any Epson-compatible  printer,  and  show  areas  as 
        outlines.  The  generic  map  uses different characters to represent 


                Copyright <C> Marcus L. Rowland 1987,88,89 - 14 
        different colours;  your printer must be able to work in 100+ column 
        mode  to  use  it.  The  Tandy map uses pen colours to represent map 
        colours; it runs very slowly, and you can interrupt it by pressing 
        any key.
   "P": Repeats the printer setup option from the start of the program.
   "D": Shows names of all files on the disk; does not show file size, but 
        does indicate the space left on the disk.
   "U": Gives a directory of sector and document files (*.SEC and *.DOC)
   "S": Security options.
        If you haven't  used  this  option  during  a  session,  you'll  be 
        prompted for a password which will be used for the remainder of the 
        session.  If you have used the option before,  you'll be  asked  to 
        enter  the  password;  if  it's  wrong,  you'll  be returned to the 
        options menu.
           Five security levels are supported;
       Level [0] is the default setting, with no security in use. Anyone is 
       able  to  enter  the  security  menu  by  typing any password.  It's 
       STRONGLY suggested that you DON'T stay at this level  if  more  than 
       one person is using the machine, since it's possible for a practical 
       joker to put the security level up to 4 and exit, leaving you with a 
       program you can't interrupt without re-booting the computer.
       Level  [1]  stops  anyone  from  changing  the password and security 
       level,  but has no other effects.  Remember that this  level  allows 
       users  to drop in and out of the program,  and that security will be 
       back on 0 if it is re-loaded.
       Level [2] prevents editing and saving of files.  It also bars  users 
       from  systems  that  have  been  protected by the EDIT menu security 
       option. The password is needed to exit from the program.
       Level [3] prevents system generation, editing, and saving files.  It 
       also  bars  users  from systems that have been protected by the EDIT 
       menu security option.  The password  is  needed  to  exit  from  the 
       program.
       Level  [4]  prevents  all zoom and data options,  system generation, 
       editing, and saving files. It also bars users from systems that have 
       been  protected  by  the EDIT menu security option.  The password is 
       needed to exit from the program.

Quit
----
You'll be asked to confirm by pressing "Y".  Remember that any systems in 
memory will be lost unless you save them first.
       
Please turn to next page.


















                Copyright <C> Marcus L. Rowland 1987,88,89 - 15 
                            ASTRONOMICAL NOTES
                            ------------------
To be brutally frank,  the astronomy of this program leaves quite a lot  to 
be  desired.  I  hope  to  improve  astronomical accuracy in versions 2.00; 
unfortunately memory limitations made this very difficult with Turbo Pascal 
3.1,  and  improvement  requires  fundamental  changes in program structure 
which will take some time to develop. A few of the main flaws follow;
       
1: There isn't enough variation in terrain on different world types.
2: Stars  available  are  only  a  representative  selection   of  the main 
   sequence, plus a "typical" white dwarf, binary pairs,  proto-stars,  and 
   black holes.
3: The  astronomy  of  multiple-star  systems has been  greatly simplified. 
   Close pairs are shown as orbiting a single point, more distant stars are 
   shown  as a small star orbiting a larger primary.  In reality all binary 
   solar systems  would  probably  be  EXTREMELY  eccentric,  with  planets 
   orbiting the common centre of gravity, or one of the two stars.  Planets 
   much larger than Mercury would probably be unlikely.
4: Tidal forces have mostly been ignored.
5: Planets are too  common,  and there  are  too  many  oxygen  worlds.  In 
   particular,  the  program  occasionally  produces oxygen worlds orbiting 
   unusually large or small stars; both are generally considered to be very 
   unlikely, but handy for role playing.
6: Albedo effects have been greatly simplified.
7: Gas giant core heating is probably over-simplified.
8: Black holes and Proto-Stars are greatly simplified.
     
There are probably other flaws I've missed.  Please let me know about  them 
when  you  register  your copy of World Generator (sorry:  I'm NOT going to 
enter into correspondance with anyone who hasn't registered their copy!)
  
STAR TYPES
----------
This program currently supports a few types of star:
  Type  Luminosity   Temperature  Mass    Radius  Description
  -----------------------------------------------------------
  B0    56000        28000        18.0    10.0    Blue-white giant
  B5     1400        15500         6.5     4.4     "     "     "
  A0       90         9900         3.2     3.2    White stars
  A5       16         8500         2.1     1.8     "     "
  F0        8.1       7400         1.7     1.7    Yellowish stars
  F5        3.5       6700         1.3     1.4     "     "
  G0        1.21      6000         1.04    1.03   Yellow dwarf stars
  G5        0.67      5500         0.94    0.91    "     "     "
  K0        0.42      4900         0.825   0.908  Orange dwarf stars
  K5        0.08      4100         0.57    0.566   "     "     "
  M0        0.04      3500         0.489   0.549  Orange-red dwarfs
  M5        0.007     2800         0.331   0.358   "     "     "
  M9        0.001     2300         0.215   0.201   "     "     "
  DG        0.00006   4500         0.63    0.012  White Dwarf
       
For all these stars luminosity,  mass,  and radius are compared to the sun, 
temperature is in degrees Kelvin.
All these stars, apart from the white dwarf, are part of the main sequence. 
Binary  stars  are  pairs  of  two  of  these  star types.  Black holes and 
proto-stars tend to show a good deal of variation in this  program,  and  I 
would welcome more data on their probable sizes etc.




                Copyright <C> Marcus L. Rowland 1987,88,89 - 16 
GLOSSARY
--------
Main Sequence: The main sequence  is a sequence of star sizes,  masses, and 
               temperatures which runs from blue-white giants down  to  red 
               dwarves. There are exceptions to the main sequence, but they 
               tend to be  comparatively  rare.  The  stars  used  in  this 
               program  are  just some of many main-sequence possibilities; 
               for example, the Sun is a main sequence star,  type G2.  You 
               can easily modify the program to include other stars.
   Luminosity: A measurement of the heat leaving  a star, a function of its 
               temperature and surface area. A small hot star may have less 
               luminosity than a large cool one.
  Proto-Stars: Gas  clouds  that  are  collapsing  to form  stars and solar 
               systems.
     
SOURCES
-------
Patrick Moore              The Guiness Book Of Astronomy Facts And Feats
Abell/Morrison/Wolff       Exploration Of The Universe
Isaac Asimov               The Universe: From Flat Earth to Quasar
Traveller Book 6           Game Designers Workshop (table of stars etc.)
       
       
Notes (or something - go on, turn the page!)





































                Copyright <C> Marcus L. Rowland 1987,88,89 - 17 
                            PROGRAMMING NOTES
                            -----------------
This program was originally written using Turbo Pascal  3.10,  and  is  now 
converted  to run under Turbo Pascal 4/5  with the Turbo3 and Graph3 units. 
It  consists of a  main program WORLDGEN.PAS,  a unit  WG1.TPU  with source 
WG1.PAS plus five include  files (WG1.INC to WG6.INC)  [source code is only 
supplied to registered users]. 
   The development system was an IBM PC, originally fitted with a V20 chip,
later an 80286 speedup board, now replaced by a 16mhz 80386 machine.   I've
tried to keep speed high, but a fast machine works best! 
   Data files are text, derived from arrays [0..9,0..9] of String[40]. This 
is a change from version 1.00 and 1.01,  but files can be  converted  using 
the  utility WG_CONV.COM (on the program disk).
   Files  generated  by  version  1.02  have the same structure as those in 
version 1.1 etc.
   WARNING: While WG_CONV.COM converts files to work with WORLDGEN 1.1, and 
files  from  version  1.02  will  load  without  modification,   there  are 
unavoidable differences between the way the current  version  and  versions 
prior  to  1.2 generate terrain and other features.  For example,  a planet 
might  have  a  high-tech  civilisation  under   older   versions,  but  no 
inhabitants under the new version.  If you want to keep these features, you 
should use an older version of this program!
   A typical system record (a binary) looks like this;

        123B0M5....2 ....3 ....0 0 0 .......S ...

In this example,  123 are the coordinates, B0 and M5 are star types, then 
there  is  a  gap  of  two empty locations (shown here as four dots,  but 
actually recorded as spaces) followed by a  Venus-type  world.  Two  more 
gaps are followed by an airless world,  another  gap  is  followed  by  a 
series of three asteroid belts, more vacant orbits, then a dust cloud. At 
present stars are recorded as two characters,  planets etc.  as a  single 
character.  Space  is left for a second character for each planet,  which 
may be used in later versions of the program. The last byte of the string 
is used for a security code, if present.
     When  detailed solar system information is wanted,  the program uses  
the coordinates and other data to seed the random number generator.  This 
procedure  is  the  key  to  producing  repeatable planet maps.  The only 
alternative would be to record each planet to disk in  some  form,  which 
would require huge amounts of disk space.
       
8087 VERSION - WG87
-------------------
The 8087 version is no longer included; I don't yet own an 80387, and the 
speed gain was marginal anyway.
















                Copyright <C> Marcus L. Rowland 1987,88,89 - 18 
                               FUTURE PLANS
In  later  versions  of  this  program  I  hope  to  add several additional
facilities. These are mainly aimed at role players, and include;
   
1*  EGA. VGA, and Hercules support
2*  Multiple sector maps. An option to link several maps to form  a  larger 
    mapped  volume.  Probably  30  x  30  x 30 light years,  but this isn't 
    certain.
3*  Aliens. A HIGHLY speculative procedure to generate aliens  tailored  to 
    the  worlds  produced  by  the  main  program.  This will probably be a 
    separate program included on the main Worldgen disk.
4*  More types of stars and planets. Dyson spheres.
5*  Hole-Busters.  An arcade adventure game using Worldgen data files. This 
    will probably be sold separately, but may be part of the main program.
6*  Better user friendliness (eg, more options at every stage, on-line help 
    during graphics operations, not just from menus.)

Note: Three of the original list of six future improvements are now part of 
this version. I hope to continue to improve the program with every release. 
I can only produce new versions if Worldgen earns enough money to  make  it 
worthwhile.  So far it hasn't come close to  paying  for  my  Turbo  Pascal 
upgrades, let alone the work I've put into writing it! PLEASE REGISTER!


                This space gratuitously left blank




































                Copyright <C> Marcus L. Rowland 1987,88,89 - 19 
                              REGISTRATION FORM
                              -----------------
  
   WORLDGEN 1.3 REGISTRATION FORM - PLEASE SEND TO
                                    MARCUS L. ROWLAND
                                C/O 22 WESTBOURNE PARK VILLAS,
                                    LONDON W2 5EA, ENGLAND

     Name ...............................................
       
  Address ...............................................

          ...............................................

          ...............................................

          ...............................................
          [please indicate country, state, postcode or zip code, etc.]

  I wish to register my copy of World Generator 1.3
       
  I enclose a registration fee of five pounds (Britain and EEC)
                                  ten dollars (USA) *
  * Dollar cheques please, not money orders or cash.
  Registration entitles you to receive source code, and version 2 of this 
  program, free of charge. PLEASE SPECIFY PREFERRED DISK TYPE BELOW!
       
        Signature ......................................
       
  DATA PROTECTION ACT:  Please note that details on this form will be added 
  to a data base for my personal use only.
       
  Survey - Please fill in the following details
       
  Computer type    ..............................    eg IBM PC, Amstrad, etc.
                 
  Computer memory  ..............................    eg 512 k, 640 k
       
  Graphics type    ..............................    eg CGA card, EGA, etc.
       
  Disk required     5.25",360k.......  5.25",1.2mb........  3.5",720k.......  
       
  Is your display monochrome or colour .........................
       
  Main SF role playing system ..................................
       
           Other systems used ..................................
  Please  give details of any changes or improvements you would like to see 
  made to this program.












                Copyright <C> Marcus L. Rowland 1987,88,89 - 20 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1133

     Volume in drive A has no label
     Directory of A:\

    COPYRITE WGH       839   8-30-89  12:06a
    DATA     WGH       524   8-28-89   7:37p
    DATAA    WGH       431   8-28-89   7:38p
    DATAB    WGH       187   8-28-89   7:37p
    DATAD    WGH       223   8-28-89   7:37p
    DATAP    WGH       482   8-28-89   7:38p
    DATAV    WGH       120   8-28-89   7:39p
    DATAX    WGH        19   8-28-89   7:40p
    EDIT     WGH      1150   8-29-89  11:00p
    EDITC    WGH       208   8-28-89   7:34p
    EDITD    WGH        88   8-28-89   7:33p
    EDITG    WGH       191   8-28-89   7:33p
    EDITM    WGH       142   8-28-89   7:34p
    EDITO    WGH       820   8-28-89   7:32p
    EDITP    WGH       885   8-28-89   7:32p
    EDITS    WGH       187   8-28-89   7:33p
    EDITX    WGH       148   8-28-89   7:34p
    EDITZ    WGH       118   8-28-89   7:32p
    FILE1133 TXT      2147   1-04-90   2:36p
    GO       BAT        38   9-06-88   9:42a
    GO       TXT       694   1-05-90   4:40p
    INFO     WGH       894   8-28-89   7:12p
    INFO1    WGH      1114   8-29-89   8:52p
    INFO2    WGH        51   8-28-89   7:20p
    INFO3    WGH        49   8-28-89   7:21p
    INFO4    WGH        49   8-28-89   7:21p
    INFO5    WGH        49   8-28-89   7:21p
    INFO6    WGH        49   8-28-89   7:21p
    INFO7    WGH        49   8-28-89   7:21p
    INFO8    WGH        49   8-28-89   7:22p
    INFO9    WGH        49   8-28-89   7:22p
    INFOA    WGH      1144   8-28-89   7:18p
    INFOB    WGH      1216   8-28-89   7:17p
    INFOF    WGH      1081   8-30-89  12:20a
    INFOG    WGH      1398   8-28-89   7:16p
    INFOP    WGH      1420   8-29-89   9:08p
    INFOR    WGH      1323   8-30-89   8:19a
    INFOS    WGH      1255   8-28-89   7:17p
    INFOU    WGH      1321   8-28-89   7:12p
    INFOV    WGH      1228   8-30-89  12:03a
    INSTALL  BAT      1037   9-02-89   9:01a
    MAINMEN  WGH       382   8-28-89   7:06p
    MAINMEND WGH       207   8-28-89   7:08p
    MAINMENE WGH       216   8-28-89   7:08p
    MAINMENG WGH       216   8-28-89   7:06p
    MAINMENI WGH       272   8-28-89   7:10p
    MAINMENL WGH       178   8-28-89   7:07p
    MAINMENO WGH       240   8-28-89   7:09p
    MAINMENQ WGH       130   8-28-89   7:10p
    MAINMENR WGH       254   8-28-89   7:09p
    MAINMENS WGH       258   8-28-89   7:07p
    MAINMENT WGH       142   8-28-89   7:09p
    MAINMENV WGH       369   8-28-89   7:07p
    MAINMENZ WGH       295   8-28-89   7:08p
    MOVE     WGH       501   8-28-89   7:35p
    MOVEC    WGH       407   8-28-89   7:36p
    MOVEM    WGH       230   8-28-89   7:36p
    MOVES    WGH       195   8-28-89   7:35p
    MOVEX    WGH        21   8-28-89   7:36p
    ONEDRIVE BAT      1306   9-02-89  12:04a
    OPTIONS  WGH       704   8-28-89   7:23p
    OPTIONSB WGH       236   8-28-89   7:23p
    OPTIONSC WGH      1096   8-30-89  12:36a
    OPTIONSD WGH        71   8-28-89   7:25p
    OPTIONSM WGH       886   8-28-89   7:24p
    OPTIONSP WGH       343   8-28-89   7:24p
    OPTIONSS WGH       462   8-28-89   7:25p
    OPTIONST WGH       255   8-28-89   7:23p
    OPTIONSU WGH        57   8-28-89   7:25p
    OPTIONSX WGH        21   8-28-89   7:26p
    READ     ME       8538  10-14-89   8:32p
    SAMPLE   DOC      1123   5-17-88  12:25a
    SAMPLE   SEC      1365   6-20-88   5:56p
    SECURE   WGH       523   8-28-89   7:27p
    SECURE0  WGH       420   8-28-89   7:27p
    SECURE1  WGH       232   8-28-89   7:28p
    SECURE2  WGH       206   8-28-89   7:28p
    SECURE3  WGH       212   8-28-89   7:28p
    SECURE4  WGH       239   8-28-89   7:29p
    TITLES   TXT      1118   8-30-89   1:26a
    TWODRIVE BAT      1917   9-02-89   8:56a
    UNNAMED  DOC       276   5-05-88  12:46a
    UNNAMED  SEC      1256   5-13-88  10:56p
    WGINS1   TXT      1188   8-30-89   1:39a
    WGINS2   TXT       330   4-07-88  10:42p
    WGINS3   TXT       451   5-01-88   1:51p
    WGINS4   TXT      1287   5-01-88   1:55p
    WGINS5   TXT      1444   6-17-88  11:37p
    WGINS6   TXT      1245   6-17-88   8:02p
    WG_CONV  COM     13626   3-07-88   8:22p
    WORLDGEN DOC     55110   8-30-89   2:29a
    WORLDGEN EXE     92656   9-02-89   6:19p
    ZOOM     WGH       423   8-28-89   7:29p
    ZOOMG    WGH       201   8-28-89   7:31p
    ZOOMP    WGH       527   8-28-89   7:30p
    ZOOMZ    WGH      1203   8-28-89   7:30p
           96 file(s)     221532 bytes
                           29696 bytes free
