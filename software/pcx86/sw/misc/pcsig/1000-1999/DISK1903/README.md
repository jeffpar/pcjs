---
layout: page
title: "PC-SIG Diskette Library (Disk #1903)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1903/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1903"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE WEATHER CHANNEL"

    Everybody complains about the weather, but nobody does anything
    about it.  Well, now you can complain with authority!  THE WEATHER
    CHANNEL provides detailed information about temperature, rainfall, and
    atmospheric pressure, giving you a day-by-day listing of
    high, low and average statistics for date ranges you specify.  All you
    have to do is compile the data and enter it in an ASCII file
    according to THE WEATHER CHANNEL's specifications.  This simple
    program will do the rest, offering output to screen or printer.
    
    The program provides high, low, and average temperatures, atmospheric
    pressures, and rainfall for any year and city entered in the database.
    Sample databases and template provided.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1903.TXT

{% raw %}
```
Disk No: 1903                                                           
Disk Title: The Weather Channel                                         
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: The Weather Channel                                      
Author Version: 1.9                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Everybody complains about the weather, but nobody does anything         
about it.  Well, now you can complain with authority!  The Weather      
Channel provides detailed information about temperature, rainfall,      
and atmospheric pressure, giving you a day-by-day listing of            
high, low and average statistics for date ranges you specify.  All      
you have to do is compile the data and enter it in an ASCII file        
according to The Weather Channel's specifications.  This simple         
program will do the rest, offering output to screen or printer.         
                                                                        
WEATHER is a specialized Weather Information Database                   
analysis program.  User enters daily weather information data           
in a ASCII data file using International System Metric Units            
(e.g., 24-hour clock, YY-MM-DD, Celsius temperature to one decimal      
place, etc.).  The program provides high, low, and average              
temperatures, atmospheric pressures, and rainfall for any year          
and city entered in the database.  Sample databases and template        
provided.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk #1903  THE WEATHER PROGRAM  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: WEATHER      (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY WEATHER.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## WEATHER.DOC

{% raw %}
```
******************************************************************************
*                                                                            *
*                               USER'S MANUAL                                *
*                                                                            *
*                            THE WEATHER CHANNEL                             *
*                                Version 2.0                                 *
*                                                                            *
*               To Display Records Stored in a Weather Database              *
*             To Calculate Statistics Calculated from the Database           *
*                To Display Various Weather Information Tables               *
*                                                                            *
*                                                                            *
*                                                                            *
*         Copyright 1985-89 Martin E. Morrison.  All rights reserved.        *
*                 136 Loma Verde Drive, San Lorenzo, CA 94580                *
*                         Telephone:  (415) 276-8652                         *
*                          CompuServe ID:  70315,101                         *
*                                                                            *
*                           Public-Domain Software                           *
*                                                                            *
******************************************************************************


                                   The Files
                                   ---------

THE WEATHER CHANNEL consists of the following files:

     WEA0000 .DAT   A weather datafile template
     WEA1984 .DAT   A sample weather datafile
     WEA1985 .DAT   A sample weather datafile
     WEA1986 .DAT   A sample weather datafile
     WEA1987 .DAT   A sample weather datafile
     WEA1988 .DAT   A sample weather datafile
     WEA1989 .DAT   A sample weather datafile
     WEATHER .DOC   User's Manual         
     WEATHER .EXE   The Weather Channel
     WEATHER .TXT   A text file on weather measurement units


                                 Using WEATHER
                                 -------------

WEATHER.EXE is the executable file that is run directly from the DOS prompt.
You should make sure that any annual weather datafiles you intend to use
(explained under "The Annual Weather Datafiles" below) are resident with 
WEATHER.EXE on your current device and directory.

WEATHER first displays the Options Menu as follows:

     ( 1) Display or print weather records
     ( 2) Display or print weather statistics
     (99) Exit

IF YOU SELECT OPTION 1 OR 2, WEATHER first asks you to input the name of the
annual weather datafile to be used.  (As explained under "The Annual Weather
Datafiles" below, the weather data for each calendar year should be stored in
a separate file with a filename you designate.)  If you input a filename that
does not exist, WEATHER warns you with a beep and a "File not found" message
and asks you to input another.  If you enter a Return without inputting a
filename, WEATHER returns you to the Options Menu.

WEATHER then displays the "Reading records in from file [filename]" message
and displays the date of each record as it is read in, so that you can follow
the progress of reading in the records.  If you see any errors (e.g., dates in
the wrong format or extraneous characters) as the display increments or if you
receive an "Input past end" error message, check at the date where the error 
occurred for typographical errors, particularly punctuation errors, in the 
annual weather datafile you selected.  If you receive an "Input past end"
error message after the last date, check the end of your then annual weather
datafile you selected for the presence of more than one Return (blank line)
after the last line of data.

WEATHER then prompts you for the following information:

     Input starting date (YY-MM-DD)
     Input ending date (YY-MM-DD)
     Input city location (12 letters maximum)
     Input state location (2-letter state code)
     Do you want a printout (yes/NO)?

Since WEATHER searches for the dates in ASCII order, you need enter only YY or
YY-MM, if you desire a year or year-month combination.  However, you must
enter leading zeros (e.g., 86-03-04).  If you enter a Return at the "Input
starting date" prompt, WEATHER returns to the Options Menu.  If you enter a
Return at the "Input ending date" prompt, WEATHER reprompts for the starting
date.  The printout default is "no" (display on monitor screen only).  If you
answer yes to the printout prompt, a "Printing..." message is displayed.  If
the printer is not ready (not connected, not powered on, not on line, etc.),
WEATHER warns you with a beep and a "Printer not ready" message and asks you
to correct the condition.  It may take up to a minute for this message to be
displayed.

IF YOU SELECTED OPTION 1, WEATHER displays or prints the following fields
from the annual weather datafile you selected for each record between the
starting and ending dates:

     Date
     Low Temperature
     Time of Low Temperature
     High Temperature       
     Time of High Temperature  
     Atmospheric Pressure
     Rainfall

IF YOU SELECTED OPTION 2, WEATHER displays a "Calculating..." message, then
displays or prints the following statistics from the annual weather datafile
you selected for the records between the starting and ending dates.  The
accuracy of the statistics is, of course, dependent upon the completeness of
the records entered into the annual weather datafile you selected.

     Extreme Low Temperature (with date and time of day)
     Extreme High Temperature (with date and time of day)
     Extreme Low Pressure (with date)
     Extreme High Pressure (with date)
     Extreme High Rainfall (with date)
     Average Low Temperature (with average time of day)
     Average High Temperature (with average time of day)
     Average Atmospheric Pressure
     Average Rainfall
     Total Rainfall

IF YOU SELECT OPTION 99, WEATHER exits to DOS.

IF YOU SELECT ANY OTHER OPTION NUMBER, WEATHER warns you with a beep and an
"Option number invalid" message and asks you to input another.
                                 


                         The Annual Weather Datafiles
                         ----------------------------

The files named WEA19nn.DAT, consisting of the weather data for San Lorenzo,
California, for each of the years indicated in the filename, are supplied as 
samples to demonstrate the format for entering data into an annual weather 
datafile to be used by WEATHER.  This file is a standard ASCII file that may
be listed using the DOS TYPE command.

Because of restrictions on string space imposed by the BASIC, the weather
data for each calendar year should be stored in a separate file under a
name you designate for each (e.g., WEA1984.DAT).  It is possible to maintain 
annual weather datafiles for more than one location; however, each location's
datafile must be maintained separately under a different filename, and only 
one location's annual weather datafile may be used by WEATHER at a time.

First, inspect the sample file, which is an ASCII file, by using the DOS
TYPE command.  Then, observe WEATHER's operation by running it and inputting
WEA1984.DAT when prompted to input the name of the annual weather datafile to
be used.

As your annual weather datafiles must be ASCII files, you may enter them by
using EDLIN (the DOS line editor) or any word processor that produces an ASCII
file (consisting only of letters, numbers, and punctuation).  You should
particularly note the following requirements for entering data:

     * You must enter each day's record serially, earliest date first, in
       exactly the same format as the sample file with respect to spacing,
       punctuation, etc.

     * You must enter the abbreviation "n/a" ("not available") when you are
       missing any value.  (WEATHER interprets the special case of a "not-
       available" Rainfall value as a "000.0" value.)

     * You must not enter extra spaces at the end of a line before the
       Return or enter extra Returns (blank lines) after the last line of
       data.

A template file (WEA0000.DAT) is provided for entering 366 days of weather 
records into an annual weather datafile.  Use the DOS COPY command to create a
new year's annual weather datafile, e.g., COPY WEA0000.DAT WEA1980.DAT.
Values may then be entered into the pre-formatted fields.



                                 The Units Used
                                 --------------

WEATHER is programmed so that all data need to be stored, displayed, and
printed in SI (International System) Metric units, as recommended by the
International Standards Organization (ISO) and the American National Standards
Institute (ANSI) and as approved by U.S. National Weather Service.  Further
information on SI Metric units is provided in the WEATHER.ASC file.

The units are as follows:

     Dates:  YY-MM-DD format
     Times:  HH:MM format using a 24-hour clock
     Temperatures:  degrees Celsius (to one decimal place)
     Pressures:  kilopascals (to three decimal places)
     Rainfall:  millimetres (to one decimal place)

If your instruments do not give readings in SI Metric units, you must convert 
your readings to SI Metric units before entering them into your annual weather
datafile.  The conversion formulae are as follows:

     Degrees Fahrenheit to Degrees Celsius:  (X-32)*5/9
     Millibars to Kilopascals:  X/10
     Inches of Mercury to Kilopascals:  X*3.386389
     Inches to Millimetres:  X*25.4

Two excellent instruments that do give readings in SI Metric units are
available through the Edmund Scientific Catalog, 101 East Gloucester Pike,
Barrington, NJ 08007.

     COMPUTEMP.  Monitors indoor and outdoor temperature and time of day.
     Records the day's high and low temperatures in degrees Celsius and the
     time they occurred.  Catalog No. H61,236.  $79.95.

     DESK BAROMETER.  Calibrated in millibars (hectopascals), which can easily
     be converted to kilopascals by dividing by 10.  Gilded case has a 100-mm 
     silver dial with black numerals and gold set-band.  Catalog No. H41,951.
     $19.95.


                                Limited License
                                ---------------

This Limited License is granted to users of WEATHER to use this software on a 
private, non-commercial basis and to make copies of this software and 
distribute them to other users, on the following conditions:

(1) Copies are to comprise all files on the disk.  None of the individual
files is to be used, copied, or distributed apart from the whole software
package.

(2) No "disk fee" or other consideration is to be charged for copying or
distributing the software, except a small fee for shipping and materials.

(3) The notices displayed at program start-up are not to be bypassed, altered,
or removed.  

(4) This software is not to be distributed in modified form or in connection
with any other product.

(5) Copies may be posted for access via telecommunications, but only on these
same conditions.

(6) The user accepts that this software package is furnished on an "as-is"
basis with no warranty of merchantibility or fitness for a particular purpose.

Any use, copying, or distribution of this software indicates the user's
acceptance of these terms and conditions.  This software may not be used,
copied, or distributed in any manner not provided for in this Limited License,
except with prior written authorization of the copyright owner.  Any violation
of one or more of these conditions is legally punishable as an infringement of
copyright.

PLEASE SHOW YOUR SUPPORT OF THE USER-SUPPORTED SOFTWARE CONCEPT BY ABIDING BY 
THE TERMS OF THIS LIMITED LICENSE.

```
{% endraw %}

## WEATHER.TXT

{% raw %}
```
                            DEPARTMENT OF COMMERCE
                            Office of the Secretary


[The following is the text of a notice published in the FEDERAL REGISTER / Vol.
50, No. 123 / Wednesday, June 26, 1985 / Page 26393.]

Docket No. 50585-5085

Federal Agency Actions Involving Use of the Metric System in Providing
Meteorological Services and Supporting Research

AGENCY:  Office of the Secretary, Assistant Secretary for Productivity,
Technology, and Innovation, Commerce.

SUMMARY:  This notice is published to inform interested parties and the public
of the policy of the Federal agency members of the Interdepartmental Committee
on Meteorological Services and Supporting Research (ICMSSR) to implement 
certain actions involving the use of the metric system in providing 
meteorological services and supporting research.

The actions described in this notice relate only to the policies and procedures
of the Federal agencies in the gathering and exchange of weather data for use 
by Federal agencies themselves.  These actions thus are not intended to affect
the general public, although they may affect Federal agency procurement of
weather systems from the private sector.

EFFECTIVE DATE OF ACTIONS:  All of the policies mentioned in this notice were
adopted at the meeting of the ICMSSR on October 4, 1983.  Portions of these
policies have been implemented, though no effective date for implementation has
been prescribed except for termination of the use of the unit "bar" on December
31, 1985.

FOR FURTHER INFORMATION CONTACT:

General:  For further information about the purpose of the actions accounced in
this notice and their relationship to Federal laws and policies concerning the
use of the metric system within the United States, contact:  Gerald T. 
Underswood, Director, Office of Metric Programs, U.S. Department of Commerce,
Washington, D.C. 20230.  Phone:  202-377-0944.

Specific:  For further information about any particular action announced in 
this notice, contact G. Stanley Doore, Office of the Federal Coordinator for
Meteorological Services and Supporting Research, Suite 300, 11426 Rockville
Pike, Rockville, Maryland 20852.  Phone:  301-443-8704.

Background

Through the ICMSSR, which was created by the Office of Management and Budget in
1964 (at that time known as the Bureau of the Budget) under OMB Circular A-62, 
Federal agencies coordinate their actions relating to meteorological services
and supporting research.  Thirteen Government agencies engaged in
meteorological activities, or needing meteorological services, are represented.
These are the Departments of Commerce, Agriculture, Defense, Energy, Interior,
State, and Transportation, the Environmental Protection Agency, Federal
Emergency Management Agency, National Aeronautics and Space Administration,
National Science Foundation, National Transportation Safety Board, and the
Nuclear Regulatory Commission.  The actions announced in this notice were
originally developed by the Working Group on Metric Implementation of the
ICMSSR.

Acting under the authority of the Secretary of Commerce pursuant to the Metric
Conversion Act (Pub. L. 94-168, 89 Stat. 1007; 15 U.S.C. 205), the Assistant
Secretary for Productivity, Technology, and Innovation is responsible for the
overall coordination of Federal actions to facilitate the orderly transition to
the use of the metric system in the United States.

Actions

General

Through the ICMSSR the various Federal agencies have decided to complete the
transition of their use of the metric system of measurement as the basic 
"common demoninator" for meteorological data gathering and internal data
exchange.  The metric system is defined as the International System of Units as
established by the General Conference on Weights and Measures in 1960 and as
interpreted or modified for the United States by the Secretary of Commerce.
Although the metric system will immediately be regarded as the standard within
and among the agencies, no action will be taken that requires unreasonable
costs, or costs solely to achieve the transition.  Although these policies have
been adopted by the agencies, the full implementation will be on an "as soon as
practicable" basis.

The decisions announced in this notice do not affect reporting of weather data
to the media or the general public.  Even insofar as the announced policies
would require procurement in the future of meteorological equipment capable of
readout in metric units, they do not preclude the use of equipment having dual
readout capabilities.  Also, the policies do not call for procurement of 
metric capable equipment which is significantly more costly than similiar non-
metric capable equipment.

Although the kilopascal is being adopted as the basic unit of pressure for data
gathering and reporting among Federal agencies, this will not apply to 
aeronautical operations.  For such operations inches of mercury or 
hectopascals will continue to be used as appropriate.  However, for other
purposes the agencies have decided to phase out the use of units of pressure
other than the kilopascal by December 31, 1985.  This decision conforms to the
policies of the World Meteorological Organization (WMO) and the International
Civil Aviation Organization (ICAO).

Actions

1. All Federal Automated Weather Information Systems should use metric units as
the common denominator within those systems and for interagency weather data
exchange.  However, retrofitting existing equipment or modifying existing
specifications for new instruments is not required.  The standard formats
document should include metric units.

2. The Federal Standard Definitions for Weather parameters should be in metric
of all weather elements.  Non-metric units may be included parenthetically.

3. Standard specifications for future Federal procurement of weather observing
equipment should be written to ensure that such equipment provides for
recording and readout in metric units and, if required, for recording and
readout in non-metric units.

4. The agencies will use the kilopascal for all purposes except aeronautical
operations, where inches of mercury or hectopascals may be used, as 
appropriate.  Use of the unit bar will be phased out, and terminated on
December 31, 1985.  However, retrofitting existing systems or modifying
existing specifications for new systems is not required.

Dated:  June 20, 1985.

D. Bruce Merrifield.
Assistant Secretary for Productivity, Technology, and Innovation



                          U.S. DEPARTMENT OF COMMERCE
                NATIONAL OCEANIC AND ATMOSPHERIC ADMINISTRATION
                            NATIONAL WEATHER SERVICE


[The text below is that of a draft dated 79-06-25.  Although it did not become
effective as planned, such a conversion may eventually come as a result of the
metric provisions in the Omnibus Trade and Competitiveness Act of 1988,
designating the metric system as "the preferred system of weights and measures
for United States trade and commerce" (Section 5164).  In any case, the federal
government since 1985 has converted to the metric system for meteorological 
data gathering and internal data exchange.]

[In the text below, the international standard spelling "metre" and its
their compounds have been used.]


PROPOSED NATIONAL PLAN TO CONVERT PUBLIC WEATHER REPORTING TO METRIC UNITS

The United States, one of the few nations which has not gone metric, is
now in the process of doing so.  The U.S. Metric Conversion Act of 1975
declared that "the policy of the United States shall be to coordinate and
plan the increasing use of the metric system...."

The news media, electronic and printed, have begun introducing temperature
in metric units.  Banks have begun displaying temperatures in degrees Celsius.
Even so, the United States is the last major nation, and nearly the only
nation, not reporting almost all weather, river and flood information in
metric units.

The National Oceanic and Atmospheric Administration's National Weather
Service will institute an active program toward conversion.  It will be
assisted in that effort by the American National Metric Council.

Wide national participation from all quarters--the media, consumers, edu-
cation, industry, government at all levels, and individuals--is necessary
to implement the national plan.  It is expected that the mass media--radio,
television, newspapers, and magazines--will play a key role in going metric,
for without complete support of the media, no plan to report weather in
exclusively metric can succeed.

This plan will be presented to the U.S. Metric Board for its sanction
before it is implemented.

Other nations have found uniformly that the only effective way to convert
weather reporting is through a coordinated, well-understood plan providing 
firm dates after which only metric units are used.  Also, the experience in
Canada has shown that the conversion is more effective when the usage of
dual units is kept to a minimum time like 6 months.  If maintained longer,
as was done in the United Kingdom, the conversion is less effective.

THE PLAN

Should the U.S. Metric Board act favorably toward implementing this plan,
the reporting of weather, including river and flood information, eventually
will be entirely in metric.

After the U.S. Metric Board accepts the plan, a public awareness program
will be undertaken by the National Weather Service with the help of the
media and other interests for a period of at least 1 year.  A comprehensive
program will concentrate first on temperature conversion, with other weather
elements following at 6 month intervals, if other national metrication
activities are proceeding concurrently.

Simultaneously, a metric awareness program will be conducted for the
employees to improve their familiarity with metric.  This will enable our
employees to respond more readily to the public.

The media, and all other interested parties, will be encouraged to take the
initiative in education and use metric as early as possible, remembering
that once metric units have been introduced, they should be retained.  The
National Weather Service uses several types of communication systems to
provide weather information to the public -- the NOAA Weather and Media Wire
Services, NOAA Weather Radio, and Recorded Weather-by-Phone Systems.  These
will employ the following schedule.

During the period from January through June, temperatures will be provided 
in both conventional and metric units.  From January through March they
will be given in order of Fahrenheit first and Celsius second.  From
April through June they will be given with Celsius first and Fahrenheit
second; from July on, in Celsius only.

During July-December, precipitation will be given in dual units.  From July
through September it will be given in the order of inches first, millimetres
second.  From October through December it will be given with millimetres
first and inches second; from January on, in millimetres only.  Snowfall
and depths will be given in centimetres.

In each case new units will be introduced on the first Sunday of the month
scheduled, and metric only will be given on the first day of the month
scheduled.  In some areas, dual units may have to be continued longer
should the public want it.

The schedule for conversion of other elements depends on other agencies
and industry.  For example, when the Department of Transportation changes
highway signs to show speeds in kilometres per hour, then the wind speeds
will be reported in kilometres per hour.  When the service stations start
using the pressure in kilopascals, then the barometric pressure may be
given in kilopascals.

From time to time, NOAA's National Weather Service will provide news
releases, graphic and other informational materials to assist in the
changeover to metric weather reporting.  The National Weather Service
will work with the NOAA Public Affairs Office to prepare materials to
be provided to both the print and broadcast media.

NWS field offices will assist to the fullest extent possible in their
communities and will give all possible encouragement to the introduction
and use of the new system.



                                    TABLE I

                              METRIC UNITS OF THE 
                 U.S. FEDERAL METEOROLOGICAL INFORMATION SYSTEM


                                 Common Metric          Equipment Design*
                                 Standards for            and Recording
Parameter                         Meteorology         Resolution Objectives

Pressure
  Surface                           mbar**                    0.1 mbar**
  Upper Air                         mbar**                    1.0 mbar**

Temperature
  Surface Air & Sea                 oC                        0.1oC
  River Water                       oC                        0.1oC
  Soil                              oC                        0.5oC
  Upper Air                         oC                        0.1oC
  Cooperative Observers Only        oC                        0.5oC

Dewpoint                            oC                        0.1oC

Specific Humidity                    g/kg                  N/A (derived)

Wind Speed
  Upper Air                       Undecided**              Undecided**
  Surface                         Undecided**              Undecided**

Wind Direction
  Surface                         Degrees                       5o
  Upper Air                                                     1o

Evaporation                          mm                       0.2 mm

Precipitation Amount                 mm                       0.2 mm
  Hydrologic Substations Only        mm                       1.0 mm

Snow Depth/Accumulation/Fall         cm                         1 cm
  Water Equivalent                   mm                       0.2 mm

Ice Accretion                        mm                         1 mm

Ice Thickness (Water & Coastal)      cm                         1 cm

Visibility
  RVR                                 m                        10 m
  Prevailing <5 km                   km                         0.1 km
  Prevailing >5 km                   km                         1.0 km

Heights
  Upper Air (geopotential)            m                         1 m
  Cloud <1500                         m                        10 m
  Cloud >1500                         m                       100 m

  Shore waves                         m                         0.1 m
  Waves at sea                        m                         0.5 m

  River stage & tides                 m                         0.002 m

Sunshine duration                    min                        1 min

Solar Radiation                      kJ/m2                      1 kJ/m2

Ozone (Dobson)                       PA.mm                      1 Pa.mm

Locations (Absolute)
  Station - Fixed                 Decimal Degrees               0.0001o
  Data Locations                  Decimal Degrees               0.01o

Station Elevation                    m                          0.1 m

Radar
  Heights                            m                        100 m
  Range                             km                          1 km
  Echo motion                     Undecided**                 Undecided**
  Rainfall Rate                     mm/h                        0.1 mm/h


*  These are resolution objectives and not accuracy objectives for
   equipment design.  This does not mean that all equipment must meet
   these objectives.

** The knot and the millibar will continue to be used as now until such
   time that the international community decides otherwise.  [The knot is a
   unit that may be used with the metric system temporarily time and is to be
   replaced in the SI metric system by kilometres per hour.  The millibar is
   a unit in use with the SI metric system temporarily and is to be replaced by
   the kilopascal.]



                   UNITS FOR USE IN PUBLIC WEATHER REPORTING


Temperature Related Elements
     oC - degrees Celsius

Speed Related Elements
     km/h - kilometres per hour

Precipitation Related Elements
     mm - millimetres for liquid (rain)
     cm - centimetres for solid (snow)
     mm/h - millimetres per hour for rainfall rate
     cm/h - centimetres per hour for snowfall rate

Pressure
     kPa - kilopascals

Distances
     km - kilometres

Heights
     m - metres and kilometres

Sunshine Duration
     Percent of maximum possible on a cloud-free day at a given site

Direction
     Degrees or points of compass

Location
     Decimal degrees of latitude and longitude or
       azimuth and distance

Solar Radiation
     Wh/m2 - watt-hours per square metre



                            PROPOSED METRICATION OF
                        WEATHER REPORTING TO THE PUBLIC


                                       Conversion Schedule

                    D-Day        M-Day     6 months   12 months
                      -------------------------------------
                      |            |          |           |
Temperature           |............|----------|===========|=================>
                      |  12 months |          |           |
Precipitation         |............|..........|-----------|=================>
                      |            |          |           |
Windspeed             |............|..........|...........|...../---========>
                      |            |          |           |
Distance, Pressure &  |............|..........|...........|........./---====>
All Other Elements    |            |          |           |


                      .......... Public Awareness Program
                      ---------- Dual Units and Intensive Education Program *
                      ========== Metric Units Only


D-Day - Decision Day is the January 1 when Public Awareness Program starts.
M-Day - Metrication Day is the day on which U.S. National Weather Service
        will start to issue weather information in metric units.

* In some areas, dual units may have to be continued for a longer period.



                                 THINK METRIC

                                  TEMPERATURE


        oF    oC
Fahrenheit || Celsius
           ||- +50          Very Hot
           ||
           ||
           ||- +40          Body
      98.6 ||- ---- 37 ----------------
           ||               Temperature
           ||- +30
           ||
           ||
      68   ||- +20          Room
           ||               Temperature
           ||
           ||- +10
           ||
           ||
      32   ||- 0 ---------------- Freezing Point
           ||
           ||
           ||- -10
           ||
           ||
           ||- -20          Bitter Cold
           ||
           ||
           ||- -30          Extreme Cold
           ||
           ||
     -40   ||- -40
           ||
           ||
           ||- 50



                    CELSIUS TO FAHRENHEIT CONVERSION TABLE


 C      F         C      F        C      F         C     F         C      F

102   215.6       67   152.6      32    89.6      - 3   26.6      -38   -36.4
101   213.8       66   150.8      31    87.8        4   24.8       39    38.2
100   212.0       65   149.0      30    86.0        5   23.0       40    40.0
 99   210.2       64   147.2      29    84.2        6   21.2       41    41.8
 98   208.4       63   145.4      28    82.4        7   19.4       42    43.6
                                                                             
 97   206.6       62   143.6      27    80.6      - 8   17.6      -43   -45.4
 96   204.8       61   141.8      26    78.8        9   15.8       44    47.2
 95   203.0       60   140.0      25    77.0       10   14.0       45    49.0
 94   201.2       59   138.2      24    75.2       11   12.2       46    50.8
 93   199.4       58   136.4      23    73.4       12   10.4       47    52.6
                                                                             
 92   197.6       57   134.6      22    71.6      -13    8.6      -48   -54.4
 91   195.8       56   132.8      21    69.8       14    6.8       49    56.2
 90   194.0       55   131.0      20    68.0       15    5.0       50    58.0
 89   192.2       54   129.2      19    66.2       16    3.2       51    59.8
 88   190.4       53   127.4      18    64.4       17  + 1.4       52    61.6
                                                                             
 87   188.6       52   125.6      17    62.6      -18  - 0.4      -53   -63.4
 86   186.8       51   123.8      16    60.8       19    2.2       54    65.2
 85   185.0       50   122.0      15    59.0       20    4.0       55    67.0
 84   183.2       49   120.2      14    57.2       21    5.8       56    68.8
 83   181.4       48   118.4      13    55.4       22    7.6       57    70.6
                                                                             
 82   179.6       47   116.6      12    53.6      -23  - 9.4      -58   -72.4
 81   177.8       46   114.8      11    51.8       24    11.2      59    74.2
 80   176.0       45   113.0      10    50.0       25    13.0      60    76.0
 79   174.2       44   111.2       9    48.2       26    14.8      61    77.8
 78   172.4       43   109.4       8    46.4       27    16.6      62    79.6
                                                                             
 77   170.6       42   107.6       7    44.6      -28   -18.4     -63   -81.4
 76   168.8       41   105.8       6    42.8       29    20.2      64    83.2
 75   167.0       40   104.0       5    41.0       30    22.0      65    85.0
 74   165.2       39   102.2       4    39.2       31    23.8      66    86.8
 73   163.4       38   100.4       3    37.4       32    25.6      67    88.6

 72   161.6       37    98.6     + 2    35.6      -33   -27.4     -68   -90.4
 71   159.8       36    96.8     + 1    33.8       34    29.2      69    92.2
 70   158.0       35    95.0       0    32.0       35    31.0      70    94.0
 69   156.2       34    93.2     - 1    30.2       36    32.8      71    95.8
 68   154.4       33    91.4     - 2    28.4       37    34.6      72    97.6



                                 THINK METRIC

                                 RAINFALL RATE


            mm/h      
  Inches    Millimetres
per Hour    per hour

         ||           Extreme
         ||- 100
         ||           Intense
         ||-  50
         ||           Very Heavy
   1.00 -||-  25
         ||           Heavy
         ||-  10
         ||
         ||           Moderate               
         ||
         ||-   2.0
         ||
         ||           Light
         ||
         ||-   0.5
         ||           Drizzle
         ||-   0



                                METRES TO FEET

                           1 metre = 3.2808399 feet


Metres           0       10      20      30      40  
            -----------------------------------------
            |   ft.     ft.     ft.     ft.     ft.  
            |
          0 |    00.0    32.8    65.6    98.4   131.2
        100 |   328.1   360.9   393.7   426.5   459.3
        200 |   656.2   689.0   721.8   754.6   787.4
        300 |   984.3  1017.1  1049.9  1082.7  1115.5
        400 |  1312.3  1345.1  1378.0  1410.8  1443.6
            |
0.5 km  500 |  1640.4  1673.2  1706.0  1738.8  1771.7
        600 |  1968.5  2001.3  2034.1  2066.9  2099.7
        700 |  2296.6  2329.4  2362.2  2395.0  2427.8
        800 |  2624.7  2657.5  2690.3  2723.1  2755.9
        900 |  2952.8  2985.6  3018.4  3051.2  3084.0
            |
  1 km 1000 |  3280.8  3313.6  3346.5  3379.3  3412.1
       1100 |  3608.9  3641.7  3674.5  3707.3  3740.2
       1200 |  3937.0  3969.8  4002.6  4035.4  4068.2
       1300 |  4265.1  4297.9  4330.7  4363.5  4396.3
       1400 |  4593.2  4626.0  4658.8  4691.6  4724.4
       1500 |  4921.3  4954.1  4986.9  5019.7  5052.5
            |
       1600 |  5249.3  5282.2  5315.0  5347.8  5380.6
       1700 |  5577.4  5610.2  5643.0  5675.9  5708.7
       1800 |  5905.5  5938.3  5971.1  6003.9  6036.7
       1900 |  6233.6  6266.4  6299.2  6332.0  6364.8
            |
  2 km 2000 |  6561.7  6594.5  6627.3  6660.1  6692.9
       2100 |  6889.8  6922.6  6955.4  6988.2  7021.0
       2200 |  7217.8  7250.7  7283.5  7316.3  7349.1
       2300 |  7545.9  7578.7  7611.5  7644.4  7677.2
       2400 |  7874.0  7906.8  7939.6  7972.4  8005.2
            |
       2500 |  8202.1  8234.9  8267.7  8300.5  8333.3
       2600 |  8530.2  8563.0  8595.8  8628.6  8661.4
       2700 |  8858.3  8891.1  8923.9  8956.7  8989.5
       2800 |  9186.4  9219.2  9252.0  9284.8  9317.6
       2900 |  9514.4  9547.2  9580.1  9612.9  9645.7
            |
  3 km 3000 |  9842.5  9875.3  9908.1  9940.9  9973.8
       3100 | 10170.6 10203.4 10236.2 10269.0 10301.8
       3200 | 10498.7 10531.5 10564.3 10597.1 10629.9
       3300 | 10826.8 10859.6 10892.4 10925.2 10958.0
       3400 | 11154.9 11187.7 11220.5 11253.3 11286.1
            |
       3500 | 11482.9 11515.7 11548.6 11581.4 11614.2
       3600 | 11811.0 11843.8 11876.6 11909.4 11942.3
       3700 | 12139.1 12171.9 12204.7 12237.5 12270.3
       3800 | 12467.2 12500.0 12532.8 12565.6 12598.4
       3900 | 12795.3 12828.1 12860.9 12893.7 12926.5
            |
  4 km 4000 | 13123.4 13156.2 13189.0 13221.8 13254.6
       4100 | 13451.4 13484.3 13517.1 13549.9 13582.7
       4200 | 13779.5 13812.3 13845.1 13878.0 13910.8
       4300 | 14107.6 14140.4 14173.2 14206.0 14238.8
       4400 | 14435.7 14468.5 14501.3 14534.1 14566.9
            |
       4500 | 14763.8 14796.6 14829.4 14862.2 14895.0
       4600 | 15091.9 15124.7 15157.5 15190.3 15223.1
       4700 | 15419.9 15452.8 15485.6 15518.4 15551.2
       4800 | 15748.0 15780.8 15813.6 15846.5 15879.3
       4900 | 16076.1 16108.9 16141.7 16174.5 16207.3
            |
  5 km 5000 | 16404.2 16437.0 16469.8 16502.6 16535.4


Metres           50      60      70      80      90  
            -----------------------------------------
            |   ft.     ft.     ft.     ft.     ft.  
            |                                        
          0 |   164.0   196.9   229.7   262.5   295.3
        100 |   492.1   524.9   557.7   590.6   623.4
        200 |   820.2   853.0   885.8   918.6   951.4
        300 |  1148.3  1181.1  1213.9  1246.7  1279.5
        400 |  1476.4  1509.2  1542.0  1574.8  1607.6
            |
0.5 km  500 |  1804.5  1837.3  1870.1  1902.9  1935.7
        600 |  2132.5  2165.4  2198.2  2231.0  2263.8
        700 |  2460.6  2493.4  2526.2  2559.1  2591.9
        800 |  2788.7  2821.5  2854.3  2887.1  2919.9
        900 |  3116.8  3149.6  3182.4  3215.2  3248.0
            |
  1 km 1000 |  3444.9  3477.7  3510.5  3543.3  3576.1
       1100 |  3773.0  3805.8  3838.6  3871.4  3904.2
       1200 |  4101.0  4133.9  4166.7  4199.5  4232.3
       1300 |  4429.1  4461.9  4494.8  4527.6  4560.4
       1400 |  4757.2  4790.0  4822.8  4855.6  4888.5
            |
       1500 |  5085.3  5118.1  5150.9  5183.7  5216.5
       1600 |  5413.4  5446.2  5479.0  5511.8  5544.6
       1700 |  5741.5  5774.3  5807.1  5839.9  5872.7
       1800 |  6069.6  6102.4  6135.2  6168.0  6200.8
       1900 |  6397.6  6430.4  6463.3  6496.1  6528.9
            |
  2 km 2000 |  6725.7  6758.5  6791.3  6824.1  6857.0
       2100 |  7053.8  7086.6  7119.4  7152.2  7185.0
       2200 |  7381.9  7414.7  7447.5  7480.3  7513.1
       2300 |  7710.0  7742.8  7775.6  7808.4  7841.2
       2400 |  8038.1  8070.9  8103.7  8136.5  8169.3
            |
       2500 |  8366.1  8399.0  8431.8  8464.6  8497.4
       2600 |  8694.2  8727.0  8759.8  8792.7  8825.5
       2700 |  9022.3  9055.1  9087.9  9120.7  9153.5
       2800 |  9350.4  9383.2  9416.0  9448.8  9481.6
       2900 |  9678.5  9711.3  9744.1  9776.9  9809.7
            |
  3 km 3000 | 10006.6 10039.4 10072.2 10105.0 10137.8
       3100 | 10334.6 10367.5 10400.3 10433.1 10465.9
       3200 | 10662.7 10695.5 10728.3 10761.2 10794.0
       3300 | 10990.8 11023.6 11056.4 11089.2 11122.0
       3400 | 11318.9 11351.7 11384.5 11417.3 11450.1
            |
       3500 | 11647.0 11679.8 11712.6 11745.4 11778.2
       3600 | 11975.1 12007.9 12040.7 12073.5 12106.3
       3700 | 12303.2 12336.0 12368.8 12401.6 12434.4
       3800 | 12631.2 12664.0 12696.9 12729.7 12762.5
       3900 | 12959.3 12992.1 13024.9 13057.7 13090.6
            |
  4 km 4000 | 13287.4 13320.2 13353.0 13385.8 13418.6
       4100 | 13615.5 13648.3 13681.1 13713.9 13746.7
       4200 | 13943.6 13976.4 14009.2 14042.0 14074.8
       4300 | 14271.7 14304.5 14337.3 14370.1 14402.9
       4400 | 14599.7 14632.5 14665.4 14698.2 14731.0
            |
       4500 | 14927.8 14960.6 14993.4 15026.2 15059.1
       4600 | 15255.9 15288.7 15321.5 15354.3 15387.1
       4700 | 15584.0 15616.8 15649.6 15682.4 15715.2
       4800 | 15912.1 15944.9 15977.7 16010.5 16043.3
       4900 | 16240.2 16273.0 16305.8 16338.6 16371.4
            |
  5 km 5000 | 16568.2 16601.1 16633.9 16666.7 16699.5

       Proportional   m   1.0  2.0  3.0   4.0   5.0   6.0   7.0   8.0   9.0
       parts          ft. 3.3  6.6  9.8  13.1  16.4  19.7  23.0  26.2  29.5

       Ex.  40 m = 131.2 ft.
           140 m = 459.3 ft.
           141 m = 459.3 + 3.3 = 462.6 ft.



                                 THINK METRIC

                                   SNOWFALL

      
        Rate                                          Visibility

         || cm/h                                       0 -||
  Inches || Centimetres                                   ||
per Hour || per Hour                                      ||
         ||                                               ||
         ||                          Heavy                ||
         ||                                               ||
         ||- 3                                    0.5 km -||
         ||                                               ||
      1 -||                        Moderate               ||- 1/2 Mile
         ||                                               ||
         ||-2                                       2 km -||
         ||                                               ||
         ||                          Light                ||
         ||                                               ||
         ||-                                             -||
         ||                                               ||
         ||                                               ||
         ||                                               ||
         ||                                               ||

       Heavy Snow Warnings are Issued When:
       o 10 cm or more in 12 hours is expected.
       o 15 cm or more in 24 hours is expected.



                             MILLIMETRES TO INCHES

                       1 millimetre = 0.039370079 inches


 mm     0      1      2      3      4      5      6      7      8      9
     ----------------------------------------------------------------------
     | in.    in.    in.    in.    in.    in.    in.    in.    in.    in.
   0 |  0.00   0.04   0.08   0.12   0.16   0.20   0.24   0.28   0.32   0.35
  10 |  0.39   0.43   0.47   0.51   0.55   0.59   0.63   0.67   0.71   0.75
  20 |  0.79   0.83   0.87   0.91   0.94   0.98   1.02   1.06   1.10   1.14
  30 |  1.18   1.22   1.26   1.30   1.34   1.38   1.42   1.46   1.50   1.54
  40 |  1.57   1.61   1.65   1.69   1.73   1.77   1.81   1.85   1.89   1.93

  50 |  1.97   2.01   2.05   2.09   2.13   2.17   2.20   2.24   2.28   2.32
  60 |  2.36   2.40   2.44   2.48   2.52   2.56   2.60   2.64   2.68   2.72
  70 |  2.76   2.80   2.83   2.87   2.91   2.95   2.99   3.03   3.07   3.11
  80 |  3.15   3.19   3.23   3.27   3.31   3.35   3.39   3.43   3.46   3.50
  90 |  3.54   3.58   3.62   3.66   3.70   3.74   3.78   3.82   3.86   3.90
     |
 100 |  3.94   3.98   4.02   4.06   4.09   4.13   4.17   4.21   4.25   4.29
 110 |  4.33   4.37   4.41   4.45   4.49   4.53   4.57   4.61   4.65   4.69
 120 |  4.72   4.76   4.80   4.84   4.88   4.92   4.96   5.00   5.04   5.08
 130 |  5.12   5.16   5.20   5.24   5.28   5.31   5.35   5.39   5.43   5.47
 140 |  5.51   5.55   5.59   5.63   5.67   5.71   5.75   5.79   5.83   5.87
     |
 150 |  5.91   5.94   5.98   6.02   6.06   6.10   6.14   6.18   6.22   6.26
 160 |  6.30   6.34   6.38   6.42   6.46   6.50   6.54   6.57   6.61   6.65
 170 |  6.69   6.73   6.77   6.81   6.85   6.89   6.93   6.97   7.01   7.05
 180 |  7.09   7.13   7.17   7.20   7.24   7.28   7.32   7.36   7.40   7.44
 190 |  7.48   7.52   7.56   7.60   7.64   7.68   7.72   7.76   7.80   7.83
     |
 200 |  7.87   7.91   7.95   7.99   8.03   8.07   8.11   8.15   8.19   8.23
 210 |  8.27   8.31   8.35   8.39   8.43   8.46   8.50   8.54   8.58   8.62
 220 |  8.66   8.70   8.74   8.78   8.82   8.86   8.90   8.94   8.98   9.02
 230 |  9.06   9.09   9.13   9.17   9.21   9.25   9.29   9.33   9.37   9.41
 240 |  9.45   9.49   9.53   9.57   9.61   9.65   9.69   9.72   9.76   9.80
     |
 250 |  9.84   9.88   9.92   9.96  10.00  10.04  10.08  10.12  10.16  10.20
 260 | 10.24  10.28  10.31  10.35  10.39  10.43  10.47  10.51  10.55  10.59
 270 | 10.63  10.67  10.71  10.75  10.79  10.83  10.87  10.91  10.94  10.98
 280 | 11.02  11.06  11.10  11.14  11.18  11.22  11.26  11.30  11.34  11.38
 290 | 11.42  11.46  11.50  11.54  11.57  11.61  11.65  11.69  11.73  11.77
     |
 300 | 11.81  11.85  11.89  11.93  11.97  12.01  12.05  12.09  12.13  12.17
 310 | 12.20  12.24  12.28  12.32  12.36  12.40  12.44  12.48  12.52  12.56
 320 | 12.60  12.64  12.68  12.72  12.76  12.80  12.83  12.87  12.91  12.95
 330 | 12.99  13.03  13.07  13.11  13.15  13.19  13.23  13.27  13.31  13.35
 340 | 13.39  13.43  13.46  13.50  13.54  13.58  13.62  13.66  13.70  13.74
     |
 350 | 13.78  13.82  13.86  13.90  13.94  13.98  14.02  14.06  14.09  14.13
 360 | 14.17  14.21  14.25  14.29  14.33  14.37  14.41  14.45  14.49  14.53
 370 | 14.57  14.61  14.65  14.69  14.72  14.76  14.80  14.84  14.88  14.92
 380 | 14.96  15.00  15.04  15.08  15.12  15.16  15.20  15.24  15.28  15.31
 390 | 15.35  15.39  15.43  15.47  15.51  15.55  15.59  15.63  15.67  15.71
     |
 400 | 15.75  15.79  15.83  15.87  15.91  15.94  15.98  16.02  16.06  16.10
 410 | 16.14  16.18  16.22  16.26  16.30  16.34  16.38  16.42  16.46  16.50
 420 | 16.54  16.57  16.61  16.65  16.69  16.73  16.77  16.81  16.85  16.89
 430 | 16.93  16.97  17.01  17.05  17.09  17.13  17.17  17.20  17.24  17.28
 440 | 17.32  17.36  17.40  17.44  17.48  17.52  17.56  17.60  17.64  17.68



                                 THINK METRIC

                                  WIND SPEEDS


            km/h      
   Miles    Kilometres 
per Hour    per hour

         ||
         ||- 120     Hurricane      Hurricane
     74 -||  ----------------------
         ||                         Threshold
         ||
         ||          Violent Storm
         ||
        -||- 105
         ||
         ||
         ||          Storm
         ||
         ||
         ||- 90                     Storm Warning
     55 -||  ---------------------- 
         ||                           Threshold
         ||
         ||          Strong Gale
         ||
         ||- 75
         ||
         ||
         ||          Gale          
         ||                             Gale &
         ||                         Tropical Storm
     39 -||- 60 -------------------
         ||                           Threshold
         ||          Near Gale
         ||
         ||- 50
         ||
         ||          Strong Winds
         ||
         ||- 40
         ||
         ||
         ||
         ||- 30      Windy
         ||
         ||
         ||
         ||- 20
         ||
         ||          Gentle Breeze
         ||
         ||- 10
         ||
         ||-  5
         ||
         ||-  0      Calm



                            KILOMETRES PER HOUR TO:  
           KNOTS, MILES PER HOUR, METRES PER SECOND, FEET PER SECOND


-------------------------------------------------------------------------------
km/h | knots mi/h  m/s   ft/s         km/h | knots   mi/h    m/s     ft/s
     |                                     | 
  1  |  0.5   0.6   0.3   0.9           56 | 30.2    34.8    15.6    51.0
  2  |  1.1   1.2   0.6   1.8           57 | 30.8    35.4    15.8    51.9
  3  |  1.6   1.9   0.8   2.7           58 | 31.3    36.0    16.1    52.9
  4  |  2.2   2.5   1.1   3.6           59 | 31.9    36.7    16.4    53.8
  5  |  2.7   3.1   1.4   4.6           60 | 32.4    37.3    16.7    54.7

  6  |  3.2   3.7   1.7   5.5           61 | 32.9    37.9    16.9    55.6
  7  |  3.8   4.3   1.9   6.4           62 | 33.5    38.5    17.2    56.5
  8  |  4.3   5.0   2.2   7.3           63 | 34.0    39.1    17.5    57.4
  9  |  4.9   5.6   2.5   8.2           64 | 34.6    39.8    17.8    58.3
 10  |  5.4   6.2   2.8   9.1           65 | 35.1    40.4    18.1    59.2

 11  |  5.9   6.8   3.1  10.0           66 | 35.6    41.0    18.3    60.1
 12  |  6.5   7.5   3.3  10.9           67 | 36.2    41.6    18.6    61.1
 13  |  7.0   8.1   3.6  11.8           68 | 36.7    42.3    18.9    62.0
 14  |  7.6   8.7   3.9  12.8           69 | 37.3    42.9    19.2    62.9
 15  |  8.1   9.3   4.2  13.7           70 | 37.8    43.5    19.4    63.8

 16  |  8.6   9.9   4.4  14.6           71 | 38.3    44.1    19.7    64.7
 17  |  9.2  10.6   4.7  15.5           72 | 38.9    44.7    20.0    65.6
 18  |  9.7  11.2   5.0  16.4           73 | 39.4    45.4    20.3    66.5
 19  | 10.3  11.8   5.3  17.3           74 | 40.0    46.0    20.6    67.4
 20  | 10.8  12.4   5.6  18.2           75 | 40.5    46.6    20.8    68.4

 21  | 11.3  13.0   5.8  19.1           76 | 41.0    47.2    21.1    69.3
 22  | 11.9  13.7   6.1  20.0           77 | 41.6    47.8    21.4    70.2
 23  | 12.4  14.3   6.4  21.0           78 | 42.1    48.5    21.7    71.1
 24  | 13.0  14.9   6.7  21.9           79 | 42.7    49.1    21.9    72.0
 25  | 13.5  15.5   6.9  22.8           80 | 43.2    49.7    22.2    72.9

 26  | 14.0  16.2   7.2  23.7           81 | 43.7    50.3    22.5    73.8
 27  | 14.6  16.8   7.5  24.6           82 | 44.3    51.0    22.8    74.7
 28  | 15.1  17.4   7.8  25.5           83 | 44.8    51.6    23.1    75.6
 29  | 15.7  18.0   8.1  26.4           84 | 45.4    52.2    23.3    76.6
 30  | 16.2  18.6   8.3  27.3           85 | 45.9    52.8    23.6    77.5

 31  | 16.7  19.3   8.6  28.3           86 | 46.4    53.4    23.9    78.4
 32  | 17.3  19.9   8.9  29.2           87 | 47.0    54.1    24.2    79.3
 33  | 17.8  20.5   9.2  30.1           88 | 47.5    54.7    24.4    80.2
 34  | 18.4  21.1   9.4  31.0           89 | 48.1    55.3    24.7    81.1
 35  | 18.9  21.7   9.7  31.9           90 | 48.6    55.9    25.0    82.0

 36  | 19.4  22.4  10.0  32.8           91 | 49.1    56.5    25.3    82.9
 37  | 20.0  23.0  10.3  33.7           92 | 49.7    57.2    25.6    83.8
 38  | 20.5  23.6  10.6  34.6           93 | 50.2    57.8    25.8    84.8
 39  | 21.1  24.2  10.8  35.5           94 | 50.8    58.4    26.1    85.7
 40  | 21.6  24.9  11.1  36.5           95 | 51.3    59.0    26.4    86.6

 41  | 22.1  25.5  11.4  37.4           96 | 51.8    59.7    26.7    87.5
 42  | 22.7  26.1  11.7  38.3           97 | 52.4    60.3    26.9    88.4
 43  | 23.2  26.7  11.9  39.2           98 | 52.9    60.9    27.2    89.3
 44  | 23.8  27.3  12.2  40.1           99 | 53.5    61.5    27.5    90.2
 45  | 24.3  28.0  12.5  41.0           100| 54.0    62.1    27.8    91.1

 46  | 24.8  28.6  12.8  41.9           101| 54.5    62.8    28.1    92.0
 47  | 25.4  29.2  13.1  42.8           102| 55.1    63.4    28.3    93.0
 48  | 25.9  29.8  13.3  43.7           103| 55.6    64.0    28.6    93.9
 49  | 26.5  30.4  13.6  44.7           104| 56.2    64.6    28.9    94.8
 50  | 27.0  31.1  13.9  45.6           105| 56.7    65.2    29.2    95.7

 51  | 27.5  31.7  14.2  46.5           106| 57.2    65.9    29.4    96.6
 52  | 28.1  32.3  14.4  47.4           107| 57.8    66.5    29.7    97.5
 53  | 28.6  32.9  14.7  48.3           108| 58.3    67.1    30.0    98.4
 54  | 29.2  33.6  15.0  49.2           109| 58.9    67.7    30.3    99.3
 55  | 29.7  34.2  15.3  50.1           110| 59.4    68.4    30.6   100.2


-------------------------------------------------------------------------------
km/h | knots mi/h   m/s    ft/s        km/h | knots   mi/h    m/s     ft/s
     |                                      | 
 111 | 59.9   69.0  30.8   101.2        166 |  89.6   103.1    46.1   151.3
 112 | 60.5   69.6  31.1   102.1        167 |  90.2   103.8    46.4   152.2
 113 | 61.0   70.2  31.4   103.0        168 |  90.7   104.4    46.7   153.1
 114 | 61.6   70.8  31.7   103.9        169 |  91.3   105.0    46.9   154.0
 115 | 62.1   71.5  31.9   104.8        170 |  91.8   105.6    47.2   154.9

 116 | 62.6   72.1  32.2   105.7        171 |  92.3   106.3    47.5   155.8
 117 | 63.2   72.7  32.5   106.6        172 |  92.9   106.9    47.8   156.8
 118 | 63.7   73.3  32.8   107.5        173 |  93.4   107.5    48.1   157.7
 119 | 64.3   73.9  33.1   108.4        174 |  94.0   108.1    48.3   158.6
 120 | 64.8   74.6  33.3   109.4        175 |  94.5   108.7    48.6   159.5

 121 | 65.3   75.2  33.6   110.3        176 |  95.0   109.4    48.9   160.4
 122 | 65.9   75.8  33.9   111.2        177 |  95.6   110.0    49.2   161.3
 123 | 66.4   76.4  34.2   112.1        178 |  96.1   110.6    49.4   162.2
 124 | 67.0   77.1  34.4   113.0        179 |  96.7   111.2    49.7   163.1
 125 | 67.5   77.7  34.7   113.9        180 |  97.2   111.8    50.0   164.0

 126 | 68.0   78.3  35.0   114.8        181 |  97.7   112.5    50.3   165.0
 127 | 68.6   78.9  35.3   115.7        182 |  98.3   113.1    50.6   165.9
 128 | 69.1   79.5  35.6   116.7        183 |  98.8   113.7    50.8   166.8
 129 | 69.7   80.2  35.8   117.6        184 |  99.4   114.3    51.1   167.7
 130 | 70.2   80.8  36.1   118.3        185 |  99.9   115.0    51.4   168.6

 131 | 70.7   81.4  36.4   119.4        186 | 100.4   115.6    51.7   169.5
 132 | 71.3   82.0  36.7   120.3        187 | 101.0   116.2    51.9   170.4
 133 | 71.8   82.6  36.9   121.2        188 | 101.5   116.8    52.2   171.3
 134 | 72.4   83.3  37.2   122.1        189 | 102.1   117.4    52.5   172.2
 135 | 72.9   83.9  37.5   123.0        190 | 102.6   118.1    52.8   173.2

 136 | 73.4   84.5  37.8   123.9        191 | 103.1   118.7    53.1   174.1
 137 | 74.0   85.1  38.1   124.9        192 | 103.7   119.3    53.3   175.0
 138 | 74.5   85.7  38.3   125.8        193 | 104.2   119.9    53.6   175.9
 139 | 75.1   86.4  38.6   126.7        194 | 104.8   120.5    53.9   176.8
 140 | 75.6   87.0  38.9   127.6        195 | 105.3   121.2    54.2   177.7

 141 | 76.1   87.6  39.2   128.5        196 | 105.8   121.8    54.4   178.6
 142 | 76.7   88.2  39.4   129.4        197 | 106.4   122.4    54.7   179.5
 143 | 77.2   88.9  39.7   130.3        198 | 106.9   123.0    55.0   180.4
 144 | 77.8   89.5  40.0   131.2        199 | 107.5   123.7    55.3   181.4
 145 | 78.3   90.1  40.3   132.1        200 | 108.0   124.3    55.6   182.3

 146 | 78.8   90.7  40.6   133.1        210 | 113.4   130.5    58.3   191.4
 147 | 79.4   91.3  40.8   134.0        220 | 118.8   136.7    61.1   200.5
 148 | 79.9   92.0  41.1   134.9        230 | 124.2   142.9    63.9   209.6
 149 | 80.5   92.6  41.4   135.8        240 | 129.6   149.1    66.7   218.7
 150 | 81.0   93.2  41.7   136.7        250 | 135.0   155.3    69.4   227.8

 151 | 81.5   93.8  41.9   137.6        260 | 140.4   161.6    72.2   236.9
 152 | 82.1   94.4  42.2   138.5        270 | 145.8   167.8    75.0   246.1
 153 | 82.6   95.1  42.5   139.4        280 | 151.2   174.0    77.8   255.2
 154 | 83.2   95.7  42.8   140.3        290 | 156.6   180.2    80.6   264.3
 155 | 83.7   96.3  43.1   141.3        300 | 162.0   186.4    83.3   273.4

 156 | 84.2   96.9  43.3   142.2        310 | 167.4   192.6    86.1   282.5
 157 | 84.8   97.6  43.6   143.1        320 | 172.8   198.8    88.9   291.6
 158 | 85.3   98.2  43.9   144.0        330 | 178.2   205.1    91.7   300.7
 159 | 85.9   98.8  44.2   144.9        340 | 183.6   211.3    94.4   309.9
 160 | 86.4   99.4  44.4   145.8        350 | 189.0   217.5    97.2   319.0

 161 | 86.9  100.0  44.7   146.7        360 | 194.4   223.7   100.0   328.1
 162 | 87.5  100.7  45.0   147.6        370 | 199.8   229.9   102.8   337.2
 163 | 88.0  101.3  45.3   148.5        380 | 205.2   236.1   105.6   346.3
 164 | 88.6  101.9  45.6   149.5        390 | 210.6   242.4   108.3   355.4
 165 | 89.1  102.5  45.8   150.4        400 | 216.0   248.5   111.1   364.5



                                 THINK METRIC

                                   PRESSURE


    Inches  kPa        
of Mercury  Kilopascals

   31.00 -||- 105
          ||
          ||- 104
          ||
          ||- 103
          ||
          ||- 102                    Normal Sea Level
   29.92 -||- ---------------------------------------------- 101.32
Inches Hg ||- 101                         Pressure
          ||
          ||- 100
          ||
          ||-  99
   29.00 -||
          ||-  98
          ||
          ||-  97                      Unusually Low
          ||
          ||-  96
          ||
          ||-  95



                       KILOPASCALS TO INCHES OF MERCURY

                0.10 kilopascal = 0.02952998 inches of mercury


        .00    .01    .02    .03    .04      .05    .06    .07    .08    .09
kPa   -------------------------------------------------------------------------
      | in. Hg in. Hg in. Hg in. Hg in. Hg   in. Hg in. Hg in. Hg in. Hg .in Hg
      |
 95.0 | 28.053 28.056 28.059 28.062 28.065   28.068 28.071 28.074 28.077 28.080
 95.1 | 28.083 28.086 28.089 28.092 28.095   28.098 28.101 28.104 28.107 28.110
 95.2 | 28.113 28.115 28.118 28.121 28.124   28.127 28.130 28.133 28.136 28.139
 95.3 | 28.142 28.145 28.148 28.151 28.154   28.157 28.160 28.163 28.166 28.169
 95.4 | 28.172 28.175 28.178 28.180 28.183   28.186 28.189 28.192 28.195 28.198
      |
 95.5 | 28.201 28.204 28.207 28.210 28.213   28.216 28.219 28.222 28.225 28.228
 95.6 | 28.231 28.234 28.237 28.240 28.242   28.245 28.248 28.251 28.254 28.257
 95.7 | 28.260 28.263 28.266 28.269 28.272   28.275 28.278 28.281 28.284 28.287
 95.8 | 28.290 28.293 28.296 28.299 28.302   28.304 28.307 28.310 28.313 28.316
 95.9 | 28.319 28.322 28.325 28.328 28.331   28.334 28.337 28.340 28.343 28.346
      |
 96.0 | 28.349 28.352 28.355 28.358 28.361   28.364 28.366 28.369 28.372 28.375
 96.1 | 28.378 28.381 28.384 28.387 28.390   28.393 28.396 28.399 28.402 28.405
 96.2 | 28.408 28.411 28.414 28.417 28.420   28.423 28.426 28.429 28.431 28.434
 96.3 | 28.437 28.440 28.443 28.446 28.449   28.452 28.455 28.458 28.461 28.464
 96.4 | 28.467 28.470 28.473 28.476 28.479   28.482 28.485 28.488 28.491 28.493
      |
 96.5 | 28.496 28.499 28.502 28.505 28.508   28.511 28.514 28.517 28.520 28.523
 96.6 | 28.526 28.529 28.532 28.535 28.538   28.541 28.544 28.547 28.550 28.553
 96.7 | 28.555 28.558 28.561 28.564 28.567   28.570 28.573 28.576 28.579 28.582
 96.8 | 28.585 28.588 28.591 28.594 28.597   28.600 28.603 28.606 28.609 28.612
 96.9 | 28.615 28.617 28.620 28.623 28.626   28.629 28.632 28.635 28.638 28.641
      |
 97.0 | 28.644 28.647 28.650 28.653 28.656   28.659 28.662 28.665 28.668 28.671
 97.1 | 28.674 28.677 28.680 28.682 28.685   28.688 28.691 28.694 28.697 28.700
 97.2 | 28.703 28.706 28.709 28.712 28.715   28.718 28.721 28.724 28.727 28.730
 97.3 | 28.733 28.736 28.739 28.742 28.744   28.747 28.750 28.753 28.756 28.759
 97.4 | 28.762 28.765 28.768 28.771 28.774   28.777 28.780 28.783 28.786 28.789
      |
 97.5 | 28.792 28.795 28.798 28.801 28.804   28.806 28.809 28.812 28.815 28.818
 97.6 | 28.821 28.824 28.827 28.830 28.833   28.836 28.839 28.842 28.845 28.848
 97.7 | 28.851 28.854 28.857 28.860 28.863   28.866 28.868 28.871 28.874 28.877
 97.8 | 28.880 28.883 28.886 28.889 28.892   28.895 28.898 28.901 28.904 28.907
 97.9 | 28.910 28.913 28.916 28.919 28.922   28.925 28.928 28.931 28.933 28.936
      |
 98.0 | 28.939 28.942 28.945 28.948 28.951   28.954 28.957 28.960 28.963 28.966
 98.1 | 28.969 28.972 28.975 28.978 28.981   28.984 28.987 28.990 28.993 28.995
 98.2 | 28.998 29.001 29.004 29.007 29.010   29.013 29.016 29.019 29.022 29.025
 98.3 | 29.028 29.031 29.034 29.037 29.040   29.043 29.046 29.049 29.052 29.055
 98.4 | 29.057 29.060 29.063 29.066 29.069   29.072 29.075 29.078 29.081 29.084
      |
 98.5 | 29.087 29.090 29.093 29.096 29.099   29.102 29.105 29.108 29.111 29.114
 98.6 | 29.117 29.119 29.122 29.125 29.128   29.131 29.134 29.137 29.140 29.143
 98.7 | 29.146 29.149 29.152 29.155 29.158   29.161 29.164 29.167 29.170 29.173
 98.8 | 29.176 29.179 29.182 29.184 29.187   29.190 29.193 29.196 29.199 29.202
 98.9 | 29.205 29.208 29.211 29.214 29.217   29.220 29.223 29.226 29.229 29.232
      |
 99.0 | 29.235 29.238 29.241 29.244 29.246   29.249 29.252 29.255 29.258 29.261
 99.1 | 29.264 29.267 29.270 29.273 29.276   29.279 29.282 29.285 29.288 29.291
 99.2 | 29.294 29.297 29.300 29.303 29.306   29.308 29.311 29.314 29.317 29.320
 99.3 | 29.323 29.326 29.329 29.332 29.335   29.338 29.341 29.344 29.347 29.350
 99.4 | 29.353 29.356 29.359 29.362 29.365   29.368 29.370 29.373 29.376 29.379
      |
 99.5 | 29.382 29.385 29.388 29.391 29.394   29.397 29.400 29.403 29.406 29.409
 99.6 | 29.412 29.415 29.418 29.421 29.424   29.427 29.430 29.433 29.435 29.438
 99.7 | 29.441 29.444 29.447 29.450 29.453   29.456 29.459 29.462 29.465 29.468
 99.8 | 29.471 29.474 29.477 29.480 29.483   29.486 29.489 29.492 29.495 29.497
 99.9 | 29.500 29.503 29.506 29.509 29.512   29.515 29.518 29.521 29.524 29.527
      |
100.0 | 29.530 29.533 29.536 29.539 29.542   29.545 29.548 29.551 29.554 29.557
100.1 | 29.559 29.562 29.565 29.568 29.571   29.574 29.577 29.580 29.583 29.586
100.2 | 29.589 29.592 29.595 29.598 29.601   29.604 29.607 29.610 29.613 29.616
100.3 | 29.619 29.622 29.624 29.627 29.630   29.633 29.636 29.639 29.642 29.645
100.4 | 29.648 29.651 29.654 29.657 29.660   29.663 29.666 29.669 29.672 29.675
      |
100.5 | 29.678 29.681 29.684 29.686 29.689   29.692 29.695 29.698 29.701 29.704
100.6 | 29.707 29.710 29.713 29.716 29.719   29.722 29.725 29.728 29.731 29.734
100.7 | 29.737 29.740 29.743 29.746 29.748   29.751 29.754 29.757 29.760 29.763
100.8 | 29.766 29.769 29.772 29.775 29.778   29.781 29.784 29.787 29.790 29.793
100.9 | 29.796 29.799 29.802 29.805 29.808   29.810 29.813 29.816 29.819 29.822
      |
101.0 | 29.825 29.828 29.831 29.834 29.837   29.840 29.843 29.846 29.849 29.852
101.1 | 29.855 29.858 29.861 29.864 29.867   29.870 29.873 29.875 29.878 29.881
101.2 | 29.884 29.887 29.890 29.893 29.896   29.899 29.902 29.905 29.908 29.911
101.3 | 29.914 29.917 29.920 29.923 29.926   29.929 29.932 29.935 29.937 29.940
101.4 | 29.943 29.946 29.949 29.952 29.955   29.958 29.961 29.964 29.967 29.970
      |
101.5 | 29.973 29.976 29.979 29.982 29.985   29.988 29.991 29.994 29.997 29.999
101.6 | 30.002 30.005 30.008 30.011 30.014   30.017 30.020 30.023 30.026 30.029
101.7 | 30.032 30.035 30.038 30.041 30.044   30.047 30.050 30.053 30.056 30.059
101.8 | 30.061 30.064 30.067 30.070 30.073   30.076 30.079 30.082 30.085 30.088
101.9 | 30.091 30.094 30.097 30.100 30.103   30.106 30.109 30.112 30.115 30.118
      |
102.0 | 30.121 30.124 30.126 30.129 30.132   30.135 30.138 30.141 30.144 30.147
102.1 | 30.150 30.153 30.156 30.159 30.162   30.165 30.168 30.171 30.174 30.177
102.2 | 30.180 30.183 30.186 30.188 30.191   30.194 30.197 30.200 30.203 30.206
102.3 | 30.209 30.212 30.215 30.218 30.221   30.224 30.227 30.230 30.233 30.236
102.4 | 30.239 30.242 30.245 30.248 30.250   30.253 30.256 30.259 30.262 30.265
      |
102.5 | 30.268 30.271 30.274 30.277 30.280   30.283 30.286 30.289 30.292 30.295
102.6 | 30.298 30.301 30.304 30.307 30.310   30.312 30.315 30.318 30.321 30.324
102.7 | 30.327 30.330 30.333 30.336 30.339   30.342 30.345 30.348 30.351 30.354
102.8 | 30.357 30.360 30.363 30.366 30.369   30.372 30.375 30.377 30.380 30.383
102.9 | 30.386 30.389 30.392 30.395 30.398   30.401 30.404 30.407 30.410 30.413
      |
103.0 | 30.416 30.419 30.422 30.425 30.428   30.431 30.434 30.437 30.439 30.442
103.1 | 30.445 30.448 30.451 30.454 30.457   30.460 30.463 30.466 30.469 30.472
103.2 | 30.475 30.478 30.481 30.484 30.487   30.490 30.493 30.496 30.499 30.501
103.3 | 30.504 30.507 30.510 30.513 30.516   30.519 30.522 30.525 30.528 30.531
103.4 | 30.534 30.537 30.540 30.543 30.546   30.549 30.552 30.555 30.558 30.561
      |
103.5 | 30.563 30.566 30.569 30.572 30.575   30.578 30.581 30.584 30.587 30.590
103.6 | 30.593 30.596 30.599 30.602 30.605   30.608 30.611 30.614 30.617 30.620
103.7 | 30.623 30.626 30.628 30.631 30.634   30.637 30.640 30.643 30.646 30.649
103.8 | 30.652 30.655 30.658 30.661 30.664   30.667 30.670 30.673 30.676 30.679
103.9 | 30.682 30.685 30.688 30.690 30.693   30.696 30.699 30.702 30.705 30.708
      |
104.0 | 30.711 30.714 30.717 30.720 30.723   30.726 30.729 30.732 30.735 30.738
104.1 | 30.741 30.744 30.747 30.750 30.752   30.755 30.758 30.761 30.764 30.767
104.2 | 30.770 30.773 30.776 30.779 30.782   30.785 30.788 30.791 30.794 30.797
104.3 | 30.800 30.803 30.806 30.809 30.812   30.814 30.817 30.820 30.823 30.826
104.4 | 30.829 30.832 30.835 30.838 30.841   30.844 30.847 30.850 30.853 30.856
      |
104.5 | 30.859 30.862 30.865 30.868 30.871   30.874 30.877 30.879 30.882 30.885
104.6 | 30.888 30.891 30.894 30.897 30.900   30.903 30.906 30.909 30.912 30.915
104.7 | 30.918 30.921 30.924 30.927 30.930   30.933 30.936 30.939 30.941 30.944
104.8 | 30.947 30.950 30.953 30.956 30.959   30.962 30.965 30.968 30.971 30.974
104.9 | 30.977 30.980 30.983 30.986 30.989   30.992 30.995 30.998 31.001 31.003
      |
105.0 | 31.006 31.009 31.012 31.015 31.018   31.021 31.024 31.027 31.030 31.033

     Proportional    kPa   .001  .002  .003  .004  .005  .006  .007  .008  .009
        parts      in. Hg  .000  .001  .001  .001  .001  .002  .002  .002  .003



                                 THINK METRIC

                                 WAVE HEIGHTS


            m
      Feet  Metres     

          ||- 12                       Montainous
          ||
          ||
          ||
          ||
          ||
          ||                           Very High
          ||
          ||
          ||
          ||
          ||
          ||-  6
          ||
          ||                           High
          ||
          ||-  4
          ||                           Very Rough
          ||-  3
          ||                           Rough
          ||-  2
          ||                           Moderate
          ||-  1                       Slight
          ||-  0.5
          ||-  0                       Smooth



                                METRES TO FEET

                           1 metre = 3.2808399 feet


metres       0     .1     .2     .3     .4      .5     .6     .7     .8     .9
       ------------------------------------------------------------------------
       |    ft     ft     ft     ft     ft      ft     ft     ft     ft     ft
       |
 0     |   0.00   0.33   0.66   0.98   1.31    1.64   1.97   2.30   2.62   2.95
       |
 1     |   3.28   3.61   3.94   4.27   4.59    4.92   5.25   5.58   5.91   6.23
 2     |   6.56   6.89   7.22   7.55   7.87    8.20   8.53   8.86   9.19   9.51
 3     |   9.84  10.17  10.50  10.83  11.15   11.48  11.81  12.14  12.47  12.80
 4     |  13.12  13.45  13.78  14.11  14.44   14.76  15.09  15.42  15.75  16.08
 5     |  16.40  16.73  17.06  17.39  17.72   18.04  18.37  18.70  19.03  19.36
       |
 6     |  19.69  20.01  20.34  20.67  21.00   21.33  21.65  21.98  22.31  22.64
 7     |  22.97  23.29  23.62  23.95  24.28   24.61  24.93  25.26  25.59  25.92
 8     |  26.25  26.57  26.90  27.23  27.56   27.89  28.22  28.54  28.87  29.20
 9     |  29.53  29.86  30.18  30.51  30.84   31.17  31.50  31.82  32.15  32.48
10     |  32.81  33.14  33.46  33.79  34.12   34.45  34.78  35.10  35.43  35.76
       |
11     |  36.09  36.42  36.75  37.07  37.40   37.73  38.06  38.39  38.71  39.04
12     |  39.37  39.70  40.03  40.35  40.68   41.01  41.34  41.67  41.99  42.32
13     |  42.65  42.98  43.31  43.64  43.96   44.29  44.62  44.95  45.28  45.60
14     |  45.93  46.26  46.59  46.92  47.24   47.57  47.90  48.23  48.56  48.88
15     |  49.21  49.54  49.87  50.20  50.52   50.85  51.18  51.51  51.84  52.17
       |
16     |  52.49  52.82  53.15  53.48  53.81   54.13  54.46  54.79  55.12  55.45
17     |  55.77  56.10  56.43  56.76  57.09   57.41  57.74  58.07  58.40  58.73
18     |  59.06  59.38  59.71  60.04  60.37   60.70  61.02  61.35  61.68  62.01
19     |  62.34  62.66  62.99  63.32  63.65   63.98  64.30  64.63  64.96  65.29
20     |  65.62  65.94  66.27  66.60  66.93   67.26  67.59  67.91  68.24  68.57
       |
21     |  68.90  69.23  69.55  69.88  70.21   70.54  70.87  71.19  71.52  71.85
22     |  72.18  72.51  72.83  73.16  73.49   73.82  74.15  74.48  74.80  75.13
23     |  75.46  75.79  76.12  76.44  76.77   77.10  77.43  77.76  78.08  78.41
24     |  78.74  79.07  79.40  79.72  80.05   80.38  80.71  81.04  81.36  81.69
25     |  82.02  82.35  82.68  83.01  83.33   83.66  83.99  84.32  84.65  84.97
       |
26     |  85.30  85.63  85.96  86.29  86.61   86.94  87.27  87.60  87.93  88.25
27     |  88.58  88.91  89.24  89.57  89.90   90.22  90.55  90.88  91.21  91.54
28     |  91.86  92.19  92.52  92.85  93.18   93.50  93.83  94.16  94.49  94.82
29     |  95.14  95.47  95.80  96.13  96.46   96.78  97.11  97.44  97.77  98.10
30     |  98.43  98.75  99.08  99.41  99.74  100.07 100.39 100.72 101.05 101.38
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1903

     Volume in drive A has no label
     Directory of A:\

    FILE1903 TXT      2369   1-26-90   3:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   5:54p
    WEA0000  DAT     17664   8-01-89  12:00p
    WEA1984  DAT     17664   8-01-89  12:00p
    WEA1985  DAT     17536   8-01-89  12:00p
    WEA1986  DAT     17536   8-01-89  12:00p
    WEA1987  DAT     17536   8-01-89  12:00p
    WEA1988  DAT     17664   8-01-89  12:00p
    WEA1989  DAT     17521   8-01-89  12:00p
    WEATHER  DOC     12276   8-01-89  12:00p
    WEATHER  EXE     56678   8-01-89  12:00p
    WEATHER  TXT     59008   8-01-89  12:00p
           13 file(s)     254030 bytes
                           59392 bytes free
