---
layout: page
title: "PC-SIG Diskette Library (Disk #692)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0692/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0692"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ACE 1 OF 2 (ALSO #693)"

    This program is a general-purpose astronomy software package with three
    separate parts -- ACECALC, ACESOLAR and ACECAT.
    
    ACECALC is a menu-driven astronomical ephemeris. Perform the most
    needed astronomical calculations involving the sun, moon and planets.
    The menu displays the local time, date and time zone name, universal
    time, local mean sidereal time, julian day, and the name of the location
    designated in the installation. It also calculates astrophotography
    exposures, precession of coordinates, phases of the moon, equinoxes and
    solstices, and satellites of Jupiter.
    
    ACESOLAR provides information on objects in the solar system such as
    numeric data on the sun, the planets and their satellites. Also
    available are narrative descriptions of the sun and planets and
    observational data.
    
    ACECAT lets you search the sky catalog for objects by name, catalog
    number, and position -- in terms of R.A./declination, object type, and
    constellation. This sky catalog provides data on over 2000 deep-sky
    objects, the entire Messier Catalog, 100 named objects, all bright stars
    to magnitude 2.00, and 100 prominent double stars, with detailed
    commentary on nearly 400 of these objects. Objects can be searched on
    the basis of one criterion or by a combination.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACE.DOC

{% raw %}
```
             AstroSoft Computerized Ephemeris (ACE), Version 1.00










                                  USER'S MANUAL
                                       FOR
                     ASTROSOFT COMPUTERIZED EPHEMERIS (ACE)

                                  Version 1.00



                  A General-Purpose Astronomy Software Package
             Supporting a Variety of Astronomy-Related Applications

               For the IBM Personal Computer and True Compatibles









                Copyright 1983, 1984, 1985, 1986 AstroSoft, Inc.
                  Post Office Box 4451, Hayward, CA  94540-4451
                              All Rights Reserved.

























                                    Page 1





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                TABLE OF CONTENTS
                                -----------------

        INTRODUCTION
        THE CONFIGURATIONS SUPPORTED
        GETTING HARDCOPY
        THE ACE DISKETTES
        THE ACE INSTALLATION PROGRAM (INSTALL)
        THE THREE PARTS OF ACE

        PART I:  ASTRONOMICAL EPHEMERIS (ACECALC)
             General Principles
             Options
                  The Sun
                  The Moon
                  The Planets
                  Eclipses
                  Astrophotography Exposures
                  Mean Sidereal Time and Julian Day
                  Precession of Coordinates
                  Phases of the Moon
                  Equinoxes and Solstices
                  Galilean Satellites of Jupiter
                  Perpetual Calendar
                  Polaris
                  DOS Shell
                  Exit

        PART II:  SOLAR SYSTEM DATA (ACESOLAR)

             General Principles
             Options
                  Orbital/Physical (Sun/Planets)
                  Orbital/Physical (Satellites)
                  Descriptive Data (Sun/Planets)
                  Observational Data (Sun/Planets)
                  Music Off/On
                  Exit

        PART III:  SKY CATALOG (ACECAT)

             General Principles
             Search Options
                  Catalog Number
                  Name
                  Starting R.A./Ending R.A.
                  Starting Declination/Ending Declination          
                  Object Type
                  Display Commentary
                  Hardcopy
             File Options
                  Full Catalog
                  Messier Catalog
                  Named Objects
                  Bright Stars


                                    Page 2





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                  Double Stars
             DOS Shell
             Exit

        APPENDIX A:  Input Error Messages

             Part I:    Astronomical Ephemeris
             Part III:  Sky Catalog

        APPENDIX B:  Known Problems and Limitations

        APPENDIX C:  Technical Information on Part I

             The Sun
             The Moon
             The Planets
             Eclipses
             Astrophotography Exposures
             Mean Sidereal Time and Julian Day
             Precession of Coordinates
             Phases of the Moon
             Equinoxes and Solstices
             Galilean Satellites of Jupiter
             Perpetual Calendar
             Polaris

        APPENDIX D:  Musical Selections Used in Part II

        APPENDIX E:  Information Displayed in Part III

             Atlas Catalog, Messier Catalog, Named Objects
             Bright Stars
             Double Stars

        APPENDIX F:  Acknowledgments

        APPENDIX G:  The User-Supported Software Concept

        APPENDIX H:  Limited License

        APPENDIX I:  How to Register Your Copy for Enhancements and 
                     Support















                                    Page 3





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                  INTRODUCTION
                                  ------------

        Welcome  to  the  AstroSoft Computerized Ephemeris,  or  ACE  for 
        short.  ACE  is  a  general-purpose  astronomy  software  package 
        consisting of three separate parts,  each supporting a variety of 
        astronomy-related applications for the IBM Personal Computer  and 
        true compatibles.  

        Part I of ACE (Astronomical Ephemeris) performs the most needed 
        astronomical  calculations,  involving  the sun,  the  moon,  the 
        planets, eclipses, astrophotography exposures, mean sidereal time 
        and Julian Day,  precession of coordinates,  phases of the  moon, 
        equinoxes   and  solstices,   Galilean  satellites  of   Jupiter, 
        perpetual  calendar,  and  Polaris.   It achieves an accuracy  in 
        calculations  that  is  comparable  to  those  contained  in  the 
        ASTRONOMICAL  ALMANAC and is more comprehensive  and  convenient, 
        for astronomical observing purposes, than the FLOPPY ALMANAC.

        Part II of ACE (Solar System Data) provides,  for all the planets 
        and satellites of the solar system, orbital and physical data, as 
        well as descriptive and observational data.

        Part III of ACE (Sky Catalog) provides data on over 2000 deep-sky 
        objects,  the  entire  Messier Catalog,  100 named  objects,  all 
        bright stars to magnitude 2.00,  and 100 prominent double  stars, 
        with detailed commentary on nearly 400 of these objects.  Objects 
        may  be  searched  for  on the basis of one  criterion  or  by  a 
        combination of criteria.

        Now,  to  tell  you a little about  ourselves.   AstroSoft  is  a 
        nonprofit,  tax-exempt  educational and scientific  organization, 
        which  includes  among  its activities the offering  of  software 
        intended  primarily for educational and scientific  institutions.  
        We   are   two  dedicated  amateur   astronomers   and   computer 
        professionals  (a software engineer and a senior systems analyst) 
        who devote our spare time to this effort.

        This  version of the AstroSoft Computerized Ephemeris  represents 
        its  first  public release,  and as such it  must  be  considered 
        somewhat  experimental;  it certainly is not a finished  product.  
        Improvements and enhancements will be made to the software,  bugs 
        will be fixed, and inconvenient features will be changed.

        We encourage you to participate in this process by relaying to us 
        your  comments,   criticisms,  and  suggestions.   We  especially 
        welcome  your  reports  of any  problems,  your  suggestions  for 
        improvements,  and  your recommendations  for  enhancements.   We 
        would  also like you to advise us of any errors you notice in the 
        datafiles  for Parts II and III.   We have made every  effort  to 
        proofread these files,  but undoubtedly a few errors have escaped 
        our notice.

        Finally, we ask that you respect the generosity of those generous 
        publishers  (acknowledged  in Appendix F) who  have  given  their 


                                    Page 4





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        permission   to  include  certain   copyrighted   materials,   by 
        refraining  from  using,  copying,  or  distributing any  of  the 
        datafiles  or  any  other individual files apart from  the  whole 
        software package, in accordance with the legal limitations of the 
        Limited License.

        We  are  pleased  to  offer to you what we believe  is  the  most 
        comprehensive  astronomy  package currently  available  from  any 
        source,  and  we are planning new releases to make ACE even  more 
        comprehensive and useful.



                                        Jerry Gardner
                                        Martin Morrison

                                        AstroSoft, Inc.
                                        Post Office Box 4451
                                        Hayward, CA 94540-4451






































                                    Page 5





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                            CONFIGURATIONS SUPPORTED
                            ------------------------

        ACE   runs on any IBM Personal Computer (PC,  XT,  or AT) or true 
        compatible with the following minimum configuration: 

             128 kilobytes of Random Access Memory (RAM)
             1 double-sided floppy diskette drive
             Monochrome monitor with monochrome display adapter (MDA)
              or color monitor with color graphics adapter (CGA)
             PC-DOS version 2.10 or above
             Epson FX-80-compatible Parallel Printer

        ACE may run on other configurations of IBM Personal Computers and 
        compatibles,  but  we have not tested it thoroughly on any  other 
        configurations.  

        A  special version of ACECALC is available for those systems with 
        a Mathematics Co-Processor.   For further information about  this 
        special version, you are invited to write to AstroSoft, Inc.





































                                    Page 6





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                GETTING HARDCOPY
                                ----------------

        With  a few exceptions,  the ACE displays do not have a  specific 
        print  option.   If you wish to print a screen to the printer you 
        designated  during the ACE installation process,  use one of  the 
        shift  keys in combination with the PrtSc  key.   Those  displays 
        that   have   specific  print  options  are  mentioned  in   this 
        documentation at the appropriate point.
















































                                    Page 7





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                THE ACE DISKETTES
                                -----------------

        ACE is distributed on two double-sided,  double-density diskettes 
        as follows:

             Volume ACE1

             ACECALC  000   Overlay file (ACECALC)
             ACECALC  COM   The Astronomical Ephemeris Program
             ACESOLAR EXE   The Solar System Data Program
             ASPECT   DAT   Planetary observational data (ACESOLAR)
             DESCRIP  DAT   Planetary descriptive data (ACESOLAR)
             HELP     TXT   Help screens (ACECALC)
             INSTALL  COM   The Installation Program
             PLAINF   DAT   Orbital/physical of planetary data (ACESOLAR)
             SATINF   DAT   Orbital/physical satellite data (ACESOLAR)
             SITE     DAT   User's Site Descriptor File 
             SUBMOD   CHN   Overlay file (ACECALC)
             ACE      DOC   The ACE User's Manual (this file)

             Volume ACE2

             ACECAT   COM   The Sky Catalog Program (ACECAT)
             DBLCAT   DAT   Double-star catalog (ACECAT)
             DBLCOM   DAT   Double-star commentary (ACECAT)
             DBLCOM   NDX   Double-star commentary index (ACECAT)
             DEEPCAT  DAT   Deep-sky catalog (ACECAT)
             DEEPCOM  DAT   Deep-sky commentary (ACECAT)
             DEEPCOM  NDX   Deep-sky commentary index (ACECAT)
             DEEPMES  DAT   Messier catalog (ACECAT)
             DEEPNAM  DAT   Named objects catalog (ACECAT)
             HELP2    TXT   Help screens (ACECAT)
             README         Information about ACE
             SITE     DAT   User's Site Descriptor File (ACECAT)
             STARCAT  DAT   Bright-star catalog (ACECAT)
             STARCOM  DAT   Bright-star commentary (ACECAT)
             STARCOM  NDX   Bright-star commentary index (ACECAT)



















                                    Page 8





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                          THE ACE INSTALLATION PROGRAM
                                    (INSTALL)
                          ----------------------------

        Before  you  begin  using  ACE,  you must  install  it  for  your 
        particular  observing  site  and computer equipment  by  entering 
        INSTALL  at the DOS prompt and responding to the  questions.   Be 
        sure that the current drive/directory contain the INSTALL program 
        and the Site Descriptor File (SITE.DAT).

        The Site Descriptor File,  when installed, contains the following 
        information  on  your  observing  site  and  computer  equipment:  
        longitude, latitude, time zone name, time zone, availability of a 
        printer, number of columns on printer, and installation name.

        Once  you have installed ACE for your particular observing  site, 
        the  Site Descriptor File is customized for your observing  site.  
        You  do not have to install ACE again,  unless you wish to change 
        your  local  time from standard time to daylight-saving  time  or 
        vice  versa.   ACE assumes that your system clock is set  to  the 
        local time you enter.

        If  your system uses only a floppy diskette drive(s),  after  you 
        install (or reinstall) the Site Descriptor File, you must use the 
        DOS  COPY command to copy the SITE.DAT file from volume  ACE1  to 
        volume  ACE2,  as  the programs on ACE2 must also have access  to 
        this  file.   If your system uses a hard disk drive and you  copy 
        both  volumes ACE1 and ACE2 to one directory,  this procedure  is 
        not applicable.

        Detailed help on the installation process is provided within  the 
        program itself.

























                                    Page 9





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                             THE THREE PARTS OF ACE
                             ----------------------

        Each  of ACE's three parts has its own menu.   To select  one  of 
        these  menus,  enter  the  name of the main program  at  the  DOS 
        prompt.  

        If your system uses only a floppy diskette drive(s), be sure that 
        the  current drive contains the main program you select  and  all 
        associated  files listed in "The ACE Diskettes" supra.   You must 
        leave  the  appropriate  volume in the current  drive  while  the 
        program is running, so that ACE may have continuous access to the 
        files.  

        If  your  system uses a hard disk drive,  you  should  copy  both 
        volumes  ACE1  and  ACE2 to one directory.   Be  sure  that  this 
        directory is the current directory whenever you use ACE.

        Part     Name                             Main Program     Volume
        ----     ----                             ------------     ------

        I        Astronomical Ephemeris           ACECALC          ACE1
        II       Solar System Data                ACESOLAR         ACE1
        III      Sky Catalog                      ACECAT           ACE2

        When you enter the program name at the DOS prompt,  ACE  displays 
        the  user-supported software screen,  the title screen,  and  the 
        menu for the part of ACE you selected.





























                                    Page 10





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                         PART I:  ASTRONOMICAL EPHEMERIS
                                    (ACECALC)
                         -------------------------------

        The  Part  I menu displays the Universal Time;  the  local  date, 
        time, and time-zone name; the Julian Day; the Local Mean Sidereal 
        Time;  and  the  installation name you designated during the  ACE 
        installation process.  The time displays are updated every second 
        and are accurate only to the degree that you set the system time.

        Use  the menu to select one of the options or an exit to the  DOS 
        level.  The options are: 

        The Sun                            Phases of the Moon
        The Moon                           Equinoxes and Solstices
        The Planets                        Galilean Satellites of Jupiter
        Eclipses                           Perpetual Calendar
        Astrophotography Exposures         Polaris
        Mean Sidereal Time and Julian Day  DOS Shell
        Precession of Coordinates          Exit           

        Use  the  Spacebar or the Arrow Keys to move the  shaded  bar  to 
        select an option;  then hit the Enter key.  ACE then displays the 
        screen  for the option you select have selected.   If at the menu 
        level you need a description of any of the options, hit the H key 
        for help.



                               General Principles
                               ------------------

        1.  ENTER  THE FULL YEAR.  Be sure to enter all the digits of the 
        year you choose.  For example,  if you intend 1985, enter "1985"; 
        the "19" is NOT assumed.  

        Enter years A.D.  without a sign or with a plus-sign  (+).  Enter 
        years B.C.  with a minus-sign (-).  If you enter the non-existent 
        year 0,  ACE displays an error message and allows you to  correct 
        your entry.

        2.  OBSERVE THE "WAIT" MESSAGE.  ACE displays a "WAIT" message in 
        the  upper right corner of the screen during  long  calculations. 
        Avoid hitting any keys while ACE displays this message.

        3.  HIT  THE ENTER KEY AT THE FIRST ENTRY FIELD TO RETURN TO  THE 
        MENU.   Return  to  the  menu by hitting the Enter key  when  the 
        cursor is positioned at the first entry field.  

        4.  YOU  DON'T HAVE TO LINE UP ENTRIES UNDER THE FIELD  HEADINGS. 
        Just  leave  at  least one space between each  field,  enter  the 
        fields in the order indicated in the headings,  and hit the Enter 
        key  after the last field.   ACE  allocates your entries  to  the 
        appropriate field for you.  



                                    Page 11





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        5.   USE DEFAULTS TO SPEED ENTRIES.  For most options, ACE stores 
        the  values  you entered for the previous  set  of  calculations.  
        When  you  enter a new set,  you need only enter values  (in  the 
        order of the headings) up to the point when the rest are the same 
        as  in  the  previous  set.   Then hit the  Enter  key,  and  ACE 
        automatically  supplies the previous values for the rest  of  the 
        fields.  

        6.   YOU DON'T HAVE TO WORRY ABOUT CASE.  ACE doesn't check input 
        for  case.   Therefore,  you are allowed to make entries  in  any 
        combination  of uppercase and lowercase characters.  For example, 
        "MARS", "mars", or "Mars" are equivalent.  

        7.  NAMES OF PLANETS MAY BE ABBREVIATED.  When you enter the name 
        of  a  planet,  you  need  only  enter  enough  of  the  name  to 
        distinguish  it from the name of any other planet.  For  example, 
        "Me" is sufficient to distinguish Mercury from Mars.

        8.  CTRL/R MAY BE USED TO RETRIEVE THE PREVIOUS ENTRY.   When ACE 
        returns  the cursor to the entry area after displaying one set of 
        calculations under an option,  you may hit Ctrl/R to retrieve the 
        entry  you previously made.   You may then edit the entry  and/or 
        hit Enter. 

        9. DO NOT USE THE NUMERIC KEYPAD FOR ENTRY.  To enable use of the 
        arrow  keys  in  the menu,  the numeric keypad  is  disabled  for 
        numeric  entry.   Use of the numeric keypad   generates  spurious 
        characters.



                                     Options
                                     -------

        The Sun
        -------

        Use  this option to find,  for the date and time you  enter,  the 
        sun's  position (right ascension and declination),  altitude  and 
        azimuth,  nutation in longitude and obliquity,  times of  sunrise 
        and  sunset,  and  times of beginning and ending of  morning  and 
        evening  astronomical  twilight (the time when the upper limb  of 
        the sun is 18 degrees below the true horizon).

        Example entry format:

                          Month Day Year   Hrs Min Sec
                          1     1   1986   12  0   0



        The Moon
        -------- 

        Use  this option to find,  for the date and time you  enter,  the 


                                    Page 12





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        moon's  position (right ascension and declination),  altitude and 
        azimuth, horizontal parallax (the angle subtended by the earth as 
        seen  from the moon),  distance from  the  earth,  semi-diameter, 
        illuminated fraction, and times of moonrise and moonset.

        Example entry format:

                          Month Day Year   Hrs Min Sec
                          1     1   1986   12  0   0



        The Planets
        -----------

        Use  this  option to find,  for the date,  time,  and planet  you 
        enter,  the position (right ascension and declination),  altitude 
        and azimuth,  distance from the earth, elongation, semi-diameter, 
        illuminated  fraction,  and  times  of  rising  and  setting  (in 
        chronological order).  At this time, if you enter "Pluto," ACE 
        displays an error message.

        Example entry format:

                      Month Day Year   Hrs Min Sec   Planet
                      1     1   1986   0   0   0     Mars



        Eclipses
        --------

        Use  this option to list,  for the month or year you  enter,  the 
        circumstances  of any solar  and lunar eclipses visible from  any 
        location.   After  you  enter  a month and  year,  you  may  list 
        eclipses  for that month/year combination by entering "M" or  for 
        that  entire year by entering "Y."  For each eclipse,  ACE  lists 
        the UT date and time of the eclipse, the type of eclipse, and the 
        magnitude.   For total lunar eclipses,  ACE lists a more complete 
        list of timings comprising beginning of partial phase,  beginning 
        of total phase,  maximum eclipse,  end of total phase, and end of 
        partial phase.

        The possible types of solar eclipses are total, annular, annular-
        total,  and  partial.  The  types of lunar  eclipses  are  total, 
        partial (umbral), and penumbral.

        Example entry format: 

                      Month   Year   List [(M)onth, (Y)ear]
                      1       1986   Y






                                    Page 13





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        Astrophotography Exposures
        --------------------------

        Use  this  option to calculate,  for the information  you  enter, 
        exposure  times  and image sizes needed in  lunar  and  planetary 
        photography. You may obtain the values for object diameter (twice 
        the  semi-diameter)  and phase (illuminated fraction)  from  "The 
        Moon"  or  "The  Planets" options.   At  this  time,  a  planet's 
        magnitude  and  phase  must be obtained from a current  issue  of 
        ASTRONOMY or SKY & TELESCOPE.

        After displaying the result of the calculations,  ACE  redisplays 
        the  values  you entered for that set of calculations except  for 
        the  first field,  which is blank.   After you enter a value  for 
        this field, the cursor moves to the next field, erasing the value 
        that  was displayed there previously.  At this point you may  hit 
        the  Enter key to accept the value previously displayed for  that 
        field or enter a new value. The same process is then repeated for 
        each  subsequent field.   Be sure to check the value of the  next 
        field  before  you  hit the Enter key to remind yourself  of  its 
        previous value.  

        Example entry format:

                                Object Name: Mars
                             Objective Diameter: 200
                   Focal Length (same units as diameter): 2000
                              Film Speed (ISO): 100
                         Object Diameter (" of arc): 30
                                 Magnitude: -2.5
                                Phase (0-1): 0.95
                        Filter Factor (1 = no filter): 1



        Mean Sidereal Time and Julian Day
        ---------------------------------

        Use this option to find, for the date, time, right ascension, and 
        declination  you enter,  the Universal Time,  Julian Day  Number, 
        Greenwich  Mean  Sidereal Time,  Local Mean Sidereal  Time,  hour 
        angle,  altitude,  azimuth,  airmass  (the ratio  of  atmospheric 
        interference  looking  toward  the  object as  compared  to  that 
        looking  toward the zenith,  on a scale of 1  to  infinity,  with 
        "***" indicating an object below the horizon),  rise, and set.  A 
        message  will be displayed if the object is circumpolar from your 
        observing site.

        Example entry format:

                                        Right Ascension   Declination
          Month Day Year   Hrs Min Sec    Hrs Min Sec     Deg Min Sec
          1     1   1986   20  0   0      0  40   0       41  40  0

         


                                    Page 14





             AstroSoft Computerized Ephemeris (ACE), Version 1.00



        Precession of Coordinates
        -------------------------

        Use  this option to precess forward or backward,  for the  epochs 
        you  enter,  the coordinates of an object.

        Example entry format:

                              From What Epoch? 1950
                               To What Epoch? 2000

                          Right Ascension   Declination
                            Hrs Min Sec     Deg Min Sec
                            0   40  0       41  40  0



        Phases of the Moon
        ------------------

        Use  this option to find,  for the month and year you enter,  the 
        dates and times of each phase of the moon.   

        Example entry format:

                                  Month   Year
                                  1       1986



        Equinoxes and Solstices
        -----------------------

        Use this option to find, for the year you enter, the UT dates and 
        times of the beginnings of the four seasons of the year.  

        Example entry format:

                                      Year
                                      1986



        Galilean Satellites of Jupiter
        -------------------------------

        Use this option to plot graphically the relative positions of the 
        four  Galilean satellites of Jupiter.  The display starts at  the 
        date and time entered. Each subsequent display, updated at a rate 
        set  by  your computer's speed (about one  display  per  second), 
        shows  to scale the satellites' positions relative to the  x-axis 
        for  the  update interval you  enter.   For  example,  an  update 
        interval of "60" displays the positions as they would appear each 
        hour.   An update interval of "0" displays the positions for only 


                                    Page 15





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        the date and time entered.

        Example entry format:

            Month Day Year   Hrs Min Sec   Update Interval (Minutes)
            1     1   1986   21  0   0     60



        Perpetual Calendar
        ------------------

        Use  this  option  to display,  for the month  and  year  in  the 
        Gregorian  calendar you enter,  the calendar for that month.  You 
        may  optionally request  a  printout  of  the  calendar   on  the 
        printer you designated during the ACE installation process.

        Example entry format:

                          Month   Year   Hardcopy[Y/N]
                          1       1986   N



        Polaris
        -------

        Use   this  option  to find,  for the month,  day,  and year  you 
        enter, the times of the culminations and elongations of Polaris. 

        Example entry format:

                               Month   Day   Year
                               1       1     1986



        DOS Shell
        ---------

        Use this option to execute DOS commands without leaving ACE.   To 
        return to ACE, type "EXIT" at the DOS prompt.



        Exit
        ----

        Use this option when you want to exit from the menu and return to 
        the DOS prompt.







                                    Page 16





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                           PART II:  SOLAR SYSTEM DATA
                                   (ACESOLAR)
                           ---------------------------

        The  Part  II  menu displays the local  date  and  time,  updated 
        approximately  every second and accurate only to the degree  that 
        you set the system time.

        Use  the menu to select one of the options or an exit to the  DOS 
        level.  The options are: 

        Orbital/Physical (Sun/Planets)     Observational Data (Sun/Planets)
        Orbital/Physical (Satellites)      Music Off/On
        Descriptive Data (Sun/Planets)     Exit

        Use the Spacebar to move the shaded bar to select an option; then 
        hit  the Enter key.  ACE then displays the screen for the  option 
        you have selected.



                               General Principles
                               ------------------

        1.  OBSERVE THE "WAIT" MESSAGE.  ACE displays a "WAIT" message in 
        the  upper  right corner of the screen while  loading  datafiles.  
        Avoid hitting any keys while ACE displays this message.




                                     Options
                                     -------

        Orbital/Physical (Sun/Planets)
        ------------------------------

        Use  this option to display,  for the sun or a planet you select, 
        the following orbital and physical data for the object:

             Sun or planet                                             
             Mean distance from sun (AU)                               
             Mean distance from sun (x 10^6 km)                        
             Sidereal period of revolution (y)                         
             Synodic period of revolution (d)                          
             Orbital period of revolution (y)                         
             Synodic period of revolution (d)                          
             Orbital eccentricity                                      
             Inclination of orbital plane relative to ecliptic (deg)   
             Longitude of node (deg)                                   
             Equatorial diameter (km)                                  
             Oblateness                                                
             Mass (1 earth unit = 5.977 x 10^24 kg)                    
             Mean density (g/cm^3)                                     
             Surface gravity at pole (1 earth unit = 9.8 m/s^2)        


                                    Page 17





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


             Rotation period (d)                                       
             Escape speed at pole (km/s)                               
             Inclination of equator to orbit (deg)                     
             Albedo                                                    
             Number of confirmed satellites                            

        While the data are displayed, ACE plays a short musical selection 
        appropriate  to  the  sun  or planet you have  selected  (if  the 
        current  music state is on).   After ACE has displayed the  data, 
        hit the Enter key to return to the Sun/Planets Menu.



        Orbital/Physical (Satellites)
        -----------------------------

        Use this option to display,  for the sun or a planet you  select, 
        the   following  orbital  and  physical  data  for  the  object's 
        satellites:

             Sun or planet name                            
             Name of satellite                             
             Number of satellite                           
             Diameter (km)                                 
             Mass (x 10^20 kg)                             
             Density (Mg/m^3)                              
             Mean distance from planet (x10^3 km)          
             Mean distance from planet (sec)               
             Revolutionary period (d)                      
             Eccentricity                                  
             Orbital inclination (deg)                     
             Apparent visual magnitude                     
             Visual albedo                                 
             Discoverer                                      
             Year discovered                               

        While the data are displayed, ACE plays a short musical selection 
        appropriate  to  the  sun or planet you  have  selected  (if  the 
        current music state is on).  After ACE has displayed the data for 
        the first satellite,  hit the Enter key for the next listing.  If 
        the  listing  just  displayed is the last for the sun  or  planet 
        selected,  ACE  displays an appropriate message and automatically 
        returns to the Sun/Planets Menu.



        Descriptive Data (Sun/Planets)
        ------------------------------

        Use  this option to display,  for the sun or a planet you select, 
        general descriptive data for the object.

        While the data are displayed, ACE plays a short musical selection 
        appropriate  to  the  sun or planet you  have  selected  (if  the 
        current  music state is on).   After ACE has displayed the  data, 


                                    Page 18





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        hit the Enter key to return to the Sun/Planets Menu.



        Observational Data (Sun/Planets)
        --------------------------------

        Use this option to display,  for the sun or a planet you  select, 
        observational  data  for viewing the object with the  naked  eye, 
        binoculars, and telescopes.

        While the data are displayed, ACE plays a short musical selection 
        appropriate  to  the  sun  or planet you have  selected  (if  the 
        current  music state is on).   After ACE has displayed the  data, 
        hit the Enter key to return to the Sun/Planets Menu.



        Music Off/On
        ------------

        This   option   displays  the  current  state  of   the   musical 
        accompaniment,  off or on.   (When ACE is first run, the state is 
        set to on.)  If you enter "Y" at the "Change?" prompt,  the state 
        will be changed to the opposite state,  and the new state will be 
        displayed before ACE returns to the Solar System Data  Menu.   If 
        you enter anything but "Y," the state will not be changed.



        Exit
        ----

        Use this option when you want to exit from the menu and return to 
        the DOS prompt.






















                                    Page 19





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                             PART III:  SKY CATALOG
                                    (ACECAT)
                             ----------------------

        The  Part III menu displays the Universal Time;  the local  date, 
        time, and time-zone name; the Julian Day; the Local Mean Sidereal 
        Time;  and  the  installation name you designated during the  ACE 
        installation process.  The time displays are updated every second 
        and are accurate only to the degree that you set the system time.

        Use  the menu to select one of the options or an exit to the  DOS 
        level.  The options are:

                                        Search Options
                                        File Options
                                        DOS Shell
                                        Exit

        Use  the  Spacebar  or the Arrow Keys to move the shaded  bar  to 
        select an option;  then hit the Enter key.  ACE then displays the 
        screen for the option you select have selected.   If at the  menu 
        level you need a description of any of the options, hit the H key 
        for help.



                               General Principles
                               ------------------

        1.  OBSERVE THE "WORKING..." MESSAGE. ACE displays a "Working..." 
        message at the bottom of the screen during file searches.   Avoid 
        hitting  any keys while ACE displays this message.   If you  must 
        exit while the "Working..." message is still being displayed, you 
        may exit to the menu by hitting the Esc key.



                                 Search Options
                                 --------------

        Use   this   option  to  search  for  objects in  the  currently-
        selected  file  option.

        A  series  of search options for the currently-selected  file  is 
        displayed,  one by one.  To restrict the search within the option 
        currently being displayed, you make an appropriate entry for that 
        option.   If  you do not wish to restrict the search  within  the 
        option  currently  being displayed,  hit the Enter  key,  and  no 
        object is excluded on the basis of its value for that option.

        If you enter a unique value for an option (e.g., a catalog number 
        or an object name),  ACE dispenses with displaying further search 
        options.   To  search for all objects in  the  currently-selected 
        file,  hit  the Enter key after every search option.



                                    Page 20





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        You  thus have the ability to perform simple or complex  searches 
        by  restricting  your  search  within  one  option  or  within  a 
        combination of options. For example, you may restrict your search 
        by  type (e.g.,  planetary nebulae) or by a combination of  type, 
        right ascension,  and declination (e.g.,  planetary nebulae  from 
        12-13 hours right ascension and 35-40 degrees declination).

        If  a search generates a list of more than sixteen  objects,  the 
        "<Pause> Hit any key to continue or the Esc key to abort" message 
        is displayed.   To see more,  hit any key.   This message appears 
        after each group of sixteen objects and after the last object.

        If  you wish to abort a search,  hit the Esc key to  display  the 
        "* Aborted * Hit any key to continue" message.   Then hit any key 
        to return to the menu.  

        If  no  object  meets  the  search  criteria  you  entered,   the 
        "Object(s)  not  found" message  appears,  and ACE  automatically 
        returns to the menu.

        The search options are:



        Catalog Number
        --------------

        In response to the Catalog Number option, hit Enter to default to 
        all  catalog  numbers,  or enter the catalog number of an  object 
        with a letter prefix indicating the catalog source.  See Appendix 
        E  under  "Cat  #" for a list of letter prefixes for  each  file.  
        Messier Catalog numbers with an "M" prefix may also be entered at 
        the Catalog Number option.   Any blanks in the entry are ignored, 
        but  upper case and lower case are distinguished (i.e.,  "M"  for 
        Messier and "m" for Melcotte).



        Name
        ----

        In  response  to  the Name option,  hit Enter to default  to  all 
        common  names,  or enter the common name (Full  Catalog,  Messier 
        Catalog,  and  Named  Objects files)  or  Bayer  letter/Flamsteed 
        number  (Bright Stars and Double Stars files) of an object.   ACE 
        matches  the name you enter with any entry containing that  name.  
        For example,  the entry "Dumbbell" matches both "Dumbbell"  (M27) 
        and "Little Dumbbell" (M76).



        Constellation
        -------------

        In response to the Constellation option,  hit Enter to default to 


                                    Page 21





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        all  constellations,  or  enter  the constellation  name  by  its 
        International Astronomical Union (IAU) three-letter abbreviation.  
        You  may also spell the name of the constellation out,  in  which 
        case you need include only the first three or more letters of the 
        constellation's  name that identify it uniquely.   If you do  not 
        spell the name sufficiently to identify it uniquely, ACE uses the 
        first  constellation name in alphabetical order that matches  the 
        entry.   

        For example, to enter the constellation Aquila, you may enter its 
        abbreviation  "AQL,"  or you may spell out  "AQUI,"  "AQUIL,"  or 
        "AQUILA,"  all of which identify the constellation uniquely.   If 
        you  spell  out  only "AQU,"  ACE   uses  Aquarius,  as  Aquarius 
        precedes Aquila alphabetically.

        ACE doesn't check constellation entries for case.  Therefore, you 
        are  allowed to make entries in any combination of uppercase  and 
        lowercase  characters.  For example,  "AQL," "aql," and "Aql" are 
        equivalent.



        Right Ascension
        ---------------

        In response to the Starting R.A./Ending R.A. option, hit Enter to 
        default to all right ascensions (00.0000 to 23.5959),  or enter a 
        Starting  R.A.  and an Ending R.A.,  leaving only a space between 
        the two.  

        Right ascension is entered in the form HH.MMSS,  where HH are the 
        hours (the leading zero may be omitted),  MM are the minutes, and 
        SS are the seconds.   SS or MMSS may be omitted;  however, if you 
        do include MM or MMSS, you must not omit any leading zeroes.  

        If you enter a Starting R.A.  greater than or equal to the Ending 
        R.A.,  ACE displays an error message and gives you an opportunity 
        to re-enter the information.   If you enter only a Starting R.A., 
        ACE defaults to all right ascensions.  



        Declination
        -----------

        In  response  to  the  Starting  Declination/Ending   Declination 
        option,  hit  Enter  to default to all declinations (-90.0000  to 
        90.0000),   or  enter  a  Starting  Declination  and  an   Ending 
        Declination, leaving only a space between the two.  

        Declination  is  entered in the form DD.MMSS,  where DD  are  the 
        degrees  (the leading zero may be omitted),  MM are the  minutes, 
        and SS are the seconds.   SS or MMSS may be omitted;  however, if 
        you do include MM or MMSS,  you must not omit any leading zeroes.  



                                    Page 22





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        If you enter a Starting Declination greater than or equal to  the 
        Ending  Declination,  ACE displays an error message and gives you 
        an opportunity to re-enter the information.   If you enter only a 
        Starting Declination, ACE defaults to all declinations.



        Object Type
        -----------

        In  response to the Object Type option,  hit Enter to default  to 
        all object types,  or enter the object type (see Appendix E under 
        "Typ" for a list of entry values for each file).
             
        External  galaxies  (analgalactic  nebulae) may  be  selected  as 
        object  type  "GLX" or according to their  Hubble  Classification 
        (e.g.,  "Sb"),  when upper case and lower case are  distinguished 
        "SB," e.g., is different from "Sb.").



        Display Commentary
        ------------------

        In response to the Display Commentary option, hit Enter (or enter 
        "N")  to skip display of any available commentary on the  objects 
        displayed  as  a result of the search,  or enter "Y"  to  display 
        commentary for any or all of the objects.  If you enter any other 
        response, ACE will reprompt.

        If  you  enter  "Y," any objects located during  the  search  are 
        displayed in the usual manner.  After all these objects have been 
        displayed and you hit any key in response to the "<Pause> Hit any 
        key  to  continue"  message,  ACE  displays  a  screen  like  the 
        following:

        Next Object is M13
        Hit ENTER to view commentary
        Hit SPACEBAR to skip to next object
        Hit ESC to return to menu

        To view commentary for the Next Object listed, hit the Enter key.  
        To skip to the next object,  hit the Spacebar.   To return to the 
        menu, hit the Esc key.  After you hit the Enter key, Spacebar, or 
        Esc  key,  the  "<Pause>  Hit  any key to  continue"  message  is 
        displayed.  Then hit any key to proceed to your selection.



        Hardcopy
        --------

        In  response to the Hardcopy option,  hit Enter (or enter "N") if 
        you do not wish a hardcopy of the object listings and  commentary 
        on the objects displayed as a result of the search,  or enter "Y" 


                                    Page 23





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        to print a hardcopy.   If you enter any other response,  ACE will 
        reprompt.

        If  you  enter  "Y,"  a  hardcopy  of  any  object  listings  and 
        commentary   displayed  on  your  screen  during  the  search  is 
        simultaneously  printed on the printer you designated during  the 
        ACE  installation process.   If your installed printer is not  on 
        line,  DOS  will  display the "Write fault error writing  device" 
        message.   At  this  point you may put your printer on  line  and 
        enter "R," and DOS will proceed to print.



                                  File Options
                                  ------------

        Use   this   option  to select the file to be used  in  searches.  

        When  you  enter  the Part III menu,  ACE defaults  to  the  Full 
        Catalog File Option.   Before entering your Search  Options,  you 
        may select one of the other file options.   The option you select 
        is  used for subsequent searches until you select another  option 
        or  until  you select Exit from the menu.  

        To  select a file option,  use the Spacebar or the Arrow Keys  to 
        move  the shaded bar to the option of your choice;  then hit  the 
        Enter key.  ACE returns automatically to the menu.

        The file options are:



        Full Catalog
        ------------

        This  is a file of over 2000 deep-sky objects,  including all 110 
        of  the  Messier  Catalog objects and  all  J.L.E.  Dreyer's  NEW 
        GENERAL  CATALOG and INDEX CATALOG objects as listed  in  Antonin 
        Becvar's ATLAS COELI 1950.0.   Searches of this file are longest; 
        searches of the other files take considerably less time.



        Messier Catalog
        ---------------

        This file contains the 110 Messier Catalog objects.



        Named Objects
        -------------

        This  file contains about 100 objects having common names,  e.g., 
        "Ring" and "Owl."


                                    Page 24





             AstroSoft Computerized Ephemeris (ACE), Version 1.00





        Bright Stars
        ------------

        This file contains data for about 50 bright stars, comprising all 
        stars with magnitudes less than 2.00.



        Double Stars
        ------------

        This file contains data for about 100 prominent double stars.



                                    DOS Shell
                                    ---------

        Use this option to execute DOS commands without leaving ACE.   To 
        return to ACE, type "EXIT" at the DOS prompt.



                                      Exit
                                      ----

        Use this option when you want to exit from the menu and return to 
        the DOS prompt.


























                                    Page 25





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX A
                                   ----------

                              Input Error Messages
                              --------------------



                         Part I:  Astronomical Ephemeris
                         -------------------------------

        Text of Message                                Action to Take
        ---------------                                --------------  

        Non-numeric input or number out of range       Re-enter numerics
        Month must be 1 to 12                          Re-enter month
        Day must be 1 to 31                            Re-enter day
        Year cannot be 0                               Re-enter year
        Hrs must be 0 to 23                            Re-enter hours
        Min must be 0 to 59                            Re-enter minutes
        Sec must be 0 to 59                            Re-enter seconds
        Ra Hrs must be 0 to 23                         Re-enter Ra
        Ra Min must be 0 to 59                            "      " 
        Ra Sec must be 0 to 59                            "      "
        Dec Deg must be -90 to 90                      Re-enter Dec
        Dec Min must be 0 to 59                           "      "
        Dec Sec must be 0 to 59                           "      "
        Object must be a planet or the moon            Re-enter object 
        Objective diameter must be greater than 0      Re-enter diameter
        Focal length must be greater than 0            Re-enter F.L.
        Film speed must be greater than 0              Re-enter speed
        Object diameter must be greater than 0         Re-enter diameter
        Phase must be between 0 and 1                  Re-enter phase
        Filter factor must be 1 or greater             Re-enter factor
        Range must be (M)onth or (Y)ear                Select M or Y
        Year out of range. Sorry, try again            Try different year
        Illegal argument for Arc Cosine                Report this error 
        Illegal argument for Arc Sine                  Report this error 
        Possible inaccuracy in calculation             Ignore (a warning)
        Year must not be 0                             Re-enter year
        Object must be a planet, except Earth or Pluto Re-enter planet
        Please respond Y or N                          Answer Y or N




                             Part III:  Sky Catalog
                             ----------------------

        Text of Message                                Action to Take
        ---------------                                --------------

        Non-numeric input or number out of range       Re-enter number
        Right Ascension must be 0.0 to 23.59           Re-enter Ra
        Declination must be -90.0 to 90.0              Re-enter Dec


                                    Page 26





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        No such constellation name or abbreviation     Re-enter name
        Insufficient input                             Be more specific
        Ambiguous or conflicting Ra limits             Correct Ra limits
        Ambiguous or conflicting Dec limits            Correct Dec limits





















































                                    Page 27





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX B
                                   ----------



                         Known Problems and Limitations
                         ------------------------------



        1.  On  exit from Parts I and III of ACE,  the cursor may  remain 
        yellow.  Use  the DOS command CLS to clear the screen and  return 
        the cursor to white.

        This problem occurs because of the default color in Turbo  Pascal 
        and may be corrected in future releases.









































                                    Page 28





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX C
                                   ----------



                         Technical Information on Part I
                         -------------------------------

        The  U.S.  Naval  Observatory uses large mainframe  computers  to 
        calculate  the  ASTRONOMICAL  ALMANAC and adjusts  its  ephemeris 
        formulae  each year.  These  calculations are quite  lengthy  and 
        consume many hours of computer time.  Hence, such accuracy cannot 
        be expected from a microcomputer at reasonable computation times. 

        Nevertheless,  Part  I  (Astronomical Ephemeris)  approaches  the 
        accuracy of the ASTRONOMICAL ALMANAC to an extent that we believe 
        is more than sufficient for even advanced astronomical use.

        We  intend  to  improve the accuracy of Part I  even  further  in 
        future  releases.   Therefore,  if  you  find a  case  where  ACE 
        generates a result that is significantly in error,  please report 
        the  details  to  AstroSoft so that we may correct  any  possible 
        problems.  

        A  brief technical description of the assumptions underlying  the 
        calculations performed in Part I follows.



        The Sun
        -------

        The accuracy of the computed right ascension and declination is 1 
        second of arc.   The accuracy of sunrise,  sunset,  and  twilight 
        times is approximately plus or minus two minutes.  A value of 34' 
        of  arc is used for refraction corrections at the horizon,  and a 
        value  of 16' of arc is used for the solar semi-diameter  at  the 
        time  of rising and setting.   All computations are performed  in 
        ephemeris time.



        The Moon
        --------

        The accuracy of the calculations is better than one minute of arc 
        in  both  right  ascension and declination.     The  accuracy  of 
        moonrise  and  moonset times is approximately plus or minus  five 
        minutes. A value of 34' of arc is used for refraction corrections 
        at  the  horizon,  and  the actual computed value  of  the  semi-
        diameter  at the time of rising and setting is used.  The  rising 
        and setting times are corrected for parallax.   All  computations 
        are performed in ephemeris time.




                                    Page 29





             AstroSoft Computerized Ephemeris (ACE), Version 1.00



        The Planets
        -----------

        Planetary  positions  may have a maximum error  of  approximately 
        plus or minus 1 minute of arc. In practice, most of the planetary 
        calculations  are much more accurate than this.  The accuracy  of 
        the   rising and setting times is approximately plus or minus two 
        minutes.   No  correction  for  semi-diameter  is  used  in   the 
        computation of the rising and setting times. All computations are 
        performed in ephemeris time.



        Eclipses
        --------

        No attempt is made to calculate the local circumstances of  solar 
        eclipses.  The  computed times are accurate to approximately five 
        minutes.



        Astrophotography Exposures
        --------------------------

        In   general,   the   exposure  times  given  are   accurate   to 
        approximately 15 percent.  To allow for unpredictable conditions, 
        the exposure times should be bracketed.



        Mean Sidereal Time and Julian Day
        ---------------------------------

        The computed sidereal time is accurate to 0.5 second.  The Julian 
        day  number is accurate to four decimal places.  The  rising  and 
        setting  times  have  been  corrected  for  refraction,  but  not 
        for  parallax and semi-diameter.  The airmass is proportional  to 
        the object's zenith distance. Airmass of any object is 1.0 at the 
        zenith, and infinity at the horizon.



        Precession of Coordinates
        -------------------------

        The  precession is calculated according to a  rigorous  algorithm 
        developed  by Simon Newcomb that is valid for a limited time  (at 
        least several hundred years in the past and future).  







                                    Page 30





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


        Phases of the Moon
        ------------------

        The  calculated times of lunar phases may be in error by up to  2 
        minutes.



        Equinoxes and Solstices
        -----------------------

        The calculated times of the seasons are accurate to approximately  
        ten minutes.  



        Galilean Satellites of Jupiter
        ------------------------------

        No  attempt  is  made to display the relative  positions  of  the 
        satellites in the Y-coordinate plane. The accuracy of the display 
        is  limited  by the low resolution of the display  (80  columns). 
        Eclipses and transits are not indicated.



        Perpetual Calendar
        ------------------

        The calendar is valid for any year between 32 000 B.C.  and  A.D. 
        32 000.



        Polaris
        -------

        The  times  of  the culminations and elongations of  Polaris  are 
        accurate to approximately 1 second.


















                                    Page 31





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX D
                                   ----------



                       Musical Selections Used in Part II
                       ----------------------------------

        Body      Composer                     Title
        ----      --------                     -----

        Sun       Edvard Grieg (1842-1907)     Peer Gynt Suite No. 1, Op.
                                                46:  Morning Mood
                                                (Allegretto pastorale)
        Mercury   Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  III. Mercury,
                                                the Winged Messenger
                                                (Vivace)
        Venus     Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  II. Venus, 
                                                the Bringer of Peace
                                                (Adagio)
        Earth     Claude Debussy (1862-1918)   Prelude a l'apres-midi 
                                                d'un faune 
                                                (Tres modere)
        Mars      Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  I. Mars,
                                                the Bringer of War
                                                (Allegro)
        Jupiter   Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  IV. Jupiter,
                                                the Bringer of Jollity
                                                (Allegro giacoso, 6
                                                measures after start)
        Saturn    Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  V. Saturn,
                                                the Bringer of Old Age
                                                (Adagio, poco animato, 3
                                                Measures after I)
        Uranus    Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  VI. Uranus,
                                                the Magician 
                                                (Allegro, 9 measures 
                                                after V)
        Neptune   Gustav Holst (1874-1934)     The Planets, Op. 32
                                                (1914-16):  VII. Neptune
                                                the Mystic
                                                (Andante)
        Pluto     Hector Berlioz (1803-1869)   Symphonie Fantastique 
                                                (1830):  V. Songe d'une
                                                Nuit de Sabbat:  Dies 
                                                Irae
                                                (Lontano)




                                    Page 32





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX E
                                   ----------



                        Information Displayed in Part III
                        ---------------------------------

        Information  displayed  in Part III is in one of  three  formats:  
        one  format  for the Full Catalog,  Messier  Catalog,  and  Named 
        Objects,  one format for the Bright Stars, and one format for the 
        Double Stars.



        Full Catalog, Messier Catalog, and Named Objects
        ------------------------------------------------

        *            Indicates  that  the  object  has  an  entry  in the 
                     corresponding commentary file
        Cat #        A  four-digit  catalog  number  with a letter prefix 
                     indicating the catalog source:
                          A = R.G. Aitken
                          B = Barnard
                          H = F.W. Herschel
                          I = J.L.E. Dreyer's INDEX CATALOG
                          J = W.S. Jacob
                          m = Melcotte
                          N = J.L.E. Dreyer's NEW GENERAL CATALOG
                          W = Winnecke
        M            Number in the Messier Catalog
        RA           Right Ascension  in hours and minutes,  to tenths of 
                     minutes  (most are for Epoch 1950.0;  a few are  for 
                     Epoch 1980.0)
        Dec          Declination in degrees and minutes of arc (most  are 
                     for Epoch 1950.0; a few are for Epoch 1980.0)
        Mag          Apparent   (integrated)   visual  magnitude  (a  "P"
                     suffix    indicates    an    apparent   [integrated]
                     photographic  magnitude,  where  an  apparent visual  
                     magnitude  is unavailable;  a "var" suffix indicates
                     variable)
        Typ          Object type:
                           DIF = bright diffuse nebulae
                           GCL = globular star clusters
                           OCL = galactic (open) star clusters
                           PLA = planetary nebulae
                      External galaxies (anagalactic nebulae)  are listed
                      by their Hubble Classification, but may be selected
                      as a group by an object type of "GLX":
                           E  = elliptical
                           I  = irregular
                           S  = spiral
                           SB = barred spiral
                           a  = early type (bright nucleus, arms less
                                developed


                                    Page 33





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                           b  = intermediate type (lesser nucleus, arms
                                fairly extended)
                           c  = late type (weak nucleus, arms very
                                conspicuous)
                           p  = peculiar
        Size          Apparent largest and smallest diameters
        Dis           Distance  in  parsecs  (pc),  except in kiloparsecs
                      (kpc) for globular clusters  and in distance moduli
                      for external galaxies.  Suffixes:
                           C = x 100
                           K = x 1000
        Con           International Astronomical Union (IAU) three-letter  
                      abbreviation for the constellation
        Name          Common name of the object



        Bright Stars
        ------------

        *            Indicates  that  the  object  has  an  entry  in the 
                     corresponding commentary file
        Cat #        A  five-digit  number  preceded  by  the  letter "B"
                     indicating the catalog source (Boss General Catalog)
        Sp           Spectral Classification (Harvard)
        RA           Right  Ascension  in hours and minutes, to tenths of 
                     minutes (for Epoch 1980.0)
        Dec          Declination  in  degrees  and  minutes  of  arc (for
                     Epoch 1980.0)
        Mag          Visual     magnitude    based    on    photoelectric 
                     observations,  with  a  few  exceptions,  which have
                     been   adjusted   to   match   the   yellow   color-
                     sensitivity  of  the  eye;  it is as likely  as  not
                     that  the  true  magnitude  is  within 0.03  of  the 
                     quoted  figure,  on  the average (variable stars are 
                     indicated with a "V")
        Typ          Object type:  STR (bright star)
        Name         Common name (Arabic, Greek, or Latin)
        Dis          Distance in parsecs (pc)
        Con          International  Astronomical Union (IAU) three-letter
                     abbreviation
        Greek Letter Bayer  letter (Greek or Roman letter)  or  Flamsteed 
                     number



        Double Stars
        ------------

        *            Indicates  that  the  object  has  an  entry  in the 
                     corresponding commentary file
        Cat #        A  five-digit  number  preceded  by  the  letter "B" 
                     indicating the catalog source (Boss General Catalog)
        Cls          Class
                          BIN = binary


                                    Page 34





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                          CPM = common proper motion
                          FIX = fixed
                          MUL = multiple
                          OPT = optical
                          QUA = quadruple
                          QUI = quintuple
                          TRI = triple
        RA           Right  Ascension  in hours and minutes, to tenths of 
                     minutes (for Epoch 1950.0)
        Dec          Declination  in  degrees  and  minutes  of  arc (for
                     Epoch 1950.0)
        RA           Right Ascension for Epoch 1950.0
        Dec          Declination for Epoch 1950.0
        Sep          Separation of widest components
        Typ          Object type:  DBL (double or multiple star)
        Mag          Visual magnitudes of widest components
        Ang          Position angle of widest components
        Con          International  Astronomical Union (IAU) three-letter
                     abbreviation
        Greek Letter Bayer  letter  (Greek  or Roman letter) or Flamsteed 
                     number




































                                    Page 35





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX F
                                   ----------



                                 Acknowledgments
                                 ---------------

        Excerpts from the following copyrighted materials are included by 
        permission  of  the  copyright  owner.    AstroSoft  extends  its 
        gratitude  to  these generous publishers,  who have thereby  made 
        important astronomical data available,  as part of this  package, 
        to  educational  and  scientific institutions,  as  well  as  the 
        amateur astronomical community and the general public.

        NONE  OF THE DATAFILES OR ANY OTHER INDIVIDUAL FILES FROM ACE  IS 
        TO BE USED,  COPIED, OR DISTRIBUTED APART FROM THE WHOLE SOFTWARE 
        PACKAGE,  IN ACCORDANCE WITH THE LIMITED LICENSE.  PLEASE RESPECT 
        THE  GENEROSITY  OF  THESE  PUBLISHERS BY  RESPECTING  THE  LEGAL 
        LIMITATIONS OF THE LIMITED LICENSE.

        Roy L. Bishop:  OBSERVER'S HANDBOOK 1987.  Copyright The Royal 
        Astronomical Society of Canada (Toronto).

        Walter Scott Houston:  50 CELESTIAL SPLENDORS TO VIEW, in Sky & 
        Telescope, January 1981, pages 23-28.  Copyright Sky Publishing 
        Corporation 1981 (Cambridge, Massachusetts).

        John H. Mallas and Evered Kreimer:  THE MESSIER ALBUM, First 
        Edition.  Copyright Sky Publishing Corporation 1978 (Cambridge, 
        Massachusetts).

        James Mullaney and Wallace McCall:  THE FINEST DEEP-SKY OBJECTS.  
        Copyright Sky Publishing Corporation 1966, 1972, 1978 (Cambridge, 
        Massachusetts).

        Jack Newton and Philip Teece:  THE CAMBRIDGE DEEP-SKY ALBUM.  
        Copyright Cambridge University Press 1983 (Cambridge).



















                                    Page 36





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX G
                                   ----------



                       The User-Supported Software Concept
                       -----------------------------------

        User-Supported  Software  is a concept in  distributing  computer 
        programs, based on three principles:

        (1)  that  the value and utility of software is best assessed  by 
        the user on his own system.   Only after using a program can  the 
        user   really   determine   whether  it   serves   his   personal 
        applications, needs, and tastes;

        (2)  that the creation of independent personal-computer  software 
        can and should be supported by the computing community;

        (3)  that  the copying of programs should be  encouraged,  rather 
        than  restricted,   as  the  ease  with  which  software  can  be 
        distributed outside traditional commercial channels reflects  the 
        strength, rather than the weakness, of electronic information.

        The  software  carries  a notice suggesting a  donation  for  the 
        software.  Making the suggested donation is voluntary on the part 
        of each user.

        Regardless of whether the suggested donation is made, the user is 
        encouraged to make copies of this software and to distribute them 
        to other users, within the terms of the Limited License.


























                                    Page 37





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX H
                                   ----------



                                 Limited License
                                 ---------------

        This  Limited  License  is  granted to  users  of  the  AstroSoft 
        Computerized Ephemeris (ACE),  Version 1.00, to use this software 
        on  a  private,  non-commercial basis and to make copies of  this 
        software  and distribute them to other users,  on  the  following 
        conditions:

        (1) Copies are to comprise all files on both disks.   None of the 
        datafiles or any other individual files is to be used, copied, or 
        distributed apart from the whole software package.

        (2)  No  "disk fee" or other consideration is to be  charged  for 
        copying  or  distributing the software,  except a small  fee  for 
        shipping and materials.

        (3)  The notices displayed at program start-up are not to be  by-
        passed, altered, or removed.  

        (4) This software is not to be distributed in modified form or in 
        connection with any other product.

        (5) Copies may be posted for access via  telecommunications,  but 
        only on these same conditions.

        (6)  The user accepts that this software package is furnished  on 
        an  "as is" basis with no warranty of merchantability or  fitness 
        for a particular purpose.

        This  Limited  License is not granted to members of  the  Eastbay 
        Astronomical Society, Inc., of Oakland, California.  Such members 
        are   specifically   prohibited  from  any   use,   copying,   or 
        distribution  of  this  software,   except   with  prior  written 
        permission of AstroSoft, Inc., after written application for such 
        permission.                                                 

        Any use,  copying, or distribution of this software indicates the 
        user's acceptance of these terms and conditions.   This  software 
        may  not  be  used,  copied,  or distributed in  any  manner  not 
        provided  for in the Limited License,  except with prior  written 
        authorization of AstroSoft,  Inc.   Any  breach of one or more of 
        these  conditions  is  legally punishable as an  infringement  of 
        copyright.

        PLEASE  SHOW YOUR SUPPORT OF THE USER-SUPPORTED SOFTWARE  CONCEPT 
        BY MAKING THE SUGGESTED DONATION AND ABIDING BY THE TERMS OF  THE 
        LIMITED LICENSE.




                                    Page 38





             AstroSoft Computerized Ephemeris (ACE), Version 1.00


                                   APPENDIX I
                                   ----------



             How to Register Your Copy for Enhancements and Support
             ------------------------------------------------------

        To  register your copy of the AstroSoft  Computerized  Ephemeris, 
        simply send your name and address to AstroSoft, Inc., Post Office 
        Box 4451,  Hayward, CA 94540-4451.  

        Although  we  shall  endeavor  to  send you  from  time  to  time 
        information  about ACE and announcements of enhancements to  this 
        software  package  and  other  AstroSoft  software  packages,  we 
        reserve  the right to make changes to ACE without  obligation  to 
        notify any user of such changes.

        Although we shall endeavor to maintain,  enhance, and support ACE, 
        we can make no commitment to do so.





































                                    Page 39







```
{% endraw %}

## FILES692.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  692  ASTROSOFT EPHEMERIS(ACE) Disk 1 of 2                   v1
---------------------------------------------------------------------------
 
Acecalc is a program that performs the most needed astronomical calculations
involving the sun, moon and planets.The menu displays the local time, date
and time zone name, universal time, local mean sidereal time, julian day,
and the name of the location designated in the  installation. Acecalc will
 also print a calender for any month and provides a "dos shell".
 
Acesolar  provides information on objects in the solar system. the first two
menu selections provide numeric data on the Sun, the planets and their
 satellites.The next function displays narrative descriptions of the sun
 and planets. The observational data provides information on observing
the planets.
 
INSTALL  generates the site.dat file used by ACECALC. running this program
displays the current site information. Changes can be made by moving the
cursor and typing in the new data.
 
 
------------  Volume ACE1
ACE      DOC  Users manual
ACECALC  000  Overlay file for ACECALC
ACECALC  COM  The Astronomical Ephemeris Program
ACESOLAR EXE  The Solar System Data Program
ASPECT   DAT  Planetary Observational Data
DESCRIP  DAT  Planetary descriptive data
HELP     TXT  Help file (Acecalc)
INSTALL  COM  The Installation Program
SATINF   DAT  Planetary data
SATINF   DAT  Satellite data
SITE     DAT  Site information
SUBMOD   CHN  Overlay file
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## GO.TXT

{% raw %}
```
This is disk #1 of a two disk set.
 
To print manual, type:
              "COPY ACE.DOC PRN <enter>"
 
To install program type:
              "INSTALL <enter>"
 
To run ACECALC (DOS Shell and Astronomical Calculator) type;
              "ACECALC <enter>"
 
To run ACESOLAR (Solar System data program) type:
              "ACESOLAR <enter>"
 
To run the rest of the software requires disk #693.
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
```
{% endraw %}

## HELP.TXT

{% raw %}
```
                                    The Sun

         Use  this  option to find,  for the date and time you  enter,  
         the   sun's   position  (right  ascension  and  declination),  
         altitude  and  azimuth,  nutation in longitude and obliquity,  
         times  of  sunrise  and  sunset,  and  times of beginning and 
         ending  of  morning  and  evening  astronomical twilight (the 
         time  when  the upper limb of the sun is 18 degrees below the 
         true horizon).

         Example entry format:

                         Month Day Year   Hrs Min Sec
                         1     1   1986   12  0   0



                                   The Moon

         Use  this  option  to find, for the date and time you  enter,
         the   moon's  position  (right  ascension  and  declination),  
         altitude   and   azimuth,   horizontal  parallax  (the  angle 
         subtended  by  the  earth  as  seen  from the moon), distance  
         from  the  earth,  semi-diameter,  illuminated  fraction, and 
         times of moonrise and moonset.

         Example entry format:

                         Month Day Year   Hrs Min Sec
                         1     1   1986   12  0   0




                                  The Planets

         Use  this  option  to  find,  for  the date, time, and planet
         you  enter,  the  position (right ascension and declination),    
         altitude  and  azimuth,  distance from the earth, elongation,   
         semi-diameter,  illuminated   fraction,  and  times of rising    
         and  setting  (in chronological order).  At this time, if you   
         enter "Pluto," ACE displays an error message.

         Example entry format:

                     Month Day Year   Hrs Min Sec   Planet
                     1     1   1986   0   0   0     Mars




                                   Eclipses

         Use this option to list, for the month or year you enter, the 
         circumstances  of  solar  and lunar eclipses visible from any
         location.  After  you  enter  a  month and year, you may list
         eclipses  for  that month/year combination by entering "M" or
         for  that  entire year by entering "Y."  For each eclipse ACE 
         lists  the  UT  date  and  time  of  the eclipse, the type of 
         eclipse,  and  the  magnitude.   For total lunar eclipses ACE 
         gives a more complete list of timings comprising beginning of 
         partial phase, beginning of total phase, maximum eclipse, end 
         of total phase, and end of partial phase.

         Example entry format: 

                     Month   Year   List[(M)onth, (Y)ear]
                     1       1986   Y
                          Astrophotography Exposures

         Use  this option to calculate, for the information you enter,
         exposure  times and image sizes needed in lunar and planetary 
         photography.

         Example entry format:

                               Object Name: Mars
                            Objective Diameter: 200
                  Focal Length (same units as diameter): 2000
                             Film Speed (ISO): 100
                        Object Diameter (" of arc): 30
                                Magnitude: -2.5
                               Phase (0-1): 0.95
                       Filter Factor (1 = no filter): 1

                       Mean Sidereal Time and Julian Day

         Use this option to find, for the date, time, right ascension,
         and  declination  you  enter,  the Universal Time, Julian Day  
         Number,  Greenwich  Mean  Sidereal  Time, local Mean Sidereal 
         Time,  hour angle,  altitude,  azimuth, airmass (the ratio of
         atmospheric   interference   looking  toward  the  object  as  
         compared  to  that looking toward the zenith, on a scale of 1  
         to  infinity,  with  "***"  indicating  an  object  below the 
         horizon),  rise, and set.  A message will be displayed if the 
         object is circumpolar from your observing site.
         site.

         Example entry format:
                                         Right Ascension   Declination
          Month Day Year   Hrs Min Sec     Hrs Min Sec     Deg Min Sec
          1     1   1986   20  0   0       0   40  0       41  40  0
                           Precession of Coordinates

         Use  this  option  to  precess  forward  or backward, for the
         epochs you enter, the coordinates of an object.  

         Example entry format:

                             From What Epoch? 1950
                              To What Epoch? 2000

                         Right Ascension   Declination
                           Hrs Min Sec     Deg Min Sec
                           0   40  0       41  40  0




                              Phases of the Moon

         Use  this  option  to find, for the month and year you enter,
         the dates and times of each phase of the moon.

         Example entry format:

                                 Month   Year
                                 1       1986








                            Equinoxes and Solstices

         Use this option to find, for the year you enter, the UT dates
         and times of the beginning of the four seasons.

         Example entry format:

                                     Year
                                     1986








                        Galilean Satellites of Jupiter

         Use this option to plot graphically the relative positions of
         the four  Galilean satellites of Jupiter.  The display starts 
         at   the  date  and  time  entered.  Each subsequent display, 
         updated  at  a rate set  by  your computer's speed (about one  
         display per second), shows to scale the satellites' positions 
         relative  to the x-axis for  the  update interval you  enter.   
         For   example,  an  update  interval  of  "60"  displays  the 
         positions as they would appear each hour.  An update interval 
         of  "0"  displays  the  positions  for only the date and time 
         entered.

         Example entry format:

           Month Day Year   Hrs Min Sec   Update Interval (Minutes)
           1     1   1986   21  0   0     60
                              Perpetual Calendar

         Use  this  option  to  display, for the month and year in the 
         Gregorian  calendar  you  enter, the calendar for that month.  
         You  may optionally request a printout of the calendar on the  
         printer you designated during the ACE installation process.

         Example entry format:

                         Month   Year   Hardcopy[Y/N]
                         1       1986   N






                                    Polaris

         Use  this  option  to  find, for the month, day, and year you 
         enter,  the  times  of  the  culminations  and elongations of 
         Polaris. 

         Example entry format:

                              Month   Day   Year
                              1       1     1986







                                   DOS Shell

         Use  this option to execute DOS commands without leaving ACE.
         To return to ACE, type "EXIT" at the DOS prompt.













                                     Exit

         Use  this  option  when  you  want  to exit from the menu and
         return to the DOS prompt.
















```
{% endraw %}

## NOTES692.TXT

{% raw %}
```
Program name:The Astrosoft Ephemeris
Author name:Jerry Gardner and Martin Morrison
Address: Astrosoft Inc
        Post Office Box 4451
        Hayward, CA 9540-4451
 
Telephone Number:N/A
 
Suggested Donation:$ 25.00
 
Program Description:The Astrosoft Computerized Ephemeris is the P.C. users
guide to to the night sky.It will delight the novice and experienced sky
gazer. In three parts this two volume set will perform the most common
astronomical calculations,provide data on objects in the solar system and
search a sky catalog of over 2000 deep sky objects, the Messier Catalog,
100 named objects,all bright stars to MAG 2.00 and more. Objects may be
searched by one or more criterion. For example the catalog may be searched
for all double stars or just the ones in a section of the sky.
  All three programs are menu driven and a detailed 32 page users manual
(ACE.doc)is provided on the first volume.
   The first program Acecalc.com, is a menu driven Astronomical Ephemeris.
In the menu mode it reads the clock and converts the local time to G.M.T,
Mean Sidereal time and Julian day.By selecting an option from the menu one
may find data on the position of the sun, Moon,and planets for a selected time
and day.This  program will also calculate astrophotography exposures,Sidereal
time, precession of coordinates, phases of the Moon, Equinoxes and Solstices,
Galilean satellites of Jupiter, print a perpetual calendar, give the low down
on polaris and execute DOS commands without leaving Acecalc. Neat. No sky
junkey should be without one.
   The second program is Acesolar. This program provides reference data and
comments on objects in the solar system and plays a tune fitting the object
selected. The music may be turned off.
   The third program is Acecat. This is a sky catalog that may be searched
like a database. one can print the whole catalog or select search criterion
to narrow the field.
 
These programs will run on a P.C. , XT,and AT with a minimum of;
 
128K ram
1 double sided floppy disk
Mono or Color Graphics Adaptor
DOS version 2.10 or above
 
The FX-80 parallel printer is supported and a math Co-processer version is
avalable from the authors.
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0692

     Volume in drive A has no label
     Directory of A:\

    ACE      DOC     79104  12-26-86   7:43p
    ACECALC  000     71424   2-25-87  10:16p
    ACECALC  COM     27460   2-25-87  10:16p
    ACESOLAR EXE     43134   2-19-87   7:31p
    ASPECT   DAT      8320  11-16-86  11:35a
    DESCRIP  DAT     11520   1-24-87   9:56a
    FILES692 TXT      2048   1-04-80  12:49a
    GO       BAT        18   1-29-87   9:41a
    GO       TXT       512   1-04-80  12:53a
    HELP     TXT      7808   1-29-87   8:38p
    INSTALL  COM     26431   2-19-87  12:34a
    NOTES692 TXT      2560   1-04-80  12:48a
    PLAINF   DAT      2432   2-06-87   9:18p
    SATINF   DAT      8832   2-06-87   9:50p
    SITE     DAT       179  10-16-86   7:37p
    SUBMOD   CHN     39545   2-25-87  10:17p
           16 file(s)     331327 bytes
                           22528 bytes free
