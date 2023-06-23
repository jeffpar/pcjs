---
layout: page
title: "PC-SIG Diskette Library (Disk #2637)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2637/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2637"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2637.TXT

{% raw %}
```
Disk No: 2637                                                           
Disk Title: Slimmer  2of2 (1489 also)                                   
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: Slimmer                                                  
Author Version: 3.0                                                     
Author Registration: $35.00                                             
Special Requirements: 280K RAM.                                         
                                                                        
SLIMMER is a computerized diet program that makes calorie-counting      
easier than ever before.                                                
                                                                        
SLIMMER will calculate your ideal weight and proper caloric intake and  
provide you with an extensive menu of recommended foods and their       
calorie values.  Food lists can be created for each day of the week and 
printed for reference.  SLIMMER also provides information on the        
calories consumed by various forms of exercise.  The SLIMMER program is 
menu driven so it's easy to use, and the food database can be expanded  
for those with exotic tastes.                                           
                                                                        
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
║           <<<<  Disk #2637 SLIMMER  2 of 2  (1489 also  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To view instructions on how to install SLIMMER, insert disk #1 and    ║
║   type: GO (press Enter)                                                ║
║                                                                         ║
║                                       (c) COPYRIGHT 1991, PC-SIG INC.   ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SLIMMER.DOC

{% raw %}
```
e   S L I M M E R    R E V   3.0   D A T E D    J A N    3 1 ,   1 9 9 1

             (c) copyright 1988, 1989, 1990 by George D. Summers


****************************** WARNING ****************************************
*                                                                             *
*   SLIMMER CREATES OR WRITES TO ONE OR MORE FILE(S) EVERY TIME YOU RUN IT!   *
* THEREFORE, MAKE YOURSELF A WORKING COPY OF SLIMMER & KEEP THE ORIGINAL IN A *
* SAFE PLACE FOR REFERENCE.                                                   *
*                                                                             *
****************************** WARNING ****************************************


        DEDICATION

    SLIMMER is dedicated to the ultimate programmer - the  creator  of  the
    universe.


        OVERVIEW

    SLIMMER  will do the following for you:
        1. Calculate your ideal weight.
        2. Calculate  your  ideal daily calorie requirement.
        3. Keep  track of your weight,  food and exercise calories, as well
    as your daily  intake  of  protein,  carbohydrates,  fat,  cholesterol,
    sodium, potassium and fiber and plot your progress.
        4.   Provide you with a starting data base of over 1,200 food items
    with their corresponding food values.  Allows you to select  and  scale
    items from the food tables for your daily food list.
        5.  Provides for custom food tables for each (registered) user. The
    1,200 item data base can be expanded to up to 7,000 food items in up to
    19 categories and up to 400 types of exercise.
        6.   Allows  the  (registered) user to save the last fourteen (days
    of)  daily  food value lists.  These lists may be recalled and  edited,
    summed, or deleted - and even copied to a different date if desired.
        7. Various types of exercise may be selected by the user and may be
    scaled and saved in the daily food value lists.
        8.  Daily  food  value  lists  can  be printed by registered users.
    (or  if no printer is on-line, a print file will be written.) The Epson
    FX and PostScript printers are supported.


        SYSTEM REQUIREMENTS

    SLIMMER  requires  an  IBM  compatable  computer  with at least 450K of
    memory in which to load.  If your computer  has  a  math  co-processor,
    SLIMMER  will  use  it.  SLIMMER can be run on one and two-disk systems
    with difficulty.  It runs fastest when loaded to and run  from  a  hard
    disk-equipped  system. DOS 3.0 or higher is required.  If  you  have  a
    monochrome  or  color monitor with or without a graphics card, you will
    be able to use SLIMMER. The Monochrome, CGA, EGA,  and  VGA  modes  are
    supported.
                                    Page 1



        INSTALLATION - HARD DISK

    SLIMMER  is  distributed on two 5-1/4" disks or one 3-1/2" disk with an
    installation batch file HDINST.BAT that will allow  the  user  (with  a
    hard  disk)  to select a source and a target drive for the program.  It
    creates a SLIM30 subdirectory on your hard disk.  To  install  SLIMMER,
    change  to  the drive with this disk in it and enter the command HDINST
    FROM TO where FROM and TO are your  floppy  disk  and  your  hard  disk
    letter designations, respectively. An example is:

                               HDINST A D

    where  the FROM floppy disk is A and the TO hard disk is D. Notice that
    there are no colons (:) in the above command.


        INSTALLATION - FLOPPY DISK

    For those without a hard disk, run SLIMMER from your copy  disks  after
    you  have  safely  put  away  your original. When running from a floppy
    disk, file maintenance is important since SLIMMER will create new files
    or addend existing files and eventually fill your disk.

        1. SYSTEM WITH ONE 360K FLOPPY DISK -
         The  single  drive  360k  system  is really not suited for running
    SLIMMER Rev 3.0. By the time you changed disks about 20 times during  a
    session, you would hate me....Have you considered a hardware upgrade?

        2. SYSTEM WITH TWO 360K FLOPPY DISKS -
        With  two  floppy  drives, it will be a little easier to run, and a
    lot fewer disk changes. The following 4 disks will be needed:

              disk 1:    files S3.EXE, the *.DAT files,  and  your  working
                         data  files. This is your primary working disk and
                         is kept in drive A:>  Include a batch file on this
                         disk with the following statement: path = a:\;b:\;
                         in  order  to  have  your  computer  check out the
                         second drive. File AB.BAT should fit the bill.

              disk 2:    files GRAPH.EXE and CALCOUNT.EXE

              disk 3:    files   INITIAL.EXE,  UTILITY.EXE,  REGIS.EXE  and
                         REVWT.EXE

              disk 4:    files SLIMMER.DOC and the CALTAB files (if you are
                         a registered user.

        3. SYSTEM WITH ONE OR MORE 3-1/2" DISKS -
        If you have a 720k floppy disk, then the program will have to be on
    two floppy disks as follows:

              disk 1:    files S3.EXE,  GRAPH.EXE,  CALCOUNT.EXE, the *.DAT

                                     Page 2

                         files,  and  your working data files. This is your
                         primary working disk and  is  kept  in  drive  A:>

              disk 2:    files INITIAL.EXE, UTILITY.EXE, REGIS.EXE,  REVWT.
                         EXE, and SLIMMER.DOC. CALTAB will go here  if  you
                         are a registered user.

    If  this is a two-disk system, add the file AB.BAT to disk 1, and start
    the program with the command AB. Otherwise, with disk 1 in your  drive,
    type  S3.  Note that for registered users, SLIMMER is available to them
    on 3-1/2" disks.

        4. IBM AT OR EQUIVALENT WITH HIGH DENSITY 5-1/4" DRIVE
    Since  SLIMMER  writes to and updates files in the default drive, it is
    strongly recommended that you never run SLIMMER from a 360K disk in the
    AT's high density drive. Either copy SLIMMER to a subdirectory  on  the
    hard disk, or copy it to a high density disk before running it. All the
    SLIMMER files will nearly fit on a single 1.2 meg high density  floppy.
    Move  some  of  the lesser used files such as SLIMMER.DOC and the demo
    files for SLIM (SLIM.* and *.SLI) and CALTAB.* to free up some room.

        5. COMPUTER WITH HIGH DENSITY 3-1/2" DRIVE
    All the SLIMMER files will fit on a high density 3-1/2" floppy. It  can
    be  run  from the drive with the command S3. If your data files get too
    large, you may need to move some of the lesser used files to  a  second
    floppy (see above).

        RUNNING SLIMMER

    To run SLIMMER, type S3 and press <ENTER> after you have either entered
    the  SLIM30  subdirectory on your hard disk, or are on the floppy drive
    containing your working copy of the SLIMMER files.  After you have  run
    SLIMMER  a  few  times  and  get  tired of the opening screens, you can
    bypass them by entering S3 n$ and pressing return where n$ is your name
    (or the file name you want to view). For example, you can view the data
    for Slim by typing S3 SLIM, then  pressing  <ENTER>.  A  one-line  .BAT
    file   will   save  you a bit of typing.  It would contain the one-line
    command S3 SLIM (e.g.), and could be called  1.BAT  or  similar  simple
    name.  SLIMMER could then be run by entering "1" and then "<RETURN>".

        MONOCHROME MONITORS AND LAPTOPS

    SLIMMER makes extensive use of color in its screens and  windows.  This
    looks  great on color monitors and in greyscale tones. The truly "black
    and white" monitor (usually amber or  green),  however,  will  be  very
    difficult  to  read  for some color combinations. For you without color
    capability,  you  may want to  try  the  "black  and  white"  option in
    SLIMMER.   As you start up  SLIMMER  for the first time, simply type in
    S3 BW to run in black and white, or as in the example in  the  previous
    paragraph,  type in S3 BW SLIM to run in black and white and bypass the
    opening screens.  The default black and white mode assumes a monochrome
    monitor and provides a  "white on white"  background.  If your computer
    has graphics  capability,  then select the UTILITY option from the main
    menu and make the appropriate changes to the graphics mode.

                                    Page 3


    The default color configuration assumes a color graphics adaptor  (CGA)
    and has a red on white background.

    For those of you with laptops,  SLIMMER  is  available  on  3-1/2" 720k
    diskettes. Please indicate your preference for either the 3-1/2" or the
    5-1/4" diskettes when ordering.

        DEBUGGING

    Every effort has been made to program SLIMMER with sufficient  internal
    checks  to  preclude the more common bugs. It will, for example, open a
    new file for you if it can't find one already started.  Error  comments
    are  provided  when  the  data  that  you  input doesn't match what the
    program expects to see. With a program of  this  size,  I'm  sure  I've
    overlooked  some  combinations  that might give strange results. Please
    contact  me  with  the  circumstances  and   a   description   of   any
    abnormalities  that  you  find. These abnormalities include any program
    hang-ups without error message, errors in computations,  and  instances
    where  you don't get the response that you would expect to see. (See my
    name and address at the end of this document) SLIMMER will  be  updated
    as changes become necessary.

        SLIMMER VERSION #

    Version  1.0   - initial  release  - June 1988
    Version  1.0a  - corrected routines for monochrome monitors - June 1988
    Version  2.0   - added  calorie  counter  &  improved  editor  and plot
                     routines - Feb 1989
    Version  2.0a  - Fix  for  five food table files to enable space bar to
                     tag files - May 1989.  Fixed  so  that personal tables
                     would be saved when going from edit to calorie counter
                     mode.  Released SLIM2FIX.ARC & SLIM2FIX.ZIP for use by
                     Version 2.0 users.
    Version  2.0b  - Fix  to  link  between editor and food tables.   Added
                     expanded fast food menu section to food tables. Treats
                     exercise as a (negative) food category  for easy input
                     and scaling of multiple daily exercises. Aug 1989.
    Version  2.0bx - Introduced EGA 640 x 350 color graphics in addition to
                     the the CGA 640 x 200 B&W and monochrome graphics. Fix
                     to CGA graphics of version 2.0b. Sept 1989
    Version  2.1   - Fix to allow SLIMMER to run on computers with DOS 2.11.
                     Sept 1989.
    Version  3.0   - Expanded  data  base  to  1,200  items  and  to  track
                     daily  weight,  calories,  exercise,  protein, sodium,
                     potassium, carbohydrates, cholesterol, fat, and fiber.
                     added monochrome graphics for CGA, EGA  and  VGA,  and
                     color  graphics  for VGA. The CALTAB food table editor
                     was made available to registered users  only.  Use  is
                     now  restricted to those with DOS 3.0 or higher. Added
                     support  for  PostScript  printers.  Mouse  support is
                     provided.
    Version  3.0i  - All the above but with height in cm and weight in kg.
                                    Page 4


        USE OF SLIMMER REV 1 AND REV 2 FILES

    Whenever  revisions  are  made, there's always a question of what to do
    with the old files from the previous revision. In this case, if you use
    a REV 1 or REV 2 file 'n$.SLM', SLIMMER will convert  it  to  a  REV  3
    file.  Be  sure to back up your old 'n$.SLM' files before you try this.
    The 'n$.CAL' file from REV 1 and REV 2 should  be  DELETED.   ONLY  THE
    DATA  FILES  ENDING  WITH  SLM  should  be  retained  from  the earlier
    versions.

        IS SLIMMER USER FRIENDLY?

    Whether  a  program  is  "user  friendly"  or  not is a function of the
    amount of time  you  must  spend in reading and re-reading the documen-
    tation and whether there is sufficient help online.  There are  certain
    conventions that have been used within SLIMMER  that  try  to  make  it
    respond in the way that you might expect for a given keystroke. Some of
    these  are  listed  below:
          <ENTER> - is used to select highlight bar items, to indicate  the
    end  of  keyboard  entries,  and  to  indicate  the  end  of a selected
    function.
          <ESC> - used to cancel a function  and  return  to  the  previous
    menu.
          <SPACE BAR> - used only in food tables  to  tag/untag  your  food
    selections.
          <ARROW  KEY>  - UP and DOWN arrows are used to move the highlight
    bar up and down. In addition, HOME and PAGE UP move the bar to the  top
    of the menu, and END and PAGE DOWN move the bar to the end.
          < + and - > - The  +  and  -  keys  are  used  to  increment  and
    decrement  the  date  and  weight input values and help to decrease the
    keystrokes required to input data. In  general,  there  is  a  list  of
    functions  at  the bottom of each menu or table that will indicate your
    choice of keys to press.
          HOT  KEYS  are  single keystrokes of the letters appearing at the
    left end of some  of  the  lines  of  the  selection  menus.  A  single
    keystroke  of  the selected letter will do the same thing as moving the
    select bar with the up/down arrows and pressing <ENTER>.

    "Bulletproofing"  is  a  term  used  to indicate that the user input is
    restricted to certain keystrokes. For example, if you are prompted  for
    a  date  entry, the keyboard in a "bulletproofed" environment will only
    respond to entries from 0 through 9 and the  /  key.  Other  keys  will
    either not respond or will produce a beep. Much of SLIMMER's user input
    has  been bulletproofed.  Where there is a restriction on the length of
    an input item, the length is highlighted and the input is restricted to
    that length. Normal editing keys can be used  for  most  of  the  input
    items. These include the <BACK SPACE>, <INSERT>, <DELETE> and the arrow
    keys.  In addition, <CTRL - END> will clear and let you start over with
    the input item.

         MOUSE SUPPORT

    Mouse Support - In one of the first screens  in  the  program,  SLIMMER
    will  indicate  whether  it has found an active mouse. For a two-button
    mouse, the left button is the <RETURN> key and the right button is  the

                                    Page 5

    <ESC>  key.  If  you  have a three-button mouse, use the left and right
    buttons only. For user convenience, the mouse is used to input some  of
    the  values.  For example, when the date is requested, you may increase
    the date by pushing the mouse forward, or decrease the date by  pulling
    the  mouse backward. Try this whenever input is requested, and you will
    quickly see where it is active and where it not. Again,  for  increased
    ease  of  use, the left button is used to tag items when you are in the
    calorie counter section of the program. When you are asked for a  scale
    factor,  you may press the left button to accept the default value of 1
    or you may first move the mouse backward or forward until you  see  the
    value  that  you  want.  For foods, the scale factor varies from 0.1 to
    10.0 in steps of 0.1, and  for  exercise  (minutes)  the  scale  factor
    varies  from  1 to 100 in steps of 1 as you move the mouse. You are, of
    course, always able to input any scale factor that you desire from  the
    numbers on the keyboard....

    On some computers such as 386's and 486's the mouse  response  will  be
    too  fast. In order to slow down the mouse, go to the UTILITIES section
    and  select  the  "cHange  mouse  speed" option. The mouse speed can be
    varied from a 100% level down to a 0% level. This corresponds to adding
    a delay into the  mouse  response  of  from  0.0  up  to  0.5  seconds.
    Experiment with this until you find the speed you desire. Note that the
    mouse speed is shared by all those who use the same computer.

        BACKGROUND COLOR AND GRAPHICS MODE

    Whenever  you  run  SLIMMER  for the first time, go to the UTILITY menu
    and  select  a background color  and  graphics  mode  for  yourself. In
    order for SLIMMER to provide graphs, it must be told the  type  of  (or
    lack of) graphics adaptor that you have. When you select the background
    color   and  graphics mode, it is saved in a n$.CFG file for you (n$ is
    your name) and will be used the next time you run SLIMMER.

        THE OUTPUT FILES

    The first time you run SLIMMER, it will  create  a  new  file  in  your
    name, It requests your first name, then uses the first eight letters of
    your  name  plus  the extension SLM to create a file such as "JOHN.SLM"
    for a user named John. An example file named SLIM.SLM is included  with
    SLIMMER  to  allow you to see a file with some daily weight and calorie
    data points in it. SLIM is a "pseudo" registered user in that the  File
    Management  options  can be examined when SLIM is the user name and the
    program  is started with S3 SLIM. While the file management menu can be
    viewed, the operation of the items are disabled. Be sure to select  the
    graphics  mode corresponding to your system's capability in the UTILITY
    section. You will then be able to view SLIM's sample data.

    SLIMMER will only save up to 400 days worth of weight  and  food  value
    data.   On the  401st day, it will cut back to to 300 items (discarding
    the first 100 values. If you want to keep a  complete  record  of  your
    weight, and calorie file, you are advised to make a copy of your output
    file  before  it  reaches  400  data  points, and every 400 data points
    thereafter.

                                    Page 6

    HINT: You may, if you wish, use a different name in order to keep  your
    old  data  on-line. For example, SLIM has accumulated 400 days worth of
    data. Now, starting on the 401st day, he logs in as SLIM1 for the  next
    400  days and so on. This will allow him to look at his old file at any
    time by logging in as SLIM.


        DATE ENTRIES

    When you first enter SLIMMER, you will be prompted  for  a  date.  This
    date  is the default date for the daily date/weight/calorie  file.  The
    date  from  your  system is used as the initial starting date. You need
    only press <ENTER> to accept the date, or press + or - to  increase  or
    decrease  the  date  by  one day.  You can also enter the date from the
    keyboard.   Plotted  data  is  output  by date entry number rather than
    date. In other words, if you have 7  daily  weights  -  followed  by  a
    2-week  vacation  away  from  the scales - followed by seven more daily
    weights, it would appear as 14 consecutive data points in  your  output
    file and on your graph.


        YOUR PERSONAL DATA AND GOALS

    This  section of the program should be completed by the user during his
    or her first session with SLIMMER. Simply start at the top and move the
    select bar using the up & down arrow keys. The first  item  "List  your
    Personal  Data"  will be empty until you complete the rest of the item.
    Carefully enter your response to each selected item as  you  work  your
    way down the menu - from frame size down to your height. Finally select
    the  "Calculate  Weight and Calorie Goals" item to calculate your ideal
    weight  and  calorie goals. You will be asked to input your goal weight
    and calorie intake goals. The goals are displayed on your user graphs.

    As you progress with your diet, some of your initial data  may  change.
    You  can update your data at any time and have SLIMMER recalculate your
    ideal weight and calorie values.   The  items  that  could  change  and
    affect   calculated  values  are  the  Activity  level  and  the  Frame
    definition.

    Note: Those of you  who  have  extremely  small  wrists  or  very  long
    slender  fingers  may  find  yourselves  in  the  "  S " or Small frame
    category. If this happens, feel free to upgrade yourself to the "  M  "
    or  Medium  frame  category.  The  method used in SLIMMER to select the
    frame size is admitedly crude - and your doctor's definition should  be
    taken instead.


        REVISE WEIGHT & FOOD VALUE DATA

    The daily plot data of date, calories, and weight  etc  can  be  edited
    here. New lines can not be added, but existing lines can be changed. If
    you  are  changing numbers by overwriting them, be sure that the number
    returned by the editor is the one you want. (check your work). You  may
    find  it  helpful to use the space bar to  overwrite the old data if it
    extends beyond the new numbers you enter. To delete a line of data from

                                    Page 7

    the list, use the CTRL-END command to blank out the  DATE  entry.   The
    editor will return a / value, and that line will be  deleted  when  you
    leave the editor.


        GRAPH YOUR PROGRESS

    Plots of your daily weight and food or exercise values can be viewed in
    either ASCII,  low,  medium,  or  high  resolution  depending  on  your
    system's  capability.  If  in  doubt  about  the  configuration of your
    system, experiment with the options offered  in  the  UTILITY  section.
    You  will need a color graphics adapter (CGA or EGA or VGA) to view the
    high resolution graphs. SLIMMER will let you know if it  can't  find  a
    graphics  card.  If  you  have  placed  the  command  GRAPHICS  in your
    AUTOEXEC.BAT or have executed the command at some time before  entering
    SLIMMER  and  if  you  have  a CGA graphics card or better, and if your
    printer can do IBM graphics,  you  will  be  able  to  copy  your  high
    resolution graphs to the printer with the <SHIFT-PRINT SCREEN> command.


        COUNT CALORIES / VIEW FOOD TABLES


    This section of the program is used  to  generate  your  Daily  Calorie
    Counter  lists.  It is both the most complex and also the most powerful
    section of the program. Its component parts are as follows:
         1. Weight entry.
    As you enter this section of the program, you will be prompted for your
    daily weight. This happens every time. The default value is either your
    previous day's value or a value  you  entered  earlier  the  same  day.
    Change  the weight with the + or - keys, or enter a new weight from the
    keyboard.
         2.  SLIMMER food and exercise tables
    The  food  tables,  starting with  "Beverages"  and  going  through the
    "Vegetables"  are  selected  using  the arrow keys or the letter at the
    left  end  of each line may be pressed to select  the  line.  You  will
    then  see the food or exercise table. You may now use the up/down arrow
    keys as well as page up/down  and  home/end  keys  to  move  about  the
    table.  F1  provides  a  help menu. You may press the V key to show the
    verbose data on each highlighted item.  Items  are  selected  with  the
    <SPACE  BAR>  key  and  will  print  a  marker  at  the left end of the
    highlighted line. (If the marker is already shown, then the <SPACE BAR>
    will remove it).  Use the arrow keys to select a line -  then  mark  it
    with  the  <SPACE  BAR>  key.  You  will  now be asked to enter a scale
    factor.  The default value of 1 will save the line  as  shown.  If  you
    enter  a  1.5,  the quantities will all be multiplied by 1.5 before the
    line is transferred to your daily calorie counter list. (Note that  the
    values  on the screen are NOT modified).  A scale factor less than .001
    will return the line with a factor of 1.  The exercise tables  function
    in  the same way as the food tables, but you enter the time in minutes.
    When you are finished selecting all the applicable  items  on  a  given
    food  table, press <ESC> to add the items to your daily calorie counter
    list.

    Registered users get a Custom Food Table  Menu  from  which  to  select

                                    Page 8

    their  items.  These  are  the tables that they edited using the CALTAB
    editor. Another feature is the SEARCH routine. If the (registered) user
    enters a "?", he will be asked for a search string. It doesnt matter if
    it is upper or lower case, but is limited to 8  characters  in  length.
    For  example,  the  search words "bacon" or  "Bacon"  or  "BACON"  will
    each  provide  a  table  of 18 items that contain bacon in the title or
    description. A hint to those that will be  using  the  search  routine:
    Even  with  my  XT operating at 10 mhz and with a math co-processor, it
    takes about 12 seconds to search through the 1200 items that come  with
    SLIMMER.   It  will save time if you customize your personal data files
    to eliminate items that you don't eat, and also reduce  the  number  of
    categories if at all possible.

        3. Edit Calorie Counter List for n$
    When you have entered all the items for the day or for a portion of the
    day,  you  can  now  edit  the list further by selecting the line "Edit
    Calorie Counter List for n$".  In this editor,  you  can scale any line
    again  using  the  F2  key. You will be asked for a scale factor again.
    You may enter any number from zero upward. For example: if instead of 1
    ounce you want three ounces,  you  enter  a  3  as  the  scale  factor.
    Similarly,  enter  .5 to get a value of .5 ounce. Experiment a bit with
    this until you get the hang of it.  NOTE THAT IF YOU SCALE A LINE BY 0,
    THE LINE WILL BE DELETED. SLIMMER will check  to  see  if  your  scaled
    numbers  seem reasonable.  If the quantity numbers seem out of range, a
    comment  will  be given. At this point you should use the V key to view
    the verbose listing.  As you move the space bar  up  and  down  on  the
    individual  items  in  your  daily  list, you will notice one (or more)
    items in the verbose list  where  the  numbers  are  written  over  the
    vertical  bars that separate the numbers. The corresponding item may be
    in error. After editing your data, use <ESC> to leave ther editor.

        4. Hint
    When you are near the top of the menu and want to go to the bottom line
    of the menu, use the <PAGE DOWN> or <END> key. Similarly, the <PAGE UP>
    or <HOME> keys take you to the top.


        FILE MANAGEMENT SELECTIONS (Registered Users Only)

    This section of the program will let you see which daily calorie  count
    lists  are  stored  for  you. As you enter this section of the program,
    there is a list of dates displayed on the left side of the  screen.  If
    you  are just starting out, the list will be empty. Above the list will
    be displayed "today's" date.

        1. Sum your daily calories
    This  will  provide you with a summation of the day's food and exercise
    values for "today's" date.

        2. Change today's calorie counter date.
    The working date - or "today's" date can be changed  by  selecting  the
    "Change  Today's  Calorie Counter Date" line. After you have selected a
    new date, it may coincide with one  of  the  dates  on  the  left  hand
    display  of  dates.  If so, the data for that day will be recalled.

                                    Page 9


        3. Erase today's calorie counter list
    If  you want a blank list for "today's" date, you can select the "Erase
    Today's Calorie Count List" item to clear the file and  let  you  start
    over  for that date. You will have to enter a Y or y to verify that you
    do wish to erase the data.

        4. Print your daily calorie counter list
    Using this item will allow you to send your data to either an Epson  FX
    or  PostScript  type of printer. Two print files are created. The first
    is  the n$.PRT file (Epson FX) and the n$.PS  file  (PostScript) (where
    n$ is your name)..  These are created whether you print or not, and are
    overwritten the next time you elect to print.

    NOTE:  SLIMMER  Epson  FX print files only use the standard BASIC print
    commands and should work with most printers. No attempts  are  made  to
    change  line  spacing,  to  skip perforations, etc. I leave the printer
    settings for you to do for your own individual printer prior to running
    SLIMMER. The PostScript files are written using Courier-Bold  10  point
    as the default font and pitch.

        5. Recall old list for today's date
    You can recall a prior day's file into today's date (if  you  have  the
    same  thing  to  eat each Friday, for example) by selecting the "Recall
    Old List for Today's Date" line. You will be given a choice of the last
    fourteen (or less) daily calorie count files that have been saved for you.

    NOTE:   If  you  already have a file saved for today's date, its values
    will be overwritten.


        UTILITIES

    The  UTILITIES  section is used for a variety of things. It can be used
    to  change or add user names without leaving the program, to change the
    background color, to select the graphic  mode,  to  back-up  your  data
    files,  change  the  mouse  speed,  or  to select a printer. First-time
    users  should  select  a  printer  and  graphic mode during their first
    session. The values will be saved for subsequent sessions.

        CALTAB FOOD TABLE EDITOR

    This  CALTAB  editor  is  only available to registered users. In it the
    user may edit not only  the  data  within  the  food  tables,  but  the
    description  and  name of the table itself. For new (registered) users,
    you need only enter this section, then escape out of it  to  initialize
    your  personal  food  table files and to generate your index file. This
    index file is your key to using the custom menus in the COUNT  CALORIES
    /  VIEW  FOOD  TABLES  section.  There  is a separate document file for
    CALTAB that goes into more detail ...

        UNEXPECTED ERRORS AND LOCKUPS

    While  every attempt has been made to squash all the bugs, there may be

                                    Page 10

    a few that remain. The bugs that throw the program suddenly back to DOS
    are very hard to trace since no error messages are given.   An  attempt
    has  been  made  within SLIMMER to include error-trapping code to cover
    every line of the program. Therefore, if  an  error  should  occur,  an
    error  comment  will  appear  and  you will be able to return to DOS by
    pressing any key. Some multiple errors may even lockup your computer at
    this  point.  (If  you  reach  such  a  point,  make  a  note  of   the
    circumstances  and  drop  me  a  note  about it.) Try the control-break
    followed by control-c to see if there is a response. If there is  none,
    simply  reboot your computer (turn it off then on again) and it will be
    none the worse for wear.

        NOT ENOUGH MEMORY TO LOAD OR RUN SLIMMER?

    SLIMMER will require 135K to load, but then requires a total of  up  to
    450k  to  run  the  larger  selections from the main menu.  If you have
    some other programs loaded in memory and SLIMMER doesn't fit,  you  may
    have  to  remove  some  of the other ones. As an aid in determining how
    much memory is left after SLIMMER is loaded, run SLIMMER  and  whenever
    you  are  asked for a date, respond with <ALT><F1>. This will trigger a
    routine that will provide you with the memory available. There are  two
    places  in the program that ask for the date. The first is when SLIMMER
    first starts, the second in in the File Management  section  under  the
    Count  Calories/...   selection  from  the  main  menu.  From  the File
    Management menu, select Change Today's  Calorie  Counter  Date.   Since
    some  of  the  arrays  in SLIMMER are allocated dynamically, the memory
    available will be different in the various sections of the program.

        RANGE OF APPLICABILITY

    As  an Engineer, I often deal with the twin "concepts" of interpolation
    and extrapolation. Interpolation means simply to obtain tabular  values
    from  within the limits of the table. Extrapolation is fabricating data
    beyond the limits of the table by making some assumptions to extend the
    data. SLIMMER, on order to not quit every time that data  is  requested
    from  beyond  the  limits  of  the  tables,  is  written  using  linear
    extrapolation functions - much like weather forcasters do - and assumes
    that what went on before will continue  into  the  future.  There  will
    therefore  be  some error introduced into your ideal weight and calorie
    calculations when you fall  outside  the  following  limits:

        Weight:            minimum = 90 lbs, maximum = 220 lbs

        Height: for men    minimum = 5'-1", maximum = 6'-3"
                for women  minimum = 4'-8", maximum = 5'-10"

        Age   : Adults 25 years of age and above. (If between  18  and  25,
                your  ideal  weight  could be reduced by one pound per year
                for every year below age 25.)

        Exercise Calories: are based on data given for a weight of 150 lbs.
                An adjustment is made for weight in the range of 110 lbs to
                190 lbs.  The  range  of applicability is therefore 110 lbs
                thru 190 lbs.

                                    Page 11



        RUNNING UNDER WINDOWS 3.0

   For the convenience of those running MicroSoft Windows, a DIET.ICO  file
   is included for use as the icon.


        SOURCE CODE

    For those of you who have Borland's Turbo Basic and want to have a copy
    of  the  SLIMMER  source  code, it is available to REGISTERED users for
    $10. For  unregistered  users,  the  cost  is  $45  (and  includes  the
    registration). The source code is provided to registered users with the
    request that any modification or variation of SLIMMER be released under
    a  different  name.  I  wish  to reserve the name SLIMMER, SLIMMER.EXE,
    SLIMMER.ARC, SLIMMER2, SLIM21,  etc as unique  names  on  the  bulletin
    boards.  SLIMMER is  written and compiled with Turbo Basic Version 1.1.
    (It will compile with Version 1.0 if desired)


        DISCLAIMER

    For obvious reasons, no claims are made or implied that SLIMMER is more
    than  a database and a tracking tool. All medical data contained herein
    is correct to the best of my  knowledge,  but  the  user  (YOU)  assume
    complete  responsibility  for  the use of and the results of the use of
    this software.


        ON THE IMPORTANCE OF EXERCISE

    Dieting without a concurrent exercise  program  is  dangerous.  It  can
    lead  to a serious loss of muscle and a drop in metabolic rate. Results
    of a study were reported in  1984  in  "the  Yo-Yo  Syndrome"  by  G.L.
    Blackburn,  M.D.,Ph.D.,  K.N.  Pavlou,  Sc.D.,  and  V. Zak in RxWeight
    Control, Vol.2, No.5, Jun-Jul 1984.

    When 1000 calorie a day diets were administered to separate  groups  of
    exercisers and non-exercisers, the following results were found:

                          EXERCISE GROUP        NON-EXERCISE GROUP

    Food Calories             1000/day              1000/day

    Total Weight Loss          19 lbs                18 lbs

    Body Fat Lost              23 lbs                11 lbs

    Muscle Gained               4 lbs                 -

    Muscle Lost                 -                     7 lbs

    If  you attempt to diet without exercise, you will reach a plateau at a

                                    Page 12

    weight higher than your ideal weight, and  your  metabolism  rate  will
    decrease as your body tries to compensate for the lack of calories. The
    above table should help to convince you of the need to exercise.


        A WORD OR TWO ABOUT CHOLESTEROL

    Cholesterol  comes  in  two  component  parts.  The  HDL  (high density
    lepoprotiens)  and  the  LDL  (low  density  lepoprotiens).   The   HDL
    transports  cholesterol  to  the  liver where it is eliminated. The LDL
    carries the cholesterol in the blood and can clog  arteries  and  cause
    heart  disease.  Typically, total cholesterol levels over 200 mg/dl are
    of concern. You are not automatically risk-free if you test below  200.
    If your HDL levels are too low, you can be just as succeptable to heart
    disease.  Values  of  HDL  below  35  mg/dl  are  just  as bad as total
    cholesterol levels over 200. The usual screening test in the $3  to  $5
    range will only give you the total number of HDL and LDL combined. Your
    doctor can arrange for a more sophisticated test that will give you the
    component parts and a lot more - - .(for a lot more $$)


    Ways to Help to Lower High Cholesterol Levels:

        1. Decrease or eliminate coffee and alcohol from your diet.
        2. Include fish in your diet.
        3. Include  soluble  fiber in  your diet - especially that found in
    beans (pinto or navy) and from oat bran.
        4. Exercise at least 3 or 4 times a week.  This helps increase  the
    good cholesterol HDLs and decrease the bad cholesterol LDLs.

    Figuring your Daily Allowance of Fat:

    The  Heart  Association  recommends that no more than 10% of your total
    calories   come  from  saturated  fat.  The  government  has   recently
    recommended that no more than 30% of our total calories come from  fat.
    SLIMMER  uses the government guideline number - using a conversion of 9
    fat  calories  per  fat gram - to come up with a goal value for the fat
    graph.

    You may want to begin by determining which foods your fat calories  are
    coming  from.  You  can  then  decide  which  foods  to  cut back on or
    eliminate to lower your fat intake. The food tables will also help  you
    choose foods low in fat to substitute for foods high in fat.

    Controlling Dietary Cholesterol and Other Fats:

    Dietary  cholesterol  can  be  controlled by simply eliminating the few
    high cholesterol foods ( egg yolks, organ meats, sardines, and shrimp).
    Substituting  polyunsaturated  margarines  and  oils  for  butter   and
    shortening will give you adequate polyunsaturated fat.

    Sources:

    United  States  Department  of Agriculture, "Nutritive Value of Foods",

                                    Page 13

    Home and  Garden  Bulletin  Number  72,  Revised  1981.  United  States
    Department  of  Agriculture,  Handbook No. 8, Revised Sections 8-1 thru
    8-12.

    Bowes  and  Church's  "Food  Values  of  Portions  Commonly Used", 15th
    edition, revised by Jean  A.T.Pennington,  Ph.D.,  R.D.,  published  by
    Harper & Row, New York.

    Routines written by others and used in SLIMMER are

        TBWINDO.INC  -  Turbo  Basic  window  routines that make SLIMMER an
                     attractive program. For those  of  you  that  want  to
                     contact him, Rick can be reached thru  his  Compuserve
                     #   76210,443.   He  now  has  improved  routines  for
                     PowerBasic as well.

        INPSUB.INC - Author Unknown
                     This routine is used to replace the INPUT command  and
                     has  been  modified  to   make   "bulletproof"   input
                     routines for dates and weights etc.

        JULIAN.INC - Public Domain by Joe Vest
                     This  is  used  to transform the Gregorian date into a
                     Julian  date  where it can easily be included into the
                     +/-  routine  for the date input and then reconverted.
                     A very handy routine.

        FNEDIT.INC - Public Domain by Joe Vest
                     This routine was used to remove  leading  blanks  from
                     some of the string data.

        GETFREE.BAS - Author Unknown
                      Renamed   space.bas   and  used  to  determine  space
                      remaining on the default drive.

        CHKCRC.INL - Written by Craig J Kim
                     Used  within  SLIMMER  to  determine  if  a  file  has
                     changed during the present session.

        ABOUT THE AUTHOR / PROGRAMMER

    SLIMMER  is  the  first major program written by myself in TURBO BASIC.
    My background is in Structural Engineering, and I'm  currently  working
    as  an  Aerospace  Structures  Engineer  for  Fairchild  Space  Co.  in
    Germantown, MD. I hold a PhD in Applied Sciences from the University of
    Delaware,  where  I  completed  a  dissertation  on  various   solution
    techniques  for laminated plates. My interests include the violin which
    I currently play with a music group known as "Servants of the Lord Most
    High". My home computer is an XT clone, operating at 10 mhz with  a  20
    meg  hard  disk,  a  3-1/2" 720k and a 5-1/4" 360k floppy. I use a 2400
    baud modem and BOYAN's version D4 shareware communications  package  to
    access  the  various  boards.  I  have a NEC Multisync 2A color monitor
    which helps me to see the effects of monochrome thru  VGA  programming.
    My  programming  time is generally in the wee hours - usually between 3

                                    Page 14

    and 6 am and on the weekends - and any other free moment.

    If  any  of  you  want to drop me a line or leave a message, my mailing
    address is:

                        George D. Summers
                        2117 Coon Club Road
                        Westminster, MD 21157

    and my Compuserve number is: 76276,564


    I'll  have  the  latest version of  SLIMMER  available on CompuServe in
    Library 10 (Exer/Fit/Nutrition). Type GO GOODHEALTH at the ! prompt and
    when you get to the library, brouse thru using the keyword SLIMMER.


        WHERE DOES SLIMMER GO FROM HERE

    Every  major  revision  to  SLIMMER  takes  about  six  months or so to
    formulate and test. You the users will, to a large part,  be  the  ones
    that  dictate  what is and is not included in future revisions. Do send
    your comments and suggestion. Some possible directions are as follows:

        1. Write a version for the  Macintosh.
        2. Prepare an international  version  with  possibility  of  having
    dates  in  the  form dd.mm.yy instead of mm/dd/yy and use kg instead of
    lbs etc.
        4. Rewrite SLIMMER in the C language.
        5. Include more on-line HELP screens.


        REGISTRATION

    For those of you interested in registration, all  the  information  you
    need  is found by selection the REGISTRATION line in the main menu. You
    are shown a registration form that you can send  to  your  printer.  Be
    sure to indicate your preference for 3-1/2" or 5-1/4" disks.  You may
    use the form found on the next page of this document file instead if you
    have printed this file.













                                    Page 14


                         SLIMMER REGISTRATION FORM


Your Name _____________________________________________________________________

Street Address ________________________________________________________________

City, State, Zip ______________________________________________________________

Phone # (Optional) ____________________________________________________________

Disk Size Desired      3-1/2" ________     or    5-1/4" _______

Disk Density           High   ________     or    Low    _______

Weight Tracked in      Pounds ________     or    Kilograms _______

Registration # shown in SLIMMER closing screen  _______________________________

Amount Enclosed:  $35 for registration __________

                  $45 for registration and source code __________

                  $50 for registration outside USA __________


Please describe your equipment (optional):

Computer type ____________________________________________DOS version__________

Amount of RAM (memory) __________ k ;   Hard disk size ___________ meg

Graphics type: Mono _____ , CGA _____ , EGA _____ , VGA _____ , Other _________


Comments_______________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

Please send this form and your check to:

                        George D. Summers
                        2117 Coon Club Road
                        Westminster, MD 21157



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2637

     Volume in drive A has no label
     Directory of A:\

    HDINST   BAT      8988   3-26-91   8:35p
    PKUNZIP  EXE     22022  10-01-89   1:02a
    S3B      ZIP    198307   3-26-91   7:21p
    GO       BAT        38   5-02-91  11:27a
    GO       TXT       617   5-02-91  11:32a
    FILE2637 TXT      1851   5-02-91  11:35a
            6 file(s)     231823 bytes
                           88064 bytes free
