---
layout: page
title: "PC-SIG Diskette Library (Disk #762)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0762/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0762"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QUEST-3D"

    QUEST-3D is a three-dimensional, wire-frame modeling program for
    designing, viewing, and editing three-dimensional objects. A vertical
    menu provides a selection of commands for many design and viewing
    tasks. Move, scale, and rotate images any way you choose for many
    creative design and illustration applications. QUEST-3D can also
    create images from any viewpoint around your image.
    
    Drawing units and rotation increments are user-selectable. Portions of
    the screen can be quickly enlarged or magnified, letting you see the
    image you are drawing. QUEST-3D also lets you scale each axis
    independently, so images can be stretched or condensed in height,
    width, or length.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PART1.DOC

{% raw %}
```







                                   Q U E S T - 3 D

                                     Version 3.1
                                  Shareware Release

                                     User Manual
                     Copyright (c) 1987-1989  The Quest Company


          -----------------------------------------------------------------






                                  TABLE OF CONTENTS


          INTRODUCTION AND SYSTEM REQUIREMENTS

                2     Introduction
                2     System Requirements

          INSTALLING AND SETTING UP THE PROGRAM

                3     Disk Contents
                3     Installing QUEST-3D:
                         Floppy Disk Systems
                         Hard Disk Systems
                5     Program Configuration

          HOW TO OPERATE THE PROGRAM

                7     Using The Menus
                8     Drawing Specification Reference
                9     Keyboard Reference

          REGISTERED USERS

                10    Version 6 Features
                14    Registration Form

          3D DESIGN: THE BASIC CONCEPTS

                15    3D Space: The Drawing Environment
                15    Cursor Movement On The Drawing Planes
                15    Drawing Planes And Your Viewpoint

          COMMANDS AND OPERATION

                16    Command Reference
                46    Error Messages



                                          1








          INTRODUCTION

          QUEST-3D is  a design  and modeling  program that  enables you to
          create, view,  and edit  three-dimensional wire-frame objects and
          images.

          Completely menu driven, the program is easy to learn and use, and
          features versatile  commands with  emphasis on  conceptual design
          and illustration applications.

          QUEST-3D  features  the  ability  to  create  drawings  from  any
          viewpoint around  your drawing,  and uses  a simultaneous command
          architecture that  allows you  to use  several viewpoint commands
          even during the drawing functions.


          SYSTEM REQUIREMENTS

          QUEST-3D Version 3.1 requires the following:

                An IBM PC, XT, AT, PS/2 or Compatible

                MS-DOS or PC-DOS Version 2.1 or later

                Two Floppy Disk Drives or Hard Disk

                512K RAM

                CGA Mode  - A  Color Graphics  Adapter (CGA) and compatible
                CGA Color Monitor.

                EGA  Mode   -  An   Enhanced  Graphics  Adapter  (EGA)  and
                compatible EGA Color Monitor.

                VGA Mode  - A  VGA display adapter and compatible VGA Color
                Monitor.

                Optional - 8087/80287 Math Coprocessor supported.
                           (Increased  speed  performance  ranges
                           between 3 to 10 fold)


                Notes: Printing  your drawings  using the Shareware release
                       will  require  a  memory  resident  screen  printing
                       utility.   Screen Capture  Programs can also be used
                       to import drawings into several Paint Programs.











                                          2








          DISK CONTENTS


          Filename          Description

          QUEST3D.EXE    The QUEST-3D Program
          QUEST3D.CFG    Configuration File
          QUEST3D.TMP    Drawing Template File
          PART1.DOC      Part 1 of the Version 3.1 Users Manual
          PART2.DOC      Part 2 of the Version 3.1 Users Manual
          README.DOC     Printing instructions for the manual
          FBPLANE.I3D    Illustrated tutorial file
          LRPLANE.I3D    Illustrated tutorial file
          TBPLANE.I3D    Illustrated tutorial file
          TEMPLE.I3D     A Greek temple (sample file)
          PYRAMIDS.I3D   Pyramids (sample file)
          PLATFORM.I3D   Offshore Oil Rig (sample file)
          STATION.I3D    Space Station (sample file)
          BUILDING.I3D   Small boutique style building (sample file)
          OFFICE.I3D     Large office building (sample file)



          INSTALLING QUEST-3D

          The following  installation procedures  contain the  instructions
          for setting  up the QUEST-3D program for Floppy Disk or Hard Disk
          operation.

          FLOPPY DISK SYSTEM

          Format Two (2) Floppy Disks.

          Insert the  QUEST-3D Shareware  Disk into  Drive A,  and a  newly
          formatted diskette  into Drive  B.   At the DOS prompt, enter the
          following commands:

                         A>  COPY QUEST3D.EXE B:

                         A>  COPY QUEST3D.CFG B:

                         A>  COPY QUEST3D.TMP B:

          These are  the three  program files  necessary to  run  QUEST-3D.
          Once they  have been copied to your "new working program disk" in
          Drive B, remove the disk from Drive B, and insert the other newly
          formatted disk  into Drive B. (Do not place a write protect label
          on your  working program  Disk.)   At the  DOS prompt,  enter the
          following.

                         A>  COPY *.I3D B:






                                          3








          This will  copy all  the sample files to the disk in Drive B, and
          you can  use it  as a  drawing file disk.  When completed, remove
          the Shareware  program disk  from Drive  A, and store it for safe
          keeping.

          Now place  your new  working program  disk into  Drive  A.    The
          installation of the program disks are complete, you are now ready
          to start  the program,  and configure  it to your system.  At the
          DOS prompt, enter the following:

                         A>  QUEST3D

          QUEST-3D will  now be  loaded into memory.  When the opening menu
          is displayed, proceed to the section below titled: CONFIGURATION.


          HARD DISK SYSTEM

          Overview

          To run  QUEST-3D from  your hard  disk, it  is suggested that you
          first create a subdirectory for the QUEST-3D program files.  From
          this new  directory containing  the program files, create another
          subdirectory that  will contain  your Drawing  files.   This will
          help keep  your hard  disk  organized,  and  make  it  easier  to
          selectively backup or copy the drawing files you create.

          Procedure

          Be sure you are in the root directory of your hard disk.

                         C> CD\

          Next, create a subdirectory for the QUEST-3D program files:

                         C> MD QUEST

          Go to this new directory and create another subdirectory:

                         C> CD QUEST

                         C> MD DRAWINGS

          While still in the QUEST directory, insert the QUEST-3D Shareware
          Disk into Drive A, and issue the following commands:

                         C>  COPY A:QUEST3D.EXE C:

                         C>  COPY A:QUEST3D.CFG C:

                         C>  COPY A:QUEST3D.TMP C:






                                          4








          These are  the three  program files  necessary to  run  QUEST-3D.
          Once they  have been  copied to  your Hard  Disk, go  to your new
          DRAWINGS subdirectory:

                         C>  CD DRAWINGS

          Next, copy  all of the sample files on the Shareware program disk
          to this subdirectory:

                         C>  COPY A:*.I3D C:

          When completed,  remove the  Shareware program disk from Drive A,
          and store  it for  safe keeping.  The installation of the program
          files are  complete.   You are now ready to start the program and
          configure it to your system.

          Go back to the QUEST directory:

                         C>  CD C:\QUEST

          and issue the following command to start the program:

                         C>  QUEST3D

          QUEST-3D will  now load  into memory.   When  the opening menu is
          displayed, proceed to the section below titled: CONFIGURATION.


          CONFIGURATION

          The current  program configuration  is displayed  on the  opening
          screen of  the program,  under the headings:  Graphics System and
          Directories.

          Your Graphics Display Adapter:

          QUEST-3D supports  the three standard IBM graphics adapters: CGA,
          EGA, and  VGA.   Using the cursor keys, move the menu selector to
          the menu  option: DISPLAY,  and press  ENTER.    A  submenu  will
          appear, and  display a  menu  option  for  each  of  the  Display
          adapters mentioned above.

          Select the  menu option of the Display adapter you have installed
          in your  system. (MCGA  users, select  the CGA option).  When you
          select a  menu option, the configuration displayed on the opening
          screen will  be updated  to your  choice.  Once you have selected
          your display  adapter, return  to the  Main Menu by selecting the
          Main Menu option at the bottom of the menu.


          Your Drawing File Disk or Directory:

          QUEST-3D allows  you to  specify any  disk drive or directory for
          the storage  of your  drawing files.   Select  the  menu  option:



                                          5








          DIRECTORY.   You will then be prompted to enter the Disk Drive or
          Directory of your drawing files.

          If you  are using a Floppy Disk system where Drive A contains the
          QUEST-3D program, and Drive B the drawing files disk, then simply
          enter:  B:

          If you  are using a Hard Disk, and you have installed the program
          as described  above in the Hard Disk Installation procedure, then
          enter the following:  C:\QUEST\DRAWINGS


          Saving the configurations:

          To save  your current  system configurations, so QUEST-3D can use
          them each time the program is started, select SAVE SETUP from the
          menu.  Your current configurations will be saved to disk.

          The program is now installed, configured, and ready to be used to
          create or  view 3-D  images.   To learn how to create 3-D images,
          proceed to  the section:  3D SPACE: THE DRAWING ENVIRONMENT.  Or,
          to just  view the  sample files,  see the command: 3D DRAW in the
          command reference section.


































                                          6








          USING THE MENUS

          THE COMMAND MENUS - The menu selector consists of a small pointer
          that moves  along both  sides of the menu to indicate the current
          menu item for selection.

          You control  the menu  selector by  using the  UP and DOWN Cursor
          Keys.   When you have the menu selector positioned at the desired
          command, just  press ENTER.   Depending  upon  the  command,  the
          program will  either perform  the desired  task, or  one  of  the
          submenus will appear.

          From time  to time,  messages may  appear in  the top  row of the
          display.   They may  be questions  for you  to answer with a menu
          selection, or  it might  be a  message informing  you of  what is
          taking place  with your  drawing.   Whenever you wish to cancel a
          routine that  has prompted  you to  select a  filename or  input,
          simply press ESCAPE and you will return to the menu again.

          THE FILE DIRECTORY - Another menu used in the program is the File
          Directory Menu.   It  is a  special menu  that lists  the drawing
          files on  disk.  The screen is divided into two columns of files,
          each displaying  the name of the file, its size in bytes, and the
          date it  was last  edited or  created.   If you have files in the
          directory, or  on the  disk, they  will be  listed  here  on  the
          screen.

          If the particular file command requires you to choose a filename,
          the menu  selector will  appear after  all the  files  have  been
          listed.   You can  move the selector using the UP and DOWN cursor
          keys, and  by using  the LEFT  and RIGHT  keys you  can move  the
          selector to the other column.

          The File  Directory Menu  can contain  a  maximum  of  380  files
          consisting of  10 pages  of 38  files.  If you have more than one
          page of  files, the  program will  automatically move to the next
          page to  list more  files, if  no more files are found, or if you
          want to move back to a previous page, use the PGUP Key. Likewise,
          if you  want to  page forward through the list, use the PGDN Key.
          If you  have multiple  pages, you can also jump to the first page
          by using the HOME Key, or to the last page using the END Key.
















                                          7








          DRAWING SPECIFICATION REFERENCE


          The following  specifications provide a quick reference about the
          drawings created by QUEST-3D.


          DATABASE
          3D Vector & Boundary-Rep Coordinate System. Object oriented.
          Resolution Independent.

          MAXIMUM LINES AND SURFACES
          3000 lines, 750 (4 vertex) to 1000 (3 vertex) surfaces.
          (Surfaces available only on Registered Users Release)

          MAXIMUM DRAWING SPACE
          -7000 to +7000 drawing units along each axis

          NORMAL DRAWING SPACE, MAXIMUM VIEWPORT
          -3000 to  +3000 drawing  units along  each axis.  Viewport height
          will depend on your display's aspect ratio.

          DISK DIRECTORY/PATH
          3 user defined.
          Drawings       Version 3.1 & 6
          Library        Version 6 only
          Export Files   Version 6 only

          MAXIMUM DRAWING COLORS
          CGA Mode:  2, Black  & White.  EGA Mode: 16, user defined from 64
          color palette.  VGA Mode: 16, user defined from 64 color palette.

          VIEWPOINT CONTROL
          User controlled, 360 Degrees. Also, 4 defined Orthographic

          DRAWING FILE STORAGE
          Binary Format.  Data Point,  Line Vector,  and  Surface  Boundary
          database.   I3D File  Format.   (Drawing File listing & 3rd Party
          Developer Kit is available from The Quest Company)

          FILENAME EXTENSIONS
          Drawing and Library Files: "I3D"    Versions 3.1 & 6
          Plot to Disk Files: "PLT"           Version 6 only
          HP-GL Disk Files: "HPL"             Version 6 only
          DXF 2D and DXF 3D: "DXF"            Version 6 only












                                          8








          KEYBOARD REFERENCE


          This is a summary of the keys used for the operation of QUEST-3D.
          The Menu  and Command  Reference Section  also describes  in more
          detail several of these keys, and where their use is appropriate.

          FUNCTION KEYS

                F1 - Filename input              F2 - Previous Viewpoint

                F3 - Left View                   F4 - Right View

                F5 - Top View                    F6 - Front View

                F7 - Perspective (Ver.6 only)    F8 - Axes Grid

                F9 - Units/Degrees               F10 - Redraw


          CURSOR KEYS

          HOME, PGUP, PGDN, UP, DOWN, LEFT, RIGHT
          Moves the  graphics cursor  during the  Drawing commands.   Moves
          your viewpoint during the XYZ VP command or PAN-ZOOM command.

          LEFT, RIGHT
          Cycles the  color palette  during  the  COLOR-FORE  command,  and
          cycles the Drawing Units or Axes Rotation Degree increment during
          the F9 KEY.


          CHARACTER KEYS

          1, 2, 3, 4, 5, 6, 7, 8, +, -
          Jumps to,  or increments,  the Zoom  Factor  while  the  PAN-ZOOM
          command is active.

          D
          Toggles the  use of  one of the three Drawing Planes while any of
          the Drawing commands is active

          P or Z
          Activates the PAN-ZOOM command.

          ESCAPE
          Where appropriate, cancels a command, exits a drawing command, or
          cancels an input prompt.









                                          9








          REGISTERED USER


          QUEST-3D Version 3.1 is a shareware program designed to introduce
          the principles of 3D graphics.

          A far more advanced level release of QUEST-3D, Version 6, is sent
          to users  who contribute  a registration  fee to help support its
          production and development costs.

          Version 6 incorporates a full set of professional-level 3D design
          tools which include the following:


                                MORE DRAWING COMMANDS
                                ---------------------
          Circles, Arcs,  Polygons, Surfaces,  Curves, and  B-Spline  Curve
          fitting commands.


                            NEW SURFACE MODELING COMMANDS
                            -----------------------------
          Automatic 2D  to  3D  surface  extrusions  with  user  selectable
          relative, or  absolute, distances along any axis.  For example, a
          2D floor  plan can be turned instantly into a 3-dimensional house
          as QUEST-3D automatically extends the floor plan into surfaces to
          create walls.

          Automatic 2D  to 3D  circular  extrusions  with  user  selectable
          degrees  of   revolution  and   surface   sections.      QUEST-3D
          automatically performs  circular extrusions  on  2D  contours  to
          create cylindrical  objects -  everything from spheres, cones, to
          elaborate circular objects can be created.

          Mold and  reshape objects  into other shapes using a command that
          allows the interactive repositioning of surfaces vertices.  Users
          can specify  the movement of just one specific surface vertex, or
          all vertices and line endpoints common to the same coordinate can
          be moved simultaneously.  It's like pushing and pulling an object
          into another shape.


                              ADVANCED VIEWING OPTIONS
                              ------------------------
          For  the  ultimate  in  three-dimensional  viewing,  the  surface
          rendering  feature  automatically  "paints"  each  surface  in  a
          drawing, transforming wire-frame drawings into completely painted
          scenes of  solid  models.    Options  include  the  rendering  of
          surfaces with  or without edge highlighting, and the rendering of
          scenes using  the viewport  or the entire screen.  When rendering
          to the  viewport, access  to the  COLORS  MENU  is  available  to
          instantly change  color palettes while the completed rendering is
          displayed on  the screen - giving users the ability to experiment
          with different colors for mood, lighting, or seasonal effects.



                                          10








          Automatic Hidden  Line and Surface Removal can be performed which
          dramatically enhances  the clarity  of scenes,  and displays your
          drawing in  "solid" form.   As  in reality,  only those lines, or
          line segments,  visible from  your viewpoint  and not  blocked by
          surfaces will  be displayed.   These  enhanced views  may also be
          output to a plotter, or exported in either DXF or HPGL format for
          use in other programs.

          Automatic 3-Point  Perspective display.  Turn On Perspective Mode
          and your  drawing will  be displayed in 3-Point Perspective.  And
          because QUEST-3D  maintains a true 3D database on every entity in
          a drawing  (including, circles,  curves, and text), everything in
          your drawing will be adjusted for full visual realism.


                          MANIPULATE OBJECTS INDEPENDENTLY
                          --------------------------------
          Objects and/or Groups of objects can be controlled independently.
          Version 6  allows the  designation of up to 100 different objects
          in each  drawing!   They can  be Moved,  Scaled, Edited, and even
          Rotated to  any angle  you desire,  enabling users to control the
          exact location and orientation of any object in a drawing.

          No control  points to set or manual input required - the commands
          have all  been optimized for fast interactive control through the
          menu.   And don't worry about remembering the names you gave each
          of your  objects, QUEST-3D  will display their names right in the
          menu -  picking the  object you  want to manipulate is as easy as
          selecting a command.

          Copy, and Mirror Copy, commands are also included to quickly, and
          effortlessly, create duplicate objects.


                              GRAPHICS LIBRARY SUPPORT
                              ------------------------
          Objects or  shapes can  be saved  to disk  and later  merged into
          drawings whenever  needed, saving  valuable design  time by never
          having to recreate objects.


                          COMPATIBILITY WITH OTHER PROGRAMS
                          ---------------------------------
          QUEST-3D is  designed to  integrate easily  into your current and
          future design  system.   HPGL disk files, as well as AutoCAD's 2D
          and 3D  DXF  files  can  be  created  -  enabling  images  to  be
          transferred to  most CAD  and  Desktop  Publishing  programs  for
          additional drawing  enhancement or high resolution printing.  DXF
          files created  from 2D  CAD programs  can also  be imported  into
          Version 6,  where the surface extrusion commands can turn your 2D
          drawing into a 3D image.






                                          11








                             ADDITIONAL EDITING COMMANDS
                             ---------------------------
          Erase Last, Undo Last, and Block Erase.  Erase Last gives users
          fast, one key operation for erasing any entity (circle, lines,
          curves, etc.) that has just been drawn.  If you change your mind,
          the Undo Last command will restore the entity that was just
          erased with the Erase Last command.  And Block Erase allows users
          to specify an entire series of lines or surfaces to be deleted at
          one time, saving valuable time on major editing operations.


                                        TEXT
                                        ----
          Version 6  will automatically  generate text  for any  character,
          word, or  phrase input  by the  user (1-40 characters at a time).
          The text  is created  using individual  line segments  and can be
          manipulated just like any other object.


                                    MOUSE SUPPORT
                                    -------------
          Full Mouse support is included (Microsoft Mouse compatibles).


                                   PLOTTER SUPPORT
                                   ---------------
          Hewlett Packard  and Houston Instrument Plotters are supported to
          provide high  quality hardcopy output.  Other plotters, or output
          devices, using  either the  Hewlett Packard  HP-GL or the Houston
          Instrument DM/PL command languages are also supported.


                                      AND MORE
                                      --------
          A 170 page printed manual is included with the Version 6 program,
          and contains  illustrations  and  a  tutorial.    Free  Technical
          Support is  provided to  registered users  only.    Additionally,
          registered users  will receive  information on all future updates
          as they become available.


                                      IMPORTANT
                                      ---------
          QUEST-3D Version  6 requires  systems to  be equipped  with 640K.
          This differs from the v3.1 Shareware Release, which requires only
          512K.  (QUEST-3D Version 6 enjoys itself with about 535K of RAM.)











                                          12










          How to become a registered user:
          --------------------------------


          By Mail:  Fill out  the registration  form on  the next page, and
                   send it  along with  the Registration Fee to the address
                   below.  VISA and MASTERCARD are accepted.

          By Phone:   The  Registration Fee is payable by credit card. VISA
                     and MASTERCARD are accepted.


                                  THE QUEST COMPANY
                                3117 W. Holland Ave.
                                  Fresno, CA  93722


                                 Ph. (209) 222-5301
                              9 AM - 5 PM Pacific Time
                          Monday - Friday, except Holidays



































                                          13








                                  REGISTRATION FORM


          QUEST-3D Registration                                    $59.95
          Package includes Version 6 Program Disks,
          Library Files, Sample Files, and Printed Manual.

          ADD Shipping and Handling: (check one)
          ______ U.S. destination - First Class Mail         $ 5.00
          ______ U.S. destination - UPS Ground               $ 7.00
          ______ U.S. destination - UPS Blue                 $ 9.00
          ______ Canada destination - AIR MAIL               $ 6.00
          ______ Foreign destination - AIR MAIL              $15.00
                                                                    _______

          California Residents Only: ADD Sales Tax           $3.90  _______


                                        TOTAL .................... $_______


          Payment may be by Check or Money Order in U.S. Dollars payable on
          a U.S.  Bank.   Make Check  or Money  Order payable to: The Quest
          Company.   VISA and  MASTERCARD is  accepted.  Sorry no C.O.D.'s.
          Purchase Orders must be accompanied with payment.


          SHIP TO:

          Name: ___________________________________________________________

          Company (if applicable) _________________________________________

          Address: ________________________________________________________

                   ________________________________________________________

                   ________________________________________________________

                   ________________________________________________________

                   ________________________________________________________


          If payment is by VISA or MASTERCARD, please provide the following
          information:

          Card Number: ___________________________________ Exp. Date ______

          Name as it appears on card ______________________________________

          Signature _______________________________________________________

          Daytime Telephone _______________________________________________



                                          14








          3D SPACE: THE DRAWING ENVIRONMENT

          To create  true three-dimensional  images requires the ability to
          select points  in 3D  space.   To identify  these points (the end
          points for lines or surface vertices) a coordinate system is used
          that represents the point's location.  The coordinate system must
          specify how  far to the side, how close or far back, and how high
          or low  the point  is.   A coordinate  format of X,Y,Z identifies
          this location.

          The "X"  represents the  location from side to side (the X-Axis).
          The "Y"  represents the  location's length (the Y-Axis).  And the
          "Z" represents  the height  or depth  of the  point (the Z-Axis).
          Together these 3 Axes create the 3 separate "Drawing Planes" that
          you can draw on, or through, when creating images.

          The planes  are sometimes  referred to  as the X-Y Plane, the Y-Z
          Plane, and  the X-Z  plane.   However, to make it easier and more
          understandable, QUEST-3D uses names for these Drawing Planes that
          in reality  correspond to  the sides  of an  image.  They are the
          Left-Right Plane  (the Y-Z Plane), the  Front-Back Plane (the X-Z
          Plane), and the Top-Bottom Plane (the X-Y Plane).


          CURSOR MOVEMENT ON THE DRAWING PLANES

          When you  are creating  a 3D  image, you  will be  able to choose
          which of  the Drawing  Planes you  want the  graphics  cursor  to
          travel or draw on.  Simply determine which side of your image the
          cursor must travel on to get to your desired location, and select
          that Drawing  Plane.  Drawing Planes are selected while using the
          LINES or  MV CURSOR commands, and pressing the letter "D" on your
          keyboard.   The current  drawing plane  is  displayed  below  the
          "Model Menu" in graphics mode.

          During the  LINES or  MV CURSOR  commands, the  movement  of  the
          graphics cursor  can be  controlled by  any of  the cursor  keys.
          Each time  you press  a cursor key, the graphics cursor will move
          to a new location.

          When the  graphics cursor  moves, it  moves  by  a  Drawing  Unit
          increment that  can be  controlled by  using the  F9 KEY.    This
          allows you  to set  the movement  of the  graphics  cursor  to  a
          specific scale.   The  F9 KEY can be activated whenever the LINES
          or MV CURSOR commands are in use.


          DRAWING PLANES AND YOUR VIEWPOINT

          QUEST-3D is  designed to  allow the  creation of  images from any
          viewpoint.   To accomplish  this, QUEST-3D  not  only  moves  the
          graphics cursor  on the current drawing plane in the direction of
          the cursor key, but also moves the graphics cursor in relation to
          your 3D viewpoint.



                                          15








          Included with  the program are three tutorial illustration files.
          Each file illustrates one of the three drawing planes:

             The FBPLANE.I3D file shows the Front-Back Drawing plane.
             The LRPLANE.I3D file shows the Left-Right Drawing plane.
             The TBPLANE.I3D file shows the Top-Bottom Drawing plane.

          (For simplicity,  only the  Left, Right,  Up, and Down cursor key
          directions are  illustrated, but  you may also use the Home, End,
          PgUp, and PgDn cursor keys to move the graphics cursor)

          When viewing  the three  tutorial illustration files, use the XYZ
          VP command  to pick  new viewpoints.  Note the  direction of  the
          arrows -  the arrows  indicate the  path the graphics cursor will
          take when  either the  Left, Right,  Up, or  Down, cursor  key is
          pressed.


          ORTHOGRAPHIC VIEWPOINT KEYS AND AUTO DRAWING PLANE SELECTION

          QUEST-3D has  also been  designed to automatically select drawing
          planes for  you, but  ONLY WHEN  USING THE ORTHOGRAPHIC VIEWPOINT
          KEYS (F3-F6).  The drawing plane selected by QUEST-3D will be the
          one  most   associated  with   that  particular  viewpoint,  i.e.
          Pressing F3  will change your viewpoint to the Left View and also
          switch the drawing plane to the "Left-Right" drawing plane, since
          this drawing  plane would  most likely be the one you wish to use
          from a Left View.  (If you wish to use another drawing plane, you
          may still  use the  "D" key to switch the drawing plane - similar
          to that if you were drawing from an arbitrary 3-D viewpoint.)

          Also, using  the F2  Key not only switches your viewpoint back to
          your "Previous  Viewpoint," but  also switches  you back  to  the
          drawing plane you were using prior to the use of the orthographic
          viewpoint keys.
                               * * * * * * * * * * * *

          Using the  concepts described  above, and trying out a drawing of
          your own,  you will  quickly discover how the correlation between
          the Drawing  planes and  your viewpoint,  give you the freedom to
          accurately create  images from  any location  in 3D  space.  More
          specific descriptions for each of the three drawing planes can be
          found in  the command reference section.  See the commands: LEFT-
          RIGHT, FRONT-BACK, and TOP-BOTTOM.


          COMMAND REFERENCE

          The next  section contains a complete description of the commands
          used in  QUEST-3D Version  3.1.   The descriptions in the Command
          Reference are in alphabetical order.






                                          16








          3D DRAW

          Summary: Starts a new 3D Modeling session.

          Menu(s): MAIN

          Procedure

          To begin  a new drawing, or view and edit an existing one, the 3D
          DRAW command  will list  all the files in the Drawings Directory.
          Move the  menu selector  to the name of the file you wish to edit
          or view.   If  you want  to begin a new drawing, press the F1 KEY
          and input  a new  filename.   Do not  include the ".I3D" filename
          extension.

          Following the  selection or input of a filename, the program will
          enter the  graphics mode.   If  you entered  a new  filename, the
          default drawing  settings in  the file  TEMPLATE.CFG are  loaded.
          Once the  MODEL MENU appears, you are free to begin creating your
          new drawing.   If  you selected  a file  that already exists, the
          file will  be loaded  into memory  and displayed.   You  can then
          begin selecting commands from the menu.

          To end  a graphics session and return to the opening menu, select
          MAIN MENU  located on  the MODEL  MENU.   You will be prompted to
          confirm your  choice to "Return to Main Menu ?"  Select CANCEL if
          you wish to remain in graphics mode, or RETURN to end the current
          graphics session.

          YOU CAN  NOT SAVE  YOUR DRAWING FROM THE MAIN MENU, SO BE SURE TO
          SAVE YOUR FILE BEFORE SELECTING "RETURN"


          See Also
          DIRECTORY, TEMPLATE, SAVE FILE






















                                          17








                                     COLOR-BACK

          Summary: Displays the Background Color Menu.

          Menu(s): COLORS

          Procedure

          The Background  Color Menu  displays 16  colors (0-15).   Next to
          each color number is a color block, so you can see which color is
          currently set  to each background color number.  If you are using
          an EGA  or VGA  system, selecting a color will immediately redraw
          your image  with the  new background color.  After selecting your
          background color number, you will return to the Colors Menu.

          EXPANDING THE BACKGROUND COLOR CHOICES:

          Even though  you have  only 16  background colors to choose from,
          with QUEST-3D  you can  still use any one of the 64 colors (0-63)
          as a background.  For example, suppose you choose color number 13
          and your  image is redrawn, but the colors do not look very good.
          On the Colors Menu, select COLOR-FORE.  When the Foreground Color
          Menu appears,  move the menu selector down to color number 13 and
          press ENTER.  This will activate the palette selector.

          Using the  LEFT or  RIGHT cursor keys will allow you to instantly
          change the  background color.   You  can now cycle through all 64
          colors and  choose the background color that looks best with your
          image.   When you  find it,  just press  ENTER.   Your background
          color is  now set,  and you  can return  to  the  Model  Menu  by
          selecting CANCEL.

          CGA users:  The COLOR-BACK  command is primarily for use with EGA
          and VGA  display systems.   If  you perform a screen redraw while
          using a  background color  number other  than 0,  the screen will
          appear all  white (white  lines on  a white background).  If this
          happens, simply  use the  COLOR-BACK command and select the color
          number: 0.


          See Also
          COLOR-FORE















                                          18








                                     COLOR BARS

          Summary: Full  Screen display  of current  colors.   EGA and  VGA
          display systems only.

          Menu(s): COLORS

          Procedure

          Selecting COLOR BARS will clear the entire screen and display all
          16 colors (0-15) from the current palette selection.  This screen
          allows you  to better judge the range of colors you are currently
          working with.

          To resume  the program,  press any  key and the graphics viewport
          and Colors Menu will be redisplayed.


          See Also
          COLOR-FORE





































                                          19








                                     COLOR-FORE

          Summary: Allows you to set each foreground color to any one of 64
          colors.

          Menu(s): COLORS

          Procedure

          The Foreground  Color Menu  displays 16 colors (0-15). Each color
          number is  listed, and  next to  the color  number is yet another
          number, this  number corresponds to one of the EGA or VGA palette
          colors (0-63).   Next  to each  palette color  number is  a color
          block, so  you can see which color is currently set to each color
          number. (EGA and VGA only)

          QUEST-3D always keeps the color Black assigned to color number 0,
          and is  the only  color number  you can  not change. The other 15
          color numbers can be assigned any one of the 64 colors.

          To change  a foreground  color assignment, move the menu selector
          to the  color number  you want  to change,  and press  ENTER.   A
          message will be displayed at the top of the screen indicating you
          to use  the RIGHT  or LEFT  cursor  keys  to  cycle  through  the
          palette.   Next to  the message is a much larger color block, and
          in front  of it, the number corresponding to one of the 64 colors
          (0-63).

          As you  press the  cursor key, the color block will change color,
          and any  line in your drawing using the selected color number (0-
          15) will  also change.   When  you find  a color  you like, press
          ENTER.   You can  now repeat  the  procedure  for  another  color
          number, or return to another menu with CANCEL or COLORS.  You may
          also press  ESCAPE during  the palette cycling process to restore
          the original color assignment you had before.

          Notes

          QUEST-3D uses  color number  2 for the viewport border, number 14
          for the  menu and  setting titles, and number 15 for messages and
          the menu pointers.  Feel free to reassign their colors.


          See Also
          COLOR-BACK, NEW COLOR












                                          20








                                      DIRECTORY

          Summary: Allows  you  to  specify  the  Disk  Drive  and/or  Path
          specification for your drawing files.

          Menu(s): MAIN

          Procedure

          When retrieving  or saving  files, QUEST-3D  needs to  know which
          Disk Drive  and/or Path  the files  are located.    This  command
          allows you to configure the Drive specification that will be used
          to locate  and save  your drawing files.  (The Library and Export
          File directories  are reserved  features used  on the  registered
          users release.)

          The DIRECTORY command will prompt you to enter the Disk Drive and
          Path specification  you would  like to  use.   You are allowed to
          have a specification up to a maximum of 40 characters.  To cancel
          the command,  press ESCAPE.   To enter, type in the specification
          and press ENTER.

          If you are setting a Disk Drive Only specification, then you must
          use the  following syntax:  enter the  Disk Drive  Letter  and  a
          colon.   Do Not  enter a  backslash or  any other  character.  An
          example to use Disk Drive B is simply:  B:

          If you  are using  a Path  specification, then  use the following
          syntax: enter  the Disk  Drive Letter  followed by  a colon, then
          enter the backslash "\" followed by the name of the directory. Do
          not include a backslash at the end of the directory. For example,
          suppose you  have QUEST-3D  in a directory called "Quest" on your
          Hard Disk,  and you  have a  subdirectory for  your drawing files
          located below the "Quest" directory.  If the subdirectory for the
          Drawing files was named "Drawings" then the entry would
          be:  C:\QUEST\DRAWINGS

          Notes

          Using this  command resets  the directory  path temporarily,  and
          keeps the  changes in  effect until you QUIT the program. Use the
          SAVE SETUP command to keep the setting permanent.















                                          21








                                       DISPLAY

          Summary:  Graphics Adapter configuration.

          Menu(s): MAIN

          Procedure

          To specify  the use of a particular Graphics Adapter, the DISPLAY
          command will list the three adapters supported by QUEST-3D.

          Choose the  graphics adapter  installed in  your computer system.
          QUEST-3D supports  the CGA/MCGA,  EGA, and  VGA.  (Color Monitors
          Only)

          Use the  SAVE  SETUP  command  to  keep  the  setting  permanent.
          Otherwise, the  program will  only keep  your selection in effect
          until you QUIT the program.

          SEE ALSO
          SAVE SETUP




































                                          22








                                       DP B/W

          Summary: Clears  the  menu  from  the  display,  and  temporarily
          redraws your  image in  full screen mode using a White background
          and Black lines.

          Menu(s): VIEW

          Procedure

          DP B/W  (Desktop Publishing  Black &  White) redraws  the current
          view without a menu or message area by using the entire screen as
          the drawing viewport.  The program displays your image with Black
          lines on  a White  background to  better simulate  the  way  your
          drawing might  appear in  a Desktop Publishing program, or how it
          will appear when printed or plotted.

          The program  is paused  temporarily, and  pressing any  key  will
          reset the viewport and return you back to the View Menu.


          See Also
          FULL SCRN


































                                          23


```
{% endraw %}

## PART2.DOC

{% raw %}
```






                                ERASE LN or ERASE ALL

          Summary:  To erase a line or drawing currently in memory.

          Menu(s): MODEL

          Procedure

          ERASE LN - Allows you to erase a line from the drawing.  The line
          must first be chosen with the SELECT command.

          ERASE ALL  - Allows you to completely erase ALL the data for your
          drawing at one time.

          When selecting  ERASE LN,  the line will be highlighted using the
          editing line  style.   You will  then be  asked to  confirm  your
          choice to  delete the  line.   Press ENTER  if you  want the line
          erased, or any other key to cancel the command.

          When selecting  ERASE ALL, a confirmation menu will be displayed.
          Selecting NO will cancel the command, and YES will remove all the
          drawing data from the database.

          The message  "Sorting &  Optimizing Database"  will be  displayed
          during the deletion process as QUEST-3D removes data from memory,
          and reindexes the databases.

          Notes

          ERASE ALL  deletes only  the data currently in memory, and not on
          Disk.   Also,  the  filename  you  specified  when  starting  the
          graphics session will still be in effect after an ERASE ALL.


          See Also
          SELECT, SAVE





















                                          24








                                       F2 KEY

          Summary: Redraws  your  image  using  the  last  XYZ  VP  command
          viewpoint.

          Menu(s): Nearly all.

          Procedure

          The viewport  is cleared,  and your  image is  redrawn using  the
          rotation and  tip values  of your  last selected XYZ VP viewpoint
          (the viewpoint  selected from the XYZ VP command).  This Function
          Key  command  is  for  quickly  returning  to  your  Previous  3D
          Viewpoint after having used one of the four Orthographic Views.

          You can  use this  command even during the drawing commands. This
          gives you  the versatility,  for example,  to jump  from view  to
          view, then  back to your 3D View after checking where to set your
          points.

          This command also sets the previous Drawing Plane that was last
          selected or used from this 3D Viewpoint.

          See Also
          F3-F6 KEYS, XYZ VP
































                                          25








                                     F3-F6 KEYS

          Summary: Selects an Orthographic Viewpoint, and automatically
          selects a Drawing Plane for the view.

          Menu(s): Nearly all.

          Procedure

          The viewport  is cleared,  and your image is redrawn using one of
          the preset  Orthographic Views.  The  views  are  assigned  to  a
          separate Function Key as follows:


                F3  LEFT VIEW        F4  RIGHT VIEW

                F5  TOP VIEW         F6  FRONT VIEW


          You can  use this  command even  during the drawing commands.  If
          one of  the drawing  commands is in use, you can use this command
          to assist  you in  the positioning  of the  graphics cursor  more
          quickly and  precisely, since  you can  jump  from  one  view  to
          another.

          Using the F3-F6 Keys also automatically selects the Drawing Plane
          that is most likely to be used at such a view.  For example, when
          the F3  Key is  pressed, the  Drawing Plane  will be  switched to
          LEFT-RIGHT, whereas  if the  F6 Key is pressed, the Drawing Plane
          will become  FRONT-BACK.   (If desired, you can also override the
          selection by making your own using the "D" Key.)

          Orthographic Views  are also very useful when you are positioning
          your drawing with the MOVE command.

          To return to a Previous 3D Viewpoint and Drawing Plane use the F2
          KEY.


          See Also
          F2 KEY, XYZ VP
















                                          26








                                       F8 KEY

          Summary: Toggles the display of an Axes Grid ON and OFF.

          Menu(s): Nearly all.

          Procedure

          If Axes  Grid is  OFF, it  is now  turned ON  and your  image  is
          redrawn with the Axes Grid.

          If Axes  Grid is  ON, it  is now  turned OFF  and your  image  is
          redrawn without the Axes Grid.

          QUEST-3D creates  the Axes Grid by drawing a line along each Axes
          (X-Axis, Y-Axis, and Z-Axis) and is useful in aligning your image
          to the center of the rotation point located at (0,0,0).

          Notes

          PLAN VIEW  temporarily turns  the Axes  Grid OFF when drawing the
          four views.


          See Also
          MOVE































                                          27








                                       F9 KEY

          Summary: Allows  the selection of Drawing Units or Degrees during
          the commands that use these increments.

          Menu(s): NONE. Active only during the corresponding command
          operation.

          Procedure

          DURING THE DRAWING COMMANDS:
          Used to  select or  change the  distance the graphics cursor will
          move each  time  you  press  a  cursor  key  during  the  drawing
          commands.   The F9  KEY is  used to  cycle through  a  number  of
          different Drawing Units while the LINES or MV CURSOR commands are
          in use.   The  units are: 1, 2, 3, 4, 5, 10, 12, 20, 25, 50, 100,
          250, 500, 1000

          The Drawing Units are displayed in the lower right-hand corner of
          the screen.   Pressing  F9 will  suspend the  LINES or  MV CURSOR
          command, allowing  you to  use the  LEFT or  RIGHT cursor keys to
          cycle the  Drawing Units.  As you press the cursor key, the Units
          display will change.  When you want to select the displayed unit,
          press ENTER.   You  will then  resume with  the command  you were
          using.


          DURING THE XYZ VP COMMAND:
          While rotating  the XYZ VP Axes, you may find that you would like
          to change  the degree of rotation the Axes moves.  The F9 KEY can
          be used to cycle through a number of different Degree increments.
          Your choices are: 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45.

          The current  Degree increment is displayed on the right-hand side
          of the  screen.   Pressing F9  will suspend the command, allowing
          you to  use the  LEFT or  RIGHT cursor  keys to cycle through the
          Degrees.   As you  press the  cursor key, the Degree display will
          change.   When you  want to  select the  displayed Degree,  press
          ENTER.  You will then resume with the XYZ VP command.

          Notes

          You can  use ESCAPE  to cancel  the selection process and restore
          the previous value.













                                          28








                                       F10 KEY

          Summary: Clears the viewport and Redraws your image.

          Menu(s): Nearly all.

          Procedure

          The viewport  is cleared,  and your image is redrawn. The command
          will also  clean up  lines that may have been partially erased by
          the stretching  of lines  during the  LINES command.  Redraw does
          not perform  any rotation,  tip, or perspective calculations, and
          will redraw your screen much faster than the XYZ VP command.

          Notes

          You can use this command even while you are in a drawing command.








































                                          29








                                     FRONT-BACK

          Summary: While using the LINES or MV CURSOR commands, selects the
          drawing plane  that is  associated with the Front or Back Side of
          your image. (the X-Z Plane)

          Menu(s): NONE.   Selected  Only during  a Drawing  command, or by
          using the F6 KEY.

          Procedure

          While using  the LINES  or MV CURSOR command, you can toggle your
          drawing plane  using the  "D" character  key.   The last  message
          displayed below  the Model  Menu indicates  your current  drawing
          plane.   Additionally, using  the F6  KEY will  also  select  the
          Front-Back drawing plane automatically.

          The Front-Back  drawing plane  will cause any subsequent movement
          of the graphics cursor to move in relation to this plane and your
          viewpoint.  The LEFT and RIGHT cursor keys will move the graphics
          cursor along  the Width  of your image (the X-Axis), while the UP
          and DOWN  cursor keys  will move  the graphics  cursor along  the
          Height of your image (the Z-Axis).

          The current  Y coordinate  value (the location along your image's
          length) will  be locked  in place  as you  draw on the Front-Back
          Plane.   To move  along the length of your image, you can use the
          LEFT-RIGHT or TOP-BOTTOM drawing plane.


          See Also
          LEFT-RIGHT, TOP-BOTTOM

























                                          30








                                      FULL SCRN

          Summary: The  FULL  SCREEN  command  clears  the  menu  from  the
          display, and  temporarily redraws  your image  using  the  entire
          screen.

          Menu(s): VIEW

          Procedure

          FULL SCRN  redraws your currently selected view without a menu or
          message area  by using the entire screen as the drawing viewport.
          The program  is paused  temporarily, and  pressing any  key  will
          reset the viewport and return you back to the View Menu.

          The FULL  SCREEN command  is also  a good place to use any memory
          resident utility  program that  allows you  to print your display
          screen on  a dot-matrix printer, or capture it for use in a paint
          program.


          See Also
          DP B/W, PAN-ZOOM


































                                          31








                                     LEFT-RIGHT

          Summary: While using the LINES or MV CURSOR commands, selects the
          drawing plane  that is  associated with the Left or Right Side of
          your image. (the Y-Z Plane)

          Menu(s): NONE. Selected Only while using a Drawing command, or by
          using the F3 KEY or F4 KEY.

          Procedure

          While using  the LINES  or MV CURSOR command, you can toggle your
          drawing plane  using the  "D" character  key.   The last  message
          displayed below  the Model  Menu indicates  your current  drawing
          plane.   Additionally, using  the F3  or F4 KEYS will also select
          the Left-Right drawing plane automatically.

          The Left-Right  drawing plane  will cause any subsequent movement
          of the graphics cursor to move in relation to this plane and your
          viewpoint.  The LEFT and RIGHT cursor keys will move the graphics
          cursor along  the Length of your image (the Y-Axis), while the UP
          and DOWN  cursor keys  will move  the graphics  cursor along  the
          Height of your image (the Z-Axis).

          The current  X coordinate  value (the location along your image's
          width) will  be locked  in place  as you  draw on  the Left-Right
          Plane.   To move  along the  width of your image, you can use the
          FRONT-BACK or TOP-BOTTOM drawing plane.


          See Also
          FRONT-BACK, TOP-BOTTOM

























                                          32








                                        LINES

          Summary: Used for drawing lines in your drawing.

          Menu(s): MODEL

          Procedure

          Once you select LINES, you can move the graphics cursor using any
          of the cursor keys.  Each time you press a cursor key a line will
          be drawn  by stretching it from its starting point to the current
          location of  the graphics cursor.  The graphics cursor appears as
          a small Cross.

          The graphics  cursor moves  along a  drawing plane  that  can  be
          selected by  the "D"  key.   Any movement  of the graphics cursor
          will be  in relation  to this  plane and your viewpoint.  gAs the
          graphics cursor  moves, the X, Y, Z coordinates will be displayed
          in the lower right-hand corner of the screen.

          When you have drawn a line to the position you want, press ENTER.
          The line  number displayed  with the  X, Y,  Z  coordinates  will
          advance by  one, and  indicates the  line you  will be working on
          next.   Your actual  line count will be one less.  You may have a
          maximum total of 3000 lines per drawing.

          After pressing ENTER, you remain in the line drawing mode and can
          continue drawing  more lines.  To stop drawing, press ESCAPE.  If
          you ESCAPE  before selecting your line with ENTER, the unselected
          line will  be erased,  and the  cursor will move back to the last
          starting point, and you will return to the menu.

          Also displayed  below the  menu is the current Drawing Unit - the
          increment the  graphics cursor  will move  each time  you press a
          cursor key.   You can change this value by using the F9 KEY while
          the using either the LINES or MV CURSOR commands.

          The center of QUEST-3D's drawing space is the X, Y, Z coordinate:
          0, 0,  0.    The  drawing  space  extends  7,000  units  in  each
          direction.      However,  you  should  try  to  keep  your  image
          boundaries between  -3000 to +3000 since this is the maximum size
          of the viewport.


          See Also
          LEFT-RIGHT, FRONT-BACK, TOP-BOTTOM, F10 KEY











                                          33








                                        MOVE

          Summary: Displays  the Move Menu, where you can move your drawing
          in any  of six  directions, and  by a  number of  different  unit
          increments.

          Menu(s): MODEL

          Procedure

          When the  Move Menu  appears,  the  current  Move  Unit  will  be
          displayed below the menu.  You can move your image LEFT and RIGHT
          (X-Axis), FORWARD  and BACKWARD  (Y-Axis), and  UP and  DOWN  (Z-
          Axis).

          Choosing any  of these  six directions will cause the image to be
          recalculated, and  displayed in  the new position.  The amount of
          movement can  be set  by selecting  either 200, 500 or 1000 units
          from the  menu, or by using the SPECIFY command to enter your own
          increment in the range of 1-3000 drawing units.

          Notes

          The program calculates your viewpoint using the center coordinate
          0, 0, 0.  Centering your image with the MOVE command allows it to
          have a  more equal  rotation and  tip transformation.    To  help
          center your image, use Orthographic Views such as a front or side
          view, (F3-F6 KEYS).

          Selecting SCALE  from this  menu allows  you to jump to the SCALE
          menu.


          See Also
          SCALE, F3-F6 KEYS, F8 KEY, F10 KEY






















                                          34








                                      MV CURSOR

          Summary: Allows  you to  reposition the  graphics cursor  without
          using a drawing command.

          Menu(s): MODEL

          Procedure

          After selecting  MV CURSOR,  use the  cursor keys to position the
          graphics cursor.   The  position you  choose will  become the new
          starting point  for the  next  line  you  draw  using  the  LINES
          command.

          Use the  "D" key  to toggle  between the  three drawing planes to
          control your  movement in  3D space.  Like the LINES command, the
          F9 KEY  can be  used to  set or change the increment the graphics
          cursor will  move each  time one  of the  cursor keys is pressed.
          Once you have the graphics cursor positioned, press ESCAPE.


          See Also
          LEFT-RIGHT, FRONT-BACK, TOP-BOTTOM, F9 KEY


































                                          35








                                      NEW COLOR

          Summary: To select a new line color for drawing.

          Menu(s): COLORS

          Procedure

          The Line  Color Menu  displays all  16  (0-15)  colors  that  are
          available for use in your drawing.  Color blocks will appear next
          to each color number on EGA and VGA systems.

          Select the color you want your next line or lines to be drawn in.
          This color will remain in effect until you select a new color.

          After choosing  a new  line color, you will return to the primary
          menu where you issued the COLORS command.

          Notes

          Use the COLOR-FORE command to change the palette color associated
          with any of the line colors.

          CGA users:  this command  is primarily  for use  on EGA  and  VGA
          systems.   However, to  stay compatible  with the registered user
          version of  the program,  CGA users have access to the line color
          designations.   They  can  be  used  to  designate  "layers"  for
          drawings that  will be  transferred in  DXF format  to other  CAD
          programs.


          See Also
          COLOR-FORE
























                                          36








                                      PAN-ZOOM

          Summary: To Pan or Zoom the graphics viewport.

          Menu(s): VIEW, and by using either the "Z" or "P" Keys.

          Procedure

          On nearly  any menu,  and during the LINES or MV CURSOR commands,
          PAN-ZOOM allows  you to move your viewpoint on your drawing (PAN)
          or enlarge  the view of your drawing (Zoom).  You can access this
          command by  either selecting  it from the View Menu, or using the
          "Z" or "P" keys, which will activate both Pan and Zoom functions.

          If you  select the  command from  the View  Menu,  all  the  keys
          relating to  the Pan and Zoom functions are displayed in the menu
          area,   whereas selecting  the command  using the "Z" or "P" keys
          will not.   The advantage of using the "Z" or "P" keys is that it
          also allows  you to  activate the  command during the LINES or MV
          CURSOR  commands,  thereby  giving  you  more  versatility  while
          drawing.  To exit the PAN-ZOOM command, press ESCAPE.

          ZOOM
          There are  8 Zoom Levels that can be selected.  While the Pan and
          Zoom Mode is Active, you can move from one Zoom Level to the next
          by pressing  the "+"  key for "Zoom In" and the "-" key for "Zoom
          Out."   Zoom Level  1 is  normal while Zoom Level 8 is at maximum
          enlargement.   Additionally, you  can jump to various Zoom Levels
          by pressing any of the numeric keys 1 thru 8.  This allows you to
          jump, for example, from Level 2 to Level 7 at the touch of a key.

          PAN
          Using the  cursor keys,  you can Pan the display of your drawing.
          Like the  XYZ VP  command, you  are moving your viewpoint not the
          drawing itself.    Press  the  cursor  key  for  the  appropriate
          direction you  want your  viewpoint moved.   The Pan increment is
          controlled  dynamically   by  the  program,  and  will  Pan  your
          viewpoint by  One-Third the  distance of the graphics viewport on
          each press  of a  cursor key.   A  unique feature of this dynamic
          control is  that it is based on your current Zoom Level, and will
          therefore eliminate  any possibility  of Panning  in too large an
          increment.   If you attempt to Pan farther than the limits of "3D
          space" the  program will  give  a  short  "Beep,"  and  will  not
          continue to pan farther than is possible.

          NOTES

          While in  the Pan and Zoom Mode, pressing "R" will Reset both Pan
          and Zoom  to Normal.  Pan and Zoom settings remain in effect even
          when redrawing your image after using the XYZ VP command.







                                          37








                                      PLAN VIEW

          Summary: Simultaneously  displays three  Orthographic  Views  and
          your current 3D viewpoint using Full Screen Mode.

          Menu(s): VIEW

          Procedure

          The screen  is cleared,  and is divided into four equal sections.
          In each  section a  different view  of your  image will be drawn.
          Three of  the views  are Orthographic Views which are straight on
          views of  your image.  The fourth view will be the same view that
          was previously displayed when you selected this command.


          The top-left display is the Top View.

          The bottom-left display is the Front View.

          The bottom-right display is the Right Side View.

          The top-right display is the current 3D viewpoint.


          After viewing your image with PLAN VIEW, press any key and you
          will return to your previous view.

          Notes

          If the  Axes Grid  is ON,  it will  be temporarily turned OFF for
          this command.


          See Also
          F3-F6 KEYS, XYZ VP





















                                          38








                                      SAVE FILE

          Summary: Saves your drawing and current settings on disk.

          Menu(s): MODEL

          Procedure

          Selecting the  SAVE FILE  command saves  your current  drawing on
          disk.  The file will have the name you specified when you started
          drawing or  editing, and  has the  .I3D filename  extension.   In
          addition to  the 3D  database, all the drawing settings will also
          be saved,  including the  current location of the graphics cursor
          and color palette information.

          After the  file has  been saved,  press any  key and control will
          return back to the Model Menu.

          Notes

          Your drawing is saved as numerical data and not as a memory image
          of the  screen.  The size of the file will be directly related to
          the number  of lines  you have  in your drawing.  Should you ever
          create an  image with  the maximum amount of lines, the file will
          probably require around 80K bytes of disk space.
































                                          39








                                     SAVE SETUP

          Summary: Saves the current program configurations to disk.

          Menu(s): MAIN

          Procedure

          After selecting  SAVE SETUP,  you will  be asked  to confirm your
          choice to  create a  new configuration file.  QUEST-3D reads this
          file each  time you  start the program, and informs QUEST-3D what
          display adapter you are using and where you want to load and save
          drawing files.

          To configure  QUEST-3D to  your computer  system, use the DISPLAY
          command to  indicate the  graphics adapter  installed in  system.
          Use the  DIRECTORY command  to specify where you want QUEST-3D to
          store your drawing files.

          After specifying,  or changing,  a configuration  option, use the
          SAVE SETUP  command to  permanently save the information to disk.
          It will then be used each time the program starts.


          See Also
          DIRECTORY, DISPLAY































                                          40








                                        SCALE

          Summary: To  increase or  decrease  the  size  of  your  drawing,
          including scaling each Axis independently.

          Menu(s): MODEL

          Procedure

          The Scale  Menu will appear, and display the current Scale Factor
          and Scale Type below the menu.

          To change  your Scale  Factor, select  from the  menu one  of the
          following: .99,  .95, .90,  .75, .50.  A Scale Factor of .50 will
          cause the  greatest amount  of scaling  to occur, whereas a Scale
          Factor of .99 will cause the least.

          ALL SIDES indicates you want to scale all the sides of your image
          equally by  the  same  factor,  and  at  the  same  time.  HEIGHT
          indicates you want only the height (Z-Axis) of your image scaled.
          LENGTH specifies  you want to scale only the length (Y-Axis). And
          WIDTH specifies you want only the width (X-Axis) scaled.

          The SMALLER and LARGER commands will scale your drawing using the
          specified  Scale   Type,  and   by  the  Scale  Factor  currently
          displayed.   Your drawing  will be recalculated, and then redrawn
          on the  screen.  You can continue to scale your drawing or select
          MODEL to  return to  the Model  Menu, or  the MOVE command can be
          used to jump immediately to the Move Menu.

          Notes

          Scaling your  entire image  down to a tiny dot on the screen will
          run the  risk of setting some of the X, Y, Z coordinates to Zero.
          If this  happens you may be unable to bring your image back up to
          its normal size or shape.

          Scaling your  entire image  2 to 3 times larger than the viewport
          will run  the risk of your image hitting the edge of 3D space (+-
          7,000 units).   The coordinates of your image will begin to reset
          to +-7,000  and alter  the shape  of your  image.   To enlarge  a
          portion of  your drawing  for a  more detailed view, use the PAN-
          ZOOM command.














                                          41








                                       SELECT

          Summary: Displays  the Select  Menu, where commands enable you to
          select specific Lines for editing.

          Menu(s): MODEL

          Procedure

          QUEST-3D allows  you to  edit each  line in  your drawing.  Since
          lines can  be located  anywhere in 3D space, this command enables
          you to  select the  exact line without the having to be concerned
          about accidently  including lines  that lie  in front, or behind,
          the line you want to edit.  This command can therefore be used at
          any viewpoint location around your drawing.

          The LINE >> command is used to step through your drawing from the
          first line drawn to the last.

          The LINE  << command  starts at  the most recently drawn line and
          steps backwards through the database.

          When you  use  either  method,  the  first  line  found  will  be
          highlighted in  an editing line style - so you can easily see the
          line that  is currently  marked.   The program  pauses for you to
          either select  this line,  or to move to the next.  By pressing a
          key other than ENTER, the next line will be highlighted.

          When the  line you want to edit is highlighted, press ENTER.  The
          selected line  can now  be used  by the  editing commands such as
          changing the  color (CHG  LINE), or  deleting it from the drawing
          with the ERASE LN command.

          Stepping through  the entire  image without  choosing a line will
          not cause  a selection  to take place.  If you want to cancel the
          SELECT commands  once you  have started through your drawing, you
          can press  ESCAPE.   The current  line will  be redrawn,  and  no
          change or selection will have occurred.

          NOTES

          This command  is consistent  with the  registered  user  version.
          However, the selection process is dramatically shortened and made
          easier by  allowing users to indicate a particular object such as
          a door,  window, etc.  to step  through, instead  of  the  entire
          database.   Additionally, this method was designed to allow users
          to select  a single  surface on  any entity  in a  drawing.   The
          editing of  a single  surface on  a sphere  or cylinder,  etc. is
          therefore possible  - a  feature  most  commercial  or  competing
          shareware programs do not allow.







                                          42








                                      TEMPLATE

          Summary: Creates  a new  drawing template  that is used each time
          you start a new drawing.

          Menu(s): MAIN

          Procedure

          A confirmation menu appears with the options: NO and YES. A short
          description of  the command  will also  be displayed.    TEMPLATE
          allows you  to use  one of  your drawing  files for  the  default
          settings used by QUEST-3D when starting a new drawing.  Each time
          you begin  a new drawing, QUEST-3D loads the settings that are in
          the file: QUEST3D.TMP

          TEMPLATE will  save drawing  settings such  as the Drawing Units,
          Scale Factor,  Color Palette, current Drawing Plane and Viewpoint
          degrees to the new template configuration file.

          If you  do not want to create a new template file, then select NO
          and you will return to the Main Menu.  Selecting YES will display
          the drawing  files on  disk, and  prompt you to select one of the
          listed files.   If  you discover  the file you want to use is not
          listed, or  you want to cancel the command, then press ESCAPE and
          you will return to the Main Menu.

          Once you  select YES,  the settings  in the file will be read and
          saved in  the QUEST3D.TMP  file.   Each  time  you  start  a  new
          drawing, the new settings you just transferred will be used.

          Notes

          This command  will not  affect the  drawing file that you use for
          the default settings.






















                                          43








                                     TOP-BOTTOM

          Summary: While using the LINES or MV CURSOR commands, selects the
          drawing plane  that is  associated with the Top or Bottom Side of
          your image. (the X-Y Plane)

          Menu(s): NONE.  Selected only  during a  drawing command,  or  by
          using the F5 KEY.

          Procedure

          While using  the LINES  or MV CURSOR command, you can toggle your
          drawing plane using the "D" key.  The last message below the menu
          indicates your current drawing plane.  Additionally, using the F5
          KEY will also select the Top-Bottom drawing plane automatically.

          The Top-Bottom  drawing plane  will cause any subsequent movement
          of the graphics cursor to move in relation to this plane and your
          viewpoint.  The LEFT and RIGHT cursor keys will move the graphics
          cursor along  the Width  of your image (the X-Axis), while the UP
          and DOWN cursor keys move the graphics cursor along the Length of
          your image (the Y-Axis).

          The current  Z coordinate  value (the location along your image's
          height) will  be locked  in place  as you  draw on the Top-Bottom
          Plane.   To move  along the height of your image, you can use the
          FRONT-BACK or LEFT-RIGHT drawing plane.


          See Also
          FRONT-BACK, LEFT-RIGHT


























                                          44








                                       XYZ VP

          Summary: Used to select your viewpoint around your drawing.

          Menu(s): MODEL, VIEW

          Procedure

          The viewport clears and displays an XYZ Axes Tripod.  The current
          degree of  Rotation and Tip of your viewpoint is displayed on the
          right-hand side  of the screen, as well as the currently set Axes
          Degree increment.

          The Axes  are labeled with a letter that corresponds to the sides
          of your  image, R (right), T (top), F (front).  These labels will
          help you track your viewing position.  Using the cursor keys, you
          can rotate and tip the Axes.

          The rule to remember is:
          You Are Moving Your Viewpoint, Not Your Image.

          Therefore, if  you press  the Right cursor key you will move your
          viewpoint to  the right,  and the  Axes will actually spin to the
          left.   And if  you press  the Up  cursor key, you will move your
          viewpoint higher, and the Axes will actually spin  down.

          When you  have selected  your viewpoint,  press ENTER. Your image
          will be  recalculated and displayed using your new viewpoint.  If
          you wish  to exit  the  command,  and  return  to  your  previous
          viewpoint, press ESCAPE.

          Notes

          The degree  of movement  the Axes rotates and tips, each time you
          press a  cursor key,  can be  set using  the F9 KEY while you are
          using the XYZ VP command.

          If you  have previously  used the  Pan or  Zoom commands, you may
          need to use them again to realign your view.  The drawing rotates
          on the  point 0, 0, 0 and the area you were viewing may have been
          rotated out of view.


          See Also
          F9 KEY, and "KEYBOARD REFERENCE" section.












                                          45








          ERROR MESSAGES


          The following  is a list of error messages used by QUEST-3D. Most
          error messages  were designed  to  correspond  to  similar  error
          messages used  by DOS.   Others  however, are  more  specific  to
          QUEST-3D in order to help track down a specific problem.

          Bad Filename

               The filename  contains characters  that are invalid. Consult
               your DOS manual.  Also, remember not to include the filename
               extension when entering a filename.

          Device unavailable

               An attempt  was made  to access  a device that is either not
               "on-line" or  does  not  exist.    For  example,  setting  a
               directory specification to "C:" when in fact, a hard disk is
               not available in the computer.

          Disk is full, unable to save file

               QUEST-3D attempted  to write a file on a disk which contains
               insufficient free space.  Replace the disk with another that
               contains more free space, and retry the command.

          Disk media error

               An attempt  was made to write or read a file from your disk.
               This error  indicates your  disk may  be defective.  Consult
               your DOS manual for procedures to check your disk.

          Disk not ready

               An attempt  was made to write or read a file from your disk.
               Check to be sure the drive door is closed properly.

          Disk write protect

               An attempt  was made  to  save  a  file  to  your  disk  and
               encountered a  write protect  label, remove it and retry the
               command.

          File not found

               The file  you specified  could not  be  found.    Retry  the
               command and be sure the file is listed in the directory.









                                          46








          File: QUEST3D.CFG not found

               This is  the configuration  file that  contains  information
               about your  hardware configuration.  QUEST-3D must have this
               information in  order to  run properly.  You can create this
               file by using the SAVE SETUP command on the Main Menu.

          File: QUEST3D.TMP not found

               When starting a new drawing, the file: QUEST3D.TMP is loaded
               into memory  and becomes  the initial  drawing template  for
               your new drawing.  QUEST3D.TMP must be kept on the same disk
               as QUEST3D.EXE.

          Incompatible File

               The specified  file is not QUEST-3D Version 3.1 or Version 6
               compatible.

          Internal error 101, 102, 103, 104, 105, 106, or
          Illegal Function Call

               An internal  error in  the QUEST-3D  program  has  occurred.
               Please send  a description  of the  circumstances  that  has
               caused the  error, the  error number,  and the  actions  the
               program took  after it happened.  If you receive an Internal
               error  105   message,  first  check  to  be  sure  you  have
               configured the  program to  the proper  display adapter  and
               monitor configuration  for  your  computer.    Additionally,
               QUEST-3D is designed to support Color Monitors Only.

          Invalid Directory

               The directory  specification is  not correct.   Check  to be
               sure the  proper syntax  is being  used,  see  the  command:
               DIRECTORY.   Also, QUEST-3D  will not create a new directory
               if one does not exist.  Use DOS to create new directories.

          Out of Memory
          Out of String Space

               There is  insufficient  free  RAM.    QUEST-3D  Version  3.1
               requires about  420K.   Check to be sure you do not have too
               many  unnecessary  memory  resident  programs  currently  in
               memory.   Most Screen  Printing Programs  or Screen  Capture
               Programs require  less than  35K, so  you should have enough
               memory to  run QUEST-3D.   If you have other memory resident
               programs in  memory too, it will be necessary to remove some
               of them before running QUEST-3D.

          Would exceed maximum memory

               You have  executed a  command that  would exceed the maximum
               memory.  QUEST-3D allows up to 3000 lines per drawing.



                                          47


```
{% endraw %}

## README.DOC

{% raw %}
```



          Q U E S T - 3 D
          Shareware Release
          Version 3.1

          The users  manual for  QUEST-3D is  comprised of  two text files:
          PART1.DOC and  PART2.DOC.   The manual is 47 pages in length. The
          files are  formatted for output on standard 8 1/2 x 11 paper, (or
          9 1/2  x 11 perforated edged computer paper) with 1 inch left and
          right margins.

          PART1.DOC contains pages 1-23, and PART2.DOC pages 24-47.

          To print  the manual: Align your printer paper to the top edge of
          a new  sheet of  paper.   Use the DOS "PRINT" command, or the DOS
          "COPY" command to send the QUEST-3D Manual files to your printer.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0762

     Volume in drive A has no label
     Directory of A:\

    BUILDING I3D     16220   9-28-89  11:46a
    FBPLANE  I3D      1358   9-28-89  11:41a
    GO       BAT        29  12-29-89   9:48a
    GO       TXT       566  12-29-89   9:47a
    LRPLANE  I3D      1409   9-28-89  11:42a
    OFFICE   I3D     38784   9-28-89  11:44a
    PART1    DOC     45573   9-28-89   2:16p
    PART2    DOC     40520   9-28-89   2:17p
    PLATFORM I3D     11680   9-28-89  11:45a
    PYRAMIDS I3D      3958   9-28-89  11:42a
    QUEST3D  CFG       103   9-28-89  11:48a
    QUEST3D  EXE    162063   9-27-89  12:33p
    QUEST3D  TMP       125   9-28-89  11:47a
    README   DOC       729   9-28-89   2:15p
    STATION  I3D     21199   9-28-89  11:43a
    TBPLANE  I3D      1358   9-28-89  11:44a
    TEMPLE   I3D      5310   9-28-89  11:45a
           17 file(s)     350984 bytes
                            2048 bytes free
