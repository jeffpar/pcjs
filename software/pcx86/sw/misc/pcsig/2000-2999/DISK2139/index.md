---
layout: page
title: "PC-SIG Diskette Library (Disk #2139)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2139/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2139"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE NIGHT SKY 3 OF 4 (1796,1797,2140)"

    This computer planetarium is capable of plotting 24,000 stars to
    magnitude +7.49. The registered version is capable of plotting 45,000
    stars to magnitude +8.49. THE NIGHT SKY is a very easy to use
    menu-driven program for the amateur astronomer. In fact, this program
    was
    written by an amateur astronomer who, when he is not looking at the
    stars, drives a London transport bus. He has spent many of his off
    hours working on this program, which originally started as an exercise
    in programming.
    
    Use THE NIGHT SKY to draw a star map and move around the sky, show the
    night sky to a magnification and resolution of your choice, plot all the
    planets and the Moon any time from January 1, 1600 to December 31, 3000;
    predict solar and lunar eclipses; and view your local sky. Also covered
    are comets, the minor planets, the sun, moon, and satellites of Jupiter.
    From the stars menu you can choose the constellations, 21 brightest
    stars, bright star catalogue, map the night sky, star atlas, deep sky,
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2139.TXT

{% raw %}
```
Disk No: 2139                                                           
Disk Title: The Night Sky 3 of 4 (1796,1797,2140)                       
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: THE NIGHT SKY                                            
Author Version: 2.07                                                    
Author Registration: 24.95 pounds.                                      
Special Requirements: Hercules graphics or CGA.                         
                                                                        
You may never figure out where all that stuff in your house came from,  
but as long as you have it, you might as well keep track of it.  The    
HOME INVENTORY RECORD KEEPER lets you do just that, room by room.       
                                                                        
It's not dramatic, but it is a handy way of keeping track of everything 
you have in your house.  You can, of course, give a location for        
everything, and indicate the actual or estimated value of each item.    
This will be essential should you ever suffer a loss by theft or fire.  
You can also print a list of your possessions and tuck it away for safe 
keeping.                                                                
                                                                        
There is no manual on the disk, because you won't need one -- that's how
easy this program is to use.  If you need help at any time, just press  
the F1 key and you'll see a context-sensitive help screen.              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```













                                THE  NIGHT  SKY

                                 Version  2.07





                           A  COMPUTER  PLANETARIUM


                The Stars to magnitude +7.49 for the Epoch 2000




                                By  A.C.Stevely


                                     1990





         1

                   Introduction.


         The Night Sky is a computer planetarium capable of plotting
         24,000 stars to magnitude +7.49. If you have the special version
         of The Night Sky,it will be then capable of plotting 45,000 stars
         to magnitude +8.49.

         The Night Sky is a very easy to use menu - driven program.
         This program was written by an amateur astronomer who, when
         he is not looking at the stars, drives a London Transport bus.

         He has spent many hours working on this program, which was
         originally started as an excise in programming. Only when it was
         almost finished did the author think of distributing it as a
         shareware program.  He hopes you enjoy this program and perhaps
         become interested in looking at the real night sky.

         The author would like to thank David Belinfante for his kind
         help in testing the Hercules version and writing the Hercules
         graphics version of the Moons disc.

         The Night Sky was written using Turbo Basic. Copyright
         Borland International, INC.



         2

                   Configurations supported.


         The Night Sky runs on any IBM personal computer (PC, AT, XT)
         or true compatible.  For example, The Night Sky was written
         with a Amstrad 1512 personal computer. The program supports the
         following computer systems:

                     Hercules display
                     Colour Graphics Adapter, with either a colour or
                     monochrome display.

         Using MS-DOS 2.0 or later, the program also supports the following
         disk drive systems.

                     Single disk drive
                     Double disk drive
                     Hard disk drive


                   The Night Sky Disks.


         The Night Sky program was distributed to the shareware libraries on
         four standard 360K 5.25 inch disks.


                   Disk one.  (NIGHT)


         NIGHT.EXE.......The starting program which controls all the
         sub-programs and data files.

         PROG1.TBC.......Stars
         PROG2.TBC.......Planets
         PROG3.TBC.......Comets and minor planets
         PROG4.TBC.......Your local night sky
         HOME.DAT........Your latitude and longitude,date,disk type
         TITLE.DAT.......Scanned image used for the title screen


                   Disk two.  (STAR DATA)


         This disk contains the data files which are used by the NIGHT
         disk.

         STARNUM.DAT.....Location of data on the star map file
         STARMAP.DAT.....The star map file
         MAG6.DAT........Data on stars mag. +3.50 to +6.49
         MAG3.DAT........Data on stars mag. -1.50 to +3.49
         DEEPSKY.DAT.....Data on the deepsky objects (R.A. Dec.)
         DEEPSKY2.DAT....More information on deepsky objects
         CONSTEL1.DAT....Data about the names of the constellations



         3

         CONSTEL2.DAT....Text based maps of the constellations
         CONSTEL3.DAT....Data for drawing lines
         CONSTEL4.DAT....Constellation names, used by PROG1.TBC only
         BSTAR21.DAT.....The 21 brightest stars
         BRIGHT3.DAT.....Bright star catalogue


                   Disk three.   (SOLAR)


         This disk contains the solar system programs.

         PROG5.TBC......Solar and lunar eclipses
         PROG6.TBC......Sun
         PROG7.TBC......Moon
         PROG8.TBC......Satellites of Jupiter
         PROG9.TBC......Transits of Mercury and Venus
         MAP.DAT........Map of the Earth
         TVM.DAT........All the following files
         SOL.DAT........are sprite graphics used by
         SOJ.DAT........these programs
         EOT.DAT
         LCL.DAT
         LDT.DAT
         LPS.DAT
         MANUAL.DOC.....This file


                   Disk four.   (STAR ATLAS)


         PROG10.TBC......The Night Sky star atlas
         MAG7.DAT........24,000 stars to magnitude +7.49


                   Running The Night Sky


         To run this program first load MSDOS. If you wish to print
         any of the sky maps, now load GRAPHICS,to prepare your PC
         to print graphic screen displays. (CGA mode only) Please note
         that while the Night Sky program will run with MOUSE.COM
         loaded. NIGHT.EXE reads the system clock and runs at its
         correct speed if you DO NOT load MOUSE.COM.

                   CONFIG.SYS

         When you first start up your PC, the text file CONFIG.SYS is
         automatically processed by MS-DOS. You should have the
         following commands in that file.  For example, my CONFIG.SYS
         file reads as listed below.

                Files=20    Buffers=5   Device=Ansi.sys



         4

         The files command sets the number of files that can be opened
         simultaneously. The Night Sky will open simultaneously in
         some of the programs up to 9 files.  The buffers command sets
         aside an area of memory for holding data being moved back and
         forth between the disk and the program. The command device =
         Ansi.sys, makes the PC load the enhanced screen diver, which
         is of course called ANSI.SYS.  If you need to change the
         Config.sys file, the best way to do it is use a word
         processor.

         If you are using a double disk drive system please copy the MS-DOS
         file COMMAND.COM onto the NIGHT disk and LEAVE IT ALWAYS IN DRIVE
         A.  The other disks always go in drive B.

         So after loading MSDOS etc, type NIGHT and press Enter to
         load and run The Night Sky.

         You will first be asked if you wish to skip the configuration
         mode. The configuration mode sets your computer system to
         either the Hercules or Colour Graphics Adapter and the type
         of disk system.   Your location is also set. This information
         will then be written to the HOME.DAT file.  When first used
         the program is set to the following location.

                              Latitude    51.28   North
                             Longitude   000.01   West
                      Name of Location            Saint Johns
                               Country            England
                             Time Zone            0
         Correction for daylight saving           0

         The first time you use this program you will most likely press
         U,as in - <U>se the same location as Saint Johns.  Later on, you
         will have to set the program to your own location by pressing C,
         to <C>hange the location, or by pressing S, to <S>elect a city.
         The latitude and longitude, including the time zone settings are
         used for plotting your local sky and the rising and setting times.


         The locations you can select are :-

         Greenwich      Bristol             Birmingham       Manchester
         Edinburgh      Glasgow             Paris            Berlin
         Rome           Athens              Moscow           Peking
         Tokyo          Jakarta             Cairo            Khartoum
         Dakar          Lusaka              Sydney           Montreal
         Anchorage      Dallas              San Francisco    Mexico City
         Bogota         Rio de Janeiro      Honolulu         Saint Johns


         If your city is not on the list then you will have to look up
         the latitude and longitude of your city in an atlas.  To set
         your town or city, just follow the instructions and the
         program will write your location into the HOME.DAT file. If you
         are using disk drives, leave the write protect tab off.



         5

         After reading your location, the program will now show the
         Main Menu, where you will be given the following choices:-

               NIGHT SKY
                        1....Stars       2....Planets
                        3....Comets      4....Local sky

               SOLAR SYSTEM
                        5....Eclipses    6....Sun
                        7....Moon        8....Jupiter
                        9....Transits

               STAR ATLAS
                        0....Night Sky star atlas

                                         <E>xit to MS-DOS

          We will now look at each one in turn and see what they do.



                   STARS


         After pressing key 1 for the stars, this program will then
         load and run. You will also be asked if using disk drives, to
         remove and insert the Star data disk. The new main menu will now
         be as follows:-

                   1............The Constellations
                   2............21 brightest stars
                   3............Bright star catalogue
                   4............Map the night sky
                   5............Star atlas
                   6............Deep Sky
                   7............Objects & magnitudes
                   8............Spectral types
                   9............Exit

          Also shown will be your local civil time and your local sidereal
          time. Your LCT is taken from the system clock.   Your LST is
          calculated from the data in the Home.dat file. You can also
          change your correction for daylight saving.


                   Drawing star maps

         Common to most  choices in the Night Sky program, is by
         using different keys, you select the map you wish to draw.
         Since the Night Sky program is 100% menu driven you cannot
         get lost or have to remember what key to press.  YOU DO NOT HAVE
         TO READ ANY MORE OF THIS MANUAL TO USE THE PROGRAM.



         6

         However, taking as an example, lets say we wish to plot the
         constellation Orion. Indeed,this example could even be a plot of
         the planets or even the path of the the minor planet Ceres. The
         basic principles are the same.

         Stage one, is press the key number 1. This will bring onto the
         screen a new menu. This shows a list of constellations, next to
         one of then is an arrow.  At the bottom of the screen the
         following keys are marked, <M>ove arrow, <N>ew page, <C>ontinue or
         <E>xit.

         Stage two.  Press the <N>ew page key until Orion is on the screen.
         Then <M>ove the arrow to Orion, and then press <C>ontinue. If you
         pressed the <E>xit key it would return you to the main menu.

         Stage three. A new menu will now be shown on the screen. In this
         example, you will be shown information associated with Orion.
         This is any mythological connotations, its position in the sky,
         and a little map text based map showing what to expect when you
         finally draw the map. Also shown are the rising and setting times
         for that constellation.

         At this point I will discuss rising and setting times. All rising
         and setting times are calculated from the positions you set in the
         start-up program. These are local civil time, or the time on your
         clock.

         Right, back to your quest in the plot of Orion. On the bottom of
         the screen is the choice of going <F>orwards to the next listed
         constellation to Orion, which is Pavo, or <B>ackwards to Ophiuchus.
         You can also set the <M>agnitude of the faintest star plotted,
         this can be 5 or 6. You can then <P>lot Orion.  Again, you can
         also <E>xit back to the main menu.

         After pressing P to plot Orion, the screen will clear and the
         program will look through, and plot the stars upto magnitude
         +3.49 in and around the area of the constellation Orion.
         At the bottom of the screen you will also see the message,
         " Working on the bright stars ".

         After stars of magnitude 3.49 have been drawn,the program
         will then start drawing stars from magnitude 3.50, to magnitude
         6.49. You will then see at the bottom of the screen a new message,
         " Press the spacebar to stop drawing stars ".

         When you think you have plotted all the stars onto your map,
         just press the spacebar to stop, now a new menu will show
         itself on the bottom line.  This is, " <D>   <B>    <S>   <N>
         <L>ines off  <E>xit ". Now taking one at a time, we will look
         at what they do.



         7

         <D>eepsky. If you press D, the program will look through the
         list of deepsky objects and draw them onto the map. Pressing
         <F> or <B> for forward or backward, will the draw a little white
         box around the object.  At the bottom of the screen is printed its
         catalogue number. The Right Ascension and Declination of the
         deep sky object is also listed. This is common to most maps
         drawn in the Night Sky program.

         If you pressed 6 from the main menu -  Plot the deep sky
         objects. You can then chose a deep sky object and like the
         constellation sub-menu be informed with information on that
         object.

         <B>right star. Each bright star will also be boxed, while you read
         its common and scientific name.

         If you pressed 3 from the main menu - Bright Star Catalogue.
         Again, like the other sub-menus this also contains information on
         the 285 bright stars to magnitude +3.49.

         <S>tars. If this time you press S, the program will go to a
         new menu namely," <F> <B> <E>xit ".  What this does is go
         through the stars drawn on the screen, <F>orward or
         <B>ackwards, and tell you, by drawing a little box around each
         one in turn, what that stars spectral type is and its R.A.
         and Dec.

         <L>ines. In the constellation mode pressing L, will draw lines
         marking the outline shape of that constellation.  Pressing L again,
         will erase these lines.   In the other modes, pressing L will draw
         onto your map the coordinates marking the hours of Right
         Ascension.

         <N>ame. This key will add to your map the names of the
         constellations.  Like the others options, this is also common
         to all maps.


         When you have done all this, pressing E will exit you back to
         the main menu.   To print any map in the Night Sky (CGA mode),
         just press the shift and Prt Sc keys if you loaded GRAPHICS.


                   Star atlas

         The Star atlas will draw for you a map as fast as your hard, or
         floppy disk drive can read the information.  By use of the number
         keys you can quickly move around the night sky. This mode is
         useful if you do not know your way around the night sky. Unlike
         the main star atlas on PROG10.TBC. this is a predrawn star atlas
         to magnitude +4.49.



         8

                   Map the night sky

         This part of the program gives you the chance to plot any
         part of the night sky to a magnification and resolution of
         your choice.

         Press 4 from the main menu to enter this mode. Following the
         instructions on the screen, use the space bar to set the Right
         Ascension - the celestial longitude. Then again, using the
         space bar set the Declination - the celestial latitude.
         You will then be asked for the magnitude of the faintest star
         plotted. Press 3, 4 or 5, or 6.  Last of all, you will be asked to
         set the width of the map in degrees.  The range of the field
         width of the map depends on the magnitude of the faintest star
         chosen.  The Night Sky will then draw your map.

         The objects and magnitudes screen will draw colour coded, and by
         using that color, give an indication of a stars spectral type.
         The deepsky objects will also be drawn. The spectral type screen
         will give a quick indication of the spectral classification
         system.



                   PLANETS


         Pressing 2 from the main menu, allows you to plot the Sun, Moon,
         and all the planets at any time from the 1st January 1600, to
         the 31st December 3000.

         Touching the space bar will list the positions the planets
         for todays date.  Pressing <T> will allow you to change the
         date.

         When the planets and the Moon have been listed for the date
         of your choice. You can then set the magnification of the sky
         map, by pressing <W> to change the width of the map. Pressing
         <O> will draw a plan view of the solar system.  (Colour CGA
         mode only) Pressing <T> will set the time in days. The value
         is from one to thirty one days.

         The Moon can be turned on or off by pressing <Y> or <N>. When
         showing the motion of the planets the Moon can get in the
         way, so it is best to turn it off. Pressing <+> or <-> will
         list the positions of the planets and the Moon for any given
         day - set by pressing <T> - from the chosen date.  This is
         also common to the Sun, Moon and Comet programs.

         The apparent <D>iameter key will draw all eight planets to scale.
         You can then press the spacebar a number of times and watch how
         the planets change in size viewed from the Earth.



         9

         The <A>ngle between any two objects of your choice can also be
         chosen.   What this does is draw the angular separation between two
         planets, for example, over a given time period set by you.

         Pressing 0 to 9 will plot the positions of the Moon and the
         planets onto the night sky. After the stars have been drawn
         onto the map a new sub menu will be listed at the bottom of
         the screen. This is - <C>  <P>lanets  <M>ove   <B>  <S>
         <P>  <E>xit. Pressing <P> will plot the position of the
         planet you picked, plus any other planet or the Moon in that
         area.  The position of that planet is marked by a small white
         cross, plus its name.  Pressing P again will erase its name
         and just leave the cross.  Pressing <C>, allows you to chose
         a new planet to be plotted.  Pressing <E>, exits you back to
         the main menu.

         Pressing <M> will show on the same map how much the planets
         have moved in the time interval set by the clock. Set
         interval to one day and the width of the sky map about 60
         degrees, then pick the planet Mercury.  Press M a few times
         then sit back and watch Mercury move across the sky. For the
         outer planets such as Jupiter, set the time interval to about
         7 days.  To get the best effect just experiment with
         different widths and times for each planet. If you set the
         Moon to the on position, the program will not only plot the
         Moon but also its phase,or how bright is it.

         Pressing <O>, (colour CGA mode only) from the Solar system
         menu will draw a plan view of all 9 planets.  Hint: First
         set the clock to 7 days. Then press <+> or <-> a few times
         and watch how the planets orbit the Sun. The <A>spec<T> keys
         will effect how much tilt will be the orbits when redraw. You
         can also move and set the scale of the orbital drawings.

         As a test for the Night Sky program. Set out below is a list taken
         from The Astronomical Almanac for the positions of the planets
         for January 1st 1988.

                           The Night Sky       The Astronomical Almanac

                         R.A.         Dec.         R.A.         Dec.
            Mercury    19.05.04    -24.38.35     19.05.27    -24.38.02
            Venus      20.59.36    -18.57.35     21.00.01    -18.55.55
            Mars       15.30.08    -18.29.48     15.30.46    -18.32.12
            Jupiter    01.16.37    +06.42.32     01.16.41    +06.42.54
            Saturn     17.40.34    -22.15.01     17.40.24    -22.14.52
            Uranus     17.52.20    -23.36.20     17.49.47    -23.35.20
            Neptune    18.30.55    -22.16.41     18.33.39    -22.15.30
            Pluto      14.57.11    -00.17.08     14.58.03    -00.20.14
            Sun        18:42:35    -23:04:47     18:42:32    -23:04:58
            Moon       04:08:21    +25:49:34     04:08:30    +25:42:53



         10

                   COMETS AND MINOR PLANETS


         Pressing 3 from the main menu will allow you plot 25 preset comets
         and 25 preset minor planets or asteroids. You can also add your
         own comet and minor planet positions and plot them. The
         Astronomical Almanac for example, gives the orbital elements of
         140 minor planets.

         Lets now list and plot the position of the minor planet Ceres
         on the 1st January 1988.    First,  using the <N>ew page and
         <M>ove arrow keys select Ceres. Press C to continue, and the
         program will then give you information on the orbital elements of
         Ceres.  Press C once more and change the date to January 1st. The
         program will then list the position of Ceres.  You can then <P>lot
         Ceres on a star map, and like the planets <M>ove it.

         Once again we will test the output of the Night Sky program
         against The Astronomical Almanac.

                          The Night Sky       The Astronomical Almanac

                         R.A.         Dec.         R.A.         Dec.
            Ceres      20.12.23    -25.56.58     20.12.21    -25.54.51

         The Night sky also gives the Ceres- Earth distance as 3.86
         astronomical units, the Almanac gives the distance as 3.858 A.U.
         The astronomical unit is the Sun-Earth distance of about 93 million
         miles.


                   LOCAL SKY


         This part of the program will draw your local night sky on
         any night of the year. The planets will also be added and you
         will be given their rising and setting times. Included in the
         map will be the position of the Moon together with a little
         drawing of its phase.

         Pressing 4 from the main menu will take you to a new sub menu
         where you will be given three choices. One, touching the
         space bar will draw your local night sky.  Pressing T will
         temporary change the date and time for any night of the year.
         Pressing E will exit you back to the main menu if you change
         your mind.

         Lets say, you pressed the space bar for drawing tonights
         local night sky.  The computer will tell you its " working "
         and after a few seconds you will be asked to set the
         direction of the first map drawn.  This can be <N>orth,
         <S>outh, <E>ast or <W>est.  Pressing any one of these keys
         will draw  the first map.  Pressing N,S, E or W after this



         11

         will redraw the map almost at once.  Pressing the spacebar at
         any time will exit you to the main menu.  Pressing <R> will
         make the sky slowly turn. If any planets are drawn, they will
         be listed on the left hand side of the map.  Pressing the *
         key will draw a line from the listed planet to the marked
         cross on the map.  Pressing the # key will erase this line.
         You can also set the scale of the maps by pressing + or -.
         Pressing <F> or <B> will list forwards or backwards, all the
         objects drawn on the map;  each will be boxed.

         The time between plots of your local night sky after pressing
         R is about one minute.  You can also press R a number of
         times and then sit back and watch the night sky slowly turn.
         Pressing N,S, E or W after pressing R, will clear the screen
         and again plot the sky, at whatever the time was when you
         left the R mode.

         Pressing T will give you a chance to temporary change the time and
         date.  Just follow the instructions for doing this,  you set
         the date and time by mainly using the space bar.

         Pressing the <M>ap key will draw a whole sky view, and add to it
         the positions of the planets.


                   ECLIPSES


         Pressing 5 from the main menu will allow you to predict Solar and
         Lunar eclipses from the 1st January 1600 to the 31st December
         3000.

         From the new menu press make your choice for a <S>olar or a <L>unar
         eclipse. You will then be asked to set the starting date and the
         direction of the search for eclipses.  What the program then does
         is look for new and full Moons and see if an eclipse is possible.

         When an eclipse is found it will list the elements of that
         eclipse.  That is, the positions of the Sun and Moon. The
         circumstances of the eclipse, or its type and times will also be
         listed. All times listed, are local civil times. You can then draw
         a map of the Earth and plot the motion of the Sun and Moon across
         its surface.  But most important, you can also plot the rising
         and setting curves, and check if you can see the eclipse from your
         home.

         You can then draw an eclipse diagram.  These drawing are
         calculated from the positions of the Sun and Moon every quarter
         of a hour during the eclipse.



         12

         The Lunar eclipse drawing will show the path of the moon across
         the Earth's shadow during that eclipse.

         The Right Ascension and Declination of the Sun and the Moon are
         coordinates that would be observed at the center of the Earth.
         During a solar eclipse you have to take into account the Moon's
         geocentric parallax, and transform these coordinates to those that
         would be observed from the surface of an invisible Earth.

         What you have to do is match the coordinates of that of the Sun
         with that of the Moon by moving your position on the surface of
         the Earth. Taking as an example, a total eclipse of the Sun took
         place on the 18th March, 1988.  The Night Sky program lists the
         Right Ascension and Declination of the Sun and Moon at the middle
         of the eclipse as:

                        Sun                          Moon
                    R.A.   23:51:33              R.A.   23:50:50
                    Dec.  -00:54:51              Dec.  -00:31:31

         The sub-solar point is listed as 00:54:51 South, 151:47:16 East.
         The sub-solar point is the location on the surface of the Earth
         where the Sun directly overhead. The program also informs you
         that the eclipse took place in the northern hemisphere of the
         Earth.  By pressing the marked keys you can move your position
         across the surface of the Earth in one half degree steps. If you
         move to latitude 22.0 North and longitude 142.0 East, the
         coordinates of the moon are now R.A. 23:51:28, Dec. -00:54:39.

         Checking with the Astronomical Almanac, this position is indeed
         in the path of a total eclipse.  You can then draw the path of
         the Moon across the surface of the Sun.  When completed, you can
         then <R>eplay or show the <P>ath of the moon again.


                   SUN


         Pressing 6 from the main menu will list the the positions of the
         Sun from the year 1600 to 3000. It will also draw a graph of the
         equation of time, which the difference between the mean Sun
         time and the real Sun time.

         Also listed by the program are the angular diameter of the Sun
         and the Sun - Earth distance. The rising and setting times are
         also given.  The equation of time, plus the transit time
         is also given.  Lets now test the Night Sky program. Once again
         the date is the 1st January 1988.



         13

                    The Night Sky          The Astronomical Almanac

                    R.A          Dec           R.A.         Dec
                 18.42.35    -23.04.47      18.42.32    -23.04.58

              Angular diameter      Sun-Earth Dist:    Transit time
         NS        00.32.31             0.98331           12.03.17
         AA        00.32.31             0.98328           12.03.16

                Angle of axis   Heliographic  Latitude     Longitude
         NS        +2.40                      -2.96         258.34
         AA        +2.39                      -2.95         258.34

         You can also <D>raw the sun showing its angle of axis, or <M>ap
         its path across the surface of the Earth.  Rising and setting
         curves can also be added to the map.



                   MOON


         Pressing 7 from the main menu will list the the positions of the
         Moon from the year 1600 to 3000. It will also draw the phases of
         the Moon.   It will also list its age, Earth - Moon distance,
         phase, horizontal parallax and rising and setting times. Also
         included will be a bar going from new to the full Moon, this
         will give you a quick indication of the fraction of the lunar disk
         illuminated. You can also plot graphically the lunar disk,
         just press <D> to draw the Moon.  It will then every time
         you press the space bar, you will get a new picture of the
         lunar disk.  You can if you like press the space bar a number
         of times and sit back and watch how the Moon changes in
         brightness. You can also <M>ap its path across the surface of the
         Earth.  Rising and setting curves can also be added to the map.


         The <L>unar calendar will plot the phases of the moon for each
         month,drawing the moon to scale. The <P>hase mode will show how
         the moon orbits the Earth, changing its phase as it does so. The
         <A>pollo manned missions mode will give you some information on
         these missions from Apollo 7 to Apollo 17.


         For the last time we will test the program against the
         Astronomical Almanac for January 1st 1988.


                    The Night Sky          The Astronomical Almanac

                    R.A.         Dec.          R.A.         Dec.
                 04.08.21    +25.49.34      04.08.30    +25.42.53

               Angular diameter    Distance km   Horizontal parallax  Phase
         NS        00.30.34         390865           00.56.05         0.91
         AA        00.30.19         394022           00.55.39         0.91




         14

                   SATELLITES OF JUPITER

         Pressing 8 from the main menu will draw the the positions of the
         four moons of Jupiter from the year 1600 to 3000. These moons are
         Io, Europa, Ganymede and Callisto.

         This a pure graphics program which will from the date you select
         draw the orbits of these moons for 6 days. The form taken by the
         drawings will be that used in The Astronomical Almanac,which is a
         series of curves from the top of the screen to the bottom. Also
         included in the bottom of the screen will be an sideways look
         at Jupiter showing how the moons move back and forwards.

         Pressing the <P>ause key will stop the display and mark each
         moon.

                   TRANSITS OF MERCURY & VENUS

         Pressing 9 from the main menu will calculate and plot 94 transits
         of Mercury and 24 transits of Venus.

         After calculating the positions for each transit, it will list
         the times at the following points. Ingress, exterior and interior
         contact, middle of the transit, and then the egress, both
         interior and exterior contact.  You can then <P>lot the transit.
         This will show the path of the planet across the surface of the
         Sun.   Pressing the <T>ransit key will then plot the next transit
         onto the same drawing.


                   NIGHT SKY STAR ATLAS

         Pressing 0 from the main menu will allow you to map any part of
         the night sky, showing 24,000 stars to magnitude +7.49.

         You can also plot from preset positions, all 88 constellations or
         the brightest deep sky objects.


                   EXIT TO DOS


         Pressing <E>xit from the main menu takes you back to the disk
         operating system.



                   SHAREWARE



         Shareware is the distribution of software by which the value
         of a program is best determined by the user of that program.
         While the copying of this program is encouraged, it should be



         15

         distributed in an unmodified form and no charge made, expect
         for a small fee for postage and materials. Copying of The
         Night Sky is allowed for the purpose of backup and to allow
         others to try out and evaluate the program.

         If you found The Night Sky useful and enjoyable please think
         about registration. The author has spend many long and arduous
         hours working on this program.

         The cost of registration is only 24.95. (Pounds Sterling)  If
         you live outside the EEC please add 1.50 to cover postage and
         packing. Registration provides other benefits, such as
         support. You also will receive one of the following  special
         versions.

                   Version A:

         Four standard 5.25 inch 360K disks. Plots 24,000 stars to magnitude
         +7.49.

                   Version B:

         Six standard 5.25 inch 360K disks. Which is version A, plus two
         extra disks for hard disks users. Plots 45,000 stars to magnitude
         +8.49.

                   Version C:

         Three standard 3.5 inch 720K disks. Plots 45,000 stars to
         magnitude +8.49.


         The author would be interested in any comments on improving this
         program. Some of its better/best ideas came from suggestions by
         registered users.  While this program as been fully tested, no
         doubt some minor errors will have crept in. The author would also
         like to hear about them.

         The author would also like to make a list of what computers
         are used to run this program. So will you please tell me your
         make of PC in any correspondence.

         Registered users can always receive copies of any later updates to
         the program.  When any new issue is completed you will be
         requested to send blank disks for this new version.



         April 1990.

         A.C.Stevely. 5c, Saint Johns Vale, London, SE8 4EA.

         Telephone : 081 692 8265


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2139

     Volume in drive A has no label
     Directory of A:\

    EOT      DAT       884   2-16-90   9:57p
    LCL      DAT       724   2-16-90   9:59p
    LDT      DAT       642   2-16-90  10:00p
    LPS      DAT       644   2-16-90   9:58p
    MANUAL   DOC     36165   4-02-90  12:09p
    MAP      DAT     15928  11-03-89   8:08p
    PROG5    TBC     42524   6-04-90   8:24p
    PROG6    TBC     33866   6-04-90   8:25p
    PROG7    TBC     42403   6-04-90   9:09p
    PROG8    TBC     19787   6-04-90   8:27p
    PROG9    TBC     54694   6-04-90   8:29p
    SOJ      DAT       706   2-16-90  10:02p
    SOL      DAT       652   2-16-90  10:01p
    TVM      DAT      2240   2-12-90   8:38p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       883   7-11-90  12:43a
    FILE2139 TXT      2147   7-12-90   3:22p
           17 file(s)     254927 bytes
                           58368 bytes free
