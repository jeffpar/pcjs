---
layout: page
title: "PC-SIG Diskette Library (Disk #1259)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1259/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1259"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PAL"

    PAL is a handy scheduling tool, as well as a to-do list generator.  PAL
    shows you sorted lists of upcoming appointments to help you use your
    time more efficiently and remember vital appointments.
    
    PAL maintains a to-do list which prods you if you fail to do something
    after a specified date.  You can set a virtually infinite number of
    alarms.  PAL automatically repeats appointments and deletes old
    appointments.  Secular and religious holidays are automatically
    displayed.  You can also display calendars for any month in the 20th or
    21st century.
    
    Help is on-line from any place in the program.  PAL can also interface
    with SIDEKICK appointment files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1259.TXT

{% raw %}
```
Disk No: 1259
Program Title:  PAL version 2.0
PC-SIG version: 1

PAL is a handy scheduling tool as well as a to-do list generator.

PAL shows you sorted lists of upcoming appointments to help you use your
time more efficiently and remember vital appointments.

PAL maintains a to-do list which prods you if you fail to do something
after a specified date.  You can set a virtually infinite number of
alarms.  PAL automatically repeats appointments and deletes old
appointments.  Secular and religious holidays are automatically
displayed.  You can also display calendars for any month in the 20th or
21st century.

Help is on-line from any place in the program.  PAL can also interface
with SideKick appointment files.

Usage:  Business.

Special Requirements:  A hard disk.

How to Start:  Type GO (press enter).

Suggested Registration:  $49.95

File Descriptions:

PALREAD  ME   Small text file.
PALINST  EXE  Installation program.
PAL2A    ARC  Archived file.
PAL2B    ARC  Archived file.
PAL2C    ARC  Archived file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║              <<<<  Disk No 1259  PAL version 2.0  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To install the program to your hard disk, type PALINST (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PAL.DOC

{% raw %}
```









                                       PAL

                        The Personal Appointment Locator

                                   Version 2.0






                            ______    ______    _
                           |  __  |  |  __  |  | |
                           | |__| |  | |__| |  | |
                           |  ____|  |  __  |  | |
                           | |       | |  | |  | |___
                           |_|       |_|  |_|  |_____|







                   Copyright (c) 1988 by PAL Software NY, Inc.
                               All rights reserved


                              PAL Software NY, Inc.
                                  51 Cedar Lane
                            Ossining, New York  10562

                             Voice:   (914) 762-5322
                              BBS:  (914) 762-8055


                            _______
                       ____|__     |               (tm)
                    --|       |    |-------------------
                      |   ____|__  |  Association of
                      |  |       |_|  Shareware
                      |__|   o   |    Professionals
                    -----|   |   |---------------------
                         |___|___|    MEMBER




             PAL and PALARM are trademarks of PAL Software NY, Inc.
                SideKick is a trademark of Borland International






                                     Preface

               PAL is  the Personal  Appointment Locator that radically
          improves your ability to manage your time.  It is distributed
          both commercially and as shareware.


               (i)  The Shareware Distribution Concept

               The  term  "shareware"  refers  to a distribution method
          through computer  user  groups,  bulletin  boards,  friend to
          friend,  and  associate  to  associate.   Shareware permits a
          person to try the program before buying it.  If  you find the
          program useful and intend to continue to use it, then you are
          required to register and pay the commercial price.   You will
          then receive  a copy of the commercial version.  For informa-
          tion on how to register, see chapter 17.

               The shareware version of PAL is  a completely functional
          version, identical in all respects to the commercial version,
          except that you cannot  exit  the  shareware  version without
          being nudged  to register  the program and providing a yes/no
          response to that nudge.

               If you  have registered  your shareware  version or have
          received the  commercial version directly, then, in the words
          of the wine cooler  salesmen,  thank  you  for  your support.
          Please  understand  that  only  the  shareware version may be
          freely distributed to others and that your commercial version
          may not  be further distributed by you without violating your
          license to use the product.

               Persons who would like to receive the try-before-you-buy
          benefit of the shareware version may receive the most current
          shareware distribution disk directly  from  PAL  Software NY,
          Inc. by printing out the order form which can be generated by
          PAL  from  the  "registration"  section  of  the  online help
          facility.

               The  author  is  a  member  of  (in fact, he drafted the
          bylaws for) the Association  of  Shareware  Professionals, an
          organization dedicated  to the  advancement of the concept of
          shareware.


               (ii) The History of PAL

               PAL is the  brainchild  and  beloved  work  of  a single
          programmer, a  lawyer by  day.  Law office work being what it
          is, the author wanted to harness the power of the computer to
          assist him in more efficiently managing his time.


                                          i





               SideKick  seemed  like  a  good starting point, since it
          allows the entry of appointments quickly, even while the user
          is busy  working within another application.  But, oh, to try
          and get the information back out of SideKick  in an efficient
          and  useful  manner!    Gordon  Liddy  gives information more
          freely.

               So, PAL was born in  the  spring  of  1985  as  a simple
          program that  would read  the SideKick appointment file, sort
          it,  and  display  upcoming  appointments  starting  with the
          present system  date and  continuing through a number of days
          that the user chose when invoking the program.

               The  programmer  was  pleased  enough  with  that  first
          version  1.0  that  he  placed  it on a few computer bulletin
          boards for dissemination, under the philosophy of paying back
          to the  computer public  what the  author had received in the
          past from  downloading other  useful programs.   The response
          was fantastic!   Following the show of support and encourage-
          ment, the  author listened  to the  needs and  desires of his
          users (as  well as  some of  his own needs and desires).  The
          result to date is PAL version 2.0.


               (iii)     What PAL Can Do For You

               In addition to the  ability to  show a  sorted report of
          your upcoming appointments, PAL can, among other things:

               *    search for a particular appointment,

               *    maintain a  to-do list which will tickle you if you
                    fail to do something after a specified date,

               *    set a virtually infinite number of alarms,

               *    run reports on multiple appointment files,

               *    automatically repeat appointments,

               *    delete old appointments,

               *    run with or without SideKick,

               *    provide online help,

               *    show common secular and  religious holidays automa-
                    tically,

               *    allow  you  to  customize  the program for your own
                    needs and style of use,


                                         ii





               *    show you a calendar  for any  month in  the 20th or
                    21st century, and

               *    do much, much more....


               (iv)      The Future of PAL

               If the  release of this new version of PAL were held off
          until all  potential  goodies  were  implemented,  then you'd
          never get  a chance  to see  it.   PAL is,  and probably will
          always be, a work in progress.    On  the  drawing  board for
          future versions:

               *    Timed Events:  Make an alarm cause your computer to
          execute a batch file, run a program, or insert something into
          your application as if you were there typing at the keyboard.

               *    Enhanced Multiple Appointment Files:    Have    PAL
          read appointments  from multiple  SideKick appointment files,
          one or  more cloned  versions of PAL, one or more clone image
          files, and any combination of the foregoing.

               *    Pop-Up PAL:    Edit   the   appointment  scratchpad
          while running within another application.

               *    SideKick Plus compatibility.

               *    Context sensitive help.

               Registered  users  are  entitled to notices of upgrades.
          Upgrades within 6 months of payment for registration  will be
          made at a nominal cost; upgrades thereafter will be available
          at a discount for registered users.

               I have enjoyed creating PAL, and  I very  much hope that
          you enjoy  using it.   If  there is  something that you would
          like PAL to do that it  does not  presently do,  then express
          your desires.   Through comments from users like you, PAL has
          grown to what it is today.

                                        Robert D. Tolz, President
                                        PAL Software NY, Inc.
                                        Ossining, New York
                                        June, 1988








                                         iii





                                Table of Contents


     Chapter 1:     INTRODUCTION . . . . . . . . . . . . . . . . . . . .   1

     Chapter 2:     INSTALLATION . . . . . . . . . . . . . . . . . . . .   4
          2.1       System Requirements  . . . . . . . . . . . . . . . .   4
          2.2       PAL in hard disk systems . . . . . . . . . . . . . .   4
          2.3       PAL in floppy disk systems . . . . . . . . . . . . .   5
          2.4       PALARM . . . . . . . . . . . . . . . . . . . . . . .   5
          2.5       Screen Display . . . . . . . . . . . . . . . . . . .   6
          2.6       Customizing PAL  . . . . . . . . . . . . . . . . . .   7
          2.7       PAL.COM and PALARM.COM . . . . . . . . . . . . . . .   7

     Chapter 3:     SUMMARY OF OPERATION . . . . . . . . . . . . . . . .   8
          3.1       Menu Operation of PAL  . . . . . . . . . . . . . . .   8
          3.2       Entering a Command Line From the Menu  . . . . . . .   9
          3.3       Command Line and Batch Operation of PAL  . . . . . .  10
          3.4       Menu or Command Line?  . . . . . . . . . . . . . . .  12

     Chapter 4:     ONLINE HELP  . . . . . . . . . . . . . . . . . . . .  13

     Chapter 5:     REPORT MODE  . . . . . . . . . . . . . . . . . . . .  14
          5.1       What Does a Report Show? . . . . . . . . . . . . . .  14
          5.2       REPORT MODE Syntax . . . . . . . . . . . . . . . . .  15
          5.3       Date Control . . . . . . . . . . . . . . . . . . . .  16
          5.4       Toggle Switches  . . . . . . . . . . . . . . . . . .  16
          5.5       File Handling  . . . . . . . . . . . . . . . . . . .  18
          5.5.1          File Assumptions  . . . . . . . . . . . . . . .  18
          5.5.2          PAL's Appointment Scratchpad  . . . . . . . . .  19
          5.5.3          Overriding PAL's Assumptions  . . . . . . . . .  19
          5.6       Examples . . . . . . . . . . . . . . . . . . . . . .  20
          5.7       Special Memos  . . . . . . . . . . . . . . . . . . .  20

     Chapter 6:     SEARCH MODE  . . . . . . . . . . . . . . . . . . . .  22
          6.1       SEARCH MODE Syntax . . . . . . . . . . . . . . . . .  22
          6.2       SEARCH MODE Optional Parameters  . . . . . . . . . .  22
          6.3       What SEARCH MODE does  . . . . . . . . . . . . . . .  22

     Chapter 7:     THE APPOINTMENT SCRATCHPAD . . . . . . . . . . . . .  25
          7.1       Getting There  . . . . . . . . . . . . . . . . . . .  25
          7.2       The Appointment Scratchpad Menu  . . . . . . . . . .  25
          7.3       The Appointment Scratchpad Screen  . . . . . . . . .  26
          7.4       "A"dding Appointments  . . . . . . . . . . . . . . .  27
          7.4.1          Frequency . . . . . . . . . . . . . . . . . . .  28
          7.4.2          Setting Restrictions  . . . . . . . . . . . . .  28
          7.4.2.1             Once . . . . . . . . . . . . . . . . . . .  28
          7.4.2.2             Daily, Weekdays and Weekends . . . . . . .  28
          7.4.2.3             Weekly,  First,  Second,  Third,  Fourth,
                              Last . . . . . . . . . . . . . . . . . . .  29
          7.4.2.4             Biweekly . . . . . . . . . . . . . . . . .  30
          7.4.2.5             Monthly, Bimonthly, Quarterly  . . . . . .  30

                                         iv





          7.4.2.6             Annual . . . . . . . . . . . . . . . . . .  30
          7.4.3          Entering the Memo . . . . . . . . . . . . . . .  31
          7.4.4          Choosing the Time Slot  . . . . . . . . . . . .  31
          7.4.5          Saving (or Erasing) Your Choices  . . . . . . .  31
          7.5       "D"eleting an Appointment  . . . . . . . . . . . . .  32
          7.6       "E"diting an Appointment . . . . . . . . . . . . . .  32
          7.7       "F"inding an Appointment   . . . . . . . . . . . . .  32
          7.8       "N"ext Screen  . . . . . . . . . . . . . . . . . . .  33
          7.9       Removing "O"ld Appointments  . . . . . . . . . . . .  33
          7.10      "P"revious Screen  . . . . . . . . . . . . . . . . .  34
          7.11      "S"orting Appointments . . . . . . . . . . . . . . .  34
          7.12      "ESC"ape . . . . . . . . . . . . . . . . . . . . . .  36

     Chapter 8:     REMINDERS  . . . . . . . . . . . . . . . . . . . . .  37

     Chapter 9:     SK AUTO-REPEAT APPOINTMENTS  . . . . . . . . . . . .  38
          9.1       Single Character Auto-Repeat . . . . . . . . . . . .  38
          9.2       Special Auto-Repeat Sequences  . . . . . . . . . . .  39
          9.2.1          Daily types . . . . . . . . . . . . . . . . . .  40
          9.2.2          Weekly types  . . . . . . . . . . . . . . . . .  40
          9.2.3          Monthly types . . . . . . . . . . . . . . . . .  40
          9.2.4          Annual type . . . . . . . . . . . . . . . . . .  40
          9.3       Special Month Restrictions . . . . . . . . . . . . .  41
          9.4       Limiting the Number of Times to Repeat . . . . . . .  42
          9.5       Auto-Repeats Not Shown Within SideKick . . . . . . .  42
          9.6       Auto-Repeats in Appointment Scratchpad . . . . . . .  43

     Chapter 10:    SK DELETE and PURGE  . . . . . . . . . . . . . . . .  44
          10.1      Out of Date Appointments . . . . . . . . . . . . . .  44
          10.2      Deleting Auto-Repeat Appointments  . . . . . . . . .  45
          10.3      Putting Out the Garbage  . . . . . . . . . . . . . .  45
          10.4      Avoiding a Conflict With SideKick  . . . . . . . . .  46
          10.5      How to Safely Update When SK is Loaded . . . . . . .  47
          10.6      Multi-Tasking and Task-Switching Systems . . . . . .  48
          10.7      Knowing When to Use PURGE or DELETE  . . . . . . . .  49

     Chapter 11:    MULTIPLE SK APPOINTMENT FILES  . . . . . . . . . . .  50
          11.1      SideKick's Deficiency  . . . . . . . . . . . . . . .  50
          11.2      PAL's Solution . . . . . . . . . . . . . . . . . . .  50
          11.3      An Example . . . . . . . . . . . . . . . . . . . . .  51

     Chapter 12:    ALARMS . . . . . . . . . . . . . . . . . . . . . . .  52
          12.1      Auto-Repeat Alarms . . . . . . . . . . . . . . . . .  52
          12.2      PALARM . . . . . . . . . . . . . . . . . . . . . . .  52
          12.3      Two Ways to Set Alarms . . . . . . . . . . . . . . .  52
          12.4      Capacity for 10 Alarms . . . . . . . . . . . . . . .  53
          12.5      How to Kill or Snooze a Sounding Alarm . . . . . . .  53
          12.6      Controlling the Sound  . . . . . . . . . . . . . . .  54
          12.7      How to Write a Memo to Become an Alarm . . . . . . .  54
          12.8      Advance Alarms . . . . . . . . . . . . . . . . . . .  54
          12.9      Run PAL to Automatically Update Alarms . . . . . . .  56
          12.10     Editing Alarms Manually with PAL SET . . . . . . . .  56

                                          v





          12.11     Removing PALARM  . . . . . . . . . . . . . . . . . .  58

     Chapter 13:    CLONING NEW VERSIONS OF PAL  . . . . . . . . . . . .  60
          13.1      The Clone Procedure  . . . . . . . . . . . . . . . .  60
          13.1.1         Appointment Scratchpad  . . . . . . . . . . . .  61
          13.1.2         File Location Defaults    . . . . . . . . . . .  62
          13.1.2.1            The Second Directory . . . . . . . . . . .  62
          13.1.2.2            The Third Directory  . . . . . . . . . . .  62
          13.1.2.3            Appointment Calendar Name  . . . . . . . .  62
          13.1.2.4            Appointment Calendar Type  . . . . . . . .  62
          13.1.2.5            Report File Name . . . . . . . . . . . . .  63
          13.1.3         Holidays  . . . . . . . . . . . . . . . . . . .  63
          13.1.4         Miscellaneous Defaults  . . . . . . . . . . . .  64
          13.1.4.1            Default Command Line   . . . . . . . . . .  65
          13.1.4.2            Color Display  . . . . . . . . . . . . . .  65
          13.1.4.3            Reverse Video  . . . . . . . . . . . . . .  66
          13.1.4.4            Single Character Auto-Repeat . . . . . . .  66
          13.1.4.5            Effect of PURGE and DELETE . . . . . . . .  66
          13.1.4.6            Noise  . . . . . . . . . . . . . . . . . .  67
          13.1.4.7            Extended Alarm Report  . . . . . . . . . .  67
          13.1.5         Printer Defaults  . . . . . . . . . . . . . . .  67
          13.1.5.1            Initialization String  . . . . . . . . . .  67
          13.1.5.2            Exit String  . . . . . . . . . . . . . . .  67
          13.1.5.3            Lines Per Page . . . . . . . . . . . . . .  67
          13.1.6         Clone . . . . . . . . . . . . . . . . . . . . .  68
          13.1.7         <ESC> to quit without change  . . . . . . . . .  68
          13.1.8         The RESTORE Procedure . . . . . . . . . . . . .  69

     13.1.9         Saving and Reading CLONE Images  . . . . . . . . . .  69
          13.2      The PAL SET INSTALL Procedure  . . . . . . . . . . .  71
          13.2.1         Data File . . . . . . . . . . . . . . . . . . .  71
          13.2.2         Sound Level . . . . . . . . . . . . . . . . . .  72
          13.2.3         Snooze Feature  . . . . . . . . . . . . . . . .  72
          13.2.4         Clock and Date  . . . . . . . . . . . . . . . .  73
          13.2.4.1            Clock Visibility on Start-Up . . . . . . .  73
          13.2.4.2            Date Visibility on Start-Up  . . . . . . .  73
          13.2.4.3            Colors for Clock and Date  . . . . . . . .  73
          13.2.5         Cloning Your PALARM Changes . . . . . . . . . .  74

     Chapter 14:    TSR WARS, RAM CRAM AND MULTITASKING  . . . . . . . .  75
          14.1      TSR Wars . . . . . . . . . . . . . . . . . . . . . .  75
          14.2      Ram Cram and Multitasking  . . . . . . . . . . . . .  76
          14.3      Hints on PALARM with Multitasking  . . . . . . . . .  76
          14.4      PALARM and Task-switching Programs   . . . . . . . .  78

     Chapter 15:    SUPPORT AND UPGRADES . . . . . . . . . . . . . . . .  79

     Chapter 16:    LICENSE, WARRANTIES AND LIMITATIONS  . . . . . . . .  80
          16.1      Shareware License  . . . . . . . . . . . . . . . . .  80
          16.2      Commercial License . . . . . . . . . . . . . . . . .  80
          16.3      Further Shareware Distribution . . . . . . . . . . .  80
          16.4      Site Licenses and Dealer Pricing . . . . . . . . . .  81

                                         vi





          16.5      No Modifications Permitted . . . . . . . . . . . . .  81
          16.6      Limitations on Warranties and Remedies   . . . . . .  82

     Chapter 17:    REGISTRATION . . . . . . . . . . . . . . . . . . . .  83
          17.1      Shareware Version  . . . . . . . . . . . . . . . . .  83
          17.2      Commercial Version . . . . . . . . . . . . . . . . .  84

     Postscript:    SideKick Plus  . . . . . . . . . . . . . . . . . . .  85

     Acknowledgments . . . . . . . . . . . . . . . . . . . . . . . . . .  86











































                                         vii





                           Chapter 1:     INTRODUCTION


               Please check  your distribution files to see if you have
          received a  file  called  "PALREAD.ME".    If  so,  this file
          contains  additional  information  or  changes  which  do not
          appear in this documentation.   Use  the DOS  type command or
          any other file listing utility to read the file.

               PAL   is   distributed   in   three   "archived"  files:
          PAL2A.ARC, PAL2B.ARC and PAL2C.ARC.  The various files within
          these  archives  can  be  extracted  with PKXARC, a shareware
          program distributed by PKWARE, Inc.   If you  have received a
          shareware  disk  from  us  or  registered  or  purchased  PAL
          commercially, then you will find a program called PALINST.EXE
          on the  floppy distribution  disk.  This program will extract
          all the files from the three archives and  place them  into a
          subdirectory of your choice within your DOS path.

               You should have the following files:

                    PALREAD.ME          If present, contains latest
                                           information not included in
                                           this documentation.

                    PAL.EXE             PAL main program file
                    PAL.OVR             PAL overlay file

                    PALARM.EXE          PALARM program file

                    PALOFF.EXE          Removes PALARM from memory

                    PALDEMO.BAT         Demonstrate PAL
                    PALDICK.APP         Data file for PALDEMO.BAT
                    PALJANE.APP         Data file for PALDEMO.BAT

                    PAL.DOC             This documentation

               PAL is a utility which was initially designed especially
          for IBM-PC and  compatible  owners  who  use  SideKick.   PAL
          enhances SideKick's appointment calendar feature.

               Beginning with  this version  of PAL, even if you do not
          use SideKick, you will be able to use PAL by taking advantage
          of PAL's  own Appointment Scratchpad feature.  The only major
          feature which you would lose by  not using  SideKick would be
          the loss of the ability to pop up over an application program
          to  enter  an  appointment.    However,  you  can  obtain the
          equivalent of  pop-up use by employing multi-tasking or task-
          switching software such as Desqview or Carousel.

               If you would like a quick demonstration of some of PAL's

                                          1





          features, then run the batch file PALDEMO.BAT.

               PALARM is  a resident  alarm which is usable on IBM-PC's
          and compatibles, regardless whether you use SideKick.

               PAL provides online help, which is  available to  you by
          choosing the  help selection  from PAL's opening menu, or you
          can bypass the opening menu by typing "PAL  HELP" at  the DOS
          system prompt.

               Following is  a quick  overview of  each of the chapters
          contained in this manual.

               Chapter 2 describes the installation of PAL and PALARM.

               Chapter 3  summarizes  the  two  methods  of  using PAL:
          through menus or directly from the DOS system prompt.

               Chapter 4 describes how you can get help within PAL.

               Chapter 5 tells you how to get a report of your upcoming
          appointments and your old reminders.

               Chapter 6 shows you  how to  find a  particular appoint-
          ment.

               Chapter  7  describes  PAL's  own  internal  Appointment
          Scratchpad.  It is  this facility  which allows  PAL to stand
          alone, even if you do not have SideKick.

               Chapter 8  tells you  how to get PAL to remind you to do
          something.

               Chapters 9,  10  and  11  are  exclusively  for SideKick
          users.    Chapter  9  shows  how  you  can create auto-repeat
          appointments within  SideKick.   Chapter 10  describes how to
          get rid  of old  appointments in your SideKick file.  Chapter
          11 tells you how  to  combine  multiple  SideKick appointment
          files so that PAL can do a side by side search.

               Chapter 12 describes how to create alarms.

               Chapter 13  tells you how to customize PAL and PALARM to
          your own liking.   In  particular,  section  13.1  focuses on
          changes  to  PAL's  operation,  while section 13.2 focuses on
          changes to PALARM's operation.

               Chapter 14 contains  a  discussion  of  multitasking and
          possible conflicts with other resident programs.

               Chapter  15  describes  support  available to registered
          users.

                                          2






               Chapter 16 contains your license to  use PAL  and PALARM
          as  well  as  other  important  limitations.   Please read it
          carefully.

               Chapter 17 provides guidance on how to register.















































                                          3





                           Chapter 2:     INSTALLATION



               2.1       System Requirements


               You must be running on an IBM-PC or compatible computer.
          Some machines which are not 100% compatible and which include
          their own  screen displays  may have  some difficulty showing
          PAL well.   If  you have such a problem, then see section 2.5
          below for possible solutions.

               You will find it convenient if you have a clock/calendar
          within your  system which  sets the  clock and  date when you
          turn on  your computer.   If  you are  uncertain whether your
          machine sets  the time and date automatically, either through
          hardware or software, consult your manual or your installer.

               PAL requires at  least  138K  bytes  of  free  memory to
          operate.

               If  you  want  to  use  the resident alarm feature, then
          you'll need  an additional  30K bytes  to install PALARM.EXE.
          PALARM must  be loaded into memory for PAL's alarm feature to
          work.

               The term "free memory" means the  amount of  memory left
          over  after  you  have  installed  all  drivers  and resident
          programs.   You can  determine the  amount of  free memory by
          running the  DOS program  CHKDSK.  CHKDSK will report "xxxxxx
          bytes  free",  where  xxxxxx  stands  for  the  actual number
          reported.   To convert  that number  to "K" bytes, just knock
          off the last three digits on the right.

               A hard disk is  not  required,  but  is  strongly recom-
          mended.

               Expanded memory  (memory above  640K which meets the LIM
          specification) is not required.  However, if you do have 164K
          of expanded memory available, then PAL's overlay file will be
          loaded into that region  of your  computer and  accessed with
          lightning speed.



               2.2       PAL in hard disk systems


               To use  PAL in  a hard  disk system,  copy the following
          files to a single subdirectory which resides in your PATH (if


                                          4





          you  aren't  familiar  with  paths, check your DOS documenta-
          tion):

                    PAL.EXE   (the main program file)
                    PAL.OVR   (the overlay file)

               Invoke PAL by issuing the  command  "PAL"  from  the DOS
          system prompt.



               2.3       PAL in floppy disk systems


               To  use  PAL  in  a  floppy  disk  system, copy the main
          program file and the overlay file mentioned above to a single
          disk.   If you  use SideKick,  then use the disk on which you
          keep your SideKick appointment file.  Make sure that the disk
          containing PAL is in the current drive, or else that you have
          set your DOS PATH to look  in  that  drive.    Invoke  PAL by
          issuing the command "PAL" from the DOS system prompt.

               Operation from a floppy disk based system which does not
          have expanded  memory  may  seem  slow  as  PAL  accesses its
          overlay file from time to time.  Registered users may request
          a special, non-overlaid version of  PAL,  at  no  extra cost.
          The  tradeoff  in  using  the non-overlaid version is that it
          requires much more free memory to operate: 265K as opposed to
          138K.



               2.4       PALARM


               PALARM is the central switching station for your alarms.
          It remains resident, waiting to be  fed information  from PAL
          regarding the  alarms you  want to  trigger.   It then stands
          watch  over  your  system's  clock  and  calendar  until  the
          appointed  time  to  alert  you  with your audible and visual
          alarm.

               To use PALARM, make sure that the file  PALARM.EXE is in
          your current  drive and  directory or in your DOS path.  Then
          simply  type  "PALARM"  at  the  system  prompt  and  hit the
          carriage return.   You  will probably find it most convenient
          to place the "PALARM" command within  your AUTOEXEC.BAT file.
          PALARM  will  then  install  itself  and  remain  resident in
          memory.  You will not have  any further  need of "PALARM.EXE"
          until the next time you boot.

               If you  are using SideKick, PALARM must be invoked prior

                                          5





          to the  time that  you invoke  SideKick, so  place the PALARM
          command in your AUTOEXEC.BAT file prior to the SK command.

               When  PALARM  first  loads  itself  into memory, it will
          search your disk for the presence of a  file containing alarm
          information which  it may have previously written.  If PALARM
          detects an alarm that was supposed to have  been triggered at
          an earlier  time but  wasn't (because  your computer was shut
          off or  PALARM was  not loaded  at the  appointed time), then
          PALARM  will  sound  that  alarm  a  few  seconds after it is
          loaded.  This is your assurance that you will be  notified of
          all alarms  which were  scheduled for  a time when PALARM was
          unable to alert you.  Better late than never.



               2.5       Screen Display


               Persons  with  100%  compatible   monochrome  and  color
          monitors  will  ordinarily  find  PAL's  screen display quite
          comfortable.

               However, persons with less than 100% compatible displays
          which try to emulate the IBM color screen may have difficulty
          reading what PAL writes.  For instance, it is known that some
          laptop computers  which show  colors as shades of gray inter-
          pret some of PAL's color combinations very poorly.

               Solutions:

                    1.  The simplest solution is  to have  PAL write to
          your screen in basic black and white.

                    To see  quickly how  your screen will look in basic
          black and white, go to the directory in which the PALDICK.APP
          file resides  (this is a demo SideKick appointment file which
          is used  by  PALDEMO.BAT)  and  issue  the  command  "PAL 60C
          PALDICK".   If you  find the  display more readable, then you
          should CLONE PAL to always show  in  black  and  white.   See
          section  13.1.4.2.  Since  the  CLONE  procedure  itself  may
          display poorly on the  screen,  before  attempting  to CLONE,
          issue the  DOS command "MODE BW80" in order to turn off color
          generally within your system.  After you finish  cloning, you
          can restore color to your system with "MODE CO80".

                    2.   Another   possible   solution  to  the  screen
          display problem is to use the facilities that may be provided
          by  your  own  computer  manufacturer  for  dealing with such
          problems.    Many  computers  have  the  ability  to  emulate
          monochrome  monitors  rather  than  color  graphics adapters.
          Others may permit you  to  choose  from  several  palettes of

                                          6





          color  combinations  to  avoid  a  difficult display.  In any
          case, you should explore your  hardware  manual  to  see what
          options you have.



               2.6       Customizing PAL


               You may, if you like, customize PAL to your own specifi-
          cations in many respects.   See  the  sections  on  the CLONE
          procedure (section 13.1) and on the SET installation function
          (section 13.2) to understand the possibilities.


               2.7       PAL.COM and PALARM.COM

               Versions of PAL and PALARM  prior  to  version  2.0 were
          produced  as  "COM"  files  rather than the "EXE" files which
          come with version 2.0.   If  you have  used any  earlier ver-
          sions,  then  you  may  have  the files "PAL.COM" and/or "PA-
          LARM.COM" remaining  on your  hard disk.   If  so, this could
          cause confusion,  because DOS  will always execute a COM file
          before an EXE file of the  same name.   For  this reason, you
          should  either  delete  the  old  COM files or move them to a
          directory which is not within your DOS path.



























                                          7





                       Chapter 3:     SUMMARY OF OPERATION



               PAL may be run either through menus or directly from the
          DOS system prompt.



               3.1       Menu Operation of PAL


               PAL  is  distributed  so  that if you invoke the program
          without  any  additional  command  line  parameters,  it will
          present  you  with  a  menu  so  that you may choose from its
          various operations.  PAL's main menu appears as follows:

                   1.  Appointment Scratchpad
                   2.  Clone New Defaults
                   3.  Delete Old Appointments
                   4.  Enter Command Line
                   5.  Help
                   6.  Purge Deadwood From Appointment File
                   7.  Restore Original Distribution Defaults
                   8.  Set Alarms

                   <ESC> to exit program

               To select an operation on any  menu, hit  the alphabetic
          key, function  key or  numeric key which corresponds with the
          operation you desire to  activate.    No  carriage  return is
          required.

               Some of the foregoing choices on the main menu will lead
          you to other menus.  Just to give you an idea of the pathways
          you  can  follow  with  PAL's  menu  system, here's a diagram
          showing the menu structure:

                                 MAIN MENU
               ______________________|__________________
               |              |              |         |
               Appointment    Clone          Help      Set
               Scratchpad     Menu           Menu      Menu
               Menu           |                        |
                              Appointment              Alarms
                              Scratchpad               Menu
                              Menu

               For detailed information about the various choices, see:

               1.   For more information about the Appointment Scratch-
                    pad, see chapter 7.

                                          8






               2.   For  more  information  about cloning new defaults,
                    see chapter 13.

               3.   For more information  about  deleting  old appoint-
                    ments, see chapter 10.

               4.   For more information about entering a command line,
                    see chapter 5 for REPORT  MODE  and  chapter  6 for
                    SEARCH MODE.

               5.   For more information about online help, see chapter
                    4.

               6.   For more information  about  purging  deadwood from
                    the appointment file, see chapter 10.

               7.   For more  information about restoring original dis-
                    tribution defaults, see section 13.1.8.

               8.   For  more  information  about  setting  alarms, see
                    chapter 12.


               If  you  require  online  help,  just  choose  the  help
          function.  You will be presented with a  number of  topics to
          choose from.

               You may use the CLONE procedure to force PAL not to show
          the menu  on start  up, but  to perform  some other operation
          instead.

               Hint:

               If you  do clone PAL to perform a different operation on
          start up, you can  always  reach  the  main  menu  by issuing
          either "PAL MENU" or "PAL M" from the DOS system prompt.



               3.2       Entering a Command Line From the Menu

               If you  choose selection  4 ("Enter  Command Line") from
          the main menu, you will be able to  enter the  commands which
          instruct PAL  to perform any of its possible operations, with
          the same syntax you  would  use  if  you  were  summoning PAL
          directly from  the DOS  system prompt.   You will be provided
          with an on-screen reminder of the syntax that PAL uses.

               When entering a command line here, do not start with the
          word  "PAL"  as  you  would  from the DOS system prompt.  The
          initial word "PAL" is  assumed; you'll  see it  on the screen

                                          9





          already.

               Examples:

               If you  enter "7"  and hit return, PAL will give you a 7
          day report of your appointments.

               On the  other  hand,  if  you  enter  "PAL  7",  this is
          incorrect  syntax  since  the  word "PAL" is already assumed.
          What you have entered is equivalent to the entry "PAL  PAL 7"
          at the DOS system prompt.  You'll get an error message on the
          "booboo" screen.

               More often than not, you will be using  the command line
          to summon  PAL's REPORT  MODE to  show your upcoming appoint-
          ments, reminders and alarms, or to  summon PAL's  SEARCH MODE
          to search  for an  entry.   For more information about REPORT
          MODE, see chapter 5.  For more information about SEARCH MODE,
          see chapter 6.



               3.3       Command Line and Batch Operation of PAL


               As an  alternative to menu operation, you may invoke any
          of PAL's operations directly  from the  DOS system  prompt by
          adding  parameters  after  the  program  name.   Command line
          operation is especially useful for batch files.

               There are  many possible  parameters which  may be added
          after  the  program  name  to  instruct  PAL  to  perform its
          operations.  These include the following (the items which are
          shown within square brackets are optional):

                    PAL [@mm/dd/yyyy] n[ABCFHPR] [FILENAME]
                              for REPORT MODE
                              (see chapter 5)

                    PAL [@mm/dd/yyyy] $[BCFPR] SEARCHTERM [FILENAME]
                              for SEARCH MODE
                              (see chapter 6)

                    PAL APPOINT or PAL A
                              for invoking Appointment Scratchpad
                              (see chapter 7)







                                         10





                    PAL CLONE or PAL C
                              for invoking Clone procedure
                              (see chapter 13)

                    PAL DELETE or PAL D
                              for invoking Delete procedure
                              (see chapter 10)

                    PAL DELETEAUTO
                              for non-stop Delete procedure
                              (see 10.4)

                    PAL DELETEAUTOALL
                              for non-stop Delete procedure
                              (see 10.4)

                    PAL HELP or PAL H or PAL ?
                              for invoking online help
                              (see chapter 4)

                    PAL MENU or PAL M
                              for invoking Menu operation
                              (see chapter 3)

                    PAL PURGE or PAL P
                              for invoking Purge procedure
                              (see chapter 10)

                    PAL PURGEAUTO
                              for non-stop Purge procedure
                              (see 10.4)

                    PAL READIMAGE [FILENAME]
                              to read a Clone image
                              (see 13.1.9)

                    PAL RESTORE or PAL R
                              for invoking Restore procedure
                              (see 13.1.8)

                    PAL SAVEIMAGE [FILENAME]
                              to save a Clone image
                              (see 13.1.9)

                    PAL SET or PAL S
                              for invoking the Set procedure
                              (see 12.10 and 13.2)

               The shareware version contains a registration request at
          the conclusion of the program.  In order to exit  the program
          you have  to answer  two yes/no questions regarding registra-
          tion.  This requirement  to answer  yes/no makes  it inappro-

                                         11





          priate  to  use  PAL  in  an  unattended batch file operation
          unless there are no  significant commands  in the  batch file
          following the  invocation of PAL.  The only way to get around
          this impediment is to register  and  pay  for  a "commercial"
          version of PAL.

               The commercial version of PAL generally does not require
          any keystrokes to exit the program  when an  operation is run
          from the  DOS prompt.   There are two situations, however, in
          which PAL does wait for you to hit a key to exit the program.
          These are  (1) any  time the  "booboo" screen pops up (you'll
          know what the booboo screen is  the  first  time  you  make a
          mistake in  how you enter the parameters), and (2) any Report
          Mode or Search  Mode  operation  for  which  you  specify the
          optional  "B"  switch  (see  section  5.4) but which does not
          involve the "F" toggle switch (writing to a file) or  the "P"
          toggle switch  (sending the  report to  the printer).  Use of
          the optional "B" switch will pause the automatic execution of
          additional batch file commands that could obliterate informa-
          tion from the screen.



               3.4       Menu or Command Line?


               In general, once you get the hang of what PAL can do for
          you,  you  will  find  that  things  go more quickly by using
          command line operation directly from the DOS system prompt.

               Hint:

               The one instance in  which the  menu will  be more effi-
          cient is  if you want to perform more than one operation with
          PAL; in that situation,  rather  than  reloading  the program
          each time  you want to do something, you can quickly initiate
          each successive request directly from the menu.
















                                         12





                           Chapter 4:     ONLINE HELP



               You can invoke online help from  the beginning  menu, or
          directly from the DOS system prompt with "PAL HELP" , "PAL H"
          or "PAL ?".  To select a subject for help, hit the alphabetic
          key  which  corresponds  with  the  subject which you wish to
          review.  No carriage return is required.

               Additional help regarding alarms  is available  from the
          PAL SET  menu.   You reach  the PAL  SET menu by issuing "PAL
          SET" or "PAL S"  from the  DOS system  prompt or  by choosing
          "S", "8"  or "F8"  from PAL's main menu.  Once at the PAL SET
          menu, you can summon the additional help by striking "H", "4"
          or "F4".





































                                         13





                           Chapter 5:     REPORT MODE



               5.1       What Does a Report Show?


               When you  request a  report from PAL, you will first see
          PAL's title screen.  In the upper left hand corner,  PAL will
          provide  a  message  telling  you  the name of the file it is
          analyzing.  In the  center of  the top  line, as  PAL inserts
          your memos  in a  sorted manner  into your computer's memory,
          PAL may display the number  of  bytes  of  free  memory which
          remain as it does its work.  Here's a sample screen display:

Personal Appointment Locator
Ver. 2.0 Copyright 1988 PAL Software NY, Inc.            ----------------------
                                                         |April     20    1988|
Searching \SK\PAL.APP                                    |--------------------|
Today is Wednesday, April 20, 1988                       |      10:38:13am    |
14 entries listed for next 14 days:                      |--------------------|
                                                         |SU|MO|TU|WE|TH|FR|SA|
Wed, Apr 20 1988,  9:00 am   :Mr. Kurlin                 |--|--|--|--|--|--|--|
Wed, Apr 20 1988, 10:30 am   :Word processing demo       |27|28|29|30|31| 1| 2|
Wed, Apr 20 1988,  5:00 pm   :Run for the train@         |--|--|--|--|--|--|--|
                                                         | 3| 4| 5| 6| 7| 8| 9|
Thu, Apr 21 1988,  5:00 pm   :Run for the train@         |--|--|--|--|--|--|--|
                                                         |10|11|12|13|14|15|16|
Fri, Apr 22 1988,  5:00 pm   :Run for the train@         |--|--|--|--|--|--|--|
                                                         |17|18|19|20|21|22|23|
Mon, Apr 25 1988,  8:00 am   :Partner's Meeting          |--|--|--|--|--|--|--|
Mon, Apr 25 1988, 12:00 pm   :Lunch with Gracie @10      |24|25|26|27|28|29|30|
Mon, Apr 25 1988,  5:00 pm   :Run for the train@         ----------------------

Tue, Apr 26 1988,  5:00 pm   :Run for the train@


               When the  file is  completely read  and sorted, PAL will
          flash the first screen of the report.

               On the right side of the screen, you will see a calendar
          for the  current month, with today's date highlighted.  There
          will be a digital clock above the calendar, ticking away with
          the  present  time.    The  clock  will  continue as you page
          through the report.

               PAL  will  highlight  your  most  pressing appointments.
          Today's  appointments  will  show  in intense yellow on color
          monitors, and all appointments  after today  through the next
          business  day  will  be  highlighted in intense green.  Mono-
          chrome and black  and  white  monitors  will  show  all these
          appointments in reverse video.

                                         14






               The  memo  "Run  for  the  train @" is an auto-repeating
          weekday alarm which was produced by a single memo entry.

               When PAL has finished  showing you  your coming appoint-
          ments, it will then tell you if you have any future alarms to
          load into PALARM.  For information on alarms, see chapter 12.

               Then PAL will show you your old reminders, if any.   See
          chapter 8 for information on reminders.

               There are  a few  modifications to  the report which you
          can make with the CLONE procedure.  First,  you may  have PAL
          tell you  at the beginning of the report how many bytes could
          be saved from your  file  if  you  use  the  DELETE  or PURGE
          procedures.   Second, you  may have  PAL give you an extended
          report describing each of the  alarms  which  will  be loaded
          into memory.   Third,  you may  turn off  the sound which PAL
          makes as it displays each page.  For information on the CLONE
          procedure, see section 13.1.



               5.2       REPORT MODE Syntax


               Syntax for the REPORT MODE is:

                    PAL [@mm/dd/yyyy] n[ABCFHPR] [FILENAME]

               The only  required entries  at the DOS system prompt are
          the program name and "n", where "n" is the number of days you
          would like  the report  to encompass.  The maximum number for
          "n" is 32,767.  PAL can show memos  and holidays  through the
          year 2099.

               For instance,  "PAL 7"  would give  you a report of your
          next week's appointments.

               The remaining parameters are optional.   Do not  type in
          the brackets;  they are set forth above only to indicate that
          the items are optional.

               Note that all operations which can  be invoked  from the
          DOS system  prompt can  also be  entered at  PAL's main menu.
          See section 3.2.







                                         15





               5.3       Date Control


               The first optional parameter is to set the start date of
          the  report  at  other  than  your  present system date.  For
          instance, "PAL @1/1/88 7" will give you appointments  for the
          first week in 1988.

               Hint:

               If you  use the  "@" by itself without a following date,
          then PAL will assume  you mean  "@1/1/85"; this  is useful if
          you want  a shorthand method to begin a Report or Search from
          a very early date.  For instance, "PAL  @ 730"  will show all
          appointments for 1985 and 1986.



               5.4       Toggle Switches


               The  second  group  of  optional  parameters ("ABCFHPR")
          consists of toggle switches.   They  must be  specified imme-
          diately  following  "n",  without  intervening  spaces.  They
          stand for:

                    *    "A" disables the "A"larm updating function.

                    Any alarms which  PAL  finds  scheduled  within the
          appointment file  will not  be loaded.  This toggle switch is
          useful,  for  instance,  where  you  have  combined  your own
          SideKick appointment  file with  somebody else's  so that you
          can view  them  together,  but  you  do  not  want  the other
          person's alarms  to be  loaded into your system.  See chapter
          11 for information on combining several  SideKick appointment
          files.

                    *    "B" is  for batch  usage.  This forces reports
          to pause before exiting back to the DOS prompt, requiring the
          user to  strike a  key.   This switch would be useful only if
          you are invoking PAL  from a  batch file  and PAL  is not the
          final command  in the  batch file, thus preventing the report
          from scrolling  off the  screen while  the remaining commands
          execute.  Since the shareware version of PAL already requires
          user action to exit from the program, the "B" switch  is only
          necessary  in  batch  operation of the registered, commercial
          version of PAL.

                    *    "C" toggles "C"olor.

                    If you have a  color  display,  or  a  screen which
          tries  to  emulate  a  color  display  (such  as  many laptop

                                         16





          computers), then  PAL will  automatically attempt  to show in
          color.    You  may  prefer  to  see  a simple black and white
          display, or your laptop  may display  the colors  poorly.  If
          this is  the case,  then you should try the "C" toggle to see
          how the reports look with color turned off; e.g., "PAL 7C".

                    If you prefer to have color turned off permanently,
          then you can make the adjustment permanently within the CLONE
          procedure.  Once you  make such  a permanent  adjustment with
          the CLONE  procedure, the  meaning of  the "C" toggle is that
          you will temporarily be viewing the report in color.  The "C"
          toggle  switch  will  not  have  any  effect  with monochrome
          displays.

                    *    "F" sends your report to a "F"ile.

                    PAL uses the name  PAL.TXT for  the file.   You may
          change the  name with  the CLONE procedure.  When you specify
          "F", the screen display  will  not  pause  as  it  fills with
          appointments.  Instead,   the  appointments  will  scroll  by
          quickly as they are being written to the file.  You may force
          the scrolling to pause by hitting the key combination CTRL-S;
          strike any other key to continue scrolling.

                    *    "H" suppresses the reporting of "H"olidays.

                    This toggle switch is useful if  you want  to see a
          report of  your appointments without the clutter of holidays.
          PAL  will  ordinarily  show  several  holidays automatically.
          Within  the  CLONE  procedure,  you  may  turn  off  holidays
          individually,  and  you  can  make  PAL  show  several  other
          holidays which  the distribution  version is not set to show.
          See section 13.1.3 for information on holidays.

                    *    "P" sends your report to the "P"rinter.

                    PAL assumes that you would like  only 48  lines per
          page and that you would like a form feed at the conclusion of
          each page.  With  the CLONE  procedure, you  may change these
          assumptions and send tailor-made instructions to your printer
          immediately before and after  each report.   As  with the "F"
          parameter, when you specify "P", the screen will not pause as
          it fills with appointments.   Instead,  the appointments will
          scroll by quickly as they are being sent to the printer.  Use
          CTRL-S to pause and any other key to continue.

                    *    "R" suppresses auto-"R"epeat appointments.

                    This toggle switch is useful if  you want  to see a
          report without the clutter of repeating appointments.



                                         17







               5.5       File Handling


               The last  optional parameter  permits you to specify the
          complete name, including drive and  path  if  needed,  of the
          file you desire to examine.



               5.5.1          File Assumptions


               If you  do not  specify the  filename, then PAL will use
          its default assumptions for  the  name  and  location  of the
          file.    These  default  assumptions  can be set in the CLONE
          procedure.  On distribution, PAL assumes that the name of the
          file to  examine is  "APPOINT.APP" and  looks for it first in
          the current directory and the DOS path.  If PAL does not find
          APPOINT.APP, it  looks for  the file  in "C:\SK"  and then in
          "C:\".

               PAL allows you to specify your  filename in "shorthand".
          If you  specify a  directory only,  then PAL  will supply the
          filename and extension.   If you  specify a  directory plus a
          filename but leave out the extension, then PAL will automati-
          cally supply the assumed extension.  You can have PAL examine
          a file  that has  no extension  by adding  a period after the
          filename.

               Examples:

               For  instance,  assume  that  you  have  a  file  called
          "BUSINESS.APP" for your business appointments and "VIDEO.APP"
          to schedule all the TV shows you want to video tape, and that
          both files reside in "C:\SK".  The command line "PAL 7 VIDEO"
          will examine the file "C:\SK\VIDEO.APP".

               Similarly,  the  command  line  "PAL  7  BUSINESS"  will
          examine the file "C:\SK\BUSINESS.APP".

               The command  line "PAL 7" will cause PAL to look for the
          file "APPOINT.APP" in  the  series  of  directories described
          above, while  the command  line "PAL 7 C:\SK\" will force PAL
          to look for the file "C:\SK\APPOINT.APP".







                                         18





               5.5.2          PAL's Appointment Scratchpad


               In addition to examining the specified SideKick appoint-
          ment file,  PAL will  examine all  the appointments which you
          have  entered  in  PAL's  own  Appointment  Scratchpad.   See
          chapter  7  for  a  complete  description  of the Appointment
          Scratchpad.

               If you specify "Nofile" as the file to examine, then PAL
          will not  examine any  physical file  on your disk.  Instead,
          PAL  will  only  examine  the  Appointment  Scratchpad.   For
          instance:

                    PAL 30 NOFILE

          will force  PAL to  avoid looking in any SideKick appointment
          file and to focus its attention on the Appointment Scratchpad
          instead.

               If  you  are  not  using  SideKick  with  PAL,  then you
          absolutely must specify  "Nofile"  as  the  file  to examine.
          Otherwise,  PAL  will  always  be  looking for a non-existent
          APPOINT.APP.

               Instead of specifying "Nofile" each and  every time that
          you  run  PAL,  you  can  force  PAL  to  change its internal
          assumptions so that it will always act as  if you  had speci-
          fied "Nofile".  See section  13.1.2.3 for instructions on how
          to CLONE this change into PAL.  Once  you make  the change to
          "Nofile" with  the CLONE procedure, you can always explicitly
          name a SideKick file on the command line.



               5.5.3          Overriding PAL's Assumptions


               In general, if PAL's  assumptions  as  to  the  name and
          location of your appointment file are incorrect, then you may
          either:

               (1)  change   PAL's  assumptions   with  the  CLONE
               feature, or

               (2) change  the name  and location of your appoint-
               ment file in order to match PAL's assumptions, or

               (3) fully specify the  name and  location each time
               you invoke PAL.



                                         19






               5.6       Examples


               As an  example of  REPORT MODE, to see all your appoint-
          ments for the next week, issue the command "PAL 7".

               A very common use for PAL is to insert such a command as
          the last  line of your AUTOEXEC.BAT file, so that your coming
          appointments greet you when your computer finishes booting in
          the morning.   It  was for  this very purpose that the author
          wrote the first version of PAL in early 1985.

               Other examples:

               PAL @1/1/88 366hr
                    --  shows all appointments in  1988, sup-
                    presses holidays and auto-repeat appoint-
                    ments.

               PAL 30 nofile
                    --  shows appointments for next  30 days,
                    but only those which have been entered in
                    the Appointment Scratchpad.

               PAL @ 32000p myapp.
                    --  shows  appointments  for  32,000 days
                    starting  at   1/1/1985,  and  sends  the
                    report to your printer.   Looks  for file
                    MYAPP  (which  does  not  have a filename
                    extension).



              5.7        Special Memos


               In REPORT MODE, PAL will interpret some of your memos as
          having  special  meaning  and  will  provide  you with extra-
          special results when those memos are encountered.  They are:

                    *    Reminders:     Memos containing "!"

                    *    Alarms:        Memos containing "@"

                    *    Auto-Repeat:   SideKick  memos  containing any
                         of the following characters:   [ ] { } ~

               Caution:

               A  caution  for  persons printing out this documentation
          rather than  viewing it  on a  computer screen:   The special

                                         20





          characters  shown  on  the  immediately  preceding  line  are
          generally known as the left and  right square  brackets, left
          and right  curly braces  and the  tilde (a small, wavy line).
          Some printers  may  not  print  the  correct  image  of these
          characters.    Therefore,  if  you  have  any doubt as to the
          "truthfulness" of your  printer,  consult  PAL's  online help
          regarding auto-repeat appointments and view the characters on
          your screen; or you  can view  this documentation  with DOS's
          TYPE command  or any  other program  that permits you to view
          the documentation on your monitor.

               For details on reminders, see chapter 8.

               For details on alarms, see chapter 12.

               For details on  auto-repeat,  see  chapters  7  (for the
          Appointment Scratchpad) and 9 (for SideKick auto-repeat).




































                                         21





                           Chapter 6:     SEARCH MODE



               6.1       SEARCH MODE Syntax


               Syntax for the SEARCH MODE is:

                    PAL [@mm/dd/yyyy] $[BCFPR] SEARCHTERM [FILENAME]

          The  required  parameters  in  SEARCH  MODE are the program's
          name,  followed  by  the  "$"  character   (think  "$earch"),
          followed by the term for which you want PAL to search.



               6.2       SEARCH MODE Optional Parameters


               The optional parameters are identical to those permitted
          in REPORT MODE, with minor exceptions.

               For information regarding date manipulation, see section
          5.3.

               For  information  regarding  the  toggle  switches,  see
          section 5.4.  The  only  differences  in  the  effect  of the
          toggle switches  within SEARCH  MODE are that the "A"larm and
          "H"oliday  switches  have  no  effect,  and  the  "R"  switch
          prevents search of the Appointment Scratchpad.

               For information regarding the FILENAME, see section 5.5.



               6.3       What SEARCH MODE does


               SEARCH MODE is restricted to the single, simple function
          of conducting a search  for  your  "Searchterm"  through your
          file  and/or  through  PAL's  own  Appointment Scratchpad.  A
          search will pick up appointments which  fall on  or after the
          date of the report.

               The "Searchterm"  is the  string of  characters that you
          are trying to match.  The search is  insensitive to  upper or
          lower case.

               Suppose you  want to  search for  "Uncle Herman's Birth-
          day".  You can shorten the number of letters you type by just
          choosing a few.  Let's say you issue the command "PAL $ man".

                                         22





          You may get a search report that looks something like this:


Personal Appointment Locator
Ver. 2.0 Copyright 1988 PAL Software NY, Inc.            ----------------------
                                                         |March     7     1988|
Searching C:\SK\APPOINT.APP                              |--------------------|
The following matches have been found                    |       6:47:37pm    |
 for "MAN":                                              |--------------------|
                                                         |SU|MO|TU|WE|TH|FR|SA|
Scratchpad  # 15, Yearly     :Uncle Herman's Birthday    |--|--|--|--|--|--|--|
                                                         |28|29| 1| 2| 3| 4| 5|
Tue, Mar  8 1988,  2:00 pm   :Ullman appointment         |--|--|--|--|--|--|--|
                                                         | 6| 7| 8| 9|10|11|12|
                                                         |--|--|--|--|--|--|--|
                                                         |13|14|15|16|17|18|19|
                                                         |--|--|--|--|--|--|--|
                                                         |20|21|22|23|24|25|26|
                                                         |--|--|--|--|--|--|--|
                                                         |27|28|29|30|31| 1| 2|
                                                         ----------------------

               Notice that this search picked up another appointment as
          well.    You  would  have  picked up only the appointment you
          wanted if you had been more exclusive in your search  by, for
          instance, using "Herman" as your searchterm.

               In your  search report,  all matching appointments which
          are found  in  the  Appointment  Scratchpad  which  are auto-
          repeating  (that  is,  all  of  them  except  those which you
          designate with a frequency  of "once")  will be  clustered at
          the beginning  of the report with an indication that they are
          located in the Scratchpad, the number of the appointment slot
          within the  Scratchpad, and the frequency of the auto-repeat.
          For more  detailed  information,  you'll  have  to  enter the
          Appointment Scratchpad to see the restrictions imposed on the
          appointment.

               All  "carryforward"  appointments  from   your  SideKick
          appointment file  will also  be shown.   By "carryforward" we
          mean appointments which were  entered prior  to today's date,
          but which  are intended  to be  shown today  or after today's
          date, such as auto-repeat appointments and  reminders.  These
          carryforward appointments will be shown in your search screen
          as  occurring  on  the  day  for  which  they  were initially
          entered.   Thus, auto-repeat appointments are shown only once
          in Search Mode.  It is up  to  you  to  look  at  the special
          character codes that you have entered in the memo in order to
          determine when they will repeat.

               If your searchterm spans more than  a single  word, then
          you must  enclose the  entire searchterm  within quote marks;

                                         23





          otherwise, PAL will interpret the second word of  the search-
          term as the name of the file you wish to search.

               If you wish to search for a string which itself contains
          quote marks, then you must enclose each of  those quote marks
          themselves within quote marks.


               Examples:


               PAL @ $r ~
                    --  will pick  up all  appointments in your SK file
                    (the  "r"   disables  search   of  the  Appointment
                    Scratchpad)  after  1/1/85  which contain the tilde
                    character, which signifies an  auto-repeat appoint-
                    ment within a SideKick memo.

               PAL $c max
                    --  will pick  up "max",  "maxine", "maximum", etc.
                    in  your  default  appointment  file.     Color  is
                    toggled.

               PAL $ max planck
                    --  will  pick  up  same  as preceding command, but
                    will search a file  called "PLANCK.APP"  (if it can
                    be found).

               PAL $ "max planck"
                    --  will search for the words "Max Planck" in your
                    default appointment file.

               PAL $ "Pay Joey """The Hatchet""" !"
                    --  will search for the words:
                         Pay Joey "The Hatchet" !


















                                         24





                    Chapter 7:     THE APPOINTMENT SCRATCHPAD



               PAL's Appointment Scratchpad allows you to keep track of
          your appointments even if you do not have,  or prefer  not to
          use, SideKick.   You are provided with 60 slots to enter your
          memos, but by employing the easy  to use  auto-repeat editing
          capacity  within  the  Appointment  Scratchpad, the number of
          appointments you actually design could easily  exceed 60,000.
          Furthermore, by  using PAL's ability to save and read images,
          you can have an  infinite number  of Appointment Scratchpads,
          restricted only by available disk space.  See section 13.1.9.



               7.1       Getting There


               You can  reach the  Appointment Scratchpad  any of three
          ways.

               1.   From the DOS system prompt:

                         PAL APPOINT, or PAL A

               2.   From PAL's main menu:

                         Hit "1", "F1" or "A"

               3.   From PAL's CLONE menu:

                         Hit "1", "F1" or "A"



               7.2       The Appointment Scratchpad Menu


               When you first enter the Appointment Scratchpad, you are
          presented with the following simple menu:

                 Add, Delete, Edit, Find, Old, Sort, ESC to quit

               To  choose  any  of  the  operations, just hit the first
          letter of the operation  you wish  to perform,  or strike the
          ESC key to exit the Appointment Scratchpad.

               Use  the  cursor  keys  to  view  another  screenful  of
          appointments.  The Home key will always take  you to  the top
          screen, while  the End key will always take you to the bottom
          screen.  To page down through individual screens,  use either

                                         25





          the Page Down key, the right arrow key or the down arrow key.
          To page up through the  individual  screens,  use  either the
          Page Up key, the left arrow key or the up arrow key.

               If you perform a Find operation which results in a match
          for a  memo  which  is  located  on  a  screen  not currently
          visible, then  the menu will also show "Next" if the match is
          on a  screen with  higher numbered  appointments and/or "Pre-
          vious" if  there is  a match  on a screen with lower numbered
          appointments.



               7.3       The Appointment Scratchpad Screen


               When you enter the Appointment Scratchpad,  you will see
          your appointments  in tabular  form.  Here's a sample showing
          the first page:

No Frequency Restrictions                    Memo                       Timeslot
 1|Once     |11/07/1987x  1, ...............|Finish Documentation!     |  Title
 2|Once     |11/25/1987x  1, ...............|First Jersey              |10:30 am
 3|Weekly   |10/22/1987x 40, Thu............|Mtg with D.M. @45         | 7:30 pm
 4|Weekly   |10/27/1987x   , Tue............|Mtg with K.T. @45         | 7:30 pm
 5|1st Week |Always--------, Mon............|Partner's Meeting         | 6:00 pm
 6|1st Week |10/27/1987x  9, Tue............|Marianne @45              | 6:30 pm
 7|3rd Week |10/22/1987x  9, Thu............|Rhetta @45                | 6:30 pm
 8|3rd Week |10/27/1987x  9, Tue............|Lynn @45                  | 6:30 pm
 9|Yearly   |Always--------, 07/06/****.....|Delia's Birthday          |  Title
10|Yearly   |Always--------, 07/20/****.....|Aunt Ethel's Birthday     |  Title
11|Yearly   |Always--------, 10/16/****.....|Micah's Birthday          |  Title
12|Yearly   |Always--------, 12/21/****.....|Dad's Birthday            |  Title
13|Yearly   |Always--------, 11/21/****.....|Laura's Birthday          |  Title
14|Yearly   |Always--------, 02/06/****.....|Jesse's Birthday          |  Title
15|Yearly   |Always--------, 02/20/****.....|Phyllis' Birthday         |  Title

               As you can see, each appointment is numbered  (from 1 to
          60). The  columns show  the frequency with which the appoint-
          ment will appear, the restrictions which you have  imposed on
          the appearance  of that  appointment, the  memo which will be
          shown with REPORT MODE or SEARCH MODE, and the time  slot for
          which the memo will appear.

               To some extent, the facilities of REPORT MODE and SEARCH
          MODE are duplicated within  the Appointment  Scratchpad's own
          menu.   For instance, you may "F"ind a sequence of characters
          in the Appointment Scratchpad instead of  exiting and running
          a search.   You  may also  order the  appointments within the
          Appointment Scratchpad with the "S"ort command; however, only
          a  complete  report  in  REPORT  MODE  will  expand the auto-
          repeating appointments, show you  holidays, load  alarms, and

                                         26





          provide all the goodies available in REPORT MODE.





               7.4       "A"dding Appointments


               To  add  an  appointment  to the Appointment Scratchpad,
          just hit the "A"  key.   PAL will  select the lowest-numbered
          empty slot for your appointment to occupy.

               As you construct the record for the appointment you want
          PAL to  memorize,  PAL  will  guess  at  the  answers  to the
          questions posed  and will  display those guesses opposite the
          questions.  If you wish to accept PAL's guess, then  just hit
          the return  key.   Otherwise, enter  your own choice and then
          hit the return key.

               As soon as you finish answering each question,  PAL will
          convert your answer to start building a visual record of your
          choices.  When you complete all  of your  answers, the record
          will appear  in identical  form to all the other appointments
          which already reside in  the  Appointment  Scratchpad.   This
          record  will  appear  on  the line immediately below the last
          line of the Appointment Scratchpad.

               If you make a mistake while  building the  record, don't
          worry about  it.   Just keep hitting the return key in answer
          to all the rest of the questions until  you come  to the last
          query:   "Are you  satisfied with the record you have built?"
          --  which can be answered only with a "Y" or an  "N".  Strike
          the "N" key, and your erroneous information will disappear so
          you can try again.  Even if you  select "Y"  and the informa-
          tion in  your Appointment  Scratchpad is changed, the changes
          are not permanently accepted unless you  CLONE when  you exit
          the Appointment Scratchpad.















                                         27





               7.4.1          Frequency


               The  first  choice  you  are  requested  to  make is the
          frequency of the appointment:

          Enter desired frequency:  _____

       A. Once        D. Weekends    G. 2nd Week    J. Lst Week    M. Bimonthly
       B. Daily       E. Weekly      H. 3rd Week    K. Biweekly    N. Quarterly
       C. Weekdays    F. 1st Week    I. 4th Week    L. Monthly     O. Yearly


                    You will see an "A"  to  the  right  of  the "Enter
          desired  frequency:"  prompt.    If  you want to enter a non-
          repeating appointment, then just hit the return key to accept
          the "A"  selection.   Otherwise, choose  a letter that corre-
          sponds to the frequency  you desire  and then  hit the return
          key.



               7.4.2          Setting Restrictions


               Once you  have chosen the frequency for the appointment,
          then you will be asked for the manner in which you would like
          the appearance of the appointment to be restricted.



               7.4.2.1             Once


               Setting  restrictions  for  a  one-time  appointment  is
          simple.  All you  need to  do is  set the  date on  which the
          appointment  falls.    Use  the cursor keys to manipulate the
          month, day of month, and year.



               7.4.2.2             Daily, Weekdays and Weekends


               For daily, weekday  and  weekend  appointments  you will
          first be asked whether you would like to show the appointment
          always.

               If you answer "Y", then the  appointment will  be picked
          up by PAL for every appropriate day which is contained within
          your report, regardless of  the beginning  and ending  day of
          your report.

                                         28






               If you  answer "N",  then you will next be asked for the
          earliest date for which you  would  like  the  appointment to
          appear.  To manipulate the date, use the cursor keys as shown
          at the  bottom  of  the  screen.    For  weekday  and weekend
          appointments, you  will note that as you change the date with
          the cursor keys, the date will jump over  inappropriate dates
          so that, for instance, you cannot select a weekend date for a
          weekday appointment.

               If you have answered "N" to  the query  whether you want
          the appointment  to repeat  always, then after you select the
          date, you are asked  whether  you  would  like  to  limit the
          number of times for the appointment to repeat.  If you answer
          "N", then the appointment will repeat from the  date you have
          chosen  in  the  prior  step  until  the  end of your report,
          regardless of the ending date of your report (The Appointment
          Scratchpad will  reflect your choice by inserting a series of
          three "infinity"  characters in  the line  you are building).
          If you answer "Y", you may then select a number between 1 and
          255 to limit the number of repetitions.



               7.4.2.3             Weekly,   First,    Second,   Third,
                                   Fourth, Last


               The  procedure  for  restricting  weekly appointments is
          substantially  similar  to  the  discussion  for  restricting
          daily, weekday and weekend appointments.  The only difference
          is that prior to getting into any of the other questions, you
          are first  asked the  day of the week on which you would like
          the appointment to be reported.  Then you answer all the same
          questions outlined above in section 7.4.2.2.

               Appointments which  you request  to be scheduled for the
          first, second, third, fourth or last occurrence of a particu-
          lar day  of the  week in  each month  are restricted with the
          same steps as for  weekly  appointments.    However,  you are
          given  the  additional  opportunity  to  further restrict the
          appointment to be shown only in a particular month each year,
          so that,  for instance, you can set an appointment to fall on
          the fourth Thursday in November if you know of any holiday or
          appointment that could benefit from such a schedule.








                                         29





               7.4.2.4             Biweekly


               The procedure  for restricting a biweekly appointment is
          the same as for a weekly  appointment, but  with one signifi-
          cant difference.   Since it is important to know the starting
          date for a biweekly appointment (so  that PAL  knows which of
          the alternate  weeks you  want the  appointment to be shown),
          PAL goes directly  to  the  question  of  the  starting date.
          Thus,  you  are  not  given  the  opportunity  to designate a
          biweekly appointment as repeating "always".   However, if you
          do want  the appointment  to appear from the beginning of any
          report through the end of  any  report,  then  simply  pick a
          starting date  prior to  today (or  prior to any earlier date
          that you might  conceivably  specify  with  the "@MM/DD/YYYY"
          parameter on the command line) and do not restrict the number
          of times for the appointment to repeat.



               7.4.2.5             Monthly, Bimonthly, Quarterly


               If you select a monthly, bimonthly or quarterly appoint-
          ment, you will first be asked to specify the day of the month
          on which the appointment  must  appear.    For  bimonthly and
          quarterly appointments,  you must  then specify which monthly
          pattern to follow; for instance, for bimonthly you can choose
          either the even numbered months or the odd numbered months of
          the year.

               Once you have specified the day of the month, and, where
          appropriate, the  monthly pattern, you will then be given the
          opportunity to state whether the appointment  should be shown
          always.   As with  other types of appointments, if you answer
          "Y"es, then the appointment will be shown from  the beginning
          to the end of all your reports.  If you answer "N"o, then you
          must specify a start date and then will be asked  whether you
          wish to limit the number of repeats.



               7.4.2.6             Annual


               First you  will be asked to specify the month and day on
          which you would like  the annual  appointment to  fall.  Then
          you will  be given the opportunity to require the appointment
          to be shown always.  If you do not want it shown always, then
          you must  specify the  beginning date  and whether or not you
          want to limit the number of repeats.


                                         30







               7.4.3          Entering the Memo


               Now that you have chosen the frequency and  have set the
          restrictions for  your appointment, you may enter the memo as
          you would like it to appear  in your  report.   As with Side-
          Kick, your memo can be as long as 26 characters.

               Any  of  your  memos  in  the Appointment Scratchpad may
          contain the special codes to create  an alarm.   In  this way
          you can  readily create repeating alarms.  See chapter 12 for
          how to create an alarm within your memo.

               Since the Appointment Scratchpad has already learned the
          frequency  of  your  memo  and  the  restrictions on how your
          appointment will repeat, there is no need to  use any  of the
          valuable 26-character  memo space for the special codes which
          would have been needed in a SideKick memo to design  an auto-
          repeating appointment.



               7.4.4          Choosing the Time Slot


               You  may  choose  any  standard SideKick-type time slot,
          including "Title" and all half-hour intervals  from 8:00 a.m.
          through and  including 8:30 p.m.  Of course, with the ability
          to set  advance alarms  (see section  12.8), you  have a much
          wider choice  of times  at which  you can  be alerted to your
          appointments.



               7.4.5          Saving (or Erasing) Your Choices


               Once you have selected the time slot, you  will be asked
          whether you are satisfied with the record you built.

               If you  answer "N"o,  then the record will be erased and
          you will be returned to the Appointment Scratchpad menu.

               If you answer "Y"es, that you are indeed  satisfied with
          the  record,  then  your  new appointment will temporarily be
          added to the Appointment Scratchpad.  You will be able to see
          it inserted in the slot which was selected when you initially
          selected the "A"dd operation.  In order to  make the addition
          permanent,  you  must  CLONE  when  you  exit the Appointment
          Scratchpad.  You will be given this opportunity  when you hit

                                         31





          ESC to  leave the  Scratchpad.   If you  choose not to CLONE,
          then you  will  lose  the  changes  which  were  made  to the
          Appointment Scratchpad during this session.



               7.5       "D"eleting an Appointment


               To delete  an appointment  from the Appointment Scratch-
          pad, simply supply the number of the appointment  you wish to
          delete.  You will be asked to confirm that you want to delete
          the appointment.

               As with changes  made  using  the  "A"dd  operation (see
          section 7.3),  the changes  which you  make with the "D"elete
          operation take effect only temporarily.  To make  the changes
          permanent, you must CLONE when you "ESC"ape from the Appoint-
          ment Scratchpad.



               7.6       "E"diting an Appointment


               To edit an  appointment,  select  any  appointment slot.
          You will  then be  taken through each of the choices that you
          would have to make if you  were "A"dding  an appointment (see
          section 7.3).   The  difference here  is that if the slot you
          have selected to edit is already occupied, the  guesses which
          PAL  makes  for  the  answers  to the questions it poses will
          match the original information which you already have for the
          entry being  edited.   If you would like to retain any of the
          original information, just hit  the  carriage  return  key to
          accept that  default information.  To change the information,
          just enter the information  as you  would like  it to appear,
          then hit the return key.



               7.7       "F"inding an Appointment


               While within  the Appointment Scratchpad, you may search
          for an appointment without having to exit and run PAL  in its
          SEARCH MODE.   Of  course, you  may always  run PAL in SEARCH
          MODE to look for  an appointment,  and PAL  will turn  up the
          matches  in  both  your  SideKick  appointment file and PAL's
          Appointment Scratchpad.

               When you select the "F"ind operation, you will  be asked
          what you  want to  search for.  You can enter any sequence of

                                         32





          characters or words to search  for.    Do  not  use quotation
          marks to  surround groups  of words  as you would if you were
          using SEARCH MODE.  Hit the return key when you  are finished
          typing the term or terms you want to find.

               PAL will  then immediately  examine all  of the appoint-
          ments in the Appointment Scratchpad  to  see  if  there  is a
          match.    Lower  and  upper  case  characters will be treated
          identically.

               If PAL finds a match or matches, then those matches will
          be highlighted  in the Appointment Scratchpad screen, and PAL
          will report in the lower left hand corner the numbers  of the
          matched appointments.

               If there  is a  match located  on a screen with appoint-
          ments numbered higher than those on the visible  screen, then
          the "N"ext operation will appear in the menu, and hitting the
          "N" key will take you immediately to the  next screen  with a
          match on  it.   Similarly, if  there is  a match located on a
          screen with lower-numbered appointments,  then the "P"revious
          operation will  appear in  the menu,  and hitting the "P" key
          will take you immediately to the prior screen with a match on
          it.   You may  also use  the cursor  keys to page through the
          Appointment Scratchpad screens one by one.

               Choosing any operation other than "N"ext,  "P"revious or
          paging with  the cursor  keys will remove the highlighting on
          the found appointments.



               7.8       "N"ext Screen


               Immediately following a "F"ind operation, if  a match is
          found  in  an  appointment  which  resides  on  a screen with
          higher-numbered appointments than the  screen presently being
          shown, then  the "Next" selection will appear on the Appoint-
          ment Scratchpad menu.  By hitting  the "N"  key, you  will be
          taken directly to that screen.



               7.9       Removing "O"ld Appointments


               When you select the "O"ld operation, you are being given
          the  opportunity  to  delete  all  non-repeating appointments
          (those which  show in  the frequency  column as "Once").  You
          will be prompted whether or not you also  want to  delete old
          reminders, that  is, appointments  with the  "!" character in

                                         33





          them.

               It is possible that some of your auto-repeating appoint-
          ments for which you specified a limited number of repeats are
          indeed out of date.   However,  the "O"ld  operation will not
          automatically delete  them.   Since it  is possible that when
          you specified the limited number of  repeats you  gave only a
          rough guess,  it may  be inappropriate for PAL to assume that
          you want to get  rid of  the limited  auto-repeat appointment
          automatically.

               To cull  out the  auto-repeat appointments which are out
          of date by reason of the limitation on the number  of repeti-
          tions, you  must examine  each of  them, and  if you truly no
          longer need them, use the "D"elete operation.

               Hint:

               You may find  it  convenient  to  examine  limited auto-
          repeat appointments  by using the "S"ort operation to sort by
          number of repeats, thereby bring the limited appointments all
          together.   This will  force the time-limited appointments to
          be sorted between those  which  appear  only  once  and those
          which appear an infinite number of times.  See section 7.11.



               7.10      "P"revious Screen


               Immediately following  a "F"ind operation, if a match is
          found in an appointment which resides on a screen with lower-
          numbered appointments  than the screen presently being shown,
          then the "Previous" selection will appear  on the Appointment
          Scratchpad menu.   By  hitting the "P" key, you will be taken
          directly to that screen.



               7.11      "S"orting Appointments


               To sort appointments within  the Appointment Scratchpad,
          just hit the "S" key.  You will be presented with a number of
          choices as to the order in which you  would like  to sort the








                                         34





          appointments:

          A. Complete                   F. Start Date, Descending
          B. Memo                       G. Frequency, Ascending
          C. Time Slot, Ascending       H. Frequency, Descending
          D. Time Slot, Descending      I. Repeats, Ascending
          E. Start Date, Ascending      J. Repeats, Descending

               To run  a sort,  strike the  alphabetic key which corre-
          sponds with the type of sort you want.   To  get back  to the
          Appointment Scratchpad without sorting, strike the "Q" key to
          "Q"uit.

               Once you run a sort, you may then immediately re-sort on
          another category if you wish.  This will permit you to set up
          sorts within sorts, so that you can tailor the order  of your
          Appointment  Scratchpad  display  to  your  own  needs.   For
          instance, if you would like to  see your  appointments sorted
          mainly by  the number  of repeats  but would also like to see
          all appointments further  sorted  by  increasing  start date,
          then first  use sort  "E" (for the start date), then use sort
          "I" (for the number of repeats).

               Hint:

               In general, when you  want a  sort within  a sort  (or a
          sort  within  a  sort  within  a  sort, etc.), then the least
          significant category should be  sorted  first,  and  the most
          important category should be sorted last.

               If  you  select  "Complete"  (choice  A),  which  is the
          default choice, then  PAL  will  do  a  multiple  sort.   The
          sequence  of  the  complete  sort,  in order of most to least
          significant, is (1) ascending frequency, (2)  ascending start
          date, (3) ascending time slot, (4) ascending repeats, and (5)
          alphabetic.

               Selecting "Memo" (choice B), will sort alphabetically by
          your memo.

               "Time Slot,  Ascending" (choice C) will sort by the time
          slot in increasing order of time, while "Time  Slot, Descend-
          ing"  (choice  D)  will  sort  by the time slot in decreasing
          order of time.

               "Start Date, Ascending" (choice E) will sort by increas-
          ing order  of the commencement date of the appointment, while
          "Start Date, Descending" (choice F) will sort in reverse.

               When  sorting  by  start  date,  appointments  which are
          marked as "Always" (that is, they have no start date) will be
          considered to be earlier  than appointments  with a specified

                                         35





          start date.  "Always" appointments will also be considered to
          be equal to each other  in  start  date,  except  that annual
          appointments situated  next to  one another will be sorted by
          month and date, monthly type appointments (monthly, bimonthly
          and quarterly) will be sorted by day of the month, and weekly
          type appointments (weekly,  biweekly,  first,  second, third,
          fourth and last) will be sorted by the day of the week.

               "Frequency,  Ascending"  (choice  G)  will  sort  by the
          frequency order.  The order used for frequency  is that which
          is displayed  in the choices provided when you add or edit an
          appointment (see  section  7.4.1).    "Frequency, Descending"
          (choice H) will sort in the opposite order.

               "Repeats, Ascending"  (choice I)  will sort  by order of
          increasing number of repetitions, while "Repeats, Descending"
          (choice  J)  will  sort  by decreasing number of repetitions.
          Appointments which are not limited in  the number  of repeti-
          tions will be considered to repeat infinitely.

               If you  want to  quit back to the Appointment Scratchpad
          menu without sorting, then strike the "Q" key.



               7.12      "ESC"ape


               At the Appointment Scratchpad menu, once you hit the ESC
          key,  you  will  either  be  dropped  back  to the DOS system
          prompt, the main menu or to the CLONE menu, depending  on how
          you first entered the Appointment Scratchpad.

               If you  have made changes to the Appointment Scratchpad,
          then you must CLONE  them in  order to  save them.   PAL will
          automatically remind you of the need to CLONE unsaved changes
          when you exit back to the  DOS system  prompt or  to the main
          menu;  if  you  are  "ESC"aping  back to the CLONE menu, then
          you'll be reminded of your unsaved changes if  you attempt to
          exit the  CLONE menu  without saving.    If you choose not to
          CLONE, then the changes you  made  in  this  session  will be
          ignored.











                                         36





                            Chapter 8:     REMINDERS



               If you  want to  maintain a reminder list, then enter an
          appointment  either  with  SideKick  or  with  PAL's internal
          Appointment Scratchpad  and insert an exclamation point ("!")
          anywhere in  the memo.   If  the day  passes and  the memo is
          still  there,  then  PAL  will  remind  you of that memo in a
          special section of its report.

               This feature is designed to serve  as a  "tickler."  Any
          time you  have passed the day for which the reminder has been
          set, you will be specially alerted.    If  you  have  run the
          demonstration batch  file "PALDEMO" you will recall that Dick
          was supposed to have bought an engagement ring for Jane quite
          a long time ago.

               Hint:

               Once you no longer require a memo to be characterized as
          one of these tickling reminders, all you need to do  is enter
          SideKick or  PAL's Scratchpad,  as the  case may be, and edit
          the memo to delete the "!",  or else  delete the  memo in its
          entirety.

               Caution:

               You  cannot  create  automatically  repeating reminders.
          PAL will tickle you only for the actual, physical entry which
          you  make,  but  not  for any repetitions of that appointment
          which it  interprets  with  its  auto-repeat  function.   For
          instance, study the two following appointments:

                    Pay mortgage!
                    Pay car loan!]

          Assuming  that  both  are  entered  on March 1, 1988, then on
          March 2, 1988 and thereafter both  will appear  in the remin-
          ders section  of your report.  If you have asked for a report
          which extends beyond March 31, 1988, then since  the car loan
          memo is a monthly auto-repeat (see section 9.1), you will see
          the car loan memo  on the  first day  of each  month which is
          included in the report.  However, in the reminders section of
          the report, you will see each of those  memos only  once.  To
          be reminded  for more  than a  single date,  you must enter a
          memo on each date for which you want to be tickled.






                                         37





                   Chapter 9:     SK AUTO-REPEAT APPOINTMENTS



               If you  are not  using SideKick  with PAL,  you can skip
          this chapter 9 in its entirety.

               PAL has  extensive facilities to automatically repeat an
          appointment.  You may combine the auto-repeat capability with
          the alarm function to have an automatically repeating alarm.

               PAL's  Appointment  Scratchpad  gives  you a very simple
          method to automatically repeat appointments, but  that is not
          the focus  of this chapter.  Instead, this chapter focuses on
          creating auto-repeat appointments with SideKick.   For an in-
          depth discussion  of the  Appointment Scratchpad, see chapter
          7.



               9.1       Single Character Auto-Repeat


               Daily, weekly, monthly and  annual  appointments  may be
          repeated in  either of two ways.  That is, you may either use
          a single character or  a sequence  of characters.   All auto-
          repeat patterns  other than daily, weekly, monthly and annual
          require a special sequence of characters to be set.

               If you want to have an appointment come  up periodically
          on a  daily, weekly,  monthly or  annual basis,  then you may
          insert characters as follows:

               Annual:

                    Use the left bracket ("[") or the sequence "~A"


               Monthly:

                    Use the right bracket ("]") or the sequence "~M"


               Weekly:

                    Use the left curly brace ("{") or the sequence "~W"


               Daily:

                    Use  the  right  curly  brace ("}") or the sequence
                    "~D"

                                         38






               The four single-character codes are found on two keys on
          your keyboard.   To  remember their use, it may be helpful to
          visualize them as follows:

                weekly        daily
                    \        /
                     \      /

                      {    }
                      [    ]

                     /      \
                    /        \
                annual        monthly

               Thus, for instance, if you would like PAL  to remind you
          of your client's wedding anniversary so that you can remember
          to send out a greeting card and thereby  be assured  that the
          client will  view you as a thoughtful person entitled to even
          more business, then either of the following two  methods will
          produce an annual auto-repeat of that memo:

                    Mr. Money Anniv.  [
                    Mr. Money Anniv.  ~A

               The  single-character  codes  (the  square  brackets and
          curly brackets)  were chosen  because of  the likelihood that
          they would  be infrequently  used in your memos.  However, in
          the event that you find that it is  more important  to you to
          use  the  square  brackets  and  the  curly  brackets as text
          instead of  as auto-repeat  characters, then  you may disable
          them as  auto-repeat characters.   To do so, simply enter the
          CLONE procedure and  make  the  change  described  in section
          13.1.4.4.



               9.2       Special Auto-Repeat Sequences


               More  complex   auto-repeat  patterns  can  be  inserted
          through the use of the tilde ("~") character.  PAL interprets
          the tilde  as a  signal that the next character or characters
          represent the codes for  a special  pattern.   You may follow
          the tilde with any of the following combinations:







                                         39







               9.2.1          Daily types


               ~D   Daily
               ~WD  Weekdays
               ~WE  Weekends



               9.2.2          Weekly types


               ~W   Weekly
               ~WO  Biweekly (think "Week Other")
               ~1   First occurrence of that day in each month
               ~2   Second occurrence of that day in each month
               ~3   Third occurrence of that day in each month
               ~4   Fourth occurrence of that day in each month
               ~L   Last occurrence of that day in each month



               9.2.3          Monthly types


               ~M   Monthly
               ~MO  Bimonthly (think "Month Other")
               ~Q   Quarterly



               9.2.4          Annual type


               ~A   Annually


               Each of these patterns will repeat starting with the day
          for which the appointment has been entered, with  the follow-
          ing exceptions:

               *    If  you  enter  a  ~WD appointment on a Saturday or
          Sunday it will not  commence  repeating  until  the following
          Monday.

               *    If you enter a ~WE appointment on a weekday it will
          not  commence  repeating  until  the  first   Saturday  which
          follows.

               *    If you  enter patterns  ~1 through  ~L, and the day

                                         40





          for which you have entered the appointment does  not coincide
          with  the  occurrence  that  you  have  specified,  then  the
          appointment  will  not  repeat  until  the  first appropriate
          occurrence thereafter.   For  instance, suppose that you have
          entered "Department meeting ~2"  in a  timeslot for Thursday,
          October  15,  1987.    Your  specified  pattern calls for the
          appointment to repeat on the second  Thursday of  each month,
          but the date on which you entered the appointment is actually
          the third Thursday of  October, 1987.   The  auto-repeat will
          not  commence  until  the  second  Thursday  of the following
          month:  Thursday, November 12, 1987.



               9.3       Special Month Restrictions


               The patterns of ~1 through ~L may be  further restricted
          to a particular month.  The way to impose this restriction is
          to add a single  character  at  the  end  of  the  pattern to
          signify the desired month.  The characters to add are:

                    1    --   January
                    2    --   February
                    3    --   March
                    4    --   April
                    5    --   May
                    6    --   June
                    7    --   July
                    8    --   August
                    9    --   September
                    O    --   October
                    N    --   November
                    D    --   December

               Thus, for  instance, you can make Thanksgiving appear on
          the appropriate date each year by entering the following memo
          in any Thursday timeslot:

                         Thanksgiving ~4N

          Of  course,  PAL  itself will automatically show Thanksgiving
          for you, but you get the  idea.   This month-limiting feature
          may be  useful for  special holidays  for which  PAL does not
          provide.








                                         41





               9.4       Limiting the Number of Times to Repeat


               An additional  useful function  which PAL  permits in an
          auto-repeat appointment  is to  specify the precise number of
          times that you would like the appointment to repeat.  This is
          accomplished simply  by placing  the number  sign ("#") imme-
          diately following the pattern  which  you  have  already con-
          structed, and  then following the number sign with an integer
          between 1  and 255  to signify  the limitation.   Placing the
          number sign  in any position other than immediately following
          your auto-repeat pattern will be ignored by PAL.

               To help understand this ability to limit the  repeats to
          a specified number, compare the following two entries:

                    Pan Am Flt #7~m
                    Pan Am Flt ~m#7

               The first  memo will display as "Pan Am Flt #7" and will
          appear every single  month,  without  restriction  as  to the
          number of  times displayed.   The second memo will display as
          "Pan Am Flt" and  will repeat  monthly for  7 times beginning
          with the date for which it was originally entered.

               If  you  do  not  limit  the  number of repeats with the
          number sign, then the  memo will  repeat through  to the last
          day of  your report, regardless of the number of days in your
          report.



               9.5       Auto-Repeats Not Shown Within SideKick


               Caution:

               One  final  caution  regarding   using  the  auto-repeat
          ability within  SideKick's appointment file.  It is important
          to understand that what  is happening  with PAL's auto-repeat
          function  is  that  PAL  is interpreting a single memo within
          your SideKick file and showing it multiple times within PAL's
          own  report.    That  memo  will not be reproduced physically
          within SideKick's own file.   Therefore,  when you  use Side-
          Kick's calendar pad to page through the appointment file, you
          will NOT see a repeating appointment  unless you  are looking
          at the actual day on which you entered the appointment.

               For  this  reason,  if  you use auto-repeat appointments
          within SideKick and want  to know  whether a  particular time
          slot is available to make a new appointment, you will be best
          off by using PAL first to report on what's doing for the day.

                                         42





          Once you have determined with PAL that you have the time, you
          can then invoke SideKick to actually enter the appointment.


               9.6       Auto-Repeats in Appointment Scratchpad


               Once you start playing  with the  character sequences to
          generate  automatically-repeating  appointments in a SideKick
          memo, you may rue  the 26  character limitation  in each time
          slot.   The auto-repeat  character sequence, depending on the
          restrictions you impose, may take up much more space than you
          would like.

               The  logical  alternative  is  to  make use of PAL's own
          internal Appointment Scratchpad,  where  auto-repeat appoint-
          ments can  be designed without using up any of the 26 charac-
          ter limitation  for your  memo.   See chapter  7 for complete
          information about the Appointment Scratchpad.


































                                         43





                       Chapter 10:    SK DELETE and PURGE



               If you  are not  using SideKick  with PAL,  you can skip
          this chapter 10 in its entirety.

               PAL has the  ability  to  get  rid  of  entries  in your
          SideKick appointment file which are of no further use to you.
          If you would like to see the amount  of space  that you could
          save  in  your  SideKick  appointment  file  by employing the
          DELETE or  PURGE procedures,  then by  making the appropriate
          changes  within  the  CLONE procedure (see section 13.1.4.7),
          you can have PAL advise you of the benefits each time you run
          a report.

               To remove old appointments from the Appointment Scratch-
          pad, use the "O"ld  function from  the Appointment Scratchpad
          menu.    See  section  7.9.    Deleting old appointments from
          SideKick's file is  the  subject  of  the  remainder  of this
          chapter.



               10.1      Out of Date Appointments


               If you'd  like to  delete all your old appointments from
          the  SideKick  appointment  file,  then  invoke   the  delete
          function with  "PAL DELETE"  or choose "Delete" from the main
          menu.  This will get rid of all your out of date appointments
          except for reminders ("!") and auto-repeat appointments.  PAL
          will  specifically  ask  if  you  would  like  to  delete old
          reminders as  well, and  will do so if you answer "Y"es.  PAL
          will not automatically  delete  old  auto-repeat appointments
          whose usefulness has expired.

               The DELETE  procedure has  no effect  on the Appointment
          Scratchpad.

               Caution:

               Beware!  When you DELETE old  appointments, the SideKick
          file is  changed so  that you will not be able to recover the
          old appointments  unless you  have previously  saved a backup
          copy of the file.







                                         44





               10.2      Deleting Auto-Repeat Appointments


               The DELETE  procedure, as  stated above, will not delete
          old automatically  repeating appointments.   This  is so even
          though it  is possible  that an auto-repeat appointment whose
          number of repeats has been limited may indeed be out  of date
          (see section  9.4 for an explanation of how you can limit the
          number of repeats in a SideKick  memo).   The reason  that we
          have implemented PAL so as not to delete such appointments is
          that we recognize that  you  may  have  merely  estimated the
          number of times that you want the appointment to repeat.

               Hint:

               If  you  want  to  examine your time-limited auto-repeat
          appointments to make a  conscious decision  whether to delete
          any of  them, then  simply ask  PAL to locate them for you so
          you can examine them.  To locate the time-limited auto-repeat
          appointments  within  your  SideKick  file,  search  for  the
          special character that signifies the limited  number, the "#"
          character.    The  command  to search for those appointments,
          starting from 1/1/85, is "PAL @ $ #".



               10.3      Putting Out the Garbage


               The DELETE procedure will also get  rid of  some useless
          records  in  your  appointment  file  which SideKick tends to
          leave there even after you delete  them with  SideKick.  When
          you delete  an appointment  with SideKick,  SideKick does not
          physically remove the bytes from its file.  Instead, all that
          SideKick does is place a special code within the file so that
          the appointment then becomes invisible.

               If all you want  to do  is collect  and dispose  of this
          garbage but  leave your old visible appointments intact, then
          use the command "PAL PURGE" or  choose "Purge"  from the main
          menu.   The PURGE  procedure has no effect on the Appointment
          Scratchpad.

               The  DELETE  procedure  will  automatically  invoke  the
          garbage collection  procedure that PURGE uses, so you needn't
          invoke both procedures separately.







                                         45





               10.4      Avoiding a Conflict With SideKick


               If PAL detects that  SideKick  is  not  loaded,  it will
          automatically  change  your  appointment file and rewrite the
          new, clean version to disk.    However,  PAL  will  refuse to
          upgrade your file automatically if it senses that SideKick is
          resident within your system.  Instead, PAL creates a new file
          with the name "CLEAN.APP" and instructs you to copy CLEAN.APP
          over your existing file when SideKick is not loaded in memory
          or when  you know  that SideKick  is not attached to the file
          that has just been cleansed.

               Caution:

               If  you  have  multitasking  software  or task-switching
          software in  your system,  PAL may  not be  able to sense the
          presence of SideKick.  If  you  have  such  software  in your
          system, please read section 10.6 carefully.

               The reason  for this protection is that we have observed
          that SideKick has at times had problems writing  new appoint-
          ments  to  its  appointment  file  when  that  file  has been
          shrunken (by PAL) without  its knowledge,  with the potential
          result of  scrambling data  on your  disk!   For this reason,
          please heed PAL's warnings!

               For convenience, we  supply  you  with  three additional
          command line  alternatives which you may find useful to place
          in your AUTOEXEC.BAT file  prior to  the command  which loads
          SideKick.  Each of these commands will perform its operations
          to their conclusion, without pausing to  provide instructions
          or  to  request  input  from  the  user.   If PAL senses that
          SideKick is loaded when these commands  are issued,  then the
          requested operation will not be completed.

                    PAL DELETEAUTO
                         Deletes all out-of-date appointments,
                         except for old reminders.
                         Also performs "PURGEAUTO".

                    PAL DELETEAUTOALL
                         Deletes all out-of-date appointments,
                         including old reminders.
                         Also performs "PURGEAUTO".

                    PAL PURGEAUTO
                         Deletes only the empty appointments left
                         behind when you erase an appointment within
                         SideKick's calendar.



                                         46






               10.5      How to Safely Update When SK is Loaded


               We strongly  recommend against DELETING or PURGING while
          SideKick is loaded and encourage you to follow the procedures
          set forth  earlier in  this chapter.   If you do follow those
          procedures, then  there  is  no  need  for  you  to  read the
          remainder of this section.

               If, however, you have a particular need to use DELETE or
          PURGE while SideKick is loaded, then please read this section
          carefully.    If  you  have  multi-tasking  or task-switching
          software in your  system,  please  read  section  10.6 before
          attempting to employ these procedures.

               When PAL  senses that  SideKick is loaded, PAL tells you
          it is  not automatically  updating your  appointment file but
          instead  is  creating  the  file  CLEAN.APP.  There are three
          methods  you   can  follow   to  copy   CLEAN.APP  over  your
          APPOINT.APP:

                    1.   First, if  and only  if you  have not yet used
               SideKick's appointment entry pad  since you  booted your
               computer, then SideKick will not yet be attached to your
               appointment file.  You may then perform the copy.

                    2.  Second, you  can  remove  SideKick  from memory
               before issuing  the copy  command.   Follow the instruc-
               tions in your SideKick manual to do this.  Go  ahead and
               copy the appointment file.  You may then reinstall Side-
               Kick.

                    3.  Third, you can force SideKick (without removing
               it  from  memory)  to  recognize  the  new  size of your
               cleansed appointment file with  a  little  bit  of fancy
               footwork:

                         a)   Pop  up  SideKick  and  force  it to
               disattach  itself  from  your  original appointment
               file by doing the following.  Call up the calendar,
               then  enter  the  appointment   entry  pad  (Alt-L,
               followed by  Return).  Hit "F2" to tell SideKick to
               attach itself to a new file  name for  the appoint-
               ment file.  Give it the name of any file other than
               the original appointment file  which  PAL  has just
               cleansed.   Press return to make sure that SideKick
               has accepted your new choice of file.  SideKick has
               now disattached  itself from your original appoint-
               ment file.  Drop out of SideKick and  return to the
               DOS system prompt.


                                         47





                         b)   Now:  "COPY CLEAN.APP APPOINT.APP".

                         c)   Pop up  SideKick again, and reattach your
               original appointment file by using the "F2" selection in
               the appointment  entry pad and supplying the name of the
               original file.   SideKick  now  will  be  operating with
               correct  information   regarding  the   length  of  your
               cleansed file.



               10.6      Multi-Tasking and Task-Switching Systems


               Persons who use  multi-tasking  systems  (e.g. Desqview,
          Taskview, Topview)  or task-switching systems (e.g. Carousel)
          must exercise extra-special caution, because PAL  will not be
          able  to  sense  when  SideKick  is  loaded in a partition of
          memory different from that from which PAL was invoked.

               In particular, PAL will be able  to sense  SideKick only
          if  (a)  SideKick  has  been  made resident globally prior to
          installation of the multi-tasking or task-switching software,
          or (b)  if PAL  is run within the separate partition in which
          SideKick has been made resident.

               When SideKick is made resident within one partition, and
          you  ask  PAL  to  run  either the DELETE or PURGE procedures
          within another  partition,  PAL  will  merrily  go  about its
          activity  oblivious   to  SideKick's  presence  in  a  hidden
          partition of your system  and will  change your  file without
          the built-in precautions described above.

               To avoid  potential data  loss in multi-tasking or task-
          switching systems, you may exercise any one of  the following
          precautions:

                    1.   Refrain from using DELETE and PURGE during the
               normal course of your  computer usage.   Instead, insert
               one of  the automatic  batch file commands (described in
               section 10.4 above) within your AUTOEXEC.BAT  file prior
               to the command which loads SideKick.

                    2.   If you must use the DELETE or PURGE procedures
               while SideKick is loaded in your system, make  sure that
               SideKick is  not hidden  from PAL  in another partition.
               You can assure yourself of this by either:

                         (a)     loading   SideKick  globally
                         before  your  multi-tasker  or task-
                         switcher, or


                                         48





                         (b)  if you load SideKick after your
                         multi-tasker  or task-switcher, then
                         use PAL only within the partition in
                         which SideKick is loaded.

                    3.   You  may  run  PAL  DELETE  or  PAL PURGE with
               complete safety from a partition which differs from that
               in  which  SideKick  resides  only  if  the operation is
               performed prior to your first use of SideKick's calendar
               since you last booted your computer.

                    4.   If  you  mistakenly  run  the  DELETE or PURGE
               procedure from a partition which differs from SideKick's
               partition, and  if SideKick's  calendar has already been
               invoked, then refrain from permitting SideKick  to write
               any  additional  appointments  to  your appointment file
               until you follow the "fancy footwork" instructions under
               option 3 described in section 10.5.



               10.7      Knowing When to Use PURGE or DELETE


               If you would like to know how many bytes you can save in
          your appointment file with  these  garbage  collection proce-
          dures, then  you can  enter the  CLONE procedure, call up the
          screen for Miscellaneous Defaults,  and ask  PAL to  show you
          the effect of the PURGE and DELETE procedures.  The next time
          you run PAL in REPORT MODE,  you will  receive information at
          the head  of the report showing the number of bytes you could
          save if you use either procedure.  See section 13.1.4.5.





















                                         49





                  Chapter 11:    MULTIPLE SK APPOINTMENT FILES



               PAL offers the ability to  merge  two  or  more SideKick
          appointment files in order to view them together.  If you are
          not using SideKick with PAL, you can skip this chapter  11 in
          its entirety.



               11.1      SideKick's Deficiency


               SideKick by  itself has no capability for simultaneously
          viewing the appointments of two or more persons.  In particu-
          lar, you can merge two files into a single file to be read by
          SideKick, but if both files  contain  an  appointment  on the
          same day at the same time, SideKick will show you only one of
          the appointments in the time slot.   PAL  corrects this defi-
          ciency.



               11.2      PAL's Solution


               If  you  keep  more  than one appointment file and would
          like to view them  together to  check on  conflicts or common
          free time,  then copy  them together  (using the "/b" parame-
          ter), and view the combined file with PAL.  For  instance, if
          Dick uses  DICK.APP and Jane uses JANE.APP, use the following
          command to combine the files into TOTAL.APP:

                    COPY DICK.APP + JANE.APP TOTAL.APP /b

          Then use PAL on the combined file:

                    PAL 7 TOTAL

               If you fail to use the "/b" parameter, then the combined
          file will  not have the correct number of bytes, and PAL will
          refuse to recognize it as a valid appointment file.

               If any  of  the  files  to  be  combined  contains alarm
          appointments, then you may or may not want PAL to load all of
          the alarms from all of the files.  By default,  PAL will load
          all alarms  which it  senses.  One of the command line toggle
          switches which might be appropriate for using here is the "A"
          parameter, which  turns off alarm loading.  To turn off alarm
          loading when reporting on the combined file, use  the command
          "PAL 7A TOTAL".

                                         50








               11.3      An Example


               Suppose   a   single  appointments  secretary  maintains
          appointments  for  six  lawyers  on  her  own  computer using
          SideKick.    She  uses  files  named "JOHN.APP", "SUSAN.APP",
          "ROBERT.APP" and so forth, all in the "\SK" directory.  There
          are no other "*.APP"      files  in  her  system.  Here's the
          contents of a simple batch file which she could write to give
          her a  hard-copy printout  of everyone's appointments for the
          next week:

                    CD \SK
                    DELETE ALL.APP
                    COPY *.APP ALL /B
                    REN ALL ALL.APP
                    PAL 7PA ALL

               This batch file first changes to the directory  on which
          the *.APP  files can  be found,  then deletes  the old merged
          file (if any), then  merges  everyone's  appointment records,
          then sends  a 7 day report on the merged file to the printer.
          Alarm updating has been suppressed.



























                                         51





                              Chapter 12:    ALARMS



               PAL will insert alarms into your computer memory for you
          so that you may have an audible and visual signal at the time
          you wish to be alerted to an appointment.



               12.1      Auto-Repeat Alarms


               By combining the alarm  feature  with  PAL's auto-repeat
          feature, you  may design automatically repeating alarms.  For
          instance, with PAL and PALARM you can set your computer, with
          just two  memos, to  awaken you at 7:00 a.m. each weekday and
          11:30 a.m. every weekend day for the rest of your life.

               Since you'll be visually  and  audibly  reminded  at the
          appropriate times with an auto-repeat alarm, you may consider
          viewing these  alarms  in  your  REPORT  MODE  reports  to be
          unnecessarily  cluttering.    Do  you really want to see your
          7:00 a.m. wakeup call in  your  report  intermixed  with your
          other appointments?  Probably not.  Therefore, PAL allows you
          the option of making an auto-repeat alarm invisible to REPORT
          MODE.   This is  accomplished by inserting the inverted carat
          character -- ^ -- any place within the  memo.   Although this
          memo will  thereafter not appear in any report, you can still
          search for it in SEARCH MODE, and any  alarms which  are sent
          off to PALARM will be visible in the table of alarms accessi-
          ble in the PAL SET ALARMS menu (see section 12.10).



               12.2      PALARM


               In order for PAL to  insert  alarms  into  your computer
          memory, you  must first  load PALARM.  To do so, all you have
          to do is issue  the command  "PALARM", and  that program will
          install  itself  and  remain  resident.  You must call PALARM
          prior to  installing  SideKick, because  SideKick must remain
          the last-installed program in memory.



               12.3      Two Ways to Set Alarms


               There are  two ways that PAL can communicate an alarm to
          PALARM:  automatically and manually.

                                         52






               First, PAL has the  capability  of  automatically inter-
          preting  a  special  character  (the "@") in your SideKick or
          Appointment Scratchpad memo as  signifying that  you want the
          memo treated as an alarm.  See section 12.7.

               Second, in  the PAL  SET menu,  you may  manually add or
          edit alarms directly without  using SideKick  or the Appoint-
          ment Scratchpad.  See section 12.10.



               12.4      Capacity for 10 Alarms


               PALARM allows  your computer to maintain up to 10 alarms
          at any time.   When the  moment comes  for the  alarm, PALARM
          will pop  up over  your current  application and will present
          you with both a visual and an audible alarm (the visual alarm
          will not pop up over a graphics application).



               12.5      How to Kill or Snooze a Sounding Alarm


               You kill a sounding alarm by hitting the carriage return
          key.

               If you fail to kill the alarm within a specified period,
          then PALARM  will automatically silence the alarm, snooze for
          a period,  then pop  up again  later.   You can intentionally
          force  PALARM  to  snooze  by  hitting any key other than the
          carriage return when it pops up.  If PALARM is  snoozing, you
          will hear a soft ticking sound approximately once per second.

               As distributed,  the alarm  will display  for 10 seconds
          and will snooze for 1 minute.   You  can change  the time for
          display to  between 1  and 60 seconds, and the snooze time to
          between 1 minute and 24 hours.   This  change can  be made by
          entering  the  Install  function  from the PAL SET main menu.
          See section 13.2.3.

               Hint:

               If you want to kill an alarm before it pops  up or while
          it is  snoozing, then  you must  delete it within the PAL SET
          ALARMS menu.  See section 12.10.





                                         53





               12.6      Controlling the Sound


               An additional control you have  over  the  alarm  is the
          ability to  specify the type of sound you hear when the alarm
          goes off.  You can change  the sound  to OFF,  LOW, NORMAL or
          HIGH.   The distribution  version of PALARM has the sound set
          to LOW.  See section 13.2.2.



               12.7      How to Write a Memo to Become an Alarm


               To tell PAL that you want a memo to be  loaded automati-
          cally as  an alarm,  simply insert the "@" character anyplace
          in the memo.  All of  the  following  are  valid  examples of
          memos which will be treated as alarms:

                    Run for the train @30
                    @@@@@@  WAKE UP  @@@@@@
                    @  Partners Meeting

               When you ask PAL to run a report of your coming appoint-
          ments, PAL will translate  your memo  into an  alarm and feed
          the information to PALARM.  The alarm will then pop up at the
          time for which you wrote  the  memo.    The  "Title"  slot in
          SideKick and  the Appointment  Scratchpad will be interpreted
          as 7:30 a.m.



               12.8      Advance Alarms


               If you want advance notice of  the appointment,  you can
          force  the  alarm  to  pop  up  prior to the time slot of the
          appointment by writing the  amount  of  time  to  advance the
          alarm  immediately  following  the  "@" character.  The alarm
          will then pop up  that number  of minutes  prior to  the time
          slot  for  which  you  wrote  the  memo.    For instance, the
          sequence "@20" means you want the alarm to pop up  20 minutes
          before the time slot of the appointment.

               The maximum  number you can use is 1440.  This gives you
          the capability of advancing the alarm anywhere from  1 minute
          to 24 hours.

               Furthermore, you can amplify the effect of the number to
          reflect the number of days or the number  of hours  for which
          you would like advance notice.  If you follow the number with
          a "D", then the alarm will be advanced  that number  of days;

                                         54





          if you  follow the number with an "H", then the alarm will be
          advanced that number of hours; if you follow  the number with
          any  other  letter  or  with  nothing, then the alarm will be
          advanced that number of minutes.

               Hint:

               By  using  advance  alarms,  you  can   effectively  set
          appointments for  after 8:30  pm (the last regular time entry
          slot in  SideKick and  the Appointment  Scratchpad) or before
          8:00  am  (the  earliest  slot).    Note  also  that PAL will
          interpret the Title slot as calling for an alarm at  7:30 am.
          For instance, suppose you want an alarm to sound at 11:30 pm:
          you could enter an alarm in  the next  day's Title  slot with
          the code  "@8h", in the 11:30 am slot with the code "@12h" or
          in the 8:00 am slot  with  the  code  "@510"  --  any  of the
          foregoing   combinations   (and  innumerable  other  possible
          combinations) would produce an 11:30 pm alarm.

               Examples:

               Call IRS @
                    A simple alarm

               Wake up @ ~wd
                    Example of a repeating alarm, every weekday

               Run for the train @ ~wd^
                    Example of a repeating weekday alarm which will not
                    show up  when you  run a report, but which will pop
                    up at the appointed times regularly.

               Flight to London @240
                    Warns you 4 hours in advance

               Wedding Anniversary @1d
                    Lets the forgetful husband/wife know a  full day in
                    advance

               Catch Train @ 10
                    Beware!   This will  pop up  at the precise time of
                    your memo slot, not 10  minutes  in  advance!   The
                    space between the "@" and the number means that PAL
                    will not interpret the "10" as a command to advance
                    the alarm.








                                         55





               12.9      Run PAL to Automatically Update Alarms


               In order  to automatically  update your alarms, you must
          run PAL in REPORT MODE from time to  time.   The alarms which
          you design  with SideKick  and the  Appointment Scratchpad do
          nothing at all unless  PAL reads  them, interprets  them, and
          sends them off to PALARM.

               PAL will  examine each  alarm for  its intended date and
          time, and if the alarm is to be  sounded after  the moment at
          which PAL  is examining it, then PAL will try to load it into
          the ten-slot queue which PALARM holds in memory.  Only the 10
          most immediate alarms will be held in the queue.

               Hint:

               Periodically running  PAL to  ask for a report will make
          sure that your alarms are updated regularly.  If you  run PAL
          in  your  AUTOEXEC.BAT  file  every morning when you boot up,
          then you're likely to do just fine.  Since PALARM  has only a
          10 alarm  capacity, if  you set  more than 10 alarms during a
          day, you'll have to run PAL more frequently than once daily.



               12.10     Editing Alarms Manually with PAL SET


               Editing alarms manually is accomplished by  entering PAL
          SET, then entering the "Alarms Menu".

               You can  reach the  PAL SET  menu by issuing the command
          "PAL SET" or "PAL S" from the command line, or  just invoking
          "PAL" to  get to  the main menu and then selecting "SET" from
          the main menu.

               The PAL SET menu appears as follows:

                    1.  Alarms Menu
                    2.  Clock Toggle
                    3.  Date Toggle
                    4.  Help
                    5.  Install Assumptions
                    6.  Load Info From Disk
                    7.  Save Info To Disk

                   <ESC> to quit to main menu

               From the PAL SET menu, press the "A",  "1" or  "F1" keys
          to enter  the Alarms  Menu.   The Alarms  Menu appears in the


                                         56





          lower right hand corner of your screen as follows:


                    1.  Add an Alarm
                    2.  Clear all Alarms
                    3.  Delete an Alarm
                    4.  Edit an Alarm
                    5.  Purge Old Alarms

                    <ESC> to return to main menu


               At the top of the screen when you enter the  Alarms Menu
          is  a  listing  of  all  the  alarms  which  PALARM currently
          contains in memory (up to 10):

      You have the following Alarms set:
       1. Thu, Mar  3 1988,   4:30pm : Gary Fields @30 ................
       2. Thu, Mar  3 1988,   6:45pm : Aerobics  @45 ..................
       3. Mon, Mar  7 1988,   6:45pm : Art Class   @45 ................
       4. Thu, Mar 10 1988,   6:45pm : Aerobics  @45 ..................
       5. Mon, Mar 14 1988,   5:45pm : Lynn @45 .......................
       6. Mon, Mar 14 1988,   6:45pm : Art Class   @45 ................
       7. Thu, Mar 17 1988,   5:45pm : Rhetta @45 .....................
       8. Thu, Mar 17 1988,   6:45pm : Aerobics  @45 ..................
       9.
      10.


               You are shown the full memo for each alarm and  the time
          at which it is scheduled to pop up.  The next scheduled alarm
          will be highlighted to  set  it  off  from  the  rest  of the
          alarms.   If any  of the  alarms are currently snoozing, that
          fact will be noted together with  the time  at which  it will
          pop up again.

               From  the  Alarms  Menu,  you  can add alarms, edit them
          (change the date,  time  or  memo),  delete  specific alarms,
          purge old  alarms (those  which are  listed prior to the next
          scheduled alarm), or clear the entire alarm sequence.

               When you exit  the  Alarms  menu  and  get  back  to the
          opening PAL  SET menu,  you should "S"ave your changes to the
          data file if you want  the  information  remembered  the next
          time you  boot up.   If  you fail  to "S"ave the information,
          then your changes will  be remembered  only for  your current
          computing session.   If, prior to saving the current changes,
          you would like to  restore  the  information  which  was last
          saved to  disk, then  use the  "L"oad option from the PAL SET
          main menu.

               Manual editing of  an  alarm  permits  you  to determine

                                         57





          explicitly the date and time that a memo will pop up, without
          having to insert any special codes within the memo.

               Hint:

               It is best to  manually edit  alarms which  are not near
          the end  of the 10-place queue that PALARM holds.  The reason
          for this caution is that the automatic interpretation  by PAL
          of  SideKick  and  Appointment  Scratchpad  memos  may, under
          certain circumstances, delete  your  manually  entered alarm.
          Here's how  that would  happen.   Let's say you have manually
          entered an alarm for one year down the  road.   PAL, however,
          sees from  your SideKick or Appointment Scratchpad memos that
          you want  15  alarms  sounding  between  now  and  then.   As
          indicated above,  PALARM has  space for only 10 alarms.  What
          PAL will do is insert the 10 most  immediate alarms  in those
          spaces.   If it  finds that  an alarm  which has already been
          scheduled is set to occur later than the  10 alarms  it wants
          to insert,  then the  later alarm  will be  pushed out of the
          queue.  If that alarm which  has been  kicked out  was within
          the SideKick  or Appointment  Scratchpad memos, then PAL will
          automatically add it back  to the  queue when  there is room.
          But  if  the  unfortunate  alarm  was manually added, then it
          won't get back in unless you manually add it in once again.

               Hint:

               Whenever you kill a  sounding alarm,  PALARM will update
          the alarm  data file  on your  disk, even  if you  are in the
          midst of an alarm  editing session.   Therefore,  if an alarm
          pops up  in the  middle of  an editing  session and you don't
          want the current changes  to  overwrite  your  existing data,
          then instead  of killing the alarm, force it to snooze.  When
          you are certain that  your editing  changes are  correct, you
          can then kill the alarm the next time it pops up.



               12.11     Removing PALARM


               To remove  PALARM from  memory, you  must be  at the DOS
          system prompt.  Simply  invoke  "PALOFF"  at  the  DOS system
          prompt.   "PALOFF.EXE" is  one of  the files supplied, and it
          should reside in a directory within your DOS path for maximum
          convenience.

               If it  is safe  to unload  PALARM from  memory, then the
          program  will  terminate  its  operations  and   release  its
          occupied memory.

               If another  program is  resident in  memory after PALARM

                                         58





          and that program uses some of the same interrupt vectors that
          PALARM uses,  then it  is not safe to remove PALARM until the
          other program  is first  removed from  memory.   In the event
          such a  condition exists,  PALARM will remain in memory.  You
          will have to remove the  other  program  first  before trying
          again to unload PALARM.















































                                         59





                   Chapter 13:    CLONING NEW VERSIONS OF PAL



               There are  many, many ways you can customize PAL to meet
          your own needs.  All you need to do is tell PAL how to change
          its assumptions,  then PAL will clone a new version of itself
          which will remember what you told it.

               There are two places within the program in which you can
          specify assumptions:

                    1.   In  the  CLONE  procedure,  you  have numerous
               options to change regarding the operation  of PAL.   See
               section 13.1.

                    2.   To change  aspects of the operation of PALARM,
               you must first enter the SET  procedure and  then select
               "Install Assumptions".  See section 13.2.

               To reach  the CLONE procedure, simply invoke "PAL CLONE"
          or "PAL C" from the command line, or select it  directly from
          PAL's opening menu.

               Similarly, to  reach the SET procedure, invoke "PAL SET"
          or "PAL S" from  the command  line, or  select it  from PAL's
          opening menu.  Then select "Install Assumptions".



               13.1      The Clone Procedure


               After  reaching  the  CLONE  procedure, you will be pre-
          sented with a menu of the following choices:

                      1.  Appointment Scratchpad
                      2.  File Location Defaults
                      3.  Holidays
                      4.  Miscellaneous Defaults
                      5.  Printer Defaults

                      6.  Clone
                      <ESC> to quit without change

               You may select any of the six operations  by hitting the
          alphabetic  key  corresponding  to  the function, the numeric
          key, or the function key (F1 - F6).

               Each of the first  5  operations  permit  you  to change
          PAL's internal assumptions.  You may change all, some or none
          of the assumptions.   You may  jump from  operation to opera-

                                         60





          tion, and  PAL will  remember all  of your  changes until you
          leave the CLONE menu.

               There are only two  ways to  leave the  CLONE menu:   by
          choosing operation  #6 to CLONE the changes you have made, or
          by hitting ESC to leave the menu without making any changes.

               Hint:

               If for some reason  you have  made so  many changes from
          the original  distribution default  assumptions that you want
          an easy  method of  returning to  PAL's original assumptions,
          then use the RESTORE procedure, discussed at section 13.1.8.

               Example:

               The benefit  of being  able to CLONE different copies of
          PAL is illustrated by  the following  scenario.   Suppose you
          use PAL  sometimes to  print out  (on paper) a report of your
          coming appointments for a month, and you need  to use special
          printer  control  codes  to  squeeze  the  characters  to the
          smallest possible size so  that you  have a  nice neat little
          schedule to  slip into  your wallet.  At other times you want
          to use normal size print for a hard copy of the coming week's
          appointments to  place on  your desk.  For the first use, you
          can insert the  special  printer  codes  ,  make  the default
          command  line  "30P",  and,  when  you  go  through the CLONE
          operation specify "MONTHLY" as  the name  of your  new ".EXE"
          file.   For the  second use, use PAL's default printer codes,
          change the command line to  "7P"  and  name  the  ".EXE" file
          "WEEKLY".    At  the  DOS  system prompt, issuing the command
          "MONTHLY" will cause  your  squeezed,  monthly  report  to be
          issued, while issuing the command "WEEKLY" will give you your
          hard copy for the next week, at normal print size.

               A description of each of  the  operations  which  can be
          initiated from the CLONE menu follows.



               13.1.1         Appointment Scratchpad


               This choice  summons PAL's Appointment Scratchpad, which
          can be used both as an auxiliary to  and/or as  a replacement
          for  SideKick's  appointment  file.  For detailed information
          about the Appointment Scratchpad, see chapter 7.

               The changes which you make in the Appointment Scratchpad
          will take effect only if you choose to CLONE the changes.



                                         61







               13.1.2         File Location Defaults


               When you  summon this choice from within the CLONE menu,
          you  are  given  the  opportunity  to  change  the  following
          assumptions.   Remember that  the changes which you make here
          will not take effect unless you CLONE and do not  ESCape from
          the CLONE procedure.

               13.1.2.1            The Second Directory

               This is the full path name of the directory in which PAL
          should look for your SideKick appointment  file if  it cannot
          find the  file in your DOS path.  As distributed, PAL assumes
          the Second Directory to be "C:\SK\".

               13.1.2.2            The Third Directory

               This is the full path name of the directory in which PAL
          should look  for your  SideKick appointment file if it cannot
          find the file in your DOS  path or  in the  Second Directory.
          As distributed, PAL assumes the Third Directory to be "C:\".

               13.1.2.3            Appointment Calendar Name

               This is  the filename  (first 8  characters only) of the
          SideKick appointment file.   As distributed,  PAL assumes the
          name to be "APPOINT".

               If  you  change  this  name  to  "NOFILE", then PAL will
          automatically look only in  its  own  Appointment Scratchpad,
          unless you supply a specific filename on the command line.

               13.1.2.4            Appointment Calendar Type

               This is the extension for the filename (the 3 characters
          after the period in the  whole  file  name)  of  the SideKick
          appointment file.  As distributed, PAL assumes the type to be
          "APP".  The purpose  of  this  assumption  is  that  PAL will
          automatically add  the extension  to a  filename specified by
          you on the command line but for which  you do  not explicitly
          state the extension.

               If  your  filename  is  "NOFILE",  PAL  will not add the
          extension.  Instead, the  NOFILE filename  will force  PAL to
          look  in  the  Appointment  Scratchpad without looking at any
          SideKick appointment file.

               To override the assumption  for files  that do  not have
          any  extension,  simply  specify  the filename on the command

                                         62





          line with a period immediately following it.

               Examples:

               PAL 7
                    --  will look for APPOINT.APP in the DOS path, then
                    the Second Directory, then the Third Directory.

               PAL 7 JANE
                    --  will look  for JANE.APP in the same sequence of
                    directories.

               PAL 7 d:\utility\
                    --  will look for d:\utility\appoint.app

               PAL 7 d:\utility\jane
                    --  will look for d:\utility\jane.app

               PAL 7 noextens.
                    --  will look for the file NOEXTENS, which does not
                    have  any  extension  in  the  last three character
                    places of the file name.

               13.1.2.5            Report File Name

               This is the name of the  file to  which PAL  writes your
          report  when  you  specify  the  "F"  optional parameter.  On
          distribution, PAL assumes the name of the file to be PAL.TXT.
          This file  will be  written in  the current subdirectory from
          which you invoke PAL.



               13.1.3         Holidays


               PAL will automatically show you several common holidays.
          You may  use the  CLONE procedure to change the holidays that
          PAL shows.

               Once you enter the CLONE procedure, hit "3", "F3" or "H"
          in order  to view  your holiday  settings.   You will be pre-
          sented with a  list  of  possible  holidays  in  two columns:
          "General  Holidays"  and  "Religious Holidays".  On distribu-
          tion, PAL is set  to show  fewer than  50% of  those holidays
          which it  is capable  of showing.   The holidays marked below







                                         63





          with an asterisk are the ones which PAL will show  you if you
          make no changes to its initial assumptions:

          *New Year's Day                      *Easter Sunday
           Martin Luther King Day              *Good Friday
           Lincoln's Birthday                   Ash Wednesday
           Valentine's Day                      Shrove Tuesday
          *President's Day                      Palm Sunday
           St. Patrick's Day                    Pentecost
          *Mother's Day
          *Memorial Day                        *Hanukkah
           Flag Day                            *Rosh Hashanah
          *Father's Day                        *Yom Kippur
          *Independence Day                    *Passover
          *Labor Day                            Succoth
          *Columbus Day                         Simchat Torah
           Election Day                         Tu B'Shevat
           Veteran's Day                        Sh'mini Atzeret
          *Thanksgiving Day                     Purim
          *Day After Thanksgiving               Yom Hashoah
          *Christmas Day                        Lag B'Omer
                                                Shavuot
                                                Tisha B'av

               When you  first enter the holiday screen, those holidays
          which are  set will  appear highlighted.   You  will be asked
          whether you  want to  change any  of the  holidays.    If you
          answer "Y" for yes,  a small  arrow will  be pointed  at "New
          Year's Day"  and you  will be  prompted for your response for
          each holiday.  At each position, you may  answer "Y"  or "N",
          you  may  simply  hit  the carriage return to accept whatever
          state the holiday is  set for,  or you  may hit  "ESC" to end
          your editing session.

               The  changes  which  you  make  in  the  holiday editing
          session will  take effect  only if  you choose  to CLONE your
          changes.

               The holidays  you select will show up whenever you run a
          report in REPORT MODE.  If you prefer not to see the holidays
          in a  report, you may either (a) turn off all of the holidays
          permanently in the CLONE  procedure,  or  (b)  turn  them off
          temporarily by using the "H" toggle switch (e.g. "PAL 7H").



               13.1.4         Miscellaneous Defaults


               The  Miscellaneous  Defaults  operation  is  selected by
          hitting "4", "F4" or "M".    You  will  be  presented  with a
          series of  choices, with  a description of the effect of each

                                         64





          choice, and you will be asked whether you want to  change any
          of the assumptions.  If you answer "Y" for yes, then you will
          be able to make the following decisions:

               13.1.4.1            Default Command Line

               This is the command which PAL will execute if you do not
          specify any  additional parameters  on the  command line.  In
          the distribution version of PAL, this default command line is
          "MENU", so that PAL will show you its main menu if all you do
          at the DOS system prompt is write the command "PAL".

               You may change the default command  line to  any command
          that PAL  can understand.   Do not start off the command with
          the word "PAL" as  you would  if you  were issuing  a command
          from  the  DOS  system  prompt.    Instead, provide a command
          similar to  that which  you would  use in  the "Enter Command
          Line"  choice  in  the  main  menu.    The beginning "PAL" is
          assumed.

               If you have substituted a new default command  line with
          this option,  you can  always request  the main menu from the
          DOS system prompt with the command "PAL MENU" or "PAL M".

               13.1.4.2            Color Display

               This choice is important only for  color monitors.   The
          distribution version  of PAL will display in color on systems
          with color monitors.   Systems  which  try  to  emulate color
          monitors  but  in  shades  of  gray will try to display PAL's
          colors.

               Some color  and  composite  monitors  may  display PAL's
          colors poorly.   A  "composite" monitor is one which displays
          only two colors (e.g.,  black  and  white,  black  and amber,
          black and  green) but which tries to emulate a color graphics
          adapter rather than a monochrome display;  this is  common in
          many  laptop  computers.    You  can  use  this  selection to
          permanently turn  off color  so that  PAL will  write to your
          screen as  if it  were a  simple monochrome monitor.  If your
          screen display is so  poor  that  you  cannot  even  read the
          directions within  the CLONE  procedure, then please read the
          discussion in  the  Installation  chapter  under  the heading
          "Screen Display"  at section  2.5.   If you run PAL on a true
          monochrome  monitor,  your  selection  for  this   option  is
          unimportant.

               Hint:

               Whatever you  choose for  this selection, you can tempo-
          rarily force PAL in REPORT MODE or in  SEARCH MODE  to toggle
          back to  the reverse  kind of display by using the "C" toggle

                                         65





          switch.

               13.1.4.3            Reverse Video

               This choice is significant only for monochrome and black
          & white monitors (including color monitors for which you have
          forced PAL to display in simple black and white).

               The distribution version of PAL will  show some messages
          in  reverse  video  on  monochrome monitors and black & white
          monitors.  For instance, your appointments  for today through
          the  next  business  day  will  show  up  in  reverse  video.
          However, some  monitors  may  not  show  reverse  video  in a
          satisfactory manner.   If  you prefer to use intense (bright)
          video in lieu of  reverse  video,  then  answer  "N"  to this
          question.  Otherwise, answer "Y".

               13.1.4.4            Single Character Auto-Repeat

               PAL  will  interpret  certain special characters in your
          SideKick memos as signals that you want the appointment to be
          repeated in  your report automatically.  The square brackets-
          - '[' and ']' -- and the  curly  brackets  --  '{'  and '}'--
          will  signal  annual,  monthly,  weekly  and  daily repeating
          appointments.   These frequencies  for repeating  may also be
          signified by two-character sequences beginning with the tilde
          character "~".  See  the chapter  on auto-repeat appointments
          for more information, section 9.1.

               You  may  prefer  to  employ  the bracket characters for
          normal usage within your  SideKick memos  without having them
          signify auto-repeat appointments.  You would then rely on the
          tilde sequences instead.   To  make  PAL  ignore  the bracket
          characters,  answer  "N"  to  this question, otherwise answer
          "Y".

               The distribution version of  PAL  does  use  the bracket
          characters to signify auto-repeat.

               If you do not use SideKick with PAL, then your answer to
          this choice is unimportant.

               13.1.4.5            Effect of PURGE and DELETE

               If you answer "Y" to this question, then  at the  top of
          each Report  of your  appointments, PAL will let you know how
          many bytes you could save in  your SideKick  appointment file
          if you were to use the PURGE or DELETE procedures.

               The  distribution  version  of  PAL  does  not show this
          information.


                                         66





               If you do not use SideKick with PAL, then your answer to
          this choice is unimportant.

               13.1.4.6            Noise

               The distribution  version of  PAL will blip at you occa-
          sionally in certain circumstances.   You  can silence  PAL by
          answering "N" to this question.

               13.1.4.7            Extended Alarm Report

               The  last  thing  that  PAL  tells you in REPORT MODE is
          whether you have alarms to be loaded into PALARM.  If so, you
          can have PAL tell you all the alarms which it is loading.  On
          distribution, PAL does not give you this extended report.  To
          force PAL  to give  you this  information, answer "Y" to this
          question.



               13.1.5         Printer Defaults


               You can send a report to your printer  by using  the "P"
          switch.   For instance,  "PAL 7P" will send a 7 day report to
          your printer.  There are three changes which you can  make to
          PAL's printer defaults.

               13.1.5.1            Initialization String

               PAL allows you to send up to 26 bytes to your printer to
          initialize it prior to printing a report.   You need  to know
          the hex  notation of  the printer codes you want to send.  On
          distribution, PAL's initialization string is merely  a series
          of zeroes, which should not have any effect on your printer.

               13.1.5.2            Exit String

               PAL  also  allows  you  to  send  up to 26 bytes to your
          printer after the report is concluded.  As with the initiali-
          zation  string,  you  need  to  know  the hex notation of the
          printer codes to send.  On distribution, PAL's exit string is
          just  a  form  feed  character  (hex code: 0C), followed by a
          series of zeroes.

               13.1.5.3            Lines Per Page

               This is the number  of lines  that PAL  will print  to a
          page before telling your printer to advance to the next page.
          On distribution, PAL will  issue  the  form  feed instruction
          after  every  48  lines.    You may change this number to any
          other number.  A  simple  0  will  force  continuous printing

                                         67





          without form feeds.



               13.1.6         Clone


               Once  you  have  made  all  the  changes that you desire
          within the  CLONE  procedure,  the  only  way  to  make those
          changes permanent  is to strike "6", "F6" or "C" to force the
          changes to be written to disk.

               The first screen that you reach is one which reminds you
          what happens  if you  proceed.   If you want to avoid writing
          your changes, then hit the ESC key.  You may proceed to CLONE
          by hitting any other key.

               Assuming that  you proceed,  you will  next be asked the
          name of the file that you want to create.  You may accept the
          default name  by hitting  return, or you may select any other
          name for the file.  The default name will appear  as "PAL" or
          as the  last name  you chose  when you  previously CLONED the
          program.  You can  CLONE  several  copies  of  PAL,  all with
          different names, each of which can contain different internal
          assumptions.

               The next screen informs you that  PAL will  seek a valid
          PAL.EXE file in your path and will CLONE a new copy into that
          directory.  Here again you will  be given  the opportunity to
          avoid CLONING  by hitting  the ESC key.  If you hit any other
          key, PAL will proceed  with  the  CLONE  operation.    If PAL
          cannot find  a valid  PAL.EXE file in your path, it will seek
          your help in locating one.   If you  are asked  to supply the
          name of a valid PAL.EXE file, you may provide the name of any
          renamed or CLONED file which is a descendant of your original
          PAL.EXE.

               If PAL  finds that  a file  already exists with the same
          name that you are  trying to  create, PAL  will give  you the
          choice of  overwriting that file, backing it up, changing the
          name, or hitting the ESC key to abort the process.



               13.1.7         <ESC> to quit without change


               ....means just what it says.   If you  hit the  ESC key,
          then all  the changes  which you  have made  within the CLONE
          session will be lost, and the  defaults which  existed within
          PAL prior to entering the session will be retained.


                                         68







               13.1.8         The RESTORE Procedure


               For a quick method of restoring PAL's original distribu-
          tion defaults, use the  RESTORE  procedure.    Employing this
          procedure returns  all of the selections back to PAL's virgin
          state.  You may have need of this procedure, for instance, if
          you have  made many  changes, have  thought better of it, and
          would like to start from scratch again.

               The  RESTORE  procedure  restores  only  the assumptions
          which were  changed with the CLONE procedure, as described in
          all of the sections  which fall  within section  13.1 of this
          manual.  The changes which you may have made with the PAL SET
          INSTALL procedure  described  in  section  13.2  will  not be
          affected.

               To  invoke  the  RESTORE  procedure,  either  choose the
          RESTORE selection from PAL's  main menu,  or you  can call it
          from the DOS system prompt with "PAL RESTORE" or "PAL R".



               13.1.9         Saving and Reading CLONE Images


               You can use virtually an infinite number of CLONE setups
          by taking  advantage  of  PAL's  ability  to  save  its CLONE
          settings, including  the entire  Appointment Scratchpad, to a
          disk file.  You  may then  read back  any one  of those CLONE
          images to  make PAL  accept all  the assumptions contained in
          the requested image.

               This feature may also come in handy for  you when future
          enhancements of  PAL come out.  Instead of having to re-enter
          all your Appointment  Scratchpad  memos  and  all  your CLONE
          settings to  a new  version, each  new version of PAL will be
          able to read your old image file.

               Saving  and  reading  CLONE  images  affects   only  the
          assumptions which  were changed  with the CLONE procedure, as
          described in all of  the sections  which fall  within section
          13.1 of  this manual.   The  changes which  you may have made
          with the PAL SET INSTALL procedure described in  section 13.2
          will not be saved or affected.

               To  save  an  image,  go  to PAL's main menu.  Press the
          "ALT" key, then while  still holding  the ALT  key, press "S"
          (this key  combination is  commonly referred  to as "ALT-S").
          You will be asked for the name of the file to which you would

                                         69





          like the  image written.  The default name is "PAL2.0", which
          will be used unless  you specify  a different  name.   If you
          accept  the  default  name,  the  file will be written in the
          current directory.  If the file already exists, then you will
          be given the choice to overwrite the file, back it up, change
          the name you want to use, or else escape the procedure.

               To read an image, press ALT-R at PAL's main menu.  Since
          reading a  new image into PAL will obliterate the CLONE image
          which currently exists  within  PAL,  you  will  be  asked to
          confirm your choice to read an image.  This will give you the
          opportunity to change your mind  so  that  you  can  save the
          existing image  first.   If you  choose to  proceed, you must
          select the file name of  the  image.    The  default  name is
          "PAL2.0", but  you may  choose any other existing image file.
          Once you select the name, PAL will search for the  file along
          your  DOS  path  and  the two alternate directories which you
          previously set with the  CLONE procedure.   If  you specify a
          complete  file  name  including  the directory, then PAL will
          look only in that directory for that particular file.

               As an alternative to using ALT-S  and ALT-R  at the main
          menu,  PAL   offers  two  special  command  line  parameters:
          SAVEIMAGE and READIMAGE.  Each of these command line alterna-
          tives is designed for quick action by PAL without pausing for
          confirmation or choices from  the user,  and therefore should
          be employed  only when  you know  that the data which will be
          overwritten either has been previously saved or does not need
          to be saved.

               To save an image, use the command:

                    PAL SAVEIMAGE [FILENAME]

          where FILENAME  is the optional name of the file to which you
          would like to write.   If  you do  not designate  a FILENAME,
          then  PAL  will  write  to  the  file  PAL2.0  in the current
          directory.  PAL will  not  query  whether  you  want  to take
          alternative action  if the  file already exists, it will just
          overwrite the file, so be certain  before using  this command
          that  you  are  not  concerned  about  losing the data in the
          existing file.

               To read an image, use the command:

                    PAL READIMAGE [FILENAME]

          where FILENAME is again the optional  name of  the file which
          you want  to read.   If you do not designate a FILENAME, then
          PAL will try to find PAL2.0.  PAL will seek the image file in
          the DOS  path and  the two special directories which you have
          set with the CLONE procedure.    It  will  not  query  you to

                                         70





          confirm whether you want to proceed, so satisfy yourself that
          the existing CLONE information either is not of importance to
          you or  has first  been saved.  If PAL cannot find the speci-
          fied file in the path, then it will return to  the DOS system
          prompt without further action.



               13.2      The PAL SET INSTALL Procedure


               This chapter has, so far, described the assumptions that
          can be changed within PAL concerning its methods of operation
          and how  it presents  its reports  to you.   We now turn to a
          description of  how you  can change  various assumptions that
          PALARM uses with respect to how it deals with your alarms.

               As with the CLONE procedure, PAL offers you the opportu-
          nity to change these assumptions through a series of choices,
          then writes  your desired changes to your PALARM.EXE file for
          permanence.  These changes are reached from the PAL SET menu,
          at which  you arrive by issuing "PAL SET" or "PAL S" from the
          command line,  or hitting  "7", "F7"  or "S"  from PAL's main
          menu.  Once in the PAL SET menu, choose "Install Assumptions"
          by hitting "5", "F5" or "I".

               When you request the  INSTALL  procedure,  you  are pre-
          sented with  a screen that shows the current assumptions with
          which PALARM is presently working, and you are  asked whether
          you want to change any of them.  If you do, then respond with
          a "Y"; if not, then hit the "N" key and you will  be returned
          to the PAL SET menu.

               When you  respond with a "Y", you will be presented with
          a series of four  screens  offering  you  the  opportunity to
          change assumptions.   Each  screen shows a few of the assump-
          tions which can be changed, describing what effect  they have
          and  what  PALARM  presently  assumes.    The  screens are as
          follows:



               13.2.1         Data File


               This is the name of the file which contains a  record of
          your alarms.   When  PALARM is  first loaded  into memory, it
          will look for this file.   When PALARM  pops up  an alarm and
          you kill  it by  hitting the carriage return key, then PALARM
          will update this file.  This is so that PALARM  will know the
          next time  it's loaded that the alarm has already been popped
          up.  If, when  PALARM loads,  it senses  an old  alarm in the

                                         71





          data file  which has not yet been popped up, then PALARM will
          pop up  with that  alarm immediately.   This  will assure you
          that if  you missed  an alarm  because your computer was shut
          off at the appropriate time  then  you  will  not  ignore the
          alarm in silent bliss.

               On distribution, the name of the data file is assumed to
          be "\PALARM.DAT".  You may  change  this  to  any  legal file
          name.



               13.2.2         Sound Level


               When  an  alarm  pops  up,  you will be presented with a
          visual and an audible alarm (though the visual alarm will not
          pop up  over a  graphics screen).  You may select any of four
          sound levels for the alarm:

                    a)   Off  --  self-explanatory.

                    b)   Soft  --   the distribution  default, sounds a
                    bit  like  the  squishy  sound  of walking in soggy
                    shoes.

                    c)   Medium  --    a  more  insistent  beeping that
                    sounds like your nephew's toy ray-gun.

                    d)   Loud --  a high-pitched siren.



               13.2.3         Snooze Feature


               Once the alarm pops up, you may cancel it by hitting the
          return key.  If within a limited period  of time  you fail to
          hit the  return key,  or if  you hit  any key  other than the
          carriage return,  then  the  alarm  will  silence  itself and
          permit your system to continue running while it snoozes.  You
          will be reminded  that  an  alarm  is  snoozing  because your
          system will be emitting a soft ticking sound in the meantime.
          The alarm will pop up once more after  a specified  period of
          time.

               The two changes you can make here are:

                    (a)  The number  of seconds for the alarm to sound:
                    between 1 and 60 seconds.

                    (b)  The number of minutes for the alarm to snooze:

                                         72





                    between 1 and 1440 minutes (a full 24 hours).

               The  purpose  of  the  snooze  mode  is  fairly obvious.
          Imagine the following  scenario  with  an  alarm  system that
          captures your  system and  refuses to  let go  until you con-
          sciously choose to silence  the alarm.   Suppose  you start a
          sort of  your customer records with SlowBase VI, knowing that
          it ought to take an hour.  So you go out for lunch, expecting
          the sort  to be  completed by the time you come back.  Lo and
          behold, when you return you find that the alarm is screeching
          at you for some event that you had forgotten about.  When you
          kill the alarm, SlowBase VI resumes its sort  at the  45th of
          5,784 records!   An  alarm without a snooze feature is fairly
          useless, isn't it?

               Hint:

               If, while an alarm is snoozing, you would like to cancel
          the alarm  without waiting  for the  snooze period to finish,
          you can delete the alarm by  entering the  PAL SET procedure.
          From  the  PAL  SET  menu, select "A"larms, then "D"elete the
          alarm that shows as snoozing.



               13.2.4         Clock and Date

               13.2.4.1            Clock Visibility on Start-Up

               As distributed, PALARM will  automatically show  you the
          time in  the upper-right  corner of  your monitor.  With this
          choice, you may force PALARM not  to show  the clock  when it
          loads.

               To turn the clock on or off quickly and temporarily, you
          may use the "Clock Toggle" selection at the PAL SET menu.

               13.2.4.2            Date Visibility on Start-Up

               As distributed, PALARM will  automatically show  you the
          date in  the upper-right  corner of  your monitor.  With this
          choice, you may force  PALARM not  to show  the date  when it
          loads.

               To turn  the date on or off quickly and temporarily, you
          may use the "Date Toggle" selection at the PAL SET menu.

               13.2.4.3            Colors for Clock and Date

               If you are not  pleased with  the color  combination for
          the clock  and date  display, you  may change the colors with
          this choice.  You will be presented with  a table  of numbers

                                         73





          displayed  in  varying  combinations  of background and fore-
          ground colors.  Simply choose the number which corresponds to
          the color combination of your choice.



               13.2.5         Cloning Your PALARM Changes


               Once you  have made  your desired changes within the PAL
          SET INSTALL procedure, you may clone these changes permanent-
          ly.   Just follow  the instructions  presented on the screen.
          If you  choose to  clone, then  all changes  will take effect
          immediately.







































                                         74





               Chapter 14:    TSR WARS, RAM CRAM AND MULTITASKING

               This chapter  discusses some  of the  problems you might
          face if you use PALARM so  that  you  can  take  advantage of
          PAL's alarm  capability.   If you do not use PALARM, then you
          don't need to read the remainder of this chapter.


               14.1      TSR Wars

               Resident programs are often referred to  as TSR's, named
          after the DOS programmer's function that permits a program to
          Terminate but Stay  Resident.    As  more  and  more resident
          programs vie  for memory,  processor time  and control, it is
          inevitable that skirmishes may result, sometimes resulting in
          total system lockup which can only be remedied by turning the
          system off and then back on again.

               PALARM has been tested in many system configurations and
          has been  found to coexist peacefully in the vast majority of
          situations.  If, for any reason, you find  that the introduc-
          tion of  PALARM as  a resident  program in your system causes
          computer  lock-ups  or  any  other  problems,  then  try  the
          following:

               1.   In most  cases, you  will find  that loading PALARM
          early on in the sequence should solve your problem.

               2.   You should also make  sure  that  SideKick  is your
          last-loaded resident program.

          Caution:

               Running "CHKDSK"  with the "/F" parameter is a potential
          problem under certain limited  circumstances.    This  is the
          case  with  ANY  program  that  alters your disk's FAT table.
          Although this is not the result of a war between two resident
          programs, it  is a concern which can arise because two things
          are happening in your computer at  the same  time without the
          two  processes  being  aware  of  each other.  If you kill an
          alarm while CHKDSK is running, PALARM updates its  data file,
          and it  is possible  that CHKDSK  may be fooled into thinking
          that you have a  disk  error  when  in  fact  there  is none.
          Answering "YES"  to CHKDSK's  query whether it should fix the
          "problem" could result in  scrambling PALARM's  data file and
          other unknown results.  For this reason, you should do either
          of the following when running "CHKDSK /F":   (1)   Snooze the
          alarm  instead  of  killing  it  if  the alarm pops up before
          CHKDSK makes its report, or (2) Answer "NO"  to CHKDSK's fix-
          up  query  if  the  alarm  has  popped  up  before CHKDSK has
          finished its processing and CHKDSK then  reports an  error on
          your disk.

                                         75







               14.2      Ram Cram and Multitasking

               Another problem  which is presented by the proliferation
          of resident programs is "ram  cram,"  a  malady  that results
          when you  have so  many programs residing permanently in your
          computer's memory that you don't have  sufficient memory left
          to run  your normal  applications programs.  A few years ago,
          CP/M based computers with a 64K  limit were  the cutting edge
          of technology,  and when  IBM came  forward with a 640K capa-
          city, many people wondered why anybody could possibly want so
          much  memory.    Now,  the  640K "horizon" is more frequently
          viewed as a "barrier"  to efficient  computing.   PALARM only
          uses about  30K of your RAM, but that little bit may, to some
          people, be too precious to part with.

               In order to go beyond the  640K barrier,  you'll need to
          get operating software that supports breaking down that wall.
          Future versions of OS/2  promise  to  permit  this,  and some
          presently available  software, such  as Desqview operating on
          80386 machines, offer this possibility now.

               14.3      Hints on PALARM with Multitasking

               PALARM and PAL have seen limited testing in multitasking
          systems.   If you have any problems using PAL and PALARM in a
          multitasking system, please let us know  so that  we can make
          it work for you.

               If you use a multitasking program, PALARM will work best
          if it is loaded prior to the multitasker.   This  will ensure
          that PALARM will always be watching the system clock and that
          PAL and PALARM can communicate with each other.

               If, for reasons of limited memory, you must  load PALARM
          in a  window of  the multitasker, then you have a solution to
          the ram  cram problem,  but the  operation of  PALARM will be
          somewhat inefficient.  Following are considerations which you
          should be aware of if you load PALARM within a window of your
          multitasker:

                    1.   The PALARM  window should be configured to run
               in the background.  Otherwise, PALARM  won't be  able to
               watch your  system clock  to determine when to pop up an
               alarm.

                    2.   When  an  alarm  pops  up  over  your  current
               application, you  will not  be able  to communicate with
               PALARM to snooze or kill the alarm unless  you switch to
               the PALARM window first.


                                         76





                    3.   Once you  snooze or  kill the alarm within the
               PALARM  window,  PALARM  will  attempt  to  restore your
               screen  to  its  state  at  the  moment before the alarm
               popped up.  The  trouble here  is that  the visual alarm
               originally popped  up over an application in an entirely
               different window.  Consequently, the PALARM  window will
               wind up  with screen information from your Lotus spread-
               sheet (or whatever you were in),  and the  Lotus spread-
               sheet will  still have  the visual  alarm blinking in it
               when you return to the Lotus window.   Although this may
               be disconcerting when you see it, no harm is done.  What
               has been scrambled is only your  screen information, not
               your data.   Each  window's screen will be corrected the
               next time you take an action in that window which causes
               the screen to be refreshed.

                    4.   You  will  have  to  decide  whether  you want
               PALARM by itself in a small window, or  whether you want
               PAL  and  PALARM  together  running  in a larger window.
               There are advantages and disadvantages to  both choices.
               The  advantage  of  the  small  PALARM  window  is  that
               multitasking RAM  is being  used more  efficiently.  The
               disadvantage is that PAL will not be able to communicate
               with PALARM unless it  is within  the same  window.  The
               advantages  and  disadvantages  of  the large PAL/PALARM
               window are, of course, the converse of the  small PALARM
               window.

                    5.   If  you  choose  the  small PALARM window, you
               will still be able to communicate  new alarms  to PALARM
               by observing  the following procedure.  To update alarms
               either  automatically   or  manually,   you'll  have  to
               completely  kill  the  small  PALARM window, temporarily
               open a large PAL/PALARM window to communicate the alarms
               and create  an updated  data file (PALARM.DAT), kill the
               large PAL/PALARM  window, then  open a  brand new PALARM
               window  which  will  read  the updated PALARM.DAT.  This
               procedure is clunky, but if you must save RAM by loading
               PALARM in  a small  window, you  will find  that it does
               work.

                    6.   Lastly, you will have  to design  a batch file
               to  be  executed  in  each window.  An appropriate batch
               file for the small PALARM window would be:

                              PALARM
                              PAUSE

               The "PAUSE" is  required  to  prevent  your  window from
               closing immediately.  You would add the same command for
               any window in which you  want  to  load  a  program that
               terminates  and  stays  resident.   An appropriate batch

                                         77





               file for the large PAL/PALARM window would be:

                              PALARM
                              PAL

               This window will close whenever you exit PAL.



               14.4      PALARM and Task-switching Programs

               Task-switching programs such as Carousel are designed to
          shift programs rapidly in and out of memory.  The application
          which is shifted out of memory  does  not  run  in  the back-
          ground.   For this reason, it is inappropriate to load PALARM
          in a window of a  task-switching  program.    Instead, PALARM
          should be loaded globally before the task-switching program.




































                                         78





                       Chapter 15:    SUPPORT AND UPGRADES



               Support will be provided to paid, registered users only.
          This is one of the  benefits  of  registering  your shareware
          version of PAL.

               a)   Voice Line:    (914)   762-5322.     This  line  is
          answered most of the time by  an answering  machine.   Let us
          know the problem and we'll call you back.

               b)   PAL Software BBS:   (914)  762-8055.   Answers your
          computer 24 hours a day at 300, 1200, 2400 and 9600 (US Robo-
          tics) baud.

               c)   Compuserve:   ID # 70475,1071.  Send us an EASYPLEX
          message, or you can send  a  public  message  on  any  of the
          following SIGS:     IBMSW or BORAPP.

               d)   Source:   ID #  ST2338.   Send us mail to the fore-
          going ID number.

               e)   By mail at PAL  Software NY,  Inc., 51  Cedar Lane,
          Ossining, NY  10562.

               Registered  users  are  entitled to notices of upgrades.
          Upgrades within 6 months of payment for registration  will be
          made at a nominal cost; upgrades thereafter will be available
          at a discount for registered users.























                                         79





               Chapter 16:    LICENSE, WARRANTIES AND LIMITATIONS



               Our lawyer says we have to  write this  stuff here.   It
          just so happens that the sole shareholder of PAL Software NY,
          Inc. is a lawyer.


               16.1      Shareware License


               PAL  and  PALARM  (the  "Licensed  Programs")   are  the
          exclusive property of PAL Software NY, Inc. (the "Licensor").
          Holders of the shareware version are granted a license to try
          the Licensed Programs for a limited period of time.

               If you use the Licensed Programs at least once a week or
          over a period in excess of one month,  then it  is understood
          that you  are satisfied  with the  Licensed Programs and must
          register and pay for the Licensed Programs.   If you continue
          to use the Licensed Programs under such circumstances without
          registering and paying for them, then you are in violation of
          this limited license.

               The plain  English limitation  here is:  If you like and
          use the program, then register and pay for  it.   If, after a
          period of time of using the program you choose not to pay for
          the it, then stop using it.


               16.2      Commercial License


               It is  understood  that  users  who  have  purchased the
          commercial  version  directly  from  the  Licensor or from an
          authorized dealer  have  satisfied  the  requirements  of the
          preceding paragraph.

               The commercial,  non-shareware version  may not be sold,
          transferred, sublicensed  or  otherwise  disposed  of  by any
          person  except   with  prior  written  authorization  by  PAL
          Software NY, Inc.


               16.3      Further Shareware Distribution

               Persons in possession of a copy of the shareware version
          of the  Licensed Programs  are encouraged  to share them with
          others by uploading them to computer bulletin boards, sending
          copies to  friends, etc.   You are permitted to re-distribute
          the shareware version so long as no changes  are made  to the

                                         80





          programs or  the documentation and the entire archived set is
          distributed unaltered.

               A reasonable charge may be received  for the  expense of
          copying the  programs and  transmitting them, but in no event
          must the  person  with  whom  you  are  sharing  the Licensed
          Programs be lead or permitted to believe that payment of such
          amounts constitutes registration  or  satisfies  the require-
          ments to register which are imposed by this license.

               Disk distribution  services are encouraged to distribute
          the shareware version of the Licensed Programs so long as the
          service's catalog or other indexing material contains a clear
          statement  that  the  Licensed  Programs  are  shareware, not
          public domain,  and that  the user is expected to pay for the
          Licensed Programs if  the  user  likes  them  and  intends to
          continue  to  use  them.    Disk  distribution  services  are
          encouraged to contact the  Association  of  Shareware Profes-
          sionals for suggested language.

               Computer consultants  and hardware sellers are permitted
          to distribute the shareware version of  the Licensed Programs
          along with  their products and services so long as it is made
          clear to the end user that  the Licensed  Programs are share-
          ware and  that the  Licensor requires payment if the end user
          continues to use the Licensed Programs.  In no event  may the
          end user  be lead  or permitted  to believe that the fee paid
          for consulting, hardware or  software includes  the registra-
          tion fee required for the Licensed Programs.



               16.4      Site Licenses and Dealer Pricing


               For information concerning site licenses, please contact
          the Licensor.

               For information on dealer  pricing,  please  contact the
          Licensor.



               16.5      No Modifications Permitted


               In  no  event  is  any  person  permitted  to modify the
          Licensed Programs or any of the associated documentation.





                                         81





               16.6      Limitations on Warranties and Remedies


               The Licensor represents  that  many  users  have enjoyed
          using PAL  and certainly  hopes that you will, too.  However,
          the Licensor DOES NOT WARRANT THAT THE LICENSED  PROGRAMS ARE
          FIT FOR ANY PARTICULAR USE OR ARE MERCHANTABLE.  THE LICENSED
          PROGRAMS ARE NOT WARRANTED TO BE FREE OF  BUGS, NOR  ARE THEY
          PROVIDED WITH  ANY WARRANTY  OF ANY KIND, EITHER EXPRESSED OR
          IMPLIED.  IT IS YOUR RESPONSIBILITY TO DETERMINE  WHETHER THE
          LICENSED PROGRAMS  ARE SUITABLE  FOR YOU.   IN NO EVENT SHALL
          THE LICENSOR, ITS OWNERS  OR AGENTS  BE HELD  RESPONSIBLE FOR
          INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES, OR LOST DATA OR
          PROFITS TO ANY PERSON  OR  ENTITY THAT  MAY ARISE  OUT OF THE
          USE OF THE LICENSED PROGRAMS, EVEN IF THE POSSIBILITY OF SUCH
          DAMAGE HAS BEEN BROUGHT TO  THE  ATTENTION  OF  THE LICENSOR.
          RECOVERABLE DAMAGES IN ANY EVENT SHALL BE LIMITED TO NOT MORE
          THAN THE PRICE PAID FOR THE  LICENSED PROGRAMS  OR THE RETAIL
          PRICE OF SAME, WHICHEVER IS LESS.


































                                         82





                           Chapter 17:    REGISTRATION



               17.1      Shareware Version


               If  you  have  the  shareware  version  of  PAL, you are
          obliged to register the program and  pay the  required fee if
          you continue to use the program.

               Every time  you exit  the shareware  version of PAL, you
          view a screen which reminds you to register.   At  the bottom
          of your  screen, you  will see  two successive prompts asking
          whether you would like to print  out a  registration form and
          mailing envelope.   Make  sure your  printer is connected and
          turned on, then answer "Y" to each question.

               You will have the  following  three  options,  listed in
          increasing order of benefits and price:

                    1.   A  disk   of  the  latest  shareware  version:
          $3.00.  This choice does not  constitute registration  and is
          offered so  that you  or your  associates can  get the latest
          available shareware version.  The cost of the  shareware disk
          may be applied against a future full registration.

                    2.   A  disk  of  the  latest  commercial  version,
          without  printed   documentation,   but   with  documentation
          contained  in  a  disk  file  which  can  be  printed to your
          printer:  $35.00.  This choice  entitles you  to full support
          and notices of upgrades.

                    3.   A disk  of the latest commercial version, with
          binder and printed documentation:  $49.95.  This  choice also
          entitles you to full support and notices of upgrades.

               Fill out  the form, fold the envelope, insert your check
          and the completed registration  form into  the envelope, seal
          and stamp the envelope, then entrust the entire assemblage to
          the U.S. Post Office.

               We reserve the  right  to  change  prices  without prior
          notification.   If there  has been  a price increase, then we
          will communicate with you before processing  your order.   If
          there has  been a  price decrease, we will process your order
          immediately and rebate the excess.






                                         83





               17.2      Commercial Version


               We  recommend   that  you   register  your  commercially
          distributed version  of PAL.   In this way, we can inform you
          of updates and other pertinent  news.    Furthermore,  if you
          have  purchased  your  commercial  version from an authorized
          dealer rather than directly from PAL Software NY,  Inc., then
          you must register with us so that we know you are entitled to
          support.

               To obtain a registration  form,  enter  online  help and
          select the  choice for "registration".  As with the shareware
          version, you  will  be  presented  with  a  screen describing
          registration and  permitting you  to print out a registration
          form and envelope.   Follow the  instructions described above
          in section  17.1, except  do not  send a check unless you are
          ordering a shareware disk ($3.00)  which  you  might  wish to
          give to  a friend  or associate.   The  cost of the shareware
          disk can be applied to a subsequent commercial purchase.

































                                         84





                          Postscript:    SideKick Plus


               It has finally been  released!    After  many  months of
          anticipation, Borland  has completed  and commenced distribu-
          tion of its long-awaited enhancement to SideKick.

               What does this mean  to  you,  and  how  does  this news
          affect PAL?

               Well, if  you're using  PAL as a stand alone product, it
          probably doesn't make a whit of difference.

               If  you're  using  PAL  with  SideKick,  you're probably
          wondering whether  to pay the (expensive) freight and pick up
          SideKick Plus.  You should  be  aware  that  Borland  has an-
          nounced its  intentions that SideKick Plus is not necessarily
          a replacement for SideKick, but is  a brand  new product, and
          it is  anticipated that  the two products will coexist in the
          marketplace.  In fact,  Borland's documentation  for SideKick
          Plus clearly  contemplates that  the two products may coexist
          peacefully IN THE SAME COMPUTER!

               The following comments are  designed  to  assist  you in
          understanding the choices.

               As you  may know, SideKick Plus includes a complex array
          of features:  a  file  manager,  multiple  notepads, multiple
          outline  processors,   a  phonebook,  a  time  planner,  four
          calculators, and an ASCII table.  If all  of this flexibility
          is  important  to  you,  then  by  all  means  pay the piper.
          However, if  your  main  concern  is  the  difference between
          SideKick's  calendar  (enhanced  by  PAL) and SideKick Plus's
          time planner (not yet  enhanced by  PAL), then  you'll need a
          bit more information.

               What does SideKick Plus (without PAL) have that SideKick
          (with PAL) does not have?  Among other things:

                    *    More than 26 characters in the memo field
                    *    Optional notepad attaches to the calendar
                    *    Move and copy appointments
                    *    Dial the phone at pre-appointed time
                    *    "Paste" text at pre-appointed time
                    *    Search for a vacant time slot
                    *    Show graphic schedule of appointments
                    *    Change available time slots and resolution

               Although  SideKick   Plus's  time   planner  is  clearly
          superior  to  SideKick's  calendar, standing alone, there are
          several things that  you  might  miss  if  you  abandoned the
          SideKick-PAL combination:

                                         85






                    *    More flexible auto-repeat appointments
                    *    Easily obtain reports of upcoming appointments
                    *    Batch operation
                    *    To-do list (reminders)
                    *    Automatic snoozing of alarms (see 13.2.3)
                    *    Control sound of alarms
                    *    PAL's internal Appointment Scratchpad
                    *    Report and search on multiple files
                    *    Automatically show holidays

               As  a  final  note,  we  reproduce for you the text of a
          message left on the PAL Software  BBS shortly  after SideKick
          Plus became available:

               "Msg #  220  Dated 04-06-88 20:16:16
                From: xxx xxxxxx
                  To: ALL
                  Re: PAL SUPPORT FOR SIDEKICK+

               I just bought Sidekick Plus and have not been happy
               with the way it handles the calender. I much prefer
               how PAL  does it.  Will there be any new version of
               PAL to support the new sidekick files?"

               We are committed to upgrading future versions of  PAL to
          ensure that  they will  remain compatible with SideKick Plus.
          This will not involve the purchase of a new program  from us,
          just an  upgrade of  the existing PAL.  Registered users will
          receive notification of the availability of this upgrade.




                                 Acknowledgments

               The following are gratefully acknowledged:

               Borland International,  for their  great products (Side-
          Kick and Turbo Pascal).

               The Association of Shareware Professionals.

               TurboPower Software,  for their  wonderful collection of
          programming utilities for Turbo Pascal.

               Lester Penner, author of JCAL, a shareware program which
          was  instrumental  in  developing  the  dates used by PAL for
          Jewish holidays.  JCAL can be ordered for $15 from its author
          at 25  Shadow Lane, Great Neck, NY  11021.  Phone numbers are
          (516) 466-5574 evenings or (516) 273-3100 days.


                                         86





               Compuserve, onto which the  author logs  daily to confe-
          rence with IBM mavens and novices alike.

               PAL's beta test cadre, who are good at breaking things.

               Delia Tolz,  who has graciously put up with the author's
          fanaticism for PAL.














































                                         87





                                      Index

     Alarms  2, 5, 6, 8, 9, 10, 13, 15, 16, 20, 21, 31, 38, 50, 51,
                                                            52, 52, 53,
               54, 55, 56, 57, 58, 67, 71, 72, 73
     ALT-R  70
     ALT-S  69
     Appointment Scratchpad   1, 8, 10, 19, 20, 22, 25, 26, 27, 29, 31,
               31, 32, 33, 34, 35, 37, 38, 44, 45, 53, 54, 56,  58, 60,
               61, 62, 62
     Auto-repeat   15, 17,  20, 21, 24, 25, 28, 29, 30, 31, 33, 34, 35,
               35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 52, 55, 66
     AUTOEXEC.BAT  6, 20, 46, 48, 56
     Batch  2, 6, 10, 20, 46, 48, 51, 56
     CHKDSK  4, 75
     Clock  4, 5, 14, 73
     CLONE  6, 7, 8, 9, 11, 15, 17, 18, 19, 25, 31, 32, 39, 44, 49, 60,
               60, 61, 62, 63, 64, 65, 68, 69, 71, 74
     Color  6, 7, 14, 16, 17, 24, 65, 73
     Command Line   8,  9, 10,  12, 13, 18, 30, 46, 50, 56, 60, 61, 62,
               63, 65, 69, 71
     Date  4, 14, 16, 22, 28, 29, 30, 35, 36, 58, 73
     Delete  8, 9, 11, 15, 25, 32, 33, 34, 44, 45, 47, 48,  49, 53, 57,
               58, 66, 73
     DELETEAUTO  46
     DELETEAUTOALL  46
     Directory  4, 18, 62, 63
     DOS  4, 5, 6, 18, 62, 63, 65
     Edit  25, 32, 56, 57, 58
     Hard Disk  4
     Help  2, 8, 9, 11, 13, 21
     Images  69, 70, 71
     Install  4, 7, 53, 60, 65, 71
     License  80, 81, 82
     Memory  4, 14, 47
     Menu  2, 8, 9, 10, 11, 12, 25, 65
     Monochrome  6, 14, 17, 65, 66
     Multi-tasking  47, 48, 49
             76, 78
     Multiple Appointment Files  50, 51
     Nofile  19, 20, 62
     PALARM   2, 5,  6, 15, 52, 53, 54, 56, 58, 60, 67, 71, 72, 73, 74,
               75, 80
     Path  4, 5, 18, 58, 62, 63, 68
     Print  17, 20, 60, 61, 67
     Purge  8, 11, 15, 44, 45, 47, 48, 49, 57, 66
     PURGEAUTO  46
     READIMAGE  70
     Registration  79, 80, 81, 83, 84, 86
     Reminders  10, 15, 20, 21, 33, 37, 44, 46
     Repeat  15, 17, 20, 21, 24, 25, 28, 29,  30, 31,  33, 34,  35, 36,
               37, 38, 39, 40, 41, 42, 43, 44, 45, 52, 55, 66
     SAVEIMAGE  70
                                         88





     Scratchpad  8, 10, 19, 20, 22, 25, 26, 27, 29, 31, 32, 33, 34, 35,
               37, 38, 44, 45, 53, 54, 56, 58, 60, 61, 62
     Search  9, 10, 16, 22, 23, 24, 32, 33, 45, 63, 65
     Shareware  79, 80, 81, 83, 84
     SideKick  1, 2, 5, 6, 19, 22, 25, 28, 31, 32, 37, 42,  43, 45, 46,
               46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 58, 61, 62, 75
     SideKick Plus  85
     Site License  81
     Snooze  53, 58, 72, 73
     Subdirectory  4, 18, 62, 63, 68
     Support  79
     Task-switching  46, 47, 48, 49, 78









































                                         89


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1259

     Volume in drive A has no label
     Directory of A:\

    FILE1259 TXT      1162   1-13-89   3:11p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386   1-13-89   3:10p
    PAL2A    ARC    157158   6-24-88   2:01a
    PAL2B    ARC     31384   6-24-88   2:01a
    PAL2C    ARC     81533   6-24-88   2:01a
    PALINST  EXE     39840   6-24-88   2:01a
    PALREAD  ME       1465   6-24-88   2:01a
            8 file(s)     312966 bytes
                            5120 bytes free
