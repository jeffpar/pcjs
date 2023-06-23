---
layout: page
title: "PC-SIG Diskette Library (Disk #566)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0566/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0566"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SURVEYSOFT"

    SURVEYSOFT is a series of programs designed for the surveyor with
    modules including field traverse, entry and storage of
    coordinates and many more. It is a fairly comprehensive package
    and has a complete set of documentation.
    
    Features:
    
    ~ Field traverse
    ~ Bearing/bearing intersection
    ~ Close and adjust
    ~ Bearing/distance intersect
    ~ Distance/distance intersect
    ~ Rotate coordinates
    ~ Inverse with curves and areas
    ~ List coordinates
    ~ Data storage
    ~ Data retrieval
    
    System Requirements:  Two disk drives, 128K and monochrome/graphics
    display.
    
    How to Start:  Read the READ_ME and MANUAL.TXT. Enter GO to
    start.
    
    Suggested Registration:  $75.00
    
    File Descriptions:
    
    GO       BAT  Main system loader
    PRINTEXT BAT  Batch file to print manual
    DRIVFILE PAS  Name of drive
    MANUAL   TXT  Detailed documentation
    SETDRIVE COM  Utility to set drive
    SURVEY?  00?  Surveysoft routines
    MSG?     01   Text printed by batch file
    FILES    TXT  File with list of package files
    RUN      BAT  Execution program (Copy of GO.BAT)
    READ_ME  BAT  Instructions file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES566.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  566  Surveysoft   Version 3.0                             v1  DS2
---------------------------------------------------------------------------
SURVEYSOFT is a series of programs designed for the surveyor with modules
including field traverse, entry and storage of coordinates and many more.
It is a fairly comprehensive package and has a complete set of documentation.
 
DRIVFILE PAS  Name of drive
PRINTEXT BAT  Batch file to print manual
GO       BAT  Main system loader
READ_ME  BAT  Instructions file
RUN      BAT  Execution program (Copy of GO.BAT)
FILES    TXT  File with list of package files
MSG?     01   Text printed by batch file
SURVEY?  001  Surveysoft routines
SETDRIVE COM  Utility to set drive
MANUAL   TXT  Detailed documentation
 
PC-SIG (Software Interest Group)
1030 East Duane Avenue, Suite D
Sunnyvale, CA  94086
(408) 730-9291
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
                       COPYRIGHT NOTICE AND LICENSE AGREEMENT

         SurveySoft  surveying  software  is  distributed as user-supported 
         software.  This means that the package may be  widely  and  freely 
         distributed,  and that you have the opportunity to try the package 
         at a minimal expense to find out if it is right for you.  However, 
         it also means that the continued availability of support for  this 
         product,  and the development and availability of future products, 
         is solely dependent on your good faith and  honesty.  If  you  are 
         able  to  make  productive  use of this software,  PLEASE send the 
         registration fee of $75.00 to : 

                                G.D. Fleming & Company, Inc.
                                P.O. Box 588
                                Blair, NE 68008

         Remember that SurveySoft surveying  software  is  copyrighted.  It 
         remains the property of the author.  You may not copy, distribute, 
         or  otherwise make use of SurveySoft except under the terms of the 
         following agreement : 
         
         i)     You may make as many copies of this disk as  you  like  for 
                your  own internal use.  You may freely modify or adapt the 
                programs on this disk, so long as the modified programs are 
                not shared or distributed in any form,  and as long as  the 
                Copyright  notice  remains  prominently  displayed  on  any 
                modified versions.  

         ii)    You may freely distribute unmodified copies of the original 
                disk,  and are encouraged to do so.  You may not,  however, 
                distribute  these  copies  for  a profit under the terms of 
                this agreement.  

         iii)   Neither G.D.  Fleming & Co., Inc., nor the author can or do 
                warrant the performance or  results  that  you  may  attain 
                through  the use of this software.  We license it to to use 
                'as is',  entirely at your own  risk,  without  making  any 
                claim  as  to  the  suitability  of  this  software for any 
                particular purpose.  

         iv)    You agree that you will not hold G.D.  Fleming  &  Company, 
                Inc.  or  the author liable for any damages that you may or 
                anyone else may suffer arising  out  of  the  use  of  this 
                software.  

         v)     If  any  part of this agreement is subsequently found to be 
                invalid,  it will have no bearing upon the validity of  any 
                other part of this agreement.  

 
                                      OVERVIEW 

         SurveySoft Version 3.0 is the latest version of a  tested  package 
         of  surveying  software  adapted  for  the  IBM-PC  and compatible 
         systems.  It incorporates  nearly  all  of  the  improvements  and 
         modifications  suggested  by  users of Version 2.0,  together with 
         several other improvements made  possible  by  a  new  programming 
         environment.  Experienced  users  will find the speed of access to 
         and execution of nearly all functions to  be  radically  improved; 
         beginners  will  find the on-screen prompts to be clearer and more 
         useful.  

         A more particular  list  of  modifications  incorporated  in  this 
         version may be found at the end of this manual.  

         Following  is  a list of available SurveySoft functions,  which is 
         furnished for quick reference.  (Note that function keys shown  in 
         the  form  <ALT><F1>  are  accessed by pressing <F1> while holding 
         down the <ALT> key, just as if you were using <ALT> like the shift 
         key on  a  standard  typewriter.  Keys  shown  as  <CTRL><F1>  are 
         accessed using the <CTRL> key similarly.) 

         Function Key    Function                                   Pg. Ref.

         <F1>            Traverse -- 
                         Assign coordinates to initial point;  use 
                         bearing for first leg,  bearing or  field 
                         angle  thereafter.   Points  numbered  by 
                         user  or  sequentially.  Setup  moves  to 
                         consecutive  points.  Curve traverse;  no 
                         error correction or adjustment.  

         <ALT><F1>       Field Traverse --
                         Assign coordinates to initial point;  use 
                         bearing for first leg,  bearing or  field 
                         angle    thereafter.    Points   numbered 
                         sequentially.  Setup moves to consecutive 
                         points.   Error  correction,  Compass  or 
                         Transit rule adjustment, Curve traverse.  

         <F2>            Sideshot --
                         Enter backsight (optional)  and  occupied 
                         points,  field  angles  and/or  bearings.  
                         Points numbered by user or  sequentially.  
                         Setup remains fixed (Radial Traverse).  

         <F3>            Inverse --
                         Gives   angles,   bearings,and  distances 
                         between entered  points.  Inverse  curves 
                         and  area  computation.  Setup  moves  to 
                         current point.  

         <ALT><F3>       Radial Inverse --
                         Gives  angles,  bearings,  and  distances 
                         from  backsight  and  occupied  point  to 
                         current point.  Setup remains  fixed.  No 
                         curves or areas.  

         <F4>            List Coordinates --
                         Display coordinates of selected points.  

         <ALT><F4>       Enter Coordinates --
                         Assign  selected  northing and easting to 
                         one or more points.  

         <CTRL><F4>      Rotate Coordinates --
                         Rotate selected points to bring  a  given 
                         line to a known bearing.  

         <F5>            Bearing / Bearing Intersection --
                         Compute  intersection  of  known bearings 
                         through two given points.  

         <F6>            Bearing / Distance Intersection --
                         Compute intersection of a  known  bearing 
                         and  a  known  distance through two given 
                         points.  

         <F7>            Distance / Distance Intersection --
                         Compute  intersection  of  two known dis-
                         tances from two given points.  

         <F8>            Fixed Areas (Angle / Side / Angle) --
                         Compute a four-sided figure of known area 
                         given one side and the  bearings  of  the 
                         other three.  

         <ALT><F8>       Fixed Areas (Side / Angle / Side) --
                         Compute  a  three-sided figure of a given 
                         area, given one side and the bearing of a 
                         second side.  

         <F9>            Save Data --
                         Create a data file  with  the  coordinate 
                         points currently in active memory.  

         <ALT><F9>       Load Data --
                         Transfer  data from an existing data file 
                         to active memory.  

         <CTRL><F9>      Delete Data File --
                         Delete a data file from the data disk.  

         <F10>           Earthwork --
                         Not currently supported.  

         <ALT><F10>      Transit Topography --
                         Compute northing, easting,  and elevation 
                         of  a  point  given  benchmark elevation, 
                         plus rod, field angle, distance,  zenith, 
                         & minus rod.  No fixed data storage.  

         <CTRL><F10>     Radial Curve Stakeout --
                         Field  staking  of  offsets  to  a radial 
                         curve.  

         
                                INSTALLING DOS SYSTEM

         Experienced  Version  2.0 users -- or any other impatient types -- 
         may feel free to skip this section for the  time  being.  Just  be 
         sure  that you have safely backed up the distribution copy of your 
         disk before proceeding to "FOR ALL  USERS"  at  the  end  of  this 
         section.  

         The  object  of  this  section is to create a disk with all of the 
         SurveySoft  files  and  with  the  DOS  operating  system  on  it, 
         providing  you  with  a  working  copy which may be used while the 
         original is kept safely stored away,  and which  may  be  used  to 
         start up your system without the need for your DOS diskette.  

         SurveySoft  is  not copy-protected.  Keep the write-protect tab on 
         the distribution diskette, don't physically abuse it,  and you may 
         make  as many copies as you like (for your own use,  of course) as 
         long as the software will be in use on  one  system  only  at  any 
         given  time  --  see  the  licensing  agreement  elsewhere in this 
         manual.  

         SYSTEMS WITH TWO DISKETTE DRIVES.  Insert  your  DOS  diskette  in 
         drive A: and a blank diskette in drive B:. (It isn't necessary for 
         the disk in drive B: to be blank, of course, but what we are about 
         to  do will wipe it clean,  so choose it with care.) If necessary, 
         start your system,  enter the date and  time,  and  do  any  other 
         necessary housekeeping.  Then,  in response to the A> prompt, type 
         FORMAT B:/S and press <ENTER>.  You will be prompted to insert the 
         disk to be formatted in drive B:  and press any  key  when  ready.  
         Verify that you have done so, then press any key.  The drives will 
         operate  briefly  as  the  diskette is formatted and the operating 
         system is transferred.  When the process is complete, DOS will ask 
         "Format another?  Y/N".  Respond by pressing N.  

         When you have the A> prompt once more, remove the DOS diskette and 
         replace it with the SurveySoft distribution  diskette.  Type  COPY 
         *.*   B:   and   press  <ENTER>.   Each  file  on  the  SurveySoft 
         distribution diskette will be transferred to the disk in drive B:, 
         which has now become your  working  copy.  Label  it,  remove  the 
         distribution copy from drive A: and put it in a safe place, insert 
         the  working  copy in drive A:,  and proceed to "FOR ALL USERS" at 
         the end of this section.  
  
         SYSTEMS WITH HARD  DISKS.  The  following  installation  procedure 
         assumes  that the DOS operating system is already resident on your 
         hard disk,  and that your hard disk is drive C:.  A  list  of  the 
         files  on  the SurveySoft diskette that will be copied to the hard 
         disk follows.  If any files by these names currently exist on your 
         hard disk, they will be overwritten and lost,  so you will want to 
         consider  renaming  them  before  proceeding.  (See your operating 
         system manual for instructions on how to do so.)  Also  note  that 
         SurveySoft does add an extension of ".DAT" to all data files,  and 
         that DOS 2.0+ pathnames are not supported at this time.  
         

                          SURVEY.COM              SETDRIVE.COM
                          SURVEY.000              DRIVFILE.PAS
                          SURVEY.001              TESTTEST.TST
                          SURVEY.002
                          SURVEY.003
                          SURVEY.004
        
         

         Ready?  Insert the SurveySoft distribution diskette in a  diskette 
         drive,  make  that drive the default drive,  and type COPY *.* C:.  
         (Remember that we're assuming your hard disk to be drive  C:,  and 
         substitute the actual name of your hard disk if necessary.) 
 
         When  you  have  the DOS prompt once more,  make the hard disk the 
         default drive again, store the SurveySoft distribution diskette in 
         a safe place,  and proceed to "FOR ALL USERS" at the end  of  this 
         section.  

         SYSTEMS  WITH ONE DISKETTE DRIVE ONLY. Insert your DOS diskette in 
         drive A:.  If necessary,  start your system,  enter the  date  and 
         time,  and do any other necessary housekeeping.  Then, in response 
         to the A> prompt,  type FORMAT /S and press <ENTER>.  you will  be 
         prompted to put the disk to be formatted in drive A: and press any 
         key  when  ready.  Remove  the  DOS  diskette  from  the drive and 
         replace it with a blank one,  then press any key.  The drive  will 
         operate  briefly  as  the  diskette is formatted and the operating 
         system is transferred.  When the process is complete, DOS will ask 
         "Format another?  Y/N".  Respond by pressing N.  
   
         When you have the A> prompt once more,  remove the blank  diskette 
         and  replace  it  with the SurveySoft distribution diskette.  Type 
         COPY *.* B: and  press  <ENTER>,  then  follow  the  disk-swapping 
         instructions  provided  by  the  operating  system.  When you have 
         finished,  each file on the SurveySoft distribution diskette  will 
         have been transferred to the blank diskette,  which has now become 
         your working copy.  Label it,  replace it in the  diskette  drive, 
         and store the distribution copy of SurveySoft in a safe place.  

         FOR  ALL  USERS.  You  should  now  have  your new working copy of 
         SurveySoft stored on the default drive and have the DOS prompt for 
         that drive on your screen.  To access the  surveying  programs  on 
         the  disk,  type  SURVEY  in  response to the DOS prompt and press 
         <ENTER>.  
         

                                   GETTING STARTED 

         THE OPTIONS MENU. If you have not already done so,  bring  up  the 
         DOS prompt and,  with SurveySoft in the default drive, type SURVEY 
         and press <ENTER>.  After a few moments,  the  Options  menu  will 
         appear  on  the screen.  From this menu you will make a few simple 
         choices that will adapt SurveySoft to  your  personal  preferences 
         and  to  your  system.  You  may return to this menu from the main 
         program and revise your choices any time that you like.  
         
         Your screen should now look something like Figure A.  Whenever you 
         load SurveySoft,  the Printer Status and Zenith Input will default 
         to "OFF" and Keyboard Audio will default to "ON".  If you elect to 
         change  these  values,  you  must  do  so  whenever you reload the 
         software.   The  selection  for  the  data  drive,   however,   is 
         permanently  recorded  and becomes the new default value until you 
         elect to change it again.  

         PRINTER STATUS. Set Printer Status to "ON" only if a line  printer 
         is  connected  to your system and ready to operate.  If you do set 
         the Printer Status to "ON",  SurveySoft will verify that a printer 
         is  present  and on line.  If it does not encounter a printer,  it 
         will automatically reset printer status to "OFF" and return you to 
         the Options Menu.  While in many cases a printed  record  of  your 
         activity is desirable, you should be aware that with most printers 
         SurveySoft  will  run  very  considerably  slower with the printer 
         option selected.  

         ZENITH ANGLE INPUT. Your selection of a Zenith Input setting is  a 
         matter  of  personal preference,  the type of input with which you 
         will be dealing, and the quality of your field notes.  With Zenith 
         Input "ON",  every time that SurveySoft prompts  you  to  input  a 
         distance,  it will prompt you to input a zenith angle.  As you can 
         see,  if you are entering data from a deed  or  plat,  this  could 
         become  quite  an  inconvenience.  It  is for this reason that the 
         default setting for Zenith Input is "OFF".  (Note also  that  even 
         with Zenith Input "ON", you may enter a zenith angle of 90 degrees 
         by simply pressing <ENTER> when prompted for the angle.) 

         KEYBOARD  AUDIO.  Once  again,  your  choice  of  a Keyboard Audio 
         setting is a matter of preference and the environment in which you 
         will be using your software.  While the Keyboard Audio setting  is 
         "ON",  SurveySoft will chirp (discretely, of course) upon positive 
         data entry and input  errors.  If  you  or  others  in  your  work 
         environment find this objectionable, you will want to set Keyboard 
         Audio to "OFF".  

         ACTIVE  DATA DRIVE. As noted earlier,  your choice of a data drive 
         is permanently recorded and will  become  the  new  default  value 
         whenever  the system is loaded -- although it may,  of course,  be 
         changed at any time.  
         
         If yours is a single-drive system, you will want to leave the data 
         drive set to A:.  This will mean that all of  your  data  will  be 
         stored  upon  your  SurveySoft  working  diskette,  but  since the 
         software is not copy-protected,  this should present no particular 
         problem.  
  
         If yours is a two-drive system, you will probably want to keep the 
         SurveySoft diskette in drive A:  and let drive B:  be the drive in 
         which you place your data diskette.  To do so,  press the '+'  key 
         once; your display should now show that the data will be stored in 
         drive B:.  

         If you have a hard-disk system,  you will probably want your data, 
         as well as the SurveySoft applications programs to reside on  your 
         hard disk.  Simply press the '+' and '-' keys until your hard disk 
         drive appears on the display.  

         When you are satisfied with your selections from this menu,  press 
         <ENTER>.  

         Note that if you have changed the data drive, SurveySoft will test 
         the status of that drive before proceeding.  If it is unavailable, 
         an error message will be displayed and the data file will be reset 
         to its previous value.  Note also that if for any reason (such  as 
         moving to a new system) the data drive of record is not available, 
         the  utility  program SETDRIVE is provided to reset the data drive 
         without entering SurveySoft.  

         
         THE MAIN MENU. After you have left the Options  Menu  by  pressing 
         <ENTER>,  your  screen  will  display  the  SurveySoft  Main Menu, 
         through which all of the software's other features  are  accessed.  
         Your display should now resemble Figure B.  

         
                             COORDINATE GEOMETRY PROCEDURES

                                    AN INTRODUCTION. 
         
         All  of  SurveySoft's  various  functions  are  inter-related and, 
         unlike many other surveying software packages,  all share a common 
         system  of coordinate points.  In the off-the-shelf version of the 
         software,  these points may be assigned numbers from  1  to  1000.  
         For  most  applications,  this  provides a good working compromise 
         between capacity, execution time, and memory demands. 


         (If your application demands more storage, and your system is able 
         to support it, custom versions of SurveySoft with greater capacity 
         are available to current users at a nominal charge.) 


         In such a thoroughly integrated program,  many functions make  use 
         of data which has already been input by means of others.  Although 
         the adventurous user may want to strike out on his own, relying on 
         on÷screen  prompts  and  the  list  of functions already provided, 
         there follows a tutorial which will take you through  all  of  the 
         coordinate  geometry functions provided,  using a simulated survey 
         to provide the data.  Functions are  presented  in  the  order  in 
         which  they  might  typically  be  used,  beginning with the Field 
         Traverse routine.  

                                    FIELD  TRAVERSE.  
         
         The Field Traverse routine will be the data entry method of choice 
         when you have a substantial amount of data  to  enter,  when  that 
         data  may  be entered as a series of consecutive points,  and when 
         your situation will allow you to number each point  consecutively.  
         It  differs from the Traverse routine in that the Traverse routine 
         will allow you to enter your choice of a  point  number  for  each 
         point, and in that the Traverse routine allows neither closure and 
         adjustment  of  a  traverse  nor correction of data which has been 
         mis-entered.  

         Access the Field Traverse routine by pressing <ALT><F1>  from  the 
         Main  Menu.  The  system  prompts you to enter the number that you 
         wish to assign to the initial point (the first occupied point)  of 
         the  traverse.  Please respond by typing 1 then pressing <ENTER>.  
         Note that numbers outside of the allowable range of point  numbers 
         (1 to 1000 for stock versions) will not be accepted.  


         (SurveySoft has automatically set the cursor / numeric keypad  for 
         numeric entry.  While you may reset it for cursor control any time 
         that you like,  SurveySoft will not respond to the characters that 
         the cursor keys will generate,  and will reset the keypad  at  its 
         earliest opportunity.)


         The  system  now prompts you to enter the northing coordinate that 
         you wish to assign to point number 1.  Assign it a northing of 1 
         + 00 by typing 100 and pressing <ENTER>.  When you are prompted to 
         enter the easting coordinate for point  number  1,  assign  it  an 
         easting of 1 + 00 in a similar way.  
         

         (If  you  do  not  assign a northing at this time,  but proceed by 
         pressing <ENTER>,  the system will assign by default any  northing 
         which  had  previously  been  assigned  to  point number 1;  if no 
         northing was previously  assigned  to  that  point,  its  northing 
         coordinate is 0 + 00.)  


         You  are now prompted press a key on the numeric pad.  The display 
         in the bottom window shows you which numeric keys (NOT the  number 
         keys  in  the  top  row  of the typewriter keyboard) correspond to 
         which quadrants and field angles.  Keys 2, 4, 6, and 8 are used to 
         generate field angles from the last entered traverse leg; since we 
         have no previous leg, they are of course meaningless now.  Keys 1, 
         3, 7, and 9 are used to enter azimuths and bearings. Key 0 is used 
         to  recall the bearing between two previously entered points;  its 
         use is further documented on pages 15 - 16 of this manual.  Key  5 
         is not implemented at all.  


         (Enter  bearings  of due north and south by entering bearings of 0 
         in either adjacent quadrant.  Similarly,  enter  bearings  of  due 
         east  and  west  by  entering  bearings  of  90 in either adjacent 
         quadrant.  Enter a north azimuth by entering the  azimuth  in  the 
         northeast  quadrant  and  a  south  azimuth  by entering it in the 
         southwest quadrant.) 

         If the bearing of the first leg of your traverse is known,  it  is 
         of course entered at this time; otherwise, an arbitrary bearing is 
         entered  which  may  later  be  rotated to conform to any required 
         bearing.  For now, press number 9 on the numeric keypad to set the 
         bearing  of  the  first  leg  of  your  traverse  in the northeast 
         quadrant.  

         The  system  prompts  you to enter the bearing of the first leg of 
         your traverse.  Bearings are entered using  the  format  DDD.MMSS.  
         Assign  a  bearing of N 45 45'45" E by typing 45.4545 and pressing 
         <ENTER>.  

         You are now prompted to enter the length  of  your  traverse  leg.  
         Input  a  distance  of 100.00 feet and press <ENTER>.  If you have 
         set Zenith Input to "ON" -- this tutorial  will  assume  that  you 
         have  not  --  you will now be prompted to enter the zenith angle 
         turned to the new point.  This angle is entered in the same way as 
         is a horizontal angle,  in response to the prompt.  A zenith angle 
         of  90  may be entered by simply pressing <ENTER> with no numeric 
         input.  


         (The zenith angle is the angle turned from the vertical to the new 
         point.  Thus points at a higher elevation than the instrument will 
         have turned zenith angles between 0 and 90 or between 270 and 360, 
         while points below the instrument will have zenith angles  between 
         90 and 270.)


         SurveySoft computes and displays the coordinates of the new  point 
         and  assigns  it  the next consecutive point number (in this case, 
         2), then asks that you press a key on the numeric pad for the next 
         leg of your traverse.  Enter a field angle right of 90 degrees by 
         pressing 6  on  the  numeric  pad,typing  90  when  prompted,  and 
         pressing  <ENTER>.  When  asked  to enter the distance to the next 
         point, please enter a distance of 99.5 feet.  

         Now close into the initial point of your traverse  by  entering  a 
         deflection  angle  to the left of 135 00'15".  Press numeric key 2 
         for deflection  left,  type  135.0015,  and  press  <ENTER>.  When 
         prompted, <ENTER> a distance of 100.15 feet.  

         SurveySoft computes and displays the coordinates of traverse point 
         number  4.  If  all  has  gone well,  point number 4 should have a 
         northing of 140.91 feet and an easting of  100.91  feet.  You  may 
         note  that  a 40÷foot closure is not particularly close work for a 
         traverse of this size;  in fact,  it seems that  we  have  made  a 
         typographical  error  in  entering  the  last leg of our traverse.  
         Instead of a closing distance  of  100.15  feet,  we  should  have 
         entered  a  distance  of 140.15 feet.  We are about to remedy this 
         situation.  

         Press <ESC> to leave the data entry portion of the Field  Traverse 
         routine.  You  are  prompted  to  press the space bar to close and 
         adjust the traverse, or to correct a leg.  (You may also return to 
         the Main Menu by pressing <ESC> again at this point.) Please press 
         the <SPACE BAR> to go to the Close and Adjust Menu.  

                                  CLOSE AND ADJUST

         Before proceeding to the Close and Adjust menu,  you are presented 
         with tentative northing and  easting  coordinates  for  the  point 
         closed  upon.  These  are  simply  the  coordinates of the initial 
         point of the traverse.  If you are closing upon the initial point, 
         as we are here, press Y.  Otherwise,  if you are closing upon some 
         other point of known coordinates,  press "N";  you will be offered 
         the opportunity to enter those known coordinates.  

         SEARCH FOR ERROR. Let us first verify the location of the error by 
         pressing function key <F1>,  Search for Error.  The data that  you 
         have  entered  is  highlighted  and displayed in the center of the 
         screen. Verify that the data  entry  error  did  occur  at  point 
         number  3  and  that  the other data were entered correctly,  then 
         press function key <F2>, Correct Error.  


         (If you have entered more data than can be displayed in this area, 
         only the first portion will be displayed;  scroll through the data 
         by pressing the <ENTER> key.  When you have  reached  the  end  of 
         your  input data,  the display will scroll back to the first point 
         if you continue.) 


         CORRECT ERROR. We have now located the input  error  and  verified 
         that  it  did  occurr at point number 3.  When you are prompted to 
         enter the point at which the error  occurred,  type  3  and  press 
         <ENTER>.  You  will  be  prompted  to  press a quadrant key on the 
         numeric pad.  Since the correct angle is still a deflection  left, 
         press  2.  You  will  be prompted to enter the new bearing.  Since 
         the bearing also  remains  unchanged,  type  135.00015  and  press 
         <ENTER>.  Finally, you are prompted to enter the correct distance.  
         Type 140.15 and press <ENTER>.  The traverse is  recalculated  and 
         the  results  displayed  in  the highlighted area of your display, 
         which should now resemble Figure C.  You will return to the Search 
         for Error mode.  
          
         Note that the closing coordinates for point number 4 are now  1  + 
         00.91 North and 1 + 00.38 East.  We will consider these figures to 
         be within reasonable limits of accuracy for this survey.  

         BALANCE  ANGLES.  Now  note  the  line above the highlighted area.  
         Since you did not  enter  a  closing  angle  at  point  number  4, 
         SurveySoft  has calculated the angular error based upon a computed 
         line  from  the  last  occupied  point  to   the   ideal   closing 
         coordinates,  and  reminded  you  that  a  closing  angle  was not 
         entered.  If you like,  you may return to Correct Error  mode  and 
         enter  a  closing  angle  at this time;  the angular error will be 
         recalculated.  Either with or without a  closing  angle,  you  may 
         select Balance angles to have the angular error balanced among all 
         field  angles  --  not  angles  entered as azimuths or bearings -- 
         before  proceeding.   Corrected  figures  will   appear   in   the 
         highlighted area.  

         However,  since  your  instrument  operator has been very good (or 
         very lucky),  and since your party chief has neglected the closing 
         angle  (Have  you  considered  rotating your personnel?),  we will 
         proceed to adjust the traverse without balancing angles.  

         ADJUST TRAVERSE. Since the angular closure of this traverse is  so 
         good,  you should probably consider using Transit Rule adjustment, 
         which assumes that angles have been measured more accurately  than 
         distances.  In  most cases,  however,  Compass Rule (which assumes 
         that  angles  and  distances  were  measured  with  roughly  equal 
         asccuracy) will be the method of choice.  Since the procedures for 
         both  methods  are identical -- and quite simple -- let us proceed 
         with a Compass Rule adjustment  by  pressing  function  key  <F4>.  
         Because  adjustment  of  the traverse must be the last step in the 
         Close and Adjust procedure,  you are notified when the  adjustment 
         is  complete  and  are  instructed to press <ESC> to return to the 
         main menu; you have no further access to the Close and Adjust menu 
         at this time.  

                                      INVERSE. 
         
         To see what changes the adjustment has made  in  our  field  data, 
         press function key <F3>,  Inverse.  When SurveySoft prompts you to 
         enter the first point number,  please type 1  and  press  <ENTER>.  
         When you are prompted to enter the next point number, enter number 
         2.  Note  that  the  bearing  of  the  first traverse leg has been 
         adjusted to N 45 49'44" E and that the length of the  leg  is  now 
         99.73  feet.  Enter  point  number 3 and note that the field angle 
         right of 90 which we entered at point  number  2  has  become  an 
         angle  right of 89 46'50".  Enter point number 4 and note that the 
         northing and easting of this point have now been adjusted to match 
         the northing and easting of the initial traverse point.  

         Your  display  should  now  resemble  Figure  D.   When  you  have 
         satisfied  yourself  of  this,  press  <ESC>  to  exit the Inverse 
         procedure.  SurveySoft will compute and display the acreage that 
         you have inversed,  then prompt you to press <ESC> again to return 
         to the main menu.  Please do so when you are ready to proceed.  


         (Of course,  points need not be entered in consecutive order,  but 
         our  example does happen to work out that way.  In fact,  whenever 
         SurveySoft prompts you to enter a point number, you may default to 
         the point immediately following  the  current  point  by  pressing 
         <ENTER>.  However,  this  default must be used with caution;  if a 
         value has already been assigned to that default point,  it will be 
         lost.)


         (Computed  acreage  to  the nearest hundredth should be sufficient 
         for most purposes;  if not,  note that area is also  displayed  in 
         square  feet,  and  can  therefore  be  computed  to  any  desired 
         accuracy.)

                                 ROTATE COORDINATES.  
         
         We have entered a traverse from field data, corrected a data entry 
         error,  adjusted the corrected  traverse,  inversed  the  adjusted 
         traverse  and  displayed  the enclosed area.  We now would like to 
         rotate the traverse so that its west line conforms to a known  due 
         north÷south  bearing.  We  will  do  so  by  selecting  the Rotate 
         Coordinates routine from the Main Menu.  Please do so by  pressing 
         function key <CTRL><F4>.  

         SurveySoft prompts you to enter a point number for the hinge point 
         -- that is,  the point about which all the others will be rotated.  
         This point may be any point lying upon the line whose  bearing  we 
         wish  to  define  (in  this case,  the west line of our traverse).  
         Please enter point number 1 in response to the prompt.  

         The system now asks that you enter the known bearing away from the 
         hinge point, beginning with pressing a quadrant key on the numeric 
         pad.  To assign a bearing of due north to the west line, press key 
         9,  NE (or key 7,  NW,  if you prefer),  then input an angle of  0 
         degrees.  

         You  are now prompted to enter a base point number.  This point is 
         another point on the line through the hinge point whose bearing we 
         wish to define.  When the  Rotation  procedure  is  finished,  the 
         bearing from the hinge point to the base point will be the bearing 
         that  was entered in the preceeding step.  In this case,  the only 
         suitable point is point number 3.  Please enter 3 in  response  to 
         the prompt.  

         At this time,  SurveySoft offers you the opportunity to change the 
         northing and easting coordinates  of  the  hinge  point  (and,  of 
         course,  to  similarly  shift  the coordinates of the other points 
         that you choose to rotate).  To facilitate  plotting  the  survey, 
         let  us assign to the hinge point northing and easting coordinates 
         of 0 + 00.  Please type 0 and press <ENTER> when you are  prompted 
         for these coordinates.  

         The  system  now  prompts  you to enter a scale factor.  The scale 
         factor permanently alters the coordinates of all rotated points in 
         memory,  and should be used only on the rare occasions when it  is 
         necessary  to  scale  to  match known data.  In nearly all other 
         cases,  the correct response to this prompt is 1,  and  1  is  the 
         default  value  assigned if no other value is entered.  Respond to 
         the prompt by pressing <ENTER> with no numeric input.  


         (To make all distances between rotated points 1% longer,  enter  a 
         scale  factor  of  1.01;  to make then 10% shorter,  enter a scale 
         factor of .9,  and so on.  Note that the input of the scale factor 
         in  the  Rotate  routine  is  different from the input in the List 
         Coordinates routine on page ##.)


         You are now asked to enter the first point to be rotated.  This is 
         the lowest-numbered point that you wish to have  affected  by  the 
         Rotation  procedure.  In this case,  that point also happens to be 
         the hinge point;  you should enter point number 1 in  response  to 
         the  prompt.  When you are asked for the last point to be rotated, 
         enter the highest-numbered point that you wish to  have  affected; 
         in this case, that point is point number 4.  

         SurveySoft  informs  you  when  the  procedure  is complete.  Your 
         screen should now resemble Figure E.  Please press <ESC> when  you 
         are ready to proceed.  

                                  LIST COORDINATES.

         At  this  point  it will be helpful to prepare a sketch of what we 
         have accomplished.  One convenient way to prepare  a  sketch  from 
         data  in  system  memory  is to List the coordinates of the points 
         that you wish  to  plot.  Access  the  List  routine  by  pressing 
         function key <F4> from the Main Menu.  

         SurveySoft  prompts you to enter a scale factor.  Unlike the scale 
         factor  in  the  Rotate  routine,   this  scale  factor  does  not 
         permanently alter coordinates in memory but only displayed values. 
         (For  example,  this  enables  you to plot data at a scale of 1" = 
         400' by entering a value of 400 in response to this  prompt,  then 
         plotting  the  displayed  values  directly  in  inches,  while the 
         coordinates assigned to all points  remain  unchanged.)  For  now, 
         however, please respond to this prompt by entering 1.  

         The  system  prompts  you  to  enter  the first point number to be 
         listed.  Again, this is the lowest-numbered point that you wish to 
         display;  please enter 1 in response to the prompt.  When you  are 
         asked  for  the  last  point  to  be  listed,  input  the highest-
         numbered point that you wish  to  display;  please  enter  4  in 
         response to the prompt.  


         (Don't be concerned if you need to display more points  than  will 
         fit  on  the  screen  at  one time.  Go ahead and enter your point 
         numbers as  usual,  and  SurveySoft  will  display  the  data  one 
         screenful at a time.)


         If you wish,  you may now make a simple sketch using the displayed 
         data.  The results should resemble Figure F.  

                                    DATA STORAGE.

         At this point,  you may be ready for a bit of a break before  con-
         tinuing.  Let  us  save the data that we have developed up to this 
         point on disk,  so that it will be available when you return.  (In 
         practice,  you will want to save your data frequently,  perhaps as 
         often as every 10-15 minutes  when  you  are  engaged  in  complex 
         calculations,  and  to make back-up copies of your data at the end 
         of every session.) 

         If you have not already done  so,  return  to  the  Main  Menu  by 
         pressing  <ESC>.   Then  select  the  Data  Storage  routine  by 
         pressing function key <F9>.  


         (It  is  not really necessary in Version 3.0 to return to the Main 
         Menu before making your selection.  At almost  any  time  you  may 
         move   directly   to   another  menu  selection  by  pressing  the 
         appropriate function key.  As you become more  familiar  with  the 
         system,  you  will  find  that this approach will greatly increase 
         your computing efficiency.)


         The system asks you to input the name under which  you  intend  to 
         store your data.  If you have already used data file names in this 
         session,  you  are offered the most recent as a default selection, 
         and need only press <Enter> to select it.  This time, however,  we 
         need to enter an original name.  

         A  filename  may be any combination of letters,  numbers,  and the 
         underscore  ("_")  symbol,  up  to  eight  characters  in  length. 
         SurveySoft will not permit you to use illegal symbols or to exceed 
         the  legal  length.  An extension of ".DAT" is added to the end of 
         all data files to prevent accidental overwrites  and  to  simplify 
         block  file  handling.  (DOS  2.0+  pathnames  are  not  currently 
         supported.) 

         It is generally wise to select a name  for  your  file  that  will 
         recall to your mind the type of data contained in that file; thus, 
         while  JonesSub  would be an excellent file name,  choices such as 
         Data1, Data2,  and so on are probably not so appropriate.  In this 
         case,  let us save the data that we have compiled up to this point 
         as "Example".  Do so by typing Example and pressing <ENTER>.  Note 
         that no quotes are necessary around SurveySoft file names.  

         Your selected data drive operates briefly as  points  one  through 
         four  are  stored on your data disk;  you are then informed that 
         the data storage procedure is complete.  Your system  may  now  be 
         safely turned off, or you may experiment with the commands that we 
         have covered up to this point.  


         (SurveySoft stores data in a  text  file  in  the  form  of  ASCII 
         characters.  This means that SurveySoft data files may be accessed 
         through  the  DOS TYPE and PRINT commands,  as well as edited with 
         the EDLIN editor and many word processors.  Only  non-zero  points 
         are  stored,  together  with  the  point  numbers  that  have been 
         assigned to them.  In all but the very largest  data  files,  this 
         approach improves disk access time and conserves disk space.)


                                   DATA RETRIEVAL.

         Make  sure  that  your operating system and SurveySoft are in your 
         system's default drive and that EXAMPLE.DAT is in the  drive  that 
         you have chosen as your data drive.  If your system is on, restart 
         it  by pressing <DEL> while holding down both the <CTRL> and <ALT> 
         keys.  If it is off,  turn it on.  Enter the date and time and  do 
         any other necessary housekeeping;  then type SURVEY in response to 
         the DOS prompt and press <ENTER>.  This will bring up the  Options 
         Menu.  Make  your selections here -- remember that you do not have 
         to re-enter the data drive unless you would like to change  it  -- 
         and press <ENTER> when you are ready.  

         We  will  now  load  the  data  from  EXAMPLE.DAT from the disk by 
         pressing function key <ALT><F9>, Load data.  If there are any non-
         zero points in active memory,  you are warned that  unless  saved, 
         they  will  be overwritten,  and you are offered an opportunity to 
         back up and save them.  Since we have just started  with  a  clean 
         slate,  this warning is bypassed and you are prompted to enter the 
         name of the file to be loaded.  

         Respond by typing the  name  of  a  file  that  you  know  is  not 
         currently  in the data file,  perhaps TEST,  and pressing <ENTER>.  
         The system informs you that is  unable  to  find  this  file,  and 
         offers  you  the  option  of  pressing  <ENTER> to retry -- either 
         another disk or another filename -- or of pressing <ESC>  to  back 
         up  to  the  Main  Menu.  Please press <ENTER>.  Note that you are 
         offered TEST.DAT as a default selection;  to search for that  file 
         on  another  disk,  you  need only insert the new disk in the data 
         drive and press <ENTER>.  For now,  please type EXAMPLE and  press 
         <ENTER>.  With  luck,  you  will meet with more success this time, 
         and will be returned to the main menu.  

                                     SIDESHOTS.

         Refer to the sketch of our  three-point  traverse  that  you  made 
         earlier, or to Figure F.  Let us assume that traverse point number 
         2  was  a  temporary  point  that  you  established  to locate two 
         additional points that lie roughly north and south of it, and that 
         you have located these two points while occupying point number  2, 
         turning  angles  and measuring distances to them while using point 
         number 1 as a backsight.  Access the Sideshot routine by  pressing 
         function key <F2>, Sideshot.  

         When  the  system prompts you for a backsight point number,  input 
         number 1. When you are prompted for the number of  the  occupied 
         point,  enter 2.  Input an angle right of 132 15'15" by pressing 6 
         on the numeric keypad,  typing  132.1515,  and  pressing  <ENTER>.  
         When prompted, input a distance of 75.12 feet; if necessary, input 
         a  zenith  angle  of  90.  Note  that,  unlike the Field Traverse 
         routine,  you are now prompted to enter the  point  number  to  be 
         assigned to the new point.  Since the current point number is 2, 
         if  you respond to this prompt by pressing <ENTER> without numeric 
         input, the new coordinates will be assigned to point number 3.  In 
         this case,  the current  coordinates  of  point  number  3,  which 
         remains useful to us, will be overwritten and lost.  


         (If  you  will  be entering bearings rather than field angles,  it 
         makes no difference what point you enter  here.  If  you  are  not 
         comfortable  entering  a random point number,  you may bypass this 
         selection entirely by pressing <ENTER> with no numeric input.)

         (For our purposes here, the current point number is defined as the 
         last point number that was entered by the user.)


         Obviously,  then,  we must assign some new point number, say 5, to 
         this point.  Do So by typing 5 and pressing <ENTER>.  

         In the Sideshot routine,  as opposed to  the  Traverse  and  Field 
         Traverse  routines,  SurveySoft  assumes  that subsequent data are 
         input using the same backsight  and  occupied  point.  Locate  the 
         second  new  point  at a field angle right of 270 17'17" (measured 
         from point  number  1)  by  pressing  6  on  the  numeric  keypad, 
         typing 270.1717,  and pressing <ENTER>.  Input the  distance  from 
         point  number  2  by typing 68.13 and pressing <ENTER>.  Since the 
         current point number is now 5, and since point number 6 is unused, 
         we may assign the default value  of  6  as  the  point  number  by 
         pressing <ENTER> with no numeric input.  
         
         If you had other points that were located from the same setup, you 
         would enter them at this time.  If you had other points  to  enter 
         using  the Sideshot routine which were located using other setups, 
         you would do so either by returning to the Main Menu and selecting 
         Sideshot again or by pressing function key <F2> while still in the 
         Sideshot routine.  In either of these cases, you would be prompted 
         to enter a new backsight number,  and would proceed with  the  new 
         setup data as above.  

         You may wish to update the sketch of our data that you made previ-
         ously,  or refer to Figure G.  List the coordinates of points 1 to 
         6, and plot those which have not yet been plotted, bearing in mind 
         that the coordinates of point number 1 are 0 + 00 North,  0  +  00 
         East.  Inverse the lines 1 - 6,  6 - 5,  5 - 3,  and 3 - 1.  Label 
         the lines that you have Inversed with their bearings and  lengths.  
         When  you  have  finished,  your  sketch should resemble Figure G.  
         When you are satisfied, please return to the Main Menu.  

                                  ENTER COORDINATES


         Now let us assume that line 1 - 3 is not in fact the west line  of 
         the parcel that we are surveying,  but is rather the centerline of 
         a road which has an 80-foot right-of-way.  To establish the right-
         of-way line which is the actual boundary of our  survey,  it  will 
         first be necessary to establish a point which is 40.0 feet east of 
         line  1 - 3.  Certainly one option is to enter this point by means 
         of the Sideshot routine;  however,  this also provides us with the 
         opportunity  to  introduce  the Enter Coordinates routine.  Please 
         enter this routine by pressing <ALT><F4>.  

         SurveySoft now prompts you to enter the point to which you wish to 
         assign new coordinates.  Please type number 7 and  press  <ENTER>.  
         You  are prompted to enter the northing that you wish to assign to 
         this  point.  Let us arbitrarily assign a northing coordinate of 0 
         + 00 by typing 0 and pressing <ENTER>.  When you are  prompted  to 
         enter  an  easting  for this point,  please enter 40.  We have now 
         established point number 7 due east of point  number  1  and  40.0 
         feet east of the center of the road.  

         The  system prompts you to enter another point number to which you 
         would like to assign  coordinates.  You  may  enter  a  new  point 
         number  at  this  time;  or as always,  the next consecutive point 
         number may be assigned by default by simply pressing  <ENTER>.  To 
         exit from this routine, simply press <ESC>.  

                           BEARING / BEARING INTERSECTION

         Let us now compute the intersection of the north line of our tract 
         with  the east right-of-way line of the road centering on line 1 - 
         3.  We have already established point number 7 on that east right-
         of-way  line.  Now  select  the  Bearing  /  Bearing  Intersection 
         routine by pressing <F5>.  

         SurveySoft  prompts you to enter the first point number.  This may 
         be either point through which a line of known  bearing  is  to  be 
         run;  in this case, please enter point number 7.  Since the right-
         of-way of the road is to center upon the west line of  out  tract, 
         it  must  have  a  bearing  of  N  0 00' E.  Enter this bearing by 
         pressing 9 on the numeric keypad,  then entering an  angle  of  0. 
         (Note  that  it is important that the bearing entered be a bearing 
         toward the intersection point.  In this case, entering an angle of 
         S 0 W might yield an incorrect result.) 

         The system prompts you to enter the number  of  the  second  point 
         through  which a line of known bearing is to be run.  Please enter 
         point number 3.  

         At this point the usual course would be to enter  the  bearing  of 
         the  north  line  of  our  tract by referring to our sketch,  then 
         inputting the proper quadrant  and  bearing.  However,  SurveySoft 
         also  provides  a shortcut in the Bearing Recall function.  Please 
         press 0 on the numeric keypad.  

         Selecting '0' as the quadrant key  informs  the  system  that  the 
         number about to be input is not,  in fact,  a bearing, but instead 
         specifies two point numbers,  and that the bearing  between  these 
         two  points  is  to  be  computed  and  entered  into  the ongoing 
         calculation.  

         The  format  for  entering the point numbers is #.00##.  Any legal 
         point number may be typed to the  left  of  the  decimal.  To  the 
         right  of the decimal,  any legal point number may be entered with 
         leading zeroes to make a total of four decimal  places.  Thus,  to 
         recall  the  bearing  from  point 1 to point 4,  enter 1.0004;  to 
         recall the bearing from point 1 to  400,  enter  1.0400.  At  this 
         time,  to recall the bearing from point 3 to point 5,  type 3.0005 
         and press <ENTER>.  

         SurveySoft  computes  the  coordinates  of the intersection of the 
         north property line and the right-of-way line, then prompts you to 
         input a new point number for the intersection point.  Please enter 
         point number 8.  

         Now return to the Main Menu.  Inverse from point 7 to point  8  to 
         verify  that  the  bearing of the right-of-way line is due north - 
         south.  Check the coordinates of point number 8 to verify that  it 
         is at 0 + 40 East.  Inverse from point 8 to point 5 to verify that 
         the bearing of the new north line is as it should be,  then from 5 
         to 3 to verify that the interior angle 8-5-3 is in fact 0 degrees.  
         Return to the Main Menu and save your file as EXAMPLE.  Note  that 
         since  the  file  EXAMPLE  already  resides on this disk,  you are 
         notified that it  is  about  to  be  overwritten  and  offered  an 
         opportunity  to  back up and try again with another file name.  In 
         this case, since you do wish to update the existing file,  respond 
         by pressing <ENTER>.  
                          BEARING / DISTANCE INTERSECTION 

         Now let us assume that the road that runs along the west  line  of 
         our  tract terminates in a cul-de-sac 120.0 feet in diameter,  and 
         that the cul-de-sac is centered upon point number  1.  Our  sketch 
         will now look something like Figure H.  

         First we will establish the point at which the 80-foot road right-
         of-way intersects the radius of the cul-de-sac.  This is the point 
         labeled in Figure H as point number 9.  Please return to the  Main 
         Menu if you have not already done so,  then press <F6>,  Bearing / 
         Distance Intersection.  

         SurveySoft prompts you to enter the point through which  the  line 
         of known bearing runs.  Please enter point number 8 in response to 
         this prompt.  

         The  system then prompts you for a bearing from the point that was 
         just entered.  Input a due south bearing  by  pressing  1  on  the 
         numeric  pad,  then  entering an angle of 0 degrees in response to 
         the next prompt.  

         You are now prompted to enter the number of the point  from  which 
         the  distance  to the intersection point is known.  Enter number 1 
         in response to the prompt;  when the system requests the  distance 
         to the intersection point, enter a distance of 60 feet, the radius 
         of the cul-de-sac.  

         SurveySoft  displays  the  distance from the first point number to 
         the first of two solutions to the intersection.  In this  case,  a 
         distance  of  98.80  feet is about the distance that we would have 
         anticipated from point number 8 to point number 9, so enter 9 when 
         the system requests a point number to  assign  to  this  solution.  
         The  system  now  displays the distance from point 8 to the second 
         possible solution.  It is apparent that 188.25 is the distance  to 
         the  point  at  which  the  easterly  road right-of-way line would 
         intersect the south edge of the  cul-de-sac.  Since  there  is  no 
         immediate reason for us to assign a point number to this solution, 
         press <ENTER> without inputting a number.  

         (Note  that had these solutions been displayed in reverse order -- 
         had the solution we needed been the second one  to  appear  --  we 
         would  have  pressed  <ENTER> with no numeric input in response to 
         the first prompt.  Note also that  here  and  in  the  Distance  / 
         Distance Intersection routines,  SurveySoft's automatic assignment 
         of consecutive point numbers is disabled.  

         

                          DISTANCE / DISTANCE INTERSECTION


         Now we will establish the other point at the throut of the cul-de-
         sac,  the point labeled number 10 on the sketch.  You have already 
         become  familiar  with  several  means  of   accomplishing   this, 
         including  another  Bearing  / Distance Intersection or a Sideshot 
         (occupying point number 9 and turning 90 degrees left  from  point 
         number  8  for a distance of 80 feet).  However,  we will now make 
         use of the Distance / Distance  Intersection  routine.  To  access 
         this routine, please press function key <F7>.  

         We  know  that  point number 10 is 80 feet west of point number 9, 
         because that is the width of the right-of-way.  We know that it is 
         60 feet northwest of point number 1, because that is the radius of 
         the cul-de-sac.  In response to SurveySoft's request for  a  point 
         number,  either 1 or 9 might be input.  In this case,  enter point 
         number 9 in response to the request for the first point number and 
         enter a distance of 80 feet.  

         Respond to the request for a second  point  number  by  enter  our 
         other  possible  selection,  point number 1,  and a distance of 60 
         feet.  SurveySoft displays the coordinates of the  first  possible 
         solution to the intersection problem,  then prompts you to input a 
         point number.  Since we know that the solution that we are looking 
         for is northwest of  point  number  1,  and  since  the  displayed 
         coordinates are south and east of that point,  respond by pressing 
         <ENTER> without inputting a point number.  

         (Note  that in this situation,  and the corresponding situation in 
         the Bearing / Distance Routine,  SurveySoft's automatic assignment 
         of  the next consecutive point number is overridden.  Make sure to 
         assign a number to the solutions that you wish to retain in  these 
         situations.)  
         
         The system now displays the coordinates  of  the  second  possible 
         solution.  Since this solution looks reasonable,  assign number 10 
         in response to the prompt.  

                            INVERSE WITH CURVES AND AREAS

         Review the sketch of our tract and note that  all  points  on  its 
         perimeter have been established except point number 11, the inter-
         section  of  the south line of the tract with the east line of the 
         cul-de-sac.  Please establish point number  11  at  this  time  by 
         pressing  function key <F2>,  Sideshot.  Backsight point number 6, 
         occupy point number 1,  and use numeric key 6 to  input  an  angle 
         right  of  0  degrees.  Enter a distance of 60 feet and assign new 
         point number 11.  When you have finished, press function key <F3>, 
         Inverse.  

         Enter point number 9 in response to the system's request  for  the 
         initial  point  number.  Respond to subsequent prompts by entering 
         point numbers 8, 5, 6, and 11 in turn.  

         We have now arrived at the first point on the radius of  the  cul-
         de-sac.  The  next point number to be input is the radius point of 
         the curve. Press <ALT><C> to enter the curve; when prompted, enter 
         1, the number of the radius point.  Finally,  enter 9,  the number 
         for  the  end  point  of  the  curve,  when  prompted  to  do  so.  
         SurveySoft computes and displays curve data  and  compensates  for 
         the curve in its area calculations.  

         (Of course,  the curve need not be the last course to be inversed; 
         one  or  more  curves  may  occur at any point in the figure being 
         inversed.) 

         Update your sketch if you wish,  showing right-of-way  information 
         and  the  new  lengths  of the north and south lines of the tract.  
         When you have finished, it should resemble Figure I.  

         Verify that the information on your sketch is  in  agreement  with 
         that shown here.  When you are satisfied,  return to the Main Menu 
         and save your data as EXAMPLE.  

                         FIXED AREAS (ANGLE / SIDE / ANGLE) 

         We will now assume that you intend to lay off a  tract  containing 
         0.5  acres,  bounded on the west by the road right-of-way,  and on 
         the north and south by the easterly extension  of  the  north  and 
         south  lines  of  our  tract.  This  may be easily accomplished by 
         using the Fixed Areas  (A/S/A)  routine.  Access  it  by  pressing 
         function key <F8>.  

         SurveySoft  prompts  you  to  enter  the  first base point number.  
         Enter point number 5 in response to the prompt.  The  system  will 
         prompt  you to press a numeric key and enter a bearing.  Enter the 
         bearing of the north line by pressing numeric 0,  Recall  Bearing, 
         and  entering  3.0005.  When  the  system prompts you to enter the 
         second base  point  number,  input  point  number  6.  Recall  the 
         bearing  of  the  south  line  by  pressing numeric 0 and entering 
         1.0006.  

         The system prompts you to enter the bearing (in  square  feet)  of 
         the  tract  that  you  wish to lay out.  We know that the boundary 
         which we have previously inversed contains 6166 square  feet.  One 
         half  acre contains 21780 square feet,  so the difference of 15164 
         square feet is the additional area we need to arrive at a total of 
         0.5 acres.  Enter 15164 in response to the prompt.  

         You are prompted to press a numeric key to set the bearing of  the 
         new  side.  For  the sake of neatness,  set the bearing of the new 
         side to South 0 degrees East by pressing numeric 3 and entering  a 
         bearing of 0 in response to the prompt.  

         When you are requested to enter the first new point number, please 
         enter  12.  This  is  the point which lies on the same line as the 
         first base point.  When you are requested to enter the second  new 
         point number you may enter 13 or let the system assign the default 
         value of 13 by pressing <ENTER> with no numeric input.  

         SurveySoft  computes and displays the coordinates of points 12 and 
         13.  If you like,  you may now update your working  sketch,  which 
         should now resemble Figure J.  

                          FIXED AREA (SIDE / ANGLE / SIDE)

         Your  client  has now informed you that instead of 0.5 acres,  the 
         tract  should  in fact have contained 0.6 acres.  He wishes to add 
         the additional acreage to the north side of the tract,  but  would 
         like  the  amount of road frontage on the west to remain constant, 
         as well as the bearing of the east line.  To no  one's  particular 
         surprise, it is time to press <ALT><F8>, Fixed Area (S/A/S).  

         The  system  prompts  you to enter the base point number.  This is 
         the number of the point which is to be adjusted  in  arrriving  at 
         the  new  area,  corresponding  to  point  number  12 in Figure K.  
         Please enter 12 in response to the prompt.  You are  now  prompted 
         to  press  a  key on the numeric pad.  This key -- and the bearing 
         which follows it -- will determine the bearing of the  line  along 
         which  point  number  12 is to be adjusted.  Let us retain the due 
         north bearing of the east line by pressing numeric 9 and  entering 
         a bearing of 0.  

         Wneh  you are prompted to enter the hinge point number,  enter the 
         number of the point which is to remain fixed -- upon which the new 
         line will hinge.  Please enter point 8 at this time.  

         You  are  asked to enter an area in square feet.  Since we wish to 
         add one tenth of an acre or 4356 square feet, please enter 4356 in 
         response to the prompt.  SurveySoft calculates the coordinates  of 
         the  new  northeast  property  corner and prompts you to enter the 
         point number to be assigned to the new point.  Please enter number 
         14;  the coordinates of point  number  14  are  displayed  on  the 
         screen.  

                                TRAVERSE WITH CURVES

         If you like,  you may update your screen at this time;  it  should 
         resemble Figure K.  

         It  is now time to verify that the information shown on our sketch 
         is correct as shown.  Please save your data,  then return  to  the 
         Main  Menu.  Press  F1  to  select  the Traverse routine.  We will 
         begin entering data with the  point  presently  labeled  as  point 
         number 1;  however,  we will assign it a new point number to avoid 
         overwriting our current data.  Enter an ititial  point  number  of 
         100  and any convenient starting coordinates.  (Good choices might 
         be (0,0) or the current coordinates of point number 9.) 

         From this initial point, enter traverse data as follows:

                N  0 degrees 00'00" E          98.80 feet
                N 70 degrees 23'25" E         186.80 feet
                S  0 degrees 00'00" E         165.95 feet
                S 79 degrees 26'19" W         159.69 feet

         This brings us to point number 11 ( now point number  104  ),  the 
         intersection  of  the  south line of the survey with the radius of 
         the cul de sac.  Press <ALT><C> to enter the radius point  of  the 
         curve  that  we  will  be traversing.  You are prompted to enter a 
         bearing for the initial tangent of the curve.  In  this  case,  we 
         know that the south line of our survey is radial to the curve,  so 
         we may enter the bearing of the tangent as a deflection  right  of 
         90  degrees  from  our  current  bearing.  Press  8 on the numeric 
         keypad to enter a deflection right, then enter 90 degrees.  
         
         The  system  asks  if  the curve to be traversed is a curve to the 
         left or to the right.  In this case,  the curve is concave to  the 
         left,  so enter L (or l).  SurveySoft requires at least two values 
         to compute the curve,  one of which must be either the  radius  or 
         the  central  (  deflection ) angle.  You will be prompted in turn 
         for the radius, delta,  tangent,  and arc of the curve,  until two 
         values  have  been entered or it has been determined that the data 
         entered is not sufficient.  In our example,  the radius is  known, 
         so respond to the prompt for a radius by entering 60.  

         You  will  be  prompted  for  the  delta and then for the tangent, 
         neither one of which may be very conveniently determined from  our 
         sketch.  Respond  to  each  of  these prompts by pressing <ENTER>.  
         Then,  when you are prompted for the arc,  enter 39.40  from  your 
         sketch or from figure K.  The curve is computed and displayed, and 
         you  are  prompted  to  enter a point number for the radius point, 
         then  the  point  of  tangency.  These points may be entered indi-
         vidually or by using the system default  values,  which  will,  as 
         usual,  assign the next consecutive point number after the current 
         ( point of curvature ) number.  

         Note that it is not necessary for the curve to be the last  course 
         traversed;  our  example  just happens to work out that way.  Note 
         also that compound and reverse curves may be entered  by  pressing 
         <ALT><C>  again  at this point.  Exit from the Traverse routine by 
         pressing <ESC>.  The traversed area  is  computed  and  displayed, 
         with the curve accounted for.  Return to the Main Menu by pressing 
         <ESC> again.  

                                RADIAL INVERSE
         
         Finally,  having arrived at the correct dimensions for our  sample 
         tract,  it  is  time  to  consider the actual field staking of the 
         tract.  This could be accomplished by using the  Inverse  routine, 
         and  there may be cases in which it is easiest to do so;  however, 
         SurveySoft also provides  you  with  a  Radial  Stakeout  routine.  
         Radial  Stakeout  bears the same relation to Inverse that Sideshot 
         bears to Traverse;  that  is,  it  will  retain  a  backsight  and 
         occupied point rather than moving from point to point as you enter 
         data.  Please access this routine by pressing <ALT><F3>.  

         Assume  that  you wish to establish all of the perimeter points of 
         the tract while occupying point number 2  and  sighting  on  point 
         number  1.  In  response  to  the  system prompts,  enter 1 as the 
         backsight point number and 2 as the occupied point number.  

         In response to the prompt for the next point number,  please enter 
         point numbers 9,  8,  4,  13, and 11 in turn.  Your display should 
         now resemble figure L.  

         When you are ready, press <ESC> to return to the Main Menu, and 
         again to reutrn to the Options Menu.  Press it once more, and you 
         will be warned that you are leaving the SurveySoft program.  One 
         more time, and you are returned to DOS.  


                                     CONCLUSION


         Although this concludes the instruction manual for the  Coordinate 
         Geometry section of SurveySoft,  please realize that,  as with any 
         other tool,  as you grow in profficiency,  you will discover  uses 
         that  you  (  and  perhaps  the  author  )  are  not yet aware of.  
         Experiment.  Make a few errors to see how the system  will  handle 
         them.  If  you  are unsure as to how a particular procedure may be 
         used to accomplish a given task,  by all means,  try it -- then be 
         sure to verify your results by some other means.  

         Remember  that  SurveySoft  is  distributed  on a shareware basis.  
         This means that  it  exists  only  through  your  good  faith  and 
         honesty.  If you are satisfied that SurveySoft will make a contri-
         bution  to your operation,  please be sure to mail the recommended 
         $75.00 to : 

                        G. D. Fleming & Company, Inc.
                        P.O. Box 588
                        Blair, NE 68008

         Registration  will  provide you with an attractively bound copy of 
         this manual,  complete with the referenced illustrations.  It will 
         also  assure  that  you  receive  support for the product,  prompt 
         notification of problems and updates,  and announcements of future 
         products.   (Transit  Topography,   Earthwork,  and  Radial  Curve 
         Stakeout are underway;  electronic data collection, plotter and/or 
         screen  graphics,  and  a  text  editor  that can directly extract 
         survey data for legal descriptions are on the drawing board. ) 

         Finally,  whether or not you decide to make use of this package in 
         the future,  the author welcomes  problem  reports  and  suggested 
         improvements  (although support can only be provided to registered 
         users).  He may be reached at the above address.  


```
{% endraw %}

## NOTES566.TXT

{% raw %}
```
Program name:        SURVEYSOFT

Author name:         G.D. Fleming & Co. Inc.
Address:             P.O. Box 588, Blair, N.E.  68008

Suggested Donation:  $ 75

Program Description: SURVEYSOFT is a well written package for people with an
                     an interest in surveying. This group may include civil
                     engineers, surveyors and engineering students.

                     The package is quite comprehensive and includes :

                     1. Field traverse       9. Bearing/Bearing Intersection
                     2. Close & Adjust      10. Bearing/Distance Intersect.
                     3. Inverse             11. Distance/Distance Intersect.
                     4. Rotate Coordinates  12. Inverse with curves & areas
                     5. List Coordinates    13. Fixed Areas (Angle/Side/Angle)
                     6. Data Storage        14. Fixed Areas (Side/Angle/Side)
                     7. Data Retrieval      15. Traverse with curves
                     8. Side shots          16. Radial Inverse
                     9. Enter coordinates

                     Selections are made using the function and ALT key so
                     the package is easy to use. The documentation is good.

                     Revisions are planned which will manage transit
                     topography, earthwork and graphics.

                     The package can be used with either a floppy disc or
                     a hard disk.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0566

     Volume in drive A has no label
     Directory of A:\

    DRIVFILE PAS         1  12-18-85   4:58p
    FILES566 TXT       957   7-03-86   9:05a
    GO       BAT        70  12-19-85   8:56a
    GOSURVEY BAT        70  12-19-85   8:56a
    MANUAL   TXT     74624   1-07-86  10:56a
    MSG      01       1590  12-19-85   8:51a
    MSG      02       1659   2-27-86   5:21a
    NOTES566 TXT      1509   4-25-86  10:27p
    PRINTEXT BAT        20   2-27-86   5:22a
    READ_ME  BAT        70  12-19-85   8:56a
    RUN      BAT        70  12-19-85   8:56a
    SETDRIVE COM     11706   6-03-85   1:11a
    SURVEY   000     12544   2-01-86  11:34a
    SURVEY   001      4352   2-01-86  11:35a
    SURVEY   002     11776   2-01-86  11:35a
    SURVEY   003     13056   2-01-86  11:35a
    SURVEY   004      4352   2-01-86  11:36a
    SURVEY   COM     34094   2-01-86  11:36a
           18 file(s)     172520 bytes
                          138240 bytes free
