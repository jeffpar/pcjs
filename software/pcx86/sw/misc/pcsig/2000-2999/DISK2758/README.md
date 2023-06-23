---
layout: page
title: "PC-SIG Diskette Library (Disk #2758)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2758/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2758"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2758.TXT

{% raw %}
```
Disk No: 2758
Disk Title: MARNAV
PC-SIG Version: S1

Program Title: MARNAV
Author Version: 1.0
Author Registration: $35.00
Special Requirements: None.

Are you a private plane or boat pilot?  Do you need an easy way to add
LORAN-C data to charts and maps?  Well, here's the software solution!

MARNAV converts LORAN delays to latitude/longitude coordinates and vice
versa.  Other features include a heading and distance calculator from
either LORAN delays or coordinates, a handy time/speed/distance
calculator, and a LORAN Chains editor.  The documentation is thorough
and easy to follow.  A sample chain file is included; the registered
version has all chains worldwide.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

## MARNAV.DOC

{% raw %}
```
                                    MARNAV
        
                               C & E ASSOCIATES
                               119 PLACID DRIVE
                               FORT MYERS, FLA.
                                    33919
        
                           MARNAV 1.0 DOCUMENTATION
        
                                  SECTION I
        
                                 INTRODUCTION
        
             There is an increasing need for software which will convert
        Latitude/Longitude  data  to  LORAN-C  delay   coordinates   and
        vice-versa  for  the  purpose of adding LORAN-C data to the many
        charts and maps, both land and marine which are published  with-
        out  this  information.  In  addition  to  the  LORAN-Geographic
        conversion, MARNAV also provides  a  means  of  calculating  all
        delays  for a given geographic location thus allowing a shift to
        another slave in the event of technical difficulty or as a means
        of double checking a position.
        
             All  LORAN-C  Chains  for which data is currently available
        have been included in MARNAV. The chain data used  is  based  on
        information  from  the  UNITED STATES COAST GUARD, Department of
        Transportation as published in COMDTINST-M16562.3 (Old CG-462).
        
             The following constants were used for all algorithms in the
        MARNAV Program. Signal propagation velocity used is the velocity
        of light in free space 299,792,458 meters/sec.., sea water  con-
        ductivity  5.0  mhos/meter,  0.01745329251993889 radians/degree.
        All calculations and data in double precision. Calculations nec-
        essarily assume an all water path.
        
             In  addition to LORAN-C Geographic conversions, MARNAV also
        provides the ability to navigation  from  one  pair  of  LORAN-C
        delays  to  another  pair  within  the  same  chain.  In  cruise
        planning, waypoint data is generally listed during the  planning
        stage  and  since  these data are already available it is conve-
        nient  to  use  them  for  calculating  heading   and   distance
        information. In addition it is  also possible to calculate head-
        ing and distance information from Latitude/Longitude data over a
        rhumb  line  course.  These  programs  do  not parallel programs
        available within typical LORAN-C  units  available  today  since
        those  computer  navigation  features  calculate  from  measured
        delays at present position.
        
             Since the Navigation solutions are available it only seemed
        logical  to include a Time/Speed/Distance function. The simplest
        data entry scheme appeared to be the query for each entry with a
        calculated result for the one not entered.
        













        MARNAV                   Documentation                   Page- 2


        MARNAV has a data base of thirteen files, one for  each  of  the
        thirteen chains world wide. The Shareware version is distributed
        with only one of these, the Great Lakes Chain (GRI  8970)  which
        will  let  you  try all of the programs features. In addition to
        these data files, one file is maintained to indicate the  Active
        Chain  (The chain you are currently using). When you first bring
        up MARNAV, it will read this active chain file and then the data
        for  the  indicated  chain. It is necessary that the program and
        all of the data files be kept in the same  directory  since  the
        program  looks for its data files in whatever directory you were
        in when you first brought up the program!
        
        The first screen gives the title and copyright data as well as a
        message  indicating what Active GRI data has been loaded. At the
        bottom of the screen is the main  menu.  You  will  be  able  to
        return  to  this  menu from virtually anywhere in the program by
        pressing the <HOME> key. In some cases you may also use the  <M>
        key  as  indicated  on the screen at that time. Each of the menu
        selections will be discussed below. Use the arrow keys  to  move
        around  the  menu selections. When the blinking cursor is at the
        end of any menu selection, the <RETURN>  key  will  select  that
        menu choice.
        
                                   Section II
        
                                LORAN >> LAT/LON-
        
        As  the  menu  suggests,  when you make this choice, the program
        will convert Loran delay data  to  Latitude/Longitude  position.
        You  may  enter  delay data for any two secondaries. The program
        will not only calculate and report your Latitude/Longitude posi-
        tion  but will also calculate the remaining secondary delays for
        that position. This may at times be very useful since  secondar-
        ies do fail and it may be necessary to choose another.
        
        A  number  of  comments  are in order at this point. Since Loran
        positioning depends on the intersection of two Hyperbolic  delay
        lines,  there  are two valid intersections with the same delays.
        These are usually far enough apart so they do  not  confuse  the
        user but the computer does not know which one you are interested
        in and so may well calculate the other position. To avoid  this,
        it  is  necessary  to  provide  the computer with an approximate
        latitude and longitude position. Generally anything within a few
        hundred  miles  is  close enough. (2 to 3 degrees) Those are the
        numbers appearing at the top right of this screen. They  may  be
        changed by pressing <END> in the conversion routines or by using
        the utilities and that will be discussed in a later section.
        
        Notice that the Latitude/Longitude  data  is  printed  in  three
        formats: Degrees and decimal Degrees; Degrees, Minutes and deci-
        mal Minutes; Degrees, Minutes, Seconds and decimal Seconds. This
        is  done since different charts and maps have grids given in any
        one of these three formats depending on the scale.
        









        MARNAV                   Documentation                   Page- 3


        In  normal  geographic  position  data, West Longitude and South
        Latitude are negative values. In order  to  avoid  the  inconve-
        nience of worrying about the sign of these numbers, the quadrant
        data near the top center of the  screen  defines  the  quadrants
        which  are defined with positive values. For example, the United
        States is in the North latitude quadrant and the West  Longitude
        quadrant. Consequently, these Lat/Lon numbers are given as posi-
        tive values. The quadrants selected may also be changed  in  the
        same way as are the approximate latitude and longitude by press-
        ing the <END> key in the conversion routines.
        
        If the entered delays are unrealistically far from the  Approxi-
        mate Lat/Lon entries you will get a message:
        
                 NO USEFUL SOLUTION-CHECK INPUT DATA". 
                                                      Press any  key  to
        return to the Main Menu.
        
        We  will  defer  discussion  of the "INCLUDED CORRECTION" column
        until the Utilities are discussed in a later section.
        
                                   Section III
        
                                 LAT/LON >> LORAN
        
        This menu choice lets you convert Lat/Lon data to Loran  delays.
        The  Quadrant data and the Approximate Lat/Lon have already been
        discussed in the previous section. Also discussed in  that  sec-
        tion  were  the three formats used for Lat/Lon data output. Data
        may also be input in any of these three formats and the  compute
        will calculate the remaining two forms. This is a useful feature
        if you need to convert from one format  to  another  when  using
        different scale charts.
        
        If you enter data as follows:
                  42.62 it will be accepted as format 1
        Format 2 may be entered in any of these ways:
                  43/45.2 or 43:45.2 or 43,45.2 or 43 45.2
        It  does not matter if you type a , or a / or a space or a colon
        as the delimiter, on the screen each of these forms would appear
        as 43/45.2.
        
        Format  3  allows  the  same  delimiters  and  the data might be
        entered as follows:
                 43/50/34.6 or 43:50:34.6 or 43,50,34.6 or 43 50 34.6
        
        As  before,  no  matter  how you enter it, on the screen it will
        look like the first example 43/50/34.6.
        
        Once the Lat/Lon data is entered the Approximate Lat/Lon data is
        temporarily  changed to conform and the calculation is completed
        for all of the secondaries in the chain.
        










        MARNAV                   Documentation                   Page- 4


        CAUTION!  JUST BECAUSE THE COMPUTER TELLS YOU WHAT THE DELAY FOR
        THAT POSITION WILL BE, IT MAY BE THAT YOU ARE SO FAR FROM A SEC-
        ONDARY STATION THAT YOU MAY NOT BE ABLE TO RECEIVE IT!
        
        As  mentioned  in  the previous section, the INCLUDED CORRECTION
        column will be discussed later.
        
                                   Section IV
        
                                BEARING/DISTANCE
        
        The Bearing/Distance option  will  calculate  the  heading  from
        point  A to point B, it will give the distance in Nautical miles
        and the reciprocal heading. (The  heading  from  B  to  A).  The
        points  may  be specified in either Lat/Lon or Loran delays. One
        may defined in one way while the second is defined in the other.
        If,  when the cursor is at the LOP1 (Delay 1 or Line of Position
        1), you press the <ENTER>  key  the  program  assumes  you  will
        specify  the position in Lat/Lon coordinates. The cursor is then
        positioned on the ENTER LATITUDE line.
        
        If you enter either position in Loran delays the  Lat/Lon  posi-
        tion  is  calculated;  If,  however,  you  enter the position in
        Lat/Lon coordinates, the Loran delays will  not  be  calculated.
        This section should require no further discussion.
        
                                   Section V
        
                              SPEED/TIME/DISTANCE
        
        Little  comment  is  required  for  this  choice.  The  computer
        calculates the relationship between these three variables. Enter
        any  two  and  it will calculate the third. Simply press <ENTER>
        for the one you want the solution for. If  the  distance  is  in
        Nautical  miles, the speed given will be knots, or conversely if
        speed is entered in knots, calculated distance will be in nauti-
        cal  miles.  IF speed is miles per hour distance will be statute
        miles.
        
        If time is being calculated, the result is given in  both  Hours
        and decimal hours as well as hours and minutes. If time is being
        entered the same formats as discussed in Section III for degrees
        and  minutes, etc. hold for time, which may be entered in hours,
        minutes and seconds using the same delimiters of "/"  ","    ":"
        or space.
        
                                   Section VI
        
                                   GRI UTILITIES
        
        The GRI Utilities allow you to enter data for a new Loran Chain,
        let you edit all of the data for Loran Chains you  already  have
        in  files,  provide  an additional way to change the Initial GRI
        (The GRI which comes up when you load the program), let you  add
        correction  factors  for  each secondary and will print the data
        file for any Loran Chain.
        






        MARNAV                   Documentation                   Page- 5


        When  you  select the EDIT option you have the choice of editing
        the data currently in memory, reading a new GRI file for edit or
        starting  over  to  enter a new Loran Chain. Editing is straight
        forward. You can move around the data  screen  using  the  arrow
        keys. If you press the <ENTER> key the program accepts the entry
        as it appears on the screen. To edit a data  entry,  the  entire
        entry  must  be  retyped.  When you have finished correcting the
        data field, press <END> to return to the menu bar.  If  you  are
        satisfied  with the field as it exists, move the cursor to WRITE
        FILE-, press <ENTER> and the data will be written to disk.
        
        If you selected the CHANGE GRI- option from the  EDIT  menu  the
        new  data will replace the data you have been using. You can now
        exit Edit and work in the new GRI or, you may want to edit  that
        data  and  write  it  to the files. If, at that time you want to
        change back to the GRI you had previously, you will have to  use
        the CHANGE GRI- option again and call for the desired Chain.
        
        If  you  are  entering  data for a new Loran Chain, latitude and
        longitude data must be entered in the degree and decimal  degree
        mode only. Double check all of your entries carefully because an
        error here produces erroneous output. When all the data has been
        entered, write the data to disk using the WRITE FILE- option.
        
        When you want to change the Initial GRI, select that option from
        the Utilities menu bar. The cursor will move to the  upper  left
        portion  of  the screen. You then enter the new GRI designation,
        along with the Latitude and  Longitude  quadrants  you  will  be
        working  in.  (See Section II). When you press <ENTER> after the
        longitude quadrant selection, the new GRI  file  will  be  read.
        After that whenever you start the program, the data for the Ini-
        tial GRI will be loaded automatically.
        
                                   SECTION VII
        
                                CORRECTION FACTOR
        
        Loran calculations and their accuracy depend on the  propagation
        velocity  of radio waves. Unfortunately the propagation velocity
        is not the same over all types of terrain so the delay time to a
        given  point  may  be  slightly  different than it is to another
        point whose distance from the secondary station is  exactly  the
        same.  While the errors incurred are not large, they can lead to
        position errors of one quarter to one third of a mile.
        
        If you get the exact geographic location of  some  fixed  object
        such  as  a bridge, a building or a point of land you can calcu-
        late the theoretical Loran delays for that  point.  If  you  now
        measure  the actual delays to that point using a Loran, the dif-
        ference between the calculated delays and  the  measured  delays
        can be entered as correction factors.
        











        MARNAV                   Documentation                   Page- 6


        These correction factors will be approximately correct  for  all
        Loran data in the general area where they were determined. These
        correction factors will have a negative value because the propa-
        gation   velocity   of  radio  waves  is  decreased  by  surface
        anomalies. These correction factors may be entered for each sec-
        ondary  using  the  editor in the GRI UTILITIES mode. It is this
        propagation velocity problem that results in the Absolute  Posi-
        tion  Error  in Lorans even though Repeatable Accuracy may be as
        little as 50 feet. The correction factors help to  resolve  this
        difficulty when precise positioning is important.
        
        Do  not  use  the chart position of markers or bouys from marine
        charts since their geographic position  is  often  significantly
        different  from  their  position on the chart. Land based points
        whose position is determined by surveys are  more  suitable  for
        calculating correction factors.
        
                                  Section VIII
        
                               HARD COPY-OFF or ON
        
        It  is  often convenient to have a hard copy of your conversions
        or, more often, the calculations of heading and  distance.  This
        is especially true when you are planning a boat cruise since you
        can plan your entire trip in the comfort of your home or  office
        and  have a printout of the results. The HARD COPY OFF/ON option
        of the main menu toggles the printer on  and  off  whenever  the
        cursor is positioned at this choice and you press <ENTER>. After
        each of your conversions or calculations, the results are  auto-
        matically printed.
        
        































        MARNAV                   Documentation                   Page- 7


        
        
                           PROGRAM REGISTRATION
        
        
        The  distribution of MARNAV.EXE by shareware vendors  and  other
        distributors of user supported software  is  hereby  authorized.
        MARNAV.EXE  is  copyrighted  software and is not placed  in  the
        public domain but rather is entered in the Shareware  market  so
        that potential users may insure that it meets their needs.
        
        The registration fee  for the program  is a only  $35.00.   Reg-
        istered users will automatically receive  software  support  and
        notice of any program enhancements. Any future new versions will
        be made available to registered users for a nominal fee.
        
        PLEASE SHOW YOUR SUPPORT FOR THE SHAREWARE CONCEPT BY SUBMITTING
        THE REGISTRATION FEE. WE ENCOURAGE YOU TO SHARE COPIES  OF  THIS
        SOFTWARE  PLUS THE DOCUMENTATION FILE WITH OTHERS WHO MIGHT FIND
        IT USEFUL.
        
        
        ______________________________________________________________
        
        
                                Registration Form
                                    MARNAV.EXE
        
        
             Name ____________________________________________
        
        
             Street __________________________________________
        
        
             City/State ______________________________________
        
        
            Please enclose the $35.00 registration fee and mail to:
        
                                C & E Associates
                                119 Placid Drive
                                 Fort Myers, FL
                                      33919
        
                                        Thank you for you support,
                                                Ed Panner
        















                                    MARNAV
        
                               C & E ASSOCIATES
                               119 PLACID DRIVE
                               FORT MYERS, FLA.
                                    33919
        
                           MARNAV 1.0 DOCUMENTATION
        
                                  SECTION I
        
                                 INTRODUCTION
        
             There is an increasing need for software which will convert
        Latitude/Longitude  data  to  LORAN-C  delay   coordinates   and
        vice-versa  for  the  purpose of adding LORAN-C data to the many
        charts and maps, both land and marine which are published  with-
        out  this  information.  In  addition  to  the  LORAN-Geographic
        conversion, MARNAV also provides  a  means  of  calculating  all
        delays  for a given geographic location thus allowing a shift to
        another slave in the event of technical difficulty or as a means
        of double checking a position.
        
             All  LORAN-C  Chains  for which data is currently available
        have been included in MARNAV. The chain data used  is  based  on
        information  from  the  UNITED STATES COAST GUARD, Department of
        Transportation as published in COMDTINST-M16562.3 (Old CG-462).
        
             The following constants were used for all algorithms in the
        MARNAV Program. Signal propagation velocity used is the velocity
        of light in free space 299,792,458 meters/sec.., sea water  con-
        ductivity  5.0  mhos/meter,  0.01745329251993889 radians/degree.
        All calculations and data in double precision. Calculations nec-
        essarily assume an all water path.
        
             In  addition to LORAN-C Geographic conversions, MARNAV also
        provides the ability to navigate from one pair of LORAN-C delays
        to  another  pair  within  the  same  chain. In cruise planning,
        waypoint data is generally listed during the planning stage  and
        since  these  data are already available it is convenient to use
        them for calculating heading and distance information. In  addi-
        tion  it  is    also  possible to calculate heading and distance
        information from  Latitude/Longitude  data  over  a  rhumb  line
        course. These programs do not parallel programs available within
        typical LORAN-C units available today since those computer navi-
        gation  features  calculate  from  measured  delays  at  present
        position.
        
             Since the Navigation solutions are available it only seemed
        logical  to include a Time/Speed/Distance function. The simplest
        data entry scheme appeared to be the query for each entry with a
        calculated result for the one not entered.
        













        MARNAV                   Documentation                   Page- 2


        MARNAV has a data base of thirteen files, one for  each  of  the
        thirteen chains world wide. The Shareware version is distributed
        with only one of these, the Great Lakes Chain (GRI  8970)  which
        will  let  you  try all of the programs features. In addition to
        these data files, one file is maintained to indicate the  Active
        Chain  (The chain you are currently using). When you first bring
        up MARNAV, it will read this active chain file and then the data
        for  the  indicated  chain. It is necessary that the program and
        all of the data files be kept in the same  directory  since  the
        program  looks for its data files in whatever directory you were
        in when you first brought up the program!
        
        The first screen gives the title and copyright data as well as a
        message  indicating what Active GRI data has been loaded. At the
        bottom of the screen is the main  menu.  You  will  be  able  to
        return  to  this  menu from virtually anywhere in the program by
        pressing the <HOME> key. In some cases you may also use the  <M>
        key  as  indicated  on the screen at that time. Each of the menu
        selections will be discussed below. Use the arrow keys  to  move
        around  the  menu selections. When the blinking cursor is at the
        end of any menu selection, the <RETURN>  key  will  select  that
        menu choice.
        
                                   Section II
        
                                LORAN >> LAT/LON-
        
        As  the  menu  suggests,  when you make this choice, the program
        will convert Loran delay data  to  Latitude/Longitude  position.
        You  may  enter  delay data for any two secondaries. The program
        will not only calculate and report your Latitude/Longitude posi-
        tion  but will also calculate the remaining secondary delays for
        that position. This may at times be very useful since  secondar-
        ies do fail and it may be necessary to choose another.
        
        A  number  of  comments  are in order at this point. Since Loran
        positioning depends on the intersection of two Hyperbolic  delay
        lines,  there  are two valid intersections with the same delays.
        These are usually far enough apart so they do  not  confuse  the
        user but the computer does not know which one you are interested
        in and so may well calculate the other position. To avoid  this,
        it  is  necessary  to  provide  the computer with an approximate
        latitude and longitude position. Generally anything within a few
        hundred  miles  is  close enough. (2 to 3 degrees) Those are the
        numbers appearing at the top right of this  screen.  The  Active
        GRI  and  these  numbers may be changed by pressing <END> in the
        conversion routines, from the master menu or by using the utili-
        ties and that will be discussed in a later section.
        
        Notice  that  the  Latitude/Longitude  data  is printed in three
        formats: Degrees and decimal Degrees; Degrees, Minutes and deci-
        mal Minutes; Degrees, Minutes, Seconds and decimal Seconds. This
        is done since different charts and maps have grids given in  any
        one of these three formats depending on the scale.
        








        MARNAV                   Documentation                   Page- 3


        In normal geographic position data,  West  Longitude  and  South
        Latitude  are  negative  values.  In order to avoid the inconve-
        nience of worrying about the sign of these numbers, the quadrant
        data  near  the  top  center of the screen defines the quadrants
        which are defined with positive values. For example, the  United
        States  is in the North latitude quadrant and the West Longitude
        quadrant. Consequently, these Lat/Lon numbers are given as posi-
        tive  values.  The quadrants selected may also be changed in the
        same way as are the approximate latitude and longitude by press-
        ing the <END> key in the conversion routines.
        
        If  the entered delays are unrealistically far from the Approxi-
        mate Lat/Lon entries you will get a message:
        
                 NO USEFUL SOLUTION-CHECK INPUT DATA". 
                                                      Press  any  key to
        return to the Main Menu.
        
        We will defer discussion of  the  "INCLUDED  CORRECTION"  column
        until the Utilities are discussed in a later section.
        
                                   Section III
        
                                 LAT/LON >> LORAN
        
        This  menu choice lets you convert Lat/Lon data to Loran delays.
        The Quadrant data and the Approximate Lat/Lon have already  been
        discussed  in  the previous section. Also discussed in that sec-
        tion were the three formats used for Lat/Lon data  output.  Data
        may  also be input in any of these three formats and the compute
        will calculate the remaining two forms. This is a useful feature
        if  you  need  to  convert from one format to another when using
        different scale charts.
        
        If you enter data as follows:
                  42.62 it will be accepted as format 1
        Format 2 may be entered in any of these ways:
                  43/45.2 or 43:45.2 or 43,45.2 or 43 45.2
        It does not matter if you type a , or a / or a space or a  colon
        as the delimiter, on the screen each of these forms would appear
        as 43/45.2.
        
        Format 3 allows the  same  delimiters  and  the  data  might  be
        entered as follows:
                 43/50/34.6 or 43:50:34.6 or 43,50,34.6 or 43 50 34.6
        
        As before, no matter how you enter it, on  the  screen  it  will
        look like the first example 43/50/34.6.
        
        Once the Lat/Lon data is entered the Approximate Lat/Lon data is
        temporarily changed to conform and the calculation is  completed
        for all of the secondaries in the chain.
        










        MARNAV                   Documentation                   Page- 4


        CAUTION! JUST BECAUSE THE COMPUTER TELLS YOU WHAT THE DELAY  FOR
        THAT POSITION WILL BE, IT MAY BE THAT YOU ARE SO FAR FROM A SEC-
        ONDARY STATION THAT YOU MAY NOT BE ABLE TO RECEIVE IT!
        
        As mentioned in the previous section,  the  INCLUDED  CORRECTION
        column will be discussed later.
        
                                   Section IV
        
                                BEARING/DISTANCE
        
        The  Bearing/Distance  option  will  calculate  the heading from
        point A to point B, it will give the distance in Nautical  miles
        and  the  reciprocal  heading.  (The  heading  from B to A). The
        points may be specified in either Lat/Lon or Loran  delays.  One
        may defined in one way while the second is defined in the other.
        If, when the cursor is at the LOP1 (Delay 1 or Line of  Position
        1),  you  press  the  <ENTER>  key  the program assumes you will
        specify the position in Lat/Lon coordinates. The cursor is  then
        positioned on the ENTER LATITUDE line.
        
        If  you  enter either position in Loran delays the Lat/Lon posi-
        tion is calculated; If,  however,  you  enter  the  position  in
        Lat/Lon  coordinates,  the  Loran delays will not be calculated.
        This section should require no further discussion.
        
                                   Section V
        
                              SPEED/TIME/DISTANCE
        
        Little  comment  is  required  for  this  choice.  The  computer
        calculates the relationship between these three variables. Enter
        any two and it will calculate the third.  Simply  press  <ENTER>
        for  the  one  you  want the solution for. If the distance is in
        Nautical miles, the speed given will be knots, or conversely  if
        speed is entered in knots, calculated distance will be in nauti-
        cal miles. IF speed is miles per hour distance will  be  statute
        miles.
        
        If  time  is being calculated, the result is given in both Hours
        and decimal hours as well as hours and minutes. If time is being
        entered the same formats as discussed in Section III for degrees
        and minutes, etc. hold for time, which may be entered in  hours,
        minutes  and  seconds using the same delimiters of "/"  ","  ":"
        or space.
        
                                   Section VI
        
                                   GRI UTILITIES
        
        The GRI Utilities allow you to enter data for a new Loran Chain,
        let  you  edit all of the data for Loran Chains you already have
        in files, provide an additional way to change  the  Initial  GRI
        (The  GRI which comes up when you load the program), let you add
        correction factors for each secondary and will  print  the  data
        file for any Loran Chain.
        






        MARNAV                   Documentation                   Page- 5


        When you select the EDIT option you have the choice  of  editing
        the data currently in memory, reading a new GRI file for edit or
        starting over to enter a new Loran Chain.  Editing  is  straight
        forward.  You  can  move  around the data screen using the arrow
        keys. If you press the <ENTER> key the program accepts the entry
        as  it  appears  on the screen. To edit a data entry, the entire
        entry must be retyped. When you  have  finished  correcting  the
        data  field,  press  <END> to return to the menu bar. If you are
        satisfied with the field as it exists, you must move the  cursor
        to  WRITE  FILE-,  press <ENTER> and the data will be written to
        disk.
        
        If you selected the CHANGE GRI- option from the  EDIT  menu  the
        new  data  will  replace the data you have been using so you can
        edit that data and write it to the files. When you exit the EDIT
        routines,  the  computer will automatically load the Initial GRI
        file. 
        
        If you are entering data for a new  Loran  Chain,  latitude  and
        longitude  data must be entered in the degree and decimal degree
        mode only. Double check all of your entries carefully because an
        error here produces erroneous output. When all the data has been
        entered, write the data to disk using the WRITE FILE- option.
        
        When you want to change the Initial GRI, select that option from
        the  Utilities  menu bar. The cursor will move to the upper left
        portion of the screen. You then enter the new  GRI  designation,
        along  with  the  Latitude  and  Longitude quadrants you will be
        working in. (See Section II). When you press <ENTER>  after  the
        longitude  quadrant  selection,  the  new GRI file will be read.
        After that whenever you start the program, the data for the Ini-
        tial GRI will be loaded automatically.
        
                                   SECTION VII
        
                                CORRECTION FACTOR
        
        Loran  calculations and their accuracy depend on the propagation
        velocity of radio waves. Unfortunately the propagation  velocity
        is not the same over all types of terrain so the delay time to a
        given point may be slightly different  than  it  is  to  another
        point  whose  distance from the secondary station is exactly the
        same. While the errors incurred are not large, they can lead  to
        position errors of one quarter to one third of a mile.
        
        If  you  get  the exact geographic location of some fixed object
        such as a bridge, a building or a point of land you  can  calcu-
        late  the  theoretical  Loran  delays for that point. If you now
        measure the actual delays to that point using a Loran, the  dif-
        ference  between  the  calculated delays and the measured delays
        can be entered as correction factors.
        











        MARNAV                   Documentation                   Page- 6


        These  correction  factors will be approximately correct for all
        Loran data in the general area where they were determined. These
        correction factors will have a negative value because the propa-
        gation  velocity  of  radio  waves  is  decreased   by   surface
        anomalies. These correction factors may be entered for each sec-
        ondary using the editor in the GRI UTILITIES mode.  It  is  this
        propagation  velocity problem that results in the Absolute Posi-
        tion Error in Lorans even though Repeatable Accuracy may  be  as
        little  as  50 feet. The correction factors help to resolve this
        difficulty when precise positioning is important.
        
        Do not use the chart position of markers or  bouys  from  marine
        charts  since  their  geographic position is often significantly
        different from their position on the chart.  Land  based  points
        whose  position  is  determined by surveys are more suitable for
        calculating correction factors.
        
                                  Section VIII
        
                               HARD COPY-OFF or ON
        
        It is often convenient to have a hard copy of  your  conversions
        or,  more  often, the calculations of heading and distance. This
        is especially true when you are planning a boat cruise since you
        can  plan your entire trip in the comfort of your home or office
        and have a printout of the results. The HARD COPY OFF/ON  option
        of  the  main  menu  toggles the printer on and off whenever the
        cursor is positioned at this choice and you press <ENTER>. After
        each  of your conversions or calculations, the results are auto-
        matically printed.
        
        































        MARNAV                   Documentation                   Page- 7


        
        
                           PROGRAM REGISTRATION
        
        
        The    distribution of MARNAV.EXE by shareware vendors and other
        distributors of user supported software  is  hereby  authorized.
        MARNAV.EXE    is  copyrighted  software and is not placed in the
        public domain but rather is entered in the Shareware  market  so
        that potential users may insure that it meets their needs.
        
        The registration fee  for the program  is a only  $35.00.   Reg-
        istered users will automatically receive  software  support  and
        notice of any program enhancements. Any future new versions will
        be made available to registered users for a nominal fee.
        
        PLEASE SHOW YOUR SUPPORT FOR THE SHAREWARE CONCEPT BY SUBMITTING
        THE REGISTRATION FEE. WE ENCOURAGE YOU TO SHARE COPIES  OF  THIS
        SOFTWARE  PLUS THE DOCUMENTATION FILE WITH OTHERS WHO MIGHT FIND
        IT USEFUL.
        
        
        ______________________________________________________________
        
        
                                Registration Form
                                    MARNAV.EXE
        
        
             Name ____________________________________________
        
        
             Street __________________________________________
        
        
             City/State ______________________________________
        
        
            Please enclose the $35.00 registration fee and mail to:
        
                                C & E Associates
                                119 Placid Drive
                                 Fort Myers, FL
                                      33919
        
                                        Thank you for your support,
                                                Ed Panner
        
















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2758

     Volume in drive A has no label
     Directory of A:\

    FILE2758 TXT       798   8-07-91  12:42a
    ACTGRI   LRN        12  10-22-90   8:09a
    GRI8970  LRN       276  10-20-90   5:10a
    MARNAV   DOC     39423  10-22-90  12:35p
    MARNAV   EXE     74558  10-22-90  11:29a
    READ     ME       1318   8-09-91  12:27a
    GO       BAT       103   8-07-91  12:41a
    PREVIEW  EXE      7347   4-18-91   1:15p
            8 file(s)     123835 bytes
                           34304 bytes free
