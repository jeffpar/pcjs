---
layout: page
title: "PC-SIG Diskette Library (Disk #1907)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1907/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1907"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CALENDAR MATE"

    CALENDAR MATE can print a monthly calendar with your scheduled events.
    The strength of this program is its ability to interpret repeating
    events.  Repeating cycles such as yearly, weekly, fortnightly are easily
    handled.  More complicated cycles such as "3rd Sunday of the month,"
    "2nd workday in September" can also be scheduled.
    
    Flexible date formats allow users to enter dates in a variety of
    comfortable formats.  There is context-sensitive help available from
    anywhere in the program and a help panel will be displayed.
    
    The program can be customized by the user.  All the window colors can
    be changed and saved.  There are a number of system parameters that can
    be changed by the user.  Things like whether or not to include the
    Julian date on a printed calendar, whether or not to automatically
    delete expired events, how often to save the data file, and many others
    are available to be tailored by the user.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHANGES.DOC

{% raw %}
```

               Calendar Mate V2.0       Released 10Oct89

               - Initial Release

               Calendar Mate V2.1C      Released 18Jan90

               - Improved Help facility
               - When viewing events in option 3, user can press F8 to sort
                    the file by event description
               - Added support for HP LaserJet Series II printers
               - Added pre-defined print drivers
               - Added ability to send 'setup' escape sequences to printers
               - Fixed a bug that caused a line feed but no carriage return
                    when printing calendars on some printers
               - Added Early Warnings on non-repeating events
               - Can now print calendars 80, 99, 113 and 132 bytes wide.

               Calendar Mate V3.0       Released 03Sep90

               - Mouse Support added
               - Improved Context sensitive help
               - Added 'Easter' as a keyword - program automatically        
                    computes the date for Easter.
               - Program computes the lunar cycles and can print when a     
                    full moon and new moon occur in the month
               - The user can opt to print events in compressed format on a
                    monthly calendar. This can squeeze three events instead
                    of two into each day.
               - If user has defined more events than can fit into a box on
                 the monthly calendar, a warning message will be generated.
               - User can now 'Clone' a record (in option 3).
               - The user can now display the future occurrences of a       
                    repeating event.
               - New type of repeating events can be defined - the          
                    'special' repeaters. These events can be automatically
                    rescheduled to a different day. For example a birthday
                    that falls on Feb. 29 but is usually rescheduled to     
                    Feb. 28 is a special repeater.
               - One (or several) occurrences of a repeating event can be   
                    deleted or rescheduled without affecting the rest of    
                    the event's dates.
               - Epson LQ print driver added for printers that emulate this
                    fine printer.
               - The program will allow more characters when defining       
                    printer escape sequences.
               - The user can now print a single calendar or a range of
                    calendars. For example the user can print September to
                    December and then go for a coffee while the printer     
                    does the work.
               - The program can now print a yearly calendar on one page.
               - When generating several months at one time and sending     
                    them to disk, the user can now browse each one.
               - Old option 5.3 (set path for files) has been deleted.      
                    Calendar Mate program will get all his files from the   
                    directory that he is executed from.
               - New Option 5.3 (define colours) now shows an example of    
                    each possible colour combination.
               - When printing a calendar, the program now assumes the      
                    current month as the default where prior to this        
                    release there was no default.
               - User can abort/interrupt the calendar generation process   
                    with a touch of the keyboard.
               - When defining an event, you can now specify the end date   
                    as a number of days from the start date of the event.
               - In the prior releases sometimes the year wasn't checked on
                    non-repeating events. This has been fixed.
               - When adding an event, the date will default to the hilighted
                    date on the convenience calendar. Prior to this release,
                    the date would default to the system date.
               - More printer setup characters available in option 5.1.2
               - Simplified the definition of printer characters. However,
                 in this case, simple is a relative term! This is still not
                 for the faint hearted.
```
{% endraw %}

## FILE1907.TXT

{% raw %}
```
Disk No: 1907                                                           
Disk Title: Calendar Mate                                               
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: Calendar Mate                                            
Author Version: 3.0                                                     
Author Registration: $22.00                                             
Special Requirements: 384K RAM, printer for printing calendars, and DOS 
                                                                        
CALENDAR MATE can print a monthly calendar with your scheduled events.  
The strength of this program is its ability to interpret repeating      
events.  Repeating cycles such as yearly, weekly, fortnightly are easily
handled.  More complicated cycles such as "3rd Sunday of the month,"    
"2nd workday in September" can also be scheduled.                       
                                                                        
Flexible date formats allow users to enter dates in a variety of        
comfortable formats.  There is context-sensitive help available from    
anywhere in the program and a help panel will be displayed.             
                                                                        
The program can be customized by the user.  All the window colors can   
be changed and saved.  There are a number of system parameters that can 
be changed by the user.  Things like whether or not to include the      
Julian date on a printed calendar, whether or not to automatically      
delete expired events, how often to save the data file, and many others 
are available to be tailored by the user.                               
                                                                        
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
║                 <<<<  Disk #1907  CALENDAR MATE  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type:  INSTALL  (press enter)                         ║
║                                                                         ║
║ To print documentation, type:  COPY CALMATE3.DOC PRN (press enter)      ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## ORDER.DOC

{% raw %}
```
                                   Order Form For
                              Calendar Mate Version 3.0

               Name:          _____________________________________________

               Address:       _____________________________________________

               City:          _____________________________________________

               Province/State:_____________________________________________

               Postal Code/Zip:____________________________________________

               Country:       _____________________________________________

               

               Registration Fee:                $22.00
               Shipping & Handling              $ 3.00
               Saskatchewan Residents Add:      $ 1.75    (7% Sales Tax)
               Ontario Residents Add:           $ 2.00    (8% Sales Tax)
                                                ======
               
               Total:                           ______

               Diskette Size   ____ 5.25"          ____ 3.5"

               Please return this form to:

                              Hawk Software
                              PO Box 3961
                              Regina, Saskatchewan
                              S4P 3R9
                              Canada

               How did you find out about Calendar Mate?

               [  ] Friend    [  ] Compuserve     

               [  ] Bulletin Board ______________________ (which one?)

               [  ] Shareware Library _______________ (which one?)


               Does your PC have a Hard Drive?  [  ]Yes  [  ]No
               
               What kind of printer do you use? ___________________________
               
               Which Calendar Mate print driver works?_____________________
               
               Is mouse support useful? [  ]Yes   [  ]No
                                        [  ] I don't have a mouse

                                          

               Please feel free to add your comments and suggestions on how
               Calendar Mate can be improved to better meet your needs...

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________

               _____________________________________________________________
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
This file is included for the benefit of Shareware libraries and Bulletin
Board Services. It may be removed from the Calendar Mate distribution disk.

Calendar Mate version 3.0 is a full featured program designed to create
personalized calendars. The user defines events to the program and it will
display them on the calendars when printed. There are two types of
calendars that can be printed - a monthly block calendar and a one page
yearly calendar. As well, there is an online daily appointment scheduler.

The distinguishing features of Calendar Mate are its ability to handle
repeating events and its wide assortment of configuration options. Defining
events to the system is a simple task. Much effort has been invested in
making the program intuitive and user friendly. There is context sensitive
help available anywhere in the program.

As well as the simplicity and ease of use built into the program there are
several powerful features including...

- Simple installation procedure.
- Automatic computation of Easter and lunar cycles.
- Mouse support.
- Julian dates can optionally be included on monthly calendars.
- Events that repeat on a regular basis can have a single (or several)
  occurrences rescheduled without affecting the other occurrences of the event.
- Future dates for a repeating event can be displayed.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1907

     Volume in drive A has no label
     Directory of A:\

    VENDOR   DOC      1361   8-30-90   9:53a
    ORDER    DOC      2898   8-30-90  10:02a
    CALHELP  DAT     14757   8-31-90   7:58a
    CALPARM  DAT       342   7-25-90   9:01a
    CHANGES  DOC      4490   9-04-90  12:07a
    CALENDAR EXE    174880   9-07-90  10:43p
    EPSON    PRD       161   7-25-90   9:01a
    EPSONLQ  PRD       342   6-14-90   8:09a
    HPLJIIPL PRD       342   6-14-90   8:07a
    HPLJIIPP PRD       342   6-14-90   8:05a
    ROLAND   PRD       342   6-12-90   3:59p
    CALMATE3 DOC     76106   9-05-90  12:27p
    INSTALL  EXE     46148   9-17-90  11:35a
    READ     ME       2279   9-05-90  11:20p
    IBMPROPR PRD       342   6-14-90   8:09a
    GO       TXT       573  10-10-90   5:30p
    GO       BAT        38   1-01-80   1:37a
    FILE1907 TXT      2295  10-10-90   5:30p
           18 file(s)     328038 bytes
                           22528 bytes free
