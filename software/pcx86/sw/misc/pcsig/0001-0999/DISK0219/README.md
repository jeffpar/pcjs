---
layout: page
title: "PC-SIG Diskette Library (Disk #219)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0219/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0219"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAPMAKER"

    This disk contains some powerful programs designed for making computer
    plotted maps.  MM1 is the simplest requiring only a color graphics
    card and single monitor.  MM2 is more complex and requires both a
    color and a monochrome monitor, for enhanced graphics.  The major
    benefit from this program is that it allows the user to easily turn
    statistical data based on area into a form representing the data
    displayed as a map.
    
    System Requirements:  Color graphics.
    
    How to Start:  Load DOS and type MAPMAKER to enter the main program.
    Consult MANUAL.DOC for program documentation.
    
    Suggested Registration: $55.00 MapMaker
    
    File Descriptions:
    
    MANUAL   DOC  Documentation  (Approximately 20 pages)
    FLAPAN        Data set - NW Florida
    GNV           Data set - Gainsville, Florida
    OFFICES       Data set - sample floorplan
    USA           Data set - contigous USA
    FLA-INC       Statistical data - per capita income (FLAPAN)
    FLA-POP       Statistical data - number of residents by county (FLAPAN)
    SCREEN2  BAS  Screen image files - Circle - Gainesville Population
    SCREEN1  BAS  Screen image files - Choropleth - Office Residency
    USA-CENT      Centroid data set (USA)
    FLA-CENT      Centroid data set (FLAPAN)
    USA-SUN       Statistical data - percent sunny days during an avg year
    GNV-POP       Statistical data - number of residents in 1970
    GNV-65        Statistical data - % of residents 65 years & older, 1970
    OFF-YRS       Statistical data - number of years of occupancy
    SCREEN3  BAS  Screen image files - Circle - N.W. Florida Population
    SCREEN5  BAS  Screen image files - Choropleth - U.S. Sunny Days
    SCREEN4  BAS  Screen image files - Choropleth - Gainesville Elderly
    MM1      EXE  Main program for color system
    MM2      EXE  Main program for color and/or monochrome system
    USA-MSA       Statistical data - subject unknown
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES219.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 219   MapMaker                                          v1 DS
------------------------------------------------------------------------
MANUAL        Documentation  (Approximately 20 pages)
MM1      EXE  Main program - for one moniter system
MM2      EXE  Main program - for two moniter system
FLAPAN        Data set - NW Florida
GNV           Data set - Gainsville, Florida
OFFICES       Data set - sample floorplan
USA           Data set - contigous USA
FLA-POP       Statistical data - number of residents by county (FLAPAN)
FLA-INC       Statistical data - per capita income (FLAPAN)
OFF-YRS       Statistical data - number of years of occupancy by present occupant
GNV-65        Statistical data - percent of residents 65 years and older in 1970
GNV-POP       Statistical data - number of residents in 1970
USA-SUN       Statistical data - percent sunny days during an average year
USA-MSA       Statistical data - subject unknown
FLA-CENT      Centroid data set (FLAPAN)
USA-CENT      Centroid data set (USA)
SCREEN1  BAS  Screen image files - Choropleth - Office Residency
SCREEN2  BAS  Screen image files - Circle - Gainesville Population
SCREEN3  BAS  Screen image files - Circle - N.W. Florida Population
SCREEN4  BAS  Screen image files - Choropleth - Gainesville Elderly
SCREEN5  BAS  Screen image files - Choropleth - U.S. Sunny Days
 
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
***********************************************************************
***********************************************************************

   From the author:

     I am distributing MapMaker as user-supported software.  Users are
   encouraged to copy and distribute the program and data sets on the
   following conditions:
                         1. The program and its data sets are not
                            altered in any way.

                         2. No fee is charged for the copying and/or
                            distribution of the same.

     Among the advantages of the "user-supported" approach is the ability
   of users to evaluate software without large and often risky financial
   investments.  Obviously, the creation and support of software requires
   a substantial investment of time and effort.  If you find MapMaker
   useful, a user's fee/registration payment of $55 is requested. 
   Registered users will receive the following:

                   1. Any program and/or manual updates.

                   2. $25 for submission of new and useful polygon
                      data sets.

                   3. Any or all new data sets from the library
                      of data sets created by or received by
                      the author.

     I've done my best to test the program and develop a clear
   and useful manual.  Please read it carefully.

     I welcome notifications of any program "bugs", and will gladly
   and promptly respond to all questions about the program and/or
   data sets.

     Please direct payments, questions, or comments to:

                             Paul R. Stayert
                             3141 GPA, Univ. of Fla.
                             Gainesville, Fla. 32611

************************************************************************
************************************************************************







***********************************************************************
                M a p M a k e r - USER'S MANUAL  

                                           (C)Copyright Stayert, 1985
***********************************************************************
                        INTRODUCTION

   MapMaker produces two common forms of quantitative maps; CHOROPLETH
(Area Coloring) and GRADUATED CIRCLE, on an IBM/PC color monitor, and
if desired, in black and white on a matrix printer.  Two versions
of the program are available, requiring the following configurations:

     Version 2.1 (mm1.exe)                Version 2.2 (mm2.exe)

      - IBM/PC with 128K RAM               - IBM/PC with 128K RAM
      - 1 320K Disk Drive                  - 1 320K Disk Drive
      - DOS 2.0                            - DOS 2.0
      - Color Monitor                      - Color Monitor
         w/ adapter card                      w/ adapter card
      - Matrix Printer (optional)          - Monochrome Monitor
                                           - Matrix Printer (optional)

   Any set of statistical values may be displayed for corresponding
geographical areas.  Map areas must be comprised of bounded units
such as states, counties, census tracts, or areas delineated by the
user.  On any given map, only one variable is shown for each map unit.
 
   Choropleth maps display statistical variables by using a sequence of
colors (maximum of 3).  Circle maps represent data with proportionately-
sized circles.  Proper usage of both map forms is discussed in detail
later in the manual.  MapMaker can also save and later recall screen
images without going through the create process.

    Directions and suggestions are provided on the screen throughout the
program and it is possible for users who have little or no experience in
mapping to produce maps.  In order to produce statistically meaningful
and visually effective displays, however, users should read the manual
thoroughly prior to creating maps.


                       APPLICATIONS

    Given the appropriate data sets, MapMaker has a great variety of
applications, including scientific research, governmental planning,
business and education.  Researchers and planners often need to display
and identify spatial patterns relating to, for example, social, economic,
and environmental data.  Business decisions often are based on similar
types of information, and additionally, business analysts can map levels
of activity and/or profit for specific territories.  As an educational
tool, MapMaker can be used as an exercise in the creation of quantitative
maps.  An understanding of the data sets can familiarize students with
some of the fundamental aspects of computer-assisted mapping. Although
the manual was written to facilitate use of the program, it also serves
as a brief tutorial for choropleth and graduated circle mapping.

    If "hardcopy" is needed, maps can be printed in monochrome on matrix
printers, or slides may be taken directly from the color screen. Some
suggestions for slide-taking are offered in Appendix C.
-----------------------------------------------------------------------
    This manual is organized as follows:

 PART 1. discusses CHOROPLETH and CIRCLE maps and the type of data
 sets that are required as input.


 PART 2. discusses the steps involved in the creation of a CHOROPLETH
 map.  This information is supplemental, for the most part, because
 directions are displayed on the monochrome screen throughout the
 creation process.


 PART 3. contains a similar type of information for the creation of
 GRADUATED CIRCLE maps.


 APPENDIX A. describes the formats for all data sets that can be used
 as input to MapMaker, and the procedure used to establish them.


 APPENDIX B. lists the names and descriptions of sample data sets that
 are provided with MapMaker in order to demonstrate the program.

 APPENDIX C. contains comments and suggestions for the running of
 MapMaker.
----------------------------------------------------------------------
                PART 1.  PROGRAM OVERVIEW

1-1   Locational Data

    MapMaker combines locational and statistical information in order
to show the distributions of quantities of some variable, throughout a
selected study area.  Locational data may represent any area that is 
divided into sub-regions (polygons) such as the U.S. (by states), a
state (by counties), a city (by census tracts), or even the offices in
a floor plan.  The sub-regions must be bounded or "closed", and there
may be no more than 65 of them.  MapMaker uses vector-type polygon
data that must be digitized and entered into diskette data sets prior
to the creation of a map.  (Appendix A. discribes the format of all
data sets.)
-----------------------------------------------------------------------
1-2   Statistical Data

    Each map unit (polygon) must have a corresponding statistical value.
These values comprise the Statistical data set.  Because the polygons
represent map AREAS, corresponding statistical values must represent
ENTIRE polygons, not merely a point or points within.  For example, the
population of an entire area (county or state), is an appropriate
statistic. The population of a selected city or cities within the
area, however, is NOT appropriate.
                                                                       
    Statistical values must be QUANTITATIVE.  Each value should
represent a quantity of some variable, such as the number of persons,
the number of bushels of corn, or the average income of residents.
Statistical data sets must contain numbers, not words.  The dominant
ethnic group in an area, for example, is a QUALITATIVE variable and
therefore not appropriate.  However, the total number or percentage
of persons who belong to a selected ethnic group, is a QUANTITATIVE
variable and would be appropriate.
-----------------------------------------------------------------------
1-3  Raw and Derived Values

    Quantitative data are either of two possible types, RAW or DERIVED,
and therefore MapMaker offers two types of map display; CHOROPLETH and
GRADUATED CIRCLE.  Consider a situation where the Circle map is used
to display "Total Population" for a selected area. If the polygon data
set were a state (by counties), the total number of persons living in
each county would be represented by a proportionately-sized circle that
would be positioned in the center of each county.  This type of data
display is appropriate.  

    Consider the same map area with unemployment statistics, where the
circles would represent the percentage of the persons who were unemployed.
Again, this is appropriate.

    In the case of Choropleth maps, however, each entire polygon is
colored according to the quantity of a selected variable and therefore
the SIZE, in addition to the COLOR of the polygon, comprise the visual
message.  One would expect a larger area to have more of any variable
(all other things being equal).  Smaller areas would tend to have fewer
of a variable.  Coloring polygons a "higher" or "lower" color because
they are of a particular size to begin with, is a redundancy, resulting
in a distorted visual message to the map reader.
 
    The use of DERIVED values, such as "Persons Per Square Mile" 
(statistic per area), eliminates the effect of the relative sizes of map 
areas, and provides a truer representation of the distribution of a
variable throughout a study area.

    To summarize, Choropleth maps usually require DERIVED values, while
Circle maps can show either type of data, although RAW values may be
preferred. MapMaker can perform the conversion for Choropleth maps if 
the digitizing unit and scale of the original map are known. NOTE: If 
statistical values are already derived, such as percentages, then they 
should be treated as RAW values so that no further manipulation is done.
-----------------------------------------------------------------------
1-4  Center Points of Polygons

    In order to color map areas and position circles, MapMaker includes
a function that calculates the center point (centroid) of each polygon.
Occasionally, the calculated centroids are unusable because the shapes
of some polygons cause the centroids to fall outside of the actual polygon
areas.  Consider the state of Florida, for example.  The center point of
the entire state would fall to the south of the panhandle and to the west
of the peninsula, and therefore outside of the actual state boundaries.
This results in errant coloring on Choropleth maps and misplaced circles
on Graduated Circle maps.  The alternative is the usage of a separate 
centroid data set.  In addition to the correct coloring of map areas,
for Choropleth purposes, it allows the preferred positioning of circles
on Circle maps.  (Appendix A. describes the exact format of all data sets.)
-----------------------------------------------------------------------
1-5  Map Size and Orientation

   MapMaker scales all maps to fit the available screen space, regardless
of the size of the original map.  Therefore, the more numerous the
polygons, the smaller they will appear on the screen, and vice-versa.
In order to maximize the size of maps on the color screen, two formats
are used; Horizontal and Square. If the polygon data set is much longer
in the horizontal dimension (the state of Tennessee, for example), the
horizontal format is used, otherwise a more "squared" format is chosen.
The decision is made internally and is not affected by the user-supplied
directives.  In addition to the altered position of the legend, the only
difference between the two formats is the possibility of a longer legend
caption in the horizontal format.
-----------------------------------------------------------------------
-----------------------------------------------------------------------
               PART 2.  CREATING CHOROPLETH MAPS

2-1  Starting MapMaker

    If a matrix printer is to be used for printing maps, be sure to
initialize the graphics printing mode by typing "graphics" while in
DOS 2.0.
 
    Insert the MapMaker diskette and type "mm1" for a 1-monitor
system, or "mm2" for a 2-monitor system.
----------------------------------------------------------------------
2-2  Polygon Data Set

    Enter the name of the polygon data set to be used.  Include the
diskette drive designation if the diskette is not in the default drive.
For example:    b:flapan
-----------------------------------------------------------------------
2-3  Number of Polygons

    Enter the number of polygons in the polygon data set.  This is
the number of areal units (states, counties, census tracts, for example).
-----------------------------------------------------------------------
2-4  Origin of Digitizer

    The origin of polygon data sets (in terms of X and Y coordinates),
may be either the upper left or lower left corner.  If the origin
is in the lower left corner, an inversion of the Y coordinate is
performed by entering a "2".
-----------------------------------------------------------------------
2-5  Centroids

    Center points (centroids) may be either calculated or entered as
a separate data set. (See section 1-4 for a complete explanation.)
Include drive designation if necessary.
-----------------------------------------------------------------------
2-6  Statistical Data Set

    Enter name of statistical data set and drive designation, if needed.
-----------------------------------------------------------------------
2-7  Raw or Derived Statistical Values

    Choropleth maps usually require DERIVED values in order to be
meaningful. If the statistical data set contains RAW (non-derived)
values, MapMaker can perform the conversion if the digitizing unit
and scale of the original map are known. (See section 1-3 for a
complete explanation.)  If the conversion is desired, (d is entered),
then the following information is requested:
     
      a. A choice of either "Statistic divided by Area" or "Area
divided by Statistic".  Depending on the magnitude of statistical
values and the actual size of the polygons, either choice may be
practical.  For example, in a sparcely-populated area, a map of
"Square Miles per Person" (Area/Statistic) may avoid the very small
numbers that would appear on a map of "Persons per Square Mile"
(Statistic/Area).  For most purposes, "Statistic/Area" data is preferable.

      b. The map scale.  Enter the scale of the map that was used to
create the polygon data set.

      c. The digitizing unit.  Most digitizers use either "inches" or
"centimeters".

      d. The map unit.  This is the areal unit desired for the created
map.  For example, in the case of census tracts, "Acres" or "Hectares"
may be more reasonable than "Sq. Miles" or "Sq. Kilometers".

    After the information is entered and calculated, the minimum and
maximum derived values are shown.  There is an option to respecify
some of the information, in the event the magnitude of these numbers is 
not acceptable (usually because the numbers are too small).  Obviously,
the map scale and digitizing unit (b. and c.) should not be altered.
-----------------------------------------------------------------------
2-8  Legend Numbers

    The physical length of numbers used in Choropleth legends is 
limited to four spaces.  If the maximum statistical value (whether
Derived or Raw) is 9999 or less, there is no problem.  If the maximum
value were 23456, for example, a multiplication factor would be used.
In this case, a "10 X" factor would reduce the maximum value to 2345
which would then fit as a legend number.  Any factor used to reduce 
the magnitude of statistical values MUST be indicated in the map title
or legend caption.
-----------------------------------------------------------------------
2-9  Number of Map Classes

    Choropleth map classes are the categories into which the statistical
values are divided.  Screen resolution and the number of colors available
limit the maximum number of classes to three. If selected properly,
three divisions of data can produce an effective display.
-----------------------------------------------------------------------
2-10  Selection of classes

    A Bar Graph on the color screen illustrates the values associated
with all polygons, arranged in ascending order.  When selecting class
intervals, the following points should be considered:

      a. The minimum of class 1 should be equal to or lower than the
minimum statistical value.  The maximum of the highest class should
be equal to or higher than the maximum statistical value.

      b. There should be no gaps between the maximum values of
classes and the minimum values of following classes.

      c. Even or "rounded" numbers should be used for class minimums
and uneven or "extended" numbers used for class maximums.

    Poorly selected legend values can by annoying and may complicate
the use of legend information when interpreting map content.  In the
following example, the above mentioned rules are followed:
                   ----------------------------
                    The minimum value is  6.4
                    The maximum value is 94.6
                   ----------------------------
     Class 1 min?    6.0                 Class 1 max?   29.9

     Class 2 min?   30.0                 Class 2 max?   59.9

     Class 3 min?   60.0                 Class 3 max?   94.9
    ------------------------------------------------------------------
   NOTE:  Any values that fall outside of specified class ranges will
          not be assigned a class and the corresponding polygons will
          not be colored on the map.  The non-coloring of areas that
          have low values (or values of 0) may be preferable at times.
----------------------------------------------------------------------
2-11  Map Title and Legend Caption

   The title usually describes the map area and the statistical
variable or "map theme".  The title, along with an optional legend 
caption, may include the following information:

           1. Map Area
           2. Description of Statistical Data
           3. Type of Derived Values (if values are derived)
           4. Date of Statistical Data
           5. Data Factor (if any)

   A legend caption may be used to provide additional information about
legend values.  If a data factor is used, it should be indicated in the
legend caption, such as "(X 1000)". If no factor is used, the caption
may contain the date or perhaps the type of derived statistical values,
such as "1970-1980", or "1982 Data", or "Pers/Acre".  The legend caption
in the square map format (see section 1-5) is limited to nine spaces,
but can be much longer in the horizontal format.
----------------------------------------------------------------------
2-12  Selection of Map Colors

   Choropleth map classes can be represented by two sets of three
foreground colors.  Only one set can be used on any map and therefore
up to three classes are possible.  Either set or "palette" may be
used with any of eight background colors.  Most map readers are
accustomed to the notion that "lighter means less" and "darker means
more".  Because map classes correspond to a numerical progression, an
effective color scheme contains a visual progression of color.  
Palette 1 usually offers a good progression of color with White, Cyan,
and Magenta used to color low, middle, and high classes, respectively.
Palette 0 colors can also be effective.  NOTE: An effective color
scheme enables map readers to perceive the general distribution of
data without constant reference to the legend.

   At first, it is probably a good idea to go through the viewing
routine to see how the colors look in various combinations.  When
users become familiar with the colors, the viewing routine may be
unnecessary, and colors can be selected immediately.
---------------------------------------------------------------------
2-13  Class Color Selection

   After selecting the palette and background colors, colors must
be chosen for the individual map classes.  When prompted for the color
of each class, enter the number of the color (1, 2, or 3) from the
palette that has been chosen.
---------------------------------------------------------------------
2-14  Table of Data

   Prior to the display of the map, a table of data is shown on the
monochrome screen.  Values for all polygons, whether derived or raw, 
are shown along with the classes into which they fall.  The table may
be printed on the matrix printer by pressing the SHIFT and PRTSC keys
simultaneously.  Pressing any other key produces the map.
----------------------------------------------------------------------
2-15  The Sub-Menu

   After a map has been drawn on the color screen, it can be modified
by the usage of a sub-menu that is accessed by pressing any key. It is
unlikely that the first run of any map will be perfect and it is often
preferable to alter some aspects of the map.  The options include:

     1. Change of color scheme
     2. Change of class intervals
     3. Change title/caption
     4. Save map to file on diskette
     5. Return to main menu
     6. Exit program

   If a modification is needed that is not offered by the sub-menu, the
create process must be redone by returning to the main menu.

   When the desired version of a map is produced, it can be recorded
in two ways:

     1. It may be saved as a screen file to a diskette (Sub-Menu #4).
        A filename must be specified, along with a drive designation,
        if necessary.  The file can later be recalled and the saved
        map image can be displayed on the color screen without going
        through the create process.

     2. It may be printed on a matrix printer.  This may be done by
        pressing SHIFT and PRTSC immediately following the drawing of
        the map on the color screen (before going to the sub-menu).

        IMPORTANT: To print a map on the matrix printer, it is necessary
                   to initialize the graphics printing mode.  This is
                   done by typing GRAPHICS while in DOS (before running
                   the program). GRAPHICS is the name of a file on the
                   DOS 2.0 disk.  The file will be read but nothing visible
                   will happen. The program can then be run and images on
                   the color monitor can be printed on the matrix printer.
                   (The GRAPHICS command may be included in an AUTOEXEC.BAT
                   file.)

     NOTE: For Choropleth maps, the matrix printer produces images only
           in black and white.  Choropleth classes may, however, be
           represented by a progression of grey tones.  The grey tones
           correspond to particular colors used on the color screen,
           but the colors that make an effective color progression do
           not correspond to grey tones that are effective on matrix
           printer maps.  In order to produce an effective grey
           tone progression on the printer, the colors of map classes
           must be respecified (sub-menu #1).  The choice of background
           and palette is unimportant.  However, the COLORS for map
           classes 1, 2, and 3, must be 1, 2, and 3, respectively.
           This produces a poor color progression on the color screen,
           but produces an effective sequence on the matrix printer.
-----------------------------------------------------------------------
-----------------------------------------------------------------------
                PART 3.  CREATING GRADUATED CIRCLE MAPS

3-1  Starting MapMaker  (see section 2-1)
--------------------------------------------------------------------
3-2  Polygon Data Set  (see section 2-2)
--------------------------------------------------------------------
3-3  Number of Polygons  (see section 2-3)
--------------------------------------------------------------------
3-4  Origin of Digitizer  (see section 2-4)
--------------------------------------------------------------------
3-5  Centroids   (see section 2-5)
--------------------------------------------------------------------
3-6  Statistical Data Set  (see section 2-6)
--------------------------------------------------------------------
3-7  Legend Circles

   The legend on circle maps contains three circles that are used as
references for estimating the values of circles on the map.  Legend
circles should range in size from a value at or near the minimum
statistical value, to a value at or near the maximum statistical value.
Values for legend circles should be even or "rounded".

     For example:
      -------------------------------------------
        The minimum statistical value is   113
        The maximum statistical value is  1464

                   Enter the value for the smallest circle   100

                   Enter the value for the middle circle     750

                   Enter the value for the largest circle   1500
-----------------------------------------------------------------------
3-8  Circle Size (diameter)

   Circle size is often a matter of individual preference.  Maps
with fewer polygons are able to have larger circles without the severe
overlapping that occurs on a map that has many (and therefore smaller)
polygons.  The best strategy is to try a size and later modify it if
it is not appropriate. Overlapping may cause problems with some circles.
----------------------------------------------------------------------
3-9  Circle Calculation (square root vs. other)

   The standard formula for calculating the area of circles involves
square roots.  Research in visual perception indicates that map readers
tend to underestimate the area of large circles, relative to smaller
ones.  Use of a 1.75 root is a common alternative to using the square
root.  This has the effect of exaggerating the sizes of larger circles.
Because the maximum diameter has already been specified, the exaggeration
is accomplished by reducing the sizes of smaller circles.  Obviously,
this decision is very subjective and the use of any root between 1.7
and 2.0 may be considered reasonable. Experimentation is recommended.
-----------------------------------------------------------------------
3-10  Map Title and Legend Caption

   The map title should describe the map area and the nature of the
statistical data.  A legend caption may be used to describe further
the statistical values or perhaps to indicate the date.  The legend
caption in the square format (see section 1-5) is limited to nine
spaces, but can be longer in the horizontal map format.
-----------------------------------------------------------------------
3-11  Selection of Circle/Map Colors

   Unlike the selection of color for choropleth maps, colors for circle
maps cannot be selected without going through the viewing routine.  
As with choropleth maps, any of eight background colors may be selected,
but on circle maps, each of the two-color sets (palettes) is capable of
four color combinations.  Users are urged to follow the directions on
the monochrome screen when selecting circle colors.
-----------------------------------------------------------------------
3-12  Table of Data

   A listing of polygons and associated values is shown on the 
monochrome screen prior to the display of a map. The table may be
printed on the matrix printer by pressing the SHIFT and PRTSC keys
simultaneously.  Pressing any other key produces the map.
-----------------------------------------------------------------------
3-13  The Sub-Menu

   The sub-menu can be used to modify some elements of the map.  It can
be accessed by pressing any key after the map has been drawn.  The map
modification options include:

     1. Change color scheme
     2. Change circle size
     3. Change legend values
     4. Change title/caption
     5. Save map to file on diskette
     6. Return to main menu
     7. Exit program

   If a modification is needed that is not offered by the sub-menu, 
the create process must be redone by returning to the main menu.  As
with Choropleth maps, circle maps may be saved as screen files or
printed on a matrix printer (see section 2-15).
-----------------------------------------------------------------------
-----------------------------------------------------------------------
            APPENDIX A. FORMAT AND CREATION OF DATA SETS

A-1  Format of Polygon Data Sets

   All data sets required by MapMaker are comprised of a sequence of
data lines.  The Polygon data set is by far the largest and most complex
because it contains the entire framework of the map.  Polygon data sets
consist of points that form the boundaries of map areas, and are expressed
in terms of X and Y coordinates.  The conversion of map points to two-
dimensional coordinates is called DIGITIZING.  A reference point (origin)
is established for X and Y measurements and when the map is positioned
properly, each point can be referenced by a coordinate pair.  The
digitizer origin may be in the upper left or lower left corner. 

   The measurement units usually are either inches or centimeters.  A
digitizing instrument or even an underlay of graph paper can be used
to obtain coordinate measurements.  The X coordinate measurement always
increases from left to right, but the Y coordinate is inverted from
one digitizer format to the other.  MapMaker can use either orientation
by performing a conversion when necessary.

   Boundaries of polygons that comprise maps are expressed by sequences of
coordinate pairs, where each pair represents a point along the boundary.
Points are determined by the person doing the digitizing and commonly are
located in places where the boundary changes direction, or are spaced
evenly in order to simulate a curved line.  It is important to realize
that the computer draws only straight lines and the curvature of map
lines must be simulated by the use of small segments of straight lines.
The number of points used to represent map lines is the result of a
subjective decision, although to simulate curved lines, the use of
a large number of points will result in a more accurate line than one
that is simulated by only a few points.

   The starting point in a polygon sequence may be selected arbitrarily
but the ending point must be identical to the starting point, so that
the polygon is closed.  Therefore, the starting coordinate pair will
always be the same as the ending pair, and the number of coordinate
pairs for any polygon will be one more than the actual number of points
that have been defined for that polygon (because one pair is listed twice).

   Each set of coordinate pairs that comprise a polygon must be preceeded
by a HEADER line of information that contains:

     1. a 3-character (or number) polygon identifier
     2. a separating COMMA
     3. the number of coordinate pairs that comprise the polygon

   The following is an example of a simple 2-polygon data set:


        Bak  ,  5            The order of polygon coordinate SETS is
        2.0    1.0        unimportant, as long as the same sequence is
        4.0    1.0        used in the Statistical and Centroid (if any)
        4.0    4.0        data sets. For counties, an alphabetical order
        1.0    4.0        is useful, and a numerical order can be used 
        2.0    1.0        for units such as census tracts.
        Mar  ,  7
        4.5    3.0           Note that the header lines contain the polygon
        6.5    3.0        identifier (Bak for Baker, Mar for Marion), a
        6.5    4.5        comma, and the # of coordinate pairs that follow.
        6.0    5.0       
        5.5    6.0           The first coordinate is the X coordinate and
        4.0    5.0        the second is the Y coordinate. Note also that
        4.5    3.0        the first coordinate pair is identical to the
                          last one, thus closing the polygon.

   There is no limit to the number of coordinate pairs that comprise any
polygon, although there may be no more than 65 polygons.  Neighboring
polygons (map areas) contain identical coordinates along common boundaries
because each polygon must be a separate, closed, coordinate set. Polygons
do not have to be connected to each other.

   Although the creation of a polygon data set can be tedious, once it
is established, it can serve as a base map for an infinite number of
statistical displays, thus justifying the effort or expense.
-----------------------------------------------------------------------
A-2  Format of Statistical Data Sets

   Statistical data sets are comprised of a sequence of lines, each 
containing a value that corresponds to a particular polygon.  The order
of values MUST be identical to the order of polygons in the polygon data
set. If a map has 15 polygons (counties, etc.), then a statistical data 
set for that map should contain 15 statistical values, in the appropriate
order. Of course, for each polygon data set, there may be an infinite
number of statistical data sets, although only one is used per map.
------------------------------------------------------------------------
A-3  Format of Centroid Data Sets

   Section 1-4 discusses the need or preference for a separate centroid
data set (instead of having the program calculate the centroids). Centroid
data sets consist of X,Y coordinate pairs, one for each map unit, or
polygon.  Aside from being located INSIDE the boundary of each polygon,
the location of centroids is a subjective decision made by the person who
does the digitizing.  Choropleth maps require only that the centroids be
located within polygon boundaries, and the more important issue is that
of where circles would be best located.  This could be in a particularly
"open" part of the polygon, although not necessarily in the middle.  A
data set of such locations would be acceptable for Choropleth maps and
ideal for Circle maps.

   Remember, for a 15 unit polygon data set, an appropriate Centroid
data set would contain 15 lines, each having 1 coordinate pair.  Only
the polygon data set contains more lines than there are polygons.
------------------------------------------------------------------------
A-4  Creation of Data Sets

   All data sets required by MapMaker are simply sequential lines of
either coordinate pairs or statistical values.  Any line editor or word-
processing routine may be used to create and store such data sets.  The
EDLIN line editor provided with IBM/DOS can be used to create and 
modify data sets.  A newly-created polygon data set would probably
require editing because it is difficult to digitize and key such a
large set of numbers without errors.

NOTE:

  ** Arrangements may be made with the program's author to create and
     test customized polygon data sets.

  ** The author will pay $25.00 for the donation of any new and useful 
     polygon data set. (data set must be of potential interest to others)

  ** Registered users may receive, free of charge, copies of new data
     sets existing in author's library.
-----------------------------------------------------------------------
            APPENDIX B.  SAMPLE DATA SETS

   The following is a list of sample data sets that are provided with
MapMaker for purposes of demonstration.  Complete descriptions are
given so that each may be used properly.  (Appendix A describes the
format of all data sets used with MapMaker.)

B-1  Sample Data Sets

Polygon Data Sets          Descriptions
 ----------------     -------------------------------

   flapan  ------------ N.W. Florida (by counties, alphabetically)
                      - 16 polygons
                      - UPPER LEFT digitizer origin
                      - digitized in INCHES
                      - scale 1 : 950,000
                 **** - SEPARATE centroid file needed (fla-cent)

    gnv    ------------ Gainesville, Florida (by C.Tracts, numerically)
                      - 17 polygons
                      - UPPER LEFT digitizer origin
                      - digitized in INCHES
                      - scale 1 : 4,000
                      - NO separate centroid file needed (calculate)

  offices  ------------ Sample floor plan (by offices, numerically)
                      - 34 polygons
                      - LOWER LEFT digitizer origin
                      - scale and unit not needed
                        (derived values NOT needed-not geog.area)

    usa    ------------ Contiguous U.S. (by states, alphabetically)
                      - 48 polygons
                      - LOWER LEFT digitizer origin
                      - digitized in INCHES
                      - scale 1 : 10,000,000
                 **** - SEPARATE centroid file needed (usa-cent)
---------------------------------------------------------------------

Statistical Data                     Description
----------------      -------------------------------------------------

fla-pop (flapan)      # of residents in each county in 1970  (raw)

fla-inc (flapan)      per capita income (dollars) in 1975  (derived)


off-yrs (offices)     # years of occupancy by present occupant 


gnv-65  (gnv)         % of residents 65 yrs and older in 1970 (derived)

gnv-pop (gnv)         # of residents in 1970 (raw)


usa-sun (usa)         Percent sunny days during an ave. year (derived)

usa-msa (usa)         Percentage of Population Living in Urban Areas in
                      1980  (derived)
------------------------------------------------------------------------

Centroid Data Sets              Corresponding Polygon Data
------------------             -----------------------------

   fla-cent                             flapan

   usa-cent                              usa
-----------------------------------------------------------------------
B-2  Screen Files

   A few files of saved screen images are provided so that examples of
previously created maps may be seen.  The screen files may be accessed
by going through routine #3 from the main menu.  When prompted for the
name of a saved screen file, enter one of the following, with the
appropriate drive designation, if necessary:

   Screen1     (Choropleth - Office Residency)

   Screen2     (Circle - Gainesville Population)

   Screen3     (Circle - N.W. Florida Population)
 
   Screen4     (Choropleth - Gainesville Elderly)

   Screen5     (Choropleth - U.S. Sunny Days)
-----------------------------------------------------------------------
-----------------------------------------------------------------------
             APPENDIX C. COMMENTS AND SUGGESTIONS

   MapMaker does not offer many opportunities for respecifying map
elements during the create process.  Even with the best conceived plan
and careful specification, resulting maps usually require some 
alteration that is not apparent until the map is produced. Users are
encouraged to continue the create process, even though a directive may
not have been specified perfectly.  Most errors can be corrected by
using sub-menu modifications. 

 - Make a backup copy of the MapMaker diskette.  The DISKCOPY function
   provided with DOS can do this easily.

 - MapMaker was written in BASIC and is presented in compiled form. In
   addition to allowing the program to run faster, this protects the code.

 - MapMaker and its sample data sets fill up much of one diskette.
   Additional diskettes will be needed to store new data sets, including
   saved screen files.  Always make a backup copy of important data sets.

 - To print maps on a matrix printer, it is necessary to initialize
   GRAPHICS while in DOS (BEFORE running program). See section 2-15.
   **Be sure to respecify color sequence when printing Choropleth maps.

 - The program may be interrupted at any time by pressing the CTRL
   and BREAK keys simultaneously.

 - For EXTREMELY small-scale polygon data sets, such as the "usa" data
   set, it may be preferable to enter pre-derived statistical values for
   Choropleth mapping. The area calculating routine within MapMaker
   will exaggerate digitizing imperfections, and thus yield imperfectly
   derived statistics.

 - If messages such as "Division by zero", or "Overflow" appear during
   program execution, there is probably an error in one or more of the
   data sets. Check the polygon data set for unclosed polygons and/or
   incorrect number of coordinates specified in headers.  Check other
   data sets for proper number of data lines.

 - For purposes of convenience, system files (from DOS) may be
   added to the diskette containing MapMaker.

 - Slides taken from the color monitor can be very effective for
   presentation purposes.  Camera lenses with relatively long focal
   lengths (135mm or longer) tend to reduce the curvature of the
   screen.  Shutter speeds faster than 1/8 of a second should NOT
   be used.  The following is a reference exposure setting:
           
        250mm lens,  200ISO film, f/8  at  1 second

   Be sure to eliminate any room lighting in order to avoid reflection
   by the screen.  Always bracket exposures.
-----------------------------------------------------------------------

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0219

     Volume in drive A has no label
     Directory of A:\

    MANUAL   DOC     42005   1-01-80  12:15a
    MM1      EXE     83968   1-01-80  12:44a
    MM2      EXE     82560   1-01-80  12:30a
    FLAPAN            2929   1-01-80   2:18a
    GNV               3304   1-01-80   1:38a
    OFFICES           2751   1-01-80   2:34a
    USA              10641   1-01-80   1:46a
    FLA-POP            193   1-01-80  12:14a
    FLA-INC            193   1-01-80  12:12a
    GNV-65             205   1-01-80  12:25a
    GNV-POP            101   1-01-80   1:42a
    OFF-YRS            105   1-01-80  12:17a
    USA-SUN            193   1-01-80   2:10a
    USA-MSA            290   1-01-80  12:04a
    FLA-CENT           193   1-01-80  12:23a
    USA-CENT           673   1-01-80   1:26a
    SCREEN1  BAS     16512   1-01-80  12:25a
    SCREEN2  BAS     16392   1-01-80  12:39a
    SCREEN3  BAS     16512   1-01-80  12:28a
    SCREEN4  BAS     16512   1-01-80  12:33a
    SCREEN5  BAS     16512   1-01-80   1:40a
    FILES219 TXT      1455  12-16-85  11:15a
           22 file(s)     314199 bytes
                           32768 bytes free
