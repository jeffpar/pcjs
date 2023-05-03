---
layout: page
title: "PC-SIG Diskette Library (Disk #2160)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2160/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2160"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REMIND AND CALENDAR 25"

    A lean and mean date reminder.  Just put REMIND into your
    AUTOEXEC.BAT and always know when a holiday will occur and never
    forget another birthday or anniversary.
    
    Enter "reminder" dates, such as your anniversary, your mother's
    birthday, and doctor's appointment into the program along with the
    number of days that you would like REMIND to start flagging you ahead
    of the event.  Run the program from AUTOEXEC.BAT and each time you turn
    on your computer, the current date will be compared to the
    entries in the data file.  If a date matches, a window will pop out,
    with the important reminder.  If no date matches, the program will
    simply end inconspicuously, letting you proceed with your daily work.
    You may have multiple entries for each date and enter the dates to be
    reminded up to one year in advance of the current date.
    
    This handy perpetual CALENDAR is unique in that it calculates and
    displays important dates and holidays for any given month/year.  The
    holidays should always be accurate, even if they fall on different
    dates year after year.
    
    It's also a historical chronicle of world events.  One can go back in
    time and important world events that happened at that given month in
    history will be displayed (e.g.  December 7, 1941: the Japanese attack
    on Pearl Harbor).  Browse through history, paging through the
    historical calendar.  Speed up the forwarding and backwarding of years
    by pressing the + or - keys and it forwards or backwards the calendar
    10 years at a time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CALENDAR.DOC

{% raw %}
```








                            CALENDAR Version 2.5
                     
                  "the only calendar that you will ever need"
                 _____________________________________________

                Written by Robert M. W. Tsou, M.D. in Turbo Pascal

 
            This is a handy perpetual calendar which is unique in that
            it will also calculate and display most of our major holidays
            for the given month/year.  The holidays should be perpetually
            accurate even if they fall on different dates year ater year.
            (Sorry, no Easter as the logic for it is too complicated to 
            work out.) 
 
            The other feature of this calendar which is not immediately
            obvious is that it is also a historical chronicle of world
            events. By pressing the [Down Arrow] key repeatedly, one can
            go back in time and important world events that happened
            at that given month in history will be displayed (for example,
            December 7, 1941: the Japanese attack on Pearl Harbor, etc.)
            One may speed up the forwarding and backwarding of years by
            pressing the + or - keys which will forward or backward the
            calendar 10 years at a time.

            This program is intuitively simple to use and is self expla-
            natory. You do not need a manual to run it. 

            By the way, since I am only a hobbyist programmer, I do not
            expect to be paid for "having fun," so this program is free         
            for all to copy and use without fee; however, I do have a
            single request: please distribute this program far and wide 
            so more people can use it.

            Have fun!
           

            Robert M. W. Tsou, M.D.
            28441 Cedarbluff Dr.
            Rancho Palos Verdes, CA
            
            Released into the public domain April 9, 1989
       





```
{% endraw %}

## FILE2160.TXT

{% raw %}
```
Disk No: 2160                                                           
Disk Title: Remind and Calendar 25                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: Remind                                                   
Author Version: 4.6                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
A lean and mean date reminder.  Program REMINDER into your autoexec.bat 
Know when a holiday will occur and never forget another birthday or     
anniversary.                                                            
                                                                        
Enter "Reminder" dates, such as your anniversary, your mother's         
birthday, your doctor's appointment date, etc., into the program along  
with the numbers of days that you would like REMIND to start flagging   
you ahead of the event.  Run the program from autoexec.batr and each tim
you turn on your computer, the current date will be compared to the     
entries in the data file.  If a date matches, a window will pop out,    
with the important reminder.  If no date matches, the program will      
simply end inconspicuously, allowing you to proceed with your daily     
work.  You may have multiple entries for each date and enter the dates  
to be reminded up to one year in advance of the current date.           
Program Title: Calendar25                                               
Author Version: 2.5                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Use this handy perpetual CALENDAR, unique in that it will also calculate
and display most of our major holidays for the given month/year.  The   
holidays should be perpetually accurate even if they fall on different  
dates year after year.                                                  
                                                                        
It is also a historical chronicle of world events.  One can go back in  
time and important world events that happened at that given month in    
history will be displayed (for example, December 7, 1941: the Japanese  
attack on Pearl Harbor, etc.)  One may speed up the forwarding and      
backwarding of years by pressing the + or - keys which will forward or  
backward the calendar 10 years at a time.                               
                                                                        
                                                                        
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
║            <<<<  DISK #2160 REMIND AND CALENDAR 25  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start REMIND, type: REMIND                                           ║
║ To start CALENDAR, type: CALENDAR                                       ║
║ To print documentation for REMIND, type: COPY REMIND.DOC PRN            ║
║ To print documentation for CALENDAR, type: COPY CALENDAR.DOC PRN        ║
║                                                                         ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## REMIND.DOC

{% raw %}
```

           
           
           
           
           
           
           
           
           
                              REMIND Release 4.6:
           
                The program that lets you "forget about forgetting"
           
           
           
                              Copyright (C) 1988
           
                              Robert M. W. Tsou

                             28441 Cedarbluff Drive
                          Rancho Palos Verdes, CA 90274
           
           
           
           
           Registration and Licensing Agreement:
           _____________________________________
           
           REMIND is a user supported software product. It is not in
           any way free software. You are granted the right to use
           REMIND for a limited evaluation period. If you find REMIND to
           be useful and would like to continue to use it, a
           contribution of $10 in U.S. funds sent to the address below
           would be greatly appreciated.  Your registration will legally
           entitle you to continue using REMIND.  Your support will help
           us make REMIND an even better product and make possible other
           low-cost, high-quality programs.

           When you register, you will receive a free disk through the
           mail containing the latest version of the program if what you
           have is not already the latest version.  Please specify the
           type of disk that you use (either 5.25 inch or 3.5 inch disks.)

           You may give REMIND to others so that they may try it out as
           well; however, you may not modify or remove ANY of the
           program or documentation files in the package.  No
           compensation may be received for distributing REMIND.
           
           To register as a licensed user, send your name, address, and
           any comment you may have regarding the program, along with
           $10 to the following address:
           
           
                               Robert M. W. Tsou
                               28441 Cedarbluff Drive
                               Rancho Palos Verdes, CA 90274
           
           
           Thank you for using REMIND.
           
           
           _____________________________________________________________
           
           
           
           
           
                               REMIND, version 4.6
           
                            A Brief Summary Of Features
           
           
           
           The concept behind REMIND is very simple: you enter the
           important dates that you need to be reminded of, such as your
           anniversary, your mother's birthday, your doctor's appointment
           date, etc., into the program along with the numbers of days
           that you would like REMIND to start reminding you ahead of
           the event, the program will then store the information in a
           data file.  When you run the program using your AUTOEXEC.BAT,
           each time you turn on your computer, the program will
           automatically execute to compare the current date obtained
           from your computer's internal clock/calendar to the entries
           in the data file.  If a date matches, a window will pop out,
           giving you the important reminder.  If no date matches,
           the program will simply end inconspicuously, allowing you to
           proceed with your daily work.  You may have multiple entries
           for each date if desired and you may enter the dates to be
           reminded up to one year in advance of the current date.
           
           Of course, for the program to work correctly, your computer's
           internal clock/calendar must be set to the right current
           date. Please consult your DOS manual on how to do so if you
           do not already know how.
           
           
           The following is a list of features of REMIND 4.6:
           
           
           (1). Automatically remind you of important dates and things
                to do for the day as the date approaches or arrives.
           
           (2). User-determinable advanced reminding (however many days
                of advanced notice for a date/event.)
           
           (3). Recurrent (monthly) reminding for any day of the month.
           
           (4). Perpetually-accurate built-in reminders for most of our
                major holidays.
           
           (5). Simple view/editing capabilities built-in for the data
                file so one may easily delete out-dated entries.
           
           (6). Celebrate important holidays and birthdays with music.
           
           (7). Includes handy perpetual calendar (with accurate
                holidays) for quick referencing.
           
           (8). Interesting historical chronicle included with calendar.
           
           (9). Leap years taken into consideration by programming
                logic.
           
          (10). Colorful and intuitively simple to run.
           
           
           
           
           _____________________________________________________________
           
           
           
           
                              How To Use REMIND
           
           
           
           Installing REMIND;
           _________________
           
           
           
           REMIND, version 4.6, is a package consisting of five files:
           
           
                ENTERDAY.EXE : for entering dates to be reiminded,
                               viewing/editing the entries, and
                               consulting the handy calendar.
           
                REMIND.EXE   : for displaying the reminders. You
                               should run this with your AUTOEXEC.BAT
                               or any batch file that you use daily.
           
                REMIND.DOC   : this documentation.
           
                REGISTER.FRM : registration form.

                WHATS.NEW    : summarize the new features
                               of the current version.
           

           After the program has been run for the first time, a data file,
           REMIND.DTA, will be created automatically to store the data.
           If you are already using a previous version of REMIND, it is
           advisable that you back up your existing REMIND.DTA before
           proceeding with the installation.

           REMIND is best run from a hard disk using your AUTOEXEC.BAT.
           This way, whenever you turn on your computer, the program
           will automatically execute to check if you have any reminders
           for the given day. One may also run the program with any
           other batch file that you use daily.
           
           The way I set up my program is as follows: first I create a
           new subdirectory on my hard disk called C:\REMIND. This can
           be done easily by typing "MD REMIND" and <enter> at the C:\>
           prompt. Then I copy all of the executable files into the new
           subdirectory. To run the program using your AUTOEXEC.BAT, I
           add the following lines to the end of my AUTOEXEC.BAT file:
           
                      CD\REMIND
                      REMIND
                      CD\
           
           This way, the program will automatically execute each time
           you turn on your computer.
           
           In addition to this, I also make out a batch file (say
           "R.BAT") to run the REMIND program. This way, while I am at
           the computer and I forgot what was in the reminder, I can run
           the program quickly without having to turn off and on the
           computer. R.BAT can be made simply by doing the following:
           
           At the DOS prompt, C:\>, type:
           
                      Copy con R.BAT           <enter>
                      echo off                 <enter>
                      cd\remind                <enter>
                      remind                   <enter>
                      cd\                      <enter>
           
           
           After this, you type ^Z by pressing the <CTRL> key and <Z>
           keys simultaneously.  DOS will acknowledge by responding with
           "one file copied."  Now you have R.BAT ready to run. Place
           R.BAT into your "BATCH" subdirectory and pass your DOS's path
           through it.  This way you will be able to run R.BAT from any
           where within your system. (To understand DOS's PATH command,
           refer to your DOS manual.)
           
           Now that you have successfully installed REMIND into your
           computer, let's discuss the finer details of how to use the
           program:
           
           
           ____________________________________________________________
           
           
           
           Running ENTERDAY.EXE:
           ____________________
           
           
           As mentioned earlier, ENTERDAY.EXE is an executable file used
           to enter the dates to be reminded.  You must run this program
           first before you can run REMIND.EXE.  As you run
           ENTERDAY.EXE, it will create a data file called REMIND.DTA
           and store your data into it. One may enter the dates to be
           reminded of up to one year ahead of times.
           
           When you run ENTERDAY.EXE, you will see the main menu with
           several choices. Today's date will be displayed at the bottom
           for your reference. The choices are (A). Entering dates to
           remind, (B). view/edit entries, (C). consult calendar, and
           (Esc) to exit.  One may use the up/down arrow keys to scroll
           the highlight bar to the desired selection and enter or
           simply press the corresponding keys to enter the selections.
           
           
                       *           *           *           *
           
           
           (A). entering dates to remind:
           
           
           When you have selected this,  a window will pop out asking
           you for the month of the date that you need to be reminded.
           Simply type in the month in Roman numerals (for example, the
           month of May would be "5".)  Then the program will ask you
           for the day of the date to be reminded, simply type in the
           date.  After which, the program will ask you to press <B> if
           this represents a birthday or simply <enter> if this is not a
           birthday. Pressing <B> at this point will tell the program to
           sing "Happy Birthday To You" when the date arrives. This, of
           course, is an option entirely up to the user. After this, the
           program will ask you to fill out the reminder for the date
           entered, i.e. things to do for that day. One may enter up to
           about 3 lines of text within the given window. Just type
           away, the word will automatically wrap.  If you make a
           mistake and want to start over, just press <Esc> to cancel.
           When you are finished with the reminder text, press <enter>
           to go to the next step.
           
           The program will at this point ask you to enter the numbers
           of days of advanced notice that you desire for the date
           entered. You may press any number. Pressing "5" ,for
           example, will tell the program to start reminding you 5 days
           prior to the arrival of the date entered. If you press "0"
           the reminder will only occur on the date of the given event.
           
           You probably want to start the reminding several days in
           advance of an important event (to allow time for mailing of
           cards or buying of gifts, for example.)
           
           Next, the program will ask you whether you would like the
           reminder to occur monthly on the same day (for paying of
           bills, for example.)  Simply type in a Y/N answer. Of course,
           this option will not be given if the date entered is a
           birthday- birthdays happen yearly, never monthly.  One word
           of caution when you use this feature: if the date that you
           entered is the 31st of each month, the reminder will NOT
           appear on the months of Feb., April, June, September, and
           November because, quite simply, there are no such days in
           these months.  Similarly, the 30th of each month will not
           appear in February and 29th will not appear in the same month
           unless it is a leap year.  The program will warn you of
           this if the date that you entered are the ones mentioned
           above.
           
           Before you exit the entering of dates section, the program
           will ask you whether you would like to enter more dates to
           remind. Entering "Y" will repeat the process, and "N" will
           take you back to the Main Menu.
           
           
                       *           *           *           *
           
           
           
           (B). View/Edit entries:
           
           
           Notice that if you have just finished entering dates to remind
           and getting back to the main menu, the highlight bar now
           rests on the view/edit selection.  You see, the program knows
           that if you are just finished entering dates to remind, it is
           unlikely that you will go right back to it to enter more
           dates to remind.  One may now view/edit the entries that one
           has made before and delete any out-dated entries if desired.
           
           By pressing the (B). View/edit entries selection, one will
           get into the editor mode and all of the entries contained in
           REMIND.DTA will now be displayed on screen.  Depending on how
           long the list of dates are, one may press the <page down> or
           <page up> keys to view the entire file. If you see any
           entries that are out of date, you may delete that entry by
           first using the arrow keys to place the cursor under that
           entry and press <Alt-D>. The out-dated entry will disappear
           and the rest of data file will automatically scroll up one
           line to fill in the void.  You may delete as many entries as
           needed to keep your data files clean and up-to-date. When you
           are done, pressing <F3> will save the changes and exit or
           pressing <Esc> will simply exit without saving the changes.
           A note will sound when you save changes to let you know that
           the file is now saved.
           
           It is best to keep your data file up-to-date from time to
           time (so they won't come back next year) although even if you
           have many entries in the data file, it will not appreciably
           affect the speed of program execution.  For the birthday
           entries, it is best to simply leave them there so they will
           come back year after year.
           
           The editor does contain one known "bug" in that it will work
           only if you have no more than 400 entries in the REMIND.DTA
           file, more than adequate for most needs.  If you do not use
           the editor, however, you may have as many entries as you have
           disk space for them.  Since REMIND.DTA is written in ASCII
           format, one may also use any ASCII editor to edit the
           entries.  (I will work on the "bug" as soon as I read some
           more of my Turbo Pascal reference book <grin>....)
           
           
           
                       *           *           *           *
           
           
           
           (C). Consulting Calendar:
           
           
           This is the part of the program that is most fun to run.
           It is not only a perpetually  accurate calendar WITH holidays,
           it is also an accurate historical chronicle in a limited
           sense.
           
           When you enter the calendar, the current month will be
           displayed with the current date flashing.  The major holidays
           for the current month will be displayed at the bottom in a
           box. The holidays are accurate even if they fall on
           different dates from year to year (such as Thanksgiving,
           Mother's Day, Memorial Day, Etc.)  By pressing <page-up> one
           can view the months ahead and pressing <page-down> one can
           view the months past.  Pressing the <up-arrow> key will
           advance the year by one and <arrow-down> key will subtract
           the year by one.  Pressing the <+> key will advance the years
           by 10 and pressing the <-> key will subtract the year by 10.
           Pressing the <home> key at any time will take you back to the
           current month/year. If you forget the above instructions,
           pressing <F1> will always bring you help.

           Pressing <Esc> at any time will take you back to the main
           menu.
           
           Notice that I have also included the dates of Daylight Saving
           Time changes for each year (in April and October.) They are,
           of course, accurate perpetually (unless Congress changes the
           rules again.)
           
           If the calendar being displayed is within one year of the
           current date, pressing the <X> key will show the dates that
           are marked for reminding (little dark triangles next to the
           dates.)  If you are not within one year of the current date,
           a beep will sound. Of course, you must enter some dates first
           before you can demonstrate this feature. Once the dates that
           are marked for reminding are displayed, the program will ask
           you whether you would like to view the content of any particular
           date shown. Pressing <Y> at this point means "yes," and pressing
           any other key means "no."  If you press <Y>, the program
           will prompt you for the date that you would like to examine.
           Simply enter the date desired (numbers only) and the program
           will display the reminder for that particular date in the
           window at the bottom of the screen. This serves to give the
           user a "preview" of upcoming reminders.

           For your amusement, I have made the calendar also into a
           historical chronicle of sort.  By "going back in time" using
           the <arrow-down> or <page-down> keys, any important world
           events that happened at that time in history will be
           displayed at the bottom. Try to find the dates for the
           sinking of the Titanic, or the bombing of Pearl Harbor, or
           the battle of Chancellorsville, for example, and relive the
           history.  Although this feature has nothing to do with the
           main purpose of this program, it does add a historical
           perspective to the calendar and, perhaps, a smile to your
           face.
           
           Once you have finished running ENTERDAY.EXE, you may then
           press <Esc> to exit to DOS. A data file, REMIND.DTA, will
           be automatically created to store the data that you have
           just entered.

           Now you are ready to run REMIND.EXE...

           
           __________________________________________________________
           
           
           
           
           Running REMIND.EXE:
           __________________


           As mentioned earlier, this is the program that will actually
           display the reminders to you when you run it with your AUTOEXEC.
           BAT or any batch files that you use daily. When it is run, it
           will first access your computer's internal clock/calendar to
           obtain the current date. Then it will check the REMIND.DTA
           file for any matching dates. If a date matches, a window will
           pop out, giving you the important reminder, or else the program
           will simply end inconspicuously, allowing you to proceed with
           your work.

           REMIND.EXE has many built-in reminders that will automatically
           pop out when the dates are right. Virtually all of our major
           holidays are included (except Easter- the logic is too
           difficult to work out.)  The holidays that are includes are:
           New Year's day, Valentine's Day, Mother's Day, Father's Day,
           Christmas, Thanksgiving, Memorial Day, President's Day,
           Martin Luther King Jr 's Birthday, St. Patrick's Day,
           Independence Day, Labor Day, Columbus Day, Halloween,
           Election Day, Veteran's Day, etc.  The holiday reminders
           will pop out on the day of the given holiday and they should
           be perpetually accurate even if the holidays fall on different
           dates from year to year. Try experimenting by changing your
           computer's internal clock/calendar and see these holiday
           reminders pop out. On Christmas and New Year's Day, the
           program will also play a nice little tune to help you
           celebrate. The program will also remind you automatically
           one day prior to St. Patrick's Day to remind you to wear
           green the next day (something that I always forget until I
           wrote the program!)  Also, for Mother's Day, Father's Day,
           and Valentine's Day, the program will start reminding you
           a few days in advance so you will have time to buy
           gifts or mail cards.

           The program will even remind you to set your clock when
           it is time to switch to/from Daylight Saving Time. You
           will never arrive to work an hour late from now on!



          _______________________________________________________________



                            A Word About Registering



           I am not a computer programmer by trade and I do not expect
           to make a bundle by writing this program. Actually, I first
           laid my hands on a computer only a year ago when I bought my
           first IBM-clone at the urging of my brother. However, this
           program does represent literally hundreds of hours of work
           on my part, often late into nights and on weekends. Although
           It was a lot of work, it also gave me great pleasure in seeing
           the program come to life from a germinal idea a few months ago;
           besides, I learned a few things about computer programming during
           the process.

           In order to encourage people to register, I thought long and
           hard about a "registration reminder" that pops out randomly
           at, say, every 10th or so running of the program; however, I
           decided against it because it would be too cynical a thing
           to do. I hate programs with "copy protection" and
           "automatic delaying," or any other annoying features as
           much as you do and I certainly do not approve of "cripplewares"
           with some features missing until you register. The version you
           are getting here, therefore, is a fully-functioning version
           with nothing held back.  The same as I have on my own
           hard disk.

           By registering, you will be letting me know that there are a
           few honest people out there who care about quality programming
           at low cost, who care about the shareware concept, and who
           appreciate my efforts in bringing this program to you.

           Unless, of course, if you are utterly destitute, then
           you may just send me a nice card.

           I hope you have as much fun using this program as I had
           writing it. Enjoy!


           Robert M. W. Tsou
           28441 Cedarbluff Drive
           Rancho Palos Verdes, CA 90274

           August 1, 1989
           ____________________________________________________________


                           DISCLAIMER (Please Read)


           The author doe not give any warranty, either expressed or
           implied, to anyone using this program. In no event shall
           the author be liable for any damages, including loss of
           profits or anticipated profits, lost savings, or other
           incidental or consequential damages arising out of the
           use or the inability to use this program.  The program
           comes "as is" and it is the user's responsibility to
           determine whether the program is suitable for his/her
           computer system.




           ***************************************************************












```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2160

     Volume in drive A has no label
     Directory of A:\

    FILE2160 TXT      3405   4-25-90   3:43p
    REMIND   DOC     25683   8-01-89  11:35p
    REMIND   EXE     22800   8-01-89   7:34p
    ENTERDAY EXE     60992   8-01-89   8:57p
    WHATS    NEW      1902   8-01-89   9:03p
    REGISTER FRM      1653   8-01-89   8:10p
    CALENDAR DOC      2033   4-09-89   1:29p
    CALENDAR EXE     22000   4-11-89  12:39a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       771   4-25-90   3:56p
           10 file(s)     141277 bytes
                           16384 bytes free
