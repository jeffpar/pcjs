---
layout: page
title: "PC-SIG Diskette Library (Disk #1013)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1013/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1013"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "COGOWARE AND PLOT"

    COGOWARE is a coordinate geometry surveying program for plat designers.
    Calculate coordinates of each point in the plane of the survey and of
    each point calculated by the plat designer. Each pair of coordinates is
    assigned a point number by the designer as the calculations progress.
    These designated coordinates are saved in batches of 100 points to a
    file. Any designated point can be recalled, and the survey extended as
    the design progresses. All calculations are carried out in double
    precision.
    
    PLOT is a set of quick, easy-to-use tools for technical plotting.  It
    can handle rectilinear, polar and vector plotting.  After plotting, you
    can review a tabulation of all plotted points (except for the vector
    program).
    File Descriptions:
    
    -------- ---  PLOT.
    README   DOC  Documentation for PLOT.
    HLP3     BAS  Help file accessed from PLOTM.BAS.
    IPLOT    BAS  Program for plotting Y=f(X) type equations.
    SPLOT    BAS  Program for plotting two simultaneous equations.
    PPLOT    BAS  Program for polar plotting.
    VPLOT    BAS  Program for vector plotting.
    PLOTM    BAS  Contains the plot menu.
    PLOG     BAS  Opening screen file.
    FUNCT    BAS  Data files containing user defined functions.
    FCT*     BAS  DATA FILES (3 files).
    PLIC     BAS  License statement.
    EQUAT    BAS  Small basic program.
    ESOLVE   BAS  Equation solver.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COGO.DOC

{% raw %}
```
       version 5.3b                                             page 1.
                                    C O G O

                              CoOrdinate GeOmetry
                               Surveying Program
                                      for
                                 Plat Designers

              This  program,  which  I  call `COGO', is the product of my
       spare time over the span of some years. I began some time in 1971,
       when I first became familiar with  a  desk-top  programmable  cal-
       culator.  I  had  long  been  fascinated  with adding machines and
       mechanical calculators,  but  the  first  time  I  came  across  a
       programmable  electronic  calculator  that  calculated the natural
       functions without resort to tables, I was hooked.
            For  the  plat  designer,  I  have  endeavored  to  make COGO
       operate just the way he thinks, just the way the survey crew works
       in the field and just the way the draftsman works on  the  drawing
       board, with his straight edge, protractor and compass.
            COGO is a relatively compact program that  will  run  in  any
       PC/XT  compatible  computer,  running on MS-DOS and having 128K or
       more of  RAM  memory.   I  have  endeavored  to  make  COGO  self-
       ocumenting  in  so  far  as  possible,  and in this COGO.DOC file
       herewith I will explain its many features as  far  as  space  will
       allow.
            I am a Florida registered professional engineer, PE 7180, now
       retired.  The development of COGO has been a process of revise and
       edit, revise and edit; each time  adding  some  new  and  improved
       procedure,  until  now I can think of no new improvements to make.
       It is now my decision to entrust COGO to  a  wider  clientele,  as
       USER SUPPORTED software.
            You  may  freely  copy  COGO.EXE,  COGO.DOC  & README.1ST and
       distribute them to your friends, with the understanding that  each
       user, including yourself, is honor bound to register his copy with
       me, the author.  I reserve the right  to  know  who  is  using  my
       software.   NO  ONE  IS  AUTHORIZED TO SELL MY SOFTWARE, except to
       recover the cost of materials and handling.
            If you find COGO to  be  useful  to  you,  I  expect  you  to
       register  your copy with me by writing to the address shown below,
       and please remit your check or money order in the amount of $10.00
       as reimbursement to me for expenses that I have incurred,  and  to
       make  possible  my  continued  support  of  this  software.   As a
       registered user you will receive notification of all  up-dates  or
       improvements that may be made in the future.
 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                                                                       cut
         to:                      Carl M. King
                               2206  Siesta Drive
                            Sarasota, Florida  34239

         I have received a copy of COGO version No.____________________
         Enclosed please find my $10.00 registration fee.

         Name & Address: ______________________________________________

                         ______________________________________________

                         ______________________________________________

                         ______________________________________________

                                    C O G O                     page 2.

         INTRODUCTION:
         Anyone interested in this program needs to  be  familiar  with
         surveying  terminology.  If I use any words or terms which are
         not clear to you, I respectfully direct your  attention  to  a
         standard text book, such as :

                         SURVEYING THEORY AND PRACTICE
                                      by
                      Raymond E  Davis, M.S., C.E., D.Eng.
                              Fancis S. Foot, E.M.
                               Joe W. Kelly, B.S.

                            McGraw-Hill Book Company

              BALANCING THE SURVEY: Is a  special  topic,  and  is
              treated  in  a separate text file (BALANCE.DOC) that
              should be found on this same disk.

         PROGRAM  DESIGN:  The  calculations in this (COGO) program are
         carried out in double precision (16  digits).   However,  when
         coordinates  are  listed  with  the  LIST  command,  they  are
         displayed only to the nearest 1/1000 th unit.

         COORDINATES:  A  principal  product  of  the  program  is  the
         calculation of coordinates, NORTHINGS and  EASTINGS,  of  each
         point  in the plane of the survey that you calculate.  To each
         pair  of  coordinates  YOU  assign  a  point  number,  as  the
         calculations  progress.  These designated pairs of coordinates
         are saved in memory in batches of 100 points,  and  each  such
         batch becomes a FILE when saved to the disk.

         CURVE  PARTS:   In  addition  to  coordinates  (northings  and
         eastings) COGO computes `curve parts'  (radius,  delta  angle,
         tangent,  arc  and  chord)  of  each curve encountered.  Curve
         parts are displayed and may be printed  at  your  option,  but
         curve  parts  do  not  become  a permanent part of the record.
         Only coordinates are saved to the disk.  Curve  parts  may  be
         recalculated at any time with the INVERSE CURVE routine.

         FILES:  Points  0 to 99 are saved as file COGO.000; points 100
         to 199 are saved as file COGO.001; points 200 to 299 are saved
         as file COGO.002; and so on. The number of points in each file
         constitutes a century,  and  the  file  number  in  each  case
         corresponds  to  the  century.  In  this  fashion thousands of
         points may be saved on a single disk. Any designated point may
         be recalled, and the survey extended therefrom as  the  design
         progresses.  The  files are automatically created and recalled
         by the program each time a new century is  created,  e.g.,  if
         you pass from file COGO.000 to COGO.001.

         Each  full  data  file  requires 4096 bytes of disk space, and
         COGO.EXE itself requires about 77K, so one diskette can  hold,
         in  addition to the program, about 69 files, or the equivalent
         of 7000 pairs of coordinates.

         Any time you wish to abandon a batch of points you may  do  so
         by  erasing  the  said  file from the disk directory, but this
         isn't necessary, because every time you assign a point  number
         the old coordinates are overwritten.

                                    C O G O                     page 3.

         GETTING STARTED:

         COGO.EXE  is  an executable program.  You should copy COGO.EXE
         onto a disk that you will use in the "current drive", that  is
         the  drive  in  which  you will load COGO.EXE, and this is the
         disk on which COGO will save all the data that  is  generated.
         If  you  wish  to  change  the current drive, you should do so
         before you load COGO.EXE.  When you call it from DOS, it  will
         start running immediately.  At first there will probably be no
         data  files  on  the disk, but COGO will create and manage the
         files automatically.   COGO  recognizes  an  empty  file,  and
         advises you that you ought to enter a pair of coordinates as a
         `local  origin'.   This  is  a  precaution to maintain greater
         precision in the area calculations that will be carried  along
         with  every  traverse.   (COGO calculates the area under every
         line and curve that is calculated.)  If  you  format  a  fresh
         disk, and copy COGO.EXE onto it alone, there will remain space
         on  the disk for at least 68 data files, each accomodating 100
         coordinate pairs. You can have a permanent record of points #0
         to #6799 on a single diskette.  You should never lack for data
         storage space, since you will soon grow tired  of  using  four
         digit point numbers.

         Your best bet is to gain some `hands on' experience with COGO.
         Practice  with  a  subdivision  record  plat  with examples of
         curvilinear  streets  and  cul-de-sacs.   COGO  will  ask  the
         questions, and you will supply the responses.

         TRAVERSE: The calculations proceed in much the same fashion as
         the measurements are made in the field.  At each point we  can
         imagine  a transit to be set up, and from thence a SIGHTING is
         made for a measured distance to the next  point.   A  SIGHTING
         then  consists  of  a  direction  and  a  distance,  and  COGO
         calculates the `latitude' and  `departure',  and  derives  the
         coordinates of the next point.

         INVERSE: Normal surveying procedure moves from point to  point
         using input data consisting of heading angle and measured for-
         ward  distance.   However,  using  the computer, we frequently
         want to make calculations in reverse order.  I.e., we wish  to
         reconstruct  or calculate the heading and distance between two
         points which have been established by other means,  and  whose
         coordinates  are already on file in the computer memory.  Such
         a calculation we call an `inverse'.  You do this with COGO  by
         merely  entering the desired point number at the (SIGHTING: ?)
         prompt.

         AZIMUTH: The operative angle is Azimuth (A), which is measured
         clockwise from the North, from 0 to 360 degrees positive angle
         or counter clockwise from 0 to 360 degrees negative angle.





                                    C O G O                     page 4.

         The fundamental relationships are as follows:

                               latitude = D cos A
                              departure = D sin A

                       where:         A = Azimuth angle
                                      D = Distance of traverse


         NORTHINGS  and  EASTINGS  are respectively the accumulation of
         latitudes and departures  from  a  chosen  (P.O.B.)  point  of
         beginning.

         A  NE  quadrant  "Bearing" is an angle measured clockwise from
         the North, hence it is the only Bearing that is identical with
         Azimuth, and may be used interchangeably with Azimuth.


         MENUS:  There are three menus, which may be called up whenever
         you see the prompt: * SIGHTING: ? This is  the  point  in  the
         program  where  you  enter commands. (You press the <ENTER> or
         <RETURN> key for whatever commands you  choose.)  <I>  is  the
         command for the first menu. <II> is the command for the second
         menu, and <III> is the command for the third menu.

         COMMANDS:   From  the  menus you will learn the following com-
         mands:

         I - 1st MENU (Introduction)     CL - CLEAR AREA
        II - 2nd MENU (Commands)          C - ENTER COORDINATES
       III - 3rd MENU (Curves, etc.)      L - LIST  COORDINATES
      SAVE - SAVE DATA FILE              EX - EXIT or use <SHELL>
                      <Ctrl+PrtSc> = Printer Toggle

         NE,  NW,  SW,  and  SE  are  the  compass quadrants, and their
         meanings should be obvious.

         N, S, E and W are the cardinal points of the compass and these
         represent absolute Bearings. They assume azimuths of exactly 0
         or 90 degrees.

         DF - deflection angle           BK - backsight
         GO - zero deflection            BT - backtrack
         SA - slope angle                ZD - zenith `distance'
         SS - side-shot                  XS - cancel side-shot
         AZ - Azimuth Heading            RV - revise a call

         TR - traverse curve             BB - bearing/bearing inters'n
         SC - inscribe curve             BD - bearing/distance   "
         IN - inverse  curve             DD - distance/distance  "
         CU - cul-de-sac  "

         The above list of alphabetical commands comprises  the  entire
         list  of  such  commands  employed  by  COGO,  except  for  an
         occasional (R)ight, (L)eft, (Y)es or (N)o choice that you  may
         be called upon to make.

                                    C O G O                     page 5.

   <ENTER> Incidently, at boot-up,  when you tap a key to continue, and
         later in the program, when you may make a  (R)ight  or  (L)eft
         choice,  the program is designed to branch immediately, and it
         doesn't wait for you to press <ENTER>. In these cases don't be
         too quick to  press  <ENTER>;  if  you  do,  you  are  apt  to
         inadvertently  skip  a  step in the program, and inadvertently
         enter a zero (0). JUST BE SURE EACH TIME  YOU  PRESS  <ENTER>,
         THAT IS WHAT YOU WANT TO DO.

         LOCAL ORIGIN:  You should plan ahead, and consider how wide an
         area you anticipate that you will cover with your surveys. You
         should select a pair of coordinates, NORTHINGS  and  EASTINGS,
         for  point  No.  0,  such  that any future point falling south
         westerly of that point will still have  positive  coordinates.
         (Although  it is mathematically permissible to work with nega-
         tive coordinates, it is not convenient to do so.)


   <C>   ENTER COORDINATES: To enter  the  coordinates  for  the  LOCAL
         ORIGIN  or  any  other P.O.B., you start this routine with the
         command  <C>.  Then  COGO tells you what to do next. To escape
         from this routine, press <I><ENTER>.

   <L>   LIST COORDINATES: you start this routine with the command <L>.
         Then  COGO tells you what to do next. You can make a hard copy
         if you enable your printer with the keys <Ctrl>+<PrtSc>.

         PROMPTS:  COGO is largely self documenting. When it stops  and
         gives  you  an  opportunity  to  enter a command, you will see
         something like this:

                         * SIGHTING: ?

         The asterisk, * , is to identify this as the  primary  command
         entry  point  in  the program. When you see this star, you can
         branch with any of the commands listed above.  You  will  also
         see  this  star  when entering P.O.B. coordinates, so that you
         can branch from that routine too.


         TRAVERSE: In the simplest traverse, you are given the  Azimuth
         or  Quadrant  and  Bearing (angle) and the distance.  Go ahead
         and run it. The program will stop and request  the  data,  and
         finally the point number.

         ANGLE  DATA:  Surveying instruments are calibrated in degrees,
         minutes and seconds  (our  heritage  from  the  ancient  Baby-
         lonians),  so  that  is  how  COGO is designed to receive this
         information. If you enter degrees or minutes as integers, COGO
         then requests the next smaller units, but if you enter numbers
         with decimal fractions, COGO  accepts  that  in  lieu  of  any
         further fractions.


                                    C O G O                     page 6.

         Enter angle data thus:

         ENTER ANGLE: deg ?       { NOTE: If you need a negative angle,
                      min ?       { place a negative (-) sign before
                      sec ?       { any of these quantities.  The whole
                                  { angle will be negative.

         NOTE:  COGO  subsequently  reports Azimuth as well as Bearings
         with   quadrants.   The  computed  results  are  displayed  as
         follows:

    THENCE CW      314.4911111111111 deg
       "           314 deg  29 min  28.00 sec  { AZIMUTH
       or    NORTH  45 deg  30 min  32.00 sec  WEST,        1000.000 units

    POINT NO. 0      TO      POINT NO. 1        NORTH'GS:  700.7986019211062
                                                EASTINGS: -713.3591798984737

         NOTE: In the above typical display, the heading is first given
         in decimal degrees Azimuth, then deg/min/sec Azimuth, and then
         as  a  Bearing  angle in deg/min/sec.  The linear dimension is
         shown in unspecified "units".



         POINT  NUMBERS:   Initially  you will  be  starting  with  low
         point  numbers,  from  1  to  99.  This  will  constitute file
         `COGO.000', when you SAVE it onto the disk. (You must remember
         to SAVE your current file whenever you are about to  turn  off
         the  computer. In fact it would be wise to SAVE your data from
         time to time. A power interuption could lose a portion of your
         work, but once it is on the disk, you are safe.)

         INVERSE TRAVERSE: Each time COGO stops for a new * SIGHTING: ?
         you will see that you are set up over a point. (The point num-
         ber  `where  you are' will be seen on the line above.) Now, if
         you want to move to another established and numbered point  in
         the survey, you merely enter that point number as the SIGHTING
         and  COGO  will calculate and report the traverse data to that
         further point. NOTE: You may INVERSE between any two  numbered
         points; they do not have to be members of the same file.

         AREA  ACCUMULATION:   For  every  line  and curve routine that
         carries  you  from point to point, COGO calculates and accumu-
         lates the area under the line or curve. When you  arrive  back
         at  the  P.O.B.,  COGO  prints  out the enclosed area and per-
         imeter. (Initially, at the P.O.B., you must first have cleared
         the accumulator registers with  the  <CL>  command.)  You  may
         `inverse'  around  the area, from point to point, and when you
         inverse to the P.O.B., the area display will be produced.

         NOTE: The enclosed area is  displayed  as  "square  units"  of
         whatever  system of linear units you are using in your survey.
         If you are using feet, the quantity labeled  "acres"  will  be
         correct, otherwise it should be ignored.


                                    C O G O                     page 7.

   <DF>  DEFLECTION  ANGLE  TRAVERSE:  This together with the backsight
         are probably the two most useful  routines  to  the  surveyor,
         since  they  more  nearly  simulate  the  sort  of  operations
         regularly performed by surveyors in the field. Enter  <DF>  to
         initiate  this  routine. At the point `where you are' you have
         arrived with a certain known heading. Thence you want to  pro-
         ceed  on  a new heading. You want to turn through a deflection
         angle. This `deflection angle' is the datum that you enter, as
         requested by the program. A clockwise angle  is  positive.   A
         counter-clockwise  angle  must  be given a negative sign. (You
         only need to attach the negative sign to one  entry,  and  the
         whole angle will be negative.)

   <GO>  ZERO DEFLECTION:  This is a traverse similar to the <DF>,  ex-
         cept you are going to continue on the same heading, (zero  de-
         flection  angle).   This  saves  you several key strokes, and
         you only have to key in the distance.

   <BK>  BACKSIGHT:  This is a traverse similar  to  the  <DF>,  except
         this time the telescope is sighted on the previous point, i.e.
         the point from which you arrived at the point `where you are'.
         Enter <BK> to initiate this routine. This means that  you  are
         starting from  a heading exactly 180 degrees from your current
         heading. As in <DF>, you turn whatever angle you wish for  the
         new  heading. Again the same convention applies as regards the
         sign of the angle.

   <BT>  BACKTRACK: This is a "backsight" with  zero  deflection,  and,
         like <GO>, requires only a distance datum.

   <TR>  TRAVERSE OF CURVE:  A routine initiated with the command <TR>.
         This  curve  begins  at  a  `PC' and terminates at a `PT', and
         finds a `PI' on the way. You have arrived at the `PC' with  an
         established  HEADING.  You  will arrive at the `PT' with a new
         HEADING. The program will ask you for the BEARING at  the  PT.
         The  answer  to  this  will  depend upon what is known. If the
         delta angle of the curve is given, you may enter it as  a  de-
         flection  angle.  One more piece of data is needed; COGO gives
         you the option of providing RADIUS, TAN  or  CHD.  It  depends
         on your design objectives as to which one you want to specify.
         COGO will then carry you through the calculations,  requesting
         the  assignment  of  point  numbers for the PI and the PT, and
         calculating and displaying the CURVE PARTS.

   <SC>  INSCRIBE CURVE:     A routine initiated with the command <SC>.
         This is similar to the preceding routine, except this time the
         point `where you are' is at the PI. This routine  is  probably
         more useful to the subdivision designer, since  he  will  most
         likely lay out  the  street  centerlines  first,  finding  the
         intersection  points,  and  then  fit in the curves later. The
         steps are much the same as before, but this  time  the  PC  is
         calculated for you.


                                      COGO                      page 8.

   <IN>  INVERSE CURVE:      A routine initiated with the command <IN>.
         This  computes  a curve between two points, the PC and the PT,
         both  of which are known. The PC is `where you are'; The PT is
         where you are going. If the curve is to be tangent to the line
         of  the  previous  heading,  no  further data is required; you
         merely answer `No' for RADIUS or TAN input.  The  calculations
         proceed the same as for the other curve routines.

   <CU>  CUL-DE-SAC:         A routine initiated with the command <CU>.
         This is essentially an INVERSE CURVE routine, except  that  it
         is  the  long curve through the two chosen points. You proceed
         the same as for <IN>.

         CONTROL POINT: Intersections involve two  lines:  one  through
         the  point `where you are' and one through another point. This
         OTHER point, in each case, I call the CONTROL POINT.

   <BB>  BEARING-BEARING INTERSECTION: initiated with the command <BB>.
         Here you enter BEARING #1, then you are going to  continue  on
         the  same  heading  an unknown distance. Then you are going to
         turn onto BEARING #2, passing through the CONTROL  POINT.  The
         CONTROL  POINT  must  be  a known point with a known Point No.
         Optionally, the BEARINGS  can  be  supplied  either  as  given
         BEARINGS, DEFLECTION ANGLES or BACKSIGHTS.

   <BD>  BEARING-DISTANCE INTERSECTION:   start using the command <BD>.
         This  routine proceeds pretty much like <BB>, except this time
         there exists the possibility of  two  different  answers.  The
         distance  in  this  case is the distance from the intersection
         point to the CONTROL POINT which is on  a  radius  that  could
         swing  around  and intersect our bearing in two places. There-
         fore you must be prepared to decide on the longer distance  or
         the  shorter one. You also have the DEFLECTION ANGLE and BACK-
         SIGHT options as before.

   <DD>  DISTANCE-DISTANCE INTERSECTION:  start using the command <DD>.
         This time all the BEARINGS  are  unknown.  You  are  asked  to
         supply  DISTANCE  #1, DISTANCE #2 and the CONTROL POINT.  Here
         again there is  the  possibility  of  two  different  answers,
         depending  upon  whether  the desired intersection lies to the
         RIGHT or LEFT of your line of sight toward the CONTROL  POINT.
         Caution!  Don't  press  <ENTER> until after you have selected
         the PI point number.

   <SS>  SIDE-SHOT: initiate this series with the  command  <SS>.  This
         permits  you to make a series of shots from the same point and
         the same current heading, without losing  your  place  in  the
         main  traverse.  The side-shot condition will remain in effect
         until you cancel it.

   <XS>  CANCELS the side-shot condition.




   <SA>  SLOPE ANGLE:      initiate this routine with the command <SA>.
         This is an infrequently used  routine.  All  maps  and  survey
         plats  are  drawn depicting the land reduced to a single level
         plane. When steep grades are encountered, then  the  distances
         can  be  measured  on  the  slope, and the slope angle also is
         measured. When the plat is drawn, however, the horizontal dis-
         tance must be calculated. This is what  is  accomplished  with
         the  <SA>  routine, to be completed when HORIZONTAL bearing is
         requested.

   <ZD>  ZENITH DISTANCE:  initiate this routine with the command <ZD>.
         This  is  just  another  form  of  the slope angle. In certain
         theodolites the vertical circles are calibrated to measure the
         angle  from  the  zenith  rather than from the horizontal, and
         then  they call it ZENITH DISTANCE rather than SLOPE ANGLE. If
         you are using such an instrument, then use the <ZD> command.

   <RV>  REVISE A CALL:    initiate this routine with the command <RV>.
         If you discover that you mistakenly entered  the  wrong  datum
         at some point in a long series of traverses, and if the effect
         has  been  to  translate  a  series of later points, then this
         routine may help you to correct for the  error  without  going
         back and repeating the later points. However the error must be
         one  of only translation. We cannot correct for rotation. COGO
         tells you how to do it.


                                    C O G O                    page 10.

                   * * * * NOTES & TIME SAVING TIPS: * * * *

     1.- The text file  BALANCE.DOC  on  this  same  disk  describes  a
         convenient  method for using the power of COGO to balance your
         survey.

     2.- FUNCTION  KEYS:  The  `key bar' displayed at the bottom of the
         screen shows 10 command codes:

     F1=NW  F2=AZ  F3=SW  F4=SE  F5=BK  F6=DF  F7=BT  F8=GO  F9=CL  F10=SAVE

         which it will be convenient to use as single stroke  commands.
         There  are only 10 spaces available; the ones selected are the
         ones you will probably use most frequently.  However, you have
         the  option  of entering any of them from the keyboard just as
         well.  (AZ is equivalent to NE.)

     3.- ESC  KEY:   The `ESC' key is handy for canceling mistaken data
         entries. Try it!

     4.- In  the <BB>, <BD>, <SC>, <SA> and <ZD> command routines, when
         COGO asks for a 1st BEARING ANGLE, and if  there  is  a  known
         established point in the right direction from the point `where
         you  are',  you may enter the known point number, instead of a
         bearing. COGO then makes the calculation as it  would  for  an
         inverse  traverse, and uses the calculated bearing to complete
         the commanded traverse. This utilizes a portion of the INVERSE
         TRAVERSE routine; it turns to  the  indicated  heading,  while
         remaining at the starting point.

     5.- You may occasionally see a flashing warning: [ INDETERMINATE ]
         when  running an intersection calculation or an inverse curve.
         This means that the data you have entered will not produce  an
         intersection,  or will not connect up with the points that you
         have specified.

     6.- Should  you wish to temporarily revert to  the  DOS  operating
         system without losing COGO, use the <SHELL> command.  Try  it;
         COGO will make it plain.  (COMMAND.COM must be available.)

     7.- With  your  printer  turned  on and loaded with paper, you can
         make a hard copy of your work by toggling the printer on  with
         the <Ctrl+PrtSc> key command.  This same command turns it off.

                                   DISCLAIMER

         I'm  sure  you  understand; COGO.EXE is provided on an "as is"
         basis. Any damages arising from the use of  this  program  are
         entirely the responsibility of the user; i.e. the author, Carl
         M. King, cannot be held responsible for any damages.

         THIS HAS BEEN A LABOR OF LOVE. I HOPE YOU WILL RECIPROCATE AND
         LET ME HAVE SOME INDICATION OF YOUR APPROVAL.

                                       Sincerely,

                                                   Carl M. King

```
{% endraw %}

## EQUAT.BAS

{% raw %}
```bas
110 Y=X
```
{% endraw %}

## ESOLVE.BAS

{% raw %}
```bas
100 GOTO 130
110 Y=X
120 RETURN
130 'ESOLVE - EQUATION SOLVER -- COPYRIGHT 1985,1986,1987,1988 Prowess, Inc.
140 'THIS PROGRAM SOLVES EQUATIONS WITH A SINGLE VARIABLE -IBM-PC VERSION
150 CLS:KEY OFF:CLEAR:COLOR 6,0:XX$=STRING$(78,32):DIM A$(129)
160 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
170 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
180 LOCATE 2,33:PRINT "EQUATION SOLVER"
190 LOCATE 3,26:PRINT "(C)1986,1987,1988 Prowess, Inc."
200 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
210 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
220 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
230 FOR L=6 TO 19
240 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
250 NEXT L
260 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
270 LOCATE 12,24:PRINT "Need instructions?   (Y/N/Q)"
280 LOCATE 12,56:K$=INKEY$:IF K$="" THEN 280
290 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 980
300 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 380
310 IF K$="Q" OR K$="q" THEN LOCATE 3,75:PRINT "    ":GOTO 1270
320 GOTO 280
330 '-----------------------------clearing routines-----------------------------
340 LOCATE 21,1:PRINT XX$:LOCATE 22,1:PRINT XX$:LOCATE 23,1:PRINT XX$:RETURN
350 FOR I=6 TO 19:LOCATE I,2:PRINT XX$:NEXT I:RETURN
360 FOR I=9 TO 19:LOCATE I,2:PRINT XX$:NEXT I:RETURN
370 '------------------------------enter equation----------------------------
380 B$="110 ":G$="Y = ":PI=3.1415927#
390 LOCATE 21,2:PRINT "Enter your equation at the cursor (132 char max) in the form: Y = f(X)"
400 LOCATE 6,3:PRINT "EQUATION:  Y = "
410 J=6
420 K=1
430 L=18
440 LOCATE J,L:A$(K)=INKEY$:IF A$(K)="" THEN 440
450 IF A$(K)="Q" OR A$(K)="q" THEN BEEP:GOTO 1270
460 IF ASC(A$(K))=13 THEN A$(K)="":GOTO 560
470 IF ASC(A$(K))=8 AND J=6 THEN L=L-1:LOCATE J,79:PRINT " ":LOCATE J,80:COLOR 1,0:PRINT CHR$(186):COLOR 6,0:LOCATE J,L:PRINT " ":A$(K-1)="":K=K-1:GOTO 440
480 IF ASC(A$(K))=8 AND J=7 AND L>3 THEN L=L-1:LOCATE J,79:PRINT " ":LOCATE J,80:COLOR 1,0:PRINT CHR$(186):COLOR 6,0:LOCATE J,L:PRINT " ":A$(K-1)="":K=K-1:GOTO 440
490 IF ASC(A$(K))=8 AND J=7 AND L=3 THEN LOCATE J,79:PRINT " ":LOCATE J,80:COLOR 1,0:PRINT CHR$(186):COLOR 6,0:J=6:L=74:LOCATE J,L:PRINT " ":GOTO 470
500 LOCATE J,L:PRINT A$(K)
510 IF K>128 THEN BEEP:LOCATE 21,1:PRINT XX$:LOCATE 21,2:PRINT "Your equation is too long - please start over":FOR T=1 TO 2500:NEXT T:LOCATE 21,1:PRINT XX$:GOTO 100
520 LOCATE 12,2:PRINT XX$:LOCATE 12,29:PRINT "CHARACTER COUNT = ";K
530 IF K=57 THEN J=J+1:L=3
540 K=K+1:L=L+1
550 GOTO 440
560 BEEP:GOSUB 340:LOCATE 21,20:COLOR 3,0:PRINT "WAIT - THE EQUATION FILE IS BEING UPDATED":COLOR 6,0:GOSUB 360
570 FOR I=1 TO 129
580  EQ$=EQ$+A$(I)
590 NEXT I
600 U$="Y="
610 C$ = B$+U$+EQ$
620 '--------------------------write equation to equat.bas--------------------
630 OPEN "O",1,"EQUAT.BAS"
640    PRINT  #1,C$
650 CLOSE #1
660 '-------merges funct.bas with this pgm. and continues execution----------
670 CHAIN MERGE "EQUAT.BAS",680,ALL:ON ERROR GOTO 1150
680 '------------------------------enter running variable---------------------
690 GOSUB 340
700 LOCATE 10,10:INPUT "ENTER INITIAL VALUE FOR RUNNING VARIABLE 'X'    ",J
710 LOCATE 12,10:INPUT "ENTER FINAL VALUE OF RUNNING VARIABLE 'X'       ",JJ
720 LOCATE 14,10:INPUT "ENTER DESIRED INCREMENT OF 'X'                  ",JJJ
730 LOCATE 16,10:PRINT "IS VARIABLE 'X' AN ANGLE IN DEGREES? (Y/N)"
740 LOCATE 16,58:Q$=INKEY$:IF Q$="" THEN 740
750 IF Q$="Y" OR Q$="y" THEN J=J*PI/180:JJ=JJ*PI/180:JJJ=JJJ*PI/180
760 GOSUB 340:GOSUB 360:I=11
770 '-----------------------------solve equation-------------------------------
780 LOCATE 9,21:PRINT "Y":LOCATE 9,56:PRINT "X":LOCATE 10,15:PRINT "-------------------------------------------------"
790 ON ERROR GOTO 1390
800 FOR X=J TO JJ STEP JJJ
810 GOSUB 110
820 IF Q$="Y" OR Q$="y" THEN LOCATE I,20:PRINT Y:LOCATE I,55:PRINT USING "###.###";X*180/3.1416:GOTO 840
830 IF FLG=0 THEN LOCATE I,20:PRINT Y:LOCATE I,55:PRINT X
840 FLG=0:IF I=19 THEN I=10:LOCATE 21,2:PRINT "PRESS ANY KEY TO CONTINUE" ELSE 870
850 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 850
860 FOR N=11 TO 19:LOCATE N,2:PRINT XX$:NEXT N:I=10
870 I=I+1
880 NEXT X
890 LOCATE 21,2:PRINT "SOLUTION COMPLETED: Start over; Change range of X; Quit"
900 LOCATE 21,22:COLOR 3,0:PRINT "S":LOCATE 21,34:PRINT "C":LOCATE 21,53:PRINT "Q":COLOR 6,0
910 LOCATE 21,60:M$=INKEY$:IF M$="" THEN 910
920 IF M$<>"S" AND M$<>"s" AND M$<>"C" AND M$<>"c" AND M$<>"Q" AND M$<>"q" THEN BEEP:GOTO 910
930 IF M$="S" OR M$="s" THEN 130
940 IF M$="C" OR M$="c" THEN GOSUB 360:GOTO 690
950 IF M$="Q" OR M$="q" THEN 1270
960 END
970 '--------------------------------instructions-------------------------------
980 LOCATE 6,5:PRINT "* This EQUATION SOLVER program solves equations containing a single"
990 LOCATE 7,7:PRINT "variable. Equations must be in the form Y=f(X). You may choose an"
1000 LOCATE 8,7:PRINT "initial value of X, a final value of X and the increment to be"
1010 LOCATE 9,7:PRINT "added on each iteration. Solutions will be displayed for each"
1020 LOCATE 10,7:PRINT "new value until the final value of X is reached or exceeded."
1030 LOCATE 12,5:PRINT "* Example: The equation converting temperature in Farenheit to Celsius"
1040 LOCATE 13,7:PRINT "is C=(5/9)*(F-32). To use EQUATION SOLVER to determine degrees Celsius"
1050 LOCATE 14,7:PRINT "if degrees Farenheit ranges from 25 to 35:"
1060 LOCATE 16,10:PRINT "Enter the equation in the form Y=(5/9)*(X-32).  Enter 25 as the"
1070 LOCATE 17,10:PRINT "initial value of X, 35 as the final value of X and 1 as the"
1080 LOCATE 18,10:PRINT "increment (if you want a solution for each 1 degree Farenheit"
1090 LOCATE 19,10:PRINT "between 25 and 35 degrees. Choose increments that suit your needs."
1100 LOCATE 21,2:COLOR 3,0:PRINT "PRESS 'Q' TO QUIT, ANY OTHER KEY TO CONTINUE"
1110 COLOR 6,0:LOCATE 21,50:L$=INKEY$:IF L$="" THEN 1110
1120 IF L$="Q" OR L$="q" THEN 100
1130 GOSUB 340:GOSUB 350
1140 LOCATE 6,5:PRINT "* Equations that you enter must be continuous over the range that you"
1150 LOCATE 7,7:PRINT "select. If the variable is in the denominator, select a range that"
1160 LOCATE 8,7:PRINT "insures the denominator does not go to zero at any point over the range."
1170 LOCATE 10,5:PRINT "* Use the BACK SPACE key to delete input errors in your equation."
1180 LOCATE 11,7:PRINT "DO NOT USE ARROW KEYS, INSERT OR DELETE KEYS FOR EDITING."
1190 LOCATE 13,5:PRINT "* If the variable (X) appears in any trig function, X will be an"
1200 LOCATE 14,7:PRINT "angle in RADIANS unless you declare X to an angle in DEGREES."
1210 LOCATE 16,5:PRINT "* Entering 'Q' in an equation will abort equation entry."
1220 LOCATE 18,5:PRINT "* BE SURE THAT 'CAPS LOCK' IS IN THE ON POSITION WHEN ENTERING EQUATIONS"
1230 LOCATE 21,2:COLOR 3,0:PRINT "PRESS ANY KEY TO BEGIN":COLOR 6,0
1240 LOCATE 21,27:L$=INKEY$:IF L$="" THEN 1240
1250 GOSUB 340:GOSUB 350:GOTO 380
1260 '-------------------------------quit menu--------------------------------
1270 CLS
1280 LOCATE 10,25:PRINT "RESTART THIS PROGRAM ....... 1"
1290 LOCATE 12,25:PRINT "RETURN TO PLOT MENU ........ 2"
1300 LOCATE 14,25:PRINT "EXIT TO DOS ................ 3"
1310 LOCATE 19,33:PRINT "Make selection"
1320 LOCATE 19,50:H$=INKEY$:IF H$="" THEN 1320
1330 IF VAL(H$)<1 OR VAL(H$)>3 THEN BEEP:GOTO 1320
1340 H=VAL(H$)
1350 ON H GOTO 100,1360,1370
1360 CHAIN "PLOTM
1370 CLS:COLOR 7,0:CHAIN "PLIC
1380 '-----------------------------error handling-----------------------------
1390 IF ERR=2 AND ERL=110 THEN GOSUB 1420:FOR I=1 TO 129:A$(I)="":NEXT I:RESUME 380
1400 IF ERR=11 AND ERL=110 THEN GOSUB 1430:RESUME NEXT
1410 ON ERROR GOTO 0
1420 GOSUB 360:LOCATE 12,26:COLOR 3,0:PRINT "PLEASE CORRECT SYNTAX ERROR":LOCATE 15,3:PRINT "YOUR EQUATION WAS:":LOCATE 16,3:PRINT U$+EQ$:COLOR 6,0:LOCATE 6,18:PRINT STRING$(57,32):LOCATE 7,3:PRINT STRING$(75,32):EQ$="":RETURN
1430 LOCATE I,24:COLOR 3,0:PRINT "division by 0 occured at X = ";X:COLOR 6,0:FLG=1:RETURN
```
{% endraw %}

## FCT1.BAS

{% raw %}
```bas
2390  Y = SIN(X)
```
{% endraw %}

## FCT2.BAS

{% raw %}
```bas
2410 A = 3*COS(B)
```
{% endraw %}

## FCT3.BAS

{% raw %}
```bas
2450 X = A*COS(6*A)
```
{% endraw %}

## FILE1013.TXT

{% raw %}
```
Disk No: 1013
Program Title:  COGOWARE version 5.3b and PLOT version 3.0
PC-SIG version:  1.6

Here are two hot programs for engineers, drafters, or anyone who is
interested in technical drawing on their computer.

COGOWARE is a coordinate geometry surveying program for plat designers.
The main use of the program is to calculate coordinates of each point in
the plane of the survey and of each point calculated by the plat
designer.  Each pair of coordinates is assigned a point number by the
designer as the calculations progress.  These designated coordinates are
saved in batches of 100 points to a disk file.  Any designated point may
be recalled, and the survey extended as the design progresses.  All
calculations are carried out in double precision.

PLOT is a set of quick, easy-to-use tools for technical plotting.  It
can handle rectilinear, polar, and vector plotting.  After plotting, you
can review a tabulation of all plotted points (except for the vector
program).

Usage:  Surveying and Math.

Special Requirements:  CGA card, and a version of BASIC for PLOT.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for COGO, $25.00 for PLOT.

File Descriptions:

-------- ---  COGO
COGO     EXE  Main program.
COGO     DOC  Documentation.
README   1ST  Program introduction.
README   BAT  Batch file to view README.1ST.
WHATS    NEW  Outlines the updated material.
XPLAINS  TXT  Introductory text file.
BALANCE  DOC  Text file.
-------- ---  PLOT
README   DOC  Documentation for PLOT.
HLP3     BAS  Help file accessed from PLOTM.BAS.
IPLOT    BAS  Program for plotting Y=f(X) type equations.
SPLOT    BAS  Program for plotting two simultaneous equations.
PPLOT    BAS  Program for polar plotting.
VPLOT    BAS  Program for vector plotting.
PLOTM    BAS  Contains the plot menu.
PLOG     BAS  Opening screen file.
FUNCT    BAS  Data files containing user defined.
FCT1     BAS  DATA FILE.
FCT2     BAS  DATA FILE.
FCT3     BAS  DATA FILE.
PLIC     BAS  License statement.
EQUAT    BAS  Small basic program.
ESOLVE   BAS  Equation solver.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## FUNCT.BAS

{% raw %}
```bas
2060 Y=SIN(X)
```
{% endraw %}

## HLP3.BAS

{% raw %}
```bas
100 'HLP3 - PLOT HELP PGM. - V 1.0 - Copyright 1985 Prowess, Inc.
110 SCREEN 0,0:CLS:KEY OFF:COLOR 6,0
120 PRINT "                              'PLOT'- HELP PROGRAM"
130 PRINT "                               -------------------"
140 PRINT "INTRODUCTION"
150 PRINT "------------"
160 PRINT "Your PROWESS, Inc. 'PLOT' software is a technical productivity too; that"
170 PRINT "provides a quick means of graphing a variety of functions. These include"
180 PRINT "plotting both rectilinear and polar equations and vectors. In addition, an"
190 PRINT "integrating capability is provided for finding the approximate area under a"
200 PRINT "curve (in rectangular coordinates only). After each plot is completed, you"
210 PRINT "may review a tabulation of all points plotted. BASIC syntax is used for "
220 PRINT "entering all functions. "
230 PRINT
240 PRINT:COLOR 10,0
250 PRINT "A REMINDER: This shareware product may be copied and distributed,"
260 PRINT "            but after a trial period, if you continue to use it,"
270 PRINT "            you are expected to pay the registration fee."
280 PRINT
290 PRINT
300 COLOR 4,0:PRINT "               BE PROFESSIONAL - DON'T MAKE ILLEGAL COPIES.":COLOR 3,0
310 PRINT "
320 LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
330 LOCATE 23,55:Q$=INKEY$:IF Q$="" THEN 330
340 CLS:KEY OFF:PRINT :PRINT
350 COLOR 10,0
360 PRINT
370 PRINT "                                PROGRAM DESCRIPTIONS"
380 PRINT "                                --------------------"
390 PRINT
400 PRINT "                  PLOT Y=f(X)-------(PGM. MENU SELECTION #1)---1":PRINT
410 PRINT "                  POLAR PLOTTING----(PGM. MENU SELECTION #2)---2":PRINT
420 PRINT "                  VECTOR PLOTTING---(PGM. MENU SELECTION #3)---3":PRINT
430 PRINT "                  PLOT SIM. EQ.-----(PGM. MENU SELECTION #4)---4":PRINT
440 PRINT "                  SOLVE EQUATION ---(PGM. MENU SELECTION #5)---5":PRINT
450 PRINT "                  RETURN TO PLOTTING MENU ---------------------6":PRINT
460 PRINT "                  QUIT (to DOS) -------------------------------7":PRINT
470 PRINT
480 PRINT "                                MAKE SELECTION             "
490 LOCATE 22,49:XX$=INKEY$:IF XX$="" OR VAL(XX$)<1 OR VAL(XX$)>7 THEN 490
500 CLS:ON VAL(XX$) GOTO 520,740,980,1200,2020,1890,1920
510 '------------------------------iplot-------------------------------------
520 COLOR 7,0:PRINT "Y=f(X)   (SELECTION #1 ON THE MENU)":COLOR 10,0
530 PRINT
540 PRINT "This program plots single valued functions of X over any range of X that you"
550 PRINT "specify (99999>X>.0001). You will be prompted to enter an equation in the "
560 PRINT "form y=f(x) and to specify a range of X (XMIN,XMAX) over which to plot. The"
570 PRINT "graph will be plotted over the range that you specify, but the X-axis will be"
580 PRINT "labeled + and - the larger of XMIN or XMAX.":PRINT
590 PRINT "Your equation will be evaluated at 200 evenly spaced points between XMIN and"
600 PRINT "XMAX and the largest absolute value of Y determined. This value of Y provides a"
610 PRINT "scaling factor that is used to insure that the graph of the function will fit"
620 PRINT "on the plot field. The Y-axis is labled + and - this largest value of Y.":PRINT
630 PRINT "The total range of X (XMIN to XMAX) is divided by 199 to establish a plotting "
640 PRINT "increment. The first point plotted is XMIN and 199th of the total range of X is"
650 PRINT "added for each of the 200 plot points. This tends to reduce the possibility"
660 PRINT "of division by zero, BUT DOES INSURE THAT IT WON'T OCCUR. If you get  a "
670 PRINT "'division by zero' error message, try a slight change in the range of X."
680 PRINT "After plotting, a tabulation of all plotting point may be viewed.":PRINT
690 PRINT "NOTE: In trig functions, X will be considered an angle in radians!"
700 PRINT
710 COLOR 5,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 10,0
720 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 720
730 CLS:GOTO 1560
740 '-------------------------------pplot-------------------------------------
750 COLOR 7,0:PRINT "POLAR PLOTTING (SELECTION #2 ON THE MENU)":COLOR 10,0
760 PRINT
770 PRINT "This program plots polar equations in polar format. There are two common forms"
780 PRINT "of polar equations:"
790 PRINT
800 PRINT "                     R = f(";CHR$(233);")   OR     Y = f(";CHR$(233);")  AND  X = f(";CHR$(233);")"
810 PRINT
820 PRINT "You will first be prompted to select the desired format. You will then be"
830 PRINT "prompted through the process of entering your equation(s)."
840 PRINT
850 COLOR 7,0:PRINT "               NOTE: ENTER ANY FIXED ANGLES IN RADIANS !!!"
860 PRINT
870 PRINT "    THE PLOT (VARIABLE A) WILL RUN FROM 0 TO 2*PI RADIANS [(0-360) DEGREES]":COLOR 14,0:PRINT
880 PRINT "Your equation(s) will be evaluated every 2 degrees to determine the largest"
890 PRINT "value of R for scaling. (X and Y formats are automatically converted to 'R'"
900 PRINT "format for scaling and plotting. After plotting, you may review a tabulation "
910 PRINT "of all plot points in both 'R' and 'X and Y' formats."
920 PRINT:COLOR 7,0
930 PRINT "      NOTE: The variable in your equation must always be 'A' (for angle)"
940 PRINT "            i.e.;   R = 2 * SIN((A+180)"
950 COLOR 5,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 10,0
960 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 960
970 CLS:GOTO 340
980 '-----------------------------vplot---------------------------------------
990 COLOR 7,0:PRINT "VECTOR PLOTTING  (SELECTION #3 ON THE MENU)":PRINT:COLOR 10,0
1000 PRINT "This program allows you to enter up to 10 vectors, in either polar or"
1010 PRINT "rectangular coordinates. You will be prompted through the inputs."
1020 PRINT
1030 PRINT "If you entered in polar format, a list of vectors representing your inputs will"
1040 PRINT "be shown along with the rectangular coordinates of each point. The coordinates"
1050 PRINT "of the resultant will be displayed in both coordinate systems"
1060 PRINT
1070 PRINT "The longest vector ( including the resultant ) will be used to scale the plot"
1080 PRINT "field and each vector will be shown in polar form. The resultant will be"
1090 PRINT "identified by a large, white terminator circle. The x and y coordinates of the"
1100 PRINT "resultant will be noted beside the graph."
1110 PRINT
1120 PRINT "Vectors input in rectangular format are handled in much the same way."
1130 PRINT
1140 COLOR 6,0:PRINT "        NOTE:  Roundoff errors may result in small calculation errors."
1150 PRINT "               Example:  5  might be represented by 4.9999  etc."
1160 PRINT :PRINT
1170 COLOR 5,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 10,0
1180 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1180
1190 CLS:GOTO 360
1200 '-------------------------------splot-----------------------------------
1210 COLOR 7,0:PRINT "SIMULTANEOUS EQUATION PLOTTING (SELECTION #4 ON THE MENU)":COLOR 10,0:PRINT
1220 PRINT "This program allows you to input two equations, one in the form Y=f(X)."
1230 PRINT "and the other in the form A=f(B) and to plot them both on the same plot field."
1240 PRINT
1250 PRINT "You will be prompted to enter two equations and a range of X. Both equations"
1260 PRINT "will be plotted over the same range (XMIN to XMAX). Plotting increments are"
1270 PRINT "derived by dividing this total range by 199. Plotting starts at XMIN and 199th"
1280 PRINT "of the range is added for each of the 200 iterations. This greatly reduces the"
1290 PRINT "probability of getting a 'divide by zero' error, BUT DOES NOT ELIMINATE IT!!."
1300 PRINT "Should you get a 'divide by zero' error, try changing the range of X by a"
1310 PRINT "small amount. Both equations are evaluated over the whole range to determine"
1320 PRINT "the largest value of Y. The largest value (from either equation) will be used"
1330 PRINT "to scale the Y-axis (+Ymax to -Ymax).":PRINT:COLOR 6,0
1340 PRINT "  NOTE: IF ONE EQUATION PRODUCES VERY LARGE Y-AXIS VALUES AND THE OTHER"
1350 PRINT "        VERY SMALL Y-AXIS VALUES, THE TRUE SHAPE OF THE SMALL-VALUED CURVE"
1360 PRINT "        MAY BE VERY DIFFICULT TO DISCERN. OFTEN, RESTRICTING THE RANGE OF X"
1370 PRINT "        HELPS RESTRICT THE 'Y-VALUES' SO THAT BOTH CURVES ARE WELL PRESENTED."
1380 LOCATE 22,1:COLOR 5,0:PRINT "                          PRESS ANY KEY TO CONTINUE":COLOR 10,0
1390 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1390
1400 CLS:PRINT :PRINT :PRINT "When plotting of the two equations is completed, you may review a tabulation"
1410 PRINT "of all plotted points. This table displays the calculated values of Y and A for"
1420 PRINT "each value of X.":PRINT:COLOR 7,0
1430 PRINT "   NOTE: A RATIONAL FIRST ASSUMPTION IS THAT IF THE CURVES INTERSECT,"
1440 PRINT "         THE TABULATED VALUES SHOULD SHOW THE SOLUTION(S): i,e. Y=A"
1450 PRINT "         FOR A GIVEN X. IF THIS HAPPENS, IT IS PURE CHANCE SINCE THE"
1460 PRINT "         RANGE OF X WAS ARBITRARILY DIVIDED INTO 199 EVEN INCREMEMENTS."
1470 PRINT "         ALTHOUGH EXACT SOLUTIONS ARE NOT LIKELY TO BE DISPLAYED, THE"
1480 PRINT "         TABULAR VALUES OFTEN PROVIDE A SATISFACTORY ANSWER. RESTRICTING"
1490 PRINT "         THE RANGE OF X TO BARELY INCLUDE THE INTERSECTION POINT WILL"
1500 PRINT "         PROVIDE TABULATED VALUES THAT ARE CLOSEST TO THE THE EXACT"
1510 PRINT "         SOLUTION. A FEW ITERATIONS MAY BE REQUIRED."
1520 COLOR 5,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
1530 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1530
1540 CLS:COLOR 10,0:GOTO 360
1550 '------------------------------iplot continued ---------------------------
1560 COLOR 7,0:PRINT "PLOT Y=f(X) AND INTEGRATE (IF DESIRED) (SELECTION #1 ON THE PGM. MENU)":COLOR 10,0:PRINT
1590 PRINT "After the function is plotted, a prompt is displayed that allows you to find"
1600 PRINT "the area under the curve, or go to the next menu.":PRINT
1610 PRINT "If you choose the 'Area' option, you will be prompted to enter a lower limit"
1620 PRINT "of X and an upper limit of X (X1,X2), over which to calculate the area under"
1630 PRINT "the curve. After selection, these limits are displayed as white lines on the:
1640 PRINT "plot field and integration begins immediately. Progress of the integration is""
1650 PRINT "shown by progressive shading over the range of interest. When integration is"
1660 PRINT "completed, the absolute value of the approximate area is displayed. You can"
1670 PRINT "accurately integrate beyond the plotted curve and even beyond the plot field."
1680 PRINT "INTEGRATING BEYOND THE LIMITS OF THE SCREEN IS POSSIBLE, BUT NOT RECOMMENDED.":PRINT:COLOR 6,0
1690 PRINT "      NOTE: THE ACCURACY OF THE AREA CALCULATION IS AFFECTED BY BOTH"
1700 PRINT "            THE FINITE ( 200 INCREMENT ) INTEGRATION AND ROUNDOFF ERRORS"
1710 PRINT "            IN THE COMPUTER. IN MOST CASES, THE ACCURACY OF THE AREA"
1720 PRINT "            IS MUCH BETTER THAN 1%."
1730 LOCATE 22,1:COLOR 5,0:PRINT "                          PRESS ANY KEY TO CONTINUE":COLOR 10,0
1740 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1740
1750 CLS:LOCATE 4,1:COLOR 10,0
1760 PRINT "Note that the 200 increments over which the integration is performed are not"
1770 PRINT "the same increments that were used in plotting the function. The range of X"
1780 PRINT "over which you elected to integrate is separately divided into 200 parts for"
1790 PRINT "the integration routine. After the area is displayed, you may still review"
1800 PRINT "the tabulated plotting points.":PRINT:COLOR 6,0
1810 PRINT "NOTE: It takes no longer to integrate over a broad expanse of the plotted"
1820 PRINT "function than over a small portion since 200 equally spaced points will be"
1830 PRINT "used for integration in either case. Some improvement in area calculation"
1840 PRINT "accuracy is obtained by restricting the plotting range of X to just include"
1850 PRINT "the desired range of integration."
1860 COLOR 5,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 10,0
1870 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1870
1880 CLS:GOTO 360
1890 '---------------------------goto plotting menu---------------------------
1900 CLS
1910 RUN "PLOTM"
1920 '------------------------------return to system--------------------------
1930 CLS:COLOR 10,0:LOCATE 12,31:PRINT "ARE YOU SURE?  Y/N"
1940 LOCATE 12,51:A$=INKEY$:IF A$="" THEN 1940
1950 IF A$="Y" OR A$="y" THEN 1980
1960 IF A$="N" OR A$="n" THEN 340
1970 GOTO 1940
1980 LOCATE 15,30:COLOR 7,0:PRINT "COPY AUDIT #: ";CHR$(4);CHR$(225);CHR$(213);CHR$(177);CHR$(146);CHR$(216);CHR$(6);CHR$(206):FOR I=1 TO 1500:NEXT I
1990 CLS:KEY ON:SYSTEM
2000 END
2010 '-----------------------------esolve-----------------------------------
2020 CLS:COLOR 3,0
2030 PRINT "Equation solver (solve without plotting)":COLOR 14,0:
2040 PRINT "This program provides the capability of solving  single variable equations"
2050 PRINT "while letting the variable take on a range of values. Uses include:":COLOR 11,0
2060 PRINT "           * Simple equation solving"
2070 PRINT "           * Finding an optimum solution"
2080 PRINT "           * Determining a range of interest over which to plot the equation":COLOR 14,0
2090 PRINT "First enter your equation in the form Y = F(X). The equation may be up to"
2100 PRINT "132 characters in length. A character counter will keep track of the number"
2110 PRINT "of characters that you enter. If you make a mistake while entering, use the"
2120 PRINT "BACKSPACE key to erase the mistake, then reenter. DO NOT USE INSERT, DELETE"
2130 PRINT "OR ARROWS KEYS FOR EDITING ! When the equation is completed, press RETURN."
2140 PRINT "You will be prompted to enter an initial value of 'X' and a final value of 'X'."
2150 PRINT "Next, you will enter the desired increment of 'X'. The final prompt will ask"
2160 PRINT "if you intend that 'X' be an angle in DEGREES. If 'X' is not an angle or if"
2170 PRINT "'X'is in radians, answer No."
2180 PRINT "The equation will first be solved using the initial value of 'X'. The equation"
2190 PRINT "will then be solved for X = (X + increment). The specified increment will be"
2200 PRINT "added to the old value of 'X' until the final value that you specified is"
2210 PRINT "reached or exceeded. Each solution and value of 'X' is displayed in tabular"
2220 PRINT "format."
2230 LOCATE 22,28:COLOR 9,0:PRINT "PRESS ANY KEY TO CONTINUE"
2240 LOCATE 22,54:P$=INKEY$:IF P$="" THEN 2240
2250 GOTO 340
```
{% endraw %}

## IPLOT.BAS

{% raw %}
```bas
100 'IPLOT - RECTLINEAR F(X) PLOT WITH INTEGRATION  -- revision date 07/05/88
110 'COPYRIGHT 1985,1986,1987,1988 Prowess, Inc.
120 CLS:KEY OFF:CLEAR,,2000:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,34:PRINT "RECTLINEAR PLOT"
170 LOCATE 3,27:PRINT "Copyright 1988, Prowess, Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V3.0":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 IF FLAG<>0 THEN 340
260 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
270 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 270
280 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2520
290 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 320
300 IF K$="Q" OR K$="q" THEN 2380
310 GOTO 270
320 LOCATE 12,3:PRINT STRING$(75,32)
330 DEFDBL X-Y:PI=3.1415926#
340 COLOR 10,0
350 LOCATE 6,3:PRINT "Enter your equation in the form   Y=f(X) and press 'return'":COLOR 7,0
360 LOCATE 8,3:PRINT "EXAMPLE: Y = 2*X^2 - 20*X - 3  or  Y = exp(-.3*X)*sin(4*X)":LOCATE 10,12:COLOR 15,0:PRINT "Y ="
370 IF FLAG=3 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,9:PRINT "DIVISION BY ZERO OCCURED-REENTER EQUATION AND CHECK RANGE OF X":COLOR 10,0:FLAG=0:LOCATE 14,3
380 IF FLAG=2 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,20:PRINT "PLEASE CHECK FOR SYNTAX ERROR AND REENTER ":COLOR 10,0:FLAG=0:LOCATE 14,3
390 IF FLAG=4 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 17,3:PRINT "AN ILLEGAL FUNCTION CALL WAS MADE-POSSIBLY AN IMMAGINARY NUMBER WAS CREATED"
400 IF FLAG=4 THEN LOCATE 18,3:PRINT " -  REENTER THE EQUATION. CHECK YOUR RANGE SPECIFICATION."
410 COLOR 15,0:FLAG=0:LOCATE 14,3
420 '---------------------inputs user's equation string---------------------
430 B$="2060 Y="          'line # at which user eq. will be placed---------
440 LOCATE 10,16:LINE INPUT EQ$:IF LEN(EQ$)=0 THEN BEEP:GOSUB 530:GOTO 360
450 C$ = B$+EQ$
460 '----------writes the equation string to a file called funct.bas---------
470 OPEN "O",#1,"FUNCT.BAS"
480    PRINT  #1,C$
490 CLOSE #1
500 '-------merges funct.bas with this pgm. and continues execution----------
510 CHAIN MERGE "FUNCT.BAS",560,ALL:ON ERROR GOTO 2080
520 '----------------------clear upper & lower fields-------------------------
530 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
540 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(75,32):NEXT LL:RETURN
550 '----------------------------set abcissa values---------------------------
560 COLOR 10,0
570 GOSUB 530
580 LOCATE 21,3:PRINT "Enter RANGE of X over which to plot. (Xmin,Xmax)":COLOR 12,0
590 LOCATE 7,20:PRINT "NOTE: XMIN must be smaller than XMAX !!!":COLOR 10,0
600 LOCATE 9,3:PRINT "The X-AXIS will be scaled + and - whichever (Xmin or Xmax) has the largest"
610 LOCATE 10,3:PRINT "absolute value."
620 LOCATE 12,3:PRINT "Example: If you wish to plot the function from X = -10 to X = 0, you would"
630 LOCATE 13,3:PRINT "enter -10,0. The X axis would run from -10 to +10 and the function would"
640 LOCATE 14,3:PRINT "be plotted from X = -10 to X = 0, as you requested."
650 COLOR 7,0:LOCATE 16,3:PRINT "Although not required, we recommend that you make the largest absolute"
660 LOCATE 17,3:PRINT "number of the range a multiple of five or ten. This will insure that the"
670 LOCATE 18,3:PRINT "horizontal scale is convenient to work with.":COLOR 6,0
680 LOCATE 21,54:INPUT "",XMIN,XMAX
690 IF XMIN>=XMAX THEN BEEP:LOCATE 21,53:PRINT "              ":GOTO 680
700 INC = (XMAX-XMIN)/199                  'sets up plotting increment of x
710 GOSUB 530
720 '----------------------------set ordinate value----------------------------
730 COLOR 7,0:LOCATE 7,3:PRINT "The vertical axis (Y-axis) is divided into 10 divisions (+ and -). For"
740 LOCATE 8,3:PRINT "ease in evaluating the plotted function, select a maximum value (label) for"
750 LOCATE 9,3:PRINT "the vertical axis that is a 'multiple' of 5 or 10 and is equal to, or"
760 LOCATE 10,3:PRINT "greater than, the expected maximum value of the function over the range"
770 LOCATE 11,3:PRINT "that you have selected.":COLOR 2,0
780 LOCATE 13,3:PRINT "If you press <ENTER> without entering a value, the 'Y' axis will be"
790 LOCATE 14,3:PRINT "auto-scaled. This option is recommended when you can't easily predict the"
800 LOCATE 15,3:PRINT "maximum value of the function or when you are more interested in the curve"
810 LOCATE 16,3:PRINT "shape than specific values at certain points. In the auto-scale mode,"
820 LOCATE 17,3:PRINT "the Y-axis label will be equal to the largest (or smallest) value of Y"
830 LOCATE 18,3:PRINT "encountered over the specified range of X.":COLOR 3.
840 LOCATE 22,3:PRINT "For auto-scaling, press <ENTER> with no entry."
850 LOCATE 21,3:INPUT "Enter maximum Y-axis label (positive number):  ",YB$
860 YB=VAL(YB$)
870 IF YB<0 THEN BEEP:LOCATE 21,50:PRINT "           ":GOTO 840
880 ' ------------determines largest values of x and y for scaling ----------
890 GOSUB 530:COLOR 20,0
900 LOCATE 12,20:PRINT "Finding Max Values of X and Y for Scaling"
910 X=XMIN:LOCATE 23,1:ON ERROR GOTO 2080
920 GOSUB 2060
930 YBIG=ABS(Y):XBIG=ABS(X)
940 FOR K=2 TO 200
950    X = X + INC
960    GOSUB 2060
970    IF ABS(Y) > YBIG THEN YBIG=ABS(Y)
980 NEXT K
990 IF ABS(XMIN) > ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
1000 COLOR 6,0
1010 IF YB=0 THEN YB=YBIG:GOTO 1030
1020 '------------------------draws plotting field-----------------------------
1030 BEEP
1040 SCREEN 2,0:CLS
1050 LINE (137,9.3)-(493,157),7,B      'draws graph field---------------
1060 FOR I=7.38 TO 73.8 STEP 7.38
1070 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA '+ vert grid lines
1080 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA ' - vert grid lines
1090 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA             '+ horiz grid lines
1100 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA             '- horiz grid lines
1110 NEXT I
1120 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
1130 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
1140 ' -------------------prints axis labels, etc. ---------------------------
1150 LOCATE 1,40
1160 PRINT "Y"
1170 LOCATE 11,64
1180 PRINT "X"
1190 LOCATE 2,64
1200 IF YBIG<=0 THEN 1220
1210 PRINT USING "+#######.####";YB:GOTO 1230
1220 PRINT USING "+#.#####";YB
1230 LOCATE 20,65
1240 IF YBIG#<=0 THEN 1260
1250 PRINT USING "#######.####";-YB:GOTO 1270
1260 PRINT USING "#.#####";-YB
1270 LOCATE 20,65:PRINT " "
1280 LOCATE 21,11
1290 IF XBIG<=0 THEN 1310
1300 PRINT USING "#######.####";-XBIG:GOTO 1320
1310 PRINT USING "#.#####";-XBIG
1320 LOCATE 21,11:PRINT " "
1330 LOCATE 21,56
1340 IF XBIG<=0 THEN 1360
1350 PRINT USING "+#######.####";XBIG:GOTO 1370
1360 PRINT USING "+#.#####";XBIG
1370 LOCATE 21,40
1380 PRINT "0"
1390 LOCATE 11,15
1400 PRINT "0"
1410 ' -----------------------plots points------------------------------------
1420 X=XMIN:W$=STRING$(80,32):LOCATE 1,1:PRINT "PLOTTING"
1430 GOSUB 2060
1440 PSET ((315+(X*177)/XBIG),(83.2-(Y*73.8/YB)))    'sets cursor to 1st pt.
1450 FOR K=2 TO 200                            'scales and plots user function
1460    X=X+INC
1470    GOSUB 2060
1480   LINE -((315+(X*177)/XBIG),(83.2-(Y*73.8)/YB)),7
1490 NEXT K
1500 LOCATE 1,1:PRINT "          "
1510 LOCATE 22,1
1520 OPEN "I",2,"FUNCT.BAS"
1530  INPUT #2,T$
1540 LOCATE 1,1:PRINT "GRAPH OF ";MID$(T$,5)
1550 LOCATE 22,1:PRINT W$:LOCATE 22,9:PRINT "Press 'A' to find area under curve, any other key to continue"
1560 LOCATE 22,78:A$=INKEY$:IF A$="" THEN 1560
1570 LOCATE 22,1:PRINT W$
1580 IF A$="A" OR A$="a" THEN GOSUB 2130:LOCATE 15,65:PRINT "PRESS ANY KEY":LOCATE 16,65:PRINT "TO CONTINUE":FOR I=1 TO 3000:NEXT I:LOCATE 15,65:PRINT "             ":LOCATE 16,65:PRINT "           ":GOTO 1600
1590 GOTO 1610
1600 LOCATE 22,78:K$=INKEY$:IF K$="" THEN 1600
1610 CLOSE #2:SCREEN 0,,0,0
1620 CLS  '--------------- provides choice of continuing or not -------------
1630 PRINT :PRINT :PRINT :PRINT :PRINT :COLOR 10,0
1640 PRINT "           DISPLAY A TABLE OF CALCULATED X & Y VALUES .......1"
1650 PRINT "           CHANGE RANGE AND/OR Y-AXIS LABEL .................2"
1660 PRINT "           PLOT A NEW FUNCTION...............................3"
1670 PRINT "           EXIT .............................................4"
1680 PRINT
1690 PRINT "                       MAKE SELECTION "
1700 LOCATE 11,42:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1700
1710 ON VAL(SS$) GOTO 1720,560,120,2390
1720 Q = 12
1730 X=XMIN-INC
1740 CLS
1750 '--------------------------sets up page header---------------------------
1760 COLOR 10,0:PRINT "        POINT #            X                   Y "
1770 LOCATE 18,60:COLOR 6,0:PRINT "PRESS ANY KEY TO"
1780 LOCATE 19,60:PRINT "CONTINUE OR 'Q'"
1790 LOCATE 20,60:PRINT "FOR NEXT MENU."
1800 COLOR 14,0:J=4:K=2:L=1
1810 FOR I=3 TO 22
1820 X=X+INC
1830 GOSUB 2060:IF FLAG=1 THEN LOCATE I:PRINT "                                                         ":GOTO 1870
1840 LOCATE I,11:PRINT L
1850 LOCATE I,18:PRINT USING "#######.####";X
1860 LOCATE I,38:PRINT USING "#######.####";Y
1870 L=L+1
1880 IF L=200 THEN FLAG=1
1890 NEXT I
1900 FLAG=0
1910 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1910
1920 IF A$="Q" OR A$="q" THEN CLS:GOTO 1960
1930 IF L<200 GOTO 1810
1940 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1940
1950 CLS
1960 '-------------------provides choice of continuing or not-----------------
1970 COLOR 10,0:LOCATE 8,1
1980 PRINT "                 PLOT SAME FUNCTION AGAIN ................1"
1990 PRINT "                 CHANGE RANGE AND/OR Y-AXIS LABEL ........2"
2000 PRINT "                 INPUT A NEW FUNCTION ....................3"
2010 PRINT "                 EXIT ....................................4":PRINT
2020 PRINT "                              MAKE SELECTION "
2030 LOCATE 13,47:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 2030
2040 ON VAL(GG$) GOTO 1020,560,120,2390
2050 '------------------------------user function-----------------------------
2060 Y=X
2070 RETURN
2080 '-----------------------error trap routine-syntax,/0,--------------------
2090 IF ERR=2 AND ERL=2060 THEN CLS:FLAG=2:CLS:BEEP:RESUME 140
2100 IF ERR=11 AND (ERL=2060 OR ERL=1440) THEN CLS:BEEP:FLAG=3:RESUME 140
2110 IF ERR=5 AND ERL=2060 THEN CLS:FLAG=4:CLS:BEEP:RESUME 140
2120 ON ERROR GOTO 0:CLS:GOTO 140
2130 Z$=STRING$(79,32) '----integration subroutine----------------------------
2140 LOCATE 23,1:PRINT "Z$":LOCATE 23,1
2150 INPUT "To find AREA between X1 and X2, enter in the form: X1,X2  ";X1,X2
2160 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "INTEGRATING":LOCATE 23,80
2170 X=X1
2180 GOSUB 2060
2190 PSET (315+(X*177/XBIG),83.2)
2200 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YB))),7
2210 X=X2
2220 GOSUB 2060
2230 PSET (315+(X*177/XBIG),83.2)
2240 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YB))),7
2250 AINC = (X2-X1)/251:DA=0
2260 FOR J=X1 TO X2 STEP AINC
2270   X=J+AINC
2280   GOSUB 2060
2290   PSET (315+(X*177/XBIG),83.2)
2300   LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YB))),7
2310   X=J+(AINC/2)
2320   GOSUB 2060
2330   DA=DA+(AINC*ABS(Y))
2340 NEXT J
2350 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "APPROX AREA BETWEEN  ";X1;" AND  ";X2;"  = "
2360 LOCATE 23,45:PRINT USING "#######.####";DA:LOCATE 23,60:PRINT " SQ. UNITS"
2370 RETURN
2380 '-------------------------------quit menu---------------------------------
2390 SCREEN 0,1,0:CLS:COLOR 6,0
2400 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2410 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2415 LOCATE 12,25:PRINT "EXIT TO DOS -----------------------3"
2430 LOCATE 17,30:PRINT "Make selection"
2440 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2440
2450 QT=VAL(Q$)
2460 IF QT<1 OR QT>3 THEN BEEP:GOTO 2440
2470 IF QT=1 THEN 120
2480 IF QT=2 THEN CLS:CHAIN "PLOTM"
2485 IF QT=3 THEN CLS:COLOR 7,0:CHAIN "PLIC
2500 BEEP:GOTO 2440
2510 '---------------------------------help-----------------------------------
2520 GOSUB 530
2530 LOCATE 6,3:PRINT "* This program plots functions of the form Y = f(X) over any range of X"
2540 LOCATE 7,5:PRINT "that you specify."
2550 LOCATE 9,3:PRINT "* If your equation uses letters other than 'Y' and 'X', you will have to"
2560 LOCATE 10,5:PRINT "change to the Y = f(X) format before entering."
2570 LOCATE 12,3:PRINT "* BASIC language syntax must be used when entering your equation. Check"
2580 LOCATE 13,5:PRINT "your BASICA (or equiv.) manual if you are not familiar with handling"
2590 LOCATE 14,5:PRINT "BASIC math statements."
2600 LOCATE 16,3:PRINT "* Although this program contains statements to trap 'division by zero'"
2610 LOCATE 17,5:PRINT "that might occur, BASICA does not allow trapping this error. Some other"
2620 LOCATE 18,5:PRINT "BASICA equivalents DO allow 'division by zero' trapping. If you get a"
2630 LOCATE 19,5:PRINT "'division by zero' error message, you will have to rerun the program."
2640 LOCATE 21,3:PRINT "Press any key to continue"
2650 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2650
2660 GOSUB 530
2670 LOCATE 6,3:PRINT "* To minimize the chance of inadvertently creating a 'divide by zero'"
2680 LOCATE 7,5:PRINT "situation, the program divides the plotting range into 199 parts. Thus,"
2690 LOCATE 8,5:PRINT "if specify that you want an equation plotted from X = -10 to +20, the"
2700 LOCATE 9,5:PRINT "program will first plot the value of Y for X = -10. The next plot point"
2710 LOCATE 10,5:PRINT "will be the value of Y for X = -10 + (30/199). The 30/199 is added to X"
2720 LOCATE 11,5:PRINT "for each iteration. Unless you enter zero as one of the range numbers, the"
2730 LOCATE 12,5:PRINT "likelyhood of accidently dividing by zero is very small."
2740 LOCATE 14,3:PRINT "* After your curve is plotted, you may calculate the approximate area"
2750 LOCATE 15,5:PRINT "between the curve and the X-axis by selecting the 'A' option. Press any"
2760 LOCATE 16,5:PRINT "other key to continue if you don't want to find the area."
2770 LOCATE 18,3:PRINT "* After plotting, you may review the X and Y values for each plotting point."
2780 LOCATE 21,3:PRINT "Press any key to start"
2790 LOCATE 21,25:K$=INKEY$:IF K$="" THEN 2790
2800 GOSUB 530:GOTO 330
```
{% endraw %}

## PLIC.BAS

{% raw %}
```bas
100 'PLIC  -- Prowess, Inc. license agreement 12/17/87
110 CLS:CLEAR:SCREEN 0,0
120 LOCATE 1,28:PRINT "PLOT -- LICENSE AGREEMENT"
130 LOCATE 2,18:PRINT "Copyright 1985,1986,1987,1988 Prowess, Inc."
140 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
150 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
160 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
170 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
180 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $39 (+ $4 s/h) (Full reg.)"
190 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
200 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
210 LOCATE 12,5:PRINT "                                         *  Shareware plea removed"
220 LOCATE 14,18:PRINT "Texas residents, please add 8% sales tax"
230 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
240 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
250 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
260 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
270 LOCATE 21,33:PRINT "(214) 349-4718"
280 LOCATE 23,29:PRINT "Press any key to exit"
290 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 290
300 COLOR 7,0:SYSTEM
```
{% endraw %}

## PLOG.BAS

{% raw %}
```bas
100 'PLOG - LOGO, LICENSE (COLOR SYS)  -  VERSION 3.0 -- 8/02/88
110 ' COPYRIGHT 1985,1986,1987,1988 Prowess  inc.
120 CLEAR:SCREEN 1,0,0
130 CLS:KEY OFF
140 LOCATE 5,16:COLOR 1,1:PRINT "PROWESS inc."
150 LINE (115,40)-(177,40),1
160 LINE (115,40)-(115,90),1
170 LINE (177,40)-(177,90),1
180 LINE (118,94)-(142,94),1
190 LINE (150,94)-(174,94),1
200 CIRCLE (119,91),4,1,3.14,4.712:CIRCLE (173,91),4,1,4.71,0
210 CIRCLE (173,91),4,1,4.71,0
220 CIRCLE (141,97),4,1,0,1.57
230 CIRCLE (151,97),4,1,1.57,3.1422:PSET (146,98),1
240 PSET (146,98),1
250 LINE (118,42)-(174,92),1,B
260 PSET (146,94),1:DRAW "H2 F2 E2 G2"
270 PSET (146,93):PSET (146,92)
280 LINE (118,91.4)-(174,91.4)
290 CIRCLE (198,86),52,1,2.1,3.05
300 CIRCLE (94,86),52,1,0.1,1.05
310 CIRCLE (198,86),58,1,2.01,2.6
320 CIRCLE (94,86),58,1,0.5,1.1
330 PSET (146,65),1
340 PSET (146,48),1:DRAW "U3 D3 D3"
350 PSET (146,48),1:DRAW "H3 F3 F3"
360 PSET (146,48),1:DRAW "E3 G3 G3"
370 PSET (148,48),1:DRAW "H3 F3 F3"
380 PSET (144,48),1:DRAW "E3 G3 G3"
390 LOCATE 14,6:PRINT "Shareware for Technical Design"
400 LOCATE 15,14:PRINT "and Management"
410 LINE (5,130)-(315,165),1,B
420 LOCATE 18,17:PRINT "PLOT"
430 LOCATE 20,2:PRINT "Copyright 1986,1987,1988, Prowess,Inc."
440 LOCATE 1,1:PRINT "1003-B-v3.0"
450 LOCATE 23,7:PRINT "Press any key to continue"
460 LOCATE 21,34:F$=INKEY$:IF F$="" THEN 460
470 WIDTH 80
480 'PLIC  -- Prowess, Inc. license agreement 08/02/88
490 SCREEN 0,0
500 LOCATE 1,28:PRINT "PLOT - LICENSE AGREEMENT"
510 LOCATE 2,20:PRINT "Copyright 1985,1986,1987,1988 Prowess, Inc."
520 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
530 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
540 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
550 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
560 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $39 (+ $4 s/h) (Full reg.)"
570 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
580 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
590 LOCATE 12,5:PRINT "                                         *  Shareware plea removed"
600 LOCATE 14,18:PRINT "Texas residents, please add 8% sales tax"
610 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
620 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
630 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
640 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
650 LOCATE 21,33:PRINT "(214) 349-4718"
660 LOCATE 23,26:PRINT "Press any key to continue"
670 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 670
680 CHAIN "PLOTM
690 END
```
{% endraw %}

## PLOTM.BAS

{% raw %}
```bas
100 'PLOTM PROGRAM MENU -- VERSION - 3.0 -- 08/02/88
110 'Copyright 1986,1987,1988  PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,1,0
130 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,32:PRINT "PLOTTING PROGRAMS"
160 LOCATE 3,26:PRINT "Copyright 1986-1988 Prowess,inc"
170 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
180 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
190 LOCATE 3,75:COLOR 7,0:PRINT "V3.0":COLOR 1,0
200 FOR L=6 TO 19
210 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
220 NEXT L
230 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
240 '-----------------------------------menu-----------------------------------
250 LOCATE 6,38:PRINT "MENU":LOCATE 7,38:PRINT "----"
260 LOCATE 9,5:PRINT "*   PLOT FUNCTION OF THE FORM y = f(x) (also find area under curve) -1"
270 LOCATE 10,5:PRINT "*   PLOT IN POLAR FORMAT  r = f(";CHR$(233);")  or  y = f(";CHR$(233);"); x = f(";CHR$(233);") FORMS ----2"
280 LOCATE 11,5:PRINT "*   PLOT AND RESOLVE VECTORS ( polar of rect. inputs ) --------------3"
290 LOCATE 12,5:PRINT "*   PLOT TWO SIMULTANEOUS EQUATIONS ---------------------------------4"
300 LOCATE 13,5:PRINT "*   SOLVE EQUATION OVER A RANGE OF X WITHOUT PLOTTING ---------------5"
310 LOCATE 14,5:PRINT "*   HELP  ( plotting program descriptions ) -------------------------6"
320 LOCATE 15,5:PRINT "*   QUIT TO DOS -----------------------------------------------------7"
330 LOCATE 21,3:PRINT "ENTER SELECTION NUMBER"
340 LOCATE 21,27:ZZ$=INKEY$:IF ZZ$="" THEN 340
350 IF VAL(ZZ$)<1 OR VAL(ZZ$)>7 THEN BEEP:GOTO 340
360 ON VAL(ZZ$) GOTO 370,380,390,400,410,420,430
370 CLS:CHAIN "IPLOT"
380 CLS:CHAIN "PPLOT"
390 CLS:CHAIN "VPLOT"
400 CLS:CHAIN "SPLOT"
410 CLS:CHAIN "ESOLVE"
420 CLS:CHAIN "HLP3"
430 CLS:COLOR 7,0:CHAIN "PLIC
440 BEEP:GOTO 100
450 GOTO 100
```
{% endraw %}

## PPLOT.BAS

{% raw %}
```bas
100 'PPLOT - POLAR PLOTTING PROGRAM  - 08/02/88 update
110 'Copyright 1985,1986,1987,1988 Prowess, Inc.
120 'THIS PROGRAM RESOLVES AND PLOTS VECTORS
130 CLS:KEY OFF:CLEAR:SCREEN 0,0
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 6,0:XX$=STRING$(78,32)
160 COLOR 3,0:LOCATE 1,20:PRINT CHR$(201)+STRING$(41,205)+CHR$(187)
170 FOR L=2 TO 3:LOCATE L,20:PRINT CHR$(186):LOCATE L,62:PRINT CHR$(186):NEXT L
180 LOCATE 2,35:PRINT "POLAR PLOTTING"
190 LOCATE 3,23:PRINT "Copyright 1986,1987,1988 Prowess,Inc."
200 COLOR 3,0:LOCATE 4,20:PRINT CHR$(200)+STRING$(41,205)+CHR$(188)
210 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
220 LOCATE 3,75:COLOR 7,0:PRINT "V2.1":COLOR 1,0
230 FOR L=6 TO 19
240 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
250 NEXT L
260 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
270 IF SKIP=1 THEN 390
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2780
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 390
320 IF K$="Q" OR K$="q" THEN 2650
330 GOTO 290
340 '-----------------------clear pgm. field subroutine------------------------
350 FOR LL= 6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
360 '---------------------clear message panel subroutine-----------------------
370 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
380 '--------------------------enter polar equation(s)-------------------------
390 COLOR 6,0:PI=3.1415926#:BIG=0:AMIN=0:AMAX=360:SKIP=0
400 LOCATE 10,10:PRINT "Polar equations of the form:   r = f(";CHR$(233);")................1"
410 LOCATE 12,10:PRINT "Polar equations of the form:  x = f(";CHR$(233);") and y = f(";CHR$(233);")....2"
420 LOCATE 21,3:PRINT "Enter selection number"
430 LOCATE 21,27:EE$=INKEY$:IF EE$=""  THEN 430
440 IF EE$="Q" OR EE$="q" THEN 2650
450 IF VAL(EE$)<1 OR VAL(EE$)>2 THEN BEEP:GOTO 430
460 IF VAL(EE$)=1 THEN 480
470 IF VAL(EE$)=2 THEN 680
480 GOSUB 350:GOSUB 370
490 COLOR 10,0:ON ERROR GOTO 0:LOCATE 10,1
500 LOCATE 10,17:PRINT "ENTER YOUR POLAR EQUATION IN THE FORM  R = f(A)"
510 LOCATE 12,10:COLOR 7,0:PRINT "EXAMPLE:"
520 LOCATE 12,19:PRINT "R = 10 * SIN(2*A)":COLOR 15,0
530 LOCATE 14,19:PRINT "R = "
540 LOCATE 14,23:LINE INPUT EQ1$
550 IF EQ1$="Q" OR EQ1$="q" THEN 2650
560 IF LEN(EQ1$)=0 THEN BEEP:GOTO 540
570 B$="2410 R = "
580 C$ = B$+EQ1$
590 '------------writes the equation string to a file called fct1.bas-----------
600 OPEN "O",#1,"FCT1.BAS"
610    PRINT #1,C$
620 CLOSE #1
630 '-----------merges fct1.bas with this pgm. and continues execution ---------
640 CHAIN MERGE "FCT1.BAS",650,ALL
650 GOTO 1010
660 GOSUB 350:GOSUB 370
670 '--------------------------enter parametric form--------------------------
680 GOSUB 350:GOSUB 370
690 LOCATE 6,17:COLOR 7,0:PRINT "You will enter two equations: Y = f("CHR$(233);") and X = f(";CHR$(233);")"
700 ON ERROR GOTO 0
710 LOCATE 8,5:COLOR 6,0:PRINT "Enter the 1st equation in the form  Y = f(A) & press 'RETURN'"
720 LOCATE 10,10:COLOR 7,0:PRINT "EXAMPLE:  Y = 5 * SIN(2*A)"
730 LOCATE 12,20:COLOR 15,0:PRINT "Y = "
740 LOCATE 12,24:LINE INPUT EQ2$
750 D$ = "2430 Y = "
760 IF EQ2$="Q" OR EQ2$="q" THEN BEEP:GOTO 2650
770 IF LEN(EQ2$)=0 THEN BEEP:GOTO 740
780 E$ = D$+EQ2$
790 '----------------writes 1st equation to file called fct2.bas --------------
800 OPEN "O",#2,"FCT2.BAS"
810   PRINT #2,E$
820 CLOSE #2:COLOR 10,0
830 IF FLAG=3 THEN FLAG=0:CHAIN MERGE "FCT2.BAS",850,ALL:GOTO 1140
840 '----------------------------enter 2nd function--------------------------
850 LOCATE 14,5:COLOR 6,0:PRINT "Enter the 2nd equation in the form  x = f(A) & press 'RETURN'"
860 LOCATE 16,10:COLOR 7,0:PRINT "EXAMPLE:  X = COS(A/4)"
870 LOCATE 18,20:COLOR 15,0:PRINT "X ="
880 G$ = "2450 X = "
890 LOCATE 18,24:COLOR 15,0:LINE INPUT EQ3$
900 IF EQ3$="Q" OR EQ3$="q" THEN 2650
910 IF LEN(EQ3$)=0 THEN BEEP:GOTO 890
920 F$ = G$+EQ3$
930 '-----------------writes 2nd equation to a file called fct3.bas------------
940 OPEN "O",#3,"FCT3.BAS"
950    PRINT #3,F$
960 CLOSE #3
970 '-----merges fct2.bas & fct3.bas with this pgm and continues execution-----
980 CHAIN MERGE "FCT2.BAS",990,ALL
990 CHAIN MERGE "FCT3.BAS",1000,ALL
1000 IF VAL(EE$)=1 THEN 1050 ELSE 1150
1010 '------------------finds largest value of r for scaling-------------------
1020 GOSUB 350:GOSUB 370:ON ERROR GOTO 2570
1030 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1040 LOCATE 23,80:RMAX=0
1050 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1060   GOSUB 2410
1070   YP=R*SIN(A)
1080   XP=R*COS(A)
1090 IF R>RMAX THEN RMAX=R
1100   IF ABS(YP)>BIG THEN BIG=ABS(YP)
1110   IF ABS(XP)>BIG THEN BIG=ABS(XP)
1120 NEXT A
1130 GOTO 1280
1140 '----------------finds largest valueof y and x for scaling---------------
1150 GOSUB 350:GOSUB 370::ON ERROR GOTO 2570
1160 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1170 LOCATE 24,1:RMAX=0
1180 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1190  GOSUB 2430
1200  IF ABS(Y)>BIG THEN BIG=ABS(Y)
1210  GOSUB 2450
1220  IF ABS(X)>BIG THEN BIG=ABS(X)
1230 R=SQR(X^2+Y^2)
1240 IF R>RMAX THEN RMAX=R
1250 NEXT A
1260 GOTO 1280
1270 '---------------------------set-up plot field----------------------------
1280 CLS:SCREEN 2,0,0
1290 FOR ANG=0 TO 6.2831853# STEP 0.785398163#
1300 J=ANG
1310 PSET (311.2,100),1
1320 LINE -(311.2+(360*COS(J)),100+(133.3*SIN(J))),0
1330 NEXT ANG
1340 LINE (106.7,100)-(511.2,100),1,,&HAAAA    '-draws horizontal axis--------
1350 LINE (311.2,22.2)-(311.2,183.3),1,,&HAAAA '-draws vertical axis---------
1360 LOCATE 13,64
1370 PRINT "0 (2*PI)"
1380 LOCATE 3,35
1390 PRINT "90 (PI/2)"
1400 LOCATE 13,8
1410 PRINT "180 (PI)"
1420 LOCATE 23,35
1430 PRINT "270 (3*PI/2)"
1440 IF VAL(EE$) = 2 THEN 1700
1450 '------------------plot routine for the r=f(ang) case------------------
1460 A=AMIN*PI/180
1470 GOSUB 2410
1480 YP=R*SIN(A)*70/BIG
1490 XP=R*COS(A)*168/BIG
1500 LOCATE 23,1:PRINT "PLOTTING"
1510 PSET (311.2+XP,100-YP)          '----sets 1st point for r=f(a)---------
1520 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1530    GOSUB 2410
1540    YP=R*SIN(A)*70/BIG
1550    XP=R*COS(A)*168/BIG
1560    LINE -(311.2 + XP,100-YP)     '----------draws graph of r=f(a)--------
1570 NEXT A
1580 OPEN "I",#1,"FCT1.BAS"
1590   INPUT #1,J$
1600   LOCATE 1,1
1610   PRINT "GRAPH OF: ";MID$(J$,5)
1620 CLOSE #1
1630 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1640 LOCATE 23,1:PRINT "                    "
1650 LOCATE 20,70:PRINT "PRESS ANY"
1660 LOCATE 21,70:PRINT "  KEY":FOR I=1 TO 2000:NEXT I
1670 LOCATE 20,70:PRINT "          ":LOCATE 21,70:PRINT "         "
1680 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1680
1690 GOTO 1970
1700 '---------------plot routine for the y=f(ang),x=f(ang) case-------------
1710 A=AMIN*PI/180
1720 GOSUB 2430
1730 GOSUB 2450
1740 LOCATE 23,1:PRINT "PLOTTING"
1750 PSET (311.2+((X*168)/BIG),100-(Y*70/BIG))  '---sets 1st point (x & y)---
1760 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1770     GOSUB 2430
1780     GOSUB 2450
1790     LINE -(311.2+(X*168/BIG),100-(Y*70/BIG))  'plots x-y =f(a) graph----
1800 NEXT A
1810 OPEN "I",#2,"FCT2.BAS"
1820 OPEN "I",#3,"FCT3.BAS"
1830   INPUT #2,K$
1840   INPUT #3,L$
1850   LOCATE 1,1
1860   PRINT "GRAPH OF: ";MID$(K$,5)
1870   LOCATE 2,11
1880   PRINT MID$(L$,5)
1890 CLOSE #3
1900 CLOSE #2
1910 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1920 LOCATE 23,1:PRINT "              "
1930 LOCATE 20,70:PRINT "PRESS ANY"
1940 LOCATE 21,70:PRINT "   KEY":FOR I=1 TO 2000:NEXT I
1950 LOCATE 20,70:PRINT "         ":LOCATE 21,70:PRINT "          "
1960 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1960
1970 CLS                   '-------------header for tabular list--------------
1980 SCREEN 0,0:COLOR 6,0:SKIP=1
1990 LOCATE 10,23:PRINT "DISPLAY TABULAR VALUES ..........1"
2000 LOCATE 12,23:PRINT "START OVER ......................2"
2010 LOCATE 14,23:PRINT "EXIT ............................3"
2020 LOCATE 21,29:PRINT "Enter selection number"
2030 LOCATE 21,53:AA$=INKEY$:IF AA$="" THEN 2030
2040 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 2030
2050 ON VAL(AA$) GOTO 2070,2060,2650
2060 CLS:GOTO 150
2070 CLS                 '--routine for displaying calculated values-------
2080 T=-2:ON ERROR GOTO 0
2090 Z=18:CNT=0:SCREEN 0,1,0
2100 COLOR 6,0:PRINT
2110   'PAGE HEADER
2120   LOCATE 2,1
2130   PRINT "  POINT        ANGLE      ANGLE      R         X         Y"
2140   PRINT "    #          (DEG)      (RAD)"
2150   PRINT :PRINT:COLOR 7,0
2160    FOR Q=1 TO 18
2170      T=T+2
2180      CNT=CNT+1
2190      A=T*PI/180
2200      IF VAL(EE$)=1 THEN GOSUB 2470 ELSE GOSUB 2520
2210      LOCATE Q+4,1:PRINT "   ";CNT," ";T
2220      LOCATE Q+4,23:PRINT USING "#####.####";A,R,X,Y
2230      IF T>=360 THEN FLAG=1:GOTO 2280
2240    NEXT Q
2250 COLOR 6,0:LOCATE 19,65:PRINT "PRESS ANY KEY TO"
2260 LOCATE 20,65:PRINT "CONTINUE OR 'Q'"
2270 LOCATE 21,65:PRINT "FOR NEXT MENU"
2280 LOCATE 22,69:A$=INKEY$:IF A$="" THEN 2280
2290 IF FLAG =1 THEN FLAG=0:CLS:GOTO 2320
2300 IF A$="Q" OR A$="q" THEN 2320
2310 CLS:Z=Z+18:GOTO 2100
2320 CLS:COLOR 6,0:SKIP=1
2330 LOCATE 10,23:PRINT "ENTER A NEW POLAR FUNCTION ......1"
2340 LOCATE 12,23:PRINT "EXIT MENU .......................2"
2350 LOCATE 21,29:PRINT "Enter selection number"
2360 LOCATE 21,53:GG$=INKEY$:IF GG$="" THEN 2360
2370 IF VAL(GG$)<1 OR VAL(GG$)>2 THEN 2360
2380 ON VAL(GG$) GOTO 2390,2650
2390 GOSUB 350:GOSUB 370:GOTO 150
2400 '-------------------------------user functions--------------------------
2410 R = A*COS(5*A)
2420 RETURN
2430 Y = 5*SIN(2*A)
2440 RETURN
2450 X = 3*COS(3*A)
2460 RETURN
2470 '-----------------subroutine for calculating r=f(a) values--------------
2480 GOSUB 2410
2490 X=R*COS(A)
2500 Y=R*SIN(A)
2510 RETURN
2520 '-------------subroutine for calculating x=f(a) & y=f(a) values---------
2530 GOSUB 2430
2540 GOSUB 2450
2550 R=SQR(X^2+Y^2)
2560 RETURN
2570 '-------------------------------error traps-------------------------------
2580 IF ERR=2 AND ERL=2410 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION R = ";EQ1$:LOCATE 21,21+LEN(EQ1$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":RESUME 490
2590 IF ERR=2 AND ERL=2430 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION Y = ";EQ2$:LOCATE 21,21+LEN(EQ2$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":FLAG=3:COLOR 7,0:RESUME 690
2600 IF ERR=2 AND ERL=2450 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION X = ";EQ3$:LOCATE 21,21+LEN(EQ3$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":COLOR 7,0:RESUME 830
2610 IF (ERR=11 OR ERR=6) AND (ERL=1060 OR ERL=1190 OR ERL=1210) THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED-CHECK YOUR EQUATION AND START OVER":COLOR 7,0:RESUME  100
2620 LOCATE 21,3:COLOR 15,4:PRINT "---------------FATAL ERROR START OVER------------":FOR I=1 TO 2000:NEXT I:CLS:COLOR 6,0:GOTO 100
2630 RESUME 100
2640 '-----------------------------------quit---------------------------------
2650 GOSUB 370:GOSUB 350:COLOR 6,0
2660 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2670 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2675 LOCATE 12,25:PRINT "EXIT TO DOS -----------------------3"
2690 LOCATE 21,29:PRINT "Enter selection number"
2700 LOCATE 21,53:Q$=INKEY$:IF Q$="" THEN 2700
2710 QT=VAL(Q$)
2720 IF QT<1 OR QT>3 THEN BEEP:GOTO 2700
2730 IF QT=1 THEN 100
2740 IF QT=2 THEN CLS:CHAIN "PLOTM
2745 IF QT=3 THEN CLS:COLOR 7,0:CHAIN "PLIC
2760 BEEP:GOTO 2700
2770 '-----------------------------------help----------------------------------
2780 GOSUB 370:GOSUB 350
2790 LOCATE 6,3:PRINT "* This program plots polar functions. It will handle both standard forms"
2800 LOCATE 7,5:PRINT "R = f(angle) and parametric forms Y = f(angle) and X = f(angle)."
2810 LOCATE 9,3:PRINT "* The value(s) of your function will be calculated from 0 to 360 degrees,"
2820 LOCATE 10,5:PRINT "in 2 degree increments, and plotted."
2830 LOCATE 12,3:PRINT "* Standard format R = f(angle) - The length of a radius (R), from 0,0,"
2840 LOCATE 13,5:PRINT "is expressed in terms of the angle (A). Example: R = A  generates a"
2850 LOCATE 14,5:PRINT "spiral;   R = SIN(3*A)  generates a three-leaf rose."
2860 LOCATE 16,3:PRINT "* Parametric format Y = f(angle) & X = f(angle) - The values of Y and X"
2870 LOCATE 17,5:PRINT "are independently expressed in terms of the angle. Example: Y = 5*SIN(2*A)"
2880 LOCATE 18,5:PRINT "and X = 3*COS(3*A) - generates a lissajous pattern."
2890 LOCATE 21,3:PRINT "Press any key to continue"
2900 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2900
2910 IF K$="Q" OR K$="q" THEN CLS:GOTO 2650
2920 GOSUB 370:GOSUB 350
2930 LOCATE 6,3:PRINT "* This program features full autoscaling, e.g. no matter how large a value"
2940 LOCATE 7,5:PRINT "is calculated (within the computer's capability), it will 'fit' within"
2950 LOCATE 8,5:PRINT "the plot field. This can create a problem if both very large and very"
2960 LOCATE 9,5:PRINT "small values are generated. Because the plot field is scalled to handle"
2970 LOCATE 10,5:PRINT "the largest value, plotting details of the smaller values may be lost"
2980 LOCATE 11,5:PRINT "because of the finite resolution of the screen."
2990 LOCATE 13,3:PRINT "* After plotting your function, you may review all of the plotting points"
3000 LOCATE 14,5:PRINT "in tabular format. Regardless of the polar format that you used, the"
3010 LOCATE 15,5:PRINT "tabular display shows the value of R, X and Y for each two-degree"
3020 LOCATE 16,5:PRINT "increment."
3030 LOCATE 18,3:PRINT "* The IBM-PC does not allow error trapping of 'division by zero'. If your"
3040 LOCATE 19,5:PRINT "function accidently tries to divide by zero, you will have to start over!"
3050 LOCATE 21,3:PRINT "Press any key to start
3060 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 3060
3070 GOSUB 350:GOSUB 370:GOTO 390
```
{% endraw %}

## README.DOC

{% raw %}
```

Readme.doc


                             PLOT -- DOCUMENTATION


                            PLOT-- LICENSE AGREEMENT
		  Copyright 1985,1986,1987,1988 Prowess, Inc.


     This is a user supported software product.  It is not public domain
     software, nor is it free software. You are granted a limited license
     to use this product on a trial basis.   If you continue to use this
     product after a trial period, you are expected to register by sending:

	   $25 (Minimum reg.)	       or	 $39 (+ $4 S/H) (Full reg.)

           * Technical support                   *  Technical support
           * Update notification                 *  Latest diskette
						 *  Shareware plea removed

		 Texas residents, please add 8% sales tax

         Contact us for information concerning low cost site licenses.

     If you like the shareware concept - try before you buy - please support the
     companies that provide useful, professional quality products.

       Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas  75238

                               (214) 349-4718


     You are encouraged to distribute copies of this software providing
     that you make no modifications to any of the files and that the copy
     that you distribute, regardless of the means of distribution, contains
     all files that came on your product diskette.

                                   DISCLAIMER
                                   ----------

     This software product and associated instructional material are sold
     "as is" without warranty as to their performance, accuracy, freedom
     from error, merchantability or fitness for any particular purpose.
     The entire risk as to the performance of the software is assumed by
     the user.

     Under no circumstances, whether in contract or tort, shall Prowess,
     Inc. be liable for indirect, consequential, special, or exemplary
     damages such as, but not limited to, loss of revenue or anticipated
     profits, lost business or other economic loss, arising out of, or
     in connection with this agreement, or your use, or inability to use
     any program or sub-program associated with this software product.

          ------------------------------------------------------------












                                    CONTENTS

                        * File descriptions

                        * Minimum system requirements

                        * Introduction

                        * Working diskette preparation

                        * Loading/running the plot programs

                        * General information about these programs

                        * Other Prowess, Inc. shareware products

          ----------------------------------------------------------------

                               FILE DESCRIPTIONS

          The following files are contained on your product diskette:

 README.DOC                     This file. Documentation for PLOT

 HLP3.BAS                       Help file accessed from PLOTM.BAS. Provides
                                the most detailed information on all plot
                                programs.

 IPLOT.BAS                      Program for plotting Y=f(X) type equations.
                                It also provide integration capability to
                                find the area under a curve.

 SPLOT.BAS                      Program for plotting two simultaneous
                                equations.

 PPLOT.BAS                      Program for polar plotting.

 VPLOT.BAS                      Program for vector plotting.

 PLOTM.BAS                      Contains the plot menu. Calls the available
                                plotting programs and help file.

 PLOG.BAS                       Opening screen files - logo, etc. Calls
                                PLOTM.BAS.

 FUNCT.BAS                      Data files containing user defined
 FCT1.BAS                       equations. These files are automatically
 FCT2.BAS                       generated when you use the plotting
 FCT3.BAS                       programs. These file are generated as a
                                result of running the plotting programs.
                                They may or may not be present on your
                                product diskette.

 PLIC.BAS                       License statement.

             --------------------------------------------------------












                          MINIMUM SYSTEM REQUIREMENTS

      * IBM-PC or 100% compatible                    * CGA graphics

      * BASICA (or equivalent, GW-BASIC, etc.)       * 64K RAM

      * DOS 2.1 or above                             * 1 Floppy drive

                   -------------------------------------------

                                  INTRODUCTION

 This program set is designed to provide a quick, easy to use, set of tools
 for technical plotting. It will handle rectilinear, polar and vector
 plotting. After plotting, you may review a tabulation of all plotted points
 (except for the vector program).

 These programs were written in BASICA to take advantage of a unique BASICA
 capability - the CHAIN MERGE feature. When you enter an equation to be
 plotted, you may enter it just as you would write it on paper. The
 program accepts your equation as a string variable, appends your equation
 to a string that defines a line number then writes the whole string to a
 file (FCT1.BAS for example). This file is then CHAIN MERGED with the
 program itself and your equation becomes an executable line of code,
 complete with a line number in the program. Unfortunately, existing
 compilers can not compile the CHAIN MERGE statement.

 We felt that being able to enter the equation in standard equation format was
 so important that we have released these programs in BASICA.  No other
 language that we know of allows a chain-merge-like function and writing the
 function in another language would be a formidable task. Chalk one up for
 BASIC! Although not extremely fast, we think that you will find the plotting
 speed of these programs satisfactory.

 SPECIAL NOTE: Because of the technique mentioned above, you will render
               these programs INOPERATIVE IF YOU RENUMBER THE LINES !!!

 There is a master help file accessable from the main menu (HLP3.BAS). It is
 a separate program that describes each program in detail. It is your best
 source of information about program specifics.

 In addition to HLP3.BAS, each program contains a brief help (or
 instruction) section for quick reference.

                  -----------------------------------------------

                            MAKE A WORKING DISKETTE

 Protect your investment; make a working copy of your PLOT product diskette
 now!

		1. Format a new diskette

		   Example:  FORMAT B:

                   (Assumes system diskette in drive A and new diskette in
                   drive B.)








		2. Copy your BASICA.COM to the working diskette.

			       COPY BASICA.COM B:

                   If your system uses a different advanced BASIC,  you will
		   need to copy it to the working disk.

		   Example:    COPY GW-BASIC.EXE B:

                3. Copy all files from your product diskette to the newly
                   formatted diskette.

		   Example:    COPY *.*  B:

                   (Assumes product diskette in drive A and formatted diskette
                   in drive B.)


                4. Label your working diskette PLOT.

                5. Put your PLOT product diskette in a safe place.


          NOTE: If you are using a hard disk, set up a separate directory
                for PLOT and start with step #2 above, substituting C: for
                B:.

            ------------------------------------------------------------

                     LOADING AND RUNNING THE PLOT PROGRAMS

 Put your working diskette in drive A (or get into the PLOT directory if
 you are using a hard disk). Enter:

			   BASICA PLOG	<return>

		   or	   GW-BASIC PLOG <return> (if your system uses
						   GW-BASIC)



 Pressing any key from the logo screen will display the Prowess, Inc.
 license statement. Pressing any key at this point will call the main menu.

 From the main menu, you may select any of the plotting programs. We strongly
 suggest that you review the main help file (accessable from the main menu)
 before operating the programs.

 NOTE: If your DOS operating system contains a utility called GRAPHICS.COM
 (DOS 2.1 and greater), you may want to load it prior to running the PLOT
 programs. With GRAPHICS.COM memory resident, you can print the graphs
 produced by the PLOT package on most wire dot printers by simply pressing
 <shift-prtSc>. You can load GRAPHICS.COM by entering: GRAPHICS <return> from
 your system disk.

                 -------------------------------------------------










                              GENERAL INFORMATION

 BASIC is rather unforgiving about comma errors; if you enter a period
 instead of a comma or fail to put a comma where the program is expecting
 one, you will see a 'REDO FROM START' error message. If this occurs, you
 can usually recover by re-entering the data correctly AT THE CURRENT
 CURSOR POSITION. If you try to move the cursor before correcting your
 entry, you'll make things worse! In most cases the messy screen will be
 redrawn when the function is plotted. Specifying the range of X over
 which to plot, the range of X over which to integrate, and inputting
 vectors (in both rectangular and polar formats) require entries in the
 form of M,N. The comma is a requirement!!

 BASICA does not allow error trapping 'division by zero' and 'overflow'
 (a floating point overflow). Some BASICA equivalents do allow trapping
 these errors. Error trapping statements exist in the programs to detect
 these errors; however, they won't operate on the IBM-PC. They will work
 properly on some clones that use a different advanced BASIC. If you get
 either of these error messages, from the system, you will have to restart
 the program. Most syntax errors are trapped and the error traps should
 work.

 Entering a single 'Q' (for 'quit') and pressing return, at most user inputs,
 will halt the current operation and display the exit screen.

                ------------------------------------------------------


      If you like this program set, try our other Prowess , Inc. shareware
      tools:
                                                                     
                                                                     
	    * $PRO - financial programs (ammortization, etc.)
	    * AUTOMATED PLANNING FORM - excellent planning tool!!!!
	    * UNITS - units conversions (incl. systems of units)
	    * PROMENU - elegant, small, FULL-FEATURED menu system
	    * DOSPRO - access to DOS commands from plain-English
                                                                     
      Prowess, Inc. shareware program sets are carried by PC-SIG and other
      major shareware distributors and many bulletin boards.
                                                                     
      Our non-shareware products include FRONT LINE MANAGER, a complete
      cost forecasting system that includes material tracking. $245
                                                                     
      DESIGNER SERIES -A large (1.2BM) technical resource that includes:
                                                                     
               * Project planning                                    
	       * Circuit design (both DC and AC) - extensive!
               * Magnetics design                                    
               * Complete function plotting (polar, rect., vectors)  
	       * Math utilities (complex numbers, line equations, etc.)
               * Units conversions                                   
               * Geometry calculations                               
	       ..over 65 menu selectable programs - on-screen help files
                                                                     
	       A productivity tool for senior engineers, yet simple enough
	       for technicians and technical students.

               CGA graphics required for many programs               
			   ......  Call for price  ......



```
{% endraw %}

## SPLOT.BAS

{% raw %}
```bas
100 'SPLOT - SHAREWARE SIM. EQ. PLOTTING PROGRAM  - revision date: 08/02/88
110 'Copyright 1985,1986,1987,1988 Prowess, Inc.
120 'This progem plots two simultaneous equations
130 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 3,0:LOCATE 1,23:PRINT CHR$(201)+STRING$(35,205)+CHR$(187)
160 FOR L=2 TO 3:LOCATE L,23:PRINT CHR$(186):LOCATE L,59:PRINT CHR$(186):NEXT L
170 LOCATE 2,28:PRINT "PLOT SIMULTANEOUS EQUATIONS"
180 LOCATE 3,26:PRINT "Copyright 1985-1988 Prowess,Inc."
190 COLOR 3,0:LOCATE 4,23:PRINT CHR$(200)+STRING$(35,205)+CHR$(188)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V3.0":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 IF SKIP=1 THEN 690
270 IF SKIP=2 THEN 430
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2650
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 380
320 IF K$="Q" OR K$="q" THEN 2520
330 GOTO 290
340 '--------------------------clear field subroutines------------------------
350 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
360 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
370 '-------------------------------------------------------------------------
380 LOCATE 12,3:PRINT STRING$(75,32)
390 IF FLAG=>1 THEN LOCATE 21,3:PRINT "Your previous equations were:":LOCATE 22,3:PRINT "Y = ";EQ1$;" and  A = ";EQ2$
400 IF FLAG=1 OR FLAG=3 THEN 430
410 IF FLAG=2 OR FLAG=4 THEN 520
420 '------------------------inputs two user defined equations-----------------
430 LOCATE 6,3:PRINT "Enter the first equation in the form:  y = f(x)"
440 LOCATE 8,10:COLOR 7,0:PRINT "Example:  Y = X^3 -(2*X^2) + X - 10"
450 W$ = "2390  Y = ":LOCATE 10,19:COLOR 15,0:PRINT "Y = ":LOCATE 10,24
460 LINE INPUT EQ1$:IF LEN(EQ1$)=0 THEN BEEP:GOTO 460  'inputs user string-----
470 S$ = W$+EQ1$              'adds correct line # to 1st equation string------
480 OPEN "O",#1,"FCT1.BAS"    'writes 1st equation to the file fct1.bas--------
490   PRINT #1,S$
500 CLOSE #1
510 IF FLAG=1 OR FLAG=3 THEN 640
520 LOCATE 14,1:COLOR 6,0
530 LOCATE 14,3:PRINT "Enter the second equation in the form  A = f(B)"
540 COLOR 7,0
550 LOCATE 16,10:PRINT "EXAMPLE: A = 2*EXP(-SIN(B))"
560 LOCATE 18,19:COLOR 15,0:PRINT "A = ":LOCATE 18,24
570 Q$ = "2410 A = "
580 COLOR 15,0:LINE INPUT EQ2$:IF LEN(EQ2$)=0 THEN BEEP:GOTO 580  'inputs 2nd user string-
590 SS$ = Q$+EQ2$             'adds correct line# to 2nd equation string-------
600 OPEN "O",#2,"FCT2.BAS"    'writes 2nd equation to the file fct2.bas--------
610   PRINT #2,SS$
620 CLOSE #2
630 ' -------------merges fct1.bas and fct2.bas with this pgm -----------------
640 CHAIN MERGE "FCT1.BAS",650,ALL
650 IF FLAG=1 THEN FLAG =0:GOTO 980
660 CHAIN MERGE "FCT2.BAS",680,ALL
670 '---------------------set abcissa range (range of X)-----------------------
680 IF FLAG=1 OR FLAG=2 THEN 980
690 GOSUB 350
700 LOCATE 7,20:COLOR 14,0:PRINT "NOTE: XMIN must be smaller than XMAX !!!"
710 LOCATE 9,3:COLOR 7,0:PRINT "The X-axis will be scaled + and - whichever (Xmen or Xmax) has the largest"
720 LOCATE 10,3:PRINT "absolute value."
730 LOCATE 12,3:PRINT "Example: If you wish to plot the functions from X = -15 to X = +5, you"
740 LOCATE 13,3:PRINT "would enter -15,5. The axis would run from -15 to +15 and the function"
750 LOCATE 14,3:PRINT "would be plotted from X = -15 to X = 5, as you requested."
760 COLOR 7,0:LOCATE 16,3:PRINT "Although not required, we recommend that you make the largest absolute value"
770 LOCATE 17,3:PRINT "of the range a 'multiple' of 5 or 10. This will insure that the horizontal"
780 LOCATE 18,3:PRINT "scale is convenient to work with. Example: -100,0 or -5,5 or -40,150.":COLOR 6,0
790 LOCATE 21,3:COLOR 6,0:INPUT "Enter RANGE of X over which to plot. (Xmin,Xmax) ",XMIN,XMAX
800 IF XMIN>XMAX THEN BEEP:LOCATE 21,52:PRINT "                  ":GOTO 790
810 '-----------------------------set ordinate value---------------------------
820 GOSUB 350:COLOR 7,0:LOCATE 6,3:PRINT "The vertical axis (Y-axis) is divided into 10 divisions (+ and -). For"
830 LOCATE 7,3:PRINT "ease in evaluating the plotted curves, select a maximum value (label) for"
840 LOCATE 8,3:PRINT "the vertical axis that is a 'multiple' of 5 or 10 AND is equal to, or"
850 LOCATE 9,3:PRINT "greater than, the expected maximum value of either function over the range"
860 LOCATE 10,3:PRINT "that you have selected."
870 LOCATE 12,3:PRINT "If you press <ENTER> without entering a value, the Y-axis will be auto-"
880 LOCATE 13,3:PRINT "scaled. This option is recommended when you can't easily predict the maximum"
890 LOCATE 14,3:PRINT "value of both functions or you are more interested the curve shapes and"
900 LOCATE 15,3:PRINT "curve interactions."
910 LOCATE 17,3:PRINT "In the auto-scale mode, the Y-axis label will be equal to the largest (or"
920 LOCATE 18,3:PRINT "smallest) value of Y or A encountered over the specified range of X or B.":COLOR 6,0
930 LOCATE 22,3:PRINT "For auto-scaling, press <ENTER> with no entry."
940 LOCATE 21,3:INPUT "Enter maximum Y-axis label (positive number):  ",YB$
950 YB=VAL(YB$)
960 IF YB<0 THEN BEEP:LOCATE 21,50:PRINT "                ":GOTO 940
970 '----------------evaluate both functions for maximum Y and A---------------
980 FLAG=0
990 GOSUB 350:ON ERROR GOTO 2430:COLOR 28,0:LOCATE 12,17
1000 PRINT "Finding Largest Values of Y and A for Scaling"
1010 LOCATE 23,1
1020 PRINT
1030 INC = (XMAX-XMIN)/199        'sets up plotting increment of x ------------
1040 X = XMIN:YBIG=0
1050 B = XMIN
1060 ON ERROR GOTO 2430
1070 FOR X=XMIN TO XMAX STEP INC           'finds biggest value of y-----------
1080    GOSUB 2390
1090    IF ABS(Y)>YBIG THEN YBIG = ABS(Y)
1100 NEXT X
1110 FOR B=XMIN TO XMAX STEP INC:ON ERROR GOTO 2430 'finds biggest value of a ---
1120   GOSUB 2410
1130   IF ABS(A)>YBIG THEN YBIG = ABS(A)     'sets YBIG equal to largest y or a--
1140 NEXT B
1150 IF ABS(XMIN)>ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
1160 IF YB>0 THEN YBIG=YB
1170   '---------------draws and labels plot field----------------------
1180 BEEP:SCREEN 2,,0,0
1190 CLS
1200 LINE (137,9.3)-(493,157),7,B      'draws graph field ---------
1210 FOR I=7.38 TO 73.8 STEP 7.38
1220 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA
1230 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA
1240 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA
1250 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA
1260 NEXT I
1270 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
1280 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
1290 ' -------------------prints axis labels, etc. ---------------------------
1300 LOCATE 1,40
1310 PRINT "Y"
1320 LOCATE 11,64
1330 PRINT "X & A"
1340 LOCATE 2,64
1350 IF YBIG<=0 THEN 1370
1360 PRINT USING "+#######.###";YBIG:GOTO 1380
1370 PRINT USING "+#.####";YBIG:
1380 LOCATE 20,65
1390 IF YBIG#<=0 THEN 1410
1400 PRINT USING "#######.###";-YBIG:GOTO 1420
1410 PRINT USING "#.####";-YBIG
1420 LOCATE 20,65:PRINT " "
1430 LOCATE 21,11
1440 IF XBIG<=0 THEN 1460
1450 PRINT USING "#######.###";-XBIG:GOTO 1470
1460 PRINT USING "#.####";-XBIG
1470 LOCATE 21,11:PRINT " "
1480 LOCATE 21,56
1490 IF XBIG<=0 THEN 1510
1500 PRINT USING "+#######.###";XBIG:GOTO 1520
1510 PRINT USING "+#.####";XBIG
1520 LOCATE 21,40
1530 PRINT "0"
1540 LOCATE 11,15
1550 PRINT "0"
1560 '-------------plot routine for both equations------------------
1570 X=XMIN:B=XMIN:U$=STRING$(80,32) 'initializes x and b to same smallest value-
1580 LOCATE 1,1:PRINT "PLOTTING":GOSUB 2390
1590 PSET ((315+(XMIN*177/XBIG)),(83.2-(Y*73.8/YBIG)))    'sets 1st plot pt.---
1600 FOR X=X+INC TO XMAX STEP INC                      'plots 1st equation-----
1610    GOSUB 2390
1620    LINE -((315+(X*177/XBIG)),(83.2-(Y*73.8/YBIG))),7
1630 NEXT X
1640 GOSUB 2410
1650 PSET ((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG)))   'sets 1st pt of 2nd eq.--
1660 FOR B=B+INC TO XMAX STEP INC                       'plots 2nd equation -----
1670 GOSUB 2410
1680   LINE -((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG))),7,,&HAAAA
1690 NEXT B
1700 LOCATE 1,1:PRINT "          ":LOCATE 22,1:PRINT U$:LOCATE 23,1
1710 LOCATE 23,1:PRINT "GRAPH OF:"
1720 OPEN "I",#1,"FCT1.BAS"
1730  INPUT #1,T$
1740 CLOSE #1
1750 OPEN "I",#2,"FCT2.BAS"
1760  INPUT #2,Q$
1770 CLOSE #2
1780 LOCATE 23,11
1790 PRINT MID$(T$,5);"  AND  ";MID$(Q$,5):LOCATE 3,1:PRINT "PRESS ANY KEY":LOCATE 4,1:PRINT "TO CONTINUE":FOR I=1 TO 2000:NEXT I
1800 LOCATE 3,1:PRINT "             ":LOCATE 4,1:PRINT "            "
1810 LOCATE 23,78:A$=INKEY$:IF A$="" THEN 1810
1820 SCREEN 0,1,0:CLS:COLOR 6,0
1830 LOCATE 10,1
1840 PRINT "            DISPLAY TABULATED VALUES OF X, Y AND A...............1"
1850 PRINT
1860 PRINT "            CHANGE RANGE OF X OR Y-AXIS LABEL ...................2"
1870 PRINT
1880 PRINT "            INPUT TWO NEW FUNCTIONS .............................3"
1890 PRINT
1900 PRINT "            EXIT ................................................4"
1910 PRINT
1920 PRINT "                           MAKE SELECTION     "
1930 LOCATE 18,46:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1930
1940 ON VAL(SS$) GOTO 1980,1950,1960,2520
1950 SKIP=1:GOSUB 350:GOTO 150
1960 SKIP=2:GOSUB 350:GOTO 150
1970 '---------------routine for listing calculated values --------------------
1980 CLS:X=XMIN-INC:COLOR 10,0
1990   PRINT " POINT          FOR                EQ.#1               EQ.#2"
2000   PRINT "   #           X & B                 Y                   A"
2010 LOCATE 18,68:COLOR 12,0:PRINT "PRESS ANY KEY"
2020 LOCATE 19,68:PRINT " TO CONTINUE"
2030 LOCATE 20,71:PRINT "OR 'Q'"
2040 LOCATE 21,68:PRINT "FOR NEXT MENU"
2050 COLOR 7,0:J=4:K=2:L=1
2060 FOR I=3 TO 22
2070 X=X+INC:B=X
2080 GOSUB 2390:GOSUB 2410
2090 LOCATE I,3:PRINT L
2100 'LIMIT DISPLAY DIGITS FOR SINGLE PRECISION
2110 LOCATE I,11:PRINT USING "#######.####";X
2120 LOCATE I,31:PRINT USING "#######.####";Y
2130 LOCATE I,51:PRINT USING "#######.####";A
2140 L=L+1
2150 IF L=201 THEN 2210
2160 NEXT I
2170 FLAG=0
2180 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 2180
2190 IF A$="Q" OR A$="q" THEN CLS:GOTO 2230
2200 IF L<200 GOTO 2060
2210 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 2210
2220 CLS
2230 LOCATE 10,1:COLOR 6,0
2240 LOCATE 10,16:PRINT "REVIEW TABULAR VALUES .........................1"
2250 LOCATE 12,16:PRINT "CHANGE RANGE OF X FOR PRESENT FUNCTIONS .......2"
2260 LOCATE 14,16:PRINT "INPUT TWO NEW FUNCTIONS .......................3"
2270 LOCATE 16,16:PRINT "EXIT ..........................................4"
2280 LOCATE 21,29:PRINT "Enter selection number"
2290 LOCATE 21,52:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 2290
2300 Q=Q+12
2310 CLS
2320 ON VAL(GG$) GOTO 2350,2330,2340,2520
2330 SKIP=1:GOSUB 350:GOTO 150
2340 SKIP=2:GOSUB 350:GOTO 150
2350 CLS
2360 IF I=200 THEN CLS:GOTO 2230
2370 CLS:GOTO 1980
2380 '-----------------------------user functions----------------------------
2390  Y = X
2400 RETURN
2410 A = 3*COS(B)
2420 RETURN
2430 '---------------------------error trap routine----------------------------
2440 IF ERR=2 AND ERL=2390 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYNTAX ERROR IN EQUATION #1 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=1:COLOR 6,0:RESUME 390
2450 IF ERR=2 AND ERL=2410 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYSTAX ERROR IN EQUATION #2 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=2:COLOR 6,0:RESUME 390
2460 IF ERR=5 AND ERL=2390 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=3:RESUME 390
2470 IF ERR=5 AND ERL=2410 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=4:RESUME 390
2480 IF ERR=11 AND ERL=2390 OR ERL=2410 THEN GOSUB 350:COLOR 12,4:FLAG=3:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED - CHECK YOUR EQUATION AND REDO!":FOR I=1 TO 1000:NEXT I:RESUME 390
2490 IF ERR=6 THEN BEEP:LOCATE 21,3:COLOR 12,4:FLAG=4:PRINT "AN OVERFLOW HAS OCCURED - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:CLS:RESUME 390
2500 ON ERROR GOTO 0:CLS:GOTO 100
2510 '-----------------------------------quit---------------------------------
2520 SCREEN 0,1:CLS:COLOR 6,0
2530 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2540 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2545 LOCATE 12,25:PRINT "EXIT TO DOS -----------------------3"
2560 LOCATE 17,30:PRINT "MAKE SELECTION"
2570 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2570
2580 QT=VAL(Q$)
2590 IF QT<1 OR QT>3 THEN BEEP:GOTO 2570
2600 IF QT=1 THEN SKIP=2:GOSUB 350:GOTO 150
2610 IF QT=2 THEN CLS:CHAIN "PLOTM"
2615 IF QT=3 THEN CLS:COLOR 7,0:CHAIN "PLIC
2630 BEEP:GOTO 2570
2640 '----------------------------------help----------------------------------
2650 GOSUB 350
2660 LOCATE 6,3:PRINT "* This program plots two simultaneous equations - one in the form Y=f(X)"
2670 LOCATE 7,5:PRINT "and the other in the form of A=f(B)."
2680 LOCATE 9,3:PRINT "* After plotting is completed, a tabulation of all plotted points may be"
2690 LOCATE 10,5:PRINT "reviewed."
2700 LOCATE 12,3:PRINT "* When auto-scaling, the 'Y' axis is scaled to accomodate the largest value"
2710 LOCATE 13,5:PRINT "from either equation. If one equation produces large values of 'Y' (or A)"
2720 LOCATE 14,5:PRINT "and the other produces small values of 'A' (or Y), the curve with the"
2730 LOCATE 15,5:PRINT "smaller values may not show much detail. Curves display best when both"
2740 LOCATE 16,5:PRINT "produce a similiar range of values. Often, restricting the range of X, to"
2750 LOCATE 17,5:PRINT "just cover a particular point of interest, will keep values of both curves"
2760 LOCATE 18,5:PRINT "in a good display range."
2770 LOCATE 21,3:PRINT "Press any key to continue"
2780 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2780
2790 IF K$="Q" OR K$="q" THEN 2520
2800 GOSUB 350
2810 LOCATE 6,3:PRINT "* Error traps detect syntax errors and provide a chance to recover without"
2820 LOCATE 7,5:PRINT "having to restart the program."
2830 LOCATE 9,3:PRINT "* Error traps exist, in this program, to detect both 'division by zero'"
2840 LOCATE 10,5:PRINT "and 'floating point overflow' conditions, however IBM BASICA does not"
2850 LOCATE 11,5:PRINT "allow trapping these errors and the statements will not function. Some"
2860 LOCATE 12,5:PRINT "BASICA 'clones' do not have these restrictions, in which case, the error"
2870 LOCATE 13,5:PRINT "traps will work. If you get a system generated 'division by zero' or"
2880 LOCATE 14,5:PRINT "'overflow' error, you will have to restart the program."
2890 LOCATE 16,3:PRINT "* See the HELP file accessable from the PLOT MENU for a more thorough"
2900 LOCATE 17,5:PRINT "discussion of this program.
2910 LOCATE 19,3:PRINT "* Sample: Y = X^2-5 AND A =-B-3, FROM X=-5 TO +5 (-5,5)    Y label=10"
2920 LOCATE 21,3:PRINT "Press any key to begin"
2930 LOCATE 21,28:K$=INKEY$:IF K$="" THEN 2930
2940 IF K$="Q" OR K$="q" THEN 2520
2950 GOSUB 350:GOTO 430
```
{% endraw %}

## VPLOT.BAS

{% raw %}
```bas
100 'VPLOT - VECTOR PROGRAM - Revision date: 08/02/88
110 'COPYRIGHT 1986,1987,1988, Prowess, Inc.
120 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,35:PRINT "VECTOR PROGRAM"
170 LOCATE 3,26:PRINT "(C) 1986,1987,1988 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
260 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 1830
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 350
290 IF K$="Q" OR K$="q" THEN 2150
300 GOTO 260
310 '-------------------------------------------------------------------------
320 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:RETURN
330 FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
340 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
350 LOCATE 10,14:PRINT "HOW MANY VECTORS DO YOU WANT TO SUM ?  ( MAX OF 10 )"
360 LOCATE 10,70:INPUT "",CT$:CT=VAL(CT$)
370 IF CT$="Q" OR CT$="q" THEN 2150
380 IF CT<1 OR CT>10 THEN BEEP:GOSUB 320:GOTO 350  'chk illegal entry --------
390 LOCATE 14,9:PRINT "WILL YOU ENTER VECTORS IN POLAR OR RECTANGULAR FORMAT  (P/R)?"
400 LOCATE 14,72:S$=INKEY$:IF S$="" THEN 390
410 IF S$="Q" OR S$="q" THEN 2150
420 IF S$<>"R" AND S$<>"P" AND S$<>"r" AND S$<>"p" THEN LOCATE 14,2:PRINT XX$:GOTO 400
430 IF S$ = "P" OR S$="p" THEN LOCATE 14,2:PRINT XX$:GOTO 540
440 LOCATE 14,2:PRINT XX$:LOCATE 10,2:PRINT XX$
450 LOCATE 6,18:PRINT "ENTER X AND Y COORDINATES IN THE FORM   X,Y":INC=2
460 FOR N=1 TO CT               'enters rect. coordinates----------------------
470    LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",X$,Y$:X(N)=VAL(X$):Y(N)=VAL(Y$)
480 IF X$="Q" OR X$="q" THEN 2150
490 IF Y$="Q" OR Y$="q" THEN 2150
500     IF X(N)=0 AND Y(N)=0 THEN BEEP:LOCATE 21,2:PRINT "CAN'T ALLOW BOTH X AND Y TO BE ZERO !":FOR J=1 TO 3000:NEXT J:GOSUB 340:GOTO 450
510    INC=INC+1
520 NEXT N
530 GOTO 640
540 GOSUB 320
550 XS=0
560 YS=0:INC=2
570 LOCATE 6,18:PRINT "ENTER VECTOR IN THE FORM  R,";CHR$(233);"  ( ";CHR$(233);" IN DEGREES )":INC=2
580 FOR N = 1 TO CT              'enters polar vectors------------------------
590   LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",R$,U$:R(N)=VAL(R$):U(N)=VAL(U$)
600 IF R$="Q" OR R$="q" THEN 2150
610 IF U$="Q" OR U$="q" THEN 2150
620  INC=INC+2
630 NEXT N
640 GOSUB 320:COLOR 6,0
650 LOCATE 6,2:PRINT TAB(11);"VECTOR #";TAB(29);"R";TAB(38);"THETA";TAB(51);"X";TAB(62);"Y"
660 LOCATE 7,2:PRINT TAB(10);"--------------------------------------------------------------"
670 FOR N = 1 TO CT
680 IF S$="R" OR S$="r" THEN 710     'avoids p -> r conversion if rect. format-
690    X(N) = R(N) * COS(( U(N) * 3.1415926#)/ 180)  'calculates x coordinate-
700    Y(N) = R(N) * SIN(( U(N) * 3.1415926#)/ 180)  'calculates y coordinate-
710      IF ABS( X(N)) > 0.0001 THEN 730      'avoids x roundoff error---------
720      X(N) = 0
730      IF ABS(Y(N)) > 0.0001 THEN 750       'avoids y roundoff error---------
740    Y(N) = 0
750    XS = XS + X(N)
760    YS = YS + Y(N)
770    LOCATE N+7,2:PRINT TAB(14);N
780    LOCATE N+7,23
790    PRINT USING " #####.#### ";R(N),U(N),X(N),Y(N)
800 NEXT N
810 LOCATE N+7,2:PRINT TAB(10);"--------------------------------------------------------------"
820 H = XS
830 V = YS
840 IF ABS( H) > 0.0001 THEN 940
850 XS = 0
860 IF ABS( V) > 0.0001 THEN 890
870 THETA = 0
880 GOTO 1120
890 IF V > 0 THEN 920
900 THETA = 270
910 GOTO 1120
920 THETA = 90
930 GOTO 1120
940 IF ABS( V) < 0.0001 THEN 1070
950 THETA = (ATN(YS/XS) * 180)/ 3.1415926#
960 IF YS < 0 THEN 1020
970 IF XS < 0 THEN 1000
980 THETA = THETA
990 GOTO 1060
1000 THETA = 180 + THETA
1010 GOTO 1060
1020 IF XS < 0 THEN 1050
1030 THETA = 360 + THETA
1040 GOTO 1060
1050 THETA = 180 + THETA
1060 GOTO 1120
1070 YS = 0
1080 IF XS > 0  THEN 1110
1090 THETA = 180
1100 GOTO 1120
1110 PRINT
1120 RT = SQR(XS^2 + YS^2)
1130 R(51)=RT
1140 U(51)=THETA
1150 X(51)=XS
1160 Y(51)=YS
1170 V=10
1180 LOCATE N+8,10
1190 PRINT "RESULTANT ->"
1200 LOCATE N+8,22
1210 PRINT USING " ######.####";RT,THETA,XS,YS
1220 LOCATE 21,2
1230 PRINT "PRESS ANY KEY TO CONTINUE"
1240 LOCATE 21,28:A$=INKEY$:IF A$="" THEN 1240
1250 XM=0
1260 YM=0
1270 GOSUB 330
1280 LOCATE 21,32
1290 PRINT "BUILDING ARRAYS"
1300 COLOR 6,0
1310   FOR N=1 TO CT         'finds largest value of x and y for scaling-----
1320    IF ABS(X(N))>XM THEN XM=ABS(X(N))
1330    IF ABS(Y(N))>YM THEN YM=ABS(Y(N))
1340   NEXT N
1350 IF ABS(X(51))>XM THEN XM=ABS(X(51))  'includes resultant in scaling-----
1360 IF ABS(Y(51))>YM THEN YM=ABS(Y(51))  'includes resultant in scaling-----
1370 IF YM>XM THEN XM=YM                  'makes xm the largest value--------
1380        FOR N=1 TO CT            'scales for graph and x-y aspect ratio--
1390           XC(N)=((X(N)/XM)*197.6)
1400           YC(N)=((Y(N)/XM)*81.7)
1410        NEXT N
1420 XC(51)=((X(51)/XM)*197.6)            'scales resultant-------------------
1430 YC(51)=((Y(51)/XM)*81.7)             'scales resultant-------------------
1440 CLS:SCREEN 2,0,0
1450 PI=3.1415926#
1460 LINE (222.5,13.4)-(623,180.9),1,B    'draws plotting field---------------
1470 LINE (422.8,13.4)-(422.8,180.9),1    'draws vert axis--------------------
1480 LINE (222.5,97.2)-(623,97.2),1       'draws horiz axis-------------------
1490 LOCATE 12,80
1500 PRINT "X"                            'labels x-axis----------------------
1510 LOCATE 1,53
1520 PRINT "Y"                            'labels y-axis----------------------
1530 LOCATE 1,1
1540 PRINT "X and Y MAX = +/-"          'prints length of x-axis from 0-------
1550 LOCATE 1,18:PRINT USING "######.####";XM:LOCATE 2,1
1560 PSET (422.8,97.2),1
1570   FOR N=1 TO CT                    'plots each vector--------------------
1580     LINE -(422.8+XC(N),97.2-YC(N)),1
1590     CIRCLE  (422.8+XC(N),97.2-YC(N)),4,1
1600     PSET (422.8,97.2),1            'resets to origin---------------------
1610        FOR I=1 TO 100              'creates slight pause between plots---
1620        NEXT I
1630   NEXT N
1640 LINE -(422.8+XC(51),97.2-YC(51)),1 'plots resultant----------------------
1650 CIRCLE (422.8+XC(51),97.2-YC(51)),7,1
1660 PSET (422.8,97.2),1
1670 LOCATE 10,1
1680 PRINT "RESULTANT IDENTIFIED"
1690 PRINT "  BY LARGE WHITE"
1700 PRINT "TERMINATOR CIRCLE AT:"
1710 PRINT
1720 PRINT "  (";X(51);",";Y(51);")"     'prints resultant rect coordinates---
1730 PRINT :PRINT :PRINT :
1740 PRINT "TO START OVER ....1"
1750 PRINT "TO REVIEW VALUES .2
1760 PRINT "EXIT .............3":PRINT
1770 PRINT " MAKE SELECTION"
1780 LOCATE 22,18:AA$=INKEY$:IF AA$="" THEN 1780
1790 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 1780
1800 IF VAL(AA$)=1 THEN 100
1810 IF VAL(AA$)=2 THEN FOR I=1 TO 51:XC(I)=0:YC(I)=0:NEXT I:XS=0:YS=0:SCREEN 0,0,0:CLS:GOTO 640
1820 IF VAL(AA$)=3 THEN SCREEN 0,1,0:COLOR 6,0:GOTO 2150
1830 '----------------------------------help-----------------------------------
1840 GOSUB 320
1850 LOCATE 6,5:PRINT "* Up to 10 vectors may be entered in either rectangular or polar"
1860 LOCATE 7,7:PRINT "formats. You must declare the number of vectors that the program"
1870 LOCATE 8,7:PRINT "must handle and the format that you intend to use."
1880 LOCATE 10,5:PRINT "* When inputting is complete, the program first displays a tabular"
1890 LOCATE 11,7:PRINT "list of your inputs. If you used polar format, the list shows"
1900 LOCATE 12,7:PRINT "your inputs in both polar and rectangular form. The resultant"
1910 LOCATE 13,7:PRINT "of all input vectors is shown in both formats."
1920 LOCATE 15,5:PRINT "* Pressing any key after the tabular display will clear the screen"
1930 LOCATE 16,7:PRINT "and present a plot of your input vectors and their resultant."
1940 LOCATE 18,5:PRINT "* The vector plot is autoscaled to insure that all vectors will"
1950 LOCATE 19,7:PRINT "fit on the plot field."
1960 LOCATE 21,2:PRINT "PRESS ANY KEY TO CONTINUE"
1970 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 1970
1980 IF K$="Q" OR K$="q" THEN 2150
1990 GOSUB 340
2000 LOCATE 6,5:PRINT "* The largest X or Y value (including the resultant) is used to"
2010 LOCATE 7,7:PRINT "scale both the X and Y axis. The value of the largest X or Y value"
2020 LOCATE 8,7:PRINT "defines the value of both the X and Y axis. The value is displayed."
2030 LOCATE 10,5:PRINT "* The coordinates of the resultant vector are listed and the"
2040 LOCATE 11,7:PRINT "plotted resultant can be distinguished from the input vectors by"
2050 LOCATE 12,7:PRINT "the large terminator circle at its end point."
2060 LOCATE 14,5:PRINT "* Vector lengths (including the resultant) are limited to four"
2070 LOCATE 15,7:PRINT "digits to the left of the decimal point and four decimal places."
2080 LOCATE 17,5:PRINT "* A comma error will result in a 'REDO FROM START' message. Simply"
2090 LOCATE 18,7:PRINT "reenter, using correct syntax, at the currrent cursor position."
2100 LOCATE 21,2:PRINT "PRESS ANY KEY TO START"
2110 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2110
2120 IF K$="Q" OR K$="q" THEN 2150
2130 GOSUB 340:GOTO 350
2140 '-----------------------------------quit---------------------------------
2150 CLS
2160 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2170 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2180 LOCATE 12,25:PRINT "EXIT TO DOS -----------------------3"
2190 LOCATE 17,30:PRINT "MAKE SELECTION"
2200 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2200
2210 QT=VAL(Q$)
2220 IF QT<1 OR QT>3 THEN BEEP:GOTO 2200
2230 IF QT=1 THEN 100
2240 IF QT=2 THEN CHAIN "PLOTM"
2250 IF QT=3 THEN CLS:COLOR 7,0:CHAIN "PLIC
2260 BEEP:GOTO 2200
```
{% endraw %}

## XPLAINS.TXT

{% raw %}
```
                                                                 01/20/89
                          EXPLANATION OF FILES ON DISK

       The  family  of  files to be distributed as SHAREWARE on this disk
       should be distributed as a package.  A good name for  the  package
       would  be:   COGOWARE,  and  I would be pleased if this convention
       were followed.  The files that should go together are as follows:

       COGO.EXE (version 5.3) is the  executable  program  that  performs
       surveying  calculations.   The  name COGO is taken from CoOrdinate
       GeOmetry.   This latest version is dated 12/24/88 in the disk dir-
       ectory, hence there should be no reason to  confuse  it  with  any
       earlier version.

       COGO.DOC  and  BALANCE.DOC  are ASCII files comprising the user's
       manual documentation (version 5.3b), and  instructions  for  `bal-
       ancing the survey', of interest to land surveyors.

       README.1ST is an ASCII file being a short starting instruction.

       WHATS.NEW  is  an  ASCII file telling what is new in this up-date.
       This is an optional file, and you may include it at your option.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1013

     Volume in drive A has no label
     Directory of A:\

    BALANCE  DOC     10329  12-15-88   1:42p
    COGO     DOC     29728   1-13-89  10:41a
    COGO     EXE     79009  12-24-88  11:01a
    EQUAT    BAS        10   6-11-87  10:03a
    ESOLVE   BAS      6453   8-01-88   2:55p
    FCT1     BAS        19   8-01-88   2:38p
    FCT2     BAS        20   8-01-88   2:32p
    FCT3     BAS        22   7-09-87   9:27a
    FILE1013 TXT      2236   6-16-89  12:24p
    FUNCT    BAS        16   8-01-88   2:26p
    GO       BAT        38   2-05-88   9:33a
    GO       TXT       771   6-09-88   9:09a
    HLP3     BAS     12958   8-01-88   3:13p
    IPLOT    BAS     12245   8-01-88   2:43p
    MANUAL   BAT        17   6-09-88   9:09a
    PLIC     BAS      1317  12-18-87  10:40a
    PLOG     BAS      2477   8-01-88   2:23p
    PLOTM    BAS      1563   8-01-88   2:32p
    PPLOT    BAS     11327   8-01-88   2:42p
    README   1ST      1351   1-13-89  10:39a
    README   BAT        17   8-14-88  10:54a
    README   DOC     12721  12-18-87  10:57a
    SPLOT    BAS     12692   8-01-88   2:44p
    VPLOT    BAS      8504   8-01-88   2:50p
    WHATS    NEW      3221   1-20-89   2:18p
    XPLAINS  TXT      1195   1-20-89   2:53p
           26 file(s)     210256 bytes
                           92160 bytes free
