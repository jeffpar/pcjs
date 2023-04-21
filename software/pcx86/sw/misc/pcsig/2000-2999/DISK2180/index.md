---
layout: page
title: "PC-SIG Diskette Library (Disk #2180)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2180/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2180"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "STARSIDE"

    If you enjoy looking at the sky, use STARSIDE to view the stars in a
    new light.  It's an educational astronomy program designed to generate
    star maps from any place and any time in the world.  The positions of
    the Sun, Moon, and planets can be included in the maps you print from
    STARSIDE.  It can also predict sun, and moon eclipse dates.
    
    Since STARSIDE has a large database of stars, it calculates the best
    times for viewing celestial objects.  Merge, add, change, search, and
    create a customized database to fit your needs.
    
    This a user friendly, interactive tool for any person who wants to
    learn more about astronomy.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2180.TXT

{% raw %}
```
Disk No: 2180                                                           
Disk Title: Starside                                                    
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: STARSIDE                                                 
Author Version: 2.3                                                     
Author Registration: $20.00                                             
Special Requirements: EGA.                                              
                                                                        
If you enjoy looking at the sky, use STARSIDE to view the stars in a    
new light.  It's an educational astronomy program designed to generate  
star maps from any place and any time in the world.  The positions of   
the Sun, Moon, and planets can be included in the maps you print from   
STARSIDE.  It can also predict sun, and moon eclipse dates.             
                                                                        
Since STARSIDE has a large database of stars, it calculates the best    
times for viewing celestial objects.  Merge, add, change, search, and   
create a customized database to fit your needs.                         
                                                                        
This a user friendly, interactive tool for any person who wants to      
learn more about astronomy.                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP1.DOC

{% raw %}
```

----------------EDIT-------------------
GET SYSTEM TIME.
CREATE A DATABASE OF [NAME MAG RA DEC].
ADD TO AN DATABASE IN MEMORY.
CHANGE DATABASE IN MEMORY.
CLEAR MEMORY OF DATABASE.

-----------FILE------------
RECALL DATABASE TO MEMORY.
SAVE CHANGED DATABASE.
DIRECTORY OF DEFAULT DRIVE.
PRINT STAR MAPS/COORDINATES.
MERGE DATABASES.

----------PLOT---------
SETUP PLOT PARAMETERS
DISPLAY CARTESIAN PLOT.
DISPLAY POLAR PLOT.
PREDICT ECLIPSES OR PRECESSION.

-------------------------HORIZON-------------------------
CONVERT A DATABASE FROM CELESTIAL TO HORIZON COORDINATES.
CHANGE GEOGRAPHICAL DATA.

SAMPLE RUN:
READ IN DATABASE OF CELESTIAL COORDINATES USING FILE.
SELECT ALL OPTION OF PLANET FUNCTION TO ADD CELESTIAL
COORDINATES OF PLANETS/SUN/MOON TO DATABASE IN MEMORY.
NOW SELECT HORIZON FUNCTION TO CONVERT CELESTIAL
COORDINATES TO HORIZON COORDINATES.
PLOT DATA BASE.

-----------------------SOL SYSTEM------------------------
CALCULATE CELESTIAL COORDINATE OF SUN/MOON/PLANETS.
RESULT MAY BE CONVERTED TO HORIZON COORDINATES AS ABOVE.
ENTER Y AT DEFAULT? TO RETAIN TIME AND GEOGRAPHICAL VALUES.
SELECT ALL OPTION TO ADD TO AN EXISTING DATABASE.


------------------------FUNCTION-----------------------------
TIME LAPSE FUNCTION. INCREMENT DAY/HOUR.DECIMAL HOURS MAY BE
USED AS INCREMENT FOR SUNRISE. JULIAN DATE TO CALENDAR DATE.

--------------------------SHELL------------------------------
EXIT TO OPERATING SYSTEM. THE DEFAULT DRIVE MUST HAVE
THE COMMAND.COM . YOU MAY USE OPERATING SYSTEM COMMANDS
ASSOCIATED WITH COMMAND.COM . TYPE EXIT TO RETURN TO PROGRAM.

-------------------QUIT---------------------
EXIT PROGRAM AND RETURN TO OPERATING SYSTEM.


```
{% endraw %}

## HELP2.DOC

{% raw %}
```
------------------------SET UP-------------------------
CHANGE THE PLOT PARAMETERS SUCH AS YMIN/YMAX/XMIN/XMAX
COLOR OF STARS/MAGNITUDE FILTER/REALTIME DELAY AND INCREMENT.

------------------------WINDOW-------------------------
SHOW DEFAULT WINDOW OF DATABASE. THIS IS LOOKING SOUTH.
MAGNITUDE IS INDICATED BY SIZE OF PLOTTED OBJECT.
ONCE SELECTED PRESS E TO SHOW OPTIONS.

-------------------------ATLAS---------------------------
SHOW ATLAS OF DATABASE WITH ZENITH AT THE CENTER AND ZERO
DEGREES AT THE BOUNDARY.

------------------------ECLIPSE--------------------------
SOLAR/LUNAR ECLIPSE ROUTINES. WINDOW IS ACCEPTANCE RANGE FOR
MATCHING.

------------------------PRECESS--------------------------
PRECESSION CALCULATION GIVEN EPOCH 1950.0 OR EPOCH 2000.0.

```
{% endraw %}

## HELP3.DOC

{% raw %}
```
-----------------------------TIME-------------------------------
SELECT THIS TO USE THE SYSTEM TIME AND DATE.

-----------------------------ENTER-------------------------------
START A NEW DATABASE BY SELECTING THIS OPTION. FIRST ENTER A NAME
OF THE OBJECT. THEN ENTER MAGNITUDE ON THE NEXT LINE. ON THE LAST
LINE ENTER RIGHT ASCENSION FIRST IN DECIMAL HOURS. NEXT ENTER THE
DECLINATION IN DECIMAL DEGREES.

AT ANY PROMPT ENTER Q TO RETURN.

------------------------------ADD--------------------------------
ADD TO A DATABASE IN MEMORY. USE THE SAME FORMAT:

LINE1 : NAME
LINE2 : MAGNITUDE
LINE3 : RA    DEC

AT ANY PROMPT ENTER Q TO RETURN.

--------------------------CHANGE---------------------------
CHANGE A DATABASE IN MEMORY. PRESS ENTER TO ACCEPT DEFAULT.
TO CHANGE VALUE TYPE NEW VALUE THEN PRESS ENTER.
TO ADD TO DATABASE TYPE ADD AT NAME PROMPT AND PRESS ENTER.
TO DELETE FROM A DATABASE TYPE DEL AT NAME PROMPT AND PRESS
ENTER.
TO FIND AN ITEM TYPE FIND AT NAME PROMPT AND PRESS ENTER.

AT ANY CHANGE ENTER Q TO RETURN.

--------------------------CLEAR----------------------------
CLEAR DATABASE CURRENTLY IN MEMORY.

```
{% endraw %}

## HELP4.DOC

{% raw %}
```
--------------------RECALL---------------------
RECALL DATABASE TO MEMORY. JUST ENTER FILENAME.

--------------------SAVE---------------------
SAVE A DATABASE FROM MEMORY TO DEFAULT DRIVE.

--------------------DIR----------------------
SHOW THE DIRECTORY OF DEFAULT DRIVE.

--------------------PRINT------------------------
PRINT DATABASE IN MEMORY TO DEFAULT LINE PRINTER.
MAKE CELESTIAL MAPS OR SIMPLY LIST COORDINATES.

--------------------MERGE----------------------------
SELECT THIS OPTION TO ADD ANOTHER DATABASE TO MEMORY.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2180

     Volume in drive A has no label
     Directory of A:\

    STARSIDE EXE    205731   7-12-90  11:42a
    READ     ME      17428   1-03-80   5:26p
    HELP3    DOC      1161   7-02-90  11:13p
    ASTRO    DAT     58566   7-08-90  11:02p
    HELP4    DOC       547   7-02-90  11:01p
    HELP1    DOC      1721   7-06-90   3:28p
    HELP2    DOC       785   7-06-90   3:22p
    GO       BAT        38  10-19-87   3:56p
    GO       BAK       540   1-01-80   2:48a
    GO       TXT       771   1-01-80  12:02a
    FILE2180 TXT      1999   8-09-90  10:50a
           11 file(s)     289287 bytes
                           27648 bytes free
