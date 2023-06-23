---
layout: page
title: "PC-SIG Diskette Library (Disk #412)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0412/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0412"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "BUSINESS SAMPLER #5"

    This disk contains an assortment of utility programs to aid you in
    organiza tional duties.  PC-RECIPE will help you to keep track of your
    favorite recipes; DDCAL and PCYEARBK are both appointment
    book/calendar utilities; TELEFONE is a telephone book and dialer
    (requires a modem); and the Rolodex program is a simple filing system
    (requires dBASE III to run).  All in all, a very well-rounded
    collection of handy helpers.
    
    System Requirements:  128K, monochrome display, one disk drive;
    Rolodex requires dBASE III
    
    How to Start: Consult the .DOC and README files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.  To run a program with the
    suffix .COM or .EXE, just type its name, i.e., for FF.BAT, type
    FF and press <ENTER>.
    
    Suggested Registration:  PC RECIPE $25.00; DAILY DIARY $10.00; PC
    YEARBOOK $15.00; TELEPHONE $5.00.
    
    File Descriptions:
    
    PCRECIPE DOC  Documentation for PCRECIPE.EXE program
    DDCAL    COM  Appointment book utility (like SideKick's)
    ROL????  ???  A name and address system - Rolodex simulator (dBase II)
    PCYEARBK EXE  An appointment book system
    PCYEARBK DOC  Documentation for PCYEARBK.EXE program
    PCRECIPE EXE  A recipe filing system
    TELEFONE COM  A telephone book and dialer (must have modem)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES412.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 412   Personal Utilities                               v1.1 DS2
------------------------------------------------------------------------
This disk contains a set of utility programs for keeping track of your
favorite recepies, and a dBASEII Rolodex filing system.
 
DDCAL    COM  Appointment book utility (like SideKick's)
PCRECIPE DOC  Documentation for PCRECIPE.EXE program
PCRECIPE EXE  A recipe filing system
PCYEARBK DOC  Documentation for PCYEARBK.EXE program
PCYEARBK EXE  An appointment book system
ROL????  COM  A name and address system - Rolodex simulator (for dBase II)
              Several files
TELEFONE COM  A telephone book and dialer (must have modem)
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite D
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PCRECIPE.DOC

{% raw %}
```




















                             PCRecipe

              a Public Domain Program by PC-Squared

                   (C) Copyright by PC-Squared


             << Documentation & Operating Manual >>








                           PC-Squared
                          P.O. Box 1610
                      Morgan Hill, CA 95037







                          << LICENSE >>

This  program can be freely copied and distributed so long as  no 
consideration is given other than specified in this document. The 
user  of this program which finds that it is of value to  him/her 
should  consider  making  a  donation  to  PC-Squared.  See  this 
document for more information about becoming a registered owner.





I. Introduction

     PCRecipe  is  a  series of programs which allows a  user  to 
maintain their recipe file on computer. The system offers several 
advantages over a manually kept recipe file.


     This system contains only one program. It is PCRECIPE.EXE.

     Data files which are used by the system are as follows:
(NOTE: All  data files MUST reside on the default disk drive.)

Filename            Record Len     Contains
----------------------------------------------------------------
RECIPE.CNT          12  Bytes      Counters & General Sys. Info.
RECIPE.DAT          417            Master Recipe Info
RECIP1.DAT          600              "      "     " 
CLASS.DAT           14             Class Information 
SCLASS.DAT          14             Subclass Information
RECIPE.SRT          12             Temporary file built by the
                                      Sort routine.



GENERAL DESCRIPTION

     The system provides a means to maintain recipe  information. 
It will allow you to display,  update, add, change, and calculate 
recipes by two separate classifications. 

     These "classifications" are termed CLASS and SUBCLASS.  They 
can be used for categorizing each recipe. They are intended to be 
used in order to retrieve a recipe which "fits" within a class. 

     An  example  of  the  uses of  the  classifications  are  as 
follows.  If you used CLASS as the type of meal,  i.e. BREAKFAST, 
LUNCH,  DINNER,  DESSERT,  etc,  and  the SUBCLASS as the type of 
food,  i.e.,  FISH,  BEEF,  LAMB,  PORK,  CAKE, etc, then you can 
retrieve all DINNERS (class) which contain FISH (sub-class).

     There  is  no  restriction  on how you  use  the  CLASS  and 
SUBCLASS  data fields.  The only restriction is that each  recipe 
MUST be assigned a class and subclass.

     All classes and subclasses are defined by you.


II. Installation

     Simply copy the PCRECIPE program on to a disk which contains 
DOS. All files needed by the system are produced by the system.


     General Operating Information

      Every screen which displays the data field limited by ']' & 
'["  are auto-ending.  This means that if you fill the field  the 
system  will automatically go to the next data element.  The only 
time you need to hit RETURN is when you fail to fill the field.

Also ALL commands require that you only press the proper key - NO 
<RETURN> is required.

 

III. CREATING YOUR BASE DATA

     The  only  "pre-defined"  files which is  required  prior  to 
entering any recipes are the CLASS and SUBCLASS files.  These are 
entered by using menu selections 6 and 7.

     Once  these  are  entered you can  proceed  and  enter  your 
recipes.


IV. Program Operation of PCRecipe

     The  program  is loaded by typing PCRECIPE <CR>.  A  sign-on 
message  will  be displayed.  Simply hit any key to  display  the 
menu.


OPTION <1> Enter a New Recipe

     By selecting option 1,  the system allows you to enter a new 
recipe. The  system  will respond with form on the screen. 

     The  form  which  is displayed will ask  for  the  following 
information:

NAME - This is any name which you have assigned to this recipe.

NUMBER  - This  is  assigned by the  computer.  It  is  used  for 
reference to the recipe.

CLASS  - This  is  CLASS  number by which you  want  this  recipe 
associated with.  This MUST be a VALID class number. Once this is 
entered the name of that class will be displayed.


SUB-CLASS  - This  is  SUB-CLASS number by which  you  want  this 
recipe  associated with.  This MUST be a VALID sub-class  number. 
Once  this  is  entered the name of that sub-class will  be  dis
played.

NOTE:  If  you enter an invalid CLASS or  SUBCLASS,  the  message 
*INVALID* will be displayed. You must reenter a VALID number.

#  OF  SERVICE - This is the number of people which  this  recipe 
will serve with the quantity of ingredients entered.


     The  next  ten  lines  on  the screen  allow  you  to  enter 
information on twenty ingredients.

     The data requested is:

QTY - The quantity of the ingredient.  NOTE: If you plan on using 
the  CALCULATE  function,  the  data  element  MUST  be  numeric. 
Therefore if you have an ingredient which calls for 1/4  teaspoon 
of salt, this MUST be entered as a decimal number, i.e. ".25".

MEAS  - This is  measurement,  i.e.,  cup,  teasp,  tablsp,  lbs, 
ounces, etc.

INGREDIENT - The ingredient.

     If  you  enter  nothing in the QTY field the  system  will 
advance to the INSTRUCTION section. 

INSTRUCTIONS  - This  section allows you to enter five  lines  of 
instructions.  These  can be mixing and cooking instructions  and 
comments about the recipe.

     When  all  data is entered the system will write it to  disk 
and  present another blank form.  You can continue to enter  more 
recipes  or  hit <RETURN> in the NAME field and the  system  will 
return to the menu. 



To Display a Recipe - Select option 2.

     The  system will ask for the recipe number and will  display 
the recipe data. It will then display the following prompt: 

<E>xit, <N>ext, <Shift-PrtSc> to Print Screen

     If  you select E,  the system will return the menu.  If  you 
select N, it will respond with the recipe number prompt.



Display Choices by Class - Select option 3.

     This  is used to obtain a list of recipes which fit  with  a 
specific class and subclass.

     The  system  will  prompt  you for the  CLASS  and  SUBCLASS 
numbers  and  display  a list of recipes  which  fall  into  that 
category.


Calculate a Meal - Select option 4.

     This option will allow you to select a recipe which you have 
entered  and  which  serves  four people (an  example)  and  will 
calculate the quantity of ingredients needed to serve any GREATER 
number of people. An example of its use is, say you have a recipe 
for CHICKEN CORDON BLEU for 4 serving,  and your husband  invites 
his boss and his wife, and the Senior V.P. and his wife, over for 
dinner.  You  now need this recipe for six people.  To obtain the 
recipe  for  six people you would do the  following,  using  this 
option;

     The  system will prompt you for the recipe number,  and  the 
number of serving which you want.  The system will then calculate 
the recipe and print it with the calculated quantities.

SEE  THE  NOTE  UNDER 'ENTER A NEW RECIPE'  REGARDING  THE  'QTY' 
FIELD.


To Change a Recipe - Select option 5.

     The  system will ask for the recipe number and  display  the 
recipe  data.  It will then prompt to see that it is the  correct 
one. Answer by entering Y or N. If you enter N, you will again be 
prompted for the recipe number.

     If you enter Y, the system will allow you to change ALL data 
except the recipe number.

     If  you  do  not  want  to change  the  data  in  the  field 
containing the cursor,  simply hit RETURN.  If you want to change 
the data, re-enter the entire field.

     To stop the loop which is entered in the QTY-MEAS-INGREDIENT 
fields, enter a '/' in the QTY field.

     After  a correction the system will return the recipe number 
prompt. Enter the next number or 0<RETURN> to return to the menu.



To Enter a Class - Select option 6.

     The  system  display a form asking for the following data: 

CLASS # - Enter the class number which you want assigned and  the 
name.



To Enter a Sub-Class - Select option 7.

     The  system  display a form asking for the following data: 

SUB-CLASS  # - Enter the sub-class number which you want assigned 
and the name.


Prt/Dis Choices by Class - Selection # 8

     This  option will provide you with a list of  recipes  which 
fit a specific class and subclass. The system will prompt you for 
the  class  and subclass number and whether you want  the  result 
sent to the screen or printer.



Prt/Dis Detail by Class - Selection # 9

     This  option  will  provide you with the entire  recipe  for 
recipes which fit a specific class and subclass.  The system will 
prompt you for the class and subclass number and whether you want 
the result sent to the screen or printer.



Prt/Dis Classes/Sub-Classes - Selection # 0

     This  selection  will display or print a list of  all  valid 
classes and sub-classes.


The last function is EXIT TO MAIN MENU - Selection X.

  This selection will return you to DOS.





HOW TO BECOME A REGISTERED OWNER OF PCRecipe


     PC-Squared  writes commercially available and public  domain 
software  for the IBM PC and compatibles.  The commercial systems 
are designed for specific vertical markets and are of no interest 
to most computer hobbists.

     If   you  would  like  to  become  a  registered  owner   of 
PCRecipe,  send  a  contribution (amount is your choice)  to  PC-
Squared  at the below address.  A contribution of $25.00 or  more 
will allow you to receive source code and all future updates  for 
the cost of a diskette.

     If  you have suggestions,  comments,  information  regarding 
bugs, ideas about possible other public domain programs which you 
would like to see,  or wish to become a registered owner, you can 
write us at:

          PC-SQUARED
          P.O. Box 1610
          Morgan Hill, CA 95037

     We  also  would  be  interested  in  writing  public  domain 
programs  with people whose expertise is in some other field  and 
who can see the need for a system...

   ....Is there a stock broker out there...who is willing to work 
on a tracking and forecasting program??????


      << POWER TO THE PUBLIC WITH PUBLIC DOMAIN SOFTWARE >>


Other Public Domain Programs by PC-Squared:

          PC-Accountant - A home accounting system.
          PC-Check - A check writing module for PC-Accountant.
          BLKBOOK - An appointment book.

All are available on several BBS.
ck - A check w
```
{% endraw %}

## PCYEARBK.DOC

{% raw %}
```



PC YEARBOOK is a calendar/appointment schedule program written in C
using the De Smet C Compiler. PC Yearbook turns the PC into an
electronic appointment book. Appointments can be scheduled from
8:00 am to 6:30 pm in half-hour increments. There is also a Note Pad
to record other information.


The program as been tested on a PC with 128K, color monitor, and 
with both DOS 1.1 and 2.0. The program should run on a 64K PC 
with DOS 1.1 but may not run under 2.0 due to the operating system
overhead. I have not tested the program on a monochrome display 
except very briefly but the program makes no use of special color
commands and should have no difficulity with the monochrome display.


You are encouraged to copy and distribute this program. If you find
this program useful, a contribution of $15 would be appreaciated. I
am especially interested in suggested improvements,bugs,comments,etc.
These may be mailed to:

                         
                         Ulderic F. Racine
                         2520 South East Alexander Drive
                         Topeka, Kansas 66605


or you may leave a message on the HAWKEYE Bulletin Board, 319-363-3314
or the CUE, 913-267-1903.
































                                   -1-




PC Yearbook                                                          Page 2.

Running the program:

Before running PC Yearbook, you should check the system date. Be sure 
that it is the current date as the program utliizes that date to display
the initial calendar and to store the appointment data files. If you
forget, you should exit the program and start over again. 

To run the program, type PCYEARBK and press <Return>.



Calendar Function:


Each time the program is run, it will dispaly a calendar of the month
contained in the system date. Thus if you initialize the program and
have entered a date of 04-23-84, a calendar for April 1984 will be 
displayed at the top left of the screen with the 23rd highlighted in
reverse video. The date will also be printed to the right of the calendar
as Monday April 23, 1984. The appointment times will be displayed below
the calendar and a lightbar will indicate the first appointment at 8:00
am.

The keys used to manipulate the calendar are:


<Cursor> keys are used to move the highlighted day on the calendar. The
         Right/Left arrow keys move the date one day. The Up/Down arrow
         keys move to the same day in the previous or next week. The
         appointment schedule will be updated as the date is moved.


<F1>     displays the month previous to the month currently displayed.
         All appointment data from the currently displayed month will be
         saved to disk and the data from the previous month (if any) will
         be loaded into memory from disk.


<F2>     displays the next month after the month currently displayed.
         All appointment data from the currently displayed month will be
         saved to disk and the data from the previous month (if any) will
         be loaded into memory from disk. 


<F3>     will display the month and highlight the day/date that first
         appeared when the program was run during the current session.
         This allows you to return to the current date from any other 
         month. All appointment data from the currently displayed month
         will be saved to disk and the data from the previous month (if
         any) will be loaded into memory from disk.


<F4>     printout appointments - See Appointment function.


<F5>     accesses the Note Pad - See Note Pad function.


<F10>    to exit PC Yearbook and return to DOS. All appointment data
         from the currently displayed month and notes in the Note Pad
         will be saved to disk.


                  
PC Yearbook                                                          Page 3.

Appointment Schedule Function:


The appointment schedule allows appointments from 8:00 am to 6:30 pm
for each day. Each appointment may be up to 32 characters of text and
is active whenever the calendar is displayed.

The keys to use the appointment function are:


<Spacebar> moves the highlighted bar beginning at 8:00 am to the next
         appointment. The highlighted bar indicates the current cursor
         position for adding or deleting an appointment.


<Ins>    opens an appointment time at the current position of the
         highlighted bar for input of appointment text. The text is
         limited to a maximum of 32 characters. If you use all 32
         characters, the program will generate an automatic carriage
         return and will turn off the cursor otherwise you must press
         <Return> to terminate the entry of the text.


<Del>    deletes any appointment text at the current position of the
         highlighted bar.


<Return> terminates the entry of appointment text if the text is less
         than 32 characters.


<Backspace> or the left arrow key will delete the previous character
         of text during entry of appointment text.


<F4>     allows you to printout a specific date or the entire month of     
         the appointment schedule. When this key is pressed, the days
         of the current month will be displayed over the appointment
         schedule in three columns. Use the <Spacebar> to move the 
         cursor. Pressing the <Return> will select the day for printing.   
         A small graphic block will appear in place of the cursor 
         indicating that the day has been selected. If the day has 
         already been slected, pressing <Return> will erase the 
         selection. Pressing the <Spacebar> on a day will not alter the    
         selection. When your selections have been made, press <Esc> to    
         printout the appointment schedule for the days selected. If no    
         days are selected, the program returns to the calendar/schedule   
         function. The printout will contain a maximum of four days per    
         page in date order regardless of the order of selection.



Appointment Data Files:


Appointment data is stored on the disk in the default drive. A file is 
created for each month using the naming format of MMMYYAPT.DAT with the 
first three characters being the first three in the name of the month and 
the next two the last two digits of the year. Thus data for April 1984 
would be stored in a file named APR84APT.DAT.



PC Yearbook                                                          Page 4.

The amount of disk space required to store a month's data is dependent 
upon the number of appointments scheduled. The maximum size is about 23K 
which would represent an appointment scheduled for each half-hour for the 
entire month. A 320K diskette should have no problems containing an 
entire year of data.



Note Pad Function:

The Note Pad provides four pages of fifteen lines to store notes and 
other textual information that you do not wish to put on the appointment 
schedule. Each line can be up to 70 characters long.

The Note Pad is always resident and available. It is not date dependent.
         
The keys to use the Note Pad function are:

         
<PgUp>   displays the previous page in the Note Pad. If you are on page 
         1, it will wrap around to page 4.


<PgDn>   displays the next page in the Note Pad. If you are on page 4, it 
         will wrap around to page 1.


<Spacebar> moves the lighlighted bar on the Note Pad. It indicates the 
         cursor position for adding or deleting a note.


<Ins>    opens a Note Pad line at the current position of the highlighted
         bar for input of note text. The text is limited to a maximum of 
         70 characters. If you use all 70 characters, the program will 
         generate an automatic carriage return and will turn off the cursor
         otherwise you must press <Return> to terminate the entry of the
         text.


<Del>    deletes a line of text on the Note Pad at the current position
         of the highlighted bar.


<Return> terminates the entry of Note Pad text if the text is less than
         70 characters.


<Backspace> or the left arrow key will delete the previous character
         of text during entry of Note Pad text.


<Esc>    exits the Note Pad and returns to the calendar/appointment 
         functions.


<F5>     printouts out the Note Pad. On the printout, the notes are 
         printed from 1 to 60 without page indications as they are 
         displayed on the screen.













   printed from 1 to 60 with
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0412

     Volume in drive A has no label
     Directory of A:\

    DDCAL    COM     52736   3-18-85   1:32p
    FILES412 TXT       866   6-13-86  11:10a
    PCRECIPE DOC     10880   5-02-85   5:10p
    PCRECIPE EXE     50304   5-02-85   5:10p
    PCYEARBK DOC      8832   4-03-85   7:28p
    PCYEARBK EXE     27136   1-03-85  12:43p
    ROLDEX1  NDX      1024   4-03-85   7:50p
    ROLMENU  FMT      2048   4-03-85   7:49p
    ROLODEX  CMD      9984   4-03-85   7:49p
    ROLODEX  COM       256   4-03-85   7:50p
    ROLODEX  DBF      2048   4-03-85   7:50p
    ROLPRINT CMD       768   4-03-85   7:50p
    ROLSCRN  FMT      1408   4-03-85   7:50p
    TELEFONE COM     43008   6-06-85  10:20a
           14 file(s)     211298 bytes
                          106496 bytes free
