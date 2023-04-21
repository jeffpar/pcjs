---
layout: page
title: "PC-SIG Diskette Library (Disk #1626)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1626/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1626"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "YEAR PLANNER"

    YEAR PLANNER will help you and your staff organize your personal and
    business time month to month, or throughout the year. It lets you create
    your own wall planners which are laid out like the familiar "write-on,
    wipe-off" wall planner calender system. The system allows you to write
    deadlines and appointments and other important information in the "day
    blocks" of monthly calendars of your choice.
    
    The large standard calendar format lets you quickly update and erase
    appointments.  Moving from date to date takes only seconds. You can list
    your appointments by the hour, or use a special wrap-around feature to
    put major task descriptions and deadlines within each day block.
    
    An overlay template lets you enter similar messages in multiple day
    blocks.  You can even get an on-screen year summary to see the whole
    year at a glance.  The large calendar printouts already have major
    holidays built into each month.  Your own important dates may be stored
    in a file for automatic insertion into next year's file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CALENDAR.DOC

{% raw %}
```




Y E A R    P L A N N E R      version 2.90
______________________________________________________________________________
  








































FLOWSOFT custom programming
William A. Anderson
Owner & Author
1166 Franklin Rd Suite A2
Marietta, Ga. 30067
404-955-5461




C O N T E N T S
______________________________________________________________________________

1    Introduction                                      Page

     1.1  Program Description & Requirements........   1  

2    Getting Started 

     2.1  System Installation.......................   2   

     2.2  Starting the Program......................   3

     2.3  Main Menu Explanation.....................   4

     2.4  Initializing a New Year...................   5   

     2.5  Setup - Printer, Color, Pause Time........   6-7

3    Other Functions                    

     3.1  Working on the Calendar...................   8-9

     3.2  The Overlay Template......................   10

     3.3  Jumping to a Specified Day................   11

     3.4  Function Keys Explained...................   12

     3.5  Onscreen Summary..........................   13

     3.6  Printing the Wall Planner.................   14

     3.7  Add/Update Important Dates................   15

     3.8  Insert Important Dates into Year..........   15

     3.9  The Notepad...............................   16

     3.10 Month at a Glance.........................   16

4    Registration

     4.1  Year Planner Software License Agreement...   17

     4.2  Other FLOWSOFT Products...................   18

     4.3  Registration Form and Support Info........   19





1.1  Program Description


Year  Planner is an organizing tool which mimics the familiar  "write-
on,  wipe-off"  wall planner calendar system most  businesses  use  to 
schedule  important  events.  You  are  allowed  to  write  deadlines, 
appointments, and other important information into "day blocks"  which 
can  later  be  printed  out in  a  large  standard  calendar  format. 
Information can be easily updated or erased altogether and  reprinted. 
Features include an overlay template to apply similar messages in many 
"day  blocks",  a  pop-up notepad, a month at  a  glance  feature,  an 
onscreen year summary so you can see the whole year at a glance, large 
calendar printouts, and all major holidays already built in.



>>>> System Requirements:

*    512K of main memory.
*    One 5 1/4 "  floppy drive.
*    One hard disk drive. (optional)
*    IBM PC or compatible.
*    files=40 and buffers=40 in CONFIG.SYS file.
































                                                   Page 1




2.1  System Installation

Floppy Drive System:

To  install  the year planner program on a floppy drive  system,  just 
copy  the CALENDAR.EXE, UTILITY.EXE, SETUP.EXE, and  BRUN30.EXE  files 
over  to a blank, formatted floppy diskette. You will have  more  than 
enough  space on the floppy diskette to hold the program,  the  yearly 
data files, and the printer control codes setup file.


Hard Drive System:

To  install the year planner program on a hard disk, you should  first 
create  a  new  subdirectory  on  the hard  disk  and  then  copy  the  
CALENDAR.EXE,  UTILITY.EXE,  SETUP.EXE, and BRUN30.EXE  files  to  the 
newly   created   subdirectory.  The  commands  to  create   the   new 
subdirectory are:


     C>cd \                   goes to the root directory
     C>md calendar            makes a new subdirectory called calendar
     C>cd \calendar           goes to the calendar subdirectory

     (C> is the DOS prompt and is not part of the command)


Once  you  have  created the new subdirectory,  you  should  copy  the 
calendar.exe and setup.exe program files to the subdirectory. Use  the 
DOS  copy  command  to  do this. Make sure you  are  in  the  calendar 
subdirectory  before  issuing  this  command.  The  command  has   the 
following format:

     C>copy d:\path\calendar

Where  d:\path\  is the pathname for the location of the  calendar.exe 
file.  For example,  if the file was in the root directory on drive  A 
then the copy commands would look like this: 

     C>copy A:calendar.exe
     C>copy A:utility.exe
     C>copy A:setup.exe
     C>copy A:brun30.exe

As  another example,  if the calendar.exe file were in a  subdirectory 
called XTALK on drive C then the commands would look like this:

     C>copy C:\xtalk\calendar.exe
     C>copy C:\xtalk\utility.exe
     C>copy C:\xtalk\setup.exe
     C>copy C:\xtalk\brun30.exe





                                                   Page 2





2.2  Starting the Program



Floppy Drive System:

1) Insert the floppy diskette created in section 2.1 into drive A.

2) Make sure you have the A> prompt.

3) Type CALENDAR and then press 'enter'.

4) The main menu will appear.






Hard Drive System:

1) Go to the subdirectory created is section 2.1: C>cd \calendar

2) Type CALENDAR and then press 'enter'.

3) The main menu will appear.




Note: In the current version, you have the ability to create more than 
one calendar file. You can enter the calendar file name on the command 
line  when you start the program (CALENDAR filename) or, if you  don't 
enter  it on the command line, you will be prompted by the program  to 
enter a calendar file name.




















                                                   Page 3





2.3  Main Menu Explanation

              ---------------------------------------------------
              |       Wall Planner v2.90 Main Menu              |
              |                                                 |
              |       W) Work on Calendar.                      |
              |       G) Month at a Glance.                     |
              |       D) Directory of Calendars.                |
              |       C) Change Clendars.                       |
              |       U) Utilities.                             |
              |       X) Exit to DOS.                           |
              |                                                 |
              |       Enter Option...                           |
              |                                                 |
              ---------------------------------------------------
              |       If you find this Wall Planner useful,     |
              |       please register for support and updates   |
              |       by sending $15 to the address below.      |
              |       Thank You!                                |
              |                                                 |
              |       FLOWSOFT custom programming.              |
              |       1166 Franklin Rd Suite A2                 |
              |       Marietta, Ga. 30067                       |
              |       404-955-5461                              |
              ---------------------------------------------------


To  use the year planner menu system simply press the letter  next  to 
the option you want to choose.


























                                                   Page 4





2.4  Initializing a New Year


Before  doing  anything such as entering appointments  or  printing  a 
calendar, you must first initialize the calendar file for the year you 
would like to work with. To do this, choose option U on the main  menu 
to go to the utility menu:

              ---------------------------------------------------
              |    Wall Planner v2.90 Utility Menu              |
              |                                                 |
              |       O) Onscreen Summary.                      |
              |       P) Print Wall Planner.                    |
              |       I) Initialize file for a New Year.        |
              |       A) Add/Update Important Dates.            |
              |       D) Insert Important Dates into Year.      |
              |       S) Color & Printer Control Codes Setup.   |
              |       M) Main Menu.                             |
              |                                                 |
              |       Enter Option...                           |
              |                                                 |
              ---------------------------------------------------


Then  choose option I on the utility menu. After entering the name  of 
the  file  that  you want to initialize, you will  get  the  following 
prompt:

         Enter year (YY): ..

         Esc to Exit.


After  you enter the year, the calendar file will be initialized.  All 
"day  blocks"  will be set equal to spaces. After the  file  has  been 
initialized, you will get the following prompt:



         Do you want to insert Holidays in calendar ? (Y/N)...


If  you  answer  Y  to  the  prompt,   all  major  holidays  will   be 
automatically  inserted  in  the  last line of  the  appropriate  "day 
block".  If you answer N to the prompt,  all "day blocks" will  remain 
blank.


Note  that all year's are supported up to year 1999. And holidays  are 
included only for years 1987 thru 1990. Future holidays and years will 
be updated on a yearly basis or as needed.




                                                   Page 5





2.5  Setup - Printer, Color, Pause Time.


The  setup  routine  is option S on the utility  menu.  The  following 
printer setup menu will appear:


                  ----------------------------------------
                  |                                      |
                  |   LPT1 Printer Setup Menu.           |
                  |                                      |
                  |   E) Epson and Compatibles.          |
                  |   N) NEC.                            |
                  |   O) Okidata.                        |
                  |   T) Toshiba.                        |
                  |   R) Radio Shack.                    |
                  |   I) IBM.                            |
                  |   C) Custom Printer Setup.           |
                  |   M) Return to Menu (without saving).|
                  |                                      |
                  |                                      |
                  |   Enter Option...                    |
                  |                                      |
                  ----------------------------------------


If  your  printer is listed on the menu above, then simply  press  the 
letter  corresponding to your printer. Otherwise, press C  for  custom 
printer setup. Whether you choose a specific printer or custom  setup, 
the next screen you get will be the custom printer setup screen:

-------------------------------------------------------------------------
|      Enter the following control codes for your printer. There        |
|      are 10 spaces available for each set of codes. Usually,          |
|      just 1 or 2 codes are needed for each printer mode, so just      |
|      enter the values necessary starting from the left, leaving       |
|      the unused values blank (or 0). All numbers are in decimal:      |
|-----------------------------------------------------------------------|
|                                                                       |
| 8 lines per inch    :  27,  48, ..., ..., ..., ..., ..., ..., ..., ...|
|                                                                       |
| 6 lines per inch    :  27,  50, ..., ..., ..., ..., ..., ..., ..., ...|
|                                                                       |
| Condensed (16.7 cpi):  15, ..., ..., ..., ..., ..., ..., ..., ..., ...|
|                                                                       |
| Regular (10 cpi)    :  18, ..., ..., ..., ..., ..., ..., ..., ..., ...|
|                                                                       |
|-----------------------------------------------------------------------|
|                                                                       |
| Is everything correct ? (Y/N)...                                      |
|                                              Press F10 when finished. |
-------------------------------------------------------------------------



                                                   Page 6




2.5  (continued)

If you chose a specific printer on the first menu, then the codes  for 
that  printer  will appear on the screen above; otherwise,  the  codes 
will be blank. If you need to enter codes for your printer, look  them 
up  in your printer manual and enter them on the screen  above.  Press 
F10  when you have entered the last code. The codes will be stored  on 
disk  and you will proceed to the next screen. The decimal  codes  can 
usually be found in a table in the back of your printer manual or in a 
section that describes the different printer modes and tells you  what 
codes to send from software to put your printer into that mode.


Color Setup:

After  you are finished entering the printer control codes,  you  will 
get the following color setup screen:

                  ----------------------------------------
                  |   Color Setup Screen.                |
                  |                                      |
                  |   M) Monochrome Mode.                |
                  |   F) Change Foreground Color.        |
                  |   B) Change Background Color.        |
                  |   D) Change Border Color.            |
                  |   S) Save Colors.                    |
                  |                                      |
                  |   Enter Option...                    |
                  |                                      |
                  ----------------------------------------

To  change  the  screen  colors,  simply  press  the  appropriate  key 
corresponding  to the area that you want to change. Eight  colors  are 
available  for each area of the screen. As you press F,  for  example, 
the foreground color will change each time the F key is pressed.  Note 
that the foreground color cannot be the same as the background  color. 
If you are using a monochrome monitor, just press M on the menu above. 
When  the  colors are set the way you want them, press S to  save  the 
color setup. 


Error Message Pause Time:

The next screen you will get is:

-------------------------------------------------------------------
|    Enter the number of seconds you would like error messages    |
|   to be displayed on the screen (1-10 secs): ..                 |
-------------------------------------------------------------------

To finish the setup routine, just enter the number of seconds that you 
want all error messages to be displayed on the screen. 




                                                   Page 7





3.1  Working on the Calendar


This  option  allows you to enter appointments,  schedules,  important 
dates,  etc into "day blocks". It will also allow you to  enter  notes 
that are associated with each day block. Eight "day blocks" at a  time 
will be displayed on the screen. The screen window looks like this:

-----------------------------------------------------------------------------
|F ............... |S ............... |S ............... |M ............... |
|r ............... |a ............... |u ............... |o ............... |
|i ............... |t ............... |n ............... |n ............... |
|  ............... |  ............... |  ............... |  ............... |
|A ............... |A ............... |A ............... |A ............... |
|u ............... |u ............... |u ............... |u ............... |
|g ............... |g ............... |g ............... |g ............... |
|  ............... |  ............... |  ............... |  ............... |
|2 ............... |2 ............... |3 ............... |3 ............... |
|8 ............... |9 ............... |0 ............... |1 ............... |
|---------------------------------------------------------------------------|
|M ............... |T ............... |W ............... |                  |
|o ............... |u ............... |e ............... |                  |
|n ............... |e ............... |d ............... |                  |
|  ............... |  ............... |  ............... |                  |
|S ............... |S ............... |S ............... |                  |
|e ............... |e ............... |e ............... |                  |
|p ............... |p ............... |p ............... |                  |
|  ............... |  ............... |  ............... |                  |
|2 ............... |2 ............... |3 ............... |                  |
|8 ............... |9 ............... |0 ............... |                  |
-----------------------------------------------------------------------------
F1-ClrLine F2-Jump  F3-ClrBox F5-Ins Line  F6-Del Line F7-Cut Blk  F8-Paste
F9-Notepad F10-Save PgUp/PgDn Ctrl Left/Right Esc-Exit Ctrl W-Wrap Alt H-Help

The  "day  block" that you are allowed to change is always the  second 
one on the top row (Aug 29 above). In standard format, the entire year 
is laid out like this:

Jan  1 ............................. 31
Feb  1 ......................... 28
Mar  1 ............................. 31
Apr  1 ........................... 30
May  1 ............................. 31
Jun  1 ........................... 30
Jul  1 ............................. 31
Aug  1 ............................. 31
Sep  1 ........................... 30
Oct  1 ............................. 31
Nov  1 ........................... 30
Dec  1 ............................. 31





                                                   Page 8





3.1  (continued)


Use the PgUp and PgDn keys to move up and down between months and  use 
the Ctrl Left Arrow and Ctrl Right Arrow cursor movement keys to  move 
left  and right between days of a month. With all movement keys,  make 
sure you are moving to a valid day. For example, you cannot move up to 
the 30th day in February.





Entering Appointments:


To enter an appointment or other information just type the information 
into  the appropriate "day block" and then save it.  A "day block"  is 
saved by pressing the F10 function key or by moving on to another "day 
block".  Make  sure  all "day blocks" are saved before  pressing  Esc. 
Pressing  Esc  just returns back to the main menu  without  doing  any 
saving first.



Refer  to sections 3.2, 3.3, 3.4, and 3.9 for more  information  about 
working on a calendar.




























                                                   Page 9





3.2  The Overlay Template

The overlay template is used to apply the same information into several
"day  blocks"  without having to retype it every time.  There are  two 
functions  involved:  Ctrl E will allow you to edit the  template  and 
Ctrl  A  will  allow  you to apply the template to  the  current  "day 
block".

Editing the template:

While  working on a calendar,  press Ctrl E and the  following  screen 
will appear:

                   --------------------
                   |T ............... |
                   |E ............... |
                   |M --Vacation--... |
                   |P ............... |
                   |L ............... |
                   |A ............... |
                   |T ............... |
                   |E ............... |
                   |  ............... |
                   |  ............... |
                   --------------------


                   Press F10 when finished editing template.


Just  type  in the information you want the template to hold  for  you 
until you apply the template. For example you could put "--Vacation--"
in  the template and then apply the template to the days that you will 
be on vacation.




Applying the template:

To apply the template, you should first go to the day that you want to 
apply the template to and then simply press Ctrl A.  The template will 
be applied to the current day.  Note that lines which were not entered 
in the template will not erase information that was in the "day block" 
before you applied the template.  To apply the template to another day 
just move to another day and press Ctrl A again.









                                                   Page 10





3.3  Jumping to a Specified Day


While  working  on  the calendar,  you may want to move quickly  to  a 
specific day of the year.  To do so press the F2 function key and  you 
will be prompted to enter a day in the form MMDD:




         Enter Date to Jump to (MMDD): ....

         Esc to Exit.




After  a valid month and day are entered,  you will return back to the 
main  working  screen.  The  day that you jumped to will  now  be  the 
current day. Make sure days are entered in the form MMDD. For example, 
March 2 should be entered like this: 0302.


































                                                   Page 11





3.4  Function Keys Explained


On the bottom of the main working screen,  you will see displayed  the 
following function key abbreviations:

F1-ClrLine F2-Jump  F3-ClrBox F5-Ins Line  F6-Del Line F7-Cut Blk  F8-Paste
F9-Notepad F10-Save PgUp/PgDn Ctrl Left/Right Esc-Exit Ctrl W-Wrap Alt H-Help

These keys are explained below:

Function Key             Explanation
------------------  ------------------------------------------------------
Alt H               Displays a pop-up help screen showing all function
                    key definitions.
F1                  This key will clear the current line that you are
                    on within a "day box".
F2                  Jump to a specific day. Refer to section 3.3
F3                  This key will blank out the entire "day box".
F5                  Insert a line ate the cursor.
F6                  Deletes the line at the cursor.
F7                  Copies the current "day block" into the 
                    cut & paste buffer.
F8                  Copies the cut & paste buffer to the current
                    day block.                  
F9                  Displays pop-up notepad.
F10                 This key will save the current "day box".
PgUp                Moves up one month. With all movement keys,
                    make sure you are moving to a valid day. For
                    example, you cannot move up to the 30th day
                    in February.
PgDn                Moves down one month.
Ctrl Left Arrow     Moves left one day.     
Ctrl Right Arrow    Moves right one day.
Del                 Deletes the one character at the cursor location.
Ins                 Inserts one character at the cursor location.
Esc                 Exits and returns back to the main menu. No saves
                    are done first.
Ctrl A              Apply the template. Refer to section 3.2
Ctrl E              Edit the template. Refer to section 3.2
Ctrl S              Switches between the standard display mode and
                    an optional display mode where you see 8
                    contiguous days on the screen at a time.
Ctrl W              Toggles word wrap on and off. If word wrap is on,
                    then words will automatically wrap to the next
                    line when entering day blocks.









                                                   Page 12





3.5  Onscreen Summary


This  option allows you to look at the whole year at a glance.  Choose 
option O on the utility menu and a summary like this one will appear:


                        1                   2                   3
      1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1    1987
Jan  |X| | | | | | | | | | | | | | | | | |X| | | | | | | | | | | | |
     ---------------------------------------------------------------
Feb  | | | | | | | | | | | |X| |X| |X| | | | | | | | | | | | | | | |
     ---------------------------------------------------------------
Mar  | |X| |X| | | | | | | | | | | | |X| | | | | | | | | | | | | | |
     ---------------------------------------------------------------
Apr  | | | | | | | | | | | |X| | | | |X| |X| | | | | | | | | | | | |
     ---------------------------------------------------------------
May  | | | | | | | | | |X| | | | | | | | | | | | | | |X| | | | | | |
     ---------------------------------------------------------------
Jun  | | | | | | | | | | | | | |X| | | | | | |X| | | | | | | | | | |
     ---------------------------------------------------------------
Jul  | | | |X| | | | | | | | | | | | | | | | | | | | | | | | | | | |
     ---------------------------------------------------------------
Aug  | | | | | | | | | | | | | | | | | | | | | | | | | | | | |X|X|X|
     ---------------------------------------------------------------
Sep  | | | | | |X|X| | | | | | | | | | | | | | | | |X| | |X| | | | |
     ---------------------------------------------------------------
Oct  | | |X| | | | | | | | |X| | | |X| | | | | | | | | | | | | | |X|
     ---------------------------------------------------------------
Nov  | | |X| | | | | | | |X| | | | | | | |X| | | |X| | |X| | | | | |
     ---------------------------------------------------------------
Dec  | | | | | | | | | | | | | | | |X| | | | | | | | |X| | | | | | |
Press any key to return to main menu...




The  X's appearing in the onscreen yearly summary above mean that  you 
have entered something for that day or that day is a holiday.
















                                                   Page 13





3.6  Printing the Wall Planner


This  option  allows  you to print a calendar for a range  of  months. 
Choose  option  P on the utility menu and you will get  the  following 
prompt:


              ---------------------------------------------------
              |                                                 |
              |    1987                                         |
              |                                                 |
              |    Enter Month (MM)  From: ..                   |
              |                                                 |
              |                        To: ..                   |
              |                                                 |
              ---------------------------------------------------


Just enter the range of months you want to print calendars for.  After 
the  month ranges have been entered, you will be asked whether or  not 
you want to print in condensed mode, whether or not you want to  print 
using  graphics  characters,  whether or not you  want  to  print  the 
notepad  text, and you will be asked how many times you want to  print 
the calendar.

Please  be sure you have entered your printer control  codes  (section 
2.5)  correctly  before  executing  this  routine.  If  you  print  in 
condensed  mode,  the  calendar will be printed in 8.5  x  11  format, 
otherwise  it will be printed in 14 x 11 format. Both  formats  should 
print in 8 lines per inch mode.

Note (8 lpi): If your printout is longer than one 11" page, then  your 
8 lines per inch control codes are not working or you reset or  turned 
off your printer after the codes were sent to the printer.

Note (graphics): In order to print graphics, your printer must be able 
to accept graphics characters. Refer to the DOS manual and look  under 
the "graphics" command.
















                                                   Page 14




3.7  Add/Update Important Dates


Option  A  on  the  utility menu allows you  to  maintain  a  file  of 
important  dates  such  as birthdays and anniversaries  which  can  be 
inserted into your calendar files every year. These dates should  fall 
on  the same day every year. Choose option A, and the  following  menu 
will appear:


                   -----------------------------------------
                   |                                       |
                   |    Date (MMDD)  Description           |
                   |                                       |
                   |                                       |
                   |                                       |
                   |                                       |
                   |                                       |
                   |       0716      Billy's               |
                   |       1030      Tom's                 |
                   |       1203      Jessica's             |
                   |                                       |
                   |                                       |
                   |                                       |
                   |                                       |
                   -----------------------------------------


     [F1]-ClrFld    [Up]-Up 1 line      [PgUp]-Up 1 page    [F10]-Save
     [Esc]-Exit     [Down]-Down 1 line  [PgDn]-Down 1 page


Simply  enter  the important dates, then press F10 and Esc.  The  file 
will be sorted by date, saved to disk, and you will return back to the 
utility  menu. Use the up, down, PgUp, and PgDn keys to scroll  within 
the list.






3.8  Insert Important Dates into Year


This is option D on the utility menu. It will simply insert the  dates 
in the important date file into the current calendar year file.









                                                   Page 15




3.9  The Notepad

While  working  on a calendar (option W on main menu),  you  have  the 
ability  to  enter  notes  in a pop-up  notepad  in  addition  to  the 
information you enter in the "day blocks". Just press the F9  function 
key. An asterisk (*) will be displayed in the lower right hand  corner 
of "day blocks" that have notes attached. 

The  notes  may   be printed  out when the  calendar  is  printed.  On 
printouts, the notes follow the month that they are associated with.



3.10  Month at a Glance

This  is  option G on the main menu. It allows you to  see  an  entire 
month  on  the screen. Days with information in the  "day  block"  are 
highlighted.  Days  with information in the notepad are  blinking.  To 
display  a  "day  block" or natepad, simply move  the  cursor  to  the 
appropriate day and press either the F1 or F2 function keys. The month 
at a glance screen looks like this:

                 ------------------------------------
                 |                                  |
                 |    O C T O B E R      1989       |
                 |                                  |
                 | S    M    T    W    T    F    S  |
                 | 1    2    3    4    5    6    7  |
                 |                                  |
                 | 8    9    10   11   12   13   14 |
                 |                                  |
                 | 15   16   17   18   19   20   21 |
                 |                                  |
                 | 22   23   24   25   26   27   28 |
                 |                                  |
                 | 29   30   31                     |
                 |                                  |
                 |                                  |
                 |                                  |
                 ------------------------------------

                 Highlight: Something in day block.
                 Blinking: Something in notepad.

    Ctrl Right/Left-Change Month       Right/Left/Up/Down-Change Day
    F1-Display Day Block    F2-Display Notepad    Esc-Return To Menu










                                                   Page 16



4.1  Year Planner Software License Agreement

1)  License:  You  have the non-exclusive right to  use  the  enclosed 
program. If you find this program to be useful, then you must register 
for support by sending $15 to FLOWSOFT custom programming.

2)   Copyright:  This  program  and  its  related  documentation   are 
copyrighted.  You may copy the program and the  related  documentation 
for distribution to friends via diskette or electronic bulletin  board 
service. 

3) Term: This license is in effect until terminated. You may terminate 
it by destroying the program and documentation and all copies thereof. 
This  license will also terminate if you fail to comply with any  term 
or condition of this agreement. 

4) Warranty: If within thirty (30) calendar days of purchase you  find 
that  this  product does not perform in accordance  to  our  (Flowsoft 
custom  programming) claims, return it to the place of  purchase,  and 
request  a  refund  of the purchase price less  a  $15  handling  fee. 
Flowsoft  custom programming will honor this warranty if the  purchase 
is  made directly from Flowsoft custom programming. Retail stores  and 
other distributors are not obligated to be bound by the terms of  this 
warranty.

5)  Limitation of Liability: Neither Flowsoft custom  programming  nor 
anyone  else  who has been involved in the  creation,  production,  or 
delivery  of  this program shall be liable for any  direct,  indirect, 
consequential,  or  incidental  damages arising out of  the  use,  the 
results  of, or inability to use this product even if Flowsoft  custom 
programming  has  been advised of the possibility of such  damages  or 
claim.  Some  states  do  not allow the  exclusion  or  limitation  of 
liability  for  consequential  or incidental  damages,  so  the  above 
limitation may not apply to you.

6)  Update  Policy:  In order to be able to  obtain  updates  to  this 
program,  the licensee must complete and return the registration  form 
in  section  4.2. If the registration form has not  been  received  by 
Flowsoft  custom programming, Flowsoft custom programming is under  no 
obligation  to make available to you any updates even though you  have 
made payment of the applicable update fee.

7)  Misc: This license agreement shall be governed by the laws of  the 
State  of  Georgia and shall inure to the benefit of  Flowsoft  custom 
programming,  its  successors,  administrators,  owners,  heirs,   and 
assigns.

8) Acknowledgment: You acknowledge that you have read this  agreement, 
understand it, and agree to be bound by its terms and conditions.  You 
also agree that this agreement is the complete and exclusive statement 
between the parties and supersedes all proposals or prior  agreements, 
verbal  or written, and any other communications between  the  parties 
relating to the subject matter of this agreement.




                                                   Page 17





4.2  Other FLOWSOFT Products


Flowmail 6000   (Major Features at a Minor Price!)

Flowmail  6000  is the unique mailing system that does it all  and  is 
easy  to use. If you use mailing lists, if you do any  bulk  mailings, 
whatever  your mailing needs, Flowmail 6000 is loaded with options  to 
meet those needs... create multiple files, great data entry  features, 
sort  in  any  order (including bulk mail), print labels  1-4  up,  CR 
Encoding,  global  updating, importing, eliminate  dups,  mail  merge, 
convert to upper/lower case, and much more!





CR Encoding  (Save postage by CR encoding your mailing list!)

CR  Encoding  is a utility that will perform  the  necessary  matching 
between   your   mailing  list and the  US   Postal   Service's   CRIS 
(Carrier   Route  Insertion System) files. When a  correct  match   is 
found,   the  matching carrier route number is  inserted   into   your 
mailing list.































                                                   Page 18





4.3  Registration Form and Support Info


This   form  must  be  completed  and  returned  to  Flowsoft   custom 
programming  along  with  a $15 registration fee before  you  will  be 
eligible  to  receive support for the product.  This  form  will  also 
entitle you to receive future update notices on the product. 


     Year Planner version 2.90


     Name:  _________________________________________________________

     Company Name:  _________________________________________________

     Address:  ______________________________________________________

     City, State, Zip Code:  ________________________________________

     Phone Number:  _________________________________________________

     Type of Computer:  _____________________________________________

     Number of Floppy Drives:  ______   Number of Hard Disks:  ______



     Return To:     Flowsoft custom programming
                    1166 Franklin Rd Suite A2
                    Marietta, Ga. 30067 
                    404-955-5461





Support Prices: For telephone support, you will be billed at the  rate 
of  $5.00  per 15 minutes of support (15 minute minimum).  For  onsite 
support,  you  will be billed at the rate of $50.00 per  hour.  Please 
call  Flowsoft custom programming for quotes on custom jobs,  tape  to 
disk  conversions, and other software packages like our FLOWMAIL  6000 
v6.1 bulk mailing system. 












                                                   Page 19

```
{% endraw %}

## FILE1626.TXT

{% raw %}
```
Disk No: 1626                                                           
Disk Title: Year Planner                                                
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Year Planner                                             
Author Version: 2.90                                                    
Author Registration: $10.00                                             
Special Requirements: 520K RAM.                                         
                                                                        
YEAR PLANNER will help you and your staff organize your personal and    
business time month to month, or throughout the year. It lets you create
your own wall planners which are laid out like the familiar "write-on,  
wipe-off" wall planner calender system. The system allows you to write  
deadlines and appointments and other important information in the "day  
blocks" of monthly calendars of your choice.                            
                                                                        
The large standard calendar format lets you quickly update and erase    
appointments.  Moving from date to date takes only seconds. You can list
your appointments by the hour, or use a special wrap-around feature to  
put major task descriptions and deadlines within each day block.        
                                                                        
An overlay template lets you enter similar messages in multiple day     
blocks.  You can even get an on-screen year summary to see the whole    
year at a glance.  The large calendar printouts already have major      
holidays built into each month.  Your own important dates may be stored 
in a file for automatic insertion into next year's file.                
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1626

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    CALENDAR DOC     38656  12-04-89  10:17a
    CALENDAR EXE     68929  12-05-89  10:01a
    FILE1626 TXT      2517   1-02-90   6:26p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  11-30-89  10:13a
    SETUP    EXE     30817  12-03-89   2:49p
    UTILITY  EXE     50865  12-04-89   9:57a
            8 file(s)     263042 bytes
                           54272 bytes free
