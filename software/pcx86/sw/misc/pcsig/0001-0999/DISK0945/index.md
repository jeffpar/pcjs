---
layout: page
title: "PC-SIG Diskette Library (Disk #945)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0945/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0945"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ROCKET SIMULATION"

    LAUNCHER simulates a single stage-to-orbit launch vehicle. This is a
    very good quality simulation to learn the "feel" for orbital
    mechanics. You can design your own vehicle and pilot it to orbit and
    rendezvous with the space station. An interest in orbital mechanics is
    required (knowledge about it would be helpful, but is not mandatory). A
    documentation file is included.
    
    A collection of programs inspired by the Computer Recreations column in
    "Scientific American." Several data files are included.
    
    ~ HYPER -- a hyper cube (fourth-dimensional cube) drawing program.
    
    ~ WALLPAP -- an intricate patterns drawing program with a very simple
    numeric seed.
    
    ~ WATOR -- a biosphere simulation in which fish are eaten by sharks,
    which die and reproduce.
    
    ~ CLUSTER -- a simulation of the motion of star clusters of two or more
    stars.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
Files of this disk

LAUNCHER.EXE    73266   8-25-87   4:24p The launcher program
LAUNCHER.DOC     6815   8-25-87   4:21p Doc file for launcher
 CLUSTER.EXE    51082   3-29-87   3:13p The star cluster gravity program 
    STAR.DAT      837   3-29-87   3:36p data file for cluster
  2STARS.          57   1-01-86   3:00p data file for cluster
  3STARS.          77   1-01-86   3:01p data file for cluster
   HYPER.EXE    44820   4-01-87   9:42p Hyper cube drawing program
  LANDER.EXE    69664   7-21-87   8:04p Lunar lander program
 WALLPAP.EXE    42274   3-29-87   9:55p Wallpaper for the mind program
   WATOR.EXE    47222   3-29-87   3:17p Biosphere simulation program

```
{% endraw %}

## FILES945.TXT

{% raw %}
```
Disk No  945
Program Title: ROCKET SIMULATION
PC-SIG version 1
 
    This disk has programs on physics and space science. Many were inspired
by the "Computer Recreations" column in "Scientific American." Programs
included are: HYPER, a hyper cube (4th- dimensional cube) drawing program;
WALLPAP, a program that draws intricate patterns with a very simple numeric
seed; WATOR, a simulation of a biosphere where fish are eaten by sharks,
sharks die and reproduce; and CLUSTER, a program to simulate the motion of
star clusters of two or more stars. Several data files are included to
demonstrate the program. Also included is another version of the venerable
lunar lander, but this one uses graphics to show the relationship between
altitude and velocity and also has a choice of many different moons and
planets to try your skills at. The main program is LAUNCHER. LAUNCHER
simulates a single stage-to- orbit launch vehicle. This program is a very
good quality simulation to learn the "feel" for orbital mechanics. You may
design your own vehicle and pilot it to orbit to rendezvous with the space
station. An interest in orbital mechanics is required (knowledge would be
helpful but not mandatory). A documentation file is included.
 
Usage: Entertainment
 
System Requirements: 128K memory, one disk drive, and color graphics.
 
How to Start: Type: LANDER (press enter) to run LANDER, LAUNCHER (press
enter) to run LAUNCHER, CLUSTER (press enter) to run CLUSTER, HYPER (press
enter) to run HYPER, WALLPAP (press enter) to run WALLPAP, and WATOR (press
enter) to run WATOR
 
Suggested Registration: $20.00
 
File Descriptions:
 
LAUNCHER EXE  The LAUNCHER program.
LAUNCHER DOC  Doc file for LAUNCHER.
CLUSTER  EXE  The star cluster gravity program.
STAR     DAT  Data file for CLUSTER.
2STARS        Data file for CLUSTER.
3STARS        Data file for CLUSTER.
HYPER    EXE  Hyper cube drawing program.
LANDER   EXE  LUNAR LANDER program.
WALLPAP  EXE  Wallpaper for the mind program.
WATOR    EXE  Biosphere simulation program.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk No 945 ROCKET SIMULATION  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for LAUNCHER, Type:                          ║
║           COPY LAUNCHER.DOC LPT1: (press enter)                         ║
║                                                                         ║
║ To run the program, Type: LAUNCHER (press enter)                        ║
║                                                                         ║
║ To run the program LANDER, Type: LANDER (press enter)                   ║
║                                                                         ║
║ To run the program CLUSTER, Type: CLUSTER (press enter)                 ║
║                                                                         ║
║ To run the program HYPER, Type: HYPER (press enter)                     ║
║                                                                         ║
║ To run the program WALLPAP, Type: WALLPAP (press enter)                 ║
║                                                                         ║
║ To run the program WATOR, Type: WATOR (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LAUNCHER.DOC

{% raw %}
```





                             Launcher

                           Version 1.0

                         August 25, 1987

A single stage to orbit launch vehicle simulator.  Written by 
Robert Castle,  CIS 70330,605.  The source code for launcher 
(written in Quickbasic) is available for a $20 charge from 

                        Robert Castle
                        306 Lost Rock Dr.
                        Webster Tx.  77598

This software is for the enjoyment and hopefully the 
enlightenment of the user.  No warranty of any kind is expressed 
or implied. 


Getting Started Quickly
-----------------------

The launcher program is written for the IBM PC or compatible.  A 
CGA card or equivalent is required. 

Initial Startup
---------------

The program is started by simply typing "launcher" at the DOS 
prompt.  

You will be prompted for your name and the name of your next of 
kin. Any answer here will do.  

You will then be asked if you have EGA capability.  If you do hit 
the "Y" key.  If you don't hit any other key.  

Vehicle Selection
-----------------

You will be presented with a vehicle selection menu.  Since no 
single stage to orbit vehicle currently exists I made up some
reasonable numbers.  There are 2 already defined launchers and a 
third "make up your own".  I suggest you start with the 
"advanced" launcher for your first several tries.  

Use the arrow keys to position the arrow on the screen to the 
vehicle of your choice and hit enter.

Running
-------

You will get a brief page of explanation.  After reading it press 
enter and you will start the simulator.  You have control over 
only 2 (but critically important) flight control parameters: the 
pitch angle of the vehicle and the throttle.

PITCH ANGLE
-----------

This is the angle of the vehicle relative to the surface of the 
earth.  An angle of 0 is "level" and an angle of 90 is straight 
up.  The up and down arrows change this angle by 5 degrees.  The 
page up and Page down keys change the angle by 1 degree.

THROTTLE
--------

The throttle has only limited control.  The HOME key gives you 
full throttle, the left arrow key gives you 65% of Full and the 
End key shuts down the engines.  You can go from 65% to Full and 
back as many times as you like but after a SHUTDOWN you can only 
go to the ORBIT throttle setting (by pressing HOME).  This 
throttle setting is designed for Orbit adjust maneuvers.  ie do 
not shut down until you are in orbit or very close to it.  The 
throttle will automatically limit itself to keep the "G" level on 
the vehicle below limits (usually 3 Gs).

OBJECT
------

The object (other than learning a "feel" for orbital mechanics) 
is to get into a 250 nmile circular orbit to rendezvous with a 
space station.  The program will display how well you did if:
        1.  you run out of fuel
        2.  you press escape

HAVE FUN!!!!


DESCRITPION OF DISPLAY AND MORE DETAIL
--------------------------------------

Number Display
--------------

The number display looks like this

        Alt=   xxxxx    Vel= xxxxx
        Throt= xxxxx    Gs= xxxxxx
        Ang=   xxxxx    Vh=  xxxxx
        FPA=   xxxxx    Qbar= xxxx
        Ha=    xxxxx    Hp=   xxxx

Alt=  Current altitude, in feet if altitude less than 1 nautical 
mile, in nautical miles otherwise.

Vel=  Current velocity in feet per second.  This is the inertial 
velocity (in this model the earths rotation is NOT modelled).

Throt=  The throttle setting in percent.

Gs=   The G level or acceleration level being felt by the 
occupants of the vehicle (that is YOU).

Ang=  The pitch angle of the vehicle in degrees.  This is 
relative to the surface of the earth and not inertial. 

Vh =  The horizontal component of velocity.  This is the same as 
plotted.  In feet per second.

FPA = This is the Flight Path angle of the vehicle in degrees.  
This is the angle of your travel relative to horizontal.  If the 
angle is positive you are climbing toward apogee (your highest 
point).  If it is negative you are falling toward perigee.  Note 
this is NOT the same as the pitch angle.  That indicates the 
direction at which you are THRUSTING.  FPA indicates the 
direction you are actually going in. 

Qbar=  This is the aerodynamic pressure on your vehicle.  You may 
have heard of MAX Q or Maximun aerodynamic pressure mentioned 
with regard to space launches.  The Qbar is one half the velocity 
squared times the atmospheris density.  As you velocity goes up 
the Qbar will go up but as you climb the atmospheric density goes 
down so the Qbar goes down.  Qbar is thus only a problem at low 
altitudes and high speeds.  Keeping the Qbar down is the only 
reason to throttle down to 65%.

Ha and Hp.  The apogee and perigee altitudes in nautical miles.  
These will constantly change as you are thrusting.  While you are 
climbing into orbit you should think of these as the apogee and 
perigee altitudes that would result if you stoped thrusting NOW.  
These are the primary things your are trying to target.  To be 
perfect you should get them both to 250 (the target orbit).

PLOT
----

The Apogee is plotted against the horizontal velocity.  The 
apogee is the main thing you are trying to target.

ANGLE to APOGEE
---------------

A "clock face" is drawn that shows the angle to apogee.  This is 
required so you can tell where you are in the orbit.  You are at 
the "tic mark" at the 12 o'clock point and the hand points to the 
apogee or highest point of your orbit.  Note that during the 
climb into orbit the apogee may move quickly.  This does not mean 
you have moved around you orbit that quickly but that you have 
changed the shape of the orbit by applying thrust.


HINTS
-----

1.  Slowly decrease the pitch angle at first. WATCH YOUR QBAR.  
Go to 65% throttle only to keep from violating the Qbar limit. Go 
back to Full as soon as you can.  

2.  Watch the plot. You want to hit a 250 nmile apogee at orbital 
velocity (about 25000 fps).

3.  Watch the angle to apogee and the FPA.  You want to keep 
apogee in front of you.  Bring the pitch angle down to almost 
zero after a couple of minutes.

4.  Shut down with both apogee and perigee low and use orbit 
thrust to tweak them up.  F9 will run the simulation at 10 times 
normal speed.

5.  Remember orbit burns at perigee affect the apogee altitude 
and vice versa. To increase altitude burn posigrade (pitch of 0), 
to decrease altitude burn retrograde (pitch of 180).

6.  Don't be afraid to use negative pitch angles late in the 
climb into orbit.  This can "push the apogee" around ahead of you 
and keep from it getting to high.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0945

     Volume in drive A has no label
     Directory of A:\

    2STARS              57   1-01-86   3:00p
    3STARS              77   1-01-86   3:01p
    CLUSTER  EXE     51082   3-29-87   3:13p
    FILES    TXT       685   8-25-87   4:36p
    FILES945 TXT      2180  12-16-87   8:41a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1387  12-10-87   4:50p
    HYPER    EXE     44820   4-01-87   9:42p
    LANDER   EXE     69664   7-21-87   8:04p
    LAUNCHER DOC      6815   8-25-87   4:21p
    LAUNCHER EXE     73266   8-25-87   4:24p
    READ     ME       1267   8-25-87   4:55p
    STAR     DAT       837   3-29-87   3:36p
    WALLPAP  EXE     42274   3-29-87   9:55p
    WATOR    EXE     47222   3-29-87   3:17p
           15 file(s)     341671 bytes
                           11264 bytes free
