---
layout: page
title: "PC-SIG Diskette Library (Disk #1392)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1392/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1392"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORLD29"

    The world at your fingertips!  Just like having a globe and atlas in
    your computer.  View any place in the world in various scales.  Learn
    national capitals.  Track hurricanes or anything that has location.
    Single track mapping.  Find distance between locations.  Point to a
    location and get an expanded view.  Play "Name the City, over 200
    cities
    pinpointed.  You can even add your own cities to the maps or your own
    maps.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1392.TXT

{% raw %}
```
Disk No: 1392                                                           
Disk Title: World29                                                     
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: World29                                                  
Author Version: 2.98                                                    
Author Registration: $10.00                                             
Special Requirements: CGA, EGA, or VGA.                                 
                                                                        
The WORLD at your fingertips!  Just like having a GLOBE and ATLAS in    
your computer.  View any place in the world in various scales.  Learn   
national capitals.  Track hurricanes or anything that has location.     
Single track mapping.  Find distance between locations.  Point to a     
location and get an expanded view.  Play Name the City, over 200 cities 
pinpointed.  You can even add your own cities to the maps or your own   
maps.                                                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WORLD.DOC

{% raw %}
```


                        THE WORLD29
                        Version 2.98
                        Instructions

                           GENERAL
    Most inputs have a default. If not specified on the screen the program will
use your last response to a specific request. You can generally default from
one display to another without changing lat & long. A question mark "?"
indicates that WORLD29 is waiting for you---hit ENTER. The "?" allows you to
study the map for as long as you wish while telling you that the program has
finished all drawing. Because of the default, you must enter something like
Lat .00001 and/or Long .00001 to center a map at 0,0 or at any point
with a latitude of 0 or a longitude of 0.(00 01 n will also work!)

    Don't worry about upper or lower case for your input. WORLD29 V2.9
    changes the keyboard case to meet its needs. Occasionally you
    will note a change between upper and lower case.

    The status of CAPS and NUM will be saved on entry to WORLD29 V2.9
    and restored upon proper exit - 99 from menu.

        I have tried for accuracy of .1 degree but ... please send the
        coordinates of any border that you find in error!!!!

                        PRINTING MAPS

         The complexities of converting LAT & LONG to pen positions for
all the plotters in the world are beyond me. I suggest that screen prints of
my maps be considered satisfactory. If you have a printer capable of handling
screen dumps and have  entered the GRAPHICS, file from DOS you should press
shift-prtsc when you have created the correct map on the screen. If you want
a better map you can create it in a Supplemental file and set the .CNF file
to read your data as a part of WORLD29. Those having EGA cards should obtain
a dump program that is designed for their printer and takes the place of
GRAPHICS.


                        CUSTOM CONFIGURATION

To exit the CREATOR ----  any key not on the menu exits the program.

      A program named CREATOR.EXE is provided to make it easier to create
needed files. Type CREATOR then hit ENTER. To customize the program for an EGA
or to establish the names and locations of specialized files to be used with
WORLD29 and to select the colors that you want WORLD29 to use. Select W to
create a new configuration file.
    OR- you can use your own word processor - see below.

                        CUSTOM LOCATIONS

A file named "CUSTOM.LOC" is automatically read when the program
     loads. If "CUSTOM.LOC" does not exist in the current directory
     an error will occur.
You can add whatever location you have a name, Latitude, and longitudes
     and display level for by using the CREATOR C command.               |
     Finish the additions with ENTER ENTER ENTER ENTER                   |
  Names must have a space or , in them as in WACO TEXAS or WACO, TX
  A single word without a space or , will cause unpredictable results.
  Printing will be split at a "," if it exists otherwise at a space.     |



              -1-

 

OR-You can add any locations you want on your world29  map. Use your favorite
     ASCII editor to add NAME,LAT,LONG,Level for any place in the world. A |
     SAMPLE is included and the file must be named "CUSTOM.LOC" to become a
     full part of WORLD29
        Sample: SAN DIEGO,CA,32.71,117.16,2 displays as San Diego          |
                                                        CA                 |

                        SUPPLEMENTAL FILES

CREATOR S command will allow you to add lines, symbols, etc. to your maps as
     supplemental overlays. The CREATOR will ask for lat then long.
     Enter a Latitude and Longitude using Degrees and decimal degrees only.
     IE - translate minutes to decimal Degrees - 1 Min = .01666 degrees.
        Finish line segments with lat 99 and long 99.
        Finish file with lat 999 and long 999.
        Line segment COLOR can be set with a xx,99 where xx is a
     color number.(xx can be 0,1,2,3 in CGA or 0 to 14 in EGA).
     NOTE: you can assign any of 64 colors to the 15 EGA colors using
     the configure file.
     You can either change the WORLD.CNF file to automatically read your new
     file each time you load WORLD29 or you can enter it in place of the
     default file by answering the SUPPLEMENTAL FILE? with the name of your
     new file. - This will replace the SUPPLEMENTAL file called by your CNF
     file. You MUST have a supplemental file OR a "" in WORLD.CNF!
     At the prompt for SUPPLEMENTAL FILE? just hit enter to use SUP.DAT.


                        REGISTRATION

By registering the program with me you are both rewarding my past
efforts and encouraging me to continue developing this program and
others that I think will be useful and fun. Registration sent along
with a disk formatted on your computer gets you a copy of the
latest version of the program. It will also allow you to obtain the
latest version of the program for 50% of the current fee (IE $5
instead of $10) plus a disk whenever you want. WORLD29 is an
evolutionary development in which large changes result from the
accumulation of small changes. You will also feel better each time you
end the program. I will, to the best of my ability, respond to any
written problem reports and/or suggestions about what improvements
should be made to the program. I will retain a list of those who
register and, if a new release with significant changes is made,
notify them of such a release. I will not notify anyone of minor
improvements.

                        DISCLAIMER

Because my copyright notice specifically excludes the commercial use
of this program and the program provides no service other than
general information I will not be held liable for any damage caused
by the use of this program. The program contains inaccuracies and
errors in fact that have slipped by me! I will try to eliminate these
inaccuracies when notified in writing of them. This program should
NOT be used for Navigation or Storm Warning or as an authority for
any other purpose. It is only provided to assist in learning and for
fun!





         -2-




                       THE PROGRAM

Type WORLD29 and hit ENTER to start the program.


    Somename
    Supplemental File?
         Where Somename is the name you have entered in the CNF file as a
supplemental file.ENTER takes whatever you have indicated in the CNF file. If
you have a supplemental program called GORT.SUP that you would like to use
at this time, instead of the file Somename, type GORT.SUP and hit ENTER.
If you want no supplemental file you must enter "" in the WORLD.CNF
file in place of "SUP.DAT".

The main menu displays as follows:

 1 - Select by LAT and LONG
 2 - Select by large area name
 3 - Select by area of EUROPE
 4 - Find using CITY or COUNTRY name
 5 - Capitals of the USA
 6 - National Capitals
 7 - Other CITIES of note
 8 - Enter new info on Tracks
 9 - The Global view
10 - Point at a location
11 - Approximate distance between Cities
12 - Plot any one Track
13 - Name the City

     99 - EXIT to DOS
?

                        ITEM     1.

Select by Lat & Long:

     If you know the latitude and longitude you want to look
     at, choose option 1. You will be asked for latitude first
     then longitude.
     You are permitted to enter decimal parts of a degree.
     (1 minute =0.016667 degree)
     You are permitted to enter Degrees and Minutes in the form
     Degrees followed by a space then Minutes then space then
     Hemisphere as 30 15 n or 120 23 e.(30 deg 15 min North or
     120 deg 23 min East)

     WORLD29 then asks if you want a World view or nearby Cities W[C]
     The default of C will start a quick picture of the area around
     the point you have selected in accordance with the answers to
     the follow on questions. A W will bring you to a global view
     centered on the point you have chosen.
     The program then asks for a scaling factor (a number from
     one to five). A default scale of 3 is selected by pressing
     the enter key. The largest area is 1 and the most detailed




        -3-




     is 5. You will be asked if you want city names.Your answer will tell   |
     WORLD29 if you want capitals and any locations you have in the         |
     CUSTOM.LOC file that are within the bounds of the map.                 |

     You will then be asked if you want Tracks (tracks of
     sample hurricanes are included as file "TRAKS" and "TRAKSXX).
     XX is the year of the file. "TRAKS" is the current file.
     TRAKS85 is the history or storms in 1985. No is the default.
     Y brings up a menu of TRAKSXX files. Use arrows to highlight
     the file you want to use then hit enter.
         (Note for HERCULES boards running CGA simulator
          -- you may not be able to see the highlight bar
          -- count the number of key  presses)

     The bottom center will show a horizontal line that indicates 100
     miles at the center latitude or the map shown.

     The view in this mode is rather rapid for MOST points on the
     earth since only part of the globe, and the supplemental data
     is calculated.

     The upper right corner of the screen will show the number of
     miles in one degree of longitude at the latitude of the center of
     the map being viewed.


     A selection of W above asks for a Scaling Factor which will affect
     the size of the global map to be shown on the screen. 1 will show
     the entire hemisphere and a 5 will show a small area surrounding
     your selected point. The effect is a magnified view of a section
     of a globe not a Mercator type projection which distorts EW size.
     The default is 3, a medium magnification. (Note. Scale 5 takes some
     time for calculation of points that are off the screen.)

     You are asked if you want state borders. You can save some
     time by taking the default if you don't need state borders in the
     specific map you desire. Similarly, you can save time by             |
     eliminating the Political boundaries.                                |

     Next an option for grid lines selects whether you want LAT & LONG
     lines. Depending upon scale, function, and use, you may or may not
     want these lines. Default is on.


                        ITEMS       2.& 3.

Area:
     Selected areas of the world, especially the USA, are
     presented in a list. Choose by typing the capitalized
     letters for your desired area (don't use the lower-case
     letters ie. S.AM for S.AMerica). Scaling is handled by the
     program and the upper right corner of the screen displays
     the number of miles per degree at the center lat.





        -4-



                        ITEM      4.

City finder:
      Type in the name of any city, country, or a combination of letters and
      WORLD29 V2.9 will search its Data Base (and CUSTOM.LOC along with     |
      TRAKS) for the combination of letters you have entered. It will then  |
      tell you what it found and ask:
        "[W]orld, Area map, Select again or Look some more"
           W is the default and centers a global view on the city
           A centers a small area map on the city chosen
           S sends you back to re-enter a name
           L continues the search for another match

      When no more matches are found WORLD29 V2.9 will say
      "I can't identify that !" and send you back to the main menu.


                        ITEM      5.

State capitals:
     State capitals are presented alphabetically and selected by
     number. You are then asked for a scaling factor as in item
     #1 and if you want tracks.
     Again the lower center presents the 100 mile scale, the upper
     right the miles per degree at the lat of the capital you
     have selected. Any state or national capitals within
     the area you have chosen will be displayed. If you have selected
     a scale of 5, all locations in the CUSTOM.LOC file within
     the bounds of the screen map will be located.

     The lower left of the screen shows the name of the capital
     that the map is centered upon. The capital is marked with a
     small circle. Its lat is shown at the right side center and
     long at the bottom center.


                        ITEM    6.

National capitals:
     Over 200 national capitals are displayed in alphabetical order     |
     on several pages. Select by number. 999 for additional pages.
     As in previous options scale and track questions are asked. The 
     100 mile line, miles per degree, center location and other visible
     capitals are displayed as above.


                        ITEM    7.

Other cities:
     Locations from CUSTOM.LOC are displayed and allow selection by      |
     number. Scaling factors and track questions are as in #1.
     100 mile indicator, miles per degree and national caps are as above. 
     The name of the location and its lat and long. are also displayed.

     Locations you have included in custom.loc will also be displayed
     Each entry in custom.loc will be given its own number and





        -5-


     pages divided. (Not fully tested but should work as long as you
     have less than 900 entries in custom.loc.) CUSTOM.LOC is your file    |
     add to or delete from the file to meet your needs.                    |


                        ITEM    8.

Track data:

     Allows you to keep track of future Atlantic, Pacific or IO
     hurricanes. It can be used to track anything that can be given a
     Lat and long. It asks the track's name first, then date in mmdd
     form, then type of Track or Confidence level (1 is most intense, 4
     least or 1 hurricane 2 tropical storm 3 tropical depression 4
     tropical wave)-----(this sets color of the segment of
     track and can be used for relative strength indicators or what
     ever you wish it to mean)
     then lat and long. --- the lat and long must be entered as decimal
     degrees NOT degrees and minutes ---- this is the way most storms
     are reported in the media.  World29 will then ask if you have
     data on other tracks (default is no). Next the program asks if
     you want the display of track data. If you respond "y"
     then a display will be generated centered upon your last
     track data with a 100 mile radius circle around it.
     all appropriate data will be displayed as above.

     This is an ASCII file and can be maintained by an editor.
     If you are tracking more than one thing at a time the track
     plot will be discontinuous. Use your editor or a sort program
     to keep each track together by name.

     If you keep data on a particular item in sequence, WORLD29 will
     connect the data points and put the name at the beginning of
     the track for that track. The size of the circle at each
     coordinate represents the intensity of the track, and on global
     views the color is also indicative of intensity(esp. in EGA mode)

     This option is being used to track various things throughout the
     World. Long range bombers flying from Russia to Cuba, UFO's in the
     north west USA, TVRO satellite Footprints, and anything else that
     someone wants to track over large areas of the globe.


     The File TRAKS is the same as TRAKS88. When you are ready to start
     tracking new storms or other things simply delete traks and use
     function 8.


                        ITEM        9.

Global view:
     Asks for a lat and long of the point you want at the center
     of the screen. If you default, Lat and Long WORLD29 V2.9 does
     its best to center the world on whatever you had selected
     last in any of the available views. If in doubt, just hit
     ENTER whenever these two questions show up -- the worst that
     will happen is that the center of the screen will be at
     0 degrees north 0 degrees west.




        -6-



     WORLD29 V2.9 now asks for a Magnification factor. 1 will show
     the entire hemisphere and will, optionally, include lines of Lat      |
     and Long at 10 degree intervals. Numbers less than 1 will show a
     smaller globe (See the world from beyond the moon with a scale of .25)

     Numbers larger than 5 will work but there will be long periods
     when nothing seems to be happening. Actually each point on the
     globe and the line between them is being calculated.
     There is no guarantee that any line will show up on your screen.
     Even 3 is starting to stretch things so have fun.

     The cursor will appear --- eventually (? in the upper left).
     ENTER is a bail out at any time in the draw sequence.

       If you have included a supplemental file name in the WORLD.CNF
       file. It will now be read in and plotted on the world map.

     DO YOU WANT HURRICANES? Default = N.
                 Y brings a list of track files on the default directory
                  or the subdirectory selected bye WORLD.CNF .
                  Select by highlight and enter.

     WANT STATE BOUNDARIES? Default = N.
               If y is selected, WORLD29
     will include state borders with a slight slowdown in completing
     the world.
     Take the Default to save time when looking at the far east.

     DO YOU WANT POLITICAL BOUNDARIES? Default = N

     DO YOU WANT GRID? Default = Y.
                Y draws Lat and Long lines
                N leaves lines off


                        ITEM    10.

Pointer:

     A mercator type projection of the world is displayed
     with a pointer located in the Atlantic Ocean. Use your
     number key pad or arrows to position the cursor at the location    |
     you want to examine. This allows the use of older keyboards.
     As the cursor moves, its lat and long  will be indicated.
     When it is near where you want it, hit the enter key and
     the cursor will become the center of an expanded view.
     You can now reposition the cursor and expand again by hitting
     enter. Including the full world map you have five expansions.
     Expansion beyond the fifth level returns to the menu. Hitting
     the "e" key at any level returns you to the menu. All movement
     is in 1 deg increments.

     Your supplemental file will be superimposed over the World Map.

     After a few expansions the Names and locations of visible cities
     will be plotted.






        -7-



     All except the final expansion can be used as a rough distance
     calculator. Pick a view in which you can see both places. Move
     the cursor to either location. You can only move in whole degree
     jumps. When you are within one degree of the location, touch your
     F1 key. The lat and long of the point will appear on the second
     line of the display. Now move the cursor to the second location
     and press the F2 key. The lat and long of the second location appears
     on line three and the ballpark distance appears on line four. You
     can move to another point and press F2 again, leaving your first
     point where it is or select a new first point with F1 and select
     another second point with F2. When ever F2 is pressed the distance
     is recalculated. Remember F1=first point
                               F2=second point & recalculate
     Only works on Pointer Maps where you can move the cursor. Does not
     work on largest expansion (? in upper left)

        NOTE:F1 and F2 at the same location causes a error.

                        ITEM    11.

Distance calculator:
     Enter cities as in the CITY FINDER and approximate great circle
     distance will be displayed.

  If you answer "y" to the "Would you like a Map" question.
     Just for fun:
     A crude map will display both cities with a line connecting them.
     The map will ALWAYS display from west to east and the line
     connecting the cities is generally NOT the same as the great
     circle route! It merely shows both cities on the same map. Some
     of the distortions are quite interesting. Try FIJI to HONOLULU.

         Your data in CUSTOM.LOC will also be checked.
         To find the distance between you and the last track fix
         enter the first city as above and enter CANE as the second
         name. The TRAKSXX selection menu will show up and WORLD29 V2.9
         will calculate the distance between the first name and the
         last entry in which ever TRAKSXX file you selected. This feature
         is limited to the last entry in the TRAKSXX file.

         You can enter a name from the CUSTOM.LOC file.
            *SEE ADDENDUM FOR NEW FEATURE

                        ITEM    12.

Plot any one track:

      A menu will allow you to select one collection of tracks from the
      files that start with TRAK and are located in the subdirectory
      selected in the WORLD.CNF file.

      The screen clears and a list of all different tracks within the
      selected collection. You must now type the name of the track you
      want to plot exactly as listed. Misspelling and case variance
      will cause a recoverable error.

      Once WORLD29 recognizes what you want it will ask if you want
      a world or local view and then follow the procedures described




        -8-



      above. The view will be centered around the initial coordinates
      for the specific NAME in the selected collection.

                        ITEM    13.
Name the City:

        A much requested game feature. A map centered around a randomly
        selected State or National Capital is created and the question
        "What's my name" appears in the upper left of the screen.
        Type your guess of the name then press ENTER for the answers.
        Names must match my data base so study of the maps will help.
              EG. Denver Colorado must appear as DENVER CO
        When you hit ENTER the Name will appear WORLD29 will keep score
        - a blank is a miss. The score is retained while the program is
       running - so you can go study and comeback for more.

        WATCH OUT you may learn something.

        Hitting ENTER at the menu brings another city. State Capitals
        will appear about 20% of the time. Typing either END or Quit exits |
        to the main menu.                                                  |


                        ITEM    99.

EXIT:

     Provides a graceful exit to dos from the main menu and resets the
     CAP and NUM lock keys to the status that existed before entry into
     the WORLD29 program.


                        NOTES and HINTS

SUPPLEMENTAL FILES:
       The ultimate in flexibility is now available between CUSTOM.LOC
       and an optional supplemental file. With CUSTOM.LOC you could
       enter any name and location into the WORLD29 data base. Now you
       can use any file name to enter your own lines to represent
       anything you want. WORLD29 2.9 keeps reading LAT and LONG until
       it find an EOF.
             All WORLD29 V2.9 looks for is a pair of numbers and it will
       interpret the first one as a LAT and the second as a LONG and
       try to plot it. A second pair of numbers will be interpreted as
       the next point on a line unless or until a 99,99 sequence is
       found. 99,99 denotes the end of a line segment and the next
       LAT,LONG pair will start an new line segment.
       A ##,99 sequence is used to select the color of the following       |
       line segment.                                                       |
             WORLD29 V2.9 interprets negative LONG (EG -128.53) as West
       Long (ie. west of the prime meridian and east of the dateline.
       Negative LAT (EG -38.5) is interpreted as South Lat (ie south
       of the equator.
             There is nothing sacred about the file SUP.DAT. Use
       whatever name you want ,just put the name on line 4 of WORLD.CNF
       or enter it on screen one when the Supplemental file question appears.
       The provincial boundaries are not well done. They are there to
       show what can be done.




        -9-



             A supplemental file must end with two sets of 99. (99,99,99,99)
             If you create supplemental files PLEASE SEND ME A DISK
       with the supplemental files on it. My MS has gotten worse and
       typing is harder and harder.

POINTING:

        I intercept the numbers to control the direction,
        enabling single key diagonals. Your upper row of number keys will
        work (if you keep track of which keys point which way).

MEMORY:
I believe the program will run in as little as 240Kb and am unaware of any
        conflicts with TSR program.-----But I won't swear to it.


?:
This prompt is used to indicate that WORLD29 is done. It allows you time to
        look at the map, print the map, use the pointer, or whatever for
        as long as you want. Just hit ENTER to continue.

99:
Used to exit the program from the main menu.

999:
Used to go to the next page of data.

                        SPECIAL THANKS

        David Evers for his release of the popup menus used in this
        program.
        Michel Baron, who has created a version of WORLD in French, and
        encouraged me to keep going.
        Keith Clark for his addition of the East European countries
        and other encouragements
        Brian Cook for his many corrections to errors in data



To run WORLD29 on a Hercules system you must have a CGA simulator such
as SIMCGA or SIMCGA2 which are available on many BBSs.Use colors 7 and 0


MANUAL CONFIGURING:
The following is only for those interested in manually creating the .CNF file.

     A file named "WORLD.CNF" is read to configure WORLD29 V2.9 for your
     computer and preferences. The first line is to setup for an EGA or
     CGA. These are the only boards supported.
           The first line must be the capital letters CGA or EGA.
           The second line is either a capital Y or capital N.
                Y checks for the presence of certain files and when
                     it finds one missing prompts you to create one.
                N skips the checks and lets you run most of the
                     program without the missing files





        -10-



           The third line is a subdirectory name.(EG. \hurricane)


                It is used to tell WORLD29 V2.9 where to find TRAKS
                data files. (Some people use the data in other ways)
                    If the TRAKSXX files will be in the current
                    subdirectory then this line must be double quotes
                    ("")
            The fourth line is the name of a supplemental file such
                 as  SUP.DAT which provides the Canadian provinces.
                     If you don't want a supplemental file read
                     line four must contain double quotes ("")

            Line five is the color of text. First number
                  text, Second is background (as in color 7,0)

            Line six consists of 6 numbers which control the  color
                  of the Menu boxes and the margins for them.
                     The first two control the main menu foreground
                     and border.

                     The second pair control the TRAKS box foreground
                     and border.

                     The third pair control the TRAKS title box.

            Line seven is for setting EGA colors. 15 numbers are
                     required. On a CGA system the numbers may be
                     any integer(they are dummy values and are not
                     used). For EGA the numbers are for colors
                     numbered 0 to 63, any other number will create
                     an error. Must be here even for CGA . These
                     numbers can be used in SUP files to color line
                     segments according to your desires. (4,99 sets
                     line color to red)


           Line eight is for selecting palette 0 or 1 for CGA global
                     screen. 1 is CYAN, MAGENTA, WHITE
                             0 is GREEN, RED, YELLOW
                     Must be here even for EGA

         Samples:
EGA                              CGA
N                                Y
""                               \PRIVATE
""                               SUP.DAT
7,0                              1,4
4,3,4,11,11,4                    1,2,3,4,5,6
1,2,3,4,5,6,7,8,9,0,1,2,3,4,5    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
0                                1

VGA users should select EGA! Color numbers for EGA/VGA vary from montior to
monitor and are best identified on your system.






        -11-



                 _______
            ____|__     |               (tm)
         --|       |    |-------------------
           |   ____|__  |  Association of
           |  |       |_|  Shareware
           |__|   o   |    Professionals
         -----|   |   |---------------------
              |___|___|    MEMBER






       Robert L. Lloyd is a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a shareware-
related problem with an ASP member by contacting the member directly,
ASP may be able to help. The ASP Ombudsman can help you resolve a
dispute or problem with an ASP member, but does not provide technical
support for members' products.  Please write to the ASP Ombudsman at
P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message via
easyplex to ASP Ombudsman 70007,3536. products.



To see the documentation one page at a time.
        Boot computer with DOS disk that contains MORE
        put WORLD29 disk in second drive
        type TYPE WORLD.DOC | MORE enter
        hit the space bar to advance pages.



                         ROBERT L. LLOYD
                       191 VIA DE LA REINA
                     MERRITT ISLAND, FL 32953

 COMPUSERVE:70635,266

Please mention the version number (2.98) in any correspondence.


Multiple copies are offered as follows:

        Single copy price is $10.........Disk/Envelope/on disk Doc

        2 to 10 .............$8/disk.....       "               "

        11 to 50 ............$7/disk.....       "               "

        51 to 100 ...........$6/disk.....       "               "

        Over 100 copies is beyond my capabilities and would require on
site reproduction at a cost of $2/user. I would supply a single Master
Disk, customized for your facility, which includes documentation. You 
would reproduce program disks and/or printed documentation.





        -12-



                                  INDEX

   99,99               9                  Miles/degree        4
   999                10                  Minutes             3
   ASCII               6                  Monochrome         10
   ASP                12                  Name the City       9
   Additions           5                  National Capitals   4,5
   Background         11                  Notes               9
   Begin               3                  Nothing happens     7
   CGA                10                  Number Key Pad      7,10
   COMPUSERVE         13                  Ombudsman          12
   CREATOR Program     1                  Percentages         9
   CUSTOM.LOC          1,5,8              Plotting            1
   Calculator          8                  Pointer             7,10
   Case                1                  Political           4,7
   City finder         5                  Problems           12
   Color               9                  Quick               3
   Configure          10                  Random Selection    9
   Conflicts          10                  Registration        2
   Continuous          6                  Restored            1
   Countries           5                  Rewards             2
   Country finder      5                  SHAREWARE           2
   Cursor              7                  SORT                6
   Cursor Keys        10                  SUP.DAT             9,11
   Cursor Pad          7                  Scale               3,6
   Customize           1                  Scaling factor      3
   Decimal             3                  Simulator           4,10
   Default             1,6                Single Track        8
   Disclaimer          2                  Site License        13
   Distances           7,8                South               9
   EGA                10,11               Start the program   3
   East                9                  State               4,5,6,7,9
   End                 9                  Subdirectory        10
   Example            11                  Supplemental        2,3,7,9,11
   Exit                1,7,9              TRAKS               4,6
   Expansion           7                  Text color          11
   F1 Key              7                  Thanks              10
   F2 Key              7                  Tracking            6
   Fees                2                  Tracks              4
   File check         10                  Two Cities          8
   Fun                 8                  Upper Case          1
   GRAPHICS            1                  WORLD.CNF           10
   Game                9                  World               6
   General Info        1                  Zero                1
   Global              3,6                quit                9
   Grid                4                  scale               4
   HERCULES            4,10               ""                  11
   Hints               9                  "?"                 1,3,7,10
   How far             8
   Hurricane           6,8
   Large Area          4
   Lat.                3
   Latitude Longitude  3
   Line color          2
   Long                3
   Magnification       6
   Main menu           3





                        ADDENDA

 New for option #11

        When asked for a FIRST NAME or SECOND NAME you can now enter 
a latitude and longitude.  You will not be prompted for the LATITUDE! 
If you enter a positive numeric value it will be treated as a 
latitude entry. If you want to enter a location in the southern 
hemisphere you MUST use the DEG MIN H format (eg 3 17 S for 3 degrees 
17 minutes south). A number preceded with a - sign will NOT be 
treated as a latitude. You may, however, enter latitudes as decimal 
degrees if you wish in the northern hemisphere (IE. 3.5 is the same 
as 3 30 N is the same as 3 30 meaning 3 degrees 30 minutes north). 
Once you have entered a latitude WORLD29 will prompt you for a 
longitude. You can still enter a location name for either the first 
or second name or for both.

        You are cautioned once more - the answers are APPROXIMATIONS!



  New - CUSTOM location options.

        Area maps now ask if you want city names after it asks for a
scale. The options for all scales are [Y}N(1-5):
          Y - the default - State and National capitals are shown.
          N - No locations are plotted
          1 - All capitals + all items in CUSTOM.LOC with a level 1
mark are shown. Level 1 mark is a box.
          2 - All capitals + all items in CUSTOM.LOC with a level 1 or 
2 mark are shown. Level 2 mark is a chevron pointing upward.
          3 - All capitals + all items in CUSTOM.LOC with a level 1, 2,
or 3 mark are shown. Level 3 mark is a chevron pointing left.
          4 - All capitals + all items in CUSTOM.LOC with a level 1, 2,
3, or 4 mark are shown. Level 4 mark is a chevron pointing right.
          5 - All capitals + all items in CUSOTM.LOC are shown. Level 5
mark is a chevron pointing downward.


  New - ARROW KEY recognition.

        The Pointer function should now recognize directional arrows in 
additon to numerical keys for cursor movement. Untested due to equipment
limitaions.


   Reminder - If you have a VGA system - choose EGA in configuration. This
mode fully utilizes the available data.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1392

     Volume in drive A has no label
     Directory of A:\

    WORLD29  EXE    189980   3-07-90   3:27p
    CUSTOM   LOC      3435   5-06-90  12:04p
    OPENING  SCR     16392   5-11-87   9:42p
    GO       BAT       972   4-03-89   2:51p
    README             882   8-15-89   4:42p
    REGISTRA          1415   1-08-90   9:24p
    SUP      DAT       562   4-23-87  11:00p
    TRAKS              167   5-26-90  12:01p
    TRAKS84           2202   9-24-85   2:51p
    TRAKS85           3669  12-31-85   1:16p
    TRAKS86           2329  11-21-86   6:18p
    TRAKS87           5315  11-03-87   6:27p
    TRAKS88           5638  12-30-88   3:23p
    TRAKS89           7654  10-24-89   7:13p
    WORLD    DOC     36878   2-16-90   4:59p
    WORLD    INF      2263   6-13-89   3:32p
    CREATOR  EXE     54508   1-03-90   2:42p
    WORLD    CNF        82   1-03-90   2:43p
    USSR     DAT       693   4-21-90  11:05p
    HISTORY           3281   5-14-90   2:36p
    FILE1392 TXT      1629   7-13-90  11:27p
           21 file(s)     339946 bytes
                            9216 bytes free
