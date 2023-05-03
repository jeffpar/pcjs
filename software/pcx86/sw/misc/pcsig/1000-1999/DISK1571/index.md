---
layout: page
title: "PC-SIG Diskette Library (Disk #1571)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1571/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1571"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CALENDAR PROGRAM AND TIKLER"

    Do you find yourself constantly flipping through a calendar to answer
    questions like, "How many days until . . .?" or "What was the number of
    days between this date and that?" or "How many days ago was this?" Or
    maybe you just want to have a yearly calendar, for any requested year,
    pop up on your screen.  CALENDAR PROGRAM is a quick, no nonsense way to
    help people whose lives are tied to dates.
    
    If you need to see a full year of monthly calendars, tell the computer
    which year and touch the return key.  If you have 90 days in which you
    must do something, tell CALENDAR PROGRAM the starting date.  After a few
    seconds, it will tell you the date the 90 days are up.  You can
    determine the number of days after a date, or before just as easily.
    Want to know how many days are between two dates?  Type in the two dates
    and presto.  CALENDAR PROGRAM works with dates for any year between 1901
    and 1999.
    
    Note that this program is not a scheduler, and is NOT intended to keep
    track of your appointments.
    
    If you are faced with the problem of organizing and remembering many
    appointments and dates, TIKLER will be of great assistance.
    This menu-driven scheduler generates full or partial print lists and
    also lets you view events, past, present, or future, on the screen.
    Four distinct delete options are provided.  You can delete all events
    prior to a certain date, selectively delete one event at a time, delete
    a single event, or delete all the events.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1571.TXT

{% raw %}
```
Disk No: 1571                                                           
Disk Title: Calendar Program and Tikler                                 
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Calendar Program                                         
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Do you find yourself constantly flipping through a calendar to answer   
questions like, "How many days until . . .?" or "What was the number    
of days between this date and that?" or "How many days ago was this?"   
Or maybe you just want to have a yearly calendar, for any requested     
year, pop up on your screen.  CALENDAR PROGRAM is a quick, no nonsense  
way to help people whose lives are tied to dates.                       
                                                                        
If you need to see a full year of monthly calendars, tell the computer  
which year and touch the return key.  If you have 90 days in which you  
must do something, tell CALENDAR PROGRAM the starting date.  After a few
seconds, it will tell you the date the 90 days are up.  You can determin
the number of days after a date, or before just as easily.  Want to     
know how many days are between two dates?  Type in the two dates and    
presto.  CALENDAR PROGRAM works with dates for any year between 1901 and
1999.                                                                   
                                                                        
Note that this program is not a scheduler, and is NOT intended to keep  
track of your appointments.                                             
Program Title: Tikler                                                   
Author Version: 3.6                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
If you are faced with the problem of organizing and remembering many    
appointments and dates, TIKLER will be of great assistance.             
This menu-driven scheduler generates full or partial print lists and    
also lets you view events, past, present, or future, on the screen.  Fou
distinct delete options are provided.  You can delete all events prior t
a certain date, selectively delete one event at a time, delete a single 
event, or delete all the events.                                        
                                                                        
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
║         <<<<  Disk #1571  CALENDAR PROGRAM and TIKLER >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start CALENDAR program, type:  CAL (press enter)                     ║
║ To start TIKLER program, type:  TICKLER (press enter)                   ║
║                                                                         ║
║ To print TIKLER documentation, type:  COPY TIKLER.DOC PRN               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## TIKLER.DOC

{% raw %}
```

                              TIKLER
                            Version 3.6
                           by Dick Olsen

       Welcome  to  TIKLER.   TIKLER is an easy to use program that will
       help you keep track of upcoming events.  It  is  intended  to  be
       added  as the last item in your AutoExec.Bat file so that it will
       be run automatically each time you turn on your computer.  TIKLER
       displays the coming events for any number of days in the  future,
       or  it can display events that have occurred during any number of
       days  past  up  until  the  present.   It's  kind   of   a   note
       taker/reminder/calendar  program  that you should find useful, if
       not indispensable.  Unlike many commercial programs that  perform
       similar  functions,  TIKLER  was  designed  to  be quick, easy to
       learn, and free-form in its note entries. Chances  are  that  you
       won't need to refer to this document in order to make full use of
       TIKLER.   I suggest, however, that you read it in its entirety so
       that you'll have a fuller understanding of the program.   If  you
       have  a  color monitor, TIKLER displays today's events in yellow,
       tomorrow's events in light green, and all other events in cyan on
       your screen.  All functions only require a  single  keystroke  to
       activate.   TIKLER  creates  and  maintains  a  file on your disk
       called COMEVENT.  This is the default file that TIKLER  will  use
       each  time it is run. Once TIKLER is running, you can change to a
       different event  file  if  you  wish.  The  file  is  created  in
       ordinary  text mode so that it can be edited with almost any word
       processor program or editor, however, it is recommended that  you
       use  the built in editor to make any changes. If you must edit an
       event file with a word processing program,  BE  CAREFUL!  If  you
       have  too  few  lines  or too many lines, TIKLER will be confused
       when it reads the event file.

       When you first install and run TIKLER, you will be asked how many
       days  notice  you  would like. What you enter here determines the
       default number of days  that  TIKLER  will  look  ahead  to  find
       events.  A  good  number  seems  to be 14 days, but you can enter
       whatever you would like. Once you have specified  the  number  of
       days  notice  you  would  like,  TIKLER will create a file in the
       current directory called COMEVENT, which  is  the  default  event
       file.  The  first entry in this file is the number of days notice
       you have specified. This  number  can  be  changed  by  selecting
       number  five  in  the FLUSH EVENT mode. Each time you enter a new
       event, it will be added to the  COMEVENT  file,  or  to  whatever
       event  file  is  currently active. TIKLER, beginning with version
       3.0, also contains a simple 'what you see is what you get'  event
       editor.  This  built  in editor makes it easy and fast for you to
       change events or their dates.


       If you have used older versions of TIKLER......CONVERT!

       If  you  have  used a version of TIKLER prior to version 3.0, and
       you have an event archive file  (TIKARC.EVT)  created,  you  will
       need   to   convert   it   to the new format required by versions
       newer than 3.1. This is a  simple  process  since  a  program  is
       provided  on your TIKLER disk to do this for you.  The program is
       called CONVARC.EXE. Copy it from the  distribution  disk  to  the
       directory  on your hard disk where TIKLER is installed. Then type
       CONVARC and the program will take care of the conversion for you.
       Once the conversion has been made, don't do it  again!  No  other
       files should need to be changed.


       While TIKLER is running, the bottom two  lines  of  your  display
       will show eleven function keys. The operations performed by these
       function keys are as follows:


       F1 <EXIT>

       This key is pretty self explanatory. When pressed, it will return
       to DOS at whatever directory TIKLER is installed in. You can  run
       TIKLER  at  any time by changing to the directory where it is and
       typing TIKLER. A batch file could be created that would  do  this
       for you.

       F2 <add event>

       Press this key if you want to add an event to your  active  event
       file.   TIKLER will ask you first for the date of the event, then
       for the description  of  the  event.  You  can  enter  up  to  64
       characters  for the event description, but it's best to keep your
       entries as short as possible. The built in editor  will  truncate
       all  events  so that the date plus the event text all fits on one
       80 character line.  When entering the date of the event, you  can
       use several formats. Some examples are shown below:

                          8/8/87
                          08/08/87
                          8/8
                          8-8-1987
                          8-08/1987

       In the above  examples,  TIKLER  will  add  missing  digits,  and
       convert  the  "  -  "  characters to " / " characters so that for
       August 8, 1987, TIKLER would convert the date as entered  in  any
       of  the  above  formats  to  08/08/1987, if 1987 were the current
       year. If the event date is going to occur in  the  current  year,
       the  year  portion  of  the  date can be skipped by just pressing
       enter.  TIKLER will get the year from DOS and add it for you.  If
       you just press ENTER in response to  the  date  question,  TIKLER
       will get the current date from DOS.


       When adding events, there are two more special keys you should be
       aware of.  One of these is the DITTO key. When you  press  the  "
       key,  the  previously entered date or event string is copied. For
       example, suppose you had a meeting every  Monday  morning.  After
       you  add  this  event to TIKLER for the first time, simply change
       the date then press " when you are asked to enter the event.  The
       same  information  used in the previous event will be copied into
       the current event, saving you lots of typing. The ditto  function
       also  works on the date.  The other special key is the back-slash
       (\). If TIKLER finds this character anywhere in either your  date
       or your event entry, it will abort the saving of that event. When
       events  are listed on the screen, TIKLER will get the appropriate
       day of the week from DOS and print it next to the date.  As  each
       event is entered, it is sorted by date before being added to your
       event file. Beginning with version 1.80, the day of the week will
       also be added to your event date as it is saved  in  your  active
       event  file.  Compatibility  is  maintained  with  existing EVENT
       files.


       F3 <view past events>

       This  key  allows  you  to  temporarily change the NUMBER OF DAYS
       NOTICE to some number of days in the past. For  example,  suppose
       you  want  to  view  the  events  that occurred within the past 3
       weeks. When TIKLER asks for the number of days  past,  you  would
       enter 21. Now TIKLER will display events that happened during the
       three  weeks  preceding  TODAY, as well as TODAY'S events. If you
       have more events than TIKLER can fit on the screen,  TIKLER  will
       pause  and  wait for you to press ENTER and then it will show you
       the remaining events.

       F4 <list ALL events>

       When you press this key, all of the events from your ACTIVE EVENT
       FILE  will  be  listed.   TIKLER  will pause at the end of a full
       screen and wait for you to press the 'ENTER' key  before  showing
       you the rest of the events in your file.

       F5 <search for event>

       Pressing this key will cause the message 'enter KEYWORD:'  to  be
       displayed in a window on your screen. You can enter a single word
       or  phrase  that  you want TIKLER to look for. TIKLER will search
       your entire ACTIVE EVENT FILE for event descriptions that contain
       your  keyword  or  words.   Each  event containing the keyword or
       phrase will be displayed on your screen.


       F6 <flush & MORE>

       Pressing the F6 function key will present you with  six  choices.
       If  you  pick choice number 1, you will be asked for a date prior
       to which events are to be deleted. You can use any  of  the  date
       formats  specified  under the F2 key description.  After entering
       the date, TIKLER will ask you if you would like  to  ARCHIVE  the
       events that are to be deleted. If you answer "yes" or "y" to this
       question,  TIKLER will delete all events that occurred before the
       date you entered from your ACTIVE EVENT FILE file, but they  will
       be added to a file called TIKARC.EVT in case you need to refer to
       them at a later time. Answering "no" or "n" will cause the events
       to be deleted without archiving them. Selecting choice number two
       will  allow  you to selectively delete events one at a time. Each
       event will be displayed sequentially until you press "e" to  exit
       or  the  end  of  your ACTIVE EVENT FILE file is reached. As each
       event is displayed, you can press "a" to flush the event but  add
       it  to  your ARCHIVE, "f" to just flush it from your ACTIVE EVENT
       FILE file, or any other key to keep it.  You can press "e" at any
       time to stop flushing events. If you choose choice number  three,
       TIKLER will ask you for a date.  You can enter the date in any of
       the  formats described under the F2 key description.  TIKLER will
       then search your ACTIVE EVENT FILE file for events that  have  or
       will  occur on that date, and display them one at a time. As each
       event is displayed, you can enter "a" to flush the event but  add
       it  to your ARCHIVE, "f" to just flush the event, "e" to exit the
       flush mode, or any other key to continue searching for  the  date
       you  entered. Choice number four will give you the opportunity to
       delete ALL of the events in your ACTIVE EVENT FILE file.  If  you
       answer  "y" when asked "are you sure ?", TIKLER will give you the
       choice of adding the flushed events to  your  ARCHIVE  or  simply
       deleting  them  ALL. Any other response will get you out of flush
       mode. Choice number five really has nothing to do  with  flushing
       events.  This  choice  allows you to change the default NUMBER OF
       DAYS NOTICE that is used each time TIKLER is run. Just answer the
       question, and TIKLER will do the rest.

       Choice  number  six, CHANGE EVENT FILE, is something new that was
       added  at  version 3.0. Selecting it allows you to change from or
       to the default event file, COMEVENT, or to some other event  file
       that is compatible with TIKLER. If you enter the name of an event
       file that does not exist, TIKLER will give you the opportunity to
       create it. If TIKLER finds the event file you have specified, all
       succeeding activity will be done to that file. If you ARCHIVE any
       events  from  this  new  file,  they  will still be added to your
       TIKARC.EVT file.


       If  you  have  used  versions of TIKLER prior to version 3.0, you
       will find that the older TIKARC.EVT files are not compatible with
       those created by version 3.1. However, the TIKLER disk contains a
       conversion program called CONVARC.EXE which will convert your old
       TIKARC.EVT file to the new format required by version  3.1.  Once
       the  conversion  is  made, the TIKARC.EVT file can be edited just
       like  any  other  event  file  using  the  built  in  edit  mode.
       Therefore, it is suggested that you perform this conversion prior
       to running version 3.1. The ARCHIVE file created by TIKLER can be
       viewed  by  any  text  editor or word processing program.  If you
       decide to edit it, or any other TIKLER event  file,  BE  CAREFUL!
       Make sure you retain the same format as the original file.  Extra
       lines can cause strange looking displays! Instead of using a word
       processor or text editor, it is suggested  that  you  change  the
       ACTIVE  EVENT FILE file as described above, then use the built in
       editor to preserve compatibility. If you decide to  ARCHIVE  some
       of your events, TIKLER will create the ARCHIVE file for you.  The
       name  of the file created is TIKARC.EVT. All archived events will
       be added to this file regardless of what your ACTIVE  EVENT  FILE
       is.

       F7 <find a date>

       When  you press this key, you will be asked for the date that you
       want to find. TIKLER will search through your ACTIVE  EVENT  FILE
       file  and  display all events that match the date you've entered.
       You  can  enter  the  date  in  any  of  the  formats  previously
       described.


       F8 <print events>

       When you press this key, TIKLER will ask you if you want to print
       all events, or only those events within the number of days notice
       you  have  specified.  The  events from the ACTIVE EVENT FILE are
       printed in order of date. Don't forget that you can also  use the
       DOS  print  screen command. It will print whatever you see on the
       screen by pressing SHIFT-PRTSC.

       F9 <change number of days notice>

       This key will allow you to change how far  ahead  (or  back)  you
       want  TIKLER to look for events. The change is only temporary and
       will not be saved to your file. You may  want  to  view  all  the
       events that are scheduled for the next month (meetings, birthdays
       etc.).  Just press the F9 key and enter 30 for the number of days
       notice. TIKLER will immediately look for the events for the  next
       30 days and display them for you. TIKLER can also show you events
       that  occurred  before  the  current  date by entering a negative
       number for the number of days notice. For example, if you were to
       enter '-7', TIKLER would find  and  display  the  events  of  the
       previous  week.  You can change the number of days notice as many
       times as you wish, but TIKLER will always use the  default  value
       from  your  ACTIVE  EVENT FILE file each time you run it.  If you
       want to change the default number of days  notice,  use  F6,  the
       flush mode key.


       F10 <list again>

       This key will list the events again, based on the current  number
       of days notice.


       ALT-E <EDIT MODE>

       The built in editor is a new feature  added  at  the  release  of
       version  3.0.  It  is  something  many people have asked for. The
       editor  is  a  WYSIWYG  (what-you-see-is-what-you-get)  type   of
       editor.  This  means  that  once you have an event edited to your
       satisfaction on the screen, it will be saved to your ACTIVE EVENT
       FILE  just  as  it appears on the screen. TIKLER will recalculate
       the day of the week for you if you change the date.

       To invoke the editor, just press ALT-E (hold  down  the  ALT  key
       while you press the E key). TIKLER will then enter the EDIT mode,
       and  display  a screen full of events from the event file you are
       currently using.  A hilite bar will appear  at  the  first  event
       listed  on your screen. This bar is used to select the event that
       you want to edit. Use the UP or DOWN arrow keys to move  the  bar
       up  or  down one event at a time, or you can use the PGUP or PGDN
       keys  to  move a page at a time through your event file. The HOME
       key will move the bar to the beginning of the file, and  the  END
       key  will  position  it at the end of the event file. You can use
       the TAB and BACKTAB keys to move the  cursor  right  or  left  10
       characters  at  a  time,  or use the left and right arrow keys to
       move the cursor right or left one character position.

       Edit  mode  can be aborted without saving the changes made during
       the CURRENT EDIT SESSION by pressing ALT-A.

       The bottom three lines of your  screen  will  change  to  display
       what  keys  perform  what  while in edit mode. When you exit edit
       mode, these  lines  will  be  replaced  by  the  general  command
       function  keys. After you have positioned the hilite bar over the
       event you want to edit, use the  left  or  right  arrow  keys  to
       position the cursor where your change is to be made. Pressing the
       DEL  key  will delete the character at the cursor, while pressing
       any other key will cause that character to  be  inserted  at  the
       cursor  position.   You  cannot delete any characters in the date
       field or the day-of-week field because  this  will  mess  up  the
       event  file.   You  can  however,  change  the  date, but not the
       day-of-week.  If the hilite bar is positioned over an  event  you
       want  to  delete,  pressing  ALT-D  will  delete  it.  ALT-I will
       increment the year of the event by  one.  As  mentioned  earlier,
       TIKLER will compute a new day-of-the-week for you if you change a
       date.

       When you have finished editing all of  the  events  you  want  to
       change, press ESC to exit the EDIT MODE, and your event file will
       be  updated to reflect the changes you have made. You can edit as
       many events as you like while in edit mode, since all changes are
       made to your event file at the end of the edit session.



       Installing TIKLER

       To install TIKLER on your computer, first change to the directory
       in  which  you  want  it  installed. Then simply copy it from the
       floppy disk to the current directory. Once you've copied it, just
       type 'TIKLER', and your COMEVENT file will  be  created,  with  a
       default number of days notice set for whatever number of days you
       entered  when  asked  to  do so. TIKLER will run, and display the
       message 'there are no coming events...'. At this point,  you  can
       begin entering your events with the F2 key. If you  have  used  a
       version  of  TIKLER  prior  to 3.0, you will need to convert your
       ARCHIVE FILE  (TIKARC.EVT)  to  the  newer  format.  Instructions
       describing how to do this appear earlier in this document.

       To  make TIKLER run each time you turn on your computer, just add
       the TIKLER command to your  autoexec.bat  file,  similar  to  the
       example shown below:


                CD\<directory where TIKLER is installed>
                TIKLER

       At  this  time,  TIKLER  is  limited to 600 events. The number of
       events you have in your ACTIVE EVENT FILE file  is  displayed  on
       the  top  line  of  the  screen and is updated anytime you add or
       delete an event. If you exceed 590 events, TIKLER will remind you
       that you are approaching the maximum of 600  events.  You  should
       delete events that are no longer needed. This limit of 600 events
       is  an  arbitrary  number that seems to satisfy the needs of most
       people. I chose this value  in  order  to  save  disk  space  and
       optimize  speed. Although TIKLER runs quite fast with 600 events,
       the fewer you have, the faster it will run.

       TIKLER defaults to displaying the events two days previous to the
       current  date.  If you would prefer, you can have it display only
       the events starting with the current day. To do this, type:

                      TIKLER -0

       when starting the program. You can also substitute -1 for the  -0
       to display events starting with the previous one day.

       A few extra words....

       TIKLER  is distributed under the concept of SHAREWARE. Under this
       concept, you are free to use, copy and  distribute  this  program
       without charge. You are not permitted to sell it either by itself
       or  as part of a package. The author retains all of the rights to
       the program. The idea of SHAREWARE is a good one. It helps us all
       to obtain some really good software at a price we can all afford.
       If the SHAREWARE concept is going to continue, we need to support
       the efforts of the software authors. Most of these  people  would
       gladly  accept  a  small  donation as a token of appreciation for
       their work. These donations don't even come close to compensating
       an author  for  the  many  hours  of  work  his  or  her  program
       represents, but it sure makes them feel more inclined to continue
       the  SHAREWARE  practice.  All  of  us  benefit then!

       If you find TIKLER to be as handy and helpful as I  have,  please
       register your copy of the program. To register, just fill out the
       registration  form  on  the  next page, and send it together with
       your  registration fee of $10.00 (cash,  check  or  money  order)
       to the address shown. Registered  users  will  receive,  free  of
       charge,  the  latest version of TIKLER if the one you have is not
       recent.  If you pass this program on to others, either on  floppy
       disk  or  through  bulletin boards, please be sure to attach this
       document.


                Please address all correspondence to:

                 Richard Olsen
                 68 Hartwell Ave.
                 Littleton, Mass. 01460

                    Tikler v3.6 REGISTRATION FORM

       Dear Dick,

       Enclosed please find my check or money order for $10.00. Please
       register me as a TIKLER user and send me the latest version if
       the version I currently have is not the latest.

       Thanks!


       YOUR NAME________________________________________________

       STREET ADDRESS___________________________________________

       CITY, STATE, ZIP_________________________________________

       COUNTRY__________________________________________________

       TIKLER Version you have__________________________________

       WHERE DID YOU GET TIKLER?________________________________

       COMMENTS_________________________________________________

       _________________________________________________________

       _________________________________________________________






                    Mail To:

                    Richard Olsen
                    68 Hartwell Ave.
                    Littleton, MA  01460


Other programs available from the author:

             BASSTOUR......A bass fishing tournament game. Comes with
                           six different areas to fish. You control a
                           fully rigged bass boat with on-screen contour
                           maps, LCD graph, over 2300 lure/color choices.
                           Superb graphics in EGA. Also runs on Hercules
                           and CGA systems.

             LAKES #1......A collection of 7 new fishing areas you can
                           add to BASSTOUR. Installation instructions
                           are included.

             LAKES #2......Another  seven  fishing  areas  to  use  with
                           BASSTOUR.  Use  of both LAKES #1 and LAKES #2
                           will bring the total number of fishing  areas
                           to 20. Includes installation instructions.

             FISHBASE ][...A fisherman's data base/statistics program
                           for color or monochrome systems.

             BASSTIPS......A great way for the fisherman  to  start  his
                           day! Over 100 fishing tips that pop onto your
               NEW!!       screen.  You can also add your own tips. More
                           tips   are added all the time.  Color or Mono
                           systems.

       Available   for  $10  each.  Plus  $2.00  to  cover  postage  and
       materials. Please specify what you want by  circling  the  titles
       and send this form to the address shown below.

       Mail TO:

       Richard Olsen
       68 Hartwell Ave.
       Littleton, MA.  01460












```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1571

     Volume in drive A has no label
     Directory of A:\

    TIKLER   DOC     25059   2-21-90   6:37p
    TIKLER   EXE     41088   2-21-90   6:29p
    CONVARC  EXE      5056   7-24-89   9:50a
    CAL      EXE     71265   3-13-89   6:49p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       619   7-09-90   3:08a
    FILE1571 TXT      3257   7-10-90   2:18p
            7 file(s)     146382 bytes
                           11776 bytes free
