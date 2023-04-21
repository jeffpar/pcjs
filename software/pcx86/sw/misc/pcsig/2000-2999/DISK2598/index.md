---
layout: page
title: "PC-SIG Diskette Library (Disk #2598)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2598/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2598"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CAMPLOT.DOC

{% raw %}
```

    [                 D A N P L O T   A N D   D A N C A M                ]   


                              DOCUMENTATION FILE

                                  CAMPLOT.DOC

                                      FOR

                     DANPLOT.COM v2.5 AND DANCAM.COM v2.5

                               THE TWO COMPANION

                     COMPUTER AIDED MANUFACTURING PROGRAMS

                          FOR USE WITH DANCAD3D v2.5


      Copyright (c) 1989-1990 by Daniel H. Hudgins, All rights reserved.

     Daniel H. Hudgins, 466 Diamond Street, San Francisco, CA 94114, USA


        You may not copy this documentation file or printed copies of this
    documentation file or the DANCAM & DANPLOT program disk (other that to
    make a working copy for your own personal use) without express written
    permission form the author of  this  disk,  i.e.  Daniel  H.  Hudgins.
    Under  no  conditions  is this DANCAM-DANPLOT disk to be sold for more
    than $10.  None of the files of the  DANCAM  &  DANPLOT  disk  may  be
    altered,  modified,  deleted,  or translated on copies of the DANCAM &
    DANPLOT disk that are to be sold,  shared,  or loaned without  express
    written permission from Daniel Hudgins.

        The  latest  version  of DANCAM and DANPLOT come with the disk set
    and manuals that are included with the DANCAD3D v2.5 user outfit.  The
    DANCAD3D user order form is accessed from the opening menu that  comes
    up  when  DANCAD3D v2.5 is run from DOS.  Additional documentation and
    schematics for use with DANCAM  and  DANPLOT  are  supplied  with  the
    DANCAD3D user outfit.

        Please read all disclaimers and all warnings,  notices, and danger
    statements before You use DANCAM or DANPLOT.  Since DANCAM and DANPLOT
    control motors,  and other electro-mechanical  hardware,  the  use  of
    DANCAM  or  DANPLOT can cause serious or fatal personal injury.  It is
    assumed that the user of DANCAM and DANPLOT  understands  the  dangers
    involved  with  working with power driven machinery,  and high voltage
    circuitry,  and will take any and all safety precautions necessary  to
    protect  himself  and others from injury.  Although DANCAM and DANPLOT
    are being used successfully,  DANCAM  and  DANPLOT  may  not  function
    properly  at  all  times and are provided AS IS for you to USE ONLY AT
    YOUR OWN RISK.






                                      [1]

    [           D I S C L A I M E R   A N D   W A R N I N G              ]   



                                   DISCLAIMER

        Please remember that DANCAM can DANPLOT are sold AS IS, please use
    them ONLY AT YOUR OWN RISK.  Daniel H. Hudgins will not be responsible
    or liable for any loss,  damage,  or injury of any kind.  Please  read
    the  disclaimer that is in the DANCAD3D manual since it covers DANPLOT
    and DANCAM as well.  Also read the disclaimer in the file DANCAD3D.DOC
    on the DANCAD3D shareware disks,  as well as this disclaimer  and  the
    warning below.

        This  documentation  for DANCAM and DANPLOT may contain errors and
    or  omissions.  Under  no  circumstances  or  conditions  will  Daniel
    Hudgins be held accountable for any errors or omissions.

        This  documentation  includes suggested connections for hooking up
    devices to your computer's parallel port.  Daniel Hudgins will not and
    shall not be held accountable or liable for any loss  or  damage  that
    might   occur   to  your  computer  to  other  devices.   It  is  your
    responsibility  to  check  and  verify  all  the  appropriateness   of
    connections  to  your computer before turning on the power.  Verifying
    the appropriateness  of  connections  may  require  you  to  read  and
    understand more information than this DANCAM and DANPLOT documentation
    contains.

        Under  no  circumstances  are  DANCAM  or  DANPLOT  to  be used in
    equipment that is  used  for  medical  purposes.  DANCAM  and  DANPLOT
    should  not be used in equipment that could cause injury to persons or
    loss of property if  the  equipment  or  software  failed  to  operate
    properly.

        The  use  of  DANCAM  or  DANPLOT  is disallowed if any laws might
    require Daniel Hudgins to be in any way responsible or liable for  any
    loss  or  injury.  DANCAM  and  DANPLOT  may  not satisfy occupational
    safety laws in your state or country.

        No license to third parties is expressed or implied.  No violation
    of copyrights or patents held by  third  parties  is  implied  by  the
    suggested  use  and connection of DANCAM and DANPLOT.  The user should
    confirm that no copyrights or patents will be violated by his  use  of
    DANCAM or DANPLOT.

        The  use  of  DANCAM  or  DANPLOT indicates full acceptance of all
    disclaimers and an understanding that DANCAM and DANPLOT are  only  to
    be used at the users OWN RISK.

        In  this documentation the what is said about using stepper motors
    will also generally apply to servo motors and any other type of motors
    that might be used.  It is a fact that any component can and should be
    expected to fail,  therefore your safety depends on your not  relaying
    of any particular component to protect you from harm.  To improve your
    safety  from  harm  use  several stages of protection,  so that if any
    single safety measure fails you have several others to back the failed

                                      [2]

    [           D I S C L A I M E R   A N D   W A R N I N G              ]   


    one up.  Always be more careful than you think you need to be!

                                    WARNING

        Power driven and or automated equipment can cause  serious  injury
    or even death.  You must take serious efforts to protect your self and
    anyone  else  near  such  equipment.  Do not place your hands or other
    body parts near power driven equipment without first disconnecting the
    power to the stepper motors (or other type of motors) in  such  a  way
    that  they  cannot harm you or others.  DANPLOT and DANCAM are only to
    be used by people that understand the dangers involved and  have  been
    trained in the necessary safety precautions.  Be aware that failure of
    electrical  connections  or  computer hardware/software related faults
    can cause motors to start unexpectedly.  To help avoid  injury  caused
    by  unexpected  motor  starts you should disconnect the motor power at
    both the AC input of the motor power supply and the DC output  of  the
    motor  power  supply  before  you  expose  yourself  or  others to the
    equipment.  Evaluation of the completeness of any safety  measures  is
    the users (your) responsibility.

        DO  NOT  USE any TSR program that puts a clock on the screen while
    this DANCAM or DANPLOT are in use!  Do not use  any  multitasking,  or
    print  spooling  programs  while  DANCAM  or DANPLOT are in use!  Such
    programs interfere with the computers CPU timing  and  therefore  make
    the  motors not run smoothly.  Do not use the DOS screen dump command,
    e.g.  [Shift] and [PrtSc],  while running DANCAM or DANPLOT since  the
    parallel  port  is  not  connected  to  a  printer  and  the motors or
    auxiliary relays may be accidentally turned on (the computer may  also
    lock up since the screen print command will not be getting the correct
    printer messages!)
























                                      [3]

    [                         A B S T R A C T                            ]   



                                   ABSTRACT

        DANCAM  and  DANPLOT  are two utility programs that you can use to
    automatically manufacture parts.  DANCAM and DANPLOT run on  your  IBM
    (tm)  compatible  personal  computer  and  use your personal computers
    parallel port to send motion control signals to almost any TTL  signal
    compatible  steeper  motor translator/driver module,  as well as using
    the parallel port to drive all the necessary  control  relays  and  to
    read  all of the necessary home,  limit and pause switches.  (n.b.  If
    you have a desire to use servo motors in preference to stepper motors:
    a special closed loop servo motor driver compatible with an update  to
    DANCAM and DANPLOT should be available as a kit or set of plans in the
    spring of 1991, write to me now and ask to be mailed the full low cost
    servo motor driver product information when it is available.)

        Specifically DANCAM and DANPLOT are designed to read drawing files
    made  with  DANCAD3D.COM  v2.5  and control stepper motors movement in
    such a way as to follow the lines drawn with DANCAD3D.  You can attach
    stepper motors to almost any 2 or 3 axis machine tool or plotting type
    device's hand wheel (crank, knob) shafts to automate it.  Additionally
    DANPLOT can be used to drive 4 axis devices where the forth axis  (the
    "C" axis) keeps the cutting edge of a saber saw or knife blade pointed
    into the direction of the tool motion.

        DANCAM  and  DANPLOT  offer  very  high possitional accuracy (when
    properly installed) and can be used for  applications  requiring  fine
    accuracy  to points spaced large distances (the actual accuracy of the
    cutting tool location depends on the quality of  the  device  you  are
    automating,  e.g.  flexing  in the tool post and play in the ways will
    cause the tool to be slightly misplaced,  if the error  is  repeatable
    you  can adjust the tool path file with DANCAD3D to compensate for the
    errors.)

        Because DANCAM and DANPLOT  are  general  purpose  Computer  Aided
    Manufacturing programs you can use them to automate most if not all of
    the  types  of  machine  tools  you  use.  Additionally because of the
    extreme low cost and high repeatable accuracy of  DANCAM  and  DANPLOT
    you  may become interested in automating tasks that are currently done
    with manual hand labor.














                                      [4]

    [    O V E R V I E W   O F   D A N C A M   A N D   D A N P L O T     ]   



                       ABOUT THE DANCAM AND DANPLOT DISK

        The DANCAM and DANPLOT disk has several example  files  on  it  in
    addition  to  the program files.  Please read the file FILES.DOC for a
    description of the  files  on  this  disk.  Before  you  can  use  the
    programs DANCAM or DANPLOT you will need to make a copy of this floppy
    disk and then delete the copy of the *.DOC files.

    EXAMPLE: C>COPY A:*.* B:
             C>DELETE B:*.DOC

        The  need to delete the *.DOC files is to make room for DANCAM and
    DANPLOT  to  save  their  configuration  files  i.e.   DANCAM.CFG  and
    DANPLOT.CFG.  When  you  copy  the configured versions of the programs
    remember to copy the *.CFG file along with the *.COM files.

        If you want to use DANCAM and DANPLOT from a  harddisk  just  copy
    them into an appropriate subdirectory, i.e. if DANCAD3D v2.5 is on the
    harddisk just copy all the files into DANCAD3D subdirectory DC25.

    EXAMPLE: C>COPY A:*.* C:\DC25\*.*

        To  print  out  this  documentation  file  simply  copy it to your
    printer.  If your printer is on the  serial  port  use  the  DOS  mode
    command to configure your serial port before trying to print the file.

    EXAMPLE: C>COPY A:CAMPLOT.DOC PRN
             C>COPY A:CAMPLOT.DOC LPT2
             A>COPY CAMPLOT.DOC COM1


                    OVERVIEW OF HOW DANCAM AND DANPLOT WORK

        DANPLOT  and  DANCAM  are  two  programs  that you can run on your
    computer to manufacture parts.  YOU DO NOT NEED to understand or  have
    any  background in CNC or "G" codes to use DANCAM and DANPLOT.  DANCAM
    and DANPLOT work in a SIMPLE AND DIRECT MANNER,  they simply move  the
    tool along lines and curves THAT YOU DRAW with DANCAD3D.  All you have
    to  do  is  draw  on  DANCAD3D's  drawing screen a series of lines and
    curves in the order you want the tool to trace out those  motions  and
    DANCAM or DANPLOT will FOLLOW THE MOTIONS YOU HAVE DRAWN OUT.

        To  use  DANCAM  and DANPLOT you simply go to a motor supply house
    and purchase some stepper motors and driver modules (instructions  and
    schmatics  for  low  cost  stepper  and servo motor driver modules and
    power supplies you can build are included in the  DANCAD3D  v2.5  user
    outfit.)  You  will  also need a power supply (some driver modules are
    powered from the AC line and do not require a power supply) and  a  36
    pin mating connector for your parallel port cable.  Connect the motors
    to  drive  your  machine's  lead screws with timing belts and pulleys.
    Follow the connections shown in the drawing HOOKUP1.2D that  comes  on
    the DANCAD3D v2.5 shareware disks and connect up the motors,  modules,

                                      [5]

    [    O V E R V I E W   O F   D A N C A M   A N D   D A N P L O T     ]   


    and relays to the mating 36  pin  connector  (note  that  use  of  the
    information  in this file and the HOOKUP drawings is at your own risk,
    Daniel Hudgins is not responsible for any damage or  loss  that  might
    occur.) Connect the mating 36 pin connector to the printer end of your
    parallel  port  printer  cable.  Run  DANCAM and/or DANPLOT and select
    menu option 4.  from the DANCAM  or  DANPLOT  main  menu.  Answer  the
    questions  in  the configuration menu so that the motors will move the
    proper amount when the program is used.  Press [E]scape  to  exit  the
    configuration section.  Try using main menu option 3. to manually move
    the  motors.  Use a dial gage if you have one to confirm that the tool
    is moving the proper amount.  Quit DANCAM or DANPLOT.

        Now that you have an automated machine tool or plotter  hooked  up
    to  your  computer  you  can use DANCAD3D v2.5 to make some ASCII type
    data  files  for  tool  paths.  Run  DANCAD3D  and  select  DRAW  from
    DANCAD3D's main menu.  Draw the tool path.  Save the tool path element
    as  an  ASCII  type  file (if you save the ASCII tool path to a floppy
    drive you can take the drawing from your home or  office  computer  to
    the computer in the shop and read the drawing from the shop computer's
    floppy drive or copy the file to the shop computer's harddisk and read
    (execute)  the  drawing  from  the  shop computer's harddisk (a single
    computer can be hooked up to many machine tools  to  have  many  parts
    made simultaneously, or each machine can have its own computer and the
    tool  path  file  can  be  run  separately and or concurrently on each
    machine tool.)) Quit DANCAD3D.

        Turn the power  supply  for  the  automation  motors  (DANCAM  and
    DANPLOT  can control relays to turn things on,  but for safety reasons
    you should have manual switches on the motor  power.)  Run  DANCAM  or
    DANPLOT,  select menu option 1.,  and enter the name of the tool path,
    i.e.  SOMEFILE.ASC or A:\SOMEFILE.ASC,  to execute (trace out the path
    drawn by moving the tool or work-piece.) DANCAM or DANPLOT should then
    make  your  part  for  you.  When  the tool path is finished DANCAM or
    DANPLOT will return the tool to home position and  be  ready  to  make
    another  part  from the same tool path or another tool path file.  You
    can file the floppy disk copy of the tool path so  that  if  you  ever
    need  more or replacement parts all you have to do is shove the floppy
    disk in the computer and enter the tool  path  name  to  make  another
    identical  part.  If  you have manufacturing stations around the world
    you can send tool paths on floppy disks so that  the  remote  stations
    can  make  up  parts  on  demand  locally and reduce your shipping and
    inventory costs.

        DOS batch  files  can  be  used  to  operate  DANCAM  and  DANPLOT
    automatically  to  make  several parts.  The machine operator DOES NOT
    NEED TO USE ANY OF THE MENUS  in  DANCAD3D,  DANCAM,  and  DANPLOT  to
    manufacture  parts.  The  machine operator does need to understand the
    meaning of some of the messages that come on the screen (such  as  the
    DOS PAUSE command telling him to press ANY-KEY when ready) or at least
    know enough to alert a more knowledgeable operator when something goes
    wrong.  The machine operator should also be told that the power driven
    tool  can  move unexpectedly and hurt him,  therefore THE POWER TO THE
    MOTORS COILS SHOULD ALWAYS BE SWITCHED OFF BEFORE EXPOSING HIMSELF  TO

                                      [6]

    [    O V E R V I E W   O F   D A N C A M   A N D   D A N P L O T     ]   


    THE EQUIPMENT.  Safety switches on the equipment access covers to turn
    off  the  motor  coil  power are advisable to help reduce injuries (to
    maintain possitional accuracy the logic  power  to  the  motor  driver
    modules  should  not  normally be switched off in the middle of a tool
    path execution,  so when hooking up DANCAM and DANPLOT you should  try
    to wire up two separate power switches:  one for the motor coil power,
    and the other for the motor driver module logic power.)

        To summarize, using DANCAM and DANPLOT takes these steps:

                           PHASE ONE: HOOKING IT UP

    1. Hook up automation motors and switches mechanically to machine.
    2. Hoop up electrical connections to modules and switches.
    3. Install DANCAM and DANPLOT to fit your mechanical hook up.
    4. Test the installation to make sure the motors are working.

                       PHASE TWO: COMPUTER AIDED DESIGN

    1. Use DANCAD3D to draw tool paths for the tool paths needed.
    2. Save the tool paths to floppy disks.
    3. Write a  DOS  batch  file  to  control the manufacture of the parts
       needed,  and save the batch  file  to  the  floppy  disk  with  the
       corresponding tool path files.  Set up the AUTOEXEC.BAT on the shop
       computer  so  that  the  user will be prompted to insert the floppy
       disk with the tool path and batch file to  control  the  number  of
       parts  to  make.  For  safety,  the  batch  file  should prompt the
       operator to turn the motor power on  and  off  at  the  appropriate
       points in the manufacturing cycle.

                        PHASE THREE: MACHINE OPERATION

    1. Turn  power  on  to the shop computer.  The  AUTOEXEC.BAT file will
       automatically  prompt  the  operator  to insert the tool path disk.
       The AUTOEXEC.BAT file then runs the batch file  on  the  tool  path
       floppy  disk  (in order to have the AUTOEXEC.BAT file run the batch
       file of the floppy disk you would always use the same filename  for
       the batch file on the floppy disk, e.g. GO.BAT.)
    2. Operator inserts the stock and turns the motor power on.
    3. Operators presses [Any-Key] to start making a part.
    4. Operator is prompted to turn the power off, insert stock,  and turn
       the  power  back  on  (it  is  important that a manual safety power
       switch be used since automatic control of power may not be reliable
       (the manual control may not be  reliable  either,  but  the  manual
       control of the power puts the responsibility for motor power on the
       user/operator).)
    5. The  manufacturing cycle continues under the direction of the batch
       files on the tool path floppy disks (i.e.  GO.BAT  can  prompt  the
       user to insert further floppy disks and run sub-batch files.)

        Phase  three is of course not necessary if you are going to be the
    operator of the machine.  In the case that you are doing all the  work
    yourself  you  would save the data file on your harddisk from DANCAD3D

                                      [7]

    [    O V E R V I E W   O F   D A N C A M   A N D   D A N P L O T     ]   


    and then run DANCAM or DANPLOT, turn on the power for the machine, and
    enter the filename of the tool path you saved to your harddisk.




















































                                      [8]

    [                  P R O G R A M   F E A T U R E S                   ]   



                               PROGRAM FEATURES

        DANCAM and DANPLOT both have several features that make setup  and
    operation simple and relatively easy to accomplish:

    * ALL COMMANDS DISPLAYED ON SCREEN
    * MENU DRIVEN CONFIGURATION IS ADJUSTABLE TO ANY UNITS
    * WORKS WITH TOOL PATHS DRAWN IN METRIC, INCH, OR OTHER UNITS
    * MOTOR TESTING UTILITIES TO CHECK MAXIMUM MOTOR SPEED UNDER LOAD
    * JOG MENU LETS YOU POSITION TOOL MANUALLY AND HAS POSITION READ OUT
    * CAN BE PAUSED WHILE MAKING PARTS FROM KEYBOARD OR SWITCH ON PORT
    * SUPPORTS UP TO FOUR AUXILIARY RELAYS TO CONTROL ANYTHING
    * HAS AUTOMATIC OR MANUAL HOME UP TO HOME SWITCHES
    * LIMIT SWITCHES CAN BE USED TO PROTECT AGAINST OUT OF RANGE MOVEMENT
    * CAN BE OPERATED FROM DOS COMMAND LINE AUTOMATICALLY
    * CAN BE AUTOMATICALLY OPERATED FROM DOS BATCH FILES
    * USES USER ACCESSIBLE DANCAD3D ASCII DATA FILE TYPE
    * OVERALL SCALING FACTOR TO ADJUST PART SIZE
    * ADJUSTS TO ANY PITCH LEAD SCREWS OR DRIVE CHAIN
    * HIGH ACCURACY OVER LARGE DISTANCES OF TOOL TRAVEL
    * WORKS WITH ALL TYPES OF STEPPER MOTORS INCLUDING MICRO STEPPERS
    * FEED RATES CAN BE INSTALLED FROM RAPID MOVEMENT TO VERY SLOW
    * FEED RATE CHANGE, AUXILIARY RELAY TOGGLE, AND PAUSE CAN BE
      CONTROLLED AUTOMATICALLY FROM LINE COLORS IN THE TOOL PATH FILE
    * INSTALLABLE DELAY AFTER RELAY TOGGLE LETS EQUIPMENT SETTLE DOWN
    * AUTOMATIC BACKLASH COMPENSATION WHEN NEEDED
    * DANCAM IS FULLY THREE DIMENSIONAL AND CAN MAKE ANY THREE AXIS SHAPE
    * DANCAM AND DANPLOT WILL RUN ON ALMOST ANY LOW COST PC COMPATIBLE
    * LOW COST SIMPLE CONNECTION TO PARALLEL PORT, LPT1, LPT2, OR LPT3

        When  run  on a fast computer DANCAM and DANPLOT can produce about
    2000 step pulses per second which would run stepper  motors  with  200
    steps  per  revolution  at  a  speed  of  about 600 RPM.  However most
    stepper motors have a reliable top speed less  than  200  RPM  so  the
    motors  and  not  DANCAM  or  DANPLOT  usually  limit  the upper speed
    obtainable.

















                                      [9]

    [                      A P P L I C A T I O N S                       ]   



                      APPLICATIONS FOR DANCAM AND DANPLOT

        DANCAM and DANPLOT are similar programs,  but each  one  has  been
    optimized   for   different  applications.   DANCAM  is  designed  for
    applications that require the tool or actuator to move between  points
    at any location in three dimensions.  DANPLOT is optimized for working
    on flat material, e.g. sheet or plate, and will automatically lift the
    tool  or  turn off the cutting flame or beam before moving to the next
    point in the drawing file.  In other words DANCAM  is  used  used  for
    applications  like  3D  milling,  and DANPLOT is used for plotter like
    work such as engraving and torch cutting.

        Both DANPLOT and DANCAM can draw circles and curves of  any  type.
    DANCAM  can  manufacture any part that can be produced on a three axis
    machine tool.  The production of circles and  curves  takes  place  in
    DANCAD3D  as  part of the preparation in the drawing of the tool path.
    For complex contoured surfaces the tool path must define  points  that
    are  more  closely  spaced  than for the tool paths of parts than have
    flat surfaces.  In the event that the tool path is to complex  to  fit
    entirely  in DANCAD3D's workspace at once,  the required tool path can
    be drawn in sections,  and chained together for  use  with  DANCAM  or
    DANPLOT.  DANCAM and DANPLOT can read tool path files of any length.

                      APPLICATIONS DANCAM CAN BE USED FOR:

                              MAIN USES OF DANCAM:

    * THREE AXIS FULLY THREE DIMENSIONAL VERTICAL MILLING
    * OPERATION OF LATHES
    * CUTTING FOAM AND OTHER MATERIALS WITH HOT WIRES
    * FLAME CUTTING WHERE THE TORCH HEIGHT NEEDS TO BE ADJUSTED
    * LASER CUTTING WHERE THE LASER HEIGHT NEEDS TO BE ADJUSTED
    * DRILLING HOLES TO VARYING DEPTHS

                     ADDITIONAL POSSIBLE USES FOR DANCAM:

    * SPRAY APPLICATION WHERE SPRAYER MOVES IN THREE DIMENSIONS
    * GLUE APPLICATION WHERE APPLICATOR MOVES IN THREE DIMENSIONS
    * WELDING, SPOT OR ARC
    * PARTS INSERTION, SCREW INSERTION, OR NAILING
    * AUTOMATED WAREHOUSE LOADING AND UNLOADING
    * THREE AXIS MOTION CONTROL PHOTOGRAPHY
    * AUTOMATION OF A MOTION PICTURE ANIMATION STAND

        In  addition  to  the  linear  three axis applications noted above
    DANCAM can be used to have one axis  or  more  move  in  a  non-linear
    manner.  For  instance  the X axis could control a rotating table,  so
    when the drawing for the motion of the X axis is drawn  with  DANCAD3D
    the person drawing the tool path would use units of arc (i.e. 0 to 360
    degrees)  rather  than  units  of distance (e.g.  0.001 inch as +/- 10
    inches.)


                                      [10]

    [                      A P P L I C A T I O N S                       ]   


              THREE AXIS APPLICATIONS WHERE DANPLOT CAN BE USED:

    * BUILDING A LARGE PEN PLOTTER TO PLOT DRAWINGS FULL SIZE
    * ENGRAVING SCALES AND LETTERING
    * CUTTING FABRIC OR LEATHER FROM A PATTERN
    * DRILLING PRINTED CIRCUIT BOARDS
    * DRILLING HOLES TO CONSTANT DEPTH, SLOW DOWN & FAST UP MOTION OPTION
    * FLAME CUTTING WITH AUTOMATIC FLAME CONTROL ON THE Z AXIS
    * LASER CUTTING AUTOMATIC LASER ON AND OFF CONTROL ON THE Z AXIS
    * AUTOMATED ROUTING OF WOOD FOR CABINETS AND STAIR RUNNERS
    * STAMPING OR PUNCHING OF SHEET METAL OR OTHER MATERIAL
    * GLUE, GREASE, POTTING COMPOUND, OR OIL APPLICATION

        With DANPLOT the third (Z) axis can be used in several  ways:  you
    can  control  a  stepper  motor,  you can control a relay,  or you can
    control a solenoid.  The normal use of the stepper  motor  for  the  Z
    axis  would be to raise and lower the tool,  such that the tool is not
    in contact with the  work-piece  when  the  tool  moves  to  the  next
    starting point if the line segments drawing in the file being executed
    to  not  touch.  Additionally  the Z axis stepper motor can be used to
    open or close a valve or rheostat.  A relay on the  Z  axis  direction
    control line can be used to turn a laser or other electrical device on
    or  off.  A solenoid triggered by the Z axis could be used to stamp or
    punch the sheet material.

               FOUR AXIS APPLICATIONS WHERE DANPLOT CAN BE USED:

    * KNIFE CUTTING OF SIGNS OUT OF VINYL
    * SAW CUTTING OF WOOD WITH A SABER, BAND OR SCROLL SAW
    * CUTTING FABRIC OR LEATHER FROM A PATTERN
    * BROACHING OF KEYWAYS, GROVES, OR GEAR TEETH
    * AUTOMATING NIBBLING TOOLS

        The forth or "C" axis (the c axis is rotation around the  Z  axis,
    such  that  the cutting edge of the tool is parallel to the Z axis) in
    DANPLOT will rotate the cutting edge of a knife or recriprecating  saw
    so  the cutting edge always faces into the direction of the motion the
    tool as the tool moves through the  work-piece.  A  tolerance  on  how
    large  a  C axis angle change is required before the tool will lift is
    available to speed the cutting of  curves  and  circles  (normally  in
    knife  cutting no harm comes if the knife rotates in the work-piece as
    circles are cut out,  but you want (and DANPLOT will perform)  a  tool
    removal,  tool  rotation,  and tool insertion when large angle changes
    (such as at a 90 degree corner) need to be made.










                                      [11]

    [                G E N E R A L   I N F O R M A T I O N               ]   



                              GENERAL INFORMATION

        To use DANPLOT and DANCAM you will need to create a text file that
    contains information on the end points of line segments, such that the
    line segments define the path you want your tool (or work-piece as the
    motion between the tool and work-piece is relative)  to  move  through
    space.  The  easiest  way to create the necessary file of line segment
    data is to use DANCAD3D v2.5 to draw the line segments  in  the  order
    you  want  them  and  in the direction you want the motion to proceed.
    The necessary line segment data file can also  be  made  with  a  text
    editor  or  by  a  data file conversion program (to convert some other
    data filetype such as DXF  into  DANCAD3D  v2.5  *.ASC  file  format.)
    Information  about the DANCAD3D ASCII data file format is given in the
    DANCAD3D technical reference manual,  but is not needed to use  DANCAM
    and  DANPLOT since DANCAD3D will create the proper file format for you
    automatically.

        DANPLOT and DANCAM are very similar programs but  have  each  have
    special  features  to  make  them work better for their intended task.
    When  you  install  DANCAM  and  DANPLOT  by  using  the  installation
    utilities  accessed  from  DANCAM's  or DANPLOT's main menu you should
    keep in mind the different applications that the programs are designed
    for.

        DANPLOT is designed for use for working on flat or sheet material.
    The Z axis for DANPLOT has two states,  up or  on  and  down  or  off.
    DANPLOT  can  be  used  to  build  large  plotters  for plotting large
    drawings.  A "C" axis motor can  be  used  with  its  rotational  axis
    parallel to the the Z axis in order to point the cutting tool into the
    direction of the motion of the cut (i.e. for use with knifes and saber
    saws.)  The Z (pen) axis motor can be replaced with a relay to control
    (toggle) a laser or torch automatically (the Z axis direction  pin  on
    the  port  connector  indicates  the state,  on or off.) Only the line
    segments that will appear on the work-piece need to  be  in  the  data
    file  since DANPLOT will automatically lift the tool clear (turns off)
    of the work-piece when moving between the drawn line segments and when
    the tool path is done.  Tool paths  for  use  with  DANPLOT  have  all
    points in the Z = 0 plane.

        DANCAM  is designed for use for working on 3D parts where the tool
    moves in all three dimensions.  The Z axis in DANCAM is equal  to  and
    interchangeable  with to the X axis and Y axis.  DANCAM is also useful
    for 2 axis work where the full motion of the tool will be  drawn  out.
    With DANCAM it is best to draw all motions out fully, including a safe
    path  to the start of cutting,  controlled feed rate for the cuts (the
    change in feed rate is accomplished by changing the line color in  the
    tool  path  drawing),  and  a safe path from the final cut back to the
    home position (you can draw every other line segment in the tool  path
    for  DANCAM  to  reduce  the total number of line segments in the data
    file,  if you keep in mind that DANCAM will always take  the  shortest
    path through three dimensions to the next first point of the next line
    segment.)

                                      [12]

    [                G E N E R A L   I N F O R M A T I O N               ]   



        When  making a tool path files for use with DANCAM or DANPLOT keep
    the differences between the way the programs carry out  the  execution
    of line segments in the drawing file in mind.

        DANPLOT  will  read  two  types  of file (ASCII and Plotter driver
    output) made with DANCAD3D.  You can draw a tool path as a set of line
    segments or as a set of dots (holes to be drilled can be indicated  by
    dots)  with  DANCAD3D  without  connecting the dots since DANPLOT will
    automatically lift the tool before moving  to  the  next  point  (i.e.
    DANPLOT works like a pen plotter, such that the pen will automatically
    lift  and  move  to  the  next  line  segment without drawing unwanted
    connecting line segments that  were  not  in  the  DRAWING  made  with
    DANCAD3D.)  DANPLOT  can also read special plotter driver output files
    made in DANCAD3D with the DANPLOT.PLT plotter driver that  accompanies
    DANPLOT  on  this  disk.  The plotter driver DANPLOT.PLT would be used
    for applications  such  as  engraving  that  require  DANCAD3D's  line
    thickness  attribute  to be carried accurately to the finished result.
    For  all  applications  other  than  engraving  use  DANCAD3D's  ASCII
    filetype for tool paths that will be used with DANPLOT.

        DANCAM works like DANPLOT except the movement of the tool is fully
    3D,  with  all  3  axis  motors being simultaneously controlled by the
    lines you draw with DANCAD3D.  DANCAM only  reads  the  DANCAD3D  v2.5
    ASCII file format.

        DANCAM  is  useful for most 3 axis tasks such as vertical milling.
    You do however need to draw the tool path fully as a continuous series
    of line segments.  If you skip a line segment  DANCAM  will  take  the
    shortest  path  to  the  next  given  point  or  to  the home position
    currently installed in DANCAM's configuration menu if there is no next
    point to go to.  So when you use DANCAM you should always draw all the
    movements you want the tool to make,  including the safe path clear of
    the  work-piece  when  done (in DANPLOT to tool automatically lifts to
    clear  the  work-piece  when  done  and  goes  home,  DANCAM  can  not
    automatically  know what a safe return path is since dovetail mills or
    other odd shape cutters may be in use (DANCAM will take  the  shortest
    path  from  the  last point drawn to home when done,  so make sure the
    last point in the tool path is clear of the work-piece!).)


                         HOW TO USE DANCAM AND DANPLOT

        In general the use of DANCAM and DANPLOT follows these steps:

    1. Build  or buy a machine to automate.  Generally you will  want  the
       lead screws that have about 5 threads per inch so that the  stepper
       motors  200  or 400 steps per shaft rotation will give a resolution
       of 0.001 or  0.0005  of  an  inch.  Chain  or  cable  drive  is  an
       excellent choice for drives that require less resolution and faster
       feed rates.  Always try to minimize inertia in components that must
       be driven, i.e. use small radius aluminum pulleys.


                                      [13]

    [                G E N E R A L   I N F O R M A T I O N               ]   


    2. Install stepper motors  on  your  machine.   Use  timing  belts  or
       flexible  shaft  couplings between the motor shafts and lead screws
       to reduce noise and lost steps caused by  vibration  in  the  motor
       coupling.  Stepper  motors  get  hot  (80C  to 85C) in operation so
       proper mounting would allow the conduction of heat from  the  motor
       and circulation of cooling air.  Used or surplus stepper motors can
       be  purchased  for  a fraction of what new motors cost.  In general
       stepper motors should have a rated holding torque that is at  least
       FOUR  TIMES  THE  TORQUE that will be required at the operating RPM
       (the torque of stepper motors falls off as the motor turns  faster,
       so  that  a motor rated at 500 inch/ounce holding torque might only
       have 200 inch/ounce at 60 RPM,  and only 100 inch/ounce at 120 RPM,
       with  the  torque  falling  completely  to  zero at 180 RPM.) Using
       stepper motors that are two small, and or running the motors faster
       than they can reliable go is the major  cause  of  problems  people
       have  with stepper motors.  Also stepper motors need to be operated
       at 4 to 6 times their rated voltage to give satisfactory results (a
       constant current stepper translator module or resistors  in  series
       with  the  motor  windings  are  required to prevent the motor from
       overheating when operated at high voltages, i.e. 48 to 96 volts.)

    3. Buy  or build the stepper motor translator modules and  motor power
       supplies (instructions for building the  electronics  required  are
       included  in the DANCAD3D v2.5 technical reference manual.) Stepper
       motors generally operate with two coils (phases) on so the  current
       draw is double the rated current, e.g. three motors rated at 2 Amps
       will require a power supply that can deliver at least 12 amps.  The
       stepper  driver translator modules you will need are available form
       your local  motor  distributor.  Most  stepper  motor  manufactures
       supply  driver  modules  optimized  for  their own brand of motors.
       Surplus or used stepper motors can be purchased for a  fraction  of
       what new motors cost,  e.g.  500 inch ounce motors can be found for
       less than $75.  If you want to use solid state  relays  to  control
       the  spindle  of  your  machine or other auxiliary device buy solid
       state relays that are rated for  3  volts  DC  or  less  since  the
       parallel  port  cannot  supply  more than 3 volts (if more power is
       needed than the parallel port can supply a TTL buffer chip such  as
       the 74H07 and pull-up resistors (approximately 500 ohm) can be used
       amplify  the signal.) You can build your own stepper driver modules
       to drive three five amp motors for about $100 or less depending  on
       how fancy you want to get.  Ready made translator modules cost from
       $50 to $600 per axis depending on the power and speed required.

    4. Use   the  diagram  HOOKUP1.2D  on  the  DANCAD3D v2.5 shareware or
       program  disks  to  connect  the  stepper  motor  translator driver
       modules to your computers parallel port.  If four auxiliary  relays
       are  to be used a 5 volt 500ma power supply (about a $10 item) will
       be required for the pull-up bias,  otherwise the auxiliary C and  D
       outputs can be used to pull-up the home and limit switch inputs (X,
       Y,  and  Z  home  switch  inputs  being  pulled  up through 10K ohm
       resistors to auxiliary C output,  and the pause/limit  input  being
       pulled up through a 5K ohm resister to the auxiliary D output pin.)


                                      [14]

    [                G E N E R A L   I N F O R M A T I O N               ]   


    5. Run   DANCAM  and  DANPLOT  and  install  the  values for speed and
       resolution  that correspond to your machine.  Test the motors under
       load to make sure they can keep up with  the  movements  they  will
       need  to  make.  If the motors "louse steps" (that is slip and fail
       to rotate to the proper position) under load  use  a  larger  Pulse
       With  Factor  (p.w.f.)  to give the motor time to complete one step
       before another is requested (if a stepper motor louses steppes  the
       rotor will no longer have the proper rotational position (until the
       motors  are  homed  again which is a good reason for installing the
       home switches.))

    6. Run DANCAD3D,   draw a tool path, and save the tool path drawing as
       an ASCII data file (or a plotter driver output file if you need the
       line width feature for DANPLOT.)

    7. Run  DANCAM or DANPLOT,  select menu option 1,  and enter the  file
       name of the ASCII (*.ASC)  tool  path  file  you  just  saved  from
       DANCAD3D.  If  you  did  the  installation properly your first part
       should come out as designed.  If  the  first  part  is  not  proper
       adjust the installation and or the tool path drawing and try again.
       Keep  in  mind that DANCAM and DANPLOT can run from the DOS command
       line and therefore from DOS batch files.  Operators of equipment do
       not need to use any of DANCAM or  DANPLOT's  menus  since  you  can
       write  a  batch  file  to  read  the  data  file from a floppy disk
       automatically.





























                                      [15]

    [   D O S   C O M M A N D   L I N E   A N D   B A T C H   F I L E S  ]   



       EXAMPLE OF HOW TO RUN DANCAM OR DANPLOT FROM THE DOS COMMAND LINE

        To operate DANCAM or DANPLOT from  the  DOS  command  line  simply
    enter  DANCAM  or DANPLOT followed by a space and then the name of the
    data file to be plotted and then followed by  another  space  and  the
    number  1  (or  1  or  2  for  DANPLOT.) The number following the data
    filename is equilevent to the menu  option  number  from  DANCAM's  or
    DANPLOT's main menu.

    EXAMPLE: C>DANCAM A:DATAFILE.ASC 1
             C>DANPLOT A:DATAFILE.ASC 1

        If you want to have one of the other menu options come up from the
    DOS command line you can use the dummy filename NUL.

    EXAMPLE: C>DANCAM NUL 3
             C>DANPLOT NUL 3


         EXAMPLE OF BATCH FILES THAT AUTOMATICALLY RUN DANCAM OR DANPLOT

        The following DOS batch file will make parts from data files saved
    on  floppy  disks.  Note  that all the data files should have the same
    name (when you save the DOS batch  file  you  should  always  use  the
    filename extension *.BAT.)

    EXAMPLE: :START
             ECHO OFF
             CLS
             ECHO PUT TOOL PATH DISK IN DRIVE A:
             PAUSE
             DANCAM A:DATAFILE.ASC 1
             GOTO :START

        Since  the  floppy drives are somewhat slow you can get faster and
    smoother plots by coping the data file to a harddisk or RAM disk  (the
    delay for the floppy drive to come up to speed when data is being read
    will  cause  the  cutter to idle for a moment periodically,  a problem
    that can be avoided by reading the data file from a  harddisk  or  RAM
    disk.)

    EXAMPLE: :START
             ECHO OFF
             CLS
             ECHO PUT TOOL PATH DISK IN DRIVE A:
             PAUSE
             COPY A:DATAFILE C:\*.*
             DANCAM C:DATAFILE.ASC 1
             GOTO :START

        You  can  have DANCAM automatically run after you quit DANCAD3D by
    using a DOS batch file.

                                      [16]

    [   D O S   C O M M A N D   L I N E   A N D   B A T C H   F I L E S  ]   



    EXAMPLE: :START
             CLS
             DANCAD3D
             DANCAM
             GOTO :START
















































                                      [17]

    [              H A R D W A R E   R E Q U I R E M E N T S             ]   



                             HARDWARE REQUIREMENTS

        Although DANCAD3D requires a fast computer and  harddisk,  DANPLOT
    and DANCAM can be used with a less expensive system.  One advantage of
    using  a  less  expensive  computer  in  the  shop  with the automated
    equipment is that if it is damaged you will not have to spend much  to
    repair  it.  In applications requiring higher motor shaft speeds (i.e.
    greater than about 60 RPM) a 80286 replacement mother board can be put
    in an XT type case (some replacement 80286 boards only cost about $140
    more than an 8088 mother board.) Since a 10MHz 80286 XT size AT mother
    board can run as much as 8 times as fast as a 4.7MHz  8088  XT  mother
    board it is probably very much worth the slight added cost to use a XT
    size AT mother board for DANCAM or DANPLOT.

        DANCAM  and DANPLOT will work on almost any IBM (tm) compatible PC
    that has one floppy drive and a IBM (tm) PC  standard  parallel  port.
    No  special  hardware  is  required  for  the computer.  Many standard
    stepper motor driver modules and solid state relays can  be  connected
    directly to the parallel port.  The signals from the parallel port can
    be  boosted  with  inexpensive parts to drive almost any other stepper
    driver module or relay that requires more power than the parallel port
    can supply.

    COMPUTER: 100% IBM PC-XT or AT compatible.

    PORTS:    One Parallel Port is required, i.e. LPT1, LPT2, or LPT3.

    VIDEO:    Any 80 column by 25 line video text display.

    MEMORY:   128KB RAM DOS system memory, 96KB or more free.

    DRIVES:   1 floppy disk drive.  Reading the tool path data file from a
              RAM disk can  avoid  periodic  short  interruptions  due  to
              blocks of data being loaded from the data file.  If you have
              640KB  on the computer you are using for DANCAM or DANPLOT a
              RAM disk program to make a 448KB  RAM  disk  from  your  DOS
              system  memory  and have enough left over to run DANPLOT and
              DANCAM (you would copy the ASCII tool path  data  file  into
              the RAM disk,  and have DANPLOT of DANCAM read the tool path
              from the RAM disk drive.)

    CABLES:   You will  need a parallel port cable.  If you have a printer
              connected to your  computer  you  can  use  that  cable.  To
              connect  the wires to the translator modules you will need a
              centronics 36 pin connector that will mate with your printer
              cable.  You  can  then  solder  wires  onto  the  centronics
              connector rather than your printer cable and that will allow
              you  to  disconnect  the  printer  cable  from the centeronx
              connector at any time to  use  the  printer  cable  on  your
              printer.  If  you  buy a printer switch box make sure all of
              the needed pins are  connected  since  some  cheaper  switch
              boxes may not connect all of the pins.

                                      [18]

    [              H A R D W A R E   R E Q U I R E M E N T S             ]   



              The  wire going between the parallel port pins and the input
              pins  of  the  translator  modules   should   be   shielded.
              Microphone  or  video  coaxial  cable  can  be used with the
              shields of the two cables being tied to  common  (one  cable
              for  the  step  signal,  and  one  cable  for  the direction
              signal.) Electro-Magnetic noise can be a problem because  of
              a  high current that flows through the wires that connect to
              the motor power supply and to the motors themselves.  Always
              keep the step and direction cables  as  separated  and  away
              from  the  motor  coil wires as you can.  Putting a 2.2K ohm
              pull up resistor from the step and direction inputs  of  the
              translator  module  to a positive five volt regulated supply
              can help reduce the input impedance of the translator module
              and therefore the voltage of induced electro-magnetic  noise
              (opto isolators, and ceramic bypass capacitors, i.e.  100 pf
              to common,  (LC or RC low pass filters)  on  the  inputs  of
              translator modules can also help reduce incorrect triggering
              of  the  translator  modules since they all reduce the input
              impedance.)

              Wire for connecting the motors should be stranded and  large
              enough to handle the current required,  i.e.  14 to 16 gage.
              The wires for the switches can  be  rather  thin  (22  gage)
              since very little current flows through the switches.

    MODULES:  Stepper motor translator driver modules for stepper  motors.
              Hundreds  of different driver modules are available to drive
              different types of stepper motors.  You will want TTL signal
              compatible modules that have MOTOR STEP  (pulse)  and  motor
              DIRECTION  (cw/ccw) inputs.  Since steeper motors need to be
              operated at voltages above  what  they  are  rated  for  the
              stepper  motor  translator  you  purchase  should offer some
              constant current or current  cutback  feature  to  keep  the
              motors  from  burning  up  when  they  stop turning (stepper
              motors get hottest when run  slowly  or  are  stopped.)  Two
              types  of  translator  module that give good performance are
              Bipolar chopper and Bilevel  Bipolar.  Bipolar  drives  give
              more  torque  at medium speeds than Unipolar driver modules.
              You should check that the stepper motors you  are  going  to
              use  are  compatible  with  the driver type you want to use.
              Regardless or the type of  module  selected  the  top  motor
              speed will be less than its best if the motor supply voltage
              is  less  than  five times the rated motor voltage,  e.g.  a
              motor rated at 5 volts will run well with a 25 volt  supply,
              but  a 25 volt motor will need a supply voltage of 125 volts
              to run well.  The maximum rated voltage of the motor  driver
              module  of  course  limits  the  supply voltage you can use.
              Modules also have a rated range of motor coil  current  they
              can  handle  (the  coil  current for the motors should never
              exceed the rated current!)

    RELAYS:   Solid  state  relays  such  as  the  HAMLIN  model  7521D or

                                      [19]

    [              H A R D W A R E   R E Q U I R E M E N T S             ]   


              equivalent can be used to control auxiliary devices directly
              form  the  parallel  port.  The  solid  state  relay  should
              operate  from  a  3 volt or smaller signal.  Solenoid relays
              can be controlled from  the  parallel  port  if  you  use  a
              translator  and  DC  power  supply (instructions for circuit
              details  of  such  advanced  wiring  are  in  the   DANCAD3D
              technical manual.)

    POWER:    External  power  supply.   You  will  need  a  power  supply
              powerful  enough  to  drive  all  the stepper motors you are
              using.  For medium duty tasks this would be 20 to 50 amps at
              35 to 96 volts (stepper motors are run at voltages  4  to  6
              times their rated voltage, so if you have motors rated at 10
              volts you would want to have at least a 50 volt power supply
              (how  high  the  power  supply  voltage  can be is of course
              restricted by the maximum voltage of the translator  modules
              you will be using.)) To determine the total current required
              figure  that  two  coils  will  be  drawing  current in each
              stepper motor so if your motors are rated at 1 amp per  coil
              and you have 3 motors you will need 6 amps plus another 4 to
              6 amps for "headroom" due to the dynamic nature of the motor
              load.  To  assure  that  the  motors can get all the current
              they need while stepping I recommend that you put a 20000 mf
              capacitor across the power supply  input  of  each  of  your
              motor driver modules.  A 5 volt 500 ma power supply may also
              be required to bias any pull-up resistors required.

    SWITCHES: Three Normally Open (N.O.) micro switches for home switches.
              Six   Normally   Closed  (N.C.)  micro  switches  for  limit
              switches.  One Normally  Closed  (N.C.)  toggle  switch  for
              pause  switch.  One  Normally  Open  (N.O.)  push button for
              bypass button.

    RESISTORS: Five  2.2K  ohm 1/4 watt,  for pull-up of the switch inputs
              (pull-up resistors connect from TTL  logic  IC's  inputs  or
              outputs  to  a  plus five volt power supply (the common from
              the five volt power supply would or course  connect  to  the
              logic common or ground.)) Since the switches connect between
              the  input  pins of the parallel port and common the pull-up
              resistors are needed to  insure  that  the  input  pins  are
              always  at  logic  high (logic high is 2.8 to 5.0 volts.) If
              you do not want to use a special 5 volt supply for the limit
              and home  switch  inputs  you  can  use  10K  ohm  1/4  watt
              resistors  from  the input pins to auxiliary outputs C and D
              (of course auxiliary C and D cannot then be used for  relays
              since they will need to be logic high all the time.)

    HARDWARE: To mount the motors you will need flexible  shaft  couplings
              or  timing  belts  and  pulleys.  It  is  important that the
              coupling used on the stepper motor have about 0.5 degree  of
              give  (elasticity)  so  that  the  motor can step easily and
              smoothly and without excessive vibration.


                                      [20]

    [                 H O O K   U P   C O N E C T I O N S                ]   



                    HOOK UP CONNECTIONS TO THE PARALLEL PORT

        The complete schmatic for the basic DANCAM and DANPLOT hook up  is
    provided  in  drawing  file  HOOKUP1.2D on the DANCAD3D v2.5 shareware
    program disks.  Printing out the HOOKUP1  drawing  will  make  reading
    this  section  much more understandable.  Additional schmatic diagrams
    are included in the DANCAD3D outfit.  This following information gives
    all the basic connections for using DANCAM and DANPLOT.

        DANPLOT and DANCAM use the same basic connections to the  pins  of
    the parallel port.  The basic connections to the 36 pin printer end of
    the Centronics parallel port cable are:

                                Pin No.

                                 36 18
                                 35 17
                                 34 16
                 TIE TO COMMON - 33 15
               AUXILIARY INPUT - 32 14
    AUXILIARY RELAY "D" OUTPUT - 31 13 - Z AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 30 12 - Y AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 29 11 - X AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 28 10 - LIMIT & PAUSE SWITCH INPUT
                 TIE TO COMMON - 27 09 - AUXILIARY RELAY "B" OUTPUT
                 TIE TO COMMON - 26 08 - Z AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 25 07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 24 06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 23 05 - AUXILIARY RELAY "A" OUTPUT
                 TIE TO COMMON - 22 04 - Z AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 21 03 - Y AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 20 02 - X AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 19 01 - AUXILIARY RELAY "C" OUTPUT

        All  of  the  input pins must be "pulled up" to logic high through
    2.2K ohm 1/4 watt resistors to a +5 volt regulated power  supply  (you
    should  be  able  to find a +5 volt 500 milliamp power supply for less
    than $10 (you can use three flashlight 1.5v dry cells in series to get
    about 4.5 volts,  but NEVER use more than  5  volts  or  less  than  3
    volts.))  ALWAYS  check that the MINUS (-) end of the five volt supply
    connects to the COMMON point,  since reversed connections will  damage
    your  parallel port and possibly other parts of your computer.  If you
    do not want to bother with a +5 volt power supply and do not  need  to
    use  the  auxiliary  outputs  "C"  and  "D",  you  can usually use the
    auxiliary outputs "C" and "D" to pull up the switch inputs,  as  shown
    here:







                                      [21]

    [                 H O O K   U P   C O N E C T I O N S                ]   


                                Pin No.

                                 36 18
                                 35 17
                                 34 16
                 TIE TO COMMON - 33 15
               AUXILIARY INPUT - 32 14
       PULL UP FOR PIN 10 & 32 - 31 13 - Z AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 30 12 - Y AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 29 11 - X AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 28 10 - LIMIT & PAUSE SWITCH INPUT
                 TIE TO COMMON - 27 09 - AUXILIARY RELAY "B" OUTPUT
                 TIE TO COMMON - 26 08 - Z AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 25 07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 24 06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 23 05 - AUXILIARY RELAY "A" OUTPUT
                 TIE TO COMMON - 22 04 - Z AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 21 03 - Y AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 20 02 - X AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 19 01 - PULL UP FOR PINS: 11, 12, & 13

        The  value  of  the pull resistor will need to be increased to 10K
    ohm when auxiliary "C" and "D" are used as the pull up source to avoid
    over loading the parallel port.  When the auxiliary input on pin 32 is
    not used a 4.7K ohm resistor can be connected between pin 31  and  pin
    10 in place of a 10K ohm resistor.

        The home switches are normally open (N.O.) and connect between the
    home  switch  input pins and the common (ground) point.  The six limit
    switches,  and pause  switch,  are  normally  closed  (N.C.)  and  are
    connected  in  series between pin 10 and the common point.  The bypass
    push button for  the  limit  switches  is  normally  open  (N.O.)  and
    connects  from  pin  10  to  the  common  point.  If  one of the limit
    switches opens (due to out-of-range travel, the motors will stop,  and
    an  error  message  will  come  up  on  the computer screen) press the
    [Control] and [X] keys on the keyboard and then press the limit switch
    bypass button you  wired  from  pin  10  to  the  common  point.  When
    installing  the  limit  switches at the home end of the travel be sure
    that the limit switches become open several motor steps AFTER the home
    switches have closed (otherwise the motors will stop before  the  home
    position is reached!) The WINDOW command in DANCAD3D should be used to
    clip  the  tool path before you save the tool path to an ASCII file to
    avoid out-of-range motions.

        DANPLOT can be hooked up in  some  additional  configurations.  In
    order  to  use  the C axis the auxiliary relay "A" and "B" output pins
    are used for the C axis step and direction signals,  and the auxiliary
    input is used for the C axis home switch:






                                      [22]

    [                 H O O K   U P   C O N E C T I O N S                ]   


                                Pin No.

                                 36 18
                                 35 17
                                 34 16
                 TIE TO COMMON - 33 15
      C AXIS HOME SWITCH INPUT - 32 14
    AUXILIARY RELAY "D" OUTPUT - 31 13 - Z AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 30 12 - Y AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 29 11 - X AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 28 10 - LIMIT & PAUSE SWITCH INPUT
                 TIE TO COMMON - 27 09 - C AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 26 08 - Z AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 25 07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 24 06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 23 05 - C AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 22 04 - Z AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 21 03 - Y AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 20 02 - X AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 19 01 - AUXILIARY RELAY "C" OUTPUT

        You still have auxiliary outputs "C" and "D" available if you need
    to  have  control  relays  and  use  a  +5 volt supply for the pull up
    resistors on the switch inputs.  So the  C  axis  above  hook  up  can
    connect to four motors and two relays.

        Another  option  when  hooking  up  DANPLOT  is  to use the Z axis
    direction bit to control a relay or solenoid  rather  than  a  stepper
    motor.  This  option  gives you the possibility of two motors and five
    relays:

                                Pin No.

                                 36 18
                                 35 17
                                 34 16
                 TIE TO COMMON - 33 15
               AUXILIARY INPUT - 32 14
    AUXILIARY RELAY "D" OUTPUT - 31 13 - Z AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 30 12 - Y AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 29 11 - X AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 28 10 - LIMIT & PAUSE SWITCH INPUT
                 TIE TO COMMON - 27 09 - AUXILIARY RELAY "B" OUTPUT
                 TIE TO COMMON - 26 08 - Z AXIS RELAY OUTPUT
                 TIE TO COMMON - 25 07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 24 06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 23 05 - AUXILIARY RELAY "A" OUTPUT
                 TIE TO COMMON - 22 04
                 TIE TO COMMON - 21 03 - Y AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 20 02 - X AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 19 01 - AUXILIARY RELAY "C" OUTPUT

        When using a relay on the Z axis you need to set the default state

                                      [23]

    [                 H O O K   U P   C O N E C T I O N S                ]   


    for the Z axis direction bit and the rotation of the Z axis motion  so
    that the relay is off before the tool path starts and is automatically
    set off when the tool path ends, by using the configuration setup menu
    option  number  4.  from  the DANPLOT and DANCAM main menus.  Normally
    this means default to logic low and have the Z axis motion -10 to -200
    steps.  The pulse width factor for the Z axis can be used  to  control
    the  delay after the Z direction bit changes before the X and Y motors
    start to turn (to allow for the time the Z axis relay/device takes  to
    respond.)

        You  can  of course use the C axis motor and a Z axis relay if you
    want to (three relays and three motors.) You can  omit  the  home  and
    limit switches if you wish,  since both DANCAM and DANPLOT can operate
    with out the switches.  The minimum hook up would be:

                                Pin No.

                                 36 18
                                 35 17
                                 34 16
                 TIE TO COMMON - 33 15
                                 32 14
                                 31 13
                 TIE TO COMMON - 30 12
                 TIE TO COMMON - 29 11
                 TIE TO COMMON - 28 10 - TIE TO COMMON
                 TIE TO COMMON - 27 09
                 TIE TO COMMON - 26 08 - Z AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 25 07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 24 06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 23 05
                 TIE TO COMMON - 22 04 - Z AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 21 03 - Y AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 20 02 - X AXIS STEP PULSE OUTPUT
                 TIE TO COMMON - 19 01

       If you wish to connect directly to the pins on your  parallel  port
    card  25  pin  connector rather than use the printer end of a parallel
    port cable the connections are:















                                      [24]

    [                 H O O K   U P   C O N E C T I O N S                ]   


                                Pin No.

                                    13 - Z AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 25
                                    12 - Y AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 24
                                    11 - X AXIS HOME SWITCH INPUT
                 TIE TO COMMON - 23
                                    10 - LIMIT & PAUSE SWITCH INPUT
                 TIE TO COMMON - 22
                                    09 - AUXILIARY RELAY "B" OUTPUT
                 TIE TO COMMON - 21
                                    08 - Z AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 20
                                    07 - Y AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 19
                                    06 - X AXIS DIRECTION OUTPUT
                 TIE TO COMMON - 18
                                    05 - AUXILIARY RELAY "A" OUTPUT
                 TIE TO COMMON - 17
                                    04 - Z AXIS STEP PULSE OUTPUT
    AUXILIARY RELAY "D" OUTPUT - 16
                                    03 - Y AXIS STEP PULSE OUTPUT
               AUXILIARY INPUT - 15
                                    02 - X AXIS STEP PULSE OUTPUT
                                 14
                                    01 - AUXILIARY RELAY "C" OUTPUT

        You can of course adjust connections on the 25  pin  connector  to
    correspond to any of the alternate hook-ups, e.g.  use auxiliary input
    on pin 15 for the C axis home switch,  and or use the auxiliary  relay
    "D"  output on pin 16 to pull up pin 10.  As you have probably noticed
    pins 1 through 13 have the same connections on both the parallel  port
    25 pin connector and the 36 pin parallel printer cable connector.




















                                      [25]

    [            C O N F I G U R E   A N D   I N S T A L L               ]   



                             CONFIGURE AND INSTALL

        DANCAM  and  DANPLOT send messages to the motor translator modules
    in the form of what are called "steps".  The motor shaft  rotation  is
    divided into fractions, usually 1.8 degrees per step, or 200 steps per
    360  degrees (360/200=1.8).  Sometimes motors are run "half step" mode
    where the step is divided in half,  e.g.  400 per  revolution  of  the
    motor  shaft.  Micro  stepping  divides  the  motor  step into smaller
    parts,  but does not usually offer higher actual possitional  accuracy
    under  fluctuating loads since the motor shaft of a stepper motor will
    typically exhibit 0.9 degrees of possitional error when  driven  under
    full  load  from clockwise,  and then counter-clockwise rotation.  For
    servo motors the shaft encoder defines the minimum rotational interval
    or "step."

        Note that the unit name inches is given in the configuration menus
    in DANCAM and DANPLOT even though any units can be used so long as all
    of the set up is done in the same units of measurement.  This was done
    to avoid the confusion some users have about the meaning of  the  word
    units.  You  will  also  have to set the overall scaling factor in the
    configuration menu of DANCAM  and  DANPLOT  to  relate  to  the  units
    scaling  factor used while drawing the tool path in DANCAD3D.  If this
    gets confusing,  just set the global scale  in  DANCAD3D  at  240  and
    configure  DANCAM and DANPLOT in steps per inch,  and set the DANCAM -
    DANPLOT overall scaling factor to  1  (then  one  unit  in  DANCAD3D's
    drawing  editor  will  move  the  tool  one  inch (this is the default
    configuration.))

        So since the motor shaft has finite positions that it can stop at,
    the driven load will also have finite positions it can stop  at.  When
    working  out  the  ratio  of the timing belt pulleys for the motor and
    lead screw you should figure that one motor step should move the work-
    piece relative to the tool by one half the smallest amount  necessary.
    If  you  are  machining  to  0.001 of an inch and have a 10 pitch lead
    screw then 1:1 coupling of the stepper  motor  will  give  you  0.0005
    inches of movement per motor step, i.e.:

     200 steps per revolution
     --------------------------  =  2000 steps/inch  =  0.0005 inches/step
     0.1 inch per revolution

        Successfully  installing  DANCAM  or  DANPLOT  requires having the
    motors  installed  to  give  the  coarsest  resolution  that  will  be
    acceptable.  Excessively  fine resolution will limit the maximum speed
    the tool can move.  Reducing the resolution will increase the  maximum
    speed  the  tool  can  travel.  In  our  example  we can calculate the
    maximum speed in inches per minute from the motor RPM,  since with 1:1
    drive the tool will move 0.1 inch per revolution, and 120 RPM would be
    a reliable maximum speed for the motor shaft.




                                      [26]

    [            C O N F I G U R E   A N D   I N S T A L L               ]   


     120 revolutions per minute
     --------------------------  =  12 inches per minute
     0.1 inch per revolution

        Feed  rates  for other resolutions can be worked out for the motor
    shaft speed of 120 RPM and 1:1 shaft coupling:

        LEAD SCREW    FEED/REV   STEPS/INCH   INCH/STEP   INCHES/MINUTE

          2.5 tpi       0.4"         50         .002           48
          5.0 tpi       0.2"        100         .001           24
         10.0 tpi       0.1"        200         .0005          12
         20.0 tpi       0.05"       400         .00025          6

        Since the torque of stepper motors falls off the  faster  they  go
    you  may  only be able to get reliable operation at speeds slower than
    60 RPM.  In general doubling the voltage used to drive a stepper motor
    will increase the top speed by 50%,  i.e.  if a motor works well at 60
    RPM at 24 volts you can probably get it up to 90 RPM by increasing the
    voltage to 48 volts.  The top voltage for stepper motors is about five
    times the rated voltage,  you will of course need to limit the current
    to the rated current to avoid burning out the motor (in  the  simplest
    scheme  a  series  power resistor is used to limit the current flowing
    through the motor winding when the motor is not turning to  the  rated
    current,  because  the  motor  is  an inductive load the resistor will
    allow the voltage to rise briefly at the beginning of each motor  step
    before the voltage drops back to the static level,  thereby making the
    motor turn faster.)

        When selecting stepper motors to drive your equipment  you  should
    use  motors  that  have a rated holding torque AT LEAST FOUR TIMES the
    torque that will be required under load and at full  speed.  Also  use
    the  motor  testing  utilities built into DANCAM and DANPLOT to do the
    start and stop test to make sure that the spacing of the  pulses  sent
    to  the  motor  translator module are far enough apart (a larger pulse
    width factor will space the pulses wider apart) for the motor to  keep
    up  with the step pulses (if the pulses are to fast the motor will not
    come back to the point it was at at the beginning of the  motor  test,
    indicating unreliable operation.)

        I would like to warn you that stepper motor manufactures published
    speed v.s. torque curves can be very optimistic, and are not generally
    applicable to use with DANCAM or DANPLOT.  As a rule of thumb based of
    my  experience  you can expect these values for maximum top speeds for
    reliable error free operation under working load,  with the higher RPM
    number being obtained by using the maximum voltage the motors can take
    (when  the  voltage  is  more than six times the rated voltage stepper
    motors may become unstable in the middle of the motors speed range, so
    you are limited in how much the motors can be boosted):





                                      [27]

    [            C O N F I G U R E   A N D   I N S T A L L               ]   


               MOTOR HOLDING TORQUE      MAXIMUM MOTOR SHAFT SPEED

                  20 -   40 in/oz              240 - 300 RPM
                  40 -  150 in/oz              120 - 240 RPM
                 150 -  400 in/oz               90 - 120 RPM
                 400 - 1500 in/oz               30 -  90 RPM

        To configure DANPLOT and DANCAM to produce the  proper  number  of
    steps  per  inch  of  travel simply run DANCAM or DANPLOT from DOS and
    select mode #4 from the main menu that comes up.  Since stepper motors
    typically can only step 300 to 1000 full steps per second (600 to 2000
    half steps) the motor step delay of 0.5 ms to 3 ms is needed  to  keep
    the  motors  working properly.  The minimum motor single step delay is
    controlled a value called the pulse width factor (p.w.f.).  Each  axis
    has  its  own  p.w.f  so  the  motors  can  run  as  fast  as possible
    (allowable) when the maximum feed rate is requested.

        When you install DANCAM and DANPLOT using their main  menu  option
    #4,  be sure to work through the sub-menu options in order 1,2,  (sub-
    menu of 2 options 1,2,3 for each axis) and then 3,4, and 5.

        When you work through the menus keep in mind the number  of  steps
    the motor shaft makes per revolution.  If you run a motor in half step
    mode then multiply the number of motor steps by two.  For servo motors
    the  number  of  steps  per revolution can be derived from the encoder
    counts per revolution.

        In the motor test sub-menu (#2  in  the  configuration  menu)  use
    option  #1  to  find  the  smallest  p.w.f.  that  makes the motor run
    smoothly under load,  use #2 (of #2 of #4) to check that the motor  is
    not  missing  any  steps  (make  the  p.w.f.  larger if it is and test
    again),  and use #3 (of #2 of #4) to test the RPM if needed.  When the
    p.w.f. has been configured for each axis press [Esc] to go back to the
    installation sub-menu and answer the other questions.

        The  questions in option #3 in the installation sub-menu should be
    used to install the scaling factors before you  enter  the  feed  rate
    controlling  delays  with  option  #4.  In this version of DANPLOT and
    DANCAM the feed rate is controlled by a  delay  between  motor  steps.
    Since the p.w.f.  keeps each motor working properly the delay can vary
    from 0 ms to 32000 ms per step depending on  how  slow  you  want  the
    feed.  To  get different feeds,  enter the delays you want in the feed
    rate table,  then make the tool path drawing with DANCAD3D so that the
    line  segments  have the color attribute that corresponds to the delay
    in the feed table.  The line color attribute is set while  drawing  in
    DANCAD3D  v2.5 by pressing the [L] key of the keyboard or by using the
    mouse to click on the with [L]ine style option of the [L]ines sub-menu
    from the drawing editor  root  menu.  Any  step  delay  value  can  be
    assigned  to  any  line  color number.  Set all the delays to 0 if you
    want the tool to move as fast as possible for all motion.

        Another configuration menu  option  lets  you  assign  which  line
    colors  will  turn  on  or  off  the  auxiliary  control relays.  Line

                                      [28]

    [            C O N F I G U R E   A N D   I N S T A L L               ]   


    segments used to control the auxiliary relays can  have  starting  and
    ending points at the same location (i.e. zero length.)

        Option  #5  of  the  installation  sub-menu  asks  about  the home
    switches.  Both DANPLOT and DANCAM let you install  home  switches  on
    your  equipment  so  that  you can have the tool automatically home up
    before  each  tool  path  file  is  read.   The  ability  to  home  up
    automatically can be a great time saver.  You should note that without
    the use of the switches to home up, an error of +/- 3 full motor steps
    can occur when DANPLOT and DANCAM are first run since the motor rotors
    will  jump  to the position dictated by the mechanical relationship of
    the motor rotor and the state of the motor winding sequence  that  the
    motor  controller  starts  with.  Most stepper motor controllers start
    with the same coil (phase) energizition pattern, so you can loosen the
    motor coupling,  reboot your computer,  re-run DANPLOT or  DANCAM  and
    tighten  the  motor  coupling  with  the  tool  carrier  at  it's home
    position.  Lousing,  rebooting the computer,  and tightening the motor
    coupling  will  not  help  if  the motor controller initializes with a
    random energizition of the motor windings,  is such a case  you  would
    have  to  use the home switches or manually check to see if the motors
    shafts have an incorrect position and use main menu option #3  to  get
    the motor shafts into the proper starting orientation.

        DANPLOT  has some additional special configurations.  The "C" axis
    lets you mount a fourth motor with its shaft parallel to and  centered
    on  the  Z axis such that a knife,  saw,  or broach will automatically
    rotate to point the cutting  edge  into  the  motion  of  travel.  The
    tolerance  on  the  C  axis  lets the tool stay down while cutting out
    curves.  The manual up and down option lets you manually activate  the
    Z  axis for use in automating a drill press with two motors (one for X
    axis and one for Y axis.) In manual up/down  mode  the  work-piece  is
    positioned and then the computer pause while you drill the hole,  then
    you press the keyboard and  the  work-piece  will  move  to  the  next
    position, and so on.




















                                      [29]

    [          D R A W I N G   T O O L   P A T H   F I L E S             ]   



               DRAWING TOOL PATHS WITH CUTTER TOOL COMPENSATION

        The  following  are the steps required to draw a tool path element
    while being able to visually see  the  shape  of  the  cutter  on  the
    computer  screen.  Please  read  the file DANCAD3D.DOC on the DANCAD3D
    v2.5 program disks and read the menus in the DANCAD3D program  drawing
    editor to learn more about what these steps mean.

    NOTE:  You will need DANCAD3D v2.5F or later to draw cutter paths with
           compensation for the cutter shape.

    1. Run the DANCAD3D program.  Press [Return] until you reach its  main
       menu.

    2. Select  Draw  from  the DANCAD3D main menu.  Select the Front view.
       If the drawing workspace is not empty select  Initialize  to  clear
       it.

    3. Select  Draw from the drawing editor root menu.  Draw an outline of
       the  shape  of  the  finished work-piece you wish to make.  You can
       make the inside corners sharp if the radius will be  determined  by
       the  cutter shape.  You can make the shape outline in 3D if you are
       going to do 3D work.  Remember that lathes are 2 axis  devices,  so
       the  tool  path for the lathe will be 2D (i.e.  a profile.) You can
       include an outline of the  raw  material  in  the  outline  of  the
       finished  piece  to make visualization of the amount of material to
       remove easier.  The outline of the work-piece can include  outlines
       of  holding  fixtures and other machine parts so that you can check
       for interference with the cutter.

    4. The  next  step is to make an outline for the cutting tool.  If you
       are going to use an end mill you can use the polygon  command  (try
       to  keep  the  sides  total to 36 or less) in the 2D shapes drawing
       editor sub menu.  For other shape cutters press [B] to begin a  new
       element (element 2) and draw the outline of the cutter.  The center
       of  the cutter outline element should be on its axis of rotation if
       the cutter rotates.  The cutter outline can be 3D and  include  the
       tool  holder  or  tool  post  so  that  you  can visually check for
       interference with the work-piece or other parts of the machine.

    5. To draw the actual tool path element go  into  the  drawing  editor
       [E]lements sub-menu  and  select  [D]rag.  Select  [E]nter  element
       number and enter the element number for the cutter outline (element
       2.)  Select  the  element  center  as  the  reference point.  Press
       [Return] to start the drag command.  The cutter outline will blink.
       Press [B]egin element to begin the tool path element (the tool path
       will be element number 3.) Move the  cutter  outline  to  the  home
       position  with  the  [G]oto  drawing  command.  Use  the  mouse  to
       position the cutter outline near the  edge  of  the  raw  material.
       Press  the  left mouse button to draw the first line segment in the
       tool path.  Move the mouse for the path of the first cut and  press
       the left mouse button again.  Continue drawing zig-zag, concentric,

                                      [30]

    [          D R A W I N G   T O O L   P A T H   F I L E S             ]   


       or  spiral tool path until the blinking outline of the cutter comes
       in contact with the outline of the final shape.  When drawing  tool
       paths  be  sure  that  you  only feed the amount that can be safely
       taken off (so the tool will not stall or break!) Also remember that
       some cutters can only cut going one way, so you may have to retrace
       without feed when drawing in  one  direction.  Pressing  [L]  while
       inside  the  [D]rag  command  will  let you change the drawing line
       color,  and therefore set the  feed  rate,  auxiliary  relays,  and
       programed pause.

    6. When  the  tool  path  is  finished press [Escape] to exit the Drag
       command. [Q]uit the drawing editor and select Files Save ASCII from
       the  main  menu.  Enter  the  element number for the element of the
       tool path (normally element 3) as the element to save.

    7. Make a trial part using DANPLOT or DANCAM.

    8. Measure the trial part.  Record any error in the final shape.

    9. Load   the  tool  path ASCII file into DANCAD3D and use the [P]ull-
       Point command in the [L]ines sub-menu  of  the  drawing  editor  to
       alter  the  tool path line segments for the final cut,  in order to
       correct the error.  Save the corrected tool path element  again  as
       an ASCII file.

    10. Repeat  steps  7  to  9  if  needed  until the finished part is in
        tolerance.  Make the run of parts as needed.  Store the ASCII tool
        path  file  on a floppy disk for future use.  You should also copy
        the DANPLOT.CFG or DANCAM.CFG file used to make the part onto  the
        floppy  with  the tool path so the tool path will match up if used
        again.  You should also file notes about  the  spindle  speed  and
        cutter  seating  used  and also the location of the limit switches
        relative to the work-piece.

        If you want to change the line color attribute for any of the line
    segments in the tool path such as the line segment for the  final  cut
    you  can  use  the  commands  in DANCAD3D's drawing editor [L]ines sub
    menu.  The conversion of the line color attributes in  the  tool  path
    data  file  to  feed rates is done using the values for the step delay
    that you have entered into the DANPLOT  and  DANCAM  feed  rate  table
    (option #4 in the DANPLOT and DANCAM installation sub-menu.)

        You  can also draw the bulk of the tool path in the drawing editor
    Draw Lines sub-menu and then go into the Drag command in the  Elements
    sub-menu  to  align  the cutter outline to the final shape outline for
    the last few cuts.  If you want to add line segments to the tool  path
    element  that  you  started  in  the  Draw lines sub-menu use the Drag
    command as described above in step 5.  but  press  [E]lastic  line  in
    place of [B]egin element.

        When you need to use the [P]olygon command,  or the [F]it-curve in
    DANCAD3D's drawing editor you can unite the elements  created  into  a
    single  ASCII file by erasing the finished part outline,  and the tool

                                      [31]

    [          D R A W I N G   T O O L   P A T H   F I L E S             ]   


    outline from the workspace,  then use element 0 as the element to save
    rather  than  element  number  3.  The  [J]oin  command  in DANCAD3D's
    drawing editors [E]lements menu can also be  used  to  unite  elements
    into a single tool path element.


















































                                      [32]

    [      R U N N I N G   T H E   C  A  M   D E M O   F I L E S         ]   



                 RUNNING THE DEMO FILES FOR DANPLOT AND DANCAM

        A  demo is provided for each program.  Enter DEMOPLOT.BAT from DOS
    with the prompt indicating the drive and  directory  all  the  DANPLOT
    files are in.  DEMOCAM.BAT does the same for DANCAM.

    EXAMPLE: C>DANPLOT DANPLOT.ASC 1

        You can interrupt the motion of the motors momentarily by pressing
    the  [P]  key,  press [P] or [SpaceBar] to restart the motors.  If you
    need to touch or otherwise expose your self to the equipment while the
    motors are paused from the keyboard you  should  also  use  the  pause
    switch  wired  in  series with the limit switches (as shown on drawing
    HOOKUP1.ASC) and turn off the motor power (if your  translator  module
    will  re-initialize  when  the  motor power is cut off you will have a
    problem (because the motors may jump when the power is  switched  back
    on), the circuit schmatics I provide with the DANCAD3D user outfit for
    the  stepper  motor  translator  allow  the  translator  logic to stay
    powered while the motor coil (phase)  power  is  switched  on  or  off
    thereby avoiding any motor jumping.)

        You  can  load  the example *.ASC tool path files into DANCAD3D to
    look at how they were drawn.  DANCAD3D's main menu  [P]review  command
    will  let  you  rotate the display of the tool path's line segments so
    you can see the spatial relationships.




























                                      [33]

    [      H E L P   W I T H   D A N C A M   A N D   D A N P L O T       ]   



                               HELP AND FEEDBACK

        If you have any questions or comments about DANCAM or DANPLOT feel
    free to write me at:

    ADDRESS: DAN HUDGINS
             c/o DANCA3D
             466 DIAMOND STREET
             SAN FRANCISCO, CA  94114
             The UNITED STATES of AMERICA

        When you write PLEASE enclose some stamps for the replay  postage.
    If  you  live  outside  the U.S.  you can get some postal vouchers for
    first class international air mail postage from your post office.

        With DANCAM and DANPLOT it is usually  easier  for  me  to  answer
    questions  by  calling  you collect (sorry but collect calls cannot be
    made to Germany.) If you would like me to call you collect say that  I
    should  when  you  write.  I  can  call on evenings or weekends if you
    prefer, but be sure to tell me what days and times I should call.

        I am working on a number of improvements to the documentation  for
    DANPLOT  and  DANCAM  including  more  schmatics for stepper and servo
    motor driver modules.  If you register with me by sending  one  dollar
    and your full name and address I will put your name on my user mailing
    list.

        Feel  free  to  send  me  your  "wish list" for DANCAD and DANPLOT
    improvements.  Although "G" codes are not needed since  DANCAD3D makes
    tool  paths  graphically  I  may  write a "G" code converter if enough
    users ask for me to write one.  If you are  interested  in  "G"  codes
    send me a "G" code file on a floppy disk so I can see the type of file
    you need.




















                                      [34]

```
{% endraw %}

## FILES.DOC

{% raw %}
```

                    DANCAM v2.51 and DANPLOT v2.51

               Two Computer Aided Manufacturing programs 
                                  by
                           Daniel H. Hudgins

             Copyright (c) 1989-1990 All Rights Reserved.

                      Sixteen files on one disk.

DANPLOT  COM    2D CAM system executable program file.  
DANCAM   COM    3D CAM system executable program file.
DANPLOT  PLT    Plotter driver for use with DANCAD3D v2.5 to make 2D CAM files.
DANPLOT  OUT    Example 2D CAM file made with DANPLOT.PLT driver.
30FEEDS  ASC    Tool path to test thirty feed rates.
DANPLOT  ASC    Tool path to test DANPLOT configuration.
DANCAM   ASC    Tool path to test DANCAM configuration.
CAMTEST  ASC    Three-Dimensional tool path to test DANCAM hook up.
BACKLASH ASC    Tool path to measure and compensate for machine backlash. 
PLOTTEST ASC    Torture test for pen plotters made with DANPLOT. 
DEMOCAM  BAT    Batch file to demonstrate running DANPLOT from DOS. 
DEMOPLOT BAT    Batch file to demonstrate running DANCAM from DOS.
MANYPLOT BAT    Batch file to make several 2D parts of one tool path file.
MANYCAM  BAT    Batch file to make several 3D parts of one tool path file.
CAMPLOT  DOC    33 pages of information on how to hook up and use.
FILES    DOC    One line file description.

     See also DANCAD3D v2.5F shareware five disk set for more information.  


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2598

     Volume in drive A has no label
     Directory of A:\

    DANPLOT  COM     62559  11-16-90   7:24a
    DANCAM   COM     55789  11-16-90   7:23a
    DANPLOT  PLT       348   4-29-89  11:09a
    DANPLOT  OUT      2295   4-29-89  11:05a
    30FEEDS  ASC      1135   5-03-90  10:24a
    DANPLOT  ASC     22026   5-03-90  10:24a
    DANCAM   ASC     84012   5-03-90  10:25a
    CAMTEST  ASC     24514   5-03-90  10:25a
    BACKLASH ASC      3288   5-03-90  10:25a
    PLOTTEST ASC       702   5-03-90  10:25a
    DEMOCAM  BAT      1475   4-26-89  11:16a
    DEMOPLOT BAT      1025   4-26-89  11:17a
    MANYPLOT BAT       354   7-10-89  10:24p
    MANYCAM  BAT       301   7-10-89  10:24p
    CAMPLOT  DOC     90597  10-04-90   3:56p
    FILES    DOC      1443   4-18-91   2:41p
           16 file(s)     351863 bytes
                               0 bytes free
