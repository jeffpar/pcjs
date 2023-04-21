---
layout: page
title: "PC-SIG Diskette Library (Disk #1358)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1358/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1358"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FISHBASE II"

    FISHBASE lets devoted fishermen, amateur and professional, keep track
    of their favorite fishing holes -- to catch more, bigger fish in the
    future.  It's a database diary in which you record all the important
    facts about the fish you catch, so you can return to the scene of your
    success.  It holds up to 1000 fishing trips.  In addition to location,
    you can record weather conditions, water temperature, size of fish
    caught, and which lures you used to catch them.  You can even note
    items such as the phase of the moon, in order to find out when the bass
    are likely to spawn.  You can also print many reports from your data.
    
    Currently in use by several ``pros,'' this program will also be of
    interest to fishing clubs for competitions.  The many help windows move
    the program along swimmingly, and they are backed up by a hefty user
    guide guaranteed to hook you.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FB.DOC

{% raw %}
```



                           The SHAREWARE Concept

       FISHBASE ][ is distributed under the concept of ShareWare.  Under
       this  novel  idea,  you  are  free  to  distribute copies of this
       software to your friends without charge.   You  are  required  to
       distribute this document along with the software, being sure that
       this  notice remains attached. You are NOT permitted to sell this
       software under any circumstances. Under the concept of ShareWare,
       all rights to the software remain with the author. The authors of
       this so-called "free" software deserve some recognition for their
       efforts.  By using this software, you have the unique opportunity
       to "try before you buy".  If, after a reasonable length of  time,
       you  find this software useful, you are expected to register with
       the author. Some of the best software available today is obtained
       through ShareWare. Let's keep it coming!

       For donations of ten dollars or more, I'll add you to my list  of
       'good  guys'.  These  people  will  receive a disk containing the
       newest version of FISHBASE ][, free of charge. Also, as a  member
       of  the  'good  guys', I will answer any correspondence regarding
       FISHBASE ][ promptly. For the  rest  of  you,  I'll  answer  your
       questions  and  provide  help  as  time  permits.  Along with any
       correspondence, please indicate what version of FISHBASE  ][  you
       are  using,  what  type  of  computer  you have, and what kind of
       option cards you have installed. To  satisfy  my  own  curiosity,
       please  indicate  how  you  obtained  your copy of FISHBASE ][.

       We've all got much to learn about fishing, and maybe if we  share
       our ideas, and even our data, we can take some of the mystery out
       of the sport and improve our success!


         Please send all donations, bug reports or questions to:


                        Richard Olsen
                        68 Hartwell Ave.
                        Littleton, Ma. 01460





                Introduction to FISHBASE ][ vers. 2.4


       Welcome  to  FISHBASE  ][! FISHBASE ][ was written by a fisherman
       because it was needed. Like many other fishermen, I kept a  diary
       of  all  of  my  fishing  trips  noting  such  things  as weather
       conditions, water temperature, size of fish caught and what lures
       I used to catch them. After a few years of this, I began  to  try
       to decipher all of the data and to derive some sort of pattern or
       reason  for  the  success  or  failure  of my exploits. It became
       apparent that I wasn't very consistent with my record keeping and
       that it was difficult and time consuming to determine the  things
       I  wanted  to  know  about  my fishing activities. For example, I
       wanted to know what kind of lures accounted for  the  most  fish.
       What  color lures caught the biggest fish? What water temperature
       seemed to bring the most success?  Did  the  phase  of  the  moon
       really  have  anything  to do with the willingness of the fish to
       strike? What week seemed to be the most likely time for the  bass
       to  be  spawning?  These  questions  and many others were hard to
       answer from the information contained  in  my  fishing  log.  The
       information was mostly there, but it sure took a long time to dig
       it  out.  I  then  decided to use my personal computer to help me
       find out what I wanted to know. At first, I used  a  commercially
       available  data  base  program  to enter most of the data from my
       fishing diary. It was a big help, but it fell short when it  came
       to providing me with all the statistics I was looking for. It was
       easier to find out how many bass of four pounds or greater that I
       had  caught,  but  it  still  took a long time to figure out what
       lures were the most productive or if the most  fish  were  caught
       during  the  full moon or at other times. Then I decided to write
       my own program to do exactly what I wanted. After many  hours  of
       work,  FISHBASE  ][  was  created. Over many months, it underwent
       change after change, and improvement after improvement.  Features
       were   added.  Speed  was  increased.  Some  fancy  windows  were
       included. Pretty soon, my friends convinced me that it  might  be
       useful  to  other  fishermen as well. Even professional fishermen
       could benefit from it. Clubs could use it  for  their  tournament
       record  keeping.  After  all  of this prodding, I decided to make
       FISHBASE ][ available to all fishermen, in the hopes that it will
       improve their catches. I've tried to make it easy to use, and  as
       bug-  free  as  humanly possible. If you do find a bug, or have a
       suggestion for improving it, drop me a line and I'll  do  what  I
       can  to  fix  or  improve the program. In return, I'll send you a
       free updated copy. I'd also be interested in hearing any comments
       you may have, good or bad, about the program.

                Good luck!

                Dick Olsen






                     What You Need To Use FISHBASE ][

       FISHBASE ][ requires an IBM PC, XT,  AT  or  compatible  with  at
       least  256k of memory. A color display makes it nicer, but is not
       necessary. If you have a hard disk, FISHBASE  ][  will  run  much
       faster  and will be easier to use. Remember that if you are using
       a hard disk, you should make frequent back-up copies of your data
       file so that in the event of a computer problem or power failure,
       your data will not all be lost. These things DO  happen,  so  use
       some  common sense and protect your investment in time. If you do
       not have a hard disk based computer,  FISHBASE  ][  will  run  on
       either a one or two floppy machine. Floppy disk users should also
       get  in  the habit of making backup copies of their data base. It
       is highly recommended that you read this manual in  its  entirety
       before  using  FISHBASE  ][.  This doesn't take very long, and it
       will give you a much better understanding of what's happening  on
       the screen.





                             Getting Started

       The FISHBASE ][ diskette contains an installation program to help
       you  get  it up and running on your machine. This install program
       is only needed if you intend to run FISHBASE ][ on a  hard  disk.
       To  install  the  program  on your hard disk, insert the diskette
       into drive A and type A:INSTALL. It is not necessary to be in any
       specific directory at this  point.  INSTALL  will  create  a  new
       directory  called  'FBASE'  on your hard disk and copy all of the
       necessary files from the floppy disk to the hard disk.  Keep  the
       original  diskette  in a safe place. The install program does not
       need to be run again unless you want to install  the  program  on
       another  computer.  Once  the  installation program has finished,
       simply typing 'FB2' while in the main (root) directory  will  run
       the  program.  After  the  title screen appears, pressing any key
       will cause the title screen to clear, and the message  'Use  what
       data  base?'  will be displayed. This message means that FISHBASE
       ][ wants to know which data base file  you  would  like  to  work
       with.  Answer by typing in the name of a data file, or just press
       'ENTER'. FISHBASE ][ will attempt to use the data base  you  have
       specified, or if you just pressed 'ENTER' it will use the default
       data  base  file  called  FISHFILE.   If  the  data base you have
       specified cannot be found, FISHBASE ][ will create  it.   If  the
       default  data  base,  FISHFILE, cannot be found, FISHBASE ][ will
       create it for you. After the data base is created (or an existing
       one is found), the main menu will be displayed and FISHBASE ][ is
       ready to use.



       If you are going to run FISHBASE ][ from floppy disks, first make
       a copy of the program disk. Always use the  copy  and  store  the
       original  diskette in a safe place. If your computer has only one
       floppy disk drive, insert the program disk  into  the  drive  and
       type  "FB".  This  will  start  FISHBASE ][ running. and soon the
       title screen will be displayed. Once the  title  screen  appears,
       press  any  key  to begin. You will be asked to enter the name of
       the data base you want to use. At this point, remove the  program
       disk  from  the  drive  and  insert a blank, formatted disk. Once
       you've done this, if you just press  'ENTER',  FISHBASE  ][  will
       check the disk drive for a file called FISHFILE. If FISHFILE does
       not  exist,  FISHBASE  ][  will  create  it  for you. If FISHFILE
       already exists, it will become  the  active  data  base  used  by
       FISHBASE  ][. You can also enter the name of some other data base
       you have created and FISHBASE ][ will use it as the  active  data
       base.  You  should see the light on your disk drive come on for a
       moment or two while FISHBASE ][ checks for the  presence  of  the
       data  base.  After this business is completed, the main menu will
       be displayed, indicating FISHBASE ][ is ready to use.

       If your computer has two disk drives,  insert  the  program  disk
       into  drive  A: and insert a blank, formatted disk into drive B:.
       Next, type "A:FB". Once the title screen has appeared, press  any
       key  to  proceed.  When  you are asked what data base you want to
       use, type "B:FISHFILE", or the name of  whatever  data  base  you
       want  to  use. FISHBASE ][ will then run just as described above.
       If you need help  copying  or  formatting  disks,  refer  to  the
       operating  system  manual supplied with your computer. A diskette
       will hold about 800 fish forms.


       The FISHBASE ][ diskette contains  a  sample  data  base,  called
       SAMPLE.DAT,  for  you to experiment with. This data base contains
       information on more than 200 fish. Although  the  angler's  names
       and  the fishing spots are fictitious, the data is genuine. It is
       highly recommended that you "play" with this data base before you
       start your own. You can try  adding  new  forms,  searching,  and
       editing  with  this  data base. To use the sample data base, just
       enter SAMPLE.DAT  in  response  to  the  'Use  what  data  base?'
       question that appears after the title screen.




                            Entering Information

       It  cannot  be  over  stressed  just  how  important  it is to be
       consistent when you are entering information on  an  input  form.
       When  entering  the date, it is mandatory that you use the format
       'YY/MM/DD'.  For example, July 14,  1987  should  be  entered  as
       '87/07/14'.  There  is  good  reason  for this.  When you run the
       statistics portion of FISHBASE ][, a great  deal  of  sorting  is
       done,  and  if  the  dates  are entered in some other format, the
       results of the sorting may not be what you'd expect. When you are
       entering the date, FISHBASE ][ will check for the proper  format.
       If  the  format of the date is invalid, FISHBASE ][ will beep and
       display a message near the bottom of your screen. Likewise,  when
       entering  things  like  lure  type  or  lure color, it pays to be
       consistent.

       When  you  enter  the  length  and weight of your fish, don't use
       fractions. Enter fractions as decimal values. For example,  a  15
       1/2  inch fish that weighed 2 3/4 pounds should have 15.5 entered
       for the length, and 2.75 entered for the weight.  The  statistics
       produced  if you enter fractions will not be correct. The program
       contains several help windows to assist you in being  consistent.
       If  you flub up, and do something silly like enter 'SPINNER BAIT'
       for  a  lure  type  during  one  input  session  and  then  enter
       'SPINNERBAIT'  during  another  input  session,  the program will
       consider them both different lure types, and the statistics  that
       are  generated  will  not  be  accurate.   The  program  contains
       powerful editing features which will allow you to clean  up  your
       data  base  and eliminate inconsistencies.  The editing features,
       the HELP windows and the statistics routines will be discussed in
       greater detail elsewhere in this document.   It  should  also  be
       noted  that word processing programs or editors cannot be used to
       edit your data base.  This is because the data base is  a  random
       file in compressed format.



       After the title screen is displayed, pressing any key will  cause
       the program to ask for the name of the data base you wish to use.
       You  can  enter  the  name of some special data base here or just
       press 'ENTER' to use the standard default data  base  (FISHFILE).
       If  the  data  base  name  you  enter  does not exist, it will be
       created for you. Once you have answered the data  base  question,
       the MAIN MENU will be displayed. Selecting item 1 will bring up a
       blank  input  form,  which  is the main vehicle used to enter new
       data. Pressing 'ENTER' after you have typed in  the  data  for  a
       particular  field  will  cause  the cursor to advance to the next
       field.  Pressing  'ENTER'  by  itself  (without  actually  having
       entered data) will cause the field to remain blank and the cursor
       will  move  to  the next field. The 'TAB' key can also be used to
       advance to the next field and the 'BACK TAB' key (shift-tab) will
       move the cursor to the previous field. You can use the 'TAB' keys
       to move around the form to fix errors or to skip over fields. The

       'TAB' keys will not change the data in a field, but the ENTER key
       will. Remember that pressing the ENTER key when the cursor is  at
       the  first character position of a field will cause the the field
       to be blanked. The 'TAB' keys merely retain the data currently in
       a field. You can also use the arrow keys on your  numeric  keypad
       to  move  up,  down left or right on a form. They function in the
       same manner as the TAB keys. Each of the  fields  has  a  maximum
       number  of  characters that can be entered into it. If you try to
       enter too many characters, FISHBASE  ][  will  beep,  the  excess
       characters will be ignored and the cursor will remain at the last
       character  position  for  the field. Any field can be left blank,
       but it's always best to enter data in as many fields as you  can.
       There  are  times  when  most  of  the  fields will be blank. One
       example of this would be when you've been  'skunked',  or  caught
       nothing  (ugh!) on a particular outing. Just as it's important to
       know why you caught fish, it's equally important to know why  you
       didn't!

       When filling out new forms, there are a few special keys that you
       should know about. One key is the '/' key. This  key  will  cause
       all data entered on the form up to the point at which the '/' key
       is  used  to  be saved to the data base, and you will be asked if
       you wish to enter another. The '=' key is another special one you
       need to know about. This key acts  like  a  ditto  key,  in  that
       whatever data was entered in that field on the previous form will
       be  popped  into  the  same  field  on the current form.  This is
       especially handy when you have to enter a bunch of fish that were
       caught on the same date or at the same place. It saves a  lot  of
       typing  and  makes  filling  out the forms a lot faster.  Each of
       these keys only works when used  as  the  FIRST  character  of  a
       field. If they're used after the first character, they're treated
       just like any other character.


       Another  special  key  to  be  aware  of is the ' " ' key (double
       quote). This key is only responded to in a special way  when  the
       message 'Would you like to enter another ?' is displayed near the
       bottom  of  your screen after you have entered a new form. If you
       press the ' " ' key at this time, the  form  currently  displayed
       will  be  duplicated  in it's entirety. This is handy if you have
       lots of fish to enter that are the same size, caught on the  same
       bait,  at  the same place etc. A message will appear with a count
       of the number of forms you have duplicated. Use this key ONLY  if
       all information is identical.

       The  last  special  key  is  the  ESC key. Pressing this key will
       usually bring you back to the main menu. It's handy if  you  want
       to  abort  an operation such as entering a new form, or searching
       your data base. Sometimes, you will need to press the key several
       times.



                            Searching For Information

       Selecting item 2 from the MAIN MENU will cause a blank form to be
       displayed. This  is  the  form  you  use  to  enter  your  search
       criteria,  or  the information you'd like FISHBASE ][ to find for
       you. This is a very powerful function, and  when  properly  used,
       can  be very useful. Only the fields in which you enter something
       will  be  used  to  conduct  the  search.  Obviously,  the   more
       information  you enter on the form, the more specific your search
       will be. Entering search criteria works just  like  entering  new
       information,  except  that entering a "/" at the start of a field
       will  cause  the  search  to  begin  immediately,  based  on  the
       information  you've  entered up to that point. The ditto function
       is not available in the search mode. An example might be that you
       want to find all of the fish you have caught that were  equal  to
       or  greater  than  15  inches  in  length  during  the year 1984.
       Furthermore, you want to see only those caught on a black plastic
       worm by you, and only you. Here is where some of the features  of
       the  search  mode  really come into play. On fields that normally
       contain numerical data, like length,  weight,  water  temperature
       etc.  you  can  specify things like '=' (equal) or '=>' (equal or
       greater than) or '<=' (less than or equal  to)  and  the  program
       will only locate those. In this case, we want to find fish caught
       during  the  year  1984.  So,  in  the DATE field, we would enter
       '84'then press the ENTER key to move to the CAUGHT BY field. Here
       we would enter your name, or at least most of the letters of your
       name. FISHBASE ][ will use only the  information  you  enter.  If
       your  name was John, and you entered only the letters 'JO' in the
       CAUGHT BY field,  someone  whose  name  was  Joe  would  also  be
       included in the search. After entering your name in the CAUGHT BY
       field,  pressing  ENTER  will  cause  the  cursor  to move to the
       SPECIES field. Since we don't care what kind of  fish  it  is  in
       this  case,  just  press ENTER to leave that field blank. We have
       now moved to the LENGTH field,  which  is  another  one  we  care
       about.  Here  we  are  interested  in  fish  that are equal to or
       greater than 15 inches long, so we  would  type  '=>15'  in  this
       field. Use the ENTER key to move the cursor down to the LURE TYPE
       field.  In this field, we want to enter 'PLASTIC WORM'. Using the
       ENTER key again, move to the LURE  COLOR  field.  Here  we  would
       enter  'BLK'  or 'BLACK' depending upon the way you've decided to
       enter your color information. Consistency, remember? One  of  the
       help  windows  contains  some  suggestions  for  consistent color
       abbreviations. At this point,  we  have  entered  information  in
       those fields we care about, and the cursor should be in the first
       character  position  of  the LURE SIZE field. Since we don't care
       about any of the rest of the fields, we are ready  to  begin  the
       search. Typing '/' then pressing ENTER will now start the search.
       You  will  be asked if you would like to stop on each form found.
       If you answer with a 'y' or 'yes', each form found  that  matches
       the  search criteria you've specified will be displayed, and will
       remain on the screen until you press any other  key.  The  search
       can  be abandoned at any point by pressing 'ESC'. If you answered
       'n' or 'no', each form found will be displayed, but  the  program

       will  automatically  start  looking  for  the next matching form.
       Again, pressing 'ESC' will abort the search  and  return  to  the
       MAIN MENU.

       As  you can imagine, the search possibilities are almost endless.
       With a little practice, you will be able to find almost any  kind
       of  information  you  can  think  of.  The  distribution diskette
       contains a sample data base containing over 200 fish. The name of
       the file is 'SAMPLE.DAT'. It is provided as a means to allow  you
       to  see  what FISHBASE ][ can do. In order to experiment with the
       sample data base, you must specify 'SAMPLE.DAT' when the  program
       asks  for  the name of the data base to use. The name of the data
       base you are currently using is shown any time the main  menu  is
       displayed.


                             The Statistics Option

       Selecting  this  option from the MAIN MENU will cause a window to
       appear on your screen that describes the statistics that will  be
       compiled.  When  this window is displayed, you have the option of
       entering a "p" to have the statistics listed  to  a  printer,  or
       entering  a  "d"  which  will create a file called 'stats.dat' on
       your disk. This file will look exactly like what you see on  your
       screen,  and can be printed at some other time. If you just press
       'enter', the statistics will not be sent to either  your  printer
       or  the  disk.  After  you have selected "p", "d" or just pressed
       enter, the message 'press any key to begin' will appear.  If  you
       press  'ESC',  the statistics function will abort and you will be
       returned to the main menu. Pressing any other key will start  the
       statistics  routine  running.  Once  the  statistics  routine  is
       running, the data base is analyzed and many sorting and  checking
       things  are  performed.  The  time required to compute all of the
       statistics depends on the type of computer  you  have,  how  many
       forms your data base contains, and whether or not you have a hard
       disk.  On  a  data base containing about 300 fish, the statistics
       routine will take about 2 minutes on a PC/AT class  machine.  You
       can  usually  abort  the  statistics  routine  by  pressing 'ESC'
       several times  while  it  is  running.  Each  time  you  run  the
       statistics   routine  with  the  "d"  option  selected,  the  old
       'STATS.DAT' file is overwritten  with  the  new  information.  To
       print  out  the 'STATS.DAT' file after you exit from FISHBASE ][,
       type 'COPY STATS.DAT PRN:' if you  are  using  computer  equipped
       with  a  hard disk, or 'COPY B:STATS.DAT PRN:' if you are using a
       floppy disk based system. Most word processing programs will also
       accept the 'STATS.DAT' file. The statistics option  provides  you
       with a listing of the following:


                       * The average length of all the fish

                       * The average length of fish caught each

                         year, and a count of how many

                       * Individual angler totals and averages

                       * A list of the 20 largest fish, who caught

                         them, when they were caught, and what lure

                         was used.

                       * A sorted list of all lures used

                       * A list of the most productive lures

                       * What lures produced the best in the various

                         water temperatures.

                       * A list of how many were caught at each

                         water temperature range

                       * A list of how many were caught during

                         full and new moon phases

       During most operations, you can pause the display by pressing
       any key (except the ESC key). To continue the display, press any
       other key.


                                The PRINT MENU

       Selecting  option  4 from the MAIN MENU will cause the PRINT MENU
       to be displayed. At this point, you have three choices. Selecting
       option 1 from the PRINT MENU will cause the entire data  base  to
       be  listed  to the display. The information from the data base is
       displayed sequentially in the order in which it were entered. You
       can abort the listing by  pressing  the  'ESC'  key,  which  will
       return  you  to  the  MAIN  MENU. The speed of the display can be
       slowed by pressing "s" while the display  is  in  progress.  Each
       time  you  press  the "s" key, the speed of the display will slow
       down a little.  Keep pressing the "s" key until  the  display  is
       scrolling  at  the  speed  you  like.  Pressing "f" will make the
       display run faster. Again, multiple presses of the "f"  key  will
       gradually  speed  up  the  speed  of  the  display. If you choose
       option 2 from the PRINT MENU, the entire data base will  be  sent
       to the printer. This mode works continuously until the whole data
       base  has  been printed, or until you press the 'ESC' key. If you
       select this option, and you do not have a printer  connected,  or
       your  printer is not responding, nothing will happen for a while,
       then the message 'DEVICE TIMEOUT' will appear on your screen, and
       the program will halt.  Selecting option 3 from  the  PRINT  MENU
       does  exactly  what  it  says.....it returns you to the MAIN MENU
       again.

       Additional comments about printing:

       Most  versions  of DOS are supplied with a utility program called
       GRAPHICS.COM. Before you run  FISHBASE  ][,  if  you  first  type
       GRAPHICS,  DOS  will  load  the  special graphics printing driver
       called GRAPHICS.COM. If you run this special  printer  driver  as
       described  above,  you  will  be  able  to  print ANY screen from
       FISHBASE  at  any  time  by  just  typing  SHIFT-PRTSCR  on  your
       keyboard. This is very handy if you want a print out of something
       like  the  individual angler statistics or the graph of the water
       temperatures.




                                Editing Forms

       The process of editing forms is begun by selecting  item  5  from
       the main menu. Form editing consists of two operations, the first
       being  the FINDER FORM. The finder form appears immediately after
       you select item 5 from the main menu. The FINDER  FORM  is  where
       you  enter  the  information  you  want  to locate. It works in a
       manner similar to the search option discussed earlier except that
       in most cases you must specify the information more exactly.  For
       instance,  if  you  wanted  to  find  all  forms  that  contained
       SPINNERBAIT for the lure type, you would have to enter the  whole
       word,  SPINNERBAIT.  Entering  just  SPINNER  would only find the
       forms that had SPINNER in the lure type field. This is  important
       because  if you decide to use the GLOBAL CHANGE command, you want
       to be sure that only the forms that contain an exact match  would
       be  changed.  As  many  fields as you want can be included in the
       FINDER FORM, but each must exactly specify the  information  that
       you are looking for. Once you have entered all of the information
       you  need  on  the FINDER FORM, enter the '/' at the beginning of
       the next field. The '/'  key  tells  FISHBASE  ][  that  you  are
       finished  entering  your FINDER FORM information and it's time to
       enter your CHANGE FORM information.


       The second operation when editing  forms  is  called  the  CHANGE
       FORM. This form appears after you have fully specified what forms
       you  want to find with the FINDER FORM. On the CHANGE FORM, enter
       information only in the fields that are to be changed. Again, you
       can enter the CHANGE information in as many fields as  you  need.
       Use the 'TAB' and the 'BACK TAB' keys to move to the fields to be
       changed,  and  leave the unchanged fields blank. You can also use
       the 'arrow' keys to move  around  on  the  form.  Once  you  have
       finished  filling  in the fields to be changed, enter the '/' key
       in the next empty field  to  start  the  find/replace  operation.
       FISHBASE  ][  will begin scanning all of your forms looking for a
       precise match for all of the fields you specified on  the  FINDER
       FORM.  When  the  first  exact  match  is found, the form will be
       displayed, and you will be asked if this is the form you want  to
       change. Answering 'Y' will cause the information you specified on
       the  CHANGE FORM to replace the information on the displayed form
       in only  those  fields  you  specified.  Then  FISHBASE  ][  will
       continue  searching  for  more  forms  that match the FINDER FORM
       exactly. Entering  'N'  will  skip  making  the  changes  on  the
       displayed  form  and  start looking for another form that matches
       your FINDER FORM. You can abort the find/replace operation at any
       time by pressing the 'ESC' key. If you decide that  you  want  to
       end  the  find/replace  operation  before any further changes are
       made, just enter 'Q' to return to the main menu. Entering 'G'  in
       response  to  the  'Make your changes to this form' question will
       cause all forms that exactly match your FINDER FORM to be changed
       to the information specified on your CHANGE FORM. This is a  very
       powerful command that should be used with care since you will not
       have the opportunity to change your mind once it starts. You can,
       however,  press  the 'ESC' key during a global change to cause it
       to abort. Only the forms that were  changed  before  you  pressed
       'ESC' will show the changes.

       There  is  one  exception  to the exact match rules on the FINDER
       FORM. This is called the WILDCARD. Wild cards  are  specified  by
       entering  a  '*' as the first character in the field, followed by
       the rest of the characters you are interested in. For example, if
       you entered '*SP' in the lure type field, all forms  that  had  a
       lure  type  of SPOON, SPINNER, or SPINNERBAIT would be found, and
       the information specified on the CHANGE FORM  would  replace  the
       corresponding fields on those forms. You can use wild cards in as
       many fields as you like, but again, be careful when you use them,
       particularly in conjunction with the global change command. It is
       recommended  that you use these powerful features sparingly until
       you become proficient with the use of FISHBASE ][.





                              Other Goodies

       Selecting option 6 from the main menu  will  cause  a  window  to
       appear   that  provides five additional features of interest. The
       first  of  these  allows  you  to  display  information  about  a
       particular fishing area. If you choose [1], you will be asked  to
       enter  the name of the area of interest. You do not need to enter
       the complete name, because FISHBASE ][ will find all  forms  that
       contain  the  name  as  you enter it. For example, if you want to
       find out how you  have  done  while  fishing  Toledo  Bend,  just
       entering  'TOLEDO'  is enough. Of course, you can still enter the
       whole name if you wish. This is important  because  if  you  have
       both  a 'LONG LAKE' and a 'LONG POND' in your data base, and they
       are different places, then you need to spell out the  whole  name
       of  the  one  you are interested in. After specifying the name of
       the place you're interested in,  FISHBASE  ][  will  compute  all
       kinds  of  information about that place for you.  The information
       you will be given is:


                  * Total number of fish caught at this location

                  * Total weight of these fish

                  * Average weight of fish caught

                  * Average length of fish caught

                  * Number of times the area was fished

                  * Average number of fish caugth each trip

                  * The five most productive lures at this location

                  * The biggest fish caught at this location

                  * Who caught the biggest fish

                  * What lure caught the biggest fish



       Selecting  item  [2] from the goodies menu will let you enter the
       name of a particular angler that you want information about. When
       you specify the name, it's a good idea to completly spell out the
       name. As with the evaluation of a fishing spot, FISHBASE ][  will
       find  all the forms that contain the name as you have entered it.
       If you just enter the name  'JOE',  then  all  anglers  with  the
       letters  JOE  in  their  name will be included in the report. The
       report produced is similar to that of the fishing spot report and
       includes the following information:




                    * Number of fish caught

                    * Total weight of fish caught

                    * Average weight of fish caught

                    * Average length of fish caught

                    * How many times the angler has been 'skunked'

                    * Number of fishing trips logged by angler

                    * Average number of fish caught per trip

                    * The best lures for that angler

                    * The biggest fish caught by that angler

                    * Where the biggest fish was caught

                    * When the biggest fish was caught

                    * What lure caught the biggest fish


       Option  [3]  in  the Goodies menu allows you to obtain statistics
       about a certain TYPE of lure. For example, if  you're  interested
       in  finding  out how well you've done using a plastic worm, enter
       "plastic worm" for the lure type. The color does not matter.  All
       fish caught with a plastic worm will be analyzed, and FISHBASE ][
       will  tell  you how many fish were caught (on ALL plastic worms),
       their average size, who caught the biggest fish  on  the  plastic
       worm, as well as where and when it was caught.

       If you choose [4] from the goodies menu, a  chart  showing  water
       temperature  versus date will be drawn on your screen. A separate
       line is drawn for each year, allowing you to  compare  the  water
       temperatures  by  dates  for  each  year.  This  is handy to help
       predict what the approximate water temperature  will  be  on  any
       given date.

       Choosing  option  [5]  from  the  goodies  menu will allow you to
       obtain the full and new moon dates for any month or year that you
       enter. Make sure you use the format requested when you enter  the
       month  and year information. If you change your mind, and want to
       get out of the goodies menu, just press 'enter' by itself and the
       message 'press any key to return to main menu' will appear at the
       bottom of your screen.




                              Ending A Session

       Selecting option 'Q' from the MAIN MENU will prompt you with  the
       question  'Are  you  sure...?'.  If you answer 'yes', FISHBASE ][
       will end, and return you to the DOS prompt, leaving  you  in  the
       'FBASE'  directory. This gives you one last chance to change your
       mind. If you answer 'no' in response to the  question,  the  main
       menu will be redisplayed and FISHBASE ][ will not terminate.



                             Using the HELP Screens

       Several  layers of help screens are built into FISHBASE ][. These
       screens, or windows, can be called upon to jog your  memory  when
       it  comes  to  abbreviations,  weather  conditions and some other
       useful things. These windows  can  only  be  used  when  you  are
       entering a new form (option 1 from the MAIN MENU) or when you are
       searching for information (option 2 from the MAIN MENU). To bring
       up the HELP windows when you are using either of these two modes,
       just  press  the  '?'  key and the first window will pop onto the
       screen. Each successive window can be displayed by  pressing  the
       'down  arrow'  cursor  control  key. Previous help windows can be
       brought back by pressing the 'up arrow' key.  To  exit  the  help
       windows and restore your form in its entirety, just press the '?'
       key  again.  It doesn't matter what help window is displayed when
       you decide to exit the help mode. In other words, you can  return
       to  your  form  no  matter how many layers of help windows are on
       your screen. Help windows such as the length-to-weight chart  are
       only  meant  to  be  used  as  a  guide,  and to remind you to be
       consistent in your data entry. The weights given for a particular
       length are derived from my own  fishing  experience  and  reflect
       typical   weights   for  a  largemouth  bass  of  those  lengths.
       Naturally, the weights will vary according to things like time of
       year, the region in which you fish, and obviously the species  of
       fish.  The  color abbreviations help window is used to remind you
       what abbreviation to use for a given lure color. I've found  that
       after  using  FISHBASE  ][  for  a while, that I seem to remember
       these pretty well. The general abbreviations window lists several
       suggestions for standard abbreviations. Weather conditions, water
       conditions  etc.  are  included  here.  The  SEARCH  help  window
       concerns  itself  with things to do with searching for data. Some
       hints on using the search capability appear here, to save  having
       to  look  it up in the manual. The last help window contains some
       general help information and might save you thumbing through  the
       manual.




                          A Few Words About Data Bases

       FISHBASE  ][  data bases are limited to about 800 fish each. This
       is due to memory limitations of PC compatible computers, not  the
       program itself. If the number of fish in your data base starts to
       approach  the 800 fish limit, it's best to start a new data base.
       A new data base is easy to create by entering the name  you  want
       to  call the new data base when FISHBASE ][ first starts running.
       Be sure that the name you choose is different from any data  base
       that  you  currently  have on your disk! If you use the name of a
       data base that already exists, FISHBASE ][ will happily add forms
       to it, and you may exceed the maximum  limit.  If  the  limit  is
       exceeded,  all  functions of FISHBASE ][ will work except for the
       statistics compiler and the goodies  stuff.  Trying  to  run  the
       statistics  compiler  or  the goodies (except the moon phase) may
       cause the program to halt unexpectedly if you have too many forms
       in the data base.






                          REGISTRATION FORM

       Dear Dick,

       Enclosed please find my check or money order for $10.00. Please
       register me as a FISHBASE user and send me the latest version if
       the version I currently have is not the latest.

       Thanks!


       YOUR NAME________________________________________________

       STREET ADDRESS___________________________________________

       CITY, STATE, ZIP_________________________________________

       COUNTRY__________________________________________________

       FISHBASE Version you have________________________________

       Where did you get FISHBASE ][?___________________________

       COMMENTS_________________________________________________

       _________________________________________________________

       _________________________________________________________

       _________________________________________________________



       Other programs available from the author:

             BASSTOUR......A  bass  fishing  tournament  game. Over 2300
                           lure/color combinations. Six different  lakes
                           to fish. You have complete control of a fully
                           rigged  bassboat.  Here's your chance to fish
                           against the best with the BEST  fishing  game
                           available. For EGA, CGA or Hercules displays.

             LAKES #1......A collection of 7 new fishing areas you can
                           add to BASSTOUR. Installation instructions
                           are included.

             LAKES #2......Another  seven  fishing  areas  to  use  with
                           BASSTOUR.  Use  of both LAKES #1 and LAKES #2
                           will bring the total number of fishing  areas
                           to 20. Includes installation instructions.

             BASSTIPS......A collection of over 100 bass fishing tips.
                           Add your own, pop them on the screen when you
                           power up your machine. Great gift!  Color  or
                           Monochrome machines.

             TIKLER........A simple, quick reminder program for color or
                           monochrome systems.  Almost indespensable.



       Available   for  $10  each.  Plus  $2.00  to  cover  postage  and
       materials. Please specify what you want.


       Mail TO:

       Richard Olsen
       68 Hartwell Ave.
       Littleton, MA.  01460






















```
{% endraw %}

## FILE1358.TXT

{% raw %}
```
Disk No: 1358                                                           
Disk Title: FishBase II                                                 
PC-SIG Version: S2.1                                                    
                                                                        
Program Title: FishBase II                                              
Author Version: 2.4                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
FISHBASE lets devoted fishermen, amateur and professional, keep track   
of their favorite fishing holes -- to catch more, bigger fish in the    
future.  It's a database diary in which you record all the important    
facts about the fish you catch, so you can return to the scene of your  
success.  It holds up to 800 fishing trips.  In addition to location,   
you can record weather conditions, water temperature, size of fish      
caught, and which lures you used to catch them.  You can even note      
items such as the phase of the moon, in order to find out when the      
bass are likely to spawn.  You can also print many reports from your    
data.                                                                   
                                                                        
Currently in use by several ``pros,'' this program will also be of      
interest to fishing clubs for competitions.  The many help windows      
move the program along swimmingly, and they are backed up by a hefty    
user guide guaranteed to hook you.                                      
                                                                        
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
    ╔══════════════════════════════════════════════════════════════════╗
    ║                       <<< Disk #1358 >>>                         ║
    ╠══════════════════════════════════════════════════════════════════╣
    ║                                                                  ║
    ║   To install program type: INSTALL                               ║
    ║                                                                  ║
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝
    (c) Copyright 1990, PC-SIG Inc.
~
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1358

     Volume in drive A has no label
     Directory of A:\

    FB       DOC     43973   1-24-90   4:08p
    FB       EXE     94416   1-24-90   3:59p
    BASS     PIC     16391   5-14-87   1:36p
    INSTALL  BAT       118  10-12-88   7:27a
    FB2      BAT        15   2-09-88   4:22p
    SAMPLE   DAT     86510   2-10-88   4:27p
    GO       BAT        17   7-10-90   3:52a
    GO       TXT       630   7-10-90   3:52a
    FILE1358 TXT      2221   7-10-90   3:47p
            9 file(s)     244291 bytes
                           71680 bytes free
