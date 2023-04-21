---
layout: page
title: "PC-SIG Diskette Library (Disk #1183)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1183/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1183"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MTOOL & CONVERT"

    MTOOL is an easy-to-use mathematical tool used to define and
    analyze functions of a single variable.  The speed, power, and ease of
    use make it ideal for science, engineering, and math students.
    
    This program can evaluate a function for a range of points or for a
    single point of the independent variable.  It can numerically evaluate
    derivatives and integrals.  It can find solutions for the function, and
    it can plot the function using CGA, EGA, VGA, or Hercules Graphics.
    
    CONVERT is a conversion calculator that accepts arguments from the
    command line and shows a list of equivalent quantities of different
    units (English vs. Metric).  This program is very useful because it
    converts a variety of units concerning distance, area, volume, time,
    rate, heat, energy, and force.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONVERT.DOC

{% raw %}
```









                                     CONVERT

                                      UNITS
                                   CONVERSION
                                     UTILITY








                                   USER'S GUIDE
                                   VERSION 1.1









                     (C) COPYRIGHT 1988 - ALL RIGHTS RESERVED
                                        by
                                  MARTIN J. MAHER
                                  MJM ENGINEERING
                                  P.O. BOX 2027
                                  HAWTHORNE,CA 90251
































  
       Convert is a unit conversion utility for MS-DOS computers. The
  usage directions for Convert are very simple.  At the DOS prompt type
  "convert" followed by a quantity and a unit.  Convert reads the
  argument list and types a list of unit conversions.  Here's a sample:
  
          C>convert 10 mi
  
          10 mi =   5.2800000000E+04 feet
                =   1.7600000000E+04 yards
                =   8.68976 nautical miles
                =   1.6093440000E+04 meters
                =   16.09344 kilometers
  
       Convert works best on hard disk systems.  Make sure that
  Convert.exe is in a directory on your path and you will be able to
  use it from anyplace in your system.  Since the Turbo Pascal 4.0
  source code for Convert comes with the program, you can customize
  your version to support any conversions you wish.
  
       Most of the rest of this document is a table of units supported
  by Convert with input strings that Convert recognizes and output
  units for that input.  The last two pages concern legalities and the
  requested contribution.
  






























                                        1










  
       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Acre           acre                    square feet
                      acres                   square yards
                                              square miles
                                              square meters
                                              square kilometers
  
       Astronomical   au                      meters
         Units        astronomical unit       kilometers
                      astronomical units      miles
                                              light years
                                              parsecs
  
       BTU            btu                     joules
                      btus                    foot-pounds
                      BTU                     calories
                      BTUs                    kilowatt hours
  
       Calories       cal                     joules
                      calorie                 foot-pounds
                      calories                ergs
                                              BTU's
                                              kilowatt-hours
                                              electron volts
  
       Calories/sec   cal/s                   watts
                      cal/sec                 kilowatts
                      calories/second         foot-pounds/sec
                                              horsepower
  
       Centimeters    cm                      millimeters
                      centimeter              meters
                      centimeters             inches
                                              feet
  
       Cubic          cc                      cubic millimeters
        centimeters   cubic cm                cubic meters
                      cubic centimeter        cubic inches
                      cu cm                   cubic feet
                      cubic centimeters       cubic yards
                                              liters
                                              gallons
                                              quarts
                                              pints
                                              ounces
  






                                        2










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Cubic feet     cubic ft                cubic inches
                      cubic foot              cubic yards
                      cubic feet              cubic centimeters
                      cu ft                   cubic meters
                                              gallons
                                              liters
  
       Cubic inches   cubic inch              cubic feet
                      cubic in                cubic yards
                      cubic inches            cubic millimeters
                      cu in                   cubic centimeters
                                              cubic meters
                                              gallons
                                              liters
  
       Cubic          cubic km                cubic meters
         kilometers   cubic kilometer         cubic feet
                      cubic kilometers        cubic yards
                      cu km                   cubic miles
  
       Cubic meters   cubic m                 cubic millimeters
                      cubic meter             cubic centimeters
                      cubic meters            cubic kilometers
                      cu m                    cubic inches
                                              cubic feet
                                              cubic yards
                                              cubic miles
  
       Cubic miles    cubic mi                cubic feet
                      cubic mile              cubic yards
                      cubic miles             cubic meters
                      cu mi                   cubic kilometers
  
       Cubic yards    cu yd                   cubic inches
                      cubic yard              cubic feet
                      cubic yards             cubic centimeters
                                              cubic meters
                                              gallons
                                              liters
  












                                        3










       UNIT         INPUT STRINGS             OUTPUT UNITS
       ----         -------------             ------------
  
       Days           day                     seconds
                       days                    minutes
                                               hours
                                               weeks
                                               months
                                               years
                                               solar days
                                               sidereal days
                                               solar months
                                               solar years
                                               sidereal months
  
       Degrees        deg                     radians
                       degree
                       degrees
  
       Dynes          dyne                    newtons
                      dynes                   pounds
                      dy                      ounces
  
       Electron       ev                      joules
         volts        electron volt           foot-pounds
                      electron volts          ergs
                                              calories
  
       Ergs           erg                     joules
                      ergs                    foot-pounds
                                              calories
                                              electron volts
  
       Feet           ft                      inches
                      foot                    yards
                      feet                    miles
                                              centimeters
                                              meters
                                              kilometers
  
       Feet per sec   ft/s                    mph
                      feet per sec            meters/sec
                      feet per second         kilometers/hr
                      ft/sec
  
       Foot-pounds    ft-lb                   joules
                      foot-pound              ergs
                      foot-pounds             calories
                                              BTU's
                                              kilowatt-hours
                                              electron volts
  



                                        4










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Foot-pounds    ft-lb/s                 watts
        per second    ft-lb/sec               kilowatts
                      foot-pound/sec          calories/sec
                      foot-pounds/sec         horsepower
  
       Gallons        gal                     cubic inches
                      gallon                  cubic feet
                      gallons                 cubic yards
                                              cubic millimeters
                                              cubic centimeters
                                              cubic meters
                                              liters
                                              quarts
                                              pints
                                              ounces
  
       Grams          gm                      kilograms
                      gram                    ounces
                      grams                   pounds
                      gram-force
                      grams-force
  
       Horsepower     hp                      foot-pounds/sec
                      horsepower              watts
                                              kilowatts
                                              calories/sec
  
       Hours          hr                      seconds
                      hour                    minutes
                      hours                   days
                                              solar days
                                              sidereal days
                                              weeks
  
       Inches         in                      feet
                      inch                    yards
                      inches                  millimeters
                                              centimeters
                                              meters
  
       Joules         j                       foot-pounds
                      joule                   ergs
                      joules                  calories
                                              BTU's
                                              kilowatt-hours
                                              electron volts
  





                                        5










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Kilograms      kg                      grams
                      kilogram                pounds
                      kilograms               tons
                      kilogram-force          metric tons
                      kilograms-force
  
       Kilometers     km                      meters
                      kilometer               feet
                      kilometers              yards
                                              miles
                                              nautical miles
  
       Kilometers     kph                     mph
         per hour     kilometers per hour     feet/sec
                      km/hr                   meters/sec
  
       Kilowatts      kw                      watts
                      kilowatt                foot-pounds/sec
                      kilowatts               calories/sec
                                              horsepower
  
       Kilowatt       kw-hr                   joules
         hours        kilowatt-hour           foot-pounds
                      kilowatt-hours          calories
                                              BTU's
  
       Light years    light year              meters
                      light years             kilometers
                      ly                      miles
                      lightyear               astronomical units
                      lightyears              parsecs
  
       Liters         l                       cubic millimeters
                      liter                   cubic centimeters
                      liters                  cubic meters
                                              cubic inches
                                              cubic feet
                                              cubic yards
                                              gallons
                                              quarts
                                              pints
                                              ounces
  
       Meters         m                       millimeters
                      meter                   centimeters
                      meters                  kilometers
                                              inches
                                              feet
                                              yards
                                              miles
  

                                        6










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Meters per     m/s                     kilometers/hour
          second      meters per sec          mph
                      meters per second       feet/sec
  
       Metric tons    metric ton              kilograms
                      metric tons             pounds
                                              tons
  
       Miles          mi                      feet
                      mile                    yards
                      miles                   nautical miles
                                              meters
                                              kilometers
  
       Miles per      mph                     feet/sec
          hour        miles per hour          meters/sec
                      mi/hr                   kilometers/hour
  
       Millimeters    mm                      centimeters
                      millimeter              meters
                      millimeters             inches
                                              feet
  
       Minutes        min                     seconds
                      minute                  hours
                      minutes                 days
                                              solar days
                                              sidereal days
  
       Months         mo                      days
                      month                   weeks
                      months                  sidereal months
                                              years
                                              solar years
                                              sidereal years
  
       Nautical       nm                      feet
          miles                               yards
                                              miles
                                              meters
                                              kilometers
  
       Newtons        nt                      dynes
                      newton                  pounds
                      newtons                 tons
  






                                        7










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Ounces         oz                      gallons
                      ounce                   quarts
                      ounces                  pints
                                              liters
                                              cubic millimeters
                                              cubic centimeters
                                              cubic meters
                                              cubic inches
                                              cubic feet
                                              cubic yards
  
       Parsecs        parsec                  meters
                      parsecs                 kilometers
                                              miles
                                              astronomical units
                                              light years
  
       Pints          pt                      gallons
                      pint                    quarts
                      pints                   ounces
                                              liters
                                              cubic millimeters
                                              cubic centimeters
                                              cubic meters
                                              cubic inches
                                              cubic feet
                                              cubic yards
  
       Pounds         lb                      ounces
                      pound                   newtons
                      pounds                  dynes
                                              kilograms
                                              grams
                                              tons
                                              metric tons
  
       Quarts         qt                      gallons
                      quart                   pints
                      quarts                  ounces
                                              liters
                                              cubic millimeters
                                              cubic centimeters
                                              cubic meters
                                              cubic inches
                                              cubic feet
                                              cubic yards
  
       Radians        rad                     degrees
                      radian
                      radians
  

                                        8










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Seconds        s                       minutes
                      sec                     hours
                      second                  days
                      seconds                 solar days
                                              sidereal days
  
       Sidereal days  sidereal day            seconds
                      sidereal days           minutes
                                              hours
                                              days
                                              years
                                              solar days
                                              sidereal months
                                              solar years
                                              sidereal years
  
       Sidereal       sidereal month          days
         months       sidereal months         months
                                              years
                                              solar years
                                              sidereal years
  
       Sidereal       sidereal year           days
         years        sidereal years          solar days
                                              sidereal days
                                              years
                                              solar years
                                              sidereal months
  
       Solar days     solar day               seconds
                      solar days              minutes
                                              hours
                                              days
                                              sidereal days
                                              sidereal months
                                              years
                                              solar years
                                              sidereal years
  
       Solar years    solar year              days
                      solar years             solar days
                                              sidereal days
                                              years
                                              sidereal years
  
       Square         sq cm                   square meters
        Centimeters   square centimeters      square inches
                                              square feet
                                              square yards
  


                                        9










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Square feet    sq ft                   square inches
                      square foot             square yards
                      square feet             acres
                                              square miles
                                              square millimeters
                                              square centimeters
                                              square meters
                                              square kilometers
  
       Square inches  sq in                   square feet
                      square inches           square yards
                                              square millimeters
                                              square centimeters
                                              square meters
  
       Square         sq km                   square meters
        kilometers    square kilometer        square feet
                      square kilometers       square yards
                                              acres
                                              square miles
  
       Square meters  sq m                    square millimeters
                      square meters           square centimeters
                                              square kilometers
                                              square inches
                                              square feet
                                              square yards
                                              acres
                                              square miles
  
       Square miles   sq mi                   square feet
                      square mile             square yards
                      square miles            acres
                                              square meters
                                              square kilometers
  
       Square yards   sq yd                   square inches
                      sq yds                  square feet
                      square yard             acres
                      square yards            square miles
                                              square centimeters
                                              square meters
                                              square kilometers
  
       Tons           ton                     pounds
                      tons                    kilograms
                                              metric tons
                                              newtons
  



                                        10










       UNIT          INPUT STRINGS            OUTPUT UNITS
       ----          -------------            ------------
  
       Watts          w                       foot-pounds/sec
                      watt                    kilowatts
                      watts                   horsepower
                                              calories/sec
  
       Weeks          wk                      days
                      week                    solar days
                      weeks                   sidereal days
                                              months
                                              sidereal months
                                              years
                                              solar years
                                              sidereal years
  
       Yards          yd                      inches
                      yds                     feet
                      yard                    miles
                      yards                   meters
                                              kilometers
  
       Years          yr                      seconds
                      year                    minutes
                      years                   hours
                                              days
                                              months
                                              solar days
                                              sidereal days
                                              sidereal months
                                              solar years
                                              sidereal years
  
  




















                                        11










                                      LEGALITIES
                                      ----------
  
  
       Convert is shareware, also known as user-supported software.
  The diskette with program, user's guide, and source code can be
  freely copied and shared.  The idea of shareware is that if the user
  finds the program worthwhile then he can, at his own discretion,
  support the author by sending him a contribution.
  
       Convert, however, is not a public domain program.  It is
  copyright (c) 1988 by Martin J. Maher, and the author retains all
  rights.  In particular, he retains the right to distribute this
  program and all source code and documentation for profit.  There is
  no guarantee that Convert will work correctly in all situations, and
  in no event will the author be liable for any damages arising from
  the use or misuse of this program.
  
       User groups, bulletin boards, clubs, and public domain/shareware
  distributors are authorized to distribute Convert under the following
  conditions:
  
       1.  No charge is made for the software or the documentation.
         A nominal distribution fee, not to exceed $8, may be charged
         to cover copying and distribution costs.
  
       2.  Recipients are to be notified of the shareware concept
         and should be encouraged to support it.
  
       3.  The program and documentation are not to be modified in any
          way by user groups, bulletin boards, clubs, or shareware
          distributors.  This does not apply to end users - the source
          code is distributed specifically so that they will be free to
          customize Convert for their own use.
  
  
       Turbo Pascal is a trademark of Borland International, Inc.
  Compaq and Compaq Deskpro are trademarks of Compaq Computer Corp.
  MS-DOS is a trademark of Microsoft, Inc.  PC-DOS is a trademark of
  International Business Machines, Inc.
  
  













                                        12










                                  CONTRIBUTIONS
                                  -------------
  
       The suggested contribution for Convert is $5.00.  If you find
  Convert useful and wish to make this contribution, send a check to
  the address shown below. Since I am interested in how my programs are
  being distributed, I would appreciate your filling out the form below
  and returning it along with your contribution.  Finally, if you have
  any comments, complaints, bug reports, or suggestions I would very
  much appreciate hearing from you.
  
  
       Thank you for your support.
  
       Mail to:
  
                  Martin J. Maher
                  MJM Engineering
                  P.O. Box 2027
                  Hawthorne, Ca. 90251


       Name_________________________________________________________


       Address______________________________________________________


       City/State___________________________________________________


             Zip Code _________________________

       How did you first learn about Convert, or where did you receive
  your copy of Convert?

    ___________________________________________________________________


    ___________________________________________________________________
  
  
            Comments or suggestions
  
   ____________________________________________________________________
  
  
   ____________________________________________________________________
  
  





                                        13






```
{% endraw %}

## FILE1183.TXT

{% raw %}
```
Disk No  1183
Program Title:  MTOOL and CONVERT
PC-SIG version 1

MTOOL is an easy-to-use mathematic function interpreter that will 
analyze functions of a single variable defined by the user.  This 
program can evaluate a function for a range of points or for a single 
point of the independant variable.  It can also evaluate the derivative 
of the function for any value of the independent variable.  The 
function can be numerically integrated.  This program can also find 
solutions for the function over a range of values for the independant 
variable.  MTOOL can plot the function using a 640x200 resolution 
screen. 

CONVERT is a unit-conversion utility that accepts arguments from the
command line and shows a list of equivalent quantities of different
units.  This program is very useful as it will convert a variety of
units concerning distance, area, volume, time, rate, heat, energy and
force.

Usage:  Unit Conversion/Function Analysis.

Special Requirements:  A 640 x 200 high resolution screen is required to
plot the function.

How to Start:  Type GO (press enter).

Suggested Registration:  $5.00 for CONVERT and $20.00 for MTOOL.

File Descriptions:

CCONV    PAS  Turbo Pascal source code for CONVERT.
CONVERT  EXE  CONVERT, main program.
CONVERT  DOC  Documentation for CONVERT.
CONVERT  PAS  Turbo Pascal source code for CONVERT.
MTOOL    EXE  MTOOL, main program.
MTOOL    DOC  Documentation for MTOOL.
READ     ME   Program introduction.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## MTOOL.DOC

{% raw %}
```









                                     MATHTOOL

                                  AN INTERACTIVE
                                   MATHEMATICAL
                               FUNCTION INTERPRETER









                                   USER'S GUIDE
                                   VERSION 1.1









                     (C) COPYRIGHT 1988 - ALL RIGHTS RESERVED
                                        by
                                  MARTIN J. MAHER
                                  MJM Engineering
                                  P.O. BOX 2027
                                  HAWTHORNE,CA 90251































                          TABLE OF CONTENTS
                          -----------------
  
  
            ITEM                                             PAGE
            ----                                             ----
  
      TABLE OF CONTENTS  ..................................    1
      INTRODUCTION   ......................................    2
      HISTORY  ............................................    3
      USING MTOOL  ........................................    4
      EDITING  ............................................    5
      ENTERING A FUNCTION  ................................    6
      MAIN MENU  ..........................................   10
      EVALUATION AT A SINGLE POINT  .......................   11
      EVALUATION OVER A RANGE OF POINTS  ..................   12
      INTEGRATION  ........................................   13
      EVALUATION AND INTEGRATION COMBINED  ................   14
      DERIVATIVE  .........................................   15
      SOLUTIONS  ..........................................   16
      GRAPHICS  ...........................................   17
      DIFFICULTIES  .......................................   19
      LOOPING  ............................................   20
      APPLICATIONS  .......................................   21
      LEGALITIES  .........................................   25
      SHAREWARE  ..........................................   26
      REGISTRATION FORM  ..................................   27
  
  
  

























                                        1











                                   INTRODUCTION
                                   ------------
  
  
           Mtool is a function interpreter.  The "M" in Mtool stands for
      "Math."  The program can handle virtually any well-behaved
      mathematical function of a single variable.  It is designed to be easy
      to use, prompting the user at every step for whatever information it
      needs.  Once you have defined a function, Mtool gives you the
      following capabilities:
  
           1)  Evaluate the function for any value of the independent
               variable.
  
           2)  Evaluate the function over a range of values of the
               independent variable.
  
           3)  Numerically integrate the function.
  
           4)  Evaluate the derivative of the function for a given
               value of the independent variable.
  
           5)  Find solutions of the function over some range of
               the independent variable.
  
           6)  Plot the function.
  
  
           Mtool is written in Turbo Pascal, and all of its operations are
      carried out completely in memory.  Mtool requires a minimum of 256k
      of memory.  Since Mtool uses dynamic data structures, it can access
      as much memory as is available.  Testing shows, however, that even
      very complicated functions rarely require more than about 50k of
      memory.  The plotting capability requires graphics capability.  Since
      Mtool is written in Turbo Pascal, version 4.0, it supports all common
      PCompatible graphics standards - CGA, EGA, VGA, and Hercules.
  
  
  
  














                                        2










                                      HISTORY
                                      -------
  
           Mtool fills a need that I first perceived several years ago when
      I was a student in engineering school.  Often when I was reading some
      text or other, I came across a complicated mathematical function or
      formula.  Normally the author of the text would make some statements
      about the formula regarding its behavior or certain of its
      properties.  Usually at this point I thought that seeing a plot of
      the function would make things much clearer.  Most of the time I had
      three alternatives - look in vain in the text for a plot; plot it
      myself by hand, a job only a masochist could enjoy; or forget about
      it.  Naturally, alternative three was my usual choice.
  
           Eventually, I became the owner of a Compaq Deskpro and a copy of
      the Turbo Pascal compiler.  I started writing a program that would
      plot any function that I could type in.  My purpose, at first, was
      only to learn Turbo Pascal.  Then I started adding some other things,
      like integration and derivatives.  The idea gradually grew that Mtool
      might make a good shareware program, and so here it is.
  
           The full power of Mtool is demonstrated later in this document
      with the inclusion of script that you can use to generate some very
      complicated results.  The program is powerful enough that I wish I
      would have had it when I was in engineering school, for it certainly
      adds a fourth and most attractive alternative to the list above.
  
  
  
  

























                                        3










                                    USING MTOOL
                                    -----------
  
  
           Using Mtool is easy.  It is merely a matter of answering prompts
      the program issues, and of making menu choices.  First, the program
      leads you through a series of steps which define your function.
      Options such as the ability to define characters representing
      constants and subfunctions add to the complexity of function that you
      can define.
  
           After your function is defined, Mtool presents you with its main
      menu.  Depending on your choice Mtool further prompts you for any
      information it needs.  Finally, after Mtool has completed your choice
      of operations, it allows you the options of continuing to use the
      same function, of defining a new function, of editing your function,
      or of leaving the program.
  
           The next several sections of this document give a detailed
      description of how to use Mtool, including many examples.
  
  

































                                        4










                                      EDITING
                                      -------
  
  
           Mtool includes some simple editing tools as part of its user
      interface.  It shows, in reverse video, the length of string that can
      be entered in reply to a prompt.  For example, the main function
      definition can hold as many as 73 characters, so the main function
      prompt is followed by a reverse video bar 73 spaces long.  Another
      example is the independent variable definition which allows only one
      character and so is followed by one reverse video space.
  
           Mtool supports five editing keys.  The keys and their functions
      are:
  
           Left arrow - moves cursor to left.
           Right arrow - moves cursor to right as far as end of string.
           Backspace - deletes a character and moves cursor to left.
           End - moves cursor to end of string.
           Home - deletes entire string.
  
      A character is replaced by placing the cursor directly on it and
      typing the desired character - that is, the editor works in
      overstrike mode.  Insert mode is not supported at this time.
  
           Suppose that you had entered the string
  
                cos98*x) + cos(7*x)
  
      and wished to replace the "9" with a "(".  Assuming that the cursor
      is at the end of the string, hold down the left arrow key until the
      cursor is on the "9", press "(", then press "End" to return the
      cursor to the end of the string.  One note of caution - if you press
      the return key the string will be truncated at the cursor position.
      Any characters to the right of the cursor will be lost, so pressing
      the end key before the return key is important.
  
           These simple editing keys apply at all Mtool prompts.
  
  















                                        5










                                ENTERING A FUNCTION
                                -------------------
  
  
           Mtool starts with a message from the author.  After this
      advertisement, Mtool issues its first prompt:
  
                Independent variable:
  
           Any lower case letter except for the first four are legal
      responses to this prompt.  The letters "a" through "d" are reserved
      for use as subfunctions, which will be described below.  If you try
      to enter an answer that the program does not allow, it will issue a
      warning, beep, and prompt again:
  
                Independent variable:
  
                Invalid choice - try again.
  
          This will continue until Mtool gets an answer it likes, namely,
      any lower case letter from "e" to "z".
  
           Defining an independent variable does not mean that the other
      letters from "e" to "z" are off limits.  You can use any of them
      anywhere in your function, and Mtool will consider them to be
      constants and query you for their values - more on this later.
  
           Next, Mtool asks for subfunctions.  A subfunction is best
      described with an example.  Suppose that
  
                f(x) = a + b
  
             where  a = cos(8*x) and b = cos(9*x).
  
      Then a and b are subfunctions.  Mtool allows you to define as many as
      four subfunctions, each of which may contain as many as fifty
      characters.  Any operation that can be performed on a variable can be
      performed on a subfunction, so in the example above we could have
      f(x) = a*b, or f(x) = a/b, or f(x) = a^b, etc.
  
            The program asks how many subfunctions you wish to define.  The
      appearance of the second screen depends on your answer to this
      prompt.  The number of subfunction lines which appear is the same as
      your answer.  An example of the first two screens with four
      subfunction definitions and a main function definition appears on the
      next page.
  
  
  






                                        6










  
                                      INITIALIZATION
  
  
      Independent variable: x
  
      How many subfunctions(min 0; max 4): 4
  
                                      ENTER FUNCTION
  
  
      f(x) =
  
        where a =
              b =
              c =
              d =
  
  
  
  
              a = cos(3*x)
              b = cos(5*x)
              c = cos(7*x)
              d = cos(9*x)
  
      f(x) = a + b + c + d
  
  
           Before the program accepts a subfunction definition, it makes a
      first pass at parsing the expression.  In this pass it is looking for
      errors or constructions that it cannot deal with.  Examples are
      unbalanced parentheses or back-to-back operators.  If the program
      detects any errors, it will issue a warning message and prompt again
      for the same subfunction.  It will not allow you to enter a string of
      more than fifty characters as a subfunction.
  
           The next prompt after the subfunctions have been defined is the
      main function prompt.  This string may be as long as 73 characters.
      Once again, the program will make a first pass at the string looking
      for errors or bad constructions.  It will also make sure that you
      have not attempted to use an undefined subfunction character.  If it
      finds any problems, it will issue a message and prompt again for the
      function definition.
  
           Besides variables and constants, Mtool recognizes several
      operators and many standard mathematical functions.  A complete list,
      with examples, follows on the next page.
  
  





                                        7










           Operators
           ---------
  
                Addition          +       2 + 2 = 4
                Subtraction       -       3 - 2 = 1
                Multiplication    *       3 * 2 = 6
                Division          /       4 / 2 = 2
                Exponential       ^       2 ^ 3 = 8
  
           Mathematical Functions
           ----------------------
  
                Absolute value                    abs(x)
                Exponential                       exp(x)
                Cosine                            cos(x)
                Sine                              sin(x)
                Tangent                           tan(x)
                Inverse cosine                    acos(x)
                Inverse sine                      asin(x)
                Inverse tangent                   atan(x)
                Factorial                         fac(x)
                Hyperbolic sine                   sinh(x)
                Hyperbolic cosine                 cosh(x)
                Hyperbolic tangent                tanh(x)
                Inverse hyperbolic sine           asinh(x)
                Inverse hyperbolic cosine         acosh(x)
                Inverse hyperbolic tangent        atanh(x)
                Logarithm, base 10                log(x)
                Natural logarithm                 ln(x)
  
           The x in each math function represents the argument of the
      function.  It must be enclosed within parentheses.  This argument can
      be any legal Mtool expression.  The arguments for trigonometric
      functions and the values of inverse trigonometric fuctions are
      assumed to be in radians.  If you wish to use degrees, then include a
      factor to convert from degrees to radians.  This can be done by using
      two constants, setting one equal to pi and the other equal to 180.
      An example of how to do this is shown in the Main Menu section below.
  
           Some examples follow.  These examples show all the Mtool prompts
      and all the necessary replies to define functions.
  
           Example 1 - Fifth degree polynomial
  
                Independent variable: x
  
                How many subfunctions(min 0; max 4): 0
  
                Function definition:
  
                f(x) = x^5 + 4*x^4 - 7*x^3 + 10*x^2 + 2*x - 12
  



                                        8










           Example 2 - Trigonometric function with constants
  
                Independent variable: x
  
                How many subfunctions(min 0; max 4): 0
  
                Function definition:
  
                f(x) = cos(m*x) + cos(n*x)
  
                (Later Mtool will ask for values for m and n.)
  
           Example 3 - Function with one subfunction
  
                Independent variable: x
  
                How many subfunctions(min 0; max 4): 1
  
                Subfunction definition:
  
                a = 3*x^3 + 2*x^2
  
                Function definition:
  
                f(x) = cos(a)
  
           Example 4 - Function with four subfunctions
  
                Independent variable: t
  
                How many subfunctions(min 0; max 4): 4
  
                Subfunction definitions:
  
                a = cos(t) + cos(3*t)
                b = cos(5*t) + cos(7*t)
                c = cos(9*t) + cos(11*t)
                d = cos(13*t) + cos(15*t)
  
                Function definition:
  
                f(t) = a + b + c + d
  
  
  
  









                                        9










                                     MAIN MENU
                                     ---------
  
  
               After the function has been defined, Mtool will echo the
      function definition and list the main menu.  If the function were the
      one in Example 4 above, then Mtool would put this on the screen:
  
  
                f(t) = a + b + c + d
  
                  where a = cos(t) + cos(3*t)
                        b = cos(5*t) + cos(7*t)
                        c = cos(9*t) + cos(11*t)
                        d = cos(13*t) + cos(15*t)
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice:
  
           Mtool expects you to answer with a number from 1 to 7 depending
      on what you want it to do.  After you make your choice Mtool will ask
      you for any other information it needs.  This information, and thus
      Mtool's prompts, vary depending on your choice.  The next several
      sections will describe these prompts and possible responses.
  
  
  





















                                        10










  
                            EVALUATION AT A SINGLE POINT
                            ----------------------------
  
  
           The first choice in the menu causes Mtool to evaluate the
      function for a single value of the independent variable.  This means,
      of course, that Mtool must query you for the value you wish to use.
      Mtool will also query you for the values of any constants that may
      have been included in your function.  An example that includes
      constants is shown below.
  
  
                f(x) = cos(m*x) + cos(n*x)
  
  
  
  
  
  
  
                What is the value of x:     0.2000
                What is the value of n:     9.0000
  
                m = 8.0000
                n = 9.0000
  
  
  
  
  
                Evaluating function
  
                f( 0.2000 ) =  -2.5640161698E-01
  
                Press any key to continue.
  
  
           Note that the arguments of the cosine terms in this function
      have the unit radians.  Also note that the spacing that appears on
      the screen is accurately represented in this example.  The prompt
      asking for the value of m was issued but is not shown here because it
      was overwritten by the prompt for n.
  
  
  









                                        11










  
                         EVALUATION OVER A RANGE OF POINTS
                         ---------------------------------
  
           The second menu selection causes Mtool to evaluate the function
      over a range of points.  How this works should be clear from the
      example below.  Screen formats are not reproduced in this example.
  
                f(x) = cos(p*x/n)
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 2
  
                What is the value of p: 3.141592654
  
                n = 180.0000
  
                Lower limit of x:     0.0000
                Upper limit of x:    10.0000
                Number of subdivisions(even for integration): 10
  
                Evaluating function...
  
                f(   0.0000000000E+00 ) =   9.9999999999E-01
                f( 1.0000 ) =   9.9984769515E-01
                f( 2.0000 ) =   9.9939082702E-01
                f( 3.0000 ) =   9.9862953475E-01
                f( 4.0000 ) =   9.9756405026E-01
                f( 5.0000 ) =   9.9619469809E-01
                f( 6.0000 ) =   9.9452189537E-01
                f( 7.0000 ) =   9.9254615164E-01
                f( 8.0000 ) =   9.9026806874E-01
                f( 9.0000 ) =   9.8768834059E-01
                f( 10.0000 ) =   9.8480775301E-01
  
                Press any key to continue.
  
           Several things should be noted here.  First, the total range of
      values of the independent variable is defined by the responses to the
      lower and upper limit prompts.  Second, the number of points at which
      the function is evaluated is always one greater than the number of
      subdivisions.  Third, the independent variable increment is the total
      range divided by the number of subdivisions.
  
           This example also shows how conversion from radians to degrees
      works.  The evaluated values are the cosines of angles from zero to
      ten degrees at one degree intervals.
  

                                        12










  
  
  
                                    INTEGRATION
                                    -----------
  
  
  
           Mtool uses Simpson's Rule to numerically integrate.  Simpson's
      Rule requires that the interval of integration be divided into an
      even number of subintervals.  The greater the number of subintervals,
      the more accurate the answer.  Here's an example of how this works in
      Mtool.  All Mtool output is present, but screen formats are not
      reproduced.
  
  
                f(x) = 6*x^2
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 3
  
                Lower limit of x:     0.0000
                Upper limit of x:     5.0000
                Number of subdivisions(even for integration): 20
  
  
                Evaluating integral...
  
  
                From   0.0000000000E+00 to   5.0000000000E+00
  
                integral =   2.5000000000E+02
  
  
           The antiderivative of this function is 2*x^3, and this evaluated
      over the interval zero to five gives 250.0, which agrees exactly with
      Mtool's result.
  
  
  
  






                                        13










  
                INTEGRATION AND EVALUATION OVER A RANGE OF POINTS
                -------------------------------------------------
  
  
  
           This selection combines the two previous functions.  The inputs
      and outputs are the same as before, as the following example shows.
      Once again, all output is present, but screen formats are not
      preserved.
  
                f(x) = 6*x^2
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 4
  
  
                Lower limit of x:     0.0000
                Upper limit of x:     5.0000
                Number of subdivisions(even for integration): 10
  
                Evaluating function and integral...
  
                f(   0.0000000000E+00 ) =   0.0000000000E+00
                f( 0.5000 ) =   1.5000000000E+00
                f( 1.0000 ) =   6.0000000000E+00
                f( 1.5000 ) =   1.3500000000E+01
                f( 2.0000 ) =   2.4000000000E+01
                f( 2.5000 ) =   3.7500000000E+01
                f( 3.0000 ) =   5.4000000000E+01
                f( 3.5000 ) =   7.3500000000E+01
                f( 4.0000 ) =   9.6000000000E+01
                f( 4.5000 ) =   1.2150000000E+02
                f( 5.0000 ) =   1.5000000000E+02
  
                From   0.0000000000E+00 to   5.0000000000E+00
  
                  integral =   2.5000000000E+02
                Press any key to continue.
  








                                        14










  
                                    DERIVATIVE
                                    ----------
  
  
  
           This selection evaluates the derivative of the function for some
      particular value of the independent variable.  It uses the standard
      definition of the derivative as a limit.  This definition can be
      found in any elementary calculus text.  Only one prompt is necessary
      after the menu choice, the value of the independent variable.  The
      following example shows how it works.
  
                f(x) = 6*x^2
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 5
  
                Value of x : 2
  
  
                Evaluating derivative....
  
  
                fprime(  2.0000000000E+00) =   2.3997318793E+01
  
  
  
           Mtool's result is returned as fprime.  Of course, the derivative
      of 6*x^2 is 12*x, and for x = 2, 12*x = 24.  Mtool's result is close
      to this, but not exactly correct.  This is an unavoidable byproduct
      of the differing natures of computation and mathematics, but the
      accuracy of derivatives in Mtool will rarely if ever be less than
      four places.
  
  
  










                                        15










  
                                     SOLUTIONS
                                     ---------
  
           One of Mtool's most powerful functions is its ability to find
      roots of equations.  All it requires is a range of independent
      variable values within which to look.  The example below shows a case
      in which eleven roots are found.
  
                f(x) = cos(8*x) + cos(9*x)
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 6
  
                            Enter range to search for solution.
  
                Lower bound:     0.0000
                Upper bound: 4
  
      Solutions between x =   0.0000000000E+00 and x =   4.0000000000E+00
  
           At x =   3.8807909265E+00    f(x) =   9.1622496257E-09
           At x =   3.5111917891E+00    f(x) =   7.7397999121E-10
           At x =   3.1415927394E+00    f(x) =   9.0949470177E-13
           At x =   2.7719935179E+00    f(x) =   6.3664629124E-12
           At x =   2.4023943823E+00    f(x) =  -7.7034201240E-10
           At x =   2.0327952467E+00    f(x) =   2.2337189876E-09
           At x =   1.6631961111E+00    f(x) =  -4.2809915612E-09
           At x =   1.2935969755E+00    f(x) =   6.7411747295E-09
           At x =   9.2399783991E-01    f(x) =  -9.4601091405E-09
           At x =   5.5439870339E-01    f(x) =  -3.0299815990E-09
           At x =   1.8479956780E-01    f(x) =   1.0559233488E-09
  
           Press any key to continue.
  
           The criterion used by Mtool is that, if the absolute value of
      f(x) is less than 1.0e-8, then x qualifies as a root.  Two cautions
      are necessary.  First, for some functions such as very high-order
      polynomials, Mtool may not have great enough precision to find a
      small enough value of f(x).  In these cases Mtool will write its best
      estimate along with the value of f(x) so that you can judge whether
      it is indeed a root.  Second, it may rarely occur that Mtool might
      miss a root.  This may occur when two roots are so close together
      with respect to the size of the range being searched that Mtool sees
      only one of them.  Reducing the size of the range will allow Mtool to
      see both.  Coordinating Mtool's solution finding and graphics
      capabilities will help you deal with these possibilities.
  

                                        16










  
                                     GRAPHICS
                                     --------
  
  
           Probably the most useful of Mtool's functions is its ability to
      quickly generate plots of functions.  Certainly this is the one that
      I find most useful - indeed, it was just to have this that I wrote
      the program in the first place.  Once again, getting Mtool to do its
      thing is very simple.  Two examples are shown below - one for
      automatic scaling and one for user-defined scaling.
  
      EXAMPLE 1
      ---------
                f(x) = cos(8*x) + cos(9*x)
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 7
  
                Lower limit of x:    0.0000
                Upper limit of x:   10.0000
                Number of subdivisions(even for integration): 400
                Automatic y-axis scaling(Y/N): y
  
      EXAMPLE 2
      ---------
                f(x) = cos(8*x) + cos(9*x)
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 7
  
                Lower limit of x:       0.0000
                Upper limit of x:      10.0000
                Number of subdivisions(even for integration): 400
                Automatic y-axis scaling(Y/N): n
                Minimum y-axis value: -2
                Maximum y-axis value: 2
  

                                        17










  
  
           The one thing missing in each of these examples is, of course,
      the plot.  But this is simple for you to remedy - just run Mtool,
      type in the values shown, and you'll have the plots in about a minute
      or so for each.
  
           The autoscaling works by finding the maximum and minimum values
      the function takes over the range of the plot, and setting the y-axis
      accordingly.  The user-defined option allows you to set the scale of
      the y-axis so that you can compare different curves.
  
           Mtool supports all common graphics standards - CGA, EGA, VGA,
      and Hercules.  It automatically detects what graphics board you have
      in your computer and adjusts itself.  This capability is one of the
      many features added in version 4.0 of Turbo Pascal and - free
      advertising for Borland International - a good reason to upgrade if
      you haven't already.
  
           Finally, if you have a graphics printer you can get printouts of
      your plots.  Before running Mtool run the program Graphics included
      with PC/MS-DOS.  This enables the computer to do a dump of a graphics
      screen to the printer.  When you have a plot that you wish to print,
      just push the PrintScreen key.
  
  
  




























                                        18










  
                                    DIFFICULTIES
                                    ------------
  
  
           In the introduction I mentioned that Mtool can handle virtually
      any well-behaved function of a single variable.  A definition of what
      constitutes a well-behaved function for Mtool is difficult, although
      certainly any function that fits the calculus definition of a
      continous function would qualify as well-behaved.
  
           Functions that are not continuous can cause problems.  Generally
      speaking, there are three ways that a function can fail to be
      continuous.  All three can potentially cause problems for Mtool,
      especially in the graphics area.
  
           First, it may happen that a function does not exist at some
      point.  An example would be a rational function at a point where its
      denominator becomes zero.  If Mtool attempts to evaluate the function
      at this point, it will issue an error message.  However, it may occur
      that you ask for a plot of this function over a range that includes
      such a point but because of the choice of endpoints and number of
      subdivisions, Mtool does not attempt to evaluate the function at that
      point.  A plot will appear, but the fact that the function does not
      exist at some point will not be apparent from the plot.  You would
      only become aware of this discontinuity if Mtool tried to evaluate
      the function at this point and issued a division by zero error
      message.
  
           Second, consider the function
  
                f(x) = sin(x)/x , x <> 0
                f(x) = 0, x = 0
  
      Discontinuous functions of this nature cannot be defined in Mtool.
      Only one of the two parts, say the first, could be defined.  Then
      f(x) = sin(x)/x becomes a type one function.
  
           Third, and most troublesome to Mtool, are functions that are not
      defined at some point, but do have limits that vary depending on the
      direction of approach to the point.  An example of this type of
      function is tan(x).  As x approaches pi/2 from below, tan(x) goes to
      infinity.  As x approaches pi/2 from above, tan(x) goes to negative
      infinity.  If you plot tan(x) from x = 1 to x = 2, you will see a
      nearly vertical line near x = pi/2 because Mtool connects the points
      on either side of pi/2.
  
           The upshot of all this is, if you are dealing with
      non-continuous functions, be careful, and if you get plots that seem
      strange, check your function to see if it is one of these types.
  
  



                                        19










                                      LOOPING
                                      -------
  
  
  
           After any main menu operation has been completed, Mtool offers
      you the chance to use the same function again without reentering the
      subfunction and function definitions.  The menu that it presents
      looks like this:
  
  
                f(t) = a + b + c + d
  
                  where a = cos(t) + cos(3*t)
                        b = cos(5*t) + cos(7*t)
                        c = cos(9*t) + cos(11*t)
                        d = cos(13*t) + cos(15*t)
  
  
                 S)ame function
                 N)ew function
                 E)dit function
                 Q)uit
                 Enter choice:
  
           Mtool displays your current function definition and its simple
      menu.  The choices are obvious.
  
           If you do choose to reuse the same function and if the function
      contains constants, then Mtool will ask if you wish to change their
      values.  The prompts look like this:
  
                Value of m same(  8.0000000000E+00)..(Y/N): y
                Value of n same(  9.0000000000E+00)..(Y/N): y
  
           Mtool shows the current value of the constant and asks if you
      wish to leave it unchanged.  If you answer no for any constant, then
      at the normal position following the main menu, Mtool will ask you
      for the new value.  Immediately after you have answered these
      constant prompts, Mtool goes into the main menu.
  
  
  












                                        20










  
                                    APPLICATIONS
                                    ------------
  
  
           This section includes two rather complicated applications to
      give you a taste of the types of things you can do with Mtool.  Both
      applications relate directly to the earlier History section because
      they are both specific cases where I had wished that I had a tool
      like Mtool.
  
      Taylor Series
      -------------
  
           A Taylor Series can be found for any function f that has
      derivatives of all orders at some point a.  If we let T(x) be the
      Taylor Series then
  
           T(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! + ... +
                   fk(a)(x-a)^k/k! + ....
  
      where fk denotes the kth derivative of f.  The special case of the
      Taylor Series about the point a = 0 is called the Maclaurin series.
      These series are discussed at length in introductory calculus texts.
  
           One application of these series is to approximate certain
      functions.  For example, the Maclaurin series for f(x) = e^x is given
      by
  
               1 + x + x^2/2 + x^3/3! + x^4/4! + ....
  
      Given sufficient terms, this series converges to e^x for all x.  My
      questions were, how many terms are necessary, and how closely does
      some number of terms, say 4 or 5 or 10, approach e^x, and over what
      range of values of x does this approximation hold.  If you are
      familiar with Taylor and Maclaurin series, then you know that there
      exists a formula for the remainder which gives the maximum error for
      the series, but this will not give you the same feel for the accuracy
      of the series approximation as a plot.  For a plot of the error of a
      twelve term Maclaurin series approximation to e^x, type the function
      on the next page into Mtool.
  
  












                                        21










  
                f(x) = a + b + c + d - exp(x)
  
                  where a = 1 + x + x^2/2 + x^3/fac(3)
                        b = x^4/fac(4) + x^5/fac(5) + x^6/fac(6)
                        c = x^7/fac(7) + x^8/fac(8) + x^9/fac(9)
                        d = x^10/fac(10) + x^11/fac(11)
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 7
  
                Lower limit of x:    -2.0000
                Upper limit of x:     2.0000
                Number of subdivisions(even for integration):  200
                Automatic y-axis scaling(Y/N): y
  
           In about the same amount of time that it takes you to enter this
      function you'll have a plot showing how closely this series matches
      e^x over the given range of x.  Using the "same" response to the loop
      menu, you will be able to play with different ranges of x and with
      different numbers of points to plot.  If you're like me, you will
      quickly get a much better feel for the accuracy of this approximation
      than you would ever get from a formula or two.
  
  
  





















                                        22










  
      Fourier Series
      --------------
  
  
           The second application comes from one of my engineering courses.
      According to Fourier analysis, a square wave can be approximated by
      the series
  
       f(t) = 1/2 + (2/pi)cos(t) - (2/3*pi)cos(3t) + (2/5*pi)cos(5t) - ....
  
      The greater the number of terms the nearer the series approaches a
      square wave.  Usually in a text there will one and only one graph
      that shows this.  It would be nice to play around with this and see
      how close series of different lengths actually do come to a square
      wave.  With Mtool this is possible.  The following script shows how
      to get a plot of the series when it has nine terms:
  
  
  
                f(t) = a + b + c + d
                  where a = 1/2 + 2*cos(t)/p - 2*cos(3*t)/(3*p)
                        b = 2*cos(5*t)/(5*p) - 2*cos(7*t)/(7*p)
                        c = 2*cos(9*t)/(9*p) - 2*cos(11*t)/(11*p)
                        d = 2*cos(13*t)/(13*p) - 2*cos(15*t)/(15*p)
  
  
  
                1) Evaluate at a single point.
                2) Evaluate over a range of points.
                3) Integrate.
                4) Both 2 and 3.
                5) Derivative.
                6) Solve.
                7) Graph.
                Enter choice: 7
  
                What is the value of p: 3.141592654
  
                Lower limit of t:      0.0000
                Upper limit of t:     10.0000
                Number of subdivisions(even for integration):  200
                Automatic y-axis scaling(Y/N): y
  
  
           Once again, after a wait of about a minute or so, you'll be able
      to see just how close this series approximates a square wave.  If you
      want you can zoom in on any part of the curve simply by choosing
      "same" on the loop menu and resetting the range over which to plot.
  
  
  



                                        23










  
                                    LEGALITIES
                                    ----------
  
  
           Mtool is shareware, also known as user-supported software.  The
      diskette with program and user's guide can be freely copied and
      shared.  The idea of shareware is that if the user finds the program
      worthwhile then he can, at his own discretion, support the author by
      sending him a contribution.
  
           Mtool is NOT a public domain program.  It is copyright (c) 1988
      by Martin J. Maher, and the author retains all rights.  In
      particular, he retains the right to distribute this program and all
      source code and documentation for profit.  There is no guarantee that
      Mtool will work correctly in all situations, and in no event will the
      author be liable for any damages arising from the use or misuse of
      this program.
  
           User groups, bulletin boards, clubs, and shareware distributors
      are authorized to distribute Mtool under the following conditions:
  
           1.  No charge is made for the software or the documentation.  A
               nominal distribution fee may be charged to cover copying
               and distribution costs.
  
           2.  Recipients are to be notified of the shareware concept and
               should be encouraged to support it.
  
           3.  The program and documentation are not to be modified in any
               way.
  
           4.  The source code for Mtool is available to registered users.
               They may alter it for their own use but may not distribute
               it for profit.
  
  
           Turbo Pascal is a trademark of Borland International, Inc.
      Compaq and Compaq Deskpro are trademarks of Compaq Computer Corp.
      MS-DOS is a trademark of Microsoft, Inc.  PC-DOS, CGA, EGA, and VGA
      are trademarks of International Business Machines, Inc.  Hercules is
      a trademark of Hercules Computer Technologies, Inc.
  












                                        24










  
                                     SHAREWARE
                                     ---------
  
  
           My hopes are that you will find this program useful and that,
      of course, you will decide to become a registered user of Mtool by
      filling out the registration form on the last page and mailing it to
      me along with a check for $10.00.  In addition to the warm glow of
      virtue, registration will bring you the following benefits:
  
  
           1)  The most recent version of the program.
           2)  The most recent version of the program that supports the
               80x87 math coprocessor chips.  This version runs
               significantly faster.
           3)  Notification of future major upgrades.
           4)  Reduced prices for future major upgrades.
  
  
           The source code for Mtool is available to registered users.  The
      purchase price is $10.00, so that the total for both registration and
      source code is $20.00.
  
           Above I mention future major upgrades.  These upgrades may
      include, but are not limited to, logarithmic and semi-logarithmic
      plots,  file support, expanded function definition capabilities, and
      improved user interfaces.  Finally, if you have any comments,
      complaints, bug reports, or suggestions I would very much appreciate
      hearing from you.
  
  























                                        25










  
                                REGISTRATION FORM
                                -----------------
  
  
           You may register your copy of Mtool by filling out the following
      form and mailing it with a check for $10.00 to the address below.
      You will promptly receive a diskette with the most recent version of
      Mtool, a version of Mtool that supports the 80x87 math coprocessor,
      and the most recent version of the user's guide.  You will also be
      placed on our mailing list so that you may be notified of future
      versions, and you will qualify for discounted prices on those future
      versions.  If your check is for $20.00, all Mtool source code will be
      included on the diskette.
  
           Thank you for your support.
  
           Mail to:
  
                Martin J. Maher
                MJM Engineering
                P.O. Box 2027
                Hawthorne, Ca. 90251
  
  
           Name_________________________________________________________
  

           Address______________________________________________________


           City/State___________________________________________________


           Zip Code _________________________

           How did you first learn about Mtool, or where did you receive
      your first copy of Mtool?

      ___________________________________________________________________
  
  
      ___________________________________________________________________
  
  
          Comments or suggestions
  
      _____________________________________________________________________
  
  
      _____________________________________________________________________
  



                                        26






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1183

     Volume in drive A has no label
     Directory of A:\

    CCONV    PAS     58874   2-05-88   2:24a
    CDOC     BAT       153  10-21-88  10:43a
    CONVERT  DOC     30084   5-03-88   1:34a
    CONVERT  EXE     47664   2-05-88   2:24a
    CONVERT  PAS       515   2-05-88   2:14a
    FILE1183 BAK      1586  10-21-88  10:32a
    FILE1183 TXT      1609  10-24-88   1:58p
    GO       BAT        38   1-18-88   1:38p
    GO       TXT       848  10-21-88  10:42a
    MTDOC    BAT       151  10-21-88  10:42a
    MTOOL    DOC     47741   5-03-88   1:34a
    MTOOL    EXE    108176   4-25-88   2:16a
    READ     ME       1415   2-08-88   1:37a
           13 file(s)     298854 bytes
                           16384 bytes free
