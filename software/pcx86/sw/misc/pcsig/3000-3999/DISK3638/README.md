---
layout: page
title: "PC-SIG Diskette Library (Disk #3638)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3638/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3638"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## REGISTER.DOC

{% raw %}
```



        VERSAMAP Order Form (version 1.30)
        
        
        Make checks payable to Charles Culberson.  Persons living outside
        the United States can register VERSAMAP by obtaining a Postal Money
        Order payable in U.S. dollars from their National Post Office; or by
        personal check in their local currency at the current exchange rate. 
        Send order form and comments to:
        
                                 Charles Culberson
                                 8 Ritter Lane
                                 Newark, DE  19711
                                 USA
        
        
        ------------------ Registration, version 1.30 ------------------
        
        Date: __________________________________________________________
        
        Where did you obtain VERSAMAP? _________________________________
        
        Your Name: _____________________________________________________
        
        Address: _______________________________________________________
        
        ________________________________________________________________
        
        ________________________________________________________________
        
        ________________________________________________________________
        
        
        Please circle the floppy disk size that you would like the VERSAMAP
        files supplied on.
        
        
          5.25" 360K       5.25" 1.2M       3.5" 720K       3.5" 1.4M
        
        
        --------------------------- Comments ---------------------------
        
        
        
        
        
        
        
        
        
        
        
        
        


        REGISTER.DOC for VERSAMAP 1.30                      Page 1 of 3




        VERSAMAP Order Form (version 1.30, continued)
        
        
        Item                                                           Cost
        
        1.  VERSAMAP, registered copy , $15                          ______
        
        Most recent version of mapping program plus Helvetica fonts
        and maps VMAP3.MAP (31,000 points) and VMAP5.MAP (6,000
        points).
        
        
        2.  Printed Manual, $15                                      ______
        
        Printed copy of VERSAMAP instruction manual with soft
        cover.  The text of the printed manual is identical to the
        text of the instruction manual, VMAP.DOC, included on the
        VERSAMAP disk.
        
        
        3.  VERSAMAP Micro World Database, $15                       ______
        
        Includes complete set of 5 maps, VMAP1.MAP (195,000 points)
        to VMAP5.MAP (6,000 points).  See page 35 of instruction
        manual for details.
        
        
        4.  World Data Bank II in VERSAMAP .PKV format (data only supplied
            on high density 3.5" or 5.25" floppy disks).  See page 32 of
            instruction manual for details of this database.
        
        Region            Comments
        
        Africa            Suez Canal divides Africa and Eurasia
        Eurasia           includes Japan and Taiwan
        Latin America     Mexico to Chile, including Antarctica 
        North America     Canada, United States (Hawaii is in Oceania)
        Oceania           Indonesia, Philippines, Australia, New
                          Zealand, and Pacific Islands
        
        
        ------- Circle regions wanted -------
        
        Region            Number of      Cost
                            Disks
        
        Africa                2           $10
        Eurasia               5           $25
        North America         3           $15
        Latin America         2           $10
        Oceania               1           $ 5
        
                           Total cost of World Data Bank II files:   ______


        REGISTER.DOC for VERSAMAP 1.30                      Page 2 of 3




        VERSAMAP Order Form (version 1.30, continued)
        
        
        Item                                                           Cost
        
        5.  USGS Digital Line Graph data in VERSAMAP .GRV format (data only
            supplied on high density 3.5" or 5.25" floppy disks).  See page
            36 of instruction manual for details of this database.
        
        
        -------------- Circle sections wanted --------------
        
          USGS         States on disk(s)                    Number of
        Sections                                                Disks
        
        01            CT, MA, ME, NY, VT, NH, RI                 1
        02            DE, MD, OH, NJ, PA, VA, WV                 1
        03, 04        FL, GA, NC, SC                             1
        05            AL, AR, LA, MS, TN                         2
        06            IA, IL, IN, KY, MO                         2
        07            MI, MN, WI                                 1
        08            TX     (TX in section 09 also)             1
        09            TX, OK (TX in section 08 also)             1
        10            CO, KS, NE                                 1
        11            MT, ND, SD, WY (MT in section 15 also)     1
        12            AZ, NM                                     1
        13, 14, 21    CA, HI, NV, UT                             1
        15            ID, MT, OR, WA (MT in section 11 also)     1
        16 thru 20    AK                                         5
        
        
                       Total cost of USGS Digital Line Graph files
                                    (number of disks x $5 per disk): ______
        
        
        6.  $5 charge for shipping to addresses outside the U.S.
                                                          or Canada: ______
        
        
        7.  $7 charge for checks drawn on foreign banks in foreign
            currency.  Except for Canadian banks, I cannot accept
            checks drawn on foreign banks in U.S. currency.  There
            is no charge for checks drawn on U.S. banks.             ______
        
        
        
        
            Minimum order is $15.  Total cost of items 1 through 7,
            or $15, whichever is greater.                            ______
        
        
        


        REGISTER.DOC for VERSAMAP 1.30                      Page 3 of 3


```
{% endraw %}

## VMAP.DOC

{% raw %}
```





        
                              VERSAMAP (version 1.30)
                                    1 July 1993
        
                Copyright 1991, 1992, 1993 by Charles H. Culberson
                                   8 Ritter Lane
                              Newark, Delaware  19711
        
        
        
        
        
        
             CONTENTS                                               PAGE
        
         1.  Introduction                                             2
         2.  Computer Requirements for Running VERSAMAP               3
         3.  Disclaimer                                               3
         4.  Registration                                             3
         5.  Plotting the Default World Map                           4
         6.  Finding your Way with Latitude and Longitude             5
        
         7.  Keys with Special Functions in VERSAMAP                  7
             a. Exit the program                                      7
             b. Using a mouse                                         8
             c. Moving around windows                                 8
        
         8.  Running VERSAMAP                                         9
             a. VERSAMAP Defaults                                     9
             b. VERSAMAP Pull-down Menus                              9
                1. Projection menu                                   10
                2. Map Design menu                                   14
                3. Input/Output menu                                 23
                4. Run menu                                          31
        
         9.  Sources of Digital Map Data for use with VERSAMAP       31
             a. World Data Bank II                                   32
             b. Micro World Data Bank II                             34
             c. USGS Digital Line Graph Data                         36
             d. Importing Your Own Data into VERSAMAP                40
        
        10.  Use of VERSAMAP with Graphing Programs                  42
        11.  Program Compatibility with Software and Hardware        43
             a. Video Compatibility                                  44
        
        12.  Installing VERSAMAP                                     45
        13.  VERSAMAP Order Form                                     49
        14.  Acknowledgements                                        52
        15.  Glossary                                                53
        16.  Index                                                   55
        
        
        


        VMAP.DOC version 1.30                                    Page  1 





        1.  Introduction
        
        Welcome to VERSAMAP!  VERSAMAP is a versatile mapping program which
        will transform spherical latitude, longitude values into planar x,y
        map coordinates and plot them on a map projection of your choice. 
        VERSAMAP can print the resulting map on the screen and on dot matrix
        or laser printers.  Maps can be exported as .PCX, .PIC, .CGM, or
        ASCII files, for use with paint programs, word processors, and
        presentation or technical graphics programs.  VERSAMAP is supplied
        with Courier and Helvetica fonts which allow text to be added to
        maps displayed on the screen.
        
        The shareware version of VERSAMAP contains the following files:
        
           VMAPREAD.ME  --  how to get started
              VMAP.EXE  --  the mapping program
             VMAP4.MAP  --  digital map of the world (16,000 points)
              VMAP.DOC  --  instruction manual
        
          VMTAIWAN.PKV  --  sample map of Taiwan from World Data Bank II
            VMOAHU.GRV  --  sample map of Oahu from USGS DLG database
        
          VMAPUSER.PRN  --  sample file containing data in ASCII format,
                            study this file to learn how to plot your own
                            data with VERSAMAP
            VM_FIX.MPS  --  a small file used to concatenate World
                            Digitized binary map files
            VM_FIX.MP1  --  a small file used to concatenate World
                            Digitized ASCII map files.
        
          REGISTER.DOC  --  VERSAMAP order form
            MSHERC.COM  --  driver for Hercules mono graphics
        
          COUR_CGA.FON  --  fixed-space Courier font for CGA, MCGA
          COUR_EGA.FON  --  fixed-space Courier font for EGA, Hercules
          COUR_VGA.FON  --  fixed-space Courier font for VGA
        
        
        The following additional files are supplied with the registered
        version of VERSAMAP:
        
          HELV_CGA.FON  --  proportional Helvetica font for CGA, MCGA
          HELV_EGA.FON  --  proportional Helvetica font for EGA, Hercules
          HELV_VGA.FON  --  proportional Helvetica font for VGA
        
             VMAP3.MAP  --  digital map of the world (31,000 points)
             VMAP5.MAP  --  digital map of the world  (6,000 points)
        
        
        Additional, more detailed maps are also available; see Section 13,
        pages 49-51 for details.  Please make backup copies of these files
        before running the program.
        


        VMAP.DOC version 1.30                                    Page  2 





        2.  Computer Requirements for Running VERSAMAP
        
              MS-DOS 3.0 or higher;
              CGA, MCGA, EGA, VGA, or Hercules mono graphics;
              640K memory;
              a math coprocessor is not required but VERSAMAP will run
                3-4 times faster if one is installed.
        
        VERSAMAP will not change your AUTOEXEC.BAT or CONFIG.SYS files, it
        will not alter your keyboard settings, and it will not write any
        files to disk without your permission.
        
        Instructions for installing VERSAMAP on hard or floppy disks are
        given in Section 12, page 45.
        
        
        3.  Disclaimer
        
        Users of VERSAMAP must accept this disclaimer of warranty:
        
        "VERSAMAP is supplied as is.  The author disclaims all warranties,
        expressed or implied, including, without limitation, the warranties
        of merchantability and of fitness for any purpose.  The author
        assumes no liability for damages, direct or consequential, which may
        result from the use of VERSAMAP."
        
        Do not use this program for navigation!  Use the proper aeronautical
        or nautical charts for navigation.
        
        
        4.  Registration
        
        Shareware distribution gives users a chance to try software before
        buying it.  VERSAMAP is a "shareware program" and is provided at no
        charge to the user for evaluation.  If you find this program useful
        and find that you continue to use VERSAMAP after a reasonable trial
        period, you must register the program.  The registration fee will
        license one copy for use on any one computer at any one time.  You
        must treat this software just like a book.  An example is that this
        software may be used by any number of people and may be freely moved
        from one computer location to another, so long as there is no
        possibility of it being used at one location while it's being used
        at another.  Just as a book cannot be read by two different persons
        at the same time.
        
        Registration of the program is $15 for which you will receive a copy
        of the most recent version of the program; Helvetica fonts for CGA,
        EGA, and VGA; and 2 additional digital map files, VMAP3.MAP (31,000
        points) and VMAP5.MAP (6,000 points).  Registration entitles you
        support, by mail, telephone, and on CompuServe, concerning problems
        you encounter with VERSAMAP.  An order form is included in the file
        REGISTER.DOC, and also on page 49 of this manual.
        


        VMAP.DOC version 1.30                                    Page  3 





        You are encouraged to share a copy of VERSAMAP with your friends for
        evaluation.  Please encourage them to register their copy if they
        find it useful.
        
        Anyone distributing VERSAMAP for any kind of remuneration must first
        contact Charles Culberson at the address on the order form for
        authorization.  This authorization will be automatically granted to
        distributors recognized by the Association of Shareware
        Professionals as adhering to its guidelines for shareware
        distributors, and such distributors may begin offering VERSAMAP
        immediately.  However Charles Culberson must still be advised so
        that the distributor can be kept up-to-date with the latest version
        of VERSAMAP.
        
        This program is produced by a member of the Association of Shareware
        Professionals (ASP).  ASP wants to make sure that the shareware
        principle works for you.  If you are unable to resolve a
        shareware-related problem with an ASP member by contacting the
        member directly, ASP may be able to help.  The ASP Ombudsman can
        help you resolve a dispute or problem with an ASP member, but does
        not provide technical support for members' products.  Please write
        to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442-9427,
        FAX 616-788-2765, or send a CompuServe message via CompuServe Mail
        to ASP Ombudsman 70007,3536.
        
        
        5.  Plotting the Default World Map
        
        Before reading the rest of the manual, let's plot a map of the
        world.  This will familiarize you with the operation of VERSAMAP. 
        The rest of the manual should make more sense once you have actually
        used VERSAMAP.
        
        VERSAMAP has built in defaults which plot a world map, from 80 N to
        80 S latitude, and from 180 W to 180 E longitude, on a Mercator
        projection.  The default settings will not print any files to disk.
        
        To run VERSAMAP with the default settings:
        
                1.  place the VERSAMAP disk containing the files,
                    VMAP.EXE and VMAP4.MAP, in your disk drive
                2.  change to that drive
                3.  type VMAP
                4.  press the Enter key.
        
        A screen with a menu bar across the top will appear once the program
        has loaded.  The pull-down menus are selected by pressing the Alt
        key, followed by the highlighted letter of the desired menu; or by
        pointing and clicking the left mouse button.
        
        
        
        


        VMAP.DOC version 1.30                                    Page  4 





        To plot the world map:
        
                1.  press the Alt key, to access the menus
                2.  press R, to select the Run menu
                3.  press Enter, to select the Size 100% option and begin
                    the plot.
        
        To plot the default map, the map file, VMAP4.MAP, must be in the
        current directory.
        
        When the map begins plotting, the top line of the screen will
        display (1) a reminder that pressing the Esc key will terminate
        plotting and return you to the menu bar; (2) the name of the map
        input file being read, VMAP4.MAP in this case; and (3) the number of
        points which have been read from the input file, VMAP4.MAP.
        
        The menu bar will reappear when the map is finished plotting.  The
        default map takes 40 seconds to plot on a 16MHz 386SX computer
        equipped with a math coprocessor; it takes 18 minutes to plot on a 
        5 MHz IBM PC without a math coprocessor.
        
        To exit the program and return to DOS:
        
            1.  press the Esc key, to halt plotting;
            2.  press the Alt key, to access the menus;
            3.  press P, to select the Projection menu;
            4.  press X from the Projection menu to exit the program.
        
        Pressing the Esc key halts program execution and returns you to the
        menu bar.  Pressing Esc will not exit the program.
        
        Please read the rest of the instruction manual before attempting to
        plot maps which do not use the default parameters.
        
        
        6.  Finding your Way with Latitude and Longitude
        
        To use this program you should be familiar with the concepts of
        latitude and longitude.
        
        Latitude is the angular distance (in degrees) of a point on the
        earth's surface north or south of the equator.  The maximum values
        of latitude are 90 N (north pole) and 90 S (south pole).  The
        equator is 0 N/S latitude.
        
        Longitude is the angular distance (in degrees) of a point on the
        earth's surface east or west of the meridian that passes through
        Greenwich, England.  The maximum values of longitude are 180 W and
        180 E (the international date line).  The meridian passing through
        Greenwich is 0 E/W longitude.
        
        Latitude and longitude values in VERSAMAP are entered as degrees,
        minutes, seconds.  There are 60 seconds in 1 minute, and 60 minutes
        in 1 degree.  One degree of latitude is equal to 60 nautical miles

        VMAP.DOC version 1.30                                    Page  5 





        (1 nautical mile = 6076 feet = 1.852 kilometers = 1.1508 statute
        miles).  One minute of latitude is equal to 1 nautical mile.  One
        second of latitude is equal to 101 feet (31 meters).
        
        For example, the position for Rio de Janeiro, Brazil, written as
        degrees, minutes, and seconds (22 degrees, 53 minutes, 43 seconds
        south latitude; 43 degrees, 13 minutes, 22 seconds west longitude)
        is,
        
                                           Deg Min Sec
        
                             latitude   =   22  53  43  S
                             longitude  =   43  13  22  W
        
        
        The position for Paris, France (48 degrees, 50 minutes, 14 seconds
        north latitude; 2 degrees, 20 minutes, 14 seconds east longitude)
        is,
        
                                           Deg Min Sec
        
                             latitude   =   48  50  14  N
                             longitude  =   02  20  14  E
        
        
        If you are unfamiliar with the use of latitude and longitude to
        locate points on the surface of the earth, please consult an
        encyclopedia or an atlas.
        
        When plotting maps with VERSAMAP it is useful to have an atlas handy
        to determine the latitude/longitude coordinates of the area you wish
        to plot.  An easy to use, up-to-date, and reasonably priced atlas is
        the
        
           Quick Reference World Atlas.  1992.  Rand McNally & Company,
             Chicago.  64 pages.  $4.95.  ISBN 0-528-83422-3.
        
        
        A easily understandable introduction to the theory of map
        projections is the book:
        
           Porter W. McDonnell.  1991.  Introduction to Map Projections.
             Second edition.  Landmark Enterprises, 10324 Newton Way,
             Rancho Cordova, California  95670.  198 pages.
             ISBN 0-8247-6830.
        
        
        A detailed discussion of the map projections used in this program,
        showing actual plots, is given in:
        
           John P. Snyder and Philip M. Voxland.  1989.  An Album of Map
             Projections.  U.S. Geological Survey Professional Paper 1453.
             U.S. Government Printing Office.  249 pages.  $14.


        VMAP.DOC version 1.30                                    Page  6 





        7.  Keys with Special Functions in VERSAMAP
        
        
                                        Esc
        
        Pressing the Esc key halts program execution and returns you to the
        menu bar.  Pressing Esc will not exit the program.
        
        If you are in the process of plotting or printing a map, the program
        checks the Esc key each time the record number or point, shown in
        the upper right corner of the screen, is updated.  Consequently, the
        program may take several seconds to respond after Esc is pressed.
        
        There is one situation in which pressing Esc will not return you to
        the menu bar.  If you are in the LATITUDE AND LONGITUDE LIMITS or
        SELECTION OF STANDARD PARALLELS windows, and have entered an
        incorrect latitude or longitude value, VERSAMAP will issue an error
        message and force you to enter a correct value before you can leave
        the window.
        
                                        Alt
        
        Pull-down menus are selected by pressing the Alt key, followed by
        the highlighted letter of the desired menu.  Individual menu items
        are selected by pressing the highlighted letter of each item; by
        moving through the menu with the up or down cursor keys, and then
        pressing Enter to select the item; or by moving the mouse cursor
        over the desired item and pressing the left mouse button.
        
                                 Exit the program
        
        To exit the program and return to DOS:
        
            1.  press the Esc key, to halt plotting or erase the current
                window;
            2.  press the Alt key, to access the menus;
            3.  press P, to select the Projection menu;
            4.  press X from the Projection menu to exit the program.
        
        If a window is on the screen or a map is in the process of being
        drawn, you must press Esc before you can access the menus and exit
        the program.
        
                                     Letter T
        
        Pressing the letter T toggles the menu bar on and off; and replaces
        it with the name of the current projection, and the time taken to
        draw the current map.  You must press T a second time, or press Esc,
        to redisplay the menu bar and reactivate the pull-down menus.
        
        
        
        


        VMAP.DOC version 1.30                                    Page  7 





                                     Letter B
        
        Pressing the letter B erases the menu bar and changes the background
        color of the menu bar to the background color of the map.  This
        feature is useful if you use a screen-capture program to print maps
        to disk or printer.  You must press B a second time, or press Esc,
        to redisplay the menu bar and reactivate the pull-down menus.
        
                                   Using a mouse
        
        Most VERSAMAP features can be accessed by pointing and clicking the
        left mouse button.  Windows and pull-down menus can be closed by
        clicking the left mouse button when the mouse cursor is outside the
        window or menu box.
        
                               Moving around windows
        
        The windows which pop up when menu selections are made contain
        several types of items: (1) input fields; (2) vertical list boxes;
        and (3) pushbuttons.
        
        Input fields allow numeric and alphabetic input into the program. 
        An example of a window with numeric input fields is the LATITUDE AND
        LONGITUDE LIMITS window selected by pressing Alt, then M, then M. 
        You can move within an input field with the right, left, Home, and
        End cursor keys.  To enter data into an input field, type the
        correct characters from the keyboard, and press Enter.
        
        Vertical list boxes allow one or more items in a list to be chosen. 
        An example of a window with a vertical list box is the SELECT MICRO
        WORLD DATA BANK II FEATURES window selected by pressing Alt, then M,
        then F.  Move through the list with the up and down cursor keys, and
        select the correct item(s) by pressing the Space Bar or Enter.  The
        item(s) selected will be highlighted or indicated with a checkmark.
        
        If the number of items in the list is too large to fit inside the
        box, a scroll bar will appear along the right side of the box,
        allowing all items to be viewed.
        
        Pushbuttons, indicated by text inside brackets, such as < OK >,
        allow the user to control program execution.  An example of a window
        with a pushbutton is the MAP PLACEMENT ON PAGE IN INCHES window
        selected by pressing Alt, then I, then P.  The text inside the
        brackets indicates the action to be taken when the pushbutton is
        selected.  The brackets of the currently active pushbutton are
        highlighted, and its text is shown in all capital letters.  To
        select a pushbutton, tab to that button and press Enter.
        
        Use the Tab key to move between items when more than one list box or
        pushbutton occur in a window.
        
        
        


        VMAP.DOC version 1.30                                    Page  8 





        8.  Running VERSAMAP
        
                                 VERSAMAP Defaults
        
        Each map projection in VERSAMAP has built in latitude/longitude
        defaults which are active the first time you access the projection
        during each session with VERSAMAP.  These defaults allow you to plot
        maps using each map projection without getting error messages.  The
        defaults are only active the first time you access a particular map
        projection.  For instance, if you access the Mercator projection,
        then the Equirectangular projection, and finally return to the
        Mercator projection, the latitude limits of the grid will be those
        of the previous Equirectangular projection, 90 N/S, and you will get
        an error message if you attempt to plot a Mercator projection
        without changing the graticule.
        
        
                             VERSAMAP Pull-down Menus
        
        The following paragraphs provide a detailed discussion of each
        VERSAMAP pull-down menu.  For your first experience with VERSAMAP
        you should run the program with its default settings (see Section 5
        above).
        
        When VERSAMAP is started, the following menu bar appears at the top
        of the screen.
        
        -----------------------------------------------------------------
          Projection      Map Design      Input/Output      Run
        -----------------------------------------------------------------
        
        
        When you begin plotting a map, by selecting an option in the Run
        menu, the menu bar is replaced by the following line.  This line is
        not a menu bar, it is for your information only.
        
        
        -----------------------------------------------------------------
         Esc: goto menu         Input file:             Reading record:
        -----------------------------------------------------------------
        
        
        While a map is plotting, the top line of the screen displays (1) a
        reminder that pressing the Esc key will terminate plotting and
        return you to the menu bar; (2) the name of the current map input
        file;  and (3) the number of points which have been read from the
        input file.
        
        Once the map is completed, the menu bar reappears on the top line.
        
        
        
        


        VMAP.DOC version 1.30                                    Page  9 





        Projection menu
        
        -----------------------------------------------------------------
          Projection      Map Design      Input/Output      Run
        +----------------------------------------------------------------
        | Mercator                  |
        | Equirectangular           |
        |---------------------------|
        | Equidistant conic         |
        | Conformal conic           |
        | Albers equal-area         |
        |---------------------------|
        | Gnomonic                  |
        | Stereographic             |
        | Orthographic              |
        | Vertical Perspective      |
        | Azimuthal equidistant     |
        | Azimuthal equal-area      |
        |---------------------------|
        | Hammer equal-area         |
        | Robinson                  |
        |---------------------------|
        | Exit                      |
        +---------------------------+
        
        
        This menu lists the map projections on which you can plot your map. 
        To simplify mathematical calculations, VERSAMAP assumes that the
        Earth is a sphere of radius 6,371 km.
        
        
                                     Mercator
        
        On this projection, meridians and parallels are parallel lines
        perpendicular to each other.  Meridians are equally spaced,
        parallels are unequally spaced.  The north and south poles cannot be
        plotted because they project to infinity.
        
        The scale is true along the equator, or along two parallels
        equidistant from the equator.  Since the scale increases rapidly
        away from the equator, the areas of polar regions are greatly
        exaggerated compared to those of equatorial regions.
        
        The Mercator projection is commonly used for maps of the world, and
        is designed so that straight lines on the map are rhumb lines (lines
        of constant compass bearing).  This is a useful property in
        navigation and many nautical charts use Mercator projections.
        
        
                                  Equirectangular
        
        Meridians and parallels are equally spaced parallel lines
        perpendicular to each other.  The scale is true along the two
        standard parallels and along all meridians.  The scale along

        VMAP.DOC version 1.30                                    Page  10 





        parallels is too small between the equator and the standard
        parallels, and too large between the standard parallels and the
        poles.
        
        The map can be visualized as projected on a cylinder which
        intersects the globe at two standard parallels equidistant from the
        equator.  VERSAMAP allows the user to select the latitude of the
        standard parallels.
        
        The fact that meridians and parallels are equally spaced makes
        interpolation easy.  The projection is useful for maps of small
        regions, since distortion is not large if one of the standard
        parallels is chosen to bisect the region under consideration.
        
        
                                 Equidistant Conic
        
        Meridians are equally spaced lines converging at a point beyond one
        of the poles.  Parallels are equally spaced circular arcs centered
        on the point where the meridians converge.  The poles are circular
        arcs of infinite scale.  Distortion on the projection is
        intermediate between that of equal-area and conformal conic
        projections.
        
        The scale is true along meridians and along two standard parallels. 
        VERSAMAP allows the user to select the latitudes of the standard
        parallels.
        
        
                                  Conformal Conic
        
        Meridians are equally spaced lines converging at a point, which is
        one of the poles.  Parallels are unequally spaced circular arcs
        centered on the point where the meridians converge.  The pole
        opposite the point of convergence cannot be shown.
        
        The scale is true along two standard parallels, which VERSAMAP
        allows the user to select.  The projection is conformal: the scale
        is the same in all directions at a given point.
        
        
                              Albers Equal-Area Conic
        
        Meridians are equally spaced lines converging at a point beyond one
        of the poles.  Parallels are unequally spaced circular arcs centered
        on the point where the meridians converge.  The poles are shown as
        circular arcs of infinite scale.
        
        The scale is true along two standard parallels, which VERSAMAP
        allows the user to select.  Since the projection is equal area, the
        scale at any point on a meridian is the reciprocal of the scale
        along a parallel at that point.
        


        VMAP.DOC version 1.30                                    Page  11 





                                     Gnomonic
        
        The primary feature of gnomonic projections is that great circles
        plot as straight lines.  Thus the shortest distance between two
        points on this map is the straight line connecting them.
        
        The range of the Gnomonic projection must be less than 90 degrees,
        relative to the center of the map.  The scale of the projection is
        only correct at the map center.
        
        
                                   Stereographic
        
        The polar aspect of the Stereographic projection is commonly used
        for maps of polar regions.
        
        The range of this projection must be less than 180 degrees, relative
        to the center of the map.  The map scale is constant along any
        circle centered on the map center.
        
        
                                   Orthographic
        
        The projection has the appearance of a globe, and resembles the
        Earth as seen from a great distance in space.
        
        The range of the projection cannot be more than 90 degrees, relative
        to the center of the map.  Map scale is only true at the center of
        the map.
        
        
                               Vertical Perspective
        
        The Vertical Perspective projection shows the Earth as it appears
        from any point above the Earth's surface.  The projection provides
        views of the Earth resembling those seen from space.
        
        The area of the Earth's surface that can be displayed by this
        projection is less than 1 hemisphere.  VERSAMAP allows the user to
        select the distance above the surface from which the Earth is
        viewed.  The default distance is 35,840 km (the distance of
        geosynchronous communication and weather satellites above the
        equator).
        
        
                               Azimuthal Equidistant
        
        On this projection, the distance between the map center and any
        other point on the map is true.  By centering the map at the
        location of interest, you can determine the distance from that point
        to any other place on the Earth.
        
        


        VMAP.DOC version 1.30                                    Page  12 





        This projection can show the entire globe.  The scale of the map is
        true along any straight line radiating from the center of the
        projection.
        
        
                               Azimuthal Equal-Area
        
        This projection is recommended for equal-area maps of nearly
        circular regions of the globe.
        
        The projection can show the entire globe.  The scale of the
        projection is only correct at the center of the map.
        
        
                                 Hammer Equal-Area
        
        This projection is useful for equal area maps of the entire world.
        
        The central meridian is a straight line.  Other meridians are curves
        concave to the central meridian and intersecting at the poles.  The
        equator is a straight line; other parallels are arcs concave toward
        the nearest pole.
        
        The scale of the projection is only correct along the equator and
        the central meridian.
        
        
                                     Robinson
        
        This projection is useful for general purpose world maps with a
        pleasing visual appearance.
        
        The central meridian and all parallels are straight lines.  Other
        meridians are curves concave to the central meridian.
        
        The map scale is true along 38 N and 38 S latitudes.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  13 





        Map Design menu
        
        -----------------------------------------------------------------
          Projection      Map Design      Input/Output      Run
        -----------------------------------------------------------------
                        | Map Boundaries        |
                        | Standard Parallels    |
                        | Graticule Type        |
                        | Geographic Features   | 
                        |-----------------------|
                        | Add Text to Map       |
                        | Select Font           |
                        | Display Previous Text |
                        |-----------------------|
                        | Save Map Design       |
                        | Recall Map Design     |
                        +-----------------------+
        
        
        This menu allows you to modify the design of your map.  You may
        change the boundaries of the map; select the standard parallels, if
        any; define the type of grid superimposed upon the map; select the
        geographic features that you wish to plot; add text to the map; and
        save your selected map parameters for recall at a later time.
        
        
                                  Map Boundaries
        
        After selecting this item, a window appears in which the latitude
        and longitude limits of the map projection are entered.  Data
        entered on this screen define the area to be plotted, and the
        spacing of latitude and longitude grid marks on the finished map.  
        
        The items in the LATITUDE AND LONGITUDE LIMITS window depend on the
        selected map projection.  The following items as displayed for
        non-azimuthal projections (Mercator, Equirectangular, Equidistant
        conic, Conformal conic, Albers equal-area, Hammer equal-area,
        Robinson).
        
        
                       Northernmost latitude of the map?
                       Southernmost latitude of the map?
                 Degrees of latitude between grid marks?
        
                       Westernmost longitude of the map?
                       Easternmost longitude of the map?
                Degrees of longitude between grid marks?
        
        
        For the non-azimuthal projections, you define the map boundaries by
        specifying the northern and southern latitudes, and western and
        eastern longitudes of the map.
        


        VMAP.DOC version 1.30                                    Page  14 





        VERSAMAP requires that the grid spacing you select for non-azimuthal
        projections yield equally spaced divisions between the northern- and
        southernmost latitudes, and between the western- and easternmost
        longitudes.  You will get an error message, requiring you to edit
        the data, if the degrees between grid marks that you have chosen do
        not yield equally spaced divisions along the axes.  For example, the
        northernmost latitude of the default Mercator projection is 80 N and
        the southernmost latitude is 80 S.  The difference between the
        northernmost and southernmost latitudes is 160 degrees of latitude. 
        The Degrees of latitude between grid marks for the default Mercator
        projection is 20 degrees, which divides evenly into the distance
        between the northernmost and southernmost latitudes (160/20 = 8.00). 
        However, you would get an error message if you tried to set the
        Degrees of latitude between grid marks to 19 degrees, since 19 does
        not divide evenly into 160 (160/19 = 8.42)!
        
        For azimuthal projections (Gnomonic, Stereographic, Orthographic,
        Vertical Perspective, Azimuthal equidistant, Azimuthal equal-area)
        the following items are displayed in the LATITUDE AND LONGITUDE
        LIMITS window.
        
                            Central latitude of the map?
                 Degrees of latitude between grid marks?
        
                           Central longitude of the map?
                Degrees of longitude between grid marks?
        
                                Range of map in degrees?
        
        
        The map boundaries of azimuthal projections are defined by
        specifying the position at the center of the map (central latitude,
        central longitude), and the range of the map.  The range of the map
        is the arc distance, in degrees, from the center of the map to the
        edge of the map.  Note, that in VERSAMAP, all azimuthal map
        projections plot with a circular shape.  Since the central meridian
        of the azimuthal projections is a straight vertical line, the Range
        of map in degrees is best thought of as the distance in latitude,
        along the central meridian, from the center of the map to the top
        edge of the map.
        
        For azimuthal projections, VERSAMAP requires that the Degrees of
        latitude between grid marks that you select, yield equally spaced
        divisions when divided into 180 degrees; and that the Degrees of
        longitude between grid marks that you select, yield equally spaced
        divisions when divided into 360 degrees.  You will get an error
        message, requiring you to edit the data, if the degrees between grid
        marks that you have chosen do not yield equally spaced divisions
        when divided into 180 or 360 degrees.  For example, the Degrees of
        latitude between grid marks for the default Stereographic projection
        is 30 degrees, which divides evenly into 180 degrees (180/30 =
        6.00). However, you would get an error message if you tried to set
        the Degrees of latitude between grid marks to 25 degrees, since 25
        does not divide evenly into 180 (180/25 = 7.2)!

        VMAP.DOC version 1.30                                    Page  15 





        For the Vertical Perspective projection (satellite view), the item
        Range of map in degrees is replaced by Distance above surface in
        kilometers.  As the distance from the Earth's surface increases, the
        area (range) of the Vertical Perspective projection increases.  The
        default distance, 35840 km, is the distance of geosynchronous
        communications and weather satellites above the equator.
        
        Once you have entered the items in the LATITUDE AND LONGITUDE LIMITS
        window and pressed the < OK > button, the program checks for errors
        in the latitude/longitude limits of your map projection, and for
        errors in grid spacing.  If the program detects an error, it prints
        an error message on the screen telling you to correct the mistake.
        
        For instance, the program will not allow a Mercator projection to be
        plotted if the Northernmost latitude is 90 N (north pole) or if the
        Southernmost latitude is 90 S (south pole).  Try entering 90 N as
        the Northernmost latitude limit for a Mercator projection.  In this
        case, an error message will appear, forcing you to edit the data.
        
        If you get an error message, you must correct the error before you 
        can leave the window!
        
        
                                Standard Parallels
        
        After selecting this item, a window appears in which the latitudes
        of the standard parallels are entered.
        
        Conic Map Projections:
        
        The conic projections in this program (equidistant conic, conformal
        conic, Albers equal-area) require that you select 2 standard
        parallels of latitude.  The scale of the map is true along the
        standard parallels; the spacing of the parallels determines the
        angle between meridians on the map.
        
        There are 2 constraints on selection of the standard parallels:
        
          1. they must lie between the northern- and southernmost
             latitudes of your grid; and
        
          2. they cannot be symmetrical about the equator.  Standard
             parallels at 20 N and 20 S are not allowed.
        
        
        The program places default values for the standard parallels at 1/6
        and 5/6 of the distance between the northern- and southernmost
        latitudes of the grid.
        
        When this screen appears, the cursor will be in the first position
        of the degrees column of the northernmost standard parallel.  If the
        default values are acceptable, TAB to the < ok > button and press
        Enter to continue.


        VMAP.DOC version 1.30                                    Page  16 





        To change the values, TAB to the line to be edited, enter the new
        value in the field you wish to edit, and press Enter.  The cursor
        will skip to the next field.  Enter a new value if desired and press
        Enter.  Continue until you have edited the last field.  When done,
        TAB to the < ok > button and press Enter.
        
        If you attempt to enter standard parallels which are equally spaced
        about the equator, the program will print an error message and force
        you to change the latitude of one or both of the parallels.
        
        
        Equirectangular Map Projection:
        
        This projection requires 2 standard parallels at equal distances
        north and south of the equator.  You may only select the northern
        standard parallel.  The other parallel is automatically placed in
        the southern hemisphere at an equal distance from the equator.  
        
        The program places default values for the standard parallels at 1/2
        the distance between the northern- and southernmost latitudes of the
        grid if the northern- and southernmost latitudes lie in the same
        hemisphere.  If the northern- and southernmost latitudes of the grid
        lie in opposite hemispheres, then the standard parallels are placed
        at 1/2 the distance between the equator and whichever of the
        northern- or southernmost latitudes of the grid lies closer to a
        pole.
        
        When this screen appears, the cursor will be in the first position
        of the degrees column of the northernmost standard parallel.  If the
        default values are acceptable, TAB to the < ok > button and press
        Enter to continue.
        
        To change the values, enter a new value in the field being edited
        and press Enter.  The cursor will skip to the next field.  Enter a
        new value if desired and press Enter.  Continue until you have
        edited the last field.  When done, TAB to the < ok > button and
        press Enter.
        
        
                                  Graticule Type
        
        This window allows you to select the type of grid that you wish
        superimposed on your map.  You have several choices,
        
        (1) the outer boundary of the grid shown as a solid line and the
            interior grid points plotted as individual points (the default);
        
        (2) the outer boundary of the grid shown as a solid line and no
            interior grid points plotted;
        
        (3) all grid points connected by lines;
        
        (4) all grid points plotted as individual points with no lines
            connecting them; and

        VMAP.DOC version 1.30                                    Page  17 





        (5) no grid (the map will be plotted without any latitude or
            longitude markings).
        
        
        To get a quick view of the appearance of the different grid choices,
        select a grid type, then enter a null string (i.e. no file
        specification) for the map input filename, and finally plot the map. 
        In this case, the program will plot the graticule, but no map, on
        the screen.
        
        In VERSAMAP, the azimuthal map projections (Gnomonic, Stereographic,
        Orthographic, Vertical Perspective, Azimuthal equidistant, Azimuthal
        equal-area) are truncated to fit a circular shape, and points that
        lie outside the bounding circle are not plotted.  Due to the complex
        shape of the grid for these projections, the outside boundary of the
        map may not be well marked when graticule type 4 (all grid points
        plotted as individual points) is selected.  To indicate the edge of
        the map for azimuthal projections with graticule type 4, VERSAMAP
        plots a bounding circle, composed of discrete points spaced 3
        degrees apart.
        
        
                                Geographic Features
        
        After selecting this item, a window appears which contains a list of
        geographic features (coastlines, islands, lakes, rivers, countries,
        U.S. States, Canadian Provinces, Australian States) in Micro World
        Data Bank II (MWDB-II) files which can be plotted by VERSAMAP.  Move
        through the vertical list with the up and down cursor keys, and
        toggle the features on or off with the space bar.  Checkmarked
        features will be plotted.  The defaults plot all features.  Move to
        Proceed and press Enter to exit the window.
        
        The map files supplied with VERSAMAP (file extension .MAP) are an
        enhanced version of MWDB-II and can be used to plot the different
        features.  Please note that the original MWDB-II files (file
        extensions .ALL, .CCI, .PNT) do not contain data for Canadian
        Provinces or Australian States.
        
        VERSAMAP has the ability to plot as many as 9 map files, one after
        the other.  Features selected by accessing the Geographic Features
        option in the Map Design menu only affect features plotted for the
        first map file (which will be the default map input file, VMAP4.MAP,
        until you enter a new filename in the Map Input Filenames option of
        the Input/Output menu).  When you enter a MWDB-II filename in the
        Map Input Filenames option, VERSAMAP automatically prompts you for
        the geographic features that you wish to plot for that particular
        file.
        
        In addition to MWDB-II, VERSAMAP allows geographic features to be
        plotted from 2 other digital map databases: (1) World Data Bank II
        (WDB-II), a digital map database covering the entire world, which
        contains 36 different geographic categories; and (2) U.S. Geological
        Survey Digital Line Graph (USGS DLG) data, a database covering the

        VMAP.DOC version 1.30                                    Page  18 





        United States, containing 72 different geographic features.  These
        are the most detailed map databases that can be plotted with
        VERSAMAP; they are described in Section 9.  Geographic features for
        WDB-II and USGS DLG map files are selected when you enter their
        filenames in the Map Input Filenames option of the Input/Output
        menu.
        
        
                                  Add Text to Map
        
        You may chose the size, color, orientation, and content of text to
        be entered on the map.  When you select this option, a window
        appears containing 6 boxes labeled Text #, Size, Color, Angle, PIC
        Font, and Text.  The use of each box is described below.
        
        
        Text #:
        
        VERSAMAP allows you to store 100 text strings (and their associated
        size, color, angle, PIC font, and position) in memory to be recalled
        later.  The Text # box allows you to select the number of the text
        string to be entered.
        
        
        Size:
        
        This box allows you to select the point size of the text that will
        be written on the map.  The fixed-space Courier font has 3 possible
        sizes: 8, 10, 12 point.  The proportionally spaced Helvetica font
        has 6 sizes: 8, 10, 12, 14, 18, and 24 point.  The height of the
        font in inches is equal to the point size divided by 72.  A 24 point
        font has letters 1/3 inch high.
        
        
        Color:
        
        You may print text in 1 of 6 colors; white, green, cyan, red,
        magenta, or yellow.
        
        
        Angle:
        
        You may print text in 1 of 4 orientations.  Selecting 0  prints the
        text horizontally from left to right; selecting 90  prints the text
        vertically with the first letter at the bottom; selecting 180 
        prints the text horizontally, upside down, from right to left;
        selecting 270  prints the text vertically with the first letter at
        the top.
        
        
        PIC Font:
        
        The PIC Font number has no effect on maps which are not exported as
        PIC files.

        VMAP.DOC version 1.30                                    Page  19 





        The text that you enter on the map will be incorporated in any Lotus
        PIC graphics file that you export.  Text in PIC files can be printed
        in 1 or 2 fonts.  These Lotus fonts are not the same as the Courier
        and Helvetica fonts supplied with VERSAMAP.
        
        The PIC Font box allows you to select the font number, 1 or 2, with
        which you want the text string to be printed when you print your PIC
        file.  For instance, the PrintGraph utility from Lotus 1-2-3 version
        2.2 allows you to chose 2 fonts from a list of 11 possible fonts
        (block1, block2, bold, forum, italic1, italic2, Lotus, Roman1,
        Roman2, script1, script2).
        
        If you plan to export maps as PIC files, I recommend that you
        prepare a test map annotated with both the Courier and Helvetica
        fonts in all possible point sizes.  Export this test map from
        VERSAMAP as a PIC file, import the file into your graphics program,
        and print the PIC file from within your graphics program.  This will
        give you an idea of the appearance of each font in its various
        sizes.
        
        
        Text:
        
        Type the text that you want printed on the map in the Text box, and
        press Enter to store the string.  You must press Enter to save the
        text string!
        
        For maps displayed on the screen or printed with the Print Map, Save
        as PCX, or Save as CGM options, a degree sign,  , can be printed by
        holding down the Alt key and typing the number 248 on the numeric
        keypad.
        
        To incorporate a degree sign,  , into a CGM file that is to be
        imported into an application running under Microsoft Windows, hold
        down the Alt key and press 176 on the numeric keypad.  This will
        show up as a stippled block,  , and an underline character, _, in
        VERSAMAP, but will print a degree sign when the CGM file is printed
        from within Windows.
        
        To incorporate a degree sign,  , in a map exported as a PIC file 
        hold down the Alt key and press 176 on the numeric keypad.  This
        will show up as a stippled block,  , and an underline character, _,
        in VERSAMAP, but will print a degree sign when the PIC file is
        printed.
        
        Text strings can have a maximum length of 56 characters.  With 12
        point or larger text, you may not be able to fit 56 characters
        across the map.
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  20 





        Positioning text on the map:
        
        After selecting the text parameters, tab to the < ok > button, and
        press Enter.  The window will disappear, and the text string
        previously entered in the Text box will be printed in the upper left
        corner of the map.  The mouse or the cursor keys are used to place
        the text string in the desired position on the map.  The horizontal
        and vertical pixel position of the cursor is continuously updated in
        the upper right corner of the screen.
        
        The menu bar is erased when you press the < ok > button.  It is
        replaced by a reminder that pressing Esc will restore the menus.  To
        access the menus again you must press Esc or click the left mouse
        button on the top line of the screen.  This will terminate text
        addition, and reactivate the menus.
        
        If you have a mouse, move the mouse cursor to the position at which
        you want the text to appear, then press the left mouse button.  The
        mouse cursor represents the lower, left corner of the text string. 
        The text string will appear in the new position.  Pressing the left
        mouse button toggles the text string on and off.  The program will
        beep if the position you have chosen is too near the edge of the map
        to print the full text string.
        
        You can use the up, down, right, and left cursor keys to position
        the text string if you do not have a mouse.  The cursor position is
        represented by a plus sign, +.  The plus sign is not visible until
        you press one of the cursor keys.  The distance the cursor moves is
        controlled by pressing the numbers 3, 2, or 1.  Pressing the number
        3, causes the cursor to move 50 pixels each time a cursor key is
        pressed; pressing the number 2, causes the cursor to move 10 pixels
        each time a cursor key is pressed; and pressing the number 1, causes
        the cursor to move 1 pixel each time a cursor key is pressed.  Once
        the cursor is in the correct position, press Enter.  The center of
        the + represents the lower, left corner of the text string. 
        Pressing Enter, toggles the text string on and off.  The program
        will beep if the position you have chosen is too near the edge of
        the map to print the full text string.
        
        Once you have placed the text in the correct location, press Esc (or
        click the left mouse button on the top line of the screen) to
        terminate text addition, and reactivate the menus.
        
        To enter a second text string on the map, press Esc to activate the
        menus and select the Add Text to Map option in the Map Design menu. 
        Place the highlight bar over the number 2 in the Text # box, and
        press Enter.  Then proceed to modify the text parameters as
        necessary.  The second text string will print in the upper left
        corner of the screen when the < OK > button is pressed; this string
        will overprint any text already present in the upper left corner. 
        However, the original text will be restored when you move the second
        text string to a new location on the screen.
        


        VMAP.DOC version 1.30                                    Page  21 





        Text that you enter on the map will be incorporated into maps that
        you print or save using the Print Map, Save as PCX, Save as PIC, and
        Save as CGM options in the Input/Output menu.  Text entered on maps
        is not incorporated into maps saved with the Save as ASCII option,
        since most technical and business graphing programs have the ability
        to annotate imported graphs.
        
        
                                    Select Font
        
        This option allows you to select the font used to print text on the
        screen.  You may select a fixed-space Courier font or a
        proportionally spaced Helvetica font.
        
        The fonts used by VERSAMAP are stored in 6 files with the file
        extension .FON:
        
                     COUR_CGA.FON, COUR_EGA.FON, COUR_VGA.FON
                     HELV_CGA.FON, HELV_EGA.FON, HELV_VGA.FON
        
        The program will select the correct font for your video adapter. 
        The fonts labeled _CGA are for CGA and MCGA adapters, those labeled
        _EGA for EGA and Hercules adapters, and those labeled _VGA for VGA
        adapters.  After making backup copies, you may delete the
        unnecessary font files to save disk space.  The Helvetica fonts are
        only included in the registered version of VERSAMAP.
        
        The font files must be in the same directory as the VERSAMAP
        program, VMAP.EXE.
        
        After selecting this option a window titled SELECT FONT appears. 
        The default font is fixed-space Courier.  If this is acceptable,
        press Enter.  To select the Helvetica font, highlight Helvetica with
        the down arrow key, and press Enter.
        
        You may add text in both fonts to the same map.  However, using both
        fonts on the same map is not recommended.  The length of a text
        string depends on the font and point size; text which fits on a map
        in one font and point size may not fit on the map in the second
        font.  Use only one font per map if you plan to export a map as a
        .PIC or .CGM file.  The .PIC and .CGM files exported by VERSAMAP
        allow only 1 font to be specified, that font will be the last font
        selected before exporting the file.
        
        
                               Display Previous Text
        
        This option allows you to redisplay, on the screen, all previously
        defined text strings.  Once text is redisplayed it can only be
        erased by redrawing the map.
        
        
        


        VMAP.DOC version 1.30                                    Page  22 





                                  Save Map Design
        
        This option allows you to save the map parameters you have selected
        in a configuration file for recall at a later time.  After selecting
        this item, a window titled SELECT FILENAME FOR CONFIGURATION FILE
        appears.  Type in the filename and press Enter.  Once you have
        entered the filename and pressed Enter, a second window titled ARE
        YOU FINISHED EDITING THIS SCREEN will appear.  Your configuration
        file will be written to disk immediately after you press the < YES
        > button.
        
        
                                 Recall Map Design
        
        This option allows you to recall a previously defined configuration
        file.  After selecting this item, a window titled RECALL MAP DESIGN
        appears.  This window contains a vertical box, listing all
        configuration files (file extension .CNF) in the current directory. 
        Move to the desired file and press Enter to load the file into
        VERSAMAP.  The configuration file will be loaded immediately after
        you press Enter.
        
        VERSAMAP does not automatically display a new map when a
        configuration file is loaded into the program.  To display the new
        map, you must manually plot the map by selecting the checkmarked
        option in the Run menu.  If the new map includes text, you must also
        redisplay the text using the Display Previous Text option in the Map
        Design menu, once you have redrawn the map.
        
        
        Input/Output menu
        
        -----------------------------------------------------------------
          Projection      Map Design      Input/Output      Run
        -----------------------------------------------------------------
                                        | Map Input Filenames   |
                                        | Report Map Parameters |
                                        | View Disk Directory   |
                                        |-----------------------|
                                        | Print Map             |
                                        | Select Printer        |
                                        |-----------------------|
                                        | Save as PCX           |
                                        | Save as PIC           |
                                        | Save as CGM           |
                                        | Save as ASCII         |
                                        +-----------------------+
        
        
        This menu allows you to enter filenames for input and output files,
        to display a report describing the currently selected map, to view
        the contents of any disk directory, to print the map on dot matrix
        and laser printers, and to save maps as disk files.


        VMAP.DOC version 1.30                                    Page  23 





        You may export maps produced by VERSAMAP: (1) by copying the screen
        directly to your printer; (2) as PCX graphics files; (3) as Lotus
        PIC graphics files; as CGM (computer graphics metafile) graphics
        files; and (5) as ASCII files.
        
        Maps exported by methods (1) and (2) are limited by the resolution
        of your monitor.  Even with a VGA monitor, the screen resolution
        (640 pixels horizontally, 480 pixels vertically) is fairly coarse. 
        Lotus PIC and CGM files are independent of monitor type and have
        much greater resolution (3200 dots horizontally, 2311 dots
        vertically) than PCX files.  If you have a choice, export your maps
        as PIC or CGM files.  This is particularly true if you have a CGA or
        EGA monitor.  Theoretically, the most detailed maps are obtained by
        saving them as ASCII files.  The resolution of ASCII files produced
        by VERSAMAP is limited only by the resolution of the input map
        boundary files.  As a practical matter, however, the detail shown on
        any exported map will be limited by the resolution of the printer on
        which it is finally printed.
        
        
                                Map Input Filenames
        
        After selecting this item, a window appears in which the names of
        the input boundary files are entered.  Up to 9 map boundary input
        filenames may be entered.  The map boundary input files are the
        files which contain the latitude, longitude coordinates that you
        wish plotted on your map.
        
        The default file name for the first input file is VMAP4.MAP in the
        current directory.  VMAP4.MAP is the world map included on the
        VERSAMAP disk.  The default file names of the remaining 8 map input
        files are null strings (i.e. no file name).  The program displays
        the current path, but no filename, for input files which have not
        been defined.
        
        When the window is first displayed, the cursor is located at the end
        of the first input file name.  Type in the correct path name and
        press Enter to accept the path name.
        
        
        Symbol type, color, and size:
        
        Once you enter a filename, a second window will appear which allows
        you to specify the symbol used to plot the points in that file.
        
        The symbol type determines whether your data is plotted as lines, as
        individual points, or as crosses, squares, diamonds, or triangles. 
        If you select the symbol type Line, all points on a particular
        polyline will be connected by straight lines.  This is the default
        symbol type for all files.
        
        The other symbol types (Point, Cross, Square, Diamond, and Triangle)
        allow you to superimpose individual latitude/longitude points on a
        map created from a digital map database.

        VMAP.DOC version 1.30                                    Page  24 





        If you have a color monitor, VERSAMAP allows you to chose the color
        of the symbols used to plot each file.
        
        In addition, you may chose the size of the crosses, squares,
        diamonds, and triangles used to plot your data.  The size that you
        enter is the radius of the symbol in pixels.  The maximum size is 99
        pixels.  Size has no effect on the Line and Point symbol types,
        these two types are always 1 pixel wide.
        
        Once you have entered the symbol type, color, and size for the first
        input file, tab to the < ok > button and press Enter.
        
        
        Geographic Features
        
        If you select an input file from Micro World Data Bank II (file
        extension .ALL, .CCI, or .MAP), World Data Bank II (file extension
        .PKV or .PKD), or USGS Digital Line Graph Data (file extension .GRF
        or .GRV) the program will prompt you to enter the geographic
        features that you wish plotted for this file.  You may select
        different geographic features for each of the files that you input.
        
        Once you select Proceed on the Geographic Features list box, the
        window disappears, and you are prompted for the name of the second
        map input file (if any).  If you wish to input a second map boundary
        file, type its name and press Enter.  Continue until you have
        entered all of your map input files.
        
        Once you have entered the last map input file that you wish plotted,
        TAB to the next filename.  Erase the current path and then press
        Enter again.  Entering a null filename stops further input of map
        boundary input files.
        
        The program does not require any input map boundary files.  If you
        do not wish to input data, erase the default path name of the first
        input file and press Enter.  In this case, only the map graticule
        (if any) will be plotted on the screen.
        
        VERSAMAP will accept map boundary input files from the following
        public domain, shareware, and commercial digital map databases:
        World Data Bank I, World Data Bank II, Micro World Data Bank II, The
        World Digitized, Cartog, and U.S. Geological Survey Digital Line
        Graph Data.  In addition, VERSAMAP will accept input in an ASCII
        text format.  Section 9 contains a detailed discussion of the
        various map databases that VERSAMAP recognizes.
        
        VERSAMAP recognizes the various databases by their file name
        extensions.  The file names that you enter on this screen must have
        one of the extensions given in Section 9.  However, the names that
        you enter can have different extensions.  For instance, your first
        file could be from Micro World Data Bank II with the extension .ALL,
        your second file could be from the U.S.Geological Survey Digital
        Line Graph database with the extension .GRF, and your third file
        could be from World Data Bank II, with the extension, .PKV.

        VMAP.DOC version 1.30                                    Page  25 





                               Report Map Parameters
        
        The Versamap parameter report lists various information about the
        map: the projection type; the grid type; the latitude/longitude
        limits of the map; the maximum/minimum values of the transformed x,y
        map coordinates; scale and area errors at selected points on the
        map; and the names of the map input files.
        
        The X-axis Length and Y-axis Length, listed under Relative Length of
        Axes, are used to scale maps exported as ASCII file(s) to technical
        and business graphics programs.  The use of these two parameters is
        described in Section 10.
        
        Use the up, down, Home, and End keys to scroll through the report. 
        Press F1 to print the report, Esc to return to menu bar.
        
        
                                View Disk Directory
        
        This window allows you to view the contents of any disk and
        directory.  Disk drives are indicated by the letters <drive> to the
        right of the drive letter.  To select a disk drive, move the
        highlight bar over the drive letter and press Enter.  Directories
        are indicated by the letters <dir> to the right of the directory
        name.  To select a directory, move the highlight bar over the
        directory and press Enter.  The path which has been selected is
        displayed immediately above the vertical list box.
        
        The files in the directory are listed after the last directory
        listing.
        
        
                                     Print Map
        
        Maps displayed on the screen may be printed on dot matrix or laser
        printers.  When you select this item, a window titled MAP PLACEMENT
        ON PAGE IN INCHES appears, which allows you to define the dimensions
        and page placement of the printed map.
        
        This option copies the entire screen, except the menu bar, to the
        printer.  The default settings place the map in the center of the
        page, and set the width (the entire screen width) at 6 inches.  The
        width and height of the printed map are dependent.  Adjusting the
        width automatically fixes the height.  Any text displayed on the map
        will be printed.  The grid spacing, and other information about the
        printed map that you need to annotate it, can be obtained from the
        Report Map Parameters option in the Input/Output menu.
        
        Use the Tab key to move between items.  To print the map, tab to the
        < OK > button and press Enter.  The map will begin printing
        immediately after you press the < OK > button.  The Print Map option
        is slow!  On an Epson LQ-800, 24-pin, dot matrix printer, the
        default map takes 1.2 minutes to print on a 33 MHz 486 computer with
        VGA, 3.3 minutes to print on a 386SX computer with VGA and a math

        VMAP.DOC version 1.30                                    Page  26 





        coprocessor, and 36 minutes to print on a 5 MHz IBM PC with EGA and
        no math coprocessor.
        
        Press Esc to exit a map that is currently being printed.
        
        
                                  Select Printer
        
        Before you print a map, you must select the type of printer which
        will print the map.  When you select this item, a window titled
        SELECT PRINTER TYPE AND PORT appears.  You may select one of three
        printer types: Epson 9- or 24-pin dot matrix, or Hewlett-Packard
        LaserJet II.  If your printer is not compatible with one of these
        printers, select None.
        
        You may also select the printer port.  Lpt1 is the default.
        
        
                                    Save as PCX
        
        Before saving the map as a bit-mapped .PCX paint file, you must
        specify the filename and path of the file.  After selecting this
        item, a window titled SELECT .PCX FILENAME appears.  Type in the
        correct filename and press Enter.  Since the .PCX file will be
        written immediately after you press Enter, the map you wish to save
        must be displayed on the screen.  The menu bar is not saved as part
        of the file.
        
        Maps are exported exactly as they are displayed on the VERSAMAP
        screen.  When you print these maps from within a paint program, you
        may want to print them as black lines on a white background.  You
        can do this by using the color eraser (or color invert) tool of your
        paint program to change the line, symbol, and text colors to black,
        and the background to white.
        
        Any text displayed on the screen (except the menu bar) will be
        included in the .PCX file.  If you do not want text to be included
        in the .PCX file, redraw the map.
        
        The grid spacing, latitude/longitude limits, and other information
        that you may need to annotate the map, can be obtained from the
        Report Map Parameters option in the Input/Output menu.
        
        PCX files produced by VERSAMAP have been successfully imported into
        Microsoft Paintbrush and PC Paintbrush IV Plus.
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  27 





                                    Save as PIC
                                    Save as CGM
        
        Before saving a map as a vector based .PIC or .CGM graphics file,
        you must specify the filename and path of the file.  After selecting
        one of these items, a window titled SELECT .PIC FILENAME or SELECT
        .CGM FILENAME appears.  Type in the correct filename and press
        Enter.  Since the file is written as the map is being plotted on the
        screen, you must select the .PIC or .CGM filename before you plot
        the map.  Once you have specified the filename, redisplay the map
        using the Size 100% or Size 70% options in the Run menu.  The file
        will be written to disk as the map is drawn.  The menu bar is not
        saved as part of the file.
        
        Any text strings which have been defined with the Add Text to Map
        option in the Map Design menu will be included in the .PIC or .CGM
        file, even if the text strings are not displayed on the screen.  If
        you do not want text to be included in the exported file, erase any
        previously defined text strings.
        
        To include text in a .PIC or .CGM file, perform the following steps:
        
          (1) draw the map on the screen,
          (2) annotate the map using the Add Text to Map option,
          (3) select a name for the .PIC or .CGM file using the Save as
              PIC or Save as CGM options, and
          (4) redraw the map using the same size option (Size 100% or
              Size 70%) that was used in step 1.
        
        The file will be written to disk as the map is drawn on the screen
        in step 4.  Text added to the map in step 2 is not redisplayed on
        the screen when the map is redrawn in step 4; however, it is
        included in the .PIC or .CGM file.  Select the Display Previous Text
        option in the Map Design menu to redisplay text previously added to
        a map.
        
        The grid spacing, latitude/longitude limits, and other information
        that you may need to annotate the map, can be obtained from the
        Report Map Parameters option in the Input/Output menu.
        
        PIC files produced by VERSAMAP have been successfully imported into
        the PrintGraph utility of Lotus 1-2-3, versions 2.01 and 2.2;
        WordPerfect for DOS, versions 5.0 and 5.1; DrawPerfect, version 1.1;
        MS Word for Windows 2.0; and Freelance Plus, versions 2.0 and 3.01. 
        
        CGM files produced by VERSAMAP have been successfully imported into
        WordPerfect for DOS, versions 5.0 and 5.1; DrawPerfect, version 1.1;
        MS Word for Windows 2.0; Freelance Plus, version 3.01; Harvard
        Graphics for DOS versions 2.3 and 3.0; and CorelDRAW version 2.0.  
        
        Many PIC and CGM files produced by VERSAMAP are too large to import
        into Freelance, Harvard Graphics 2.3, and CorelDRAW.
        


        VMAP.DOC version 1.30                                    Page  28 





                                   Save as ASCII
        
        This option allows the transformed x,y map coordinates to be
        exported to technical or business graphing programs which can plot
        large data sets (see section 10, Use of VERSAMAP with Graphing
        Programs).  After selecting this option, a window titled SELECT
        ASCII MAP OR GRID OUTPUT appears.  This window allows you to chose
        one of two items: (1) Output map data in ASCII format, or (2) Output
        grid data in ASCII format.
        
        To output your map as a series of ASCII files, perform the following
        steps:
        
          (1) draw the map on the screen,
          (2) name each of the ASCII output files by selecting the Output
              map data in ASCII format item from the SELECT ASCII MAP OR
              GRID OUTPUT window,
          (3) name each of the ASCII grid files by selecting the Output
              grid data in ASCII format item from the SELECT ASCII MAP OR
              GRID OUTPUT window,
          (4) redraw the map using the same size option (Size 100% or
              Size 70%) that was used in step 1.
        
        The file(s) will be written to disk as the map is drawn on the
        screen in step 4.  The Save as ASCII option does not export text
        defined with the Add Text to Map option.  Text displayed on the
        screen is ignored when the x,y map data is written to disk.
        
        
        Output map data in ASCII format:
        
        After selecting this item, a window titled ENTER FILENAMES FOR MAP
        OUTPUT FILES appears in which the names of any ASCII output files
        that you wish to write to disk are entered.
        
        VERSAMAP will transform the latitude, longitude coordinates from the
        map boundary input files into planar x,y map coordinates and output
        them to disk in ASCII format.  These output files can be imported
        into graphing programs for the production of publication quality
        maps.  The use of the ASCII output map files in graphing programs is
        discussed in Section 10.
        
        The program will output up to 9 files, one for each of the map
        boundary input files.  You may choose any path names for these
        files.
        
        Output files are not required by VERSAMAP.  If you do not want to
        print a particular output file to disk, erase any characters in the
        file name, and press Enter. 
        
        To enter an output file name, TAB to the filename you wish to edit,
        type in the path name and press Enter.  The cursor will then move to
        the next output file name.


        VMAP.DOC version 1.30                                    Page  29 





        Each output file corresponds to the input file of the same number. 
        For instance, if you have 5 input files, the fifth output file will
        contain the transformed latitude/longitude coordinates from the
        fifth input file.
        
        If you decide to print a particular output file, you do not need to
        print the output files corresponding to the other input files.  For
        instance, if you have 3 input files, you can print the output files
        corresponding to the first and third input files, but not the second
        input file.  Input a null string for any output file that you do not
        want to print to disk (i.e. erase any characters in the file
        specification and press Enter).
        
        Data records in the ASCII map output files have the following
        format.
        
           X coordinate | space (ASCII 32) | Y coordinate |
           carriage return (ASCII 13) | line feed (ASCII 10)
        
        Data in most digital map databases is organized as polylines; each
        polyline corresponds to a series of points which can be connected by
        straight lines.  In the map output files, the beginning of each new
        polyline is indicated by a dummy point in which the x and y
        coordinates are both equal to 5.000000 (5 times the maximum x
        coordinate of 1.000000).  In a map output file, any point with an x
        coordinate of 5.000000 is a dummy point which indicates the
        beginning of a new polyline, and which will plot outside the
        boundaries of the map.
        
        
        Output grid data in ASCII format:
        
        After selecting this item, a window titled ENTER FILENAMES FOR
        GRATICULE OUTPUT FILES appears in which the names of any ASCII
        output graticule files that you wish to write to disk are entered.
        
        VERSAMAP will transform the latitude/longitude coordinates of the
        grid type that you have selected into planar x,y map coordinates and
        output them to disk in ASCII format.  These output grid files can be
        imported into graphing programs for the production of publication
        quality maps.  The use of ASCII output grid files in graphing
        programs is discussed in Section 10.
        
        The program will output 1 or 2 grid files, depending on the
        graticule type that you chose.  You may choose any path names for
        these files.
        
        Output grid files are not required by VERSAMAP.  If you do not want
        to print a particular grid file to disk, erase any characters in the
        file name, and press Enter. 
        
        To enter a grid file name, TAB to the file to be edited, type in the
        path name and press Enter.  The cursor will then move to the next
        grid file name (if there is one), or to the next screen.

        VMAP.DOC version 1.30                                    Page  30 





        In most cases, a single grid file will be written to disk.  The only
        exception, the OUTSIDE BOUNDARY PLUS INTERIOR POINTS grid type,
        writes two files to disk: the first file contains the interior
        points, the second the outside boundary.
        
        Grid files have the same record format as the map boundary files
        listed in the previous section.
        
        
        Run menu
        
        -----------------------------------------------------------------
          Projection      Map Design      Input/Output      Run
        -----------------------------------------------------------------
                                                          | Size 100% |
                                                          | Size  70% |
                                                          +-----------+
        
        
        This menu contains 2 items.  Selecting Size 100% will plot the
        largest possible map on the screen.  Selecting Size 70% will plot a
        smaller map with margins around all sides.  The Size 70% option
        allows you to add text in the margins of the map without writing
        over the map itself.
        
        Your map will begin plotting immediately after either item is
        selected.  The program will cease plotting and return to the menu
        bar if Esc is pressed while the map is being drawn.
        
        
        9. Sources of Digital Map Data for use with VERSAMAP
        
        VERSAMAP will generate maps from the following databases, available
        commercially, as shareware, or in the public domain.  In addition,
        the program will accept input in a simple ASCII format.  VERSAMAP
        recognizes the various databases by their file extensions.  The most
        complete databases are (1) the Central Intelligence Agency's World
        Data Bank II (WDB-II), a detailed world map; (2) Micro World Data
        Bank II (MWDB-II), a smaller database derived from World Data Bank
        II; and (3) the U.S. Geological Survey's Digital Line Graph Data
        (USGS DLG), which contains detailed maps of all 50 states.
        
        Which of the above digital map databases you use depends on the size
        of the area you wish to map.  For world maps, MWDB-II is the best
        choice.  Although WDB-II can be used to draw world maps, it contains
        so many points that it plots very slowly when used to plot such a
        large area.  WDB-II is best used for maps of continental size or
        smaller.  The USGS DLG data is the best digital map database for
        plotting maps at the state or county level in the United States.
        
        
        
        


        VMAP.DOC version 1.30                                    Page  31 





                            World Data Bank II (WDB-II)
                             File extensions PKV, PKD
        
        A database, developed by the Central Intelligence Agency, covering
        the entire world.  Latitude and longitude are given to the nearest
        second.  The original database is divided into 13 files containing
        data for Asia, Europe-Africa, North America, and South
        America-Antarctica.  The complete set of 13 files contains 6
        million, 20 character ASCII records, which require 120 million bytes
        of disk space.  WDB-II was last updated in January 1987.
        
        WDB-II was digitized using all available source information.  Maps
        used ranged in scale from 1:750,000 to 1:4,000,000.  Nominal scale
        was 1:3,000,000.  At 1:3,000,000 scale, 1 inch equals 47 statute
        miles (1 cm equals 30 km).  Successive points in the  database are
        never more than 127 seconds (approximately 2 miles or 3 km) of
        latitude or longitude apart.
        
        To make WDB-II easier to use on microcomputers, Micro Doc (3108
        Jackson Street, Bellevue, NE  68005) has reformatted WDB-II in a
        binary format (.PKD file extension).  The binary format reduces
        storage requirements by a factor of 10 (to 12 million bytes), and
        vastly reduces the time required to draw maps.  VERSAMAP can plot
        maps using the binary form of WDB-II (.PKD file extension), and from
        an enhanced version of Micro Doc's .PKD files (.PKV file extension),
        developed specifically for VERSAMAP.
        
        VERSAMAP can plot the following geographic features from World Data
        Bank II in the .PKV or .PKD file formats.
        
        
                     Geographic Features in World Data Bank II
        
                Rank       Feature Name
              PKV   PKD
        
              Major Category: International Boundaries or Limits of
                              Sovereignty
        
               1     1     International Boundaries
               2     2     Indefinite or in dispute
               3     3     Separation line, land
               4     4     Separation line, sea
               5     5     Separation line, islands
               6     6     Continental Shelf, Persian Gulf
               7     7     Demilitarized zone, Israel
               8     8     No defined boundary
          
              Major Category: Coastlines, Islands, and Lakes
        
               9     1     Coastlines, Islands, Lakes
              10     2     Islands and lakes, large
              11     3     Islands and lakes, medium
              12     4     Islands and lakes, small

        VMAP.DOC version 1.30                                    Page  32 





              14     6     Intermittent lakes, large
              15     7     Intermittent lakes, small
              16     8     Reefs
              17     9     Salt pans, large
              18    10     Salt pans, small
              21    13     Ice shelves, large
              22    14     Ice shelves, small
              23    15     Glaciers
        
              Major Category: Rivers
        
              24     1     Rivers
              25     2     Rivers, large
              26     3     Rivers, medium
              27     4     Rivers, small
              28     5     Rivers, double lined
              29     6     Intermittent rivers, large
              30     7     Intermittent rivers, medium
              31     8     Intermittent rivers, small
              33    10     Canals
              34    11     Canals, small
              36    13     Canals, irrigation
        
              Major Category: Internal Political Boundaries
        
              37     1     U.S. States
              38     1     Canadian Provinces
              39     3     Boundaries in Great Lakes
              40           Australian States  (not available in)
              41           Scotland and Wales (     .PKD format)
        
        
        The WDB-II .PKV files, developed specifically for VERSAMAP, differ
        from Micro Doc's .PKD files in 2 respects.
        
        First, .PKV files contain political boundaries for the new countries
        which have formed from the Soviet Union, for Australian States, and
        for Wales and Scotland.  These borders are not included in Micro
        Doc's .PKD files, nor in the original ASCII version of WDB-II.
        
        Second, inspection of the above table shows that the ranks, of
        individual geographic features in Micro Doc's .PKD files, are not
        unique to a single major category (International Boundaries,
        Coastlines, Rivers, or Internal Boundaries).  The duplication of
        ranks between major geographic categories means that .PKD files
        cannot be concatenated into a single large file without losing
        information about which category a particular rank corresponds to. 
        To alleviate this problem, ranks in the specially modified .PKV
        files have been redefined so that they are unique for each
        geographical feature (see above table).  This modification allows
        .PKV files to be concatenated into a single large file for each
        continent.
        


        VMAP.DOC version 1.30                                    Page  33 





        For use with VERSAMAP, the modified .PKV files were concatenated
        into 5 files, each file containing all geographic features for a
        particular region.  The 5 regions are (1) Africa, (2) Eurasia
        (Europe and Asia), (3) Oceania (Indonesia, Australia, New Zealand,
        and the Pacific Islands), (4) Latin America (including Antarctica),
        and (5) North America (Canada and the United States).  The .PKV
        files for individual regions or for the entire world are available
        on high density, floppy disk from the author.  See the VERSAMAP
        Order Form on page 49 for details.
        
        As an example of the detail available in WDB-II, the file,
        VMTAIWAN.PKV, which contains all data from WDB-II for the island of
        Taiwan, is included on the VERSAMAP disk.  To plot the map of
        Taiwan,
        
        1.  Set the map boundaries at 26 N to 21 N latitude, and 119 E to
            123 E longitude using the Map Boundaries option in the Map
            Design menu (use a grid spacing of 1 degree, i.e. 001 00 00).
        
        2.  Import the file VMTAIWAN.PKV into VERSAMAP using the Map Input
            Filenames option in the Input/Output menu.  Toggle all
            geographic features on in the SELECT WORLD DATA BANK II FEATURES
            list box.
        
        3.  Plot the map using the Size 100% option in the Run menu.
        
        
        When VERSAMAP plots maps using Micro Doc's packed .PKD files, it
        determines the major category of data being plotted from the third
        letter of the filename of the input file.  In Micro Doc's file
        naming scheme, this letter is unique for each of the 4 major
        geographic categories.  The third letter must be B for .PKD files
        containing International Boundaries or Limits of Sovereignty; it
        must be C for Coastlines, Islands, and Lakes; it must be R for
        Rivers; and it must be P for Internal Political Boundaries.  This
        restriction on filenames is not necessary when you use .PKV files,
        since geographic ranks in .PKV files are unique.
        
        
                        Micro World Data Bank II (MWDB-II)
                           File extensions PNT, ALL, CCI
        
        A database, covering the entire world, containing 178,000 latitude,
        longitude points.  Latitude and longitude are rounded to the nearest
        minute and stored as six byte binary records.  This database was
        derived from WDB-II, and can be ordered from its developer (Micro
        Doc, 3108 Jackson Street, Bellevue, NE  68005).  An enhanced version
        of MWDB-II, containing boundaries for the new countries which have
        formed from the Soviet Union, for Canadian Provinces, and for
        Australian States is available from the author.  See the next
        section, VERSAMAP Micro World Database, for details.
        
        VERSAMAP can plot the following geographic features from MWDB-II:
        coastlines, islands, lakes, rivers, countries, and U.S States.

        VMAP.DOC version 1.30                                    Page  34 





        MWDB-II contains several types of digital map files.  The first type
        (file extension .PNT) contains points from a single geographic
        feature at 5 levels of detail.  The second file type (file extension
        .ALL) contains points for all geographic features at a single level
        of detail.  A third MWDB-II file, MWDB5.CCI, contains only country,
        coastline, and island points at the lowest level of detail.  The
        .ALL and .CCI files are made from the .PNT files using the utility
        program, SELECT.EXE, supplied with MWDB-II.  SELECT.EXE allows the
        user to build customized map files containing any number of
        geographic features and levels of detail.  To save disk space,
        MWDB1.ALL and MWDB2.ALL, the 2 largest files, are not included in
        the MWDB-II package.  They are constructed by the user from the .PNT
        files and SELECT.EXE upon receiving MWDB-II.
        
        
                     Summary of Micro World Data Bank II Files
        
           Filename    Size(bytes)   # Points    Comment
        
           MWDB1.ALL    1,068,408     178,068    The entire database
           MWDB2.ALL      652,500     108,750
           MWDB3.ALL      157,176      26,196
           MWDB4.ALL       82,560      13,760
           MWDB5.ALL       27,180       4,530
           MWDB5.CCI       19,110       3,185
        
           COAST.PNT      449,802      74,967    Coastlines
          ISLAND.PNT      211,026      35,171    Islands
            LAKE.PNT       90,708      15,118    Lakes
           RIVER.PNT      169,164      28,194    Rivers
         COUNTRY.PNT      134,154      22,359    Country borders
           STATE.PNT       13,554       2,259    U.S. State borders
        
        
        The mapping programs, Expert Maps and Finger Maps, contain a digital
        map named WORLD.MAP.  This map is a copy of the map file MWDB3.ALL
        from MWDB-II, and can be used in VERSAMAP.
        
        
                           VERSAMAP Micro World Database
                                File extension MAP
        
        A database containing 195,000 latitude, longitude points.  Latitude
        and longitude are rounded to the nearest minute and stored as six
        byte binary records.  This database is an enhanced version of
        MWDB-II described in the previous section.  Both map databases have
        the same file structure.  Enhancements incorporated in the VERSAMAP
        Micro World Database include (1) borders for the new countries which
        have formed from the Soviet Union; (2) borders for Eritrea,
        Slovakia, and the Yugoslav Republics, (3) borders for Canadian
        Provinces; (4) borders for Australian States; (5) more detail for
        U.S. State boundaries; (6) increased detail for the borders of
        Israel, Oman, the United Arab Emirates, and Yemen; and (7) removal


        VMAP.DOC version 1.30                                    Page  35 





        of the borders between East and West Germany, and between the Yemen
        Arab Republic and the People's Democratic Republic of Yemen.
        
        VMAP1.MAP through VMAP5.MAP, the digital map files supplied with
        VERSAMAP Micro World Database, are enhanced versions of the
        equivalent .ALL files in MWDB-II.
        
        VERSAMAP can plot the following geographic features from VERSAMAP
        Micro World Database: coastlines, islands, lakes, rivers, countries,
        U.S States, Canadian Provinces, and Australian States.
        
        
                        VERSAMAP Micro World Database Files
        
           Filename      Size      Number     Avg distance between points
                        (bytes)    Points        nautical miles    km
        
           VMAP1.MAP   1,170,108   195,018             4            7 
           VMAP2.MAP     716,496   119,416             6           11 
           VMAP3.MAP     185,610    30,935            19           35 
           VMAP4.MAP      97,614    16,269            33           61 
           VMAP5.MAP      34,452     5,742            72          134 
        
        
        The complete set of VERSAMAP Micro World Database .MAP files is
        available on floppy disk from the author.  See the VERSAMAP Order
        Form, page 49, for details.
        
        
                      USGS Digital Line Graph Data (USGS DLG)
                             File extensions GRF, GRV
        
        A database developed by the U.S. Geological Survey containing
        detailed maps of all 50 states.  The database divides the United
        States into 21 sections.  The digital data for each section contains
        the following major categories: (1) streams and rivers, (2)
        coastlines and lakes, (3) roads, (4), railroads, (5) political
        boundaries, (6) administrative boundaries, (7) cultural features,
        and (8) hypsography.  Each major category contains numerous minor
        categories characterized by the size of the geographic feature.  The
        most recent data in the database dates from 1980.
        
        Data in the USGS DLG database were derived by digitizing 1:2,000,000
        scale maps from the National Atlas of the United States at a
        resolution of 0.001 inch.  At 1:2,000,000 scale, 1 inch equals 32
        statute miles (1 cm equals 20 km).  Successive points in the 
        database are never more than 127 seconds (approximately 2 miles or
        3 km) of latitude or longitude apart.
        
        The database is available on CD-ROM (US GeoData - 1:2,000,000-Scale
        Digital Line Graph (DLG) Data) and can be ordered from the Earth
        Science Information Center, U.S. Geological Survey, 507 National
        Center, Reston, VA  22092.  Phone number: 1-800-USA-MAPS.


        VMAP.DOC version 1.30                                    Page  36 





        VERSAMAP can plot maps using DLG data in the graphic file format
        (.GRF file extension) directly from the above CD-ROM.  These .GRF
        files consist of 20 character ASCII records, in which latitude and
        longitude are given to the nearest second.  The entire set of .GRF
        files, covering all 50 states, occupies 144 million bytes of space
        on the CD-ROM.
        
        To reduce storage requirements, and speed plotting, the ASCII .GRF
        files have been converted to the binary, packed WDB-II format
        mentioned above.  The .GRF files in packed WDB-II format have the
        file extension .GRV.  The packed .GRV files occupy 8 times less disk
        space (18 million bytes) and plot 2.5 times faster than the original
        ASCII .GRF files.  Packed .GRV files, for the 21 sections of the
        United States or for the entire country, are available on high
        density, floppy disk from the author.  See the VERSAMAP Order Form,
        page 49, for details.
        
        As an example of the detail available in the USGS DLG data, the
        file, VMOAHU.GRV, which contains all data from the US GeoData CD-ROM
        for the island of Oahu in the Hawaiian Islands, is included on the
        VERSAMAP disk.  To plot the map of Oahu,
        
        1.  Set the map boundaries at 22 N to 21 N latitude, and 159 W to
            157 W longitude using the Map Boundaries option in the Map
            Design menu (use a grid spacing of 1 degree, i.e. 001 00 00).
        
        2.  Import the file VMOAHU.GRV into VERSAMAP using the Map Input
            Filenames option in the Input/Output menu.  Toggle all
            geographic features on in the SELECT USGS DIGITAL LINE GRAPH
            FEATURES list box.
        
        3.  Plot the map using the Size 100% option in the Run menu.
        
        
        VERSAMAP can plot the following geographic features using DLG data
        in either .GRF or .GRV file formats.
        
        
                   Geographic Features Included in USGS DLG Data
        
                   #       Feature Name
        
                           Rivers and Streams
        
                   1       River, double line, shoreline
                   2       River, double line, centerline
                   3       River, perennial,        <30 km
                   4       River, perennial,       <100 km
                   5       River, perennial,       <350 km
                   6       River, perennial,      >=350 km
                   7       River, intermittent,     <30 km
                   8       River, intermittent,    <100 km
                   9       River, intermittent,    <350 km
                  10       River, intermittent,   >=350 km

        VMAP.DOC version 1.30                                    Page  37 





                  11       River in lake, perenn.   <30 km
                  12       River in lake, perenn.   <80 km
                  13       River in lake, perenn.  >=80 km
                  14       River in lake, interm.   <30 km
                  15       River in lake, interm.  >=30 km
                  16       Braided stream
                  17       Canal, navigable,        <20 km
                  18       Canal, navigable,        <80 km
                  19       Canal, navigable,       >=80 km
                  20       Canal, other,            <20 km
                  21       Canal, other,            <80 km
                  22       Canal, other,           >=80 km
                  23       Ditch
                  24       Intercoastal waterway
        
                           Water Bodies
        
                  25       U.S. coastline and Great Lakes
                  26       Lake, island, perennial  <30 km
                  27       Lake, island, perennial  <80 km
                  28       Lake, island, perennial >=80 km
                  29       Lake, intermittent       <30 km
                  30       Lake, intermittent       <80 km
                  31       Lake, intermittent      >=80 km
                  32       Marsh, swamp,            <50 km
                  33       Marsh, swamp,           >=50 km
                  34       Dry lake, alkali flat
                  35       Glacier,                 <50 km
                  36       Glacier,                >=50 km
        
                           Roads and Trails
        
                  37       Interstate highway
                  38       Interstate, proposed
                  39       Divided highway, limited access
                  40       Other hwy, limited access
                  41       Other hwy, non-limited access
                  42       Other hwy <10 km from major hwy
                  43       State secondary, all weather
                  44       Light duty, all weather
                  45       Unimproved, fair or dry weather
                  46       Highway, tunnel
                  47       Auto, ferry
        
                           Railroads
        
                  48       Railroad, main line
                  49       Railroad, branch line
                  50       Railroad, other
                  51       Railroad, tunnel
                  52       Railroad, ferry
        
        


        VMAP.DOC version 1.30                                    Page  38 





                           Political Boundaries
        
                  53       International treaty line
                  54       National boundary, land
                  55       National boundary, water
                  56       State boundary, land
                  57       State boundary, water
                  58       County, large city, land
                  59       County, large city, water
                  60       City boundary,     >1.0 million
                  61       City boundary,     >0.5 million
                  62       City boundary,            small
        
        
                           Administrative Boundaries
        
                  63       National park            <20 km
                  64       National park           >=20 km
                  65       National park closure line
                  66       Indian reservation       <20 km
                  67       Indian reservation      >=20 km
                  68       Indian reservation closure line
                  69       Military reservation    <405 ha
                  70       Military reservation   >=405 ha
                  71       Mil. reservation closure line
        
                           Cultural Features
        
                  72       Alaska pipeline
        
        
        
                                 World Data Bank I
                                File extension DAT
        
        A database, covering the entire world, developed by the Central
        Intelligence Agency.  World Data Bank I contains 79,000 points
        representing world coastlines.  Latitude and longitude are given to
        the nearest second.  Data are stored as 20 character ASCII records
        on 5, 5.25 inch, 360K disks, which can be ordered from the National
        Technical Information Service, United States Department of Commerce,
        5285 Port Royal Road, Springfield, VA  22161.
        
        
                                The World Digitized
                             File extensions MPS, MP1
        
        A shareware database containing 100,000 latitude, longitude points
        rounded to thousandths of a degree.  The database is available (in
        both binary and ASCII format) from shareware disk vendors.
        
        The World Digitized database is subdivided into directories, one
        directory for each continent.  This useful feature reduces plotting
        time since the user can select only those areas he wishes to map.

        VMAP.DOC version 1.30                                    Page  39 





        Each of the World Digitized directories contains 2 or more map
        files.  If you wish to plot the entire World Digitized database from
        VERSAMAP, you will have to concatenate the individual .MPS(binary)
        or .MP1(ASCII) files, since VERSAMAP will not accept more than 9
        input files.  The VERSAMAP disks contain 2 files, VM_FIX.MPS and
        VM_FIX.MP1, which must be used to concatenate World Digitized files
        for use with VERSAMAP.  These 2 files, VM_FIX.MPS and VM_FIX.MP1,
        force a line break at the end of each World Digitized file when it
        is concatenated.
        
        For example, to concatenate the World Digitized binary .MPS files in
        the Europe subdirectory for use with VERSAMAP, use the following
        form of the DOS copy command:
        
        COPY /B E0.MPS+VM_FIX.MPS+E1.MPS+VM_FIX.MPS+E2.MPS+
          VM_FIX.MPS+E3.MPS EUROPE.MPS
        
        where EUROPE.MPS is the concatenated file.
        
        A similar procedure (without the /B switch) is used to concatenate
        the World Digitized ASCII .MP1 files for use with VERSAMAP:
        
        COPY E0.MP1+VM_FIX.MP1+E1.MP1+VM_FIX.MP1+E2.MP1+
          VM_FIX.MP1+E3.MP1 EUROPE.MP1
        
        Spurious diagonal lines will be plotted if you do not insert the
        VM_FIX.MPS or VM_FIX.MP1 files between the World Digitized files
        when they are concatenated for use with VERSAMAP.
        
        
                                      Cartog
                                File extension BIN
        
        The mapping program CARTOG (Byte Magazine, page 329, December 1987)
        includes the database WORLDMED.  This database contains 15,000
        latitude, longitude points rounded to hundredths of a degree and
        stored as 6 byte binary records.  The mapping program and the
        WORLDMED database are available on disk from Byte Magazine.
        
        
                       Importing Your Own Data into VERSAMAP
                                File extension PRN
        
        In addition to the above file formats, VERSAMAP will also accept
        latitude, longitude values in the following ASCII format.  The line
        header field is used to indicate the beginning of each new polyline;
        -1 indicates the beginning of a new polyline, 0 indicates subsequent
        points within the polyline.
        
        Latitude and longitude are entered as decimal degrees; negative
        values represent South latitude or West longitude.  Use the
        following formula to convert latitude and longitudes given as
        degrees, minutes, and seconds to decimal degrees:


        VMAP.DOC version 1.30                                    Page  40 





             Decimal lat/lon = degrees + minutes/60 + seconds/3600
        
        For example, the decimal position for Rio de Janeiro, Brazil (22
        degrees, 53 minutes, 43 seconds south latitude; 43 degrees, 13
        minutes, 22 seconds west longitude) is:
        
             Decimal latitude  = -(22 + 53/60 + 43/3600) = -22.8953
             Decimal longitude = -(43 + 13/60 + 22/3600) = -43.2228
        
        The decimal position for Paris, France (48 degrees, 50 minutes, 14
        seconds north latitude; 2 degrees, 20 minutes, 14 seconds east
        longitude) is:
        
             Decimal latitude  = +(48 + 50/60 + 14/3600) = +48.8372
             Decimal longitude = +( 2 + 20/60 + 14/3600) = + 2.3372
        
        Decimal latitude and longitudes, input into VERSAMAP, are rounded to
        the nearest second.  The program cannot distinguish between
        positions less than 101 feet (31 meters, 1 second of latitude)
        apart.
        
        
                       Record Format for User Supplied Data
        
        
        field #1 - line header:  -1 for new polyline
                                  0 for point within polyline
               field separator:   one or more spaces (ASCII 32)
           field #2 - latitude:   decimal degrees, south latitude is
                                  negative
               field separator:   one or more spaces (ASCII 32)
          field #3 - longitude:   decimal degrees, west longitude is
                                  negative
                 end of record:   carriage return (ASCII 13),
                                  line feed (ASCII 10)
        
        
        Records with this format can be generated by most word processors,
        text editors, and spreadsheets.
        
        The file VMAPUSER.PRN on the VERSAMAP disk is a short file using the
        above ASCII format.  The file contains 6 individual points in the
        Pacific and Atlantic Oceans which plot as points; plus 5 points in
        the Indian Ocean which plot as a box when the points are connected
        by lines.  You can use VMAPUSER.PRN to study the appearance of the
        different symbol shapes, sizes, and colors that VERSAMAP can plot. 
        
        To plot the file, (1) select the Map Input Filenames option in the
        Input/Output menu; (2) erase the default map name, VMAP4.MAP; (3)
        type VMAPUSER.PRN for the filename; (4) and press Enter.  When the
        window titled ENTER SYMBOL TYPE, COLOR, & SIZE appears, (1) select
        symbol type Open square; (2) the color yellow; (3) size 03 pixels;
        and (4) press Enter on the < OK > button.  When asked for the next
        filename, erase the pathname and press Enter to end filename input.

        VMAP.DOC version 1.30                                    Page  41 





        To display the file, select the Size 100% option in the Run menu. 
        The screen will show 10 individual points, marked by yellow squares. 
        The box in the Indian Ocean plotted as 4 individual points, because
        all symbol types, except Line, plot as points.
        
        To plot the Indian Ocean points as a box, repeat the above steps,
        but choose symbol type Line.  In this case, the first six individual
        points plot as yellow dots, 1 pixel in size; but the last 5 points
        in the Indian Ocean are connected by lines, and plot as a rectangle.
        
        To view the contents of VMAPUSER.PRN, type the following command at
        the DOS prompt and press Enter (the word TYPE is part of the
        command).
        
                                 TYPE VMAPUSER.PRN
        
        Comments may be added to each line of the file after the last digit
        of longitude; however, the comment must not contain blank spaces or
        commas.
        
        
        10.  Use of VERSAMAP with Graphing Programs
        
        VERSAMAP can be used to prepare publication quality maps in
        conjunction with suitable graphing programs.  To be useful in
        preparing maps, a graphing program should be able to:
        
           a)  handle large data sets;
           b)  use more than 1 data set per graph;
           c)  physically separate the x and y axes, so that they do
               not show on the figure;
           d)  connect individual points on the graph with lines; and
           e)  exclude data which exceeds the X- and Y-axis limits.
        
        
        To print a map using a graphing program, import the map grid and the
        output map boundary files into the program.
        
        If there are two map grid files, the points in the first map grid
        file should be plotted as dots, and the points in the second map
        grid file should be connected by lines.  If there is only one map
        grid file, you can connect the grid points by lines or not,
        depending on how you want the graticule to appear.
        
        The X- and Y-axes are scaled using the values of X-axis Length and
        Y-axis Length listed under Relative Length of Axes on the VERSAMAP
        Parameter Report.  The relative X-axis Length is defined as 1.000000
        for all maps; the relative Y-axis Length may be less than or greater
        than unity, depending on the projection and graticule chosen.  
        Starting values of the X- and Y-axes should be set at 0.  The ending
        values of the X- and Y-axes will depend on your graphing program,
        but in general they will be one or both of the values listed under
        Relative Length of Axes on the VERSAMAP Parameter Report.


        VMAP.DOC version 1.30                                    Page  42 





        You should configure the graphing program for data clipping (i.e.
        exclude points which lie outside the limits of the X- and Y-axes). 
        This will prevent the dummy points (X = 5.000000), which indicate
        new polylines (see Section 8, Map Output Filenames), from being
        plotted.
        
        Map and grid output files produced by VERSAMAP have been
        successfully imported into the technical graphing programs, Grapher
        and SigmaPlot.  For use with SigmaPlot, dummy points (X,Y =
        5.000000) which indicate line breaks in map output files must be
        converted to dashes (X,Y = --------), indicating missing data,
        before the files are imported into SigmaPlot.  Changing the dummy
        points from 5.000000 to -------- can be done using the replace
        command in Edlin or the search and replace command in a word
        processor.
        
        
        11.  Program Compatibility with Software and Hardware
        
        
                         Compatibility With Other Software
        
        VERSAMAP has been tested successfully on computers running under DOS
        versions 3.00, 3.30, 4.01, 5.00, and 6.00.  VERSAMAP should run on
        any computer with DOS 3.0 or higher.
        
        Map output files produced by VERSAMAP have been successfully
        imported into the following programs.
        
                                                  File Imported Successfully
        Program                     Version         PCX   PIC   CGM   ASCII
        
        CorelDRAW                   2.0             yes   yes   yes
        DrawPerfect                 1.1             yes   yes   yes
        Freelance Plus              3.01, 2.0             yes   yes
        Grapher                     1.75                               yes
        Harvard Graphics            3.0,  2.3                   yes
        Lotus 123, PrintGraph       2.2,  2.01            yes
        Microsoft Paintbrush        2.0             yes
        Microsoft Word              2.0             yes   yes   yes
        PC Paintbrush IV Plus                       yes
        SigmaPlot                                                      yes
        WordPerfect                 5.1,  5.0             yes   yes
        
        
        PIC and CGM files produced by VERSAMAP are often too large to import
        into Freelance Plus, Harvard Graphics 2.3, and CorelDRAW 2.0.
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  43 





                              Hardware Compatibility
        
        VERSAMAP has been tested successfully on the following computer
        systems.  The last column gives the time required to plot the
        default world map, VMAP4.MAP, on each system.
        
        
        Micro-           DOS     CPU   Monitor   Disk   Math Co-    Time
        processor      Version   MHz             Type   processor   (min)
        
        8088             3.30     5   CGA,Herc   Floppy    No       18.11
                         3.00     5   EGA(mono)  Floppy    Yes       3.92
        
        80286            3.30    10   VGA(mono)  Hard      Yes       0.96
        
        80386sx          4.01    16      VGA     Hard      Yes       0.66
        80386sx          5.00    16      VGA     Hard      No        2.05
        80386sx          6.00    25      VGA     Hard      No        1.76
        80386            5.00    25      VGA     Hard      No        1.19
        
        80486            5.00    33      VGA     Hard      Yes       0.17
        
        
        Maps displayed by VERSAMAP have been printed successfully on the
        following printers with the Print Map option.
        
         9-pin dot matrix: IBM Proprinter
        
        24-pin dot matrix: Epson LQ-800.
        
                   InkJet: HP DeskJet Plus
        
                    Laser: HP LaserJet-II, -III, -IIIsi.
        
        
                                Video Compatibility
        
        VERSAMAP has been tested successfully on systems with CGA, Hercules,
        EGA, and VGA adapters and monitors.  The program runs in high
        resolution CGA mode (640 x 200 pixels) on computers equipped with
        MCGA adapters.
        
        Several users have reported that VERSAMAP versions 1.17 and lower
        will not run in VGA mode on computer systems equipped with both VGA
        and Hercules graphics adapters.  The present version of VERSAMAP has
        been modified to run in EGA mode (640 x 350 pixels) when it detects
        the presence of both VGA and Hercules graphics adapters.
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  44 





        Several users have reported that VERSAMAP versions 1.20 and lower
        would not run on their systems because it did not recognize the type
        of video adapter (VGA, EGA, CGA, Hercules) in their computer.  The
        present version of VERSAMAP has been modified to allow users to
        force the program to run in a particular video mode.  This is done
        by adding an additional parameter after the word VMAP on the DOS
        command line when VERSAMAP is started.  VERSAMAP now recognizes the
        following command line parameters:
        
        Valid command line parameters are:
        
        Command Line     Result
        
        VMAP             Run VERSAMAP, allow program to select video mode
        VMAP VIDEO       Display video monitor and adapter determined by
                           program
        VMAP HELP        Display list of valid command line parameters
        
        VMAP CGA         Force program to run in high resolution CGA mode
        VMAP HGC         Force program to run in Hercules monographic mode
        VMAP EGA         Force program to run in color EGA mode
        VMAP EGAMONO     Force program to run in monochrome EGA mode
        VMAP EGA64       Force program to run on EGA adapters with only
                           64K memory
        VMAP VGA         Force program to run in color or monochrome VGA
                           mode
        
        
        If VERSAMAP cannot recognize the video system in your computer, you
        will receive the error message "VERSAMAP 1.30 does not support your
        monitor and/or video display adapter!".  If you receive this error
        message, and you know the type of video adapter and monitor in your
        system, you can force VERSAMAP to run in that video mode by using
        one of the above commands.
        
        For instance, to force VERSAMAP to run in color EGA mode on a
        computer known to contain an EGA video adapter and a color EGA
        monitor, type the following command at the DOS prompt and then press
        Enter.
        
                                     VMAP EGA
        
        
        
        12.  Installing VERSAMAP
        
        VERSAMAP is distributed in several different forms: (1) as a set of
        uncompressed files, (2) as a compressed .ZIP file, and (3) as a
        compressed, self-extracting .EXE file.  VERSAMAP installation is a
        simple process of copying the contents of the VERSAMAP distribution
        disk(s) to your hard drive or to a second floppy disk, and expanding
        the files if necessary.
        


        VMAP.DOC version 1.30                                    Page  45 





        VERSAMAP does not require a hard disk, but you may not have enough
        free disk space available, if you attempt to save digital maps
        output by VERSAMAP onto the floppy disk containing the VERSAMAP
        files.  This is especially true for low density floppy disks.
        
        To run VERSAMAP, once it has been installed, change to the directory
        containing the VERSAMAP files, type VMAP at the DOS prompt, and then
        press the Enter key.
        
        
                         Hard and Floppy Disk Installation
                              Self-extracting version
        
        To expand the self-extracting form of VERSAMAP onto a hard disk or
        any size floppy disk:
        
        1.  Insert the VERSAMAP distribution disk into disk drive A.
        
        2.  Change to drive A using the DOS Change Directory command
            (e.g., CD A:).
        
        3.  Type the name of the self-extracting file (e.g., type VMAPS if
            the self-extracting file is VMAPS.EXE) at the DOS prompt, press
            the Enter key, and follow the instructions on the screen.  Once
            the instructions have been displayed, you may abort installation
            and return to DOS by pressing N.
        
        
                         Hard and Floppy Disk Installation
                                    ZIP version
        
        You will need a copy of the PKUNZIP utility program to expand the
        compressed .ZIP form of VERSAMAP.  PKUNZIP is available from most
        shareware distributors and bulletin boards.
        
        The following instructions describe the steps necessary to unzip the
        compressed .ZIP file into a subdirectory called VERSAMAP on hard
        drive C.
        
        1.  First, use the DOS MKDIR command to create the VERSAMAP
            subdirectory to hold the uncompressed files
            (e.g., MKDIR C:\VERSAMAP).
        
        2.  Use the DOS COPY command to copy the VERSAMAP .ZIP file and the
            unzipping program, PKUNZIP.EXE, into subdirectory VERSAMAP.
        
        3.  Change to the VERSAMAP subdirectory using the DOS Change
            Directory command (e.g., CD C:\VERSAMAP).
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  46 





        4.  To unzip the VERSAMAP files from a file called VMAP.ZIP, type
            the following command at the DOS prompt,
        
                                 PKUNZIP VMAP.ZIP
        
            and press the Enter key.
        
        
        To unzip the VERSAMAP files onto floppy disk(s), you may need to
        unzip the files, one file at a time.  Consult the PKUNZIP
        instructions for the commands necessary to extract the VERSAMAP
        files onto a floppy disk.  The help screen for PKUNZIP can be
        displayed by changing to the directory containing PKUNZIP, typing
        PKUNZIP at the DOS prompt, and pressing Enter.
        
        
                              Hard Disk Installation
                               Uncompressed version
        
        To install VERSAMAP in a directory called VERSAMAP on a hard disk
        (i.e. drive C):
        
        1.  Insert the VERSAMAP distribution disk into a floppy disk
            drive (i.e. drive A).
        
        2.  Copy the files from the disk in drive A to your hard disk by
            typing the following command at the DOS prompt
        
                            XCOPY A: C:\VERSAMAP /S /V
         
            and pressing Enter.  This command will copy all files and
            subdirectories from the disk in drive A into directory VERSAMAP
            on your hard drive.  The XCOPY command will create a VERSAMAP
            directory if it does not already exist on your hard drive.  If
            the VERSAMAP directory does not exist, you will be prompted by
            the following message after entering the command:
        
        
                         Does VERSAMAP specify a file name
                         or directory name on the target
                         (F = file, D = directory)?
        
        
            Answer the question by pressing the letter D to create the new
            directory.  The above message is not displayed if a VERSAMAP
            directory already exists on your hard drive.  In this case, the
            XCOPY command will overwrite any files of the same name in the
            existing VERSAMAP directory.
        
        3.  Remove the first VERSAMAP distribution disk from disk drive A.
        
        
        


        VMAP.DOC version 1.30                                    Page  47 





        4.  Repeat steps 1 to 3 if you received the VERSAMAP software on
            more than 1 floppy disk.
        
        
        VERSAMAP is now installed.
        
        
                             Floppy Disk Installation
                               Uncompressed version
        
        These instructions assume that you are copying the VERSAMAP files to
        a second floppy disk with a capacity equal to or greater than the
        VERSAMAP distribution disk(s).
        
        To install the uncompressed form of VERSAMAP onto a floppy disk
        (i.e., drive B):
        
        1.  Place a blank, formatted disk in drive B.
        
        2.  Insert the VERSAMAP distribution disk into disk drive A.
        
        3.  Copy the files from the disk in drive A onto drive B by typing
            the following command at the DOS prompt
        
                                 XCOPY A: B: /S /V
         
             and pressing Enter.  This will copy all files from the disk in
             drive A onto the disk in drive B.
        
        4.  Remove the first VERSAMAP distribution disk from disk drive A.
        
        5.  Repeat steps 1 to 4 if you received the VERSAMAP software on
            more than 1 distribution disk.  If your drive B is a high
            density floppy drive, you may copy all VERSAMAP files onto the
            same high density disk.
        
        
        VERSAMAP is now installed.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  48 





        13.  VERSAMAP Order Form (version 1.30)                   page 1/3
        
        
        Make checks payable to Charles Culberson.  Persons living outside
        the United States can register VERSAMAP by obtaining a Postal Money
        Order payable in U.S. dollars from their National Post Office; or by
        personal check in their local currency at the current exchange rate. 
        Send order form and comments to:
        
                                 Charles Culberson
                                 8 Ritter Lane
                                 Newark, DE  19711
                                 USA
        
        
        ------------------ Registration, version 1.30 ------------------
        
        Date: __________________________________________________________
        
        Where did you obtain VERSAMAP? _________________________________
        
        Your Name: _____________________________________________________
        
        Address: _______________________________________________________
        
        ________________________________________________________________
        
        ________________________________________________________________
        
        ________________________________________________________________
        
        
        Please circle the floppy disk size that you would like the VERSAMAP
        files supplied on.
        
        
          5.25" 360K       5.25" 1.2M       3.5" 720K       3.5" 1.4M
        
        
        --------------------------- Comments ---------------------------
        
        
        
        
        
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  49 





        13.  VERSAMAP Order Form (version 1.30, continued)        page 2/3
        
        
        Item                                                           Cost
        
        1.  VERSAMAP, registered copy , $15                          ______
        
        Most recent version of mapping program plus Helvetica fonts
        and maps VMAP3.MAP (31,000 points) and VMAP5.MAP (6,000
        points).
        
        
        2.  Printed Manual, $15                                      ______
        
        Printed copy of VERSAMAP instruction manual with soft
        cover.  The text of the printed manual is identical to the
        text of the instruction manual, VMAP.DOC, included on the
        VERSAMAP disk.
        
        
        3.  VERSAMAP Micro World Database, $15                       ______
        
        Includes complete set of 5 maps, VMAP1.MAP (195,000 points)
        to VMAP5.MAP (6,000 points).  See page 35 of instruction
        manual for details.
        
        
        4.  World Data Bank II in VERSAMAP .PKV format (data only supplied
            on high density 3.5" or 5.25" floppy disks).  See page 32 of
            instruction manual for details of this database.
        
        Region            Comments
        
        Africa            Suez Canal divides Africa and Eurasia
        Eurasia           includes Japan and Taiwan
        Latin America     Mexico to Chile, including Antarctica 
        North America     Canada, United States (Hawaii is in Oceania)
        Oceania           Indonesia, Philippines, Australia, New
                          Zealand, and Pacific Islands
        
        
        ------- Circle regions wanted -------
        
        Region            Number of      Cost
                            Disks
        
        Africa                2           $10
        Eurasia               5           $25
        North America         3           $15
        Latin America         2           $10
        Oceania               1           $ 5
        
                           Total cost of World Data Bank II files:   ______


        VMAP.DOC version 1.30                                    Page  50 





        13.  VERSAMAP Order Form (version 1.30, continued)        page 3/3
        
        
        Item                                                           Cost
        
        5.  USGS Digital Line Graph data in VERSAMAP .GRV format (data only
            supplied on high density 3.5" or 5.25" floppy disks).  See page
            36 of instruction manual for details of this database.
        
        
        -------------- Circle sections wanted --------------
        
          USGS         States on disk(s)                    Number of
        Sections                                                Disks
        
        01            CT, MA, ME, NY, VT, NH, RI                 1
        02            DE, MD, OH, NJ, PA, VA, WV                 1
        03, 04        FL, GA, NC, SC                             1
        05            AL, AR, LA, MS, TN                         2
        06            IA, IL, IN, KY, MO                         2
        07            MI, MN, WI                                 1
        08            TX     (TX in section 09 also)             1
        09            TX, OK (TX in section 08 also)             1
        10            CO, KS, NE                                 1
        11            MT, ND, SD, WY (MT in section 15 also)     1
        12            AZ, NM                                     1
        13, 14, 21    CA, HI, NV, UT                             1
        15            ID, MT, OR, WA (MT in section 11 also)     1
        16 thru 20    AK                                         5
        
        
                       Total cost of USGS Digital Line Graph files
                                    (number of disks x $5 per disk): ______
        
        
        6.  $5 charge for shipping to addresses outside the U.S.
                                                          or Canada: ______
        
        
        7.  $7 charge for checks drawn on foreign banks in foreign
            currency.  Except for Canadian banks, I cannot accept
            checks drawn on foreign banks in U.S. currency.  There
            is no charge for checks drawn on U.S. banks.             ______
        
        
        
        
            Minimum order is $15.  Total cost of items 1 through 7,
            or $15, whichever is greater.                            ______
        
        
        
        


        VMAP.DOC version 1.30                                    Page  51 





        14.  Acknowledgements
        
        To save disk space, the VERSAMAP mapping program, VMAP.EXE, has been
        compressed with the PKLITE Professional executable file compressor. 
        When you run VMAP.EXE by typing VMAP at the DOS prompt, the program
        will automatically expand as it loads into memory.
        
        VERSAMAP uses the Hercules graphics driver, MSHERC.COM, and the font
        files, COURA.FON, COURB.FON, COURE.FON, HELVA.FON, HELVB.FON,
        HELVE.FON, supplied with Microsoft BASIC 7.0.  Portions(C) 1982-1989
        Microsoft Corporation.  All rights reserved.
        
        VERSAMAP uses routines from the PCX Programmer's Toolkit, Copyright
        (c) Genus Microprogramming, Inc.  1988-1990.
        
        VERSAMAP uses the QuickWindows Advanced User Interface Library which
        is Copyrighted 1990 by Software Interphase, Inc.
        
        The boundary files, VMAP1.MAP through VMAP5.MAP, contain data from
        Micro World Data Bank II, a digital map database placed in the
        Public Domain by Fred Pospeschil and Antonio Riveria.
        
        The enhanced World Data Bank II files (.PKV file extension)
        distributed with VERSAMAP are derived from the packed, binary
        version of World Data Bank II (.PKD file extension) developed and
        placed in the Public Domain by Fred Pospeschil (Micro Doc, 3108
        Jackson Street, Bellevue, NE  68005, USA).
        
        CorelDRAW is copyrighted by Corel Systems Corporation.  Brother is
        a registered trademark of Brother Industries, Ltd.  Epson is a
        registered trademark of Epson America, Inc.  Expert Maps is a
        trademark of Expert Software.  Finger Maps is Copyrighted by Poisson
        Technology.  Grapher is a trademark of Golden Software, Inc. 
        Harvard Graphics is a registered trademark of Software Publishing
        Corporation.  Hewlett-Packard is a registered trademark of
        Hewlett-Packard Company.  Hercules is a registered trademark of
        Hercules Computer Technology.  IBM is a registered trademark of
        International Business Machines Corporation.  Lotus, 1-2-3, and
        Freelance are registered trademarks of Lotus Development
        Corporation.  Microsoft is a registered trademark, and Microsoft
        Windows is a trademark of the Microsoft Corporation.  Okidata is a
        registered trademark of Oki America Inc.  PC Paintbrush is a
        registered trademark of ZSoft Corporation.  PKUNZIP is a registered
        trademark, and PKLITE Professional is a trademark of PKWARE Inc. 
        SigmaPlot is a trademark of Jandel Corporation.  WordPerfect and
        DrawPerfect are registered trademarks of WordPerfect Corporation.
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  52 





        15.  Glossary
        
        The following definitions are taken from:
        
           John P. Snyder and Philip M. Voxland.  1989.  An Album of Map
             Projections.  U.S. Geological Survey Professional Paper 1453.
             U.S. Government Printing Office.  Pages 2 to 4.
        
        
        Aspect:   Conceptual placement of a projection in relation to the
           Earth's axis (polar, equatorial, oblique).
        
        Azimuthal projection:   Projection on which the azimuth or direction
           from a given central point to any other point is shown correctly.
        
        Central meridian:   Meridian passing through the center of a
           projection, often a straight line about which the projection is
           symmetrical.
        
        Conformal projection:   Projection on which all angles at each point
           are preserved.
        
        Conic projection:   Projection resulting from the conceptual
           projection of the Earth onto a tangent or secant cone, which is
           then cut lengthwise and laid flat.
        
        Cylindrical projection:   Projection resulting from the conceptual
           projection of the Earth onto a tangent or secant cylinder, which
           is then cut lengthwise and laid flat.
        
        Equal-area projection:   Projection on which the areas of all
           regions are shown in the same proportion to their true areas. 
           Shapes may be greatly distorted.
        
        Equatorial aspect:   Aspect of a projection on which the center of
           projection or the origin is some point along the Equator.
        
        Equidistant projection:   Projection that maintains constant scale
           along all great circles from one or two points.
        
        Graticule:   Network of lines representing a selection of the
           Earth's parallels and meridians.
        
        Great circle:   Any circle on the surface of the Earth (assumed to
           be a sphere) formed by the intersection of the surface with a
           plane passing through the center of the Earth.  It is the
           shortest distance between any two points along the circle and
           therefore important for navigation.  All meridians and the
           Equator are great circles.
        
        Latitude:   Angle made by a perpendicular to a given point on the
           surface of the Earth and the plane of the Equator, north or south
           to 90 degrees.  One of the two common geographic coordinates of
           a point on the Earth.

        VMAP.DOC version 1.30                                    Page  53 





        Longitude:   Angle made by the plane of a meridian passing through
           a given point on the Earth's surface and the plane of the (prime)
           meridian passing through Greenwich, England, east or west to 180
           degrees.  One of the two common geographic coordinates of a point
           on the Earth.
        
        Meridian:   Reference line on the Earth's surface formed by the
           intersection of the surface with a plane passing through both
           poles and some third point on the surface.  This line is
           identified by its longitude.  On the Earth, this line is half a
           great circle.
        
        Oblique aspect:   Aspect of a projection on which the center of the
           projection or the origin is located at a point which is neither
           at a pole nor along the Equator.
        
        Parallel:  Small circle on the surface of the Earth formed by the
           intersection of the surface with a plane parallel to the plane of
           the Equator.  This line is identified by its latitude.  The
           Equator (a great circle) is also treated as a parallel.
        
        Polar aspect:   Aspect of a projection on which the Earth is viewed
           from the polar axis.
        
        Scale:  Ratio of the distance on a map to the corresponding distance
           on the Earth; usually stated in the form 1:5,000,000, for
           example.
        
        Secant cone, cylinder:   A secant cone or cylinder intersects the
           Earth's surface along two separate lines.
        
        Small circle:   Circle formed by the intersection of the Earth's
           surface and a plane that does not pass through the center of the
           Earth.  Parallels of latitude, other than the Equator, are small
           circles.
        
        Standard parallel:   A parallel of latitude along which the scale of
           the map is correct.  There are one or two standard parallels on
           most cylindrical and conic map projections
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  54 





        16.  Index
        
        
        Acknowledgements . . . . . . . . . . . . . . . . . . . . . . 1, 52
        Add Text to Map. . . . . . . . . . . . . . . . .14, 19, 21, 28, 29
        Administrative boundaries. . . . . . . . . . . . . . . . . .36, 39
        Africa . . . . . . . . . . . . . . . . . . . . . . . . .32, 34, 50
        Alaska pipeline. . . . . . . . . . . . . . . . . . . . . . . . .39
        Albers equal-area. . . . . . . . . . . . . . . . . .10, 11, 14, 16
        ALL. . 3, 8, 10, 11, 13, 15, 17, 18, 20, 22-25, 31, 32, 34-38, 42,
                                                            47, 48, 52, 53
        Alt. . . . . . . . . . . . . . . . . . . . . . . . .4, 5, 7, 8, 20
        Antarctica . . . . . . . . . . . . . . . . . . . . . . .32, 34, 50
        ASCII. . . . . . . . . . . . . . . .2, 22-26, 29-33, 37, 39-41, 43
        Aspect . . . . . . . . . . . . . . . . . . . . . . . . .12, 53, 54
        Association of Shareware Professionals . . . . . . . . . . . . . 4
        Australia. . . . . . . . . . . . . . . . . . . . . . . . . .34, 50
        Australian states. . . . . . . . . . . . . . . . . . . . 18, 33-36
        Azimuthal. . . . . . . . . . . . . . . . . . . . 10, 12-15, 18, 53
        Azimuthal equal-area . . . . . . . . . . . . . . . .10, 13, 15, 18
        Azimuthal equidistant. . . . . . . . . . . . . . . .10, 12, 15, 18
        BIN. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .40
        Boundary file. . . . . . . . . . . . . . . . . . . . . . . . . .25
        Canada . . . . . . . . . . . . . . . . . . . . . . . . .34, 50, 51
        Canadian provinces . . . . . . . . . . . . . . . . . . . 18, 33-36
        Cartog . . . . . . . . . . . . . . . . . . . . . . . . . . .25, 40
        CCI. . . . . . . . . . . . . . . . . . . . . . . . .18, 25, 34, 35
        Central latitude of the map. . . . . . . . . . . . . . . . . . .15
        Central longitude of the map . . . . . . . . . . . . . . . . . .15
        CGA. . . . . . . . . . . . . . . . . . . .2, 3, 22, 24, 27, 44, 45
        CGM. . . . . . . . . . . . . . . . . . . . . .2, 20, 22-24, 28, 43
        Chile. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .50
        CNF. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .23
        Coastlines . . . . . . . . . . . . . . . . . . . . . 18, 32-36, 39
        Color. . . . . . . . . . . . . . . . . . 8, 19, 24, 25, 27, 41, 45
        Compatibility. . . . . . . . . . . . . . . . . . . . . . 1, 43, 44
        Computer graphics metafile . . . . . . . . . . . . . . . . . . .24
        Configuration file . . . . . . . . . . . . . . . . . . . . . . .23
        Conformal conic. . . . . . . . . . . . . . . . . . .10, 11, 14, 16
        Conic. . . . . . . . . . . . . . . . . . . .10, 11, 14, 16, 53, 54
        CorelDRAW. . . . . . . . . . . . . . . . . . . . . . . .28, 43, 52
        Countries. . . . . . . . . . . . . . . . . . . . . . . . 18, 33-36
        COUR_CGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        COUR_EGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        COUR_VGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        Courier. . . . . . . . . . . . . . . . . . . . . . . 2, 19, 20, 22
        DAT. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .39
        Data clipping. . . . . . . . . . . . . . . . . . . . . . . . . .43
        Default. . . . . . . . . .1, 4, 5, 9, 12, 15-18, 22, 24-27, 41, 44
        Degree sign. . . . . . . . . . . . . . . . . . . . . . . . . . .20
        Degrees of latitude between grid marks . . . . . . . . . . .14, 15
        Degrees of longitude between grid marks. . . . . . . . . . .14, 15
        Digital Line Graph . . . . . . . . . . . 1, 18, 25, 31, 36, 37, 51
        Digital map. . . . . . . . . . 1-3, 18, 24, 25, 30, 31, 35, 36, 52

        VMAP.DOC version 1.30                                    Page  55 





        Directory. . . . . . . . . . . . . . . . .5, 22-24, 26, 39, 46, 47
        Disclaimer . . . . . . . . . . . . . . . . . . . . . . . . . .1, 3
        Disk directory . . . . . . . . . . . . . . . . . . . . . . .23, 26
        Display Previous Text. . . . . . . . . . . . . . . .14, 22, 23, 28
        Distance above surface in kilometers . . . . . . . . . . . . . .16
        DOS. . . . . . . . . . . . . . . . . . .3, 5, 7, 28, 40, 42-48, 52
        Dot matrix . . . . . . . . . . . . . . . . . . . 2, 23, 26, 27, 44
        DrawPerfect. . . . . . . . . . . . . . . . . . . . . . .28, 43, 52
        Easternmost longitude of the map . . . . . . . . . . . . . . . .14
        EGA. . . . . . . . . . . . . . . . . . . . . .2, 3, 22, 24, 44, 45
        Equal-area . . . . . . . . . . . . . . . . . 10, 11, 13-16, 18, 53
        Equatorial . . . . . . . . . . . . . . . . . . . . . . . . .10, 53
        Equidistant conic. . . . . . . . . . . . . . . . . .10, 11, 14, 16
        Equirectangular. . . . . . . . . . . . . . . . . . . 9, 10, 14, 17
        Eritrea. . . . . . . . . . . . . . . . . . . . . . . . . . . . .35
        Error message. . . . . . . . . . . . . . . . . . . 7, 9, 15-17, 45
        Esc. . . . . . . . . . . . . . . . . . . . .5, 7-9, 21, 26, 27, 31
        Eurasia. . . . . . . . . . . . . . . . . . . . . . . . . . .34, 50
        Europe . . . . . . . . . . . . . . . . . . . . . . . . .32, 34, 40
        Exit . . . . . . . . . . . . . . . . . . . . . 1, 5, 7, 10, 18, 27
        Export . . . . . . . . . . . . . . . . . . . . . . .20, 22, 24, 29
        F1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .26
        Filename . . . . . . . . . . . . . . . 18, 23-25, 27-29, 34-36, 41
        FON. . . . . . . . . . . . . . . . . . . . . . . . . . . 2, 22, 52
        Font . . . . . . . . . . . . . . . . . . . . 2, 14, 19, 20, 22, 52
        Format . . . . . . . . . . . . . . 2, 25, 29-33, 37, 39-41, 50, 51
        Freelance. . . . . . . . . . . . . . . . . . . . . . . .28, 43, 52
        Geographic Feature . . . . . . . . . . . . . . . . . . . . .35, 36
        Geological Survey. . . . . . . . . . . . . . 6, 18, 25, 31, 36, 53
        Germany. . . . . . . . . . . . . . . . . . . . . . . . . . . . .36
        Gnomonic . . . . . . . . . . . . . . . . . . . . . .10, 12, 15, 18
        Grapher. . . . . . . . . . . . . . . . . . . . . . . . . . .43, 52
        Graphing program . . . . . . . . . . . . . . . . . . . . . .42, 43
        Graticule Type . . . . . . . . . . . . . . . . . . .14, 17, 18, 30
        Great circle . . . . . . . . . . . . . . . . . . . . . . . .53, 54
        GRF. . . . . . . . . . . . . . . . . . . . . . . . . . .25, 36, 37
        Grid file. . . . . . . . . . . . . . . . . . . . . . . .30, 31, 42
        Grid type. . . . . . . . . . . . . . . . . . . . . .18, 26, 30, 31
        GRV. . . . . . . . . . . . . . . . . . . . . . . 2, 25, 36, 37, 51
        Hammer equal-area. . . . . . . . . . . . . . . . . . . .10, 13, 14
        Harvard Graphics . . . . . . . . . . . . . . . . . . . .28, 43, 52
        Hawaii . . . . . . . . . . . . . . . . . . . . . . . . . . . . .50
        HELV_CGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        HELV_EGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        HELV_VGA.FON . . . . . . . . . . . . . . . . . . . . . . . . 2, 22
        Helvetica. . . . . . . . . . . . . . . . . . .2, 3, 19, 20, 22, 50
        Hercules . . . . . . . . . . . . . . . . . . .2, 3, 22, 44, 45, 52
        Import . . . . . . . . . . . . . . . . . . .20, 28, 34, 37, 42, 43
        Index. . . . . . . . . . . . . . . . . . . . . . . . . . . . 1, 55
        Indonesia. . . . . . . . . . . . . . . . . . . . . . . . . .34, 50
        Input field. . . . . . . . . . . . . . . . . . . . . . . . . . . 8
        Input file . . . . . . . . . . . . . . . .5, 9, 18, 24, 25, 30, 34
        Input/Output menu. . . . . . .1, 18, 19, 22, 23, 26-28, 34, 37, 41
        Installing VERSAMAP. . . . . . . . . . . . . . . . . . . .1, 3, 45

        VMAP.DOC version 1.30                                    Page  56 





        Islands. . . . . . . . . . . . . . . . . . . . . 18, 32, 34-37, 50
        Israel . . . . . . . . . . . . . . . . . . . . . . . . . . .32, 35
        Japan. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .50
        Lakes. . . . . . . . . . . . . . . . . . . . . . . . 18, 32-36, 38
        Laser. . . . . . . . . . . . . . . . . . . . . . . . 2, 23, 26, 44
        Latin America. . . . . . . . . . . . . . . . . . . . . . . .34, 50
        Latitude . .1, 2, 4-9, 11, 14-18, 24, 26-30, 32, 34-37, 39-41, 53,
                                                                        54
        Latitude and longitude limits. . . . . . . . . . . . . 7, 8, 14-16
        Letter B . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
        Letter T . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
        List box . . . . . . . . . . . . . . . . . . . . 8, 25, 26, 34, 37
        Longitude. . 1, 2, 4-9, 14-16, 18, 24, 26-30, 32, 34-37, 39-42, 54
        Lotus. . . . . . . . . . . . . . . . . . . . . .20, 24, 28, 43, 52
        MAP. . . . . . . . . . . . . . . . . 1-31, 34-37, 39-44, 50, 52-54
        Map Boundaries . . . . . . . . . . . . . . . . . . .14, 15, 34, 37
        Map Design menu. . . . . . . . . . . . . . . 1, 14, 18, 21, 23, 28
        Map Input Filenames. . . . . . . . . . . . . . .18, 19, 23, 24, 41
        Math coprocessor . . . . . . . . . . . . . . . . . . . . .3, 5, 27
        MCGA . . . . . . . . . . . . . . . . . . . . . . . . .2, 3, 22, 44
        Menu . 1, 4, 5, 7-10, 14, 18, 19, 21-23, 26-28, 31, 34, 37, 41, 42
        Menu bar . . . . . . . . . . . . . . . . .4, 5, 7-9, 21, 26-28, 31
        Mercator . . . . . . . . . . . . . . . . . . . . . 4, 9, 10, 14-16
        Meridian . . . . . . . . . . . . . . . . . . 5, 11, 13, 15, 53, 54
        Mexico . . . . . . . . . . . . . . . . . . . . . . . . . . . . .50
        Micro Doc. . . . . . . . . . . . . . . . . . . . . . . . 32-34, 52
        Micro World Data Bank II . . . . . . .1, 8, 18, 25, 31, 34, 35, 52
        Microsoft Windows. . . . . . . . . . . . . . . . . . . . . .20, 52
        Microsoft Word . . . . . . . . . . . . . . . . . . . . . . . . .43
        Mouse. . . . . . . . . . . . . . . . . . . . . . . .1, 4, 7, 8, 21
        MP1. . . . . . . . . . . . . . . . . . . . . . . . . . . 2, 39, 40
        MPS. . . . . . . . . . . . . . . . . . . . . . . . . . . 2, 39, 40
        MSHERC.COM . . . . . . . . . . . . . . . . . . . . . . . . . 2, 52
        MWDB-II. . . . . . . . . . . . . . . . . . . . . . . 18, 31, 34-36
        New Zealand. . . . . . . . . . . . . . . . . . . . . . . . . . .34
        North America. . . . . . . . . . . . . . . . . . . . . .32, 34, 50
        Northernmost latitude of the map . . . . . . . . . . . . . . . .14
        Oahu . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2, 37
        Oblique. . . . . . . . . . . . . . . . . . . . . . . . . . .53, 54
        Oceania. . . . . . . . . . . . . . . . . . . . . . . . . . .34, 50
        Oman . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .35
        Ombudsman. . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
        Order form . . . . . . . . . . . . . . . . .1-4, 34, 36, 37, 49-51
        Orthographic . . . . . . . . . . . . . . . . . . . .10, 12, 15, 18
        Output file. . . . . . . . . . . . . . . . . . . . . . . . .29, 30
        Output grid data in ASCII format . . . . . . . . . . . . . .29, 30
        Output map data in ASCII format. . . . . . . . . . . . . . . . .29
        Paintbrush . . . . . . . . . . . . . . . . . . . . . . .27, 43, 52
        Parallel . . . . . . . . . . . . . . . . . . . .10, 11, 16, 17, 54
        PCX. . . . . . . . . . . . . . . . . . . .2, 20, 22-24, 27, 43, 52
        PIC. . . . . . . . . . . . . . . . . . . .2, 19, 20, 22-24, 28, 43
        PIC font . . . . . . . . . . . . . . . . . . . . . . . . . .19, 20
        PKD. . . . . . . . . . . . . . . . . . . . . . . . . 25, 32-34, 52
        PKUNZIP. . . . . . . . . . . . . . . . . . . . . . . . .46, 47, 52

        VMAP.DOC version 1.30                                    Page  57 





        PKV. . . . . . . . . . . . . . . . . . . . . .2, 25, 32-34, 50, 52
        PNT. . . . . . . . . . . . . . . . . . . . . . . . . . .18, 34, 35
        Point size . . . . . . . . . . . . . . . . . . . . . . . . .19, 22
        Polar. . . . . . . . . . . . . . . . . . . . . . . .10, 12, 53, 54
        Political boundaries . . . . . . . . . . . . . . . .33, 34, 36, 39
        Polyline . . . . . . . . . . . . . . . . . . . . . .24, 30, 40, 41
        Print Map. . . . . . . . . . . . . . . . . . . .20, 22, 23, 26, 44
        Printer. . . . . . . . . . . . . . . . . . . . . 8, 23, 24, 26, 27
        Printer port . . . . . . . . . . . . . . . . . . . . . . . . . .27
        PrintGraph . . . . . . . . . . . . . . . . . . . . . . .20, 28, 43
        PRN. . . . . . . . . . . . . . . . . . . . . . . . . . . .2, 40-42
        Projection menu. . . . . . . . . . . . . . . . . . . . 1, 5, 7, 10
        Pull-down menu . . . . . . . . . . . . . . . . . . . . . . . . . 9
        Pushbutton . . . . . . . . . . . . . . . . . . . . . . . . . . . 8
        Railroads. . . . . . . . . . . . . . . . . . . . . . . . . .36, 38
        Range of map in degrees. . . . . . . . . . . . . . . . . . .15, 16
        Recall Map Design. . . . . . . . . . . . . . . . . . . . . .14, 23
        REGISTER.DOC . . . . . . . . . . . . . . . . . . . . . . . . .2, 3
        Registration . . . . . . . . . . . . . . . . . . . . . . .1, 3, 49
        Report Map Parameters. . . . . . . . . . . . . . . . . . 23, 26-28
        Rivers . . . . . . . . . . . . . . . . . . . . . . . . . 18, 33-37
        Robinson . . . . . . . . . . . . . . . . . . . . . . . .10, 13, 14
        Run menu . . . . . . . . . . . . . 1, 5, 9, 23, 28, 31, 34, 37, 42
        Satellite. . . . . . . . . . . . . . . . . . . . . . . . . . . .16
        Save as ASCII. . . . . . . . . . . . . . . . . . . . . .22, 23, 29
        Save as CGM. . . . . . . . . . . . . . . . . . . . .20, 22, 23, 28
        Save as PCX. . . . . . . . . . . . . . . . . . . . .20, 22, 23, 27
        Save as PIC. . . . . . . . . . . . . . . . . . . . . . .22, 23, 28
        Save Map Design. . . . . . . . . . . . . . . . . . . . . . .14, 23
        Scotland . . . . . . . . . . . . . . . . . . . . . . . . . . . .33
        Select Font. . . . . . . . . . . . . . . . . . . . . . . . .14, 22
        Select Printer . . . . . . . . . . . . . . . . . . . . . . .23, 27
        Self-extracting. . . . . . . . . . . . . . . . . . . . . . .45, 46
        Shareware. . . . . . . . . . . . . . . . . . . 2-4, 25, 31, 39, 46
        SigmaPlot. . . . . . . . . . . . . . . . . . . . . . . . . .43, 52
        Size 100%. . . . . . . . . . . . . . . . 5, 28, 29, 31, 34, 37, 42
        Size 70% . . . . . . . . . . . . . . . . . . . . . . . .28, 29, 31
        Slovakia . . . . . . . . . . . . . . . . . . . . . . . . . . . .35
        Sources of digital map data. . . . . . . . . . . . . . . . . 1, 31
        Southernmost latitude of the map . . . . . . . . . . . . . . . .14
        Soviet Union . . . . . . . . . . . . . . . . . . . . . . . . 33-35
        Standard Parallel. . . . . . . . . . . . . . . . . . . .16, 17, 54
        States . . . . . . . . . . . . . . . .18, 19, 31, 33-37, 39, 49-51
        Stereographic. . . . . . . . . . . . . . . . . . . .10, 12, 15, 18
        Streams. . . . . . . . . . . . . . . . . . . . . . . . . . .36, 37
        Suez canal . . . . . . . . . . . . . . . . . . . . . . . . . . .50
        Symbol . . . . . . . . . . . . . . . . . . . . .24, 25, 27, 41, 42
        Tab. . . . . . . . . . . . . . . . . 8, 16, 17, 21, 25, 26, 29, 30
        Taiwan . . . . . . . . . . . . . . . . . . . . . . . . . 2, 34, 50
        Text . . . . . . . . . . . . . .2, 8, 14, 19-23, 25-29, 31, 41, 50
        Text # . . . . . . . . . . . . . . . . . . . . . . . . . . .19, 21
        U.S. Geological Survey . . . . . . . . . . . 6, 18, 25, 31, 36, 53
        U.S. states. . . . . . . . . . . . . . . . . . . . . . . . .18, 33
        United Arab Emirates . . . . . . . . . . . . . . . . . . . . . .35

        VMAP.DOC version 1.30                                    Page  58 





        United States. . . . . . . . . . . .19, 31, 34, 36, 37, 39, 49, 50
        User supplied data . . . . . . . . . . . . . . . . . . . . . . .41
        USGS . . . . . . . . . . . . . . .1, 2, 18, 19, 25, 31, 36, 37, 51
        USGS DLG . . . . . . . . . . . . . . . . . . 2, 18, 19, 31, 36, 37
        VERSAMAP Micro World Database. . . . . . . . . . . . . . 34-36, 50
        Vertical perspective . . . . . . . . . . . . . .10, 12, 15, 16, 18
        VGA. . . . . . . . . . . . . . . . . . . .2, 3, 22, 24, 26, 44, 45
        Video. . . . . . . . . . . . . . . . . . . . . . . . 1, 22, 44, 45
        View Disk Directory. . . . . . . . . . . . . . . . . . . . .23, 26
        VM_FIX.MP1 . . . . . . . . . . . . . . . . . . . . . . . . . 2, 40
        VM_FIX.MPS . . . . . . . . . . . . . . . . . . . . . . . . . 2, 40
        VMAP.DOC . . . . . . . . . . . . . . . . . . . . . . . . . . 2, 50
        VMAP.EXE . . . . . . . . . . . . . . . . . . . . . . .2, 4, 22, 52
        VMAP1.MAP. . . . . . . . . . . . . . . . . . . . . . . .36, 50, 52
        VMAP2.MAP. . . . . . . . . . . . . . . . . . . . . . . . . . . .36
        VMAP3.MAP. . . . . . . . . . . . . . . . . . . . . . .2, 3, 36, 50
        VMAP4.MAP. . . . . . . . . . . . . . . 2, 4, 5, 18, 24, 36, 41, 44
        VMAP5.MAP. . . . . . . . . . . . . . . . . . . . .2, 3, 36, 50, 52
        VMAPREAD.ME. . . . . . . . . . . . . . . . . . . . . . . . . . . 2
        VMAPUSER.PRN . . . . . . . . . . . . . . . . . . . . . . 2, 41, 42
        VMOAHU.GRV . . . . . . . . . . . . . . . . . . . . . . . . . 2, 37
        VMTAIWAN.PKV . . . . . . . . . . . . . . . . . . . . . . . . 2, 34
        Wales. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .33
        WDB-II . . . . . . . . . . . . . . . . . . . . . 18, 19, 31-34, 37
        Westernmost longitude of the map . . . . . . . . . . . . . . . .14
        Windows. . . . . . . . . . . . . . . . . . . . 1, 7, 8, 20, 28, 52
        WordPerfect. . . . . . . . . . . . . . . . . . . . . . .28, 43, 52
        World Data Bank I. . . . . . . . . . . . . . . . . . . . . .25, 39
        World Data Bank II . . . . 1, 2, 8, 18, 25, 31, 32, 34, 35, 50, 52
        World Digitized. . . . . . . . . . . . . . . . . . . . .25, 39, 40
        X-axis Length. . . . . . . . . . . . . . . . . . . . . . . .26, 42
        XCOPY. . . . . . . . . . . . . . . . . . . . . . . . . . . .47, 48
        Y-axis Length. . . . . . . . . . . . . . . . . . . . . . . .26, 42
        Yemen. . . . . . . . . . . . . . . . . . . . . . . . . . . .35, 36
        Yugoslav Republics . . . . . . . . . . . . . . . . . . . . . . .35
        ZIP. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45-47
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        


        VMAP.DOC version 1.30                                    Page  59 
```
{% endraw %}

## VMVENDOR.DOC

{% raw %}
```



                                    VERSAMAP
                                  Version 1.30
        
                               VENDOR INFORMATION
        
        
        This file provides information for shareware distributors who
        wish to distribute the shareware program VERSAMAP.
        
        -----------------------------------------------------------------
                           Part 1:  Author Information
        -----------------------------------------------------------------
        
        Author:     Charles H. Culberson
        Address:    8 Ritter Lane
                    Newark, DE 19711
                    U.S.A.
         
        Phone:      302-731-0694
        CompuServe: 70511,3134
        
        Member:     Association of Shareware Professionals
        
        
        -----------------------------------------------------------------
                           Part 2:  Program Information
        -----------------------------------------------------------------
        
        Program Name:     VERSAMAP
        Version:          1.30
        
        Program Category: Geography
        Keywords:         maps, geography
        
        
        One Sentence Description:
        
          Draws maps which can be printed or exported as PCX, PIC, CGM,
          or ASCII files.
        
        Short Description:
        
          VERSAMAP draws outline maps on 13 map projections.  The digital
          world map supplied with the program includes boundaries for the
          new countries that have formed from the Soviet Union, for
          Canadian Provinces, and for Australian States.  VERSAMAP can
          plot maps using data from the CIA's World Data Bank II and from
          the U.S. Geological Survey's Digital Line Graphs.  Maps can be
          printed on the screen and on dot matrix or laser printers. 
          Maps can be exported as .PCX, .PIC, .CGM, or ASCII files.  Text
          may be added to maps using Courier or Helvetica fonts supplied
          with the program.


        VMVENDOR.DOC for VERSAMAP 1.30                         Page 1 of 4




        Long Description:
        
          VERSAMAP is a menu driven program with a graphical user
          interface, which allows the user to draw outline maps on 13 map
          projections.  VERSAMAP allows great flexibility in designing
          maps: the latitude/longitude boundaries and type of grid
          superimposed on the map may be specified.  Text may be added to
          maps with Courier or Helvetica fonts supplied with the program.
        
          VERSAMAP can plot maps from the following digital map
          databases: (1) The World Digitized, (2) Micro World Data Bank
          II, (3) World Data Bank II, and (4) the U.S. Geological
          Survey's Digital Line Graphs.  Individual geographic features,
          such as coastlines, rivers, islands, and political boundaries,
          can be plotted from Micro World Data Bank II, World Data Bank
          II, and the USGS Digital Line Graphs.  The program can also
          plot data supplied by the user in a simple ASCII file format.
        
          Digital map files supplied with VERSAMAP are updated versions
          of Micro World Data Bank II and include boundaries for the new
          countries that have formed from the Soviet Union, for Canadian
          Provinces, and for Australian States.  Additional, more
          detailed digital maps, from World Data Bank II and from the
          USGS Digital Line Graph database, may be purchased from the
          author.
        
          Maps drawn with VERSAMAP can be printed on Epson compatible dot
          matrix or Hewlett-Packard compatible laser printers; and
          exported as .PCX, .CGM, .PIC, or ASCII files for use with paint
          programs, word processors, and presentation graphics programs.
        
        
        System requirements to run program:
        
          MS-DOS 3.0 or higher;
          CGA, MCGA, EGA, or VGA video display adapter and color monitor;
            or Hercules mono graphics;
          640K memory;
        
          an Epson compatible dot matrix printer, or a Hewlett-Packard
            compatible laser printer are optional;
          a mouse and a math coprocessor are optional.
        
        
        Registration Information:
        
          Registration of the program is $15 in the United States and
          Canada, for which the user receives (1) a copy of the most
          recent version of the program, (2) additional digital map
          files, (3) the Helvetica font files, and (4) support by mail,
          telephone, and on CompuServe.  A registration form is included
          in the file REGISTER.DOC.

        VMVENDOR.DOC for VERSAMAP 1.30                         Page 2 of 4




        -----------------------------------------------------------------
                        Part 3:  Distribution Requirements
        -----------------------------------------------------------------
        
        Limited Distribution License:
        
          As the exclusive copyright holder for VERSAMAP, Charles H.
          Culberson authorizes distribution only in accordance with the
          following restrictions.
        
          VERSAMAP may be distributed as the following set of 15 files,
        
           VMAPREAD.ME   --  how to get started
               VMAP.EXE  --  the mapping program
              VMAP4.MAP  --  16,000 point digital world map
           VMTAIWAN.PKV  --  World Data Bank II map of Taiwan
             VMOAHU.GRV  --  USGS Digital Line Graph map of Oahu
        
               VMAP.DOC  --  instruction manual
           VMAPUSER.PRN  --  sample file in user supplied data format
             VM_FIX.MP1  --  small file used to concatenate World
                             Digitized binary map files
             VM_FIX.MPS  --  small file used to concatenate World
                             Digitized ASCII map files
        
           REGISTER.DOC  --  registration form
             MSHERC.COM  --  driver for Hercules mono graphics
        
           COUR_CGA.FON  --  Courier font for CGA, MCGA
           COUR_EGA.FON  --  Courier font for EGA, Hercules
           COUR_VGA.FON  --  Courier font for VGA
                 
           VMVENDOR.DOC  --  shareware vendor information
        
        
          Distribution of VERSAMAP is forbidden, unless the distribution
          disk(s) contains the complete set of 15 files.
        
            The VERSAMAP package - including all related program files
            and documentation files - CANNOT be modified in any way and
            must be distributed as a complete package, without exception.
        
            The person receiving a copy of the VERSAMAP package MUST be
            made aware that he or she does not become a registered user
            until Charles H. Culberson has received payment for
            registration of the software.  This requirement can be met by
            including the complete VERSAMAP package, which contains
            appropriate registration reminders.
        
        
        


        VMVENDOR.DOC for VERSAMAP 1.30                         Page 3 of 4




          The following additional information and restrictions are
          intended for Shareware Distributors who wish to distribute
          VERSAMAP.
        
        
            ASP Disk Vendor and BBS Member Information:
        
              Vendors and bulletin board operators who are Association of
              Shareware Professionals (ASP) Members are hereby given
              permission to distribute VERSAMAP in accordance with the
              distribution restrictions listed above.  ASP Members do not
              need to request permission to distribute this package.
        
        
            Other (Non-ASP) Vendor Information:
        
              Shareware Distributors who are not ASP Associate Members,
              but who wish to distribute VERSAMAP must comply with the
              following restrictions (in addition to those listed above).
        
              In order to ensure that only current versions are
              distributed, you must request permission from Charles H.
              Culberson to distribute VERSAMAP.
        
              You may not list VERSAMAP in advertisements, catalogs, or
              other literature which describes VERSAMAP as "FREE
              SOFTWARE".  Shareware is "Try-Before-You-Buy" software, it
              is not free.
        
        
            Computer Clubs:
        
              Computer Clubs and User Groups wishing to add VERSAMAP to
              their disk library may do so in accordance with the
              distribution restrictions listed above.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        



        VMVENDOR.DOC for VERSAMAP 1.30                         Page 4 of 4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3638

     Volume in drive A has no label
     Directory of A:\

    VMVENDOR DOC      9361   7-01-93   1:30a
    VMAP     DOC    167556   7-01-93   1:30a
    VMTAIWAN PKV      6932   7-01-93   1:30a
    VMOAHU   GRV      6402   7-01-93   1:30a
    VMAPUSER PRN       660   7-01-93   1:30a
    VM_FIX   MPS         9   7-01-93   1:30a
    VM_FIX   MP1         8   7-01-93   1:30a
    REGISTER DOC      6578   7-01-93   1:30a
    MSHERC   COM      6749  11-09-89  10:35a
            9 file(s)     204255 bytes
                          112640 bytes free
