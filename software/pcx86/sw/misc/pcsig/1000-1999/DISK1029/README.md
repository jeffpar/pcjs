---
layout: page
title: "PC-SIG Diskette Library (Disk #1029)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1029/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1029"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CC-SURVEYOR 2 OF 2 (ALSO 926)"

    CC-SURVEYOR is a geometric design program for civil engineers and land
    surveyors. It allows creation of point files with coordinates,
    elevations and descriptions, with import/export of points from/to most
    data collectors. It includes normal COGO routines plus radial stakeout,
    predetermined area, perpendicular and parallel offsets, topo reduction,
    vertical curves and grades, intersections, cul-de-sacs, and knuckles.
    Screen graphics include plotting of points, lines and curves, assigned
    to user-named layers with different linetypes and colors. Hard copy
    plotting may be done on Epson compatible dot matrix printers and
    on Hewlett-Packard or Houston Instrument pen plotters. Data may be
    transferred to CAD programs via DXF files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CC-COGO.TXT

{% raw %}
```



                                    APRIL 1, 1990
        
        
        
        
        
        
        
        
        
        
        
        
                                       CC-COGO
                                     Version 1.0
                                   Copyright 1990
                                         by
                            Richard Wadsworth, CIVILcomp
                               320 Eureka Canyon Road
                                Watsonville, CA 95076
                                          
                                          
                  No part  of this software or manual may be copied
                  without permission,  except for  installation  of
                  the software  on the registered user's hard disk,
                  copies made  for backup purposes, or copies  made
                  for distribution with the shareware version.







































                                  TABLE OF CONTENTS
        
        INTRODUCTION  . . . . . . . . . . . . . . . . . . . .  3
        
        I.   INSTALLATION AND CONFIGURATION . . . . . . . . .  4
        
        II.  CC-COGO MENUS AND DIALOG BOXES . . . . . . . . .  5
        
        III. SCREEN PLOTTING, LAYERS, AND ALMOST "WYSIWYG". .  6
        
        IV.  USING CC-COGO
             A.   Quick setup . . . . . . . . . . . . . . . .  8
             B.   Your First Traverse . . . . . . . . . . . .  9
             C.   Your First Radial Topo  . . . . . . . . . . 11
        
        V.   DATA ENTRY
             A.   Error Checking  . . . . . . . . . . . . . . 13
             B.   Default Values  . . . . . . . . . . . . . . 13
             C.   The Mini Editor . . . . . . . . . . . . . . 13
             D.   Horizontal Angles . . . . . . . . . . . . . 13
             E.   Zenith Angles . . . . . . . . . . . . . . . 14
             F.   Distances . . . . . . . . . . . . . . . . . 15
             G.   Point Numbers . . . . . . . . . . . . . . . 15
             H.   Coordinates . . . . . . . . . . . . . . . . 16
             I.   Descriptions  . . . . . . . . . . . . . . . 16
        
        VI.  FILES
             A.   File Types, Filenames, Storage Location . . 17
             B.   CIVILcomp COGO (.CCC) File  . . . . . . . . 18
             C.   Layer Assignment (.LAY) File  . . . . . . . 19
             D.   Import/Export (.CCX) File . . . . . . . . . 20
             
        VII. COMMAND REFERENCE
             A.   FILE Submenu  . . . . . . . . . . . . . . . 22
             B.   EDIT Submenu  . . . . . . . . . . . . . . . 25
             C.   COGO Submenu  . . . . . . . . . . . . . . . 27
             D.   ROAD/LOT Submenu  . . . . . . . . . . . . . 33
             E.   TOPO Submenu  . . . . . . . . . . . . . . . 37
             F.   UTILITY Submenu . . . . . . . . . . . . . . 39
             G.   MODULES Submenu . . . . . . . . . . . . . . 45
             H.   SETTINGS Submenu  . . . . . . . . . . . . . 46
        
        VIII.ERROR MESSAGES . . . . . . . . . . . . . . . . . 49
        
        IX.  UPGRADE HISTORY  . . . . . . . . . . . . . . . . 50
        
        X.   REGISTRATION . . . . . . . . . . . . . . . . . . 51
        
        DISCLAIMER, CREDITS . . . . . . . . . . . . . . . . . 52
        
        INDEX










        CC-COGO                        Page 2




        INTRODUCTION
             
             When the CC-SURVeyor project was started in 1987, the initial
             goal was to provide a fair amount of power within a user-
             friendly environment, for those just converting to COGO on the
             PC compatible computer.  The environment included a screen
             layout that would show menu choices and command prompts while
             allowing as many of your previous calcs to remain readable as
             possible.  A quick screen plot of points and lines was provided
             to help catch mistakes and provide visual orientation to the
             project.
             
             It was not anticipated that users would be abandoning much more
             powerful software like PxxxSOFT, WxxxSOFT, and CxxxxSOFT.  The
             size of projects that CC-SURVeyor is being used for has grown to
             the point that CC-SURVeyor had to grow.  For example, screen
             plotting gets to be very slow and cumbersome when 2000 points
             are in the file.  And reading point numbers gets difficult when
             topo data, found corners, and final computed boundary points lie
             very close to each other.  A layer management system had to be
             developed to cope with this.
             
             Also, the (expensive)SOFT users, while preferring the interface
             of CC-SURVeyor, missed the advanced features like user-defined
             output precision and azimuth output.
             
             At the same time, another type of user interface was becoming
             standardized for the PC, using the mouse, pull-down menus, and
             dialog boxes.  This interface is almost necessary for convenient
             use of the layering system and configuration options.
             
             So, in March of 1989 we began developing a new interface that
             would allow CC-SURVeyor to take full advantage of DOS memory,
             the mouse, and the enhanced keyboard, and allow future growth
             and enhancements.  The first product to use this interface was
             CC-PLOT.  Thus was born the "modular" concept of CC-SURVeyor 4.
             
             Three major parts of CC-SURVeyor 3.x were moved out into
             separate modules:  printer plotting (with pen plotting added) to
             the CC-PLOT module, traverse balancing (with batch mode map
             check added) to the CC-BALance module, and contour interpolation
             (with contour lines added) to the CC-CONTour module.  These
             three functions were separated for several reasons:  more memory
             was needed in each module, those functions are logically used as
             stand-alone programs in many cases, and many users may not want
             or need every module.
             
             I sincerely hope you find this system to be everything I hoped
             it would be during its development, and will appreciate any
             comments or suggestions that you have for its improvement.
                                      
                                      Rich Wadsworth, CIVILcomp
        








        CC-COGO                        Page 3




        I.   INSTALLATION AND CONFIGURATION
                  
             CC-COGO requires a hard disk, 640K RAM, DOS 2.11 or later, and
             EGA or VGA graphics.  CC-COGO will sense the graphics card, and
             will use the highest graphics resolution possible, which is
             640x350 for EGA and 640x480 for VGA.
                  
             Screen plotting is faster with a math coprocessor, which CC-COGO
             will automatically use if present.  A math coprocessor is NOT
             required, however.
                  
             The mouse is supported for manipulation of the menu and dialog
             box system, but is not required.
                  
             The following files are furnished on the CC-COGO diskette:
             
                  README.CGO     Information that may not be included in the
                                 printed manual.  To read it, use the DOS
                                 "type" command, or print it by typing
                                 
                                   "copy a:readme.cgo prn" <Enter>
                                 
                                 with the diskette in the A drive.
                  
                  COGO.EXE       The CC-COGO program file.
                  
                  To install CC-COGO, simply copy COGO.EXE from the diskette
                  to the hard disk subdirectory of your choice, make that
                  subdirectory current, and type COGO <Enter> to start it.
                  
             
             There are two configuration files used by CC-COGO:  PLOT.INI
             created by CC-PLOT, and COGO.INI created by CC-COGO.  The first
             stores the default layer names and linetypes and the second
             stores the default file paths, output precision and toggles
             settings.  The settings available are described in more detail
             in the SETTINGS submenu section of this manual.
             
             NOTE:  Neither .INI file is suplied on the diskette.  COGO.INI
             will be created the first time CC-COGO is run.  PLOT.INI will
             only be used if it is present, to use layer names and linetypes
             that have been changed in CC-PLOT, and therefore will only be
             present if you have CC-PLOT.
             

















        CC-COGO                        Page 4




        II.  CC-COGO MENUS AND DIALOG BOXES
             
             CC-COGO uses the type of pull-down menus that are becoming the
             industry standard, and are similar to "Windows" applications and
             the new OS/2 PM interface.  To remove all pull-down menus from
             the screen, press <Esc> until the menu bar is all that remains
             of it.  Then, you will see right below it a 17 line calculation
             window with a space for the current open file name at the top
             center.  Below the window is the prompt area, where command
             prompts will appear.  It should say "Select Function" at this
             time.  At the very bottom of the screen is a message bar that
             occasionally has messages at the left end.  These messages may
             be an error message (red with a beep), or may be a message
             telling what a particular function key will do at the time.  At
             the right end of the message bar is the status of the "toggles"
             (displayed is the first letter of each toggle that is "on"), the
             current command or function being executed ("mode"), the current
             occupied point (in the color of the layer it is assigned to) and
             the name of the current layer.
             
             The arrow keys may be used to move from one submenu to another.
             If no submenu is pulled down, the first letter of the submenu
             will pull it down.  Once a submenu is pulled down, the letter
             keys move the bar to the command within that submenu that has an
             uppercase letter matching the key entered.  <Enter> will execute
             whatever command is highlighted by the moving bar.  <Esc> will
             remove the current submenu and activate the menu bar so another
             submenu may be picked; for example, <Esc><F> will back up and
             pull down the FILE submenu, then <Esc><E> will back up and pull
             down the EDIT submenu, and so forth.
             
             A mouse will also work with the menu system.  Only one button
             (the left one on the LogiTech mouse) is used.  One click on a
             command will start the routine.  A button may be pressed down
             and held down while the menu is swept through, and when it is
             released, the last command highlighted is executed.
             
             Many of the commands cannot be used until a .CCC file has been
             opened.  These commands will not be accessible with the arrow
             keys or the mouse.  Their names are shown in a lighter color on
             the pull-down menus until they are accessible.
             
             Dialog boxes are menus that allow several items to be toggled
             on/off, edited, or otherwise picked, while the box stays on the
             screen.  Examples are the "Layer display" box and the "reName
             layers" box.  To "pick" an item in a dialog box, you must click
             on it with the mouse, or put the bar on it with the arrow keys
             and press <Enter>.  In some cases you must <Esc> when you are
             done (a prompt will tell you), and in other cases one of the
             selections is <OK>, which you may select with the mouse or arrow
             keys.
             









        CC-COGO                        Page 5




        III. SCREEN PLOTTING, LAYERS, AND ALMOST "WYSIWYG"
             
             Screen plotting is used to graphically review the data.  "View
             plot" in the EDIT submenu can be used to screen plot.  To screen
             plot during data entry, or while choosing items from a dialog
             box, use <F10>.
             
             There are two types of layers in CC-COGO.  The first is called
             "point attribute", the second is "user-named" layers.
             
             The "point attribute" layers refer to "attributes" associated
             with points, such as cross, point number, elevation,
             description, or line/curve.  Some of these "attribute" layers
             may be on or off, which controls what attributes will plot.
             Note that elevations and descriptions do not screen plot at this
             time .  The "attribute" layers screen plot in the color of the
             "user-named" layer they are assigned to.
             
             The "user-named" layers allow you to separate your points into
             logical groups, for better management of data.  The default
             layer names are CONTROL, TOPO, BOUNDARY, BUILDING, STREET,
             EASEMENT, and UTILITY.  You may define different layer names for
             each file if you wish, using the "reName layers" routine in the
             SETTINGS submenu.  Use the "Change layer" routine in the
             SETTINGS submenu to assign groups of points to different layers.
             For example, use point numbers 100-199 for the boundary data,
             200-299 for topo data, etc., then assign 100-199 to the first
             layer, 200-299 to the second layer, etc.  To turn layers on/off,
             use "Layer display" in the SETTINGS submenu.  Each "user-named"
             layer screen plots in a different color.  The "current" layer
             controls what layer new points are placed on.  For example, if
             the second user-named layer is current when you run "Traverse",
             the points will be placed on that layer.
             
             Lines and curves are automatically placed on the layers that the
             points were assigned to.  If the layer assignments of points are
             later changed, the lines also change to the new layer.  The line
             or curve will always be on the same layer as the beginning point
             of the line or the BC of the curve.
             
             Linetypes may be changed for each of the user-named layers.  The
             "linetYpe" routine in the SETTINGS submenu accomplishes that.
             The default linetype is "continuous".  The available linetypes
             are further explained elsewhere in this manual.
             
             If you wish to change the default layer names and linetypes for
             all future files, you must use CC-PLOT to save a new PLOT.INI
             file after using the routines in CC-PLOT's SETTINGS submenu to
             create the configuration you want.
             
             Note that there are 7 user-named layers.  There are 16 colors
             available to the EGA: black, seven low intensity, seven high
             intensity, and grey.  CC-COGO uses the seven low intensity
             colors for the lines/curves on the seven user-named layers.  The
             seven corresponding high-intensity colors are used for the point
             crosses and point numbers.  For example, the first layer
             (default name: CONTROL) is color 1, which is blue.  Points and
             point crosses on this layer will screen plot in high intensity
             blue, and lines/curves will screen plot in low intensity blue.
             Layer 2 data (default name: TOPO) will plot in high intensity

        CC-COGO                        Page 6




             and low intensity green, and so forth.  The default layer colors
             are shown in the "Layer display" dialog box.  The sequence of
             colors cannot be changed, although the order of the layer names
             can be.
             
             WYSIWYG means "What You See Is What You Get", and is commonly
             used in describing word processors and desktop publishing
             programs that show graphics previews of what printed output will
             look like.  Of course, CAD is by definition WYSIWYG.  CC-COGO is
             not, however, a CAD program, but does attempt to use WYSIWYG
             principles.  Keep in mind the following exceptions to the
             WYSIWYG rule:
             
                  Screen plotting is intended to be fairly fast, and displays
                  point numbers and crosses to help you identify the points
                  you display.  Elevations and descriptions do not screen
                  plot at this time.
                  
                  Linetypes are "schematic" and may not be proportioned the
                  same on different plotters, or when comparing the screen
                  plot with plotter output.  The pattern is what is
                  important, to help distinguish between different lines on
                  hard copy plots.  Also, curves do not screen plot with
                  other than a continuous linetype at this time.
                  




































        CC-COGO                        Page 7




        IV.  USING CC-COGO
        
             A.   Quick Setup
                  
                  Enter "COGO" to start the program.  CC-COGO can be
                  configured while it is running, which allows changing the
                  configuration without having to quit and start over.
             
                  Use the arrow keys to get to the SETTINGS submenu, or type
                  <Esc><S>, or pick SETTINGS with your mouse.
             
                  If your CC-SURVeyor files are not in the current directory,
                  but are in \CC-SURV\FILES, pick "set file Path" and enter
                  "\CC-SURV\FILES".  You could also enter "a:" or any drive
                  or pathname.  You could load a file from \CC-SURV\FILES,
                  then change the path to A: and save the file to the A
                  drive.
                  
                  If you use CC-CAD and want your .CCX files to be stored in
                  the \ACAD subdirectory, you may wish to set your
                  "import/export path" to "\ACAD".  Or, if you upload/
                  download data collector files to your \COOP41 subdirectory
                  (for example), you might rather set your "import/export
                  path" to "\COOP41".
             
                  The output precision may be changed if you wish.  The
                  default precision for angles in the printed output is to
                  the nearest second.  The precision for distances is to the
                  nearest thousandths (3 decimals).  If you wish to change
                  them, you may now do so.  Use the "Angle prec" and/or
                  "Distance prec" routines in the SETTINGS submenu.
                  
                  There are several settings that are referred to as
                  "toggles":  "Azimuth" (printed output displays angles in
                  north azimuth rather than quadrant and bearing),
                  "Description" (causes prompt for a point description
                  whenever a new point is created), "Lines" (draws a line
                  from point to point as they are created), "Printer" (echos
                  screen output to your printer), and "Zenith" (causes prompt
                  for zenith angle and slope distance during course input).
                  These toggles are further explained under the "SETTINGS
                  Submenu" section.  A check mark next to one indicates it is
                  "on", otherwise it is off.  You may set any of them now if
                  you wish.  The rest of the tutorials assume that you will
                  set the Description toggle on.
                  
                  Now view your configuration using the "View/save settings"
                  routine, and if it looks right, press "y" or <Enter> to
                  save it.  You won't have to do this again, even in future
                  sessions, unless you change something.
        
                  Now decide if you want to add something to an existing .CCC
                  file, or start a new job.  If you want to add to an
                  existing file, go to the FILE submenu and open the desired
                  .CCC file ("open" means "load").  To try a quick tutorial
                  of the "Traverse" and "Inverse" routines, continue to the
                  next section.
                  



        CC-COGO                        Page 8




             B.   Short-Cut to your first Traverse
                  
                  Since this is your first traverse, you don't have a .CCC
                  file to load, so go directly to the COGO submenu and select
                  "Traverse".  You will always be prompted for a starting
                  point number.  The current occupied point will appear in
                  the prompt as a default, once you have created any points
                  in a CC-COGO session.  Note that if no points have been
                  created or occupied, the occupied point in the message bar
                  is "0".  Since there is no default point number in the
                  prompt, enter 1.  CC-SURVeyor knows that point 1 doesn't
                  yet exist, so will next ask for a northing and an easting
                  coordinate.  Enter 1000 and 1000.  Had you picked a point
                  number that already existed in memory, CC-COGO would have
                  skipped those prompts.  If the Description Toggle is on,
                  you will also be prompted for a description for the point.
                  Enter one if that is the case.  The starting point is
                  created and printed in the calc window.  If the Printer
                  Toggle is on, it will also be printed on your printer.
                  
                  Now you will be prompted for an angle code.  Press <F1> to
                  see the allowable angle codes.  Different routines allow
                  different angle codes, and pressing <F1> (see the message
                  bar) at the angle code prompt will show which are
                  available.  Press any key to remove the Help screen and
                  enter 1 for northeast.  Then enter 45.3015 at the angle
                  prompt.  This means 45 degrees, 30 minutes, 15 seconds.
                  Enter a distance of 100.50, then a description if prompted
                  for one.  Note that the last description entered appears as
                  a default for the new point.  Finally, you will be prompted
                  for the point number for the new point.  Note that the
                  default is the next consecutive blank point, in this case
                  "2".  Press <Enter> to accept it, or enter another number
                  if you wish.  Try entering 1, and you will get an overwrite
                  error message, which will allow you to overwrite the
                  previous point 1 with the new one if you wish, or will take
                  you back to the new point number prompt.  After entering
                  the new point number, the course and new point data will
                  print in the calc window, and printer if toggled on.  The
                  occupied point in the message bar will be updated to the
                  new point, and CC-COGO will return to the angle code prompt
                  for the next course.
                  
                  Let's try a curve next.  Enter a "-" angle code.  Note that
                  the prompt is now for the delta.  Enter 32.30, which is a
                  curve to the right.  A negative delta would be a curve to
                  the left.  Next enter a radius of 200.  Pick the default
                  numbers for the radius point and enter the description of
                  the EC.  Choose the default for the EC point number.  The
                  curve data and new points will be printed in the calc
                  window, and you will return to the angle code prompt, with
                  the last angle code entered as a default.
                  
                  This time, let's continue on the current bearing, whatever
                  it is, by entering an angle code of 0.  CC-COGO keeps track
                  of the current bearing, even through curves, so you can
                  enter compound or reverse curves without having to
                  constantly enter the tangent bearing.  (Of course, to
                  traverse a non-tangent curve you must first traverse the
                  tangent bearing with a zero distance.)  Note that CC-COGO

        CC-COGO                        Page 9




                  automatically entered the angle code and bearing of the
                  tangent out of the curve ("1" and "78.0015"), in the prompt
                  area, and now prompts for a distance.  Enter 150, a
                  description if prompted for, and a new point number.
                  
                  You could continue traversing until you used up all of
                  CC-COGO's point storage capacity, but let's quit this
                  routine by pressing <Esc>.  Start the "Inverse" routine
                  from the COGO submenu.  Note that the starting point number
                  for this routine is now the same as the last point created,
                  which is also the current occupied point.  Press <Enter> to
                  accept, then enter 4 (or whatever you assigned to the EC).
                  The course is calculated and printed in the calc window,
                  and should be exactly backwards from the course originally
                  traversed.  Now let's inverse the curve.  Enter a negative
                  radius point number, which would be -3 if you followed the
                  above directions.  The prompt now is for the EC point
                  number (since you are going through the curve backwards,
                  the BC you created is the EC to this routine), which is 2,
                  so enter it.  Note that the curve data is again printed,
                  and also the radial bearing of the BC.  Finally, enter 1 as
                  the last point to inverse, and you will be back where you
                  started.
                  
                  Just for fun, enter 999 as another point to inverse to, and
                  note the beep and error message in the message bar.  This
                  is the typical way that CC-COGO reminds you of input
                  errors.
                  
                  Now press <F10> to see a screen plot of your traverse.  If
                  the Lines toggle was on, the points will be connected with
                  lines/curves.  Press <Esc> to leave the screen plot and
                  <Esc> to return to SELECT mode.
                  
                  Go to the FILE submenu and press S to save a file
                  containing the five points you just created, naming it
                  "TEST".  You will be able to quit CC-COGO completely and
                  later start it up, open the "TEST" file, and continue where
                  you left off.






















        CC-COGO                        Page 10




             C.   Short-Cut to your first Radial Topo
        
                  The "Radial Topo" routine may be used to reduce notes from
                  total station output or EDM output, which provides zenith
                  angle and slope distance.  The "Zenith" toggle is another
                  toggle, like the Description toggle, that affects various
                  routines in CC-COGO.  Its purpose in "Radial Topo" is to
                  distinguish between EDM or total station output.  If the
                  Zenith Toggle is on, you will be prompted for zenith angle
                  and slope distance; if off, you will be prompted for delta
                  elevation and horizontal distance.  If on, a "Z" is shown
                  in the "Toggles:" area of the message bar at the bottom of
                  the screen.  Be sure it is off now, using the "Toggles"
                  choice in the SETTINGS submenu if necessary.
        
                  A common way of collecting radial topo data is to set the
                  prism height at the same value as the height of instrument
                  above the setup point.  That way, the delta elevation value
                  needs only to be added or subtracted from the setup point
                  elevation to obtain the elevation of the point being shot.
                  Occasionally, however, the prism height (also called rod
                  reading in the CC-COGO manual and prompts) must be changed
                  from one shot to the next because of obstacles in the line
                  of sight.  This problem will show how that is handled.
        
                                   The Field Notes
                  
                  Instrument at 10, BS 11       HI = 5.20      Elev unknown
                  Compass bearing = N 30o 15'E
                  
                  Pt   Angle Rt  Delta El  Delta Hor  Rod      Desc
                  ---- --------  --------  ---------  ----     -------------
                  71   191o 10'  +0.52     121.54     5.20     TB
                  72   219o 35'  -1.68     127.65     5.20     EP
                  etc . . . . . . . . . . . . . . . . . . . . . .
                  95   97o 32'   +4.19     416.01     12.50    GR
                  96   83o 50'   +3.53     417.52     12.50    GR
                  97   70o 32'   +2.55     448.13     12.50    GR
                  
                  Go to the TOPO Submenu and start "Radial Topo".  The
                  instrument was set up on point 10, so enter 10 for the
                  setup point.  If you were using an existing file with
                  points 10 and 11 in it, you would not have to enter the
                  coordinates, but you are starting fresh, so enter the
                  northing and easting coordinates of 1000, 1000 and a
                  description of SETUP.  Notice that your survey crew didn't
                  know the elevation of the setup point, so you will have to
                  assume an elevation at this time to reduce the notes.
                  Enter an elevation of 100.00.  The instrument height is
                  5.20 feet, so enter 5.20 at the prompt.  Enter a backsight
                  angle code of 1 (northeast) and angle of 30.15.  The setup
                  data is printed, and you are ready to enter the point data.
        
                  Start with the data for point 71.  Notice that the angle
                  code prompt has a default value of the last angle code
                  used.  Your crew used angles right, so enter 7.  Enter
                  191.10 at the angle prompt, .52 at the delta elevation
                  prompt, and 121.54 at the horizontal distance prompt.
                  Press <Enter> at the rod prompt to accept the default
                  instrument height, which your crew used for prism height

        CC-COGO                        Page 11




                  where possible.  Enter TB for the description, noting that
                  you must delete the extra characters left from the last
                  description.  Enter 71 for the new point number.  The new
                  point data is printed.
        
                  The routine starts again, asking for data for the next
                  point.  You may continue to enter data from the field
                  notes, but keep a few things in mind:
                  1.   You may start pressing <Enter> when prompted for the
                       next point number, when they are sequential.
                  2.   The last three points (95 and after) were on the other
                       side of a 10 foot hedge so your crew raised the prism.
                       At point 95, the height of prism (or rod) changed to
                       "12.50", so be sure to enter that instead of pressing
                       <Enter>.  For following points, the default will then
                       be 12.50, and you can again press <Enter> to accept
                       that for the last three points.
                  3.   After point 95, all the point descriptions are "GR",
                       so you may press <Enter> to accept the default instead
                       of continuing to type in "GR".
                  4.   If you make a mistake entering data for a point, and
                       create the new point before noticing, just re-enter
                       the data for the point, AND ENTER THE CORRECT POINT
                       NUMBER RATHER THAT ACCEPTING THE DEFAULT.  When you
                       enter the point number, you will get a message that
                       says "OVERWRITE EXISTING POINT?".  Press <Enter> to
                       continue.
                  5.   Press <Esc> when done to return to SELECT mode.
                  
                  While you have been reducing the field notes, your crew ran
                  a level loop from a bench mark through point 10, your setup
                  point, and has just come in and told you that point 10 has
                  an elevation 102.80.  Don't worry, you will next use a
                  routine to correct the elevations.
        
                                   Elevation Boot
        
                  Start the "Elev Boot" routine.  You do not have to boot the
                  elevations of the whole file, because then other point with
                  zero elevation would have bogus elevations.  You want to
                  boot point 10, and points 71 through 97.  Enter 10 for the
                  first point in the range and press <Enter> to accept (10)
                  for the last point.  You assumed elevation 100.00 for point
                  10 and want it to be 102.80, so you want to boot the
                  elevation 2.80 feet.  Enter 2.80 for the boot.  The point
                  prints out with the new elevation value.
                  
                  Repeat the process, entering 71 for the first point and 97
                  for the last point, and 2.80 for the boot.  Points 71
                  through 97 print out with new elevation values.  Note that
                  our example did not enter the field notes for points 73
                  through 94, so they did not print.
                  
                  You may save this file if you wish, naming it "TEST2", so
                  you can come back to it and experiment later.






        CC-COGO                        Page 12




        V.   DATA ENTRY
        
             A.   Error Checking
        
                  Depending on the data being entered, some keyboard
                  characters will not be accepted for data.  For example,
                  when entering a filename, characters that are not
                  acceptable to DOS cannot be entered.  Or, when numeric data
                  is expected, alpha characters will not be accepted.  In
                  some cases, data must be entered, a blank field is not
                  acceptable.  If you cannot enter valid data, you must <Esc>
                  out of the routine.
        
             B.   Default Values
                  
                  When there is a logical default value for data, it will
                  already be placed in the highlighted field.  To choose it,
                  press <Enter>.  To clear it and replace it with a new
                  value, enter the new value.  To start "edit mode", press an
                  arrow key or <Home> or <End>, and read about the mini
                  editor below.
                  
             C.   The Mini Editor
        
                  The highlighted data entry field is a mini editor.  <Alt-C>
                  will clear the value out of the field.  <Alt-R> will
                  restore the original value in the field, if you have erased
                  it or edited it beyond repair.  The left and right arrow
                  keys will move the cursor back and forth within the field.
                  <Home> and <End> will move to the first and last position.
                  The <Insert> key will toggle back and forth between
                  overtype mode (the default) and insert mode.  <BackSpace>
                  will erase to the left.  <Delete> will erase the current
                  position.
                  
             D.   Horizontal Angles
                  
                  Angle codes may be shown while an angle code prompt is on
                  the screen by pressing <F1>, and are:
                  
                  (-) = next angle will be curve data
                  (1) = quadrant North East, or North Azimuth
                  (2) = quadrant South East
                  (3) = quadrant South West
                  (4) = quadrant North West
                  (5) = recall a bearing from two points
                  (6) = angle left
                  (7) = angle right
                  (8) = deflection left
                  (9) = deflection right
                  (0) = current bearing
                  
                  Not all angle codes are available for every routine; use
                  <F1> to see which are, at any angle code prompt.







        CC-COGO                        Page 13




                  When entering curve data, entering a (-) angle code results
                  in a prompt for the delta.  A positive angle is a curve to
                  the right, while a negative angle is a curve to the left.
                  The curve will be tangent to the last course traversed to
                  get to the current occupied point.  (FOR NON-TANGENT CURVES
                  YOU MUST FIRST TRAVERSE ON THE TANGENT BEARING WITH A ZERO
                  DISTANCE.)  You will be prompted for point #'s for the
                  radius point and EC.  After traversing the curve, the
                  "current" bearing will be tangent from the EC, if you wish
                  to traverse another curve in a series of compound or
                  reverse curves.
                  
                  An angle code of (5), recall bearing, will result in a
                  prompt for two point numbers, which when entered will
                  result in a calculated quadrant and bearing being used.
                  
                  Angle codes of (6) through (9) are self-explanatory, with
                  the backsight bearing being the opposite of the "current
                  bearing".  For example, if you have just traversed
                  N 45o 00' E, the backsight bearing is S 45o 00' W, and an
                  angle right of 20o will traverse S 65o 00' W.
                  
                  The angle code (0) will use the "current" bearing, which is
                  the bearing that was last traversed or inversed to get to
                  the current occupied point.  The status of the current
                  bearing varies after other COGO routines, and is explained
                  with the instructions for the various routines, in the
                  "COMMAND REFERENCE" part of this manual.
                  
                  Angles are entered/displayed with a decimal point
                  separating the degrees and minutes.  For example,
                  25o 30' 15.5" is entered as "25.30155" or displayed as
                  "25.3016" or "25.30155" depending on the "Angle prec"
                  setting in the SETTINGS submenu.  Angles are calculated to
                  .01 second precision.
                  
             E.   Zenith Angles
                  
                  The zenith angle prompt is available (optionally) within
                  the Traverse, Sideshot, and Radial Topo routines.  Use the
                  "Toggles" "Zenith" setting in the SETTINGS submenu to turn
                  the option on or off.  If it is on, the user will be
                  prompted for the zenith angle before the distance prompt,
                  which will then be for slope distance rather than
                  horizontal distance.  The horizontal distance will be
                  calculated and printed with the other course information.
                  Zenith angle is measured from vertical, and may be from 0
                  to 360 degrees.  If the user's instrument is a transit that
                  measures angle from horizontal, it must be converted to
                  zenith angle before entry.
                  
                  The Zenith toggle is used within the Stadia routine to
                  distinguish between zenith angle prompt and vertical angle
                  prompt, depending on whether a theodolite or transit was
                  used.
                  





        CC-COGO                        Page 14




                  The Zenith toggle is used within the Radial Topo routine to
                  distinguish between EDM topo (which uses zenith angle and
                  slope distance) and total station topo (which uses delta
                  elevation and horizontal distance).  The proper prompts are
                  given to the user depending on the Zenith toggle.
                  
                  To simplify using the routines when the Zenith Toggle is on
                  and several horizontal distances are to be entered, the
                  default zenith angle is 90o (horizontal), which allows the
                  user to simply press <Enter> before entering the distance.
                  
             F.   Distances
                  
                  Distances are saved in memory in full 15 place floating
                  point precision.  They may be entered as large as
                  99,999.9999 feet.  If a larger number is entered, strange
                  displays and printouts will result, with the "%" character
                  included.  The printed output may have a user-selected
                  precision, as determined by the "Distance prec" routine in
                  the SETTINGS submenu.
                  
             G.   Point Numbers
                  
                  CC-COGO can store up to 4000 points, depending on your
                  computer's use of memory, with point numbers ranging from 1
                  to 4000.  See the "Capacity" routine in the FILE submenu to
                  determine the point capacity of your machine, which depends
                  on the amount of available memory.
                  
                  In many routines, the next available point number is
                  presented as a default, so it may be chosen by pressing
                  <Enter>.  To quickly clear a default point number so
                  another may be entered, just begin entering another number.
                  
                  Consecutive point numbering is sometimes available at a
                  "Point #" prompt by pressing "+".  The next point number is
                  chosen, unless it is over 4000, in which case an error
                  message is shown.  Unless there would be an overwrite
                  problem, the next consecutive point number is also
                  presented in the prompt as a default.
                  
                  Overwrite protection is always on.  Whenever an existing
                  point number is chosen for a new point, the user is given
                  the chance to overwrite the old coordinate pair or choose
                  another point number.  Overwriting an existing point does
                  NOT change the elevation or description of that point
                  unless they too are revised or edited.
                  













        CC-COGO                        Page 15




             H.   Coordinates
                  
                  Any points saved with North and East coordinates of "0" are
                  lost.  If you insist on assigning a point number with the
                  coordinates of "0,0" I suggest you use "0.001, 0.001" or
                  some similar trick.  CC-COGO's overwrite protection method
                  assumes that points with coordinates of "0,0" are
                  unassigned.
                  
                  Coordinate pairs are saved in memory in full 15 place
                  floating point precision.  They are saved to disk with 8
                  decimal places.
                  
                  Coordinates may have values as large as 9,999,999.9999.
                  
             I.   Descriptions
                  
                  If you wish to have a prompt for descriptions of new points
                  within many routines, set the Description toggle on by
                  using the "Toggles" routine in the SETTINGS submenu.  Some
                  routines that create curves will automatically assign
                  descriptions of "BC, "RP", etc. if this toggle is on.
                  
                  Descriptions may be up to 12 characters.  Neither spaces
                  nor commas are allowed.  Try using a combination of upper
                  case and lower case letters to separate words, like
                  "LotCor" or "FLCreek".
                  
                  The descriptions are saved with the coordinates in the .CCC
                  file, and are printed out by any routine that prints
                  points.  They are also output into an Export file.
                  





























        CC-COGO                        Page 16




        VI.  FILES
        
             A.   File Types, Filenames, and Storage Location
                  
                  There are several types of files that users of CC-SURVeyor
                  should become familiar with.  The most important of these
                  is the .CCC file (the filename extension is ".CCC"), which
                  stands for "Civil Comp COGO".  This file is the standard
                  file for storage of point numbers, coordinates, elevations,
                  descriptions, and (if the user chooses) lines and curves,
                  and is used by all the Modules (CC-COGO, CC-BALance,
                  CC-CONTour, and CC-PLOT).  These files may be located in
                  any drive or subdirectory, and will be accessible to CC-
                  COGO according to its configuration, or if the "set file
                  Path" command has been properly used.  The .CCC file may be
                  edited and saved by CC-COGO.
                  
                  Another file that is created by CC-COGO is the layer file,
                  with a filename extension of ".LAY".  This file stores the
                  user-named layer names, the linetypes of layers, and the
                  layer assignments of points within the .CCC file.  This
                  file is created or updated at the time a .CCC file is saved
                  from CC-COGO, CC-BALance, or CC-PLOT.  It will be saved to
                  the same drive or subdirectory as the .CCC file.
                  
                  Another file that is created by CC-COGO is the import/
                  export file, which has a default filename extension of
                  ".CCX".  This file stores point numbers, coordinates,
                  elevations and descriptions in a format that is common to
                  many other cogo programs and data collectors, and is a
                  means of communicating with them.  It does NOT store lines
                  or curves, and is NOT accessible from the other CC-SURVeyor
                  4 modules, so should only be used for temporary transfer to
                  or from the other mentioned software.
                  


























        CC-COGO                        Page 17




             B.   CIVIL COMP COGO (.CCC) File
        
                  CIVILcomp coordinate files have the file name extension
                  ".CCC" (Civil Comp COGO).  This is the default file type
                  that stores all points, coordinates, elevations,
                  descriptions, and lines and curves.  "Open ccc file" in the
                  FILE submenu loads it into memory.  .CCC files are saved in
                  ASCII format.  The first line in a file created by
                  CC-SURVeyor 4 is "4,0,0".  Following lines have one point
                  number and coordinate pair per line, with eight decimal
                  places, in point number sequence.  The line following
                  coordinates is "0 0 0".  If elevations and/or descriptions
                  are present, they follow.  To reduce file size, only points
                  with an elevation or description are listed in the second
                  group.  A zero in either the second or third position
                  indicates no elevation, or no description, respectively,
                  for the point number in the first position of each line.
                       
                  Following the lines that store elevations and descriptions
                  is the line "0 -1 0" followed by codes identifying lines
                  that have been created.  Lines are created sequentially
                  according to the point numbers listed, with "-1" indicating
                  a break in the line, and ending with "-999".
                       
                  The last section of the file consists of stored curves, one
                  curve per line, with BC, RP, and EC point numbers listed.
                       
                  Sample File (portion):              Comments:
                  
                  4,0,0                               (CC-SURVeyor 4 header)
                  1  1000.00000000  1000.00000000     (pt #, N coor, E coor)
                  2  1216.14183000   874.37074000     (ditto)
                  4  1276.44387000   978.11881000     (ditto)
                  0 0 0                               (elev and desc next)
                  1  100.200 CorSub                 (elev=100.2, desc=corsub)
                  2  101.200 0                        (no description)
                  4  0.000 EC                         (no elevation)
                  0 -1 0                              (lines next)
                   1                                  (line from 1
                   2                                   to 2)
                  -1                                  (end of line)
                   3                                  (line from 3
                   4                                   to 4)
                  -1                                  (end of line)
                  -999                                (curves next)
                   26   27   28                       (BC, RP, and EC)
                   21   20   19                       (ditto)
                  
                  Editing a .CCC file is fairly simple.  Examine one with the
                  DOS "Type" command or with your text editor.  Use your word
                  processor in unformatted or ASCII mode if you need to edit
                  the file.
        








        CC-COGO                        Page 18




             C.   Layer Assignment (.LAY) File
        
                  A file with the same name as the .CCC file, but with an
                  extension of ".LAY" is created when the .CCC file is
                  created, that stores the layer names, linetypes, and
                  point/layer assignments.  CC-COGO allows the "View plot"
                  command to selectively screen plot data, if the "Layer
                  display" command has been used to turn layers on or off.
                  
                  The first two lines of the .LAY file contain the linetype
                  numbers for the NET layer and the CONTOUR layer.  The next
                  seven lines consist of the user-named layer names and their
                  linetype numbers.  Linetypes and their numbers (used
                  internally by CC-COGO, CC-BALance and CC-PLOT) are defined
                  more completely in the "linetYpes" section of this manual,
                  under "SETTINGS Submenu".  The first user-named layer is
                  considered to be layer "1", the second one is layer "2",
                  and so forth.  This numbering becomes meaningful when the
                  rest of the file is examined.  The lines following the
                  names identify a point range and the layer number they are
                  assigned to.  For example, the line "1 , 99 , 5" means that
                  points 1 through 99 are assigned to user-named layer 5.
                  
                  Sample File (portion):      Comments:
                  
                  NET, 6                   (Net layer is linetype 6)
                  CONTOUR, 2               (Contours are linetype 2)
                  CONTROL  , 1             (first user-named layer is
                                           "CONTROL" and is linetype 1)
                  TOPO     , 1             (second user-named layer is "TOPO"
                                           and is linetype 1)
                  BOUNDARY , 1             (third user-named layer etc.)
                  EASEMENT , 1             (etc.)
                  STREET   , 1             (etc.)
                  BUILDING , 1             (etc.)
                  UTILITY  , 1             (seventh user-named layer is
                                           "UTILITY" and is linetype 1)
                   1 , 99 , 1              (points 1 through 99 are on layer
                                           1 "CONTROL")
                   100, 199, 2             (points 100 through 199 are on
                                           layer 2 "TOPO")
                  
                  Note that their are no "blank" lines in the file; those
                  shown above are caused by the long "comments".
                  
                  It isn't a good idea to edit the .LAY file with your text
                  editor, it is better to use the "reName layers",
                  "linetYpes" and "Change layer" routines in CC-COGO and
                  CC-BALance.
                  











        CC-COGO                        Page 19




             D.   Import/Export (.CCX) File
                  
                  Coordinates, elevations, and descriptions may be imported
                  into or exported from CC-COGO in a format that permits
                  communication with other COGO programs and data collectors.
                  The user may use any file name extension except ".CCC", (or
                  none), and it is strongly suggested that ".CCX" is used, to
                  avoid confusion.
                       
                  This format is comma-delimited, with five fields.  The
                  first four fields must be numeric.  The description can be
                  any string of keyboard characters, except for spaces or
                  commas, or a beginning quote ("), or if there is no
                  description it may be blank.  This is known as "Wild Volume
                  C", or "HP Volume C", or "MTI".  Note that the original
                  spec for this format allows spaces within the description,
                  by placing quotes (") on each side of the description to
                  force it to be read as one string.  CC-COGO will not
                  properly store descriptions with spaces, so be warned that
                  if your input file has spaces in the description field, you
                  should edit them out with your text editor before importing
                  into CC-COGO.  The exported file will not have quotes
                  around the description.
                       
                  Supported COGO programs:
                       COGOWARE
                       DCA (use Super Surveyor option)
                       MTI
                       Lewis and Lewis
                       HP Volume C
                  
                  Supported data collectors:
                       Abacus
                       CoOp-41
                       Geodimeter
                       Super Surveyor
                       Topcon FC-4
                  
                  LIMITATIONS FOR IMPORT/EXPORT FILES
                  -----------------------------------
                  1.   Largest point number: 4000
                  2.   Largest coordinate: 9,999,999.9999
                  3.   Highest elevation: 9,999.9999
                  4.   Coordinates of "-999999" in an import file will result
                       in no point being created with the respective point
                       number within CC-COGO.  This only affects imported
                       data collector files, which many times dump unused
                       point numbers with "-999999" as a coordinate, so the
                       COGO program can screen them out.
                  5.   Elevations of "-999999" in an import file will be
                       transferred as "0.000" into CC-COGO, which will treat
                       it as "no elevation".  Points with no elevations in
                       CC-COGO will export a file with "-999999" in the
                       elevation field of those points.
                  6.   Maximum length of description: 12 characters.
                  7.   No embedded spaces or commas within a description.
                  8.   Descriptions may not begin with a quote (").
                  



        CC-COGO                        Page 20




                  Sample File:
                  
                  (Point # 101 has northing, easting, elev, and desc;
                  point # 105 has northing, easting, no elev, no desc;
                  point # 107 has northing, easting, no elev, has desc)
                  
                  101,1000.00000000,1000.00000000,105.333,POB
                  105,1216.14183000,874.37074000,-999999,
                  107,1246.29285000,926.24478000,-999999,SETUP
                  
                  Note that there are always four commas in each line,
                  whether a description is present or not.  Note also that
                  points 102, 103, 104, and 106 are not required to have a
                  line in the file if those points do not exist.
                  
                  SEND COPIES OF THIS SECTION TO THE VENDOR OF YOUR DESIRED
                  DATA COLLECTOR TO VERIFY COMPATIBILITY.
        











































        CC-COGO                        Page 21




        VII. COMMAND REFERENCE
        
             A.   FILE Submenu
                  
                  Open ccc file:
                                  This routine will load a previously created
                  .CCC file from disk into memory.  A .LAY file by the same
                  name will also be loaded if present.   All points created
                  before running this routine will be lost and a warning
                  message to that effect is given if any points exist in
                  memory at the time.  The program will be reset as if it had
                  just been loaded.  Existing .CCC files are presented in a
                  dialog box.  If you have more files than will fit in the
                  vertical listing, you can scroll down the box with arrow
                  keys, or by using your mouse on the scroll bar on the right
                  side of the box.
                  
                  A load is truncated if a point number in the file is larger
                  than 4000 (or the point capacity of your machine - see
                  "Capacity" below).  Truncated loads do not include
                  elevations, descriptions, lines or curves.
                  
                  Save ccc file:
                                  This routine will save a .CCC file and a
                  .LAY file at the same time.  It should be used regularly
                  during editing.  If you decide to rename your file when you
                  save it, a new .LAY file will be created also.
                  
                  Merge ccc file:
                                   This routine will load a previously
                  created .CCC file from disk into memory.  All points
                  previously existing in memory at the time will remain,
                  except for point numbers duplicated by the incoming file,
                  which will overwrite the existing ones.  No overwrite
                  protection takes place except for a warning message, so use
                  caution when executing this command.  This is useful for
                  bringing in a group of points from another file.
                  
                  Points in the incoming file will be assigned to layers, but
                  the layer names of the existing file will be maintained.
                  
                  As with the "Open .." routine above, loading of the
                  incoming file is truncated when a point number higher than
                  the capacity of your machine is found in the file.
                  
                  set ccc Path:
                                  This routine may be used to configure
                  CC-COGO to permanently use a particular drive or
                  subdirectory, or to temporarily change the path to load or
                  save a file to a diskette drive or different subdirectory
                  than the previously configured one.  The path chosen with
                  this routine affects .CCC and .LAY files.
                  
                  To make the new path permanent, go to the SETTINGS submenu
                  and use "View/save settings".
                  





        CC-COGO                        Page 22




                  Import file:
                                Coordinates, elevations, and descriptions may
                  be imported from other COGO programs or data collectors
                  that use the "HP Volume C" format, by using this routine.
                  See the File Types section of this manual for details of
                  the format.  Once a file has been imported with this
                  routine, the points may be manipulated just as if a .CCC
                  file had been loaded, and the points may be saved in any
                  other file type within the FILE submenu.  The points will
                  be merged with any existing points in memory.
                  
                  Before using this routine to merge new points into memory,
                  a backup of the existing CCC file should be saved, as an
                  unpredictable error in file format may cause CC-COGO to
                  crash; for example, you may accidentally try to import an
                  untranslated data collector file.  CC-COGO does check for
                  the following errors in file format:
                  
                       Points numbered greater then 4000 (or the capacity of
                       your machine) are skipped.
                       Long descriptions are truncated to 12 characters.
                            
                  Export file:
                                This routine will create a file that may be
                  read by other COGO programs or data collectors that use the
                  "HP Volume C" format.  See the File Types section of this
                  manual for details of the format.  If the "All points"
                  option is chosen, the file will have point numbers,
                  coordinates, elevations and descriptions for all points in
                  memory at the time.  If the "Layers on" option is used,
                  only points on layers that are currently "on" will be sent.
                  If the "Range of pts" option is chosen, you may export a
                  range of points, such as 100-200.  Note that you are
                  allowed to revise the  file name extension in this routine.
                  You may not use the ".CCC" extension for this file.  For
                  transfer to and from data collectors, use the extension
                  required by the particular data collector.  Data collectors
                  based on the HP71B require an alpha character for the first
                  character in the file name.  For transfer to another COGO
                  program, use the file name extension required by the other
                  COGO program.  For transfer to CC-CAD, use ".CCX", the
                  default.
                  
                  import/export Path:
                                       This routine may be used to configure
                  CC-COGO to permanently use a particular drive or
                  subdirectory, or to temporarily change the path to load or
                  save a file to a diskette drive or different subdirectory
                  than the previously configured one.  The path chosen with
                  this routine only affects imported or exported files.
                  
                  To make the new path permanent, go to the SETTINGS submenu
                  and use "View/save".
                  







        CC-COGO                        Page 23




                  DOS command:
                                This routine temporarily "shells" to DOS,
                  where the user may execute DOS commands like DIR, COPY or
                  TYPE.  CC-COGO HAS NOT QUIT!!  Type "exit" to return to
                  CC-COGO.  None of the data entered into CC-COGO is lost.
                  NOTE:  It has been documented that a bug in versions of DOS
                  prior to version 3.0 causes problems when this command is
                  used, so use it at your own risk unless you have DOS 3.0 or
                  later.  Also, if you change directories while using "DOS
                  command", be sure to change back to the correct directory
                  before returning to CC-COGO.
                  
                  Reset program:
                                  Use this to initialize the program as if it
                  had just been started without loading a file.  Note: all
                  data in memory will be lost, so be sure to save any desired
                  files first!
                  
                  Capacity:
                             Use this to determine your maximum file size
                  based on the free RAM in your machine.  CC-COGO will keep
                  enough free RAM available so you may use the "DOS command"
                  routine, and will allow the remainder to be used for point
                  storage.  If you are using a lot of RAM-resident software
                  (TSR's), and/or have many drivers in your CONFIG.SYS file,
                  you may be limited to less than 4000 points.  CC-GOGO does
                  not require any drivers in your CONFIG.SYS file, and will
                  run if you boot off your system floppy.  The only driver
                  you may wish to use would be your mouse driver.  To find
                  out how much free RAM you have, use the DOS CHKDSK command.
                  CC-COGO requires 44 bytes for each point that is stored, so
                  if you are running a RAM-resident program that uses 8800
                  bytes (for example), you may lose 200 points capacity in
                  CC-COGO.
                  
                  Quit:
                         Use this to quit CC-COGO.  You will see a "QUITTING,
                  ARE YOU SURE?" message.  Press "Y" to quit, or "N" or <Esc>
                  to return to CC-COGO.






















        CC-COGO                        Page 24




             B.   EDIT Submenu
        
                  View plot:
                              Use this routine to preview your current data.
                  You may zoom up or down using the <PgUp> or <PgDn> keys and
                  you may pan using the arrow keys.  Zoom "all" by pressing
                  <Home>.  Press <Esc> or <Spacebar> to exit.
                  
                  Display of data is controlled by turning layers on/off.
                  See the Section "SCREEN PLOTTING, LAYERS, AND ALMOST
                  "WYSIWYG"" for a comprehensive discussion of this function.
                  
                  This routine accomplishes the same thing whether it is
                  accessed from the pull-down menu, or with the <F10> key.
                  NOTE:  <F10> only works while "inside" another routine,
                  when the message at the left end of the message bar
                  notifies you.
                  
                  Draw lines:
                               This routine draws lines or curves between
                  existing points.  The first prompt is for a point number at
                  the beginning of a line, the next prompt is for the end of
                  the line.  After entering the end of the line, that point
                  automatically becomes the beginning of the next line, so
                  the user only has to continue to enter the next point to
                  draw a line through a series of points.  Entering a
                  negative radius point number at the "To Point:" prompt will
                  result in a prompt for the EC, so a curve may be drawn.
                  The "+" key may be used for the next point number if the
                  points are sequential.  The end of the line or curve
                  becomes the currently occupied point.
                  
                  To use the numeric keypad for point number entry, <NumLock>
                  must be on.  To zoom and pan using the keys described under
                  "View plot", you must either use the separate keypad on an
                  enhanced keyboard, or temporarily turn <NumLock> off.
                  
                  You may jump to the "Erase lines" routine directly, by
                  pressing the "E" key from inside this routine.  Press "D"
                  to return to "Draw lines".
                  
                  Erase lines:
                                This routine works identically to the "Draw
                  lines" routine, but deletes lines and curves rather than
                  drawing them.
                  
                  edit/enter Points:
                                      This routine will let you enter or edit
                  the coordinates and/or elevation and/or description of a
                  point.  The point will become the currently occupied point.
                  
                  To make it more convenient to edit data without having to
                  reenter unchanging data, the default (existing) data is
                  shown within the prompt.  To accept that data, press
                  <Enter>.
                  
                  New points entered will be assigned to the current layer.
                  



        CC-COGO                        Page 25




                  Delete points:
                                  This routine is used to delete a group of
                  points that were either temporary in nature or represented
                  an erroneous group of calculations.  The prompts are self-
                  explanatory.  Does not affect disk files until the file is
                  saved.
        
                  reNumber points:
                                    If you wish to duplicate a group of
                  points with different point numbers so that, for example,
                  they may be placed on another layer without losing the
                  original points, this is the routine to use.  The option to
                  "move" points rather than simply "copy" is given by a
                  prompt to delete old points if you wish.  Lines and curves
                  move to the new point numbers.  Does not affect disk files
                  until the file is saved.
                  
                  Rotate/translate points:
                                            This routine will rotate a
                  selected group of points through a selected angle, around a
                  selected "axis".  The axis and another reference point must
                  be chosen.  The angle may be an angle right or left, or a
                  recalled bearing, or an entered bearing.  Angle codes 1
                  through 7 are available.  The user will be prompted for a
                  point # to translate the axis point to, and he may enter a
                  point number (same as axis is no translation), or a non-
                  existing point number, which will prompt for coordinates.
                  The non-existing point number will not be created, but the
                  axis point will be moved to the entered coordinates, and
                  all points within the selected group will be moved
                  accordingly.  Following is a prompt for a scale factor.  A
                  scale factor of "1" results in no adjustment, while a scale
                  factor of "1.0001" will lengthen the distance between
                  coordinates by a ratio of 1 in 10,000.  Finally, the range
                  of points to be rotated/trainslated is prompted for.
                  
                  After completing the rotation/translation the user will
                  have an opportunity to enter another range of points to
                  rotate, using the same criteria as the previous group.  In
                  this way, many groups of points within a file may be
                  adjusted without affecting other points within the file.
                  
                  list Avail points:
                                      This routine lists points that are
                  available for creation; that is, those that do not yet have
                  coordinates.  You are prompted for the first and last point
                  to be listed.  Use <Ctl-NumLock> or <Pause> to temporarily
                  halt scrolling.  Use the "Toggles" "Printer" routine in the
                  SETTINGS submenu to cause points to list on your printer.
                  
                  list Used points:
                                     This routine lists existing points.  You
                  are prompted for the first and last point to be listed.
                  Use <Ctl-NumLock> or <Pause> to temporarily halt scrolling.
                  If you get tired of watching points scroll past and change
                  your mind, the <Esc> key will stop it permanently.  Use the
                  "Toggles" "Printer" routine in the SETTINGS submenu to
                  cause the listing to print on your printer.
                  


        CC-COGO                        Page 26




             C.   COGO Submenu:  This submenu is divided into four sections.
                  The first is for traversing/inversing along a series of
                  courses.  The second section is for radial
                  traversing/inversing, without moving the occupied point.
                  The third is for creating curves, and the fourth performs
                  various types of intersections.
                  
                  Traverse:
                             When starting the traverse routine you are
                  prompted for a starting point number, with the default
                  being the current occupied point.  A different point number
                  entered results in the entered point becoming the occupied
                  point.  If the point hasn't yet been created, you will then
                  have the opportunity to enter the coordinates of the
                  starting point.  It is not necessary to create a point
                  before starting this routine; there is no separate
                  "starting" routine.  Following the starting point number
                  selection are prompts for angle code, angle (or delta), and
                  distance (or radius), followed by the new point number.  If
                  the Zenith toggle is on, a prompt for zenith angle will
                  appear before the distance prompt.  The "+" key is
                  available for consecutive point numbering.
                  
                  TO TRAVERSE A NON-TANGENT CURVE, YOU MUST FIRST TRAVERSE A
                  ZERO DISTANCE ON THE TANGENT BEARING.
                  
                  If the Description toggle is on, a prompt for point
                  description will appear within the above sequence.
                  
                  After each course, the routine moves the occupied point to
                  the last point created and begins again at the angle code
                  prompt for the next course.  You may break out of this loop
                  at any point by pressing the <Esc> key.  When returning to
                  traverse, you are again presented with the "Starting
                  point #: " prompt.  The calc window shows a record of
                  points and courses.
                  
                  Inverse:
                            The inverse routine begins like the traverse
                  routine, with a prompt for "FROM Point #: ", and a chance
                  to press <Enter> for the currently occupied point.  There
                  is no chance, however to enter coordinates if the point
                  does not exist, in which case you will see an error
                  message.  A "TO Point #: " prompt follows, followed by
                  calculations showing in the window.  Inversing a curve is
                  accomplished by entering a negative radius point number at
                  the "TO point #:" prompt.  This results in an "EC Point #:"
                  prompt, which when given, allows the program to inverse to
                  the EC.  Inversing a curve of 180 degrees or more causes
                  problems with area and delta values, as the program doesn't
                  know which way to inverse, so assumes the short arc.
                  









        CC-COGO                        Page 27




                  After the inverse has been completed, the "TO Point #:"
                  becomes the occupied point and moved to the "FROM Point #:"
                  prompt, allowing you to rapidly inverse from point to point
                  by entering point number after point number.
                  If you wish to randomly inverse between non-contiguous
                  pairs of points, simply press <Esc> after each inverse, and
                  the "FROM Point #: " prompt will be available.  Press <Esc>
                  again at this prompt and you will return to "Select
                  Function" mode.
        
                  Area:
                         Since there is no "starting" routine, one may wonder
                  what the number means that is printed when this key is
                  pressed.  Well, the area calculations are occurring
                  continuously during traverse and inverse routines, and are
                  zeroed only when this routine is used, so it is up to you
                  to use it BEFORE running a closure, and AFTER traversing or
                  inversing to the point of beginning.  Sideshots may be done
                  in the middle (which do not accumulate area), but will
                  clutter up your printout, and possibly your mind, and are
                  not recommended.  The <F4> key may be used while traversing
                  or inversing to show the accumulated area and return its
                  value to zero.
                  
                  Sideshot:
                             Sideshot is used when many shots have been taken
                  from one setup point.  It is assumed that you traversed or
                  inversed to the currently occupied point.
                            
                  When using sideshot, remember that the backsight azimuth
                  used for angles and deflections is the last one used in a
                  traverse, inverse, or intersection routine.  Sideshot gives
                  you no opportunity to enter a backsight bearing.  Again,
                  you may press <Enter> at the "FROM Point #: " prompt to
                  choose the currently occupied point.  Any other point may
                  be chosen, but in that case use care when using any angle
                  codes other than 1 through 4.  Using sideshot with
                  quadrants and bearings causes no problems from random
                  points.  Alternatively, jumping back and forth between
                  sideshot and traverse presents no problems with any of the
                  field angle codes as long as the currently occupied point
                  is chosen.  Note that the "-" (curve) angle code is not
                  available from sideshot.  Sideshot does not change the
                  current bearing or azimuth.  When leaving sideshot, the
                  currently occupied point will be whatever was chosen at the
                  "Sideshot FROM point #: " prompt.  It has no effect on area
                  calculations.
                            
                  The Description and Zenith toggles have the same effect as
                  in Traverse, turning the description and zenith angle
                  prompts on or off.
                  
                  Radial inverse:
                                   This routine is almost identical to
                  Inverse.  The two differences are that area is not
                  accumulated and the occupied point does not change after
                  the "inversed" course is printed.  Some refer to it as
                  "sideshot inverse".
                  


        CC-COGO                        Page 28




                  3 pt circle:
                                This routine will determine the radius and
                  center of a circle whose arc passes through three points,
                  which must have already been created.  The routine prompts
                  for the point numbers of the three points and the point
                  number to be used for the center.  The radius is printed as
                  well as the coordinates of the new center point.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  inscribe Curve:
                                   This routine is used to inscribe a curve
                  within two lines that the user has already established.
                  The routine begins by prompting for the P.I., with the
                  occupied point as the default.  Prompts follow for a point
                  on the backsight tangent, the foresight tangent, the
                  desired point numbers for B.C., E.C., and radius point, and
                  the curve radius.  After completion, the bearing to the
                  E.C. from the P.I. is the current bearing and the E.C.
                  becomes the occupied point.  Area is not accumulated.
                  





















        CC-COGO                        Page 29




                  Bearing-bearing intersection:
                                                 This routine is used to
                  traverse from the occupied point (or a new point if the
                  user wishes) on a known bearing "through" an unknown point,
                  to a known point using another known bearing.  The unknown
                  distances to and from the "through" point are calculated,
                  as are the coordinates of the "through" point.
                            
                  Area is not accumulated through this routine.  Sequence of
                  prompted data entry is in the direction of travel.  New
                  quadrants and bearings or recalled bearings (angle codes 1
                  thru 5) are available.  The "to" point becomes the occupied
                  point, and the bearing toward the "to" point becomes the
                  current bearing when the routine is finished.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  bearinG-distance intersection:
                                                  This routine is used to
                  traverse from the occupied point (or a new point if the
                  user wishes) on a known bearing "through" an unknown point,
                  to a known point using a known distance.  The unknown
                  distance to the "through" point is calculated, as are the
                  coordinates of the "through" point.  The unknown bearing
                  from the "through" point to the "to" point is calculated.
                  If the given distance is too short to intersect the given
                  bearing, an error message appears, with the opportunity to
                  re-enter the known data.  There are two solutions to this
                  type of problem, and CC-COGO will present both answers in
                  the prompt area, for the user's choice.
                            
                  Area is NOT accumulated through this routine.  Sequence of
                  prompted data entry is in the direction of travel.  The
                  occupied point must be the point from which the bearing is
                  known, and may be changed at the "FROM Point #" prompt.
                  New quadrants and bearings or recalled bearings (angle
                  codes 1 thru 5) are available.  The "to" point becomes the
                  occupied point, and the bearing toward the "to" point
                  becomes the current bearing when the routine is finished.
                  









        CC-COGO                        Page 30




                  Distance-distance intersection:
                                                   This routine is used to
                  traverse from the occupied point (or a new point if the
                  user wishes) on a known distance "through" an unknown
                  point, to a known point using another known distance.  The
                  unknown bearing to the "through" point is calculated, as
                  are the coordinates of the "through" point.  The unknown
                  bearing from the "through" point to the "to" point is also
                  calculated.  If the given distances cannot  intersect, an
                  error message appears, with the opportunity to re-enter the
                  known data.  There are two solutions to this type of
                  problem, and CC-COGO will present both answers in the
                  prompt area, for the user's choice.
                            
                  Area is NOT accumulated through this routine.  Sequence of
                  prompted data entry is in the direction of travel.  The
                  "to" point becomes the occupied point, and the bearing
                  toward the "to" point becomes the current bearing when the
                  routine is finished.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  taNgent to curve:
                                     This routine will create a line that
                  begins tangent to a selected curve, and goes to a selected
                  point.  A new point is created at the point of tangency.
                  The radius point must already exist, as must the ending
                  point.  The prompts will start you at the radius point,
                  taking you through the point of tangency (unknown point),
                  to the "TO" point.  There are two solutions, and to decide
                  whether to go "right" or "left", picture yourself standing
                  on the point of tangency with the radius point behind you.
                  





















        CC-COGO                        Page 31




                  90 offsets:
                               This routine will calculate the station and
                  offset distance to a point, from a base line defined by a
                  given point with a defined station and a base line bearing.
                  A negative station will result if the base station is too
                  small and the point is in the opposite direction than the
                  base line bearing.  When entering the base angle, angle
                  codes 0 through 5 are available.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  Offset intersection:
                                        This routine will perform an
                  intersection between offsets from two lines, creating a new
                  point at the intersection of the offsets.  The two lines
                  must already be defined by three points: the backsight, PI,
                  and foresight.
                            
                  A different offset may be used from each line.  The first
                  offset is from the line defined by the backsight point and
                  the PI, the second offset is from the line defined by the
                  PI and the foresight point.  Both offsets must be to the
                  right, so set up the sequence of backsight, PI, and
                  foresight points so that the new intersection point will be
                  on the right side.  If it is not possible to input both
                  offsets to the right, a negative offset may used to force a
                  left offset for one of the points.
                            
                  The routine comes in handy for calculating the intersection
                  of the sidelines of two roads of different widths, or for
                  defining the zoning setbacks inside a lot, or other similar
                  problems.
                  










        CC-COGO                        Page 32




             D.   ROAD/LOT Submenu:
                  
                  area/Rotate:
                                This routine solves a triangle of
                  predetermined area, when a base line and a known bearing
                  from one end of the base line is input.  The unknown course
                  is "rotated" around the "pivot end" of the base line to
                  achieve the desired area.  The known bearing is from the
                  "bearing end" of the base line to the "new point".  Angle
                  codes 1 through 5 may be used for the known bearing.  After
                  completion, the three sides of the triangle are inversed
                  and the area is printed.  The "pivot end" becomes the
                  occupied point and the closing bearing to that point
                  becomes the current bearing.  If the Lines toggle is on,
                  the new line will be drawn.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  area/Slide:
                               This routine solves a trapezoid of
                  predetermined area, when a base line and known bearings
                  from each end of the base line is input.  The unknown
                  course "slides" from the base line, staying parallel to the
                  base line to achieve the desired area.  Angle codes 1
                  through 5 may be used for the known bearings.  If a
                  solution cannot be reached after 200 iterations, a "NO
                  SOLUTION" error message will appear.  After completion, the
                  four sides of the trapezoid are inversed and the area is
                  printed.  The "first end point" becomes the occupied point
                  and the closing bearing to that point becomes the current
                  bearing.  If the Lines toggle is on, the new line will be
                  drawn.
                  

















        CC-COGO                        Page 33




                  Tee intersection:
                                     Calculates curves at the corners of the
                  sideline of a street intersection.  This routine is for a
                  "tee", with a "thru" street and a "side" street.  The same
                  radius must be used for both corners.  A different width
                  may be used for each street.  Only one new point number is
                  prompted for, they are assigned sequentially to the new
                  points, starting with the beginning point # entered.  The
                  point at the centerline intersection must exist, and a
                  point on each tangent must also exist.
        
                  First, the point at the intersection of the centerlines is
                  prompted for.  When the prompt for the "P.O.T. Thru" is
                  given, enter a point in either direction.  When the "P.O.T
                  Side" prompt is given, enter only a point on the side
                  street centerline.  The radius to use for the corners is
                  prompted for, then the width (half) of the "thru" street,
                  then that of the "side" street.  The points and curve data
                  are then listed.  It is suggested that the "90 degree
                  offsets" routine in the COGO submenu be used to calculate
                  distances along centerlines for stationing.
                  
                  If the Lines toggle is on, the new curves will be drawn.
                  
                  Note that a half delta point is created for the bulb, so it
                  may be inversed (CC-COGO does not accept deltas of 180 or
                  greater for inversing or curve drawing).
                  
                  If the Description toggle is on, the new points will be
                  given descriptions of "PC" and "RP".
                  
                  Cross intersection:
                                       This routine does a four-way
                  intersection, similar to the Tee Intersection.  The prompts
                  are the same, even for the "thru" and "side" street.  Even
                  though both streets are actually "thru", designating one as
                  "side" helps to identify which street which width goes
                  with.  It doesn't matter which of the streets the user
                  calls "thru" and which he calls "side", as long as the
                  appropriate width is input when prompted.  Likewise,
                  P.O.T.s in either direction from the centerline
                  intersection point may be input at the appropriate prompt.
                  See the "Tee Intersection" discussion above.
                  

















        CC-COGO                        Page 34




                  cul De sac:
                               Calculates centered or offset cul de sac
                  curves.  This is very similar in use to the intersection
                  routines.  The first point prompted for is the "center",
                  which is the center of the "bulb" if it is a centered cul
                  de sac.  If it is offset, the "center" is actually the end
                  of the tangent, and the routine will calculate the radius
                  point of the bulb and assign it a point number.  The other
                  prompts for P.O.T., first new point, corner and bulb
                  radius, and half street width, are self-explanatory.  The
                  last prompt is where the user chooses a centered, or left
                  offset, or right offset cul de sac.
                  
                  If the Lines toggle is on, the new curves will be drawn.
                  
                  Note that a half delta point is created for the bulb, so it
                  may be inversed (CC-COGO does not accept deltas of 180 or
                  greater for inversing or curve drawing).
                  
                  If the Description toggle is on, the new points will be
                  given descriptions of "PC" and "RP".
                  
                  Knuckle:
                            Calculates curves at the corners of the sideline
                  of a street at an angle, with a "bulb" on one side and a
                  return on the other.  The same radius must be used for all
                  corners, and (optionally) a different radius for the bulb.
                  The same (half) width must be used for each street
                  direction.  Only one new point number is prompted for, they
                  are assigned sequentially to the new points, starting with
                  the beginning point # entered.  The point at the centerline
                  intersection must exist, and a point on each tangent
                  ("back" and "fore") must also exist.
        
                  First, the point at the intersection of the centerlines is
                  prompted for.  When the prompt for the "P.O.T. Back" is
                  given, enter a point on tangent in either direction.  When
                  the "P.O.T Fore" prompt is given, enter a point on tangent
                  in the other direction.  The # of the first new point is
                  prompted for.  The radius to use for the corners is
                  prompted for, then the radius of the bulb, then the (half)
                  width of the street.  The points and curve data are then
                  listed.  It is suggested that the "90 degree offsets"
                  routine in the COGO submenu be used to calculate distances
                  along centerlines for stationing.
                  
                  If the Lines toggle is on, the new curves will be drawn.
                  
                  Note that a half delta point is created for the bulb, so it
                  may be inversed (CC-COGO does not accept deltas of 180 or
                  greater for inversing or curve drawing).
                  
                  If the Description toggle is on, the new points will be
                  given descriptions of "PC" and "RP".
                  






        CC-COGO                        Page 35




                  right of Way:
                                 The purpose of this routine is calculate the
                  sidelines of a right-of-way, once the centerline has been
                  established.  The routine will calculate coordinates for,
                  and assign point numbers to, lines parallel to a line
                  defined by existing point numbers.  Running this routine is
                  similar to inversing, with prompts included for the point
                  numbers being created along the offset lines.  The routine
                  moves ahead to the foresight point after calculating the
                  offset points, using the previous centerline point for a
                  backsight, and prompting for a new foresight point.  If
                  either a left offset or a right offset is not desired,
                  enter "0" when prompted.
                  
                  If the Description toggle is on, the new points will be
                  given descriptions of "R/W".
                  
                  The Lines toggle has no effect here.
                  
                  Lot summary:
                                This routine is for printing a lot summary
                  with a page heading that includes manually entered title
                  information.  It then resets the area to zero and inverses
                  between points selected by the user.  When the beginning
                  point is entered as a "TO Point", the routine finishes and
                  prints the area of the closed figure.
                  
                  If the Lines toggle is on, lines will automatically be
                  drawn around the figure.
                  































        CC-COGO                        Page 36




             E.   TOPO Submenu:
                  
                  Traverse/elevation:
                                       This routine is used to carry
                  elevations along with a field traverse, such as when
                  setting control for several radial topo setups or for
                  photogrammetric mapping.  It is similar to COGO Traverse,
                  with the automatic inclusion of delta elev/horizontal
                  distance prompts or zenith angle/slope distance prompts,
                  depending on the status of the Zenith Toggle.  The first
                  option is used for Total Station traverse and the second is
                  for EDM/theodolite traverse.
                  
                  In addition to the usual traverse routine prompts, there
                  are prompts for HI (Height of Instrument) and Rod, in case
                  variable rod readings are necessary due to terrain or
                  vegetation.  There is a prompt for starting elevation if
                  the point has not previously had an elevation established.
                  
                  Angle codes 1-9 are available for traversing.
                  
                  After traversing a course, the occupied point moves ahead
                  and the routine prompts for data for the next course.
                  Press <Esc> to exit when finished.  Occupied point becomes
                  the last point traversed to, and the last bearing to that
                  point becomes the current bearing.
                  
                  The Lines toggle has no effect here.
                  
                  Stadia:
                           This routine is used to reduce field notes from a
                  radial topo, done from one setup, using the stadia method.
                  
                  The first data that must be input are regarding the setup
                  point:  point number, coordinates (unless the point already
                  exists), description of the setup point, ground elevation
                  at the setup point (which will automatically be entered if
                  it is in the file), height of instrument above the ground
                  (which becomes the default rod reading, assuming the target
                  is set at the HI), and backsight bearing.  The only
                  backsight bearing angle codes allowed are 1-4 (quadrant and
                  bearing) and 5 (recall bearing).
                  
                  Prompts follow for the data to establish the points being
                  shot:  Angle code (codes 1-9 are available), horizontal
                  angle, vertical angle, stadia interval (rod interval times
                  stadia interval factor), rod reading (press return to
                  accept the default shown), description of point, and point
                  number being shot.
                            
                  Note that the vertical angle is the default input rather
                  than zenith angle, unless the Zenith toggle is on, since
                  the stadia method is usually used with a transit.  Also
                  note that the stadia constant is assumed to be zero.
                  
                  The Lines toggle has no effect here.
                  




        CC-COGO                        Page 37




                  Radial topo:
                                This routine is used to reduce field notes
                  from a radial topo with an electronic distance meter (EDM)
                  or total station.  If an EDM is used, the Zenith toggle
                  should be turned on.  Otherwise, the default mode is for
                  total station data, which requires delta elevation and
                  horizontal distance as input data.  In EDM mode, it is
                  assumed that a top-mount EDM is used, and that the prism is
                  set above the target at the same offset distance as the EDM
                  is above the telescope.
                  
                  The first data that must be input are regarding the setup
                  point:  point number, coordinates (unless the point already
                  exists), ground elevation at the setup point (which will
                  automatically be entered if it is in the file), height of
                  instrument above the ground (which becomes the default rod
                  reading, assuming the target is set at the HI), and
                  backsight bearing.  The only backsight bearing angle codes
                  allowed are:  1-4 (quadrant and bearing), and 5 (recall
                  bearing).
                            
                  Prompts follow for the data to establish the points being
                  shot:  Angle code (codes 1-9 are available), angle, delta
                  elevation (press <Enter> if no elevation is desired for the
                  point) or zenith angle, horizontal or slope distance, rod
                  reading (press <Enter> to accept the default shown),
                  description of point, and point number being shot.  The
                  program loops back for another point after printing input
                  data and reduced output data.  Press <Esc> to exit when
                  finished.  Occupied point becomes the setup point and
                  current bearing becomes the bearing from the backsight to
                  the setup point, if these values were changed when "Radial
                  Topo" was started.
                  
                  The Lines toggle has no effect here.
                  
                  Elevation boot:
                                   This routine will automatically raise or
                  lower the elevation of a selected group of points.  This is
                  handy when a topo is done with an assumed bench mark (or
                  using the wrong elevation), and the elevations of all or
                  part of the topo must be adjusted.  Simply select the range
                  of points at the prompts, and enter the amount (plus or
                  minus) of the adjustment.  After adjusting the elevations
                  and printing them, the routine loops back for another range
                  of points.  Press <Escape> to exit.
                  














        CC-COGO                        Page 38




             F.   UTILITY Submenu:
                  
                  Triangles:
                              This routine allows the user to enter three of
                  six triangle criteria and obtain solutions for the other
                  three.  Any combination of angles and sides may be entered
                  except angle-angle-angle, which has no solution.  Remember
                  the triangle from your trig class, where A, B, and C are
                  the angles and a, b, and c are the lengths of the sides
                  opposite the respective angles.  Draw yourself a sketch of
                  the triangle you want to solve, and entering the data at
                  the prompts for "Angle A: ", "Side a: ", etc. will be
                  easier.  If an item is unknown, press <Enter>.  When three
                  criteria have been entered, the prompts stop and the
                  results are calculated, if possible.
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  Curve solution:
                                   This routine allows the user to enter two
                  of six curve criteria: 1) delta, 2) radius, 3) arc length,
                  4) tangent, 5) chord, and 6) external distance.  The
                  remaining four criteria will be calculated and printed.
                  When prompted for the data, press <Enter> if the data is
                  unknown.  If less than two criteria are entered, an error
                  message will result.  Either delta or radius must be one of
                  the two criteria entered.
                  






















        CC-COGO                        Page 39




                  Grades:
                           The user enters a beginning and ending station and
                  beginning elevation, and a profile grade (in ft/ft, NOT
                  percent).  The user may then use a routine that
                  automatically figures grades at a selected stationing
                  interval (Autostationing), or may specify stations
                  individually.  The "Autostation" option will use "even"
                  stations, though the user may enter an odd beginning and
                  ending station.  This feature depends on the user entering
                  a stationing interval that divides evenly into 100.
                  
                  tangent Intersection:
                                         When a beginning station and
                  elevation is known, and a second station and elevation is
                  known, and a grade break is desired between the two with
                  known profile grades FROM the beginning station to the
                  grade break and from the grade break TO the second station,
                  this is the routine to use.  The station (PI Station) and
                  elevation of the grade break are calculated and shown.
                  
                  Vertical curve:
                                   This routine prompts for known data and
                  calculates and prints unknown data.  The first prompt is
                  for the PVI (point of vertical intersection).  If the BVC
                  (begin vertical curve) is known, press <Enter> at the first
                  prompt, and BVC information will be prompted for instead.
                  After prompting for the required data, the basic curve
                  information is printed, with the peak/sag station and
                  elevation, if applicable.  A routine follows which lets the
                  user compute elevations automatically at a selected
                  stationing interval (Autostationing), or compute elevations
                  at individually specified stations.
                  
                  Station line:
                                 The Station Line routine is a routine that
                  will:  1) Create points at individually specified stations
                  and offsets, or 2) Automatically create points at
                  centerline and optional (different) left and/or right
                  offsets, at a user-selected stationing interval.  The first
                  part of the routine lets the user select a point and
                  bearing, and assign a station to the point.  Following is
                  an "Autostationing or Specified station & offset" prompt
                  which allows the user to either automatically station the
                  centerline and a right and/or left offset line OR
                  selectively create points at odd stations and offsets.
                  
                  The "Specified station..." option will not create a point
                  on the base line; it will only create a point on the
                  offset.  Defaults within the prompt, and a loop back for
                  another point allow easy entry of multiple offsets from the
                  same station.  When this option is quit, the
                  "Autostationing or Specified..." prompt returns.
        
                  The "Autostationing..." option will prompt for a beginning
                  station, an ending station, a left offset, a right offset,
                  a stationing interval, and the first new point number to be
                  assigned.  Point numbers are sequentially assigned as
                  follows:  centerline, left offset, right offset,
                  centerline, left..., etc.  Note that this option always
                  creates a new point on centerline.  If a zero offset is

        CC-COGO                        Page 40




                  entered for the right or left offset, that particular
                  offset line is not created.  For example, if a left offset
                  is specified, and a zero right offset is specified, points
                  will be created and sequentially numbered as: centerline,
                  left offset, centerline, left offset, etc.  After the
                  option has finished, the "Autostationing or Specified..."
                  prompt returns.  Note that this option will use the literal
                  beginning station and increment by the stationing interval;
                  it does NOT adjust points to "even" stations like the
                  Grades routine or Vertical Curve routine.  Those routines
                  are "design" routines that develop data for placement on
                  plan/profile sheets; this routine is for staking, where the
                  surveyor may want to use an odd stationing interval and not
                  have the routine make presumptuous adjustments to get the
                  points on "even" stations.
        
                  The user may use the Autostationing option, then use the
                  Specified option to catch the odd stations and offsets, or
                  vice-versa, without having to reenter the base point,
                  bearing and station, if he does so without quitting the
                  routine completely.
        
                  If the Description toggle is on, descriptions for each
                  point will be automatically created that include the
                  station, direction, and amount of offset.  For example, the
                  description for an offset point 25 feet left at station
                  10+00 would be "1000L25".  Note that it is possible for a
                  combination of station and offset to exceed the allowable
                  twelve spaces for a description; in that case the
                  description will be truncated.  For example an offset point
                  125.75 feet left at station 150+00.50 will have a
                  description of "15000.5L125."; the "75" was truncated.
                  This is an unusual case, however.
        
                  The Specified option is also useful for reducing topo field
                  notes that are taken using the station and offset method.
                  The elevations will have to be entered manually, using the
                  "Edit/Enter Points" routine in the EDIT submenu.
             
                  Another "non-staking" use of this routine would be for
                  establishing the right-of-way sidelines of a newly designed
                  or widened road or highway, where cuts and fills require a
                  right-of-way of varying width.  Many times the sidelines
                  are scaled off the improvement plans using stations and
                  offsets.
                  
                  Station curve:
                                  The Station Curve routine is a routine that
                  will:  1) Create points at individually specified stations
                  and offsets, or 2) Automatically create points at
                  centerline and optional (different) left and/or right
                  offsets, at a user-selected stationing interval.  The first
                  part of the routine lets the user select a curve (BC, RP,
                  and EC), and assign a station to the BC.  Following is an
                  "Autostationing or Specified station & offset" prompt which
                  allows the user to either automatically station the
                  centerline and a right and/or left offset line OR
                  selectively create points at odd stations and offsets.
                  


        CC-COGO                        Page 41




                  The "Specified station..." option will not create a point
                  on the curve centerline; it will only create a point on the
                  offset.  Defaults within the prompt, and a loop back for
                  another point allow easy entry of multiple offsets from the
                  same station.  When this option is quit, the
                  "Autostationing or Specified..." prompt returns.
        
                  The "Autostationing..." option will prompt for a beginning
                  station, an ending station, a left offset, a right offset,
                  a stationing interval, and the first new point number to be
                  assigned.  Point numbers are sequentially assigned as
                  follows:  centerline, left offset, right offset,
                  centerline, left..., etc.  Note that this option always
                  creates a new point on centerline.  If a zero offset is
                  entered for the right or left offset, that particular
                  offset line is not created.  For example, if a left offset
                  is specified, and a zero right offset is specified, points
                  will be created and sequentially numbered as: centerline,
                  left offset, centerline, left offset, etc.  After the
                  option has finished, the "Autostationing or Specified..."
                  prompt returns.  Like the Station Lines routine, this
                  option will use the literal beginning station and increment
                  by the stationing interval; it does NOT adjust points to
                  "even" stations.  Unlike the Station Lines routine, you may
                  not enter beginning or ending stations that are not within
                  the specified curve.  The stations must be between the BC
                  and the EC, or an error message will be printed.
        
                  The user may use the Autostationing option, then use the
                  Specified option to catch the odd stations and offsets, or
                  vice-versa, without having to reenter the base point,
                  bearing and station, if he does so without quitting the
                  routine completely.  Since the BC and EC are usually odd
                  stations, and are already existing points, it would be good
                  practice to first use the Specified option to establish the
                  left and right offsets from the BC, then use the
                  Autostationing option to station the interior of the curve,
                  then use the Specified option to establish the EC offsets.
        
                  If the Description toggle is on, descriptions for each
                  point will be automatically created that include the
                  station, direction and amount of offset as with the
                  "Station Lines" routine.
                  

















        CC-COGO                        Page 42




                  Curve stakeout:
                                   Provides field stakeout information for a
                  curve without creating new points.  The curve must have
                  been previously created, at least the BC, EC, and RP.  The
                  routine prompts for point numbers for these components and
                  computes and prints the curve data, similar to curve data
                  printout when traversing a curve.  Then follow prompts for
                  station of PC (which is the proposed setup point and may be
                  BC or EC, depending on which way you are going) and station
                  interval (such as 50 or 100 feet), and offset, for staking
                  curves on an offset from the centerline.
                  
                  Stations and staking information will be printed out for
                  sequential "even" stations.  For example, if the PC is at
                  station 10+20 (enter "1020") and the interval chosen is 50
                  feet, data will be printed for stations 10+50, 11+00,
                  11+50, etc., and the other end of the curve, rather than
                  10+70, 11+20, etc.  If you want to stake from the "high"
                  stationed end of the curve, enter the point number of that
                  end as the PC and the station of that end, and enter a
                  negative staking interval.
                  
                  The offset entered will allow the staking data to be
                  developed using the centerline stationing, but the
                  instrument will be able to occupy the PC on the offset
                  curve, and lay out the offset curve from that point.  For
                  example, if you want to stake curb and gutter with your
                  stakes offset 20 feet toward the center of the curve,
                  occupying the PC on the offset, you would enter "-20" as
                  the offset.  The centerline radius will be used for
                  calculating stations, since that is what most improvement
                  plans use.  If the offset radius were to be used, the
                  staked points would gradually "creep" away from their
                  corresponding centerline station.
        
                  There are two options for stakeout data: deflection angles
                  and tangent offsets.  This is the last prompt before
                  CC-COGO does its business.  Both routines assume that the
                  entire curve will be laid out from the PC (on the offset if
                  the offset is not zero).  The deflection angles given, or
                  tangent distances given, assume the instrument is pointed
                  toward the PI of the curve.
                  


















        CC-COGO                        Page 43




                  Radial stakeout:
                                    This routine is for computing ties for
                  staking or setting property corners.  The user enters the
                  setup point # and backsight point #, then a range of point
                  #'s to be staked.  The angle right, distance, and bearing
                  to each point is then printed.  The routine loops back for
                  another range of points.  There is also a "search" distance
                  prompt, which will allow the user to select a maximum
                  distance for stakeout points from the setup point.  The
                  default is 500 feet, which changes if the user enters a
                  different distance.  All points within the point range
                  selected are analyzed to see if they are within the
                  selected distance from the setup point, and only those
                  within that distance are printed.
                  
                  When the routine is quit, the setup point becomes the
                  occupied point and the bearing to the backsight becomes the
                  current bearing.
                  
                  Line feed:
                              This will cause the calc window on the screen
                  to scroll up one line, to separate groups of calcs if you
                  wish.  If the Printer Toggle is on, the printed output will
                  insert a blank line (line feed) at the same time.
                  
                  print Note:
                               This will allow you to enter a note that will
                  print on the screen, and if the Printer Toggle is on, to
                  also print on the printed output.
                  
                  page Up:
                            This will scroll the screen up one page
                  (effectively clearing the calc window), and if the Printer
                  Toggle is on, will form feed one page and print a new page
                  heading.
                  

























        CC-COGO                        Page 44




             G.   MODULES Submenu:
                  
                  Transfer between the CC-SURVeyor 4 family of programs is
                  somewhat automated by these menu choices.  To transfer
                  program control to another CIVILcomp program that is
                  listed, pick it off the menu.  Otherwise you must Quit
                  CC-COGO, then start the other program, then re-open the
                  file.  When you transfer program control using this
                  submenu, you will be given a chance to save your .CCC file
                  if you haven't done so, and when the new program loads, it
                  will automatically open the same-named file for you.  You
                  may return to CC-COGO by using the MODULES submenu in the
                  other program.  To speed up the transfer, if you have
                  already saved your files, press <Esc> at the "Save ...
                  File" prompts, and the transfer will skip that process.
                  The programs available to transfer to will be those that
                  are present on your hard disk, that are listed in the
                  submenu.  In other words, if you have not purchased
                  CC-CONTour, you will not be able to pick it on the submenu.
                  
                  NOTE:  Program transfer using this submenu will only work
                  properly if you have started CC-COGO from the DOS command
                  line, or transfered to it from another module, or started
                  it from a .BAT file in which COGO is the last line.  If
                  CC-COGO is started from a menu program or shell program,
                  when you try to transfer to another module using this
                  submenu, you will most likely end up in some part of your
                  menu program or shell program, as those types of programs
                  always try to return control to themselves when an
                  application is terminated.































        CC-COGO                        Page 45




             H.   SETTINGS Submenu:
                  
                  ccc Path:
                                 This routine may be used to configure
                  CC-COGO to permanently use a particular drive or
                  subdirectory, or to temporarily change the path to load or
                  save a file to a diskette drive or different subdirectory
                  than the previously configured one.  The path chosen with
                  this routine affects only .CCC files.
                  
                  If no path is set, the default is to use the same
                  subdirectory that CC-COGO is installed in for file storage.
                  
                  To make the new path permanent, use "View/save" in this
                  submenu.
                  
                  Import/export Path:
                                       This routine may be used to configure
                  CC-COGO to permanently use a particular drive or
                  subdirectory, or to temporarily change the path to load or
                  save a file to a diskette drive or different subdirectory
                  than the previously configured one.  The path chosen with
                  this routine affects only imported or exported files.
                  
                  If no path is set, the default is to use the same
                  subdirectory that CC-COGO is installed in for file storage.
                  
                  To make the new path permanent, use "View/save" in this
                  submenu.
                  
                  Layer display:
                                  This routine controls which layers will
                  screen plot.  The upper part of the dialog box shows the
                  "point attribute" layers and the lower part shows the
                  "user-named" layers.  A more detailed explanation of the
                  layer capabilities of CC-COGO is given in the "SCREEN
                  PLOTTING, LAYERS, AND ALMOST WYSIWYG" section of this
                  manual.  All layers (except elevation and description) plot
                  by default.  Note that a "check mark" at the left of a
                  layer name indicates that the layer is "on".  If <Enter> is
                  pressed on a highlighted name or the mouse is clicked on a
                  name, the "check mark" will come and go, indicating that
                  the layer is being toggled on and off.  The elevation and
                  description layers cannot be turned on at this time.  You
                  may press <F10> at any time to see how the current layer
                  arrangement will look.  Pick <OK> or press <Esc> when you
                  are satisfied with the layers.
                  
                  Change layer:
                                 This routine is used to assign or reassign
                  ranges of points to a user-named layer.  You will first be
                  prompted for a layer name (a dialog box shows existing
                  layers), then the first and last point to be assigned to
                  that layer.  The routine loops back to select another
                  layer.
                  





        CC-COGO                        Page 46




                  Set current layer:
                                      The "current" layer only affects what
                  user-named layer newly assigned points will be placed on.
                  For example, if points are going to be entered using the
                  "edit/enter Points" routine, and they are to go on the
                  BOUNDARY layer, you should first make the BOUNDARY layer
                  current before entering them.  The current layer name is
                  shown in the lower right hand corner of the screen, in the
                  color of the layer.  The default current layer is CONTROL.
                  
                  reName layers:
                                  The user-named layers may be renamed with
                  this routine.  The default layer names are:  CONTROL, TOPO,
                  BOUNDARY, EASEMENT, STREET, BUILDING, and UTILITY.  A
                  dialog box is used to present the current layer names.  By
                  pressing the <Enter> key, or clicking the mouse, the
                  current highlighted layer name is changed to "edit" mode.
                  While in this mode, you can edit or rename the layer.
                  Press <Enter> when done editing, and you can choose another
                  name to edit, or press <Esc> to exit the routine.  The new
                  names only affect the current file.  To create new default
                  layer names, use this routine in CC-PLOT and save the
                  settings from there.
                  
                  linetYpes:
                              This routine allows you to assign various
                  linetypes to the user-named layers, for screen plotting
                  (and pen plotting, if you have CC-PLOT).  A dialog box
                  showing the layer names and current linetypes is presented.
                  To change one of the layers to a different linetype, pick
                  it, and the available linetypes will be presented.  They
                  are schematically shown below, with the number used in the
                  .LAY file and the equivalent AutoCAD linetype name (used in
                  DXF files):
                  
                                 ___________    1    Continuous
                                 _____ _____    2    Dashed
                                 _ _ _ _ _ _    3    Hidden
                                 ____ _ ____    4    Center
                                 ___ _ _ ___    5    Phantom
                                 ...........    6    Dot
                  
                  The default linetype is "Continuous".  Each file may have
                  its own linetypes as well as layer names.  To create a
                  default linetype/layer arrangement, use this routine in
                  CC-PLOT and save the settings from there.
                  
                  Angle precision:
                                    You may choose different precisions for
                  screen and printer output of angles with this routine.  The
                  choices are presented in a dialog box.  This precision does
                  not affect the calculations or file precision, only the
                  printed output.  You may use "View/save" in this submenu to
                  make this setting the default for future use of CC-COGO.
                  






        CC-COGO                        Page 47




                  Distance precision:
                                       You may choose different precisions
                  for screen and printer output of distances and coordinates
                  with this routine.  The choices are presented in a dialog
                  box.  This precision does not affect the calculations or
                  file precision, only the printed output.  You may use
                  "View/save" in this submenu to make this setting the
                  default for future use of CC-COGO.
                  
                  Toggles:
                            There are several "toggles" (meaning they may be
                  toggled on/off) that may be set with this routine.  The
                  toggles are presented in a dialog box, and the ones that
                  are "on" have a check mark at the side.  Pressing <Enter>
                  while one is highlighted, or picking one with the mouse,
                  will cause it to toggle on/off.  The particular toggles,
                  when on, will:
                       
                       Azimuth:  cause all screen and printed output to use
                            north azimuth rather than quadrant/bearing for
                            angular output.
                       Description:  cause a prompt for a point description
                            each time a new point is created (or
                            automatically assign default descriptions in some
                            routines).
                       Lines:  cause a line or curve to be drawn as points
                            are created, while using many of the COGO and
                            ROAD/LOT routines.
                       Printer:  cause all data displaying in the calc window
                            on your screen to also print on your printer.
                       Zenith:  cause the "Traverse" and "Sideshot" routines
                            to prompt for zenith angle and slope distance
                            rather than horizontal distance.  Cause "Radial
                            topo" to accept EDM data (zenith angle and slope
                            distance) rather than total station (delta
                            elevation and horizontal distance).  Cause
                            "Stadia" to accept zenith angles rather than
                            vertical angles.
                       NOTE: The above toggles may also be turned on/off with
                       <Alt-A>, <Alt-D), <Alt-L>, <Alt-P>, or <Alt-Z> while
                       in data entry mode.
                  
                  Any toggle that is "on" will have its first letter show in
                  the "Toggles:" section of the message bar on the bottom of
                  the screen.
                  
                  The default settings of the Azimuth, Description, Printer,
                  and Zenith toggles may be set to "on" by using "View/save"
                  in this submenu after setting them with this routine.
                  
                  View/save:
                              This routine will show the current
                  configuration, and give you the chance to save the settings
                  if you desire.







        CC-COGO                        Page 48




        VIII.ERROR MESSAGES
             
             There  are  several  error  messages  that  the  BASIC  compiler
             generates that  CC-COGO does  not  "trap"  for.    When  CC-COGO
             "traps" errors,  it does  not let the error cause the program to
             "crash", and gives the user a chance to correct the error before
             continuing.   "Trapped" errors  are those  that beep and print a
             message below  the CC-COGO  prompt.    When the following errors
             are not "trapped", they may cause the program to "crash" to DOS,
             which causes  a loss  of all  data created  since the  last Save
             command.   The "non-trapped"  errors generally  have to  do with
             hardware problems  or file format problems.  Following is a list
             of messages  that have  been reported,  and possible  causes and
             fixes.
             
                  Device fault:  Probably a disk read or write error.  If you
                  get this  message regularly, and if you also get a DOS disk
                  error message,  you should  have your  disk drive  checked.
                  This may  also be  caused by the printer problems described
                  under "Device timeout", below.
             
                  Device timeout:   Most  of the  time this  is caused by the
                  printer either  being off,  or being  off-line  or  out  of
                  paper.   A loose printer cable may also cause this problem.
                  Also it  is difficult  to hand  feed single  sheets without
                  causing this  error.   Please use  continuous  form  paper.
                  CC-COGO will trap this error in most cases, but if you take
                  the printer  off line to formfeed, and don't put it back on
                  line, you may get this error the next time CC-COGO tries to
                  print.  This error will cause CC-COGO to crash and all work
                  done since the last Save will be lost.
                  
                  Input past  end:   Caused by  trying to  load an improperly
                  formatted  file.     You  may  have  renamed  another  COGO
                  program's coordinate file to *.CCC to try to get CC-COGO to
                  read it,  or you  may have  used your text editor to edit a
                  .CCC file,  .FLD file,  .MAP file,  .INI file, or .LAY file
                  and accidentally created an error in the file format.
             
                  String space  corrupt .  . .  .: Caused by same file format
                  problems as  "Input past end", above, but it may occur some
                  time later rather than within the "Open ccc file" routine.
             


















        CC-COGO                        Page 49




        IX.  UPGRADE HISTORY
             
             Release 4 of CC-SURVeyor includes four modules, of which CC-COGO
             1.0 is the central module.
             
             Version 1.0 of CC-COGO is based largely on CC-SURVeyor 3.2, with
             the addition of 2000 more points storage capacity, mouse driven
             menus, layer management, linetypes, user-selected output
             precision, user-selected file subdirectories, azimuth output
             option, VGA 640x480 graphics support, and minor enhancements to
             most routines.
             

















































        CC-COGO                        Page 50




        X.   REGISTRATION
        
             To help us provide proper support, please fill out this
             registration form and send it to CIVILcomp.
             
             
        ***********************  C C - C O G O   1  *************************
        
        Name_________________________________________________________________
        
        Street address_______________________________________________________
        
        City______________________________State________________Zip___________
        
        Occupation___________________________________________________________
        
        Make and model of IBM PC compatible__________________________________
        
        Version of MS-DOS__________ 8087/80287/80387________ RAM______K bytes
        
        Video display: CGA_______EGA_______VGA_______Herc_______Other________
        
        Diskette drives____3.5"____5.25"   Size of HD (if present)_________MB
        
        Current COGO program used______________________Version #_____________
        
        CAD software used_____________________________ Version #_____________
        
        Do you use a mouse?_____If yes, make and model_______________________
        
             digitizer?_____If yes, make and size____________________________
        
             plotter?_____If yes, make and size______________________________
        
             graphics printer?_____If yes, make and model____________________
        
        *********************************************************************
        
        
             Please send to:  CIVILcomp
                              320 Eureka Canyon Road
                              Watsonville, CA  95076



















        CC-COGO                        Page 51




        ************************ D I S C L A I M E R ************************
        
        ALTHOUGH THIS  PROGRAM HAS BEEN TESTED BY ITS DEVELOPER, NO WARRANTY,
        EXPRESSED OR IMPLIED, IS MADE BY THE DEVELOPER AS TO THE ACCURACY AND
        FUNCTIONING OF  THE PROGRAM  AND RELATED  PROGRAM MATERIAL, NOR SHALL
        THE FACT  OF  DISTRIBUTION  CONSTITUTE  ANY  SUCH  WARRANTY,  AND  NO
        RESPONSIBILITY IS ASSUMED BY THE DEVELOPER IN CONNECTION THEREWITH.
        
        *********************************************************************
        
        
        
        
        
        CREDITS:
             
             This program was written and compiled with Microsoft BASIC
             version 7.00.
             
             AutoCAD and AutoLISP are trademarks of AutoDesk, Inc.
             
             CC-SURVeyor, CC-COGO, CC-BALance, CC-CONTour, and CC-PLOT are
             trademarks of CIVILcomp.
             
             IBM is a trademark of International Business Machines Corp.
             
             LogiTech is a trademark of LogiTech, Inc.
             
             Windows is a trademark of Microsoft Corporation.
             
             The pull-down menus, dialog boxes and input editor are adapted
             from routines written by Crescent Software.
             




























        CC-COGO                        Page 52

```
{% endraw %}

## CC-PLOT.TXT

{% raw %}
```



                                     APRIL 1, 1990
         
         
         
         
         
         
         
         
         
         
         
         
                                        CC-PLOT
                                      Version 2.0
                                    Copyright 1989
                                          by
                             Richard Wadsworth, CIVILcomp
                                320 Eureka Canyon Road
                                 Watsonville, CA 95076
                                           
                                           
                   No part  of this software or manual may be copied
                   without permission,  except for  installation  of
                   the software  on the registered user's hard disk,
                   copies  made for backup purposes, or copies  made
                   for distribution with the shareware version.







































                                   TABLE OF CONTENTS
         
         INTRODUCTION  . . . . . . . . . . . . . . . . . . . .  3
         
         I.   INSTALLATION AND CONFIGURATION . . . . . . . . .  4
         
         II.  CC-PLOT MENUS AND DIALOG BOXES . . . . . . . . .  5
         
         III. SCREEN PLOTTING, LAYERS, AND ALMOST "WYSIWYG". .  6
         
         IV.  USING CC-PLOT
              A.   Short-Cut to your First Pen Plot  . . . . .  8
              B.   MORE Configuration and Plotting Options . .  9
         
         V.   DATA ENTRY
              A.   Error Checking  . . . . . . . . . . . . . . 10
              B.   Default Values  . . . . . . . . . . . . . . 10
              C.   The Mini Editor . . . . . . . . . . . . . . 10
         
         VI.  FILES
              A.   File Types, Filenames, Storage Location . . 11
              B.   CIVILcomp COGO (.CCC) File  . . . . . . . . 12
              C.   Layer Assignment (.LAY) File  . . . . . . . 13
              D.   Interpolation Net (.NET) File . . . . . . . 14
              E.   Contour Tic (.TIC) File . . . . . . . . . . 14
              
         VII. COMMAND REFERENCE
              A.   FILE Submenu  . . . . . . . . . . . . . . . 15
              B.   EDIT Submenu  . . . . . . . . . . . . . . . 18
              C.   PLOT Submenu  . . . . . . . . . . . . . . . 20
              D.   UTILITY Submenu . . . . . . . . . . . . . . 25
              E.   MODULES Submenu . . . . . . . . . . . . . . 25
              F.   SETTINGS Submenu  . . . . . . . . . . . . . 26
         
         VIII.ERROR MESSAGES . . . . . . . . . . . . . . . . . 29
         
         IX.  UPGRADE HISTORY  . . . . . . . . . . . . . . . . 30
         
         X.   REGISTRATION . . . . . . . . . . . . . . . . . . 31
         
         DISCLAIMER, CREDITS . . . . . . . . . . . . . . . . . 32
         
         INDEX


















         CC-PLOT                         Page 2




         INTRODUCTION
         
         When CC-SURVeyor was first conceived, linking it to a CAD program was
         intended to prevent the need to "reinvent the wheel" regarding screen
         plotting, pen plotting, and printer plotting.  Initially, Generic
         CADD was seen as an affordable way of turning a coordinate file into
         a quick hard copy plot, so the Generic CADD batch file was used to
         transfer data from CC-SURVeyor to CADD.  Later, the DXF file format
         was added to allow users of AutoCAD and other CAD software to
         transfer their coordinate data into CAD.  Also, utilities were
         provided for Generic CADD and AutoCAD users to help them in working
         within CAD to create finished drawings.
         
         CAD seems to have tremendous potential for all the engineering
         fields.  The promised ability to automate repetitious calculations
         and drawing by using the computer attracts our attention like the
         lode stone attracts the compass needle.  However, many of the
         features of CAD are oriented toward drawing of repetitive elements,
         such as parallel lines, orthographic lines, and circular arrays.
         Also, the dimensioning routines in CAD programs are oriented towards
         mechanical and architectural traditions rather than civil
         engineering/land surveying.  Throw in the problems created when we
         don't want to orient north straight up, or when we want a different
         horizontal scale than vertical scale, or when we want to plot
         something already drawn at a different scale than originally planned
         (resulting in very large or very small text), and it becomes obvious
         that a CAD program for our profession has to be a unique package to
         be helpful in creating finished drawings.  And then, the power
         necessary for creation of finished drawings seems to make creation of
         hard copy plots more difficult than it should be.
         
         One can invest a lot of time and money into exploring all the
         software available that promises to automate the drafting and design
         process for us.  In the meantime, we need something that can give us
         fast, accurate hard copy plots.  Something that doesn't have ten
         times as many commands as we are interested in using.  Something that
         runs at a reasonable speed on reasonably priced hardware.  Something
         that doesn't take a night class in CAD to understand.  Something that
         takes the best features of the best CAD software and strips them down
         to the essentials needed for plotting hard copies.
         
         
         CC-PLOT is that something.
         
         
         Rotate your view without rotating your coordinates, in seconds
         instead of minutes.
         
         Pick the text size when you plot, not when the text is created.
         
         User-named layers for organizing your points for plotting.
         
         Mouse supported pull-down menus that you can literally fly through.
         
         Fast screen graphics to preview your plot.
         
         Configuration INSIDE the program, instead of separately.




         CC-PLOT                         Page 3




         I.   INSTALLATION AND CONFIGURATION
                   
              CC-PLOT requires a hard disk, 640K RAM, DOS 2.11 or later, and
              EGA or VGA graphics.  CC-PLOT will sense the graphics card, and
              will use the highest graphics resolution possible, which is
              640x350 for EGA and 640x480 for VGA.
                   
              Screen plotting is faster with a math coprocessor, which CC-PLOT
              will automatically use if present.  A math coprocessor is NOT
              required, however.
                   
              The mouse is supported for manipulation of the menu and dialog
              box system, but is not required.
              
              The two plotter types supported by CC-PLOT are Houston
              Instrument (HI) and Hewlett-Packard (HP).  CC-PLOT is compatible
              with the HI DMP-50 and DMP-60 series plotters, and with any
              other brand of plotter that uses the DM/PL language and is
              compatible with those models.  CC-PLOT is also compatible with
              the HP 7580B, 7585B, 7586B, and DraftMaster plotters, and any
              other brand of plotter that uses the HP-GL language and is
              compatible with those models.
                   
              For printer plotting, Epson compatible dot matrix printers are
              supported.  Both narrow (80 column) and wide (132 column)
              carriage, and both 9 pin and 24 pin printers are supported.
              Printers that have been found to be compatible with CC-PLOT are:
              Epson FX and LQ series, Fujitsu, NEC, Panasonic, Star LV1615 and
              Star NX-15.  Printers that have been found to be incompatible
              are:  Gemini 10X, HP ThinkJet and Okidata.
                   
              The following files are furnished on the CC-PLOT diskette:
              
                   README.PLT     Information that may not be included in the
                                  printed manual.  To read it, use the DOS
                                  "type" command, or print it by typing
                                  
                                  copy a:readme.plt prn <Enter>
                                  
                                  with the diskette in the A drive.
                   
                   PLOT.EXE       The CC-PLOT program file.
                   
                   
              Copy PLOT.EXE to the same subdirectory on your hard disk that
              the rest of CC-SURVeyor is installed in.
              
              A file named PLOT.INI will be created in that subdirectory the
              first time CC-PLOT is run.  PLOT.INI is an ASCII file that
              stores configuration data from the various settings that may
              change while CC-PLOT is used.  The first INI file is created
              using the default settings.  More detailed explanations of the
              settings are given in the section of this manual entitled
              "SETTINGS Submenu".  The "Short-Cut" section in this manual will
              help you with enough settings to get your first plot.
                   





         CC-PLOT                         Page 4




         II.  CC-PLOT MENUS AND DIALOG BOXES
              
              CC-PLOT uses the type of pull-down menus that are becoming the
              industry standard, and are similar to "Windows" applications and
              the new OS/2 PM interface.  To remove all pull-down menus from
              the screen, press <Esc> until the menu bar is all that remains
              of it.  Then, you will see right below it a 17 line calculation
              window with a space for the current open file name at the top
              center.  Below the window is the prompt area, where command
              prompts will appear.  It should say "Select Function" at this
              time.  At the very bottom of the screen is a status bar that
              occasionally has messages at the left end.  These messages may
              be an error message (red with a beep), or may be a message
              telling what a particular function key will do at the time.  At
              the right end of the message bar is the current command or
              function being executed ("mode"), the current occupied point (in
              the color of the layer it is assigned to) and the name of the
              current layer.
              
              The arrow keys may be used to move from one submenu to another.
              If no submenu is pulled down, the first letter of the submenu
              will pull it down.  Once a submenu is pulled down, the letter
              keys move the bar to the command within that submenu that has an
              uppercase letter matching the key entered.  <Enter> will execute
              whatever command is highlighted by the moving bar.  <Esc> will
              remove the current submenu and activate the menu bar so another
              submenu may be picked; for example, <Esc><F> will back up and
              pull down the FILE Submenu, then <Esc><E> will back up and pull
              down the EDIT Submenu, then <Esc><P> will back up and pull down
              the PLOT Submenu, and so forth.
              
              A mouse will also work with the menu system.  Only one button
              (the left one on the LogiTech mouse) is used.  One click on a
              command will start the routine.  A button may be pressed down
              and held down while the menu is swept through, and when it is
              released, the last command highlighted is executed.
              
              Many of the commands cannot be used until a .CCC file has been
              opened.  These commands will not be accessible with the arrow
              keys or the mouse.  Their names are shown in a lighter color on
              the pull-down menus until they are accessible.
              
              Dialog boxes are menus that allow several items to be toggled
              on/off, edited, or otherwise picked, while the box stays on the
              screen.  Examples are the "Layer display" box and the "reName
              layers" box.  To "pick" an item in a dialog box, you must click
              on it with the mouse, or put the bar on it with the arrow keys
              and press <Enter>.  In some cases you must <esc> when you are
              done (a prompt will tell you), and in other cases one of the
              selections is <OK>, which you may select with the mouse or arrow
              keys.
              









         CC-PLOT                         Page 5




         III. SCREEN PLOTTING, LAYERS, AND ALMOST "WYSIWYG"
              
              Screen plotting is used to preview the proposed plot.  "View
              plot" in the EDIT or PLOT Submenus can be used to screen plot.
              To screen plot during data entry, or while choosing items from a
              dialog box, use <F10>.
              
              There are three types of layers in CC-PLOT.  The first is called
              "point attribute", the second is "user-named" layers, and the
              third is "digital terrain model" (DTM).
              
              The "point attribute" layers refer to "attributes" associated
              with points, such as cross, point number, elevation,
              description, or line/curve.  Any of these "attribute" layers may
              be on or off, which controls what attributes will plot.  Note
              that the only attributes that do not screen plot are elevations
              and descriptions, and attributes that do not printer plot are
              lines and curves.  The "attribute" layers all screen plot in the
              color of the "user-named" layer they are assigned to.
              
              The "user-named" layers allow you to separate your points into
              logical groups, for better control of plotting data.  The
              default layer names are CONTROL, TOPO, BOUNDARY, BUILDING,
              STREET, EASEMENT, and UTILITY.  You may define different layer
              names for each file if you wish, or different default layer
              names for all future files, using the "reName layers" routine in
              the SETTINGS Submenu.  Use the "change Layer" routine in the
              SETTINGS Submenu to assign groups of points to different layers.
              To turn layers on/off, use "Layer display" in the PLOT Submenu.
              Each "user-named" layer screen plots in a different color.  If
              "Pen pause for layer change" is ON, the pen plot routine will
              pause after each layer is plotted to allow you to change the pen
              for the next layer.  The "current" layer controls what layer new
              points are placed on.
              
              Lines and curves are automatically placed on the layers that the
              points were assigned to.  If the layer assignment of points are
              later changed, the lines also change to the new layer.  The line
              or curve will always be on the same layer as the beginning point
              of the line or the BC of the curve.
              
              Linetypes may be changed for each of the user-named layers and
              for two of the DTM layers.  The "linetYpe" routine in the
              SETTINGS Submenu accomplishes that.  The default linetype is
              "continuous" for the user-named layers, "dot" for the Net, and
              "dashed" for the Contours.  The available linetypes are further
              explained elsewhere in this manual.
              













         CC-PLOT                         Page 6




              Note that there are 7 user-named layers.  There are 16 colors
              available to the EGA: black, 7 low intensity, 7 high intensity,
              and grey.  CC-PLOT uses the 7 low intensity colors for the
              lines/curves on the 7 user-named layers.  The 7 corresponding
              high-intensity colors are used for the point crosses and point
              numbers.  For example, the first layer (default name: CONTROL)
              is color 1, which is blue.  Points and point crosses on this
              layer will screen plot in high intensity blue, and lines/curves
              will screen plot in low intensity blue.  Layer 2 data (default
              name: TOPO) will plot in high intensity and low intensity green,
              and so forth.  The default layer colors are shown in the "Layer
              display" dialog box.  The sequence of colors cannot be changed,
              although the order of the layer names can be.
              
              The "DTM" layers consist of the interpolation net, contour tics,
              and contour lines.  This data is created in CC-CONTour and is
              brought into CC-PLOT by .NET and .TIC files, if they are present
              and have the same name as the .CCC file that is opened.  These
              names may not be changed, neither can the colors, which are:
              Net - yellow, Tic - green, Contour - green.  The only DTM layers
              that will plot on your printer are the contour tics, which will
              plot as asterisks.
                   
              WYSIWYG means "What You See Is What You Get", and is commonly
              used in describing word processors and desktop publishing
              programs that show graphics previews of what printed output will
              look like.  Of course, CAD is by definition WYSIWYG.  CC-PLOT is
              not, however, a CAD program, but does attempt to use WYSIWYG
              principles to help in setting up your proposed plot.  Keep in
              mind the following exceptions to the WYSIWYG rule:
              
                   Screen plotting is intended to be fairly fast, and displays
                   point numbers and crosses to help you identify the points
                   you want to display.  Elevations and descriptions do not
                   screen plot, even when their layers are ON.
                   
                   The "Dot plot" routine is also intended to be fast, and
                   uses the "text" mode of the printer rather than the
                   "graphics" mode to accomplish that.  An 8"x11" graphics
                   mode plot could take 10 to 30 minutes.  CC-PLOT will plot
                   the same size in less than a minute, by using text mode.
                   Graphics mode is required to draw lines and curves.  So
                   even if the Lines/Curves layer or Net layer or Contour
                   layer is ON, Dot plot will not draw them.  Also, turning
                   OFF the Crosses layer will NOT stop Dot plot from plotting
                   crosses.  The Crosses layer option was intended to speed up
                   screen plotting, and allow pen plotting without crosses,
                   where lines and curves are plotted to help identify point
                   locations.  Since there are no lines or curves in Dot Plot,
                   point numbers without crosses would not be very useful.
                   
                   Linetypes are "schematic" and may not be proportioned the
                   same on different plotters, or when comparing the screen
                   plot with plotter output.  The pattern is what is
                   important, to help distinguish between different lines on
                   hard copy plots.  Also, curves do not screen plot with
                   other than a continuous linetype at this time, although pen
                   plotter output will correctly use the assigned linetype.
                   


         CC-PLOT                         Page 7




         IV.  USING CC-PLOT
         
              A.   Short-Cut to your First Pen Plot
                   
                   Enter "CC-PLOT" to start the program.  CC-PLOT can be
                   configured while it is running, which allows changing the
                   configuration without having to quit and start over.
              
                   Use the arrow keys to get to the SETTINGS Submenu, or type
                   <Esc><S>, or pick SETTINGS with your mouse.
              
                   If your CC-SURVeyor files are not in the current directory,
                   but are in \CC-SURV\FILES, pick "set ccc Path" and enter
                   "\CC-SURV\FILES".  You could also enter "a:" or any drive
                   or pathname.  You could load a file from \CC-SURV\FILES,
                   then change the path to A: and save the file to the A
                   drive.
              
                   <Esc><S><C> will get you the "Config plotter" routine in
                   the SETTINGS Submenu.  Choose Houston Instrument or
                   Hewlett-Packard.  If you have neither brand, pick the brand
                   that your manual claims it is compatible with.  Next, pick
                   the COM port you are using, then enter the baud, etc. that
                   you have the plotter configured for.  The options shown
                   include all HI and HP options for both Generic CADD and
                   AutoCAD, so you won't have to reconfigure your plotter
                   every time you use CC-PLOT.  Finally, pick "no" for "Pen
                   pause", as you will not have more than one layer for this
                   first plot anyway.  Layers are explained in another section
                   of the manual.
              
                   You might as well configure your printer now, so press
                   <Esc><S><C><C> to get there.  Notice how pressing <C> over
                   and over toggles back and forth between Config plotter and
                   Config printer.  Pick your printer type.
              
                   Now view your configuration using the "View/save settings"
                   command, and if it looks right, press "y" or <Enter> to
                   save it.  You won't have to do this again, even in future
                   sessions, unless you change something.
         
                   Now go to the FILE Submenu and open the desired file
                   ("open" means "load").
                   
                   Go to the PLOT Submenu and pick "Scale".  The default scale
                   is 1"=20'.  Change it if you want.  The scale affects the
                   Origin routine as well as the plotted scale.
                   
                   Pick "Origin/plot size".  Pick the sheet size you plan to
                   plot on.  This controls (together with the scale entered
                   above) a box that you use to orient your plot in relation
                   to the origin of the plot.  The "USER DEFINED" is intended
                   for users that know the maximum size their plotter will
                   plot to, and want to use it, or for those odd size plots.
                   The standard sheet sizes shown allow a 1" margin.  When you
                   see your plot preview, a box is anchored at the lower left
                   hand corner of the screen.  Zoom down (using <PgDn>) if
                   necessary until you see the whole box, then use the arrow
                   keys to move the points around in the box.  This box


         CC-PLOT                         Page 8




                   excludes the 1" margin mentioned above, or if "USER
                   DEFINED" was picked, is plotted at the exact dimensions,
                   enlarged by the scale being used.  ONCE THE ORIGIN IS
                   SELECTED WITH THIS ROUTINE, IT DOESN'T HAVE TO BE SET AGAIN
                   DURING THE CURRENT SESSION UNLESS THE SCALE IS CHANGED.
                   Press <Spacebar> when you are satisfied, or <Esc> to go
                   back to choose another sheet size.
                   
                   Now pick "Pen plot".  If the settings look right, make sure
                   your plotter has picked up a pen and press "y" or <Enter>.
                   It should plot the drawing now.  If it doesn't work, make
                   sure you picked the right COM port before trying anything
                   else.
                   
              B.   MORE Configuration and Plotting Options
              
                   TEXT HEIGHT:  The default text height (which you can change
                   for the current session) is 0.10".  All text and point
                   crosses plot this high.  Contour tics plot as "X", 2/3 the
                   height of the text height.  Located in PLOT Submenu.
                   
                   ROTATE VIEW:  This routine is in the PLOT Submenu, and lets
                   you rotate the view without having to rotate the
                   coordinates.  Contour tics are also rotated.  The screen
                   plot is rotated, and so are the pen and printer plots.  A
                   north arrow in the upper left corner of the screen reminds
                   you of the rotation.
                   
                   PEN PAUSE:  Turning this toggle on will cause the pen plot
                   routine to pause before plotting each layer so a different
                   pen may be used for each layer.  Located in PLOT Submenu.
                   
                   LAYER DISPLAY:  All layers are "on" by default, and will
                   plot unless turned off.  This routine, located in the PLOT
                   Submenu, controls the layers.  See "Screen Plotting,
                   Layers, and almost WYSIWYG" in this manual for more
                   details.
























         CC-PLOT                         Page 9




         V.   DATA ENTRY
         
              A.   Error Checking
         
                   Depending on the data being entered, some keyboard
                   characters will not be accepted for data.  For example,
                   when entering a filename, characters that are not
                   acceptable to DOS cannot be entered.  Or, when numeric data
                   is expected, alpha characters will not be accepted.  In
                   some cases, data must be entered, a blank field is not
                   acceptable.  If you cannot enter valid data, you must <Esc>
                   out of the routine.
         
              B.   Default Values
                   
                   When there is a logical default value for data, it will
                   already be placed in the highlighted field.  To choose it,
                   press <Enter>.  To clear it and replace it with a new
                   value, enter the new value.  To start "edit mode", press an
                   arrow key or <Home> or <End>, and read about the mini
                   editor below.
                   
              C.   The Mini Editor
         
                   The highlighted data entry field is a mini editor.  <Alt-C>
                   will clear the value out of the field.  <Alt-R> will
                   restore the original value in the field, if you have erased
                   it or edited it beyond repair.  The left and right arrow
                   keys will move the cursor back and forth within the field.
                   <Home> and <End> will move to the first and last position.
                   The <Insert> key will toggle back and forth between
                   overtype mode (the default) and insert mode.  <BackSpace>
                   will erase to the left.  <Delete> will erase the current
                   position.
                   


























         CC-PLOT                         Page 10




         VI.  FILES
         
              A.   File Types, Filenames, and Storage Location
                   
                   There are several types of files that users of CC-COGO,
                   CC-CONTour and CC-PLOT should become familiar with.  The
                   most important of these is the .CCC file (the filename
                   extension is ".CCC"), which stands for "Civil Comp COGO".
                   This file is the standard file for storage of point
                   numbers, coordinates, elevations, descriptions, and (if the
                   user chooses) lines and curves, and is used by all the
                   Modules (CC-COGO, CC-BALance, CC-CONTour, and CC-PLOT).
                   These files may be located in any drive or subdirectory,
                   and will be accessible to CC-PLOT according to its
                   configuration, or if the "set ccc Path" command has been
                   properly used.  The .CCC file may be edited and saved by
                   CC-PLOT.
                   
                   Another file that is created by CC-COGO or CC-PLOT is the
                   layer file, with a filename extension of ".LAY".  This file
                   stores the user-named layer names, the linetypes of layers,
                   and the layer assignments of points within the .CCC file.
                   This file is created or updated at the time a .CCC file is
                   saved from CC-COGO, CC-BALance, or CC-PLOT.  It will be
                   saved to the same drive or subdirectory as the .CCC file.
                   
                   A file type that is created in CC-CONTour is the net file,
                   with a filename extension of ".NET".  The .NET file is used
                   to store interpolation net lines, which can also be plotted
                   from CC-PLOT.  It is automatically loaded into memory when
                   a .CCC file is opened, if it has the same name as the .CCC
                   file, and is located in the same subdirectory as the .CCC
                   file.
                   
                   Another file type that is created in CC-CONTour is the
                   contour tic file, with a filename extension of ".TIC".  The
                   .TIC file is used to store contour tics and contour lines,
                   which can be plotted from CC-PLOT.  It is automatically
                   loaded into memory when a .CCC file is opened, if it has
                   the same name as the .CCC file, and is located in the same
                   subdirectory as the .CCC file.
                   
                   IMPORTANT - READ THIS ABOUT FILENAMES:  The net, tics and
                   contours that are saved in a .NET and .TIC file will be
                   automatically loaded by CC-PLOT or CC-CONTour when a .CCC
                   file of the same name is opened.  There is no other way of
                   separately loading the net, tics or contours into CC-PLOT,
                   which is why it is recommended to use the same filename as
                   the .CCC file.  Other filenames are allowed with CC-CONTour
                   to allow experimenting with different nets and contour
                   intervals, and even different contour lines, but once one
                   is desired for plotting, they should be saved with the same
                   "surname" as the .CCC file.  AS LONG AS YOU ALWAYS USE THE
                   SAME FILENAME FOR THE .NET AND .TIC FILE AS YOU USED FOR
                   THE .CCC FILE, YOU WILL HAVE AUTOMATIC LOADING OF THOSE
                   FILES AND EASIER TRANSFER BETWEEN MODULES.
                   
                   DXF files may also be saved from CC-PLOT.  DXF files may be
                   used to transfer data into CAD programs for further
                   editing.  Since your CAD program is probably located in a

         CC-PLOT                         Page 11




                   different subdirectory than CC-PLOT, you may set your DXF
                   path separately from the path of the other data files,
                   using the "set dxf Path" routine.  Controlling the data to
                   be transferred is discussed in detail in the Command
                   Reference Section of this manual, under "FILE Submenu",
                   "Save dxf file".
                   
              B.   CIVIL COMP COGO (.CCC) File
         
                   CIVILcomp coordinate files have the file name extension
                   ".CCC" (Civil Comp COGO).  This is the default file type
                   that stores all points, coordinates, elevations,
                   descriptions, and lines and curves.  "Open ccc file" in the
                   FILE Submenu loads it into memory.  .CCC files are saved in
                   ASCII format.  The first line in a file created with
                   CC-SURVeyor 4 is "4,0,0".  Folowing lines have one point
                   number and coordinate pair per line, with eight decimal
                   places, in point number sequence.  The line following
                   coordinates is "0 0 0".  If elevations and/or descriptions
                   are present, they follow.  To reduce file size, only points
                   with an elevation or description are listed in the second
                   group.  A zero in either the second or third position
                   indicates no elevation, or no description, respectively,
                   for the point number in the first position of each line.
                        
                   Following the lines that store elevations and descriptions
                   is the line "0 -1 0" followed by codes identifying lines
                   that have been created.  Lines are created sequentially
                   according to the point numbers listed, with "-1" indicating
                   a break in the line, and ending with "-999".
                        
                   The last section of the file consists of stored curves, one
                   curve per line, with BC, RP, and EC point numbers listed.
                        
                   Sample File (portion):              Comments:
                   
                   4,0,0                               (CC-SURVeyor 4 header)
                   1  1000.00000000  1000.00000000     (pt #, N coor, E coor)
                   2  1216.14183000   874.37074000     (ditto)
                   4  1276.44387000   978.11881000     (ditto)
                   0 0 0                               (elev and desc next)
                   1  100.200 COR.SUB               (elev=100.2, desc=cor.sub)
                   2  101.200 0                        (no description)
                   4  0.000 EC                         (no elevation)
                   0 -1 0                              (lines next)
                    1                                  (line from 1
                    2                                   to 2)
                   -1                                  (end of line)
                    3                                  (line from 3
                    4                                   to 4)
                   -1                                  (end of line)
                   -999                                (curves next)
                    26   27   28                       (BC, RP, and EC)
                    21   20   19                       (ditto)
                   
                   Editing a .CCC file is fairly simple.  Examine one with the
                   DOS "Type" command or with your text editor.  Use your word
                   processor in unformatted or ASCII mode if you need to edit
                   the file.


         CC-PLOT                         Page 12




              C.   Layer Assignment (.LAY) File
         
                   A file with the same name as the .CCC file, but with an
                   extension of ".LAY" is created when the .CCC file is
                   created, that stores the layer names, linetypes, and
                   point/layer assignments.  CC-PLOT allows the "View plot"
                   command to selectively screen plot data, if the "Layer
                   display" command has been used to turn layers on or off.
                   
                   The .LAY file created by CC-COGO and CC-PLOT 2 is different
                   that the one created by CC-PLOT 1, and cannot be read by
                   Ver. 1.  Ver. 1's .LAY files may be read by Ver. 2.  The
                   differences have to do with the new DTM layers and the
                   addition of user-selected linetypes to the file.
                   
                   The first two lines of the .LAY file contain the linetype
                   numbers for the NET layer and the CONTOUR layer.  The next
                   seven lines consist of the user-named layer names and their
                   linetype numbers.  Linetypes and their numbers (used
                   internally by CC-COGO and CC-PLOT) are defined more
                   completely in the "linetYpe" section of this manual, under
                   "EDIT Submenu".  The first user-named layer is considered
                   to be layer "1", the second one is layer "2", and so forth.
                   This numbering becomes meaningful when the rest of the file
                   is examined.  The lines following the names identify a
                   point range and the layer number they are assigned to.  For
                   example, the line "1 , 99 , 5" means that points 1 through
                   99 are assigned to user-named layer 5.
                   
                   Sample File (portion):      Comments:
                   
                   NET, 6                   (Net layer is linetype 6)
                   CONTOUR, 2               (Contours are linetype 2)
                   CONTROL  , 1             (first user-named layer is
                                            "CONTROL" and is linetype 1)
                   TOPO     , 1             (second user-named layer is "TOPO"
                                            and is linetype 1)
                   BOUNDARY , 1             (third user-named layer etc.)
                   EASEMENT , 1             (etc.)
                   STREET   , 1             (etc.)
                   BUILDING , 1             (etc.)
                   UTILITY  , 1             (seventh user-named layer is
                                            "UTILITY" and is linetype 1)
                    1 , 99 , 1              (points 1 through 99 are on layer
                                            1 "CONTROL")
                    100, 199, 2             (points 100 through 199 are on
                                            layer 2 "TOPO")
                   
                   Note that their are no "blank" lines in the file; those
                   shown above are caused by the long "comments".
                   
                   It isn't a good idea to edit the .LAY file with your text
                   editor, it is better to use the "reName layers",
                   "linetYpes" and "change Layer" routines in CC-PLOT and
                   CC-COGO.
                   





         CC-PLOT                         Page 13




              D.   Interpolation Net (.NET) File
                   
                   The .NET file stores the interpolation net data defined in
                   CC-CONTour.  Each net line is stored on one line in the
                   file, consisting of the point numbers at each end of the
                   net line, separated by a comma.
                   
                   Sample File (portion):   Comments:
                   
                    1 , 2                   (net line between points 1 and 2)
                    7 , 10                  (net line between points 7 and 10)
                    10 , 1                  (net line between points 10 and 1)
                   
                   
              E.   Contour Tic (.TIC) File
         
                   Contour tics and contour lines are created by CC-CONTour
                   and are saved in a file with the filename extension ".TIC".
                   
                   The data is stored with the first part storing the tics as
                   three numeric fields per line: Easting, Northing, and
                   Elevation, separated by commas.  The second part stores the
                   contour lines as two integer fields per line: the "tic
                   number" the line is "from" and the "tic number" the line is
                   "to".  The tics are read in first and are assigned
                   sequential numbers in memory starting with "1" for the
                   first one in the file.  The line "-1,-1,-1" separates the
                   tics from the contour line data.
                   
                   Sample File (portion):   Comments:
                   
                   1067.036,1346.914,98.0   (easting, northing, elevation of
                                            tic "1")
                   1135.499,1296.661,98.0   (easting, northing, elevation of
                                            tic "2")
                   847.579,1096.072,98.0    (easting, northing, elevation of
                                            tic "3")
                   -1,-1,-1                 (end of tics)
                   1,2                      (contour from tic "1" to tic "2")
                   2,3                      (contour from tic "2" to tic "3")





















         CC-PLOT                         Page 14




         VII. COMMAND REFERENCE
         
              A.   FILE Submenu
                   
                   Open ccc file:
                                   This routine will load a previously created
                   .CCC file from disk into memory.  A .LAY file, .NET FILE,
                   and .TIC file by the same name will also be loaded if
                   present.   All points created before running this routine
                   will be lost and a warning message to that effect is given
                   if any points exist in memory at the time.  The program
                   will be reset as if it had just been loaded.  Existing .CCC
                   files are presented in a dialog box.  If you have more
                   files than will fit in the vertical listing, you can scroll
                   down the box with arrow keys, or by using your mouse on the
                   scroll bar on the right side of the box.
                   
                   Save ccc file:
                                   This routine will save a .CCC file and a
                   .LAY file at the same time.  It should be used regularly
                   during editing.  If you decide to rename your file when you
                   save it, a new .LAY file will be created also.  Your .NET
                   file and .TIC file, if present, will NOT be renamed or
                   copied, however.  If you later want to load them into
                   CC-PLOT with the new .CCC filename, you must first rename
                   them to the new name using DOS.
                   
                   set ccc Path:
                                  This routine may be used to configure
                   CC-PLOT to permanently use a particular drive or
                   subdirectory, or to temporarily change the path to load or
                   save a file to a diskette drive or different subdirectory
                   than the previously configured one.  The path chosen with
                   this routine affects all CC-SURVeyor files, including .CCC,
                   .LAY, .NET, and .TIC files, but does not include DXF files.
                   
                   To make the new path permanent, go to the SETTINGS Submenu
                   and use "View/save settings".
                   
                   Save dxf file:
                                   This routine will create a DXF file for use
                   with CAD programs such as AutoCAD or Generic CADD (which
                   requires AutoCON to read DXF files).  All the data that
                   CC-PLOT can plot may be sent to a CAD program via this
                   file.  You may selectively send data by using the "Layer
                   display" routine in the PLOT Submenu.  The DXF file will
                   then have the same data within it that you would plot with
                   CC-PLOT.  Turning a layer off will prevent that data from
                   being included in the DXF file.
                   
                   There are two options for linetype and color control in the
                   DXF file:  "by layer" and "by object".  If you are sending
                   data to AutoCAD and usually set your colors and linetypes
                   "bylayer", use the same option here.  Then within AutoCAD
                   you may set the layers of the file to be whatever colors
                   and linetypes you want.
                   




         CC-PLOT                         Page 15




                   If you use Generic CADD , which does not have a bylayer
                   option, you should use the "by object" option, which will
                   give each entity the same linetype and color that it has in
                   CC-PLOT, subject to AutoCON's translation abilities.
                   
                   Note that the default translation for the DXF file colors
                   and linetypes are as defined by AutoCAD.  If you use the
                   "by object" option, the color numbers used will result in
                   the same color in AutoCAD as in CC-PLOT.  To translate to
                   the CC-PLOT color using AutoCON for Generic CADD, you
                   should use the "PRESERVE SCREEN COLORS" option within
                   AutoCON.  Also, following are the AutoCAD linetype names
                   associated with the CC-PLOT linetypes:
                   
                        ___________    Continuous
                        _____ _____    Dashed
                        _ _ _ _ _ _    Hidden
                        ____ _ ____    Center
                        ___ _ _ ___    Phantom
                        ...........    Dot
                   
                   For some reason, AutoCON Ver. 3.5 and earlier converts
                   "Phantom" and "Center" to the wrong Generic CADD linetype,
                   even though there are equivalent linetypes in CADD.
                   AutoCON ver.4 will let you set up your own conversion
                   table.
                   
                   In AutoCAD, you will find that Net Lines and Contour Lines
                   will become 3D lines, which will be able to be viewed from
                   various angles by AutoCAD's 3D features.
                   
                   Layer names used in the DXF file will be as defined in
                   CC-PLOT, with the following difference:  The user-named
                   layer name will be used for data stored on those layers,
                   with the "attribute" name appended to it.  For example,
                   assuming that points are on layer "CONTROL", they will be
                   sent on layer "CONTROL-PT" in the DXF file.  Following is a
                   table showing how each type of data is sent:
                        
                        Points sent as points to     "(user-named layer)-PT"
                        Point #'s sent as text to    "(user-named layer)-PTNO"
                        Elevations sent as text to   "(user-named layer)-ELEV"
                        Descriptions sent as text to "(user-named layer)-DESC"
                        Lines/curves sent as lines/arcs to
                                                     "(user-named layer)-LINE"
                        Net lines sent as 3D lines to  "CONTNET"
                        Contour Tics sent as points to "CONTIC"
                        Contours sent as 3D lines to   "CONTOUR"
                        Index contours (every fifth one)
                                   sent as 3D lines to "CONTINDEX"
                   
                   NOTE REGARDING TEXT SIZE:  The "Scale" and "Text height"
                   settings picked from the PLOT Submenu determine the height
                   of text sent within DXF files.  In other words, if you want
                   your text to be .08" high in the final plot, which will be
                   at a scale of 1"=50', you should select those values using
                   those routines before saving the .DXF file.
                   



         CC-PLOT                         Page 16




                   set dxf Path:
                                  This routine may be used to configure
                   CC-PLOT to permanently use a particular drive or
                   subdirectory, or to temporarily change the path to load or
                   save a file to a diskette drive or different subdirectory
                   than the previously configured one.  The path chosen with
                   this routine only affects DXF files.
                   
                   To make the new path permanent, go to the SETTINGS Submenu
                   and use "View/save settings".
                   
                   DOS command:
                                  This routine temporarily "shells" to DOS,
                   where the user may execute DOS commands like DIR, COPY or
                   TYPE.  CC-PLOT HAS NOT QUIT!!  Type "exit" to return to
                   CC-PLOT.  None of the data entered into CC-PLOT is lost.
                   NOTE:  It has been documented that a bug in versions of DOS
                   prior to version 3.0 causes problems when this command is
                   used, so use it at your own risk unless you have DOS 3.0 or
                   later.  Also, if you change directories while using DOS
                   COMMAND, be sure to change back to the correct directory
                   before returning to CC-PLOT.
                   
                   Quit:
                          Use this to quit CC-PLOT.  You will see a "QUITTING,
                   ARE YOU SURE?" message.  Press "Y" to quit, or "N" or <Esc>
                   to return to CC-PLOT.


































         CC-PLOT                         Page 17




              B.   EDIT Submenu
         
                   View plot:
                               Use this routine to preview your current plot.
                   You may zoom up or down using the <PgUp> or <PgDn> keys and
                   you may pan using the arrow keys.  Press <Esc> or
                   <Spacebar> to exit.
                   
                   All points and layers shown in this view will plot if you
                   choose "Dot plot" (except lines) or "Pen plot".  This view
                   does not, however, show the sheet size or orientation of
                   the Pen plot.  The "Origin/plot size" routine should be
                   used to set that.  Zooming and panning in this routine will
                   NOT affect the origin set in the other routine.  It WILL,
                   however, affect the points that will plot.  Since only the
                   points shown in this view will plot, this routine may be
                   used to "trim" the data to a smaller area than you see in
                   the "Origin/plot size" routine, which shows the entire
                   sheet that will plot.  This routine accomplishes the same
                   thing whether it is accessed from the pull-down menu, or
                   with the <F10> key.  This is identical to the routine in
                   the PLOT Submenu.  NOTE:  <F10> only works while "inside"
                   another routine, when the prompt at the left end of the
                   message bar notifies you.
                   
                   Draw lines:
                                This routine draws lines or curves between
                   existing points.  The first prompt is for a point number at
                   the beginning of a line, the next prompt is for the end of
                   the line.  After entering the end of the line, that point
                   automatically becomes the beginning of the next line, so
                   the user only has to continue to enter the next point to
                   draw a line through a series of points.  Entering a
                   negative radius point number at the "To Point:" prompt will
                   result in a prompt for the EC, so a curve may be drawn.
                   The "+" key may be used for the next point number if the
                   points are sequential.  The end of the line or curve
                   becomes the currently occupied point.
                   
                   To use the numeric keypad for point number entry, <NumLock>
                   must be on.  To zoom and pan using the keys described under
                   "View plot", you must either use the separate keypad on an
                   enhanced keyboard, or temporarily turn <NumLock> off.
                   
                   You may jump to the "Erase lines" routine directly, by
                   pressing the "E" key from inside this routine.  Press "D"
                   to return to "Draw lines".
                   
                   Erase lines:
                                 This routine works identically to the "Draw
                   lines" routine, but deletes lines and curves rather than
                   drawing them.
                   








         CC-PLOT                         Page 18




                   edit/enter Points:
                                       This routine will let you enter or edit
                   the coordinates and/or elevation and/or description of a
                   point.  The point will become the currently occupied point.
                   
                   To make it more convenient to edit data without having to
                   reenter unchanging data, the default (existing) data is
                   shown within the prompt.  To accept that data, press
                   <Enter>.
                   
                   New points entered will be assigned to the current layer.
                   
                   Delete points:
                                   This routine is used to delete a group of
                   points that were either temporary in nature or represented
                   an erroneous group of calculations.  The prompts are self-
                   explanatory.  Does not affect disk files until the file is
                   saved.
                   
                   reNumber points:
                                     If the user wishes to duplicate a group
                   of points with different point numbers so that, for
                   example, they may be placed on another layer without losing
                   the original points, this is the routine to use.  The
                   option to "move" points rather than simply "copy" is given
                   by a prompt to "Delete old points?".  Lines and curves move
                   to the new point numbers.  Does not affect disk files until
                   the file is saved.
                   
                   list Avail points:
                                       This routine lists points that are
                   available for creation; that is, those that do not yet have
                   coordinates.  You are prompted for the first and last point
                   to be listed.  Use <Ctl-NumLock> or <Pause> to temporarily
                   halt scrolling.  Use <Esc> to quit scrolling and exit the
                   routine.  Use the "printer Toggle" routine in the SETTINGS
                   Submenu to list points on your printer.
                   
                   list Used points:
                                      This routine lists existing points.  You
                   are prompted for the first and last point to be listed.
                   Use <Ctl-NumLock> or <Pause> to temporarily halt scrolling.
                   If you get tired of watching points scroll past and change
                   your mind, the <Esc> key will stop it permanently.  Use the
                   "printer Toggle" routine in the SETTINGS Submenu to list
                   points on your printer.
                   














         CC-PLOT                         Page 19




              C.   PLOT Submenu:  This submenu is divided into four sections.
                   The first is the screen plot command "View plot".  The
                   second section has the plot settings that are common to
                   both pen plotting and printer plotting.  The third section
                   contains the settings unique to pen plotting, and the "Pen
                   plot" command.  The last section contains the settings
                   unique to printer plotting, and the "Dot plot" command.
                   
                   View plot:
                               Use this routine to preview your current plot.
                   You may zoom up or down using the <PgUp> or <PgDn> keys and
                   you may pan using the arrow keys.  Press <Esc> or
                   <Spacebar> to exit.
                   
                   All points and layers shown in this view will plot if you
                   choose "Dot plot" or "Pen plot".  This view does not,
                   however, show the sheet size or orientation of the Pen
                   plot.  The "Origin/plot size" routine should be used to set
                   that.  Zooming and panning in this routine will NOT affect
                   the origin set in the other routine.  It WILL, however,
                   affect the points that will plot.  Since only the points
                   shown in this view will plot, this routine may be used to
                   "trim" the data to a smaller area than you see in the
                   "Origin/plot size" routine, which shows the entire sheet
                   that will plot.  This routine accomplishes the same thing
                   whether it is accessed from the pull-down menu, or with the
                   <F10> key.  This is identical to the routine in the EDIT
                   Submenu.  NOTE:  <F10> only works while "inside" another
                   routine, when the prompt at the left end of the message bar
                   notifies you.
                   
                   Layer display:
                                   This routine controls which layers will
                   plot.  The upper part of the dialog box shows the "point
                   attribute" layers, the middle part shows the "user-named"
                   layers and their colors, and the bottom part shows the
                   "digital terrain model" layers.  A more detailed
                   explanation of the layer capabilities of CC-PLOT is given
                   in the "SCREEN PLOTTING, LAYERS, AND ALMOST WYSIWYG"
                   section of this manual.  All layers plot by default.  Note
                   that the first time this routine is used, a "check mark" is
                   at the left of the layer names, indicating the layers are
                   "on".  If <Enter> is pressed on a highlighted name or the
                   mouse is clicked on a name, the "check mark" will come and
                   go, indicating that the layer is being toggled on and off.
                   You may press <F10> at any time to see how the current
                   layer arrangement will look.  Pick <OK> or press <Esc> when
                   you are satisfied with the layers.  REMEMBER THAT
                   ELEVATIONS AND DESCRIPTIONS WILL DOT PLOT AND PEN PLOT IF
                   THEIR LAYERS ARE ON, EVEN IF THEY DO NOT SCREEN PLOT (THEY
                   NEVER SCREEN PLOT).
                   









         CC-PLOT                         Page 20




                   Rotate view:
                                 Sometimes a rotation is necessary to better
                   orient a drawing to a standard sheet size.  This routine
                   may be used to rotate your view.  It does not rotate the
                   coordinates of the file.  The rotation should be entered as
                   a clockwise angle, in DD.MMSS format.  A negative angle may
                   be entered to rotate counter-clockwise.  The angles are not
                   cumulative; that is, if you enter 30 degrees and decide it
                   needs another 7 degrees rotation, you should enter 37
                   degrees.  Enter 0 degrees to "unrotate" the view.  Dot plot
                   and Pen plot will plot the rotated view.  A north arrow in
                   the upper left corner during the screen plot will remind
                   you of the rotation.  If you forget the exact rotation you
                   last used, starting the routine again will show you the
                   current rotation as a default value.
                   
                   Scale:
                           This routine allows you to pick the plot scale.
                   The default scale is 1"=20'.  The value entered in this
                   routine affects the "box" drawn on screen in the
                   "Origin/plot size" routine, which allows a preview of how
                   the data will fit on the selected sheet size.  Affects both
                   printer plotting and pen plotting.  Also affects text size
                   in DXF files.
                   
                   Text height:
                                 This allows text height to be entered for
                   "Pen plot".  All text will be plotted to the height
                   entered.  Point crosses (if on) will also plot to the
                   height entered.  Contour tics (if present and on) will plot
                   to 2/3 of the height entered.  The default text height is
                   0.10".  Also affects text size in DXF files, when drawing
                   scale is taken into consideration.
                   
                   Origin/plot size:
                                      Five standard sheet sizes (A through E),
                   and a "user-defined" option, are presented in a dialog box.
                   CC-PLOT will use the size selected and the current scale to
                   draw a "box" within the screen plot, which will allow you
                   to preview and change the orientation of the plot relative
                   to the sheet.  The sizes shown allow a 1" margin around the
                   standard sheet size.  Recognizing that "standard" sheet
                   sizes may vary (is D size 22"x36" or 24"x36"?), and that
                   different plotters vary in their "margin" area, a "user-
                   defined" option is offered.  User-defined values are saved
                   with the settings, if desired, with the "View/save
                   settings" routine in the SETTINGS Submenu.
                   
                   When you see your plot preview, the box is anchored at the
                   lower left hand corner of the screen.  Zoom down if
                   necessary until you see the whole box, then use the arrow
                   keys to move the points around in the box.  This box
                   excludes the 1" margin mentioned above, or if "USER
                   DEFINED" was picked, is plotted at the exact dimensions,
                   enlarged by the scale being used.  ONCE THE ORIGIN IS
                   SELECTED WITH THIS ROUTINE, IT DOESN'T HAVE TO BE SET AGAIN
                   DURING THE CURRENT SESSION UNLESS THE SCALE IS CHANGED.
                   



         CC-PLOT                         Page 21




                   If you can make everything fit in the box, press
                   <Spacebar>, or if you need to try a different sheet size,
                   press <Esc> to go back to that prompt.
                   
                   pen pAuse:
                               If this toggle is ON, "Pen plot" will pause for
                   a pen change for each user-named layer and for the DTM
                   layers.  If you want to change pens for different layers,
                   use this routine to turn this toggle on.  For example, you
                   may want to use a wide black pen for the boundary, and a
                   narrow black pen for topo data.  Also, since the Pen plot
                   routine will pause for DTM layers, you may insert a blue or
                   green pen (which will barely blueprint) before plotting
                   them.  This setting may be saved with "View/save settings",
                   if you desire.
                   
                   Config plotter:
                                    With this routine you select your plotter
                   type, the serial port you are using, and the communication
                   parameters you have set your plotter to expect.
                   
                   The two plotter types supported by CC-PLOT are Houston
                   Instrument (HI) and Hewlett-Packard (HP).  Communication
                   between CC-PLOT and the plotter takes place in what is
                   called "plotter language".  The HI plotter language is
                   called "DM/PL", and when CC-PLOT is configured for HI, the
                   commands used are compatible with the HI DMP-50 and DMP-60
                   series plotters, and with any other brand of plotter that
                   uses the DM/PL language and is compatible with those
                   models.  The HP plotter language is called "HP-GL", and
                   when CC-PLOT is configured for an HP plotter, the commands
                   used are compatible with the HP 7580B, 7585B, 7586B, and
                   DraftMaster plotters, and any other brand of plotter that
                   uses the HP-GL language and is compatible with those
                   models.  Pick your plotter type.
                   
                   If your computer only has one serial port, select COM1 when
                   prompted.  If it has two, then take your best guess as to
                   which you are using, as many times they aren't labeled.
                   After you have configured your plotter, and try to plot
                   something, the first thing to check if it doesn't work is
                   the COM port.  Either switch the cable at the back of the
                   computer or go through this routine again and pick the
                   other COM port.
                   
                   You must configure your plotter for a particular baud rate,
                   odd or even parity, number of data bits, and number of stop
                   bits.  The method of doing that is explained in your
                   plotter manual.  It may require setting dip switches,
                   turning rotary switches, or running software furnished with
                   the plotter.  If you already have a CAD program and are
                   using the plotter, it is already configured.  If you have
                   not been plotting, and this is your initial setup, the
                   following settings are recommended:
                   
                        9600 baud, even parity, 7 data bits, 1 stop bit,
                        XON/XOFF protocol
                        



         CC-PLOT                         Page 22




                   If your plotter does not support these settings, check the
                   ones available in the "Config plotter" routine, and use one
                   of those.  Once your plotter is configured, choose the
                   proper settings with this routine so that CC-PLOT knows
                   what parameters the plotter is expecting.  Please note that
                   every parameter used by either Generic CADD or AutoCAD for
                   either HI or HP plotters is available as an option; if your
                   plotter's configuration is not supported by CC-PLOT, let us
                   know and it will be added to the menu at no charge and a
                   new diskette will be sent to you.
                   
                   Pen plot:
                              Finally, you pick this command to start
                   plotting!  First you will be shown the parameters you have
                   selected for your plot and your plotter configuration.  If
                   they look right, make sure your plotter has picked up a pen
                   and press <Enter> or "y".  Otherwise, press "n" or <Esc> so
                   you can fix the parameters, and come back again to plot.
                   While plotting, CC-PLOT keeps you informed as to which
                   layer it is working on.  You may press <Esc> to terminate
                   the plot prematurely.  Note that even though you terminate
                   the plot, the plotter may keep drawing, because it may have
                   quite a large buffer full of data at the time you <Esc>.
                   
                   If you want the plotter to pause at each layer to allow you
                   to change pens, you must use the "pen pAuse" toggle
                   described above, in the PLOT Submenu.
                   
                   plot to File:
                                  Sometimes you may wish to plot to a file, so
                   you can take the plot file to a service bureau, or to use
                   with a plot spooler, or even to plot from a computer in the
                   next room.  This routine will save a file to your hard disk
                   with the same filename as your .CCC file, with an extension
                   of ".PLF" (PLotFile).  The file will contain plot commands
                   in the language of the plotter you selected when you
                   configured CC-PLOT.  The plot from this file will be
                   identical to one from CC-PLOT, with the exception of
                   pausing for pen changes for different layers.  The file
                   will be saved to the same subdirectory on your hard disk
                   that CC-PLOT is installed within.
                   
                   Text height:
                                 This text height command is for the "Dot
                   plot" routine.  There are only two choices:  normal or tiny
                   (which is superscript).
                   
                   paper Width:
                                 CC-PLOT needs to know what the width of your
                   printer paper is so it knows how wide to plot each pass.
                   Rather than have an "origin/plot size" routine for printer
                   plotting, it is assumed that you will many times want to
                   plot something too big for your paper, and will want to cut
                   and paste sheets together.  Rather than make you manually
                   figure out all the match lines, CC-PLOT orients the plot at
                   the left edge of the paper and plots every point that will
                   fit on the paper width selected, and plots repeat passes,
                   replotting the right-most previous point as a match point.
                   In between passes, you have a chance to quit.  The point
                   numbers remaining for future passes are printed at the

         CC-PLOT                         Page 23




                   bottom of each pass.  Note that if point numbers,
                   elevations, and descriptions are ON, a point will not be
                   plotted in a given pass unless all that data will also fit
                   on the paper, but will be saved for the next pass.  You can
                   quit a plot prematurely by pressing <Esc> at any time.
                   
                   To review how your selected scale and rotation will plot,
                   you may use the "Origin/plot size" routine, entering in the
                   width of your printer and an arbitrary height for the
                   "user-defined" size.  Then use the arrow keys to situate
                   your left-most point along the left border of the box.
                   This will not affect the plot origin, but will give an idea
                   of how the plot will fit on the paper.
                   
                   Config printer:
                                    CC-PLOT only needs to know one thing about
                   your model of printer: how many pins in the print head.
                   The Epson FX has 9 pins and the Epson LQ has 24 pins.  The
                   vertical spacing of each printer type is different, and
                   affects the vertical scale of the plot.  If you are not
                   sure which print head you have, and the vertical scale of
                   your plots is off by a ratio of 5/6 or 6/5, try changing
                   the setting.
                   
                   Dot plot:
                              Finally, you get to plot something!  First you
                   will be shown the parameters you have selected for your
                   plot and your printer configuration.  If they look right,
                   make sure your printer is on and has paper and press
                   <Enter> or "y".  Otherwise, press "n" or <Esc> so you can
                   fix the parameters, and come back again to plot.  While
                   plotting, CC-PLOT lets you know if some points didn't fit
                   on the pass.  See "paper Width" above for more details
                   about plotting in passes.  You may press <Esc> to terminate
                   the plot prematurely.  Note that even though you terminate
                   the plot, the printer may keep plotting, because it may
                   have quite a large buffer full of data when you <Esc>.
                   
                   Dot plot doesn't plot any form of line, including lines,
                   curves, net lines, or contour lines.  Also, point crosses
                   are always plotted, whether the CROSS layer is on or not,
                   since there would be no line nodes to identify the location
                   of points.
                   

















         CC-PLOT                         Page 24




              D.   UTILITY Submenu:
                   
                   Line feed:
                               This will cause the calc window on the screen
                   to scroll up one line, to separate groups of calcs if you
                   wish.  If the Printer Toggle is on, the printed output will
                   insert a blank line (line feed) at the same time.
                   
                   print Note:
                                This will allow you to enter a note that will
                   print on the screen, and if the Printer Toggle is on, to
                   also print on the printed output.
                   
                   page Up:
                             This will scroll the screen up one page
                   (effectively clearing the calc window), and if the Printer
                   Toggle is on, will form feed one page and print a new page
                   heading.
                   
              E.   MODULES Submenu:
                   
                   Transfer between the CC-SURVeyor 4 family of programs is
                   somewhat automated by these menu choices.  To transfer
                   program control to another CIVILcomp program that is
                   listed, pick it off the menu.  Otherwise you must Quit
                   CC-PLOT, then start the other program, then re-open the
                   file.  When you transfer program control using this
                   Submenu, you will be given a chance to save your .CCC file
                   if you haven't done so, and when the new program loads, it
                   will automatically open the same-named file for you.  You
                   may return to CC-PLOT by using the MODULES Submenu in the
                   other program.  To speed up the transfer, if you have
                   already saved your .CCC file, press <Esc> at the "Save ...
                   File" prompt, and the transfer will skip that process.  The
                   programs available to transfer to will be those that are
                   present on your hard disk, that are listed in the Submenu.
                   In other words, if you have not purchased CC-BALance or
                   CC-CONTour, you will not be able to pick them on the
                   Submenu.
                   
                   NOTE:  Program transfer using this submenu will only work
                   properly if you have started CC-PLOT from the DOS command
                   line, or transfered to it from another module, or started
                   it from a .BAT file in which PLOT is the last line.  If
                   CC-PLOT is started from a menu program or shell program,
                   when you try to transfer to another module using this
                   submenu, you will most likely end up in some part of your
                   menu program or shell program, as those types of programs
                   always try to return control to themselves when an
                   application is terminated.











         CC-PLOT                         Page 25




              F.   SETTINGS Submenu:
                   
                   set ccc Path:
                                  This routine may be used to configure
                   CC-PLOT to permanently use a particular drive or
                   subdirectory, or to temporarily change the path to load or
                   save a file to a diskette drive or different subdirectory
                   than the previously configured one.  The path chosen with
                   this routine affects all CC-SURVeyor files, including .CCC,
                   .LAY, .NET, and .TIC files, but does not include DXF files.
                   
                   If no path is set, the default is to use the same
                   subdirectory that CC-PLOT is installed in for file storage.
                   
                   To make the new path permanent, use "View/save settings".
                   
                   set dxf Path:
                                  This routine may be used to configure
                   CC-PLOT to permanently use a particular drive or
                   subdirectory, or to temporarily change the path to load or
                   save a DXF file to a diskette drive or different
                   subdirectory than the previously configured one.  The path
                   chosen with this routine only affects DXF files.
                   
                   If no path is set, the default is to use the same
                   subdirectory that CC-PLOT is installed in for file storage.
                   
                   To make the new path permanent, use "View/save settings".
                   
                   Layer display:
                                   This routine controls which layers will
                   plot.  The upper part of the dialog box shows the "point
                   attribute" layers, the middle part shows the "user-named"
                   layers and their colors, and the bottom part shows the
                   "digital terrain model" layers.  A more detailed
                   explanation of the layer capabilities of CC-PLOT is given
                   in the "SCREEN PLOTTING, LAYERS, AND ALMOST WYSIWYG"
                   section of this manual.  All layers plot by default.  Note
                   that the first time this routine is used, a "check mark" is
                   at the left of the layer names, indicating the layers are
                   "on".  If <Enter> is pressed on a highlighted name or the
                   mouse is clicked on a name, the "check mark" will come and
                   go, indicating that the layer is being toggled on and off.
                   You may press <F10> at any time to see how the current
                   layer arrangement will look.  Pick <OK> or press <Esc> when
                   you are satisfied with the layers.  REMEMBER THAT
                   ELEVATIONS AND DESCRIPTIONS WILL DOT PLOT AND PEN PLOT IF
                   THEIR LAYERS ARE ON, EVEN IF THEY DO NOT SCREEN PLOT (THEY
                   NEVER SCREEN PLOT).
                   
                   Change layer:
                                  This routine is used to assign or reassign
                   ranges of points to a user-named layer.  You will first be
                   prompted for a layer name (a dialog box shows existing
                   layers), then the first and last point to be assigned to
                   that layer.  The routine loops back to select another
                   layer.  Points will otherwise be assigned to the CONTROL
                   layer by default.
                   


         CC-PLOT                         Page 26




                   Set current layer:
                                       The "current" layer only affects what
                   user-named layer newly assigned points will be placed on.
                   If points are going to be entered using the "edit/enter
                   Points" routine, and they are to go on the BOUNDARY layer,
                   you should first make the BOUNDARY layer current before
                   entering them.  The current layer name is shown in the
                   lower right hand corner of the screen, in the color of the
                   layer.  The default current layer is CONTROL.
                   
                   reName layers:
                                   The user-named layers may be renamed with
                   this routine.  The default layer names are:  CONTROL, TOPO,
                   BOUNDARY, BUILDING, STREET, EASEMENT, and UTILITY.  A
                   dialog box is used to present the current layer names.  By
                   pressing the <Enter> key, or clicking the mouse, the
                   current highlighted layer name is changed to "edit" mode.
                   While in this mode, you can edit or rename the layer.
                   Press <Enter> when done editing, and you can choose another
                   name to edit, or press <Esc> to exit the routine.  If you
                   use "View/save settings" to save these names, they will be
                   the default names for all new .CCC files opened in the
                   future.  Otherwise, the new names only affect the current
                   file, and only if you save the file.
                   
                   linetYpes:
                               This routine allows you to assign various
                   linetypes to the user-named layers and the DTM layers, for
                   screen plotting, pen plotting, and when saving DXF files.
                   A dialog box showing the layer names and current linetypes
                   is presented.  To change one of the layers to a different
                   linetype, pick it, and the available linetypes will be
                   presented.  They are schematically shown below, with the
                   number used in the .LAY file and the equivalent AutoCAD
                   linetype name (used in DXF files):
                   
                                  ___________    1    Continuous
                                  _____ _____    2    Dashed
                                  _ _ _ _ _ _    3    Hidden
                                  ____ _ ____    4    Center
                                  ___ _ _ ___    5    Phantom
                                  ...........    6    Dot
                   
                   The default linetype for the user-named layers is
                   "Continuous", for the NET layer is "Dot", and for the
                   CONTOUR layer is "Dashed".  The defaults may be permanently
                   changed by using "View/save settings" in the SETTINGS
                   Submenu, or each file may have its own linetypes as well as
                   layer names.
                   
                   Config plotter:
                                    With this routine you select your plotter
                   type, the serial port you are using, and the communication
                   parameters you have set your plotter to expect.  Please see
                   the more detailed explanation of plotter configuration
                   given under this command in the PLOT Submenu section.
                   




         CC-PLOT                         Page 27




                   Config printer:
                                    CC-PLOT only needs to know one thing about
                   your model of printer: how many pins in the print head.
                   The Epson FX has 9 pins and the Epson LQ has 24 pins.  The
                   vertical spacing of each printer type is different, and
                   affects the vertical scale of the plot.  If you are not
                   sure which print head you have, and the vertical scale of
                   your plots is off by a ratio of 5/6 or 6/5, try changing
                   the setting.
                   
                   printer Toggle:
                                    If this toggle is ON, all data displaying
                   in the calc window on your screen will also be printed on
                   your printer.  This is useful while listing used points or
                   available points.  The default setting is OFF.
                   
                   View/save settings:
                                        This routine will show the current
                   configuration, and give you the chance to save the settings
                   if you desire.
                   








































         CC-PLOT                         Page 28




         VIII.ERROR MESSAGES
              
              There  are  several  error  messages  that  the  BASIC  compiler
              generates that  CC-PLOT does  not  "trap"  for.    When  CC-PLOT
              "traps" errors,  it does  not let the error cause the program to
              "crash", and gives the user a chance to correct the error before
              continuing.   "Trapped" errors  are those  that beep and print a
              message below  the CC-PLOT  prompt.    When the following errors
              are not "trapped", they may cause the program to "crash" to DOS,
              which causes  a loss  of all  data created  since the  last Save
              command.   The "non-trapped"  errors generally  have to  do with
              hardware problems  or file format problems.  Following is a list
              of messages  that have  been reported,  and possible  causes and
              fixes.
              
                   Device fault:  Probably a disk read or write error.  If you
                   get this  message regularly, and if you also get a DOS disk
                   error message,  you should  have your  disk drive  checked.
                   This may  also be  caused by the printer problems described
                   under "Device timeout", below.
              
                   Device I/O  error:   Probably caused by trying to plot with
                   nothing plugged into the serial port, or the wrong COM port
                   being used, or a plotter problem.
                   
                   Device timeout:   Most  of the  time this  is caused by the
                   printer either  being off,  or being  off-line  or  out  of
                   paper.   A loose printer cable may also cause this problem.
                   Also it  is difficult  to hand  feed single  sheets without
                   causing this  error.   Please use  continuous  form  paper.
                   CC-PLOT will  trap this  error in most cases, with the main
                   exception being  during the  Dot plot routine.  If you take
                   the printer  off line to formfeed, and don't put it back on
                   line, you may get this error the next time CC-PLOT tries to
                   print.  This error will cause CC-PLOT to crash and all work
                   done since the last Save will be lost.
                   
                   Input past  end:   Caused by  trying to  load an improperly
                   formatted  file.     You  may  have  renamed  another  COGO
                   program's coordinate file to *.CCC to try to get CC-PLOT to
                   read it,  or you  may have  used your text editor to edit a
                   .CCC file, .INI file, or .LAY file and accidentally created
                   an error in the file format.
              
                   String space  corrupt .  . .  .: Caused by same file format
                   problems as  "Input past end", above, but it may occur some
                   time later rather than within the "Open CCC File" routine.
              













         CC-PLOT                         Page 29




         IX.  UPGRADE HISTORY
              
              This is the second release, and below are enhancements beyond
              Version 1:
              
                   Import and plot contour lines.
                   
                   Easy transfer between CC-SURVeyor Modules.
                   
                   Line types like dashed, center, etc.
                   
                   Plot to a file.
                   
                   Create DXF file for transfer to CAD.
                   














































         CC-PLOT                         Page 30




         X.   REGISTRATION
         
              To help us provide proper support, please fill out this
              registration form and send it to CIVILcomp.
              
              
         ***********************  C C - P L O T   2  *************************
         
         Name_________________________________________________________________
         
         Street address_______________________________________________________
         
         City______________________________State________________Zip___________
         
         Occupation___________________________________________________________
         
         Make and model of IBM PC compatible__________________________________
         
         Version of MS-DOS__________ 8087/80287/80387________ RAM______K bytes
         
         Video display: CGA_______EGA_______VGA_______Herc_______Other________
         
         Diskette drives____3.5"____5.25"   Size of HD (if present)_________MB
         
         Current COGO program used______________________Version #_____________
         
         CAD software used_____________________________ Version #_____________
         
         Do you use a mouse?_____If yes, make and model_______________________
         
              digitizer?_____If yes, make and size____________________________
         
              plotter?_____If yes, make and size______________________________
         
              graphics printer?_____If yes, make and model____________________
         
         *********************************************************************
         
         
              Please send to:  CIVILcomp
                               320 Eureka Canyon Road
                               Watsonville, CA  95076



















         CC-PLOT                         Page 31




         ************************ D I S C L A I M E R ************************
         
         ALTHOUGH THIS  PROGRAM HAS BEEN TESTED BY ITS DEVELOPER, NO WARRANTY,
         EXPRESSED OR IMPLIED, IS MADE BY THE DEVELOPER AS TO THE ACCURACY AND
         FUNCTIONING OF  THE PROGRAM  AND RELATED  PROGRAM MATERIAL, NOR SHALL
         THE FACT  OF  DISTRIBUTION  CONSTITUTE  ANY  SUCH  WARRANTY,  AND  NO
         RESPONSIBILITY IS ASSUMED BY THE DEVELOPER IN CONNECTION THEREWITH.
         
         *********************************************************************
         
         
         
         
         
         CREDITS:
              
              This program was written and compiled with Microsoft BASIC 7.00.
              
              AutoCAD and AutoLISP are trademarks of AutoDesk, Inc.
              
              CC-BALance, CC-COGO, CC-CONTour, CC-PLOT and CC-SURVeyor are
              trademarks of CIVILcomp.
              
              DM/PL and Houston Instrument are trademarks of AMETEK, Inc.
              
              Epson is a trademark of Seiko Epson Corporation.
              
              Generic CADD is a trademark of Generic Software, Inc.
              
              HP-GL is a trademark of Hewlett-Packard Company.
              
              IBM is a trademark of International Business Machines Corp.
              
              LogiTech is a trademark of LogiTech, Inc.
              
              Windows is a trademark of Microsoft Corporation.
              
              The pull-down menus, dialog boxes and input editor are adapted
              from routines written by Crescent Software.
              
         
         
         
         

















         CC-PLOT                         Page 32

```
{% endraw %}

## FILE1029.TXT

{% raw %}
```
Disk No: 1029                                                           
Disk Title: CC-Surveyor 2 of 2 (also 926)  
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: CC-Surveyor                                              
Author Version: 4                                                       
Author Registration: $300.00                                            
Special Requirements: 640K RAM, EGA or VGA, and a hard drive.           
                                                                        
CC-SURVEYOR is designed for civil engineers and land surveyors as an aid
for Generic CADD.                                                       
                                                                        
Create points, point numbers, and lines from maps of record or legal    
descriptions.  Then Generic CADD quickly loads the boundary, letting you
get started with the building layout or lot layout within CADD.  It     
includes traverse, inverse, sideshot, bearing, and distance intersection
routines, area, inscribe curve, rotate/translate scale, and other       
point-manipulation utilities.  Points can also be transferred back to   
CC-SURVEYOR from Generic CADD.                                          
                                                                        
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
║           <<<<  Disk #1029 CC-SURVEYOR 2 of 2 (also #926) >>>>          ║ 
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, insert disk #926 and type:                  ║
║                                    COPY README.NOW PRN  (press enter)   ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1029

     Volume in drive A has no label
     Directory of A:\

    CC-COGO  TXT    150946   3-26-90   6:07p
    CC-PLOT  TXT     97241   3-31-90   6:20a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       653   7-10-90   1:55p
    FILE1029 TXT      1822   9-14-90   1:12p
            5 file(s)     250700 bytes
                           69632 bytes free
