---
layout: page
title: "PC-SIG Diskette Library (Disk #1892)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1892/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1892"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RACE!"

    RACE! is a game of miniature car racing.  The cars can accelerate,
    decelerate, or turn through the race courses while many obstacles block
    their progress, including walls, slopes, gates, tornadoes, and gas
    slicks.  The more tracks a car successfully completes, the better the
    car becomes in areas such as acceleration, speed, traction, and
    helicopter speed.  Also, RACE! lets the user design his own race tracks
    on which the cars compete.
    
    This is a version of the old race program found in all the video
    arcades, and the quality is nearly as good.  You get an overhead view,
    looking down on track where you are racing other cars.  20 different
    tracks are included.  Great fun for kids, yet challenging for us older
    kids.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1892.TXT

{% raw %}
```
Disk No: 1892                                                           
Disk Title: Race!                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: Race!                                                    
Author Version: 05/06                                                   
Author Registration: $5.00                                              
Special Requirements: CGA or EGA.                                       
                                                                        
RACE! is a game of miniature car racing.  The cars can accelerate,      
decelerate, or turn through the race courses while many obstacles block 
their progress including walls, slopes, gates, tornadoes, and gas       
slicks.  The more tracks a car successfully completes, the better the   
car becomes in areas such as acceleration, speed, traction, and         
helicopter speed.  Also, Race! lets the user design his own race tracks 
on which the cars compete.                                              
                                                                        
This is a version of the old race program found in all the video        
arcades, and the quality is nearly as good.  You get an overhead view,  
looking down on track where you are racing other cars. 20 different     
tracks are included.  Great fun for kids, yet challenging for us older  
kids.                                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## RACE.DOC

{% raw %}
```
 Race!
 by Carl Erikson

 (C) Copyright 1989 Carl Erikson
 All rights reserved

This disk contains Race! that runs on the IBM PC, XT, AT, and 100%
compatibles. Since Race! is being distributed through the shareware
system, feel free to copy this program and give it to your friends.
If you plan to use this game beyond a test period of 10 days, you
are obligated to register with the author. This registration fee can
be as low as $5.00 so I hope I am not asking too much. This program
or the registered documentation (see below) cannot be duplicated or
sold for commercial profit without the written consent of the
author. This program or the registered documentation cannot be given
away or sold in connection with any other commercial product without
the written consent of the author.

 Carl Erikson
 310 Edgemeer Place 
 Oberlin, Ohio 44074 


Disclaimer:
	
	The author assumes absolutely no responsibility for any damages
that are inadvertently caused by this program. There is no way Race!
could damage a system but I have to protect myself. In other words,
I hope this does not scare anyone away from playing Race!.


Notes about documentation:

	This file is not meant to be the complete documentation for
Race!. It is instead a file to be used to get the user started in
running Race!. To get the complete documentation for this program,
you must register with the author. At the end of this brief
documentation are the instructions on how to register.


Requirements for Race!:
	
	A Color Graphics Adapter and color monitor (Enhanced Graphics
Adapter is optional) are required. A Hercules Graphics Adapter might
be able to run Race! if a CGA simulator is purchased. Race! requires
MS-DOS or PC-DOS 2.0 or later.


Description of Race!:

	Race! is a game of miniature car racing. The cars can
accelerate, decelerate, or turn through the race courses while many
obstacles block their progress including walls, slopes, gates,
tornadoes, and gas slicks. The more tracks a car successfully
completes, the better the car becomes in areas such as acceleration,
speed, traction, and helicopter speed. Also, Race! lets the user
design his own race tracks on which the cars compete.


Getting started:

	At the command line, type 'RACE' if the CGA version is being
played, or type 'EGARACE' if the EGA version is being played. Once
this is done, the screen should have the main menu along the left
side of the screen and a red rectangle around the right side of the
screen. This red rectangle is the track area, or the playing field
where all the cars will race. To work the menus in Race!, you must
type the key in the parentheses in order to enact that command. For
example, if the screen had 'E(X)it' written on it, you could press
'x' or 'X' to exit that part of the program. Also, whenever the
program expects input from the keyboard, an underline cursor will
appear. The user must type the desired number or name and press
enter.


Main menu:

	The main menu consists of the following options: (R)ace,
(M)ake, (S)et, and E(X)it.

(R)ace option:
	This option lets the user or users compete in a miniature
racing contest. The program firsts asks you how many human cars will
be racing. There are always four contestants in the races so if you
choose (1) human player, there will be three computer cars competing
against you. If you choose (0) human players, Race! will enter a
demo mode with four computer cars racing. This can be exited by
pressing 'x' or 'X'. Next, you must specify on which track you want
to race on. There are nineteen tracks, 1 through 19, on the disk that
can be played. Then, the racing will start! Each car can accelerate,
decelerate, turn right, and turn left. The controls are listed
below:

 CGA: Red/W  EGA: Red
         Up Arrow
            ^
 Left Arrow<->Right Arrow
            v
        Down Arrow

 CGA: Wht/B  EGA: Blue
   2
   ^
 Q<->E
   v
   W

 CGA: Wht/R  EGA: Green
   6
   ^
 T<->U
   v
   Y

 CGA: Blu/R  EGA: Yello
   L
   ^
 ,<->/
   v
   .

During the race, there are two kinds of things that your car can
pick up. The first is a number and this adds points to your score.
The second is a wrench which gives you one bonus point. Also while
you are racing, beware of gas slicks and tornadoes for they will
put you into a nasty spin. After crossing the finish line for the
specified laps set in the configuration data (see below) the
winners may be given bonus abilities if they have three or more
bonus points. They can increase their acceleration, maximum speed,
traction, or helicopter speed (how long it will take after a crash
for the helicopter to bring in your new car). At the end of a car's
career, it might qualify for the high score list. If it does, you
can input three initials to identify yourself or your car. Note that
if you are playing against the computer cars, they will get tougher
as you survive more tracks. Also, after each race, you are given the
option to let in a new human player or to exit the game.

(M)ake option: This option is used to make courses. Its commands are
explained thoroughly in the registered documentation (see below on
how to register).

(S)et option: This option lets you change the configuration data for
Race!. You are given the option of changing the number of laps (1
through 9) per race, the delay factor (used for faster or slower
machines to get the right game speed, 1 through 29999), and the
sound (whether it will be on or off). You can also initialize the
high scores with the initialize command.

E(X)it option: Exits the program. The E(X)it command is used to get
out of many parts of the Race! program.


Registering:

	There are three different ways to register. The first way is to
send $5.00. This will make you a registered Race! user and it will
get you the registered documentation and news of any updates to
Race!. The second way is to send $10.00. This will make you a
registered Race! user and it will get you the registered
documentation, news of any updates to Race!, and a disk with 40
extra tracks to be used by the Race! game. The third way is to send
$15.00. This will make you a registered Race! user and it will get
you the registered documentation, news of any updates to Race!, and
a disk with 80 extra tracks to be used by the Race! game. Be sure to
send your address and your name when you register.


Extra track disks:

	If you register by paying $15.00, you will automatically
get both sets of the extra track disks. If you register by paying
$10.00, you will get the first set of the extra track disks. If you
register by paying $5.00, you will not get any extra track disks.
These extra track disks can be bought separately from the
registration packages. They cost $5.00 each and have 40 tracks
apiece. Only registered users can buy these extra track disks. If you
decide you want to buy an extra track disk, specify whether you want
the first set or the second set. If you decide to buy both, then all
80 of the tracks will be on the disk. Be sure to send your address
and your name if you decide to buy extra track disks.


File limit:

        Since there is a limit to the number of files that can be on
a 360K drive, the maximum 99 tracks will not fit on the disk without
a file error occurring. There are a couple of things to do to get
around this. In all cases, you should backup the original disk. If
you only have CGA, you can erase all files beginning with 'EGA' by
typing at the command line, 'erase EGA*.*'. If you have EGA and you
see no use in keeping the CGA version, you can erase these files:
RACE.EXE, RACE.FNT, RACE.SHP, CGA.BGI. To do this you must type 'erase
RACE.EXE', 'erase RACE.FNT', 'erase RACE.SHP', and 'erase CGA.BGI' at
the command line. These two options should barely let the maximum of 99
tracks fit on the Race! disk. If you have a hard drive or a high density
drive, you can use as many files as you want so this will not be a
problem.


Final words:

	Thanks for supporting the shareware system and have a great
time with Race!.


Send registration fees to:

        Carl Erikson
        310 Edgemeer Place
        Oberlin, Ohio 44074

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1892

     Volume in drive A has no label
     Directory of A:\

    CGA      BGI      6029  11-02-87   4:00a
    EGARACE  EXE     66624   5-06-89   3:49a
    EGARACE  FNT      6720   5-06-89   3:02a
    EGARACE  SHP     22800   5-06-89   3:46a
    EGAVGA   BGI      5139  11-02-87   4:00a
    FILE1892 TXT      2073  12-27-89   5:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   5:04p
    PRINTDOC BAT       314   5-06-89   3:32a
    RACE     0        1588   5-06-89   4:22a
    RACE     1        1588   5-06-89   4:18a
    RACE     10       1588   5-06-89   4:18a
    RACE     11       1588   5-06-89   4:18a
    RACE     12       1588   5-06-89   4:19a
    RACE     13       1588   5-06-89   4:19a
    RACE     14       1588   5-06-89   4:19a
    RACE     15       1588   5-06-89   4:19a
    RACE     16       1588   5-06-89   4:19a
    RACE     17       1588   5-06-89   4:01a
    RACE     18       1588   5-06-89   4:43a
    RACE     19       1588   5-06-89   4:37a
    RACE     2        1588   5-06-89   4:18a
    RACE     3        1588   5-06-89   4:18a
    RACE     4        1588   5-06-89   4:18a
    RACE     5        1588   5-06-89   4:18a
    RACE     6        1588   5-06-89   4:18a
    RACE     7        1588   5-06-89   4:18a
    RACE     8        1588   5-06-89   4:18a
    RACE     9        1588   5-06-89   4:18a
    RACE     DOC      8323   5-06-89   3:23a
    RACE     EXE     66240   5-06-89   3:52a
    RACE     FNT      2112   1-01-80  12:05a
    RACE     HSC        80  12-27-89   4:08p
    RACE     SET         5  12-27-89   4:08p
    RACE     SHP      8400   1-01-80  12:09a
    RACE     SIG      3712   5-06-89   3:20a
    SHOWDOC  BAT        40   5-06-89   3:33a
           37 file(s)     230949 bytes
                           69632 bytes free
