---
layout: page
title: "PC-SIG Diskette Library (Disk #939)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0939/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0939"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLIGHT PLANNING (ALSO 1476 )"

    FLIGHT is a flight-planning program for private pilots.
    
    Enter up to 20 waypoints by name and the estimated airspeed of the
    plane. The program matches the waypoints against data files, retrieves
    the latitude, longitude and magnetic variation for each point, and then
    calculates the magnetic course, the distance between the waypoints, and
    the estimated time between each set of waypoints.
    
    The results are printed on the screen, together with the total distance
    and the total estimated flight time. You can then have a flight log
    printed. The files containing the waypoints for FLIGHT can be edited
    from within the program or with an ASCII wordprocessor.
    
    MORSE is a workable code-practice program for anyone who wants to learn
    Morse Code for their Amateur Radio Operator's license.
    
    The program creates random-text groups of five characters each, then
    sends them in Morse code with the cursor underlining each word as it is
    sent.  MORSE also sends individual random letters well spaced in time
    and reads text files prepared by your wordprocessor in capitals, then
    sends the text line-by-line.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0939.TXT

{% raw %}
```
Disk No:  939
Program Title:  FLIGHT PLANNING FOR PRIVATE PILOTS v3.0 (Disk 1 of 2)
PC-SIG version: 2

FLIGHT is a flight-planning program for private pilots.  You enter up to
twenty waypoints, by name, and the estimated airspeed of the plane.  The
program matches the waypoints against data files, retrieves the
latitude, longitude and magnetic variation for each point, and then
calculates the magnetic course, the distance between the waypoints, and
the estimated time between each set of waypoints.  The results are
printed on the screen, together with the total distance and the total
estimated time over.  You can then have a flight log printed.  The files
containing the waypoints for FLIGHT can be edited from within the
program or with an ASCII word processor.

And, if you're a pilot (or want to be a pilot), Morse code is an
intricate part of your life.  MORSE is a workable code-practice program
for anyone who wants to learn Morse Code for their Amateur Radio
Operator's license.  The program generates random-text groups of five
characters each, then sends them in Morse code with the cursor
underlining each word as it is sent.  MORSE also sends individual random
letters well-spaced in time and reads text files prepared by your word
processor in capitals, then sends the text line-by- line.

This is the first of a two disk set.  The second disk can be found on
disk #1476.

Usage:  Flight-Planning/Morse Code.

Special Requirements:  A printer is optional.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

CONFIG   EXE  Configuration program.
CONFIG   INF  Configuration data.
FLIGHT   EXE  Main program.
FLIGHT   TXT  Documentation.
INTER    COM  Intersection computer.
README        File descriptions.
WESTUS   DAT  Data file for flight.
MORSE    COM  Morse tutor.
MORSE    PAS  Source code.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## FLIGHT.TXT

{% raw %}
```

                                FLIGHT 
 
                              VERSION 3.00 
 
                               written by
                             Patrick C. Roe 
                             Route 1 Box 2201 
                             Lopez, Washington 98261 
 
      Copyright 1988 Pebble Point Corporation - all rights reserved

                        Phone 206/468-3366 (Days) 

                              HOW IT WORKS
                         (a quick introduction)

1.  Put the Flight disk in any drive (or load it in a hard disk
directory) and type "Flight".  The introductory screen appears, then the
waypoint file is automatically loaded appears on the left side of the
screen.

2.  You can move the cursor (actually a bar), up and down the list with
the Up/Down arrows, the PgUp/PgDown keys, the Home/End keys, or
^Home/^End.

3.  The Waypoint file is sorted alphabetically by states.  To move to the
begining of the waypoints for a state press F3 and enter the two letter
state abbreviation.  To find a specific Waypoint press F4 and enter in up
to eight letters of its name (usually four or five letters are enough).

3.  When the waypoint you want is illuminated by the bar press <CR> or
<ENTER>.  That point will appear on the right side of the screen.  Enter
up to 20 waypoints in this fashion.  Press F10 when you are through.

4.  The Waypoints will appear, with a place on the right to enter wind
directions and speed. If you don't want to bother with wind calculations
just press F10.  Otherwise, use the arrow keys to move the cursor to each
location and enter wind direction and speed.  Press F10 when you are
done.

5. When asked, enter your estimated airspeed.

6. From here on the machine does the work.  It will print out on the
screen a flight plan in log form showing each waypoint, the lattitude and
longitude (so you can enter them in your loran), the wind direction and
speed, course, heading, distance, estimated time enroute, and total
distance and time.  On request the printer will print out the flight log.

That's all there is too it.  

Now, you can run the program and read the details later.

FLIGHT - The flight planning program

Index

1.  What the program does (and does not);
2.  Hardware.
3.  Setting up the system.
4.  Loading and starting the program.
5.  Navigating through the waypoint file and selecting waypoints.
6.  Entering new points, deleting and editing the file.
7.  Loading a new file.
8.  Entering wind speed and direction.
9.  The Waypoint file.
10. The Intersection program.


1.  What the Program Does (and does not).

FLIGHT calculates the magnetic course and distance between selected
waypoints, computes ground speed, heading and time enroute between
waypoints based on the wind directions and speeds entered, and prints out
a flight log showing all these factors, plus the total time and distance
for the flight.  It will calculate a flight with up to 19 legs (twenty
waypoints, including the origin).

This version does not estimate fuel consumption, or attempt to calculate
the most economical altitude based on the fuel consumption and wind
direction at various altitudes.

2.  Hardware.

FLIGHT is designed to run on the MS-DOS system and to be printed on a
printer using the Epson or Toshiba control codes.  The program can be run
from either floppy drive or from a directory on a hard disk.  Just make
sure all the program and the data files are on the same disk or
directory.

3.  Setting Up the System

The FLIGHT disk contains the following files.  The data files and the
file CONFIG.INF should be on the same disk, or in the same directory as
FLIGHT.EXE. 

   FLIGHT.EXE    -  the Flight program  
   CONFIG.EXE    -  Configuration program (see instructions)
   INTER.COM     -  Intersection computer
   CONFIG.INF    -  Contains configuration data
   ALLUS.DAT     -  Waypoint file - U.S. (Alaska and some Canada)
   CARIBMEX.DAT  -  Waypoint file - Carribean and Mexico
   EUROPE.DAT    -  Waypoint File - North Atlantic and Europe

   FLIGHT   DOC  -  Instruction file  
   INTER    DOC    

When you have arranged the files on the disk or directory you must run
the configuration program first by entering CONFIG.

This short program generates the CONFIG.INF file which is automatically
read each time the program FLIGHT is run.  This tell the program which
waypoint data file to load automatically and also provides the proper
codes for the printer in use (Epson or Toshiba) so that the flight plan
will be printed out in the right format.

4.  Loading and starting the program.

With your computer up booted, and logged onto the drive with the FLIGHT
program just enter "FLIGHT".  The program will load, show you and
introductory screen, then automatically load whichever waypoint file you
have designated at the time you ran the configuration program.  The first
twenty waypoints in the file will be displayed on the right hand side of
the screen.  The cursor location is shown by illuminating the waypoint it
points to in reverse video - like a bar. An instruction list is displayed
at the bottom of the screen to remind you of the commands.

5.  Navigating the Waypoint File and Selecting Waypoints.

You move the cursor bar through the waypoint file with the following
commands:

Arrows Up/Down   

Moves the cursor bar up or down one line.  If the cursor bar is at the
bottom of the screen the down arrow will add the next waypoint at the
bottom of the screen with one waypoint scrolling off the top, and
similarly if you are at the top.  The cursor will not move beyond the
beginning or end of the file (except that there is always a blank
waypoint at the very end of the file.

Home/End  

These commands move the cursor bar to the top or bottom of the page.
 
PageUp/Down 

This moves the cursor bar up or down one page, displaying the next page
or the previous page.

Control-Home/Control-End (^Home/^End) 

This moves the cursor bar to the first waypoint or the last waypoint in
the file.

F2 Find St 

This command move the cursor bar to the first waypoint in each state. 
Press F4, then enter the two letter abbreviation for the state.  You can
then scroll through the state to find the exact waypoint you want.

F3 Find Pt

This command moves the cursor to the exact waypoint you want.  Press F4
then enter enough letters of the waypoint name to identify it uniquely. 
For example, to find Detroit you would only need to enter "Detr".  You
can enter the name in either upper or lower case, or both.  The cursor
bar will move to the first waypoint which matches your entry.

What happens if you have two or more waypoints with the same name such as
Albany, New York, Albany, Georgia, or Albany, Oregon.  Since Albany,
Georgia is the first one in the list, the cursor bar will stop there. 
Just type F4 and the cursor bar will continue to the next Albany.  Using
this feature you can find a waypoint if you only know the first two,
three or four letters.  Just press F4 and type in the letters you know. 
By repeatedly pressing F2 you can skip through the list until you find
the point you are looking for, or until you have to try another letter.

What happens if you have three airports in the same city? Like
Bakersfield.  Using F4 will select one, with two more following.  You
should be able to tell them apart by their identifier. Just use the
arrows to move the cursor bar to the one you want.  Alternatively, when
you are making up or modifying your waypoint list, enter the airport by
its name, rather than the city.  For example, for San Diego you can
enter "LINDBERG", "MONTGOMERY" and "BROWNFIELD".

F4 Rpt Find

When there are several waypoints with the same name, on the same first
eight letters, the command F3 will find the first one.  But when you have 
Albany, Georgia, Albany, New York, and Albany, Oregon this is a problem. 
Just press F4 and it will continue the search to the next waypoint with that
name.

F5 Find ID

Press F5 then enter the two, three or four letter identifier of the airport
or navaid you are looking for and this will select it from the waypoint 
list.

To Select a Waypoint

Just move the cursor bar to the waypoint you want and press <CR> or
<ENTER>.  You will hear a "beep" and the waypoint, with a number, will
appear in a box on the right hand side of the screen.  As you enter each
waypoint it will appear below the previous waypoint.  When you have
entered all the waypoints you want press F10 to go to the next step.
You can only enter 20 waypoints.  At the 20th waypoint you will hear a
beep and the program will automatically go to the next step.

F1 Re-Start

If you make a mistake in the order in which you enter waypoints, or if
you change you mind, just press F1.  This will clear the box of waypoints
selected and you can start over.

6.  Entering new points, deleting and editing the file.

The Waypoint file or files were designed to be made up separately with
your word processor or data base program. (See section 9 below). 
However, when you are in the middle of computing a program and need to
add another waypoint you can do so.  Or, if in computing a flight you
find that Detroit is 6237 miles from Palwaukee field in Chicago you can
be sure there is an error in the waypoint file.  So an editor has been
provided so you can correct this.

Alt-A  Add a Point

A line will be cleared and all waypoints will be moved down one line. 
You can enter the new waypoint by typing it in (IN CAPITALS PLEASE).
New waypoints should be entered in their proper alphabetical position so
you can find them again, but other wise they work just fine in any
location.  Enter the name, lattitude, longitude and so on so there are in
exactly the same position as the others on the list.  The waypoint line
is exactly 39 letters long.  The program selects lattitude, longitude and
other data by its position on the line.  You can enter more than 39
letters, but the program will only read the first 39 anyway.  Use the
backspace to make corrections, press <ENTER> when done.

Alt-E  Edit a Point

When you press Alt-E and go into the edit mode you edit by writing over the
waypoint on the screen.  The right and left arrows will move you to the
proper position.  To blank something out space over it with the space
bar.  Press <ENTER> when through.

Alt-D Delete a Point

Pressing Alt-D deletes the point under the cursor bar and moves all other
points up one.  If you flub a new entry you can either delete it with F7
and start all over or you can edit it with F6.

The program automatically saves all new entries and changes to the file
which was originally loaded.  In this way as waypoints are added or
changed you will gradually build up a highly customized file which fits
your own area and flying pattern.

7.  Loading a new file.

A new file can be loaded at any time just by pressing F8.  This does NOT
erase the waypoints you have already selected.  For example, if you can
working on a flight from Bakersfield to Cabo San Lucas you can enter the
waypoints up to the border, and the limit of the ALLUS waypoint file,
load the waypoint file CARIBMEX and continue right on with your flight
plan.  Of course if you fly this are regularly it would be handier to
combine the waypoints you might need into the same file.

To load a new file press F8.  A pop up screen will list the waypoint
files available on the disk.  You enter the name, including the three
letter extension and the file will load.  You can then continue with your
flight plan, or you can press F1 and start over again.

8.  Entering wind speed and direction.

When you have finished entering the waypoints for your flight and have
pressed F10 the Wind Screen will appear.

The wind screen is like a small spread sheet.  The waypoints are listed
in order with two columns on the right, one for wind direction and the
other for wind speed.

You make your entries line by line, or go down each column.  The
left/right and Up/Down arrows will move you the to proper space. When you
have typed in an entry you can press the <ENTER> key to enter the speed,
or direction, or press the arrow keys to move to the next space.  If you
press F9 it will repeat the last entry.

If you enter a direction greater than 360 degrees you will get a beep and
be asked to re-enter.  You cannot enter a wind speed greater than 99.  
Anyone who flies in a wind greater than that does not need this flight
planning program. 

When you are done press F10.  You will then be asked for your estimated
air speed.  

9.  Printing the Flight Plan

From this point on the machine takes over and does the work.  All you
need to do is answer questions such as:

     Do you want a print of this flight plan?
  
     If you answer yes the program will print out a flight log in the
format shown.

     Otherwise you will be asked if you want to compute another flight
plan.  If you answer no the program will end.  All changes to the
waypoint file are automatically saved.

10.  The Waypoint file.

The waypoint files are ASCII text files written in the following format:

             BELLINGH BLI  048-56.7 0122-34.7 -22 WA

This is the data file entry for Bellingham, Washington.  New waypoint
entries or files must be written in this exact format with the same
number of spaces for each item, the same number of spaces between items,
and the same total number of spaces as follows:

    a.  The first eight characters are the first eight characters of the
name of the waypoint which can be a navaid, an airport, an intersection,
or any other geographic feature.  As a convention, there are no spaces,
i.e. Paine Field would be written PAINEFIE.  Common preceding words such
as "point", "port", "saint", "fort", "cape" are all abbreviated
PT,PT,ST,FT,CP, and so on.  Given these conventions, eight characters are
more than enough to identify a waypoint uniquely.

    b.  There is a space, then the next four characters are the
identifier as shown on in the various navigation publications.  No use of
the identifiers are made in this program, so far.

    c.  The next eight characters are the latitude written to the tenth
of a minute.  Figures of less than a minute are not all that critical,
but as long as they are shown that way in the navigation publications
they can be used.  With reasonably accurate loran receivers the tenth of
a minute can be very helpful.

    d.  The longitude takes up nine characters.  A minus sign [-] should
be place before south longitude or east lattitude.  This is simply a
convention for the purposes of this program.  The extra leading character
in both the latitude and longitude allows room for the minus sign.  This
program calculates the proper course and distance when going from south
to north lattitude, and conversely, and from west to east longitude, and
conversely.  However, in computing a course which crosses the
international date line an anomoly occurs.  You will have to subtract
your course from 360 degrees.  The distance in such cases is correct. 
Since crossing the dateline, for the users of this program, will be a
rare occurence, and the correction so simple, it didn't seem worthwhile
to include a fix in the program.

    e.  The magnetic variation takes up three characters, including the
sign.

    f.  The last two characters are the two letter state abbreviation as
used by the postal service.  The Canadian provinces have similar
abbreviations and the overseas navigation publications give similar
abbreviations for foreign countries.

The program includes a very simple editing program which can add
waypoints, or make changes while you are running the program.  Howver,
the file of waypoints can be edited with any text editor which prints
plain ASCII text.  They can also be read into a dBase file or a Lotus
file and sorted, edited and re-written using those programs (The files
were written from a "Smart" database program).  The order of waypoints in
the file in not particularly important except for ease in finding the
points.

The configuration program will select one waypoint file, the one you use
most often, to load automatically.  Any other waypoint file with the
extension ".DAT" will be listed in the menu that appears when you press
F8.  Since the seach program to find states or points, runs quite fast,
the waypoint file can be very large and still manageable.  Therefore it
is recommended that you principal waypoint file include all the points
you might ordinarily need.

                             INTER.DOC

1.  This program computes the geographic coordinates of airway
intersections from the course and distance from the VOR used as a
reference for that intersection.

2.  Operating Instructions:

   To run type "INTER"

   The introductory screen will list six choices of a file of waypoints
to load.  These are the files which contain the VORs which govern the
location of the airway intersections. You can use the same waypoint files
you use for the flight planning program FLIGHT.  Make your selection and
the program will tell you it is loading.

   The input screen will list four items -

      Intersection Name
      VOR reference
      Course from the VOR (as shown on the instrument charts)
      Distance from the VOR (as shown on the instrument charts)

   Enter all test data in capital letters.  If you enter a VOR reference
which is not on the file you will be asked to re-enter the name. When you
have entered the four items above the the program asks if all data is OK.

If you answer "n" the entry spaces will clear and you can re-enter the
data. 

   Otherwise the program will compute the intersection coordinates, add
to them the variation (based on the variation of the nearest VOR), the
state (based on the state in which the reference VOR is located) and
print all the data out in waypoint format at the top of the screen. This
is the same waypoint format used in the regular waypoint files.

   As successive intersections are computed they are added to the list at
the top of the screen, up to a maximum of fifteen.  When you reach 15
waypoint each new waypoint added at the bottom will cause the waypoints
at the top to scroll off.

   When you have finished computing waypoints type DONE in the space for
the intersection name.  This will terminate the computation portion of
the program. You will then be asked for the name of a file in which to
save the intersections.

      If you choose the name of an existing file the intersections will
be added at the end of that file.

      If you choose a new name a new file will be opened and the
waypoints written to that file.

      You can read the intersections from one of these files into your
word processor and add them to another file, or read them into a
datafile, sort them, and write them out in any order you wish.

        ---------   THAT'S ALL THERE IS TO IT  -------------

3.  Some hints and suggestions:

   Intersections, except DME intersection, or those established by
reference to an NDB, are established by reference to two VORs.  It is
worthwhile to compute the location for each intersection twice, once for
each reference VOR.  In most cases these will come within 5/10 of a
minute of lattitude or longitude.  For lattitude differences 5/10 of a
minute is within the acceptable limits of accuracy, considering airways
are four miles wide.  Length of a minute of longitude is proportional to
the cosine of the lattitude of the position.  So at 45 degrees north a
difference of one minute of longitude would be .707 nautical miles, also
within acceptable limits.

   Nearly all of the differences are accountable by the rounding off of
distance on the charts, and use of DME distances.  The DME distances will
be different, depending on the altitude.  This will be particularly true
the closer one gets to a VOR.

   If the difference between the two computed positions is more than a
mile you should check the lattitude and longitude of the reference VOR to
see if it has been entered correctly.

                           *******************


If you have comments or suggestions on these programs please write or
call.  And register your software.  You will be notified of updates, and
regular additions to the waypoint file will be available.  The
registration fee is $25.00

Limited product support is provided.  Call 206/468-3330 during hours of
9:00 a.m. to 5:00 p.m. weekdays, Pacific time.  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0939

     Volume in drive A has no label
     Directory of A:\

    CONFIG   EXE      5648  11-27-88  11:56a
    CONFIG   INF        65   4-01-89  12:30p
    FILE0939 TXT      2015   6-19-89  10:07a
    FLIGHT   EXE     41520   1-22-89  12:24p
    FLIGHT   TXT     20874  11-06-88   7:45p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771   5-15-89   9:40a
    INTER    COM     17782   8-20-88   8:24p
    MORSE    COM     24545   9-06-87   7:55p
    MORSE    PAS     14104   9-06-87   9:06p
    README            1361   4-01-89  11:51a
    WESTUS   DAT    177776   1-22-89   9:41a
           12 file(s)     306499 bytes
                           10240 bytes free
