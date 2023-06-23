---
layout: page
title: "PC-SIG Diskette Library (Disk #1614)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1614/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1614"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SKYCLOCK"

    A unique program, SKYCLOCK is an historical astronomical ephemeris and
    data conversion program. Unlike most other astronomical ephemeris
    programs, this program works with dates of both the Julian and Gregorian
    calendars and dates A.D. and B.C. SKYCLOCK can also calculate the
    positions of the visible astrological houses for a specific date. Thus
    SKYCLOCK can be used for both astronomical and astrological purposes.
    With SKYCLOCK you may also automatically convert dates between several
    calendars used at different times throughout history. On what day did
    Julius Caesar die according to the Roman calendar? With SKYCLOCK you
    can find out.
    
    As an astronomical ephemeris, SKYCLOCK allows you to calculate the
    positions of the sun, moon, planets, stars, comets, and astrological
    houses for any date back to several centuries B.C. You must first enter
    the date and time and the latitude and longitude of your desired
    observation point. You may optionally have the date and time
    automatically entered from DOS, and the time entered may be according to
    five different time standards. SKYCLOCK then lists all the time
    variable elements entered, and the position of the celestial body. For
    the planets, SKYCLOCK lists the heliocentric and geocentric longitude
    and latitude, its perihelion, the right ascension, the declination, the
    azimuth, the altitude, the phase angle, elongation from the sun, the
    distance to the sun, and the distance to the earth. Other specific
    information is included for the sun, moon, comets and stars. SKYCLOCK
    can also list summary information of the positions for the sun, moon,
    and all the planets for a specific date all at once. For calculating
    the positions of the visible astrological houses, you must also enter
    the longitude of mid-heaven, the geographical latitude, and the
    obliquity of the ecliptic. SKYCLOCK will then list the positions of the
    visible astrological houses according to nine different systems used
    throughout history.
    
    SKYCLOCK is not only an astronomical ephemeris, but also a calendar date
    conversion program. SKYCLOCK allows you to easily convert dates between
    nine different calendars used throughout history. These include the
    Julian, Gregorian, Egyptian, Alexandrian, Roman, Nabonassar, Islamic,
    French, and Zodiacal calendars. For converting dates between the
    calendars you may enter either the date or the Julian day number.
    SKYCLOCK will then list the Julian day number, the day of the week, the
    age of the moon, and the Roman indiction. You may also find the date of
    Easter Sunday and the date of lunar epact according to both Julian and
    Gregorian calendars.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CLOCK1.DOC

{% raw %}
```

                                       CLOCK

                             A date conversion program
            
                      This program  will assist in converting dates from
            one calendar  to another,  in finding the date of Easter and
            in determining  the lunar  epact.  This version 1.0 is still
            rather  sketchy  and  suggestions  pertaining  to  uncovered
            calendars (especially  algorithms permitting  derivation  of
            the Julian  Day number from a date or a date from the Julian
            day number) are welcomed.
```
{% endraw %}

## CLOCK2.DOC

{% raw %}
```

                               The Various Calendars

            
                      The  program   will  assist  in  converting  dates
            between different  calendars.  Calendars implemented in this
            version of  the program  (1.0) are  the  Julian,  Gregorian,
            ancient Egyptian,  Alexandrian (and  later Coptic),  ancient
            Roman, Nabonassar  (used by  ancient astronomers),  Islamic,
            French Revolutionary,  and Zodiacal.   The  user enters  the
            year (according  to the  specific era, using Roman or Arabic
            numerals), the  month and the day, but the Julian day number
            can also  be used.  In the case of the old, pre-Julian Roman
            calendar, whose  course is  still being debated, a selection
            of scholarly theories is presented.
            
                      The information  provided by the program contains,
            besides the obvious date conversions, the Julian day number,
            the  day   of  the   week,  the   age  of   the  moon  (both
            astronomically and  in  the  first  centuries  of  our  era,
            according to  papyrus Carlsberg 9), the Roman indiction, and
            other information  pertaining to  this particular historical
            period.
```
{% endraw %}

## CLOCK3.DOC

{% raw %}
```

                             Easter Date Determination

            
                      The date  of Easter  is given  for any year in the
            Julian Calendar, and for the western rite, after 1582 in the
            Gregorian calendar.
            
                      The author  of this  program would  like to expand
            this section  by providing  as well  the date  of  Passover.
            Suggestions on how to compute this are welcomed.
```
{% endraw %}

## CLOCK4.DOC

{% raw %}
```

                                  The Lunar Epact

            
                      The lunar  epact represents the age of the moon at
            the beginning  of the  year on  January 1.   Various systems
            were historically devised to compute it;  in this particular
            version of  Clock (1.0), the systems proposed by Augustalis,
            Cassiodorus and Gregory VII are being implemented.
```
{% endraw %}

## FILE1614.TXT

{% raw %}
```
Disk No: 1614                                                           
Disk Title: Skyclock                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Skyclock                                                 
Author Version: 1.00                                                    
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
A unique program, SKYCLOCK is a historical astronomical ephemeris and   
data conversion program.  Unlike most other astronomical ephemeris      
programs, this program works with dates of both the Julian and Gregorian
calendars and dates A.D. and B.C.  SKYCLOCK can also calculate the      
positions of the visible astrological houses for a specific date.  Thus 
SKYCLOCK can be used for both astronomical and astrological purposes.   
With SKYCLOCK you may also automatically convert dates between several  
calendars used at different times throughout history.  On what day did  
Julius Caesar die according to the Roman calendar?  With SKYCLOCK you   
can find out.                                                           
                                                                        
As an astronomical ephemeris, SKYCLOCK allows you to calculate the      
positions of the sun, moon, planets, stars, comets, and astrological    
houses for any date back to several centuries B.C.  You must first      
enter the date and time and the latitude and longitude of your desired  
observation point.  You may optionally have the date and time           
automatically entered from DOS, and the time entered may be according   
to five different time standards.  SKYCLOCK then lists all the time     
variable elements entered, and the position of the celestial body.  For 
the planets, SKYCLOCK lists the heliocentric and geocentric longitude   
and latitude, its perihelion, the right ascension, the declination, the 
azimuth, the altitude, the phase angle, elongation from the sun, the    
distance to the sun, and the distance to the earth.  Other specific     
information is included for the sun, moon, comets and stars.  SKYCLOCK  
can also list summary information of the positions for the sun, moom,   
and all the planets for a specific date all at once.  For calculating   
the positions of the visible astrological houses, you must also enter   
the longitude of Mid-Heaven, the geographical latitude, and the         
obliquity of the ecliptic.  SKYCLOCK will then list the positions of    
the visible astrological houses according to nine different systems     
used throughout history.                                                
                                                                        
SKYCLOCK is not only an astronomical ephemeris, but also a calendar     
date conversion program.  SKYCLOCK allows you to easily convert dates   
between nine different calendars used throughout history.  These        
include the Julian, Gregorian, Egyptian, Alexandrian, Roman,            
Nabonassar, Islamic, French, and Zodiacal calendars.  For converting    
dates between the calendars you may enter either the date or the Julian 
day number. SKYCLOCK will then list the Julian day number, the day of   
the week, the age of the moon, and the Roman indiction.  You may also   
find the date of Easter Sunday and the date of lunar epact according to 
both Julian and Gregorian calendars.                                    
                                                                        
File Descriptions:                                                      
                                                                        
USER     INI  Initialization file.                                      
SKY      EXE  Astronomical ephemeris program.                           
STARCAT  DAT  Star catalog file.                                        
CLOCK    EXE  Calendar date conversion program.                         
SKY2     ???  On-line help file.                                        
CLOCK1   ???  On-line help file.                                        
SKYCLOCK EXE  Main program.                                             
READ     ME   Program introduction.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  Disk #1614 SKYCLOCK  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start SKYCLOCK, type:  SKYCLOCK (press return)                       ║
║                                                                         ║
║ To print documentation, type:  COPY SKY*.DOC PRN    (press enter)       ║
║                                COPY CLOCK*.DOC PRN  (press enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SKY1.DOC

{% raw %}
```
                                       "Sky"
            
                              An electronic ephemeris
            
                      "Sky"  is   written  by   Pierre  Brind'Amour,   a
            professor in  the Department  of Classical  Studies  at  the
            University of  Ottawa (Canada);   his  field of  research is
            ancient chronology,  the  evolution  of  calendars  and  the
            history  of   astronomy  and  astrology.    This  historical
            background is  reflected in the program which can be run for
            dates B.C.  as well as A.D.  The claimed accuracy (positions
            are given to the nearest minute of arc), except for recently
            discovered planets  that are  invisible to  the  naked  eye,
            extends to several centuries B.C.  Other historical features
            are the  possibility of  entering the  program with  Sundial
            Time, also  of using  "M", the  ratio of  the length  of the
            longest  day   to  the   shortest,  as   an  expression   of
            geographical  latitude,   and  the   display   of   ecliptic
            coordinates in  addition to  equatorial coordinates  for the
            stars.
            
                      This version  1.0 of the program has been designed
            for ease  of use rather than for accuracy.  One can get, for
            example, the  position of  various stars, planets and comets
            for the  same time and place variables, or one can vary data
            from the  time and  place variables  in order  to study  the
            movement of a particular celestial body.
            
                      Improvements considered for future versions of the
            program are  increased precision (to arc sec and beyond) and
            what goes  with it  (use of  Dynamical  Time  for  example),
            addition of  a Messier  object catalog,  search of  stars by
            name or  by position, position of the Galilean satellites of
            Jupiter,  an   improved  and  amplified  on-disk  manual,  a
            tutorial on Positional Astronomy, etc.































```
{% endraw %}

## SKY2.DOC

{% raw %}
```
                                 The Time Variable
            
            
                      The program  aims at  providing  the  position  of
            celestial bodies  for a  certain point  in time  and as seen
            from a certain location;  therefore, information relative to
            this particular instant and this location has to be provided
            by the user.
            
                      Year, month  and  day  are  entered  according  to
            normal practice.   The  calendar used is the Julian calendar
            for dates  until October 5, 1582, and the Gregorian calendar
            afterwards.
            
                      The time  of the  day is  entered  as  "hour  min"
            counted from midnight (hence 14h = 2 p. m.).  The time scale
            is either  Ephemeris Time,  Universal Time, Mean Local Time,
            Standard Time  (for wich  you have to provide the Time Zone)
            or Sundial Time.
            
                      Geographical longitude and latitude are entered as
            decimal angles (DDD.dd).  "M" can also be used;  this was an
            ancient way to determine latitude, by the ratio of the hours
            of daylight  to twelve hours at the summer solstice.  If "M"
            is not  available, just  enter two  dashes "--".   If "M" is
            available and  entered, it  will override  the  geographical
            latituded entered earlier.
            
                      Finally, you  might want  to enter  a note of some
            sort for  future reference  if a  printout of  the screen is
            needed.
            
                      The program  will display  on a  single screen the
            information  already   entered,  plus   a  number   of  time
            conversions and other related information.
            
                      All input  data provided by the user are kept into
            memory for  further runs of the program.  If one wishes, one
            can go  over again  the input  data routine  and change only
            selected variables.
```
{% endraw %}

## SKY4.DOC

{% raw %}
```

                                       Comets
            
                      This part  of the program computes the position of
            a comet  at a  given point  in time and as seen from a given
            location.  No cometary catalog is provided, so the user must
            enter the  usual initial  elements.  A good source for these
            is the  "Catalog of  Cometary Orbits",  by Brian G. Marsden,
            Hillside, New Jersey, Enslow Publishers, 1983.
            
                      Having run  the comet  routine, one  can return to
            the Main  Menu and  make  changes  in  the  time  and  place
            variable, and  then come  back and  run  the  comet  routine
            again, without  the need  to reenter  the initial  elements.
            Cometary positions are provided for the equinox of date, but
            also for  the equinox  of 1950.0, in order to facilitate the
            comparison with star catalogs.
```
{% endraw %}

## SKY5.DOC

{% raw %}
```

                                       Stars
            
                      The  program  reads  from  a  catalog  of  several
            hundreds of  the brightest  stars.    The  user  can  scroll
            through it and make his/her selection.  Star names are given
            with the  traditional Greek denomination (example: "ALP LIB"
            = "Alpha  Librae"), followed  by the  standard  Arabic  name
            ("ZUBENELG" =  "Zubenelgenubi")  and  the  DM  number  ("-15
            3966").  The catalog is a selection from the "STAR1" catalog
            provided with  the U.  S. Naval Observatory "Floppy Almanac"
            (v. 1.50.88).  The catalog is an ordinary ASCII file and can
            be  altered  or  amplified  by  the  user;    one  can  also
            substitute it with another catalog using the same format.
            
                      The user  can also  enter the program by providing
            his or her own information relative to any star;  needed are
            the name  of the star, its Right Ascension 1950.0 or 2000.0,
            its Declination  1950.0 or  2000.0 and its proper motions in
            Right Ascension  and Declination in arc seconds per century;
            parallax, radial  velocity  and  visual  magnitude  are  not
            necessary but  can be  entered as  well to  provide a fuller
            picture.
            
                      One can leave the star routine and make changes to
            the time  and place  input, and  then  return  to  the  star
            routine without having to reenter star information or scroll
            through the  catalog.  Star positions are displayed for both
            the 1950.0  equinox and  the 2000.0  equinox, in addition to
            the equinox of date.
```
{% endraw %}

## SKY6.DOC

{% raw %}
```

                                Astrological Houses

            
                      According  to  ancient  astrological  theory,  the
            Heavens are  divided into  twelve significant regions in the
            plane of  the Observer,  numbered from the first, called the
            Ascendant, rising  in the  East, and counted in the order of
            the signs  of the  Zodiac.   These twelve "houses" are fixed
            and the  Heavens appear  to rotate  entirely through them in
            the course  of one  day.  Primitive astrologers probably did
            not suspect  the geometrical  problems posed by the doctrine
            and were  satisfied with the so-called "Equal House System."
            Soon enough,  various solutions  were proposed;  the program
            offers a nearly complete survey of these.
            
                      The "Equal House System" divides the Ecliptic into
            twelve equal houses counted from the Ascendant.
            
                      The  "Porphyrius  System"  named  after  the  Neo-
            Platonic philosopher  Porphyry (233-303) divides equally the
            regions of the Ecliptic comprised in the quadrants formed by
            the four  cardinal  points  (Ascendant,  Lower  Mid  Heaven,
            Descendant, Mid Heaven).  In this system, as in most others,
            Mid Heaven stands on the cusp of the tenth house.
            
                      The  "Old   Greek   System"   (also   called   the
            "Alcabitius System")  divides equally  the  regions  of  the
            Equator comprised  between the  four cardinal  points;   the
            houses are then projected unto the Ecliptic.
            
                      The  "Regiomontanus  System",  made  famous  by  a
            Fifteenth Century  German mathematician (1436-1476), and the
            "Campanus System",  whose attribution is not clear and whose
            date is  either the Thirteenth or the Fifteenth Century, try
            to reconcile  the fact  that Mid  Heaven is independant from
            the local plane and the Ascendant is dependant upon it.
            
                      Probably the  system most  widely used  by  modern
            astrologers is the so called "Placidus System", called after
            a Seventeenth  Century Italian monk (1603-1668), but already
            proposed a  century earlier  by  the  Italian  mathematician
            Magini.   It divides  equally the time taken by the point on
            the Ascendant  to reach Mid Heaven;  and so on for the other
            quadrants.
            
                      The "Morinus  System" is named after Jean-Baptiste
            Morin (1583-1656),  French astrologer  to the court of Louis
            XIV;   it divides  the Equator in twelve equal segments from
            the point  where it  intersects the  local plane.   In  this
            system, the Ascendant does not coincide with the cusp of the
            first house,  and except  for places  on  the  Equator,  Mid
            Heaven does not coincide with the cusp of the tenth house.
            
                      The "Meridian  System" divides the Equator equally
            from Mid  Heaven;   the system is independant from the local
            plane and  the Ascendant  does not  fall on  the first house
            cusp.
            
                      The "Koch  System"  is  named  after  Walter  Koch
            (1895-1970);   it is  also a  system of time division, where
            the time  taken for a point at Mid Heaven to reach one third
            of the  semi-diurnal arc  is allocated  to the  point on the
            Ascendant for  it to  rise and mark the cusp of the eleventh
            house.
            
                      All that  is needed in order to enter this part of
            the program  is the longitude of Mid Heaven, the latitude of
            a given  place and  the obliquity of the Ecliptic.  If other
            parts of  the program  have previously  been executed, these
            values are already computed and available.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1614

     Volume in drive A has no label
     Directory of A:\

    CLOCK    EXE     29584   8-11-88   1:04a
    CLOCK1   DOC       603   8-12-88   2:09a
    CLOCK2   DOC      1340   8-12-88   2:02a
    CLOCK3   DOC       479   8-12-88   2:07a
    CLOCK4   DOC       429   8-12-88   2:10a
    FILE1614 TXT      5033  10-16-89   9:07p
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       617  10-18-89   1:00p
    READ     ME       1053   8-12-88  12:39a
    SKY      EXE    127744   8-15-88  12:29a
    SKY1     DOC      2270   8-12-88   1:40a
    SKY2     DOC      2171   8-12-88  12:38a
    SKY3     DOC      6404   8-12-88   2:29a
    SKY4     DOC       995   8-12-88   2:31a
    SKY5     DOC      1845   8-12-88   1:34a
    SKY6     DOC      4246   8-12-88   1:48a
    SKYCLOCK EXE     12960  11-30-88  12:05a
    STARCAT  DAT    100940   8-11-88  12:32a
    USER     INI        23   8-12-88  12:49a
           19 file(s)     298774 bytes
                           13312 bytes free
