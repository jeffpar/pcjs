---
layout: page
title: "PC-SIG Diskette Library (Disk #1489)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1489/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1489"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SLIMMER"

    SLIMMER is a computerized diet program that makes calorie-counting
    easier than ever before.
    
    SLIMMER will calculate your ideal weight and proper caloric intake and
    provide you with an extensive menu of recommended foods and their
    calorie values.  Food lists can be created for each day of the week and
    printed for reference.  SLIMMER also provides information on the
    calories consumed by various forms of exercise.  The SLIMMER program is
    menu driven so it's easy to use, and the food database can be expanded
    for those with exotic tastes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1489.TXT

{% raw %}
```
Disk No: 1489
Disk Title: Slimmer
PC-SIG Version: S1.2

Program Title: Slimmer
Author Version: 2B
Author Registration: $35.00
Special Requirements: 280K RAM

SLIMMER is a computerized diet program that makes calorie-counting
easier than ever before.

SLIMMER will calculate your ideal weight and proper caloric intake and
provide you with an extensive menu of recommended foods and their
calorie values.  Food lists can be created for each day of the week and
printed for reference.  SLIMMER also provides information on the
calories consumed by various forms of exercise.  The SLIMMER program is
menu driven so it's easy to use and the food database can be expanded
for those with exotic tastes.

File Descriptions:

PKUNZIP  EXE  Un-archiving utility.
READ_ZIP 1ST  Introductory text.
SLIM2B   ZIP  Archived program.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                     <<<<  Disk No 1489 SLIMMER  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To view instructions on how to unarchive SLIMMER type VIEW (press enter)║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SLIMMER.DOC

{% raw %}
```
   S L I M M E R    R E V   2b,    D A T E D    A U G    3 0,   1 9 8 9

             (c) copyright 1988, 1989 by George D. Summers


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
        2. Calculate  your  ideal calorie requirement.
        3. Keep  track  of  your  weight  and  calorie intake and plot your
    progress.
        4. Provide  you  with an extensive look-up data base  of food types
    with their corresponding calorie values.   Allows  you  to  select  and
    scale  items  from  the  food  tables  for your daily calorie list.
        5. Provide for custom food tables for each user.
        6. Allows  the  user to save the last seven (days of) daily calorie
    lists. These lists may be recalled and edited - and even  copied  to  a
    different  date  if  desired.
        7. Various types of exercise may be selected by the user and may be
    scaled and saved in the daily calorie lists.
        8. Daily  calorie  lists  can  be  printed  (or  if  no  printer is
    on-line, a print file will be written.)


        SYSTEM REQUIREMENTS

    SLIMMER requires a computer with at least 285K of memory  in  which  to
    load.  If  your  computer has a math co-processor, SLIMMER will use it.
    SLIMMER can be run on one and two-disk systems, but runs  fastest  when
    loaded to and run from a hard disk-equipped system.


        INSTALLATION

    SLIMMER  has  a  large  number  of  data  files  (77  of them) that are
    displayed on the screen when you view the food tables. In addition,  it
    has  as  many  as  seven  custom  food table files and/or daily calorie
    lists, and then an overflow file that  accumulates  the  daily  calorie
    lists  after  the  initial seven-day period. Finally, there is a master

                                    Page 1




    file of daily date/weight/calorie values  (and  its  backup  file)  for
    every individual user.  It is therefore recommended, if you have a hard
    disk, that you create a subdirectory for SLIMMER and copy all the files
    into  it.   For  those  without a hard disk, run SLIMMER from your copy
    disks after you have safely put away your original. When running from a
    floppy disk, file maintenance is important since  SLIMMER  will  create
    new  files  or addend existing files and eventually fill your disk.  To
    assist you in keeping track  of  the  space  available  on  your  disk,
    SLIMMER  will  report  the  space remaining on the default drive in the
    lower right hand corner of the screen. The message will  only  come  on
    when  the  space  is  less  than  10,000 bytes and will stay on for two
    seconds.  When you see this message, you are advised  to  look  at  the
    files on the disk to see which ones could be deleted.

    To deal with space limitations of non-hard disk systems:

        1. SYSTEM WITH ONE 360K FLOPPY DISK -
         Copy the SLIMMER.EXE and SLIMMER.DOC files  onto  a  working  copy
    disk  #  1.  Copy all the other files to another working copy disk # 2.
    Put your original disk away in a safe place. Put disk # 1 in your drive
    and type SLIMMER <ENTER>. After the program  has  loaded  and  you  are
    asked  for  your  name, change to disk #2 before entering anything. The
    n$.CAL file that you create (your name is = n$) will eventually get too
    large and will have to be deleted periodically. If you have  more  than
    one  user in your household, it is recommended that each one have their
    own working copy disk # 2. Certain versions of DOS have a limitation on
    the number of files you can have on a floppy disk - possibly  a  number
    like  112  files.  With multiple users, this limit is quickly exceeded.

        2. SYSTEM WITH TWO 360K FLOPPY DISKS -
        With two floppy drives, follow the directions  above  for  the  one
    disk  system  and  prepare  disks  #  1 and # 2. In addition, copy file
    AB.BAT from the original SLIMMER files to disk # 2. This BAT  file  has
    the following two lines in it:

              path = a:\;b:\;
              slimmer

    Disk  # 2 goes into your A> drive, and disk # 1 goes into B>. Change to
    your A> drive  by  typing  A:<ENTER>.   Start  the  program  by  typing
    ab<ENTER>.  This activates the AB.BAT file and starts SLIMMER. All your
    daily files will now be written to go onto the floppy disk  in  the  A>
    drive,  and  the SLIMMER.EXE program will be executed from the B> drive
    via the path command.

        3. SYSTEM WITH ONE OR MORE 3-1/2" DISKS -
    In  this  case,  since the 3-1/2" disk holds at least 720K, then simply
    copy your entire complements of SLIMMER files unto a  working  diskette
    and  save  your  original  copy  of  SLIMMER. Again, there may be a DOS
    limitation on number of files allowed on a floppy, so  make  a  working
    diskette copy for each person to use. For the convenience of REGISTERED
    users, SLIMMER is available to them on a 3-1/2" disk.

                                    Page 2



        4. IBM AT OR EQUIVALENT WITH HIGH DENSITY 5-1/4" DRIVE
    Since  SLIMMER  writes to and updates files in the default drive, it is
    strongly recommended that you never run SLIMMER from a 360K disk in the
    AT's high density drive. Either copy SLIMMER to a subdirectory  on  the
    hard disk, or copy it to a high density disk before running it.

        RUNNING SLIMMER

    To  run  SLIMMER,  type SLIMMER and press <ENTER> after you have either
    entered the SLIMMER subdirectory on your  hard  disk,  or  are  on  the
    floppy  drive containing your working copy of the SLIMMER files.  After
    you have run SLIMMER a few times and get tired of the opening  screens,
    you can bypass them by entering SLIMMER n$ and pressing return where n$
    is  your name (or the file name you want to view). For example, you can
    view the data for Slim by typing SLIMMER SLIM, then  pressing  <ENTER>.
    (For  the  single  360K  disk system user, (1. above), you really don't
    have enough room on a single floppy disk to use this option.)


        MONOCHROME MONITORS AND LAPTOPS

    SLIMMER makes extensive use of color in its screens and  windows.  This
    looks  great on color monitors and in greyscale tones. The truly "black
    and white" monitor (usually amber or  green),  however,  will  be  very
    difficult  to  read  for some color combinations. For you without color
    capability, you may want to  try  the  "black  and  white"  version  of
    SLIMMER.  As  you start up SLIMMER, simply type in SLIMMER BW to run in
    black and white, or as in the example in the previous  paragraph,  type
    in  SLIMMER  BW  SLIM  to run in black and white and bypass the opening
    screens. A one-line .BAT file will save you a lot of typing.  It  would
    contain  the  one-line SLIMMER SLIM command (e.g.), and could be called
    1.BAT or similar simple name. SLIMMER could then be run by entering "1"
    and then  "<RETURN>".  For  those  of  you  with  laptops,  SLIMMER  is
    available  on  3-1/2"  diskettes.  Please  indicate your preference for
    3-1/2" or 5-1/4" diskettes.

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

                                    Page 3

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

        USE OF SLIMMER REV 1 FILES

    Whenever revisions are made, there's always a question of  what  to  do
    with the old files from the previous revision. In this case, if you use
    a REV 1 file 'n$.SLM', SLIMMER will convert it to a REV 2 file. Be sure
    to back up your REV 1 'n$.SLM'  file before you try this.  The 'n$.CAL'
    file from  REV 1 should be either deleted, or you can call it into your
    word processor and delete the null lines that look  like  "".   SLIMMER
    will write  to  the 'n$.CAL' file after the seven daily files have been
    filled up.


        IS SLIMMER USER FRIENDLY?

    Whether  a  program  is  "user  friendly"  or  not is a function of the
    amount of you must spend in reading and  re-reading  the  documentation
    and  whether  there  is  sufficient  help  online.  There  are  certain
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

    "Bulletproofing"  is  a  term  used  to indicate that the user input is
    restricted to certain keystrokes. For example, if you are prompted  for
    a  date  entry, the keyboard in a "bulletproofed" environment will only
    respond to entries from 0 through 9 and the  /  key.  Other  keys  will

                                    Page 4



    either not respond or will produce a beep. Much of SLIMMER's user input
    has  been bulletproofed.  Where there is a restriction on the length of
    an input item, the length is highlighted and the input is restricted to
    that length. Normal editing keys can be used  for  most  of  the  input
    items. These include the <BACK SPACE>, <INSERT>, <DELETE> and the arrow
    keys.  In addition, <CTRL - END> will clear and let you start over with
    the input item.

    There is a lot of checking, error trapping, and file manipulation  that
    goes  on  behind  the scenes that you the user never get to see. If the
    program is well written, you will never see an error message,  and  the
    program will respond as expected. You the user can help to make SLIMMER
    friendlier by providing your comments and suggestions.


        BACKGROUND COLOR

    Whenever  you  run  SLIMMER  in  its  color mode by simply entering the
    command SLIMMER, the program will allow  you  to  select  a  background
    color  from  a  list  of  four  colors.  After  you  have selected your
    background color, SLIMMER will recall it whenever you subsequently  run
    SLIMMER  using  the  command  in  the form SLIMMER n$ (where n$ is your
    name). If you want a different background, then run it with the  single
    command SLIMMER to get the selection option.

    NOTE:  If  you have a monochrome monitor running in the black and white
    mode, your background choice is either black or white.


        THE OUTPUT FILES

    The first time you run SLIMMER, it will  create  a  new  file  in  your
    name, It requests your first name, then uses the first eight letters of
    your  name  plus  the extension SLM to create a file such as "JOHN.SLM"
    for a user named John. An example file named SLIM.SLM is included  with
    SLIMMER  to  allow you to see a file with some daily weight and calorie
    data points in it. It can be viewed by entering the name SLIM when your
    name is requested. The plot of Slim's data can be  seen  in  either  or
    both low or high resolution depending on your graphics capability.

    Two  additional  types  of  files are created by SLIMMER. These are the
    daily calorie counter files (n$.CL1 thru n$.CL7  and  n$.CAL)  and  the
    custom food tables (n$.SP1 thru n$.SP7)

    SLIMMER  will  only  save 100 days worth of weight and calorie data. On
    the 101st day, it will discard the first value (day 1) and renumber all
    the other values to maintain a maximum of 100 points.

    If you want to keep a complete  record  of  your  weight,  and  calorie
    file,  you  are  advised  to  make  a  copy of your output file when it
    reaches 100 data points, and every 100 data points thereafter.


                                    Page 5



    HINT: You may, if you wish, use a different name in order to keep  your
    old  data  on-line. For example, SLIM has accumulated 100 days worth of
    data. Now, starting on the 101st day, he logs in as SLIM1 for the  next
    100  days and so on. This will allow him to look at his old file at any
    time by logging in as SLIM.


        DATE ENTRIES

    When you first enter SLIMMER, you will be prompted  for  a  date.  This
    date  is the default date for the daily date/weight/calorie file. A bit
    further along, when you enter the  calorie  counter  section,  you  are
    asked  again for a date. There are several other places where dates are
    entered or modified. In each case, the date from your computer's  board
    is  used  as  the initial starting date. You need only press <ENTER> to
    accept the date, or press + or - to increase or decrease  the  date  by
    one  day.  You  can also enter the date from the keyboard. When data is
    entered in non-sequential order into the date/weight/ calorie  file  it
    will be sorted and rearranged as you leave that section of the program.
    Plotted  data is output by date entry number rather than date. In other
    words, if you have 7 daily weights -  followed  by  a  2-week  vacation
    away  from  the scales - followed by seven more daily weights, it would
    appear as 14 consecutive data points in your output file  and  on  your
    graph.




        YOUR PERSONAL DATA AND GOALS

    This  section of the program should be completed by the user during his
    or her first session with SLIMMER. Simply start at the top and move the
    select bar using the up & down arrow keys. The first  item  "List  your
    Personal  Data"  will be empty until you complete the rest of the item.
    Carefully enter your response to each selected item as  you  work  your
    way down the menu - from frame size down to your height. Finally select
    the  "Calculate  Weight and Calorie Goals" item to calculate your ideal
    weight and calorie goals.

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

                                    Page 6



        UPDATE / EDIT WEIGHT & CALORIE DATA

    The  daily  plot  data of date, calories, and weight is edited with the
    weight / cal / date editor. It again has  enough  checks  and  balances
    built in to be fairly foolproof. You can either enter new daily data or
    edit  existing  data  with  the editor. The date may be accepted as the
    date from your computer, or you can enter a value, or else increment  /
    decrement  the  prior date date by one day. The default weight is taken
    as the prior day's value, and it can be incremented up or down with the
    + and - keys. The weight can be entered here, or else will be requested
    as you leave the "Count Calories....." section.  The  calorie  data  is
    directly  entered  into  this file when you leave the "Count Calories /
    View Food Tables" section of the program. The data file drops  off  the
    oldest  set  of daily data and renumbers all the data to have a maximum
    of 100 values. If you have entered a weight and date value on the wrong
    line and want to "zero out" the values, then enter the letter N (or  n)
    representing  "NULL"  for  the  date. That line will be removed and the
    remaining data rearranged.


        GRAPH YOUR PROGRESS

    Plots of your daily weight, calories, or fat calories can  be  selected
    in  either  low or high resolution. If in doubt about the configuration
    of your system, try them both. You will need a color  graphics  adapter
    (CGA  or  EGA  or VGA) to view the high resolution graphs. SLIMMER will
    let you know if it can't find a graphics card. If you have  placed  the
    command  GRAPHICS  in your AUTOEXEC.BAT or have executed the command at
    some time before entering SLIMMER and if you have a CGA  graphics  card
    or better, and if your printer can do IBM graphics, you will be able to
    copy  your  high  resolution plots to the printer with the <SHIFT-PRINT
    SCREEN> command.


        COUNT CALORIES / VIEW FOOD TABLES

    This section of the program is used  to  generate  your  Daily  Calorie
    Counter  lists.  It is both the most complex and also the most powerful
    section of the program. Its component parts are as follows:
         1.  SLIMMER food and exercise tables
    The  food  tables,  starting with  "Beverages"  and  going  through the
    "Vegetables"  are  selected  using  the arrow keys.  Most of these line
    items have another set of selectable tables. When you have a food table
    displayed on  the  screen,  you  will  see  a flashing line which reads
    "Calorie Counter Mode".  When you are in this mode, the    <SPACE  BAR>
    key  will  print  a  marker  on the highlighted line. (If the marker is
    already shown, then the <SPACE BAR> will remove it). Use the arrow keys
    to  select a line - then mark it with the <SPACE BAR> key.
    You will now be asked to enter a scale factor. The default value  of  1
    will  save  the  line as shown. If you enter a 1.5, the quantities will
    all be multiplied by 1.5 before the line is transferred to  your  daily
    calorie  counter  list.   A scale factor less than .001 will return the
    line with a factor of 1.  The exercise tables function in the same way.

                                    Page 7



    Simply select the items that you have eaten that day. Notice that  when
    you  select  an item, sometimes another item is selected along with it.
    This is done to add a descriptive line to your  daily  Calorie  Counter
    List.  When  you  are  finished selecting all the applicable items on a
    given food table, press <RETURN> to add the items to your daily calorie
    counter list. If you press <RETURN> before you're finished tagging  the
    items on that food table, you can press <RETURN> again to call back the
    same table. Note that the previously tagged lines are no longer tagged.
    They  are,  however,  in your daily calorie counter list and there is a
    flashing arrow <=== on the screen to remind you to  go  there  to  save
    your  daily  calorie counter list when you have finished selecting your
    items for the day. *****THIS IS THE ONLY WAY YOUR DAILY CALORIE COUNTER
    LIST CAN BE SAVED*****
    NOTE: You will be given another opportunity to edit the selected  items
    when you select the "Edit Calorie Counter List for n$" line, below.

        2. Edit Calorie Counter List for n$
    When you have entered  all  the items,  you  can  now edit the list for
    quantity by selecting the line  "Edit  Calorie Counter List for n$". In
    this editor, you first select the  line number, then enter a multiplier
    for the line. If instead of 1 ounce you want three  ounces,  you  enter
    a 3 as the multiplier. Similarly, enter 0.5 to get a value of .5 ounce.
    Experiment a bit with  this  until you get the hang of it. NOTE THAT IF
    YOU  SCALE  A  LINE BY 0,  THE LINE WILL BE DELETED.   When you  finish
    editing  that  page,  press  <ENTER>  for  either the next page or else
    to leave the editor.   You can return to this editor to revise it after
    you leave it.  As  you  leave,    you  will  be  given  the opportunity
    to enter your daily weight (if you  didn't do it before in the  "Update
    /  Edit  Weight  &  Calorie  Data" section).   Finally, the  daily data
    is entered into your daily date / weight / calorie table and your daily
    calorie counter list is saved.

    NOTICE: NO DATA WILL BE SAVED AS EITHER A DAILY CALORIE COUNTER LIST OR
    IN THE DAILY DATE/WEIGHT/CAL TABLE UNLESS YOU PASS  THROUGH  THIS  EDIT
    ROUTINE.  The flashing arrow <=== will remind you that there is data in
    the computer's memory that hasn't been saved.

        3. Special Items for n$
    When you first enter one of these tables, you will see a list  of  Item
    numbers.  You  will  also  see the same flashing "Calorie Counter Mode"
    sign.  This table is where you can place special items that are not  on
    the  food  lists. These are truly unique tables for you alone. In order
    to enter items into this table, move the select bar to  the  last  line
    marked  "<Select  to  Toggle  between EDIT and CALORIE COUNTER modes>".
    When you press the <ENTER> key, you will see a flashing "[ EDIT MODE ]"
    sign. You are now in an editor to enter your special  items.  Select  a
    line  and  follow  the  format  on the food table items by entering the
    description, quantity, calorie and fat calorie values for any line that
    you select. You will be prompted for each of the four entries  on  each
    of the lines. A conservative number for use in defining fat calories is
    9  fat  calories  per  gram of fat. When you are finished, use <ESC> to
    leave the editor or select the last line to go to the  CALORIE  COUNTER

                                    Page 8



    mode.  Your Special Items files will be selectable just as are the Food
    Table files.

        4. Hint
    When you are near the top of the menu and want to go to the bottom line
    of the menu, use the <PAGE DOWN> or <END> key. Similarly, the <PAGE UP>
    or <HOME> keys take you to the top.


        FILE MANAGEMENT SELECTIONS

    This section of the program will let you see which daily calorie  count
    lists  are  stored  for  you. As you enter this section of the program,
    there is a list of dates displayed on the left side of the  screen.  If
    you  are just starting out, the list will be empty. Below the list will
    be displayed "today's" date. The working date - or "today's"  date  can
    be changed by selecting the "Change Today's Calorie Counter Date" line.
    After  you  have  selected  a new date, it may coincide with one of the
    dates on the left hand display of dates. If, you go from here into  the
    "Edit  Calorie  Counter  List  ....."  section,  the  old  data will be
    recalled and may be edited. If you want a blank list for that date, you
    can select the "Erase Today's Calorie Count List"  item  to  clear  the
    file  and  let  you start over for that date. The daily date/weight/cal
    entry for that date will not be changed, but you will be given a chance
    to overwrite it  when  you  leave  the  "Edit  Calorie  Counter  ....."
    section.


    The  "Print  Your Daily Calorie Count List" line, if selected will send
    your file to the printer. If you have no printer, SLIMMER will create a
    print file  named  n$.prt  (where  n$  is  your  name).  This  file  is
    overwritten  every  time  the printer is not found to be ready for use.
    (so remember to print it when you get out of the program). If you don't
    have a printer and use this option, your computer may be inactive while
    the computer tries repeatedly  to  contact  the  non-existent  printer.
    After  the  computer  has  tried  a  pre-determined number of times and
    "timed-out", control will be returned  to  you.  If  control  does  not
    return  to  you,  then  you can try the <CONTROL-BREAK> followed by the
    <CONTROL-C> commands.

    NOTE: SLIMMER print files only use the standard  BASIC  print  commands
    and should work with most printers. No attempts are made to change line
    spacing,  to  skip  perforations, etc. I leave the printer settings for
    you to do for your own individual printer prior to running SLIMMER.


    You can recall a prior day's file into today's date (if  you  have  the
    same  thing  to  eat each Friday, for example) by selecting the "Recall
    Old List for Today's Date" line. You will be given a choice of the last
    seven (or less) daily calorie count files that have been saved for you.
    After the file is recalled, you  MUST  still  pass  through  the  "Edit
    Calorie Counter List..." section in order to SAVE and process the data.
    It is important to come here (to the FILE MANAGEMENT area) first if you

                                    Page 9



    want  to  recall  a  list  from seven days ago. Otherwise the data from
    seven days ago is rolled into your n$.CAL file where you can no  longer
    access it.

    NOTE:  NO  FILES  ARE  SAVED  IN  THIS SECTION OF THE PROGRAM. ALL FILE
    UPDATES ARE PERFORMED IN THE "EDIT CALORIE COUNTER....." SECTION.  (See
    item 2. above.)

    NOTE:  If  you  already have a file saved for today's date, you will be
    unable to recall a file from the list of old files. You will physically
    have to first select the "Erase Today's Calorie  Count  List"  item  to
    clear  today's  file. Then you will be able to recall an old list. This
    feature prevents the unintentional overwriting of a file over which you
    had labored long and hard ...


        COMMENTS FOR THE MORE TECHNICALLY MINDED

    The special food list tables that  you  prepare  for  yourself  (n$.SP1
    thru  n$.SP7)  are formatted the same as the programs food list tables.
    SLIMMER treats them both the same. If you were  to  enter  one  of  the
    program's food list tables into your favorite word processor, you would
    see something like this:

    "[ VEGETABLES ]"
    "  Food                 Portion       Total    Sat Fat"
    "                        Size       Calories   Calories"
    " ----------------------------------------------------------"
    "Lettuce,raw"
    "  butterhead, Boston     (5-in diam)"
    "                        1 head        20       trace     6"
    "                        1 outer or"
    "                        2 inner leaves"
    "                        2 leaves      trace    trace     6"
    "  crisphead, iceberg    (6-in diam)"
    "                        1 head        70       1         11"
    "                        (1/4 head)"
    "                        1 wedge       20       trace     11"
    "                        chopped or"
    "                        shredded"
    "                        1 cup         5        trace     11"
    "  looseleaf, romaine    chopped or"
    "                        shredded"
    "                        1 cup         10       trace     18"

    When  you  study  this table, you will notice that there are numbers in
    column 59 and 60 which don't show up on the screen when  SLIMMER  calls
    up  the file. These numbers are a left-justified two digit line number.
    When SLIMMER finds a number in column 59-60 of a  line  that  has  been
    selected  in  the  Calorie  Counter  Mode, it will also select the line
    indicated by the two digit number. For  example,  when  the  last  line
    (line  20)  is  selected,  line 18 is selected with it. This is done so
    that there will be enough descriptive information in your daily calorie

                                    Page 10



    counter file for you to  be  able  to  identify  the  items.  All  this
    information is given to you for this reason:

    If  you  want your Special Food Table files have the same multiple line
    selection  feature, you can edit your n$.SPx files (offline in your own
    editor) to add the appropriate line numbers in columns 59 and 60.  Note
    that the entire line must be enclosed with quotes "".


        UNEXPECTED ERRORS AND LOCKUPS

    While  every attempt has been made to squash all the bugs, there may be
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

        NOT ENOUGH MEMORY TO LOAD SLIMMER?

    SLIMMER will require 285K to load. If  you  have  some  other  programs
    loaded  in  memory and SLIMMER doesn't fit, you may have to remove some
    of the other ones. As an aid in determining how  much  memory  is  left
    after  SLIMMER  is loaded, run SLIMMER and whenever you are asked for a
    date, respond with <ALT><F1>. This will trigger  a  routine  that  will
    provide  you  with  the  memory  available. Since some of the arrays in
    SLIMMER  are  allocated  dynamically,  the  memory  available  will  be
    different in the various sections of the program.

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

                                    Page 11



        Age   : Adults 25 years of age and above. (If between  18  and  25,
                your  ideal  weight  could be reduced by one pound per year
                for every year below age 25.)

        Exercise Calories: are based on data given for a weight of 150 lbs.
                An adjustment is made for weight in the range of 110 lbs to
                190 lbs.  The  range  of applicability is therefore 110 lbs
                thru 190 lbs.



        SOURCE CODE

    For those of you who have Borland's Turbo Basic and want to have a copy
    of  the  SLIMMER  source  code, it is available to REGISTERED users for
    $10. For  unregistered  users,  the  cost  is  $45  (and  includes  the
    registration). The source code is provided to registered users with the
    request that any modification or variation of SLIMMER be released under
    a  different  name.  I  wish  to reserve the name SLIMMER, SLIMMER.EXE,
    SLIMMER.ARC, SLIMMER2, etc as unique  names  on  the  bulletin  boards.
    SLIMMER is written and compiled with Turbo Basic Version 1.1.  (It will
    compile with Version 1.0 if desired)


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

                                    Page 12



    If  you attempt to diet without exercise, you will reach a plateau at a
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
    component parts and a lot more - - .(for a lot $ more)


    Ways to Help to Lower High Cholesterol Levels:

        1. Decrease or eliminate coffee and alcohol from your diet.
        2. Include fish in your diet.
        3. Include  soluble  fiber in  your diet - especially that found in
    beans (pinto or navy) and from oat bran.
        4. Exercise at least 3 or 4 times a week.  This helps increase  the
    good cholesterol HDLs and decrease the bad cholesterol LDLs.


        HOW TO USE THE FOOD TABLES TO LOWER YOUR BLOOD CHOLESTEROL

    The  food tables and data methods are based on "EATER'S CHOICE: PATIENT
    GUIDE"  and  is  based  on  the  guidelines  of  the   American   Heart
    Association. Eater's Choice is a system that allows you to choose foods
    that you want to eat while you lower your blood cholesterol. The key to
    the  plan  is controlling your intake of the nutrient that most affects
    blood cholesterol levels - saturated fat.

    Saturated Fat:

    Fats contain a mixture of fatty acids - saturated,  monosaturated,  and
    polyunsaturated.  Animal fats contain a greater proportion of saturated
    fatty acids, which  raise  blood  cholesterol  levels;  vegetable  oils
    usually  contain  a  greater proportion of polyunsaturated fatty acids,
    which lower blood cholesterol levels. The more saturated the  fat,  the
    more solid it is at room temperature. Examples of saturated fat include
    beef fat, butter, lard, shortening, coconut oil, and chocolate.

    Figuring your Daily Allowance of Saturated Fat:

                                    Page 13



    The  Heart  Association  recommends that no more than 10% of your total
    calories come from saturated fat. SLIMMER  will  calculate  your  daily
    allowance  as  you  input  your initial values and it perform the ideal
    weight and calorie calculations.

    Translating Your Saturated Fat Quota Into Foods:

    The Food Tables that are included in SLIMMER  list  the  saturated  fat
    calories  in  foods.  Keep  track  of the foods you eat during the day,
    along with their saturated  fat  calories.  Limit  your  saturated  fat
    intake to the 10% level calculated by SLIMMER.

    You  may  want  to  begin by determining which foods your saturated fat
    calories are coming from. You can then decide which foods to  cut  back
    on  or  eliminate  to  lower your saturated fat intake. The food tables
    will also help you choose foods low in saturated fat to substitute  for
    foods high in saturated fat.

    Controlling Dietary Cholesterol and Other Fats:

    Dietary  cholesterol  can  be  controlled by simply eliminating the few
    high cholesterol foods ( egg yolks, organ meats, sardines, and shrimp).
    Substituting  polyunsaturated  margarines  and  oils  for  butter   and
    shortening will give you adequate polyunsaturated fat.

    Sources:

    United  States  Department  of Agriculture, "Nutritive Value of Foods",
    Home and  Garden  Bulletin  Number  72,  Revised  1981.  United  States
    Department  of  Agriculture,  Handbook No. 8, Revised Sections 8-1 thru
    8-12.

        ACKNOWLEDGEMENTS

    My thanks and a registered copy of SLIMMER to Rick Fothergill  for  the
    TBWINDO.INC  window  routines  that make SLIMMER an attractive program.
    For those of you that want to contact him, Rick can be reached thru his
    Compuserve # 76210,443.

    Other routines written by others and used in SLIMMER are

        INPSUB.INC - Author Unknown
                     This routine is used to replace the INPUT command  and
                     has  been  modified  to   make   "bulletproof"   input
                     routines for dates and weights etc.

        JULIAN.INC - Public Domain by Joe Vest
                     This  is  used  to transform the Gregorian date into a
                     Julian  date  where it can easily be included into the
                     +/-  routine  for the date input and then reconverted.
                     A very handy routine.

                                    Page 14



        FNEDIT.INC - Public Domain by Joe Vest
                     This routine was used to remove  leading  blanks  from
                     some of the string data.

        GETFREE.BAS - Author Unknown
                      Renamed   space.bas   and  used  to  determine  space
                      remaining on the default drive.

        CHKCRC.INL - Written by Craig J Kim
                     Used  within  SLIMMER  to  determine  if  a  file  has
                     changed during the present session.

    The  data  and methods used in SLIMMER were taken from a handout that I
    got from my doctor when he measured my  blood  cholesterol  levels  and
    gave me this plan to follow.

        ABOUT THE AUTHOR / PROGRAMMER

    SLIMMER  is  the  first major program written by myself in TURBO BASIC.
    It has been a vast learning experience and  I'm  learning  more  daily.
    There  is  still  much  more  to  learn. My background is in Structural
    Engineering, and I'm  currently  working  as  an  Aerospace  Structures
    Engineer  for  Fairchild  Space  Co. in Germantown, MD. I hold a PhD in
    Applied Sciences from the University of Delaware, where I  completed  a
    dissertation  on  various  solution techniques for laminated plates. My
    interests include the violin which I currently play with a music  group
    known  as  "Servants  of the Lord Most High". My home computer is an XT
    clone, operating at 10 mhz with a 20 meg hard disk, a 3-1/2" 720k and a
    5-1/4" 360k floppy. I use a 2400 baud  modem  and  BOYAN's  version  D4
    shareware  communications package to access the various boards. While I
    only have an amber screen, I can nevertheless see some of  the  effects
    of  color  with a Paradise Monochrome EGA color emulation adapter card.
    It provides full graphics on TTL monochrome monitors with 16 shades  of
    intensity.

    If  any  of  you  want to drop me a line or leave a message, my mailing
    address is:

                        George D. Summers
                        2117 Coon Club Road
                        Westminster, MD 21157

    and my Compuserve number is: 76276,564









                                    Page 15



        WHERE DOES SLIMMER GO FROM HERE

    Every  major  revision  to  SLIMMER  takes  about  six  months or so to
    formulate and test. You the users will, to a large part,  be  the  ones
    that  dictate  what is and is not included in future revisions. Do send
    your comments and suggestion. Some possible directions are as follows:

        1. Write a version for the  Macintosh.
        2. Prepare an international  version  with  possibility  of  having
    dates  in  the  form dd.mm.yy instead of mm/dd/yy and use kg instead of
    lbs etc.
        3. Mouse  drivers  -  I'll  prepare  one for the Logitech C7 mouse.
    Those of you who write drivers for other mice can send them  to  me  to
    include  with the next revision.
        4. Add carbohydrates and  cholesterol  to  the  food  tables.
        5. Rewrite SLIMMER in the C language.
        6. Include on-line HELP screens.
        7. Increase the number of food selectons from the present < 1000 to
    more than 3000 and include B-tree database management and recall.





        REGISTRATION

    For those of you interested in registration, all  the  information  you
    need  is found by selection the REGISTRATION line in the main menu. You
    are shown a registration form that you can send  to  your  printer.  Be
    sure to indicate your preference for 3-1/2" or 5-1/4" disks.  You may
    use the form found on the next page of this document file instead if you
    have printed this file.





















                                    Page 16



                         SLIMMER REGISTRATION FORM


Your Name _____________________________________________________________________

Street Address ________________________________________________________________

City, State, Zip ______________________________________________________________

Phone # (Optional) ____________________________________________________________

Disk Size Desired      3-1/2" ________     or    5-1/4" _______

Registration # shown in SLIMMER closing screen  _______________________________

Amount Enclosed:  $35 for registration __________

                  $45 for registration and source code __________

                  $50 for registration outside USA __________


Please describe your equipment (optional):

Computer type _________________________________________________________________

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


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1489

     Volume in drive A has no label
     Directory of A:\

    FILE1489 TXT       954  10-02-89  12:51p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       386   7-31-89   8:33a
    PAGE     COM       325   1-06-87   4:21p
    PKUNZIP  EXE     21440   7-21-89   1:01a
    READ_ZIP 1ST      3245   9-06-65   5:36a
    SLIM2B   ZIP    160086   8-31-89   4:03a
    VIEW     BAT        44   9-05-65   6:04a
            8 file(s)     186518 bytes
                          131072 bytes free
